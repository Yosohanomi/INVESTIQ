import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { refresh } from '../../features/Login/model/authThunks/authThunks';
import { frontRoutes } from '../../app/routes/frontRoutes/frontRoutes';

export default function AppInit({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isInit, user } = useSelector(state => state.auth);
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem('accessToken');
      const isLoginPage = location.pathname === frontRoutes.login;
      const isRegisterPage = location.pathname === frontRoutes.register;
      const isAuthPage = isLoginPage || isRegisterPage;
      
      console.log('AppInit:', { token: !!token, isInit, user, pathname: location.pathname });

      if (isInit && user) {
        console.log('Вже залогінені');
        return;
      }

      if (!token) {
        console.log('Немає токена');
        if (!isAuthPage) {
          navigate(frontRoutes.login);
        }
        return;
      }

      try {
        await dispatch(refresh()).unwrap();
        console.log('Refresh успішний');
        
        if (isAuthPage) {
          navigate(frontRoutes.home);
        }
      } catch (error) {
        console.log('Refresh failed');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        if (!isAuthPage) {
          navigate(frontRoutes.login);
        }
      }
    };

    if (!isInit) {
      init();
    }
  }, [dispatch, navigate, location.pathname, isInit, user]);

  if (loading && !isInit) {
    return <p>Loading...</p>;
  }

  return children;
}