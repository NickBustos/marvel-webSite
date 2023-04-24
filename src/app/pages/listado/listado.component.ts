import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data, Heroe, Result } from 'src/app/interfaces/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public heroes: Heroe | null = null;
  public datos: Result[] = [];
  public numPage!: number;

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.numPage = 0; // Inicializa numPage en 0
    this.route.params.subscribe((params) => {
      this.numPage = params['page'] ? +params['page'] : 0;
      this.loadHeroes(this.numPage);
    });
  }

  loadHeroes(page: number) {
    if (page > 55 || page < 0 || isNaN(page)) {
      window.location.href = './error';
      return;
    }
    this.marvelService.getHeroes(page * 28).subscribe((heroes) => {
      this.heroes = heroes;
      this.datos = heroes.data.results;
    });
  }

  passPage(num: number) {
    if (num > 0 || this.numPage > 0) {
      this.numPage += num;
      this.loadHeroes(this.numPage);
    }
  }

  mostrarBotonAvanzar(): boolean {
    if (this.numPage === 55) {
      return false;
    }
    return true;
  }
  mostrarBotonAnterior(): boolean {
    if (this.numPage === 0) {
      return false;
    }
    return true;
  }
}
