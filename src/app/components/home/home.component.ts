import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import {DefaultService} from "../../DefaultService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any[] = [];
  public menu: any[] = [];

  public token;
  public user;

  constructor(private service:DefaultService, private _router: Router) { }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.loadData();
  }

  loadData() {
    this.service.getAll("topics").subscribe((response: any) => {
      console.log(response)
      
      this.data = response; 
    });
  }
  navigateTo(id) {
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['auth']); 
  }
  redirect(route) {
    this._router.navigate([route]);        
  }

}
