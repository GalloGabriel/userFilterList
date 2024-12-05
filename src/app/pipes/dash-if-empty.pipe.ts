import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any {
    const IS_EMPTY = value === undefined || value === null || value === '';

    if(IS_EMPTY) {
      return '-';
    }

    // Se value não retornar vazio, retorna o valor que ele recebeu
    return value;
  }

}
