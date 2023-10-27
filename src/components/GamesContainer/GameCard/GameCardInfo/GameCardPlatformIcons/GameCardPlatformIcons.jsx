import PropTypes from 'prop-types';

import icon1 from '@/assets/GameCard/platforms/dark/icon-01.svg';
import icon2 from '@/assets/GameCard/platforms/dark/icon-02.svg';
import icon3 from '@/assets/GameCard/platforms/dark/icon-03.svg';
import icon4 from '@/assets/GameCard/platforms/dark/icon-04.svg';
import icon5 from '@/assets/GameCard/platforms/dark/icon-05.svg';
import icon6 from '@/assets/GameCard/platforms/dark/icon-06.svg';
import icon7 from '@/assets/GameCard/platforms/dark/icon-07.svg';
import icon8 from '@/assets/GameCard/platforms/dark/icon-08.svg';
import icon9 from '@/assets/GameCard/platforms/dark/icon-09.svg';
import icon10 from '@/assets/GameCard/platforms/dark/icon-10.svg';
import icon11 from '@/assets/GameCard/platforms/dark/icon-11.svg';
import icon12 from '@/assets/GameCard/platforms/dark/icon-12.svg';
import icon13 from '@/assets/GameCard/platforms/dark/icon-13.svg';
import icon14 from '@/assets/GameCard/platforms/dark/icon-14.svg';

export default function GameCardPlatformIcons({ parentPlatforms, containerStylesClass = '', iconStylesClass = '' }) {
    // Array of parent platform icons where the parent platform with id N
    // has its icon in the position N - 1 in the array
    const parentPlatformsImages = [
        icon1,
        icon2,
        icon3,
        icon4,
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
        <div className={containerStylesClass}>
            {parentPlatforms?.slice(0, 4).map((parentPlatform) => (
                <img
                    className={iconStylesClass}
                    width="24px"
                    key={parentPlatform.platform.id}
                    src={parentPlatformsImages[parentPlatform.platform.id - 1]}
                    alt={parentPlatform.platform.name}
                />
            ))}
        </div>
    );
}

GameCardPlatformIcons.propTypes = {
    parentPlatforms: PropTypes.array,
    containerStylesClass: PropTypes.string,
    iconStylesClass: PropTypes.string,
};
