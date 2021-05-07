let canvas: HTMLCanvasElement= document.querySelector('#canvas');
let ctx: CanvasRenderingContext2D = canvas.getContext('2d');

/*
types:
tile map editor,
tile editor...types:
  black and white
  gray-scale
  rgb
*/

var editorType: string = prompt('Enter editor type: tile-map, tile-painter');
if(editorType =='tile-map'){
  alert('Mode set to tile map editor');
}
else if(editorType =='tile-painter'){
  alert('Mode set to tile painter');
  var tilePainterMode: string = prompt('Enter editor mode: grayscale, rgb, black-n-white');
  
}else {
  alert('Invalid mode specified.');
  
}

