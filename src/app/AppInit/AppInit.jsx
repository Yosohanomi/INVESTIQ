import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { refresh } from '../../features/Login/model/authThunks/authThunks';
import { frontRoutes } from '../../app/routes/frontRoutes/frontRoutes';

export default function AppInit({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isInit } = useSelector(state => state.auth);
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          if (location.pathname !== frontRoutes.login && location.pathname !== frontRoutes.register) {
            navigate(frontRoutes.login);
          }
          return;
        }

        await dispatch(refresh()).unwrap();
        
        if (location.pathname === frontRoutes.login || location.pathname === frontRoutes.register) {
          navigate(frontRoutes.home);
        }
        
      } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        
        if (location.pathname !== frontRoutes.login && location.pathname !== frontRoutes.register) {
          navigate(frontRoutes.login);
        }
      }
    };

    init();
  }, [dispatch, navigate, location.pathname]);
  if (loading && !isInit) {
    return <p>Loading...</p>;
  }

  return children;
}