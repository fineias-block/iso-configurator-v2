import React from 'react';
import RoomCanvas from './RoomCanvas';

class RoomCanvasReact extends React.Component {
  componentDidMount() {
    console.log(this.el);
    this.roomCanvas = new RoomCanvas();
    this.el.appendChild(this.roomCanvas.getCanvas());
    this.roomCanvas.addListeners();

    if (this.props.onClick) {
      this.roomCanvas.onClick(this.props.onClick);
    }
    this.roomCanvas.setLayerUrl('base', this.props.base);
    this.roomCanvas.setLayerUrl('floor', this.props.floor);
    this.roomCanvas.setLayerUrl('divider', this.props.divider);
    this.roomCanvas.setLayerUrl('sink', this.props.sink);
    this.roomCanvas.setLayerUrl('toilet', this.props.toilet);
    this.roomCanvas.redraw();

  }

  componentWillUnmount() {
    console.log('unmounted');
    this.roomCanvas.removeListeners();
    this.el.removeChild(this.roomCanvas.getCanvas());
  }

  componentDidUpdate(prevProps) {
    console.log('did update?');
    if (this.roomCanvas) {
      console.log('trying?')
      this.roomCanvas.setLayerUrl('base', this.props.base);
      this.roomCanvas.setLayerUrl('floor', this.props.floor);
      this.roomCanvas.setLayerUrl('divider', this.props.divider);
      this.roomCanvas.setLayerUrl('sink', this.props.sink);
      this.roomCanvas.setLayerUrl('toilet', this.props.toilet);  
      this.roomCanvas.redraw();
    }
  }

  render() {
    console.log(this.props);

    if (this.roomCanvas) {
      this.roomCanvas.setLayerUrl('base', this.props.base);
      this.roomCanvas.setLayerUrl('floor', this.props.floor);
      this.roomCanvas.setLayerUrl('divider', this.props.divider);
      this.roomCanvas.setLayerUrl('sink', this.props.sink);
      this.roomCanvas.setLayerUrl('toilet', this.props.toilet);  
      this.roomCanvas.redraw();
    }
    return <div ref={el => this.el = el} />;
  }
}

export default RoomCanvasReact;