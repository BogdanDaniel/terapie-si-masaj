import { Component, OnInit } from '@angular/core';
import { API } from 'src/app/shared/constants/api.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToFacebook() {
    window.open(API.FACEBOOK, '_blank');
  }

}
