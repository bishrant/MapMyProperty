import { Component, OnInit, Input } from '@angular/core';
// import ElevationProfile from 'src/app/shared/utils/ElevationProfile/ElevationProfile.js'
// import HelloWorld from 'src/app/shared/utils/ElevationProfile/HelloWorld.js';

@Component({
  selector: 'app-elevation-profile',
  templateUrl: './elevation-profile.component.html',
  styleUrls: ['./elevation-profile.component.scss']
})
export class ElevationProfileComponent implements OnInit {
  baseMSL = false;
  isElevationProfileToolActive = false;
  @Input() mapView: any;
  constructor() { }

  ngOnInit(): void {
    // widget = new ElevationProfile({
    //   mapView: this.mapView,
    //   slopeThreshold: 4,
    //   unit: 'feet'
    // });
    // this.mapView.ui.add(widget, 'bottom-right');

    // const div = document.getElementById("widgetDiv");
    // console.log(div);
    // var widget = new HelloWorld({ container: "widgetDiv" });
    // console.log(ElevationProfile);
  }

  startDrawingGraphics(value: any) {
    console.log("Draw this ", value)
  }

  clearElevationProfile() {
    console.log('clear profile');
    
  }
}
