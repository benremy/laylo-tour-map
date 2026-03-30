export interface Venue {
  id: string;
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
}

export interface Show {
  id: string;
  venue: Venue;
  date: string;     
  ticketUrl: string;
}
