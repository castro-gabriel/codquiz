import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Button from '../src/components/Button'
import Input from '../src/components/Input'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`


export default function Home() {

  const router = useRouter()
  const [ name, setName ] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Itachi QUIZ</title>
      </Head>
      <QuizContainer>
        {/* <QuizLogo src={db.logo} alt="CodQUIZ"/> */}
        <Widget>

          <Widget.Header>
            <h1>Itachi Uchiha</h1>
          </Widget.Header>
          
          <Widget.Content>
          <form onSubmit={( event ) => {
            event.preventDefault() // para não carregar mais (Pesquisar mais sobre)
            router.push(`/quiz?name=${name}`)
            console.log('Fazendo submissão por meio do react')}}
            >
                <Input
                  onChange={(event) => {// pegar o value quando houver uma mudança do que tem dentro do input
                    console.log(event.target.value)
                    setName(event.target.value) // target é o alvo do input e o value para pegar o valor
                  }} 
                  name="userName"
                  placeholder="Nome de jogador" 
                />

                <Button type="submit" disabled={name.length === 0} >
                  {`Jogar : ${name}`}
                </Button>
            </form>
          </Widget.Content>
        
        </Widget>

        <Widget>
          
          <Widget.Content>
            <p>
              Responsa o QUIZ sobre o Itachi Uchiha e vamos ver o que você sabe.<br />
              <hr />
              Created by @gabscastro.dev
            </p>
          </Widget.Content>
        
        </Widget>        
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/castro-gabriel/itachiquiz" />
    </QuizBackground>
  );
}
