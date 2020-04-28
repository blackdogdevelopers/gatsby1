import React from "react"
import { CardColumns, Form } from "react-bootstrap"

import { useQuestionData } from "../hooks/questionData"
import QuestionCard from "./questionCard"

function componentDidMount() {
    this.props.questions.forEach( (item) => {
        this.setState( state => {
            const questions = state.questions.concat( { id: item.id, value: 0 } );
            return { questions };
        });
    });
}

// addValueCols = () => {
//     let cols = []

//     this.state.questions.forEach( (question) => {
//         cols.push(<Col key={question.id}>Q{question.id} = {question.value}</Col>);
//     });

//     return cols;
// }

const handleQuestionUpdate = (event) => {
    event.preventDefault();

    console.log("updated", event);

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



const QuestionForm = () => {
    const questionData = useQuestionData() // Call question data hook to pull things out of md files

    console.log(questionData);
    //componentDidMount(questionData.frontmatter);

    return (
        <>
        <Form>
            <CardColumns className="m-3 p-3">
                <Form.Group>
                    { questionData.map( questionData => <QuestionCard key={questionData.id} question={questionData} questionUpdate={handleQuestionUpdate} /> ) }
                </Form.Group>
            </CardColumns>
        </Form>
        </>
    )
}

export default QuestionForm
