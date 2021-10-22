import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card.profile.component.html',
  styleUrls: ['./card.profile.component.css'],
})
export class CardProfileComponent {
  @Input() name: String;
  @Input() job: String;
  @Input() bio: String;

  @Output() btnClick = new EventEmitter<string>();

  buttonClicked($event) {
    this.btnClick.emit($event);
  }
}
