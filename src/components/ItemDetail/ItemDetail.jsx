import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import styles from './styles.module.css';
import ItemCount from '../itemCount/itemCount.jsx';
import { useCart } from '../cartContext/cartContext.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/client.js';

const ItemDetail = ({ id }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    const getData = async () => {
      const productsRef = collection(db, 'products');
      const dataFiltered = await getDocs(productsRef);
      const data = dataFiltered.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const product = data.find((product) => product.id === id);

      if (product) {
        setSelectedProduct(product);
      } else {
        console.error('Producto no encontrado');
      }

      setLoading(false);
    };

    getData();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
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
          <Card
            hoverable
            style={{
              width: 400,
            }}
            cover={<img alt={selectedProduct.product} src={selectedProduct.image} style={{ height: 400 }} />}
          />
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

          <p>Stock disponible: {selectedProduct.stock}</p>

          <div>
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
