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
    yoffset: -textProps.font.size/3,
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

const createInput = (renderer: any, mapEvt: any, readonly = false, inputId = '0', store, textboxes, textProps) => {
  const width = 200;
  const padding = 10;
  const height = textProps.font.size + 2* padding;
  const input = renderer.createElement('input');
  renderer.addClass(input, 'mapTextInput');
  input.setAttribute('id', inputId);
  input.setAttribute('mapX', mapEvt.mapPoint.x);
  input.setAttribute('mapY', mapEvt.mapPoint.y);
  const color = textProps.color;
  renderer.setStyle(input, 'color', `rgba(${color.r},${color.g},${color.b},${color.a})`);
  renderer.setStyle(input, 'font-size', textProps.font.size + 'pt');
  renderer.setStyle(input, 'line-height', textProps.font.size + 'pt');
  if (readonly) input.setAttribute('readonly', true);
  renderer.setStyle(input, 'position', 'absolute');
  renderer.setStyle(input, 'width', width + 'px');
  renderer.setStyle(input, 'height', height + 'px');
  renderer.setStyle(input, 'left', mapEvt.x - width / 2 + 'px');
  renderer.setStyle(input, 'top', mapEvt.y - height / 2 + 'px');
  renderer.setStyle(input, 'z-index', 1000000000);
  let enterKeylistener: any;
  let windowListener: any;
  const cleanupListener = (target) => {
    renderer.removeChild(textboxes, target);
    enterKeylistener = undefined;
    windowListener = undefined;
  };
  const AddTextToMap = (target: any) => {
    addTextToMap(target, store, textProps);
    cleanupListener(target);
  };

  windowListener = renderer.listen('window', 'click', (e: Event) => {
    const ii = document.getElementById(inputId);
    if (e.target !== ii) {
      if (ii) {
        AddTextToMap(ii);
      }
    }
  });

  enterKeylistener = renderer.listen(input, 'keyup.enter', (ev: any) => {
    AddTextToMap(ev.target);
  });

  return input;
};

const createInputWithFrame = (renderer: any, mapEvt: any, readonly = false, inputId = 0, text = '') => {
  const width = 200;
  const height = 40;

  let frame = htmlToElement('<div id="' + inputId + '" class="mapTextInputContainer"><div>Drag</div></div><br/>');
  // frame.setAttribute('id', inputId);
  const input = renderer.createElement('input');
  // renderer.addClass(frame, 'mapTextInputContainer');

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
