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
    
    // Create an object to represent the user
    const user = {
      name: this.name,
      username: this.username,
      password: this.password
    };
    
    // Get existing users from local storage or initialize as empty array
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Add the new user to the array of users
    existingUsers.push(user);
    
    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Show alert
    this.showAlert(`User registered successfully.
    Name: ${this.name} 
    Username: ${this.username}`);
  }

  showAlert(message: string) {
    alert(message);
  }
}
