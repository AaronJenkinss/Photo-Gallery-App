'use client';

import React, { useEffect, useRef, useState } from 'react'

import styles from './ImageCollection.module.css';
import Image from 'next/image';

function ImageCollection({ widthAndHeight, imageURLS }) {
    const WIDTH_AND_HEIGHT = widthAndHeight;
    const INITIAL_ROTATION = -20;
    const ROTATION_OFFSET = 10;
    const INTERVAL_DURATION = 1000;
    const BOTTOM_OFFSET = '190%';
    const IMAGE_URLS = imageURLS;

    const [imageOffsets, setImageOffsets] = useState(IMAGE_URLS.map((value, index) => {
        return { rotation: INITIAL_ROTATION + ROTATION_OFFSET * index, zIndex: index };
    }));

    const [currentIndex, setCurrentIndex] = useState(IMAGE_URLS.length - 1);
    const [toggleAnimation, setToggleAnimation] = useState(false);

    const images = IMAGE_URLS.map((url, index) => {
        return (
            <Image src={url} style={{ transform: 'rotate(' + (imageOffsets[index].rotation) + 'deg)', zIndex: imageOffsets[index].zIndex, bottom: (index === currentIndex && toggleAnimation ? BOTTOM_OFFSET : '0px') }}
                width={WIDTH_AND_HEIGHT} height={WIDTH_AND_HEIGHT} unoptimized={true} key={index} alt='test images.'
            />
        );
    });

    const intervalID = useRef(null);

    const nextIndex = ci => {
        if (ci === 0) {
            return IMAGE_URLS.length - 1;
        }
        else {
            return ci - 1;
        }
    };
    const startAnimation = () => {
        setToggleAnimation(true);
        intervalID.current = setInterval(() => {
            setCurrentIndex(nextIndex);
        }, INTERVAL_DURATION);
    };
    const stopAnimation = () => {
        setToggleAnimation(false);
        setCurrentIndex(nextIndex);
        clearInterval(intervalID.current);
    };

    useEffect(() => {
        setImageOffsets(ro => {
            if (toggleAnimation) {
                ro.map((offset) => {
                    offset.rotation = offset.rotation + ROTATION_OFFSET;
                    offset.zIndex = offset.zIndex + 1;
                    return offset;
                });

                ro[currentIndex].rotation = INITIAL_ROTATION;
                ro[currentIndex].zIndex = 0;
            }

            return ro;
        });
    }, [currentIndex, toggleAnimation]);

    return (
        <div className={styles.imageCollection} style={{ width: widthAndHeight + 'px', height: widthAndHeight + 'px' }} onMouseEnter={() => startAnimation()} onMouseLeave={stopAnimation}>
            {images}
        </div>
    )
}

export default ImageCollection;