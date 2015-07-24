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
                            id: 'chapter1_quiz_bg',
                            type: 'image',
                            rect: ['90', '0', '1868px', '1340', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"chapter1_quiz_bg.jpg",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5'],['0%','0%']]
                        },
                        {
                            id: 'htmlContainer',
                            type: 'rect',
                            rect: ['115', '373', '282', '222', 'auto', 'auto'],
                            borderRadius: ["20px 20px", "20px 20px", "0px", "0px"],
                            fill: ["rgba(255,255,255,0.59)"],
                            stroke: [4,"rgba(255,255,255,1.00)","dotted"]
                        },
                        {
                            id: 'cssContainer',
                            type: 'rect',
                            rect: ['412', '373', '282', '222', 'auto', 'auto'],
                            borderRadius: ["20px 20px", "20px 20px", "0px", "0px"],
                            fill: ["rgba(255,255,255,0.59)"],
                            stroke: [4,"rgba(255,255,255,1.00)","dotted"]
                        },
                        {
                            id: 'jsContainer',
                            type: 'rect',
                            rect: ['709', '373', '282', '222', 'auto', 'auto'],
                            borderRadius: ["20px 20px", "20px 20px", "0px", "0px"],
                            fill: ["rgba(255,255,255,0.59)"],
                            stroke: [4,"rgba(255,255,255,1.00)","dotted"]
                        },
                        {
                            id: 'item',
                            type: 'rect',
                            rect: ['210', '81', '260px', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(85,85,85,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drag drag-js",
                            c: [
                            {
                                id: 'Text4',
                                type: 'text',
                                rect: ['17', '11', '243', '31', 'auto', 'auto'],
                                text: "$(\"img\").fadeIn();",
                                align: "left",
                                font: ['source-code-pro, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'itemCopy2',
                            type: 'rect',
                            rect: ['579', '136', '260px', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(85,85,85,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drag drag-js",
                            c: [
                            {
                                id: 'Text4Copy2',
                                type: 'text',
                                rect: ['17', '11', '243', '31', 'auto', 'auto'],
                                text: ".click(btn_click);",
                                align: "left",
                                font: ['source-code-pro, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'itemCopy5',
                            type: 'rect',
                            rect: ['689', '248', '260px', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(85,85,85,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drag drag-html",
                            c: [
                            {
                                id: 'Text4Copy5',
                                type: 'text',
                                rect: ['17', '11', '243', '31', 'auto', 'auto'],
                                text: "DIV",
                                align: "left",
                                font: ['source-code-pro, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'itemCopy6',
                            type: 'rect',
                            rect: ['163', '178', '260px', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(85,85,85,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drag drag-html",
                            c: [
                            {
                                id: 'Text4Copy6',
                                type: 'text',
                                rect: ['17', '11', '243', '31', 'auto', 'auto'],
                                text: "IMG",
                                align: "left",
                                font: ['source-code-pro, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'itemCopy',
                            type: 'rect',
                            rect: ['395', '262', '260px', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(85,85,85,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drag drag-css",
                            c: [
                            {
                                id: 'Text4Copy',
                                type: 'text',
                                rect: ['17', '11', '243', '31', 'auto', 'auto'],
                                text: "background-color",
                                align: "left",
                                font: ['source-code-pro, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'itemCopy4',
                            type: 'rect',
                            rect: ['493', '56', '260px', '50', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(85,85,85,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "drag drag-css",
                            c: [
                            {
                                id: 'Text4Copy4',
                                type: 'text',
                                rect: ['17', '11', '243', '31', 'auto', 'auto'],
                                text: "border",
                                align: "left",
                                font: ['source-code-pro, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['115', '622', '290', '40', 'auto', 'auto'],
                            text: "HTML",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [24, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['412', '622', '290', '40', 'auto', 'auto'],
                            text: "CSS",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [24, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['709', '622', '290', '40', 'auto', 'auto'],
                            text: "JS",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [24, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'done',
                            display: 'none',
                            type: 'rect',
                            rect: ['90px', '0', '934', '670', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(99,99,99,0.75)"],
                            stroke: [4,"rgb(98, 173, 53)","none"],
                            c: [
                            {
                                id: 'base',
                                type: 'rect',
                                rect: ['-1017', '71', '592', '492', 'auto', 'auto'],
                                borderRadius: ["20px 20px", "20px 20px", "20px 20px", "20px 20px"],
                                fill: ["rgba(155,219,157,1.00)"],
                                stroke: [4,"rgba(98,173,53,1.00)","solid"],
                                c: [
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['8', '39', '575px', '96px', 'auto', 'auto'],
                                    text: "You did it!",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [64, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                                },
                                {
                                    id: 'nextButton',
                                    type: 'rect',
                                    rect: ['84', '387', '415px', '69px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(80,80,80,1.00)"],
                                    stroke: [4,"rgba(255,255,255,1.00)","solid"],
                                    c: [
                                    {
                                        id: 'Text3',
                                        type: 'text',
                                        rect: ['5', '17', '404px', '48px', 'auto', 'auto'],
                                        text: "next chapter",
                                        align: "center",
                                        font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                                    }]
                                }]
                            }]
                        },
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
                                text: "Assign the elements per drag and drop to the corresponding language.",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'Text5Copy',
                                type: 'text',
                                rect: ['251', '213', '401px', '40', 'auto', 'auto'],
                                opacity: '0',
                                text: "Challenge:",
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
                                text: "In order to use the browser as a design surface you need to be able to recognize HTML, CSS and JavaScript.",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "300", "none", "normal", "break-word", ""]
                            },
                            {
                                id: 'arrowButton',
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
                    duration: 2735,
                    autoPlay: true,
                    labels: {
                        "challenge": 0,
                        "quiz": 1000,
                        "done": 2000
                    },
                    data: [
                        [
                            "eid18",
                            "opacity",
                            0,
                            929,
                            "linear",
                            "${Text6}",
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
                            "eid12",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${done}",
                            'none',
                            'block'
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
                            "eid5",
                            "left",
                            2295,
                            440,
                            "easeOutBack",
                            "${base}",
                            '-1017px',
                            '167px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            2000,
                            295,
                            "linear",
                            "${done}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("chapter1_edgeActions.js");
})("EDGE-277060419");
