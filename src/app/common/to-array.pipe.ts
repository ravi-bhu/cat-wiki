import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray',
  standalone: true,
})
export class ToArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    let res = [];
    for (let i = 1; i <= value; i++) {
      res.push(i);
    }
    return res;
  }
}
