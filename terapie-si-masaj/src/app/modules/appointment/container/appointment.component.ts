import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  items: MenuItem[] = [];
    
  //subscription: Subscription;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
      this.items = [{
              label: 'Serviciul ales',
              routerLink: 'personal'
          },
          {
              label: 'Perioada',
              routerLink: 'seat'
          },
          {
              label: 'Date personale',
              routerLink: 'payment'
          },
          {
              label: 'Detalii',
              routerLink: 'confirmation'
          }
      ];

      // this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
      //     this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
      // });
  }

  ngOnDestroy() {
      // if (this.subscription) {
      //     this.subscription.unsubscribe();
      // }
  }

}
