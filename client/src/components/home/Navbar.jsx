import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user } = useUser();
    const { openSignIn } = useClerk();

    return (
        <nav className="flex items-center justify-between py-2 px-4">
            <Link to='/' className="flex items-center gap-2">
                <img src="/icon.png" alt="logo" className="w-8" />
                <span className="text-xl font-semibold text-indigo-600">Craftwise.ai</span>
            </Link>
            {
                user ? <UserButton /> : <button onClick={openSignIn} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-5 py-2 rounded-full flex items-center space-x-1 transition">
                    <span>get started</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            }

        </nav>
    );
};

export default Navbar;
