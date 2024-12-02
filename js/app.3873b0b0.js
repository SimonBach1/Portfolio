(function(){"use strict";var e={1124:function(e,t,n){var r=n(2856),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Menu"),t("router-view")],1)},i=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar"},[t("NavItem",{attrs:{to:"/",label:"Acceuil"}}),t("NavItem",{attrs:{to:"/present-me",label:"Qui suis-je ?"}}),t("NavItem",{attrs:{to:"/template-texte",label:"Mon entreprise"}}),t("NavItem",{attrs:{to:"/template-texte",label:"Flexio c'est quoi ?"}}),t("NavItem",{attrs:{to:"/template-texte",label:"Mon développement de compétences"}})],1)},l=[],s=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"card",attrs:{to:e.to,"exact-active-class":"active"},domProps:{textContent:e._s(e.label)}})},u=[],p={name:"NavItem",props:{to:{type:String,required:!0},label:{type:String,required:!0}}},c=p,m=n(1656),d=(0,m.A)(c,s,u,!1,null,"370d1c82",null),f=d.exports,v={name:"MenuTemplate",components:{NavItem:f}},g=v,x=(0,m.A)(g,o,l,!1,null,"7ce5656a",null),h=x.exports,b={name:"App",components:{Menu:h}},y=b,T=(0,m.A)(y,a,i,!1,null,null,null),_=T.exports,C=n(1594),j=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Portfolio : Troisième année de BUT à l'IUT de Nord Franche-Comté")]),t("h2",[e._v("SIMON BACH")]),t("div",{staticClass:"image-text-container"},[t("template-image",{attrs:{imagePath:"/images/acceuil/profil.jpg",altText:"Profil utilisateur",maxWidth:"800px",maxHeight:"600px"}}),t("TemplateTexte",{attrs:{content:e.htmlContent}})],1)])},A=[],I=function(){var e=this,t=e._self._c;return t("div",{class:["card-container",e.alignmentClass]},[t("div",{staticClass:"card"},[t("div",{staticClass:"image-container"},[t("img",{style:{maxWidth:e.maxWidth,maxHeight:e.maxHeight},attrs:{src:e.imagePath,alt:e.altText}})]),t("div",{staticClass:"caption"},[t("p",[e._v(e._s(e.caption))])])])])},q=[],P={name:"TemplateImage",props:{imagePath:{type:String,required:!0},altText:{type:String,default:"Image"},maxWidth:{type:String,default:"300px"},maxHeight:{type:String,default:"200px"},caption:{type:String,default:""},alignment:{type:String,default:"center",validator:e=>["left","right","center"].includes(e)}},computed:{alignmentClass(){return`align-${this.alignment}`}}},O=P,M=(0,m.A)(O,I,q,!1,null,"4a7be671",null),w=M.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-container",domProps:{innerHTML:e._s(e.content)}})},N=[],H={name:"TemplateTexte",props:{content:{type:String,required:!0}}},L=H,k=(0,m.A)(L,S,N,!1,null,"283ee8a7",null),F=k.exports,B={name:"AccueilTemplate",components:{TemplateTexte:F,TemplateImage:w},data(){return{htmlContent:'        <div style="text-align: center">Bienvenue sur mon portfolio !</div><br><br>\n        <div style="text-align: justify">\n          Ce portfolio se compose de plusieurs parties :<br><br>\n          <div style="padding-left: 5%">\n            - La première sera une courte présentation de moi-même et de mon rôle au sein de mon entreprise<br><br>\n            - La seconde sera une présentation de mon entreprise Flexio<br><br>\n            - La troisième sera une explication de l\'environnment autour du logiciel homonyme que développe Flexio <br><br>\n            - La quatrième sera la démonstration des compétences que nous devons acquérir tout au long de cette année <br><br>\n          </div>\n        </div>'}}},W=B,U=(0,m.A)(W,j,A,!1,null,"e67d2dbe",null),Q=U.exports,$=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Ma présentation")]),t("h2",[e._v("SIMON BACH")]),t("div",{staticClass:"image-text-container"},[t("template-image",{attrs:{imagePath:"/images/acceuil/profil.jpg",altText:"Profil utilisateur",maxWidth:"800px",maxHeight:"600px"}}),t("TemplateTexte",{attrs:{content:e.htmlContent}})],1)])},E=[],z={name:"PresentMe",components:{TemplateTexte:F,TemplateImage:w},data(){return{htmlContent:'        <div style="text-align: center">Qui suis-je ?</div><br><br>\n        <div style="text-align: justify">\n          <div style="padding-left: 5%">\nÉtudiant en 3ᵉ année de BUT Informatique, actuellement en 2ᵉ année d&apos;alternance. <br> Passionné par le développement, je mets en pratique mes compétences à travers des projets<br> en entreprise, où je développe des solutions concrètes et apprends chaque jour.<br>Les missions que l&apos;on me confie sont :  <br><br>\n- L&apos;ajout de nouvelles fonctionnalités dans le logiciel Flexio (remaniement de code existant ou nouveau projet <br><br>\n- Assurer la maintenance des projets que j&apos;ai développé depuis mon arrivée en septembre 2023          </div>\n        </div>'}}},D=z,G=(0,m.A)(D,$,E,!1,null,"ffe77630",null),J=G.exports;r.Ay.use(C.Ay);var K=new C.Ay({mode:"history",routes:[{path:"/",name:"Accueil",component:Q},{path:"/template-image",name:"TemplateImage",component:w},{path:"/template-texte",name:"TemplateTexte",component:F},{path:"/present-me",name:"PresentMe",component:J}]});r.Ay.config.productionTip=!1,new r.Ay({router:K,render:e=>e(_)}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(p=0;p<e.length;p++){r=e[p][0],a=e[p][1],i=e[p][2];for(var l=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(l=!1,i<o&&(o=i));if(l){e.splice(p--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var p=s(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1124)}));r=n.O(r)})();
//# sourceMappingURL=app.3873b0b0.js.map