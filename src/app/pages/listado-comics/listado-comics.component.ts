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
 * En esta clase, el objeto de tipo Result[] viene de la ¡Interface COMIC!
 */
export class ListadoComicsComponent implements OnInit {
  public comics: Result[] | null = null;
  public datos: Result[] = [];
  public numPage!: number;

  constructor(
    private marvelService: MarvelService,
    private rutaActiva: ActivatedRoute
  ) {}

  /**
   * Esta función es un método de ciclo de vida de Angular que se ejecuta después de que el componente se haya inicializado.
   * En este caso, se establece la variable numPage en cero y se suscribe al parámetro 'page' de la URL utilizando el objeto ActivatedRoute.
   * Si existe el parámetro 'page', numPage se establece en su valor numérico, de lo contrario, numPage se mantiene en cero.
   * Luego, se llama a la función loadComics con el valor de numPage.
   */
  ngOnInit(): void {
    this.numPage = 0;
    // this.calcularPaginas();
    this.rutaActiva.params.subscribe((param) => {
      this.numPage = param['page'] ? +param['page'] : 0;
      this.loadComics(this.numPage);
    });
  }

  /**
   * Esta función llama al servicio de MarvelService para obtener un conjunto de comics a partir de un número de página específico.
   * Utiliza el método getComics del servicio MarvelService y se suscribe al resultado devuelto por el servicio.
   * Cuando se recibe la respuesta, se establece la propiedad datos en el resultado de la respuesta.
   * @param num
   */
  loadComics(num: number) {
    this.marvelService.getComics(num).subscribe((resp: Comic) => {
      this.datos = resp.data.results;
    });
    console.log('LoadComics');
  }

  /**
   * Esta función se utiliza para avanzar o retroceder en las páginas de los cómics mostrados.
   * Si el número pasado como argumento es mayor que cero o si el número actual de página es mayor que cero, se actualiza la variable numPage y
   * se llama a la función loadComics con el nuevo número de página multiplicado por 28.
   * @param num
   */
  passPage(num: number) {
    if (num > 0 || this.numPage > 0) {
      this.numPage += num;
      this.loadComics(this.numPage * 28);
    }
  }

  /**
   * Esta función devuelve un valor booleano que indica si se debe mostrar el botón de avance de página o no.
   * Devuelve false si la variable numPage es igual a 44850 (el último número de página en la API de Marvel), de lo contrario, devuelve true.
   * @returns
   */
  mostrarBotonAvanzar(): boolean {
    return this.numPage !== 44850;
  }

  /**
   * Esta función devuelve un valor booleano que indica si se debe mostrar el botón de retroceso de página o no.
   * Devuelve false si la variable numPage es igual a cero, de lo contrario, devuelve true.
   * @returns
   */
  mostrarBotonAnterior(): boolean {
    return this.numPage !== 0;
  }
}
