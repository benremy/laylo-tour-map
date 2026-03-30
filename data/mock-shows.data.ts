import type { Show } from '@/modules/map/tour.types';

export const mockShows: Show[] = [
  // ─── Los Angeles, CA — highest demand (~28 shows) ───────────────────────────
  { id: 's-la-01', venue: { id: 'v-la-01', name: 'Crypto.com Arena', city: 'Los Angeles', state: 'CA', lat: 34.0430, lng: -118.2673 }, date: '2025-08-07', ticketUrl: '#' },
  { id: 's-la-02', venue: { id: 'v-la-02', name: 'Hollywood Bowl', city: 'Los Angeles', state: 'CA', lat: 34.1122, lng: -118.3392 }, date: '2025-08-09', ticketUrl: '#' },
  { id: 's-la-03', venue: { id: 'v-la-03', name: 'The Forum', city: 'Inglewood', state: 'CA', lat: 33.9583, lng: -118.3417 }, date: '2025-08-12', ticketUrl: '#' },
  { id: 's-la-04', venue: { id: 'v-la-04', name: 'SoFi Stadium', city: 'Inglewood', state: 'CA', lat: 33.9535, lng: -118.3392 }, date: '2025-08-15', ticketUrl: '#' },
  { id: 's-la-05', venue: { id: 'v-la-05', name: 'Greek Theatre', city: 'Los Angeles', state: 'CA', lat: 34.1123, lng: -118.2988 }, date: '2025-08-19', ticketUrl: '#' },
  { id: 's-la-06', venue: { id: 'v-la-06', name: 'The Wiltern', city: 'Los Angeles', state: 'CA', lat: 34.0596, lng: -118.3085 }, date: '2025-08-22', ticketUrl: '#' },
  { id: 's-la-07', venue: { id: 'v-la-07', name: 'The Roxy Theatre', city: 'West Hollywood', state: 'CA', lat: 34.0904, lng: -118.3868 }, date: '2025-08-25', ticketUrl: '#' },
  { id: 's-la-08', venue: { id: 'v-la-08', name: 'Troubadour', city: 'West Hollywood', state: 'CA', lat: 34.0812, lng: -118.3874 }, date: '2025-08-28', ticketUrl: '#' },
  { id: 's-la-09', venue: { id: 'v-la-09', name: 'El Rey Theatre', city: 'Los Angeles', state: 'CA', lat: 34.0585, lng: -118.3397 }, date: '2025-09-02', ticketUrl: '#' },
  { id: 's-la-10', venue: { id: 'v-la-10', name: 'Banc of California Stadium', city: 'Los Angeles', state: 'CA', lat: 34.0134, lng: -118.2853 }, date: '2025-09-05', ticketUrl: '#' },
  { id: 's-la-11', venue: { id: 'v-la-11', name: 'The Novo', city: 'Los Angeles', state: 'CA', lat: 34.0432, lng: -118.2649 }, date: '2025-09-09', ticketUrl: '#' },
  { id: 's-la-12', venue: { id: 'v-la-12', name: 'Shrine Auditorium', city: 'Los Angeles', state: 'CA', lat: 34.0185, lng: -118.2820 }, date: '2025-09-12', ticketUrl: '#' },
  { id: 's-la-13', venue: { id: 'v-la-13', name: 'Ace Hotel Theatre', city: 'Los Angeles', state: 'CA', lat: 34.0441, lng: -118.2578 }, date: '2025-09-16', ticketUrl: '#' },
  { id: 's-la-14', venue: { id: 'v-la-14', name: 'The Palladium', city: 'Hollywood', state: 'CA', lat: 34.1003, lng: -118.3267 }, date: '2025-09-19', ticketUrl: '#' },
  { id: 's-la-15', venue: { id: 'v-la-15', name: 'Long Beach Arena', city: 'Long Beach', state: 'CA', lat: 33.7650, lng: -118.1893 }, date: '2025-09-23', ticketUrl: '#' },
  { id: 's-la-16', venue: { id: 'v-la-16', name: 'Kia Forum', city: 'Inglewood', state: 'CA', lat: 33.9585, lng: -118.3420 }, date: '2025-09-26', ticketUrl: '#' },
  { id: 's-la-17', venue: { id: 'v-la-17', name: 'Fonda Theatre', city: 'Hollywood', state: 'CA', lat: 34.0981, lng: -118.3347 }, date: '2025-09-30', ticketUrl: '#' },
  { id: 's-la-18', venue: { id: 'v-la-18', name: 'The Echo', city: 'Los Angeles', state: 'CA', lat: 34.0797, lng: -118.2701 }, date: '2025-10-03', ticketUrl: '#' },
  { id: 's-la-19', venue: { id: 'v-la-19', name: 'Whisky a Go Go', city: 'West Hollywood', state: 'CA', lat: 34.0907, lng: -118.3875 }, date: '2025-10-07', ticketUrl: '#' },
  { id: 's-la-20', venue: { id: 'v-la-20', name: 'The Mayan', city: 'Los Angeles', state: 'CA', lat: 34.0401, lng: -118.2594 }, date: '2025-10-10', ticketUrl: '#' },
  { id: 's-la-21', venue: { id: 'v-la-21', name: 'Teragram Ballroom', city: 'Los Angeles', state: 'CA', lat: 34.0556, lng: -118.2642 }, date: '2025-10-14', ticketUrl: '#' },
  { id: 's-la-22', venue: { id: 'v-la-22', name: 'Lodge Room', city: 'Highland Park', state: 'CA', lat: 34.1111, lng: -118.2072 }, date: '2025-10-17', ticketUrl: '#' },
  { id: 's-la-23', venue: { id: 'v-la-23', name: 'BMO Stadium', city: 'Los Angeles', state: 'CA', lat: 34.0134, lng: -118.2855 }, date: '2025-10-21', ticketUrl: '#' },
  { id: 's-la-24', venue: { id: 'v-la-24', name: 'Santa Monica Civic Auditorium', city: 'Santa Monica', state: 'CA', lat: 34.0124, lng: -118.4912 }, date: '2025-10-24', ticketUrl: '#' },
  { id: 's-la-25', venue: { id: 'v-la-25', name: 'Pomona Fox Theater', city: 'Pomona', state: 'CA', lat: 34.0558, lng: -117.7517 }, date: '2025-10-28', ticketUrl: '#' },
  { id: 's-la-26', venue: { id: 'v-la-26', name: 'Glass House', city: 'Pomona', state: 'CA', lat: 34.0549, lng: -117.7506 }, date: '2025-11-01', ticketUrl: '#' },
  { id: 's-la-27', venue: { id: 'v-la-27', name: 'House of Blues Anaheim', city: 'Anaheim', state: 'CA', lat: 33.8085, lng: -117.9190 }, date: '2025-11-04', ticketUrl: '#' },
  { id: 's-la-28', venue: { id: 'v-la-28', name: 'The Observatory OC', city: 'Santa Ana', state: 'CA', lat: 33.7516, lng: -117.8674 }, date: '2025-11-07', ticketUrl: '#' },

  // ─── New York, NY — second highest (~18 shows) ───────────────────────────────
  { id: 's-ny-01', venue: { id: 'v-ny-01', name: 'Madison Square Garden', city: 'New York', state: 'NY', lat: 40.7505, lng: -73.9934 }, date: '2025-08-08', ticketUrl: '#' },
  { id: 's-ny-02', venue: { id: 'v-ny-02', name: 'Barclays Center', city: 'Brooklyn', state: 'NY', lat: 40.6826, lng: -73.9754 }, date: '2025-08-11', ticketUrl: '#' },
  { id: 's-ny-03', venue: { id: 'v-ny-03', name: 'Radio City Music Hall', city: 'New York', state: 'NY', lat: 40.7599, lng: -73.9799 }, date: '2025-08-14', ticketUrl: '#' },
  { id: 's-ny-04', venue: { id: 'v-ny-04', name: 'Terminal 5', city: 'New York', state: 'NY', lat: 40.7726, lng: -74.0020 }, date: '2025-08-18', ticketUrl: '#' },
  { id: 's-ny-05', venue: { id: 'v-ny-05', name: 'Bowery Ballroom', city: 'New York', state: 'NY', lat: 40.7204, lng: -73.9937 }, date: '2025-08-21', ticketUrl: '#' },
  { id: 's-ny-06', venue: { id: 'v-ny-06', name: 'Brooklyn Steel', city: 'Brooklyn', state: 'NY', lat: 40.7226, lng: -73.9448 }, date: '2025-08-24', ticketUrl: '#' },
  { id: 's-ny-07', venue: { id: 'v-ny-07', name: 'Webster Hall', city: 'New York', state: 'NY', lat: 40.7310, lng: -73.9886 }, date: '2025-08-27', ticketUrl: '#' },
  { id: 's-ny-08', venue: { id: 'v-ny-08', name: 'Hammerstein Ballroom', city: 'New York', state: 'NY', lat: 40.7488, lng: -73.9958 }, date: '2025-09-01', ticketUrl: '#' },
  { id: 's-ny-09', venue: { id: 'v-ny-09', name: 'Forest Hills Stadium', city: 'Queens', state: 'NY', lat: 40.7218, lng: -73.8465 }, date: '2025-09-04', ticketUrl: '#' },
  { id: 's-ny-10', venue: { id: 'v-ny-10', name: 'Rough Trade NYC', city: 'Brooklyn', state: 'NY', lat: 40.7230, lng: -73.9508 }, date: '2025-09-08', ticketUrl: '#' },
  { id: 's-ny-11', venue: { id: 'v-ny-11', name: 'Irving Plaza', city: 'New York', state: 'NY', lat: 40.7352, lng: -73.9887 }, date: '2025-09-11', ticketUrl: '#' },
  { id: 's-ny-12', venue: { id: 'v-ny-12', name: 'The Paramount', city: 'Huntington', state: 'NY', lat: 40.8682, lng: -73.4257 }, date: '2025-09-15', ticketUrl: '#' },
  { id: 's-ny-13', venue: { id: 'v-ny-13', name: 'Brooklyn Bowl', city: 'Brooklyn', state: 'NY', lat: 40.7223, lng: -73.9575 }, date: '2025-09-18', ticketUrl: '#' },
  { id: 's-ny-14', venue: { id: 'v-ny-14', name: 'Pier 17', city: 'New York', state: 'NY', lat: 40.7048, lng: -74.0036 }, date: '2025-09-22', ticketUrl: '#' },
  { id: 's-ny-15', venue: { id: 'v-ny-15', name: 'Blue Note Jazz Club', city: 'New York', state: 'NY', lat: 40.7300, lng: -74.0004 }, date: '2025-09-25', ticketUrl: '#' },
  { id: 's-ny-16', venue: { id: 'v-ny-16', name: 'Beacon Theatre', city: 'New York', state: 'NY', lat: 40.7801, lng: -73.9809 }, date: '2025-09-29', ticketUrl: '#' },
  { id: 's-ny-17', venue: { id: 'v-ny-17', name: 'Elsewhere', city: 'Brooklyn', state: 'NY', lat: 40.7060, lng: -73.9242 }, date: '2025-10-02', ticketUrl: '#' },
  { id: 's-ny-18', venue: { id: 'v-ny-18', name: 'Music Hall of Williamsburg', city: 'Brooklyn', state: 'NY', lat: 40.7145, lng: -73.9590 }, date: '2025-10-06', ticketUrl: '#' },

  // ─── Chicago, IL (~10 shows) ─────────────────────────────────────────────────
  { id: 's-ch-01', venue: { id: 'v-ch-01', name: 'United Center', city: 'Chicago', state: 'IL', lat: 41.8807, lng: -87.6742 }, date: '2025-08-16', ticketUrl: '#' },
  { id: 's-ch-02', venue: { id: 'v-ch-02', name: 'Riot Fest Grounds', city: 'Chicago', state: 'IL', lat: 41.8337, lng: -87.7199 }, date: '2025-08-23', ticketUrl: '#' },
  { id: 's-ch-03', venue: { id: 'v-ch-03', name: 'Metro Chicago', city: 'Chicago', state: 'IL', lat: 41.9475, lng: -87.6651 }, date: '2025-09-03', ticketUrl: '#' },
  { id: 's-ch-04', venue: { id: 'v-ch-04', name: 'Thalia Hall', city: 'Chicago', state: 'IL', lat: 41.8486, lng: -87.6581 }, date: '2025-09-10', ticketUrl: '#' },
  { id: 's-ch-05', venue: { id: 'v-ch-05', name: 'Riviera Theatre', city: 'Chicago', state: 'IL', lat: 41.9818, lng: -87.6650 }, date: '2025-09-17', ticketUrl: '#' },
  { id: 's-ch-06', venue: { id: 'v-ch-06', name: 'Wintrust Arena', city: 'Chicago', state: 'IL', lat: 41.8759, lng: -87.6269 }, date: '2025-09-24', ticketUrl: '#' },
  { id: 's-ch-07', venue: { id: 'v-ch-07', name: 'The Empty Bottle', city: 'Chicago', state: 'IL', lat: 41.8963, lng: -87.6818 }, date: '2025-10-01', ticketUrl: '#' },
  { id: 's-ch-08', venue: { id: 'v-ch-08', name: 'Aragon Ballroom', city: 'Chicago', state: 'IL', lat: 41.9801, lng: -87.6654 }, date: '2025-10-08', ticketUrl: '#' },
  { id: 's-ch-09', venue: { id: 'v-ch-09', name: 'House of Blues Chicago', city: 'Chicago', state: 'IL', lat: 41.8926, lng: -87.6305 }, date: '2025-10-15', ticketUrl: '#' },
  { id: 's-ch-10', venue: { id: 'v-ch-10', name: 'Soldier Field', city: 'Chicago', state: 'IL', lat: 41.8623, lng: -87.6167 }, date: '2025-10-22', ticketUrl: '#' },

  // ─── Miami, FL (~8 shows) ─────────────────────────────────────────────────────
  { id: 's-mi-01', venue: { id: 'v-mi-01', name: 'Kaseya Center', city: 'Miami', state: 'FL', lat: 25.7814, lng: -80.1870 }, date: '2025-08-10', ticketUrl: '#' },
  { id: 's-mi-02', venue: { id: 'v-mi-02', name: 'Hard Rock Live', city: 'Hollywood', state: 'FL', lat: 26.0099, lng: -80.2488 }, date: '2025-08-17', ticketUrl: '#' },
  { id: 's-mi-03', venue: { id: 'v-mi-03', name: 'Wynwood Marketplace', city: 'Miami', state: 'FL', lat: 25.8008, lng: -80.1994 }, date: '2025-09-07', ticketUrl: '#' },
  { id: 's-mi-04', venue: { id: 'v-mi-04', name: 'Club Space Miami', city: 'Miami', state: 'FL', lat: 25.7784, lng: -80.1887 }, date: '2025-09-14', ticketUrl: '#' },
  { id: 's-mi-05', venue: { id: 'v-mi-05', name: 'The Fillmore Miami Beach', city: 'Miami Beach', state: 'FL', lat: 25.7907, lng: -80.1300 }, date: '2025-09-21', ticketUrl: '#' },
  { id: 's-mi-06', venue: { id: 'v-mi-06', name: 'III Points Festival', city: 'Miami', state: 'FL', lat: 25.7748, lng: -80.2053 }, date: '2025-10-11', ticketUrl: '#' },
  { id: 's-mi-07', venue: { id: 'v-mi-07', name: 'The Ground Miami', city: 'Miami', state: 'FL', lat: 25.7779, lng: -80.1864 }, date: '2025-10-18', ticketUrl: '#' },
  { id: 's-mi-08', venue: { id: 'v-mi-08', name: 'Bayfront Park Amphitheater', city: 'Miami', state: 'FL', lat: 25.7748, lng: -80.1867 }, date: '2025-11-01', ticketUrl: '#' },

  // ─── San Francisco / Bay Area, CA (~7 shows) ─────────────────────────────────
  { id: 's-sf-01', venue: { id: 'v-sf-01', name: 'Chase Center', city: 'San Francisco', state: 'CA', lat: 37.7680, lng: -122.3877 }, date: '2025-08-13', ticketUrl: '#' },
  { id: 's-sf-02', venue: { id: 'v-sf-02', name: 'The Fillmore', city: 'San Francisco', state: 'CA', lat: 37.7843, lng: -122.4330 }, date: '2025-08-20', ticketUrl: '#' },
  { id: 's-sf-03', venue: { id: 'v-sf-03', name: 'Bill Graham Civic Auditorium', city: 'San Francisco', state: 'CA', lat: 37.7780, lng: -122.4178 }, date: '2025-09-06', ticketUrl: '#' },
  { id: 's-sf-04', venue: { id: 'v-sf-04', name: 'Fox Theater', city: 'Oakland', state: 'CA', lat: 37.8052, lng: -122.2697 }, date: '2025-09-13', ticketUrl: '#' },
  { id: 's-sf-05', venue: { id: 'v-sf-05', name: 'Shoreline Amphitheatre', city: 'Mountain View', state: 'CA', lat: 37.4267, lng: -122.0800 }, date: '2025-09-27', ticketUrl: '#' },
  { id: 's-sf-06', venue: { id: 'v-sf-06', name: 'Great American Music Hall', city: 'San Francisco', state: 'CA', lat: 37.7826, lng: -122.4187 }, date: '2025-10-09', ticketUrl: '#' },
  { id: 's-sf-07', venue: { id: 'v-sf-07', name: 'Outside Lands Stage', city: 'San Francisco', state: 'CA', lat: 37.7694, lng: -122.4862 }, date: '2025-10-16', ticketUrl: '#' },

  // ─── Austin, TX (~6 shows) ────────────────────────────────────────────────────
  { id: 's-au-01', venue: { id: 'v-au-01', name: 'Moody Center', city: 'Austin', state: 'TX', lat: 30.2870, lng: -97.7366 }, date: '2025-09-04', ticketUrl: '#' },
  { id: 's-au-02', venue: { id: 'v-au-02', name: 'ACL Live at the Moody Theater', city: 'Austin', state: 'TX', lat: 30.2657, lng: -97.7480 }, date: '2025-09-11', ticketUrl: '#' },
  { id: 's-au-03', venue: { id: 'v-au-03', name: 'Stubb\'s Amphitheater', city: 'Austin', state: 'TX', lat: 30.2672, lng: -97.7346 }, date: '2025-09-18', ticketUrl: '#' },
  { id: 's-au-04', venue: { id: 'v-au-04', name: 'Emo\'s Austin', city: 'Austin', state: 'TX', lat: 30.2479, lng: -97.7377 }, date: '2025-10-05', ticketUrl: '#' },
  { id: 's-au-05', venue: { id: 'v-au-05', name: 'Parish Austin', city: 'Austin', state: 'TX', lat: 30.2680, lng: -97.7368 }, date: '2025-10-19', ticketUrl: '#' },
  { id: 's-au-06', venue: { id: 'v-au-06', name: 'Long Center', city: 'Austin', state: 'TX', lat: 30.2592, lng: -97.7488 }, date: '2025-11-02', ticketUrl: '#' },

  // ─── Nashville, TN (~5 shows) ─────────────────────────────────────────────────
  { id: 's-na-01', venue: { id: 'v-na-01', name: 'Bridgestone Arena', city: 'Nashville', state: 'TN', lat: 36.1593, lng: -86.7785 }, date: '2025-09-19', ticketUrl: '#' },
  { id: 's-na-02', venue: { id: 'v-na-02', name: 'Ryman Auditorium', city: 'Nashville', state: 'TN', lat: 36.1612, lng: -86.7784 }, date: '2025-09-26', ticketUrl: '#' },
  { id: 's-na-03', venue: { id: 'v-na-03', name: 'Ascend Amphitheater', city: 'Nashville', state: 'TN', lat: 36.1595, lng: -86.7748 }, date: '2025-10-12', ticketUrl: '#' },
  { id: 's-na-04', venue: { id: 'v-na-04', name: 'Marathon Music Works', city: 'Nashville', state: 'TN', lat: 36.1535, lng: -86.7897 }, date: '2025-10-26', ticketUrl: '#' },
  { id: 's-na-05', venue: { id: 'v-na-05', name: 'Brooklyn Bowl Nashville', city: 'Nashville', state: 'TN', lat: 36.1523, lng: -86.7799 }, date: '2025-11-09', ticketUrl: '#' },

  // ─── Seattle, WA (~5 shows) ───────────────────────────────────────────────────
  { id: 's-se-01', venue: { id: 'v-se-01', name: 'Climate Pledge Arena', city: 'Seattle', state: 'WA', lat: 47.6221, lng: -122.3540 }, date: '2025-08-14', ticketUrl: '#' },
  { id: 's-se-02', venue: { id: 'v-se-02', name: 'Paramount Theatre', city: 'Seattle', state: 'WA', lat: 47.6126, lng: -122.3344 }, date: '2025-08-26', ticketUrl: '#' },
  { id: 's-se-03', venue: { id: 'v-se-03', name: 'Neumos', city: 'Seattle', state: 'WA', lat: 47.6144, lng: -122.3197 }, date: '2025-09-09', ticketUrl: '#' },
  { id: 's-se-04', venue: { id: 'v-se-04', name: 'WaMu Theater', city: 'Seattle', state: 'WA', lat: 47.5956, lng: -122.3318 }, date: '2025-09-23', ticketUrl: '#' },
  { id: 's-se-05', venue: { id: 'v-se-05', name: 'The Showbox', city: 'Seattle', state: 'WA', lat: 47.6085, lng: -122.3398 }, date: '2025-10-14', ticketUrl: '#' },

  // ─── Atlanta, GA (~5 shows) ───────────────────────────────────────────────────
  { id: 's-at-01', venue: { id: 'v-at-01', name: 'State Farm Arena', city: 'Atlanta', state: 'GA', lat: 33.7573, lng: -84.3963 }, date: '2025-10-10', ticketUrl: '#' },
  { id: 's-at-02', venue: { id: 'v-at-02', name: 'Tabernacle Atlanta', city: 'Atlanta', state: 'GA', lat: 33.7711, lng: -84.3971 }, date: '2025-10-17', ticketUrl: '#' },
  { id: 's-at-03', venue: { id: 'v-at-03', name: 'Coca-Cola Roxy', city: 'Atlanta', state: 'GA', lat: 33.8895, lng: -84.4684 }, date: '2025-10-24', ticketUrl: '#' },
  { id: 's-at-04', venue: { id: 'v-at-04', name: 'Chastain Park Amphitheatre', city: 'Atlanta', state: 'GA', lat: 33.8783, lng: -84.3807 }, date: '2025-11-07', ticketUrl: '#' },
  { id: 's-at-05', venue: { id: 'v-at-05', name: 'Terminal West', city: 'Atlanta', state: 'GA', lat: 33.7710, lng: -84.4135 }, date: '2025-11-14', ticketUrl: '#' },

  // ─── Denver, CO (~4 shows) ────────────────────────────────────────────────────
  { id: 's-de-01', venue: { id: 'v-de-01', name: 'Ball Arena', city: 'Denver', state: 'CO', lat: 39.7486, lng: -105.0076 }, date: '2025-08-21', ticketUrl: '#' },
  { id: 's-de-02', venue: { id: 'v-de-02', name: 'Red Rocks Amphitheatre', city: 'Morrison', state: 'CO', lat: 39.6654, lng: -105.2057 }, date: '2025-09-05', ticketUrl: '#' },
  { id: 's-de-03', venue: { id: 'v-de-03', name: 'Ogden Theatre', city: 'Denver', state: 'CO', lat: 39.7320, lng: -104.9793 }, date: '2025-09-28', ticketUrl: '#' },
  { id: 's-de-04', venue: { id: 'v-de-04', name: 'Mission Ballroom', city: 'Denver', state: 'CO', lat: 39.7639, lng: -104.9748 }, date: '2025-10-20', ticketUrl: '#' },

  // ─── Boston, MA (~4 shows) ────────────────────────────────────────────────────
  { id: 's-bo-01', venue: { id: 'v-bo-01', name: 'TD Garden', city: 'Boston', state: 'MA', lat: 42.3662, lng: -71.0621 }, date: '2025-09-03', ticketUrl: '#' },
  { id: 's-bo-02', venue: { id: 'v-bo-02', name: 'House of Blues Boston', city: 'Boston', state: 'MA', lat: 42.3486, lng: -71.0803 }, date: '2025-09-17', ticketUrl: '#' },
  { id: 's-bo-03', venue: { id: 'v-bo-03', name: 'Royale Boston', city: 'Boston', state: 'MA', lat: 42.3498, lng: -71.0671 }, date: '2025-10-13', ticketUrl: '#' },
  { id: 's-bo-04', venue: { id: 'v-bo-04', name: 'Agganis Arena', city: 'Boston', state: 'MA', lat: 42.3502, lng: -71.1019 }, date: '2025-11-03', ticketUrl: '#' },

  // ─── Houston, TX (~3 shows) ───────────────────────────────────────────────────
  { id: 's-ho-01', venue: { id: 'v-ho-01', name: 'Toyota Center', city: 'Houston', state: 'TX', lat: 29.7508, lng: -95.3621 }, date: '2025-09-06', ticketUrl: '#' },
  { id: 's-ho-02', venue: { id: 'v-ho-02', name: 'White Oak Music Hall', city: 'Houston', state: 'TX', lat: 29.7752, lng: -95.3784 }, date: '2025-10-04', ticketUrl: '#' },
  { id: 's-ho-03', venue: { id: 'v-ho-03', name: 'Cynthia Woods Mitchell Pavilion', city: 'The Woodlands', state: 'TX', lat: 30.1616, lng: -95.4927 }, date: '2025-11-08', ticketUrl: '#' },

  // ─── Las Vegas, NV (~3 shows) ─────────────────────────────────────────────────
  { id: 's-lv-01', venue: { id: 'v-lv-01', name: 'T-Mobile Arena', city: 'Las Vegas', state: 'NV', lat: 36.1028, lng: -115.1784 }, date: '2025-09-13', ticketUrl: '#' },
  { id: 's-lv-02', venue: { id: 'v-lv-02', name: 'Allegiant Stadium', city: 'Las Vegas', state: 'NV', lat: 36.0909, lng: -115.1833 }, date: '2025-10-11', ticketUrl: '#' },
  { id: 's-lv-03', venue: { id: 'v-lv-03', name: 'Brooklyn Bowl Las Vegas', city: 'Las Vegas', state: 'NV', lat: 36.1224, lng: -115.1697 }, date: '2025-11-15', ticketUrl: '#' },

  // ─── Portland, OR (~2 shows) ──────────────────────────────────────────────────
  { id: 's-po-01', venue: { id: 'v-po-01', name: 'Moda Center', city: 'Portland', state: 'OR', lat: 45.5317, lng: -122.6669 }, date: '2025-09-16', ticketUrl: '#' },
  { id: 's-po-02', venue: { id: 'v-po-02', name: 'Crystal Ballroom', city: 'Portland', state: 'OR', lat: 45.5228, lng: -122.6831 }, date: '2025-10-30', ticketUrl: '#' },

  // ─── Phoenix, AZ (~2 shows) ───────────────────────────────────────────────────
  { id: 's-ph-01', venue: { id: 'v-ph-01', name: 'Footprint Center', city: 'Phoenix', state: 'AZ', lat: 33.4457, lng: -112.0712 }, date: '2025-09-20', ticketUrl: '#' },
  { id: 's-ph-02', venue: { id: 'v-ph-02', name: 'The Van Buren', city: 'Phoenix', state: 'AZ', lat: 33.4487, lng: -112.0698 }, date: '2025-11-06', ticketUrl: '#' },

  // ─── Minneapolis, MN (~2 shows) ───────────────────────────────────────────────
  { id: 's-mn-01', venue: { id: 'v-mn-01', name: 'Target Center', city: 'Minneapolis', state: 'MN', lat: 44.9795, lng: -93.2762 }, date: '2025-10-23', ticketUrl: '#' },
  { id: 's-mn-02', venue: { id: 'v-mn-02', name: 'First Avenue', city: 'Minneapolis', state: 'MN', lat: 44.9793, lng: -93.2784 }, date: '2025-11-13', ticketUrl: '#' },

  // ─── New Orleans, LA (~2 shows) ───────────────────────────────────────────────
  { id: 's-no-01', venue: { id: 'v-no-01', name: 'Smoothie King Center', city: 'New Orleans', state: 'LA', lat: 29.9490, lng: -90.0822 }, date: '2025-10-25', ticketUrl: '#' },
  { id: 's-no-02', venue: { id: 'v-no-02', name: 'Tipitina\'s', city: 'New Orleans', state: 'LA', lat: 29.9275, lng: -90.0894 }, date: '2025-11-16', ticketUrl: '#' },

  // ─── Washington DC (~2 shows) ─────────────────────────────────────────────────
  { id: 's-dc-01', venue: { id: 'v-dc-01', name: 'Capital One Arena', city: 'Washington', state: 'DC', lat: 38.8981, lng: -77.0209 }, date: '2025-10-31', ticketUrl: '#' },
  { id: 's-dc-02', venue: { id: 'v-dc-02', name: '9:30 Club', city: 'Washington', state: 'DC', lat: 38.9172, lng: -77.0290 }, date: '2025-11-20', ticketUrl: '#' },
];
