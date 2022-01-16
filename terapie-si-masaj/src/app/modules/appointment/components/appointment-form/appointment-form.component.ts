import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  personalInformation: any;

  submitted: boolean = false;

  constructor( private router: Router) { }

  ngOnInit() { 
      //this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
  }

  nextPage() {
      if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
        //  this.ticketService.ticketInformation.personalInformation = this.personalInformation;
          this.router.navigate(['steps/seat']);

          return;
      }

      this.submitted = true;
  }
}
