import React, { useState } from 'react';
import { Card, Button } from 'antd';
import styles from './styles.module.css';
import Products from '../Catalogo/Catalogo.jsx';
import { useParams } from 'react-router-dom';
const { Meta } = Card;

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [contador, setContador] = useState(1);
  const decreaseContador = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };

  const increaseContador = () => {
    contador < selectedProduct.stock ? setContador(contador + 1) : null;
  };


  const selectedProduct = Products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <h1 className={styles.titulo}></h1>
      <hr />
      <div className={styles.cardDetail}>
        {selectedProduct ? (
          <Card
            hoverable
            style={{
              width: 400,

            }}
            cover={<img alt={selectedProduct.product} src={selectedProduct.image} style={{
              height: 400
            }} />}
          >
            <Meta title={selectedProduct.product} description={`Precio: $${selectedProduct.price}`} />
          </Card>
        ) : (
          <p>Producto no encontrado</p>
        )}
        <Card 
          title={selectedProduct.description}
          bordered={false}
          style={{
            width: 400,
          }}
        >
          <div> <Button onClick={decreaseContador} className={styles.decrease} >-</Button>
            <span>{contador}</span>
            <Button onClick={increaseContador} className={styles.increase}>+</Button></div>

          <p>Stock disponible: {selectedProduct.stock}</p>

          <div>
            <Button>Comprar</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
