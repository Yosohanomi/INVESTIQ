import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../Login/model/authSlice/authSlice';
import styles from './Logout.module.scss';
import SVGIcon from '../../../assets/svg/symbol-defs.svg';
import { frontRoutes } from '../../../app/routes/frontRoutes/frontRoutes';
import { useNavigate } from 'react-router';
import { LogoutModal } from '../../../shared/ui/logoutModal/LogoutModal';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate(frontRoutes.login);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button onClick={handleOpenModal} className={styles.logout}>
        <p className={styles.logout__text}>Вийти</p>
        <svg fill="currentColor" className={`${styles.logout__icon} ${styles.isHidden}`}>
          <use href={`${SVGIcon}#icon-logout`} />
        </svg>
      </button>
      
      <LogoutModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
}