import styles from './homePage.module.css'
import { styleConcat } from '@/utils';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import LandingPageMainSection from '@/components/LandingPageMainSection/LandingPageMainSection';
import CollectionDisplay from '@/components/CollectionDisplay/CollectionDisplay';

export default function Home() {
  return (
    <div className={styles.main_container}>

      <NavigationBar />

      <LandingPageMainSection />

      <CollectionDisplay />
    </div>
  );
}
