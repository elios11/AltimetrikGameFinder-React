import fetchGames from './fetchGames';

export default function fetchGameAssets(gameId) {
    const gameAssets = {};

    const promisesArray = [
        fetchGames('https://rawg.io/api/games/', null, null, gameId, 'screenshots')
            .then((result) => (gameAssets.images = result?.data?.results))
            .catch((e) => (gameAssets.images = e)),
        fetchGames('https://rawg.io/api/games/', null, null, gameId, 'movies')
            .then((result) => (gameAssets.videos = result?.data?.results))
            .catch((e) => (gameAssets.videos = e)),
    ];

    return Promise.all(promisesArray).then(() => gameAssets);
}
