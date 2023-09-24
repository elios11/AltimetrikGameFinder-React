import './GameCardInfo.css';

export default function GameCardInfo() {
    return (
        <div className="gameInfo">
            <div className="titleAndRanking">
                <h3 className="gameTitle"></h3>
                <p className="ranking"></p>
            </div>
            <div className="gameDetails">
                <div className="gameDetailsAttributes">
                    <div>
                        <p className="gameAttributesName">Release date:</p>
                        <p className="gameAttributesValue releaseDate"></p>
                    </div>
                    <div>
                        <p className="gameAttributesName">Genres:</p>
                        <p className="gameAttributesValue genres"></p>
                    </div>
                </div>    
                <div className="platformsIcons">
                    <img className="pcIcon icon" src="assets/dark-mode/cards/platforms/pc.svg"/>
                    <img className="playstationIcon icon" src="assets/dark-mode/cards/platforms/playstation.svg"/>
                    <img className="xboxIcon icon" src="assets/dark-mode/cards/platforms/xbox.svg"/>
                    <img className="nintendoIcon icon" src="assets/dark-mode/cards/platforms/nintendo.svg"/>
                </div>
            </div> 
            <div className="description">
                <p className="descriptionText"></p>
            </div>
        </div>
    )
}