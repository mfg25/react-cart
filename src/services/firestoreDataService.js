import { storage, db } from './baas';
import { collection, getDocs, doc, deleteDoc,  getFirestore, query, where } from 'firebase/firestore';

export const getUserProducts = async () => {
    try {
        // Referência para a coleção 'products'
        const productsRef = collection(db, 'products');
        
        // Obtendo todos os documentos da coleção
        const querySnapshot = await getDocs(productsRef);
        
        // Processando os dados
        let products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return products; // Retorna os produtos obtidos
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
};

export const getUserProductsByUser = async (username) => {
    let products = await getUserProducts()
    
    products = products.filter((product) => product.username == username);
    return products; 
};

export const getUserProductsByCategory = async (category) => {     
    let products = await getUserProducts()
    products = products.filter((product) => product.category == category);
    return products; 
};

export const getProductById = async (id) => {
  let products = await getUserProducts()
  let product = products.filter((product) => product.id == id);
  return product[0]; 
};

export const getInterestNotificationsByUser = async (username) => {
  const interestNotification = collection(db, 'interestNotification');
        
        // Obtendo todos os documentos da coleção
  const querySnapshot = await getDocs(interestNotification);
        
        // Processando os dados
  let products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  let notifications = products.filter((not) => not.productOwner == username);
  return notifications; 
};

export const deleteNotification = async (notificationId) => {
  try {
    // Obtém a referência do documento
    const interestNotification = doc(db, "interestNotification", notificationId); // "notifications" é o nome da coleção onde estão as notificações

    // Deleta o documento
    await deleteDoc(interestNotification);

    console.log("Notificação apagada com sucesso");
  } catch (error) {
    console.error("Erro ao apagar notificação:", error);
  }
};

// Função para buscar usuário pelo username
export const getUserByUsername = async (username) => {
  try {
    // Obter instância do Firestore
    const db = getFirestore();
    
    // Referência à coleção de usuários
    const usersCollection = collection(db, 'users'); // Supondo que a coleção se chama 'users'
    
    // Criar consulta para buscar o usuário pelo username
    const q = query(usersCollection, where('username', '==', username));
    
    // Executar a consulta
    const querySnapshot = await getDocs(q);
    
    // Verificar se o usuário foi encontrado
    if (!querySnapshot.empty) {
      // Retornar o primeiro usuário encontrado
      const userDoc = querySnapshot.docs[0];
      return userDoc.data(); // Retorna os dados do usuário
    } else {
      console.log('Usuário não encontrado');
      return null; // Caso o usuário não seja encontrado
    }
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error; // Propaga o erro caso algo aconteça
  }
};
