/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['allura, cursive']='<script src=\"http://use.edgefonts.net/allura:n4:all.js\"></script>';


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
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"WorldMap.svg",'0px','0px']
         },
         {
            id:'Text2',
            type:'text',
            rect:['31px','36px','349px','82px','auto','auto'],
            text:"South Africa",
            align:"left",
            font:['allura, cursive',68,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['376px','34px','444px','314px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0.69)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
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
            rect:['-24px','215px','2267px','334px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"foreground.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_bkgd}": [
            ["style", "top", '62px'],
            ["subproperty", "filter.blur", '6px'],
            ["style", "left", '-20px']
         ],
         "${_Text2}": [
            ["style", "top", '40px'],
            ["style", "width", '349px'],
            ["style", "height", '82px'],
            ["style", "font-family", 'allura, cursive'],
            ["style", "left", '350px'],
            ["style", "font-size", '68px']
         ],
         "${_Impala}": [
            ["style", "top", '102px'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '700px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,207,0,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,194,0,1.00)'],
            ["style", "top", '62px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "left", '247px'],
            ["subproperty", "boxShadow.blur", '60px']
         ],
         "${_midground}": [
            ["style", "top", '250px'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '11px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["gradient", "background-image", [270,[['rgba(255,199,0,1.00)',0],['rgba(255,255,255,1.00)',44]]]],
            ["style", "width", '700px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,0.69)'],
            ["style", "top", '34px'],
            ["style", "height", '314px'],
            ["style", "left", '700px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '444px']
         ],
         "${_foreground}": [
            ["style", "top", '237px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-13px']
         ],
         "${_WorldMap}": [
            ["style", "top", '-28px'],
            ["style", "left", '786px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid33", tween: [ "style", "${_Ellipse}", "top", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Text2}", "top", '40px', { fromValue: '40px'}], position: 0, duration: 0 },
            { id: "eid64", tween: [ "style", "${_foreground}", "top", '237px', { fromValue: '237px'}], position: 4000, duration: 0 },
            { id: "eid5", tween: [ "style", "${_foreground}", "left", '-1529px', { fromValue: '-13px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "style", "${_foreground}", "left", '-2260px', { fromValue: '-1529px'}], position: 3000, duration: 1000 },
            { id: "eid27", tween: [ "style", "${_Impala}", "top", '102px', { fromValue: '102px'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "style", "${_Impala}", "left", '134px', { fromValue: '700px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_Impala}", "left", '-195px', { fromValue: '134px'}], position: 3000, duration: 1000 },
            { id: "eid48", tween: [ "style", "${_bkgd}", "left", '-148px', { fromValue: '-20px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid60", tween: [ "style", "${_bkgd}", "left", '-379px', { fromValue: '-148px'}], position: 3000, duration: 1000 },
            { id: "eid66", tween: [ "style", "${_Rectangle}", "left", '359px', { fromValue: '700px'}], position: 3000, duration: 1000 },
            { id: "eid47", tween: [ "style", "${_Text2}", "left", '36px', { fromValue: '350px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_Text2}", "left", '30px', { fromValue: '36px'}], position: 3000, duration: 1000 },
            { id: "eid52", tween: [ "subproperty", "${_foreground}", "filter.blur", '3px', { fromValue: '0px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_midground}", "left", '-214px', { fromValue: '11px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "style", "${_midground}", "left", '-445px', { fromValue: '-214px'}], position: 3000, duration: 1000 },
            { id: "eid58", tween: [ "style", "${_Ellipse}", "left", '16px', { fromValue: '247px'}], position: 0, duration: 4000 },
            { id: "eid56", tween: [ "subproperty", "${_Impala}", "filter.blur", '0px', { fromValue: '2px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_WorldMap}", "top", '-28px', { fromValue: '-28px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_WorldMap}", "left", '401px', { fromValue: '786px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "style", "${_WorldMap}", "left", '170px', { fromValue: '401px'}], position: 3000, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_midground}", "top", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "subproperty", "${_midground}", "filter.blur", '0px', { fromValue: '2px'}], position: 0, duration: 3000, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_bkgd}", "top", '62px', { fromValue: '62px'}], position: 0, duration: 0 }         ]
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
