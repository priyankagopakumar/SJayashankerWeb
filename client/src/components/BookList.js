import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {Row, Col} from 'reactstrap';
import '../styles/books.css';
import '../styles/common.css';

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
              buyUrl: "https://www.google.com"
            },
            {
              id: "5e925efce8afa11fded9483d",
              title: "Temples of Kasargod",
              isbn: "ABC124",
              pubYear: 2000,
              desc: "Overview of all the temples in Kasargod district of Kerala.",
              author: "S. Jayashanker",
              imageUrl: "www.google.com",
              buyUrl: "https://www.google.com"
            },
            {
              id: "5e925e5ee8afa11fded9483c",
              title: "Temples of Kerala",
              isbn: "ABC123",
              pubYear: 1998,
              desc: "Temples of Kerala has a overview of all the temples in the various districts of Kerala.",
              author: "S. Jayashanker",
              imageUrl: "www.google.com",
              buyUrl: "https://www.google.com"
            },
            {
                id: "5e925e5ee8afa11fded9483c",
                title: "Temples of Ernakulam",
                isbn: "ABC127",
                pubYear: 2015,
                desc: "Temples of Ernakulam has a overview of all the temples in the various districts of Kerala.",
                author: "S. Jayashanker",
                imageUrl: "www.google.com",
                buyUrl: "https://www.google.com"
              }
        ]
    }

    render() {
        const {books} = this.state;
        return (
            <Container>
                <div>
                    <h3 className="pageTitle">BOOKS</h3>
                    <hr className="bigPageBreak"/>
                </div>
                <Row>
                    {books.map(({id, title, desc, imageUrl, buyUrl}) => (
                        <Col xs="6" sm="4">
                            <div className="bookCard">
                                <img src={imageUrl} alt="Placeholder" className="bookImage"/>
                                <hr className="smallPageBreak"/>
                                <h4 className="bookTitle">{title}</h4>
                                <a href={buyUrl} target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="buyNowButton">Buy Now</button>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

}

export default BookList;