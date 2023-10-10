import { Outlet, useLocation } from 'react-router-dom';
import MainSection from '@components/MainSection/MainSection';

export default function Layout() {
    const location = useLocation();
    const latestSearches = location.pathname === '/last-searches';
    const title = latestSearches ? 'Latest searches' : 'New and trending';
    const subtitle = latestSearches ? '' : 'Based on player counts and release date';

    return (
        <div>
            <MainSection title={title} subtitle={subtitle} />
            <Outlet />
        </div>
    );
}
