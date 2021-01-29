import styled from 'styled-components'

const QuizContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 700px;
  margin: 25px;
  font-size: 15px;

  @media screen and (max-width: 800px){
    margin: auto;
    height: 90vh;
    padding: 15px;
  }
`

export default QuizContainer