import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interfaces/series.interface';
import { MarvelService } from 'src/app/services/marvel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  public comics: Item[] = [];
  public nombreSerie: string = '';

  constructor(
    private location: Location,
    private rutaActiva: ActivatedRoute,
    private marveService: MarvelService,
    private navegador: Router
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((resp) => {
      /**getSeriesbyId del marveService para obtener los cómics de la serie.
       * Asigna el nombre de la serie a la variable nombreSerie y la lista de cómics a la variable comics. */
      this.marveService.getSeriesbyId(resp['id']).subscribe((resp) => {
        this.nombreSerie = resp.data.results[0].title;
        this.comics = resp.data.results[0].comics.items;
      });
    });
  }

  /**
   * Esta función recibe un cómic como parámetro y extrae su id de la URL del recurso.
   * Navega a la página de perfil del cómic utilizando el router de Angular.
   * @param comic
   */
  navegarComic(comic: Item) {
    const urlArray = comic.resourceURI.split('/');
    const comicId: string = urlArray[urlArray.length - 1];
    console.log(comicId);
    this.navegador.navigate(['perfil-comic', comicId]);
  }

  goBack() {
    this.location.back();
  }
}
