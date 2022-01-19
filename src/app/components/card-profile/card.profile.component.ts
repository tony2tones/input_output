import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardProfile } from 'src/app/models/cardProfile.model';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card.profile.component.html',
  styleUrls: ['./card.profile.component.css'],
})
export class CardProfileComponent {
  @Input() userProfile: CardProfile;

  @Output() selectedProfile = new EventEmitter<Object>();

  buttonClicked(userProfile: CardProfile) {
    this.selectedProfile.emit(userProfile);
  }
}
