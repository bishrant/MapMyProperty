import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  // @ViewChild("se", { static: true }) private se: ElementRef;
  constructor() {}

  ngOnInit(): void {}
}
