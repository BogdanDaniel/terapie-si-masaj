import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private utilityService: UtilityService, private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    this.utilityService.scroll(id);
  }

  goTo(url: string) {
    this.router.navigate([url])
  }
}
