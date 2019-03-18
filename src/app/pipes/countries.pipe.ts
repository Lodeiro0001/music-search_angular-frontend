import {Pipe, PipeTransform} from '@angular/core';
import {paises} from './countries_list';

@Pipe({
  name: 'countries'
})
export class CountriesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return paises[value];
  }

}
