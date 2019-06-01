import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}