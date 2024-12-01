import {React, useState, useEffect} from 'react';
import './MainUserPage.css';
import profilePicture from '../assets/pfp.png';
import { useAuth } from '../../services/authService';
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { handleProductSubmit } from '../../services/firestoreUploadService';
import { getInterestNotificationsByUser, getProductById, getUserProductsByUser, deleteNotification, getUserByUsername } from '../../services/firestoreDataService';

export const MainUserPage = (props) => {
    console.log(props.section)
    return (
        <main className='main-user-page'>
            <NavBar/>
            <Routes>
                <Route path="user" element={<UserSection />} />
                <Route path="notifications" element={<UserNotifications />} />
                <Route path="userProducts" element={<UserProducts />} />
            </Routes>
        </main>
    );
};

export const NavBar = () => {

    const {user, logout} = useAuth()
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logout(); // Chama a função de logout do contexto
        alert('Logout realizado com sucesso');
        navigate("/#")
      } catch (error) {
        alert('Erro ao realizar logout. Tente novamente.');
      }
    };

    if (!user) {
        return <div>Carregando...</div>; // Ou qualquer outro estado de carregamento
    }
    return (
        <section id='side-user-section'>
            <img src={profilePicture} alt='Profile' id='pfp-image'></img>
            <h2 >{user.displayName}</h2>
            <nav className='sidebar'>
                <ul>
                    <li><Link to="user"><p>Perfil</p></Link></li>
                    <li><Link to="notifications"><p>Notificações</p></Link></li>
                    <li><Link to="userProducts"><p>Meus produtos</p></Link></li>
                    <li onClick={handleLogout}><p>Sair</p></li>
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

export const UserNotifications = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]); // Estado para armazenar as notificações

  useEffect(() => {
    const fetchNotificationsAndProducts = async () => {
      const notificationsData = await getInterestNotificationsByUser(user.displayName);
      setNotifications(notificationsData);
  
      // Agora que as notificações estão carregadas, vamos buscar os produtos
      for (let notification of notificationsData) {
        const product = await getProductById(notification.productId);
        notification.productDetails = product;
      }
      console.log(notificationsData)
      setNotifications(notificationsData); // Atualiza o estado com os produtos
      setIsLoading(false);
    };
  
    fetchNotificationsAndProducts(); // Função que chama tudo
  }, [user]); // Depende do user, só dispara quando o user mudar
  
  const deleteNotificationHandler = async (notificationId) => {
    await deleteNotification(notificationId);
    // Após excluir a notificação, talvez seja necessário atualizar o estado ou a UI
    setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== notificationId));
  };

  const handleAccept = (phoneNumber) => {
    // Redireciona para o link do WhatsApp com o número de telefone
    const waLink = `https://wa.me/${phoneNumber}`;
    window.open(waLink, '_blank');
  };

  const acceptNotificationHandler = async (notificationId, interestedUser) => {
    let interestedUserData = await getUserByUsername(interestedUser)
    console.log(interestedUserData)
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === notificationId) {
        return {
          ...notification,
          isAccepted: true,
          phoneNumber: interestedUserData.phoneNumber,
        };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="content">
      <ul>
      {notifications.map((notification, index) => (
          <div id="notification-container">
            <li key={index}>
              {notification.isAccepted ? (
                <div id='contact-container'>
                  <p><strong>Telefone do interessado:</strong> {notification.phoneNumber}</p>
                  <button id="contact-button" onClick={() => handleAccept(notification.phoneNumber)}>Entrar em contato por Whatsapp</button>
                </div>
              ) : (
                <div id='notification-infos'>
                  <p>Parabéns! <strong>{notification.interestedUser}</strong> está interessado em <strong>{notification.productDetails.title}</strong>, deseja entrar em contato?</p>
                  <button id="accept-button" onClick={() => acceptNotificationHandler(notification.id, notification.interestedUser)}>✓</button>
                  <button id="reject-button" onClick={() => deleteNotificationHandler(notification.id)}>X</button>
                </div>
              )}
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

const UserProducts = () => {
    const { user } = useAuth(); // Supondo que useAuth fornece o estado do usuário
    const [isUserLoaded, setIsUserLoaded] = useState(false);

    const [products, setProducts] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
          setIsUserLoaded(true);
        }
      }, [user]);
    
    useEffect(() => {
        const fetchProducts = async () => {
          const productsData = await getUserProductsByUser(user.displayName);
          setProducts(productsData); // Atualiza o estado com os dados carregados
          setIsLoading(false); // Altera o estado para falso após o carregamento
        };
    
        fetchProducts();
      }, []);

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

      handleProductSubmit(title, description, image, user.displayName, category)

      console.log('Produto enviado:', { title, description, image, category });
  
      // Resete os campos e esconda o formulário após o envio
      setTitle('');
      setDescription('');
      setCategory('');
      setImage(null);
      setIsFormVisible(false);
    };

    if (!isUserLoaded) {
        return <div>Carregando...</div>; // Ou qualquer outro estado de carregamento
    }
  
    return (
    <section className='content'>
        <div className='grid-container'>
        {/* Exibição dos Produtos */}
        <div className='product-grid'>
          {products.length === 0 ? (
            <p>Não há produtos para exibir.</p>
          ) : (
            products.map((product, index) => (
              <div key={index} className='product-card'>
                <div id='image-container-card'>
                    <img src={product.imageUrl} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))
          )}
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
              <select name="pets" id="pet-select" onChange={(e) => setCategory(e.target.value)} required>
                <option value="" selected disabled>Escolha a categoria</option>
                <option value="instrumento">Instrumento</option>
                <option value="equipamento">Equipamento</option>
               </select> 
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
        </div>
        </div>
      </section>
    );
  };
