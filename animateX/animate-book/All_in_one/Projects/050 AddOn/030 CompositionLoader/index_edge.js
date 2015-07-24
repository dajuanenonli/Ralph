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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0', '0px', '800px', '40', 'auto', 'auto'],
                            fill: ["rgba(46,46,49,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['auto', '0px', '40', '40', '760', 'auto'],
                            fill: ["rgba(0,148,204,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['51', '12', '738', '21px', 'auto', 'auto'],
                            text: "EXTERNAL COMPOSITION LOADER",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'btn01',
                            type: 'rect',
                            rect: ['146', '75', '173', '37', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["100px 100px", "0px 0px", "100px 100px", "100px 100px"],
                            fill: ["rgba(100,100,100,1)"],
                            stroke: [2,"rgb(211, 211, 211)","solid"],
                            boxShadow: ["", 10, 10, 30, 0, "rgba(0,0,0,0.339844)"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['27', '11', 'auto', 'auto', 'auto', 'auto'],
                                text: "First Compositon ",
                                font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1)", "bold", "none", "", "break-word", "nowrap"]
                            }]
                        },
                        {
                            id: 'btn02',
                            type: 'rect',
                            rect: ['477', '75', '173', '37', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["100px 100px", "0px 0px", "100px 100px", "100px 100px"],
                            fill: ["rgba(100,100,100,1)"],
                            stroke: [2,"rgb(211, 211, 211)","solid"],
                            boxShadow: ["", 10, 10, 30, 0, "rgba(0,0,0,0.339844)"],
                            c: [
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['17', '11', 'auto', 'auto', 'auto', 'auto'],
                                text: "Second Compositon ",
                                font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1)", "bold", "none", "", "break-word", "nowrap"]
                            }]
                        },
                        {
                            id: 'content',
                            type: 'rect',
                            rect: ['125px', '166px', '550px', '275px', 'auto', 'auto'],
                            fill: ["rgba(242,242,242,1.00)"],
                            stroke: [1,"rgba(0,0,0,1)","dotted"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '500', 'auto', 'auto'],
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
})("EDGE-193409812");
