import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { db } from '../../firebase/client.js'; 
import { collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log("ID del producto:", id);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contador, setContador] = useState(1);

  const decreaseContador = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };

  const increaseContador = () => {
    contador < (selectedProduct ? selectedProduct.stock : 0) ? setContador(contador + 1) : null;
  };

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!selectedProduct) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <ItemDetail
      selectedProduct={selectedProduct}
      contador={contador}
      decreaseContador={decreaseContador}
      increaseContador={increaseContador}
    />
  );
};

export default ItemDetailContainer;
