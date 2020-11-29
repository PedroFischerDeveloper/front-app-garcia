import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      console.log(response);
    });

    this.menu = [{
      id: 1,
      title: 'Programing',
      permission: 1,
    }, 
    {
      id: 2,
      title: 'Hardware',
      permission: 1,
    }, 
    {
      id: 3,
      title: 'Software',
      permission: 1,
    },
    {
      id: 4,
      title: 'Hacking',
      permission: 2,
    }]

    this.data = [{
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      description: 'DESCRIPTION'
    }, 
    {
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      description: 'DESCRIPTION'
    },
    {
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      description: 'DESCRIPTION'
    },
    {
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      description: 'DESCRIPTION'
    }]
  }

}
