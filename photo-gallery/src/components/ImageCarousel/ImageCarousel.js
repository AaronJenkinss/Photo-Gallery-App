import React, { useEffect, useState } from 'react'
import styles from './ImageCarousel.module.css';
import Image from 'next/image';

const imageURLS = [
    'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
    'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
    'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
    'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
];

function ImageCarousel() {
    const [offset, setOffset] = useState(0);

    const images = imageURLS.map((url, index) => {
        return (
            <Image src={url} loader={() => url} width={500} height={290} style={{ left: offset + '%' }} alt='test image.' key={index} />
        );
    });

    useEffect(() => {

        const intervalID = setInterval(() => {
            setOffset(o => {

                if ((imageURLS.length - 1) * -100 < o) {
                    return o - 100;
                }
                else {
                    return 0;
                }
            });
        }, 2000);

        return () => {
            clearInterval(intervalID);
        }
    }, [])

    return (
        <div className={styles.imageCarousel}>
            {images}
        </div>
    )
}

export default ImageCarousel;