window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     ||  
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var w = $(window).width();
var h = $(window).height();
canvas.width = w;
canvas.height = h;

var mols = [];

function init(){
  for(var i=0;i<18;i++){
    var mol = new generate_mol("C6H6");
    mols.push(mol);
  }
}

function draw(){
  canvas.width = canvas.width;
  for(var i=0;i<mols.length;i++){
    var m = mols[i];
    m.x += m.vx;
    if(m.x >= w-100 || m.x <= 0){
      m.vx = -m.vx;
    }
    m.y += m.vy;
    if(m.y >= h-100 || m.y <= 0){
      m.vy = -m.vy;
    }
    
    m.r += 0.005;
    m.draw();
  }
}

function generate_mol(mol){
  this.x = Math.random()*w;
  this.y = Math.random()*h;
  this.vx = Math.random()*-2;
  this.vy = Math.random()*2;
  this.vr = 0.1;
  this.r = Math.random()*Math.PI;
  this.draw = function(){
    if(mol == "C6H6"){
      ctx.save();
      ctx.translate(this.x+20,this.y+80);
      ctx.rotate(this.r);
      ctx.translate(-this.x+20,-this.y-80);
      ctx.beginPath();
      ctx.moveTo(this.x,this.y + 30);
      ctx.lineTo(this.x - 26,this.y + 45);
      ctx.lineTo(this.x - 26,this.y + 75);
      ctx.lineTo(this.x,this.y + 90);
      ctx.lineTo(this.x + 26,this.y + 75);
      ctx.lineTo(this.x + 26,this.y + 45);
      ctx.lineTo(this.x,this.y + 30);
      ctx.moveTo(this.x - 20,this.y + 47);
      ctx.lineTo(this.x - 20,this.y + 73);
      ctx.moveTo(this.x,this.y + 83);
      ctx.lineTo(this.x + 22,this.y + 70);
      ctx.moveTo(this.x,this.y + 36);
      ctx.lineTo(this.x + 22,this.y + 49);
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
}

init();

function animloop() {
  draw();
  requestAnimFrame(animloop);
}

animloop();