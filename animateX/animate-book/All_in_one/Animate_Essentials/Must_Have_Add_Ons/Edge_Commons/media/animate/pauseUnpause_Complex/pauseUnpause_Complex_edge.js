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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['30px', '223px', '280px', '10px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                fill: ["rgba(227,227,227,1.00)",[0,[['rgba(49,45,54,1.00)',12],['rgba(81,44,139,1.00)',98]]]],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'MySymbol1',
                            symbolName: 'MySymbol1',
                            type: 'rect',
                            rect: ['10px', '68px', '330px', '130px', 'auto', 'auto']
                        },
                        {
                            id: 'MySymbol1Copy',
                            symbolName: 'MySymbol1',
                            type: 'rect',
                            rect: ['358px', '68px', '330px', '130px', 'auto', 'auto']
                        },
                        {
                            id: 'btnPause',
                            type: 'rect',
                            rect: ['30px', 'auto', '171px', '39px', 'auto', '20px'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['1px', 'auto', '170px', '24px', 'auto', '7px'],
                                text: "global pause",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'btnUnpause',
                            type: 'rect',
                            rect: ['222px', 'auto', '171px', '39px', 'auto', '20px'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['1px', 'auto', '170px', '24px', 'auto', '7px'],
                                text: "global unpause",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'AnotherSymbol',
                            symbolName: 'AnotherSymbol',
                            type: 'rect',
                            rect: ['328px', '208px', '360px', '220px', 'auto', 'auto']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['31px', '208px', '132px', '10px', 'auto', 'auto'],
                            text: "Stage",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(166,166,166,1.00)", "400", "none solid rgb(142, 142, 142)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'description',
                            type: 'text',
                            rect: ['30px', '297px', '272px', '130px', 'auto', 'auto'],
                            text: "Description:<br>See how to pause and unpasue each and every symbol (timeline) with or without all it's children (optionally recursive). The advantage of EC.pause(...) is that all playback states are stored for proper usage of unpause.",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['30px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pause and unpause ",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(44,46,49,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${RectangleCopy}",
                            '0%',
                            '100%'
                        ]
                    ]
                }
            },
            "MySymbol1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(198,203,205,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['120px', '30px', '190px', '25px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(227,227,227,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                fill: ['rgba(227,227,227,1.00)', [0, [['rgba(49,45,54,1.00)', 12], ['rgba(128,63,231,1.00)', 98]]]]
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'pauseBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['20px', '30px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['8px', '7px', '2px', '12px', 'auto', 'auto'],
                                fill: ['rgba(142,142,142,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle4Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['14px', '7px', '2px', '12px', 'auto', 'auto'],
                                fill: ['rgba(142,142,142,1.00)']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'playBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['48px', '30px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text3',
                                text: '&gt;',
                                align: 'center',
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'playReverseBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['76px', '30px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text3Copy',
                                text: '&lt;',
                                align: 'center',
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['20px', '65px', '290px', '50px', 'auto', 'auto'],
                            id: 'SubSymbol',
                            symbolName: 'SubSymbol',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(142, 142, 142)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4',
                            text: 'MySymbol',
                            align: 'left',
                            rect: ['20px', '10px', '132px', '10px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '330px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${SubSymbol}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid73",
                            "top",
                            0,
                            3000,
                            "linear",
                            "${SubSymbol}",
                            '65px',
                            '75px'
                        ],
                        [
                            "eid7",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${RectangleCopy3}",
                            '0%',
                            '100%'
                        ],
                        [
                            "eid72",
                            "width",
                            0,
                            3000,
                            "linear",
                            "${SubSymbol}",
                            '290px',
                            '480px'
                        ],
                        [
                            "eid71",
                            "height",
                            0,
                            3000,
                            "linear",
                            "${SubSymbol}",
                            '50px',
                            '70px'
                        ]
                    ]
                }
            },
            "AnotherSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(126,187,213,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['120px', '30px', '226px', '25px', 'auto', 'auto'],
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(227,227,227,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'RectangleCopy5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                fill: ['rgba(227,227,227,1.00)', [0, [['rgba(83,11,56,1.00)', 12], ['rgba(215,6,111,1.00)', 98]]]]
                            }]
                        },
                        {
                            rect: ['16px', '72px', null, null, 'auto', 'auto'],
                            id: 'MySymbol13',
                            symbolName: 'MySymbol1',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(142, 142, 142)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4Copy2',
                            text: 'AnotherSymbol',
                            align: 'left',
                            rect: ['20px', '10px', '132px', '10px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'pauseBtnCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['20px', '30px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle4Copy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['8px', '7px', '2px', '12px', 'auto', 'auto'],
                                fill: ['rgba(142,142,142,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle4Copy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['14px', '7px', '2px', '12px', 'auto', 'auto'],
                                fill: ['rgba(142,142,142,1.00)']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'playBtnCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['48px', '30px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text3Copy5',
                                text: '&gt;',
                                align: 'center',
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'playReverseBtnCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['76px', '30px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text3Copy4',
                                text: '&lt;',
                                align: 'center',
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '360px', '220px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: false,
                    data: [
                        [
                            "eid12",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${RectangleCopy5}",
                            '0%',
                            '100%'
                        ]
                    ]
                }
            },
            "SubSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(160,166,168,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['120px', '19px', '160px', '25px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(147,147,147,1)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                fill: ['rgba(147,147,147,1)', [0, [['rgba(63,71,15,1.00)', 0], ['rgba(218,252,0,1.00)', 100]]]]
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'pauseBtnCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['18px', '19px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle4Copy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['8px', '7px', '2px', '12px', 'auto', 'auto'],
                                fill: ['rgba(142,142,142,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle4Copy4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['14px', '7px', '2px', '12px', 'auto', 'auto'],
                                fill: ['rgba(142,142,142,1.00)']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'playBtnCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['46px', '19px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text3Copy3',
                                text: '&gt;',
                                align: 'center',
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'playReverseBtnCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['74px', '19px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                type: 'text',
                                id: 'Text3Copy2',
                                text: '&lt;',
                                align: 'center',
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto']
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(142, 142, 142)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4Copy',
                            text: 'SubSymbol',
                            align: 'left',
                            rect: ['18px', '4px', '132px', '10px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '290px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "start": 20000
                    },
                    data: [
                        [
                            "eid29",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${Rectangle3Copy}",
                            '0%',
                            '100%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pauseUnpause_Complex_edgeActions.js");
})("EDGE-38246524");
