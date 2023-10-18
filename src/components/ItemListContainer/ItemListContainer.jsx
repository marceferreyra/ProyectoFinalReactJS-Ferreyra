import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import Products from "../Catalogo/Catalogo.jsx";
import { Card } from 'antd';
import Spinner from 'react-bootstrap/Spinner';
const { Meta } = Card;



function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(Products);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div>
            <h1 className={styles.titulo}>Productos</h1>
            <hr />
            {loading ? (
                <div className={styles.spinnerContainer}>
                    <Spinner animation="border" variant="dark" role="status">
                    </Spinner>
                    <span className= {styles.loading}>Cargando...</span>
                </div>

            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.card}>
                    {products.map((producto) => (
                        <Card
                            key={producto.id}
                            hoverable
                            style={{
                                width: 300,
                                margin: '10px',
                            }}
                            cover={<img alt={producto.product} src={producto.image} className={styles.cardImg} />}
                        >
                            <Meta title={producto.product} description={`Precio: $${producto.price}`} />
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;