import { SignIn, useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../../components/dashboardComponents/Topbar';
import Sidebar from '../../components/dashboardComponents/Sidebar';

const DashboardLayout = () => {
  const { user } = useUser();
   const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <SignIn />
      </div>
    );
  }

  return (
    <div className='flex h-screen font-jost'>
      <Sidebar open={open} setOpen={setOpen} />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <Topbar open={open} setOpen={setOpen} />
        <main className='flex-1 overflow-y-auto p-6 bg-gray-50'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
