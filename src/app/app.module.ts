import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material stuff
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
