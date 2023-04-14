import "./NavBarList.css"

import CloseButton from "../CloseButton/CloseButton";

const NavBarList = () => {
    return <nav className="nav disabled">
        <CloseButton />
        <ul className="navList">
            <li>
                <a href="#" className="active">
                    <span>00</span>HOME
                </a>
            </li>
            <li>
                <a href="#">
                    <span>01</span>DESTINATION
                </a>
            </li>
            <li>
                <a href="#">
                    <span>02</span>CREW
                </a>
            </li>
            <li>
                <a href="#">
                    <span>03</span>TECHNOLOGY
                </a>
            </li>
        </ul>
    </nav>
}

export default NavBarList;