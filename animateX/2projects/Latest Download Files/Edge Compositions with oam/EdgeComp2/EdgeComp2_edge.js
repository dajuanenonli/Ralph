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
                build: "5.0.1.2016",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['391px', '16px', '139px', '110px', 'auto', 'auto'],
                            fill: ["rgba(223,52,196,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(87,121,224,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${Rectangle}",
                            '391px',
                            '19px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("EdgeComp2_edgeActions.js");
})("EDGE-2639752");
