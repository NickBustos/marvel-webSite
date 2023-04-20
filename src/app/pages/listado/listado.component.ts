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

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Result } from 'src/app/interfaces/marvel.interface';
// import { MarvelService } from 'src/app/services/marvel.service';
// import { switchMap } from 'rxjs/operators';

// @Component({
//   selector: 'app-listado',
//   templateUrl: './listado.component.html',
//   styleUrls: ['./listado.component.css'],
// })
// export class ListadoComponent implements OnInit {
//   public datos: Result[] = [];
//   public numPage!: number;

//   constructor(
//     private marvelService: MarvelService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit() {
//     this.numPage = 0;
//     // Inicializa numPage en 0
//     this.route.params
//       .pipe(
//         switchMap((params) =>
//           this.marvelService.getHeroes(+params['page'] * 28)
//         )
//       )
//       .subscribe((heroes) => {
//         // Actualiza los datos de la lista de héroes
//         this.datos = heroes.data.results;
//       });
//   }

//   passPage(num: number) {
//     // Actualiza la página actual sumando el valor de num
//     this.numPage += num;
//   }
// }
