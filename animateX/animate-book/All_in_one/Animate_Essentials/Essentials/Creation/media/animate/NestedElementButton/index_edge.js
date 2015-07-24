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
                            id: 'Button_Base',
                            type: 'rect',
                            rect: ['161px', '171px', '277px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(132,132,132,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["inset", 1, 1, 7, 2, "rgba(189,189,189,0.65)"],
                            c: [
                            {
                                id: 'Button_Label',
                                type: 'text',
                                rect: ['27px', '15px', '233px', '27px', 'auto', 'auto'],
                                text: "BUTTON",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '600px', '400px'],
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
})("EDGE-28178721");
