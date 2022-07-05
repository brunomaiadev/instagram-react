import appStoreLogo from "../../assets/images/appstore.png"
import playStoreLogo from "../../assets/images/playstore.png"
import "./AppDownload.css"
function AppDownload(){
    return (
        <div className="appdownload">
            <div>Obtenha o aplicativo.</div>
            <div>
              <img src={appStoreLogo} className="logo-img-app"/>
              <img src={playStoreLogo} className="logo-img-app"/>
            </div>
        </div>
    )
}
export default AppDownload