import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

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
      console.log('ERROR HERE', err);
    })
  }

  constructor (titleService: Title, router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root);
        titleService.setTitle(title);
      }
    });
  }

  getTitle (state, parent) {
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      return parent.snapshot.data.title;
    }

    if (state && parent) {
      return this.getTitle(state, state.firstChild(parent))
    }
    return 'Map My Property';
  }
}
