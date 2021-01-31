import styled from 'styled-components'
import db from '../db.json'
import Head from 'next/head'
import { motion } from 'framer-motion'
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
import Link from '../src/components/Link'


export default function Home() {

  const router = useRouter()
  const [ name, setName ] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Arte Marcial QUIZ</title>
        
        <meta property="og:image" content={db.ogimg}></meta>
      </Head>
        <QuizContainer>
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5}}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' }
            }}
            initial="hidden"
            animate="show"
          >
            
            <Widget.Content>
            <form onSubmit={( event ) => {
              event.preventDefault() // para não carregar mais (Pesquisar mais sobre)
              router.push(`/quiz?name=${name}`)
              // router.pathname({name})
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

          <Widget
            as={motion.section}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' }
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content >
              <p>
                Responda o QUIZ sobre o Itachi Uchiha e vamos ver o que você sabe.<br />
                <hr />
                Created by <a href="https://www.instagram.com/gabscastro.dev/" target="blank">@gabscastro.dev</a>
              </p>
            </Widget.Content>
          </Widget>
          <Widget 
            as={motion.section}
            transition={{ delay: 0.4, duration: 0.5}}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' }
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Quizes da galera</h1>

              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>     
          <Footer 
            as={motion.footer}
            transition={{ delay: 0.6, duration: 0.5}}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' }
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/castro-gabriel/martialarts_quiz" />
    </QuizBackground>
  );
}
