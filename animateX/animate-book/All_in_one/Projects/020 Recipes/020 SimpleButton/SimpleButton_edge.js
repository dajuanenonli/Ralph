/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
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
                            id: 'customButtonCopy3',
                            symbolName: 'customButton',
                            type: 'rect',
                            rect: ['296', '255', '208', '50', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'customButtonCopy2',
                            symbolName: 'customButton',
                            type: 'rect',
                            rect: ['296', '175', '208', '50', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'customButton',
                            symbolName: 'customButton',
                            type: 'rect',
                            rect: ['296', '95', '208', '50', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(128,128,128,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
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
            "customButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['16px 16px', '0px', '16px 16px', '16px 16px'],
                            id: 'base',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0', '0', '208', '50px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(74,4,181,1.00)', [270, [['rgba(81,44,139,1.00)', 50], ['rgba(44,17,87,1.00)', 53]]]],
                            c: [
                            {
                                rect: ['0', '9', '208', '34px', 'auto', 'auto'],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(195,195,195,1.00)', '100', 'none', 'normal', 'break-word', ''],
                                id: 'label',
                                text: 'CLICK ME',
                                textShadow: ['rgba(0,0,0,1.00)', 2, 2, 3],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '208', '50']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "out": 0,
                        "over": 250,
                        "down": 1000
                    },
                    data: [
                        [
                            "eid40",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${base}",
                            '3px',
                            '12px'
                        ],
                        [
                            "eid25",
                            "boxShadow.blur",
                            1000,
                            0,
                            "linear",
                            "${base}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid39",
                            "background-image",
                            0,
                            250,
                            "linear",
                            "${base}",
                            [270,[['rgba(81,44,139,1.00)',50],['rgba(44,17,87,1.00)',53]]],
                            [270,[['rgba(105,42,208,1.00)',49],['rgba(92,38,180,1.00)',51]]]
                        ],
                        [
                            "eid26",
                            "background-image",
                            1000,
                            0,
                            "linear",
                            "${base}",
                            [270,[['rgba(81,44,139,1.00)',50],['rgba(44,17,87,1.00)',53]]],
                            [270,[['rgba(140,140,140,1.00)',0],['rgba(185,185,185,1.00)',51]]]
                        ],
                        [
                            "eid43",
                            "textShadow.color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid42",
                            "textShadow.color",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid41",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${base}",
                            'rgba(0,0,0,0.65)',
                            'rgba(121,31,255,1.00)'
                        ],
                        [
                            "eid38",
                            "color",
                            0,
                            250,
                            "linear",
                            "${label}",
                            'rgba(195,195,195,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid24",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(195,195,195,1.00)',
                            'rgba(0,0,0,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SimpleButton_edgeActions.js");
})("EDGE-543925427");
