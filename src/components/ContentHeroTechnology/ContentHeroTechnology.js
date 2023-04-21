import "./ContentHeroTechnology.css"

import { useState, useEffect } from "react"

const ContentHeroTechnology = () => {

    const [idMenu, setIdMenu ] = useState("launch vehicle")
    const [info, setInfo] = useState({})

    function menuOptionTech (e){
        const options = document.querySelectorAll(".circleButtonTech")
        options.forEach(option => option.classList.remove("activeTech"))

        e.currentTarget.classList.add("activeTech")
        setIdMenu(e.currentTarget.id)
    }

    useEffect(() => {
        const dataJson = fetch("../../../data.json")
        .then(res => res.json())

        if(idMenu) {
            const idMenu2 = idMenu.replace("-", " ");
           dataJson.then(data => data.technology.map(tech => {
            if(tech.name === idMenu2) {
                setInfo(tech)
            }
           })) 
        }
    },[idMenu])

    



    return <div className="wrapperTechnology">
        <h2 className="titleDestination padding-left"><span>03</span>space Lauch 101</h2>
        <div className="img-and-details-technology">
            <img src={info.images}  alt={`${info.name}`} className="imageTechnology" />
            <div className="list-and-details-technology">
                <ul className="optionsTechnology">
                    <li><button id="launch-vehicle" onClick={menuOptionTech} className="circleButtonTech activeTech">1</button></li>
                    <li><button id="spaceport" onClick={menuOptionTech} className="circleButtonTech">2</button></li>
                    <li><button id="space-capsule" onClick={menuOptionTech} className="circleButtonTech">3</button></li>
                </ul>
                <div className="detailsTechnology">
                    <h2 className="subtitleTechnology">the terminology...</h2>
                    <h1 className="nameTechnology">{info.name}</h1>
                    <p className="textTechnology">{info.description}</p>
                </div>

            </div>
        </div>
    </div>
}

export default ContentHeroTechnology