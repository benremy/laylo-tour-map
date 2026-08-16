import type { BookingContact } from '@/modules/venue/venue.types';
import { strings } from '@/constants/strings.constants';
import styles from './contact-venue-cta.module.scss';

interface ContactVenueCtaProps {
  bookingContact: BookingContact;
}

export function ContactVenueCta({ bookingContact }: ContactVenueCtaProps) {
  const { phone, email } = bookingContact;

  if (!phone && !email) {
    return <p className={styles.unavailable}>{strings.contactUnavailableLabel}</p>;
  }

  return (
    <div className={styles.actions}>
      {phone && (
        <a href={`tel:${phone}`} className={styles.actionLink}>
          {strings.contactCallLabel}
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} className={styles.actionLink}>
          {strings.contactEmailLabel}
        </a>
      )}
    </div>
  );
}
