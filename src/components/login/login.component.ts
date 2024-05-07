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

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find user with matching username and password
    const user = users.find((u: any) => u.username === this.username && u.password === this.password);

    if (user) {
      // Success: User logged in
      this.showAlert('User logged in successfully.');
    } else {
      // Error: Wrong credentials
      this.showAlert('Wrong credentials.');
    }
  }

  showAlert(message: string) {
    alert(message);
  }
}
