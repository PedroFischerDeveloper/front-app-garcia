import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  href: string;
  show: boolean;
  constructor(private router : Router) {}

  ngOnInit() {
    this.href = this.router.url;
    if(this.href) {
      this.show = true;
    } else {
      this.show = false;
    }

    
  }
}
