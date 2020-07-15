import Graphic from 'esri/Graphic';
import { addGraphics, updateGraphics } from '../../store/graphics.actions';
const WIDTH = 200;
const PADDING = 10;

const addTextToMap = (targetElement: any, store: any, textProps: any, isUpdate: boolean = false) => {
  const mapX = targetElement.getAttribute('mapX');
  const mapY = targetElement.getAttribute('mapY');
  if (targetElement.getAttribute('fontSize') !== null) {
    textProps.font.size = targetElement.getAttribute('fontSize');
  }
  if (targetElement.getAttribute('fontWeight') !== null) {
    textProps.font.weight = targetElement.getAttribute('fontWeight');
  }
  if (targetElement.getAttribute('textDecoration') !== null) {
    textProps.font.decoration = targetElement.getAttribute('textDecoration');
  }
  if (targetElement.getAttribute('textStyle') !== null) {
    textProps.font.style = targetElement.getAttribute('textStyle');
  }
  if (targetElement.getAttribute('fontFamily') !== null) {
    textProps.font.family = targetElement.getAttribute('fontFamily');
  }
  if (targetElement.getAttribute('fontColor') !== null) {
    textProps.color = JSON.parse(targetElement.getAttribute('fontColor'));
  }
  const fontSize = parseInt(textProps.font.size.split('px')[0]);
  var textSymbol = {
    type: 'text', // autocasts as new TextSymbol()
    color: textProps.color,
    // haloColor: 'black',
    // haloSize: '1px',
    text: targetElement.value,
    // xoffset: 3,
    yoffset: -fontSize / 3,
    font: textProps.font,
    lineWidth: '500px',
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
    store.dispatch(addGraphics({ graphics: [JSON.stringify(gr.toJSON())] }));
  }
};

const SetInputStyle = (input: any, textProps: any) => {
  const color = textProps.color;
  input.classList.add('mapTextInput');
  input.style.fontWeight = textProps.font.weight;
  input.style.fontStyle = textProps.font.style;
  input.style.textDecoration = textProps.font.decoration;
  input.style.fontFamily = textProps.font.family;
  input.style.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  input.style.fontSize = textProps.font.size;
  input.style.lineHeight = textProps.font.size;
  return input;
};

const createInput = (mapEvt: any, inputId = '0', store: any, textProps: any) => {
  const fontSize = parseInt(textProps.font.size.split('px')[0]);
  const height = fontSize + 2 * PADDING;
  let _input = document.createElement('input');
  _input = SetInputStyle(_input, textProps);
  _input.setAttribute('id', inputId);
  _input.setAttribute('mapX', mapEvt.mapPoint.x);
  _input.setAttribute('mapY', mapEvt.mapPoint.y);

  _input.style.width = 'auto'; //WIDTH + 'px';
  _input.style.height = height + 'px';

  // need to take it out of bounds
  const parentWidth = (document.getElementById('parent') as any).clientWidth;
  const parentHeight = (document.getElementById('parent') as any).clientHeight;

  const _x = mapEvt.x;
  const _y = mapEvt.y;
  if (WIDTH / 2 < _x && _x < parentWidth - WIDTH / 2) {
    _input.style.left = _x - WIDTH / 2 + 'px';
  } else {
    if (_x < WIDTH / 2) {
      _input.style.left = '0px';
    }
    if (parentWidth < _x + WIDTH / 2) {
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

  //add event listeners
  let enterKeylistener: any;
  let windowListener: any;

  const cleanupListener = (target: any) => {
    target.remove();
    window.removeEventListener('click', windowListener);
    _input.removeEventListener('keyup', enterKeylistener);
  };

  const AddTextToMap = (target: any) => {
    if (target.value !== '') {
      addTextToMap(target, store, textProps, false);
    }
    cleanupListener(target);
  };

  enterKeylistener = (evt: any) => {
    if (evt.keyCode === 13) {
      AddTextToMap(evt.target);
    }
  };

  windowListener = (e: any) => {
    if (typeof e === 'object') {
      if (e.button === 0) {
        const inputBox = document.getElementById(inputId);
        if (e.target !== inputBox) {
          // && ((e.target as any).classList.contains('esri-view-surface'))) {
          if (inputBox) {
            AddTextToMap(inputBox);
          }
        }
      }
    }
  };

  _input.addEventListener('keyup', enterKeylistener);
  window.addEventListener('click', windowListener);
  return _input;
};

const createInputWithFrame = (graphicCenter: any, textGraphic: any, textProps: any, store: any, mapView: any) => {
  const height = 40;
  const inputId = textGraphic.attributes.id;
  let frame = <HTMLElement>htmlToElement(`<div id="${inputId}_container" class="mapTextInputContainer">
  
  </div>`);
  const headerDiv = <HTMLElement>(
    htmlToElement(
      `<div class='textBoxHeaderDrag' id="${inputId}_header"><span class='sep'>|</span><span>..<br></span><span>..<br></span><span>..<br></span></div>`
    )
  );
  const fontSize = parseInt(textProps.font.size.split('px')[0]);
  const color = textProps.color;
  const textHeight = fontSize + 2 * PADDING;
  let _input = document.createElement('input');
  _input.style.height = textHeight + 'px';

  _input = SetInputStyle(_input, textProps);

  _input.value = textProps.text;

  _input.style.lineHeight = textProps.font.size;

  _input.setAttribute('id', inputId);
  _input.setAttribute('mapX', textGraphic.geometry.x);
  _input.setAttribute('mapY', textGraphic.geometry.y);

  //add event listeners
  let enterKeylistener: any;
  let windowListener: any;

  const cleanupListener = (target: any) => {
    // remove parent div
    (document.getElementById(target.id + '_container') as any).remove();
    target.remove();
    window.removeEventListener('click', windowListener);
    _input.removeEventListener('keyup', enterKeylistener);
  };

  const AddTextToMap = (target: any) => {
    const container = document.getElementById(inputId + '_container') as any;
    const header = document.getElementById(inputId + '_header');
    const _screenPt = {
      x: container.offsetLeft + target.clientWidth / 2,
      y: container.offsetTop  + target.clientHeight / 2,
    };
    const _mapPoint = mapView.toMap(_screenPt);
    target.setAttribute('mapX', _mapPoint.x);
    target.setAttribute('mapY', _mapPoint.y);
    addTextToMap(target, store, textProps, true);
    cleanupListener(target);
  };

  enterKeylistener = (evt: any) => {
    if (evt.keyCode === 13) {
      AddTextToMap(evt.target);
    }
  };

  windowListener = (e: any) => {
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

  _input.addEventListener('keyup', enterKeylistener);
  window.addEventListener('click', windowListener);

  frame.appendChild(_input);
  frame.appendChild(headerDiv);

  frame.style.left = graphicCenter.x - WIDTH / 2 + PADDING + 'px';
  frame.style.width = WIDTH + 'px';
  frame.style.top = graphicCenter.y - textHeight / 2  + 'px';
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

const htmlToElement = (html: any) => {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstElementChild;
};

export { createInput, htmlToElement, createInputWithFrame };
