export interface IOffer {
  id?: number;
  isPremium: boolean;
  src: string;
  price: number;
  isBookmarked: boolean;
  starsPercent: string;
  name: string;
  type: Type;
}

enum Type {
  Apartment = 'Apartment',
  Room = 'Room'
}

export const offers: IOffer[] = [
  {
    id: 1,
    isPremium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    isBookmarked: false,
    starsPercent: '80%',
    name: 'Beautiful luxurious apartment at great location',
    type: Type.Apartment,
  },
  {
    id: 2,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    isBookmarked: true,
    starsPercent: '80%',
    name: 'Wood and stone place',
    type: Type.Room,
  },
  {
    id: 3,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    isBookmarked: false,
    starsPercent: '80%',
    name: 'Canal View Prinsengracht',
    type: Type.Apartment,
  },
  {
    id: 4,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    isBookmarked: false,
    starsPercent: '100%',
    name: 'Nice, cozy, warm big bed apartment',
    type: Type.Apartment,
  },
  {
    id: 5,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    isBookmarked: true,
    starsPercent: '80%',
    name: 'Wood and stone place',
    type: Type.Room,
  }
];
