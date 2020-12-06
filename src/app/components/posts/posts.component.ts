import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultService } from 'src/app/DefaultService';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  [x: string]: any;

  constructor(private _router: Router, private service:DefaultService) { }
  
  public user;

  form = new FormGroup({
    content: new FormControl(''),
    subject: new FormControl(''),
  });
  
  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.user =  JSON.parse(atob(this.token));
   
    if(this.token == undefined || this.token == null) {
      this._router.navigate(['auth']);
    }

    this.sub = this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id']; 
    });

  }
  create() {
    this.service.create("topics", this.form.value, this.token)
    .subscribe((resp)=> {
      if(resp) {        
        Swal.fire({
          icon: 'success',
          title: 'Novo Post criado com sucesso!',
          text: ''
        })
      }
      this._router.navigate(['topic/details/', resp.id]);
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: err.error,
        text: 'Tente novamente'
      })
    })
  }
  redirect(route) {
    this._router.navigate([route]);
  }
}
