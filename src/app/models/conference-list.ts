import { Conference } from './conference';

export const ConferenceList: Conference[] = [
  { id: 1, title: 'Angular 21 Conference', description: "Les nouveautés d'Angular 21", date: new Date(2027, 10, 15), place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
  { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur les Signals', date: new Date(2027, 10, 30), place: 'Ariana', maxParticipants: 50, nbParticipants: 44 },
  { id: 3, title: 'Web Conference', description: 'Tendances du développement web', date: new Date(2027, 10, 20), place: 'Sousse', maxParticipants: 80, nbParticipants: 80 },
];
