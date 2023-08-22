import React from 'react'

import styles from './AuthenticationLayout.module.css';

function AuthenticationLayout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                {children}
            </div>
        </div>
    )
}

export default AuthenticationLayout;