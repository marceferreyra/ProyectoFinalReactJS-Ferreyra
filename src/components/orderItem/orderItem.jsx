import React, { useState } from 'react';
import styles from './styles.module.css';
import { Form, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const OrderItem = ({ orderPlaced, sendOrder, cart, form, calculateTotal }) => {

    return (
        <div>

            <h2 className={styles.titulo}>{orderPlaced ? 'Gracias por su compra!!' : 'Detalle de la Compra'}</h2>
            {orderPlaced ? (
                <div className={styles.orderPlaced}><Link to="/">
                    <Button className={styles.buy}>Seguir comprando</Button>
                </Link></div>
            ) : (
                <>
                    <div className={styles.container}>
                        <div className={styles.orderContainer}>
                            {cart.map((product) => (
                                <div key={product.id} className={styles.cartItem}>
                                    <Card>
                                        <div className={styles.cart}>
                                            <div className={styles.image}>
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className={styles.title}>{product.title}</div>
                                            <div className={styles.quantity}>
                                                <span>{product.quantity || 1}</span>
                                            </div>
                                            <div className={styles.price}>${product.price}</div>
                                            <div className={styles.subtotal}>
                                                Subtotal: ${product.price * (product.quantity || 1)}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}

                            {cart.length > 0 && (
                                <div className={styles.total}>
                                    <strong>Total: ${calculateTotal()}</strong>
                                </div>
                            )}
                        </div>

                        <div className={styles.formContainer}>
                            <Card>
                                <Form form={form} layout="vertical">
                                    <Form.Item
                                        label="Nombre y apellido"
                                        name="name"
                                        rules={[
                                            { required: true, message: 'Por favor, ingresa tu nombre' }]}                                    >
                                        <Input style={{ width: 600 }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Por favor, ingresa tu email' }
                                        ]}>
                                        <Input type="email" style={{ width: 600 }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Teléfono"
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, ingresa tu número de teléfono'
                                            }
                                        ]}
                                    >
                                        <Input style={{ width: 600 }} />
                                    </Form.Item>
                                    <Form.Item label="Notas" name="notes">
                                        <Input.TextArea style={{ width: 600 }} />
                                    </Form.Item>

                                    <Button
                                        className={styles.buy}
                                        htmlType="submit"
                                        onClick={sendOrder}
                                    >
                                        Finalizar compra
                                    </Button>
                                </Form>
                            </Card>
                        </div>

                    </div>
                </>
            )}
        </div>
    );
};

export default OrderItem;
