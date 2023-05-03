import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Result } from 'src/app/interfaces/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public datos: Result[] = [];
  public numPage!: number;

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute
  ) {}

  /**
   * ngOnInit(): es el método que se ejecuta al iniciar el componente.
   * En este caso, inicializa la variable numPage en 0 y carga los héroes correspondientes a la página actual (que se obtiene de los parámetros de la ruta).
   */
  ngOnInit() {
    this.numPage = 0; // Inicializa numPage en 0
    this.route.params.subscribe((params) => {
      this.numPage = params['page'] ? +params['page'] : 0;
      this.loadHeroes(this.numPage);
    });
    console.log('ngOnInit');
  }

  /**
   * loadHeroes(page: number): carga los héroes de la página especificada en la variable page.
   * Si la página es mayor a 55, menor a 0 o no es un número, redirecciona al usuario a una página de error.
   * Después de obtener los datos de los héroes, los almacena en la variable datos.
   * @param page
   * @returns
   */
  loadHeroes(page: number) {
    if (page > 55 || page < 0 || isNaN(page)) {
      window.location.href = './error';
      return;
    }
    this.marvelService.getHeroes(page * 28).subscribe((heroes) => {
      this.datos = heroes.data.results;
    });
    console.log('LoadHeroes');
  }

  /**
   * passPage(num: number): incrementa o decrementa el número de página (numPage) según el valor de num (1 para avanzar, -1 para retroceder).
   * Luego, llama a loadHeroes() para cargar los datos de la nueva página.
   * @param num
   */
  passPage(num: number) {
    if (num > 0 || this.numPage > 0) {
      this.numPage += num;
      this.loadHeroes(this.numPage);
    }
  }

  /**
   * mostrarBotonAvanzar(): boolean: devuelve true si el número de página actual no es 55 (es decir, si hay una página siguiente), false de lo contrario.
   * @returns
   */
  mostrarBotonAvanzar(): boolean {
    if (this.numPage === 55) {
      return false;
    }
    return true;
  }

  /**
   * mostrarBotonAnterior(): boolean: devuelve true si el número de página actual no es 0 (es decir, si hay una página anterior), false de lo contrario.
   * @returns
   */
  mostrarBotonAnterior(): boolean {
    if (this.numPage === 0) {
      return false;
    }
    return true;
  }
}
