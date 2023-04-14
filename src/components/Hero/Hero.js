import "./Hero.css";

import NavBarContainer from "../NavBarContainer/NavBarContainer";
import ContentHome from "../ContentHome/ContentHome";

const Hero = () => {
    return  <div className="hero">
                <NavBarContainer/>
                <ContentHome/>
            </div>
}

export default Hero;