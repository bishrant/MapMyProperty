/* eslint-disable max-len */
import { RGBObjectToHexA } from '../../utils/Colors';

const getSVGHTML = (id, name: string, color: string) => {
  let bs = '';

  switch (name) {
    case 'water':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path stroke="black" stroke-width="1" fill="${color}" d="M26.86,8.98c-0.5-1.97-3.15-2.06-3.72,0c-2.98,10.81-9.36,13.74-9.36,21.36c0,6.74,5.02,12.2,11.22,12.2
     s11.22-5.46,11.22-12.2C36.22,22.69,29.86,19.84,26.86,8.98z M25,38.15c-3.94,0-7.14-3.44-7.14-7.68c0-0.6,0.46-1.1,1.02-1.1
     c0.56,0,1.02,0.49,1.02,1.1c0,3.03,2.28,5.48,5.1,5.48c0.56,0,1.02,0.49,1.02,1.1C26.02,37.65,25.57,38.15,25,38.15z"/>
   </svg>`;
      break;
    case 'warning':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path stroke="black" stroke-width="1" fill="${color}" d="M43.96,35.88c1.2,2.07-0.31,4.66-2.69,4.66H10.12c-2.4,0-3.89-2.59-2.69-4.66L23,8.97c1.2-2.07,4.2-2.06,5.4,0
     L43.96,35.88L43.96,35.88z M25.69,30.32c-1.64,0-2.98,1.33-2.98,2.97c0,1.65,1.34,2.97,2.98,2.97c1.64,0,2.98-1.33,2.98-2.97
     C28.67,31.65,27.35,30.32,25.69,30.32z M22.86,19.63l0.49,8.79c0.02,0.41,0.37,0.73,0.78,0.73h3.15c0.42,0,0.75-0.32,0.78-0.73
     l0.49-8.79c0.02-0.44-0.33-0.81-0.78-0.81h-4.11C23.19,18.81,22.83,19.18,22.86,19.63L22.86,19.63z"/>
   </svg>
   `;
      break;
    case 'triangle':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <polygon stroke="black" stroke-width="1" fill="${color}"  points="24.81,8.5 8.5,41.5 41.5,41.5 "/>
   </svg>`;
      break;
    case 'tree':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path stroke="black" stroke-width="1" fill="${color}" d="M36.63,34.56l-4.89-7.06h1.87c0.55,0,1.04-0.39,1.27-1.01c0.23-0.62,0.16-1.34-0.2-1.87l-4.78-7.09h1.77
     c0.56,0,1.05-0.42,1.27-1.07c0.21-0.64,0.11-1.37-0.26-1.87l-6.74-9.17c-0.37-0.5-1.05-0.5-1.42,0l-6.74,9.17
     c-0.38,0.5-0.48,1.24-0.26,1.87c0.22,0.65,0.71,1.07,1.27,1.07h1.77l-4.78,7.08c-0.36,0.53-0.43,1.25-0.2,1.87
     c0.23,0.62,0.71,1.01,1.27,1.01h1.87l-4.89,7.06c-0.37,0.53-0.45,1.26-0.22,1.89c0.23,0.62,0.73,1.03,1.28,1.03h8.36v1.91
     l-1.85,3.78c-0.32,0.83,0.15,1.8,0.87,1.8h5.87c0.72,0,1.2-0.97,0.87-1.8l-1.85-3.78v-1.91h8.36c0.55,0,1.05-0.41,1.28-1.03
     C37.08,35.81,37,35.09,36.63,34.56z"/>
   </svg>
   `;
      break;
    case 'square':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <rect stroke="black" stroke-width="1" fill="${color}" x="10.55" y="10.88" class="st0" width="30" height="30"/>
   </svg>`;
      break;
    case 'pin':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path fill="${color}" d="M30.65,22l-0.65-8.5h2.25c0.71,0,1.28-0.78,1.28-1.72V8.32c0-0.95-0.57-1.72-1.28-1.72H17.73
     c-0.71,0-1.28,0.78-1.28,1.72v3.45c0,0.95,0.57,1.72,1.28,1.72h2.25L19.33,22c-2.59,1.62-4.58,4.53-4.58,8.18
     c0,0.95,0.57,1.72,1.28,1.72h7.26v7.47c0,0.09,0.02,0.18,0.05,0.26l1.28,3.45c0.16,0.42,0.61,0.42,0.77,0l1.28-3.45
     c0.03-0.08,0.05-0.17,0.05-0.26V31.9h7.26c0.71,0,1.28-0.78,1.28-1.72C35.23,26.5,33.2,23.61,30.65,22z"/>
   </svg>
   `;
      break;
    case 'parking':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path stroke="black" stroke-width="1" fill="${color}" d="M36.84,9.33H13.16c-1.78,0-3.23,1.5-3.23,3.36v24.63c0,1.85,1.44,3.36,3.23,3.36h23.67
     c1.78,0,3.23-1.5,3.23-3.36V12.68C40.06,10.83,38.62,9.33,36.84,9.33z M26.08,29.48h-3.23v3.36c0,0.61-0.48,1.12-1.08,1.12h-2.15
     c-0.59,0-1.08-0.5-1.08-1.12V17.17c0-0.61,0.48-1.12,1.08-1.12h6.46c3.56,0,6.46,3.02,6.46,6.71S29.64,29.48,26.08,29.48z
      M26.08,20.52h-3.23V25h3.23c1.18,0,2.15-1.01,2.15-2.24C28.23,21.53,27.26,20.52,26.08,20.52z"/>
   </svg>`;
      break;
    case 'home':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path stroke="black" stroke-width="1"  fill="${color}" d="M24.55,17.13L13.82,28.39v12.14c0,0.66,0.42,1.18,0.93,1.18l6.53-0.02c0.51,0,0.92-0.54,0.92-1.18v-7.1
     c0-0.66,0.42-1.18,0.93-1.18h3.73c0.52,0,0.93,0.53,0.93,1.18v7.09c0,0.66,0.42,1.18,0.93,1.19l0,0l6.52,0.02
     c0.52,0,0.93-0.53,0.93-1.18V28.38L25.45,17.13C25.19,16.87,24.81,16.87,24.55,17.13L24.55,17.13z M41.51,24.78l-4.87-5.1V9.41
     c0-0.49-0.31-0.89-0.7-0.89h-3.26c-0.38,0-0.7,0.4-0.7,0.89v5.38l-5.21-5.46c-1.03-1.08-2.52-1.08-3.55,0L8.48,24.78
     c-0.3,0.31-0.34,0.87-0.09,1.25l0,0l1.49,2.3c0.24,0.38,0.68,0.43,0.99,0.12l0,0l13.7-14.36c0.26-0.26,0.63-0.26,0.89,0l13.7,14.36
     c0.3,0.31,0.74,0.26,0.99-0.12l0,0l1.47-2.3C41.85,25.65,41.81,25.09,41.51,24.78L41.51,24.78L41.51,24.78z"/>
   </svg>`;
      break;
    case 'gate':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <path stroke="black" stroke-width="1" fill="${color}" d="M42.74,32.7h-2.22V22.32h2.22c1.22,0,2.22-1.16,2.22-2.6s-0.99-2.6-2.22-2.6h-2.22v-5.19l-1.23-2.88
     c-0.3-0.64-0.99-0.86-1.53-0.5c-0.18,0.12-0.33,0.29-0.43,0.5l-1.24,2.88v5.19h-4.43v-5.19l-1.23-2.88c-0.3-0.64-0.99-0.86-1.53-0.5
     c-0.18,0.12-0.33,0.29-0.43,0.5l-1.24,2.88v5.19h-4.43v-5.19l-1.23-2.88c-0.3-0.64-0.99-0.86-1.53-0.5
     c-0.18,0.12-0.33,0.29-0.43,0.5l-1.24,2.88v5.19h-4.43v-5.19l-1.23-2.88c-0.3-0.64-0.99-0.86-1.53-0.5
     c-0.18,0.12-0.33,0.29-0.43,0.5l-1.24,2.88v5.19H7.26c-1.22,0-2.22,1.16-2.22,2.6s0.99,2.6,2.22,2.6h2.22V32.7H7.26
     c-1.22,0-2.22,1.16-2.22,2.6s0.99,2.6,2.22,2.6h2.22v2.6c0,1.43,0.99,2.6,2.22,2.6s2.22-1.16,2.22-2.6v-2.6h4.43v2.6
     c0,1.43,0.99,2.6,2.22,2.6c1.22,0,2.22-1.16,2.22-2.6v-2.6h4.43v2.6c0,1.43,0.99,2.6,2.22,2.6c1.22,0,2.22-1.16,2.22-2.6v-2.6h4.43
     v2.6c0,1.43,0.99,2.6,2.22,2.6s2.22-1.16,2.22-2.6v-2.6h2.22c1.22,0,2.22-1.16,2.22-2.6S43.96,32.7,42.74,32.7z M13.91,32.7V22.32
     h4.43V32.7H13.91z M22.78,32.7V22.32h4.43V32.7H22.78z M31.65,32.7V22.32h4.43V32.7H31.65z"/>
   </svg>
   `;
      break;
    case 'flag':
      bs = `<svg version="1.1"  focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" viewBox="0 0 512 512"  xml:space="preserve">
   <path stroke="black" stroke-width="10"  fill="${color}" d="M330.5,135.6c-39.8,0-72.6-26.6-122.6-26.6c-18.5,0-35.1,3.4-50.5,9.2c2.1-5.7,3-11.9,2.7-18c-1.3-21.8-18.6-39.2-39.7-40.1
     C96.5,59,77,78.6,77,102.9c0,14.6,7,27.4,17.8,35.2v295.6c0,10.1,8,18.4,17.8,18.4h11.9c9.8,0,17.8-8.2,17.8-18.4v-72.3
     c21-9.2,47.2-16.9,84.9-16.9c39.8,0,72.6,26.6,122.6,26.6c35.7,0,64.3-12.5,90.9-31.3c6.4-4.6,10.3-12.1,10.3-20.2V133.5
     c0-17.9-18-29.8-33.8-22.2C391.8,123.5,360.5,135.6,330.5,135.6z"/>
   </svg>`;
      break;
    case 'diamond':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <polygon stroke="black" stroke-width="1" fill="${color}"  points="6.58,26.5 23.49,7.5 41.58,23.5 24.67,42.5 "/>
   </svg>`;
      break;
    case 'cross':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <g transform="translate(5.0,18.0) scale(0.100000,-0.100000)">
     <path stroke="black" stroke-width="10" fill="${color}" d="M164.5,108.5V-26.75l-143.32,0.6l-0.21-82.08l143.73-0.6v-150.91h80.69v150.51l137.98-0.4l0.21,82.08
       l-138.39,0.6V108.5H164.5z"/>
   </g>
   </svg>`;
      break;
    case 'circle':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <circle stroke="black" stroke-width="1" fill="${color}"  cx="25" cy="25" r="12.5"/>
   </svg>`;
      break;
    case 'x':
      bs = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 50 50" xml:space="preserve">
   <g transform="translate(13.0,22.0) scale(0.100000,-0.100000) rotate(45,0,0)">
     <path stroke="black" stroke-width="10"  fill="${color}" d="M22.34,88.4l-1-146.12l-157.32-0.48l-1.01-88.67l157.72,0.48l-1.12-163.13l88.67,0.61l1.12,162.73l151.52,0.64
       l1.01,88.67l-152.12-0.65l1.01,146.32L22.34,88.4z"/>
   </g>
   </svg>`;
      break;
    default:
      break;
  }
  return bs;
}
const getSVG = (name: string, _color: any) => {
  return getSVGHTML(0, name, _color);
}
const getPointSvg = (name: string, _color: any) => {
  const color = RGBObjectToHexA(_color);
  const id = Math.random();
  const bs = getSVGHTML(id, name, color);
  return 'data:image/svg+xml;base64,' + window.btoa(bs);;
}

export { getPointSvg, getSVG };
