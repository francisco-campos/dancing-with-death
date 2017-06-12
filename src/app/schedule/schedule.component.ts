import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { Appointment } from "../appointment";
import { AppointmentService } from "../appointment.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() appointment: Appointment

  constructor(
    private appointmentService: AppointmentService,
    private location: Location
  ) { }

  ngOnInit() {

  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.appointmentService.update(this.appointment)
    .then(() => this.goBack());
  }

}
