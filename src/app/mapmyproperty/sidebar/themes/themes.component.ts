import { Component, Input } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-mmp-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class MMPThemesComponent {
  @Input() mapView: any;


}
