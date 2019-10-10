import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'SumoChicken', x: 0, y: 0, rows: 1, cols: 1 },
      { id: 12, name: 'DynamicHipster', x: 1, y: 1, rows: 1, cols: 1 },
      { id: 13, name: 'BombTaco', x: 2, y: 1, rows: 1, cols: 1 },
      { id: 14, name: 'DuckRubber', x: 3, y: 0, rows: 1, cols: 1 },
      { id: 15, name: 'ManOfMega', x: 1, y: 2, rows: 1, cols: 1 },
      { id: 16, name: 'Professor Goose', x: 0, y: 3, rows: 1, cols: 1 },
      { id: 17, name: 'MaskedRiderMagneta', x: 2, y: 2, rows: 1, cols: 1 },
      { id: 18, name: 'TornadoFlame', x: 3, y: 3, rows: 1, cols: 1 }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}