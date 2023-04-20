import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validarDesc',
})
export class ValidarDescPipe implements PipeTransform {
  transform(param: string): string {
    if ((param == '' )) {
      return 'Ooops! Parece que esta descripción esta vacía. Intenta con otro personaje.';
    } else {
      return param;
    }
  }
}
