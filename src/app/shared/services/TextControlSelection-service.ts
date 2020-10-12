import { Injectable } from '@angular/core';
import { htmlToElement, SetInputStyleAttributes } from '../components/drawtools/TextUtils';
import { TextControlService } from './TextControl-service';

@Injectable({
  providedIn: 'root'
})
export class TextControlSelectionService {
  private WIDTH = 200;
  private PADDING = 10;
  _input: any;
  enterKeylistener: any;
  windowListener: any;
  frame: any;
  inputBox: any;
  constructor(private TextService: TextControlService) { }

  createInputWithFrame(graphicCenter: any, textGraphic: any, textProps: any, store: any, mapView: any) {
    const inputId = textGraphic.attributes.id;
    this.frame = <HTMLElement>htmlToElement(`<div id="${inputId}_container" class="mapTextInputContainer">

    </div>`);
    const headerDiv = <HTMLElement>(
      htmlToElement(
        `<div class='textBoxHeaderDrag' id="${inputId}_header"><span class='sep'>|</span><span>..<br></span><span>..<br></span><span>..<br></span></div>`
      )
    );
    const fontSize = parseInt(textProps.font.size.split('px')[0]);
    const textHeight = fontSize + 2 * this.PADDING;
    this._input = document.createElement('input');
    this._input.style.height = textHeight + 'px';

    this._input = SetInputStyleAttributes(this._input, textProps, textGraphic.geometry, inputId);
    this._input.value = textProps.text;

    this._input.style.lineHeight = textProps.font.size;

    const CleanupListenerForInputFrame = (target: any) => {
      // remove parent div
      (document.getElementById(target.id + '_container') as any).remove();
      target.remove();
      window.removeEventListener('click', this.windowListener);
      this._input.removeEventListener('keyup', this.enterKeylistener);
    };

    const AddTextToMap = (target: any) => {
      const container = document.getElementById(inputId + '_container') as any;
      const _screenPt = {
        x: container.offsetLeft + target.clientWidth / 2,
        y: container.offsetTop + target.clientHeight / 2
      };
      const _mapPoint = mapView.toMap(_screenPt);
      target.setAttribute('mapX', _mapPoint.x);
      target.setAttribute('mapY', _mapPoint.y);
      this.TextService.AddTextToMap(target, store, textProps, true);
      this.inputBox = target;
      CleanupListenerForInputFrame(target);
    };

    this.enterKeylistener = (evt: any) => {
      if (evt.keyCode === 13) {
        AddTextToMap(evt.target);
      }
    };

    this.windowListener = (e: any) => {
      if (typeof e === 'object') {
        if (e.button === 0) {
          const inputBox = document.getElementById(inputId);
          if (e.target !== inputBox && (e.target as any).classList.contains('esri-view-surface')) {
            if (inputBox) {
              AddTextToMap(inputBox);
            }
          }
        }
      }
    };

    this._input.addEventListener('keyup', this.enterKeylistener);
    window.addEventListener('click', this.windowListener);

    this.frame.appendChild(this._input);
    this.frame.appendChild(headerDiv);

    this.frame.style.left = graphicCenter.x - this.WIDTH / 2 + this.PADDING + 'px';
    this.frame.style.width = this.WIDTH + 'px';
    this.frame.style.top = graphicCenter.y - textHeight / 2 + 'px';
    return this.frame;
  };

  CleanupListenerForInputFrame(target: any) {
    // remove parent div
    (document.getElementById(target.id + '_container') as any).remove();
    target.remove();
    window.removeEventListener('click', this.windowListener);
    this._input.removeEventListener('keyup', this.enterKeylistener);
  };

  Delete(id: string) {
    console.log(id);
    (document.getElementById(id + '_container') as any).remove();
    // this.CleanupListenerForInputFrame(this.inputBox);
  }
}
