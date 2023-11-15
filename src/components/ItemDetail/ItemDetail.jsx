import React, { useEffect, useState } from 'react';
import { Card, Button, Image } from 'antd';
import styles from './styles.module.css';
import ItemCount from '../itemCount/itemCount.jsx';
import { useCart } from '../cartContext/cartContext.jsx';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client.js';

const ItemDetail = ({ id }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    const getData = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
          setSelectedProduct({
            id: snapshot.id,
            ...snapshot.data()
          });
        }
      } catch (error) {
      }

      setLoading(false);
    };

    getData();
  }, [id]);

  if (loading) {
    return <p className={styles.loading}>Cargando...</p>;
  }

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


          <Image className={styles.img} alt={selectedProduct.product} src={selectedProduct.image} style={{ height: 400 }} />

        ) : (
          <p>Producto no encontrado</p>
        )}
        <Card
          title={
            <div>
              <span style={{ whiteSpace: 'wrap' }}>{selectedProduct.description}</span>
            </div>
          }
          bordered={false}
          style={{
            width: 400,
          }}
        >
          <div>
            <span style={{ whiteSpace: 'wrap' }}>{`Precio: ${selectedProduct.price}`}</span>
            <ItemCount
              counter={counter}
              setCounter={setCounter}
              selectedProduct={selectedProduct}
            />
          </div>

          <span>Stock disponible: {selectedProduct.stock}</span>

          <div>
            <Button className={styles.buy} onClick={handleAddToCart}>Agregar al carrito</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
