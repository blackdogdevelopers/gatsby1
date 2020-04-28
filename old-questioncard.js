import React, { Component } from 'react'
import {Form, Card} from 'react-bootstrap/'


export default class QuestionWrapper extends Component {

    render() {
        const question = this.props.question;

        return (
            <Card key={question.id.toString()}>
                <Card.Body>
                    <Card.Title>{question.title}</Card.Title>
                    <Form.Group controlId={question.id.toString()}>
                        <Card.Text>
                            {question.text}
                            <Form.Control type="range" onClick={this.props.questionUpdate} min={question.range_start} max={question.range_end} custom />
                        </Card.Text>
                    </Form.Group>
                </Card.Body>
            </Card>
        )
    }
}
