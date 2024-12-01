import {React, useState} from 'react';
import './MainUserPage.css';
import profilePicture from '../assets/pfp.png';
import { useAuth } from '../../services/authService';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { handleProductSubmit } from '../../services/uploadService';

export const MainUserPage = (props) => {
    console.log(props.section)
    return (
        <main className='main-user-page'>
            <NavBar/>
            <Routes>
                <Route path="user" element={<UserSection />} />
                <Route path="userProducts" element={<UserProducts />} />
            </Routes>
        </main>
    );
};

export const NavBar = () => {

    const {user} = useAuth()

    return (
        <section id='side-user-section'>
            <img src={profilePicture} alt='Profile' id='pfp-image'></img>
            <h2 >{user.displayName}</h2>
            <nav className='sidebar'>
                <ul>
                    <li><Link to="user"><p>Perfil</p></Link></li>
                    <li><Link to="notifications"><p>Notificações</p></Link></li>
                    <li><Link to="userProducts"><p>Meus produtos</p></Link></li>
                </ul>
            </nav>
        </section>
    );
};

export const UserSection = () => {
    return (
        <section className='content'>
            user section
        </section>
    );
};


const UserProducts = () => {
    const {user} = useAuth()
    
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
  
    const handleFormVisibility = () => {
      setIsFormVisible(true);
    };
  
    const handleImageUpload = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title || !description || !image) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      handleProductSubmit(title, description, image, user.displayName)

      console.log('Produto enviado:', { title, description, image });
  
      // Resete os campos e esconda o formulário após o envio
      setTitle('');
      setDescription('');
      setImage(null);
      setIsFormVisible(false);
    };
  
    return (
    <section className='content'>
        {/* Botão para abrir o formulário */}
        {!isFormVisible && (
          <button onClick={handleFormVisibility} id="add-product-button">
            Adicionar Produto
          </button>
        )}
  
        {/* Formulário de upload */}
        {isFormVisible && (
          <form onSubmit={handleSubmit} className="upload-form">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o título do produto"
                required
              />
              <textarea
                id="description"
                value={description}
                maxlength="200"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite a descrição do produto"
                required
              ></textarea>
              <div>
                <label htmlFor="imageUpload">Imagem:</label>
                <input
                    type="file"
                    id="imageUpload"
                    onChange={handleImageUpload}
                    accept="image/*"
                    required
                />
              </div>
            <button type="submit">Enviar Produto</button>
          </form>
        )}
      </section>
    );
  };
