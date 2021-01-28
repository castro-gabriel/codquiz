import React from 'react'
import db from '../db.json'

// Components
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Button from '../src/components/Button'

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>Loading</Widget.Header>
            <Widget.Content>Perguntas</Widget.Content>
        </Widget>
    )
}

function QuestionWidget({ question, questionIndex, totalQuestions }) {

    const questionId = `question__${questionIndex}`

    return (
        <Widget>
            <Widget.Header>
                <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</  h3>
            </Widget.Header>

            <img src={question.image} alt="Descrição" style={{ width: '100%', height: '150px', objectFit: 'cover' }}/>

            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                
                <form>
                    {question.alternatives.map( (alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`
                        
                        return (
                            <Widget.Topic htmlFor={alternativeId} as="label">
                                <input type="radio" name={questionId} id={alternativeId}/>
                                {alternative}
                            </Widget.Topic>
                        )
                    })}
                </form>

                <Button>Confirmar</Button>      
            </Widget.Content>
        </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

const QuizPage = () => {
    const screenState = screenStates.QUIZ
    const totalQuestions = db.questions.length
    const questionIndex = 0
    const question = db.questions[questionIndex]

    return(
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                { screenState === screenStates.QUIZ && <QuestionWidget question={question} questionIndex={questionIndex} totalQuestions={totalQuestions}/>}
                { screenState === screenStates.LOADING && <LoadingWidget />}
                { screenState === screenStates.RESULT && <div>Você acertou X questões. Parabéns!</div>}
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/castro-gabriel/itachiquiz" />
        </QuizBackground>
    )
}

export default QuizPage