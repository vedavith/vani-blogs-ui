import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';

const BlogReader = () => {
    const [post, setPost] = useState([]);
    const [params, setParams] = useSearchParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/blog/${params.get('id')}/get`)
            .then(response => {
                console.log(response.data.blog)
                setPost(response.data.blog)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return(
        <Container>
            <Row key={`CardImage${post.id}`}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            </Row>
            <Row key={`BlogHeader${post.id}`}>
                <h1> {post.title} </h1>
            </Row>
            <Row key={`BlogContent${post.id}`}>
                <p> {post.content} </p>
            </Row>
        </Container>
    );

}

export default BlogReader;
