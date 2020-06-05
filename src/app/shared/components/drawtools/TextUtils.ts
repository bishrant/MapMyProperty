import Graphic from 'esri/Graphic';
import { addGraphics, updateGraphics } from '../../store/graphics.actions';
const WIDTH = 200;
const PADDING = 10;


const addTextToMap = (targetElement, store, textProps, isUpdate:boolean = false) => {
  const mapX = targetElement.getAttribute('mapX');
  const mapY = targetElement.getAttribute('mapY');
  const fontSize = parseInt(textProps.font.size.split("px")[0]);
  var textSymbol = {
    type: 'text', // autocasts as new TextSymbol()
    color: textProps.color,
    // haloColor: 'black',
    // haloSize: '1px',
    text: targetElement.value,
    // xoffset: 3,
    yoffset: -fontSize / 3,
    font: textProps.font,
    lineWidth: '500px'
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
  if (isUpdate) {
    store.dispatch(updateGraphics({ graphics: JSON.stringify([gr.toJSON()]) }));
  } else {
  store.dispatch(addGraphics({ payload: JSON.stringify(gr.toJSON()) }));
  }
};

const createInput = (mapEvt: any, inputId = '0', store, textProps) => {

  const color = textProps.color;
  const fontSize = parseInt(textProps.font.size.split("px")[0]);
  const height = fontSize + 2 * PADDING;
  const _input = document.createElement('input');
  _input.classList.add('mapTextInput');

  _input.setAttribute('id', inputId);
  _input.setAttribute('mapX', mapEvt.mapPoint.x);
  _input.setAttribute('mapY', mapEvt.mapPoint.y);

  _input.style.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  _input.style.fontSize = textProps.font.size;
  _input.style.lineHeight = textProps.font.size;
  _input.style.width = 'auto'; //WIDTH + 'px';
  _input.style.height = height + 'px';
  _input.style.left = mapEvt.x - WIDTH / 2 + 'px';
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
    addTextToMap(target, store, textProps, false);
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
  window.addEventListener('click', windowListener);
  return _input;
};

const createInputWithFrame = (graphicCenter: any, textGraphic: any, textProps: any, store) => {
  const height = 40;
  const inputId = textGraphic.attributes.id;
  let frame = <HTMLElement>htmlToElement(`<div id="${inputId}_container" class="mapTextInputContainer">
  <div class='textBoxHeaderDrag' id="${inputId}_header">Drag</div>
  </div>`);

  const fontSize = parseInt(textProps.font.size.split("px")[0]);
  const color = textProps.color;
  const textHeight = fontSize + 2 * PADDING;
  const _input = document.createElement('input');
  _input.style.height = textHeight + 'px';
  _input.style.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  _input.value = textProps.text;
  _input.style.fontSize = textProps.font.size;
  _input.style.lineHeight = textProps.font.size;

  _input.setAttribute('id', inputId);
  _input.setAttribute('mapX', textGraphic.geometry.x);
  _input.setAttribute('mapY', textGraphic.geometry.y);

  //add event listeners
  let enterKeylistener: any;
  let windowListener: any;

  const cleanupListener = (target) => {
    // remove parent div 
    document.getElementById(target.id + '_container').remove();
    target.remove();
    window.removeEventListener('click', windowListener);
    _input.removeEventListener("keyup", enterKeylistener);
    
  };

  const AddTextToMap = (target: any) => {
    addTextToMap(target, store, textProps, true);
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
  window.addEventListener('click', windowListener);

  frame.appendChild(_input);


  frame.style.left = graphicCenter.x - WIDTH / 2 + PADDING / 2 + 'px';
  frame.style.width = WIDTH + 'px';
  frame.style.top = graphicCenter.y - textHeight / 2 - height + 'px';
  // renderer.setStyle(frame, 'left', mapEvt.x - WIDTH / 2 + 'px');
  // renderer.setStyle(frame, 'width', WIDTH + 'px');
  // renderer.setStyle(frame, 'top', mapEvt.y - height / 2 + 'px');

  // frame.setAttribute('id', inputId);
  // const input = renderer.createElement('input');
  // // renderer.addClass(frame, 'mapTextInputContainer');
  // renderer.addClass(input, 'mapTextInput');
  // input.setAttribute('mapX', mapEvt.mapPoint.x);
  // input.setAttribute('mapY', mapEvt.mapPoint.y);
  // if (readonly) input.setAttribute('readonly', true);
  // renderer.setStyle(frame, 'position', 'absolute');
  // renderer.setStyle(input, 'width', WIDTH + 'px');
  // renderer.setStyle(input, 'height', height + 'px');

  // renderer.setStyle(frame, 'left', mapEvt.x - WIDTH / 2 + 'px');
  // renderer.setStyle(frame, 'top', mapEvt.y - height / 2 + 'px');
  // renderer.setStyle(frame, 'z-index', 1000000000);
  // input.setAttribute('value', text);
  // frame.appendChild(input);


  return frame;
};

const htmlToElement = (html) => {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstElementChild;
};

export { createInput, htmlToElement, createInputWithFrame };
