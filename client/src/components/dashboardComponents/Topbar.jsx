import { UserButton } from '@clerk/clerk-react';
import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { navItems } from '../../data/navData';

const Topbar = ({ open, setOpen }) => {
    const location = useLocation();

    return (
        <header className='w-full bg-white border-b-2 border-light h-16 flex items-center justify-between px-4 md:px-6'>
            <h2 className='text-lg font-semibold text-gray-800'>{navItems.find(item => item.path === location.pathname).name}</h2>

            <div className='flex items-center gap-4'>
                <button
                    onClick={() => setOpen(!open)}
                    className='md:hidden focus:outline-none'
                >
                    <Menu />
                </button>
                <UserButton />
            </div>
        </header>
    );
};

export default Topbar;
