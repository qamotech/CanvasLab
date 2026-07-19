(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();class p{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){const t=this.canvas.getBoundingClientRect(),e=window.devicePixelRatio||1;this.canvas.width=t.width*e,this.canvas.height=t.height*e,this.ctx.setTransform(e,0,0,e,0,0),this.anim&&this.anim.resize(t.width,t.height)}setAnimation(t){this.anim&&this.anim.stop(),this.anim=new t(this.canvas),this.anim.resize(this.canvas.clientWidth,this.canvas.clientHeight),this.anim.start()}}class c{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.running=!1}init(){}update(){}draw(){}resize(t,e){this.width=t,this.height=e}start(){this.running=!0,this.init();const t=()=>{this.running&&(this.update(),this.draw(this.ctx),requestAnimationFrame(t))};t()}stop(){this.running=!1}}const f=`import {BaseAnimation} from '../core/BaseAnimation.js';
import source from './noiseFlow.js?raw';

export const sourceCode=source;
export const config={};

export class AnimationClass extends BaseAnimation{
  draw(ctx){
    ctx.clearRect(0,0,this.width,this.height);
    for(let i=0;i<200;i++){
      let x=Math.random()*this.width;
      let y=Math.random()*this.height;
      ctx.fillRect(x,y,1,1);
    }
  }
}
`,g=f,y={};let x=class extends c{draw(t){t.clearRect(0,0,this.width,this.height);for(let e=0;e<200;e++){let i=Math.random()*this.width,s=Math.random()*this.height;t.fillRect(i,s,1,1)}}};const w=Object.freeze(Object.defineProperty({__proto__:null,AnimationClass:x,config:y,sourceCode:g},Symbol.toStringTag,{value:"Module"})),b=new Set,r={values:{}};function h(n,t){r.values[n]=t,b.forEach(e=>e(r.values))}function m(){return r.values}function v(n){r.values={...n}}const C=`import {BaseAnimation} from '../core/BaseAnimation.js';
import {getState} from '../core/state.js';
import source from './particles.js?raw';

export const sourceCode=source;

export const config={
  count:{type:'range',label:'Count',min:50,max:200,step:1,default:100},
  speed:{type:'range',label:'Speed',min:0.2,max:2,step:0.1,default:1}
};

export class AnimationClass extends BaseAnimation{
  init(){
    this.gen();
  }
  gen(){
    this.p=[];
    for(let i=0;i<getState().count;i++){
      this.p.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:Math.random()-0.5,vy:Math.random()-0.5});
    }
  }
  update(){
    const s=getState().speed;
    this.p.forEach(p=>{p.x+=p.vx*s;p.y+=p.vy*s;});
  }
  draw(ctx){
    ctx.clearRect(0,0,this.width,this.height);
    ctx.fillStyle='white';
    this.p.forEach(p=>ctx.fillRect(p.x,p.y,2,2));
  }
}
`,A=C,_={count:{type:"range",label:"Count",min:50,max:200,step:1,default:100},speed:{type:"range",label:"Speed",min:.2,max:2,step:.1,default:1}};let j=class extends c{init(){this.gen()}gen(){this.p=[];for(let t=0;t<m().count;t++)this.p.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:Math.random()-.5,vy:Math.random()-.5})}update(){const t=m().speed;this.p.forEach(e=>{e.x+=e.vx*t,e.y+=e.vy*t})}draw(t){t.clearRect(0,0,this.width,this.height),t.fillStyle="white",this.p.forEach(e=>t.fillRect(e.x,e.y,2,2))}};const S=Object.freeze(Object.defineProperty({__proto__:null,AnimationClass:j,config:_,sourceCode:A},Symbol.toStringTag,{value:"Module"})),E=`import {BaseAnimation} from '../core/BaseAnimation.js';
import source from './wave.js?raw';

export const sourceCode=source;
export const config={amp:{type:'range',label:'Amplitude',min:10,max:100,step:1,default:40}};

export class AnimationClass extends BaseAnimation{
  draw(ctx){
    ctx.clearRect(0,0,this.width,this.height);
    ctx.beginPath();
    for(let x=0;x<this.width;x++){
      let y=this.height/2+Math.sin(x*0.02+performance.now()*0.002)*40;
      ctx.lineTo(x,y);
    }
    ctx.strokeStyle='cyan';
    ctx.stroke();
  }
}
`,M=E,B={amp:{type:"range",label:"Amplitude",min:10,max:100,step:1,default:40}};class O extends c{draw(t){t.clearRect(0,0,this.width,this.height),t.beginPath();for(let e=0;e<this.width;e++){let i=this.height/2+Math.sin(e*.02+performance.now()*.002)*40;t.lineTo(e,i)}t.strokeStyle="cyan",t.stroke()}}const P=Object.freeze(Object.defineProperty({__proto__:null,AnimationClass:O,config:B,sourceCode:M},Symbol.toStringTag,{value:"Module"})),R=Object.assign({"./noiseFlow.js":w,"./particles.js":S,"./wave.js":P}),l=Object.entries(R).filter(([n])=>!n.endsWith("index.js")).map(([n,t])=>({name:n.split("/").pop().replace(".js",""),...t}));function T(n,t){n.innerHTML="",Object.entries(t).forEach(([e,i])=>{const s=document.createElement("div");s.className="control";const a=document.createElement("label");a.textContent=i.label;const o=document.createElement("input");o.type=i.type==="range"?"range":i.type,i.type==="range"&&(o.min=i.min,o.max=i.max,o.step=i.step),i.type==="checkbox"?o.checked=i.default:o.value=i.default,h(e,i.default),o.oninput=()=>h(e,i.type==="checkbox"?o.checked:parseFloat(o.value)||o.value),s.append(a,o),n.appendChild(s)})}function z(n,t){n.innerHTML=`
  <div style="display:flex;justify-content:space-between;">
    <span>Source</span>
    <button id="copy">Copy</button>
  </div>
  <pre><code></code></pre>
  `;const e=n.querySelector("code");e.textContent=t,n.querySelector("#copy").onclick=()=>navigator.clipboard.writeText(t)}function I(n){n.onclick=()=>{const t=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=t,localStorage.setItem("theme",t)},document.documentElement.dataset.theme=localStorage.getItem("theme")||"light"}function L(n){n.onclick=()=>document.getElementById("app").classList.toggle("sidebar-open")}const $=document.getElementById("canvas"),k=new p($),d=document.getElementById("sidebar"),F=document.getElementById("code-panel");function u(n){const t=Object.fromEntries(Object.entries(n.config||{}).map(([e,i])=>[e,i.default]));v(t),T(d,n.config||{}),k.setAnimation(n.AnimationClass),z(F,n.sourceCode||"")}d.innerHTML=l.map(n=>`<button data-name="${n.name}">${n.name}</button>`).join("");d.onclick=n=>{const t=n.target.dataset.name,e=l.find(i=>i.name===t);e&&u(e)};I(document.getElementById("theme-btn"));L(document.getElementById("menu-btn"));u(l[0]);
