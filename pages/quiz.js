import React from 'react'
import db from '../db.json'

// Components
import GlobalContainer from '../src/components/GlobalContainer'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Button from '../src/components/Button'

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>Loading</Widget.Header>
            <Widget.Content>Perguntas</Widget.Content>
        </Widget>
    )
}

function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }) {

    const questionId = `question__${questionIndex}`
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false)
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined

    return (
            <QuizContainer>
                {/* <QuizLogo /> */}
                <Widget>
                    <Widget.Header>
                        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</  h3>
                    </Widget.Header>

                    <img src={question.image} alt="Descrição" style={{ width: '100%', height: '150px', objectFit: 'cover' }}/>

                    <Widget.Content>
                        <h2>{question.title}</h2>
                        <p>{question.description}</p>
                        
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            setIsQuestionSubmited(true)
                            setTimeout(() => {
                                onSubmit()
                                setIsQuestionSubmited(false)
                                setSelectedAlternative(undefined)
                            }, 2 * 1000)
                        }}>
                            {question.alternatives.map( (alternative, alternativeIndex) => {
                                const alternativeId = `alternative__${alternativeIndex}`
                                
                                return (
                                    <Widget.Topic 
                                        key={alternativeId} 
                                        htmlFor={alternativeId} 
                                        as="label"
                                    >
                                        <input 
                                            onChange={() => setSelectedAlternative(alternativeIndex)}
                                            type="radio" 
                                            name={questionId}
                                            id={alternativeId}
                                        />
                                        {alternative}
                                    </Widget.Topic>
                                )
                            })}

                        <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>      
                        {isQuestionSubmited && isCorrect && <p>Você ACERTOU essa!</p>}
                        {isQuestionSubmited && !isCorrect && <p>Você ERROU essa!</p>}
                        </form>

                    </Widget.Content>
                </Widget>
            </QuizContainer>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

const QuizPage = () => {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const totalQuestions = db.questions.length
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const questionIndex = currentQuestion
    const question = db.questions[questionIndex]

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 1000)
    }, [])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1
        if (nextQuestion < totalQuestions){
            setCurrentQuestion(nextQuestion)
        } else {
            setScreenState(screenStates.RESULT)
        }
    }

    return(
        <QuizBackground backgroundImage={db.bg}>
            <GlobalContainer>
                <QuizContainer>
                    { screenState === screenStates.QUIZ && (
                        <QuestionWidget 
                            question={question} 
                            questionIndex={questionIndex} 
                            totalQuestions={totalQuestions}
                            onSubmit={handleSubmitQuiz}
                        />
                    )}
                    { screenState === screenStates.LOADING && <LoadingWidget />}
                    { screenState === screenStates.RESULT && <div>Você acertou X questões. Parabéns!</div>}
                </QuizContainer>
                <GitHubCorner projectUrl="https://github.com/castro-gabriel/itachiquiz" />
            </GlobalContainer>
        </QuizBackground>
    )
}

export default QuizPage