const dragElement = (graphicsId: any, parent: any) => {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const elmnt = document.getElementById(graphicsId + '_container') as any;
  const closeDragElement = () => {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  };
  const elementDrag = (e: any) => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    let aX = elmnt.offsetLeft - pos1;
    let aY = elmnt.offsetTop - pos2;
    var boundry = document.getElementById(parent) as any;

    if (
      aX > 0 &&
      aX < boundry.offsetWidth - elmnt.offsetWidth &&
      aY > 0 &&
      aY < boundry.offsetHeight - elmnt.offsetHeight
    ) {
      elmnt.style.top = aY + 'px';
      elmnt.style.left = aX + 'px';
    }
  };
  const dragMouseDown = (e: any) => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  if (document.getElementById(graphicsId + '_header')) {
    // if present, the header is where you move the DIV from:
    (document.getElementById(graphicsId + '_header') as any).onmousedown = dragMouseDown;
  } 
  // else {
  //   console.log(' sdfsd s dfdsclisdfsdfsdcked other place ');
  //   // otherwise, move the DIV from anywhere inside the DIV:
  //   elmnt.onmousedown = dragMouseDown;
  // }
};

export { dragElement };