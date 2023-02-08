import { Pipe, PipeTransform } from '@angular/core';
import { Tehulot } from './data';

@Pipe({ name: 'tehula' })
export class TehulaPipe implements PipeTransform {
  transform(values: Tehulot[], filter: string): Tehulot[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: Tehulot) => {
      const nameFound =
        value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      // const capitalFound =
      //   value.capital.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

      if (nameFound) {
        return value;
      }
    });
  }
}
