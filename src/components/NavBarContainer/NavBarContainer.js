import "./NavBarContainer.css"

import NavBarList from "../NavBarList/NavBarList";
import LogoImg from "../LogoImg/LogoImg";
import Line from "../Line/Line";
import BurgerButton from "../BurgerButton/BurgerButton";

const NavBarContainer = () => {
    return  <header className="header">
              <LogoImg/>
              <Line/>
              <BurgerButton />
              <NavBarList/>  
            </header>
}

export default NavBarContainer;