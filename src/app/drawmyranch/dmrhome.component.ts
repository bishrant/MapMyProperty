import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dmrhome',
  templateUrl: './dmrhome.component.html',
  styleUrls: ['./dmrhome.component.scss'],
})
export class DMRHomeComponent implements OnInit {
  // @ViewChild("se", { static: true }) private se: ElementRef;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets'));
    // iconRegistry.addSvgIconSetInNamespace("local", "assets/icons");
  }

  ngOnInit() {}
}
