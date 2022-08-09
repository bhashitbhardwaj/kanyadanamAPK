import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dob'
})
export class DobPipe implements PipeTransform {

  transform(distance: any, ...args: any[]): unknown {
    return new Date().getFullYear() - new Date(distance).getFullYear();;
  }

}
