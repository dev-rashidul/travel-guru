import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinners/Spinner';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    // Get user using useContext
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

        if(loading){
            return <Spinner></Spinner>
        }

        if(user){
            return children
        }
        return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoute;