const CreateTextSymbolForLabels = (parent: any) => {
  return {
    type: 'text',
    color: (parent.geometry.type === 'polyline')
      ? parent.attributes.symbol.color
      : parent.attributes.symbol.outline.color,
    text: '0',
    xoffset: 3,
    yoffset: 3,
    font: {
      decoration: 'none',
      family: 'Arial',
      size: '18px',
      style: 'normal',
      weight: 'normal'
    }
  }
}

export { CreateTextSymbolForLabels };
