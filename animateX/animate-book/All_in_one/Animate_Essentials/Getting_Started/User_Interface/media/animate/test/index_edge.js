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
    version: "4.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "4.0.0.1724",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['1px', '1px','550px','400px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)",[76,77,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(81,44,139,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Ellipse}": [
                ["style", "height", '1px'],
                ["gradient", "background-image", [76,77,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(81,44,139,1.00)',100]]]],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_Ellipse}", "top", '1px', { fromValue: '0px'}], position: 0, duration: 2000 },
                { id: "eid2", tween: [ "style", "${_Ellipse}", "height", '400px', { fromValue: '1px'}], position: 0, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-565355560");
