import "./NavBarContainer.css"

import NavBarList from "../NavBarList/NavBarList";
import LogoImg from "../LogoImg/LogoImg";

const NavBarContainer = () => {
    return  <nav>
              <LogoImg/>
              <NavBarList/>  
            </nav>
}

export default NavBarContainer;