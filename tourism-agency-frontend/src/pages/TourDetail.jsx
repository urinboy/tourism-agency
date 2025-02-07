import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

const TourDetail = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        axios.get(`/api/tours/${id}`).then(response => setTour(response.data));
    }, [id]);

    if (!tour) return <p>Yuklanmoqda...</p>;

    return (
        <Container>
            <h1>{tour.title}</h1>
            <p>{tour.description}</p>
            <Button variant="success">Bron qilish</Button>
        </Container>
    );
};

export default TourDetail;
