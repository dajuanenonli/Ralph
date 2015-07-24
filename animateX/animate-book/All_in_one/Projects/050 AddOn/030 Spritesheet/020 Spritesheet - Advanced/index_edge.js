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
            js+"jquery-1.7.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.1955",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-28', '51', '179', '298', 'auto', 'auto'],
                            overflow: 'hidden'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "left",
                            0,
                            3500,
                            "linear",
                            "${Symbol_1}",
                            '-28px',
                            '639px'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.1955",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1024px', '2048px', 'auto', 'auto'],
                            id: 'Boy_Fast_Right',
                            oldId: 'Boy_Fast_Right',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Boy_Fast_Right.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 179, 298]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "top",
                            208,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '-298px'
                        ],
                        [
                            "eid16",
                            "top",
                            417,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-298px',
                            '-594px'
                        ],
                        [
                            "eid22",
                            "top",
                            625,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-593px',
                            '-890px'
                        ],
                        [
                            "eid29",
                            "top",
                            833,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-890px',
                            '-1188px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid39",
                            "left",
                            42,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '-179px'
                        ],
                        [
                            "eid4",
                            "left",
                            83,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-179px',
                            '-358px'
                        ],
                        [
                            "eid5",
                            "left",
                            125,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-358px',
                            '-537px'
                        ],
                        [
                            "eid8",
                            "left",
                            167,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-537px',
                            '-716px'
                        ],
                        [
                            "eid9",
                            "left",
                            208,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-716px',
                            '0px'
                        ],
                        [
                            "eid11",
                            "left",
                            250,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '-179px'
                        ],
                        [
                            "eid12",
                            "left",
                            292,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-179px',
                            '-358px'
                        ],
                        [
                            "eid13",
                            "left",
                            333,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-358px',
                            '-537px'
                        ],
                        [
                            "eid14",
                            "left",
                            375,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-537px',
                            '-716px'
                        ],
                        [
                            "eid15",
                            "left",
                            417,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-716px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "left",
                            458,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '-179px'
                        ],
                        [
                            "eid18",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-179px',
                            '-358px'
                        ],
                        [
                            "eid19",
                            "left",
                            542,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-358px',
                            '-537px'
                        ],
                        [
                            "eid20",
                            "left",
                            583,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-537px',
                            '-716px'
                        ],
                        [
                            "eid21",
                            "left",
                            625,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-716px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            667,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '-179px'
                        ],
                        [
                            "eid24",
                            "left",
                            708,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-179px',
                            '-358px'
                        ],
                        [
                            "eid25",
                            "left",
                            750,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-358px',
                            '-537px'
                        ],
                        [
                            "eid26",
                            "left",
                            792,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-537px',
                            '-716px'
                        ],
                        [
                            "eid28",
                            "left",
                            833,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-716px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "left",
                            875,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '0px',
                            '-179px'
                        ],
                        [
                            "eid31",
                            "left",
                            917,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-179px',
                            '-358px'
                        ],
                        [
                            "eid32",
                            "left",
                            958,
                            0,
                            "linear",
                            "${Boy_Fast_Right}",
                            '-358px',
                            '-537px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-449601814");
