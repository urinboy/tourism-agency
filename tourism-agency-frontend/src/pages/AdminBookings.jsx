import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/bookings")
            .then(response => setBookings(response.data))
            .catch(error => console.error("Xatolik:", error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/bookings/${id}`)
            .then(() => setBookings(bookings.filter(booking => booking.id !== id)))
            .catch(error => console.error("O‘chirishda xatolik:", error));
    };

    return (
        <div className="container mt-4">
            <h2>Bronlashlarni boshqarish</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foydalanuvchi</th>
                        <th>Tur nomi</th>
                        <th>Sana</th>
                        <th>Harakat</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.user}</td>
                            <td>{booking.tour}</td>
                            <td>{booking.date}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(booking.id)}>O‘chirish</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminBookings;
