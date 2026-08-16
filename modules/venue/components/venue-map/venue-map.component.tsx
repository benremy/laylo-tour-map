import dynamic from 'next/dynamic';
import { VenueDetail } from './components/venue-detail/venue-detail.component';
import styles from './venue-map.module.scss';

const MapCanvas = dynamic(
  () => import('./components/map-canvas/map-canvas.component').then((m) => m.MapCanvas),
  { ssr: false }
);

export function VenueMap() {
  return (
    <div className={styles.wrapper}>
      <MapCanvas />
      <VenueDetail />
    </div>
  );
}
