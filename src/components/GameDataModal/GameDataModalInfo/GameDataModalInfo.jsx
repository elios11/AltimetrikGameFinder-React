import PropTypes from 'prop-types';

export default function GameDataModalInfo({ gameData }) {
    return <>{gameData.name}</>;
}

GameDataModalInfo.propTypes = {
    gameData: PropTypes.object,
};
