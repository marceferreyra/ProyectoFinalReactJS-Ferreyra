import React from 'react';
import styles from "./styles.module.css";
import Sogas from '../Item/Sogas';
import { Card } from 'antd';
const { Meta } = Card;



function SogasContainer() {
    return (
        <div>
            <h1 className={styles.titulo}>Mancuernas</h1> 
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.card}>
                {Sogas.map((producto) => (
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

export default SogasContainer;