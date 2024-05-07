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
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.showAlert(`User logged in successfully.
    Username: ${this.username}`);
  }

  showAlert(message: string) {
    alert(message);
  }
}
