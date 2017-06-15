import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { Appointment } from "../appointment";
import { AppointmentOut } from "./appointment-out";
import { AppointmentService } from "../appointment.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [AppointmentService]
})
export class ScheduleComponent implements OnInit {
  @Input() appointment: Appointment;
  model: Appointment;
  submitted: boolean = false;

  constructor(
    private appointmentService: AppointmentService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = this.appointment
  }

  goBack() {
    this.router.navigate(['/home'])
  }

  onSubmit() {
    this.appointmentService.create(this.model)
    this.submitted = true
  }

}
