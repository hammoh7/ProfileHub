import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = 'Jack Reacher'; // Replace with actual user data

  // You can add more properties for user data here
  
  constructor() {
    // You can fetch user data from a service or API here
  }
}
