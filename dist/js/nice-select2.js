!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("window")):"function"==typeof define&&define.amd?define(["window"],t):"object"==typeof exports?exports.NiceSelect=t(require("window")):e.NiceSelect=t(e.window)}(this,function(n){return(()=>{"use strict";var o={870:e=>{e.exports=n}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;t=i[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};return(()=>{a.r(t),a.d(t,{bind:()=>function(e,t){return new c(e,t)}});var o=a(870);function n(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!1),e.dispatchEvent(t)}function e(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),e.dispatchEvent(t)}function i(e,t){return e.getAttribute(t)}function s(e,t){return!!e&&e.classList.contains(t)}function d(e,t){return e&&e.classList.add(t)}function r(e,t){return e&&e.classList.remove(t)}var l={data:null,searchable:!1};function c(e,t){this.el=e,this.config=Object.assign({},l,t||{}),this.data=this.config.data,this.selectedOptions=[],this.placeholder=i(this.el,"placeholder")||this.config.placeholder||"Select an option",this.dropdown=null,this.multiple=i(this.el,"multiple"),this.disabled=i(this.el,"disabled"),this.create()}c.prototype.create=function(){this.el.style.display="none",this.data?this.processData(this.data):this.extractData(),this.renderDropdown(),this.bindEvent()},c.prototype.processData=function(e){var t=[];e.forEach(function(e){t.push({data:e,attributes:{selected:!1,disabled:!1,optgroup:"optgroup"==e.value}})}),this.options=t},c.prototype.extractData=function(){var e=this.el.querySelectorAll("option,optgroup"),o=[],i=[],t=[];e.forEach(function(e){var t;t="OPTGROUP"==e.tagName?{text:e.label,value:"optgroup"}:{text:e.innerText,value:e.value};e={selected:null!=e.getAttribute("selected"),disabled:null!=e.getAttribute("disabled"),optgroup:"OPTGROUP"==e.tagName};o.push(t),i.push({data:t,attributes:e})}),this.data=o,this.options=i,this.options.forEach(function(e){e.attributes.selected&&t.push(e)}),this.selectedOptions=t},c.prototype.renderDropdown=function(){var e=["nice-select",i(this.el,"class")||"",this.disabled?"disabled":"",this.multiple?"has-multiple":""],e='<div class="'.concat(e.join(" "),'" tabindex="').concat(this.disabled?null:0,'">\n  <span class="').concat(this.multiple?"multiple-options":"current",'"></span>\n  <div class="nice-select-dropdown">\n  ').concat(this.config.searchable?'<div class="nice-select-search-box">\n<input type="text" class="nice-select-search" placeholder="Search..."/>\n</div>':"",'\n  <ul class="list"></ul>\n  </div></div>\n');this.el.insertAdjacentHTML("afterend",e),this.dropdown=this.el.nextElementSibling,this._renderSelectedItems(),this._renderItems()},c.prototype._renderSelectedItems=function(){var t,e;this.multiple?(t="",t="auto"==o.getComputedStyle(this.dropdown).width||this.selectedOptions.length<2?(this.selectedOptions.forEach(function(e){t+='<span class="current">'.concat(e.data.text,"</span>")}),""==t?this.placeholder:t):"Multiple",this.dropdown.querySelector(".multiple-options").innerHTML=t):(e=0<this.selectedOptions.length?this.selectedOptions[0].data.text:this.placeholder,this.dropdown.querySelector(".current").innerHTML=e)},c.prototype._renderItems=function(){var t=this,o=this.dropdown.querySelector("ul");this.options.forEach(function(e){o.appendChild(t._renderItem(e))})},c.prototype._renderItem=function(e){var t,o,i=document.createElement("li");return i.innerHTML=e.data.text,e.attributes.optgroup?i.classList.add("optgroup"):(i.setAttribute("data-value",e.data.value),o=["option",e.attributes.selected?"selected":null,e.attributes.disabled?"disabled":null],i.addEventListener("click",this._onItemClicked.bind(this,e)),(t=i.classList).add.apply(t,o)),e.element=i},c.prototype.update=function(){var e;this.extractData(),this.dropdown&&(e=s(this.dropdown,"open"),this.dropdown.parentNode.removeChild(this.dropdown),this.create(),e&&n(this.dropdown))},c.prototype.disable=function(){this.disabled||(this.disabled=!0,d(this.dropdown,"disabled"))},c.prototype.enable=function(){this.disabled&&(this.disabled=!1,r(this.dropdown,"disabled"))},c.prototype.clear=function(){this.selectedOptions=[],this._renderSelectedItems(),this.updateSelectValue(),e(this.el)},c.prototype.destroy=function(){this.dropdown&&(this.dropdown.parentNode.removeChild(this.dropdown),this.el.style.display="")},c.prototype.bindEvent=function(){this.dropdown.addEventListener("click",this._onClicked.bind(this)),this.dropdown.addEventListener("keydown",this._onKeyPressed.bind(this)),this.dropdown.addEventListener("focusin",function(e){var t=document.createEvent("FocusEvent");t.initEvent("focusin",!0,!1),e.dispatchEvent(t)}.bind(this,this.el)),this.dropdown.addEventListener("focusout",function(e){var t=document.createEvent("FocusEvent");t.initEvent("focusout",!0,!1),e.dispatchEvent(t)}.bind(this,this.el)),o.addEventListener("click",this._onClickedOutside.bind(this)),this.config.searchable&&this._bindSearchEvent()},c.prototype._bindSearchEvent=function(){var e=this.dropdown.querySelector(".nice-select-search");e&&e.addEventListener("click",function(e){return e.stopPropagation(),!1}),e.addEventListener("input",this._onSearchChanged.bind(this))},c.prototype._onClicked=function(e){var t;this.multiple?this.dropdown.classList.add("open"):this.dropdown.classList.toggle("open"),this.dropdown.classList.contains("open")?((t=this.dropdown.querySelector(".nice-select-search"))&&(t.value="",t.focus()),r(this.dropdown.querySelector(".focus"),"focus"),d(this.dropdown.querySelector(".selected"),"focus"),this.dropdown.querySelectorAll("ul li").forEach(function(e){e.style.display=""})):this.dropdown.focus()},c.prototype._onItemClicked=function(e,t){t=t.target;s(t,"disabled")||(this.multiple?s(t,"selected")?(r(t,"selected"),this.selectedOptions.splice(this.selectedOptions.indexOf(e),1),this.el.querySelector('option[value="'+t.dataset.value+'"]').selected=!1):(d(t,"selected"),this.selectedOptions.push(e)):(this.selectedOptions.forEach(function(e){r(e.element,"selected")}),d(t,"selected"),this.selectedOptions=[e]),this._renderSelectedItems(),this.updateSelectValue())},c.prototype.updateSelectValue=function(){var t;this.multiple?(t=this.el,this.selectedOptions.forEach(function(e){e=t.querySelector('option[value="'+e.data.value+'"]');e&&e.setAttribute("selected",!0)})):0<this.selectedOptions.length&&(this.el.value=this.selectedOptions[0].data.value),e(this.el)},c.prototype._onClickedOutside=function(e){this.dropdown.contains(e.target)||this.dropdown.classList.remove("open")},c.prototype._onKeyPressed=function(e){var t,o=this.dropdown.querySelector(".focus"),i=this.dropdown.classList.contains("open");return 32==e.keyCode||13==e.keyCode?n(i?o:this.dropdown):40==e.keyCode?(i?(t=this._findNext(o))&&(r(this.dropdown.querySelector(".focus"),"focus"),d(t,"focus")):n(this.dropdown),e.preventDefault()):38==e.keyCode?(i?(o=this._findPrev(o))&&(r(this.dropdown.querySelector(".focus"),"focus"),d(o,"focus")):n(this.dropdown),e.preventDefault()):27==e.keyCode&&i&&n(this.dropdown),!1},c.prototype._findNext=function(e){for(e=e?e.nextElementSibling:this.dropdown.querySelector(".list .option");e;){if(!s(e,"disabled")&&"none"!=e.style.display)return e;e=e.nextElementSibling}return null},c.prototype._findPrev=function(e){for(e=e?e.previousElementSibling:this.dropdown.querySelector(".list .option:last-child");e;){if(!s(e,"disabled")&&"none"!=e.style.display)return e;e=e.previousElementSibling}return null},c.prototype._onSearchChanged=function(e){var o,t=this.dropdown.classList.contains("open"),e=e.target.value;""==(e=e.toLowerCase())?this.options.forEach(function(e){e.element.style.display=""}):t&&(o=new RegExp(e),this.options.forEach(function(e){var t=e.data.text.toLowerCase(),t=o.test(t);e.element.style.display=t?"":"none"})),this.dropdown.querySelectorAll(".focus").forEach(function(e){r(e,"focus")}),d(this._findNext(null),"focus")}})(),t})()});