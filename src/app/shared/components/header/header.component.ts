import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('headerColor') headerColor: String | undefined;
  @Input('title') title: String = '';
  public headerStyle: any = {};
  constructor () {}

  ngOnInit (): void {
    this.headerStyle = { 'background-color': this.headerColor };
  }
}
