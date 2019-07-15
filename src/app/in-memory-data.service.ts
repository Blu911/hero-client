import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Dr Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Dr Nice'},
      {id: 14, name: 'Bombasto'},
      {id: 15, name: 'Celeritas'},
      {id: 16, name: 'Magneta'},
      {id: 17, name: 'RubberMan'},
      {id: 19, name: 'Dynama'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() {
  }
}
