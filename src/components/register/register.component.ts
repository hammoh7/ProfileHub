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
    console.log('Name:', this.name);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    this.showAlert(`User registered successfully.
    Name: ${this.name} 
    Username: ${this.username}`);
  }

  showAlert(message: string) {
    alert(message);
  }
}
