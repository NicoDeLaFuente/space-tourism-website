import "./ContentHeroCrew.css"
import imageCrew from "../../Pages/HeroCrew/crew/image-douglas-hurley.png"

const ContentHeroCrew = () => {

    return <div className="wrapperCrew">
                <h2 className="titleDestination"><span>02</span>Meet your Crew</h2>
                <div className="imageCrew">
                    <div className="imgCrew"></div>
                </div>
                <div className="list-and-details">
                    <ul className="optionsCrew">
                        <li><div className="pointMenu active"></div></li>
                        <li><div className="pointMenu"></div></li>
                        <li><div className="pointMenu"></div></li>
                        <li><div className="pointMenu"></div></li>
                    </ul>
                    <div className="details">
                        <h2 className="jobCrew">commander</h2>
                        <h1 className="nameCrew">douglas hurley</h1>
                        <p className="textCrew">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
                    </div>
                </div>

    </div>
}

export default ContentHeroCrew;