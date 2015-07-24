/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'allan, sans-serif': '<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>',
            'lato, sans-serif': '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"UBR.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Header6',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '662px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Header.jpg",'50%','50%','1920px','662px', 'no-repeat']
                        },
                        {
                            id: 'buttonGroup',
                            type: 'rect',
                            rect: ['701px', '435px', '517px', '150px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [4,"rgb(255, 255, 255)","none"],
                            c: [
                            {
                                id: 'btnDoors',
                                symbolName: 'headerButton',
                                type: 'rect',
                                rect: ['342px', '12px', '126', '126', 'auto', 'auto']
                            },
                            {
                                id: 'btnPeople',
                                symbolName: 'headerButton',
                                type: 'rect',
                                rect: ['50px', '12px', '126', '126', 'auto', 'auto']
                            },
                            {
                                id: 'btnArt',
                                symbolName: 'headerButton',
                                type: 'rect',
                                rect: ['196px', '12px', '126', '126', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'sectionArtBackground',
                            type: 'image',
                            rect: ['0px', '662px', '100%', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BackgroundArt.jpg",'50%','26.1%','1920px','926.89657451923px', 'no-repeat']
                        },
                        {
                            id: 'sectionArtBackgroundCopy',
                            type: 'image',
                            rect: ['0px', '2062px', '100%', '700px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BackgroundDoors.jpg",'50%','26.1%','1920px','926.89657451923px', 'no-repeat']
                        },
                        {
                            id: 'sectionPoepleBackground',
                            type: 'rect',
                            rect: ['0px', '1362px', '100%', '700px', 'auto', 'auto'],
                            fill: ["rgba(39,41,45,1.00)"],
                            stroke: [4,"rgb(255, 255, 255)","none"]
                        },
                        {
                            id: 'contentGroup',
                            type: 'rect',
                            rect: ['480px', '662px', '960px', '2400px', 'auto', 'auto'],
                            fill: ["rgba(246,246,246,0.00)"],
                            stroke: [4,"rgb(255, 255, 255)","none"],
                            c: [
                            {
                                id: 'SectionArt',
                                symbolName: 'SectionArt',
                                type: 'rect',
                                rect: ['0', '700px', '960', '700', 'auto', 'auto']
                            },
                            {
                                id: 'SectionPeople',
                                symbolName: 'SectionPeople',
                                type: 'rect',
                                rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'SectionDoors',
                                symbolName: 'SectionDoors',
                                type: 'rect',
                                rect: ['0px', '1400px', '960', '700', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '2762px', 'auto', 'auto'],
                            sizeRange: ['','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SectionArt}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid46",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${SectionDoors}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${btnArt}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${btnDoors}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${SectionDoors}",
                            '1400px',
                            '1400px'
                        ],
                        [
                            "eid32",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${btnDoors}",
                            '342px',
                            '342px'
                        ]
                    ]
                }
            },
            "headerButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '126px', '126px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'button',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '118px', '118px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(255,0,0,0.39)']
                            },
                            {
                                type: 'text',
                                rect: ['0px', '48px', '100%', '30px', 'auto', 'auto'],
                                id: 'label',
                                text: '#label',
                                align: 'center',
                                font: ['allan, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '126px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "background-color",
                            0,
                            250,
                            "easeInOutQuad",
                            "${Ellipse}",
                            'rgba(0,0,0,0.5216)',
                            'rgba(255,0,0,0.39)'
                        ]
                    ]
                }
            },
            "SectionPeople": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '960px', '700px', 'auto', 'auto'],
                            id: 'sectionPeopleCopy2',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,246,246,0.00)'],
                            c: [
                            {
                                id: 'Sun',
                                type: 'image',
                                rect: ['-27px', '65px', '100px', '83px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Sun.png', '0px', '0px']
                            },
                            {
                                id: 'HeaderPeople',
                                type: 'image',
                                rect: ['520px', '148px', '204px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/HeaderPeople.png', '0px', '0px']
                            },
                            {
                                rect: ['520px', '316px', '387px', '262px', 'auto', 'auto'],
                                font: ['lato, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '300', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                                id: 'Text2Copy',
                                text: 'From an architecturally prominent downtown to the surf and sand of Venice Beach, Los Angeles is vastly diverse and culturally rich. Life in the City of Angels is like nowhere else.<br><br>As a true melting pot of cultures Los Angeles is home to people from more than 140 countries speaking 224 different identified languages.',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['520px', '211px', '387px', '61px', 'auto', 'auto'],
                                font: ['lato, sans-serif', [20, 'px'], 'rgba(0,0,0,1.00)', '900', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                                id: 'Text2Copy2',
                                text: 'The city of contrasts: The hip &amp; weird, the busy &amp; relaxed, the famous &amp; homeless.',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                id: 'LinePeople',
                                type: 'image',
                                rect: ['520px', '202px', '254px', '6px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/LinePeople.png', '0px', '0px']
                            },
                            {
                                id: 'BadgePeople',
                                type: 'image',
                                rect: ['853px', '504px', '97px', '97px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/BadgePeople.png', '0px', '0px']
                            }]
                        },
                        {
                            id: 'RotatorPeople2',
                            symbolName: 'RotatorPeople',
                            rect: ['20px', '102px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '960px', '700px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "RotatorPeople": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '440px', '440px', 'auto', 'auto'],
                            id: 'base',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'mask',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            rect: ['20px', '20px', '400px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(193,221,244,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '2000px', '400px', 'auto', 'auto'],
                                type: 'rect',
                                id: 'scroller',
                                stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                fill: ['rgba(193,221,244,1.00)'],
                                c: [
                                {
                                    type: 'image',
                                    id: 'item5',
                                    rect: ['1600px', '0px', '400px', '400px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/PeopleAtCafe.jpg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'item4',
                                    rect: ['1200px', '0px', '400px', '400px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/ChillingAtTheBeach.jpg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'item3',
                                    rect: ['800px', '0px', '400px', '400px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/PeopleRow.jpg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'item2',
                                    rect: ['400px', '0px', '400px', '400px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/VeniceAleHouse.jpg', '0px', '0px']
                                },
                                {
                                    type: 'image',
                                    id: 'item1',
                                    rect: ['0px', '0px', '400px', '400px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/BikeSurfer.jpg', '0px', '0px']
                                }]
                            }]
                        },
                        {
                            rect: ['92px', '463px', '2px', '50px', 'auto', 'auto'],
                            id: 'redShadowCopy',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,7,7,1.00)']
                        },
                        {
                            rect: ['92px', '511px', '249px', '2px', 'auto', 'auto'],
                            id: 'redShadow',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,7,7,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'btn1',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            cursor: 'pointer',
                            rect: ['95px', '460px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '7px', '50px', '28px', 'auto', 'auto'],
                                id: 'Text3',
                                text: '1',
                                align: 'center',
                                font: ['lato, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '300', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'btn2',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            cursor: 'pointer',
                            rect: ['145px', '460px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.90)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '7px', '50px', '28px', 'auto', 'auto'],
                                id: 'Text3Copy',
                                text: '2',
                                align: 'center',
                                font: ['lato, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '300', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'btn3',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            cursor: 'pointer',
                            rect: ['195px', '460px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.80)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '7px', '50px', '28px', 'auto', 'auto'],
                                id: 'Text3Copy2',
                                text: '3',
                                align: 'center',
                                font: ['lato, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '300', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'btn4',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            cursor: 'pointer',
                            rect: ['245px', '460px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.70)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '7px', '50px', '28px', 'auto', 'auto'],
                                id: 'Text3Copy3',
                                text: '4',
                                align: 'center',
                                font: ['lato, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '300', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'btn5',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            cursor: 'pointer',
                            rect: ['295px', '460px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.60)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '7px', '50px', '28px', 'auto', 'auto'],
                                id: 'Text3Copy4',
                                text: '5',
                                align: 'center',
                                font: ['lato, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '300', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '440px', '540px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "SectionDoors": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '960px', '700px', 'auto', 'auto'],
                            id: 'base',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['22px', '600px', '915px', '20px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['22px', '80px', '915px', '20px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['22px', '80px', '20px', '540px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['917px', '80px', '20px', '540px', 'auto', 'auto'],
                            id: 'RectangleCopy3',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['43px', '100px', '875px', '500px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'mask',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)'],
                            c: [
                            {
                                rect: ['0px', '0px', '875px', '500px', 'auto', 'auto'],
                                id: 'scroller',
                                stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,0.52)'],
                                c: [
                                {
                                    id: 'target1',
                                    type: 'image',
                                    rect: ['0px', '0px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door01.jpg', '0px', '0px']
                                },
                                {
                                    id: 'target1Copy',
                                    type: 'image',
                                    rect: ['1050px', '0px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door01.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door01Copy',
                                    type: 'image',
                                    rect: ['700px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door01.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door04',
                                    type: 'image',
                                    rect: ['525px', '250px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door04.jpg', '0px', '0px']
                                },
                                {
                                    id: 'target4',
                                    type: 'image',
                                    rect: ['350px', '0px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door03.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door03Copy',
                                    type: 'image',
                                    rect: ['875px', '750px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door03.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door02',
                                    type: 'image',
                                    rect: ['175px', '250px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door02.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door02Copy2',
                                    type: 'image',
                                    rect: ['350px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door02.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door02Copy',
                                    type: 'image',
                                    rect: ['875px', '250px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door02.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2',
                                    type: 'image',
                                    rect: ['525px', '0px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderClosed.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy6',
                                    type: 'image',
                                    rect: ['175px', '500px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderClosed.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy8',
                                    type: 'image',
                                    rect: ['524px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderClosed.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy5',
                                    type: 'image',
                                    rect: ['875px', '500px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderClosed.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy3',
                                    type: 'image',
                                    rect: ['0px', '250px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderOpen.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy7',
                                    type: 'image',
                                    rect: ['350px', '750px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderOpen.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy4',
                                    type: 'image',
                                    rect: ['700px', '250px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderOpen.jpg', '0px', '0px']
                                },
                                {
                                    id: 'DoorPlaceholder2Copy',
                                    type: 'image',
                                    rect: ['1050px', '750px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/DoorPlaceholderOpen.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door08',
                                    type: 'image',
                                    rect: ['700px', '500px', '176px', '251px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door08.jpg', '0px', '0px']
                                },
                                {
                                    id: 'target3',
                                    type: 'image',
                                    rect: ['175px', '750px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door08.jpg', '0px', '0px']
                                },
                                {
                                    id: 'target2',
                                    type: 'image',
                                    rect: ['350px', '500px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door07.jpg', '0px', '0px']
                                },
                                {
                                    id: 'target2Copy',
                                    type: 'image',
                                    rect: ['1050px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door07.jpg', '0px', '0px']
                                },
                                {
                                    id: 'target5',
                                    type: 'image',
                                    rect: ['0px', '500px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door06.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door06Copy',
                                    type: 'image',
                                    rect: ['1050px', '500px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door06.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door05',
                                    type: 'image',
                                    rect: ['700px', '0px', '176px', '251px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door05.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door05Copy',
                                    type: 'image',
                                    rect: ['525px', '750px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door05.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Door05Copy2',
                                    type: 'image',
                                    rect: ['0px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Door05.jpg', '0px', '0px']
                                },
                                {
                                    rect: ['175px', '0px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '104px', '131px', '58px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'Text',
                                        text: 'Knock, knock.',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['350px', '250px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy',
                                        text: 'What\'s behind that door?',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['875px', '0px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy3',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy3',
                                        text: 'Mi casa es <br>su casa.',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['525px', '500px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy2',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy2',
                                        text: 'Come in and find out.',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['0px', '750px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy4',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy4',
                                        text: 'A man\'s house is his castle.<br>',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['1050px', '250px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy8',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy8',
                                        text: 'A man\'s house is his castle.<br>',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['175px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy6',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy6',
                                        text: 'Knock, knock.',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['875px', '1000px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy7',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy7',
                                        text: 'Mi casa es <br>su casa.',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                },
                                {
                                    rect: ['700px', '750px', '175px', '250px', 'auto', 'auto'],
                                    id: 'Rectangle2Copy5',
                                    stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(46,48,52,1.00)'],
                                    c: [
                                    {
                                        rect: ['21px', '85px', '131px', '77px', 'auto', 'auto'],
                                        font: ['lato, sans-serif', [18, 'px'], 'rgba(195,195,195,1.00)', '300', 'none', '', 'break-word', ''],
                                        id: 'TextCopy5',
                                        text: 'A door to another dimension.',
                                        align: 'center',
                                        type: 'text'
                                    }]
                                }]
                            }]
                        },
                        {
                            rect: ['744px', '620px', '174px', '45px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'btnMore',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(46,48,52,1.00)'],
                            c: [
                            {
                                rect: ['0px', '4px', '100%', '30px', 'auto', 'auto'],
                                align: 'center',
                                font: ['lato, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '300', 'none', '', 'break-word', 'normal'],
                                id: 'Text2',
                                text: 'MORE',
                                textShadow: ['rgba(0,0,0,1.00)', 2, 3, 0],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '960px', '700px']
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
            "SectionArt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '960px', '700px', 'auto', 'auto'],
                            id: 'SectionArt',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,246,246,0.00)']
                        },
                        {
                            rect: ['-480px', '0px', '1920px', '700px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'mask',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(246,246,246,0)'],
                            c: [
                            {
                                rect: ['0px', '0px', '1920px', '700px', 'auto', 'auto'],
                                id: 'scroller',
                                stroke: [4, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(246,246,246,0)'],
                                c: [
                                {
                                    id: 'Art04',
                                    type: 'image',
                                    rect: ['5760px', '0px', '1920px', '700px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Art04.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Art03',
                                    type: 'image',
                                    rect: ['3840px', '0px', '1920px', '700px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Art03.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Art02',
                                    type: 'image',
                                    rect: ['1920px', '0px', '1920px', '700px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Art02.jpg', '0px', '0px']
                                },
                                {
                                    id: 'Art01',
                                    type: 'image',
                                    rect: ['0px', '0px', '1920px', '700px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/Art01.jpg', '50%', '50%', '1920px', '700.46896551724px', 'no-repeat']
                                }]
                            }]
                        },
                        {
                            rect: ['-480px', '0px', '1920px', '700px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'PixelMatrixOverlay',
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(39,41,45,0.00)'],
                            c: [
                            {
                                id: 'PixelMatrixOverlay3',
                                type: 'image',
                                rect: ['0px', '0px', '960px', '250px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/PixelMatrixOverlay.png', '0px', '0px']
                            },
                            {
                                id: 'PixelMatrixOverlay3Copy',
                                type: 'image',
                                rect: ['960px', '0px', '960px', '250px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/PixelMatrixOverlay.png', '0px', '0px']
                            },
                            {
                                id: 'PixelMatrixOverlay3Copy3',
                                type: 'image',
                                rect: ['0px', '250px', '960px', '250px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/PixelMatrixOverlay.png', '0px', '0px']
                            },
                            {
                                id: 'PixelMatrixOverlay3Copy2',
                                type: 'image',
                                rect: ['960px', '250px', '960px', '250px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/PixelMatrixOverlay.png', '0px', '0px']
                            },
                            {
                                id: 'PixelMatrixOverlay3Copy5',
                                type: 'image',
                                rect: ['0px', '500px', '960px', '250px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/PixelMatrixOverlay.png', '0px', '0px']
                            },
                            {
                                id: 'PixelMatrixOverlay3Copy4',
                                type: 'image',
                                rect: ['960px', '500px', '960px', '250px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/PixelMatrixOverlay.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-480px', '0px', '0px', '6px', 'auto', 'auto'],
                            stroke: [4, 'rgb(255, 255, 255)', 'none'],
                            id: 'progress',
                            opacity: '0.8',
                            type: 'rect',
                            fill: ['rgba(246,246,246,0)', [0, [['rgba(46,46,46,1.00)', 0], ['rgba(0,0,0,1.00)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '960px', '700px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
                            "width",
                            2000,
                            4000,
                            "linear",
                            "${progress}",
                            '0px',
                            '1920px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Website_StreetsOfLosAngeles_edgeActions.js");
})("EDGE-287338103");
