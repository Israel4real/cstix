import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.css']
})

export class GamePreviewComponent {

  constructor(
    private router: Router) { }

  // gotoDetail(): void {
  //   this.router.navigate(['/ticket', this.selectedTicket.id]);
  // }
}
