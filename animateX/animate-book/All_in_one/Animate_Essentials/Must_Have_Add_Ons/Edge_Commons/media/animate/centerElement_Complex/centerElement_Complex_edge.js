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
                            rect: ['31px', '420px', '200px', '60px', 'auto', 'auto'],
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
                                text: "Center image",
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
                            id: 'btnResize',
                            type: 'rect',
                            rect: ['251px', '420px', '216px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(255,255,255,1.00)","none"],
                            font: ['Arial, Helvetica, sans-serif', null, "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            boxShadow: ["", 0, 0, 12, 0, "rgba(0,0,0,0.16)"],
                            c: [
                            {
                                id: 'labelCopy',
                                type: 'text',
                                rect: ['40px', '17px', '79.9%', '29px', 'auto', 'auto'],
                                text: "Resize container",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", ""]
                            },
                            {
                                id: 'markerCopy',
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
                            text: "Use EC.centerElement(...) to center any element relative it's parent container.",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(133,136,151,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['30px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Centering elements",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "100", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['31px', '115px', '339px', '229px', 'auto', 'auto'],
                            fill: ["rgba(28,28,28,1.00)"],
                            stroke: [0,"rgb(255, 255, 255)","none"],
                            c: [
                            {
                                id: 'myElement',
                                type: 'group',
                                rect: ['217px', '31px', '108', '170', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'iPad_Air_2',
                                    type: 'image',
                                    rect: ['5px', '0px', '97px', '136px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"iPad_Air_2.png",'0px','0px']
                                },
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['0px', '130px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "myElement",
                                    align: "center",
                                    userClass: "label-blue",
                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                                }]
                            }]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['30px', '344px', 'auto', 'auto', 'auto', 'auto'],
                            text: "container",
                            align: "left",
                            userClass: "label-blue",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "100", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("centerElement_Complex_edgeActions.js");
})("EDGE-145692202");
