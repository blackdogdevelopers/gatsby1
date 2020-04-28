import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import QuestionForm from "../components/questionForm"


const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Container className="text-center">
      <Row>
        <Col>
          <QuestionForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage