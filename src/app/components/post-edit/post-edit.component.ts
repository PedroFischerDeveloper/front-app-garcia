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
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    if(this.user == undefined || this.user == null) {
      this._router.navigate(['auth']);
    }

    this._activatedRoute.params.subscribe(params => {
      if(params['id'] == undefined || params['id'] == null) {
        this._router.navigate(['dashboard']);
      }
    })

  }

  update() {

  }

  redirect(route) {
    this._router.navigate([route]);
  }

}
