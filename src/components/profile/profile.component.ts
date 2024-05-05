import { Component, OnInit } from '@angular/core';
import { environment } from '../../app/app.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // username: string = 'Jack Reacher'; 
  user: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    this.http.get(`${environment.apiUrl}/profile`).subscribe((data: any) => {
      this.user = data;
    });
  }
}
