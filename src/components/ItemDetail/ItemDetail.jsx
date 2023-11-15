import React, { useState, useEffect } from 'react';
import Item from '../item/item.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/client.js';

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [categoryTitle, setCategoryTitle] = useState('Productos');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const productsRef = collection(db, 'products');
        let queryRef = productsRef;

        if (id) {
          queryRef = query(queryRef, where('categoryId', '==', id));
        }

        queryRef = query(queryRef, orderBy('categoryId'));

        const querySnapshot = await getDocs(queryRef);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

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
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  return (
    <Item categoryTitle={categoryTitle} loading={loading} filteredProducts={filteredProducts} />
  );
};

export default ItemList;
