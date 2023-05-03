import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicIndividual } from 'src/app/interfaces/comicIndividual.interface';
import { MarvelService } from '../../services/marvel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfil-comic',
  templateUrl: './perfil-comic.component.html',
  styleUrls: ['./perfil-comic.component.css'],
})
export class PerfilComicComponent implements OnInit {
  rutaImagen: string = '';
  escritores: string[] = [];
  dibujantes: string[] = [];
  idHeroe: number = 0;
  resultadoComic: ComicIndividual | null = null;

  constructor(
    private location: Location,
    private comicActivo: ActivatedRoute,
    private marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    this.comicActivo.params.subscribe((param) => {
      this.marvelService.getComic(param['id']).subscribe((resp) => {
        this.rutaImagen = this.buscarImagen(resp);
        this.escritores = this.buscarEscritores(resp);
        this.dibujantes = this.buscarDibujantes(resp);
        this.resultadoComic = resp;
        console.log(this.resultadoComic);
      });
    });
  }

  buscarImagen(resp: ComicIndividual) {
    return (
      resp.data.results[0].thumbnail.path +
      '.' +
      resp.data.results[0].thumbnail.extension
    );
  }

  buscarEscritores(resp: ComicIndividual) {
    return resp.data.results[0].creators.items
      .filter((item) => item.role === 'writer')
      .map((escritores) => escritores.name);
  }
  buscarDibujantes(resp: ComicIndividual) {
    return resp.data.results[0].creators.items
      .filter((item) => item.role === 'penciller')
      .map((dibujantes) => dibujantes.name);
  }
  redirectHeroe(name: string) {
    this.marvelService.searchHeroebyName(name).subscribe((resp) => {
      console.log(resp);
    });
  }

  goBack() {
    this.location.back();
  }
}
