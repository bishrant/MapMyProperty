import { Injectable } from '@angular/core';
import { getTextParamsFromHTML, htmlToElement, SetInputStyleAttributes } from '../components/drawtools/TextUtils';
import { TextControlService } from './TextControl-service';

@Injectable({
  providedIn: 'root'
})
export class TextControlSelectionService {
  private WIDTH = 200;
  private PADDING = 10;
  _input: any;
  deleteBtn:HTMLElement;
  enterKeylistener: any;
  windowListener: any;
  deleteListener: any;
  frame: any;
  inputBox: any;
  constructor(private TextService: TextControlService) { }

  createInputWithFrame(graphicCenter: any, textGraphic: any, textProps: any, store: any, mapView: any, graphicsLayer, cleanupFn) {
    const inputId = textGraphic.attributes.id;

    this.frame = <HTMLElement>htmlToElement(`<div id="${inputId}_container" class="mapTextInputContainer">

    </div>`);
    const headerDiv = <HTMLElement>(
      htmlToElement(
        `<div><div class='textBoxHeaderDrag' id="${inputId}_header"><span class='sep'>|</span><span>..<br></span><span>..<br></span><span>..<br></span></div>
        </div>
        `
      )
    );
    this.deleteBtn = <HTMLElement>(htmlToElement(`<div class="deleteBTN" id="${inputId}_delete" style="position: absolute; top: 0px; right: -43px; line-height: 38px; background: #ffffff8a; border-radius: 5px; padding: 0 10px;">
    <svg aria-hidden="true" focusable="false" style="height:38px; width: 20px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
    </div>`));

    const fontSize = parseInt(textProps.font.size.split('px')[0]);
    const textHeight = fontSize + 2 * this.PADDING;
    this._input = document.createElement('input');
    if (textGraphic.attributes.readonly) this._input.setAttribute('readonly', true);
    this._input.style.height = textHeight + 'px';

    this._input = SetInputStyleAttributes(this._input, textProps, textGraphic.geometry, inputId);
    this._input.value = textProps.text;

    this._input.style.lineHeight = textProps.font.size;



    const _AddTextToMap = (target: any) => {
      const container = document.getElementById(inputId + '_container') as any;
      const _screenPt = {
        x: container.offsetLeft + target.clientWidth / 2,
        y: container.offsetTop + target.clientHeight / 2
      };
      const _mapPoint = mapView.toMap(_screenPt);
      target.setAttribute('mapX', _mapPoint.x);
      target.setAttribute('mapY', _mapPoint.y);
      const params = getTextParamsFromHTML(target, textProps);
      this.TextService.AddTextToMap(textGraphic, target.id, params.mapX, params.mapY, params.textSymbol, store, true, false, graphicsLayer);
      this.inputBox = target;
      this.CleanupListenerForInputFrame(target);
    };

    this.enterKeylistener = (evt: any) => {
      if (evt.keyCode === 13) {
        _AddTextToMap(evt.target);
      }
    };

    this.windowListener = (e: any) => {
      if (typeof e === 'object') {
        if (e.button === 0) {
          const inputBox = document.getElementById(inputId);
          if (e.target !== inputBox && (e.target as any).classList.contains('esri-view-surface')) {
            if (inputBox) {
              _AddTextToMap(inputBox);
            }
          }
        }
      }
    };

    this.deleteListener = (e:any) => {
        let i = document.getElementById(inputId);
        this.TextService.HideOnlyTextGraphics(textGraphic, graphicsLayer, store, cleanupFn);
        this.CleanupListenerForInputFrame(i);
    }

    this.deleteBtn.addEventListener('click', this.deleteListener);
    this._input.addEventListener('keyup', this.enterKeylistener);
    window.addEventListener('click', this.windowListener);


    this.frame.appendChild(this._input);
    this.frame.appendChild(headerDiv);
    this.frame.appendChild(this.deleteBtn);

    this.frame.style.left = graphicCenter.x - this.WIDTH / 2 + this.PADDING + 'px';
    this.frame.style.width = this.WIDTH + 'px';
    this.frame.style.top = graphicCenter.y - textHeight / 2 + 'px';
    return this;
  };

  CleanupListenerForInputFrame (target: any){
    // remove parent div
    setTimeout(() => {
      const _containerEl = (document.getElementById(target.id + '_container') as any)
      if (_containerEl){_containerEl.remove()};
      target.remove();
      window.removeEventListener('click', this.windowListener);
      this._input.removeEventListener('keyup', this.enterKeylistener);
    }, 10);

  };


}
