const dragElement = (graphicsId: any, parent: any) => {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
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
    const aX = elmnt.offsetLeft - pos1;
    const aY = elmnt.offsetTop - pos2;
    const boundry = document.getElementById(parent) as any;

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
};

export { dragElement };
