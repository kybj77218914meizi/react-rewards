(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Confetti',[],b):'object'==typeof exports?exports.Confetti=b():a.Confetti=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=3)}([function(a,b){'use strict';function c(a,b,c,d){return Array.from({length:b}).map((b,e)=>{const f=document.createElement('span'),g=d[e%d.length];return f.style['background-color']=g,f.style.width=`${c}px`,f.style.height=`${c}px`,f.style.position='absolute',a.appendChild(f),f})}function d(a,b,c,d){var e=Math.PI;const f=b*(e/180);return{x:0,y:0,wobble:10*d(),velocity:0.5*c+d()*c,angle2D:-(a*(e/180))+(0.5*f-d()*f),angle3D:-(e/4)+d()*(e/2),tiltAngle:d()*e}}function e(a,b,c){var d=Math.sin,e=Math.cos;a.physics.x+=e(a.physics.angle2D)*a.physics.velocity,a.physics.y+=d(a.physics.angle2D)*a.physics.velocity,a.physics.z+=d(a.physics.angle3D)*a.physics.velocity,a.physics.wobble+=0.1,a.physics.velocity*=c,a.physics.y+=3,a.physics.tiltAngle+=0.1;var f=a.physics;const g=f.x,h=f.y,i=f.tiltAngle,j=f.wobble,k=g+10*e(j),l=h+10*d(j),m=`translate3d(${k}px, ${l}px, 0) rotate3d(1, 1, 1, ${i}rad)`;a.element.style.transform=m,a.element.style.opacity=1-b}function f(a,b,c,d){function f(){b.forEach((a)=>e(a,h/g,c)),h+=1,h<g?requestAnimationFrame(f):b.forEach((b)=>{if(b.element.parentNode===a)return a.removeChild(b.element)})}const g=d;let h=0;requestAnimationFrame(f)}Object.defineProperty(b,'__esModule',{value:!0}),b.confetti=function(a,{angle:b=90,decay:e=0.91,spread:h=360,startVelocity:i=15,elementCount:j=27,elementSize:k=15,lifetime:l=200,colors:m=g,random:n=Math.random}={}){const o=c(a,j,k,m),p=o.map((a)=>({element:a,physics:d(b,h,i,n)}));f(a,p,e,l)};const g=['#a864fd','#29cdff','#78ff44','#ff718d','#fdff6a']},,,function(a,b,c){a.exports=c(0)}])});
//# sourceMappingURL=Confetti.js.map