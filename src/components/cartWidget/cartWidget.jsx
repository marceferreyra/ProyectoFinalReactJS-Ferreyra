import React from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from '../cartContext/cartContext.jsx'

export const CartWidget = () => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, product) => total + (product.quantity || 0), 0);

  const badgeStyle = {
    backgroundColor: 'rgb(253, 118, 40)',
    color: 'black',
    fontWeight: 'bold',
  };

  return (
    <Badge count={totalQuantity} style={badgeStyle}>
      <ShoppingCartOutlined style={{ fontSize: '35px' }} />
    </Badge>
  );
};

export default CartWidget;

