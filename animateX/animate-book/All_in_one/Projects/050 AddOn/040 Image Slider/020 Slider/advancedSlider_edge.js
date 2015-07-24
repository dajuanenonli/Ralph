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
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['75px', '23px', '400px', '400px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btn_Next',
                            type: 'ellipse',
                            rect: ['489px', '202px', '46px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(222,222,222,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['12px', '2px', '24px', '39px', 'auto', 'auto'],
                                text: "&gt;",
                                align: "center",
                                font: ['Verdana, Geneva, sans-serif', [32, "px"], "rgba(78,78,78,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'btn_Prev',
                            type: 'ellipse',
                            rect: ['14px', '200px', '46px', '46px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(222,222,222,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['8px', '2px', '24px', '39px', 'auto', 'auto'],
                                text: "&lt;",
                                align: "center",
                                font: ['Verdana, Geneva, sans-serif', [32, "px"], "rgba(78,78,78,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['234px', '433px', '6px', '6px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(238,46,46,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'EllipseCopy8',
                            type: 'ellipse',
                            rect: ['258px', '433px', '6px', '6px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(238,46,46,0.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'EllipseCopy9',
                            type: 'ellipse',
                            rect: ['283px', '433px', '6px', '6px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(238,46,46,0.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'EllipseCopy10',
                            type: 'ellipse',
                            rect: ['307px', '433px', '6px', '6px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(238,46,46,0.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(70,70,70,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            'rgba(238,46,46,0.00)',
                            'rgba(238,46,46,0.00)'
                        ],
                        [
                            "eid28",
                            "background-color",
                            750,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            'rgba(238,46,46,0.00)',
                            'rgba(238,46,46,1.00)'
                        ],
                        [
                            "eid30",
                            "background-color",
                            1250,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            'rgba(238,46,46,1.00)',
                            'rgba(238,46,46,0.00)'
                        ],
                        [
                            "eid32",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(238,46,46,0.00)',
                            'rgba(238,46,46,0.00)'
                        ],
                        [
                            "eid27",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(238,46,46,0.00)',
                            'rgba(238,46,46,1.00)'
                        ],
                        [
                            "eid29",
                            "background-color",
                            750,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'rgba(238,46,46,1.00)',
                            'rgba(238,46,46,0.00)'
                        ],
                        [
                            "eid25",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(238,46,46,1.00)',
                            'rgba(238,46,46,1.00)'
                        ],
                        [
                            "eid26",
                            "background-color",
                            250,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(238,46,46,1.00)',
                            'rgba(238,46,46,0.00)'
                        ],
                        [
                            "eid34",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            'rgba(238,46,46,0.00)',
                            'rgba(238,46,46,0.00)'
                        ],
                        [
                            "eid31",
                            "background-color",
                            1250,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            'rgba(238,46,46,0.00)',
                            'rgba(238,46,46,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("advancedSlider_edgeActions.js");
})("EDGE-205935031");
