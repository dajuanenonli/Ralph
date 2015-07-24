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
                            id: 'btnAction',
                            type: 'rect',
                            rect: ['30px', '427px', '287px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(255,255,255,1.00)","none"],
                            font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            boxShadow: ["", 0, 0, 12, 0, "rgba(0,0,0,0.16)"],
                            c: [
                            {
                                id: 'label',
                                type: 'text',
                                rect: ['40px', '17px', '79.9%', '29px', 'auto', 'auto'],
                                text: "Define global CSS rules",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", ""]
                            },
                            {
                                id: 'marker',
                                type: 'rect',
                                rect: ['0px', '0px', '20px', '60px', 'auto', 'auto'],
                                borderRadius: ["6px", "0px", "0px", "6px 6px"],
                                fill: ["rgba(222,11,43,1.00)",[244,[['rgba(255,47,152,1.00)',0],['rgba(222,11,43,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'description',
                            type: 'text',
                            rect: ['30px', '70px', '632px', '16px', 'auto', 'auto'],
                            text: "Define global CSS rules instead of applying inline CSS locally",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'descriptionCopy',
                            type: 'text',
                            rect: ['336px', '437px', '267px', '20px', 'auto', 'auto'],
                            text: "FYI: All elements have CSS classes applied (thru Edge Animate UI)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['30px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Add CSS rules globally",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['47px', '147px', '160px', '161px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "custom-box"
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['229px', '147px', '239px', '161px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "custom-image"
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['53px', '324px', 'auto', 'auto', 'auto', 'auto'],
                            text: "class \"custom-box\"",
                            align: "center",
                            userClass: "label-blue",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['490px', '147px', '160px', '161px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "custom-box"
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['496px', '324px', '139px', '52px', 'auto', 'auto'],
                            text: "class \"custom-box\"",
                            align: "center",
                            userClass: "label-blue",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['267px', '324px', '304px', '72px', 'auto', 'auto'],
                            text: "class \"custom-image\"",
                            align: "center",
                            userClass: "label-blue",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(44,46,49,1.00)"],
                            font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("addCSS_Basic_edgeActions.js");
})("EDGE-145692202");
