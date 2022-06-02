import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {
  @Input() src: string = '';
  @Input() description: string = ''
  @Input() badge: string = '';
  @Input() title: string = '';
  @Input() routerLink: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    if (this.routerLink) {
      this.goToRoute(this.routerLink);
    }
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }

  ngOnDestroy() {
  }

}
