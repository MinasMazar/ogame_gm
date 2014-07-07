// ==UserScript==
// @name        Ogame Smart Cargo Loader
// @namespace   mm_ogame_scl
// @description This enable a smart cargo loading for a leaving dock fleet ;-) It just overrides maxAll function..
// @include     http://*.ogame.gameforge.com*/*page=fleet3
// @version     1
// @grant       none
// ==/UserScript==

window.maxAll = function() {
    metal=0;crystal=0;deuterium=0;
    // Invert the normal loading procedure: I load first all of Deux, than Crystal and finally Metal..
    maxDeuterium();
    maxCrystal();
    maxMetal();
}

document.getElementById('allresources').onclick = function() {
 maxAll();
 updateVariables();   
 return false;
}

