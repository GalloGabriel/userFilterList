import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11;

    //Se não constar numero no formato correto, ou numero não existir
    if(INVALID_PHONE) {
      return 'Telefone indisponível ou inválido';
    }

    const CELLPHONE = phone.length === 11;

    if(CELLPHONE) {

      //Retorna numero formatado para celular
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;

    } else {

      //Retorna numero formatado para telefone comum
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
    }

  }

}
