import fetchGames from '../../api/fetchGames';
import GameCard from './GameCard/GameCard';

export default function GamesContainer() {
    const { loading, data } = fetchGames('https://rawg.io/api/games?token');

    return (
        <div>
            {loading
                ? ''
                : data?.results?.map((game, index) => <GameCard game={game} key={index} ranking={index + 1} />)}
        </div>
    );
}
