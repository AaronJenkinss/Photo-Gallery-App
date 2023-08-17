'use client';

import React, { useEffect, useRef, useState } from 'react'
import styles from './ImageCarousel.module.css';
import Image from 'next/image';
import { styleConcat } from '@/utils';

function ImageCarousel({ width, height, intervalDuration, imageURLS }) {
    const INTERVAL_DURATION = intervalDuration;
    const WIDTH = width;
    const HEIGHT = height;
    const IMAGE_URLS = imageURLS;

    const [offset, setOffset] = useState(0);
    const intervalID = useRef(null);

    const setIntervalFunction = () => {
        setOffset(o => {
            if ((IMAGE_URLS.length - 1) * -100 < o) {
                return o - 100;
            }
            else {
                return 0;
            }
        });
    };

    const images = IMAGE_URLS.map((url, index) => {
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

    const imageScrollButtons = IMAGE_URLS.map((v, i) => {
        return (
            <button className={styleConcat(styles.btn, (i === offset / -100 ? styles.highlight_btn : ''))} onClick={() => {
                clearInterval(intervalID.current);
                intervalID.current = setInterval(setIntervalFunction, INTERVAL_DURATION);
                setOffset(i * -100)
            }} key={i}></button>
        );
    });

    return (
        <div className={styles.imageCarousel} style={{ width: WIDTH, height: HEIGHT }}>
            <div className={styles.container} style={{ width: WIDTH, height: HEIGHT }}>
                <div className={styles.scrollSection}>
                    {imageScrollButtons}
                </div>
            </div>
            {images}
        </div>
    )
}

export default ImageCarousel;