import React from 'react';
import { useSelector } from 'react-redux';
import styles from './UserInfo.module.scss';

export default function UserInfo() {
    const { user, userName } = useSelector(state => state.auth);
    
    const displayName = userName || user?.split('@')[0] || 'User';
    const avatarLetter = displayName[0]?.toUpperCase() || 'U';

    return (
        <div className={styles.user}>
            <div className={styles.user__avatar}>{avatarLetter}</div>
            <p className={styles.user__name}>{displayName}</p>
        </div>
    );
}