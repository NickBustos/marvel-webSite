import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/interfaces/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  rutaImagen: string = '';
  resultadoHeroe: Result | null = null;
  public api: string =
    '?ts=1000&hash=cf95359ee38358dab71af57b9e715e85&apikey=510c5c7672e863155540c01e26a71ebb';

  constructor(
    private location: Location,
    private perfilActivo: ActivatedRoute,
    private marvelService: MarvelService
  ) {}

  ngOnInit(): void {
    this.perfilActivo.params.subscribe((p) => {
      this.marvelService.getHeroe(p['id']).subscribe((resp) => {
        this.rutaImagen =
          resp.data.results[0].thumbnail.path +
          '.' +
          resp.data.results[0].thumbnail.extension;

        this.resultadoHeroe = resp.data.results[0];
        console.log(resp.data.results[0]);
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
