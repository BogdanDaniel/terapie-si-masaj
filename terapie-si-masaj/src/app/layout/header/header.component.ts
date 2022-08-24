import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated!: boolean;
  private alive = true;
  constructor(private utilityService: UtilityService, private router: Router, public userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.userService.isAuthenticated.pipe(takeWhile(() => this.alive)).subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  get isAdmin() {
    return this.userService.isAdmin;
  }

  scroll(id: string) {
    this.utilityService.scroll(id);
  }

  goTo(url: string) {
    this.router.navigate([url])
  }

  handleMyAccountClick(op: any, event: any) {
    if (this.isAuthenticated) {
      op.toggle(event)
    } else {
      this.router.navigate(['/auth'])
    }
  }

  onSignOut(op: any) {
    this.storageService.signOut();
    this.userService.clear();
    this.router.navigate(['/']);
    op.hide();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
