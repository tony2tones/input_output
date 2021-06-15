import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'input-output';
  userProfile: Card;

  data = {
    name: 'Jonny Doe',
    job: 'FrontEnd Gopher',
    bio: 'I am a Gopher that likes to FrontEnd Gophe',
  };

  ngOnInit() {
    this.userProfile = this.data;
  }
}
