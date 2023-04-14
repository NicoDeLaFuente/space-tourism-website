import "./NavBarList.css"

import CloseButton from "../CloseButton/CloseButton";
import { Link } from "react-router-dom";

const NavBarList = () => {
    return <nav className="nav disabled">
        <CloseButton />
        <ul className="navList">
            <li>
                <Link to={"/"} className="active">
                    <span>00</span>HOME
                </Link>
            </li>
            <li>
                <Link to={"/destination"}>
                    <span>01</span>DESTINATION
                </Link>
            </li>
            <li>
                <Link to={"/crew"}>
                    <span>02</span>CREW
                </Link>
            </li>
            <li>
                <Link to={"/technology"}>
                    <span>03</span>TECHNOLOGY
                </Link>
            </li>
        </ul>
    </nav>
}

export default NavBarList;