import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    let sum = 0;
    for(let i of args){
      sum+=i;
    }
    return `${value} has total marks of ${sum}`;
  }

}
