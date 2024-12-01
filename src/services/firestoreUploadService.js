import { storage, db } from './baas';
import { collection, addDoc } from 'firebase/firestore';

export const handleProductSubmit = async (title, description, image, username, category) => {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // Obtenha a URL da imagem
      const imageUrl = data.data.url;

      // Agora, salva as informações do produto no Firestore
      await addDoc(collection(db, 'products'), {
        title,
        description,
        imageUrl: imageUrl,
        username,
        category
      });

      console.log('Produto enviado com sucesso!');
    } else {
      console.error('Erro ao fazer upload da imagem');
    }
  } catch (error) {
    console.error('Erro ao enviar produto:', error);
  }
};

export const handleInterestSubmit = async (interestedUser, productOwner, productId) => {
      // Agora, salva as informações do produto no Firestore
      await addDoc(collection(db, 'interestNotification'), {
        interestedUser,
        productOwner,
        productId,
      });

      console.log('Produto enviado com sucesso!');
};