import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

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
