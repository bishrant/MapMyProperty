import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() min: number = 1;
  @Input() max: number = 1;
  @Input() val: number = 50;
  constructor() { }

  ngOnInit(): void { }

}
