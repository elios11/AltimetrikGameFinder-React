import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'; // Use lowercase 'sidebar'

export default function Layout() {
    return (
        <div>
            <Sidebar/>
        </div>
    );
}
