import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <Container className="mt-5">
            <h2>Admin Paneli</h2>
            <ListGroup>
                <ListGroup.Item><Link to="/admin/tours">Turlar boshqaruvi</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/admin/bookings">Bronlash boshqaruvi</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/admin/payments">To‘lovlar boshqaruvi</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/admin/translations">Tarjima boshqaruvi</Link></ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default AdminDashboard;
