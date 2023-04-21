import "./ContentHeroCrew.css"
import { useEffect, useState } from "react"

const ContentHeroCrew = () => {

    const [idMenu, setIdMenu] = useState("douglas hurley")
    const [info, setInfo] = useState({})

    function pointMenu (e) {
        const optionsMenu = document.querySelectorAll(".pointMenu")
        optionsMenu.forEach(option => option.classList.remove("active-back"))
        e.currentTarget.classList.add("active-back")
        setIdMenu(e.currentTarget.id)
    }

    useEffect(() => {
        const dataJson = fetch("../../../data.json")
        .then(res => res.json())
        if(idMenu) {
            const idMenu2 = idMenu.replace("-", " ")
            dataJson.then(data => data.crew.map(crew => {
                if(crew.name === idMenu2) {
                    setInfo(crew)
                }
            }))
        }
        
    }, [idMenu])


    


    return <div className="wrapperCrew">
        <h2 className="titleDestination"><span>02</span>Meet your Crew</h2>
        <div className="img-and-details-crew">
            <div className="imageCrew">
                <img src={info.images} alt={`imagen de ${info.name}`} className="imgCrew" />
            </div>
            <div className="list-and-details">
                <ul className="optionsCrew">
                    <li><button onClick={pointMenu} id="douglas-hurley" className="pointMenu active-back"></button></li>
                    <li><button onClick={pointMenu} id="mark-shuttleworth" className="pointMenu"></button></li>
                    <li><button onClick={pointMenu} id="victor glover" className="pointMenu"></button></li>
                    <li><button onClick={pointMenu} id="anousheh-ansari" className="pointMenu"></button></li>
                </ul>
                <div className="details">
                    <h2 className="jobCrew">{info.role}</h2>
                    <h1 className="nameCrew">{info.name}</h1>
                    <p className="textCrew">{info.bio}</p>
                </div>
            </div>
        </div>
        <div className="img-desktop">
            <img src={info.images} alt={`imagen de ${info.name}`}/>
        </div>
    </div>
}

export default ContentHeroCrew;