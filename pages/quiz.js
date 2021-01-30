import React from 'react'
import db from '../db.json'

// Components
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Button from '../src/components/Button'

function ResultWidget({ results }) {
    return (
        <Widget>
            <Widget.Header>Resultado</Widget.Header>
            <Widget.Content>
                <p>
                    Voce acertou
                    {' '}
                    {/* {results.reduce((somatoriaAtual, resultAtual) => {
                        const isAcerto = resultAtual === true
                        if(isAcerto) {
                            return somatoriaAtual + 1
                        }
                        return somatoriaAtual
                    }, 0)} */}
                    {results.filter((x) => x).length}
                    {' '}
                    perguntas
                </p>

                <ul>
                    {results.map((result, index) => (
                        <li>#{index + 1} {' '} Resultado: {result == true ? 'Acertou' : 'Errou'}</li>
                    ))}
                </ul>
            </Widget.Content>
        </Widget>
    )
}

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>Loading</Widget.Header>
            <Widget.Content>Perguntas</Widget.Content>
        </Widget>
    )
}

function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit, addResult }) {

    const questionId = `question__${questionIndex}`
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false)
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined

    return (
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
                                addResult(isCorrect)
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
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

const QuizPage = () => {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const [results, setResults] = React.useState([true, false, true])
    const totalQuestions = db.questions.length
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const questionIndex = currentQuestion
    const question = db.questions[questionIndex]

    function addResult(result) {
        setResults([...results, result])
    }

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
                <QuizContainer>
                    { screenState === screenStates.QUIZ && (
                        <QuestionWidget 
                            question={question} 
                            questionIndex={questionIndex} 
                            totalQuestions={totalQuestions}
                            onSubmit={handleSubmitQuiz}
                            addResult={addResult}
                        />
                    )}
                    { screenState === screenStates.LOADING && <LoadingWidget />}
                    { screenState === screenStates.RESULT && <ResultWidget results={results}/>}
                </QuizContainer>
                <GitHubCorner projectUrl="https://github.com/castro-gabriel/itachiquiz" />
        </QuizBackground>
    )
}

export default QuizPage