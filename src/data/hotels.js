// mock hotels (this is the starting data of the Redux store)
// sorted by price: low to high
// Low: below 2,500 | Moderate: 2,500 - 5,000 | High: 5,000 - 10,000 | Very high: above 10,000
// Images: Unsplash photos (hotel rooms, resorts, villas, palaces). Swap any `image` URL to change a photo.
export const hotels = [
  {
    id: 1,
    title: 'Raman And Seetha Illam',
    style: 'business',
    description: 'Clean, no-fuss business hotel near the bus stand, market and railway station.',
    price: 1300, // Low
    latitude: 11.0168,
    longitude: 76.9558,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Hotel Madurai',
    style: 'budget',
    description: 'Simple rooms in the heart of Madurai, a short walk from the temple.',
    price: 1800, // Low
    latitude: 9.9252,
    longitude: 78.1198,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Lakshimi Villas',
    style: 'lake',
    description: 'Comfortable rooms with free Wi-Fi and a peaceful view of the lake.',
    price: 2200, // Low
    latitude: 12.2958,
    longitude: 76.6394,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Nilgiri resort',
    style: 'cottage',
    description: 'Wooden hill cottages with tea gardens, bonfire evenings and mountain views.',
    price: 2700, // Moderate
    latitude: 11.4102,
    longitude: 76.695,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'KG Appartment',
    style: 'plantation',
    description: 'Family-run plantation homestay among coffee estates, with home-cooked meals.',
    price: 3100, // Moderate
    latitude: 12.4244,
    longitude: 75.7382,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Green Stay',
    style: 'farmstay',
    description: 'Village farm stay with a garden, fresh farm food and guided nature walks.',
    price: 3600, // Moderate
    latitude: 10.0889,
    longitude: 77.0595,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Mistic Motel',
    style: 'retreat',
    description: 'Quiet hill retreat with misty mornings, a sunrise deck and a small library.',
    price: 4200, // Moderate
    latitude: 10.2381,
    longitude: 77.4892,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Seashore Inn',
    style: 'backwater',
    description: 'Waterside rooms with canoe rides, a rooftop restaurant and sunrise views.',
    price: 4800, // Moderate
    latitude: 9.4981,
    longitude: 76.3388,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Kadal Karai Veedu',
    style: 'beach',
    description: 'Lively beachside resort with a pool, free breakfast and rooms facing the sea.',
    price: 6500, // High
    latitude: 15.2993,
    longitude: 74.124,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Luxury Elite Hotel',
    style: 'boutique',
    description: 'Stylish boutique hotel with designer rooms, a cafe and an evening lounge.',
    price: 7800, // High
    latitude: 13.0827,
    longitude: 80.2707,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'The Spa House',
    style: 'spa',
    description: 'Relaxing resort with a full spa, yoga mornings and a garden pool.',
    price: 9200, // High
    latitude: 9.9312,
    longitude: 76.2673,
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Grandpix Inn',
    style: 'luxury',
    description: 'Spacious luxury suites with butler service, fine dining and a rooftop pool.',
    price: 11500, // Very high
    latitude: 26.2389,
    longitude: 73.0243,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 13,
    title: 'Paris Villa',
    style: 'colonial',
    description: 'Restored colonial villa with a courtyard, arched verandas and a quiet pool, near the sea.',
    price: 13000, // Very high
    latitude: 11.9416,
    longitude: 79.8083,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 14,
    title: 'Temple House',
    style: 'heritage',
    description: 'Old haveli with courtyard dining, folk music and rooftop city views.',
    price: 15000, // Very high
    latitude: 26.9124,
    longitude: 75.7873,
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 15,
    title: 'Elite Palace',
    style: 'palace',
    description: 'Luxury palace stay beside the lake with a spa, fine dining and a private boat ride.',
    price: 17500, // Very high
    latitude: 24.5764,
    longitude: 73.6835,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80&auto=format&fit=crop',
  },
];
