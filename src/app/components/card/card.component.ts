import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() name: String;
  @Input() job: String;
  @Input() bio: String;

  @Output() btnClick = new EventEmitter<string>();

  value = 'the button has been clicked';

  buttonClicked() {
    this.btnClick.emit(this.value);
  }
}
