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
                            id: 'Tablet',
                            type: 'image',
                            rect: ['139px', '136px', '271px', '162px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Tablet.png",'0px','0px']
                        },
                        {
                            id: 'Sitemap',
                            type: 'image',
                            rect: ['45px', '62px', '129px', '78px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Sitemap.png",'0px','0px']
                        },
                        {
                            id: 'Pen',
                            type: 'image',
                            rect: ['360px', '276px', '111px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pen.png",'0px','0px']
                        },
                        {
                            id: 'App',
                            type: 'image',
                            rect: ['162px', '96px', '225px', '132px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"App.png",'0px','0px']
                        },
                        {
                            id: 'Content',
                            type: 'image',
                            rect: ['162px', '149px', '225px', '132px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Content.png",'0px','0px']
                        },
                        {
                            id: 'base',
                            type: 'rect',
                            rect: ['423px', '57px', '118px', '39px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(48,48,48,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'arrow',
                                type: 'rect',
                                rect: ['-3px', '7px', '26px', '26px', 'auto', 'auto'],
                                fill: ["rgba(48,48,48,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['10px', '5px', '97px', '26px', 'auto', 'auto'],
                                clip: 'rect(0px 0px 26px 0px)',
                                text: "content",
                                align: "center",
                                font: ['Courier, Courier New, monospace', [22, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'baseCopy',
                            type: 'rect',
                            rect: ['13px', '151px', '118px', '39px', 'auto', 'auto'],
                            fill: ["rgba(48,48,48,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'arrowCopy',
                                type: 'rect',
                                rect: ['95px', '7px', '26px', '26px', 'auto', 'auto'],
                                fill: ["rgba(48,48,48,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['10px', '5px', '97px', '26px', 'auto', 'auto'],
                                clip: 'rect(0px -1px 26px 0px)',
                                text: "wrapper",
                                align: "center",
                                font: ['Courier, Courier New, monospace', [22, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "normal"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(116,194,183,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${baseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            1000,
                            "easeOutCirc",
                            "${Content}",
                            '149px',
                            '30px'
                        ],
                        [
                            "eid12",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${TextCopy}",
                            [0,-1,26,0],
                            [0,97,26,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid17",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${Text}",
                            [0,0,26,0],
                            [0,96,26,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "easeOutCirc",
                            "${App}",
                            '149px',
                            '96px'
                        ],
                        [
                            "eid8",
                            "left",
                            500,
                            500,
                            "easeOutBack",
                            "${baseCopy}",
                            '-150px',
                            '13px'
                        ],
                        [
                            "eid10",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${base}",
                            '585px',
                            '423px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${base}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-273959099");
