import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className="sidebar bg-dark text-white p-3">
            <h4 className="text-center">Admin Panel</h4>
            <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark border-0">
                    <Link to="/admin/dashboard" className="text-white text-decoration-none">Dashboard</Link>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark border-0">
                    <Link to="/admin/tours" className="text-white text-decoration-none">Turlar boshqaruvi</Link>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark border-0">
                    <Link to="/admin/bookings" className="text-white text-decoration-none">Bronlash boshqaruvi</Link>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark border-0">
                    <Link to="/admin/payments" className="text-white text-decoration-none">To‘lovlar boshqaruvi</Link>
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark border-0">
                    <Link to="/admin/translations" className="text-white text-decoration-none">Tarjima boshqaruvi</Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;
