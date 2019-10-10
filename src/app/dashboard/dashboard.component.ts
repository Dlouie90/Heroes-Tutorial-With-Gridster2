import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { GridsterConfig, GridType, GridsterItem, DisplayGrid } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
    this.options = {
      itemChangeCallback: (hero: Hero) => {
        this.saveItem(hero);
      },
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      minCols: 4,
      maxCols: 4,
      minRows: 4,
      maxRows: 5,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: false,
      }
    };
  }

  saveItem(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => {

    });
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
