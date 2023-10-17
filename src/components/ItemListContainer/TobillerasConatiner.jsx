import React from 'react';
import styles from "./styles.module.css";
import Tobilleras from '../Item/Tobilleras';
import { Card } from 'antd';
const { Meta } = Card;



function TobillerasContainer() {
    return (
        <div>
            <h1 className={styles.titulo}>Tobilleras</h1> 
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className={styles.card}>
                {Tobilleras.map((producto) => (
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

export default TobillerasContainer;