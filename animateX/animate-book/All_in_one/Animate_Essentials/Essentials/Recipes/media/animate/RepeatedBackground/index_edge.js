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
            "https://code.jquery.com/jquery-2.1.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'box',
                            type: 'rect',
                            rect: ['37px', '9.3%', '91.6%', '68.2%', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'button',
                            type: 'rect',
                            rect: ['97', '507px', '76.3%', '43px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(69,69,69,1.00)"],
                            stroke: [1,"rgba(0,0,0,0.70)","solid"],
                            boxShadow: ["inset", 3, 3, 2, 0, "rgba(105,105,105,0.58)"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['auto', 'auto', '266', '26px', '29%', '10px'],
                                text: "Load Background Image",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(234,234,234,1.00)", "normal", "none", "", "break-word", ""]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(81,81,81,1.00)',0],['rgba(146,146,146,1.00)',100]]]]
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
})("EDGE-2105475829");
