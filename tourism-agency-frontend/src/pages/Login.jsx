import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/authSlice";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // .env dan o'qib olish

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const { data } = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
            dispatch(loginSuccess(data));
        } catch (err) {
            setError("Login xatosi: Email yoki parol noto‘g‘ri!");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <div style={{ width: "400px" }}>
                <h1 className="text-center">Kirish</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Parol</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary" className="w-100">
                        Kirish
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
