import logoInstagram from "../../assets/images/logo.png"

import ButtonLogin from "../ButtonLogin/ButtonLogin"
import Container from "../Container/Container"
import AppDownload from "../AppDownload/AppDownload"
import BackgroundInstagram from "../BackgroundInstagram/BackgroundInstagram"
import Separador from "../Separador/Separador"

import './App.css';

function App() {
  return (
    <section className="App">
      <main className="login-interface">
        <div className="column">
          <BackgroundInstagram />
        </div>
        <div className="column">
          <Container className="login-form">
              <div><img src={logoInstagram}/></div>
              <form action="index.js" method="POST">
                <input placeholder="Telefone, nome de usuário ou email" type="text"/>
                <input placeholder="Senha" type="password"/>
                <ButtonLogin text="Entrar" />
              </form>
              <Separador text="OU"/>
              <div>
                <button class="login-facebook">
                  <span></span>
                  <span>Entrar com o Facebook</span>
                </button>
              </div>
              <a href="/index.js">Esqueceu a senha?</a>
          </Container>
          <Container>
            <div class="signin">
              <p>Não tem uma conta? <a href="index.js">Cadastre-se</a></p>
            </div>
          </Container>
          <AppDownload/>
        </div>
      </main>
      <footer>
        <div className="list">
          <a href="index.js">Meta</a>
          <a href="index.js">Sobre</a>
          <a href="index.js">Blog</a>
          <a href="index.js">Carreiras</a>
          <a href="index.js">Ajuda</a>
          <a href="index.js">API</a>
          <a href="index.js">Privacidade</a>
          <a href="index.js">Termos</a>
          <a href="index.js">Principais contas</a>
          <a href="index.js">Hashtags</a>
          <a href="index.js">Localizações</a>
          <a href="index.js">Instagram Lite</a>
          <a href="index.js">Carregamento de contatos e não usuários</a>
          <a href="index.js">Dança</a>
          <a href="index.js">Comida e bebida</a>
          <a href="index.js">Casa e jardim</a>
          <a href="index.js">Música</a>
          <a href="index.js">Artes visuais</a>
        </div>
        <div>
          <span>Português (Brasil)</span>
          <span>© 2022 Instagram from Meta</span>
        </div>
      </footer>
    </section>
  );
}

export default App;
