import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-policies',
  templateUrl: './site-policies.component.html',
  styleUrls: ['./site-policies.component.scss']
})
export class SitePoliciesComponent implements OnInit {
  public year = new Date().getFullYear();
  constructor () { }

  ngOnInit (): void {
  }
}
