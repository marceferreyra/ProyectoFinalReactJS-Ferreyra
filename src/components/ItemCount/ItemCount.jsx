import React, { useState } from 'react';
import { Button } from 'antd';
import styles from './styles.module.css';

const ItemCount = ({ counter, setCounter, selectedProduct }) => {
  const decreaseCounter = () => {
    setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : 1));
  };

  const increaseCounter = () => {
    setCounter((prevCounter) =>
      prevCounter < (selectedProduct ? selectedProduct.stock : 0) ? prevCounter + 1 : prevCounter
    );
  };

  return (
    <div>
      <Button onClick={decreaseCounter} className={styles.decrease}>
        -
      </Button>
      <span>{counter}</span>
      <Button onClick={increaseCounter} className={styles.increase}>
        +
      </Button>
    </div>
  );
};

export default ItemCount;