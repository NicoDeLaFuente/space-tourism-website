import "./NavBarContainer.css"

import NavBarList from "../NavBarList/NavBarList";
import LogoImg from "../LogoImg/LogoImg";
import Line from "../Line/Line";
import BurgerButton from "../BurgerButton/BurgerButton";


const NavBarContainer = () => {

  function burgerMenuClickHandler () {
        document.querySelector("#burgerButton").classList.add("disabled")
        document.querySelector("#navBar").classList.remove("disabled")
  }

  function closeMenuClickHandler () {
      document.querySelector("#navBar").classList.add("disabled")
      document.querySelector("#burgerButton").classList.remove("disabled")
  }

  function menuActive (e) {
    const buttonMenu = document.querySelectorAll(".navList a")
  
    buttonMenu.forEach(button => {
      button.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  }

    return  <header className="header">
              <LogoImg/>
              <Line/>
              <BurgerButton onClick={burgerMenuClickHandler}/>
              <NavBarList onClick={closeMenuClickHandler} activeHandler={menuActive}/>  
            </header>
}

export default NavBarContainer;