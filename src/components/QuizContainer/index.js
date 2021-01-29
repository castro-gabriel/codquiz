import styled from 'styled-components'

const QuizContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 500px;
  margin: 0;
  /* overflow: hidden; */
  font-size: 15px;

  @media screen and (max-width: 500px){
    margin: auto;
    height: 100vh;
    padding: 15px;
  }
`

export default QuizContainer