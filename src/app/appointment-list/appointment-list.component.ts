import { Component } from '@angular/core';
import { Appointment } from '../modules/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent {

  pageTitle: string = "My Appointments";
  titleInput: string = "";
  dateInput: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {

    if (this.titleInput.trim().length && this.dateInput) {
      let newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.titleInput,
        date: this.dateInput
      };
      this.appointments.push(newAppointment);

      this.clearInput();
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  clearInput() {
    this.titleInput = "";
    this.dateInput = new Date();
  }
}
