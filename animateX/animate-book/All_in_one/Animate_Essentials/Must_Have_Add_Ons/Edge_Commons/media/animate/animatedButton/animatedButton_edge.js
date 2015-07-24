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
                            rect: ['206px', '338px', '287px', '60px', 'auto', 'auto'],
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
                                rect: ['40px', '17px', '79.8%', '25px', 'auto', 'auto'],
                                text: "Create Button",
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
                            text: "Create animated buttons with icon, label and functionality set dyna",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'descriptionCopy',
                            type: 'text',
                            rect: ['198px', '418px', '326px', '16px', 'auto', 'auto'],
                            text: "FYI: Icon lies in the images folder of the project<br>Button animations are defined on the symbol timeline",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'MyAnimatedButtonA',
                            symbolName: 'MyAnimatedButtonA',
                            type: 'rect',
                            rect: ['206px', '131px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'MyAnimatedButtonB',
                            symbolName: 'MyAnimatedButtonB',
                            type: 'rect',
                            rect: ['206', '235px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['30px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Convert symbol into animated button",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "nowrap"]
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
                        [
                            "eid31",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MyAnimatedButtonA}",
                            '131px',
                            '131px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            0,
                            "linear",
                            "${MyAnimatedButtonA}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MyAnimatedButtonB}",
                            '235px',
                            '235px'
                        ]
                    ]
                }
            },
            "MyAnimatedButtonA": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0', '0', '80', '80', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0', '0', '80', '80', 'auto', 'auto'],
                            fill: ['rgba(0,134,181,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1.00)', '100', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            text: 'label',
                            id: 'label',
                            opacity: '0',
                            align: 'center',
                            rect: ['96', '25', '162', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'icon',
                            type: 'image',
                            rect: ['0', '0', '80px', '80px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/icon-053.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0', '0', '80', '80', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '80', '80']
                        }
                    }
                },
                timeline: {
                    duration: 636,
                    autoPlay: false,
                    data: [
                        [
                            "eid38",
                            "opacity",
                            386,
                            250,
                            "linear",
                            "${label}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "width",
                            0,
                            500,
                            "easeInOutCubic",
                            "${Rectangle3}",
                            '80px',
                            '280px'
                        ],
                        [
                            "eid40",
                            "width",
                            0,
                            500,
                            "easeInOutCubic",
                            "${hotspot}",
                            '80px',
                            '280px'
                        ]
                    ]
                }
            },
            "MyAnimatedButtonB": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0', '0', '80', '80', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0', '0', '80', '80', 'auto', 'auto'],
                            fill: ['rgba(0,134,181,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1.00)', '100', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            text: 'label',
                            id: 'label',
                            opacity: '0',
                            align: 'center',
                            rect: ['96', '25', '162', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'icon',
                            type: 'image',
                            rect: ['0', '0', '80px', '80px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/icon-054.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '280', '80']
                        }
                    }
                },
                timeline: {
                    duration: 636,
                    autoPlay: false,
                    data: [
                        [
                            "eid38",
                            "opacity",
                            386,
                            250,
                            "linear",
                            "${label}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "width",
                            0,
                            500,
                            "easeInOutCubic",
                            "${Rectangle3}",
                            '80px',
                            '280px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animatedButton_edgeActions.js");
})("EDGE-145692202");
