import './GameCard.css';
import GameCardImage from './GameCardImage/GameCardImage';
import GameCardInfo from './GameCardInfo/GameCardInfo';

export default function GameCard(props) {
    
    return (
        <div className="card">
            <GameCardImage image={props.game.background_image} />
            <GameCardInfo game={props.game} />
        </div>
    );
}
