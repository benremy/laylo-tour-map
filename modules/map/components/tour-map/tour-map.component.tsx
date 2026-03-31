import dynamic from 'next/dynamic';
import { ShowDetail } from './components/show-detail/show-detail.component';
import styles from './tour-map.module.scss';

const MapCanvas = dynamic(
  () => import('./components/map-canvas/map-canvas.component').then((m) => m.MapCanvas),
  { ssr: false }
);

export function TourMap() {
  return (
    <div className={styles.wrapper}>
      <MapCanvas />
      <ShowDetail />
    </div>
  );
}
