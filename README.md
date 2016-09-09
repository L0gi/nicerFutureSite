# nicerFutureSite

Some scripts to make the new futuresite of pucatrade a bit more pleasing to the eye (http://imgur.com/a/vkpYC , http://imgur.com/a/XgJOg , http://imgur.com/a/wpPWG )

###features
- trade packages are all the same height,

- basic packge filter: http://imgur.com/a/wpPWG

- trade packages are leaner fitting five instead of four into one row,

- User info and Send Button are reordered to the top of a trade package, so they are always in a more predictable place

- less empty space at the top of trade package

- when clicking send the number of total cards in the bundle are shown at the bottom of the overlay, 

- removed italics 

- trade package and list highlihgts changed from blurry scaling to simple white border

###installation
There are now two versions you can install:

The all-in-one script, or javascript and styles separately.

####all-in-one
install Grease-/Tampermonkey addon for your browser and import the "nicerfuturesitestyled.user.js" script.

you are done. This script incorporates the necessary style changes.

####seperate js and css

I would recommend this if you want to play around with the css yourself and tweak what puca looks like to your liking. In that case follow the instructions below:

install the "Stylish" addon to your browser and import the pucastylish script
install Greasemonkey/Tampermonkey addon to your browser and import the nicerfuturesite.user.js script

@Firefoxusers: As far as I understand you have to import each @-moz-document block into its own style when adding the styles in firefox

@Chromeusers: Click on the Stylish button, go to "manage installed scripts", create a new script, now this is iportant: click on "import" and paste the pucastylish contentes there, then click overwrite style, give your newly created style a name and save it.

###misc
If you do like seeing all cards in a package in the package view, simply delete from the top of the stylish file, the following part:
    ".send-card-area-wrapper .grid .item {
    height: 300px !important;
    }"
