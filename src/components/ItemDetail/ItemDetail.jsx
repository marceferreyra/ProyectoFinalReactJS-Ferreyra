import React from 'react';
import { Card, Button } from 'antd';
import styles from './styles.module.css';
const { Meta } = Card;


const ItemDetail = ({ selectedProduct, contador, decreaseContador, increaseContador }) => {
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
          >
            <Meta title={selectedProduct.title} description={`Precio: $${selectedProduct.price}`} />
          </Card>
        ) : (
          <p>Producto no encontrado</p>
        )}
        <Card
          title={<span style={{ whiteSpace: 'wrap' }}>{selectedProduct.description}</span>}
          bordered={false}
          style={{
            width: 400,
          }}
        >
          <div>
            <Button onClick={decreaseContador} className={styles.decrease}>-</Button>
            <span>{contador}</span>
            <Button onClick={increaseContador} className={styles.increase}>+</Button>
          </div>

          <p>Stock disponible: {selectedProduct.stock}</p>

          <div>
            <Button>Comprar</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;