
(function(compId){var _=null,y=true,n=false,e18='${baseCopy}',e19='${Content}',x4='rgba(0,0,0,0)',x1='5.0.1',g='image',x13='Courier, Courier New, monospace',cl='clip',x='text',m='rect',i='none',x21='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e24='${base}',x3='5.0.1.386',p='px',o='opacity',lf='left',e23='${App}',l='normal',e22='${Text}',x15='break-word',e20='${TextCopy}',x10='rgba(48,48,48,1.00)',tp='top',x2='5.0.0',x17='rgba(116,194,183,1.00)',xc='rgba(0,0,0,1)',x14='100',x12='22';var g5='Tablet.png',g9='Content.png',g6='Sitemap.png',g7='Pen.png',g8='App.png';var s16="wrapper",s11="content";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Tablet',t:g,r:['139px','136px','271px','162px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Sitemap',t:g,r:['45px','62px','129px','78px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Pen',t:g,r:['360px','276px','111px','66px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'App',t:g,r:['162px','96px','225px','132px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Content',t:g,r:['162px','149px','225px','132px','auto','auto'],cu:'pointer',f:[x4,im+g9,'0px','0px']},{id:'base',t:m,r:['423px','57px','118px','39px','auto','auto'],o:'1',f:[x10],s:[0,xc,i],c:[{id:'arrow',t:m,r:['-3px','7px','26px','26px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i],tf:[[],['45']]},{id:'Text',t:x,r:['10px','5px','97px','26px','auto','auto'],cl:'rect(0px 0px 26px 0px)',text:s11,align:"center",n:[x13,[x12,p],"rgba(255,255,255,1.00)",x14,i,"",x15,l]}]},{id:'baseCopy',t:m,r:['13px','151px','118px','39px','auto','auto'],f:[x10],s:[0,xc,i],c:[{id:'arrowCopy',t:m,r:['95px','7px','26px','26px','auto','auto'],f:[x10],s:[0,"rgb(0, 0, 0)",i],tf:[[],['45']]},{id:'TextCopy',t:x,r:['10px','5px','97px','26px','auto','auto'],cl:'rect(0px -1px 26px 0px)',text:s16,align:"center",n:[x13,[x12,p],"rgba(255,255,255,1.00)",x14,i,"",x15,l]}]}],style:{'${Stage}':{isStage:true,r:['null','null','550px','400px','auto','auto'],overflow:'hidden',f:[x17]}}},tt:{d:1500,a:y,data:[["eid9",o,500,250,"linear",e18,'0','1'],["eid1",tp,0,1000,"easeOutCirc",e19,'149px','30px'],["eid12",cl,1000,250,"linear",e20,[0,-1,26,0],[0,97,26,0],{vt:x21}],["eid17",cl,1250,250,"linear",e22,[0,0,26,0],[0,96,26,0],{vt:x21}],["eid2",tp,0,1000,"easeOutCirc",e23,'149px','96px'],["eid8",lf,500,500,"easeOutBack",e18,'-150px','13px'],["eid10",lf,750,500,"easeOutBack",e24,'585px','423px'],["eid5",o,750,250,"linear",e24,'0','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-273959099");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Content}","mouseenter",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Content}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-273959099");