import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mmp-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class MMPThemesComponent {
  @Input() mapView: any;
  transparency = 10;
  transparencyChanged ($e) {
    console.log($e);
    this.transparency = $e;
  }
}
