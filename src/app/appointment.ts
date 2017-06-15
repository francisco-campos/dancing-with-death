export class Appointment {
  id: string
  available: boolean
  name: string
  email: string
  date: string
  time_start: string
  time_end: string

  constructor(available: boolean, name: string, email: string, date: string,
              time_start: string, time_end: string)
  {
    this.available = available
    this.name = name
    this.email = email
    this.date = date
    this.time_start = time_start
    this.time_end = time_end
  }
}
