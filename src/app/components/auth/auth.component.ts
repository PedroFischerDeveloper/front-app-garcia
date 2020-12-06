import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultService } from 'src/app/DefaultService';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _router: Router, private service:DefaultService) { }

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  
  ngOnInit(): void {
  }

  redirect(route) {
    this._router.navigate([route]);   
  }

  login() {
  
    this.service.login("users/login", this.form.value)
    .subscribe((resp)=> {
      if(resp) {

        const user = {
          token: resp.headers.get('authorization'),
          user: resp
        };
        localStorage.setItem('user', JSON.stringify(user));
        this._router.navigate(['dashboard']);
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
