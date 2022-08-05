import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { head } from 'lodash';
import { MessageService } from 'primeng/api';
import { map, switchMap, tap } from 'rxjs';
import { Drenaj } from 'src/app/shared/constants/drenaj.const';
import { FitnessMasaj } from 'src/app/shared/constants/fitness-masaj.const';
import { MasajDeRelaxare } from 'src/app/shared/constants/masaj-de-relaxare.const';
import { MassageCategory } from 'src/app/shared/constants/massage-categories.const';
import { SCHEDULE } from 'src/app/shared/constants/schedule.const';
import { DatabaseService } from 'src/app/shared/services/database.service';

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
  styleUrls: ['./appointment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  services: any[] = [];
  hours: any[] = [];
  submitted: boolean = false;
  minDate: Date;

  maxDate: Date;
  //interval: any[]
  private alive = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService, private databaseService: DatabaseService, private cdr: ChangeDetectorRef) {
    this.form = new FormGroup({
      service: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      hour: new FormControl('', [Validators.required]),
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
    }];



    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 7);

  }


  get service() {
    return this.form?.get('service') as FormControl;
  }

  get date() {
    return this.form?.get('date') as FormControl;
  }

  get hour() {
    return this.form?.get('hour') as FormControl;
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
   // this.getHours();
    this.date.patchValue(new Date());

  }

  // getHours() {
  //   this.date.valueChanges.pipe(
  //     switchMap(date => {
  //       return this.databaseService.getAvailableHours(new Date(date).toLocaleDateString()).pipe(
  //         map(hours => SCHEDULE.filter(s => !hours.find(h => h === s.value))),
  //         tap(hours => {
  //           this.hours = hours;
  //           this.hour.patchValue(head(this.hours));
  //           this.cdr.markForCheck();
  //         })
  //       )
  //     })
  //   ).subscribe();
  // }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const form = this.form.getRawValue();
    const payload = {
      ...form,
      date: new Date(form.date).toLocaleDateString()
    }
    this.databaseService.addItem(payload);
    this.messageService.add({ severity: 'success', detail: 'Programarea a fost salvata cu succes!' });

  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
