import React, { useEffect, useState } from 'react';
import { useCart } from '../CartContext/CartContext.jsx';
import styles from './styles.module.css';
import { Button } from 'antd';
import { Trash3 } from 'react-bootstrap-icons';

const CartView = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
        const newTotalQuantity = cart.reduce((total, product) => total + (product.quantity || 0), 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <div className={styles.cart} key={product.id}>
              <div className={styles.image}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.title}>{product.title}</div>
              <div className={styles.quantity}>
                <span>
                  <Button onClick={() => product.quantity > 1 && removeFromCart(product)}>-</Button>
                  {product.quantity || 0}
                  <Button onClick={() => product.quantity < product.stock && addToCart(product)}>+</Button>
                </span>
              </div>
              <div className={styles.price}>${product.price}</div>
              <div className={styles.subtotal}>Subtotal: ${product.price * (product.quantity || 1)}</div>
              <Trash3 />
            </div>
          ))}
          <div>
            <Button className={styles.buy}>Finalizar Compra</Button>
            <Button className={styles.clearCart}>Vaciar carrito</Button>
          </div>
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default CartView;