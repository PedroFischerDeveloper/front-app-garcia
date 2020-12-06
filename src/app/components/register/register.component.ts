import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DefaultService} from "../../DefaultService";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  private prefix: string = "¨&%$#";
  private sufix: string = "sdf80564";
  private aux: string = "";

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confPassword: new FormControl('')
  });

  constructor(private _router: Router, private service:DefaultService) { }

  ngOnInit(): void {
  }


  redirect(route) {
    this._router.navigate([route]);    
  }

  register() {
    this.service.register("users", this.form.value)
    .subscribe( response => {
      if(response) {
        this._router.navigate(['auth']);
      }
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: err.error.error,
        text: 'Tente novamente'
      })
    })
  }

}
