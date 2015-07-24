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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Background',
            type:'image',
            rect:['0px','0px','940px','360px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_0006_bg.png",'0px','0px']
         },
         {
            id:'Spotlight',
            type:'rect',
            rect:['-353','-78','auto','auto','auto','auto']
         },
         {
            id:'img_0005_snipes',
            type:'image',
            rect:['560px','0px','380px','129px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_0005_logo.png",'0px','0px']
         },
         {
            id:'m2',
            type:'rect',
            rect:['682','51px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'f2',
            type:'rect',
            rect:['462','50px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'m1',
            type:'rect',
            rect:['284','50','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'f1',
            type:'rect',
            rect:['72','50','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'overlay',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Floor',
            type:'image',
            rect:['0px','289px','940px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"img_0000_footer.png",'0px','0px']
         },
         {
            id:'Loop',
            type:'image',
            rect:['10px','324px','24px','24px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"Loop.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'overlay',
            symbolName:'overlay'
         },
         {
            id:'m2',
            symbolName:'m2'
         },
         {
            id:'m1',
            symbolName:'m1'
         },
         {
            id:'Spotlight',
            symbolName:'spotlight'
         },
         {
            id:'f1',
            symbolName:'f1'
         },
         {
            id:'f2',
            symbolName:'f2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_f2}": [
            ["style", "top", '50px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '988px']
         ],
         "${_img_0005_snipes}": [
            ["style", "left", '560px'],
            ["style", "top", '-129px']
         ],
         "${_m1}": [
            ["style", "cursor", 'pointer'],
            ["style", "left", '-261px']
         ],
         "${_overlay}": [
            ["style", "display", 'none'],
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_m2}": [
            ["style", "top", '51px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1015px']
         ],
         "${_f1}": [
            ["style", "cursor", 'pointer'],
            ["style", "left", '-252px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '940px'],
            ["style", "height", '360px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Background}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '360px']
         ],
         "${_Floor}": [
            ["style", "left", '0px'],
            ["style", "top", '289px']
         ],
         "${_Loop}": [
            ["style", "top", '324px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4370,
         autoPlay: true,
         labels: {
            "overview": 4037,
            "overlay": 4370
         },
         timeline: [
            { id: "eid174", tween: [ "style", "${_m1}", "left", '284px', { fromValue: '-261px'}], position: 1716, duration: 1577, easing: "easeOutExpo" },
            { id: "eid172", tween: [ "style", "${_f1}", "left", '72px', { fromValue: '-252px'}], position: 1559, duration: 1093, easing: "easeOutExpo" },
            { id: "eid238", tween: [ "style", "${_Loop}", "opacity", '1', { fromValue: '0'}], position: 3293, duration: 744 },
            { id: "eid180", tween: [ "style", "${_img_0005_snipes}", "top", '0px', { fromValue: '-129px'}], position: 3034, duration: 635, easing: "easeOutBounce" },
            { id: "eid178", tween: [ "style", "${_m2}", "left", '682px', { fromValue: '1015px'}], position: 1716, duration: 1093, easing: "easeOutExpo" },
            { id: "eid176", tween: [ "style", "${_f2}", "left", '462px', { fromValue: '988px'}], position: 2132, duration: 1438, easing: "easeOutExpo" },
            { id: "eid51", tween: [ "style", "${_overlay}", "display", 'block', { fromValue: 'none'}], position: 4370, duration: 0 }         ]
      }
   }
},
"m2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'glow',
      rect: ['-8px','-108px','193px','463px','auto','auto'],
      transform: [[0,0],['20']],
      fill: ['rgba(0,0,0,0)','images/glow.png','0px','0px']
   },
   {
      id: 'img_0001_m2',
      type: 'image',
      rect: ['0px','0px','191px','288px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/img_0001_m2.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-7px','-56px','170px','399px','auto','auto'],
      id: 'hover_0007_m2_2',
      fill: ['rgba(0,0,0,0)','images/hover_0007_m2_2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hover_0007_m2_2}": [
            ["style", "top", '-56px'],
            ["style", "display", 'none'],
            ["style", "height", '399px'],
            ["style", "opacity", '0'],
            ["style", "left", '-7px'],
            ["style", "width", '170px']
         ],
         "${_glow}": [
            ["style", "top", '-108px'],
            ["style", "opacity", '0'],
            ["style", "left", '-8px'],
            ["transform", "rotateZ", '20deg']
         ],
         "${_img_0001_m2}": [
            ["style", "top", '0px'],
            ["style", "height", '288px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '191px']
         ],
         "${symbolSelector}": [
            ["style", "height", '288px'],
            ["style", "width", '164px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 733.33333333333,
         autoPlay: false,
         labels: {
            "over": 0,
            "over_end": 666
         },
         timeline: [
            { id: "eid194", tween: [ "style", "${_glow}", "opacity", '0.4912025', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutExpo" },
            { id: "eid113", tween: [ "style", "${_hover_0007_m2_2}", "display", 'block', { fromValue: 'none'}], position: 467, duration: 0 },
            { id: "eid116", tween: [ "style", "${_img_0001_m2}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 133 },
            { id: "eid114", tween: [ "style", "${_hover_0007_m2_2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 133 }         ]
      }
   }
},
"overlay": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','940px','340px','auto','auto'],
      id: 'clickarea',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.67)']
   },
   {
      id: 'content',
      type: 'rect',
      rect: ['74','53','auto','auto','auto','auto']
   },
   {
      rect: ['653px','-34px','254px','596px','auto','auto'],
      id: 'hover_0007_m2_22',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/hover_0006_m2_1.png','0px','0px']
   },
   {
      rect: ['403px','-12px','284px','572px','auto','auto'],
      id: 'hover_0002_f2_12',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/hover_0002_f2_1.png','0px','0px']
   },
   {
      rect: ['41px','-19px','244px','534px','auto','auto'],
      id: 'hover_0000_f1_1',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/hover_0000_f1_1.png','0px','0px']
   },
   {
      rect: ['212px','-9px','290px','506px','auto','auto'],
      id: 'hover_0004_m1_1',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/hover_0004_m1_1.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'content',
      symbolName: 'content'
   }   ]
   },
   states: {
      "Base State": {
         "${_hover_0007_m2_22}": [
            ["style", "top", '-34px'],
            ["style", "display", 'none'],
            ["style", "height", '596px'],
            ["style", "opacity", '0'],
            ["style", "left", '653px'],
            ["style", "width", '254px']
         ],
         "${_clickarea}": [
            ["color", "background-color", 'rgba(0,0,0,0.51)'],
            ["style", "top", '0px'],
            ["style", "height", '340px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '940px']
         ],
         "${symbolSelector}": [
            ["style", "height", '340px'],
            ["style", "width", '940px']
         ],
         "${_hover_0000_f1_1}": [
            ["style", "top", '-19px'],
            ["style", "display", 'none'],
            ["style", "height", '534px'],
            ["style", "opacity", '0'],
            ["style", "left", '41px'],
            ["style", "width", '244px']
         ],
         "${_hover_0002_f2_12}": [
            ["style", "top", '-12px'],
            ["style", "display", 'none'],
            ["style", "height", '572px'],
            ["style", "opacity", '0'],
            ["style", "left", '403px'],
            ["style", "width", '284px']
         ],
         "${_hover_0004_m1_1}": [
            ["style", "top", '-9px'],
            ["style", "display", 'none'],
            ["style", "height", '506px'],
            ["style", "opacity", '0'],
            ["style", "left", '212px'],
            ["style", "width", '290px']
         ],
         "${_content}": [
            ["style", "left", '298px'],
            ["style", "top", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2933,
         autoPlay: false,
         labels: {
            "inactive": 0,
            "m2": 533,
            "f2": 1200,
            "f1": 1933,
            "m1": 2600
         },
         timeline: [
            { id: "eid44", tween: [ "style", "${_hover_0002_f2_12}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 267 },
            { id: "eid133", tween: [ "style", "${_hover_0000_f1_1}", "display", 'block', { fromValue: 'none'}], position: 1933, duration: 0 },
            { id: "eid134", tween: [ "style", "${_hover_0000_f1_1}", "display", 'none', { fromValue: 'block'}], position: 2266, duration: 0 },
            { id: "eid136", tween: [ "style", "${_hover_0004_m1_1}", "display", 'block', { fromValue: 'none'}], position: 2600, duration: 0 },
            { id: "eid137", tween: [ "style", "${_hover_0004_m1_1}", "display", 'none', { fromValue: 'block'}], position: 2933, duration: 0 },
            { id: "eid84", tween: [ "style", "${_content}", "left", '298px', { fromValue: '298px'}], position: 792, duration: 0, easing: "easeOutBack" },
            { id: "eid86", tween: [ "style", "${_content}", "left", '102px', { fromValue: '298px'}], position: 1459, duration: 0, easing: "easeOutBack" },
            { id: "eid139", tween: [ "style", "${_content}", "left", '224px', { fromValue: '102px'}], position: 2199, duration: 0, easing: "easeOutBack" },
            { id: "eid142", tween: [ "style", "${_content}", "left", '428px', { fromValue: '234px'}], position: 2859, duration: 0, easing: "easeOutBack" },
            { id: "eid135", tween: [ "style", "${_hover_0000_f1_1}", "opacity", '1', { fromValue: '0'}], position: 1933, duration: 266 },
            { id: "eid29", tween: [ "style", "${_hover_0007_m2_22}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 267 },
            { id: "eid138", tween: [ "style", "${_hover_0004_m1_1}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 267 },
            { id: "eid43", tween: [ "style", "${_hover_0002_f2_12}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 },
            { id: "eid61", tween: [ "style", "${_hover_0002_f2_12}", "display", 'none', { fromValue: 'block'}], position: 1533, duration: 0 },
            { id: "eid62", tween: [ "style", "${_clickarea}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 267 },
            { id: "eid63", tween: [ "style", "${_clickarea}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 267 },
            { id: "eid141", tween: [ "style", "${_clickarea}", "opacity", '1', { fromValue: '0'}], position: 1933, duration: 266 },
            { id: "eid144", tween: [ "style", "${_clickarea}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 267 },
            { id: "eid27", tween: [ "style", "${_hover_0007_m2_22}", "display", 'block', { fromValue: 'none'}], position: 533, duration: 0 },
            { id: "eid54", tween: [ "style", "${_hover_0007_m2_22}", "display", 'none', { fromValue: 'block'}], position: 867, duration: 0 },
            { id: "eid64", tween: [ "color", "${_clickarea}", "background-color", 'rgba(0,0,0,0.51)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.51)'}], position: 1467, duration: 0 },
            { id: "eid140", tween: [ "color", "${_clickarea}", "background-color", 'rgba(0,0,0,0.51)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.51)'}], position: 2199, duration: 0 },
            { id: "eid143", tween: [ "color", "${_clickarea}", "background-color", 'rgba(0,0,0,0.51)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.51)'}], position: 2867, duration: 0 }         ]
      }
   }
},
"f2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'glow2',
      rect: ['11px','63px','193px','463px','auto','auto'],
      transform: [[0,0],['10']],
      fill: ['rgba(0,0,0,0)','images/glow.png','0px','0px']
   },
   {
      id: 'img_0002_f2',
      type: 'image',
      rect: ['0px','0px','191px','289px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/img_0002_f2.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['5px','-17px','174px','345px','auto','auto'],
      id: 'hover_0003_f2_2',
      fill: ['rgba(0,0,0,0)','images/hover_0003_f2_2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_glow2}": [
            ["style", "top", '-81px'],
            ["style", "opacity", '0'],
            ["style", "left", '11px'],
            ["transform", "rotateZ", '10deg']
         ],
         "${_hover_0003_f2_2}": [
            ["style", "top", '-36px'],
            ["style", "display", 'none'],
            ["style", "height", '345px'],
            ["style", "opacity", '0'],
            ["style", "left", '5px'],
            ["style", "width", '174px']
         ],
         "${_img_0002_f2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '289px'],
            ["style", "width", '191px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 733.33333333333,
         autoPlay: false,
         labels: {
            "over": 0,
            "over_end": 666
         },
         timeline: [
            { id: "eid42", tween: [ "style", "${_img_0002_f2}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 133 },
            { id: "eid41", tween: [ "style", "${_hover_0003_f2_2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 133 },
            { id: "eid40", tween: [ "style", "${_hover_0003_f2_2}", "display", 'block', { fromValue: 'none'}], position: 467, duration: 0 },
            { id: "eid202", tween: [ "style", "${_glow2}", "opacity", '0.4912025', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutExpo" }         ]
      }
   }
},
"content": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','407px','230px','auto','auto'],
      boxShadow: ['',5,5,10,0,'rgba(0,0,0,0.32)'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.89)']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['32','34px','334','50','auto','auto'],
      c: [
      {
         font: ['Arial, Helvetica, sans-serif',24,'rgba(227,0,0,1.00)','700','none',''],
         id: 'Text',
         text: 'My Product',
         type: 'text',
         rect: ['0px','0px','334px','50px','auto','auto']
      },
      {
         font: ['Arial, Helvetica, sans-serif',12,'rgba(59,59,59,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text2',
         text: 'Description',
         align: 'left',
         rect: ['0px','43px','316px','89px','auto','auto']
      },
      {
         rect: ['203px','137px','117px','39px','auto','auto'],
         boxShadow: ['',0,0,30,0,'rgba(0,0,0,0.45)'],
         id: 'Rectangle2',
         stroke: [3,'rgba(255,255,255,0.48)','none'],
         type: 'rect',
         fill: ['rgba(63,63,63,1.00)'],
         c: [
         {
            font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','700','none','normal'],
            type: 'text',
            align: 'center',
            id: 'Text3',
            text: 'Buy now',
            textShadow: ['rgba(0,0,0,1.00)',-1,-1,0],
            rect: ['17px','12px','86px','22px','auto','auto']
         }]
      }]
   },
   {
      rect: ['442px','-26px','71px','100px','auto','auto'],
      id: 'Group2',
      display: 'none',
      type: 'group',
      c: [
      {
         id: 'closeButton',
         type: 'image',
         rect: ['4px','13px','30px','30px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/closeButton.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_closeButton}": [
            ["style", "left", '4px'],
            ["style", "top", '13px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(63,63,63,1.00)'],
            ["subproperty", "boxShadow.inset", ''],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)'],
            ["style", "border-style", 'none'],
            ["style", "left", '203px'],
            ["style", "width", '117px'],
            ["style", "top", '137px'],
            ["subproperty", "boxShadow.blur", '30px'],
            ["color", "border-color", 'rgba(255,255,255,0.48)'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["style", "height", '39px'],
            ["subproperty", "boxShadow.offsetV", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["style", "border-width", '3px']
         ],
         "${_Group2}": [
            ["style", "top", '-24px'],
            ["style", "left", '-71px'],
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["subproperty", "textShadow.blur", '0px'],
            ["subproperty", "textShadow.offsetH", '-1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '17px'],
            ["style", "font-size", '14px'],
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "text-decoration", 'none'],
            ["subproperty", "textShadow.offsetV", '-1px']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(59,59,59,1.00)'],
            ["style", "top", '43px'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px']
         ],
         "${_Group}": [
            ["style", "left", '167px'],
            ["style", "opacity", '0']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(227,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '400px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.89)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '393px'],
            ["style", "width", '7px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.32)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2533,
         autoPlay: false,
         labels: {
            "start": 0,
            "fadeRight": 267,
            "fadeLeft": 2000
         },
         timeline: [
            { id: "eid233", tween: [ "style", "${_Group2}", "display", 'block', { fromValue: 'none'}], position: 800, duration: 0, easing: "easeOutExpo" },
            { id: "eid236", tween: [ "style", "${_Group2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutExpo" },
            { id: "eid232", tween: [ "style", "${_Group2}", "display", 'block', { fromValue: 'none'}], position: 2533, duration: 0, easing: "easeOutExpo" },
            { id: "eid78", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 267, duration: 467, easing: "easeOutBack" },
            { id: "eid106", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 467, easing: "easeOutBack" },
            { id: "eid82", tween: [ "style", "${_Group}", "left", '-18px', { fromValue: '167px'}], position: 533, duration: 267, easing: "easeOutBack" },
            { id: "eid104", tween: [ "style", "${_Group}", "left", '100px', { fromValue: '-18px'}], position: 2266, duration: 267, easing: "easeOutBack" },
            { id: "eid162", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '0'}], position: 267, duration: 0, easing: "easeOutBack" },
            { id: "eid158", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 267, easing: "easeOutBack" },
            { id: "eid155", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 0, easing: "easeOutBack" },
            { id: "eid165", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutBack" },
            { id: "eid105", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 2266, duration: 267, easing: "easeOutBack" },
            { id: "eid234", tween: [ "style", "${_Group2}", "left", '-71px', { fromValue: '-71px'}], position: 800, duration: 0, easing: "easeOutExpo" },
            { id: "eid230", tween: [ "style", "${_Group2}", "left", '442px', { fromValue: '-71px'}], position: 2533, duration: 0, easing: "easeOutExpo" },
            { id: "eid235", tween: [ "style", "${_Group2}", "top", '-24px', { fromValue: '-24px'}], position: 800, duration: 0, easing: "easeOutExpo" },
            { id: "eid231", tween: [ "style", "${_Group2}", "top", '-26px', { fromValue: '-24px'}], position: 2533, duration: 0, easing: "easeOutExpo" },
            { id: "eid103", tween: [ "style", "${_Rectangle}", "width", '456px', { fromValue: '7px'}], position: 267, duration: 466, easing: "easeOutBack" },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "width", '462px', { fromValue: '10px'}], position: 2000, duration: 466, easing: "easeOutBack" },
            { id: "eid102", tween: [ "style", "${_Rectangle}", "left", '-56px', { fromValue: '393px'}], position: 267, duration: 466, easing: "easeOutBack" },
            { id: "eid170", tween: [ "style", "${_Rectangle}", "left", '-1px', { fromValue: '-56px'}], position: 2000, duration: 0, easing: "easeOutBack" }         ]
      }
   }
},
"m1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'glow3',
      rect: ['-10px','-78px','193px','463px','auto','auto'],
      transform: [[0,0],['-10']],
      fill: ['rgba(0,0,0,0)','images/glow.png','0px','0px']
   },
   {
      id: 'img_0003_m1',
      type: 'image',
      rect: ['0px','0px','191px','289px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/img_0003_m1.png','0px','0px']
   },
   {
      transform: [[0,0],['-2']],
      type: 'image',
      id: 'hover_0005_m1_2',
      display: 'none',
      rect: ['-10px','-33px','174px','355px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hover_0005_m1_2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_glow3}": [
            ["style", "top", '-78px'],
            ["style", "opacity", '0'],
            ["style", "left", '-10px'],
            ["transform", "rotateZ", '-10deg']
         ],
         "${_hover_0005_m1_2}": [
            ["style", "top", '-36px'],
            ["style", "display", 'none'],
            ["transform", "rotateZ", '-2deg'],
            ["style", "height", '355px'],
            ["style", "opacity", '0'],
            ["style", "left", '-10px'],
            ["style", "width", '174px']
         ],
         "${_img_0003_m1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '289px'],
            ["style", "width", '191px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 733.33333333333,
         autoPlay: false,
         labels: {
            "over": 0,
            "over_end": 666
         },
         timeline: [
            { id: "eid205", tween: [ "style", "${_img_0003_m1}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 133 },
            { id: "eid206", tween: [ "style", "${_glow3}", "opacity", '0.4912025', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutExpo" },
            { id: "eid204", tween: [ "style", "${_hover_0005_m1_2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 133 },
            { id: "eid203", tween: [ "style", "${_hover_0005_m1_2}", "display", 'block', { fromValue: 'none'}], position: 467, duration: 0 }         ]
      }
   }
},
"f1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'glow4',
      rect: ['1px','-100px','193px','463px','auto','auto'],
      transform: [[0,0],['-20']],
      fill: ['rgba(0,0,0,0)','images/glow.png','0px','0px']
   },
   {
      id: 'img_0004_f1',
      type: 'image',
      rect: ['0px','0px','191px','295px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/img_0004_f1.png','0px','0px']
   },
   {
      transform: [[0,0],['3']],
      type: 'image',
      id: 'hover_0001_f1_2',
      display: 'none',
      rect: ['14px','-36px','165px','362px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hover_0001_f1_2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '295px'],
            ["style", "width", '191px']
         ],
         "${_glow4}": [
            ["style", "top", '-100px'],
            ["style", "opacity", '0'],
            ["style", "left", '1px'],
            ["transform", "rotateZ", '-20deg']
         ],
         "${_img_0004_f1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_hover_0001_f1_2}": [
            ["style", "top", '-36px'],
            ["style", "display", 'none'],
            ["transform", "rotateZ", '3deg'],
            ["style", "height", '362px'],
            ["style", "opacity", '0'],
            ["style", "left", '14px'],
            ["style", "width", '165px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 733.33333333333,
         autoPlay: false,
         labels: {
            "over": 0,
            "over_end": 666
         },
         timeline: [
            { id: "eid208", tween: [ "style", "${_hover_0001_f1_2}", "opacity", '1', { fromValue: '0'}], position: 467, duration: 133 },
            { id: "eid209", tween: [ "style", "${_img_0004_f1}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 133 },
            { id: "eid207", tween: [ "style", "${_hover_0001_f1_2}", "display", 'block', { fromValue: 'none'}], position: 467, duration: 0 },
            { id: "eid210", tween: [ "style", "${_glow4}", "opacity", '0.4912025', { fromValue: '0'}], position: 0, duration: 400, easing: "easeOutExpo" }         ]
      }
   }
},
"spotlight": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['143px','9px','431px','463px','auto','auto'],
      id: 'glow5',
      opacity: 0.15,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/glow.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_glow5}": [
            ["style", "top", '9px'],
            ["transform", "rotateZ", '22deg'],
            ["style", "opacity", '0.15'],
            ["style", "left", '-741px'],
            ["style", "width", '431px']
         ],
         "${symbolSelector}": [
            ["style", "height", '502px'],
            ["style", "width", '352px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid229", tween: [ "style", "${_glow5}", "left", '-324px', { fromValue: '-741px'}], position: 0, duration: 1503, easing: "easeOutExpo" },
            { id: "eid226", tween: [ "style", "${_glow5}", "left", '1388px', { fromValue: '-324px'}], position: 1503, duration: 3329, easing: "easeOutExpo" },
            { id: "eid227", tween: [ "transform", "${_glow5}", "rotateZ", '-22deg', { fromValue: '22deg'}], position: 1503, duration: 3329, easing: "easeOutExpo" }         ]
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
})(jQuery, AdobeEdge, "EDGE-11294651");
