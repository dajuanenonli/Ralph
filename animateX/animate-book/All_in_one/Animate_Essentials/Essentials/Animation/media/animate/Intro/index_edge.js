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
                            id: 'Background',
                            type: 'image',
                            rect: ['0', '0', '800px', '550px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background.png",'0px','0px']
                        },
                        {
                            id: 'ATable',
                            type: 'image',
                            rect: ['-413', '275', '391px', '163px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ATable.png",'0px','0px']
                        },
                        {
                            id: 'fishbowl',
                            symbolName: 'fishbowl',
                            type: 'rect',
                            rect: ['57', '286', '105', '199', 'auto', 'auto']
                        },
                        {
                            id: 'Hotspot',
                            type: 'image',
                            rect: ['263', '-179', '206px', '162px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Hotspot.png",'0px','0px']
                        },
                        {
                            id: 'Lady',
                            type: 'image',
                            rect: ['809', '117', '204px', '368px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lady.png",'0px','0px']
                        },
                        {
                            id: 'Lamp',
                            type: 'image',
                            rect: ['77', '-274', '65px', '391px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lamp.png",'0px','0px']
                        },
                        {
                            id: 'LampCopy',
                            type: 'image',
                            rect: ['688', '-267', '65px', '391px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lamp.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '550', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2610,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "left",
                            0,
                            1500,
                            "easeOutExpo",
                            "${ATable}",
                            '-413px',
                            '204px'
                        ],
                        [
                            "eid12",
                            "top",
                            1500,
                            1110,
                            "easeOutBounce",
                            "${Hotspot}",
                            '-179px',
                            '124px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            1500,
                            "easeOutExpo",
                            "${Lady}",
                            '809px',
                            '400px'
                        ]
                    ]
                }
            },
            "fishbowl": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.1955",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '105px', '199px', 'auto', 'auto'],
                            id: 'Bowl',
                            oldId: 'Bowl',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Bowl.png', '0px', '0px']
                        },
                        {
                            rect: [53, 28, '38px', '28px', 'auto', 'auto'],
                            id: 'Fish',
                            oldId: 'Fish',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Fish.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 105, 199]
                        }
                    }
                },
                timeline: {
                    duration: 1944,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${Fish}",
                            '1',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            1000,
                            0,
                            "easeOutBounce",
                            "${Fish}",
                            '1',
                            '-1'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Fish}",
                            '28px',
                            '23px'
                        ],
                        [
                            "eid21",
                            "top",
                            1000,
                            944,
                            "easeOutBounce",
                            "${Fish}",
                            '23px',
                            '25px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            1000,
                            "easeOutBounce",
                            "${Fish}",
                            '53px',
                            '9px'
                        ],
                        [
                            "eid20",
                            "left",
                            1000,
                            944,
                            "easeOutBounce",
                            "${Fish}",
                            '9px',
                            '67px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-272609037");
