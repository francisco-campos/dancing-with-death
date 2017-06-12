import { Injectable } from '@angular/core';
import { Appointment } from "./appointment";
import { APPOINTMENTS } from "./mock-appointment";

@Injectable()
export class AppointmentService {

  getAppointments(date): Promise<Appointment[]> {
    return Promise.resolve(APPOINTMENTS);
  }

  create(appointment: Appointment) : Promise<Appointment> {
    return Promise.resolve(appointment);
  }

  update(appointment: Appointment): Promise<Appointment> {
    return Promise.resolve(appointment);
  }

  delete(appointment: Appointment) : Promise<Appointment> {
    return Promise.resolve(appointment);
  }

}
