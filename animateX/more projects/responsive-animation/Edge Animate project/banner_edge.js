/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'amatic-sc, sans-serif': '<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'table',
                            type: 'rect',
                            rect: ['auto', '256px', '78%', '50px', '-25px', 'auto'],
                            fill: ["rgba(235,138,47,1.00)"],
                            stroke: [8,"rgb(214, 167, 124)","none"],
                            transform: [[],[],['-33']]
                        },
                        {
                            id: 'chalkboard',
                            type: 'rect',
                            rect: ['16px', '15px', '62.3%', '217px', 'auto', 'auto'],
                            borderRadius: ["8px", "8px", "8px", "8px 8px"],
                            fill: ["rgba(35,31,32,1.00)"],
                            stroke: [8,"rgba(214,167,124,1.00)","solid"]
                        },
                        {
                            id: 'message',
                            type: 'text',
                            rect: ['25px', '150px', '61.4%', '98px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Welcome!",
                            align: "center",
                            font: ['amatic-sc, sans-serif', [70, "px"], "rgba(214,167,124,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "73px", ""]
                        },
                        {
                            id: 'sugardish',
                            symbolName: 'sugardish',
                            type: 'rect',
                            rect: ['auto', '217px', '93', '73', '176px', 'auto']
                        },
                        {
                            id: 'banner',
                            type: 'image',
                            rect: ['24px', '23px', '62.2%', '37.9%', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"banner.jpg",'79.33%','22.25%','942px','287.90348759766px', 'no-repeat']
                        },
                        {
                            id: 'cup_group',
                            type: 'group',
                            rect: ['auto', '55', '131', '221', '34px', 'auto'],
                            c: [
                            {
                                id: 'sugarcube_in_coffee',
                                symbolName: 'sugarcube',
                                type: 'rect',
                                rect: ['41px', '-95px', '29', '29', 'auto', 'auto'],
                                transform: [[],['849']]
                            },
                            {
                                id: 'coffee',
                                type: 'image',
                                rect: ['5px', '168px', '99px', '50px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"coffee.svg",'0px','0px']
                            },
                            {
                                id: 'cup',
                                type: 'image',
                                rect: ['0px', '141px', '131px', '80px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"cup.svg",'0px','0px']
                            },
                            {
                                id: 'steam_anim',
                                symbolName: 'steam_anim',
                                type: 'rect',
                                rect: ['6px', '0px', '100px', '170px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'rule',
                            type: 'rect',
                            rect: ['20px', '135px', '63.2%', '6px', 'auto', 'auto'],
                            fill: ["rgba(214,167,124,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['auto', '23px', '16.5%', '42.3%', '-188px', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '300px', 'auto', 'auto'],
                            sizeRange: ['400px','990px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(127,49,30,1.00)",[50,31,true,'farthest-corner',[['rgba(235,138,47,1.00)',0],['rgba(112,50,22,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 4877,
                    autoPlay: true,
                    data: [
                        [
                            "eid59",
                            "background-position",
                            250,
                            3250,
                            "easeOutQuad",
                            "${banner}",
                            [79.33,22.25],
                            [70,43.7],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid60",
                            "opacity",
                            250,
                            3250,
                            "easeOutQuart",
                            "${banner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "location",
                            2900,
                            528,
                            "linear",
                            "${sugarcube_in_coffee}",
                            [[132.2, -83.6, -234.28, 68.29, 0, 0,0],[12.57, 127.21, 0, 0, 0, 0,250.46]]
                        ],
                        [
                            "eid54",
                            "location",
                            3428,
                            444,
                            "linear",
                            "${sugarcube_in_coffee}",
                            [[12.57, 127.21, -0.05, 2.63, 0, 0,0],[12.55, 129.8, 146.33, -257.86, 0, 2.55,2.59],[57.33, 195.13, 0, 0, 0, 0,138.15]]
                        ],
                        [
                            "eid40",
                            "location",
                            3872,
                            1005,
                            "easeOutQuart",
                            "${sugarcube_in_coffee}",
                            [[57.33, 195.13, 0, 0, 0, 0,0],[65.67, 172.5, 0, 0, 0, 0,24.12]]
                        ],
                        [
                            "eid51",
                            "background-size",
                            250,
                            3250,
                            "easeOutQuad",
                            "${banner}",
                            [942,287.90348759766],
                            [625,191.01876831054688],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid48",
                            "opacity",
                            1000,
                            2617,
                            "easeOutQuart",
                            "${message}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "right",
                            2900,
                            1389,
                            "easeOutQuart",
                            "${logo}",
                            '-188px',
                            '45px'
                        ],
                        [
                            "eid38",
                            "rotateZ",
                            2900,
                            528,
                            "linear",
                            "${sugarcube_in_coffee}",
                            '-12deg',
                            '-223deg'
                        ],
                        [
                            "eid65",
                            "rotateZ",
                            3428,
                            444,
                            "linear",
                            "${sugarcube_in_coffee}",
                            '-223deg',
                            '584deg'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            3872,
                            1005,
                            "easeOutQuart",
                            "${sugarcube_in_coffee}",
                            '584deg',
                            '849deg'
                        ]
                    ]
                }
            },
            "sugarcube": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-23'], [0, 0, 0], [1, 1, 1]],
                            rect: ['3px', '3px', '22px', '22px', 'auto', 'auto'],
                            id: 'sugarcube',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '29px', '29px']
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
            "sugardish": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sugarcube4',
                            symbolName: 'sugarcube',
                            rect: ['6px', '27px', '29', '29', 'auto', 'auto']
                        },
                        {
                            rect: ['28px', '27px', '29', '29', 'auto', 'auto'],
                            id: 'sugarcube5',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            transform: [[], ['46'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['41px', '7px', '29', '29', 'auto', 'auto'],
                            id: 'sugarcube6',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            transform: [[], ['21'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['17px', '4px', '29', '29', 'auto', 'auto'],
                            id: 'sugarcube7',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            transform: [[], ['69'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            rect: ['55px', '27px', '29', '29', 'auto', 'auto'],
                            id: 'sugarcube3',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            transform: [[], ['6'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'image',
                            id: 'dish',
                            rect: ['0px', '44px', '93px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dish.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '93px', '73px']
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
            "steam_anim": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '600px', '850px', 'auto', 'auto'],
                            id: 'spritesheet_steam',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spritesheet_steam.png', '0px', '0px', '600px', '850px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 2900,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            '0px',
                            '100px'
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            '0px',
                            '170px'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [0,0],
                            [-100,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-100,0],
                            [-200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            300,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-200,0],
                            [-300,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-300,0],
                            [-400,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-400,0],
                            [-500,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-500,0],
                            [0,-170],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            700,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [0,-170],
                            [-100,-170],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            800,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-100,-170],
                            [-200,-170],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            900,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-200,-170],
                            [-300,-170],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-300,-170],
                            [-400,-170],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            1100,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-400,-170],
                            [-500,-170],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            1200,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-500,-170],
                            [0,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            1300,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [0,-340],
                            [-100,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            1400,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-100,-340],
                            [-200,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-200,-340],
                            [-300,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            1600,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-300,-340],
                            [-400,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            1700,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-400,-340],
                            [-500,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            1800,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-500,-340],
                            [0,-510],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            1900,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [0,-510],
                            [-100,-510],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-100,-510],
                            [-200,-510],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            2100,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-200,-510],
                            [-300,-510],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            2200,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-300,-510],
                            [-400,-510],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            2300,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-400,-510],
                            [-500,-510],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            2400,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-500,-510],
                            [0,-680],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [0,-680],
                            [-100,-680],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            2600,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-100,-680],
                            [-200,-680],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            2700,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-200,-680],
                            [-300,-680],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            2800,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-300,-680],
                            [-400,-680],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            2900,
                            0,
                            "linear",
                            "${spritesheet_steam}",
                            [-400,-680],
                            [-500,-680],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner_edgeActions.js");
})("EDGE-15840723");
