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
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background2',
                            type: 'image',
                            rect: ['0px', '0', '600px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background.jpg",'0px','0px']
                        },
                        {
                            id: 'Lady',
                            type: 'image',
                            rect: ['568px', '94px', '204px', '368px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lady.png",'0px','0px'],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: 'speechBubble',
                            type: 'rect',
                            rect: ['180px', '-171px', '240px', '120px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['164px', '94px', '32px', '32px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                transform: [[],['44']]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['23px', '44px', '193px', '32px', 'auto', 'auto'],
                                text: "Let's get creative!",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
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
                    duration: 1843,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            1000,
                            843,
                            "easeOutBack",
                            "${speechBubble}",
                            '-171px',
                            '32px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1000,
                            843,
                            "easeInExpo",
                            "${speechBubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            819,
                            "easeOutQuint",
                            "${Lady}",
                            '568px',
                            '225px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SpeechBubble_edgeActions.js");
})("EDGE-29485593");
