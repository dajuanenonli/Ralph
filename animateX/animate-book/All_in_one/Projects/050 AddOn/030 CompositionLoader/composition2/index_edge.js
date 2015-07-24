/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'first',
            type:'image',
            rect:['0px','0px','550px','275px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"first.png",'0px','0px']
         },
         {
            id:'text',
            type:'rect',
            rect:['241px','49px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'text',
            symbolName:'text'
         }
         ]
      },
   states: {
      "Base State": {
         "${_first}": [
            ["style", "left", '433px'],
            ["style", "top", '40px']
         ],
         "${_text}": [
            ["style", "top", '-149px'],
            ["style", "left", '-26px']
         ],
         "${_Text2}": [
            ["style", "height", '327px'],
            ["style", "top", '-351px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(71,71,71,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '275px'],
            ["style", "width", '550px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5200,
         autoPlay: true,
         labels: {
            "loop": 1615
         },
         timeline: [
            { id: "eid11", tween: [ "style", "${_first}", "left", '0px', { fromValue: '433px'}], position: 0, duration: 1000, easing: "easeOutQuart" },
            { id: "eid76", tween: [ "style", "${_text}", "left", '51px', { fromValue: '-26px'}], position: 450, duration: 1165, easing: "easeInOutQuad" },
            { id: "eid63", tween: [ "style", "${_text}", "top", '46px', { fromValue: '-149px'}], position: 205, duration: 1410, easing: "easeInOutExpo" },
            { id: "eid71", tween: [ "style", "${_text}", "top", '60px', { fromValue: '46px'}], position: 1615, duration: 1680, easing: "easeInOutQuad" },
            { id: "eid72", tween: [ "style", "${_text}", "top", '46px', { fromValue: '60px'}], position: 3295, duration: 1905, easing: "easeInOutQuad" },
            { id: "eid77", tween: [ "color", "${_Stage}", "background-color", 'rgba(212,212,212,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(71,71,71,1.00)'}], position: 0, duration: 1415, easing: "easeOutQuart" },
            { id: "eid74", tween: [ "style", "${_first}", "top", '0px', { fromValue: '40px'}], position: 450, duration: 550, easing: "easeInOutQuad" }         ]
      }
   }
},
"text": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-152px','15px','81px','81px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(87,87,87,1.00)']
   },
   {
      rect: ['7px','10px','245px','123px','auto','auto'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'Rectangle',
      opacity: 0.2,
      type: 'rect',
      fill: ['rgba(78,78,78,1.00)']
   },
   {
      rect: ['-8px','64px','245px','123px','auto','auto'],
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(87,87,87,1.00)']
   },
   {
      rect: ['32px','120px','209px','85px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(229,229,229,1.00)','700','none','normal'],
      id: 'Text',
      text: 'I\'M YOUR SECOND<br>EXTERNAL COMPOSITION',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '15px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(87,87,87,1.00)'],
            ["style", "left", '218px'],
            ["style", "width", '37px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(229,229,229,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '32px'],
            ["style", "width", '209px'],
            ["style", "top", '19px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '23px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "height", '89px']
         ],
         "${symbolSelector}": [
            ["style", "height", '123px'],
            ["style", "width", '262px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(78,78,78,1.00)'],
            ["style", "opacity", '0.2'],
            ["style", "left", '7px'],
            ["style", "top", '10px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(87,87,87,1.00)'],
            ["style", "left", '17px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1795,
         autoPlay: true,
         timeline: [
            { id: "eid67", tween: [ "style", "${_Rectangle2}", "left", '236px', { fromValue: '218px'}], position: 1340, duration: 455, easing: "easeOutQuart" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-839280334");
