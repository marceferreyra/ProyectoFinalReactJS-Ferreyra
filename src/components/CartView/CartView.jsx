import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartContext/cartContext.jsx';
import CartItem from '../cartItem/cartItem.jsx';
import { Button } from 'antd';
import Swal from 'sweetalert2';
import styles from './styles.module.css'

const CartView = () => {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, product) => total + (product.quantity || 1), 0);
    setTotalQuantity(newTotalQuantity);

    const newTotalPrice = cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleRemoveAllFromCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Realmente quieres vaciar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar carrito',
      confirmButtonColor: '#000c43c9',
      cancelButtonText: 'Cancelar',
      cancelButtonColor:'#c9000c', 
      color: 'black',
      customClass: {
        confirmButton: 'btn-success', 
        cancelButton: 'btn-cancel',  
      },
    }).then((result) => {
      if (result.isConfirmed) {
        removeAllFromCart();
        Swal.fire({
          title: 'Carrito vaciado!!',
          icon: 'succsess',
          confirmButtonColor: '#000c43c9',
          color: 'black',
        });
      }
    });
  };

  return (
    <div>
      <h2 className={styles.titulo}>Carrito de Compras</h2>
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
            <div className={styles.total}>
              <p>Total: ${totalPrice}</p>
            </div>
            <div className={styles.cartButton}>
              <Link to="/order">
                <Button className={styles.buy}>Ir a finalizar compra</Button>
              </Link>
              <Button className={styles.clearCart} onClick={handleRemoveAllFromCart}>Vaciar carrito</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <p className={styles.p}>El carrito está vacío.</p>
          <Link to="/">
            <span><Button className={styles.buy}>Ver productos</Button></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartView;