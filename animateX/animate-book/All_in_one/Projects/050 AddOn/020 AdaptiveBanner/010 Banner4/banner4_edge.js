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
                            id: 'adaptiveContainer',
                            type: 'rect',
                            rect: ['0', '0', '100%', '90px', 'auto', 'auto'],
                            fill: ["rgba(255,136,136,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '90', 'auto', 'auto'],
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
            },
            "layout728": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '728px', '90px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,207,233,1.00)']
                        },
                        {
                            id: 'bags5',
                            type: 'image',
                            rect: ['0', '11', '157px', '111px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            id: 'bags5Copy',
                            type: 'image',
                            rect: ['127', '45', '127', '90', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            id: 'bags5Copy2',
                            type: 'image',
                            rect: ['127', '45', '127', '90', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            id: 'bags5Copy3',
                            type: 'image',
                            rect: ['254', '0', '157', '111', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '23', '443px', '44', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.80)']
                        },
                        {
                            rect: ['22', '28', '410', '45', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: 'Jetzt bestellen und 70% sichern!',
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(220,76,76,0.99)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            id: 'button3',
                            symbolName: 'button',
                            rect: ['495', '23', '222', '44', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '728', '90']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${button3}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${button3}",
                            '495px',
                            '495px'
                        ]
                    ]
                }
            },
            "layout600": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 600, 90, 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(114,170,215,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'bags4',
                            rect: [0, -5, '157px', '111px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['19', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            id: 'button2',
                            type: 'rect',
                            rect: [10, 35, 222, 44, 'auto', 'auto'],
                            symbolName: 'button'
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'Jetzt bestellen und 70% sichern!',
                            rect: [300, '14px', '251px', '62px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1)', 'normal', 'none', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 600, 90]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${button2}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${button2}",
                            '10px',
                            '10px'
                        ]
                    ]
                }
            },
            "layout400": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 400, '90px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,134,205,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'bags2',
                            rect: [-9, 114, 135, 95, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['15', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'Jetzt bestellen und 70% sichern!',
                            rect: [420, '14px', '251px', '62px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '']
                        },
                        {
                            id: 'bags3',
                            type: 'image',
                            rect: [111, 99, '157px', '111px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bags3Copy',
                            rect: [351, 100, '157px', '111px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['-20', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/bags.png', '0px', '0px']
                        },
                        {
                            rect: ['89', -85, 222, 44, 'auto', 'auto'],
                            id: 'button',
                            symbolName: 'button',
                            cursor: 'pointer',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 400, 90]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Text}",
                            '420px',
                            '136px'
                        ],
                        [
                            "eid12",
                            "left",
                            3250,
                            750,
                            "easeOutBack",
                            "${Text}",
                            '136px',
                            '418px'
                        ],
                        [
                            "eid20",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${bags3Copy}",
                            '351px',
                            '255px'
                        ],
                        [
                            "eid22",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${bags3Copy}",
                            '100px',
                            '2px'
                        ],
                        [
                            "eid4",
                            "top",
                            500,
                            500,
                            "linear",
                            "${bags2}",
                            '114px',
                            '10px'
                        ],
                        [
                            "eid2",
                            "left",
                            500,
                            500,
                            "linear",
                            "${bags2}",
                            '-9px',
                            '-10px'
                        ],
                        [
                            "eid18",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${bags3}",
                            '99px',
                            '-11px'
                        ],
                        [
                            "eid24",
                            "top",
                            4500,
                            500,
                            "easeOutBack",
                            "${button}",
                            '-85px',
                            '23px'
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
                            boxShadow: ['', '3px', '3px', '40px', 0, 'rgba(0,0,0,0.35)'],
                            fill: ['rgba(255,255,255,0.88)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', 11, '222px', '25px', 'auto', 'auto'],
                                id: 'Text2',
                                text: 'JETZT BESTELLEN',
                                align: 'center',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(61,154,217,1.00)', '400', 'none', 'normal']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner4_edgeActions.js");
})("EDGE-BANNER4");
