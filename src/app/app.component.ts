import { Component, QueryList, ViewChildren } from '@angular/core';
import { Tehulot, dataset } from './data';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from './sortable-header.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter: string;
  data: Array<Tehulot> = dataset;
  tehulot: Array<Tehulot> = dataset;

  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting tehulot
    if (direction === '' || column === '') {
      this.tehulot = this.data;
    } else {
      this.tehulot = [...this.data].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
