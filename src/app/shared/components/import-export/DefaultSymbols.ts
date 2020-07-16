const defaultTextSymbol = {
    "type": "text", "color": { "r": 100, "g": 20, "b": 5, "a": 1 },
    "text": "test", "yoffset": -6,
    "font": { "size": "18px", "family": "Arial", "weight": "normal", "decoration": "none", "style": "normal" },
    "lineWidth": "500px"
};

const defaultPointSymbol: any = {
    "type": "simple-marker", "size": "12px", "url": "", "width": "12px",
    "height": "12px", "style": "circle", "contentType": "image/svg", "name": "circle",
    "color": { "r": 100, "g": 20, "b": 5, "a": 1 }
};

export {defaultTextSymbol, defaultPointSymbol}