import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar'; // Use lowercase 'sidebar'

export default function Layout() {
    return (
        <div>
            <Sidebar/>
            <Outlet />
        </div>
    );
}
