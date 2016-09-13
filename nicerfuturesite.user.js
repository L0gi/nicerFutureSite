// ==UserScript==
// @name         nicerfuturesite
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pucatrade.com/*

// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_listValues
// @grant   GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    
        var minPoints = 0;
    var minCards = 2;
    var maxCards = "max";

    if (GM_listValues().indexOf("minPoints") > -1) {
        minPoints = GM_getValue("minPoints");
    }

    if (GM_listValues().indexOf("minCards") > -1) {
        minCards = GM_getValue("minCards");
    }

    if (GM_listValues().indexOf("maxCards") > -1) {
        maxCards = GM_getValue("maxCards");
    }

    if (window.location.href == "https://pucatrade.com/trades/packages") {
        waitForKeyElements("#trades .item", actionFunction);
        waitForKeyElements("#trades .filter.filter-menu", addFilterDiv);
    }



    function actionFunction(jNode) {
        var elements = document.getElementsByClassName("item");
        //var currentChild = elements[0];
        var currentChild = jNode.context;

        var content = null;

        content = getChildByName(currentChild, "content");

        var cards = getChildByName(content, "card");


        content.appendChild(cards);


        if (filterPackage(content, minPoints, minCards, maxCards)) {
            currentChild.parentElement.appendChild(currentChild);
        }


    }




    function addFilterDiv(jNode) {

        var apply_filter_div = document.createElement("DIV");
        apply_filter_div.className += " filter-item search p-filter";

        var minPoint_d = document.createElement("div");
        var minCard_d = document.createElement("div");
        var maxCard_d = document.createElement("div");
        var apply_filter_btn = document.createElement("BUTTON");
        var minPoint_f = document.createElement("input");
        var minCard_f = document.createElement("input");
        var maxCard_f = document.createElement("input");
        var minPoint_l = document.createElement("div");
        var minCard_l = document.createElement("div");
        var maxCard_l = document.createElement("div");

        apply_filter_btn.className += " btn filterbtn short deepshadow";

        minPoint_l.innerHTML = "Min Points";
        minPoint_l.className += " label current";
        minPoint_d.className += " ";
        minPoint_f.className += " filter-input";
        minPoint_f.value = minPoints;
        minPoint_d.appendChild(minPoint_l);
        minPoint_d.appendChild(minPoint_f);

        minCard_l.innerHTML = "Min Cards";
        minCard_l.className += " label current";
        minCard_d.className += " ";
        minCard_f.className += " filter-input";
        minCard_f.value = minCards;
        minCard_d.appendChild(minCard_l);
        minCard_d.appendChild(minCard_f);

        maxCard_l.innerHTML = "Max Cards";
        maxCard_l.className += " label current";
        maxCard_d.className += " ";
        maxCard_f.className += " filter-input";
        maxCard_f.value = maxCards;
        maxCard_d.appendChild(maxCard_l);
        maxCard_d.appendChild(maxCard_f);

        var t = document.createTextNode("Apply");
        apply_filter_btn.appendChild(t);


        apply_filter_div.appendChild(minPoint_d);
        apply_filter_div.appendChild(minCard_d);
        apply_filter_div.appendChild(maxCard_d);
        apply_filter_div.appendChild(apply_filter_btn);


        jNode.context.appendChild(apply_filter_div);

        apply_filter_btn.onclick = function() {
            GM_setValue("minPoints", minPoint_f.value);
            GM_setValue("minCards", minCard_f.value);
            GM_setValue("maxCards", maxCard_f.value); //until max cards are supported
            location.reload();
        };

    }

    //content has to be a single node of class "content" from the "item" class div on package view
    function filterPackage(content, minPoints, minCards, maxCards) {

        var cards = getChildByName(content, "card");
        var count = countCards(cards);

        if (maxCards == "max") {
            if ((parseInt(content.childNodes[0].textContent) < minPoints) || (count < minCards)) {
                content.parentNode.style.display = "none";
                return 1;
            } {
                return 0;
            }
        } else {
            if ((parseInt(content.childNodes[0].textContent) < minPoints) || (count < minCards) || (count > maxCards)) {
                content.parentNode.style.display = "none";
                return 1;
            } else {
                return 0;
            }
        }

    }

    //has to be passed a "card" class node collection
    function countCards(cards) {
        var cnt = 0;
        var cur_c = cards.getElementsByClassName("row")[0];

        while (cur_c !== null) {
            cnt = cnt + parseInt(cur_c.getElementsByClassName("number")[0].textContent);
            cur_c = cur_c.nextSibling;
        }
        return cnt;
    }

    function filterPackages(minPoints, minCards, maxCards) {
        var packages = document.getElementsByClassName("item");

        //console.log(packages);

        var currentChild = packages.item(0);
        //console.log(currentChild);
        var nextChild = null;
        var content = null;

        while (currentChild !== null) {

            nextChild = currentChild.nextSibling;
            content = getChildByName(currentChild, "content");
            //console.log(content);
            //console.log(currentChild);
            //console.log(minPoints);
            //console.log(content.childNodes[0].textContent);
            if (content.childNodes[0].textContent <= minPoints) {
                content.parentNode.style.display = "none";
            }
            currentChild = nextChild;
        }


    }

    function getChildByName(node, name) {
        var child = null;
        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].className == name) {
                child = node.childNodes[i];
                break;
            }
        }
        return child;
    }

    waitForKeyElements("body > undefined:nth-child(18) > div > span > div > div > div > div.tabs.tab-area > div.tab-content > div > div.items > div > span > div:nth-child(1)", actionFunction2);

    function actionFunction2(jNode) {
        //console.log("Now im running action function 2");
        var elements = document.getElementsByClassName("card-details");
        //console.log("So many cards: ");
        //console.log(elements.length);
        var d = document.createElement("div");
        d.innerHTML = "<span class=\"text letter\" >Cards: " + elements.length + "</span>";
        var totalcards = d.firstChild;

        var cost = document.getElementsByClassName("cost");
        cost[0].insertBefore(totalcards, cost[0].firstChild);

        // jNode.css ("background", "yellow"); // example
    }

})();
