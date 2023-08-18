import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel';

import styles from './LandingPageMainsection.module.css'

function LandingPageMainSection() {
    return (
        <div className={styles.container}>
            <section>
                <h1>A photo gallery website for sharing photos.</h1>
                <p>Additional text that might be added here. This may be changed later, probably. Although, this particular would probably remain here for the time being.</p>
            </section>

            <ImageCarousel intervalDuration={2500} scrollDuration={2500} width={400} height={250} imageURLS={[
                'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
                'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
                'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
                'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
                'https://www.halfbakedharvest.com/wp-content/uploads/2023/04/20-Minute-Thai-Basil-Beef-Rolls-1-1-480x270.jpg',
            ]} />
        </div>
    )
}

export default LandingPageMainSection;