import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import Products from "../Catalogo/Catalogo.jsx";
import { Button, Card } from 'antd';
import { useParams } from 'react-router-dom';
const { Meta } = Card;

const Item = () => {
  const [products, setProducts] = useState(8);
  const { id } = useParams();

  useEffect(() => {
    setProducts(Products);
  },);
  [];

  const filteredProducts = id
    ? Products.filter(product => product.id === id)
    : Products;

  return (
    <div>
      <h1 className={styles.titulo}>Productos</h1>
      <hr />

      <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.card}>
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            hoverable
            style={{
              width: 300,
              margin: '10px',
            }}
            cover={<img alt={product.product} src={product.image} className={styles.cardImg} />}
          >
            <Meta title={product.product} description={`Precio: $${product.price}`} />
            <Button>Ver detalle</Button>
          </Card>
        ))}
      </div>

    </div>
  );
}



export default Item