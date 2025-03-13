import { Component } from '@angular/core';
import { Appointment } from '../modules/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit {
  pageTitle: string = "My Appointments";
  titleInput: string = "";
  dateInput: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit() {
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    console.log("ngOnInit");
  }

  addAppointment() {
    if (this.titleInput.trim().length && this.dateInput) {
      let newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.titleInput,
        date: this.dateInput
      };
      this.appointments.push(newAppointment);

      this.clearInput();

      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  clearInput() {
    this.titleInput = "";
    this.dateInput = new Date();
  }
}
