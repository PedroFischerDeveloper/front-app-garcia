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
    this.token = JSON.parse(localStorage.getItem('token'));
    if(this.token == undefined || this.token == null) {
      this._router.navigate(['auth']);
    }

    this.user =  JSON.parse(atob(this.token));
   
    if(this.user == undefined || this.user == null) {
      this._router.navigate(['auth']);
    }
    this.loadData();
  }

  loadData() {
    this.service.getAll("topics").subscribe((response: any) => {
      const array = response.filter(element => {
          return element.user.id == this.user.id;
      });

      const arrayTwo = array.filter(element => {
        return element.id >= 15
      });
      this.data = arrayTwo;
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
            title: 'Tópico fechado com sucesso!',
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

      this.loadData();
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['auth']);    
  }

  newPost() {
    this._router.navigate(['topic']);
  }
}
