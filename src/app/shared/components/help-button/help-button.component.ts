import { Component, Input } from '@angular/core';
import { HelpService } from '../../services/help/help.service';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss']
})
export class HelpbuttonComponent {
  @Input() header: string = 'Help';
  @Input() itemName: string = 'help';
  @Input() fillColor: string = 'black';
  constructor (private helpService: HelpService) { }

  openHelp (): void {
    this.helpService.openHelp.emit({ header: this.header, itemName: this.itemName });
  }
}
