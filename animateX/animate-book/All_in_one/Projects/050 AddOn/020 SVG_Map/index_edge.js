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
            js+"jquery-1.7.1.min.js",
            js+"EdgeCommons.js"
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
                            id: 'Map',
                            type: 'image',
                            rect: ['0', '0', '800px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"map.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['217', '20', 'auto', 'auto', 'auto', 'auto'],
                            text: "Try clicking on California or Texas!",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'label',
                            type: 'text',
                            rect: ['51', '519', '309px', '63px', 'auto', 'auto'],
                            text: "label",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                            textShadow: ["rgba(0,0,0,0.65)", 3, 3, 3]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['468', '573', '320', '17', 'auto', 'auto'],
                            text: "Run this sample from Animate or from a webserver (http://)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(166,166,166,1.00)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '600', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-808185290");
