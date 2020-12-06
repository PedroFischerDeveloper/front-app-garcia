import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DefaultService} from "../../DefaultService";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public table: number = 1;
  public data;
  public user;
  public token; 

  constructor(private _router: Router, private service: DefaultService){ }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    
    if(this.user.token == undefined || this.user.token == null) {
      this._router.navigate(['auth']);
    } else {
      this.token = this.user.token;
    }
    this.service.getAll("topics").subscribe((response: any) => {
      console.log(response)
      console.log(this.data)
      this.data = response;
    });
  }

  edit(id) {
    this._router.navigate(['post', id]);  
  }

  delete(id) {      
      this.service.delete("topics/", id, this.token)
      .subscribe((resp)=> {
        if(resp) {
          Swal.fire({
            icon: 'success',
            title: 'Post deletado com sucesso!',
            text: 'Tente novamente'
          })


        }
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: err.error.error,
          text: 'Tente novamente'
        })
      })

      let index = this.data.map(element => { 
        return element.id
      }).indexOf(id);
      
      this.data.splice(index, 1);
    
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['auth']);    
  }

  newPost() {
    this._router.navigate(['post']);
  }
}
