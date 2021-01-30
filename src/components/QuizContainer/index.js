import styled from 'styled-components'

const QuizContainer = styled.div`
  height: 10  0%;
  width: 100%;
  max-width: 400px;
  margin: 20px 90px;
  padding: 10px;

  border-radius: 4px;
  font-size: 15px;
  background-color: ${({theme}) => theme.colors.primaryOpacity};

  @media screen and (max-width: 600px){
    margin: auto;
    padding: 15px;
  }
`

export default QuizContainer