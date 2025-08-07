import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <p className='text-2xl font-bold text-gray-800'>404 Not Found</p>
            <p className='text-lg text-gray-600'>The page you are looking for does not exist.</p>
            <Link to='/' className='text-primary font-semibold text-sm'>Go to Home</Link>
        </div>
    );
};

export default NotFound;