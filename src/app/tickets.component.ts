import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';


@Component({
  selector: 'my-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {

  tickets: Ticket[];
  selectedTicket: Ticket;

  constructor(
    private router: Router,
    private ticketService: TicketService) { }

  getTickets(): void {
    this.ticketService.getTickets().then(tickets => this.tickets = tickets);
  }

  ngOnInit(): void {
    this.getTickets();
  }

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTicket.id]);
  }
}
