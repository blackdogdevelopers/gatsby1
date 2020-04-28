import { useStaticQuery, graphql } from "gatsby"

export const useQuestionData = () => {
    const questionData = useStaticQuery(
        graphql`
          query QuestionData {
            allMarkdownRemark(sort: {order: DESC, fields: id}) {
              nodes {
                frontmatter {
                  id
                  range_end
                  range_start
                  title
                }
                html
                id
              }
            }
          }
        `)

    return questionData.allMarkdownRemark.nodes
}