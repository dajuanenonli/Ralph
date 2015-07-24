/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'video',
                type: 'video',
                tag: 'video',
                rect: ['0px', '0px','300px','168px','auto', 'auto'],
                source: ['media/video.mp4','media/video.webm'],
                preload: 'metadata',
                poster: 'images/poster.png'
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['150px', '169px','150px','82px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(87,87,87,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'DownloadIcon',
                    type: 'image',
                    rect: ['45px', '11px','60px','60px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon_download.png",'0px','0px']
                }]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['0px', '169px','150px','82px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(63,63,63,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'PlayIcon',
                    type: 'image',
                    rect: ['45px', '11px','60px','60px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"icon_play.png",'0px','0px']
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(63,63,63,1.00)'],
                ["style", "cursor", 'pointer']
            ],
            "${_DownloadIcon}": [
                ["style", "left", '45px'],
                ["style", "top", '11px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(170,170,170,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '250px'],
                ["style", "width", '300px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(87,87,87,1.00)'],
                ["style", "top", '169px'],
                ["style", "height", '82px'],
                ["style", "left", '150px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '150px']
            ],
            "${_PlayIcon}": [
                ["style", "left", '45px'],
                ["style", "top", '11px']
            ],
            "${_video}": [
                ["style", "top", '0px'],
                ["style", "height", '168px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_video}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-BANNER3");
