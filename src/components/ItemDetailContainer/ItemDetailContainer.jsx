import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import Products from '../Catalogo/Catalogo.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [contador, setContador] = useState(1);

  const decreaseContador = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };

  const increaseContador = () => {
    contador < (selectedProduct ? selectedProduct.stock : 0) ? setContador(contador + 1) : null;
  };

  const selectedProduct = Products.find((product) => product.id === parseInt(id));

  return (
    selectedProduct ? ( 
      <ItemDetail
        selectedProduct={selectedProduct}
        contador={contador}
        decreaseContador={decreaseContador}
        increaseContador={increaseContador}
      />
    ) : (
      <p>Producto no encontrado</p>
    )
  );
};

export default ItemDetailContainer;
