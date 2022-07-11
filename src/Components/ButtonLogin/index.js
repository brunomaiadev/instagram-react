const buttonStyle = {
    backgroundColor:"rgba(0,149,246,1)",
    border: "1px solid transparent",
    color:"rgba(255,255,255,1)",
    borderRadius:"4px",
    width:"100%",
    fontWeight:"600",
    textAlign:"center",
    padding:"5px 9px",
    cursor:"pointer",
    marginBottom:"8px"
}
function ButtonLogin(props){
    return (
        <button style={buttonStyle}>
            {props.text}
        </button>
    )
}
export default ButtonLogin