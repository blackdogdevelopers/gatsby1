import React from "react"
import {Card, Form} from 'react-bootstrap/'

const QuestionCard = (questionData, questionUpdate) => {

    const {frontmatter, html} = questionData.question

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{frontmatter.title}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: html }} />                        
                        <Form.Control type="range" onClick={questionUpdate} min={frontmatter.range_start} max={frontmatter.range_end} custom />
                </Card.Body>
            </Card>
        </>
    )
}

export default QuestionCard