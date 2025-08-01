import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Settings from '../pages/dashboard/Settings';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='settings' element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;