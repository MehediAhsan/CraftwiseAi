import { Link, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { navItems } from '../../data/navData';

const Sidebar = ({ open, setOpen }) => {
    const { user } = useUser();
    const location = useLocation();

    return (
        <aside className={`fixed z-40 top-0 left-0 h-full w-64 bg-white border-r-2 border-light p-4 transition-transform duration-300 transform
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}>

            <div className='mb-8'>
                <Link to='/' className="flex items-center">
                    <img src="/icon.png" alt="logo" className="w-10" />
                    <span className="text-xl font-bold text-primary md:tracking-wider">CraftwiseAi</span>
                </Link>
            </div>

            <div className='flex flex-col items-center mb-6'>
                <img
                    src={user.imageUrl}
                    alt='User'
                    className='w-16 h-16 rounded-full object-cover mb-2'
                />
                <span className='font-semibold text-center text-sm'>{user.fullName}</span>
            </div>

            <nav className='space-y-1'>
                {navItems.map((item) => (
                    <Link
                        to={item.path}
                        key={item.name}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition 
                ${location.pathname === item.path
                                ? 'bg-gradient-to-r from-violet-500 to-indigo-400 text-white font-medium'
                                : 'text-gray-800 hover:bg-gray-200'}`}
                        onClick={() => setOpen(false)}
                    >
                        <item.icon size={18}/>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
