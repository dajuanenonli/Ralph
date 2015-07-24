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
            js+"EdgeCommons.Core.js"
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
                            id: 'content',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '2000px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '938px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(228,228,228,1.00)',0],['rgba(247,247,247,1.00)',100]]]]
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
            "layout1200": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Header_Background',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '938px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Header_Background.jpg', '0px', '0px']
                        },
                        {
                            rect: ['360px', '0px', '1200px', '1277px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'content',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'Header_BubbleCenter',
                            symbolName: 'Header_BubbleCenter',
                            rect: ['1938px', '568px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Header_BubbleLeft',
                            symbolName: 'Header_BubbleLeft',
                            rect: ['1938px', '568px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Header_BubbleRight',
                            symbolName: 'Header_BubbleRight',
                            rect: ['1938px', '568px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Title',
                            type: 'image',
                            rect: ['400px', '66px', '750px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Title.png', '0px', '0px']
                        },
                        {
                            id: 'Subtitle',
                            type: 'image',
                            rect: ['400px', '208px', '500px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Subtitle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '938px']
                        }
                    }
                },
                timeline: {
                    duration: 14500,
                    autoPlay: true,
                    data: [
                        [
                            "eid130",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${Header_BubbleCenter}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid117",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Title}",
                            '-750px',
                            '400px'
                        ],
                        [
                            "eid131",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${Header_BubbleRight}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid132",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${Header_BubbleLeft}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid134",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${Header_BubbleLeft}",
                            '1938px',
                            '482px'
                        ],
                        [
                            "eid116",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Subtitle}",
                            '-500px',
                            '400px'
                        ],
                        [
                            "eid138",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${Header_BubbleRight}",
                            '1938px',
                            '1168px'
                        ],
                        [
                            "eid136",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${Header_BubbleCenter}",
                            '1938px',
                            '824px'
                        ],
                            [ "eid129", "trigger", 4500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleRight}', [] ] ],
                            [ "eid139", "trigger", 6500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleLeft}', [] ] ],
                            [ "eid140", "trigger", 8500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleCenter}', [] ] ]
                    ]
                }
            },
            "Header_BubbleRight": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['0px', '256px', '300px', '94px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/shadow.png', '0px', '0px']
                        },
                        {
                            id: 'Header_Bubble_Right2',
                            type: 'image',
                            rect: ['0px', '-30px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Header_Bubble_Right.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '330px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Header_Bubble_Right2}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid101",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${Header_Bubble_Right2}",
                            '-30px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${shadow}",
                            '256px',
                            '266px'
                        ],
                        [
                            "eid91",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${shadow}",
                            '266px',
                            '256px'
                        ]
                    ]
                }
            },
            "Header_BubbleCenter": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['0px', '256px', '300px', '94px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/shadow.png', '0px', '0px']
                        },
                        {
                            id: 'Header_Bubble_Right2',
                            type: 'image',
                            rect: ['0px', '-30px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Header_Bubble_Center.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '330px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Header_Bubble_Right2}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid101",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${Header_Bubble_Right2}",
                            '-30px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${shadow}",
                            '256px',
                            '266px'
                        ],
                        [
                            "eid91",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${shadow}",
                            '266px',
                            '256px'
                        ]
                    ]
                }
            },
            "Header_BubbleLeft": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['0px', '256px', '300px', '94px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/shadow.png', '0px', '0px']
                        },
                        {
                            id: 'Header_Bubble_Right2',
                            type: 'image',
                            rect: ['0px', '-30px', '300px', '300px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Header_Bubble_Left.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '330px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Header_Bubble_Right2}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid101",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${Header_Bubble_Right2}",
                            '-30px',
                            '0px'
                        ],
                        [
                            "eid103",
                            "top",
                            0,
                            1000,
                            "easeOutQuart",
                            "${shadow}",
                            '256px',
                            '266px'
                        ],
                        [
                            "eid91",
                            "top",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${shadow}",
                            '266px',
                            '256px'
                        ]
                    ]
                }
            },
            "layout320": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Header_Background',
                            type: 'image',
                            rect: ['458px', '0px', '1004px', '490px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Header_Background.jpg', '0px', '0px']
                        },
                        {
                            rect: ['800px', '0px', '320px', '1277px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'content',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Header_BubbleCenter',
                            symbolName: 'Header_BubbleCenter',
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['725px', '220px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Header_BubbleLeft',
                            symbolName: 'Header_BubbleLeft',
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['810px', '62px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Header_BubbleRight',
                            symbolName: 'Header_BubbleRight',
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['900px', '221px', null, null, 'auto', 'auto']
                        },
                        {
                            id: 'Title',
                            type: 'image',
                            rect: ['800px', '0px', '320px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Title.png', '0px', '0px']
                        },
                        {
                            id: 'Subtitle',
                            type: 'image',
                            rect: ['800px', '61px', '320px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Subtitle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '490px']
                        }
                    }
                },
                timeline: {
                    duration: 13000,
                    autoPlay: true,
                    data: [
                        [
                            "eid117",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Title}",
                            '-750px',
                            '800px'
                        ],
                        [
                            "eid116",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Subtitle}",
                            '-500px',
                            '800px'
                        ],
                            [ "eid129", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleRight}', [] ] ],
                            [ "eid139", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleLeft}', [] ] ],
                            [ "eid140", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleCenter}', [] ] ]
                    ]
                }
            },
            "layout0": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['873px', '56px', '173px', '287px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(198,0,0,1.00)', '700', 'none', '', 'break-word', ''],
                            id: 'Text',
                            text: 'Sorry, your device must be at least 320px wide.<br><br>Try again on a bigger device soon.',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '413px']
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
            "layout768": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Header_Background',
                            type: 'image',
                            rect: ['222px', '0px', '1476px', '721px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Header_Background.jpg', '0px', '0px']
                        },
                        {
                            rect: ['576px', '0px', '768px', '1277px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'content',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Header_BubbleCenter',
                            symbolName: 'Header_BubbleCenter',
                            transform: [[], [], [], ['0.83333', '0.83333']],
                            rect: ['805px', '407px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Header_BubbleLeft',
                            symbolName: 'Header_BubbleLeft',
                            transform: [[], [], [], ['0.83333', '0.83333']],
                            rect: ['557px', '407px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Header_BubbleRight',
                            symbolName: 'Header_BubbleRight',
                            transform: [[], [], [], ['0.83333', '0.83333']],
                            rect: ['1053px', '407px', null, null, 'auto', 'auto']
                        },
                        {
                            id: 'Title',
                            type: 'image',
                            rect: ['576px', '66px', '500px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Title.png', '0px', '0px']
                        },
                        {
                            id: 'Subtitle',
                            type: 'image',
                            rect: ['576px', '161px', '350px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Website-assets/Subtitle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '938px']
                        }
                    }
                },
                timeline: {
                    duration: 14500,
                    autoPlay: true,
                    data: [
                        [
                            "eid167",
                            "width",
                            4070,
                            0,
                            "linear",
                            "${Subtitle}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid138",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${Header_BubbleRight}",
                            '1938px',
                            '1053px'
                        ],
                        [
                            "eid165",
                            "width",
                            4070,
                            0,
                            "linear",
                            "${Title}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid134",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${Header_BubbleLeft}",
                            '1938px',
                            '557px'
                        ],
                        [
                            "eid166",
                            "height",
                            4070,
                            0,
                            "linear",
                            "${Subtitle}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid136",
                            "left",
                            2000,
                            1000,
                            "easeOutBack",
                            "${Header_BubbleCenter}",
                            '1938px',
                            '805px'
                        ],
                        [
                            "eid130",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${Header_BubbleCenter}",
                            '407px',
                            '407px'
                        ],
                        [
                            "eid117",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Title}",
                            '-750px',
                            '576px'
                        ],
                        [
                            "eid168",
                            "top",
                            4070,
                            0,
                            "linear",
                            "${Subtitle}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid164",
                            "height",
                            4070,
                            0,
                            "linear",
                            "${Title}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid116",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Subtitle}",
                            '-500px',
                            '576px'
                        ],
                        [
                            "eid132",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${Header_BubbleLeft}",
                            '407px',
                            '407px'
                        ],
                        [
                            "eid131",
                            "top",
                            2000,
                            0,
                            "easeOutBack",
                            "${Header_BubbleRight}",
                            '407px',
                            '407px'
                        ],
                            [ "eid129", "trigger", 4500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleRight}', [] ] ],
                            [ "eid139", "trigger", 6500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleLeft}', [] ] ],
                            [ "eid140", "trigger", 8500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Header_BubbleCenter}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("AdaptiveHeader_edgeActions.js");
})("EDGE-258767876");
