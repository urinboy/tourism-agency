import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Container className="mt-5">
            <h2>Bog‘lanish</h2>
            {submitted && <Alert variant="success">Xabaringiz yuborildi!</Alert>}
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
                    <Form.Label>Xabar</Form.Label>
                    <Form.Control as="textarea" rows={4} name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Yuborish</Button>
            </Form>
        </Container>
    );
};

export default Contact;
