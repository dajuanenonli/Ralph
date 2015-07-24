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
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'table',
                            type: 'rect',
                            rect: ['187px', '256px', '434px', '50px', 'auto', 'auto'],
                            fill: ["rgba(235,138,47,1.00)"],
                            stroke: [8,"rgb(214, 167, 124)","none"],
                            transform: [[],[],['-33']]
                        },
                        {
                            id: 'chalkboard',
                            type: 'rect',
                            rect: ['16px', '15px', '335px', '217px', 'auto', 'auto'],
                            borderRadius: ["8px", "8px", "8px", "8px 8px"],
                            fill: ["rgba(35,31,32,1.00)"],
                            stroke: [8,"rgba(214,167,124,1.00)","solid"]
                        },
                        {
                            id: 'message',
                            type: 'text',
                            rect: ['38px', '36px', '300px', '113px', 'auto', 'auto'],
                            text: "Welcome to our Coffee Shop",
                            align: "center",
                            font: ['amatic-sc, sans-serif', [56, "px"], "rgba(214,167,124,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "56px", ""]
                        },
                        {
                            id: 'texture',
                            type: 'image',
                            rect: ['33px', '26px', '317px', '244px', 'auto', 'auto'],
                            clip: 'rect(0px 317px 125.509765625px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"texture.png",'0px','0px']
                        },
                        {
                            id: 'hand',
                            symbolName: 'hand',
                            type: 'rect',
                            rect: ['335', '-118', '315', '278', 'auto', 'auto']
                        },
                        {
                            id: 'sugarcube_coffee',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            rect: ['425', '210', '29', '29', 'auto', 'auto']
                        },
                        {
                            id: 'sugarcube1',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            rect: ['349px', '237px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-7']]
                        },
                        {
                            id: 'sugarcube2',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            rect: ['335px', '217px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['19']]
                        },
                        {
                            id: 'sugarcube3Copy4',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            rect: ['310px', '212px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['-21']]
                        },
                        {
                            id: 'sugarcube4',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            rect: ['319px', '238px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],['63']]
                        },
                        {
                            id: 'sugarcube5',
                            symbolName: 'sugarcube',
                            type: 'rect',
                            rect: ['296px', '233px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'dish',
                            type: 'image',
                            rect: ['291px', '253px', '93px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dish.svg",'0px','0px']
                        },
                        {
                            id: 'coffee',
                            type: 'image',
                            rect: ['-44px', '-4px', '990px', '500px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"coffee.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'cup_highlight',
                            type: 'image',
                            rect: ['418px', '196px', '91px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cup_highlight.png",'0px','0px']
                        },
                        {
                            id: 'rule',
                            type: 'rect',
                            rect: ['38px', '160px', '300px', '2px', 'auto', 'auto'],
                            fill: ["rgba(214,167,124,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'cup',
                            type: 'image',
                            rect: ['394px', '195px', '131px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cup.svg",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['149px', '174px', '65px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(127,49,30,1.00)",[50,31,true,'farthest-corner',[['rgba(235,138,47,1.00)',0],['rgba(112,50,22,1.00)',100]]]]
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
            "hand": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'arm',
                            type: 'image',
                            rect: ['39px', '0px', '276px', '231px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arm.svg', '0px', '0px']
                        },
                        {
                            rect: ['15px', '157px', '63px', '26px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-11']],
                            id: 'finger1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['2px', '188px', '63px', '26px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-18']],
                            id: 'finger2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['8px', '220px', '63px', '26px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-45']],
                            id: 'finger3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['48px', '209px', '63px', '26px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-78']],
                            id: 'finger4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['62px', '239px', '51px', '26px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-142']],
                            id: 'finger5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['129px', '214px', '34px', '23px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-95']],
                            id: 'finger6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['122px', '235px', '40px', '23px', 'auto', 'auto'],
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            transform: [[], ['-63']],
                            id: 'finger7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '315px', '278px']
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
            "sugarcube": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '3px', '22px', '22px', 'auto', 'auto'],
                            transform: [[], ['-23']],
                            id: 'sugarcube',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '29px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("symbols_edgeActions.js");
})("EDGE-15840723");
