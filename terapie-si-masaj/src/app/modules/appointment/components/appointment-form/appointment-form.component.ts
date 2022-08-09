import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { find, head, toNumber } from 'lodash';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { switchMap, takeWhile } from 'rxjs';
import { County } from 'src/app/shared/constants/county.const';
import { Drenaj } from 'src/app/shared/constants/drenaj.const';
import { FitnessMasaj } from 'src/app/shared/constants/fitness-masaj.const';
import { MasajDeRelaxare } from 'src/app/shared/constants/masaj-de-relaxare.const';
import { getFormattedDate, nonEmptyProperties } from 'src/app/shared/constants/utility.const';
import { AppointmentDefinitionService } from 'src/app/shared/services/appointment-definition.service';

import { AppointmentService } from '../../services/appointment.service';

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
  durationOptions: any[] = [];
  counties: any[];
  hours: any[] = [];
  submitted: boolean = false;
  minDate: Date;

  maxDate: Date;
  //interval: any[]
  private alive = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService, private appointmentService: AppointmentService, private appointmentDefinitionService: AppointmentDefinitionService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      massage: new FormControl('', [Validators.required]),
      duration: new FormControl(60, Validators.required),
      date: new FormControl('', [Validators.required]),
      hour: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      county: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      observation: new FormControl('', [])
    });
    this.durationOptions = [{
      label: '60 minute',
      value: 60
    },
    {
      label: '90 minute',
      value: 90
    }]
    this.services = [
      { label: MasajDeRelaxare.TerapieCorporala, value: MasajDeRelaxare.TerapieCorporala },
      { label: MasajDeRelaxare.MasajTerapeutic, value: MasajDeRelaxare.MasajTerapeutic },
      { label: MasajDeRelaxare.MasajFacial, value: MasajDeRelaxare.MasajFacial },
      { label: MasajDeRelaxare.MasajPeScaun, value: MasajDeRelaxare.MasajPeScaun },
      { label: Drenaj.DrenajLimfaticPartial, value: Drenaj.DrenajLimfaticPartial },
      { label: FitnessMasaj.FitnessMasajAnticelulitic, value: FitnessMasaj.FitnessMasajAnticelulitic }
    ];
    this.counties = [
      { label: 'Sectorul 1', value: County.SECTOR_1 },
      { label: 'Sectorul 2', value: County.SECTOR_2, },
      { label: 'Sectorul 3', value: County.SECTOR_3, },
      { label: 'Sectorul 4', value: County.SECTOR_4, },
      { label: 'Sectorul 5', value: County.SECTOR_5, },
      { label: 'Sectorul 6', value: County.SECTOR_6, }

    ];


    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 7);

  }


  get massage() {
    return this.form?.get('massage') as FormControl;
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
  get phoneNumber() {
    return this.form?.get('phoneNumber') as FormControl;
  }
  get email() {
    return this.form?.get('email') as FormControl;
  }
  get county() {
    return this.form?.get('county') as FormControl;
  }
  get address() {
    return this.form?.get('address') as FormControl;
  }
  get observation() {
    return this.form?.get('observation') as FormControl;
  }

  ngOnInit() {
    //this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    this.route.queryParams.pipe(takeWhile(() => this.alive)).subscribe(params => {
      const { massage, location } = params;
      this.county.patchValue(location ? toNumber(location) : '');
      this.massage.patchValue(massage || '');
    })
    const date = new Date();
    this.getHours();
    this.date.patchValue(new Date());

  }

  getHours() {
    this.date.valueChanges.pipe(
      switchMap((date: string) => this.appointmentDefinitionService.getAvailableSchedule(getFormattedDate(date)))
    ).subscribe((hours: number[]) => {
      this.hours = hours;
      console.log(head(hours), 'head')
      this.hour.patchValue(head(hours));
      // this.hour.updateValueAndValidity();
      // this.cdr.markForCheck();
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const form = this.form.getRawValue();
    const { date } = form;
    const payload = {
      ...form,
      date: moment(date).format('DD.MM.YYYY')
    }
    this.appointmentService.saveAppointment(nonEmptyProperties(payload)).pipe().subscribe((res) => {
      this.messageService.add({ severity: 'success', detail: 'Programarea a fost salvata cu succes!' });
      this.router.navigate(['/']);
    });

  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
