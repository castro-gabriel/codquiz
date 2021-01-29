import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import GlobalContainer from '../src/components/GlobalContainer'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import QuizLogo from '../src/components/QuizLogo'


export default function Home() {

  const router = useRouter()
  const [ name, setName ] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Itachi QUIZ</title>
        <meta property="og:image" content={images/bg.png}/>
      </Head>
      <GlobalContainer>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            
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
                Responda o QUIZ sobre o Itachi Uchiha e vamos ver o que você sabe.<br />
                <hr />
                Created by <a href="https://www.instagram.com/gabscastro.dev/" target="blank">@gabscastro.dev</a>
              </p>
            </Widget.Content>
          
          </Widget>        
          <Footer />
        </QuizContainer>
      </GlobalContainer>
      <GitHubCorner projectUrl="https://github.com/castro-gabriel/itachiquiz" />
    </QuizBackground>
  );
}
