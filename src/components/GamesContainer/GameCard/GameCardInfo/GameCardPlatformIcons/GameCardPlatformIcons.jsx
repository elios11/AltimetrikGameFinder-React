import './GameCardPlatformIcons.css';

import icon1 from './dark/icon-01.png';
import icon2 from './dark/icon-02.png';
import icon3 from './dark/icon-03.png';
import icon4 from './dark/icon-04.png';
import icon5 from './dark/icon-05.png';
import icon6 from './dark/icon-06.png';
import icon7 from './dark/icon-07.png';
import icon8 from './dark/icon-08.png';
import icon9 from './dark/icon-09.png';
import icon10 from './dark/icon-10.png';
import icon11 from './dark/icon-11.png';
import icon12 from './dark/icon-12.png';
import icon13 from './dark/icon-13.png';
import icon14 from './dark/icon-14.png';

export default function GameCardPlatformIcons(props) {
    // Array of parent platform icons where the parent platform with id N
    // has its icon in the position N - 1 in the array
    const parentPlatformsImages = [
        icon1,
        icon2,
        icon3,
        icon5,
        icon6,
        icon7,
        icon8,
        icon9,
        icon10,
        icon11,
        icon12,
        icon13,
        icon14,
    ];

    return (
        <div className="platformsIcons">
            {props.parentPlatformIds.slice(0, 4).map((id) => (
                <img src={parentPlatformsImages[id - 1]} />
            ))}
        </div>
    );
}
