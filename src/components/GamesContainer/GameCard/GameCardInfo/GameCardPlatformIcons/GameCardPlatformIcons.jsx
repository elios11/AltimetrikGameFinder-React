import PropTypes from 'prop-types';
import darkPlatforms from '@assets/GameCard/platforms/dark/DarkPlatformIcons';
import lightPlatforms from '@assets/GameCard/platforms/light/LightPlatformIcons';
export default function GameCardPlatformIcons({
    parentPlatforms,
    containerStylesClass = '',
    iconStylesClass = '',
    darkIcons = true,
}) {
    return (
        <div className={containerStylesClass}>
            {parentPlatforms?.slice(0, 4).map((parentPlatform) => (
                <img
                    className={iconStylesClass}
                    width="24px"
                    key={parentPlatform.platform.id}
                    src={
                        darkIcons
                            ? darkPlatforms[parentPlatform.platform.id - 1]
                            : lightPlatforms[parentPlatform.platform.id - 1]
                    }
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
    darkIcons: PropTypes.bool,
};
