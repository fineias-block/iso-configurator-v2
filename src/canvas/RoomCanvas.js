import { height, width } from "@mui/system";

function RoomCanvas() {
  const WIDTH = 800;
  const HEIGHT = 800;

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');

  const layers = [];

  let onClickCallback = undefined;

  const createLayer = (name) => {

    layers.push({label: name, img: document.createElement('img'), highlight: false, data: undefined, imgHighlight: undefined});
  }

  const getLayer = (name) => {
    return layers.find((l) =>  l.label === name);
  }

  const getLayerAlpha = (layer, x, y) => {
    return layer.data[(x * 4) + (y * WIDTH * 4) + 3];
  }

  createLayer('base');
  createLayer('divider');
  createLayer('floor');
  createLayer('sink');
  createLayer('toilet');


  const onMouseMove = (event) => {
    let found = false;
    const layersReversed = layers.slice().reverse();
    layersReversed.forEach((layer) => {
      layer.highlight = false;
      if (found) {
        return;
      }

      const alpha = getLayerAlpha(layer, event.clientX, event.clientY);
      if (alpha > 1) {
        layer.highlight = true;
        found = true;
      }
    });
    this.redraw();
  };

  const onClick = (event) => {
    const currentLayer = layers.find(layer => layer.highlight);

    if (currentLayer && onClickCallback) {
      onClickCallback(currentLayer.label);
    }
  }

  const onMouseOut = (event) => {
    layers.forEach((layer) => {
        layer.highlight = false;
    });
    this.redraw();
  }

  function applyThreshold(sourceImageData, threshold = 127) {
    const src = sourceImageData.data;
    
    for (let i = 0; i < src.length; i += 4) {
      const r = src[i];
      const g = src[i + 1];
      const b = src[i + 2];
      
      // thresholding the current value
      const v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold ? 255 : 0;
      src[i] = src[i + 1] = src[i + 2] = v;
    }
    
    return sourceImageData;
  }
  

  const createImageHighlight = (source) => {
    const tempCanvas = document.createElement('canvas');

    const tempCtx = tempCanvas.getContext('2d');

    tempCanvas.width = WIDTH;
    tempCanvas.height = HEIGHT;

    tempCtx.clearRect(0,0, WIDTH, HEIGHT);
    tempCtx.drawImage(source, 0, 0, WIDTH, HEIGHT);

    const sourceImageData = tempCtx.getImageData(0, 0, WIDTH, HEIGHT);
    
    const src = sourceImageData.data;
    for(let i=0; i < src.length; i += 4) {
      const a = src[i+3];

      if (a > 1) {
        src[i] = 255;
        src[i+1] = 165;
        src[i+2] = 0;
        src[i+3] = 128;
      }
    }

    tempCtx.putImageData(sourceImageData, 0, 0);

    const tempImg = document.createElement('img');
    tempImg.src = tempCanvas.toDataURL();
    document.body.appendChild(tempImg);

    return tempImg;
  }

  this.addListeners = () => {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseout', onMouseOut);
    canvas.addEventListener('click', onClick);
  }

  this.removeListeners = () => {
    canvas.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mouseout', onMouseOut);
    canvas.removeEventListener('click', onClick);
  }

  this.onClick = (_onClickCallback) => {
    onClickCallback = _onClickCallback;
  }

  this.redraw = () => {
    ctx.clearRect(0,0, WIDTH, HEIGHT);

    layers.forEach((layer) => {
      if (layer.highlight) {
        ctx.filter = 'drop-shadow(0 0 20px orange)';
      }
      ctx.drawImage(layer.img, 0, 0, WIDTH, HEIGHT);
      ctx.filter = 'none';
      if (layer.highlight) {
        ctx.drawImage(layer.imgHighlight, 0, 0, WIDTH, HEIGHT);
      }
    });
  };
  this.redraw = this.redraw.bind(this);

  this.setLayerUrl = (name, url) => {
    const layer = getLayer(name);

    layer.img.onload = () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = WIDTH;
      tempCanvas.height = HEIGHT;
      const ctx = tempCanvas.getContext('2d');

      ctx.drawImage(layer.img, 0, 0, WIDTH, HEIGHT);
      layer.data = ctx.getImageData(0,0,WIDTH, HEIGHT).data;

      layer.imgHighlight = createImageHighlight(layer.img);
      console.log(layer.imgHighlight);

      // document.body.appendChild(layer.imgHighlight);

      this.redraw();
    }
    layer.img.src = url;

  }

  this.getCanvas = () => canvas;
};

export default RoomCanvas;
