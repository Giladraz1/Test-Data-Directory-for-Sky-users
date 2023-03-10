import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TehulaPipe } from './tehula.pipe';
import { SortableHeaderDirective } from './sortable-header.directive';

@NgModule({
  declarations: [AppComponent, TehulaPipe, SortableHeaderDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
