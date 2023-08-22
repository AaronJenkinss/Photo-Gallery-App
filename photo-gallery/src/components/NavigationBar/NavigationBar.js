import React from 'react'

import styles from './NavigationBar.module.css'

const NAVIGATION_ITEMS = [
    'Dashboard',
    'Features',
    'Contact',
    'About',
    'Register',
];

function NavigationBar() {
    const navItems = NAVIGATION_ITEMS.map((item, index) => {
        return (
            <p key={index}>{item}</p>
        );
    });

    return (
        <nav className={styles.navigationBar}>
            <div className={styles.items_container}>
                {navItems}
            </div>
        </nav>
    )
}

export default NavigationBar;