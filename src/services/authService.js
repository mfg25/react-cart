import { onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './baas';
import React, { useEffect, createContext, useState, useContext } from 'react';



export const registerUser = async (email, password, username) => {
  try {
    // Cria o usuário com email e senha
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Atualiza o perfil do usuário para incluir o nome de usuário
    await updateProfile(user, {
      displayName: username,
    });

    console.log('Usuário cadastrado com sucesso:', user);
    return user; // Retorna o usuário com as informações atualizadas
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
    throw error; // Repassa o erro para tratamento
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('Login bem-sucedido:', user);

    return user; // Retorna o usuário autenticado
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    throw error; // Repassa o erro para tratamento
  }
};

const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está autenticado
        setUser(user);
      } else {
        // Usuário não está autenticado
        setUser(null);
      }
    });

    // Limpeza do ouvinte de estado de autenticação
    return () => unsubscribe();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};