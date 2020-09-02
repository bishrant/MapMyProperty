import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() color: string = 'black';
  border: string = '1.1em solid '+ this.color
  height: string = '50px';
  width: string = '50px';
  constructor () { }
}
