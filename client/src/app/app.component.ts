import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() : void {
    this.http.get('http://localhost:5226/newapp/Users').subscribe({
    // call back function  
    next     : Response => this.users = Response,
    error    : error => console.log(error),
    complete : () => console.log(this.title)
    })
  }
}

