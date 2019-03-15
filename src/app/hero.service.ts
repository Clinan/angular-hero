import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {HEROES} from './mock/mock-heroes';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[];

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
