import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "fontWeight": "bold"
    },
    "::selection": {
        "background": "#0076C2",
        "color": "#fff"
    },
    "::-moz-selection": {
        "background": "#0076C2",
        "color": "#fff"
    },
    "reveal h2": {
        "fontSize": 1.5,
        "marginBottomTop": 40,
        "marginBottomRight": 40,
        "marginBottomBottom": 40,
        "marginBottomLeft": 40
    },
    "divhalf": {
        "display": "block",
        "float": "left",
        "width": "45%",
        "paddingLeftTop": "3%",
        "paddingLeftRight": "3%",
        "paddingLeftBottom": "3%",
        "paddingLeftLeft": "3%"
    },
    "break": {
        "clear": "both",
        "float": "none"
    },
    "reveal p": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "reveal pre code": {
        "textAlign": "left",
        "fontSize": 0.65,
        "lineHeight": "115%",
        "fontFamily": "monospace,sans-serif",
        "paddingTopTop": 10,
        "paddingTopRight": 10,
        "paddingTopBottom": 10,
        "paddingTopLeft": 10,
        "paddingBottomTop": 10,
        "paddingBottomRight": 10,
        "paddingBottomBottom": 10,
        "paddingBottomLeft": 10,
        "width": "90%"
    },
    "divtext-left": {
        "textAlign": "left"
    },
    "ultext-left": {
        "textAlign": "left"
    },
    "litext-left": {
        "textAlign": "left"
    },
    "ptext-left": {
        "textAlign": "left"
    },
    "divtext-medium": {
        "fontSize": "85%",
        "lineHeight": "100%"
    },
    "codetext-medium": {
        "fontSize": "85%",
        "lineHeight": "100%"
    },
    "ultext-medium": {
        "fontSize": "85%",
        "lineHeight": "100%"
    },
    "pre codetext-medium": {
        "fontSize": "85%",
        "lineHeight": "100%"
    },
    "ptext-medium": {
        "fontSize": "85%",
        "lineHeight": "100%"
    },
    "divtext-small": {
        "fontSize": "80%"
    },
    "codetext-small": {
        "fontSize": "80%"
    },
    "ultext-small": {
        "fontSize": "80%"
    },
    "pre codetext-small": {
        "fontSize": "80%"
    },
    "ptext-small": {
        "fontSize": "80%"
    },
    "spantext-small": {
        "fontSize": "60%"
    },
    "divtext-big": {
        "fontSize": "120%"
    },
    "codetext-big": {
        "fontSize": "120%"
    },
    "ultext-big": {
        "fontSize": "120%"
    },
    "pre codetext-big": {
        "fontSize": "120%"
    },
    "divtext-bigger": {
        "fontSize": "160%",
        "lineHeight": "100%"
    },
    "codetext-bigger": {
        "fontSize": "160%",
        "lineHeight": "100%"
    },
    "ultext-bigger": {
        "fontSize": "160%",
        "lineHeight": "100%"
    },
    "pre codetext-bigger": {
        "fontSize": "160%",
        "lineHeight": "100%"
    },
    "reveal h1": {
        "textShadow": "none",
        "marginBottomTop": 40,
        "marginBottomRight": 40,
        "marginBottomBottom": 40,
        "marginBottomLeft": 40
    },
    "h1big": {
        "textTransform": "none",
        "fontSize": 2.5,
        "lineHeight": "125%"
    },
    "h1medium": {
        "textTransform": "none",
        "fontSize": 2
    },
    "h1small": {
        "textTransform": "none",
        "fontSize": 1.5
    },
    "h2big": {
        "textTransform": "none",
        "lineHeight": "125%"
    },
    "h2medium": {
        "textTransform": "none",
        "fontSize": 1.75
    },
    "reveal section imgno-border": {
        "border": 0,
        "boxShadow": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "reveal blockquote": {
        "background": "#f9f9f9",
        "borderLeft": "10px solid #ccc",
        "marginTop": 0.5,
        "marginRight": 5,
        "marginBottom": 0.5,
        "marginLeft": 5,
        "paddingTop": 0.5,
        "paddingRight": 5,
        "paddingBottom": 0.5,
        "paddingLeft": 5,
        "fontStyle": "italic",
        "fontFamily": "Georgia, serif",
        "lineHeight": "125%"
    },
    "reveal blockquote p": {
        "display": "inline"
    },
    "footer": {
        "position": "absolute",
        "width": "100%",
        "bottom": 0.5,
        "left": 3,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "black",
        "fontFamily": "\"News Cycle\", Impact, sans-serif",
        "lineHeight": 0.9,
        "letterSpacing": 0.02,
        "textTransform": "none",
        "textShadow": "none",
        "fontSize": 1.5
    },
    "footer stuck": {
        "float": "left",
        "marginLeftTop": 20,
        "marginLeftRight": 20,
        "marginLeftBottom": 20,
        "marginLeftLeft": 20,
        "lineHeight": 12
    },
    "ulbullets": {
        "marginTop": 25,
        "marginRight": 25,
        "marginBottom": 25,
        "marginLeft": 25
    },
    "ulbulletsmedium": {
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "ul li": {
        "marginBottomTop": 50,
        "marginBottomRight": 50,
        "marginBottomBottom": 50,
        "marginBottomLeft": 50
    },
    "ulbullets li": {
        "lineHeight": "100%",
        "paddingBottomTop": 0.75,
        "paddingBottomRight": 0.75,
        "paddingBottomBottom": 0.75,
        "paddingBottomLeft": 0.75,
        "fontSize": 1.75,
        "textAlign": "left",
        "marginLeftTop": 50,
        "marginLeftRight": 50,
        "marginLeftBottom": 50,
        "marginLeftLeft": 50
    },
    "ulbulletsmedium li": {
        "lineHeight": "100%",
        "paddingBottomTop": 0.75,
        "paddingBottomRight": 0.75,
        "paddingBottomBottom": 0.75,
        "paddingBottomLeft": 0.75,
        "fontSize": 1.15,
        "textAlign": "left"
    },
    "reveal h5": {
        "fontSize": 0.9
    },
    "reveal pre code spanline-number": {
        "width": 20,
        "color": "#EEE",
        "display": "inline-block"
    },
    "reveal ul li h4": {
        "marginBottomTop": 5,
        "marginBottomRight": 5,
        "marginBottomBottom": 5,
        "marginBottomLeft": 5
    },
    "reveal ul li h5": {
        "marginBottomTop": 5,
        "marginBottomRight": 5,
        "marginBottomBottom": 5,
        "marginBottomLeft": 5
    },
    "reveal ul li h6": {
        "marginBottomTop": 5,
        "marginBottomRight": 5,
        "marginBottomBottom": 5,
        "marginBottomLeft": 5
    },
    "divalign-left": {
        "float": "left"
    },
    "divalign-right": {
        "float": "right",
        "marginRightTop": 150,
        "marginRightRight": 150,
        "marginRightBottom": 150,
        "marginRightLeft": 150
    },
    "reveal h3name": {
        "paddingTopTop": "10`px",
        "paddingTopRight": "10`px",
        "paddingTopBottom": "10`px",
        "paddingTopLeft": "10`px",
        "fontSize": 1,
        "fontWeight": "bold"
    },
    "imgavatar": {
        "width": 320,
        "height": 320
    },
    "reveal h3title": {
        "fontSize": "140%",
        "lineHeight": "125%"
    },
    "reveal divcontributors": {
        "width": 960,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "reveal divcontributors contributor": {
        "float": "left",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "reveal divcontributors contributor img": {
        "maxWidth": 80,
        "maxHeight": 80,
        "border": "1px solid",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "reveal divcontributors contributor username": {
        "fontSize": "32%",
        "lineHeight": 1
    },
    "notes": {
        "width": "auto"
    },
    "reveal how-maintain": {
        "marginBottomTop": 20,
        "marginBottomRight": 20,
        "marginBottomBottom": 20,
        "marginBottomLeft": 20
    },
    "reveal how-maintain img": {
        "width": "45%",
        "height": "45%"
    },
    "reveal how-maintain p": {
        "fontSize": "75%"
    },
    "reveal white": {
        "color": "#FFF"
    },
    "reveal awhite": {
        "color": "#FFF"
    },
    "hrwhite": {
        "color": "#FFF",
        "backgroundImage": "linear-gradient(to right, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 255))"
    },
    "reveal white-back": {
        "backgroundColor": "#FFF"
    },
    "reveal awhite-back": {
        "backgroundColor": "#FFF"
    },
    "reveal table": {
        "border": 2,
        "borderColor": "#000",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "reveal table td": {
        "border": 2,
        "borderColor": "#000",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "reveal underlined": {
        "background": "url(../images/underline.gif) repeat-x 100% 100%"
    },
    "reveal h3note": {
        "fontSize": "125%",
        "lineHeight": "125%",
        "backgroundColor": "#0076C2",
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25,
        "color": "#FFFFFF"
    },
    "contributors-list li": {
        "listStyleType": "none",
        "display": "inline-block",
        "marginBottomTop": 2,
        "marginBottomRight": 2,
        "marginBottomBottom": 2,
        "marginBottomLeft": 2,
        "marginRightTop": 2,
        "marginRightRight": 2,
        "marginRightBottom": 2,
        "marginRightLeft": 2,
        "width": 50,
        "overflow": "hidden"
    },
    "contributors-list li img": {
        "maxWidth": "100%",
        "height": "auto",
        "verticalAlign": "middle",
        "border": "0px none"
    },
    "middle": {
        "verticalAlign": "middle"
    },
    "hr": {
        "border": 0,
        "height": 1,
        "backgroundImage": "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
    },
    "topic left": {
        "display": "block",
        "float": "left",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "topic img": {
        "width": "auto",
        "height": 240
    }
});