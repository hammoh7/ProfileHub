import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  username: string = "";
  password: string = "";

  registerUser() {
    // Implement registration logic here
    console.log('Name:', this.name);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your registration API call here

    // For demonstration purposes, let's assume registration is successful
    this.showAlert(`User registered successfully.
    Name: ${this.name} 
    Username: ${this.username}`);
  }

  showAlert(message: string) {
    alert(message);
  }
}
