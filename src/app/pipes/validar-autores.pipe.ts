import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validarAutor',
})
export class ValidarAutores implements PipeTransform {
  transform(param: string): string {
    if (param == '') {
      return 'No hay autor proporcionado.';
    } else {
      return param;
    }
  }
}
