import { useEffect, useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/profile")
            .then(response => {
                setUser(response.data);
                setFormData({ name: response.data.name, email: response.data.email });
            })
            .catch(error => console.error("Ma'lumotlarni yuklashda xatolik:", error));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        axios.put("http://localhost:5000/api/auth/profile", formData)
            .then(response => {
                setUser(response.data);
                setEditMode(false);
            })
            .catch(error => console.error("Yangilashda xatolik:", error));
    };

    if (!user) {
        return <p>Ma’lumotlarni yuklash...</p>;
    }

    return (
        <Container className="mt-4">
            <Card className="p-4">
                <h2>Profil</h2>
                {editMode ? (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>Ism</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="success" onClick={handleSave}>
                            Saqlash
                        </Button>
                    </>
                ) : (
                    <>
                        <p><strong>Ism:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <Button variant="primary" onClick={() => setEditMode(true)}>
                            Tahrirlash
                        </Button>
                    </>
                )}
            </Card>
        </Container>
    );
};

export default Profile;
