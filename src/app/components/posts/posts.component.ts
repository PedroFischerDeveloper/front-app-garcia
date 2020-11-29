import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    title: new FormControl(''),
    topic: new FormControl(''),
    description: new FormControl(''),
  });
  
  ngOnInit(): void {
  }

  create() {
    console.log(this.form.value)
  }

}
