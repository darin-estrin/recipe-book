import { Pipe, PipeTransform } from '@angular/core';
import { last } from 'rxjs/operator/last';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    var arr = value.split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join(' ');
  }

}
