import React, { useState } from 'react';
import { useCart } from '../cartContext/cartContext.jsx';
import styles from './styles.module.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Form, Input, Button, Card } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const OrderItem = () => {
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
                })),
                total: calculateTotal(),
            };

            const db = getFirestore();
            const refOrder = collection(db, "orders");
            const docRef = await addDoc(refOrder, order);

            console.log("Order ID:", docRef.id);

            removeAllFromCart();

            setOrderPlaced(true);

            Swal.fire({
                title: '¡Compra realizada!',
                text: `Tu orden ha sido procesada con éxito. ID de orden: ${docRef.id}`,
                icon: 'success',
            });
        } catch (error) {
            console.error('Error al enviar la orden:', error);
        }
    };

    return (
        <div>
            <h2>Detalle de la Compra</h2>
            {orderPlaced ? (
                <Link to="/">
                    <Button >Seguir comprando</Button>
                </Link>) : (
                <>
                    <div className={styles.order}>
                        {cart.map((product) => (
                            <div className= {styles.orderItem}>
                                <Card key={product.id}>
                                <div className={styles.cart}>
                                    <div className={styles.image}>
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className={styles.title}>{product.title}</div>
                                    <div className={styles.quantity}>
                                        <span>{product.quantity || 1}</span>
                                    </div>
                                    <div className={styles.price}>${product.price}</div>
                                    <div className={styles.subtotal}>Subtotal: ${product.price * (product.quantity || 1)}</div>
                                </div>
                            </Card>
                            </div>
                            
                        ))}
                        <div className={styles.total}>
                            <strong>Total: ${calculateTotal()}</strong>
                        </div>
                        <Card><Form form={form} layout="vertical">
                            <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}>
                                <Input style={{ width: 600 }} />
                            </Form.Item>
                            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Por favor, ingresa tu email' }]}>
                                <Input type="email" style={{ width: 600 }} />
                            </Form.Item>
                            <Form.Item label="Teléfono" name="phone" rules={[{ required: true, message: 'Por favor, ingresa tu número de teléfono' }]}>
                                <Input style={{ width: 600 }} />
                            </Form.Item>
                            <Form.Item label="Notas" name="notes">
                                <Input.TextArea style={{ width: 600 }} />
                            </Form.Item>

                            <Button className={styles.buy} type="primary" htmlType="submit" onClick={sendOrder}>
                                Finalizar compra
                            </Button>
                        </Form></Card></div>
                </>
            )}
        </div>
    );
};

export default OrderItem;
