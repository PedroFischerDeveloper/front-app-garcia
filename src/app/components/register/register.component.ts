import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

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
    confPassword: new FormControl(''),
    roles: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  enc(str) {
    var encoded = "";
    for (let i=0; i<str.length;i++) {
    var a = str.charCodeAt(i);
    var b = a ^ 123;    // bitwise XOR with any number, e.g. 123
    encoded = encoded+String.fromCharCode(b);
  }
    return encoded;
 }

  register() {

    if(this.form.value.confPassword != this.form.value.password)
    {
      alert("Confirmação de senha e senha precisam ser iguais");
      return false;
    }
    

  }

}
