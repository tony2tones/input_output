import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material stuff
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardProfileComponent } from './components/card-profile/card.profile.component';
import { MockApiService } from 'src/mocks/mock-api';

@NgModule({
  declarations: [
    AppComponent,
    CardProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [MockApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
