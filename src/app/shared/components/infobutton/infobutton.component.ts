import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infobutton',
  templateUrl: './infobutton.component.html',
  styleUrls: ['./infobutton.component.scss']
})
export class InfobuttonComponent {
  @Input() tooltip: String = '';
  @Input() ariaLabel: String ='aria';
  constructor() { }
}
