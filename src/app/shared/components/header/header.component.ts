import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Input('headerColor') headerColor: String | undefined = 'white';
  @Input('title') title: String = 'Map My Property Suite';
  isHidden = true;
  constructor () {}
  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
