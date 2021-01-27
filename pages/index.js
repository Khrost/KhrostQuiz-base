//esta acessando uma variavel para gerar um css no navegador
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';//declara depois do </widget> (ultimo)
import GitHubCorner from '../src/components/GitHubCorner/index';// depois do ultimo </QuizContainer>
import QuizBackground from '../src/components/QuizBackground/index';// usando isso e comentando o outro, faltará colocar uma imagem
import QuizLogo from '../src/components/QuizLogo/index';

//const BackgroundImage = styled.div`
 // background-image: url(${db.bg});
 // flex: 1;
 // background-size: cover;//ajustar a imagem
 // background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;//tamanho de 100%
  max-width:350px;//altura de
  padding-top: 45px; //distancia da altura inicial (topo)
  margin: auto 10%;//distancia do lado esquerdo 
  @media screen and (max-width: 500px){//para diferentes tamanhos de tela
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              The all Assassin's Creed.
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              The official develop in ubisoft.
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>
              Perguntas
            </h1>
          
            <p>
              Pergunts aqui
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Khrost" />
    </QuizBackground>
  );
}