import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
 

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirect(options) {
    console.log(options)
    if(options == 'auth') {
      this._router.navigate(['auth']);
    } else {
      this._router.navigate(['register']);
    }

  }

}
