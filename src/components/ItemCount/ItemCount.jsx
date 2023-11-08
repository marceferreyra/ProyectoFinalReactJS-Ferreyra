import React, { useState } from "react";
import { Button } from "antd";
import styles from './styles.module.css';

const ItemCount = ({ selectedProduct }) => {
    const [counter, setCounter] = useState(1); 

    const decreaseCounter = () => {
      counter > 1 ? setCounter(counter - 1) : setCounter(1);
    };
  
    const increaseCounter = () => {
      counter < (selectedProduct ? selectedProduct.stock : 0) ? setCounter(counter + 1) : null;
    };
  
    return (
      <div>
        <Button onClick={decreaseCounter} className={styles.decrease}>-</Button>
        <span>{counter}</span>
        <Button onClick={increaseCounter} className={styles.increase}>+</Button>
      </div>
    );
};

export default ItemCount;