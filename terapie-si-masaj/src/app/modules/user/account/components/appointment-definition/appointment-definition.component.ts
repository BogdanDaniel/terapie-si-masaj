import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { catchError, of, switchMap } from 'rxjs';
import { HOURS, SCHEDULE } from 'src/app/shared/constants/schedule.const';

import { AppointmentDefinitionService } from '../../services/appointment-definition.service';

@Component({
    selector: 'app-appointment-definition',
    templateUrl: './appointment-definition.component.html',
    styleUrls: ['./appointment-definition.component.scss']
})
export class AppointmentDefinitionComponent implements OnInit, OnDestroy {
    form: FormGroup;
    minDate: Date;
    scheduleOptions: any = [];
    alive = true;
    scheduleDefinition: any = null;

    maxDate: Date;
    constructor(private formBuilder: FormBuilder, private appointmentDefinitionService: AppointmentDefinitionService) {
        this.form = this.initForm();
        this.minDate = new Date();
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 14);
        this.scheduleOptions = SCHEDULE;
        this.getScheduleOptions();
    }


    get date() {
        return this.form?.get('date') as FormControl;
    }

    get schedule() {
        return this.form?.get('schedule') as FormControl;
    }

    ngOnInit(): void {
        this.date.patchValue(new Date());
    }

    initForm() {
        return this.formBuilder.group({
            date: ['', []],
            schedule: ['', []]

        })
    }

    getHours() {
        return HOURS;
    }

    selectSchedule(hoursResult: any) {
        this.schedule.patchValue(hoursResult);
    }

    getScheduleOptions() {
        this.date.valueChanges.pipe(
            switchMap((date: string) => this.appointmentDefinitionService.getScheduleDefinition(moment(date).format('DD.MM.YYYY'))),
            catchError((err: any) => {
                this.selectSchedule(this.getHours());
                return of(null)
            })
        ).subscribe(
            (res: any) => {
                this.scheduleDefinition = res;
                this.selectSchedule(res?.schedule || this.getHours());

            });
    }

    submit() {
        const form = this.form.getRawValue();
        const { date } = form;
        const payload = {
            ...form,
            date: moment(date).format('DD.MM.YYYY')
        }

        if (this.scheduleDefinition) {
            this.update(payload)
        } else {
            this.save(payload);
        }
    }

    update(payload: any) {
        this.appointmentDefinitionService.updateScheduleDefinition(this.scheduleDefinition?._id, payload).subscribe();
    }

    save(payload: any) {
        this.appointmentDefinitionService.saveScheduleDefinition(payload).subscribe();
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

}