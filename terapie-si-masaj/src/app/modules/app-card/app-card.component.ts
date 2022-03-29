import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
