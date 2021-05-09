export class InputManager{
	InputManager(){
		
	}
	init():Array<string>{
			
		var editorType: string = prompt('Enter editor type: tile-map, tile-painter');
		if(editorType =='tile-map'){
		  alert('Mode set to tile map editor');
		}
		else if(editorType =='tile-painter'){
		  alert('Mode set to tile painter');
		  var tilePainterMode: string = prompt('Enter editor mode: grayscale, rgb, black-n-white');
		  if(tilePainterMode == 'grayscale'){
		    alert('Color mode set tp grayscale');
		  }
		
		}else {
		  alert('Invalid mode specified.');
		
		}
	}
}
