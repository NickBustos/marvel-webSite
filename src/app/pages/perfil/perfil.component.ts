import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  enlace: string = '';
  resultadoHeroe: Result | null = null;
  public api: string =
    '?ts=1000&hash=cf95359ee38358dab71af57b9e715e85&apikey=510c5c7672e863155540c01e26a71ebb';

  constructor(
    private location: Location,
    private perfilActivo: ActivatedRoute,
    private marvelService: MarvelService,
    private navegar: Router
  ) {}

  /**
   * ngOnInit() - esta es una función que se ejecuta cuando se inicializa el componente.
   * Utiliza el objeto perfilActivo de ActivatedRoute para obtener los parámetros de la ruta de la URL, y luego llama a getHeroe() del servicio
   * MarvelService para obtener la información del héroe correspondiente a esos parámetros.
   * La información del héroe se almacena en la variable resultadoHeroe y la ruta de la imagen se almacena en la variable rutaImagen.
   */
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

  /**
   * "redirectSerie": esta función se utiliza para navegar al componente de la serie cuando se hace clic en el enlace de la serie.
   * Primero, se construye el enlace completo a la serie utilizando la propiedad "enlace" y el objeto "api".
   * Luego, se llama al método "getSeries" del servicio "MarvelService" para recuperar la serie completa de la API de Marvel.
   * Finalmente, se utiliza la función "navigate" del objeto "Router" para navegar al componente de la serie y mostrar la información de la serie.
   * @param enlace
   */
  redirectSerie(enlace: string) {
    //console.log(enlace + '' + this.api);
    this.enlace = enlace + this.api;
    this.marvelService.getSeries(this.enlace).subscribe((resp) => {
      this.navegar.navigate(['series', resp.data.results[0].id]);
    });
  }

  /**
   * Esta función se utiliza para volver a la página anterior en el historial del navegador utilizando el objeto "Location".
   */
  goBack() {
    this.location.back();
  }
}
