/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';
    fonts['source-code-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'chapter1_quiz_bg',
                type: 'image',
                rect: ['90px', '0px','1868px','1340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"chapter1_quiz_bg.jpg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'htmlContainer',
                type: 'rect',
                rect: ['115px', '373px','282px','222px','auto', 'auto'],
                borderRadius: ["20px 20px", "20px 20px", "0px", "0px"],
                fill: ["rgba(255,255,255,0.59)"],
                stroke: [4,"rgba(255,255,255,1.00)","dotted"]
            },
            {
                id: 'cssContainer',
                type: 'rect',
                rect: ['412px', '373px','282px','222px','auto', 'auto'],
                borderRadius: ["20px 20px", "20px 20px", "0px", "0px"],
                fill: ["rgba(255,255,255,0.59)"],
                stroke: [4,"rgba(255,255,255,1.00)","dotted"]
            },
            {
                id: 'jsContainer',
                type: 'rect',
                rect: ['709px', '373px','282px','222px','auto', 'auto'],
                borderRadius: ["20px 20px", "20px 20px", "0px", "0px"],
                fill: ["rgba(255,255,255,0.59)"],
                stroke: [4,"rgba(255,255,255,1.00)","dotted"]
            },
            {
                id: 'item',
                type: 'rect',
                rect: ['210px', '81px','260px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(85,85,85,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "drag drag-js",
                c: [
                {
                    id: 'Text4',
                    type: 'text',
                    rect: ['17px', '11px','243px','31px','auto', 'auto'],
                    text: "$(\"img\").fadeIn();",
                    align: "left",
                    font: ['source-code-pro, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'itemCopy2',
                type: 'rect',
                rect: ['579px', '136px','260px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(85,85,85,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "drag drag-js",
                c: [
                {
                    id: 'Text4Copy2',
                    type: 'text',
                    rect: ['17px', '11px','243px','31px','auto', 'auto'],
                    text: ".click(btn_click);",
                    align: "left",
                    font: ['source-code-pro, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'itemCopy5',
                type: 'rect',
                rect: ['689px', '248px','260px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(85,85,85,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "drag drag-html",
                c: [
                {
                    id: 'Text4Copy5',
                    type: 'text',
                    rect: ['17px', '11px','243px','31px','auto', 'auto'],
                    text: "DIV",
                    align: "left",
                    font: ['source-code-pro, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'itemCopy6',
                type: 'rect',
                rect: ['163px', '178px','260px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(85,85,85,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "drag drag-html",
                c: [
                {
                    id: 'Text4Copy6',
                    type: 'text',
                    rect: ['17px', '11px','243px','31px','auto', 'auto'],
                    text: "IMG",
                    align: "left",
                    font: ['source-code-pro, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'itemCopy',
                type: 'rect',
                rect: ['395px', '262px','260px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(85,85,85,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "drag drag-css",
                c: [
                {
                    id: 'Text4Copy',
                    type: 'text',
                    rect: ['17px', '11px','243px','31px','auto', 'auto'],
                    text: "background-color",
                    align: "left",
                    font: ['source-code-pro, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'itemCopy4',
                type: 'rect',
                rect: ['493px', '56px','260px','50px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                fill: ["rgba(85,85,85,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                userClass: "drag drag-css",
                c: [
                {
                    id: 'Text4Copy4',
                    type: 'text',
                    rect: ['17px', '11px','243px','31px','auto', 'auto'],
                    text: "border",
                    align: "left",
                    font: ['source-code-pro, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['115px', '622px','290px','40px','auto', 'auto'],
                text: "HTML",
                align: "center",
                font: ['source-sans-pro, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['412px', '622px','290px','40px','auto', 'auto'],
                text: "CSS",
                align: "center",
                font: ['source-sans-pro, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['709px', '622px','290px','40px','auto', 'auto'],
                text: "JS",
                align: "center",
                font: ['source-sans-pro, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'done',
                display: 'none',
                type: 'rect',
                rect: ['90px', '0px','934px','670px','auto', 'auto'],
                fill: ["rgba(99,99,99,0.75)"],
                stroke: [4,"rgb(98, 173, 53)","none"],
                c: [
                {
                    id: 'base',
                    type: 'rect',
                    rect: ['167px', '62px','592px','492px','auto', 'auto'],
                    fill: ["rgba(155,219,157,1.00)"],
                    stroke: [4,"rgba(98,173,53,1.00)","solid"],
                    c: [
                    {
                        id: 'Text',
                        type: 'text',
                        rect: ['8px', '39px','575px','96px','auto', 'auto'],
                        text: "You did it!",
                        align: "center",
                        font: ['Arial, Helvetica, sans-serif', 64, "rgba(255,255,255,1.00)", "normal", "none", ""]
                    },
                    {
                        id: 'nextButton',
                        type: 'rect',
                        rect: ['84px', '387px','415px','69px','auto', 'auto'],
                        cursor: ['pointer'],
                        borderRadius: ["10px", "10px", "10px", "10px"],
                        fill: ["rgba(80,80,80,1.00)"],
                        stroke: [4,"rgba(255,255,255,1.00)","solid"],
                        c: [
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['5px', '17px','404px','48px','auto', 'auto'],
                            text: "next chapter",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', 32, "rgba(255,255,255,1)", "400", "none", "normal"]
                        }]
                    }]
                }]
            },
            {
                id: 'challenge',
                display: 'block',
                type: 'rect',
                rect: ['90px', '0px','926px','662px','auto', 'auto'],
                fill: ["rgba(155,219,157,0.00)"],
                stroke: [0,"rgb(98, 173, 53)","none"],
                c: [
                {
                    id: 'challenge_bg3',
                    type: 'image',
                    rect: ['-467px', '-335px','1868px','1340px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"challenge_bg.jpg",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Text5',
                    type: 'text',
                    rect: ['251px', '258px','401px','176px','auto', 'auto'],
                    text: "Assign the elements per drag and drop to the corresponding language.",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 32, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'Text5Copy',
                    type: 'text',
                    rect: ['251px', '213px','401px','40px','auto', 'auto'],
                    text: "Challenge:",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 32, "rgba(25,178,216,1.00)", "600", "none", "normal"]
                },
                {
                    id: 'quote',
                    type: 'image',
                    rect: ['235px', '466px','63px','53px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"quote.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Text6',
                    type: 'text',
                    rect: ['296px', '480px','356px','132px','auto', 'auto'],
                    text: "In order to use the browser as a design surface you need to be able to recognize HTML, CSS and JavaScript.",
                    align: "left",
                    font: ['source-sans-pro, sans-serif', 18, "rgba(0,0,0,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'arrowButton',
                    type: 'image',
                    rect: ['784px', '231px','200px','200px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"ArrowButton.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_itemCopy2}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '579px'],
                ["style", "top", '136px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text4Copy6}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '20px'],
                ["style", "height", '31px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "left", '17px'],
                ["style", "width", '243px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '622px'],
                ["style", "height", '40px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '412px'],
                ["style", "width", '290px']
            ],
            "${_item}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '210px'],
                ["style", "top", '81px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_Text3}": [
                ["style", "top", '17px'],
                ["style", "left", '5px'],
                ["style", "font-size", '32px']
            ],
            "${_done}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(99,99,99,0.75)'],
                ["style", "height", '670px'],
                ["style", "display", 'none'],
                ["style", "border-style", 'none'],
                ["style", "opacity", '0'],
                ["style", "width", '934px']
            ],
            "${_quote}": [
                ["style", "top", '466px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '235px']
            ],
            "${_Text5}": [
                ["style", "top", '258px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '300'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '251px'],
                ["style", "font-size", '32px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '622px'],
                ["style", "height", '40px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '709px'],
                ["style", "width", '290px']
            ],
            "${_Text4Copy5}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "width", '243px'],
                ["style", "height", '31px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "left", '17px'],
                ["style", "font-size", '20px']
            ],
            "${_itemCopy}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '262px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "left", '395px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_itemCopy4}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "top", '56px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '493px']
            ],
            "${_base}": [
                ["color", "background-color", 'rgba(155,219,157,1.00)'],
                ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-1017px'],
                ["style", "width", '592px'],
                ["style", "top", '71px'],
                ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '492px'],
                ["color", "border-color", 'rgba(98,173,53,1.00)'],
                ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_itemCopy6}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '163px'],
                ["style", "top", '178px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "cursor", 'pointer'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text4Copy}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "width", '243px'],
                ["style", "height", '31px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "left", '17px'],
                ["style", "font-size", '20px']
            ],
            "${_challenge}": [
                ["color", "background-color", 'rgba(155,219,157,0.00)'],
                ["style", "display", 'block'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "left", '90px']
            ],
            "${_cssContainer}": [
                ["style", "top", '373px'],
                ["color", "background-color", 'rgba(255,255,255,0.59)'],
                ["style", "border-width", '4px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '222px'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '412px'],
                ["style", "width", '282px']
            ],
            "${_Text2}": [
                ["style", "top", '622px'],
                ["style", "height", '40px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "left", '115px'],
                ["style", "width", '290px']
            ],
            "${_Text4}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "width", '243px'],
                ["style", "height", '31px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "left", '17px'],
                ["style", "font-size", '20px']
            ],
            "${_Text6}": [
                ["style", "top", '480px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '296px'],
                ["style", "font-size", '18px']
            ],
            "${_Text5Copy}": [
                ["style", "top", '213px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(25,178,216,1.00)'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "height", '40px'],
                ["style", "font-weight", '600'],
                ["style", "left", '251px'],
                ["style", "font-size", '32px']
            ],
            "${_htmlContainer}": [
                ["style", "top", '373px'],
                ["color", "background-color", 'rgba(255,255,255,0.59)'],
                ["style", "border-width", '4px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '222px'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '115px'],
                ["style", "width", '282px']
            ],
            "${_challenge_bg3}": [
                ["style", "top", '-335px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-467px'],
                ["style", "height", '1340px']
            ],
            "${_nextButton}": [
                ["style", "top", '387px'],
                ["color", "background-color", 'rgba(80,80,80,1.00)'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '84px'],
                ["style", "cursor", 'pointer']
            ],
            "${_chapter1_quiz_bg}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '90px'],
                ["style", "height", '1340px']
            ],
            "${_Text}": [
                ["style", "top", '39px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '8px'],
                ["style", "font-size", '64px']
            ],
            "${_itemCopy5}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '689px'],
                ["style", "top", '248px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_Text4Copy4}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '20px'],
                ["style", "height", '31px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "left", '17px'],
                ["style", "width", '243px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '11px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '20px'],
                ["style", "height", '31px'],
                ["style", "font-family", 'source-code-pro, sans-serif'],
                ["style", "left", '17px'],
                ["style", "width", '243px']
            ],
            "${_arrowButton}": [
                ["style", "top", '231px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '784px'],
                ["style", "cursor", 'pointer']
            ],
            "${_jsContainer}": [
                ["style", "top", '373px'],
                ["color", "background-color", 'rgba(255,255,255,0.59)'],
                ["style", "border-width", '4px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '222px'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '709px'],
                ["style", "width", '282px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2735,
            autoPlay: true,
            labels: {
                "challenge": 0,
                "quiz": 1000,
                "done": 2000
            },
            timeline: [
                { id: "eid18", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 929 },
                { id: "eid5", tween: [ "style", "${_base}", "left", '167px', { fromValue: '-1017px'}], position: 2295, duration: 440, easing: "easeOutBack" },
                { id: "eid12", tween: [ "style", "${_done}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_done}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 295 },
                { id: "eid16", tween: [ "style", "${_challenge}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutBack" },
                { id: "eid24", tween: [ "style", "${_Text5Copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 929 },
                { id: "eid22", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 929 },
                { id: "eid20", tween: [ "style", "${_quote}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 929 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-277060419");
