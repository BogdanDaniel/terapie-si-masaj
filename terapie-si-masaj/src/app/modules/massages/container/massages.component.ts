import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MassagesService } from '../services/massages.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.scss']
})
export class MassagesComponent implements OnInit {
  details: Observable<any> | null = null;
  durationOptions: any[] = [];
  duration = 60;
  constructor(private route: ActivatedRoute, private massagesService: MassagesService, private router: Router) { }

  ngOnInit() {
    this.details = this.route.params.pipe(
      switchMap((params: any) => {
        return this.massagesService.getMassage(params['id']);
      })
    );
      this.details.subscribe(data => console.log(data));
      this.durationOptions = [{
        label: '60 minute',
        value: 60
      },
      {
        label: '90 minute',
        value: 90
      }];
  }

  goToAppointment() {
    this.router.navigate(['programare']);
}
  ngOnDestroy() {
  }

}
