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
            js+"jquery-2.0.3.min.js"
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
                            id: 'card4',
                            type: 'image',
                            rect: ['300px', '0', '300', '300px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"card4.png",'0px','0px']
                        },
                        {
                            id: 'card3',
                            type: 'image',
                            rect: ['300px', '0', '300px', '300px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"card3.png",'0px','0px']
                        },
                        {
                            id: 'card2',
                            type: 'image',
                            rect: ['0', '0', '300px', '300px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"card2.png",'0px','0px']
                        },
                        {
                            id: 'card1',
                            type: 'image',
                            rect: ['0', '0', '300px', '300px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"card1.jpg",'0px','0px']
                        },
                        {
                            id: 'glow',
                            symbolName: 'hotspot',
                            type: 'rect',
                            rect: ['0', '0', '300', '300', 'auto', 'auto']
                        },
                        {
                            id: 'hotspot',
                            type: 'rect',
                            rect: ['0px', '0', '300px', '300px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(160,201,119,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'button',
                                symbolName: 'button',
                                type: 'rect',
                                rect: ['39', '128', '222', '44', 'auto', 'auto'],
                                opacity: '1'
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300', '300', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "left",
                            500,
                            500,
                            "easeInOutCubic",
                            "${card4}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid11",
                            "top",
                            0,
                            500,
                            "easeInOutCubic",
                            "${card3}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            500,
                            "easeInOutCubic",
                            "${card4}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid16",
                            "top",
                            1000,
                            500,
                            "easeInOutCubic",
                            "${card4}",
                            '300px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "left",
                            500,
                            500,
                            "easeInOutCubic",
                            "${card3}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${hotspot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            500,
                            "easeInOutCubic",
                            "${card2}",
                            '0px',
                            '300px'
                        ]
                    ]
                }
            },
            "hotspot": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '300px', '300px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)', [50, 50, 'true', 'farthest-corner', [['rgba(255,255,255,0.00)', 0], ['rgba(255,255,255,0.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '300', '300']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "background-image",
                            0,
                            433,
                            "linear",
                            "${Rectangle2}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.83)',100]]]
                        ],
                        [
                            "eid4",
                            "background-image",
                            500,
                            433,
                            "linear",
                            "${Rectangle2}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.83)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid5",
                            "background-image",
                            1317,
                            233,
                            "linear",
                            "${Rectangle2}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.83)',100]]]
                        ],
                        [
                            "eid6",
                            "background-image",
                            1622,
                            243,
                            "linear",
                            "${Rectangle2}",
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.83)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ]
                    ]
                }
            },
            "button": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'base',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: [0, 0, 222, 44, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.88)'],
                            boxShadow: ['', '3px', '3px', '40px', 0, 'rgba(0,0,0,0.35)'],
                            c: [
                            {
                                rect: ['0px', 11, '222px', '25px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(61,154,217,1.00)', '400', 'none', 'normal', '', ''],
                                id: 'Text2',
                                text: 'JETZT BESTELLEN',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 222, 44]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 1000
                    },
                    data: [
                        [
                            "eid39",
                            "background-color",
                            0,
                            0,
                            "easeOutBack",
                            "${base}",
                            'rgba(255,255,255,0.88)',
                            'rgba(255,255,255,0.88)'
                        ],
                        [
                            "eid40",
                            "background-color",
                            1000,
                            0,
                            "easeOutBack",
                            "${base}",
                            'rgba(255,255,255,0.88)',
                            'rgba(61,154,217,1.00)'
                        ],
                        [
                            "eid38",
                            "color",
                            0,
                            0,
                            "easeOutBack",
                            "${Text2}",
                            'rgba(61,154,217,1.00)',
                            'rgba(61,154,217,1.00)'
                        ],
                        [
                            "eid41",
                            "color",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text2}",
                            'rgba(61,154,217,1.00)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner2_edgeActions.js");
})("EDGE-BANNER2");
