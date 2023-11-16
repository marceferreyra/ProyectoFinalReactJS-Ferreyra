import React from 'react';
import { Button, Card } from 'antd';
import { Trash3 } from 'react-bootstrap-icons';
import styles from './styles.module.css';

const CartItem = ({ product, removeFromCart, addToCart, handleRemoveFromCart,  }) => {
  return (
    <Card>
    <div className={styles.cart} key={product.id}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.quantity}>
        <span>
          <Button className={styles.remove} onClick={() => removeFromCart(product, true)}>-</Button>
          {product.quantity || 1}
          <Button className={styles.add} onClick={() => addToCart({ ...product, quantity: 1 })}>+</Button>
        </span>
      </div>
      <div className={styles.price}>${product.price}</div>
      <div className={styles.subtotal}>Subtotal: ${product.price * (product.quantity || 1)}</div>
      <button className={styles.trash} onClick={() => handleRemoveFromCart(product)}>
        <Trash3 />
      </button>
    </div>
  </Card>
);
};

export default CartItem;
