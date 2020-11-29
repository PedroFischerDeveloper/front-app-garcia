import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DefaultService} from "../../DefaultService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public table: number = 1;

  public menu: any = [{
    id:1,
    title: "posts",
    role: 1,
  }, 
  {
    id:2,
    title: "comments",
    role: 1,
  },
  {
    id:3,
    title: "users",
    role: 2,
  }]; 


  public data: any = {
    topic: [{
      id:1,
      name: 'Functional Programing',
    }],
    posts: [{
      id:1,
      name: 'Getting Start Haskell',
    }],
    users: [{
      id:1,
      name: 'default user',
    }],
  }
  constructor(private _router: Router, private service: DefaultService){ }

  ngOnInit(): void {

    this.service.getAll("topics").subscribe((response: any) => {
      console.log(response);
    });

    this.service.getAll("posts").subscribe((response: any) => {
      console.log(response);
    });

  }

  changeTable(id) {
    this.table = id;
  }

  edit(id) {
    alert(id)
  }

  delete(id) {
    alert(id)
  }

  newPost() {
    this._router.navigate(['post']);
  }
}
