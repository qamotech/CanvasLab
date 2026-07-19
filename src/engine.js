export class CanvasEngine {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', ()=>this.resize());
  }
  resize(){
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  start(){
    const loop = ()=>{
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
      requestAnimationFrame(loop);
    };
    loop();
  }
}
