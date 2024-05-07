import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  ngOnInit() {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Set the userData property to the array of users
    this.userData = users;
  }
}
