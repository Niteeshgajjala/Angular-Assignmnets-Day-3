import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p1'
})
export class P1Pipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
