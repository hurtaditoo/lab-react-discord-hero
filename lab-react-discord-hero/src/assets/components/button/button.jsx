import './button.css'

function Button({ type, text }) {
    return <button className = {`Button ${type}`} >{text}</button>
}

export default Button;