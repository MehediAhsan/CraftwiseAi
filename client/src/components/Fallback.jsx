import { useErrorBoundary } from 'react-error-boundary';

const Fallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 border border-red-200">
        <h2 className="text-xl font-semibold text-red-600 mb-2">Oops! Something went wrong.</h2>
        <p className="text-sm text-gray-600 mb-4">
          An unexpected error occurred. You can try again or contact support if the issue persists.
        </p>
        <div className="bg-red-50 text-red-700 text-sm rounded-md p-3 mb-4">
          {error?.message}
        </div>
        <button
          onClick={resetBoundary}
          className="w-full px-4 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-red-800 transition cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Fallback;
