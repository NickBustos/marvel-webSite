import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic, Result } from 'src/app/interfaces/comicListado.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-listado-comics',
  templateUrl: './listado-comics.component.html',
  styleUrls: ['./listado-comics.component.css'],
})

/**
 * En esta clase, el objeto de tipo Result[] viene de la ¡Interface Comic!
 */
export class ListadoComicsComponent implements OnInit {
  public comics: any | null = null;
  public datos: Result[] = [];
  public numPage!: number;

  constructor(
    private marvelService: MarvelService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.numPage = 0;
    this.rutaActiva.params.subscribe((param) => {
      this.numPage = param['page'] ? +param['page'] : 0;

      console.log('ngOnInit');
      this.loadComics(this.numPage);
    });
  }

  loadComics(num: number) {
    this.marvelService.getComics(num).subscribe((resp: Comic) => {
      this.datos = resp.data.results;
      console.log(this.datos);
    });
    console.log('LoadComics');
  }

  passPage(num: number) {
    if (num > 0 || this.numPage > 0) {
      this.numPage += num;
      this.loadComics(this.numPage * 28);
    }
  }

  mostrarBotonAvanzar(): boolean {
    if (this.numPage === 100) {
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
