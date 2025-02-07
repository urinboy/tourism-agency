import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/blog`)
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Container className="mt-5">
            <h2>Blog</h2>
            <Row>
                {posts.map((post) => (
                    <Col md={4} key={post.id} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.excerpt}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Blog;
