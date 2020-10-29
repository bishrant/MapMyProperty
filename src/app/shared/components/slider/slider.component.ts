import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {
  @Input() min: number = 1;
  @Input() max: number = 1;
  @Output() valueChanged = new EventEmitter<number>();

  _value: number;

  get value(): number {
    return this._value;
  }

  @Input() set value(val: number) {
    this._value = val;
  }

  constructor() { }

  modelChangeFn($event: any) {
    this.valueChanged.emit($event);
  }

}
