import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {FormsModule} from '@angular/forms';
import {HeroService} from '../hero.service';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private http: HttpClient,
              private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(hs => this.heroes = hs);
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
