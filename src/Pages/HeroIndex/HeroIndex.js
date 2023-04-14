import "./HeroIndex.css";

import NavBarContainer from "../../components/NavBarContainer/NavBarContainer"
import ContentHome from "../../components/ContentHome/ContentHome"

const HeroIndex = () => {
    return  <div className="hero">
                <NavBarContainer/>
                <ContentHome/>
            </div>
}

export default HeroIndex;