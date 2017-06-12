import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { AppointmentService } from "./appointment.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dancing With Death';
  selectedDate: string;

  constructor(
    private router: Router
  ) { }

  setDate(input) : void {
    this.selectedDate = input;
    this.router.navigate(['/calendar', this.selectedDate.toString()]);
  }
}
