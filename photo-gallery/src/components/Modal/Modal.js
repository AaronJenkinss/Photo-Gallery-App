'use client';

import React, { useState } from 'react'

import styles from './Modal.module.css';
import ImageCollection from '../ImageCollection/ImageCollection';
import { exitIconSVG, fullScreenIconSVG } from '@/SVGs/SVGs';

const content = (
    <>
        <h1>A title for the collection perhaps.</h1>
        <p>A description for the collection perhaps.</p>
        <button>
            View Collection
        </button>
    </>
);

function Modal({ component, scaleFactor }) {
    const [toggleModal, setToggleModal] = useState(false);

    const toggleModalOnClick = () => {
        setToggleModal(current => !current);
    };

    const modalContainerStyles = {
        display: (toggleModal ? 'flex' : 'none'),
    };

    return (
        <div className={styles.container}>
            <div onClick={toggleModalOnClick}>
                {component}
            </div>

            <div className={styles.modalContainer} style={modalContainerStyles}>
                <div className={styles.modal}>
                    <div className={styles.componentDisplay}>
                        {component}
                    </div>

                    <div className={styles.content}>
                        {content}
                    </div>

                    <div className={styles.interactionsBar}>
                        <button onClick={toggleModalOnClick}>
                            {exitIconSVG}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;