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
                            id: 'About',
                            type: 'rect',
                            rect: ['0px', '328', '700px', '172', 'auto', 'auto'],
                            fill: ["rgba(231,231,231,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['34', '20', 'auto', 'auto', 'auto', 'auto'],
                                text: "Component<br>Library",
                                font: ['source-sans-pro, sans-serif', [68, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", "nowrap"],
                                textStyle: ["", "", "70px", ""]
                            },
                            {
                                id: 'InfoCopy',
                                type: 'text',
                                rect: ['449', '130', '221', '40px', 'auto', 'auto'],
                                text: "by EdgeDocks.com",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'progressive_home_article',
                            symbolName: 'edgeDocksTeaser',
                            type: 'rect',
                            rect: ['200', '12', '300', '300', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(70,70,70,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid54",
                            "left",
                            0,
                            0,
                            "linear",
                            "${progressive_home_article}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            0,
                            "linear",
                            "${progressive_home_article}",
                            '12px',
                            '12px'
                        ]
                    ]
                }
            },
            "edgeDocksTeaser": {
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
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '300px', '300px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ['rgba(221,0,255,1.00)'],
                            c: [
                            {
                                rect: [0, 0, '300px', 300, 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)'],
                                id: 'shadow',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                boxShadow: ['', '3px', '3px', '3px', 0, 'rgba(0,0,0,0.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: [0, 0, 300, 300, 'auto', 'auto'],
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: [0, 0, 300, 300, 'auto', 'auto'],
                                id: 'image',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/teaser_001.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'content',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', 160, '300px', 140, 'auto', 'auto'],
                                overflow: 'hidden',
                                opacity: '1',
                                fill: ['rgba(255,255,255,1)'],
                                c: [
                                {
                                    font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '100', 'none', 'normal', '', ''],
                                    type: 'text',
                                    id: 'Text2',
                                    text: 'Demo Teaser',
                                    align: 'left',
                                    rect: ['20px', 15, '257px', '24px', 'auto', 'auto']
                                },
                                {
                                    font: ['source-sans-pro, sans-serif', [16, 'px'], 'rgba(0,0,0,1.00)', '100', 'none', 'normal', '', ''],
                                    type: 'text',
                                    id: 'Text2Copy',
                                    text: 'This is the legendary teaser component from EdgeDocks.com. If you hover over this component the whole text becomes visible. Great component if space is limited. Works great with CMS. ',
                                    align: 'left',
                                    rect: ['20px', 46, '257px', 151, 'auto', 'auto']
                                }]
                            },
                            {
                                rect: [0, 'auto', '300px', '27px', 'auto', 0],
                                id: 'teaser_text_fader',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/teaser_text_fader.png', '0px', '0px']
                            },
                            {
                                type: 'ellipse',
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'more',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                rect: ['95px', 100, 100, 100, 'auto', 'auto'],
                                opacity: '0',
                                clip: 'rect(0px 100px 50px 0px)',
                                fill: ['rgba(163,205,37,0.90)'],
                                c: [
                                {
                                    font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', '', ''],
                                    type: 'text',
                                    id: 'moreTxt',
                                    text: 'more<br>',
                                    align: 'center',
                                    rect: [21, 17, 58, 25, 'auto', 'auto']
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 300, 300]
                        }
                    }
                },
                timeline: {
                    duration: 2065,
                    autoPlay: false,
                    labels: {
                        "open": 1000
                    },
                    data: [
                        [
                            "eid413",
                            "boxShadow.color",
                            1500,
                            365,
                            "easeOutCubic",
                            "${shadow}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.648438)'
                        ],
                        [
                            "eid409",
                            "height",
                            1500,
                            365,
                            "easeOutCubic",
                            "${shadow}",
                            '300px',
                            '600px'
                        ],
                        [
                            "eid406",
                            "top",
                            1500,
                            365,
                            "easeOutCubic",
                            "${image}",
                            '0px',
                            '-150px'
                        ],
                        [
                            "eid410",
                            "top",
                            1500,
                            365,
                            "easeOutCubic",
                            "${shadow}",
                            '0px',
                            '-150px'
                        ],
                        [
                            "eid446",
                            "bottom",
                            1500,
                            365,
                            "easeOutCubic",
                            "${teaser_text_fader}",
                            '0px',
                            '-150px'
                        ],
                        [
                            "eid423",
                            "opacity",
                            1865,
                            200,
                            "easeOutCubic",
                            "${more}",
                            '0',
                            '1'
                        ],
                        [
                            "eid445",
                            "height",
                            0,
                            0,
                            "linear",
                            "${content}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid404",
                            "height",
                            1500,
                            365,
                            "easeOutCubic",
                            "${content}",
                            '140px',
                            '300px'
                        ],
                        [
                            "eid411",
                            "boxShadow.blur",
                            1500,
                            365,
                            "easeOutCubic",
                            "${shadow}",
                            '3px',
                            '40px'
                        ],
                        [
                            "eid444",
                            "top",
                            0,
                            0,
                            "linear",
                            "${content}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid405",
                            "top",
                            1500,
                            365,
                            "easeOutCubic",
                            "${content}",
                            '160px',
                            '150px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Teaser_edgeActions.js");
})("EDGE-349170812");
