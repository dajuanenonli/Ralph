/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
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
                            text: "INTERACTIVE SVG",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'selectedBase',
                            type: 'rect',
                            rect: ['14', '447', '470px', '44px', 'auto', 'auto'],
                            fill: ["rgba(50,50,50,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'selectedPartTxt',
                                type: 'text',
                                rect: ['-3', '11', '472', '33', 'auto', 'auto'],
                                text: "&lt;SELECTION&gt;",
                                align: "center",
                                font: ['abel, sans-serif', [20, ""], "rgba(255,255,255,1)", "normal", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'RealShirt2',
                            type: 'image',
                            rect: ['32', '50', '429', '389', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"RealShirt.jpg",'0px','0px']
                        },
                        {
                            id: 'Preview',
                            type: 'image',
                            rect: ['32', '50', '427', '388', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Preview.svg",'0px','0px']
                        },
                        {
                            id: 'base',
                            type: 'rect',
                            rect: ['490', '336', '295', '155', 'auto', 'auto'],
                            fill: ["rgba(50,50,50,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'EllipseCopy7',
                                type: 'ellipse',
                                rect: ['12', '12', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(148,198,0,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'EllipseCopy6',
                                type: 'ellipse',
                                rect: ['82', '12', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(8,173,188,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'EllipseCopy5',
                                type: 'ellipse',
                                rect: ['151', '12', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(45,20,75,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'EllipseCopy4',
                                type: 'ellipse',
                                rect: ['221', '12', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(216,0,106,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'EllipseCopy3',
                                type: 'ellipse',
                                rect: ['12', '83', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,135,0,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'EllipseCopy2',
                                type: 'ellipse',
                                rect: ['82', '83', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,178,107,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'EllipseCopy',
                                type: 'ellipse',
                                rect: ['151', '83', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            },
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['221', '83', '52', '52', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [4,"rgb(255, 255, 255)","solid"]
                            }]
                        },
                        {
                            id: 'baseCopy',
                            type: 'rect',
                            rect: ['490', '50', '295', '173', 'auto', 'auto'],
                            fill: ["rgba(50,50,50,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'speechBubble',
                            type: 'rect',
                            rect: ['490', '231', '295', '98px', 'auto', 'auto'],
                            fill: ["rgba(74,74,74,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['-14', '20', '31px', '34px', 'auto', 'auto'],
                                fill: ["rgba(74,74,74,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['18', '25', '266', '60', 'auto', 'auto'],
                                text: "Select a part and change the color to match your style!",
                                font: ['abel, sans-serif', [20, "px"], "rgba(255,255,255,1)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['502', '59', '278', '155', 'auto', 'auto'],
                            text: "CREATE YOUR OWN GEEK SHIRT.",
                            align: "left",
                            font: ['abel, sans-serif', [53, "px"], "rgba(255,255,255,1)", "bold", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "53px", ""]
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
