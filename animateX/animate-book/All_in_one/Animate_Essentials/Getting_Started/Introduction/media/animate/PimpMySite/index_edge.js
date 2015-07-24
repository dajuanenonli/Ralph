/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'lato, sans-serif': '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>',
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
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
                            id: 'background_b',
                            type: 'image',
                            rect: ['0', '0', '2048px', '1536px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"background_b.jpg",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5'],['0%','0%']]
                        },
                        {
                            id: 'segmentButton',
                            symbolName: 'segmentButton',
                            type: 'rect',
                            rect: ['760', '284', '200', '120', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'segmentButtonCopy',
                            symbolName: 'segmentButton',
                            type: 'rect',
                            rect: ['760', '421', '200', '120', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'edgeDocksTeaser',
                            symbolName: 'edgeDocksTeaser',
                            type: 'rect',
                            rect: ['70', '284', '300', '300', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        },
                        {
                            id: 'edgeDocksTeaser_1',
                            symbolName: 'edgeDocksTeaser_1',
                            type: 'rect',
                            rect: ['386', '284', '300', '300', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        },
                        {
                            id: 'button',
                            symbolName: 'button',
                            type: 'rect',
                            rect: ['70', '47', '140', '60', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        },
                        {
                            id: 'menu',
                            type: 'rect',
                            rect: ['70', '146', '870', '120px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,0,247,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['629px', '47px', '340px', '52px', 'auto', 'auto'],
                            text: "// PIMP MY SITE //",
                            align: "right",
                            font: ['source-sans-pro, sans-serif', [40, "px"], "rgba(255,48,186,1.00)", "300", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '768', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(220,220,220,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid99",
                            "opacity",
                            1000,
                            250,
                            "easeOutCubic",
                            "${menu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            1000,
                            250,
                            "easeOutCubic",
                            "${edgeDocksTeaser}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1000,
                            250,
                            "easeOutCubic",
                            "${button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            1000,
                            250,
                            "easeOutCubic",
                            "${edgeDocksTeaser_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1000,
                            250,
                            "easeOutCubic",
                            "${segmentButtonCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            1000,
                            250,
                            "easeOutCubic",
                            "${segmentButton}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "segmentButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '120px', 'auto', 'auto'],
                            id: 'base',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['lato, sans-serif', [24, ''], 'rgba(0,58,197,1.00)', '600', 'none', '', '', ''],
                            text: 'Cool Shit',
                            id: 'Text',
                            opacity: '0',
                            rect: ['14px', 44, '174px', 47, 'auto', 'auto'],
                            type: 'text'
                        },
                        {
                            font: ['lato, sans-serif', [16, 'px'], 'rgba(104,104,104,1.00)', '200', 'none', '', '', ''],
                            type: 'text',
                            id: 'TextCopy',
                            opacity: '0',
                            text: 'Nice effects for <br>Edge Animate',
                            rect: [65, 55, '174px', 47, 'auto', 'auto']
                        },
                        {
                            userClass: 'image',
                            type: 'image',
                            id: 'layer1',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            clip: 'rect(0px 200px 20px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            userClass: 'image',
                            type: 'image',
                            id: 'layer2',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            clip: 'rect(20px 200px 40px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            userClass: 'image',
                            type: 'image',
                            id: 'layer3',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            clip: 'rect(40px 200px 60px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            userClass: 'image',
                            type: 'image',
                            id: 'layer4',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            clip: 'rect(60px 200px 80px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            userClass: 'image',
                            type: 'image',
                            id: 'layer5',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            clip: 'rect(80px 200px 100px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            userClass: 'image',
                            type: 'image',
                            id: 'layer6',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            clip: 'rect(100px 200px 120px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', 0, '200px', '120px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,0,247,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 120]
                        }
                    }
                },
                timeline: {
                    duration: 417,
                    autoPlay: false,
                    data: [
                        [
                            "eid25",
                            "left",
                            272,
                            145,
                            "easeInOutCubic",
                            "${TextCopy}",
                            '65px',
                            '15px'
                        ],
                        [
                            "eid1",
                            "left",
                            103,
                            247,
                            "easeInOutQuad",
                            "${layer5}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid13",
                            "top",
                            196,
                            128,
                            "easeInOutQuad",
                            "${Text}",
                            '44px',
                            '14px'
                        ],
                        [
                            "eid48",
                            "color",
                            324,
                            51,
                            "easeInOutQuad",
                            "${Text}",
                            'rgba(0,58,197,1.00)',
                            'rgba(172,0,197,1.00)'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            247,
                            "easeInOutQuad",
                            "${layer1}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid4",
                            "left",
                            26,
                            247,
                            "easeInOutQuad",
                            "${layer2}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid6",
                            "left",
                            77,
                            247,
                            "easeInOutQuad",
                            "${layer4}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid7",
                            "left",
                            128,
                            247,
                            "easeInOutQuad",
                            "${layer6}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            272,
                            145,
                            "easeInOutCubic",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "left",
                            51,
                            247,
                            "easeInOutQuad",
                            "${layer3}",
                            '0px',
                            '200px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            196,
                            128,
                            "easeInOutQuad",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "segmentButton_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '120px', 'auto', 'auto'],
                            id: 'base',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'Dummy2',
                            type: 'image',
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            type: 'image',
                            userClass: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '1', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'layer1',
                            opacity: '1',
                            clip: 'rect(0px 200px 20px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            type: 'image',
                            userClass: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '1', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'layer2',
                            opacity: '1',
                            clip: 'rect(20px 200px 40px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            type: 'image',
                            userClass: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '1', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'layer3',
                            opacity: '1',
                            clip: 'rect(40px 200px 60px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            type: 'image',
                            userClass: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '1', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'layer4',
                            opacity: '1',
                            clip: 'rect(60px 200px 80px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            type: 'image',
                            userClass: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '1', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'layer5',
                            opacity: '1',
                            clip: 'rect(80px 200px 100px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '200px', '120px', 'auto', 'auto'],
                            type: 'image',
                            userClass: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '1', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'layer6',
                            opacity: '1',
                            clip: 'rect(100px 200px 120px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Dummy.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', 0, '200px', '120px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,0,247,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 200, 120]
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid38",
                            "opacity",
                            0,
                            100,
                            "easeInOutQuad",
                            "${layer6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid36",
                            "filter.grayscale",
                            50,
                            0,
                            "easeInOutCubic",
                            "${layer5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            100,
                            "easeInOutQuad",
                            "${layer1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "filter.grayscale",
                            150,
                            0,
                            "easeInOutCubic",
                            "${layer4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid33",
                            "filter.grayscale",
                            0,
                            0,
                            "easeInOutCubic",
                            "${layer6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid34",
                            "filter.grayscale",
                            50,
                            0,
                            "easeInOutCubic",
                            "${layer2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            100,
                            100,
                            "easeInOutQuad",
                            "${layer3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            50,
                            100,
                            "easeInOutQuad",
                            "${layer5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "opacity",
                            150,
                            100,
                            "easeInOutQuad",
                            "${layer4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            50,
                            100,
                            "easeInOutQuad",
                            "${layer2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "filter.grayscale",
                            100,
                            0,
                            "easeInOutCubic",
                            "${layer3}",
                            '1',
                            '1'
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
                                boxShadow: ['', '3px', '3px', '3px', 0, 'rgba(0,0,0,0.00)'],
                                id: 'shadow',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: [0, 0, 300, 300, 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
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
                                opacity: '1',
                                rect: ['0px', 160, '300px', 140, 'auto', 'auto'],
                                overflow: 'hidden',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                            stroke: [3, 'rgba(255,255,255,1.00)', 'solid'],
                            rect: ['0', '0', '134', '54', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(29,29,29,1.00)', [285, [['rgba(5,5,5,1.00)', 0], ['rgba(71,71,71,1.00)', 100]]]],
                            boxShadow: ['', 1, 1, 4, 0, 'rgba(0,0,0,0.65)'],
                            c: [
                            {
                                type: 'text',
                                align: 'left',
                                text: 'label',
                                font: ['source-sans-pro, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', ''],
                                rect: ['6', '33', '128', '23', 'auto', 'auto'],
                                id: 'label',
                                textShadow: ['rgba(0,0,0,1.00)', 1, 1, 2],
                                opacity: '1'
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0', '0', '140', '60', 'auto', 'auto'],
                            opacity: '0',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(183,9,133,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140', '60']
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
            },
            "edgeDocksTeaser_1": {
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
                                boxShadow: ['', '3px', '3px', '3px', 0, 'rgba(0,0,0,0.00)'],
                                id: 'shadow',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: [0, 0, 300, 300, 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: [0, 0, '300px', '300px', 'auto', 'auto'],
                                id: 'shutterstock_122830036',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/shutterstock_122830036.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'content',
                                opacity: '1',
                                rect: ['0px', 160, '300px', 140, 'auto', 'auto'],
                                overflow: 'hidden',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                            "eid83",
                            "top",
                            1500,
                            365,
                            "easeOutCubic",
                            "${shutterstock_122830036}",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-510701962");
