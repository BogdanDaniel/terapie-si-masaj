import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { find, head, toNumber } from 'lodash';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { switchMap, takeWhile, take, withLatestFrom } from 'rxjs';
import { County } from 'src/app/shared/constants/county.const';
import { Drenaj } from 'src/app/shared/constants/drenaj.const';
import { FitnessMasaj } from 'src/app/shared/constants/fitness-masaj.const';
import { MasajDeRelaxare } from 'src/app/shared/constants/masaj-de-relaxare.const';
import { getFormattedDate, nonEmptyProperties } from 'src/app/shared/constants/utility.const';
import { Massage } from 'src/app/shared/models/massage.model';
import { User } from 'src/app/shared/models/user.model';
import { AppointmentDefinitionService } from 'src/app/shared/services/appointment-definition.service';
import { MassagesService } from 'src/app/shared/services/massages.service';
import { UserService } from 'src/app/shared/services/user.service';

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
  form: UntypedFormGroup;

  services: Massage[] = [];
  durationOptions: any[] = [];
  counties: any[];
  hours: any[] = [];
  isLoading  = false;
  submitted: boolean = false;
  minDate: Date;

  maxDate: Date;
  userId: string | undefined;
  //interval: any[]
  private alive = true;

  constructor(private router: Router,
    private formBuilder: UntypedFormBuilder,
    private massagesService: MassagesService,
    private messageService: MessageService, private appointmentService: AppointmentService, private appointmentDefinitionService: AppointmentDefinitionService, private route: ActivatedRoute, private userService: UserService) {
    this.form = new UntypedFormGroup({
      massage: new UntypedFormControl('', [Validators.required]),
      duration: new UntypedFormControl(60, Validators.required),
      date: new UntypedFormControl('', [Validators.required]),
      hour: new UntypedFormControl('', [Validators.required]),
      firstName: new UntypedFormControl('', [Validators.required]),
      lastName: new UntypedFormControl('', [Validators.required]),
      phoneNumber: new UntypedFormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new UntypedFormControl('', []),
      county: new UntypedFormControl('', [Validators.required]),
      address: new UntypedFormControl('', [Validators.required]),
      observation: new UntypedFormControl('', [])
    });
    this.massagesService.getAllMasages().pipe(withLatestFrom(this.route.queryParams)).subscribe(([res, params]) => {
      if (params['massage']) {
        this.massage.patchValue(find(res, r => r.id === params['massage']));
      } else {
        this.massage.patchValue(res ? res[0] : '');
      }
      this.services = res;
    });

    this.massage.valueChanges.pipe(
      takeWhile(() => this.alive)
    ).subscribe((massage: Massage) => {
      this.durationOptions = this.getDurationOptions(massage?.pricing.map((pricing) => pricing?.duration));
      this.duration.patchValue(this.durationOptions && this.durationOptions[0].value);
    })
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

    this.userService.user.pipe(take(1)).subscribe((user: User | null) => this.userId = user?._id)

  }


  get massage() {
    return this.form?.get('massage') as UntypedFormControl;
  }

  get date() {
    return this.form?.get('date') as UntypedFormControl;
  }

  get hour() {
    return this.form?.get('hour') as UntypedFormControl;
  }

  get duration() {
    return this.form?.get('duration') as UntypedFormControl;
  }

  get firstName() {
    return this.form?.get('firstName') as UntypedFormControl;
  }
  get lastName() {
    return this.form?.get('lastName') as UntypedFormControl;
  }
  get phoneNumber() {
    return this.form?.get('phoneNumber') as UntypedFormControl;
  }
  get email() {
    return this.form?.get('email') as UntypedFormControl;
  }
  get county() {
    return this.form?.get('county') as UntypedFormControl;
  }
  get address() {
    return this.form?.get('address') as UntypedFormControl;
  }
  get observation() {
    return this.form?.get('observation') as UntypedFormControl;
  }

  ngOnInit() {
    this.massage.valueChanges.subscribe(mass => console.log(mass, 'mass'))
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


  getDurationOptions(values: any[]) {
    if (!values) return [];
    return values.map(v => ({
      label: `${v} minute`,
      value: v
    }));
  }

  getHours() {
    this.date.valueChanges.pipe(
      switchMap((date: string) => this.appointmentDefinitionService.getAvailableSchedule(getFormattedDate(date)))
    ).subscribe((hours: number[]) => {
      this.hours = hours;
      this.hour.patchValue(head(hours));
      // this.hour.updateValueAndValidity();
      // this.cdr.markForCheck();
    });
  }

  onSubmit() {
    this.isLoading = true

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const form = this.form.getRawValue();
    const { date, massage } = form;
    const payload = {
      ...form,
      massage: massage?.title,
      userId: this.userId,
      date: moment(date).format('DD.MM.YYYY')
    }
    // this.appointmentService.saveAppointment(nonEmptyProperties(payload)).pipe().subscribe((res) => {
    //   this.messageService.add({ severity: 'success', detail: 'Programarea a fost salvata cu succes!' });
    //   this.router.navigate(['/']);
    // });

  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
