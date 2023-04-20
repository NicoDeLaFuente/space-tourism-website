import "./BurgerButton.css";

const BurgerButton = ({onClick}) => {

    return  <button onClick={onClick} id="burgerButton" className="burgerMenu">
                <i className="bi bi-list"></i>
            </button>
}

export default BurgerButton;