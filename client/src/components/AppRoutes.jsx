import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Settings from '../pages/dashboard/Settings';
import NotFound from './NotFound';
import WriteArticle from '../pages/dashboard/WriteArticle';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='settings' element={<Settings />} />
                <Route path='write-article' element={<WriteArticle />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;