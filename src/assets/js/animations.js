var distances = [0, 180, 350]
var locations = ['Tutorial dos Humilde', 'Master Land', 'LMOA Kingdom']
var arrowLocation = 0;
var scenes = {
  map: true,
  battle: false
}
var mapLocation = { name: '', distance: ''}

document.onkeydown = btnListener;
function update(obj) {
  anime(obj);
}
function isUndefined(thing) {
  if (thing == undefined)
    return true
  else
    return false
}
function btnListener(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      // up arrow
        
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       moveLeft();
      
    }
    else if (e.keyCode == '39') {
       // right arrow
       moveRight();
    }

}

function moveRight() {  
  scenes.map ? moveArrowLocation('right') : moveCursor() 
}

function moveLeft() {  
  scenes.map ? moveArrowLocation('left') : moveCursor() 
}

function moveArrowLocation(way) {
  al = {
    targets: '.moving-arrow',
    translateX: undefined
  }
  if (way == 'right') {
    for (let i = 0; i < distances.length; i++) {
      if (distances[i] == arrowLocation) {
        console.log(distances[i]);      
        arrowLocation = distances[i == distances.length - 1 ? distances[i] : ++i]
        if (isUndefined(arrowLocation)) {
          arrowLocation = 0
          i = 0
        }
        actions_log.innerHTML = `Entrar na terra de ${isUndefined(locations[i]) ? locations[i -1]: locations[i]}`
        break;
      }
    }
    al.translateX = arrowLocation 
    update(al) 
  }else{
    for (let i = 0; i < distances.length; i++) {
      if (distances[i] == arrowLocation) {
        console.log(distances[i]);      
        arrowLocation = distances[i == 0 - 1 ? distances[0] : --i]
        if (isUndefined(arrowLocation)) {
          arrowLocation = 350
          i = distances.length -1
        }
        actions_log.innerHTML = `Entrar na terra de ${isUndefined(locations[i]) ? locations[i +1]: locations[i]}`
        break;
      }
    }
    al.translateX = arrowLocation 
    update(al) 
  }
}