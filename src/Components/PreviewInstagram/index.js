import backgroundInstagram from "../../assets/images/background-instagram.png"
import perfilInstagram from "../../assets/images/perfil-instagram.png"
import "./previewinstagram.css"
function PreviewInstagram(){
    return (
        <div className="backgroundinstagram">
          <img src={backgroundInstagram}/>
          <img src={perfilInstagram}/>
        </div>
    )
}
export default PreviewInstagram