import React, { useState } from 'react';
import { Card, Button } from 'antd';
import styles from './styles.module.css';
import Products from '../Catalogo/Catalogo.jsx';
import { useParams } from 'react-router-dom';
const { Meta } = Card;

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [contador, setContador] = useState(1);
  const decrementarContador = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
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
              width: 500,
            }}
            cover={<img alt={selectedProduct.product} src={selectedProduct.image} />}
          >
            <Meta title={selectedProduct.product} description={`Precio: $${selectedProduct.price}`} />
          </Card>
        ) : (
          <p>Producto no encontrado</p>
        )}
        <Card
          title="Card title"
          bordered={false}
          style={{
            width: 400,
          }}
        >
          <Button onClick={decrementarContador}>-</Button>
          <span>{contador}</span>
          <Button onClick={() => setContador(contador + 1)}>+</Button>
          <div>
            <Button>Comprar</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
