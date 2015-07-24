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
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.1316",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['236px','58px','126px','129px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,207,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            boxShadow:["",3,3,60,0,"rgba(255,194,0,1.00)"]
         },
         {
            id:'bkgd',
            type:'image',
            rect:['-29px','30px','1644px','370px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bkgd.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,6,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'midground',
            type:'image',
            rect:['0px','246px','2000px','154px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"midground.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,2,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'WorldMap',
            type:'image',
            rect:['376px','-32px','433px','337px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"WorldMap.svg",'0px','0px']
         },
         {
            id:'Impala',
            type:'image',
            rect:['93px','98px','225px','225px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Impala.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,2,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'foreground',
            type:'image',
            rect:['-37px','215px','2267px','334px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"foreground.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_bkgd}": [
            ["style", "top", '30px'],
            ["subproperty", "filter.blur", '6px'],
            ["style", "left", '-29px']
         ],
         "${_Ellipse}": [
            ["style", "top", '58px'],
            ["subproperty", "boxShadow.blur", '60px'],
            ["subproperty", "boxShadow.color", 'rgba(255,194,0,1.00)'],
            ["color", "background-color", 'rgba(255,207,0,1.00)'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '236px'],
            ["subproperty", "boxShadow.offsetH", '3px']
         ],
         "${_midground}": [
            ["style", "top", '246px'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["gradient", "background-image", [270,[['rgba(255,199,0,1.00)',0],['rgba(255,255,255,1.00)',44]]]],
            ["style", "width", '700px']
         ],
         "${_WorldMap}": [
            ["style", "top", '-32px'],
            ["style", "left", '376px']
         ],
         "${_foreground}": [
            ["style", "top", '215px'],
            ["style", "left", '-37px']
         ],
         "${_Impala}": [
            ["style", "top", '98px'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '93px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-4698296");
