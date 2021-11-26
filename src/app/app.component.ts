import { Component, OnInit } from '@angular/core';
import { MockApiService } from 'src/mocks/mock-api';
import { CardProfile } from './models/cardProfile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'input-output';
  userProfiles: CardProfile[] = [];

  constructor(private mockService: MockApiService) {}
 

  ngOnInit() {
    this.mockService.getData().subscribe((data:CardProfile[]) => {
      this.userProfiles =  data;

    })
  }

  parentfunction($event:string){
    console.log('event data ', $event);
  }
}
