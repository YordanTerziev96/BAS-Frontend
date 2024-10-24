import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor() { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        name: form.value.form_name,
        email: form.value.form_email,
        password: form.value.form_password,
        address: form.value.form_address
      };

      console.log('Registration Data:', formData);
      
      // Here you can send the form data to your backend or perform any other action
      // For example, you might call a service to register the user:
      // this.authService.register(formData).subscribe(response => {
      //   // handle success response
      // }, error => {
      //   // handle error response
      // });
      
      // Reset the form after submission
      form.reset();
    }
  }
}
