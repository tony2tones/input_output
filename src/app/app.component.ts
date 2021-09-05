import { Component, OnInit } from '@angular/core';
import { CardProfile } from './models/cardProfile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'input-output';
  userProfiles: CardProfile[] = [];
  // userProfiles:Card;

  // data = [{
  //       name: 'Jonny Doe',
  //       job: 'FrontEnd Gopher',
  //       bio: 'I am a Gopher that likes to FrontEnd Gophe',
  //     }]

  data = [
    {
      name: 'Jonny Doe',
      job: 'FrontEnd Gopher',
      bio: 'I am a Gopher that likes to FrontEnd Gophe',
    },
    {
      name: 'John Dear',
      job: 'Dear FrontEnd',
      bio: 'I am a Dear that likes to dearly FrontEnd',
    },
    {
      name: 'Tony Tones',
      job: 'FrontEnd Developer',
      bio: 'I am a Tony Tones,I use JavaScript, TypeScript and Angular Framework',
    },
  ];

  ngOnInit() {
    this.userProfiles = this.data;
  }
}
