// ==UserScript==
// @name         nicerfuturesite
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://pucatrade.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_listValues
// @grant   GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.indexOf("https://pucatrade.com/trades/packages") != -1) {
        var minPoints = 0;
        var minCards = 2;
        var maxCards = "max";
        var numMinutes = 5;
        var numPackages = 0;
        var numPrevPackages = 0;
        var alert = new Audio("https://l0gi.github.io/nicerFutureSite/alert.mp3");

        if (GM_listValues().indexOf("numPrevPackages")> -1){
            numPrevPackages = GM_getValue("numPrevPackages");
        }

        if (GM_listValues().indexOf("minPoints") > -1) {
            minPoints = GM_getValue("minPoints");
        }

        if (GM_listValues().indexOf("minCards") > -1) {
            minCards = GM_getValue("minCards");
        }

        if (GM_listValues().indexOf("maxCards") > -1) {
            maxCards = GM_getValue("maxCards");
        }

        if (GM_listValues().indexOf("numMinutes") > -1) {
            numMinutes = GM_getValue("numMinutes");
            //don't go lower than 30sec for reloads
            //Due to pucas algorithms for regenerating trade packages it does not make too much sense anyways
            if(numMinutes < 0.5){
                numMinutes = 0.5;
            }
        }


        waitForKeyElements("#trades .item", filterTradeAction);
        waitForKeyElements("#trades .filter.filter-menu", addFilterDivAction);
        waitForKeyElements("body > undefined:nth-child(21) > div > span > div > div > div > div.tabs.tab-area > div.tab-content.modal_glow", addTotalCardsAction);

        setTimeout(function() {
            GM_setValue("numPrevPackages", numPackages);
            location.reload();
        }, numMinutes*60*1000);

        setTimeout(function(){
        if(numPrevPackages != numPackages){
            alert.play();
        }
        }, 2500);
    }



    function filterTradeAction(jNode) {
        var elements = document.getElementsByClassName("item");
        var currentChild = jNode.context;
        var content = null;

        content = getChildByName(currentChild, "content");
        var cards = getChildByName(content, "card");
        content.appendChild(cards);

        if (filterPackage(content, minPoints, minCards, maxCards)) {
            currentChild.parentElement.appendChild(currentChild);
        }else{
            numPackages++;
        }
    }


    function addFilterDivAction(jNode) {
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
        var reloadMin_d = document.createElement("div");
        var reloadMin_f = document.createElement("input");
        var reloadMin_l = document.createElement("div");

        apply_filter_btn.className += " btn filterbtn short deepshadow";

        reloadMin_l.innerHTML = "Reload Time";
        reloadMin_l.className += " label current";
        reloadMin_d.className += " ";
        reloadMin_f.className += " filter-input";
        reloadMin_f.value = numMinutes;
        reloadMin_d.appendChild(reloadMin_l);
        reloadMin_d.appendChild(reloadMin_f);

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
        apply_filter_div.appendChild(reloadMin_d);
        apply_filter_div.appendChild(apply_filter_btn);


        jNode.context.appendChild(apply_filter_div);

        apply_filter_btn.onclick = function() {
            if(!isNaN(minPoint_f.value)){
                GM_setValue("minPoints", minPoint_f.value);
            }
            if(!isNaN(minCard_f.value)){
                GM_setValue("minCards", minCard_f.value);
            }
            if(!isNaN(maxCard_f.value) || maxCard_f.value == "max"){
                GM_setValue("maxCards", maxCard_f.value);
            }
            if(!isNaN(reloadMin_f.value)){
                GM_setValue("numMinutes", reloadMin_f.value);
            }
            GM_setValue("numPrevPackages", numPackages);
            location.reload();
        };

    }

    function addTotalCardsAction(jNode) {
        var elements = document.getElementsByClassName("card-details");
        var d = document.createElement("div");
        d.innerHTML = "<span class=\"text letter\" >Cards: " + elements.length + "</span>";
        var totalcards = d.firstChild;

        var cost = document.getElementsByClassName("cost");
        cost[0].insertBefore(totalcards, cost[0].firstChild);

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
})();
