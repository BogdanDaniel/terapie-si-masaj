import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { SelectItem } from 'primeng/api';
import { County } from 'src/app/shared/constants/county.const';
import { Drenaj } from 'src/app/shared/constants/drenaj.const';
import { FitnessMasaj } from 'src/app/shared/constants/fitness-masaj.const';
import { MasajDeRelaxare } from 'src/app/shared/constants/masaj-de-relaxare.const';
import { MassageCategory } from 'src/app/shared/constants/massage-categories.const';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedCounty!: SelectItem;
  selectedService = null;
  counties: any[];
  services: any[];
  nr = 5


  @HostListener('window:scroll', ['$event.target']) scrolling(ev: any) {
    const scroll = $(ev).scrollTop();
    if (scroll && scroll > 75) {
      $('.navbar').addClass('custom');
    } else {
      $('.navbar').removeClass('custom');
    }
  }
  constructor(private utilityService: UtilityService, private router: Router) {
    this.counties = [
      { label: 'Sectorul 1', value: County.SECTOR_1 },
      { label: 'Sectorul 2', value: County.SECTOR_2, },
      { label: 'Sectorul 3', value: County.SECTOR_3, },
      { label: 'Sectorul 4', value: County.SECTOR_4, },
      { label: 'Sectorul 5', value: County.SECTOR_5, },
      { label: 'Sectorul 6', value: County.SECTOR_6, }

    ];

    this.services = [
      { label: MasajDeRelaxare.TerapieCorporala, value: MasajDeRelaxare.TerapieCorporala },
      { label: MasajDeRelaxare.MasajTerapeutic, value: MasajDeRelaxare.MasajTerapeutic },
      { label: MasajDeRelaxare.MasajFacial, value: MasajDeRelaxare.MasajFacial },
      { label: MasajDeRelaxare.MasajPeScaun, value: MasajDeRelaxare.MasajPeScaun },
      { label: Drenaj.DrenajLimfaticPartial, value: Drenaj.DrenajLimfaticPartial },
      { label: FitnessMasaj.FitnessMasajAnticelulitic, value: FitnessMasaj.FitnessMasajAnticelulitic },
    ]
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('.header').addClass('header-aboslute');
    $('.navbar').removeClass('custom');

  }

  goToAppointment() {
    this.router.navigate(['programare/personal'], { queryParams: { massage: this.selectedService, location: this.selectedCounty } });
  }

  scroll(id: string) {
    this.utilityService.scroll(id);
  }

  ngOnDestroy(): void {
    $('.header').removeClass('header-aboslute');
    $('.navbar').addClass('custom');

  }

}
