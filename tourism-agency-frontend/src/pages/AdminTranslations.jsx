import { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import axios from "axios";

const AdminTranslations = () => {
    const [translations, setTranslations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/translations")
            .then(response => setTranslations(response.data))
            .catch(error => console.error("Xatolik:", error));
    }, []);

    const handleUpdate = (id, value) => {
        axios.put(`http://localhost:5000/api/translations/${id}`, { value })
            .then(() => {
                setTranslations(translations.map(tr => tr.id === id ? { ...tr, value } : tr));
            })
            .catch(error => console.error("Yangilashda xatolik:", error));
    };

    return (
        <div className="container mt-4">
            <h2>Tarjimalarni boshqarish</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Kalit</th>
                        <th>Tarjima</th>
                        <th>Harakat</th>
                    </tr>
                </thead>
                <tbody>
                    {translations.map((tr) => (
                        <tr key={tr.id}>
                            <td>{tr.id}</td>
                            <td>{tr.key}</td>
                            <td>
                                <Form.Control
                                    type="text"
                                    value={tr.value}
                                    onChange={(e) => handleUpdate(tr.id, e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminTranslations;
