import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { TicketsComponent} from './tickets.component';

import { TicketService } from './ticket.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
