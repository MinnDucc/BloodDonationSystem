import { Navigate } from 'react-router-dom';

const RoutePrivate = ({ children }) => {
   
    const isLogin = localStorage.getItem('token') === 'true';
    console.log("hhihi")


    if (isLogin) {
         console.log("hhihi")
        return <Navigate to="/user/home" />;
    }

    return children;
}

export default RoutePrivate;