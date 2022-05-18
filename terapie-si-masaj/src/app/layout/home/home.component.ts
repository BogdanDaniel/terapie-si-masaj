import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedCountry = null
  nr = 5
  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    this.utilityService.scroll(id);
  }
}
