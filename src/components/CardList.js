import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

const dummyProducts = [
    {
        id: 0,
        title: "Pacar 1",
        price: 200000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/6645/6645731.png",
    },
    {
        id: 1,
        title: "Pacar 2",
        price: 2000000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/6645/6645755.png",
    },
    {
        id: 2,
        title: "Pacar 3",
        price: 20000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/6645/6645779.png",
    },
    {
        id: 2,
        title: "Pacar 4",
        price: 20000,
        description: "Lorem ipsum",
        image: "https://cdn-icons-png.flaticon.com/512/7592/7592169.png"
    },
];

function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            {dummyProducts.map((product) => (
                <Col key={product.id}>
                    <CardItem item={product} />
                </Col>
            ))}
        </Row>
    );
}

export default CardList;