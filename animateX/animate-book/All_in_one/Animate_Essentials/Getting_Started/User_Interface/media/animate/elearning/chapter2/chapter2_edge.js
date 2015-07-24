/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'chapter1_quiz_bg',
                type: 'image',
                rect: ['-377px', '-335px','1868px','1340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"chapter1_quiz_bg.jpg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'videoContainer',
                type: 'rect',
                rect: ['111px', '115px','440px','440px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'quiz',
                type: 'rect',
                rect: ['514', '128','auto','auto','auto', 'auto']
            },
            {
                id: 'playButton',
                type: 'rect',
                rect: ['495px', '59px','56px','56px','auto', 'auto'],
                fill: ["rgba(147,28,28,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'quiz',
                symbolName: 'quiz',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_playButton}": [
                ["color", "background-color", 'rgba(147,28,28,1.00)'],
                ["style", "height", '56px'],
                ["style", "top", '59px'],
                ["style", "left", '495px'],
                ["style", "width", '56px']
            ],
            "${_chapter1_quiz_bg}": [
                ["style", "top", '-335px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-377px'],
                ["style", "height", '1340px']
            ],
            "${_quiz}": [
                ["style", "top", '110px'],
                ["transform", "scaleX", '0.97778'],
                ["transform", "scaleY", '0.97778'],
                ["style", "left", '557px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_videoContainer}": [
                ["style", "top", '115px'],
                ["style", "height", '440px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '111px'],
                ["style", "width", '440px']
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
                { id: "eid43", tween: [ "style", "${_quiz}", "top", '110px', { fromValue: '110px'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "transform", "${_quiz}", "scaleX", '0.97778', { fromValue: '0.97778'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_quiz}", "left", '557px', { fromValue: '557px'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "transform", "${_quiz}", "scaleY", '0.97778', { fromValue: '0.97778'}], position: 0, duration: 0 }            ]
        }
    }
},
"quiz": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '450px', '450px', 'auto', 'auto'],
                    id: 'base',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['135px', '334px', '152px', '47px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'next',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(60,60,60,1.00)']
                },
                {
                    rect: ['52px', '41px', '360px', '150px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    id: 'Text2',
                    text: 'SADh jkhasd ajklhdjk adhjkas dhajk hdajk dashdjk ahskdjhakj dsdhka asdh jaklsdhsalkjhdk jhas',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_next}": [
                ["color", "background-color", 'rgba(60,60,60,1.00)'],
                ["style", "opacity", '1'],
                ["style", "display", 'none']
            ],
            "${_base}": [
                ["color", "background-color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '450px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '450px']
            ],
            "${symbolSelector}": [
                ["style", "height", '450px'],
                ["style", "width", '450px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "empty": 0,
                "q1": 1000,
                "q2": 2000
            },
            timeline: [
                { id: "eid34", tween: [ "color", "${_base}", "background-color", 'rgba(119,119,119,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(119,119,119,1.00)'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "color", "${_base}", "background-color", 'rgba(249,236,147,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(119,119,119,1.00)'}], position: 1000, duration: 0 },
                { id: "eid33", tween: [ "color", "${_base}", "background-color", 'rgba(255,11,119,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(249,236,147,1.00)'}], position: 2000, duration: 0 },
                { id: "eid37", tween: [ "style", "${_base}", "height", '450px', { fromValue: '450px'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_base}", "width", '450px', { fromValue: '450px'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_next}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-277060419");
