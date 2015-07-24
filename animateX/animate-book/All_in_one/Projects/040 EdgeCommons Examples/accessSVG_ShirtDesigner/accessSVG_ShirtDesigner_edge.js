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
            js+"jquery-1.7.1.min.js",
            js+"EdgeCommons.js"
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
                            id: 'ABOUT',
                            symbolName: 'ABOUT',
                            type: 'rect',
                            rect: ['0', '0', '600', '400', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'character',
                            type: 'image',
                            rect: ['37', '38', '207', '350', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SVG_Character.svg",'0px','0px']
                        },
                        {
                            id: 'selectedPartTxt',
                            type: 'text',
                            rect: ['264', '207', '312px', '61px', 'auto', 'auto'],
                            text: "selectedPartTxt<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['270', '57', '312px', '98px', 'auto', 'auto'],
                            fill: ["rgba(72,72,72,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['260', '102', '31px', '34px', 'auto', 'auto'],
                            fill: ["rgba(72,72,72,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['288', '72', '279px', '74px', 'auto', 'auto'],
                            text: "Hi! Select my cap, shirt or pants and change the color!",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'EllipseCopy3',
                            type: 'ellipse',
                            rect: ['275', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(44,153,72,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy2',
                            type: 'ellipse',
                            rect: ['349', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(223,126,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['426', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,76,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['506', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(142,43,153,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(191,191,191,1.00)"]
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
            "ABOUT": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'about_bg',
                            rect: [0, 0, '600px', '400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/about_bg.jpg', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'overlay',
                            rect: ['0', 0, '600', '27', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'base',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: [0, 'auto', 600, 389, 'auto', 7],
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                type: 'group',
                                id: 'expand_btn',
                                cursor: 'pointer',
                                rect: ['563', '3', '24', '24', 'auto', 'auto'],
                                c: [
                                {
                                    rect: [0, 0, 24, 24, 'auto', 'auto'],
                                    borderRadius: ['50%', '50%', '50%', '50%'],
                                    id: 'arrow_bg',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'ellipse',
                                    fill: ['rgba(45,45,45,1)']
                                },
                                {
                                    transform: [[0, 0, 0], ['0deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                    id: 'arrow',
                                    type: 'image',
                                    rect: [5, 5, '14px', '14px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/about_arrow.svg', '0px', '0px']
                                }]
                            },
                            {
                                rect: [12, 2, 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [12, 'px'], 'rgba(132,132,132,1.00)', '600', 'none', 'normal', '', 'nowrap'],
                                id: 'title',
                                text: 'SVG DEMO',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['12px', -353, '556px', 327, 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [12, ''], 'rgba(132,132,132,1)', '600', 'none', 'normal', '', ''],
                                id: 'infotext',
                                text: 'edgecommons.org<br><br>SVG Example<br><br>Example by Thomas Widjaja<br><br>Visual assets by Jacki Schepers',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${Text2}': {
                            rect: [null, -351, null, 327]
                        },
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 600, 400]
                        }
                    }
                },
                timeline: {
                    duration: 1010,
                    autoPlay: false,
                    data: [
                        [
                            "eid26",
                            "top",
                            1010,
                            0,
                            "linear",
                            "${infotext}",
                            '-353px',
                            '-353px'
                        ],
                        [
                            "eid20",
                            "top",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${overlay}",
                            '0px',
                            '369px'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            0,
                            250,
                            "easeInOutQuad",
                            "${arrow}",
                            '0deg',
                            '180deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("accessSVG_ShirtDesigner_edgeActions.js");
})("EDGE-13181186");
