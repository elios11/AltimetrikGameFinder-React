import './GameCardImage.css';
import notLiked from './notLiked.png';

export default function GameCardImage(props) {
    console.log(props.image);
    return (
        <div
            className="gameImage"
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <img className="likeIcon" src={notLiked} />
        </div>
    );
}
