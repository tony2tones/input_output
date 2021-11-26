import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MockApiService } from 'src/mocks/mock-api';
import { ModalComponent } from './components/modal/modal.component';
import { CardProfile } from './models/cardProfile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'input-output';
  userProfiles: CardProfile;

  constructor(private apiService : MockApiService, private modalService : NgbModal) { }

  ngOnInit() {
    this.apiService.getData().subscribe((data:CardProfile)=> {
      this.userProfiles = data;
    });
  }

  parentfunction($event:string){
    const modalReff = this.modalService.open(ModalComponent, {size: 'sm'});
    const componentInstance = modalReff.componentInstance as ModalComponent;

    componentInstance.name = $event;
  }
}
