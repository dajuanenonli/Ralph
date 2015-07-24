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
                            text: "Create static button with icon, label and functionality",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'descriptionCopy',
                            type: 'text',
                            rect: ['198px', '418px', '326px', '16px', 'auto', 'auto'],
                            text: "FYI: Icon lies in the images folder of the project<br>Button states are defined on the symbol timeline",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['30px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Convert symbol into static button",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'MyStaticButtonB',
                            symbolName: 'MyStaticButtonB',
                            type: 'rect',
                            rect: ['198', '219', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'MyStaticButtonA',
                            symbolName: 'MyStaticButtonA',
                            type: 'rect',
                            rect: ['198px', '114px', 'undefined', 'undefined', 'auto', 'auto']
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
                            "eid1",
                            "top",
                            0,
                            0,
                            "linear",
                            "${MyStaticButtonA}",
                            '114px',
                            '114px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            0,
                            "linear",
                            "${MyStaticButtonA}",
                            '198px',
                            '198px'
                        ]
                    ]
                }
            },
            "MyStaticButtonA": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 258, '80px', 'auto', 'auto'],
                            boxShadow: ['', '6px', '6px', '3px', 0, 'rgba(0,0,0,0.65)'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(5,110,115,1.00)']
                        },
                        {
                            rect: [0, 0, 80, 80, 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(38,38,38,1.00)']
                        },
                        {
                            rect: [0, 0, '80px', '80px', 'auto', 'auto'],
                            id: 'icon',
                            opacity: '0.6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icon-05.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'label',
                            text: 'label',
                            rect: [94, 25, 164, '22px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 280, 80]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 1014,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid19",
                            "top",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid20",
                            "left",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid26",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '25px',
                            '31px'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid25",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${label}",
                            '94px',
                            '102px'
                        ],
                        [
                            "eid10",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid16",
                            "boxShadow.offsetV",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '1px'
                        ],
                        [
                            "eid4",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '258px',
                            '258px'
                        ],
                        [
                            "eid5",
                            "width",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '258px',
                            '280px'
                        ],
                        [
                            "eid18",
                            "left",
                            1014,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid101",
                            "width",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '164px',
                            '164px'
                        ],
                        [
                            "eid8",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(5,110,115,1.00)',
                            'rgba(5,110,115,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(5,110,115,1.00)',
                            'rgba(34,184,191,1.00)'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid9",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid15",
                            "boxShadow.offsetH",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '1px'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${icon}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1014,
                            0,
                            "linear",
                            "${icon}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            1014,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '3px'
                        ]
                    ]
                }
            },
            "MyStaticButtonB": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            rect: [0, 0, 280, '80px', 'auto', 'auto'],
                            boxShadow: ['', '6px', '6px', '3px', 0, 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(176,0,0,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', '', ''],
                                id: 'label',
                                text: 'label',
                                type: 'text',
                                rect: [99, 26, '174px', '22px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: [0, 0, 80, 80, 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(38,38,38,1.00)']
                        },
                        {
                            rect: [0, 0, '80px', '80px', 'auto', 'auto'],
                            id: 'icon',
                            opacity: '0.6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icon-052.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '80px', '80px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 280, 80]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 1014,
                        "down": 2000
                    },
                    data: [
                        [
                            "eid19",
                            "top",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid20",
                            "left",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid99",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(176,0,0,1.00)',
                            'rgba(176,0,0,1.00)'
                        ],
                        [
                            "eid100",
                            "background-color",
                            1014,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(176,0,0,1.00)',
                            'rgba(250,0,0,1.00)'
                        ],
                        [
                            "eid10",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid16",
                            "boxShadow.offsetV",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '1px'
                        ],
                        [
                            "eid18",
                            "left",
                            1014,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid9",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid15",
                            "boxShadow.offsetH",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '6px',
                            '1px'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${icon}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1014,
                            0,
                            "linear",
                            "${icon}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            1014,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${icon}",
                            '0px',
                            '3px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("staticButton_edgeActions.js");
})("EDGE-145692202");
