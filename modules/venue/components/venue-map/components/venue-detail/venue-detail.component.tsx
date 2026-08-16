'use client';

import { strings } from '@/constants/strings.constants';
import { ContactVenueCta } from './components/contact-venue-cta/contact-venue-cta.component';
import { useVenueDetail } from './venue-detail.hook';
import styles from './venue-detail.module.scss';

export function VenueDetail() {
  const { selectedVenue, handleClose } = useVenueDetail();

  return (
    <div className={`${styles.panel} ${selectedVenue ? styles.visible : ''}`}>
      <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
        ×
      </button>
      {selectedVenue && (
        <>
          <p className={styles.venueName}>{selectedVenue.name}</p>
          <p className={styles.location}>
            {selectedVenue.address}, {selectedVenue.city}, {selectedVenue.state}
          </p>

          <ul className={styles.offerings}>
            {selectedVenue.offerings.map((offering, i) => (
              <li key={i} className={styles.offering}>
                <span className={styles.offeringLabel}>{offering.label}</span>
                <span className={styles.offeringSchedule}>{offering.schedule}</span>
              </li>
            ))}
          </ul>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>{strings.payStructureLabel}</dt>
              <dd>{strings.payStructureLabels[selectedVenue.payStructure]}</dd>
              {selectedVenue.payNotes && <dd className={styles.factNote}>{selectedVenue.payNotes}</dd>}
            </div>

            {selectedVenue.capacity !== null && (
              <div className={styles.fact}>
                <dt>{strings.capacityLabel}</dt>
                <dd>{selectedVenue.capacity}</dd>
              </div>
            )}

            {selectedVenue.genreFit.length > 0 && (
              <div className={styles.fact}>
                <dt>{strings.genreFitLabel}</dt>
                <dd>{selectedVenue.genreFit.join(', ')}</dd>
              </div>
            )}

            <div className={styles.fact}>
              <dt>{strings.equipmentProvidedLabel}</dt>
              <dd>
                {selectedVenue.equipmentProvided.length > 0
                  ? selectedVenue.equipmentProvided.join(', ')
                  : strings.equipmentByoLabel}
              </dd>
              {selectedVenue.equipmentNotes && (
                <dd className={styles.factNote}>{selectedVenue.equipmentNotes}</dd>
              )}
            </div>

            {selectedVenue.curationNotes && (
              <div className={styles.fact}>
                <dt>{strings.curationNotesLabel}</dt>
                <dd>{selectedVenue.curationNotes}</dd>
              </div>
            )}

            <div className={styles.fact}>
              <dt>{strings.lastVerifiedLabel}</dt>
              <dd>{selectedVenue.lastVerified}</dd>
            </div>
          </dl>

          <ContactVenueCta bookingContact={selectedVenue.bookingContact} />
        </>
      )}
    </div>
  );
}
