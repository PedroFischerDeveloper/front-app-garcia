import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _router: Router) { }

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  ngOnInit(): void {
  }

  login() {
    this._router.navigate(['dashboard']);
  }


}
