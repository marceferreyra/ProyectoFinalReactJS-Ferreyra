import React from 'react';
import styles from "./styles.module.css";
import BandasElasticas from "../Item/Item.jsx";
import { Card } from 'antd';
const { Meta } = Card;



function ItemListContainer() {
    return (
        <div>
            <h1 className={styles.titulo}>Bandas elásticas </h1> 
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {BandasElasticas.map((producto) => (
                    <Card 
                        key={producto.id}
                        hoverable
                        style={{
                            width: 300,
                            margin: '10px',
                        }}
                        cover={<img alt={producto.nombre} src={producto.image} className={styles.cardImg}/>}
                    >
                        <Meta title={producto.nombre} description={`Precio: $${producto.precio}`} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;