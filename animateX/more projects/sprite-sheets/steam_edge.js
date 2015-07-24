/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'amatic-sc, sans-serif': '<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'table',
                            type: 'rect',
                            rect: ['187px', '259px', '434px', '50px', 'auto', 'auto'],
                            fill: ["rgba(235,138,47,1.00)"],
                            stroke: [8,"rgb(214, 167, 124)","none"],
                            transform: [[],[],['-33']]
                        },
                        {
                            id: 'chalkboard',
                            type: 'rect',
                            rect: ['16px', '15px', '335px', '217px', 'auto', 'auto'],
                            borderRadius: ["8px", "8px", "8px", "8px 8px"],
                            fill: ["rgba(35,31,32,1.00)"],
                            stroke: [8,"rgba(214,167,124,1.00)","solid"]
                        },
                        {
                            id: 'message',
                            type: 'text',
                            rect: ['38px', '36px', '300px', '113px', 'auto', 'auto'],
                            text: "Welcome to our Coffee Shop",
                            align: "center",
                            font: ['amatic-sc, sans-serif', [56, "px"], "rgba(214,167,124,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "56px", ""]
                        },
                        {
                            id: 'texture',
                            type: 'image',
                            rect: ['33px', '26px', '317px', '244px', 'auto', 'auto'],
                            clip: 'rect(0px 317px 125.509765625px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"texture.png",'0px','0px']
                        },
                        {
                            id: 'coffee',
                            type: 'image',
                            rect: ['429px', '225px', '99px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"coffee.svg",'0px','0px']
                        },
                        {
                            id: 'cup',
                            type: 'image',
                            rect: ['425px', '199px', '131px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cup.svg",'0px','0px']
                        },
                        {
                            id: 'cup_highlight',
                            type: 'image',
                            rect: ['437px', '201px', '91px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cup_highlight.png",'0px','0px']
                        },
                        {
                            id: 'rule',
                            type: 'rect',
                            rect: ['38px', '160px', '300px', '2px', 'auto', 'auto'],
                            fill: ["rgba(214,167,124,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['147px', '171px', '78px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(127,49,30,1.00)",[50,31,true,'farthest-corner',[['rgba(235,138,47,1.00)',0],['rgba(112,50,22,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("steam_edgeActions.js");
})("EDGE-15840723");
