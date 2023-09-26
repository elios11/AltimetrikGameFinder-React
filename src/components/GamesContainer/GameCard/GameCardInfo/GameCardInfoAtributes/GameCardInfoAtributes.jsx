import './GameCardInfoAtributes.css';

export default function GameCardInfoAtributes(props) {
    return (
        <div className="">
            <p className="gameAttributesName">{props.tag}</p>
            <p className="gameAttributesValue releaseDate">{props.info}</p>
        </div>
    )
}