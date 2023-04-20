import "./CloseButton.css"

const CloseButton = ({onClick}) => {
    return <button onClick={onClick} className="closeButton">
        <i className="bi bi-x"></i>
    </button>
}

export default CloseButton;