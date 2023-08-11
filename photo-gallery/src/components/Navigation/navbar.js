import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image';

const onClickFunction = e => {

    const activeItems = document.querySelectorAll('.' + styles.active);
    if (activeItems) {
        activeItems.forEach(element => {
            element.classList.remove(styles.active);
        });
    }
    e.target.parentNode.classList.add(styles.active);
}

const navItems = [
    ['/navItems/find-svgrepo-com.svg', onClickFunction],
    ['/navItems/home-2-svgrepo-com.svg', onClickFunction],
    ['/navItems/add-folder-svgrepo-com.svg', onClickFunction],
    ['/navItems/edit-ui-svgrepo-com.svg', onClickFunction],
    ['/navItems/settings-svgrepo-com (1).svg', onClickFunction],
]

const svg = (
    <svg version="1.1" id="wave" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 119 26">
        <path class="path"
            d="M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z" />
    </svg>
);

function Navbar() {
    const nav_items = navItems.map(item => {
        const [url, onClick] = item;

        const icon = (
            <div className={styles.icon_wrapper} onClick={onClick}>
                <Image src={url} height={35} width={35} alt='navItem' />
                <div></div>
            </div>
        );

        return icon;
    })

    return (
        <nav className={styles.navbar}>
            {nav_items}
        </nav>
    )
}

export default Navbar;