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
            "https://code.jquery.com/jquery-2.1.1.min.js",
            "http://cdn.edgecommons.org/an/1.4.0/js/min/EdgeCommons.js"
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
                            text: "PARALLAX",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'ani',
                            type: 'image',
                            rect: ['189', '190', '144px', '238px', 'auto', 'auto'],
                            clip: 'rect(0px 144px 210px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"ani.png",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['367', '171', '245px', '123px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(87,87,87,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['9', '10', '245px', '123px', 'auto', 'auto'],
                                opacity: '0.20000000298023224',
                                fill: ["rgba(78,78,78,1)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['-9', '68', '37', '37', 'auto', 'auto'],
                                fill: ["rgba(87,87,87,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['15', '19', '209', '89', 'auto', 'auto'],
                                text: "SCROLL DOWN AND YOU'LL SEE…",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(229,229,229,1)", "bold", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['857', '1049', '245px', '123px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(87,87,87,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'RectangleCopy6',
                                type: 'rect',
                                rect: ['9', '10', '245px', '123px', 'auto', 'auto'],
                                opacity: '0.20000000298023224',
                                fill: ["rgba(78,78,78,1)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle2Copy3',
                                type: 'rect',
                                rect: ['-9', '44', '37', '37', 'auto', 'auto'],
                                fill: ["rgba(87,87,87,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['15', '19', '209', '89', 'auto', 'auto'],
                                text: "TEST IT ON YOUR MOBILE DEVICE AS WELL!",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(229,229,229,1)", "bold", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['-315', '612', '245px', '123px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(87,87,87,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'RectangleCopy4',
                                type: 'rect',
                                rect: ['-10', '10', '245px', '123px', 'auto', 'auto'],
                                opacity: '0.20000000298023224',
                                fill: ["rgba(78,78,78,1)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['221', '57', '37', '37', 'auto', 'auto'],
                                fill: ["rgba(87,87,87,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['15', '19', '209', '89', 'auto', 'auto'],
                                text: "…THE PARALLAX EFFECT IN ACTION!",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [23, "px"], "rgba(229,229,229,1)", "bold", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'EdgeTools_Spector_Kopie',
                            type: 'image',
                            rect: ['-184', '1062', '140px', '220px', 'auto', 'auto'],
                            clip: 'rect(0px 140px 215px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"EdgeTools_Spector%20Kopie.png",'0px','0px']
                        },
                        {
                            id: 'codi',
                            type: 'image',
                            rect: ['823', '622', '164px', '236px', 'auto', 'auto'],
                            clip: 'rect(0px 164px 210px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"codi.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '1500', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "stop": 3000
                    },
                    data: [
                        [
                            "eid19",
                            "opacity",
                            1750,
                            750,
                            "easeOutQuint",
                            "${EdgeTools_Spector_Kopie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            360,
                            750,
                            "easeOutQuint",
                            "${codi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1361,
                            750,
                            "easeInQuint",
                            "${codi}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "left",
                            360,
                            750,
                            "linear",
                            "${RectangleCopy3}",
                            '-315px',
                            '181px'
                        ],
                        [
                            "eid30",
                            "left",
                            1361,
                            750,
                            "linear",
                            "${RectangleCopy3}",
                            '181px',
                            '-315px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            71,
                            929,
                            "easeInQuint",
                            "${ani}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "left",
                            71,
                            929,
                            "linear",
                            "${ani}",
                            '189px',
                            '-186px'
                        ],
                        [
                            "eid17",
                            "left",
                            1750,
                            750,
                            "linear",
                            "${EdgeTools_Spector_Kopie}",
                            '-184px',
                            '191px'
                        ],
                        [
                            "eid7",
                            "left",
                            360,
                            750,
                            "linear",
                            "${codi}",
                            '823px',
                            '460px'
                        ],
                        [
                            "eid26",
                            "left",
                            1361,
                            750,
                            "linear",
                            "${codi}",
                            '460px',
                            '823px'
                        ],
                        [
                            "eid21",
                            "left",
                            1750,
                            750,
                            "linear",
                            "${RectangleCopy5}",
                            '857px',
                            '364px'
                        ],
                        [
                            "eid2",
                            "left",
                            71,
                            929,
                            "linear",
                            "${RectangleCopy}",
                            '367px',
                            '842px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Parallax_Test_edgeActions.js");
})("EDGE-193409812");
