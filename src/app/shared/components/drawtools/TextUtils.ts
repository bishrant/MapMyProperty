import Graphic from 'esri/Graphic';
import { addGraphics } from '../../store/graphics.actions';

const addTextToMap = (targetElement, store, textProps) => {
  const mapX = targetElement.getAttribute('mapX');
  const mapY = targetElement.getAttribute('mapY');
  var textSymbol = {
    type: 'text', // autocasts as new TextSymbol()
    color: textProps.color,
    // haloColor: 'black',
    // haloSize: '1px',
    text: targetElement.value,
    // xoffset: 3,
    yoffset: -textProps.font.size / 3,
    font: textProps.font
  };

  const point: any = {
    type: 'point',
    x: mapX,
    y: mapY,
    spatialReference: { wkid: 102100 },
  };
  const gr = new Graphic({
    geometry: point,
    symbol: textSymbol,
    attributes: {
      id: targetElement.id,
      symbol: textSymbol,
      geometryType: 'text',
    },
  });
  store.dispatch(addGraphics({ payload: JSON.stringify(gr.toJSON()) }));
};

const createInput = (mapEvt: any, inputId = '0', store,  textProps) => {
  const width = 200;
  const padding = 10;
  const color = textProps.color;
  const height = textProps.font.size + 2 * padding;
  const _input = document.createElement('input');
  _input.classList.add('mapTextInput');

  _input.setAttribute('id', inputId);
  _input.setAttribute('mapX', mapEvt.mapPoint.x);
  _input.setAttribute('mapY', mapEvt.mapPoint.y);

  _input.style.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  _input.style.fontSize = textProps.font.size + 'pt';
  _input.style.lineHeight = textProps.font.size + 'pt';
  _input.style.width = width + 'px';
  _input.style.height = height + 'px';
  _input.style.left = mapEvt.x - width / 2 + 'px';
  _input.style.top = mapEvt.y - height / 2 + 'px';

  //add event listeners
  let enterKeylistener: any;
  let windowListener: any;

  const cleanupListener = (target) => {
    target.remove();
    window.removeEventListener('click', windowListener);
    _input.removeEventListener("keyup", enterKeylistener);
  };

  const AddTextToMap = (target: any) => {
    addTextToMap(target, store, textProps);
    cleanupListener(target);
  };



  enterKeylistener = (evt) => {
    if (evt.keyCode === 13) {
      AddTextToMap(evt.target);
    }
  };

  windowListener = (e) => {
    if (typeof e === 'object') {
      if (e.button === 0) {
        const inputBox = document.getElementById(inputId);
        if (e.target !== inputBox && ((e.target as any).classList.contains('esri-view-surface'))) {
          if (inputBox) {
            AddTextToMap(inputBox)
          }
        }
      }
    }
  }

  _input.addEventListener("keyup", enterKeylistener);
  window.addEventListener('click', windowListener)
  return _input;
};

const createInputWithFrame = (renderer: any, mapEvt: any, readonly = false, inputId = 0, text = '') => {
  const width = 200;
  const height = 40;

  let frame = htmlToElement('<div id="' + inputId + '" class="mapTextInputContainer smallIcon"><div>Drag</div></div><br/>');
  // frame.setAttribute('id', inputId);
  const input = renderer.createElement('input');
  // renderer.addClass(frame, 'mapTextInputContainer');
  renderer.addClass(input, 'mapTextInput');
  input.setAttribute('mapX', mapEvt.mapPoint.x);
  input.setAttribute('mapY', mapEvt.mapPoint.y);
  if (readonly) input.setAttribute('readonly', true);
  renderer.setStyle(frame, 'position', 'absolute');
  renderer.setStyle(input, 'width', width + 'px');
  renderer.setStyle(input, 'height', height + 'px');
  renderer.setStyle(frame, 'left', mapEvt.x - width / 2 + 'px');
  renderer.setStyle(frame, 'top', mapEvt.y - height / 2 + 'px');
  renderer.setStyle(frame, 'z-index', 1000000000);
  input.setAttribute('value', text);
  frame.appendChild(input);
  return frame;
};

const htmlToElement = (html) => {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};
export { createInput, htmlToElement, createInputWithFrame };
