import fetchGames from './fetchGames';

export default function fetchGamesDescription(gamesArray) {
    const promisesArray = [];
    gamesArray.forEach((game) => {
        promisesArray.push(fetchGames('https://rawg.io/api/games/', null, null, game.id));
    });
    return Promise.all(promisesArray);
}
