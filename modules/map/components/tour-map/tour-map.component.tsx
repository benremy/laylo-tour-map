import dynamic from 'next/dynamic';
import styles from './tour-map.module.scss';

const MapCanvas = dynamic(
  () => import('../map-canvas/map-canvas.component').then((m) => m.MapCanvas),
  { ssr: false }
);

export function TourMap() {
  return (
    <div className={styles.wrapper}>
      <MapCanvas />
    </div>
  );
}
