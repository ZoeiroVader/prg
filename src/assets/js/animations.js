var screen = document.getElementById('screen');
var distances = [0, 180, 350]
var monstars = [
  { 
    name: 'Jonson',
    strength : 12,
    life: 12,
    skills: [{}]
  }
] 
var locations = [
  {
    name: 'Tutorial dos Humilde',
    info: 'Local destinado a iniciantes, monstros que podem aparecer: Goblin, Ratos, Slimes'
  }, 
  {
    name:'Master Land',
    info: 'Local destinado a aventureiros, monstros que podem aparecer: Lobos, Orcs, Zumbis'
  }, 
  {
    name:'LMOA Kingdom',
    info: 'Local destinado a Mestres, monstros que podem aparecer: Dragões, Machos alpha, Feministas, Rei Goblin'
  }]
var arrowLocation = 0;
var scenes = {
  map: {
    active: false,
    scene: ()=>{
      actions_log_title.innerHTML = `Entrar na terra de ${locations[0].name}`;
      info.innerHTML = locations[0].info;
      screen.innerHTML = `
        <p class="title">Map</p><img class="img-responsive" src="assets/img/map.png">
        <img class="moving-arrow" src="assets/img/arrowselect.gif">
      `
    }
  },
  battle: {
    active: false,
    scene : ()=>{
        console.log("as");
        actions_log_title.innerHTML = `Batalha contra ${monstars[0].name}`;
        info.innerHTML = locations[0].info;
        screen.innerHTML = `
          <img src="assets/img/battleBackground.png">
          <img class="monstar" src="assets/img/monstar.gif">
          <img class="monstar" src="assets/img/mattack.gif">
          <img class="hero" src="assets/img/hero.gif">
        `
    }
  }
}
var mapLocation = { name: '', distance: ''}
scenes.battle.scene();
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
        actions_log_title.innerHTML = `Entrar na terra de ${isUndefined(locations[i].name) ? locations[i -1].name: locations[i].name}`
        info.innerHTML = `${isUndefined(locations[i].info) ? locations[i -1].info: locations[i].info}`
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
        actions_log.innerHTML = `Entrar na terra de ${isUndefined(locations[i].name) ? locations[i +1].name: locations[i].name}`
        info.innerHTML = `${isUndefined(locations[i].info) ? locations[i +1].info: locations[i].info}`
        break;
      }
    }
    al.translateX = arrowLocation 
    update(al) 
  }
}