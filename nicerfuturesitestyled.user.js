// ==UserScript==
// @name         nicerfuturesitestyled
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
    GM_addStyle(
        '.send-card-area-wrapper .grid .item {'+
        '    height: 300px !important;'+
        '}'+
        ''+
        '@media screen and (min-width: 1300px) {'+
        '    .send-card-area-wrapper .grid .item {'+
        '        width: 19%;'+
        '    }'+
        '}'+
        '.send-card-area-wrapper .grid .item {'+
        '    padding: 15px 10px 0 !important;'+
        '}'+
        '.send-card-area-wrapper .grid .item .receiver .user-avatar {'+
        '    margin-right: 10px;'+
        '    float: right;'+
        '}'+
        '.send-card-area-wrapper .grid .price {'+
        '    margin-bottom: 10px;'+
        '    float: left;'+
        '}'+
        '.send-card-area-wrapper .grid .item .receiver .info {'+
        '    float: right;'+
        '    text-align: right;'+
        '}'+
        '.send-card-area-wrapper .grid .price.small {'+
        '    width: 80px;'+
        '    float: right;'+
        '}'+
        '.compose-area-wrapper .filter-item {'+
        '    width: 100%;'+
        '}'+
        ''+
        '    .item .content .receiver .author .info .price.small {'+
        '        float: right;'+
        '        position: absolute;'+
        '        right: 58px;'+
        '        top: 0px;'+
        '    }'+
        '    .item .content .receiver .author .info .user-name {'+
        '        position: absolute;'+
        '        right: 58px;'+
        '        top: 33px;'+
        '    }'+
        '    .item .content .receiver .author .image.image-responsive.left.user-avatar {'+
        '        position: relative;'+
        '        bottom: 10px;'+
        '    }'+
        '    .item .content .receiver .author .info .user-name .icon {'+
        '        position: absolute;'+
        '        top: -3px;'+
        '        left: -19px;'+
        '    }'+
        '    .item .content .text {'+
        '        text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;'+
        '    }'+
        '    .item .content .receiver .author .user-name {'+
        '        text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black, -1px -1px 1px black;'+
        '    }'+
        ''+
        '	.lightweight .send-card-area-wrapper .grid .item{'+
        '    	-webkit-transition: none;'+
        '         -moz-transition: none;'+
        '         transition: none;'+
        '         transform: none;'+
        '         border: 1px solid black;'+
        '    }'+
        '   .lightweight .send-card-area-wrapper .grid .item:hover {'+
        '         -webkit-transition: none;'+
        '         -moz-transition: none;'+
        '         transition: none;'+
        '         transform: none;'+
        '         border: 1px solid white;'+
        '    }'+
        '	.leightweight .send-card-area-wrapper .grid .item:hover .bg {'+
        '        width: inherit;'+
        '    	height: 270px;'+
        '        min-width: 100%;'+
        '        left: 0;'+
        '        top: 0;'+
        '        position: absolute;'+
        '        z-index: -1;'+
        '        opacity: .33;'+
        '        background-position: bottom center;'+
        '        background-size: cover;'+
        '        -webkit-filter: blur(0);'+
        '        -moz-filter: blur(0);'+
        '        -o-filter: blur(0);'+
        '        -ms-filter: blur(0);'+
        '        filter: blur(0);'+
        '    }'+
        ''+
        '    .btn.filterbtn{'+
        '        float:right;'+
        '        width:100%; '+
        '    }'+
        ''+
        '.filter-item.search.p-filter{'+
        '	position:relative;'+
        '    width:100px;'+
        '    float:right;'+
        '}'+
        ''+
        ''+
        '.p-filter.search input{'+
        '    float:right;'+
        '    padding-left:0px;'+
        '    padding-top:0px;'+
        '    padding-bottom:0px;'+
        '    padding-right:0px;'+
        '    height:33%;'+
        '    position:relative;'+
        '    left:0px;'+
        '    border:none;'+
        '    text-align:center;'+
        '}'+
        '.filter-item.p-filter .label.current{'+
        '    font-size:10pt;'+
        '    padding-left:0px;'+
        '    padding-top:2px;'+
        '    text-align:center;'+
        '}'+
        ''+
        '.p-filter.filter-input.minpoint{'+
        '   '+
        '}'+
        '.p-filter.filter-input.mincard{'+
        '}'+
        '.p-filter.filter-input.maxcard{'+
        '}'+
        ''+
        '.compose-area-wrapper .filter-item {'+
        '    width: 100%;'+
        '}'+
        '/* remove italics */'+
        ''+
        'dfn {'+
        '    font-style: normal'+
        '}'+
        '.form-black .form-group.checkbox .hint {'+
        '    opacity: .5;'+
        '    font-style: normal;'+
        '    display: block'+
        '}'+
        '.card-detail-area .main .content .quote {'+
        '    font-family: "Times New Roman", Times, serif;'+
        '    font-style: normal;'+
        '    margin-bottom: 10px;'+
        '    opacity: .6;'+
        '    max-width: 280px'+
        '}'+
        '.profile-collection-area .description {'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-size: 14px;'+
        '    font-style: normal;'+
        '    font-weight: 600;'+
        '    opacity: .3;'+
        '    margin-bottom: 25px'+
        '}'+
        '.home-area-9 .send-card-area-wrapper .grid .time {'+
        '    position: absolute;'+
        '    opacity: .3;'+
        '    font-size: 13px;'+
        '    font-style: normal;'+
        '    top: 0;'+
        '    width: 100%;'+
        '    text-align: center'+
        '}'+
        '.onboard-area .hint {'+
        '    margin: auto auto 20px;'+
        '    max-width: 280px;'+
        '    font-size: 14px;'+
        '    font-weight: 200;'+
        '    font-style: normal'+
        '}'+
        '.onboard-area-7 .form .item .foil {'+
        '    font-size: 17px;'+
        '    font-style: normal'+
        '}'+
        '.settings-area .description {'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-size: 14px;'+
        '    font-style: normal;'+
        '    font-weight: 600;'+
        '    opacity: .3;'+
        '    margin-bottom: 25px'+
        '}'+
        '.shipping-area-wrapper .recommended .item .hint {'+
        '    font-weight: 600;'+
        '    font-style: normal;'+
        '    font-size: 14px;'+
        '    opacity: .3'+
        '}'+
        '.shipping-area-wrapper .tips .hint {'+
        '    font-weight: 600;'+
        '    font-style: normal;'+
        '    font-size: 14px'+
        '}'+
        '.receiving-area-wrapper .details .info .foil,'+
        '.sending-area-wrapper .details .info .foil {'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-size: 15px;'+
        '    font-weight: 600;'+
        '    font-style: normal;'+
        '    margin: 10px 0'+
        '}'+
        '.pricing-area.page-2 .award {'+
        '    min-height: 25px;'+
        '    font-style: normal;'+
        '    font-size: 13px;'+
        '    opacity: .6'+
        '}'+
        '.pricing-area .description {'+
        '    font-size: 15px;'+
        '    font-style: normal;'+
        '    margin-bottom: 25px'+
        '}'+
        '.pricing-area .actions .action {'+
        '    padding: 20px 0;'+
        '    font-size: 12px;'+
        '    font-style: normal'+
        '}'+
        '.purchase-result-area .info .text {'+
        '    font-style: normal;'+
        '    margin-bottom: 10px'+
        '}'+
        '.popup-wrapper .popup-billing .for,'+
        '.popup-wrapper .popup-pay-points .for,'+
        '.popup-wrapper .popup-purchase-points .for,'+
        '.popup-wrapper .popup-send-points .for {'+
        '    font-size: 16px;'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-style: normal'+
        '}'+
        '.card-list-area .items .item .foil,'+
        '.card-list-area.editable .items .item .foil {'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-weight: 600;'+
        '    font-style: normal;'+
        '    font-size: 15px;'+
        '    letter-spacing: 0;'+
        '    text-transform: none'+
        '}'+
        '.card-grid-area .item .overlay .content .foil {'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-weight: 600;'+
        '    font-size: 15px;'+
        '    font-style: normal'+
        '}'+
        '.card-grid-area .item .overlay-tab .tab-heading .tab.foil {'+
        '    float: right;'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-size: 13px;'+
        '    font-style: normal'+
        '}'+
        '.case-area .list .body .card .foil {'+
        '    font-style: normal'+
        '}'+
        '.popup-cases .main-content .cards .item .info .foil {'+
        '    font-size: 15px;'+
        '    font-family: AGaramond, Times, serif;'+
        '    font-weight: 600;'+
        '    font-style: normal;'+
        '    opacity: .8;'+
        '    margin: 8px 0'+
        '}'+
        '.popup-cases .main-content .cards .item .info .description {'+
        '    font-size: 13px;'+
        '    font-style: normal'+
        '}'+
        '.popup-case-resolution .hint,'+
        '.popup-cases .hint {'+
        '    font-size: 13px;'+
        '    font-weight: 300;'+
        '    font-style: normal;'+
        '    color: #000;'+
        '    margin: -10px auto 40px;'+
        '    text-align: center;'+
        '    max-width: 400px'+
        '}'+
        '.popup-case-resolution .contact textarea {'+
        '    width: 100%;'+
        '    height: 200px;'+
        '    font-size: 13px;'+
        '    color: #666;'+
        '    font-style: normal'+
        '}'+
        '.popup-case-resolution .pricing .column .action {'+
        '    padding: 20px 0;'+
        '    font-size: 12px;'+
        '    font-style: normal;'+
        '    width: 100%'+
        '}'+
        '/* remove italics end*/'+
        '/* Thank you https://www.reddit.com/user/qrith */'+
        ''+
        '@media screen and (min-width: 600px) {'+
        '    .card-list-area .items .item.hover, .card-list-area .items .item:hover, .card-list-area.editable .items .item.hover, .card-list-area.editable .items .item:hover {'+
        '        -webkit-transition: none;'+
        '        -moz-transition: none;'+
        '        transition: none;'+
        '        transform: none;'+
        '        border: 1px solid white;'+
        '    }'+
        '    .card-list-area .items .item.hover .bg,'+
        '    .card-list-area .items .item:hover .bg,'+
        '    .card-list-area.editable .items .item.hover .bg,'+
        '    .card-list-area.editable .items .item:hover .bg {'+
        '        opacity: .9;'+
        '        filter: alpha(opacity=90)'+
        '    }'+
        '    .card-list-area .items .item.hover .moveicon,'+
        '    .card-list-area .items .item:hover .moveicon,'+
        '    .card-list-area.editable .items .item.hover .moveicon,'+
        '    .card-list-area.editable .items .item:hover .moveicon {'+
        '        opacity: .4'+
        '    }'+
        '    .card-list-area .items .item.hover .clone,'+
        '    .card-list-area .items .item.hover .moveicon.hover,'+
        '    .card-list-area .items .item.hover .moveicon:hover,'+
        '    .card-list-area .items .item:hover .clone,'+
        '    .card-list-area .items .item:hover .moveicon.hover,'+
        '    .card-list-area .items .item:hover .moveicon:hover,'+
        '    .card-list-area.editable .items .item.hover .clone,'+
        '    .card-list-area.editable .items .item.hover .moveicon.hover,'+
        '    .card-list-area.editable .items .item.hover .moveicon:hover,'+
        '    .card-list-area.editable .items .item:hover .clone,'+
        '    .card-list-area.editable .items .item:hover .moveicon.hover,'+
        '    .card-list-area.editable .items .item:hover .moveicon:hover {'+
        '        opacity: 1'+
        '    }'+
        '}'+
        ''+
        '/* Thank you https://www.reddit.com/user/qrith -- end*/'+
        '/* Thank you https://www.reddit.com/user/Siliticx */'+
        ''+
        '.profile-area .main .info {'+
        '    margin-top: 50px;'+
        '}'+
        '.profile-area {'+
        '    padding-bottom: 20px;'+
        '}'+
        '.force-height.profile-area-wrapper {'+
        '    min-height: 200px;'+
        '}'+
        '.profile-area-wrapper {'+
        '    min-height: 200px;'+
        '}'+
        '/* https://www.reddit.com/user/Siliticx -- end*/'+
        ''+
        '.point .price.small {'+
        '    float: right;'+
        '    min-width: 130px;'+
        '}'+
        '.point .max_buy.input-coin .price.small {'+
        '    min-width: 0px;'+
        '}'+
        '.card-list-area .items .item .point,'+
        '.card-list-area.editable .items .item .point {'+
        '    min-width: 240px;'+
        '}'+
        ''+
        '}'
    );
    var minPoints = 0;
    var minCards = 2;
    var maxCards = "max";

    if(GM_listValues().indexOf("minPoints") > -1){
        minPoints = GM_getValue("minPoints");
    }

    if(GM_listValues().indexOf("minCards") > -1){
        minCards = GM_getValue("minCards");
    }

    if(GM_listValues().indexOf("maxCards") > -1){
        maxCards = GM_getValue("maxCards");
    }


    waitForKeyElements ("#trades .item", actionFunction);

    function actionFunction (jNode) {
        var elements = document.getElementsByClassName("item");
        //var currentChild = elements[0];
        var currentChild = jNode.context;
        var nextChild = null;

        var content = null;

        content = getChildByName(currentChild, "content");

        var cards = getChildByName(content, "card");


        content.appendChild(cards);
        //console.log(content);
        //console.log(countCards(cards));

        filterPackage(content, minPoints, minCards, maxCards);
        if(cards.children.length > 5){
            //console.log("moren than 5 children");
        }        

    }
    
    waitForKeyElements ("#trades .filter.filter-menu", addFilterDiv);
    function addFilterDiv(jNode){
        console.log(jNode);
        
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
        /*
        maxCard_l.innerHTML = "Max Cards";
        maxCard_l.className += " label current";
        maxCard_d.className += " ";
        maxCard_f.className += " filter-input";
        maxCard_f.value = maxCards;
        maxCard_d.appendChild(maxCard_l);
        maxCard_d.appendChild(maxCard_f);
        */
        var t = document.createTextNode("Apply");
        apply_filter_btn.appendChild(t);
        
        
         apply_filter_div.appendChild(minPoint_d);
        apply_filter_div.appendChild(minCard_d);
         apply_filter_div.appendChild(maxCard_d);
        apply_filter_div.appendChild(apply_filter_btn);
       
        
        jNode.context.appendChild(apply_filter_div);              

        apply_filter_btn.onclick =function() {
            GM_setValue("minPoints", minPoint_f.value);
            GM_setValue("minCards", minCard_f.value);
            GM_setValue("maxCards", "max"); //until max cards are supported
            location.reload();
        };

    }

    //content has to be a single node of class "content" from the "item" class div on package view
    function filterPackage(content, minPoints, minCards, maxCards){

        console.log("minPoints: " + minPoints + " minCards: " + minCards + " maxCards: " + maxCards + "\r\n");
        console.log((parseInt(content.childNodes[0].textContent)));
        var cards = getChildByName(content, "card");
        var count = countCards(cards);
        console.log(minPoints);
        
        if(maxCards == "max"){
            if((parseInt(content.childNodes[0].textContent) < minPoints) || (count<minCards)){
                console.log((parseInt(content.childNodes[0].textContent)));
                console.log(minPoints);
                console.log((parseInt(content.childNodes[0].textContent) < minPoints));
                content.parentNode.style.display="none";
            }
        }else{
            if((parseInt(content.childNodes[0].textContent) < minPoints) || (count < minCards) || (count>maxCards)){
                console.log((parseInt(content.childNodes[0].textContent)));
                console.log(minPoints);
                console.log((parseInt(content.childNodes[0].textContent) < minPoints));
                console.log(maxCards);
                content.parentNode.style.display="none";
            }
        }

    }

    //has to be passed a "card" class node collection
    function countCards(cards){
        var cnt  = 0;
        var cur_c = cards.getElementsByClassName("row")[0];

        while(cur_c !== null){
            cnt = cnt + parseInt(cur_c.getElementsByClassName("number")[0].textContent);
            cur_c = cur_c.nextSibling;
        }
        return cnt;
    }

    function filterPackages(minPoints, minCards, maxCards){
        var packages = document.getElementsByClassName("item");
        
        //console.log(packages);

        var currentChild = packages.item(0);
        //console.log(currentChild);
        var nextChild = null;
        var content = null;

        while(currentChild !== null){

            nextChild = currentChild.nextSibling;
            content = getChildByName(currentChild, "content");
            //console.log(content);
            //console.log(currentChild);
            //console.log(minPoints);
            //console.log(content.childNodes[0].textContent);
            if(content.childNodes[0].textContent <= minPoints){
                content.parentNode.style.display="none";
            }
            currentChild = nextChild;
        }
        
        
    }
    
    function getChildByName(node, name){
        var child = null;
        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].className == name) {
                child = node.childNodes[i];
                break;
            }
         }
        return child;
    }

    waitForKeyElements ("body > undefined:nth-child(18) > div > span > div > div > div > div.tabs.tab-area > div.tab-content > div > div.items > div > span > div:nth-child(1)", actionFunction2);

    function actionFunction2 (jNode) {
       //console.log("Now im running action function 2");
        var elements = document.getElementsByClassName("card-details");
        //console.log("So many cards: ");
        //console.log(elements.length);
        var d = document.createElement("div");
        d.innerHTML = "<span class=\"text letter\" >Cards: "+elements.length+"</span>";
        var totalcards = d.firstChild;
        
        var cost = document.getElementsByClassName("cost");
        cost[0].insertBefore(totalcards, cost[0].firstChild);

       // jNode.css ("background", "yellow"); // example
    }
    
})();
