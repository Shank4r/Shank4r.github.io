(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);v&&v(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var v=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0224":function(t,e,a){},"034f":function(t,e,a){"use strict";var s=a("8a23"),i=a.n(s);i.a},"1a12":function(t,e,a){},"240a":function(t,e,a){},"33c6":function(t,e,a){"use strict";var s=a("1a12"),i=a.n(s);i.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},n=[],r={name:"App"},o=r,c=(a("034f"),a("2877")),l=a("6544"),v=a.n(l),h=a("7496"),d=Object(c["a"])(o,i,n,!1,null,null,null),u=d.exports;v()(d,{VApp:h["a"]});var m=a("f309");s["a"].use(m["a"]);var f=new m["a"]({}),p=(a("caad"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",color:"transparent",elevation:"0",dark:""}},t._l(t.nav_btn,(function(e,s){return a("v-btn",{key:s,attrs:{text:"",to:e.link},on:{click:function(e){return t.scrollToSection(s)}}},[t._v(t._s(e.name))])})),1),a("Home",{staticClass:"fullpage",attrs:{activeSection:t.activeSection}}),a("About",{staticClass:"fullpage",attrs:{activeSection:t.activeSection}}),a("Apps",{staticClass:"fullpage"}),a("Contact",{staticClass:"fullpage",attrs:{activeSection:t.activeSection}}),a("float_btn",{attrs:{"move-down":t.moveTop,"move-up":t.moveUp,activeSection:t.activeSection}}),3===t.activeSection?a("myfooter"):t._e()],1)},g=[],j=(a("c740"),a("9911"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-card",{class:{"animate__animated animate__fadeIn animate__slower":0===t.activeSection},staticStyle:{padding:"10px","margin-bottom":"370px"},attrs:{color:"transparent",dark:"",shaped:"",flat:""}},[a("v-card-title",{staticClass:"justify-center display-3 text-uppercase font-weight-thin",staticStyle:{"border-bottom":"1px solid white","line-height":"50px"}},[t._v("Velkommen")]),a("v-card-text",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[t._v("TIL MIN PERSONLIGE NETTSIDE")])],1)],1)}),_=[],w={name:"Home",props:["activeSection"]},k=w,y=(a("890d"),a("b0af")),x=a("99d9"),S=Object(c["a"])(k,j,_,!1,null,"a0380e14",null),V=S.exports;v()(S,{VCard:y["a"],VCardText:x["b"],VCardTitle:x["c"]});var C,M,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("v-card",{staticClass:"mt-12",staticStyle:{padding:"10px"},attrs:{color:"transparent",dark:"",shaped:"",flat:"",width:"90%",height:"88%"}},[s("v-row",{staticClass:"text-center",class:{"animate__animated animate__fadeIn animate__slower":1===t.activeSection},attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"6"}},[s("v-avatar",{attrs:{size:"100"}},[s("v-img",{attrs:{src:a("c3e7")}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"headline font-weight-light"},[t._v("Shankar Panchalingam")]),s("v-list-item-subtitle",{staticClass:"subtitle-1 font-weight-thin"},[t._v("21")])],1)],1)],1),s("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{text:"",to:"/about/education",rounded:""}},[t._v(" Utdanning ")])],1),s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{text:"",to:"/about/attributes",rounded:""}},[t._v(" Egenskaper ")])],1),s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{text:"",to:"/about/interests",rounded:""}},[t._v(" Interesser ")])],1)],1),s("v-row",{staticStyle:{height:"250px"},attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showEducation,expression:"showEducation"}],attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"4"}},[s("v-list-item",{staticClass:"ml-3"},[s("v-list-item-avatar",{attrs:{size:"70"}},[s("v-img",{attrs:{src:a("c016")}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Bachelorgrad i Datateknologi")]),s("v-list-item-subtitle",[t._v("Universitetet i Stavanger")]),s("v-list-item-subtitle",[t._v("2017 - 2020")])],1)],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"1"}},[s("v-divider",{attrs:{vertical:"",color:"white"}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-list-item",{staticClass:"ml-3"},[s("v-list-item-avatar",{attrs:{size:"70"}},[s("v-img",{attrs:{src:a("c016")}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Mastergrad i Data Science")]),s("v-list-item-subtitle",[t._v("Universitetet i Stavanger")]),s("v-list-item-subtitle",[t._v("2020 -")])],1)],1)],1)],1),s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showInterests,expression:"showInterests"}],attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"4"}},[s("v-list-item",{staticClass:"ml-10"},[s("v-list-item-avatar",[s("v-icon",[t._v("mdi-google-controller")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Spill")]),s("v-list-item-subtitle",[t._v("Strategi- FPS- og Sportsspill")])],1)],1)],1),s("v-divider",{attrs:{vertical:"",color:"white"}}),s("v-col",{attrs:{cols:"3"}},[s("v-list-item",{staticClass:"ml-10"},[s("v-list-item-avatar",[s("v-icon",[t._v("mdi-run")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Idrett")]),s("v-list-item-subtitle",[t._v("Fotball, NBA")])],1)],1)],1),s("v-divider",{attrs:{vertical:"",color:"white"}}),s("v-col",{attrs:{cols:"4"}},[s("v-list-item",{staticClass:"ml-10"},[s("v-list-item-avatar",[s("v-icon",[t._v("mdi-xml")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Koding")]),s("v-list-item-subtitle",[t._v("Hobbyprosjekter, utforsking")])],1)],1)],1)],1),s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showAttributes,expression:"showAttributes"}],attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"5"}},[s("egenskaper",{attrs:{height:100,width:200,data:t.personlig_egenskaper}})],1),s("v-col",{staticClass:"text-center",attrs:{cols:"1"}},[s("v-divider",{attrs:{vertical:"",color:"white"}})],1),s("v-col",{attrs:{cols:"5"}},[s("egenskaper",{attrs:{height:100,width:200,data:t.ferdigheter}})],1)],1)],1)],1)],1)],1)},P=[],D=(a("d3b7"),a("ddb0"),a("1fca")),A={name:"egenskap-chart",extends:D["a"],props:["data"],mounted:function(){this.renderChart({labels:this.data.labels,datasets:[{data:this.data.values,barPercentage:.7,backgroundColor:["#ef476f","#ffd166","#06d6a0","#118ab2"]}]},{scales:{xAxes:[{ticks:{max:5,stepSize:1,beginAtZero:!0},scaleLabel:{display:!0,labelString:this.data.xLabel}}]},legend:{display:!1},title:{display:!0,text:this.data.title}})}},I=A,T=Object(c["a"])(I,C,M,!1,null,"1994d98b",null),O=T.exports,E={name:"About",props:["activeSection"],components:{egenskaper:O},data:function(){return{personlig_egenskaper:{labels:["Selvmotivert","Strukturert","Ansvarsfull","Produktivitet"],values:[4,5,3,4],title:"Personlige Egenskaper",colors:[],xLabel:"0 tilsvarer 'Usann' og 5 tilsvarer 'Sann'"},ferdigheter:{labels:["Vue.js","Python","Amazon Web Services (AWS)","MySQL"],values:[3,4,2,5],title:"Ferdigheter",colors:[],xLabel:"0 tilsvarer 'Meget Dårlig' og 5 tilsvarer 'Meget Godt'"}}},computed:{showEducation:function(){return"/about/education"===this.$route.path},showInterests:function(){return"/about/interests"===this.$route.path},showAttributes:function(){return"/about/attributes"===this.$route.path}}},L=E,R=(a("d34e"),a("8212")),$=a("8336"),B=a("62ad"),F=a("ce7e"),N=a("132d"),W=a("adda"),U=a("da13"),G=a("8270"),K=a("5d23"),X=a("0fd9"),Y=Object(c["a"])(L,z,P,!1,null,"0e22b0e4",null),H=Y.exports;v()(Y,{VAvatar:R["a"],VBtn:$["a"],VCard:y["a"],VCol:B["a"],VDivider:F["a"],VIcon:N["a"],VImg:W["a"],VListItem:U["a"],VListItemAvatar:G["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VRow:X["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-card",{staticClass:"mt-12",staticStyle:{padding:"10px"},attrs:{color:"rgba(0,0,0,.5)",dark:"",shaped:"",flat:"",width:"90%",height:"88%"}},[a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{attrs:{text:"",to:"/apps/maze",rounded:""}},[t._v(" Labyrint løsning ")])],1),a("v-col",{attrs:{cols:"3"}},[a("v-btn",{attrs:{text:"",to:"/apps/bachelor",rounded:""}},[t._v(" Bachelor Oppgave ")])],1)],1),a("v-row",{staticStyle:{height:"400px"},attrs:{justify:"center",align:"center"}},[t.isMaze?a("v-col",[a("maze")],1):t._e(),t.isBachelor?a("v-col",{attrs:{cols:"6"}},[a("bachelor")],1):t._e()],1)],1)],1)},J=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-row",{staticClass:"text-center",attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-dialog",{ref:"dialog",attrs:{"max-width":"400px",persistent:""},model:{value:t.completeDialog,callback:function(e){t.completeDialog=e},expression:"completeDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline; justify-center"},[t._v("Gratulerer!")]),a("v-card-text",[t._v(t._s(t.message))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:t.newGame}},[t._v("Ny labyrint")])],1)],1)],1),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],ref:"canvas",staticStyle:{border:"1px solid black",display:"block","margin-right":"auto","margin-left":"auto"},attrs:{width:t.width*t.cols,height:t.height*t.rows,tabindex:"0"},on:{keyup:t.move}}),t.ready?t._e():a("v-card",{attrs:{color:"transparent"}},[a("v-card-title",{staticClass:"headline"},[t._v("Kort beskrivelse:")]),a("v-card-text",{staticClass:"text-left"},[t._v(" Labyrint løsning er en applikasjon utviklet for å kunne automatisk løse labyrinter som tilbys av "),a("a",{attrs:{href:"https://noopschallenge.com/challenges/mazebot",target:"_blank"}},[t._v("Noops Mazebot")]),t._v(". Denne løsningen benytter A* (A-star) algoritmen som er en variant av Dijkstras algoritme for å finne korteste veien til målet. Brukeren har også muligheten til å løse labyrinten på egenhånd. "),a("br"),a("br"),t._v(" Det er muligheter for en demo av applikasjonen fra knappen under. Styr den røde brikken med tastene W (opp), A (venstre), S (ned) og D (høyre) ")]),a("v-card-actions",[a("v-row",{attrs:{justify:"start"}},[a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-vuejs")])],1)],1),a("v-list-item-title",[t._v("Vue.js")])],1),a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://vuetifyjs.com/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-vuetify")])],1)],1),a("v-list-item-title",[t._v("Vuetify")])],1),a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://www.python.org/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-language-python")])],1)],1),a("v-list-item-title",[t._v("Python")])],1)],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[t.ready?t._e():a("v-col",{attrs:{cols:"3"}},[a("a",{attrs:{href:"https://github.com/Shank4r/maze-project",target:"_blank"}},[a("v-btn",[a("v-icon",{attrs:{left:""}},[t._v("mdi-github")]),t._v("Kildekode")],1)],1)]),a("v-col",{attrs:{cols:"5"}},[a("v-btn",{on:{click:t.newGame}},[t.ready?t._e():a("v-icon",{attrs:{left:""}},[t._v("mdi-eye-outline")]),t._v(t._s(t.btn_message))],1)],1),a("v-col",{attrs:{cols:"4"}},[t.ready?a("v-btn",{attrs:{disabled:t.solve_btn},on:{click:t.solve}},[t._v("Jeg gir opp...")]):t._e()],1)],1)],1)],1)],1)},Z=[],tt=(a("cb29"),a("d81d"),a("2532"),a("bc3a")),et=a.n(tt),at={name:"maze",data:function(){return{timer:null,solve_btn:!1,solution:null,isFinished:!1,completed:null,completeDialog:!1,ready:!1,map:null,canvas:null,context:null,start:null,end:null,finish:null,currentPos:null,solve_speed:500,route:"",width:43,height:43,rows:10,cols:10,nodeRadius:15,WSADMap:{KeyW:"N",KeyS:"S",KeyA:"W",KeyD:"E"},arrowMap:{ArrowUp:"N",ArrowDown:"S",ArrowLeft:"W",ArrowRight:"E"}}},computed:{message:function(){return this.completed?this.completed.message:null},btn_message:function(){return this.ready?"Opprett ny labyrint":"Vis demo"}},methods:{resetGame:function(){this.stopTimer(),this.isFinished=!1,this.map=null,this.route="",this.start=null,this.end=null,this.finish=null,this.currentPos=null,this.solve_btn=!1},newGame:function(){var t=this;this.completeDialog=!1,this.resetGame(),et.a.get("https://api.noopschallenge.com/mazebot/random?minSize=10&maxSize=10").then((function(e){t.map=e.data.map,t.start=e.data.startingPosition,t.end=e.data.endingPosition,t.finish=e.data.mazePath,t.ready=!0,t.loadGame(),t.canvas.focus()}))},loadGame:function(){var t;this.canvas=this.$refs.canvas,this.context=null===(t=this.canvas)||void 0===t?void 0:t.getContext("2d"),this.context.beginPath();for(var e=0;e<this.map.length;e++)for(var a=0;a<this.map[e].length;a++)"A"===this.map[e][a]?this.context.fillStyle="white":"B"===this.map[e][a]?this.context.fillStyle="green":"X"===this.map[e][a]?this.context.fillStyle="black":(this.context.fillStyle="white",this.context.strokeStyle="black"),this.context.fillRect(this.get_X(a),this.get_Y(e),this.width,this.height),this.context.strokeRect(this.get_X(a),this.get_Y(e),this.width,this.height);this.context.arc(this.get_X(this.start[0])+this.width/2,this.get_Y(this.start[1])+this.height/2,this.nodeRadius,0,2*Math.PI),this.context.fillStyle="red",this.context.fill(),this.currentPos=this.start},get_X:function(t){return t*this.width},get_Y:function(t){return t*this.height},checkMove:function(t){if(!t.includes(-1)&&!t.includes(this.rows)&&!t.includes(this.cols))return!["X",void 0].includes(this.map[t[1]][t[0]])},remove:function(){this.context.clearRect(this.get_X(this.currentPos[0])+5,this.get_Y(this.currentPos[1])+5,this.width-10,this.height-10)},update:function(t){this.context.beginPath();var e=null;"S"===t?e=[this.currentPos[0],this.currentPos[1]+1]:"N"===t?e=[this.currentPos[0],this.currentPos[1]-1]:"W"===t?e=[this.currentPos[0]-1,this.currentPos[1]]:"E"===t&&(e=[this.currentPos[0]+1,this.currentPos[1]]),this.checkMove(e)&&(this.remove(),this.context.fillStyle="white",this.context.fillRect(this.get_X(this.currentPos[0]),this.get_Y(this.currentPos[1]),this.width,this.height),this.context.strokeRect(this.get_X(this.currentPos[0]),this.get_Y(this.currentPos[1]),this.width,this.height),this.currentPos=e,this.context.arc(this.get_X(this.currentPos[0])+this.width/2,this.get_Y(this.currentPos[1])+this.height/2,this.nodeRadius,0,2*Math.PI),this.context.fillStyle="red",this.context.fill(),this.route+=t,this.currentPos[0]===this.end[0]&&this.currentPos[1]===this.end[1]&&(this.isFinished=!0))},move:function(t){if(!this.isFinished&&!this.solve_btn){var e=t.code;e in this.WSADMap&&this.update(this.WSADMap[e]),this.isFinished&&this.showCompletionDialog()}},showCompletionDialog:function(){var t=this;et.a.post("https://api.noopschallenge.com"+this.finish,{directions:this.route},{headers:{"Content-Type":"application/json"}}).then((function(e){t.completeDialog=!0,t.completed=e.data}))},solve:function(){var t=this;et.a.post("/getMaze",{map:this.map,start:this.currentPos,end:this.end}).then((function(e){t.solution=e.data.path,t.solve_btn=!0;var a=0;t.loop(a)}))},loop:function(t){var e=this;this.timer=setTimeout((function(){e.update(e.solution[t]),e.isFinished&&e.showCompletionDialog(),t++,t<e.solution.length&&e.loop(t)}),this.solve_speed)},stopTimer:function(){this.timer&&(clearTimeout(this.timer),this.timer=0)}}},st=at,it=(a("c970"),a("169a")),nt=a("a722"),rt=a("2fa4"),ot=Object(c["a"])(st,Q,Z,!1,null,"faa3b9d6",null),ct=ot.exports;v()(ot,{VAvatar:R["a"],VBtn:$["a"],VCard:y["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:B["a"],VDialog:it["a"],VIcon:N["a"],VLayout:nt["a"],VListItemTitle:K["c"],VRow:X["a"],VSpacer:rt["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"transparent"}},[a("v-card-title",{staticClass:"headline"},[t._v("Kort beskrivelse:")]),a("v-card-text",{staticClass:"text-left"},[t._v(" Bacheloroppgaven er et samarbeidsprosjekt med "),a("a",{attrs:{href:"https://fabel-media.no/"}},[t._v("Fabel Media")]),t._v(" og går ut på å utvikle en tjeneste for å markedsføre kampanjer gjennom SMS. Tjenestens hovedfunksjon er å spore brukerens interaksjon med kampanjen og presentere data på en oversiktlig måte i en portal som kun utsenderen av SMS-en får tilgang til. "),a("br"),a("br"),t._v("Målet med tjenesten er å kunne effektivisere markedsføringen ved å fokusere på brukere som viser mest interesse i den aktuelle kampanjen. "),a("br"),a("br"),t._v(" Resultatet: Karakter A ")]),a("v-card-actions",[a("v-row",{attrs:{justify:"start"}},[a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-vuejs")])],1)],1),a("v-list-item-title",[t._v("Vue.js")])],1),a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://vuetifyjs.com/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-vuetify")])],1)],1),a("v-list-item-title",[t._v("Vuetify")])],1),a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://www.python.org/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-language-python")])],1)],1),a("v-list-item-title",[t._v("Python")])],1),a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://www.mysql.com/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-database")])],1)],1),a("v-list-item-title",[t._v("MySQL")])],1),a("v-col",{attrs:{cols:"2"}},[a("a",{attrs:{href:"https://www.chartjs.org/",target:"_blank"}},[a("v-avatar",[a("v-icon",[t._v("mdi-chart-areaspline")])],1)],1),a("v-list-item-title",[t._v("Chart.js")])],1)],1)],1)],1)},vt=[],ht={name:"bachelor"},dt=ht,ut=Object(c["a"])(dt,lt,vt,!1,null,"02d85486",null),mt=ut.exports;v()(ut,{VAvatar:R["a"],VCard:y["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:B["a"],VIcon:N["a"],VListItemTitle:K["c"],VRow:X["a"]});var ft={name:"Apps",components:{maze:ct,bachelor:mt},computed:{isMaze:function(){return"/apps/maze"===this.$route.path},isBachelor:function(){return"/apps/bachelor"===this.$route.path}}},pt=ft,bt=(a("e501"),Object(c["a"])(pt,q,J,!1,null,"17386344",null)),gt=bt.exports;v()(bt,{VBtn:$["a"],VCard:y["a"],VCol:B["a"],VRow:X["a"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-card",{staticClass:"mt-12",staticStyle:{padding:"10px"},attrs:{color:"transparent",dark:"",shaped:"",flat:"",width:"90%",height:"88%"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"5"}},[a("v-card",{staticStyle:{padding:"20px"},attrs:{color:"transparent",dark:""}},[a("v-card-title",{staticClass:"justify-center display-1 text-uppercase font-weight-thin",class:{"animate__animated animate__fadeIn animate__slower":3===t.activeSection}},[t._v("Kontaktskjema")]),a("v-form",{ref:"form",staticClass:"text-right",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"E-post",rules:t.fieldRules,"prepend-icon":"mdi-account-question"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Emne",rules:t.fieldRules,"prepend-icon":"mdi-text-subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),a("v-textarea",{attrs:{label:"Innhold",rules:t.fieldRules,rows:"6","no-resize":"","prepend-icon":"mdi-message-text",outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-btn",{attrs:{disabled:!t.valid},on:{click:t.sendMail}},[t._v(" Send "),a("v-icon",{attrs:{right:""}},[t._v("mdi-email-send")])],1)],1)],1)],1),a("v-col",{staticClass:"text-center",attrs:{cols:"1"}},[a("v-divider",{attrs:{vertical:"",color:"white"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-row",{staticStyle:{height:"500px"},attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"12"}},t._l(t.items,(function(e,s){return a("a",{key:s,attrs:{href:e.link,target:"_blank"}},[a("v-list-item",{staticClass:"my-5",attrs:{link:""}},[a("v-list-item-avatar",{class:{"animate__animated animate__fadeIn animate__slower":3===t.activeSection}},[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))]),a("v-list-item-subtitle",[t._v(t._s(e.link))])],1)],1)],1)})),0)],1)],1)],1)],1)],1)},_t=[],wt=(a("b0c0"),{name:"Contact",props:["activeSection"],data:function(){return{valid:!1,fieldRules:[function(t){return!!t||"Dette feiltet er obligatorisk"}],name:"",subject:"",content:"",items:[{name:"LinkedIn",icon:"mdi-linkedin",link:"https://www.linkedin.com/in/shank4r"},{name:"GitHub",icon:"mdi-github",link:"https://www.github.com/Shank4r"},{name:"Instagram",icon:"mdi-instagram",link:"https://www.instagram.com/5hank4r"},{name:"Facebook",icon:"mdi-facebook",link:"https://www.facebook.com/Shank4r"}]}},methods:{sendMail:function(){var t=this,e=new FormData;e.append("name",this.name),e.append("subject",this.subject),e.append("content",this.content),et.a.post("/sendMail",e).then((function(e){200===e.status&&t.$refs.form.reset()}))}}}),kt=wt,yt=(a("33c6"),a("4bd4")),xt=a("8654"),St=a("a844"),Vt=Object(c["a"])(kt,jt,_t,!1,null,"122adfc2",null),Ct=Vt.exports;v()(Vt,{VBtn:$["a"],VCard:y["a"],VCardTitle:x["c"],VCol:B["a"],VDivider:F["a"],VForm:yt["a"],VIcon:N["a"],VListItem:U["a"],VListItemAvatar:G["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VRow:X["a"],VTextField:xt["a"],VTextarea:St["a"]});var Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"fab-container",attrs:{row:""}},[t.isAtBottom?a("v-btn",{attrs:{text:"",color:"transparent"},on:{click:t.moveDown}},[a("v-icon",{attrs:{color:"white"}},[t._v(" mdi-chevron-up ")])],1):a("v-btn",{staticClass:"animate__animated animate__bounce animate__slow",attrs:{text:"",color:"transparent"},on:{click:t.moveUp}},[a("v-icon",{attrs:{color:"white"}},[t._v(" mdi-chevron-down ")])],1)],1)},zt=[],Pt={name:"float_btn",props:["moveUp","moveDown","activeSection"],computed:{isAtBottom:function(){return 3===this.activeSection},isAtTop:function(){return 0===this.activeSection}}},Dt=Pt,At=(a("b3da"),Object(c["a"])(Dt,Mt,zt,!1,null,"00e4dcc8",null)),It=At.exports;v()(At,{VBtn:$["a"],VIcon:N["a"],VLayout:nt["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"text-center caption font-weight-thin animate__animated animate__fadeIn animate__slower",attrs:{fixed:"",padless:"",color:"transparent",dark:""}},[a("v-col",[t._v(" © "+t._s((new Date).getFullYear())+" - Shankar Panchalingam ")])],1)},Ot=[],Et={name:"myfooter"},Lt=Et,Rt=a("553a"),$t=Object(c["a"])(Lt,Tt,Ot,!1,null,"172d9cc2",null),Bt=$t.exports;v()($t,{VCol:B["a"],VFooter:Rt["a"]});var Ft={name:"Main",components:{Home:V,About:H,Apps:gt,Contact:Ct,float_btn:It,myfooter:Bt},data:function(){return{inMove:!1,activeSection:0,offsets:[],nav_btn:[{name:"Hjem",link:"/home",sublink:""},{name:"Om meg",link:"/about",sublink:"/education"},{name:"Applikasjoner",link:"/apps",sublink:"/maze"},{name:"Kontakt",link:"/contact",sublink:""}]}},methods:{calculateSectionOffsets:function(){for(var t=document.getElementsByTagName("section"),e=t.length,a=0;a<e;a++){var s=t[a].offsetTop;this.offsets.push(s)}},handleMouseWheel:function(t){return t.wheelDelta<30&&!this.inMove?this.moveUp():t.wheelDelta>30&&!this.inMove&&this.moveDown(),t.preventDefault(),!1},handleMouseWheelDOM:function(t){return t.detail>0&&!this.inMove?this.moveUp():t.detail<0&&!this.inMove&&this.moveDown(),!1},moveDown:function(){this.activeSection-1>=0&&(this.inMove=!0,this.activeSection--,this.scrollToSection(this.activeSection,!0))},moveUp:function(){this.activeSection+1<this.offsets.length&&(this.inMove=!0,this.activeSection++,this.scrollToSection(this.activeSection,!0))},moveTop:function(){this.inMove=!0,this.activeSection=0,this.scrollToSection(this.activeSection,!0)},scrollToSection:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.inMove&&!a)return!1;var s=null;1===t?s="/about/education":2===t&&(s="/apps/maze");var i=this.nav_btn[t].link;null!==s?this.$router.push(s).catch((function(){})):this.$router.push(i).catch((function(){})),this.activeSection=t,this.inMove=!0,document.getElementsByTagName("section")[t].scrollIntoView({behavior:"smooth"}),setTimeout((function(){e.inMove=!1}),400)}},mounted:function(){var t=this;this.calculateSectionOffsets(),window.addEventListener("DOMMouseScroll",this.handleMouseWheelDOM),window.addEventListener("mousewheel",this.handleMouseWheel,{passive:!1}),this.inMove=!0,this.scrollToSection(this.nav_btn.findIndex((function(e){return e.link==="/"+t.$route.params.part1})),!0)},destroyed:function(){window.removeEventListener("mousewheel",this.handleMouseWheel,{passive:!1}),window.removeEventListener("DOMMouseScroll",this.handleMouseWheelDOM)}},Nt=Ft,Wt=a("40dc"),Ut=Object(c["a"])(Nt,b,g,!1,null,"4df849f9",null),Gt=Ut.exports;v()(Ut,{VAppBar:Wt["a"],VBtn:$["a"]}),s["a"].use(p["a"]);var Kt=[{path:"/:part1/:part2?",name:"Main",component:Gt},{path:"*",redirect:"/home"}],Xt=new p["a"]({mode:"history",base:"/",routes:Kt}),Yt=["home","about","apps","contact"];Xt.beforeEach((function(t,e,a){Yt.includes(t.params.part1)?a():a({path:"/home"})}));var Ht=Xt;et.a.defaults.baseURL="http://backend-env.eba-tx322xry.eu-north-1.elasticbeanstalk.com",s["a"].config.productionTip=!1,new s["a"]({vuetify:f,router:Ht,render:function(t){return t(u)}}).$mount("#app")},8197:function(t,e,a){},"85dc":function(t,e,a){},"890d":function(t,e,a){"use strict";var s=a("e21f"),i=a.n(s);i.a},"8a23":function(t,e,a){},b3da:function(t,e,a){"use strict";var s=a("85dc"),i=a.n(s);i.a},c016:function(t,e,a){t.exports=a.p+"img/uis.c7a64e7b.png"},c3e7:function(t,e,a){t.exports=a.p+"img/profile.e45d5442.png"},c970:function(t,e,a){"use strict";var s=a("8197"),i=a.n(s);i.a},d34e:function(t,e,a){"use strict";var s=a("240a"),i=a.n(s);i.a},e21f:function(t,e,a){},e501:function(t,e,a){"use strict";var s=a("0224"),i=a.n(s);i.a}});
//# sourceMappingURL=app.596fe4f1.js.map