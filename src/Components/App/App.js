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
    </section>
  );
}

export default App;
