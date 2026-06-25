import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from '../../../../features/Login/model/authThunks/authThunks';
import { frontRoutes } from '../../../../app/routes/frontRoutes/frontRoutes';
import { RedButton } from '../../RedButton/RedButton';
import styles from './RegisterForm.module.scss';
import { resetRegisterStatus } from '../../../../features/Login/model/authSlice/authSlice';

export default function RegisterForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, isError, registerSuccess } = useSelector(state => state.auth);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await dispatch(register(formData)).unwrap();
            navigate(frontRoutes.login);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    if (registerSuccess) {
        return (
            <div className={styles.success}>
                <h2>Реєстрація успішна!</h2>
                <button 
                    onClick={() => {
                        dispatch(resetRegisterStatus());
                        navigate(frontRoutes.login);
                    }}
                >
                    Увійти
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.container}>
                {isError && (
                    <div className={styles.error}>
                        {typeof isError === 'string' ? isError : 'Помилка реєстрації'}
                    </div>
                )}

                <label htmlFor="name" className={styles.label}>
                    Ім'я:
                </label>
                <input 
                    id='name' 
                    type="text" 
                    placeholder='Name' 
                    autoComplete='name' 
                    required 
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                />

                <label htmlFor="email" className={styles.label}>
                    Електронна пошта:
                </label>
                <input 
                    id='email' 
                    type="email" 
                    placeholder='your@email.com' 
                    autoComplete='email' 
                    required 
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                />

                <label htmlFor="password" className={styles.label}>
                    Пароль (не менше 6 символів):
                </label>
                <input 
                    id='password' 
                    type="password" 
                    placeholder='Пароль' 
                    autoComplete='current-password' 
                    required 
                    className={styles.input}
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                />

                <label htmlFor="confirmPassword" className={styles.label}>
                    Підтвердіть пароль:
                </label>
                <input 
                    id='confirmPassword' 
                    type="password" 
                    placeholder='Пароль' 
                    autoComplete='current-password' 
                    required 
                    className={styles.input}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={loading}
                />

                <div className={styles.buttonsThumb}>
                    <RedButton 
                    secondClass={styles.redBtn} 
                        text="увійти"
                        type="button"
                        onClick={() => navigate(frontRoutes.login)}
                        // disabled={loading}
                    />
                    <button 
                        type="submit" 
                        className={styles.registerButton}
                        disabled={loading}
                    >
                      реєстрація
                    </button>
                </div>
            </div>
        </form>
    );
}