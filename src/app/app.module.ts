import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { GamePreviewComponent } from './game-preview.component';
import { TicketsComponent} from './tickets.component';
import { TicketDetailComponent } from './ticket-detail.component';

import { TicketService } from './ticket.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GamePreviewComponent,
    TicketsComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
