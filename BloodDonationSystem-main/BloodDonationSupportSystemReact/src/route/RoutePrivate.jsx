import { Navigate } from 'react-router-dom';

const RoutePrivate = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    if (isAdmin) {
        return <Navigate to="/admin" />;
    }

    return children;
}

export default RoutePrivate;