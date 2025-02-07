import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const AdminPayments = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/payments")
            .then(response => setPayments(response.data))
            .catch(error => console.error("Xatolik:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>To‘lovlarni boshqarish</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foydalanuvchi</th>
                        <th>Miqdor</th>
                        <th>To‘lov usuli</th>
                        <th>Sana</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.user}</td>
                            <td>{payment.amount} UZS</td>
                            <td>{payment.method}</td>
                            <td>{payment.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AdminPayments;
