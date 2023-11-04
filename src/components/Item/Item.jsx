import React from 'react';
import styles from "./styles.module.css";
import { Card } from 'antd';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const Item = ({ categoryTitle, loading, filteredProducts }) => {
  return (
    <div>
      <h1 className={styles.titulo}>{categoryTitle}</h1>
      <hr />
      {loading ? (
        <div className={styles.spinnerContainer}>
          <Spinner animation="border" variant="dark" role="status">
          </Spinner>
          <span className={styles.loading}>Cargando...</span>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.card}>
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/item/${product.id}`} key={product.id} className={styles.link}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                    margin: '10px',
                  }}
                  cover={<img alt={product.product} src={product.image} className={styles.cardImg} />}
                >
                  <Meta title={product.title} description={`Precio: $${product.price}`} />
                </Card>
              </Link>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Item;

