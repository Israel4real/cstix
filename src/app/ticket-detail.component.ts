import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Ticket } from './ticket';
import { TicketService } from './ticket.service';




@Component({
  selector: 'ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'] 
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.ticketService.getTicket(+params.get('id')))
      .subscribe(ticket => this.ticket = ticket);
  }
}
