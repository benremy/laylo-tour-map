export type OfferingType =
  | 'open-mic'
  | 'live-music'
  | 'singer-songwriter'
  | 'showcase'
  | 'jam-session'
  | 'other';

export interface VenueOffering {
  type: OfferingType;
  label: string;
  schedule: string;
}

export type PayStructure =
  | 'free-exposure'
  | 'pay-to-play'
  | 'door-split'
  | 'guaranteed-fee'
  | 'unknown';

export interface BookingContact {
  name: string | null;
  phone: string | null;
  email: string | null;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  offerings: VenueOffering[];
  genreFit: string[];
  capacity: number | null;
  payStructure: PayStructure;
  payNotes: string;
  equipmentProvided: string[];
  equipmentNotes: string;
  bookingContact: BookingContact;
  curationNotes: string;
  lastVerified: string;
}
