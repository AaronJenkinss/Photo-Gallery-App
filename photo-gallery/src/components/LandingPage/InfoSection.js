import React from 'react'
import styles from './InfoSection.module.css'
import Image from 'next/image'

function InfoSection() {
    return (
        <div className={styles.infoSection}>
            <div className={styles.textContainer}>
                <h1>A photo gallery website to store photos probably!</h1>
                <p>Some other text being added. Also, I just downloaded a random image to use for this section. </p>
            </div>

            <Image
                src='/random_picture_for_website.webp'
                width={200}
                height={200}
            />
        </div>
    )
}

export default InfoSection