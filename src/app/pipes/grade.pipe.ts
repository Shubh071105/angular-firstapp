import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value>=0 && value<35){
      return "F";
    } else if(value>=35 && value<50){
      return "E";
    } else if(value>=50 && value<60){
      return "D";
    } else if(value>=60 && value<70){
      return "C";
    } else if(value>=70 && value<80){
      return "B";
    } else if(value>=80 && value<=100){
      return "A";
    }else{
      return "Invalid Marks";
    }
  }

}
