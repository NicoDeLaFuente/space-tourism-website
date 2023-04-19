import "./ContentHeroTechnology.css"

const ContentHeroTechnology = () => {
    return <div className="wrapperTechnology">
        <h2 className="titleDestination padding-left"><span>03</span>space Lauch 101</h2>
        <div className="img-and-details-technology">
            <div className="imageTechnology"></div>
            <div className="list-and-details-technology">
                <ul className="optionsTechnology">
                    <li><button className="circleButtonTech">1</button></li>
                    <li><button className="circleButtonTech">2</button></li>
                    <li><button className="circleButtonTech">3</button></li>
                </ul>
                <div className="detailsTechnology">
                    <h2 className="subtitleTechnology">the terminology...</h2>
                    <h1 className="nameTechnology">lauch vehicle</h1>
                    <p className="textTechnology">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                        it's quite an awe-inspiring sight on the launch pad!</p>
                </div>

            </div>
        </div>
    </div>
}

export default ContentHeroTechnology