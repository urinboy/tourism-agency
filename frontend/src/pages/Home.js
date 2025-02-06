import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTours } from '../../../tourism-agency-frontend/src/redux/slices/tourSlice';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tour.tours);

  useEffect(() => {
    const fetchTours = async () => {
      const response = await axios.get('/api/tours');
      dispatch(setTours(response.data.tours));
    };

    fetchTours();
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {tours.map((tour) => (
          <Col key={tour.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{tour.name}</Card.Title>
                <Card.Text>{tour.description}</Card.Text>
                <Button as={Link} to={`/tour/${tour.id}`} variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;