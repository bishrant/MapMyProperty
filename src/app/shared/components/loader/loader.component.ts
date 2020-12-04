import { Component, Input } from '@angular/core';
import { LoaderService } from '../../services/Loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() color: string = 'black';
  @Input() disableBackground = false;
  baseZ = '214748364';
  border: string = '1.1em solid ' + this.color
  height: string = '50px';
  width: string = '50px';
  loading: boolean = false;
  constructor (private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  public show () {
    this.loading = true;
  }

  public hide () {
    this.loading = false;
  }
}
