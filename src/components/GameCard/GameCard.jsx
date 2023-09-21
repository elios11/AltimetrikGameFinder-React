import './GameCard.css';
import GameCardImage from './GameCardImage/GameCardImage';
import GameCardInfo from './GameCardInfo/GameCardInfo';

export default function GameCard() {

    return (
        <div className="card">
            <GameCardImage />
            <GameCardInfo />
        </div>
    )
}