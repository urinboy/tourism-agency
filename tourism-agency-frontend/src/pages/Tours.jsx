import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Tours = () => {
    const [tours, setTours] = useState([]); // Boshlang‘ich qiymat []

    useEffect(() => {
        axios.get("/api/tours")
            .then(response => {
                if (Array.isArray(response.data)) {
                    setTours(response.data); // Faqat massiv bo‘lsa, set qilish
                } else {
                    setTours([]); // Aks holda bo‘sh array
                }
            })
            .catch(error => {
                console.error("API xatolik:", error);
                setTours([]); // Xatolik bo‘lsa, bo‘sh arrayga o‘zgartiramiz
            });
    }, []);

    return (
        <Container>
            <h1>Tur Paketlari</h1>
            <Row>
                {tours.length > 0 ? (
                    tours.map(tour => (
                        <Col key={tour.id} md={4}>
                            <Card>
                                <Card.Img variant="top" src={tour.image} />
                                <Card.Body>
                                    <Card.Title>{tour.title}</Card.Title>
                                    <Card.Text>{tour.description}</Card.Text>
                                    <Link to={`/tours/${tour.id}`}>
                                        <Button variant="primary">Batafsil</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>Tur paketlari mavjud emas.</p>
                )}
            </Row>
        </Container>
    );
};

export default Tours;
