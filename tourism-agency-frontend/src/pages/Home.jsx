import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center">
            <h1>Turizm Agentligiga Xush Kelibsiz!</h1>
            <p>Eng yaxshi tur paketlarni toping va sayohatingizni rejalashtiring.</p>
            <Link to="/tours">
                <Button variant="primary">Turlarni Ko‘rish</Button>
            </Link>
        </Container>
    );
};

export default Home;
