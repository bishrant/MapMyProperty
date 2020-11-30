const WIDTH = 200;
const PADDING = 10;

const SetInputStyleAttributes = (input: any, textProps: any, geometry: any, inputId: any) => {
  const color = textProps.color;
  input.classList.add('mapTextInput');
  input.style.fontWeight = textProps.font.weight;
  input.style.fontStyle = textProps.font.style;
  input.style.textDecoration = textProps.font.decoration;
  input.style.fontFamily = textProps.font.family;
  input.style.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  input.style.fontSize = textProps.font.size;
  input.style.lineHeight = textProps.font.size;
  input.setAttribute('id', inputId);
  input.setAttribute('mapX', geometry.x);
  input.setAttribute('mapY', geometry.y);
  return input;
};

const CreateTextSymbolFromHTML = (targetElement: any, textProps: any) => {
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
    const _style = targetElement.getAttribute('textStyle');
    textProps.font.style = _style === 'none' ? 'normal': _style;
  }
  if (targetElement.getAttribute('fontFamily') !== null) {
    textProps.font.family = targetElement.getAttribute('fontFamily');
  }
  if (targetElement.getAttribute('fontColor') !== null) {
    textProps.color = JSON.parse(targetElement.getAttribute('fontColor'));
  }
  const fontSize = parseInt(textProps.font.size.split('px')[0]);
  const textSymbol = {
    type: 'text',
    color: textProps.color,
    text: targetElement.value,
    yoffset: -fontSize / 3,
    font: textProps.font,
    lineWidth: '500px'
  };
  return textSymbol;
}

const htmlToElement = (html: any) => {
  const template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstElementChild;
};

const getTextParamsFromHTML = (target: any, textProps:any) => {
  const mapX = target.getAttribute('mapX');
  const mapY = target.getAttribute('mapY');
  const textSymbol = CreateTextSymbolFromHTML(target, textProps);
  return {mapX, mapY, textSymbol};
}

export { htmlToElement, SetInputStyleAttributes, CreateTextSymbolFromHTML, getTextParamsFromHTML };
