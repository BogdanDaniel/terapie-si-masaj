import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Drenaj } from 'src/app/shared/constants/drenaj.const';
import { FitnessMasaj } from 'src/app/shared/constants/fitness-masaj.const';
import { MasajDeRelaxare } from 'src/app/shared/constants/masaj-de-relaxare.const';
import { MassageCategory } from 'src/app/shared/constants/massage-categories.const';
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
  form: FormGroup;

  services: any[] = [];

  submitted: boolean = false;
  //interval: any[]

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      service: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      address: new FormControl('', [Validators.required]),
      observations: new FormControl('', [])

    })
    this.services = [{
      label: MassageCategory.MasajDeRelaxare, value: MassageCategory.MasajDeRelaxare,
      items: [
        { label: MasajDeRelaxare.TerapieCorporala, value: MasajDeRelaxare.TerapieCorporala },
        { label: MasajDeRelaxare.MasajTerapeutic, value: MasajDeRelaxare.MasajTerapeutic },
        { label: MasajDeRelaxare.MasajFacial, value: MasajDeRelaxare.MasajFacial },
        { label: MasajDeRelaxare.MasajPeScaun, value: MasajDeRelaxare.MasajPeScaun }
      ]
    },
    {
      label: MassageCategory.DrenajLimfatic, value: MassageCategory.DrenajLimfatic,
      items: [
        { label: Drenaj.DrenajLimfaticPartial, value: Drenaj.DrenajLimfaticPartial },
      ]
    },
    {
      label: MassageCategory.FitnessMasaj, value: MassageCategory.FitnessMasaj,
      items: [
        { label: FitnessMasaj.FitnessMasajAnticelulitic, value: FitnessMasaj.FitnessMasajAnticelulitic },
      ]
    }]
    console.log(this.services, 'services')
  }

  get service() {
    return this.form?.get('service') as FormControl;
  } 

  get date() {
    return this.form?.get('date') as FormControl;
  }

  get firstName() {
    return this.form?.get('firstName') as FormControl;
  }
  get lastName() {
    return this.form?.get('lastName') as FormControl;
  }
  get phone() {
    return this.form?.get('phone') as FormControl;
  }
  get email() {
    return this.form?.get('email') as FormControl;
  }
  get address() {
    return this.form?.get('address') as FormControl;
  }
  get observations() {
    return this.form?.get('observations') as FormControl;
  }

  ngOnInit() {
    //this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    const date = new Date();
    console.log(calendarRo.dayNames[date.getDay()], ' ', calendarRo.monthNames[date.getMonth()])

  }

  onSubmit() {
    if(this.form.invalid) {
      return;
    }
    console.log(this.form.getRawValue(), 'submit')
    // if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
    //   //  this.ticketService.ticketInformation.personalInformation = this.personalInformation;
    //   this.router.navigate(['programare/seat']);

    //   return;
    // }

    this.submitted = true;
  }
}
