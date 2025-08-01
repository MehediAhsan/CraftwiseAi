import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from './components/AppRoutes';
import Fallback from './components/FallBack';

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
    >
      <AppRoutes />
    </ErrorBoundary>
  );
};

export default App;