// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pucatrade.com/trades/packages

// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    waitForKeyElements ("#trades .item", actionFunction);

    function actionFunction (jNode) {
    //-- DO WHAT YOU WANT TO THE TARGETED ELEMENTS HERE.
        var elements = document.getElementsByClassName("item");
        for (var j = 0, len = elements.length; j < len; j++) {
        var content = null;
        for (var i = 0; i < elements[j].childNodes.length; i++) {
            if (elements[j].childNodes[i].className == "content") {
                content = elements[j].childNodes[i];
                break;
            }
        }
        var cards = null;
        for (var i = 0; i < content.childNodes.length; i++) {
            if (content.childNodes[i].className == "card") {
                cards = content.childNodes[i];
                break;
            }
        }
        
        
        content.appendChild(cards);
        if(cards.children.length > 5){
            console.log("moren than 5 children");
        } 

    }
       // jNode.css ("background", "yellow"); // example
    }
    
    waitForKeyElements ("body > undefined:nth-child(18) > div > span > div > div > div > div.tabs.tab-area > div.tab-content > div > div.items > div > span > div:nth-child(1)", actionFunction2);
    
    function actionFunction2 (jNode) {
       console.log("Now im running action function 2");
        var elements = document.getElementsByClassName("card-details");
        console.log("So many cards: ");
        console.log(elements.length);
        var d = document.createElement("div");
        d.innerHTML = "<span class=\"text letter\" >Cards: "+elements.length+"</span>"
        var totalcards = d.firstChild;
        
        var cost = document.getElementsByClassName("cost");
        cost[0].insertBefore(totalcards, cost[0].firstChild);

       // jNode.css ("background", "yellow"); // example
    }
    
})();
