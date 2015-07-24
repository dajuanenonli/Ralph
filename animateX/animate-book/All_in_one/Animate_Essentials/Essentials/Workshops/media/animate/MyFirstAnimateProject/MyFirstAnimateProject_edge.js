/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'image',
                            rect: ['0', '0', '600px', '413px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background.png",'0px','0px']
                        },
                        {
                            id: 'ATable',
                            type: 'image',
                            rect: ['150px', '200px', '300px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ATable.png",'0px','0px']
                        },
                        {
                            id: 'Hotspot',
                            type: 'image',
                            rect: ['224px', '87px', '152px', '120px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Hotspot.png",'0px','0px']
                        },
                        {
                            id: 'Lady',
                            type: 'image',
                            rect: ['-151px', '87px', '140px', '253px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lady.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100%', '100%'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Lady}",
                            '-151px',
                            '371px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("MyFirstAnimateProject_edgeActions.js");
})("EDGE-242253625");
