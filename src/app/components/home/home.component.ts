import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
import {DefaultService} from "../../DefaultService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any[] = [];
  public menu: any[] = [];


  constructor(private service:DefaultService) { }


  ngOnInit(): void {
    this.service.getAll("topics").subscribe((response: any) => {
      console.log(response)
      this.data = response;
    });
  }
  navigateTo(id) {
    console.log(id)
  }

}
