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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '300', '700px', '200', 'auto', 'auto'],
                            fill: ["rgba(231,231,231,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['34', '330', 'auto', 'auto', 'auto', 'auto'],
                            text: "Component<br>Library",
                            font: ['source-sans-pro, sans-serif', [68, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", "nowrap"],
                            textStyle: ["", "", "70px", ""]
                        },
                        {
                            id: 'button',
                            symbolName: 'button',
                            type: 'rect',
                            rect: ['280', '40', '140', '60', 'auto', 'auto'],
                            overflow: 'visible'
                        },
                        {
                            id: 'menu',
                            type: 'rect',
                            rect: ['89px', '156px', '524px', '94px', 'auto', 'auto'],
                            fill: ["rgba(248,248,248,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['443', '250', '170', 'auto', 'auto', 'auto'],
                            text: "container: \"menu\"",
                            align: "right",
                            font: ['source-sans-pro, sans-serif', [16, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "left",
                            0,
                            0,
                            "linear",
                            "${button}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            0,
                            "linear",
                            "${button}",
                            '40px',
                            '40px'
                        ]
                    ]
                }
            },
            "button": {
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
                            id: 'btnBase',
                            stroke: ['3px', 'rgba(255,255,255,1.00)', 'solid'],
                            rect: [0, 0, 134, 54, 'auto', 'auto'],
                            overflow: 'hidden',
                            boxShadow: ['', '1px', '1px', '4px', 0, 'rgba(0,0,0,0.65)'],
                            fill: ['rgba(29,29,29,1.00)', [285, [['rgba(5,5,5,1.00)', 0], ['rgba(71,71,71,1.00)', 100]]]],
                            c: [
                            {
                                type: 'text',
                                id: 'label',
                                opacity: '1',
                                rect: [6, 33, 128, 23, 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', '', '', ''],
                                align: 'left',
                                textShadow: ['rgba(0,0,0,1.00)', '1px', '1px', '2px'],
                                text: 'label'
                            }]
                        },
                        {
                            rect: [0, 0, 140, 60, 'auto', 'auto'],
                            opacity: '0',
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(183,9,133,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 140, 60]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "enter": 1000,
                        "leave": 3000
                    },
                    data: [
                        [
                            "eid148",
                            "textShadow.offsetV",
                            1335,
                            0,
                            "easeOutCubic",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid135",
                            "top",
                            1000,
                            134,
                            "linear",
                            "${label}",
                            '33px',
                            '58px'
                        ],
                        [
                            "eid137",
                            "top",
                            1149,
                            186,
                            "easeOutQuart",
                            "${label}",
                            '-48px',
                            '7px'
                        ],
                        [
                            "eid140",
                            "top",
                            3000,
                            163,
                            "linear",
                            "${label}",
                            '7px',
                            '64px'
                        ],
                        [
                            "eid161",
                            "top",
                            3521,
                            0,
                            "easeOutCubic",
                            "${label}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid109",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid103",
                            "width",
                            1149,
                            0,
                            "linear",
                            "${label}",
                            '128px',
                            '190px'
                        ],
                        [
                            "eid122",
                            "width",
                            3521,
                            0,
                            "linear",
                            "${label}",
                            '190px',
                            '128px'
                        ],
                        [
                            "eid151",
                            "boxShadow.offsetH",
                            1418,
                            0,
                            "easeOutCubic",
                            "${btnBase}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid147",
                            "textShadow.offsetH",
                            1335,
                            0,
                            "easeOutCubic",
                            "${label}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid149",
                            "textShadow.blur",
                            1335,
                            0,
                            "easeOutCubic",
                            "${label}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid105",
                            "font-size",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid97",
                            "font-size",
                            1134,
                            0,
                            "linear",
                            "${label}",
                            '14px',
                            '32px'
                        ],
                        [
                            "eid120",
                            "font-size",
                            3521,
                            0,
                            "linear",
                            "${label}",
                            '32px',
                            '14px'
                        ],
                        [
                            "eid155",
                            "border-width",
                            0,
                            0,
                            "easeOutCubic",
                            "${btnBase}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${label}",
                            '1',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            3521,
                            790,
                            "linear",
                            "${label}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "boxShadow.blur",
                            1418,
                            0,
                            "easeOutCubic",
                            "${btnBase}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid85",
                            "height",
                            1000,
                            0,
                            "easeOutElastic",
                            "${hotspot}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid75",
                            "height",
                            0,
                            0,
                            "easeOutElastic",
                            "${btnBase}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid158",
                            "width",
                            0,
                            0,
                            "easeOutCubic",
                            "${btnBase}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid48",
                            "width",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${btnBase}",
                            '134px',
                            '214px'
                        ],
                        [
                            "eid57",
                            "width",
                            3000,
                            3000,
                            "easeOutElastic",
                            "${btnBase}",
                            '214px',
                            '134px'
                        ],
                        [
                            "eid152",
                            "boxShadow.offsetV",
                            1418,
                            0,
                            "easeOutCubic",
                            "${btnBase}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid49",
                            "width",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${hotspot}",
                            '140px',
                            '220px'
                        ],
                        [
                            "eid56",
                            "width",
                            3000,
                            3000,
                            "easeOutElastic",
                            "${hotspot}",
                            '220px',
                            '140px'
                        ],
                        [
                            "eid126",
                            "background-image",
                            1000,
                            149,
                            "linear",
                            "${btnBase}",
                            [285,[['rgba(5,5,5,1.00)',0],['rgba(71,71,71,1.00)',100]]],
                            [126,[['rgba(254,177,177,1.00)',0],['rgba(255,80,80,1.00)',37],['rgba(217,0,0,1.00)',100]]]
                        ],
                        [
                            "eid131",
                            "background-image",
                            3000,
                            109,
                            "linear",
                            "${btnBase}",
                            [126,[['rgba(254,177,177,1.00)',0],['rgba(255,80,80,1.00)',37],['rgba(217,0,0,1.00)',100]]],
                            [285,[['rgba(5,5,5,1.00)',0],['rgba(71,71,71,1.00)',100]]]
                        ],
                        [
                            "eid108",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid102",
                            "height",
                            1149,
                            0,
                            "linear",
                            "${label}",
                            '23px',
                            '46px'
                        ],
                        [
                            "eid119",
                            "height",
                            3521,
                            0,
                            "linear",
                            "${label}",
                            '46px',
                            '23px'
                        ],
                        [
                            "eid34",
                            "background-color",
                            1000,
                            134,
                            "linear",
                            "${btnBase}",
                            'rgba(29,29,29,1.00)',
                            'rgba(236,0,0,1.00)'
                        ],
                        [
                            "eid35",
                            "background-color",
                            3000,
                            109,
                            "linear",
                            "${btnBase}",
                            'rgba(236,0,0,1)',
                            'rgba(29,29,29,1.00)'
                        ],
                        [
                            "eid10",
                            "textShadow.color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("OrganicMenu_edgeActions.js");
})("EDGE-349170812");
