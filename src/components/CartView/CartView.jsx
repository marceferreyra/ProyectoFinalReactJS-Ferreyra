import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartContext/cartContext.jsx';
import CartItem from '../cartItem/cartItem.jsx';
import { Button } from 'antd';
import styles from './styles.module.css'

const CartView = () => {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, product) => total + (product.quantity || 1), 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
          <div>
            <Link to="/order">
              <Button className={styles.buy}>Ir a finalizr compra</Button>
            </Link>
            <Button className={styles.clearCart} onClick={() => removeAllFromCart()}>Vaciar carrito</Button>
          </div>
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default CartView;
