import { Pipe, PipeTransform } from '@angular/core';
import { RGBToHex } from './Colors';

@Pipe({ name: 'RGBtoHEX' })
export class RGBtoHEX implements PipeTransform {
  transform (color: any) {
    return RGBToHex(color);
  }
}
