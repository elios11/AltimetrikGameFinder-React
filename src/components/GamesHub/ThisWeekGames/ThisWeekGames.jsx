import GamesContainer from '@components/GamesContainer/GamesContainer';
import useComplexSearch from '@components/SidebarNav/useComplexSearch';
import RequestsContext from '@context/RequestsContext';
import { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import formatDate from '../../../utils/formatSearchDate';
import updateTitle from '@utils/updateTitle';

export default function ThisWeekGames() {
    const [complexSearch, setComplexSearch] = useState(null);
    const results = useComplexSearch(complexSearch);
    const { closeSidebar, setModalGameId, setTitle, setSubtitle } = useOutletContext();
    const { setResult } = useContext(RequestsContext);

    useEffect(() => {
        if (results) {
            setResult(results);
        }
    }, [results]);

    useEffect(() => {
        updateTitle('GameFinder | This week');
        setTitle('This week');
        setSubtitle('Games released in the last week');

        const currentDate = new Date();
        const otherDate = new Date();
        otherDate.setDate(otherDate.getDate() - 7);
        setComplexSearch({ dates: `${formatDate(otherDate)},${formatDate(currentDate)}` });
        closeSidebar();
    }, []);

    return (
        <>
            <GamesContainer setModalGameId={setModalGameId} />
        </>
    );
}
