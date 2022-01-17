import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export const calendarRo = {
  firstDayOfWeek: 1,
  dayNames: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
  dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa'],
  dayNamesMin: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa'],
  dayCodes: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
  monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dateFormat: 'dd.mm.yy',
  today: 'Astăzi',
  clear: 'Șterge'
};
@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  personalInformation: any;

  submitted: boolean = false;
  //interval: any[]

  constructor( private router: Router) { 
    
  }

  ngOnInit() { 
      //this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
      const date = new Date();
      console.log(calendarRo.dayNames[date.getDay()], ' ', calendarRo.monthNames[date.getMonth()])
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
