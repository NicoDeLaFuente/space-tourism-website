import "./ContentHeroDestination.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

const ContentHeroDestination = () => {
    const [idMenu, setIdMenu] = useState("moon")
    const [info, setInfo] = useState({})

    useEffect(() => {
        const dataJson = fetch("../../../data.json")
        .then(response => (response.json()))
        

        if(idMenu) {
            dataJson.then(data => data.destinations.map(destination => {
                if (destination.name === idMenu) {
                    setInfo(destination)
                }
            }))
        }

    },[idMenu])


    function clickHandlerPlanets (e) {
        const buttonsPlanets = document.querySelectorAll(".planetsItem")
        buttonsPlanets.forEach(button => {
            button.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        setIdMenu(e.currentTarget.id)
    }



    return <div className="wrapperDestination">
        <h2 className="titleDestination"><span>01</span>PICK YOUR DESTINATION</h2>
        <div className="img-and-details">
            <div className="imgPlanets">
                <img src={info.images} alt={info.name} />
            </div>
            <div className="menu-and-details">
                <ul className="planetsMenu">

                    <li>
                        <Link to={"/destination/moon"} id="moon" onClick={clickHandlerPlanets} className="planetsItem active">Moon</Link>
                    </li>
                    <li>
                        <Link to={"/destination/mars"} id="mars" onClick={clickHandlerPlanets} className="planetsItem">Mars</Link>
                    </li>
                    <li>
                        <Link to={"/destination/europa"} id="europa" onClick={clickHandlerPlanets} className="planetsItem">Europa</Link>
                    </li>
                    <li>
                        <Link to={"/destination/titan"} id="titan" onClick={clickHandlerPlanets} className="planetsItem">Titan</Link>
                    </li>
                </ul>

                <div className="planet">
                    <h1 className="titlePlanet">{info.name}</h1>
                    <p className="textPlanet">{info.description}</p>
                </div>
                <div className="lineDestination"></div>
                <div className="distance-time">
                    <div className="distance">
                        <h4>AVG. DISTANCE</h4>
                        <h3>{info.distance}</h3>
                    </div>
                    <div className="time">
                        <h4>EST. TRAVEL TIME</h4>
                        <h3>{info.travel}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default ContentHeroDestination;