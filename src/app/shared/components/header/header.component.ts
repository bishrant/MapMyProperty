import { Component, Input } from '@angular/core';
import { HelpService } from '../../services/help/help.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('headerColor') headerColor: String | undefined = 'white';
  @Input('title') title: String = 'Map My Property Suite';
  isHidden = true;
  constructor (
    private helpService:HelpService
  ) {}

  toggleHidden () {
    this.isHidden = !this.isHidden;
  }

  openHelp ():void {
    this.helpService.openHelp.emit({ header: 'Getting Started Tour', itemName: 'gettingStartedTour' });
  }
}
