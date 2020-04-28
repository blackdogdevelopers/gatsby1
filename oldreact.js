import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap/'
import QuestionsWrapper from './QuestionWrapper';


export default class Questions extends Component {
    state = {
        score: 0,
        sum: 0,
        questions: [],
    };

    constructor(props) {
        super(props);

        this.handleQuestionUpdate = this.handleQuestionUpdate.bind(this)
    }
    
    componentDidMount() {
        this.props.questions.forEach( (item) => {
            this.setState( state => {
                const questions = state.questions.concat( { id: item.id, value: 0 } );
                return { questions };
            });
        });
    }

    addValueCols = () => {
        let cols = []

        this.state.questions.forEach( (question) => {
            cols.push(<Col key={question.id}>Q{question.id} = {question.value}</Col>);
        });

        return cols;
    }

    handleQuestionUpdate(event) {
        event.preventDefault();

        // get out all the different bits bits
        let questions = this.state.questions;
        let targetId = parseInt(event.target.id)
        let targetValue = parseInt(event.target.value)
        let index = questions.findIndex(obj => obj.id === targetId);

        // Update the value for the changed question
        questions[index].value = targetValue;

        // Calculate the sum
        let initialValue = 0;
        let sum = questions.reduce((total, quest) => total + parseInt(quest.value), initialValue);

        // Store everything back into the state object
        this.setState({questions: questions});
        this.setState({sum: sum});
        this.setState({score: sum / questions.length});
    }

    render() {        
        return (
            <div>
                <QuestionsWrapper questions={this.props.questions} questionUpdate={this.handleQuestionUpdate} />
                <Container>
                    <Row>
                        {this.addValueCols()}
                        <Col>Total: {this.state.sum}</Col>
                        <Col>Score: {this.state.score}</Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}
