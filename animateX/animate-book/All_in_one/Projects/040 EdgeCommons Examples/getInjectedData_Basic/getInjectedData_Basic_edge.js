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
            js+"jquery-2.1.1.min.js",
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
                            id: 'btnAction',
                            type: 'rect',
                            rect: ['233px', '420px', '245px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(255,255,255,1.00)","none"],
                            font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            boxShadow: ["", 0, 0, 12, 0, "rgba(0,0,0,0.16)"],
                            c: [
                            {
                                id: 'label',
                                type: 'text',
                                rect: ['40px', '17px', '79.9%', '29px', 'auto', 'auto'],
                                text: "Load injected data",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", ""]
                            },
                            {
                                id: 'marker',
                                type: 'rect',
                                rect: ['0px', '0px', '20px', '60px', 'auto', 'auto'],
                                borderRadius: ["6px", "0px", "0px", "6px 6px"],
                                fill: ["rgba(222,11,43,1.00)",[244,[['rgba(255,47,152,1.00)',0],['rgba(222,11,43,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'description',
                            type: 'text',
                            rect: ['30px', '70px', '632px', '16px', 'auto', 'auto'],
                            text: "From HTML into Animate composition. Great for dynamic content and CMS integration.",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['30px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Inject data",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['106px', '170px', '500px', '200px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(116,116,116,1.00)",[270,[['rgba(217,68,148,1.00)',0],['rgba(200,0,44,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'iPad_Air_2',
                                type: 'image',
                                rect: ['37px', '21px', '106px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"iPad_Air_2.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'txtMyElement',
                            type: 'text',
                            rect: ['281px', '129px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Banner with injected text (from HTML)",
                            align: "center",
                            userClass: "label-blue",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'txtTitle',
                            type: 'text',
                            rect: ['270px', '221px', '319px', '29px', 'auto', 'auto'],
                            text: "#title",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(133, 136, 151)", "normal", "break-word", "normal"],
                            textShadow: ["rgba(0,0,0,0.65098)", 2, 3, 1]
                        },
                        {
                            id: 'txtMessage',
                            type: 'text',
                            rect: ['270px', '259px', '319px', '61px', 'auto', 'auto'],
                            text: "#message",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(133, 136, 151)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(44,46,49,1.00)"],
                            font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("getInjectedData_Basic_edgeActions.js");
})("EDGE-145692202");
