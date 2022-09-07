import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Massage } from 'src/app/shared/models/massage.model';
import { MassagesService } from 'src/app/shared/services/massages.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.scss']
})
export class MassagesComponent implements OnInit {
  massage: Massage | null = null;
  durationOptions: any[] = [];
  duration = 60;
  constructor(private route: ActivatedRoute, private massagesService: MassagesService, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: any) => {
        return this.massagesService.getMassageById(params['id']);
      })
    ).subscribe((massage: Massage | null) => {
      this.massage = massage;
      console.log(this.massage, 'massage')
      this.durationOptions = this.getDurationOptions(massage?.pricing?.map(pricing => pricing.duration));
      this.duration = this.durationOptions && this.durationOptions[0].value;
    });
  }

  goToAppointment() {
    this.router.navigate(['programare']);
    // this.router.navigate(['programare/personal'], { queryParams: { massage: this.selectedService, duration: this.selectedCounty } });
  }

  getDurationOptions(values?: any[]) {
    if (!values) return [];
    return values.map(v => ({
      label: `${v} minute`,
      value: v
    }));
  }
  ngOnDestroy() {
  }

}
