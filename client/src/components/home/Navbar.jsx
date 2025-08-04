import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user } = useUser();
    const { openSignIn } = useClerk();

    console.log(user);

    return (
        <nav className="flex items-center justify-between pt-5">
            <Link to='/' className="flex items-center gap-2">
                <img src="/icon.png" alt="logo" className="w-8" />
                <span className="text-xl font-bold text-primary md:tracking-wider">CraftwiseAi</span>
            </Link>
            {
                user ? <UserButton /> : <button onClick={openSignIn} className="bg-primary hover:bg-indigo-700 text-white text-sm px-4 md:px-5 py-2 rounded-full flex items-center space-x-1 transition cursor-pointer">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            }

        </nav>
    );
};

export default Navbar;
