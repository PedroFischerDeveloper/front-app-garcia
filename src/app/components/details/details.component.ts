import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DefaultService } from 'src/app/DefaultService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:DefaultService, private _router: Router, private _activatedRoute:ActivatedRoute) { }

  public topic; 
  public loading = false;
  public id: number;
  public token;
  public user;
  public posts;
  
  form = new FormGroup({
    content: new FormControl(''),
  });

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem('token'));
    if(!this.token == undefined && !this.token == null) {
      this.user =  JSON.parse(atob(this.token));
    }


    this._activatedRoute.params.subscribe(params => {
      if(params['id'] == undefined || params['id'] == null) {
        this._router.navigate(['home']);
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
        this.topic = response;
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
      this.posts = response;
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: err.error.error,
        text: 'Tente novamente'
      })
    })
  }

  post() {
    const toPost = {
      content: this.form.value.content.trim(),
    }
    this.service.newPost("posts/topic/", toPost, this.token, this.id).subscribe(response => {
      this.loadData(this.id);
    })
  }

  redirect(route) {
    this._router.navigate([route]);        
  }

  logout() {
    localStorage.clear();
  }
}