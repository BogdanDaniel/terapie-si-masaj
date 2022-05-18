import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { MassagesService } from '../services/massages.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.scss']
})
export class MassagesComponent implements OnInit {
  details: Observable<any> | null = null;
  constructor(private route: ActivatedRoute, private massagesService: MassagesService) { }

  ngOnInit() {
    this.details = this.route.params.pipe(
      switchMap((params: any) => {
        return this.massagesService.getMassage(params['id']);
      })
    );

  }

  ngOnDestroy() {
  }

}
