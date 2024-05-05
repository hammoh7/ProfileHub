import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../app/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 

  constructor(private http: HttpClient) {}

  loginUser(userData: any) {
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);

    // this.showAlert(`User logged in successfully.
    // Username: ${this.username}`);

    return this.http.post(`${environment.apiUrl}/login`, userData);
  }

  showAlert(message: string) {
    alert(message);
  }
}
