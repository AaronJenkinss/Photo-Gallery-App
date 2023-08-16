'use client';

import React, { useEffect, useRef, useState } from 'react'
import styles from './ImageCarousel.module.css';
import Image from 'next/image';

function ImageCarousel({ width, height, intervalDuration }) {
    const INTERVAL_DURATION = intervalDuration;
    const WIDTH = width;
    const HEIGHT = height;

    const [offset, setOffset] = useState(0);
    const intervalID = useRef(null);

    const setIntervalFunction = () => {
        setOffset(o => {
            if ((imageURLS.length - 1) * -100 < o) {
                return o - 100;
            }
            else {
                return 0;
            }
        });
    };

    const imageURLS = [
        'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
        'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
        'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
        'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
    ];

    const images = imageURLS.map((url, index) => {
        return (
            <Image src={url} loader={() => url} width={WIDTH} height={HEIGHT} style={{ left: offset + '%' }} alt='test image.' key={index} />
        );
    });

    useEffect(() => {
        intervalID.current = setInterval(setIntervalFunction, INTERVAL_DURATION);

        return () => {
            clearInterval(intervalID.current);
        }
    }, []);

    const imageScrollButtons = imageURLS.map((v, i) => {
        return (
            <button onClick={() => {
                clearInterval(intervalID.current);
                intervalID.current = setInterval(setIntervalFunction, INTERVAL_DURATION);
                setOffset(i * -100)
            }} key={i}></button>
        );
    });

    return (
        <div className={styles.imageCarousel} style={{ width: WIDTH, height: HEIGHT }}>
            <div className={styles.container} style={{ width: WIDTH, height: HEIGHT }}>
                {imageScrollButtons}
            </div>
            {images}
        </div>
    )
}

export default ImageCarousel;