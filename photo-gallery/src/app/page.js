import styles from './homePage.module.css'
import { styleConcat } from '@/utils';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <ImageCarousel intervalDuration={5000} width={200} height={400} />
    </div>
  );
}
