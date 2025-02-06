import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      const response = await axios.get(`/api/tours/${id}`);
      setTour(response.data.tour);
    };

    fetchTour();
  }, [id]);

  return (
    <Container>
      {tour && (
        <Card>
          <Card.Body>
            <Card.Title>{tour.name}</Card.Title>
            <Card.Text>{tour.description}</Card.Text>
            <Card.Text>Price: ${tour.price}</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default TourDetails;