import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { db } from '../../firebase/client.js';
import { collection, getDocs } from 'firebase/firestore';
import { useCart } from '../CartContext/CartContext.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);
  const { addToCart } = useCart();

  const decreaseCounter = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1);
  };

  const increaseCounter = () => {
    
    counter < (selectedProduct ? selectedProduct.stock : 0) ? setCounter(counter + 1) : null;
   
  };

  useEffect(() => {
    const getData = async () => {
      const productsRef = collection(db, 'products');
      const dataFiltered = await getDocs(productsRef);
      const data = dataFiltered.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const product = data.find((product) => product.id === id);

      if (product) {
        setSelectedProduct(product);
      } else {
        console.error('Producto no encontrado');
      }

      setLoading(false);
    };

    getData();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <ItemDetail
      selectedProduct={selectedProduct}
      counter={counter}
      decreaseCounter={decreaseCounter}
      increaseCounter={increaseCounter}
      addToCart={addToCart}
    />
  );
};

export default ItemDetailContainer;
