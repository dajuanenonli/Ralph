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
                            id: 'content',
                            type: 'rect',
                            rect: ['-1200px', '-86px', '1800px', '29px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'background',
                                type: 'image',
                                rect: ['0', '86px', '1800px', '400px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/background.png",'0px','0px']
                            },
                            {
                                id: 'bubble',
                                type: 'group',
                                rect: ['178px', '-90px', '225', '160', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'S1_speechbubble',
                                    type: 'image',
                                    rect: ['0px', '0px', '225px', '160px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S1_speechbubble.png",'0px','0px']
                                },
                                {
                                    id: 'S1_txt_firststeps',
                                    type: 'image',
                                    rect: ['57px', '36px', '112px', '51px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S1_txt_firststeps.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'S2_cloud',
                                type: 'image',
                                rect: ['699px', '102px', '172px', '111px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S2_cloud.png",'0px','0px']
                            },
                            {
                                id: 'S2_bigscreen',
                                type: 'image',
                                rect: ['930px', '174px', '265px', '223px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S2_bigscreen.png",'0px','0px']
                            },
                            {
                                id: 'S2_laptop',
                                type: 'image',
                                rect: ['780px', '293px', '257px', '133px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S2_laptop.png",'0px','0px']
                            },
                            {
                                id: 'S2_mobile',
                                type: 'image',
                                rect: ['1129px', '296px', '126px', '130px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S2_mobile.png",'0px','0px']
                            },
                            {
                                id: 'S3_ani',
                                type: 'image',
                                rect: ['1515px', '142px', '122px', '294px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S3_ani.png",'0px','0px']
                            },
                            {
                                id: 'S3_flow',
                                type: 'image',
                                rect: ['1656px', '135px', '120px', '301px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"Scenes-assets/S3_flow.png",'0px','0px']
                            },
                            {
                                id: 'character',
                                symbolName: 'character',
                                type: 'rect',
                                rect: ['-107px', '318px', '100', '133', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 13000,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "left",
                            2300,
                            700,
                            "easeOutBack",
                            "${bubble}",
                            '178px',
                            '182px'
                        ],
                        [
                            "eid22",
                            "left",
                            5000,
                            7000,
                            "linear",
                            "${S2_mobile}",
                            '1129px',
                            '859px'
                        ],
                        [
                            "eid17",
                            "top",
                            2300,
                            700,
                            "easeOutBack",
                            "${bubble}",
                            '-90px',
                            '126px'
                        ],
                        [
                            "eid24",
                            "left",
                            5000,
                            7000,
                            "linear",
                            "${S2_cloud}",
                            '699px',
                            '679px'
                        ],
                        [
                            "eid21",
                            "left",
                            5000,
                            7000,
                            "linear",
                            "${S2_laptop}",
                            '780px',
                            '510px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${character}",
                            '-107px',
                            '250px'
                        ],
                        [
                            "eid18",
                            "left",
                            5000,
                            7000,
                            "linear",
                            "${character}",
                            '250px',
                            '1369px'
                        ],
                        [
                            "eid23",
                            "left",
                            5000,
                            7000,
                            "linear",
                            "${S2_bigscreen}",
                            '930px',
                            '820px'
                        ],
                        [
                            "eid25",
                            "left",
                            5000,
                            7000,
                            "linear",
                            "${content}",
                            '0px',
                            '-1200px'
                        ],
                            [ "eid19", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${character}', ['speak'] ] ],
                            [ "eid20", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${character}', ['walk'] ] ],
                            [ "eid26", "trigger", 12000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${character}', ['speak'] ] ],
                            [ "eid27", "trigger", 13000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${character}', ['speak'] ] ]
                    ]
                }
            },
            "character": {
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
                            id: 'spritesheet',
                            rect: ['0px', '0', '1292px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Scenes-assets/spritesheet.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '100px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 1200,
                    autoPlay: true,
                    labels: {
                        "walk": 100,
                        "speak": 1000
                    },
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spritesheet}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "left",
                            100,
                            0,
                            "linear",
                            "${spritesheet}",
                            '0px',
                            '-100px'
                        ],
                        [
                            "eid3",
                            "left",
                            200,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-100px',
                            '-200px'
                        ],
                        [
                            "eid4",
                            "left",
                            300,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-200px',
                            '-300px'
                        ],
                        [
                            "eid5",
                            "left",
                            400,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-300px',
                            '-400px'
                        ],
                        [
                            "eid6",
                            "left",
                            500,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-400px',
                            '-500px'
                        ],
                        [
                            "eid7",
                            "left",
                            600,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-500px',
                            '-600px'
                        ],
                        [
                            "eid8",
                            "left",
                            700,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-600px',
                            '-700px'
                        ],
                        [
                            "eid9",
                            "left",
                            800,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-700px',
                            '-800px'
                        ],
                        [
                            "eid10",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-800px',
                            '-900px'
                        ],
                        [
                            "eid11",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${spritesheet}",
                            '-900px',
                            '-1000px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-512559364");
