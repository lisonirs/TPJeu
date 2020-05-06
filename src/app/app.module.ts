import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RelierComponent } from './relier/relier.component';
import { JeuComponent } from './jeu/jeu.component';
import {ShufflePipe} from  './shuffle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RelierComponent,
    JeuComponent,
    ShufflePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
