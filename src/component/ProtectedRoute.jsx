import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const  ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(userContext);

  // Show loading while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    
    return <Navigate to="/Login" replace />;
  }

  // Render the protected component
  return children;
};

export default ProtectedRoute;