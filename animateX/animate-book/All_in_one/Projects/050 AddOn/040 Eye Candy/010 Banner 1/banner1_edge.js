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
                            id: 'beams',
                            type: 'image',
                            rect: ['0', '0', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"beams.jpg",'0px','0px']
                        },
                        {
                            id: 'devices',
                            type: 'image',
                            rect: ['74', '14', '154px', '139px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"devices.png",'0px','0px']
                        },
                        {
                            id: 'bags',
                            type: 'image',
                            rect: ['371', '33', '157px', '111px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bags.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['0', '189', '300', '25', 'auto', 'auto'],
                            text: "NOW FOR iPAD &amp; iPHONE",
                            align: "center",
                            font: ['abel, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", ""],
                            textShadow: ["rgba(0,0,0,0.48)", 1, 1, 3]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['300', '189', '300', '25', 'auto', 'auto'],
                            text: "DOWNLOAD NOW",
                            align: "center",
                            font: ['abel, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", ""],
                            textShadow: ["rgba(0,0,0,0.48)", 1, 1, 3]
                        },
                        {
                            id: 'fragments',
                            symbolName: 'fragments',
                            type: 'rect',
                            rect: ['0', '0', '300', '250', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300', '250', 'auto', 'auto'],
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
                            "eid27",
                            "left",
                            2000,
                            500,
                            "easeInOutQuart",
                            "${Text}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid26",
                            "left",
                            2000,
                            500,
                            "easeInOutQuart",
                            "${TextCopy3}",
                            '300px',
                            '0px'
                        ],
                        [
                            "eid31",
                            "left",
                            2000,
                            500,
                            "easeInOutQuart",
                            "${devices}",
                            '74px',
                            '-227px'
                        ],
                        [
                            "eid30",
                            "left",
                            2000,
                            500,
                            "easeInOutQuart",
                            "${bags}",
                            '371px',
                            '70px'
                        ]
                    ]
                }
            },
            "fragments": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'illustration22',
                            rect: [0, 0, '300px', '250px', 'auto', 'auto'],
                            clip: 'rect(0px 300px 50px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/illustration.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'illustration22Copy2',
                            rect: [0, 0, '300px', '250px', 'auto', 'auto'],
                            clip: 'rect(50px 300px 100px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/illustration.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'illustration22Copy3',
                            rect: [0, 0, '300px', '250px', 'auto', 'auto'],
                            clip: 'rect(100px 300px 150px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/illustration.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'illustration22Copy4',
                            rect: [0, 0, '300px', '250px', 'auto', 'auto'],
                            clip: 'rect(150px 300px 200px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/illustration.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'illustration22Copy5',
                            rect: [0, 0, '300px', '250px', 'auto', 'auto'],
                            clip: 'rect(200px 300px 250px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/illustration.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 300, 250]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid11",
                            "left",
                            167,
                            667,
                            "easeInOutCubic",
                            "${illustration22Copy3}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            667,
                            "easeInOutCubic",
                            "${illustration22}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid10",
                            "left",
                            83,
                            667,
                            "easeInOutCubic",
                            "${illustration22Copy2}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid13",
                            "left",
                            250,
                            667,
                            "easeInOutCubic",
                            "${illustration22Copy4}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid14",
                            "left",
                            333,
                            667,
                            "easeInOutCubic",
                            "${illustration22Copy5}",
                            '0px',
                            '300px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner1_edgeActions.js");
})("EDGE-BANNER1");
