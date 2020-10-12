import { Injectable } from '@angular/core';
import Graphic from 'esri/Graphic';
import { CreateTextSymbolFromHTML, SetInputStyleAttributes } from '../components/drawtools/TextUtils';
import { addGraphics, updateGraphics } from '../store/graphics.actions';

@Injectable({
  providedIn: 'root'
})
export class TextControlService {
  private WIDTH = 200;
  private PADDING = 10;
  windowListener: any;
  constructor () {}

  AddTextToMap(targetElement: any, store: any, textProps: any, isUpdate: boolean = false) {
    const mapX = targetElement.getAttribute('mapX');
    const mapY = targetElement.getAttribute('mapY');

    const textSymbol = CreateTextSymbolFromHTML(targetElement, textProps);
    const point: any = {
      type: 'point',
      x: mapX,
      y: mapY,
      spatialReference: { wkid: 102100 }
    };
    const gr = new Graphic({
      geometry: point,
      symbol: textSymbol,
      attributes: {
        id: targetElement.id,
        symbol: textSymbol,
        geometryType: 'text'
      }
    });
    const _g = gr.toJSON();
    _g.symbol = textSymbol;
    _g.geometry.type = 'point';
    if (isUpdate) {
      store.dispatch(updateGraphics({ graphics: JSON.stringify([_g]) }));
    } else {
      store.dispatch(addGraphics({ graphics: [JSON.stringify(_g)] }));
    }
  };

  createInput (mapEvt: any, inputId = '0', store: any, textProps: any) {
    const fontSize = parseInt(textProps.font.size.split('px')[0]);
    const height = fontSize + 2 * this.PADDING;
    let _input = document.createElement('input');
    _input = SetInputStyleAttributes(_input, textProps, mapEvt.mapPoint, inputId);

    _input.style.width = 'auto'; // WIDTH + 'px';
    _input.style.height = height + 'px';

    // need to take it out of bounds
    const parentWidth = (document.getElementById('parent') as any).clientWidth;
    const parentHeight = (document.getElementById('parent') as any).clientHeight;

    const _x = mapEvt.x;
    const _y = mapEvt.y;
    if (this.WIDTH / 2 < _x && _x < parentWidth - this.WIDTH / 2) {
      _input.style.left = _x - this.WIDTH / 2 + 'px';
    } else {
      if (_x < this.WIDTH / 2) {
        _input.style.left = '0px';
      }
      if (parentWidth < _x + this.WIDTH / 2) {
        _input.style.right = '0px';
      }
    }

    if (height / 2 < _y && _y < parentHeight - height / 2) {
      _input.style.top = _y - height / 2 + 'px';
    } else {
      if (_y < height / 2) {
        _input.style.top = '0px';
      }
      if (parentHeight < _y + height / 2) {
        _input.style.bottom = '0px';
      }
    }

    // add event listeners
    const enterKeylistener = (evt: any) => {
      if (evt.keyCode === 13) {
        ExecuteAddTextToMap(evt.target);
      }
    };

    this.windowListener = (e: any) => {
      if (typeof e === 'object') {
        if (e.button === 0) {
          const inputBox = document.getElementById(inputId);
          if (e.target !== inputBox) {
            // && ((e.target as any).classList.contains('esri-view-surface'))) {
            if (inputBox) {
              ExecuteAddTextToMap(inputBox);
            }
          }
        }
      }
    };
    const CleanupListenerForInput = (target: any) => {
      target.remove();
      window.removeEventListener('click', this.windowListener);
      _input.removeEventListener('keyup', enterKeylistener);
    };

    const ExecuteAddTextToMap = (target: any) => {
      if (target.value !== '') {
        this.AddTextToMap(target, store, textProps, false);
      }
      CleanupListenerForInput(target);
    };

    _input.addEventListener('keyup', enterKeylistener);
    window.addEventListener('click', this.windowListener, {once: true});
    return _input;
  };
}
