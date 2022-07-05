import "./Separador.css"
function Separador(props){
    return (
        <div className="separador">
            <div></div>
            <div>{props.text}</div>
            <div></div>
        </div>
    )
}
export default Separador