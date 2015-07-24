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
                            id: 'base',
                            type: 'rect',
                            rect: ['266', '22', '493', '334', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["22px 22px", "22px 22px", "22px 22px", "22px 22px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [10,"rgba(255,255,255,1.00)","solid"],
                            c: [
                            {
                                id: 'map',
                                type: 'rect',
                                rect: ['12', '10', '470', '312', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(236,236,236,1.00)"],
                                stroke: [10,"rgb(255, 255, 255)","none"]
                            }]
                        },
                        {
                            id: 'sushi',
                            type: 'image',
                            rect: ['-51', '265', '297px', '244px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sushi.png",'0px','0px']
                        },
                        {
                            id: 'location',
                            type: 'image',
                            rect: ['22', '265', '86px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"location.png",'0px','0px']
                        },
                        {
                            id: 'logoBase',
                            type: 'rect',
                            rect: ['22', '22', '224', '224', 'auto', 'auto'],
                            borderRadius: ["22px 22px", "22px 22px", "22px 22px", "22px 22px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [10,"rgb(255, 255, 255)","none"]
                        },
                        {
                            id: 'murasaki2',
                            type: 'image',
                            rect: ['51', '41', '166px', '186px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"murasaki.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(217,224,33,1.00)",[270,[['rgba(233,236,173,1.00)',0],['rgba(217,224,33,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${map}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-616982773");
