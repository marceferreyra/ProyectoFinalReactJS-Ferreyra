import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Products from '../Catalogo/Catalogo.jsx';
import { Card } from 'antd';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useParams } from 'react-router-dom';
const { Meta } = Card;

function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoria } = useParams();
    const [categoryTitle, setCategoryTitle] = useState('Productos');

    useEffect(() => {
        setTimeout(() => {
            setProducts(Products);
            setLoading(false);

            const categoryTitles = {
                'bandas-elasticas': 'Bandas Elásticas',
                'colchonetas': 'Colchonetas',
                'mancuernas': 'Mancuernas',
                'tobilleras': 'Tobilleras',
                'sogas': 'Sogas',
                'guantes': 'Guantes',
            };

            setCategoryTitle(categoria ? categoryTitles[categoria] || 'Productos' : 'Productos');
        }, );
    }, [categoria]);

    const filteredProducts = categoria
        ? Products.filter((product) => product.category === categoria)
        : Products;

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
                    {filteredProducts.map((product) => (
                        <Link to={`/item/${product.id}`} key={product.id} className={styles.link}>
                            <Card
                                hoverable
                                style={{
                                    width: 300,
                                    margin: '10px',
                                }}
                                cover={<img alt={product.product} src={product.image} className={styles.cardImg} />}
                            >
                                <Meta title={product.product} description={`Precio: $${product.price}`} />
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;
