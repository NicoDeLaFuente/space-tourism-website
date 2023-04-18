import "./ContentHeroDestination.css"
import Moon from "../../Pages/HeroDestination/destination/image-moon.webp"
import { Link } from "react-router-dom"

const ContentHeroDestination = () => {

    return <div className="wrapperDestination">
        <h2 className="titleDestination"><span>01</span>PICK YOUR DESTINATION</h2>
        <div className="img-and-details">
            <div className="imgPlanets">
                <img src={Moon} alt="Planet img" />
            </div>
            <div className="menu-and-details">
                <ul className="planetsMenu">

                    <li>
                        <Link to={/destiination/} className="planetsItem active">Moon</Link>
                    </li>
                    <li>
                        <Link to={/destination/} className="planetsItem">Mars</Link>
                    </li>
                    <li>
                        <Link to={/destination/} className="planetsItem">Europa</Link>
                    </li>
                    <li>
                        <Link to={/destination/} className="planetsItem">Titan</Link>
                    </li>
                </ul>

                <div className="planet">
                    <h1 className="titlePlanet">Moon</h1>
                    <p className="textPlanet">  See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                        regain perspective and come back refreshed. While you’re there, take in some history
                        by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
                <div className="lineDestination"></div>
                <div className="distance-time">
                    <div className="distance">
                        <h4>AVG. DISTANCE</h4>
                        <h3>384,400 km</h3>
                    </div>
                    <div className="time">
                        <h4>EST. TRAVEL TIME</h4>
                        <h3>3 DAYS</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default ContentHeroDestination;