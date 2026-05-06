import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase', // algo |toogleCase
})
export class ToogleCasePipe implements PipeTransform {

   transform(value: string, upper: boolean = true): string {
    return upper ? value.toUpperCase() : value.toLowerCase();
  }

}
