import React, { useState, useEffect } from 'react';
import Item from '../item/item.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/client.js';

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [categoryTitle, setCategoryTitle] = useState('Productos');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    const productsRef = collection(db, 'products');
    const dataFiltered = await getDocs(productsRef);
    const data = dataFiltered.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();

      if (data) {
        setProducts(data);
        setLoading(false);

        const categoryTitles = {
          'bandas-elasticas': 'Bandas Elásticas',
          'colchonetas': 'Colchonetas',
          'mancuernas': 'Mancuernas',
          'tobilleras': 'Tobilleras',
          'sogas': 'Sogas',
          'guantes': 'Guantes',
        };

        setCategoryTitle(id ? categoryTitles[id] || 'Productos' : 'Productos');

        const filtered = id ? data.filter((product) => product.categoryId === id) : data;
        setFilteredProducts(filtered);
      } else {
        console.error('Error al obtener los productos.');
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  return (
    <Item categoryTitle={categoryTitle} loading={loading} filteredProducts={filteredProducts} />
  );
}

export default ItemList;
