import styles from './homePage.module.css'
import { styleConcat } from '@/utils';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <ImageCarousel intervalDuration={5000} width={400} height={250} imageURLS={[
        'https://blog.thermoworks.com/wp-content/uploads/2021/06/Ice_Cream_Compressed-43.jpg',
        'https://www.alyonascooking.com/wp-content/uploads/2019/08/chocolate-ice-cream-recipe-19.jpg',
        'https://lh3.googleusercontent.com/LwFcKCcsq1N_fk34nojMA50kCwbdiLVeGmVgElCrWDAK5Jo3VeZZ9aBhLG1hB7IVdqeFvAusP4H7huS8tYCMNA=w1280-h720-c-rj-v1-e365',
        'https://www.halfbakedharvest.com/wp-content/uploads/2022/07/No-Churn-Chocolate-Peanut-Butter-Ice-Cream-1-500x500.jpg',
      ]} />


    </div>
  );
}
