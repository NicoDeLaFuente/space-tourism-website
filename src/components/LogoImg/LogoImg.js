import "./LogoImg.css"

import { Link } from "react-router-dom";
import Logo from "./logo.svg";

const LogoImg = () => {
    return  <Link to={"/"}>
                <img src={Logo} alt="Logo"/>
            </Link>
}

export default LogoImg; 