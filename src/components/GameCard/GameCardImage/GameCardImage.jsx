import './GameCardImage.css';
import notLiked from './notLiked.png';

export default function GameCardImage() {
    return (
        <div className='gameImage'>
            <img className='likeIcon' src={notLiked}/>
        </div>
    )
}