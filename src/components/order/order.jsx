import React, { useState } from 'react';
import { useCart } from '../cartContext/cartContext.jsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Form } from 'antd';
import Swal from 'sweetalert2';
import OrderItem from '../orderItem/orderItem.jsx';


const Order = () => {
    const { cart, removeAllFromCart } = useCart();
    const [form] = Form.useForm();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
    };

    const sendOrder = async () => {
        try {
            await form.validateFields();
            const values = form.getFieldsValue();

            const order = {
                buyer: {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    notes: values.notes || "",
                },
                items: cart.map(product => ({
                    id: product.id,
                    title: product.title,
                    quantity: product.quantity || 1,
                    price: product.price,
                    category: product.categoryId
                })),
                total: calculateTotal(),
            };

            const db = getFirestore();
            const refOrder = collection(db, "orders");
            const docRef = await addDoc(refOrder, order);

            removeAllFromCart();

            setOrderPlaced(true);

            Swal.fire({
                title: '¡Compra realizada!',
                text: `Tu orden ha sido procesada con éxito. ID de orden: ${docRef.id}`,
                icon: 'success',
                confirmButtonColor: '#000c43c9',
                color: "black"
            });
        } catch (error) {

        }
    }
    return (
        <OrderItem orderPlaced={orderPlaced} sendOrder={sendOrder} removeAllFromCart={removeAllFromCart} cart={cart} form={form} calculateTotal={calculateTotal} />
    )
}

export default Order