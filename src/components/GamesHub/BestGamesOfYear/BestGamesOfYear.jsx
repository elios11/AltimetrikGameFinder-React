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
    const { closeSidebar, setModalGameId } = useOutletContext();
    const { setResult } = useContext(RequestsContext);

    useEffect(() => {
        if (results) {
            setResult(results);
        }
    }, [results]);

    useEffect(() => {
        updateTitle('GameFinder | Best of the year');

        const currentDate = new Date();
        const currentYear = new Date().getFullYear();
        const firstDay = new Date(currentYear, 0, 1);
        setComplexSearch({ dates: `${formatDate(firstDay)},${formatDate(currentDate)}`, ordering: `-rating` });
        closeSidebar();
    }, []);

    return (
        <>
            <GamesContainer setModalGameId={setModalGameId} />
        </>
    );
}
