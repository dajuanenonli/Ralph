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
                            id: 'menu',
                            symbolName: 'NestedMenu',
                            type: 'rect',
                            rect: ['8', '90', '584', '51', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600', '300', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(181,179,167,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "top",
                            0,
                            0,
                            "linear",
                            "${menu}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            0,
                            "linear",
                            "${menu}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid32",
                            "width",
                            0,
                            0,
                            "linear",
                            "${menu}",
                            '584px',
                            '584px'
                        ]
                    ]
                }
            },
            "NestedMenu": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'menuContainer',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '100%', 51, 'auto', 'auto'],
                            fill: ['rgba(50,50,50,1.00)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [11, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', '', 'nowrap'],
                            id: 'infinityInfo',
                            text: 'NestedMenu',
                            type: 'text',
                            rect: [10, 10, 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 400, 51]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("NestedMenu_edgeActions.js");
})("EDGE-196697091");
