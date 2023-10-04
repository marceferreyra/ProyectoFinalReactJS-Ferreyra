import React from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const CartWidget = () => {
  const badgeStyle = {
    backgroundColor: "rgb(253, 118, 40)",
    color: "black", 
    fontWeight: "bold",       
  };

  return (
    <Badge count={5} style={badgeStyle}>
      <ShoppingCartOutlined style={{ fontSize: "35px" }} />
    </Badge>
  );
};

export default CartWidget;
 
