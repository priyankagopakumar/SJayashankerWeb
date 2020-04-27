import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Media} from 'reactstrap';
import {Row, Col} from 'reactstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import '../styles/books.css';

class BookList extends Component {
    state = {
        books: [
            {
              id: "5e925f0fe8afa11fded9483e",
              title: "Temples of Kannoor",
              isbn: "ABC125",
              pubYear: 2001,
              desc: "Overview of all the temples in Kannoor district of Kerala.",
              author: "S. Jayashanker",
              imageUrl: "www.google.com",
              buyUrl: "www.google.com"
            },
            {
              id: "5e925efce8afa11fded9483d",
              title: "Temples of Kasargod",
              isbn: "ABC124",
              pubYear: 2000,
              desc: "Overview of all the temples in Kasargod district of Kerala.",
              author: "S. Jayashanker",
              imageUrl: "www.google.com",
              buyUrl: "www.google.com"
            },
            {
              id: "5e925e5ee8afa11fded9483c",
              title: "Temples of Kerala",
              isbn: "ABC123",
              pubYear: 1998,
              desc: "Temples of Kerala has a overview of all the temples in the various districts of Kerala.",
              author: "S. Jayashanker",
              imageUrl: "www.google.com",
              buyUrl: "www.google.com"
            }
        ]
    }

    render() {
        const {books} = this.state;
        return (
            <Container>
                <Row>
                    <Col xs="6" sm="4">
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" className="bookImage"/>
                        <CardBody>
                        <CardTitle className="bookTitle">Temples of Kerala</CardTitle>
                        <Button style={{backgroundColor: "white", fontSize: 9}} className="buyNowButton">Buy Now</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="6" sm="4">Book 2</Col>
                    <Col xs="6" sm="4">Book 3</Col>
                </Row>
                
            </Container>
        );
    }

}

export default BookList;

{/*
            <Container>
                <ListGroup horizontal>
                    {books.map(({id, title, desc}) => (
                        <ListGroupItem>
                            <Media className="bookImage" href="#">
                                <Media object alt="Placeholder image" />
                            </Media>
                            <Media body>
                                <Media heading className="bookTitle">
                                    {title}
                                </Media>
                                {desc}
                            </Media>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>  
                    */}