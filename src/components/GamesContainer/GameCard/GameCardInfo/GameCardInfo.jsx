import './GameCardInfo.css';
import GameCardInfoAtributes from './GameCardInfoAtributes/GameCardInfoAtributes';
import GameCardPlatformIcons from './GameCardPlatformIcons/GameCardPlatformIcons';

export default function GameCardInfo(props) {
    function parseDate(dateStrig) {
        const date = new Date(dateStrig);
        return `${date.toLocaleString('en-US', {
            month: 'short',
        })} ${date.getDate()}, ${date.getFullYear()}`;
    }

    const genreNames = props.game.genres.map((genre) => genre.name);

    return (
        <div className="gameInfo">
            <div className="titleAndRanking">
                <h3 className="gameTitle">{props.game.name}</h3>
                <p className="ranking"></p>
            </div>
            <div className="gameDetails">
                <div className="gameDetailsAttributes">
                    <GameCardInfoAtributes
                        tag="Release date: "
                        info={parseDate(props.game.released)}
                    />
                    <GameCardInfoAtributes
                        tag="Genres: "
                        info={genreNames.join(', ')}
                    />
                </div>
                <GameCardPlatformIcons
                    parentPlatformIds={props.game.parent_platforms.map(
                        (parentPlatform) => parentPlatform.platform.id
                    )}
                />
            </div>
            <div className="description">
                <p className="descriptionText"></p>
            </div>
        </div>
    );
}
