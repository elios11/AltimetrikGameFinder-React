import GamesContainer from '@components/GamesContainer/GamesContainer';
import RequestsContext from '@context/RequestsContext';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearch from '@components/Header/SearchBar/useSearch';
import { useOutletContext } from 'react-router-dom';
import updateTitle from '@utils/updateTitle';

export default function SearchedGames() {
    const [searchParams] = useSearchParams();
    const [game, setGame] = useState(null);
    const results = useSearch(game);
    const { setResult } = useContext(RequestsContext);
    const { setModalGameId, setTitle, setSubtitle } = useOutletContext();

    useEffect(() => {
        if (results) {
            setResult(results);
        }
    }, [results]);

    useEffect(() => {
        const searchedGame = searchParams.get('game');
        if (searchedGame) {
            updateTitle(`Game Finder | ${searchedGame}`);
            setTitle(`Results for ${searchedGame}`);
            setSubtitle(`Games releated to ${searchedGame}`);

            setGame(searchedGame);
        }
    }, [searchParams]);

    return (
        <>
            {(!game && <h3 style={{ fontSize: 'larger' }}>Couldn&apos;t find the game you were looking for...</h3>) || (
                <GamesContainer setModalGameId={setModalGameId} />
            )}
        </>
    );
}
