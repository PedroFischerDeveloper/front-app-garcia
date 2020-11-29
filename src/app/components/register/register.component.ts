import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DefaultService} from "../../DefaultService";
import { Router } from '@angular/router';
import {UserRegister} from '../shared/types/types';
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

  constructor(private service:DefaultService) { }

  ngOnInit(): void {
  }


  register() {

    if(this.form.value.confPassword != this.form.value.password)
    {
      alert("Confirmação de senha e senha precisam ser iguais");
      return false;
    }
 
    this.service.create("users", this.form.value)
    .subscribe( response => {
      console.log(response)
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
