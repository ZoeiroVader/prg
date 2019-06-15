var mapSize = [600, 350]
var isOverRectangle, fc, backMap, areaSelected;
var areaMap = () =>{
  var areas = [{
    name: 'area 1',
    border : strokeWeight(0),
    fill : fill(fc),
    x: 30, y: 100, width: 160, height: 160,
    area: rect(30, 100, 160, 160)
  },{
      name: 'area 2',
      border : strokeWeight(0),
      fill : fill(fc),
      x: 210, y: 100, width: 210, height: 160,
      area: rect(210, 100, 210, 160)
  },{
      name: 'area 3',
      border : strokeWeight(0),
      fill : fill(fc),
      x: 430, y: 100, width: 140, height: 160,
      area: rect(430, 100, 140, 160)
  }]

  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  if(!isOverRectangle){
    backMap();
  }  
  for (const area of areas) {
      area.area;
      clickableArea(area.x,area.y,area.width,area.height, area.name)              
  }
}

function setup() {
    const c = createCanvas(mapSize[0], mapSize[1]);
    c.parent('canva')
    backMap =()=>{
      loadImage('assets/img/map.png', img => {
        image(img, 0, 0);
      })
    } 
    fc = color(0, 0, 255, 0)
    
}

function draw() {
    areaMap();
    
}
function clickableArea(x,y,width,height, name) {
    
    if (mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height) {
        isOverRectangle = true;
        
        addEventListener('onclick', ()=>{
          console.log(name); 
        })
        loadImage('assets/img/arrowselect.gif', img => {
          image(img, x+width/2.5, y+height/2.5);
        })
        //console.log(name, mouseX, mouseY);
        //fc = color(0, 232, 255)   
    } else {
        isOverRectangle = false;
      //  fc = color(0, 0, 255)
    }    
}
 
function mousePressed(area)
{
  console.log(area, 'a'); 
}

