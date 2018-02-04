// ws_cube
// options.direction - left,right,down,up
// use: Modernizr library
// based on: http://alexdunphy.github.io/refineslide/demo.html
// shadow algorithm from : http://tympanus.net/Tutorials/3DShadingWithBoxShadows/
// create .ws_effect
// options.fallback 
function ws_cube(g,h,e){function n(c,k,a,b){return"inset "+-b*c*1.2/90+"px "+a*k*1.2/90+"px "+(c+k)/20+"px rgba("+(a<b?"0,0,0,.6":a>b?"255,255,255,0.8":"0,0,0,.0")+")"}var c=jQuery,v=c(this),w=/WOW Slider/g.test(navigator.userAgent),x=!/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent)&&!w,y=c(".ws_list",e),z=g.perspective||2E3,p={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"},f={domPrefixes:" Webkit Moz ms O Khtml".split(" "),
testDom:function(c){for(var a=this.domPrefixes.length;a--;)if("undefined"!==typeof document.body.style[this.domPrefixes[a]+c])return!0;return!1},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var c="undefined"!==typeof document.body.style.perspectiveProperty||this.testDom("Perspective");if(c&&/AppleWebKit/.test(navigator.userAgent)){var a=document.createElement("div"),e=document.createElement("style"),c="Test3d"+Math.round(99999*Math.random());e.textContent=
"@media (-webkit-transform-3d){#"+c+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(e);a.id=c;document.body.appendChild(a);c=3===a.offsetHeight;e.parentNode.removeChild(e);a.parentNode.removeChild(a)}return c},webkit:function(){return/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}},u=f.cssTransitions()&&f.cssTransforms3d(),A=f.webkit(),a=c("<div>").css(p).css({transformStyle:"preserve-3d",perspective:A&&!w?"none":z,zIndex:8});c("<div>").addClass("ws_effect ws_cube").css(p).append(a).appendTo(e);
if(!u&&g.fallback)return new g.fallback(g,h,e);var m;this.go=function(f,k){function w(a,b,d,e,l,h,k,f,m,t){a.parent().css("perspective",z);var q=a.width(),r=a.height();b.front.css({transform:"translate3d(0,0,0) rotateY(0deg) rotateX(0deg)"});b.back.css({opacity:1,transform:"translate3d(0,0,0) rotateY("+k+"deg) rotateX("+h+"deg)"});if(x)var v=c("<div>").css(p).css("boxShadow",n(q,r,0,0)).appendTo(b.front),y=c("<div>").css(p).css("boxShadow",n(q,r,h,k)).appendTo(b.back);A&&!/WOW Slider/g.test(navigator.userAgent)&&
a.css({transform:"translateZ(-"+d+"px)"});var u=setTimeout(function(){var a="all "+g.duration+"ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";b.front.css({transition:a,boxShadow:x?n(q,r,f,m):"",transform:"rotateX("+f+"deg) rotateY("+m+"deg)",zIndex:0});b.back.css({transition:a,boxShadow:x?n(q,r,0,0):"",transform:"rotateY(0deg) rotateX(0deg)",zIndex:20});x&&(v.css({transition:a,boxShadow:n(q,r,f,m)}),y.css({transition:a,boxShadow:n(q,r,0,0)}));u=setTimeout(t,g.duration)},20);return{stop:function(){clearTimeout(u);
t()}}}var b=c(h[k]),b={width:b.width(),height:b.height(),marginTop:parseFloat(b.css("marginTop")),marginLeft:parseFloat(b.css("marginLeft"))};if(u){m&&m.stop();var l=e.width(),d=e.height(),d={left:[l/2,l/2,0,0,90,0,-90],right:[l/2,-l/2,0,0,-90,0,90],down:[d/2,0,-d/2,90,0,-90,0],up:[d/2,0,d/2,-90,0,90,0]}[g.direction||["left","right","down","up"][Math.floor(4*Math.random())]],t=c("<img>").css(b),b=c("<img>").css(b).attr("src",h.get(f).src),l=c("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+
d[0]+"px",zIndex:20}).css(p).append(t).appendTo(a),b=c("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+d[0]+"px",zIndex:0}).css(p).append(b).appendTo(a);t.on("load",function(){y.hide()});t.attr("src",h.get(k).src).load();a.parent().show();m=new w(a,{front:l,back:b},d[0],d[1],d[2],d[3],d[4],d[5],d[6],function(){v.trigger("effectEnd");a.empty().parent().hide();m=0})}else a.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"}),a.stop(1,1),d=!!((f-k+1)%h.length)^g.revers?
"left":"right",l=c("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(d,0).append(c(h[k]).clone().css({width:100*b.width/e.width()+"%",height:100*b.height/e.height()+"%",marginLeft:100*b.marginLeft/e.width()+"%"})).appendTo(a),b=c("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(c(h[f]).clone().css({width:100*b.width/e.width()+"%",height:100*b.height/e.height()+"%",marginLeft:100*b.marginLeft/e.width()+
"%"})).appendTo(a),a.css({left:"auto",right:"auto",top:0}).css(d,0).show(),a.show(),y.hide(),b.animate({width:"100%",left:0},g.duration,"easeInOutExpo",function(){c(this).remove()}),l.animate({width:0},g.duration,"easeInOutExpo",function(){v.trigger("effectEnd");a.empty().hide()})}};
// ws_cube
// options.direction - left,right,down,up
// use: Modernizr library
// based on: http://alexdunphy.github.io/refineslide/demo.html
// shadow algorithm from : http://tympanus.net/Tutorials/3DShadingWithBoxShadows/
// create .ws_effect
// options.fallback 
function ws_cube(g,h,e){function n(c,k,a,b){return"inset "+-b*c*1.2/90+"px "+a*k*1.2/90+"px "+(c+k)/20+"px rgba("+(a<b?"0,0,0,.6":a>b?"255,255,255,0.8":"0,0,0,.0")+")"}var c=jQuery,v=c(this),w=/WOW Slider/g.test(navigator.userAgent),x=!/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent)&&!w,y=c(".ws_list",e),z=g.perspective||2E3,p={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"},f={domPrefixes:" Webkit Moz ms O Khtml".split(" "),
testDom:function(c){for(var a=this.domPrefixes.length;a--;)if("undefined"!==typeof document.body.style[this.domPrefixes[a]+c])return!0;return!1},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var c="undefined"!==typeof document.body.style.perspectiveProperty||this.testDom("Perspective");if(c&&/AppleWebKit/.test(navigator.userAgent)){var a=document.createElement("div"),e=document.createElement("style"),c="Test3d"+Math.round(99999*Math.random());e.textContent=
"@media (-webkit-transform-3d){#"+c+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(e);a.id=c;document.body.appendChild(a);c=3===a.offsetHeight;e.parentNode.removeChild(e);a.parentNode.removeChild(a)}return c},webkit:function(){return/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}},u=f.cssTransitions()&&f.cssTransforms3d(),A=f.webkit(),a=c("<div>").css(p).css({transformStyle:"preserve-3d",perspective:A&&!w?"none":z,zIndex:8});c("<div>").addClass("ws_effect ws_cube").css(p).append(a).appendTo(e);
if(!u&&g.fallback)return new g.fallback(g,h,e);var m;this.go=function(f,k){function w(a,b,d,e,l,h,k,f,m,t){a.parent().css("perspective",z);var q=a.width(),r=a.height();b.front.css({transform:"translate3d(0,0,0) rotateY(0deg) rotateX(0deg)"});b.back.css({opacity:1,transform:"translate3d(0,0,0) rotateY("+k+"deg) rotateX("+h+"deg)"});if(x)var v=c("<div>").css(p).css("boxShadow",n(q,r,0,0)).appendTo(b.front),y=c("<div>").css(p).css("boxShadow",n(q,r,h,k)).appendTo(b.back);A&&!/WOW Slider/g.test(navigator.userAgent)&&
a.css({transform:"translateZ(-"+d+"px)"});var u=setTimeout(function(){var a="all "+g.duration+"ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";b.front.css({transition:a,boxShadow:x?n(q,r,f,m):"",transform:"rotateX("+f+"deg) rotateY("+m+"deg)",zIndex:0});b.back.css({transition:a,boxShadow:x?n(q,r,0,0):"",transform:"rotateY(0deg) rotateX(0deg)",zIndex:20});x&&(v.css({transition:a,boxShadow:n(q,r,f,m)}),y.css({transition:a,boxShadow:n(q,r,0,0)}));u=setTimeout(t,g.duration)},20);return{stop:function(){clearTimeout(u);
t()}}}var b=c(h[k]),b={width:b.width(),height:b.height(),marginTop:parseFloat(b.css("marginTop")),marginLeft:parseFloat(b.css("marginLeft"))};if(u){m&&m.stop();var l=e.width(),d=e.height(),d={left:[l/2,l/2,0,0,90,0,-90],right:[l/2,-l/2,0,0,-90,0,90],down:[d/2,0,-d/2,90,0,-90,0],up:[d/2,0,d/2,-90,0,90,0]}[g.direction||["left","right","down","up"][Math.floor(4*Math.random())]],t=c("<img>").css(b),b=c("<img>").css(b).attr("src",h.get(f).src),l=c("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+
d[0]+"px",zIndex:20}).css(p).append(t).appendTo(a),b=c("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+d[0]+"px",zIndex:0}).css(p).append(b).appendTo(a);t.on("load",function(){y.hide()});t.attr("src",h.get(k).src).load();a.parent().show();m=new w(a,{front:l,back:b},d[0],d[1],d[2],d[3],d[4],d[5],d[6],function(){v.trigger("effectEnd");a.empty().parent().hide();m=0})}else a.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"}),a.stop(1,1),d=!!((f-k+1)%h.length)^g.revers?
"left":"right",l=c("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(d,0).append(c(h[k]).clone().css({width:100*b.width/e.width()+"%",height:100*b.height/e.height()+"%",marginLeft:100*b.marginLeft/e.width()+"%"})).appendTo(a),b=c("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(c(h[f]).clone().css({width:100*b.width/e.width()+"%",height:100*b.height/e.height()+"%",marginLeft:100*b.marginLeft/e.width()+
"%"})).appendTo(a),a.css({left:"auto",right:"auto",top:0}).css(d,0).show(),a.show(),y.hide(),b.animate({width:"100%",left:0},g.duration,"easeInOutExpo",function(){c(this).remove()}),l.animate({width:0},g.duration,"easeInOutExpo",function(){v.trigger("effectEnd");a.empty().hide()})}};
