import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 

  loginUser() {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your login API call here

    this.showAlert(`User logged in successfully.
    Username: ${this.username}`);
  }

  showAlert(message: string) {
    alert(message);
  }
}
