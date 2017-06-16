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
  appointments: Appointment[];
  selectedAppointment: Appointment;
  selectedDate: string;
  isValid: boolean = false;
  message: string;

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
    let newDate = new Date(date);
    let currentDate = new Date();
    let day = newDate.getDay();

    if(day >= 5) {
      this.isValid = false;
      this.selectedDate = null;
      this.message = "Sorry, the devil only takes care of Monday through Friday from 9:00 a.m. to 6:00 p.m.";
      return [];
    }
    else {
      this.isValid = true;
      this.selectedDate = date;
      return this.appointmentService.getAppointments(date);
    }
  }

  onSelect(appointment: Appointment) {
    if(appointment.available) {
      this.selectedAppointment = appointment;
    }
  }

}
