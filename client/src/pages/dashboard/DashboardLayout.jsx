import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            navbar
            <Outlet />
            footer
        </div>
    );
};

export default DashboardLayout;