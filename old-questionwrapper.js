import React, { Component } from 'react'
import {Form, CardColumns} from 'react-bootstrap/'
import QuestionCard from './QuestionCard';

export default class QuestionWrapper extends Component {

    constructor(props) {
        super(props);

        this.questionUpdate = this.props.questionUpdate.bind(this)
    }

    render() {
        return (
            <Form>
                <CardColumns className="m-3 p-3">
                    {this.props.questions.map( question => <QuestionCard question={question} questionUpdate={this.questionUpdate} key={question.id} /> )}
                </CardColumns>
            </Form>
            
        )
    }
}
