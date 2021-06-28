import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() name: String;
  @Input() job: String;
  @Input() bio: String;
}
