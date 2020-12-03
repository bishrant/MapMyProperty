import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() min: number = 1;
  @Input() max: number = 1;
  @Output() onChange = new EventEmitter<number>();
  _value: number;

  @Input()
  get value (): number {
    return this._value;
  }

  set value (val: number) {
    this._value = val;
  }

  constructor () { }

  modelChangeFn ($event: any):void {
    this.onChange.emit($event.target.value);
  }
}
