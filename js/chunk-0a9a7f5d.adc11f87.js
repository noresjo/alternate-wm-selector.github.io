(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a9a7f5d"],{"0a1c":function(t,s,e){},"20e6":function(t,s,e){},"3fce":function(t,s,e){"use strict";e("0a1c")},"71a3":function(t,s,e){"use strict";e("e466")},"814c":function(t,s,e){"use strict";e("20e6")},b36e:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",{staticClass:"mobile-selector-view"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],staticClass:"small",attrs:{id:"label",type:"text",placeholder:"Please enter a label for this list…"},domProps:{value:t.label},on:{input:function(s){s.target.composing||(t.label=s.target.value)}}}),e("div",{attrs:{id:"armyList"}},[t._v(" "+t._s(t.armyList)+" "),e("div",{staticClass:"small",attrs:{id:"version"}},[t._v(t._s(t.version))])]),e("div",{attrs:{id:"units"}},t._l(t.units,(function(t,s){return e("Unit",{key:s,attrs:{unitID:s}})})),1),e("div",{attrs:{id:"summary"}},[e("div",{attrs:{id:"pointsCost"}},[t._v(" "+t._s(t.pointsCost)+" points ")]),e("span",{attrs:{id:"unitCount",title:"Units/Half"}},[t._v(" "+t._s(t.unitCount)+"/"+t._s(Math.ceil(t.unitCount/2))+" ")]),e("button",{attrs:{id:"errors_toggle_button","aria-controls":"errors","aria-expanded":t.errors.length<1||t.errorsHidden?"false":"true",disabled:t.errors.length<1},on:{click:t.toggleErrors}},[e("span",{staticClass:"fa",class:{"fa-check":t.errors.length<1,"fa-times":t.errors.length>0}},[e("span",{staticClass:"sr-only"},[t._v("Toggle Errors")])])]),t.errors.length>0?e("ul",{attrs:{id:"errors","aria-labelledby":"errors_toggle_button",hidden:t.errors.length<1||t.errorsHidden}},t._l(t.errors,(function(s){return e("li",{key:s},[t._v(t._s(s))])})),0):t._e()])])},a=[],r=e("2f62"),i=e("4360"),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"unit",attrs:{id:t.tagID}},[e("div",{staticClass:"id"},[t._v(t._s(t.unitID)+" ("+t._s(t.points)+")")]),e("button",{staticClass:"remove-button",attrs:{disabled:t.number<1},on:{click:t.remove}},[e("span",{staticClass:"fa fa-minus"},[e("span",{staticClass:"sr-only"},[t._v("Remove one "+t._s(t.unitID))])])]),e("span",{staticClass:"number"},[t._v(t._s(t.number))]),e("button",{staticClass:"add-button",on:{click:t.add}},[e("span",{staticClass:"fa fa-plus"},[e("span",{staticClass:"sr-only"},[t._v("Add one "+t._s(t.unitID))])])]),t.upgrades?e("button",{staticClass:"upgrades-toggle-button",attrs:{id:t.tagID+"_upgrades_toggle_button","aria-controls":t.tagID+"_upgrades","aria-expanded":t.upgradesHidden?"false":"true",disabled:t.number<1},on:{click:t.toggleUpgrades}},[e("span",{staticClass:"fa",class:{"fa-caret-right":t.upgradesHidden,"fa-caret-down":!t.upgradesHidden}},[e("span",{staticClass:"sr-only"},[t._v("Toggle Upgrades")])])]):t._e(),e("div",{staticClass:"upgrades",attrs:{id:t.tagID+"_upgrades","aria-labelledby":t.tagID+"_upgrades_toggle_button",hidden:t.upgradesHidden}},t._l(t.upgrades,(function(s,n){return e("Upgrade",{key:n,attrs:{upgradeID:n,unitID:t.unitID}})})),1)])},o=[],d=(e("ac1f"),e("5319"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"upgrade",attrs:{id:t.tagID}},[e("div",{staticClass:"id"},[t._v(t._s(t.upgradeID)+" ("+t._s(t.points)+")")]),e("button",{staticClass:"remove-button",attrs:{disabled:t.number<1},on:{click:t.remove}},[e("span",{staticClass:"fa fa-minus"},[e("span",{staticClass:"sr-only"},[t._v("Remove one "+t._s(t.upgradeID)+" from "+t._s(t.unitID))])])]),e("span",{staticClass:"number"},[t._v(t._s(t.number))]),e("button",{staticClass:"add-button",attrs:{disabled:t.unitNumber<=t.number},on:{click:t.add}},[e("span",{staticClass:"fa fa-plus"},[e("span",{staticClass:"sr-only"},[t._v("Add one "+t._s(t.upgradeID)+" to "+t._s(t.unitID))])])])])}),l=[],c={name:"Upgrade",computed:{number:function(){return i["a"].getters.units[this.unitID].upgrades[this.upgradeID].number},points:function(){return i["a"].getters.upgrades[this.upgradeID].points},tagID:function(){return(this.unitID+"_unit_"+this.upgradeID+"_upgrade").toLowerCase().replace(/\W+/g,"_")},unitNumber:function(){return i["a"].getters.units[this.unitID].number}},methods:{add:function(){i["a"].dispatch("setUnitUpgradeNumber",{upgradeID:this.upgradeID,unitID:this.unitID,number:this.number+1})},remove:function(){i["a"].dispatch("setUnitUpgradeNumber",{upgradeID:this.upgradeID,unitID:this.unitID,number:this.number-1})}},props:["unitID","upgradeID"]},p=c,g=(e("71a3"),e("2877")),m=Object(g["a"])(p,d,l,!1,null,null,null),b=m.exports,f={name:"Unit",components:{Upgrade:b},computed:{number:function(){return i["a"].getters.units[this.unitID].number},points:function(){return i["a"].getters.units[this.unitID].points},tagID:function(){return(this.unitID+"_unit").toLowerCase().replace(/\W+/g,"_")},upgrades:function(){return i["a"].getters.units[this.unitID].upgrades}},data:function(){return{upgradesHidden:!0}},methods:{add:function(){i["a"].dispatch("setUnitNumber",{unitID:this.unitID,number:this.number+1})},remove:function(){this.number-1===0&&(this.upgradesHidden=!0),i["a"].dispatch("setUnitNumber",{unitID:this.unitID,number:this.number-1})},toggleUpgrades:function(){this.upgradesHidden=!this.upgradesHidden}},props:["unitID"]},_=f,h=(e("3fce"),Object(g["a"])(_,u,o,!1,null,null,null)),v=h.exports,D={name:"MobileSelectorView",components:{Unit:v},computed:Object.assign({label:{get:function(){return i["a"].getters.label},set:function(t){i["a"].dispatch("setLabel",t)}}},Object(r["b"])(["armyList","errors","pointsCost","unitCount","units","version"])),data:function(){return{errorsHidden:!0}},methods:{toggleErrors:function(){this.errorsHidden=!this.errorsHidden}},mounted:function(){document.getElementsByClassName("mobile-selector-view-button")[0]&&document.getElementsByClassName("mobile-selector-view-button")[0].focus()}},I=D,C=(e("814c"),Object(g["a"])(I,n,a,!1,null,null,null));s["default"]=C.exports},e466:function(t,s,e){}}]);
//# sourceMappingURL=chunk-0a9a7f5d.adc11f87.js.map