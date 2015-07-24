/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "4.0.0.1724",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'stack',
                type: 'rect',
                rect: ['0px', '0px','1024px','2010px','auto', 'auto'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'chapter1',
                    type: 'rect',
                    rect: ['0px', '670px','1024px','670px','auto', 'auto'],
                    fill: ["rgba(25,178,216,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'chapter2',
                    type: 'rect',
                    rect: ['0px', '1340px','1024px','670px','auto', 'auto'],
                    fill: ["rgba(25,178,216,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'home',
                    type: 'rect',
                    rect: ['0px', '0px','1024px','670px','auto', 'auto'],
                    fill: ["rgba(102,110,112,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    c: [
                    {
                        id: 'home_bg',
                        type: 'image',
                        rect: ['-377px', '-336px','1868px','1342px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"home_bg.jpg",'0px','0px'],
                        transform: [[],[],[],['0.5','0.5']]
                    },
                    {
                        id: 'chapterButton1',
                        type: 'rect',
                        rect: ['252', '463px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'Rectangle4',
                        type: 'rect',
                        rect: ['624px', '382px','238px','34px','auto', 'auto'],
                        fill: ["rgba(75,75,75,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        c: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['21px', '5px','196px','28px','auto', 'auto'],
                            text: "CHOOSE A CHAPTER",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', 18, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                        }]
                    },
                    {
                        id: 'chapterButton2',
                        type: 'rect',
                        rect: ['252', '463px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'chapterButton3',
                        type: 'rect',
                        rect: ['252', '463px','auto','auto','auto', 'auto']
                    },
                    {
                        id: 'home_badge2',
                        type: 'image',
                        rect: ['537px', '-127px','616px','616px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"home_badge.png",'0px','0px'],
                        transform: [[],[],[],['0.5','0.5']]
                    }]
                }]
            },
            {
                id: 'status',
                type: 'rect',
                rect: ['0px', 'auto','90px','670px','auto', '0px'],
                fill: ["rgba(54,54,54,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'scoreText',
                    type: 'text',
                    rect: ['16px', '601px','60px','49px','auto', 'auto'],
                    text: "000",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 28, "rgba(16,164,192,0.99)", "700", "none", ""]
                },
                {
                    id: 'sidebar_icon',
                    type: 'image',
                    rect: ['-25px', '-23px','140px','140px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"sidebar_icon.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'chapterIcon3',
                    type: 'image',
                    tag: 'img',
                    rect: ['7px', '355px','77px','70px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chapter_open.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'chapterIcon2',
                    type: 'image',
                    tag: 'img',
                    rect: ['7px', '294px','77px','70px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chapter_open.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'chapterIcon1',
                    type: 'image',
                    tag: 'img',
                    rect: ['7px', '232px','77px','70px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"chapter_open.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'score',
                    type: 'image',
                    rect: ['5px', '528px','79px','76px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"score.png",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['25px', '592px','40px','1px','auto', 'auto'],
                    fill: ["rgba(192,192,192,1)"],
                    stroke: [0,"rgb(255, 255, 255)","none"]
                },
                {
                    id: 'Text2',
                    type: 'text',
                    rect: ['5px', '208px','79px','26px','auto', 'auto'],
                    text: "CHAPTER",
                    align: "center",
                    font: ['source-sans-pro, sans-serif', 14, "rgba(180,180,180,1.00)", "300", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'chapterButton2',
                symbolName: 'chapterButton1',
                autoPlay: {

                }
            },
            {
                id: 'chapterButton3',
                symbolName: 'chapterButton1',
                autoPlay: {

                }
            },
            {
                id: 'chapterButton1',
                symbolName: 'chapterButton1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_chapterButton2}": [
                ["style", "top", '493px']
            ],
            "${_home_badge2}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '537px'],
                ["style", "top", '-127px']
            ],
            "${_home}": [
                ["color", "background-color", 'rgba(102,110,112,0.00)'],
                ["style", "height", '670px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2}": [
                ["style", "top", '208px'],
                ["color", "color", 'rgba(180,180,180,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '5px'],
                ["style", "font-size", '14px']
            ],
            "${_chapterButton3}": [
                ["style", "top", '569px']
            ],
            "${_chapterButton1}": [
                ["style", "top", '417px']
            ],
            "${_chapter2}": [
                ["style", "top", '1340px'],
                ["style", "height", '670px'],
                ["color", "background-color", 'rgba(25,178,216,1.00)']
            ],
            "${_Rectangle}": [
                ["style", "top", '597px'],
                ["style", "left", '26px'],
                ["style", "height", '1px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '40px']
            ],
            "${_stack}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '0px'],
                ["style", "height", '2010px']
            ],
            "${_chapterIcon2}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '294px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '7px']
            ],
            "${_chapterIcon3}": [
                ["style", "top", '355px'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '7px'],
                ["transform", "scaleY", '0.5']
            ],
            "${_sidebar_icon}": [
                ["style", "top", '-23px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-25px'],
                ["style", "cursor", 'pointer']
            ],
            "${_scoreText}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(16,164,192,0.99)'],
                ["style", "font-weight", '700'],
                ["style", "left", '16px'],
                ["style", "width", '60px'],
                ["style", "top", '601px'],
                ["style", "text-align", 'center'],
                ["style", "height", '49px'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["style", "font-size", '28px']
            ],
            "${_home_bg}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '-336px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-377px']
            ],
            "${_status}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '0px'],
                ["style", "height", '670px'],
                ["color", "background-color", 'rgba(54,54,54,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ],
            "${_Text}": [
                ["style", "top", '5px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '21px'],
                ["style", "font-size", '18px']
            ],
            "${_score}": [
                ["style", "top", '528px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '5px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(102,110,112,1)'],
                ["style", "min-width", '0px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '1024px']
            ],
            "${_chapter1}": [
                ["style", "height", '670px'],
                ["color", "background-color", 'rgba(25,178,216,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '670px']
            ],
            "${_chapterIcon1}": [
                ["style", "top", '232px'],
                ["style", "left", '7px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_Rectangle4}": [
                ["style", "top", '382px'],
                ["style", "left", '624px'],
                ["color", "background-color", 'rgba(75,75,75,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"chapterButton1": {
    version: "4.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "4.0.0.1724",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(255, 255, 255)', 'none'],
                    rect: ['0px', '0px', '610px', '75px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.85)']
                },
                {
                    font: ['source-sans-pro, sans-serif', 24, 'rgba(0,0,0,1.00)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'label',
                    text: '#label',
                    align: 'left',
                    rect: ['80px', '9px', '507px', '40px', 'auto', 'auto']
                },
                {
                    font: ['source-sans-pro, sans-serif', 24, 'rgba(0,0,0,1.00)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'description',
                    text: '#description',
                    align: 'left',
                    rect: ['80px', '9px', '507px', '40px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'icon',
                    type: 'image',
                    rect: ['-37px', '-37px', '150px', '150px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/chapterIcon1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,0.85)'],
                ["style", "top", '0px'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '610px']
            ],
            "${_label}": [
                ["style", "top", '11px'],
                ["style", "height", '29px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '80px'],
                ["style", "width", '507px']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '610px']
            ],
            "${_icon}": [
                ["style", "top", '-37px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "height", '150px'],
                ["style", "left", '-37px'],
                ["style", "width", '150px']
            ],
            "${_description}": [
                ["style", "top", '40px'],
                ["style", "width", '507px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '29px'],
                ["style", "font-weight", '300'],
                ["style", "left", '80px'],
                ["style", "font-size", '14px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000
            },
            timeline: [
                { id: "eid32", tween: [ "style", "${_description}", "font-size", '14px', { fromValue: '14px'}], position: 1000, duration: 0 },
                { id: "eid20", tween: [ "color", "${_label}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "color", "${_label}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 1000, duration: 0 },
                { id: "eid33", tween: [ "style", "${_label}", "top", '11px', { fromValue: '11px'}], position: 1000, duration: 0 },
                { id: "eid19", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,255,255,0.85)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.85)'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(25,178,216,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.85)'}], position: 1000, duration: 0 },
                { id: "eid31", tween: [ "style", "${_description}", "top", '40px', { fromValue: '40px'}], position: 1000, duration: 0 },
                { id: "eid27", tween: [ "style", "${_label}", "height", '29px', { fromValue: '29px'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "color", "${_description}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "color", "${_description}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 1000, duration: 0 },
                { id: "eid30", tween: [ "style", "${_description}", "height", '29px', { fromValue: '29px'}], position: 1000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-274110266");
