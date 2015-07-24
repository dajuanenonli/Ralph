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
            js+"jquery-2.0.3.min.js",
            "libs/EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'stack',
                            type: 'rect',
                            rect: ['0', '0', '1024px', '2010', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'chapter1',
                                type: 'rect',
                                rect: ['0', '670', '1024px', '670', 'auto', 'auto'],
                                fill: ["rgba(25,178,216,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'chapter2',
                                type: 'rect',
                                rect: ['0px', '1340', '1024px', '670', 'auto', 'auto'],
                                fill: ["rgba(25,178,216,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'home',
                                type: 'rect',
                                rect: ['0', '0', '1024px', '670', 'auto', 'auto'],
                                fill: ["rgba(102,110,112,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'home_bg',
                                    type: 'image',
                                    rect: ['-377', '-336', '1868px', '1342px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"home_bg.jpg",'0px','0px'],
                                    transform: [[],[],[],['0.5','0.5']]
                                },
                                {
                                    id: 'chapterButton1',
                                    symbolName: 'chapterButton1',
                                    type: 'rect',
                                    rect: ['252', '417', '610', '75', 'auto', 'auto']
                                },
                                {
                                    id: 'Rectangle4',
                                    type: 'rect',
                                    rect: ['624', '382', '238px', '34px', 'auto', 'auto'],
                                    fill: ["rgba(75,75,75,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    c: [
                                    {
                                        id: 'Text',
                                        type: 'text',
                                        rect: ['21', '5', '196px', '28px', 'auto', 'auto'],
                                        text: "CHOOSE A CHAPTER",
                                        align: "center",
                                        font: ['source-sans-pro, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""]
                                    }]
                                },
                                {
                                    id: 'chapterButton2',
                                    symbolName: 'chapterButton1',
                                    type: 'rect',
                                    rect: ['252', '493', '610', '75', 'auto', 'auto']
                                },
                                {
                                    id: 'chapterButton3',
                                    symbolName: 'chapterButton1',
                                    type: 'rect',
                                    rect: ['252', '569', '610', '75', 'auto', 'auto']
                                },
                                {
                                    id: 'home_badge2',
                                    type: 'image',
                                    rect: ['537', '-127', '616px', '616px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"home_badge.png",'0px','0px'],
                                    transform: [[],[],[],['0.5','0.5']]
                                }]
                            }]
                        },
                        {
                            id: 'status',
                            type: 'rect',
                            rect: ['0', 'auto', '90', '670', 'auto', '0'],
                            fill: ["rgba(54,54,54,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'scoreText',
                                type: 'text',
                                rect: ['16', '601', '60', '49', 'auto', 'auto'],
                                text: "000",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(16,164,192,0.99)", "700", "none", "", "break-word", ""],
                                textStyle: ["1px", "", "", ""]
                            },
                            {
                                id: 'sidebar_icon',
                                type: 'image',
                                rect: ['-25', '-23', '140px', '140px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"sidebar_icon.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'chapterIcon3',
                                type: 'image',
                                tag: 'img',
                                rect: ['7', '355', '77px', '70px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chapter_open.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'chapterIcon2',
                                type: 'image',
                                tag: 'img',
                                rect: ['7', '294', '77px', '70px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chapter_open.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'chapterIcon1',
                                type: 'image',
                                tag: 'img',
                                rect: ['7', '232', '77px', '70px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"chapter_open.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'score',
                                type: 'image',
                                rect: ['5', '528', '79px', '76px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"score.png",'0px','0px'],
                                transform: [[],[],[],['0.5','0.5']]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['26', '597', '40', '1', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgb(255, 255, 255)","none"]
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['5', '208', '79px', '26px', 'auto', 'auto'],
                                text: "CHAPTER",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [14, "px"], "rgba(180,180,180,1.00)", "300", "none", "normal", "break-word", ""]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '670', 'auto', 'auto'],
                            sizeRange: ['0px','undefined','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(102,110,112,1)"]
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
            "chapterButton1": {
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
                            id: 'Rectangle2',
                            stroke: ['0px', 'rgb(255, 255, 255)', 'none'],
                            rect: [0, 0, 610, '75px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.85)']
                        },
                        {
                            rect: [80, 11, 507, 29, 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1.00)', '500', 'none', 'normal', '', ''],
                            id: 'label',
                            text: '#label',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [80, 40, 507, 29, 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '300', 'none', 'normal', '', ''],
                            id: 'description',
                            text: '#description',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [-37, -37, 150, 150, 'auto', 'auto'],
                            id: 'icon',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chapterIcon1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 610, 75]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "over": 1000
                    },
                    data: [
                        [
                            "eid32",
                            "font-size",
                            1000,
                            0,
                            "linear",
                            "${description}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid31",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${description}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid33",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid19",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(255,255,255,0.85)',
                            'rgba(255,255,255,0.85)'
                        ],
                        [
                            "eid21",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(255,255,255,0.85)',
                            'rgba(25,178,216,1.00)'
                        ],
                        [
                            "eid20",
                            "color",
                            0,
                            0,
                            "linear",
                            "${label}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid22",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            'rgba(0,0,0,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid27",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${label}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid30",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${description}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid28",
                            "color",
                            0,
                            0,
                            "linear",
                            "${description}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid29",
                            "color",
                            1000,
                            0,
                            "linear",
                            "${description}",
                            'rgba(0,0,0,1.00)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-274110266");
