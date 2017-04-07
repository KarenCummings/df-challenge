import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeneTableComponent } from './gene-table/gene-table.component';
import { GeneDataService } from './gene-data.service';
import { SearchBoxComponent } from './searchbox/searchbox.component';
import { SearchPipe } from './search-pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeneTableComponent,
    SearchBoxComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GeneDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
