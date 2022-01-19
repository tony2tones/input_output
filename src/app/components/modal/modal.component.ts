import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardProfile } from 'src/app/models/cardProfile.model';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() userProfile: CardProfile;
  // @Input() job: String;
  // @Input() bio: String;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  open(userProfile:CardProfile) {
    this.modalService.open(userProfile, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.userProfile.name}`;
    });
  }
}
  
