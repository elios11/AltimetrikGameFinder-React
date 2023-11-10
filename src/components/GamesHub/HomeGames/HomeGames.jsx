import GamesContainer from '@components/GamesContainer/GamesContainer';
import RequestsContext from '@context/RequestsContext';
import { useContext, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import fetchGames from '@api/fetchGames';
import updateTitle from '@utils/updateTitle';

export default function HomeGames() {
    const { closeSidebar, setModalGameId, setTitle, setSubtitle, setColumnButtons } = useOutletContext();
    const { setResult } = useContext(RequestsContext);

    /* Fetches games data and set the result to state */
    useEffect(() => {
        updateTitle('GameFinder | Home');
        setTitle('New and trending');
        setSubtitle('Based on player counts and release date');
        setColumnButtons(true);

        setResult({ loading: true, data: {}, error: null });
        fetchGames('https://rawg.io/api/games/')
            .then((result) => setResult(result))
            .catch((err) => setResult(err));
        closeSidebar();
    }, []);

    return (
        <>
            <GamesContainer setModalGameId={setModalGameId} />
        </>
    );
}
