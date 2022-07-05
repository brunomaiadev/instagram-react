import backgroundInstagram from "../../assets/images/background-instagram.png"
import perfilInstagram from "../../assets/images/perfil-instagram.png"
import "./BackgroundInstagram.css"
function BackgroundInstagram(){
    return (
        <div className="backgroundinstagram">
          <img src={backgroundInstagram}/>
          <img src={perfilInstagram}/>
        </div>
    )
}
export default BackgroundInstagram