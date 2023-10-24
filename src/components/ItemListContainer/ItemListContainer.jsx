import React, { useState, useEffect } from 'react';
import Products from '../Catalogo/Catalogo.jsx';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const [categoryTitle, setCategoryTitle] = useState('Productos');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(Products);
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

            const filtered = id
                ? Products.filter((product) => product.category === id)
                : Products;
            setFilteredProducts(filtered);
        }, 500);
    }, [id]);

    return (
        <Item categoryTitle={categoryTitle} loading={loading} filteredProducts={filteredProducts} />
    )
}

export default ItemListContainer;


