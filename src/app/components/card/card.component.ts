import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // cardprofile:Card;
  @Input() name: String;
  @Input() job: String;
  @Input() bio: String;

  // name = 'Jonny Doe';
  // job = 'FrontEnd Gopher';
  // bio = 'I am a Gopher that likes to FrontEnd Gophe';
}
