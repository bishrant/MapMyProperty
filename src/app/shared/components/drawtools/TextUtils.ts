const createInput = (renderer: any, mapEvt: any, readonly = false, inputId = 0) => {
  const width = 200;
  const height = 40;
  const input = renderer.createElement('input');
  renderer.addClass(input, 'mapTextInput');
  input.setAttribute('id', inputId);
  input.setAttribute('mapX', mapEvt.mapPoint.x);
  input.setAttribute('mapY', mapEvt.mapPoint.y);
  if (readonly) input.setAttribute('readonly', true);
  renderer.setStyle(input, 'position', 'absolute');
  renderer.setStyle(input, 'width', width + 'px');
  renderer.setStyle(input, 'height', height + 'px');
  renderer.setStyle(input, 'left', mapEvt.x - width / 2 + 'px');
  renderer.setStyle(input, 'top', mapEvt.y - height / 2 + 'px');
  renderer.setStyle(input, 'z-index', 1000000000);
  return input;
};

const createInputWithFrame = (renderer: any, mapEvt: any, readonly = false, inputId = 0, text = '') => {
  const width = 200;
  const height = 40;

  let frame = htmlToElement('<span id="'+inputId+'">Drag</span><br/>');
  // frame.setAttribute('id', inputId);
  const input = renderer.createElement('input');
  renderer.addClass(frame, 'mapTextInput');
  
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
