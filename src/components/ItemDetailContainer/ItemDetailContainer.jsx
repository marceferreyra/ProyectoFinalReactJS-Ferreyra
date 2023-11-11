import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();

  return <ItemDetail id={id} />;
};

export default ItemDetailContainer;

