import React from 'react';
import styles from "./styles.module.css";
import Products from "../Catalogo/Catalogo.jsx";
import { Card } from 'antd';
const { Meta } = Card;



function ItemListContainer() {
    return (
        <div>
            <h1 className={styles.titulo}>Productos</h1> 
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.card}>
                {Products.map((producto) => (
                    <Card 
                        key={producto.id}
                        hoverable
                        style={{
                            width: 300,
                            margin: '10px',
                        }}
                        cover={<img alt={producto.product} src={producto.image} className={styles.cardImg}/>}
                    >
                        <Meta title={producto.product} description={`Precio: $${producto.price}`} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;