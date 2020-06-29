import { Component, Input } from '@angular/core';
import { RGBObjectToHexA } from '../../utils/Colors';
import { faTree, faMapPin, faFlag, faParking, faChurch, faUtensils, faFire} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pointcontrol',
  templateUrl: './pointcontrol.component.html',
  styleUrls: ['./pointcontrol.component.scss'],
})
export class PointcontrolComponent {
  constructor() {}
  markerStyles = ['circle', 'cross', 'triangle', 'x', 'diamond', 'square'];
  pictureMarkerStyles = [faTree, faMapPin, faFlag, faParking, faChurch, faUtensils, faFire];
  markerSize: number = 12;
  public markerProps: any = {
    type: 'simple-marker',
    size: this.markerSize + 'px',
    style: 'circle',
    color: { r: 100, g: 20, b: 5, a: 1 },
  };
  fillSvgStyle = {
    'width.px': 30,
    fill: RGBObjectToHexA(this.markerProps.color),
  };

  changeMarkerSize = () => {
    this.markerProps.size = this.markerSize + 'px';
  };

  changePointShape = (evt) => {
    console.log(evt);
  };
  changePointColor = (colorInfo: any) => {
    this.markerProps.color = colorInfo;
    this.fillSvgStyle.fill = RGBObjectToHexA(this.markerProps.color);
  };
}
