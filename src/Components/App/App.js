import backgroundInstagram from "../../assets/images/background-instagram.png"
import perfilInstagram from "../../assets/images/perfil-instagram.png"
import logoInstagram from "../../assets/images/logo.png"

import ButtonLogin from "../ButtonLogin/ButtonLogin"
import Container from "../Container/Container"

import './App.css';

function App() {
  return (
    <section className="App">
      <main className="login-interface">
        <div className="column">
          <img src={backgroundInstagram}/>
          <img src={perfilInstagram}/>
        </div>
        <div className="column">
          <Container className="login-form">
              <div><img src={logoInstagram}/></div>
              <form action="index.js" method="POST">
                <input placeholder="Telefone, nome de usuário ou email" type="text"/>
                <input placeholder="Senha" type="password"/>
                <ButtonLogin text="Entrar" />
              </form>
              <div className="separador">
                <div></div>
                <div>OU</div>
                <div></div>
              </div>
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
        </div>
      </main>
    </section>
  );
}

export default App;
