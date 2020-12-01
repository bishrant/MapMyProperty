import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mapmyproperty';

  ngOnInit ():void {
    window.addEventListener('unhandledrejection', (event) => {
      throw event.reason;
    });
    window.addEventListener('error', (err) => {
      console.log('ERROR RHERE', err);
    })
  }
}
