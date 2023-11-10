import GamesContainer from '@components/GamesContainer/GamesContainer';
import useComplexSearch from '@components/SidebarNav/useComplexSearch';
import RequestsContext from '@context/RequestsContext';
import { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import formatSearchDate from '@utils/formatSearchDate';
import updateTitle from '@utils/updateTitle';

export default function ThisMonthGames() {
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
        updateTitle('GameFinder | This month');
        setTitle('This month');
        setSubtitle('Games released in the last month');

        const currentDate = new Date();
        const otherDate = new Date();
        otherDate.setMonth(otherDate.getMonth() - 1);
        setComplexSearch({ dates: `${formatSearchDate(otherDate)},${formatSearchDate(currentDate)}` });
        closeSidebar();
    }, []);

    return (
        <>
            <GamesContainer setModalGameId={setModalGameId} />
        </>
    );
}
