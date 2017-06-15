import { Component, OnInit } from '@angular/core';
import { Appointment } from "../appointment";
import { AppointmentService } from "../appointment.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [AppointmentService]
})
export class CalendarComponent implements OnInit {
  message: string;
  appointments: Appointment[];
  selectedAppointment: Appointment;
  selectedDate: string;

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.getAppointments(params['date']))
    .subscribe(appointments => this.appointments = appointments);
  }

  getAppointments(date) {
    this.selectedDate = date;
    return this.appointmentService.getAppointments(date);
  }

  onSelect(appointment: Appointment) {
    if(appointment.available) {
      this.selectedAppointment = appointment;
    }
  }

}
