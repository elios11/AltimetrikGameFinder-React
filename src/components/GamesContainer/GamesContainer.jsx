import GameCard from './GameCard/GameCard';
import fetchData from '../../api/fetchData';

export default function GamesContainer() {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    const result = fetchData(`${url}/api/games`);

    return (
        <div>
            {result.loading
                ? ''
                : result.data.results.map((game, index) => <GameCard game={game} key={index} ranking={index + 1} />)}
        </div>
    );
}
