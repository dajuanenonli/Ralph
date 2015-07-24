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
                            id: 'Spritesheet_ChartNew_symbol_1',
                            symbolName: 'Spritesheet_ChartNew_symbol_1',
                            type: 'rect',
                            rect: ['175px', '100px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1458.3333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew_symbol_1}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew_symbol_1}",
                            '175px',
                            '175px'
                        ]
                    ]
                }
            },
            "Spritesheet_ChartNew_symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Spritesheet_ChartNew',
                            type: 'image',
                            rect: ['1px', '0px', '1200px', '1200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Spritesheet_ChartNew.jpg', '-400px', '-1000px', '1200px', '1200px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 1375,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [0,0],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-0,-0],
                            [-200,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-200,-0],
                            [-400,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-400,-0],
                            [-600,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid7",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-600,-0],
                            [-800,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-800,-0],
                            [-1000,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-1000,-0],
                            [-0,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-0,-200],
                            [-200,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-200,-200],
                            [-400,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-400,-200],
                            [-600,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-600,-200],
                            [-800,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-800,-200],
                            [-1000,-200],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-1000,-200],
                            [-0,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-0,-400],
                            [-200,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid17",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-200,-400],
                            [-400,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-400,-400],
                            [-600,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-600,-400],
                            [-800,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-800,-400],
                            [-1000,-400],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid21",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-1000,-400],
                            [-0,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-0,-600],
                            [-200,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-200,-600],
                            [-400,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-400,-600],
                            [-600,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-600,-600],
                            [-800,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid26",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-800,-600],
                            [-1000,-600],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-1000,-600],
                            [-0,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-0,-800],
                            [-200,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-200,-800],
                            [-400,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-400,-800],
                            [-600,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-600,-800],
                            [-800,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-800,-800],
                            [-1000,-800],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-1000,-800],
                            [-0,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-0,-1000],
                            [-200,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-200,-1000],
                            [-200,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid36",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            [-400,-1000],
                            [-400,-1000],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Spritesheet_ChartNew}",
                            '0px',
                            '200px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("030%20Spritesheet%20Chart_edgeActions.js");
})("EDGE-275896654");
