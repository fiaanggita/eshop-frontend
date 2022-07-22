import React from "react";
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { Navigate } from 'react-router-dom';

const dummyProducts = [
    {
        id: 0,
        title: "Crush 1",
        price: 200000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/6645/6645731.png",
        quantity: 4,
    },
    {
        id: 1,
        title: "Crush 2",
        price: 2000000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/6645/6645755.png",
        quantity: 10,
    },
    {
        id: 2,
        title: "Crush 3",
        price: 20000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/6645/6645779.png",
        quantity: 20,
    },
    {
        id: 2,
        title: "Crush 4",
        price: 20000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/7592/7592169.png",
        quantity: 2,
    },
];


function Carts({ isLogedIn }) {

    if (!isLogedIn) {
        return (
            <Navigate to='/auth/login' replace />
        );
    }

    return (
        <Container>
            {dummyProducts.map((product) => (
                <CartItem key={product.id} item={product} />
            ))}
        </Container>
    );
}

export default Carts;