import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as $ from 'jquery';
import { get, orderBy } from 'lodash';
import { Message, SelectItem } from 'primeng/api';
import { takeWhile } from 'rxjs';
import { County } from 'src/app/shared/constants/county.const';
import { Drenaj } from 'src/app/shared/constants/drenaj.const';
import { FitnessMasaj } from 'src/app/shared/constants/fitness-masaj.const';
import { MasajDeRelaxare } from 'src/app/shared/constants/masaj-de-relaxare.const';
import { Massage } from 'src/app/shared/models/massage.model';
import { MassagesService } from 'src/app/shared/services/massages.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import VanillaTilt from 'vanilla-tilt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedCounty!: SelectItem;
  selectedService: Massage | null = null;
  counties: any[];
  services: Massage[] = [];
  certifications!: any[];
  nr = 5
  alive = true;
  openReviews = false;

  relaxareMassages: Massage[] | null = null;
  recuperareMassages: Massage[] | null = null;


  @HostListener('window:scroll', ['$event.target']) scrolling(ev: any) {
    const scroll = $(ev).scrollTop();
    if (scroll && scroll > 75) {
      $('.navbar').addClass('custom');
    } else {
      $('.navbar').removeClass('custom');
    }
  }
  constructor(private utilityService: UtilityService, private router: Router, private route: ActivatedRoute, private massagesService: MassagesService) {
    this.counties = [
      { label: 'Sectorul 1', value: County.SECTOR_1 },
      { label: 'Sectorul 2', value: County.SECTOR_2, },
      { label: 'Sectorul 3', value: County.SECTOR_3, },
      { label: 'Sectorul 4', value: County.SECTOR_4, },
      { label: 'Sectorul 5', value: County.SECTOR_5, },
      { label: 'Sectorul 6', value: County.SECTOR_6, }
    ];

    this.massagesService.getAllMasages().subscribe((massages: Massage[]) => {
      this.services = massages;
      this.relaxareMassages = massages ? orderBy(massages.filter(massage => massage?.category === 'relaxare' && massage?.show === true), 'order') : [];
      this.recuperareMassages = massages ? orderBy(massages.filter(massage => massage?.category === 'recuperare' && massage?.show === true), 'order') : [];
    });
  }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".profile_container") as any, {
      max: 5,
      speed: 100,
      glare: true,
      "max-glare": 0.2,
      "glare-prerender": false
    });
  }

  ngAfterViewInit(): void {
    $('.header').addClass('header-aboslute');
    $('.navbar').removeClass('custom');
    this.route.queryParams.pipe(takeWhile(() => this.alive)).subscribe((params: Params) => {
      setTimeout(() => {
        const scrollTo = get(params, 'scrollTo');
        if (scrollTo) {
          if (scrollTo === 'reviews') {
            this.scroll(scrollTo);
            this.openReviews = true;
          } else {
            this.scroll(scrollTo);
          }

        }
      }, 200)
    })

  }

  goToAppointment() {
    this.router.navigate(['programare/personal'], { queryParams: { massage: this.selectedService?.id, location: this.selectedCounty } });
  }

  scroll(id: string) {
    this.utilityService.scroll(id);
  }

  ngOnDestroy(): void {
    this.alive = false;
    $('.header').removeClass('header-aboslute');
    $('.navbar').addClass('custom');

  }

}
