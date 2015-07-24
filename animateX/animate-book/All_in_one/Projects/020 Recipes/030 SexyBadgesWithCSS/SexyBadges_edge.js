/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'abel, sans-serif': '<script src=\"http://use.edgefonts.net/abel:n4:all.js\"></script>'        },
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
                            id: 'Text',
                            type: 'text',
                            rect: ['54', '53', 'auto', '31', 'auto', 'auto'],
                            text: "Edge Docks",
                            userClass: "color-label",
                            font: ['abel, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['54', '189', 'auto', 'auto', 'auto', 'auto'],
                            text: "Edge Commons",
                            userClass: "color-badge",
                            font: ['abel, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['54', '357', 'auto', 'auto', 'auto', 'auto'],
                            text: "Edge Market",
                            userClass: "badge3d",
                            font: ['abel, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['54', '127', '714', '85px', 'auto', 'auto'],
                            text: "EdgeDocks.com is the primary resource for \"Everything Edge\". You get access to lots of tutorials, free components and the extension library \"Edge Commons\".",
                            align: "left",
                            font: ['abel, sans-serif', [17, "px"], "rgba(102,102,102,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['54', '262', '715', '85px', 'auto', 'auto'],
                            text: "Edge Commons are the dirty little helpers for Adobe Edge Animate. Edge Animate is pretty powerful, but if you need a little more, this is the right extension for you. Feature highlights are Spotlight Overlay, Parallax, Composition Loader, Interactive SVG and much more… Check it out yourself: www.edgecommons.org",
                            align: "left",
                            font: ['abel, sans-serif', [17, "px"], "rgba(102,102,102,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['54', '429', '684px', '51', 'auto', 'auto'],
                            text: "The Edge Market is the place where you get all kinds of cool and free stuff like templates, components and plugins for the Adobe Edge Tools &amp; Services.",
                            align: "left",
                            font: ['abel, sans-serif', [17, "px"], "rgba(102,102,102,1.00)", "normal", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '500', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[137,[['rgba(212,219,236,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SexyBadges_edgeActions.js");
})("EDGE-952470887");
