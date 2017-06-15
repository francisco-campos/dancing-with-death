import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Appointment } from "./appointment";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppointmentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private appointmentsUrl = 'https://dancing-with-death-api.herokuapp.com/v1/appointments';  // URL to web api

  constructor(
    private http: Http
  ) {}

  getAppointments(date: string): Promise<Appointment[]> {
    const url = `${this.appointmentsUrl}/search/${date}`;
    return this.http.get(url)
                .toPromise()
                .then(r => r.json() as Appointment[])
                .catch(this.handleError);

  }

  getAppointment(id: string): Promise<Appointment> {
    const url = `${this.appointmentsUrl}/${id}`;
    return this.http.get(url)
            .toPromise()
            .then(r => r.json() as Appointment)
            .catch(this.handleError);
  }

  create(appointment: Appointment) : void {
    this.http
      .post(this.appointmentsUrl, JSON.stringify(
        {
          available: false,
          name: appointment.name,
          email: appointment.email,
          reservation_date: appointment.date,
          time_start: appointment.time_start,
          time_end: appointment.time_end
        }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Appointment)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
