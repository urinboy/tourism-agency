import { Container, Card, Row, Col } from "react-bootstrap";

const Services = () => {
    const services = [
        { title: "Sayohat rejalari", desc: "Eng yaxshi tur paketlarini taklif qilamiz." },
        { title: "Viza xizmati", desc: "Viza olish jarayonida yordam beramiz." },
        { title: "Transport xizmati", desc: "Eng qulay transport xizmatlarini taklif qilamiz." }
    ];

    return (
        <Container>
            <h1>Xizmatlarimiz</h1>
            <Row>
                {services.map((service, idx) => (
                    <Col key={idx} md={4}>
                        <Card className="p-3">
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.desc}</Card.Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;
