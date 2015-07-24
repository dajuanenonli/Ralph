/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'source-code-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"jquery.ui.touch-punch.min.js"
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
                            id: 'challenge',
                            display: 'block',
                            type: 'rect',
                            rect: ['90', '0px', '926px', '662px', 'auto', 'auto'],
                            fill: ["rgba(155,219,157,0.00)"],
                            stroke: [0,"rgb(98, 173, 53)","none"],
                            c: [
                            {
                                id: 'challenge_bg3',
                                type: 'image',
                                rect: ['-467', '-335', '1868px', '1340', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"challenge_bg.jpg",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'Text5',
                                type: 'text',
                                rect: ['251', '258', '401px', '176px', 'auto', 'auto'],
                                opacity: '0',
                                text: "More challenges to improve your skills.",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text5Copy',
                                type: 'text',
                                rect: ['251', '213', '401px', '40', 'auto', 'auto'],
                                opacity: '0',
                                text: "Comming soon:",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(25,178,216,1.00)", "600", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'quote',
                                type: 'image',
                                rect: ['235', '466', '63px', '53px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"quote.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['296', '480', '356px', '132px', 'auto', 'auto'],
                                opacity: '0',
                                text: "Learn how minimal coding skills can change your creative life.",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'arrowButton',
                                display: 'block',
                                type: 'image',
                                rect: ['784', '231', '200px', '200px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"ArrowButton.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '670', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "challenge": 0
                    },
                    data: [
                        [
                            "eid24",
                            "opacity",
                            0,
                            929,
                            "linear",
                            "${Text5Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            929,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            929,
                            "linear",
                            "${quote}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${challenge}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${arrowButton}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "opacity",
                            0,
                            929,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("chapter2_edgeActions.js");
})("EDGE-277060419");
