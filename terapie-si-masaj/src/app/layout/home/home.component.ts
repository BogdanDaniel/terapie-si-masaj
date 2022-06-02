import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/shared/constants/city.const';
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
export class HomeComponent implements OnInit {
  selectedCity = null;
  selectedService = null;
  cities: any[];
  services: any[];
  nr = 5
  constructor(private utilityService: UtilityService, private router: Router) {
    this.cities = [
      { label: City.BUCURESTI, code: City.BUCURESTI },
      { label: City.ILFOV, code: City.ILFOV }
    ];

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
  }

  ngOnInit(): void {
  }

  goToAppointment() {
    this.router.navigate(['programare/personal']);
}

  scroll(id: string) {
    this.utilityService.scroll(id);
  }
}
