import "./NavBarList.css"

import CloseButton from "../CloseButton/CloseButton";
import { Link } from "react-router-dom";

const NavBarList = ({onClick, activeHandler}) => {
    return <nav id="navBar" className="nav disabled">
        <CloseButton onClick={onClick}/>
        <ul className="navList">
            <li>
                <Link to={"/"} onClick={activeHandler} id="menuHome">
                    <span>00</span>HOME
                </Link>
            </li>
            <li>
                <Link to={"/destination/moon"} onClick={activeHandler} id="menuDestination">
                    <span>01</span>DESTINATION
                </Link>
            </li>
            <li>
                <Link to={"/crew"} onClick={activeHandler} id="menuCrew">
                    <span>02</span>CREW
                </Link>
            </li>
            <li>
                <Link to={"/technology"} onClick={activeHandler} id="menuTechnology">
                    <span>03</span>TECHNOLOGY
                </Link>
            </li>
        </ul>
    </nav>
}

export default NavBarList;