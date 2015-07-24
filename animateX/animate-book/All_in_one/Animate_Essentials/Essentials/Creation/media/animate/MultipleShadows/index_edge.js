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
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'element_stack',
                            type: 'group',
                            rect: ['181px', '121px', '238', '157', 'auto', 'auto'],
                            c: [
                            {
                                id: 'base',
                                type: 'rect',
                                rect: ['0px', '0px', '238px', '157px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 3, 3, 7, 0, "rgba(0,0,0,0.65098)"]
                            },
                            {
                                id: 'glow',
                                type: 'rect',
                                rect: ['0px', '0px', '238px', '157px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["inset", 1, 1, 21, 3, "rgba(226,226,226,0.75)"]
                            },
                            {
                                id: 'inset_shadow',
                                type: 'rect',
                                rect: ['0px', '0px', '238px', '157px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["inset", -3, -3, 8, 0, "rgba(0,0,0,0.65098)"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '600px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(131,177,196,1.00)"]
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
})("EDGE-26658223");
