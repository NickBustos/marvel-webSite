import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public heroes: Heroe | null = null;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    console.log('hola');
    this.marvelService.getHeroes().subscribe((h) => {
      this.heroes = h;
      console.log(
        this.heroes.data
        // this.heroes.data.results[2].thumbnail.path +'.'+
        // this.heroes.data.results[2].thumbnail.extension
      );
    });
  }
}
