import React from 'react';
import { Card, Button } from 'antd';
import styles from './styles.module.css';
import { useCart } from '../cartContext/cartContext.jsx'


const ItemDetail = ({ selectedProduct, counter, decreaseCounter, increaseCounter }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (counter > 0) {
     
      addToCart({ ...selectedProduct, quantity: counter });
    }
  };

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
            cover={<img alt={selectedProduct.product} src={selectedProduct.image} style={{ height: 400 }} />}
          />
        ) : (
          <p>Producto no encontrado</p>
        )}
        <Card
          title={<div>
            <span style={{ whiteSpace: 'wrap' }}>{selectedProduct.description}</span>
          </div>}
          bordered={false}
          style={{
            width: 400,
          }}
        >
          <div>
            <span style={{ whiteSpace: 'wrap' }}>{`Precio: ${selectedProduct.price}`}</span>
            <Button onClick={decreaseCounter} className={styles.decrease}>-</Button>
            <span>{counter}</span>
            <Button onClick={increaseCounter} className={styles.increase}>+</Button>
          </div>

          <p>Stock disponible: {selectedProduct.stock}</p>

          <div>
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;