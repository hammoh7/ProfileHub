import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../app/app.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  registerUser(userData: any) {
    // console.log('Name:', this.name);
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);
    
    // this.showAlert(`User registered successfully.
    // Name: ${this.name} 
    // Username: ${this.username}`);

    return this.http.post(`${environment.apiUrl}/register`, userData);
  }

  showAlert(message: string) {
    alert(message);
  }
}
