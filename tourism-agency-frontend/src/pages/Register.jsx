import { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        full_name: "", // Name o‘rniga full_name
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            navigate("/login");
        } catch (error) {
            setError("Ro‘yxatdan o‘tishda xatolik yuz berdi. Qayta urinib ko‘ring.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "400px" }} className="p-4">
                <h2 className="text-center">Ro‘yxatdan o‘tish</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>To'liq Ism</Form.Label>
                        <Form.Control
                            type="text"
                            name="full_name" // name o‘rniga full_name
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Parol</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="new-password"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Ro‘yxatdan o‘tish
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Register;
