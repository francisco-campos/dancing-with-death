import { Component, OnInit, OnChanges } from '@angular/core';
import { Appointment } from "../appointment";
import { AppointmentService } from "../appointment.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [AppointmentService]
})
export class CalendarComponent implements OnInit {
  message: string
  appointments: Appointment[]
  selectedAppointment: Appointment
  selectedDate: string

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.selectedDate = params['date']
    )
    .subscribe();

    this.appointmentService.getAppointments(this.selectedDate)
      .then(appointments => this.appointments = appointments);

  }

  ngOnChanges() {
    console.log('change!')
  }

  onSelect(appointment: Appointment) {
    if(appointment.available) {
      this.selectedAppointment = appointment;
    }
  }

}
