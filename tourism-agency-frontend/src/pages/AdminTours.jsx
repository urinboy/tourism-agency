import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";

const AdminTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/tours`)
            .then(response => setTours(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Container className="mt-5">
            <h2>Turlar boshqaruvi</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nomi</th>
                        <th>Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((tour) => (
                        <tr key={tour.id}>
                            <td>{tour.id}</td>
                            <td>{tour.name}</td>
                            <td><Button variant="danger">O‘chirish</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminTours;
