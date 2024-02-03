import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';


const BlogList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/blogs/all")
            .then(response => {
                let blogs = response.data.blogs
                setPosts(blogs)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);


    let card = []
    return (
        <Container className="mt-3">
            {posts.map((post, index) => (
                cardComponent(post, card, index)
            ))}
        </Container>
    );
}

let cardComponent = (post, card, index) => {
    card.push(<Col md={4} key={post.id}>
        <Card key={post.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{post.id} {post.title}</Card.Title>
                <Card.Text>
                    {post.content.substr(0, 100)}...
                </Card.Text>
                <Button as={Link} to={`/blog-read?id=${post.id}`} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </Col>);
    
    let data = (card.length === 3) ? <> <Row key={index}>{card}</Row> </> : null;
    return data;
}
export default BlogList;