import React from 'react'
import ImageCollection from '../ImageCollection/ImageCollection';

import styles from './CollectionDisplay.module.css';

function CollectionDisplay() {
    return (
        <div className={styles.collectionDisplay}>
            <ImageCollection widthAndHeight={150} initialRotation={-20} rotationOffset={10} translationOffset={200}
                intervalDuration={1000} rotationDuration={1000} translationDuration={1000}
                scaleFactor={1.2} scalingDuration={500}

                imageURLS={[
                    'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
                    'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
                    'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
                    'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
                    'https://www.halfbakedharvest.com/wp-content/uploads/2023/04/20-Minute-Thai-Basil-Beef-Rolls-1-1-480x270.jpg',
                    'https://media.istockphoto.com/id/487960671/photo/homemade-dark-chocolate-ice-cream-cone.jpg?s=612x612&w=0&k=20&c=gx_PFLq0yc4Jdey1AVOVzWAtqZ5SnzGIVkTs57T0g5o=',
                ]}
            />

            <ImageCollection widthAndHeight={150} initialRotation={-20} rotationOffset={10} translationOffset={200}
                intervalDuration={1000} rotationDuration={1000} translationDuration={1000}
                scaleFactor={1.2} scalingDuration={500}

                imageURLS={[
                    'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
                    'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
                    'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
                    'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
                    'https://www.halfbakedharvest.com/wp-content/uploads/2023/04/20-Minute-Thai-Basil-Beef-Rolls-1-1-480x270.jpg',
                    'https://media.istockphoto.com/id/487960671/photo/homemade-dark-chocolate-ice-cream-cone.jpg?s=612x612&w=0&k=20&c=gx_PFLq0yc4Jdey1AVOVzWAtqZ5SnzGIVkTs57T0g5o=',
                ]}
            />

            <ImageCollection widthAndHeight={150} initialRotation={-20} rotationOffset={10} translationOffset={200}
                intervalDuration={1000} rotationDuration={1000} translationDuration={1000}
                scaleFactor={1.2} scalingDuration={500}

                imageURLS={[
                    'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
                    'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
                    'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
                    'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
                    'https://www.halfbakedharvest.com/wp-content/uploads/2023/04/20-Minute-Thai-Basil-Beef-Rolls-1-1-480x270.jpg',
                    'https://media.istockphoto.com/id/487960671/photo/homemade-dark-chocolate-ice-cream-cone.jpg?s=612x612&w=0&k=20&c=gx_PFLq0yc4Jdey1AVOVzWAtqZ5SnzGIVkTs57T0g5o=',
                ]}
            />
        </div>
    )
}

export default CollectionDisplay;