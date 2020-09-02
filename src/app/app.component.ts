import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mapmyproperty';
  ngOnInit() {
    window.addEventListener("unhandledrejection", event => {
      console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
    });
  }
}
