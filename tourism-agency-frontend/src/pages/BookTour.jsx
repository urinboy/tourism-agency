import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const BookTour = () => {
    const [formData, setFormData] = useState({ name: "", email: "", date: "", guests: 1 });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Sizning broningiz muvaffaqiyatli amalga oshirildi!");
    };

    return (
        <Container className="mt-5">
            <h2>Tur bron qilish</h2>
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Ism</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sayohat sanasi</Form.Label>
                    <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mehmonlar soni</Form.Label>
                    <Form.Control type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Bron qilish</Button>
            </Form>
        </Container>
    );
};

export default BookTour;
