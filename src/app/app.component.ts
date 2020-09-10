import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mapmyproperty';

  ngOnInit() {
    window.addEventListener("unhandledrejection", function (event) {
      throw event.reason;
    });
    window.addEventListener("error", function(err) {
      console.log("ERROR RHERE");
    })
  }
}
