'use client';

import React, { useEffect, useRef, useState } from 'react'

import styles from './ImageCollection.module.css';
import Image from 'next/image';

function ImageCollection({ widthAndHeight, intervalDuration, imageURLS, initialRotation, rotationOffset, translationOffset, rotationDuration, translationDuration, scaleFactor, scalingDuration }) {
    const WIDTH_AND_HEIGHT = widthAndHeight;
    const INTERVAL_DURATION = intervalDuration;

    const INITIAL_ROTATION_ANGLE = initialRotation;
    const ROTATION_OFFSET_ANGLE = rotationOffset;
    const BOTTOM_OFFSET = translationOffset + 'px';

    const ROTATION_DURATION = rotationDuration / 1000;
    const BOTTOM_OFFSET_DURATION = translationDuration / 1000;

    const IMAGE_URLS = imageURLS;

    const SCALE_FACTOR = scaleFactor;
    const SCALING_DURATION = scalingDuration / 1000;

    const [imageOffsets, setImageOffsets] = useState(IMAGE_URLS.map((value, index) => {
        return { rotation: INITIAL_ROTATION_ANGLE + ROTATION_OFFSET_ANGLE * index, zIndex: index };
    }));

    const [currentIndex, setCurrentIndex] = useState(IMAGE_URLS.length - 1);
    const [toggleAnimation, setToggleAnimation] = useState(false);

    const images = IMAGE_URLS.map((url, index) => {
        const rotation = (index === currentIndex && toggleAnimation ? 0 : imageOffsets[index].rotation);

        const style = {
            zIndex: imageOffsets[index].zIndex,
            bottom: (index === currentIndex && toggleAnimation ? BOTTOM_OFFSET : '0px'),
            transform: 'rotate(' + rotation + 'deg)',
            transition: 'transform ' + ROTATION_DURATION + 's, bottom ' + BOTTOM_OFFSET_DURATION + 's',

        };

        return (
            <Image src={url} style={style}
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
                    offset.rotation = offset.rotation + ROTATION_OFFSET_ANGLE;
                    offset.zIndex = offset.zIndex + 1;
                    return offset;
                });

                ro[currentIndex].rotation = INITIAL_ROTATION_ANGLE;
                ro[currentIndex].zIndex = 0;
            }

            return ro;
        });
    }, [currentIndex, toggleAnimation]);

    const containerStyles = {
        width: WIDTH_AND_HEIGHT + 'px', height: WIDTH_AND_HEIGHT + 'px',
        transform: 'scale(' + (toggleAnimation ? SCALE_FACTOR : 1) + ')',
        transition: 'transform ' + SCALING_DURATION + 's',
    };

    return (
        <div className={styles.imageCollection} style={containerStyles} onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
            {images}
        </div>
    )
}

export default ImageCollection;