import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DefaultService } from 'src/app/DefaultService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  public user;
  private id: number;
  private token: string;
  private loading: boolean = false;
  public topic: any;

  constructor(
    private _router: Router, 
    private service:DefaultService, 
    private _activatedRoute: ActivatedRoute
  ) { }

  form = new FormGroup({
    content: new FormControl(''),
    subject: new FormControl(''),
  });
  

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token'));
    if(this.token == undefined || this.token == null) {
      this._router.navigate(['auth']);
    }
    
    this.user =  JSON.parse(atob(this.token));
   
    if(this.user == undefined || this.user == null) {
      this._router.navigate(['auth']);
    }

    this._activatedRoute.params.subscribe(params => {
      if(params['id'] == undefined || params['id'] == null) {
        this._router.navigate(['dashboard']);
      } else {
        this.id = params['id'];
      }
    })

    this.loadData(this.id);

  }

  loadData(id) {
    this.service.getById("topics/", id)
    .subscribe( response => {
      if(response) {
        this.form.patchValue(response);
      }
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: err.error.error,
        text: 'Tente novamente'
      })
    })

    this.service.getById("posts/topic/",id)
    .subscribe( response => {
      this.loading = false;
      this.topic = response;
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: err.error.error,
        text: 'Tente novamente'
      })
    })
  }

  update() {
    this.service.update("topics/", this.id, this.form.value,this.token)
    .subscribe( response => {
      if(response != null) {
        Swal.fire({
          icon: 'success',
          title: 'Tópico atualizado com sucesso!',
          text: ''
        })
        this.form.patchValue(response);
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

  redirect(route) {
    this._router.navigate([route]);
  }

}
