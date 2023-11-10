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
        updateTitle('GameFinder | Coming soon...');

        const currentDate = new Date();
        const otherDate = new Date();
        otherDate.setMonth(otherDate.getMonth() + 3);
        setComplexSearch({ dates: `${formatDate(currentDate)},${formatDate(otherDate)}` });
        closeSidebar();
    }, []);

    return (
        <>
            <GamesContainer setModalGameId={setModalGameId} />
        </>
    );
}
