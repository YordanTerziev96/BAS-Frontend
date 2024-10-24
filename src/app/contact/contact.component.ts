import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  fullName: string = '';
  email: string = '';
  contactNumber: string = '';
  message: string = '';

  onSubmit() {
    // Handle form submission logic here
    console.log({
      fullName: this.fullName,
      email: this.email,
      contactNumber: this.contactNumber,
      message: this.message
    });
  }
}
