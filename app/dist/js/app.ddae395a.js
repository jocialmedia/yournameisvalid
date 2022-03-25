(function(){"use strict";var e={7618:function(e,n,a){var t=a(9242),l=a(3396);function r(e,n,a,t,r,o){const s=(0,l.up)("NavBar"),i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s),(0,l.Wm)(i)],64)}const o={id:"nav"},s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i={class:"container"},u=(0,l.Uk)("How to validate Names"),c=(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},g={class:"navbar-nav ms-auto"},_={class:"nav-item"},h=(0,l.Uk)("Languages"),p={class:"nav-item"},m=(0,l.Uk)("Test Cases"),f={class:"nav-item"},b=(0,l.Uk)("About"),v=(0,l._)("div",{class:"alert alert-danger"},[(0,l._)("strong",null,"Please beware:"),(0,l.Uk)(" This is a prototype and work in progress. More information and content are in the "),(0,l._)("a",{href:"https://github.com/jocialmedia/how-to-validate-names"},"repository on Github")],-1);function w(e,n,a,t,r,w){const y=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("nav",s,[(0,l._)("div",i,[(0,l.Wm)(y,{class:"navbar-brand",to:"/"},{default:(0,l.w5)((()=>[u])),_:1}),c,(0,l._)("div",d,[(0,l._)("ul",g,[(0,l._)("li",_,[(0,l.Wm)(y,{class:"nav-link",to:"/languages"},{default:(0,l.w5)((()=>[h])),_:1})]),(0,l._)("li",p,[(0,l.Wm)(y,{class:"nav-link",to:"/test-cases"},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l._)("li",f,[(0,l.Wm)(y,{class:"nav-link",to:"/about"},{default:(0,l.w5)((()=>[b])),_:1})])])])])]),v])}var y={name:"NavBar",components:{}},k=a(89);const D=(0,k.Z)(y,[["render",w]]);var L=D,O={name:"App",components:{NavBar:L}};const T=(0,k.Z)(O,[["render",r]]);var z=T,C=a(678);const H={class:"container"},j={class:"row"};function x(e,n,a,t,r,o){const s=(0,l.up)("PlayWithNames");return(0,l.wg)(),(0,l.iD)("div",H,[(0,l._)("div",j,[(0,l.Wm)(s)])])}const I={class:"hello"},E=(0,l._)("h2",null,"Play With Names",-1),N=(0,l.uE)('<div class="panel-body"><ul><li> Input: <span id="input"></span></li><li> Number of characters: <span id="number_of_chars"></span></li><li> Number of individual characters: <span id="number_of_individual_chars"></span></li><li> Individual Characters: <span id="characters"></span></li></ul></div>',1);function P(e,n,a,r,o,s){return(0,l.wg)(),(0,l.iD)("div",I,[E,(0,l._)("form",null,[(0,l.wy)((0,l._)("input",{class:"form-control input-lg","onUpdate:modelValue":n[0]||(n[0]=n=>e.input_full_name=n),id:"input_full_name",placeholder:"Full name",type:"text"},null,512),[[t.nr,e.input_full_name]])]),N])}var S={name:"PlayWithNames",props:{msg:String},data(){return{original_input:"",number_of_chars:0,number_of_individual_chars:0,input:""}},mounted(){document.getElementById("input_full_name").addEventListener("keyup",this.analyze)},methods:{analyze:function(e){console.log(e),console.log(this);let n="",a="",t=0,l=0;function r(e,n){return e.localeCompare(n)}n=document.getElementById("input_full_name").value,a=n,n=n.trim(),n=n.replace(/\s/g,""),n=n.toLowerCase(),t=n.length,n=Array.from(new Set(n)),l=n.length,n=n.sort(r),document.getElementById("input").innerHTML=a,document.getElementById("number_of_chars").innerHTML=t,document.getElementById("number_of_individual_chars").innerHTML=l,document.getElementById("characters").innerHTML=n}}};const U=(0,k.Z)(S,[["render",P]]);var W=U,M={name:"HomePage",components:{PlayWithNames:W}};const A=(0,k.Z)(M,[["render",x]]);var B=A,Z=a(7139);const Y={class:"container"},K={class:"row"},F=(0,l._)("h1",null,"Languages and Alphabets",-1),V=(0,l._)("h2",null,"Languages",-1),G={class:"table table-bordered table-striped"},J=(0,l._)("thead",null,[(0,l._)("th",null,"ID"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Local Name"),(0,l._)("th",null,[(0,l.Uk)("ISO"),(0,l._)("span",{class:"nowrap"},"639-2")]),(0,l._)("th",null,"On national level"),(0,l._)("th",null,"On subnational level"),(0,l._)("th",null,[(0,l._)("span",{class:"nowrap"},"EU language"),(0,l.Uk)(),(0,l._)("br"),(0,l.Uk)("since")])],-1),R=["href"],q=(0,l._)("h2",null,"Alphabets",-1),Q=(0,l._)("p",null,[(0,l.Uk)("Red color marks characters which are not part of "),(0,l._)("a",{href:"https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet"},"ISO Basic Latin 1"),(0,l.Uk)(".")],-1),X={class:"table table-bordered table-striped"},$=(0,l._)("thead",null,[(0,l._)("th",null,"ID"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Alphabet")],-1);function ee(e,n,a,t,r,o){return(0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("div",K,[F,V,(0,l._)("table",G,[J,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.languages_filtered,((e,n)=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,Z.zw)(n+1),1),(0,l._)("td",null,[(0,l._)("a",{href:e.wikipedia_en},(0,Z.zw)(e.language),9,R)]),(0,l._)("td",null,(0,Z.zw)(e.local_name),1),(0,l._)("td",null,(0,Z.zw)(e.iso_639_2),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.spoken_national_level,(e=>((0,l.wg)(),(0,l.iD)("span",{key:e.id},(0,Z.zw)(e)+", ",1)))),128))]),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.spoken_subnational_level,(e=>((0,l.wg)(),(0,l.iD)("span",{key:e.id},(0,Z.zw)(e)+", ",1)))),128))]),(0,l._)("td",null,(0,Z.zw)(e.eu_language_since),1)])))),128))])]),q,Q,(0,l._)("table",X,[$,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.languages_filtered,((e,n)=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,Z.zw)(n+1),1),(0,l._)("td",null,(0,Z.zw)(e.language),1),(0,l._)("td",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.alphabet_chars_checked,(e=>((0,l.wg)(),(0,l.iD)("span",{key:e.id,class:(0,Z.C_)(["letter",e.split("-")[1]])},(0,Z.zw)(e.split("-")[0]),3)))),128))])])))),128))])])])])}var ne={name:"LanguagesPage",data(){return{data:{},languages:[],languages_filtered:[],alphabet_chars_checked:[]}},components:{},methods:{async getName(){const e=await fetch("https://api.agify.io/?name=michael"),n=await e.json();this.data=n},async getLanguages(){let e="data/languages.json";const n=await fetch(e),a=await n.json();this.languages=a,this.getFilteredLanguages()},async getFilteredLanguages(){this.languages_filtered=this.languages.filter((e=>e.category.includes("eu"))),this.getLanguageCoverage()},async getLanguageCoverage(){let e=this.languages[7].alphabet_chars;console.log(typeof this.languages[7].alphabet_chars);for(var n=0;n<this.languages.length;n++){var a=this.languages[n];let l=a.alphabet_chars.length,r=[];for(var t=0;t<l;t++){if(e.includes(a.alphabet_chars[t])){let e=a.alphabet_chars[t]+"-covered_by_latin_1";r.push(e)}else{let e=a.alphabet_chars[t]+"-not_covered_by_latin_1";r.push(e)}this.languages[n]["alphabet_chars_checked"]=r}}this.languages_filtered=this.languages.filter((e=>e.category.includes("eu")))}},watch:{},beforeCreate(){console.log("beforeCreate")},beforeMount(){console.log("beforeMount"),this.getLanguages()},mounted(){console.log("mounted"),this.getFilteredLanguages()},updated(){console.log("updated")}};const ae=(0,k.Z)(ne,[["render",ee]]);var te=ae;const le={class:"container"},re={class:"row"},oe=(0,l._)("h1",null,"Test Cases",-1),se=(0,l._)("p",null,"WIP.",-1),ie={class:"table table-bordered table-striped"},ue=(0,l._)("thead",null,[(0,l._)("th"),(0,l._)("th"),(0,l._)("th")],-1);function ce(e,n,a,t,r,o){return(0,l.wg)(),(0,l.iD)("div",le,[(0,l._)("div",re,[oe,se,(0,l._)("table",ie,[ue,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filteredTestCases,((e,n)=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,Z.zw)(n+1),1),(0,l._)("td",null,(0,Z.zw)(e.language),1),(0,l._)("td",null,(0,Z.zw)(e.use_case),1),(0,l._)("td",null,(0,Z.zw)(e.example_first_name),1),(0,l._)("td",null,(0,Z.zw)(e.example_last_name),1)])))),128))])])])])}var de=a(6265),ge=a.n(de),_e={name:"TestCases",data(){return{test_cases:[],filteredTestCases:[]}},components:{},mounted(){ge().get("data/test-data.json").then((e=>{const n=e.data;this.filteredTestCases=n}))}};const he=(0,k.Z)(_e,[["render",ce]]);var pe=he;const me={class:"container"},fe=(0,l._)("div",{class:"row"},[(0,l._)("h1",null,"About"),(0,l._)("h2",null,"Impressum"),(0,l._)("p",null,"Verantwortlich: J. Leistikow, Eidelstedter Weg 103, 20255 Hamburg")],-1),be=[fe];function ve(e,n,a,t,r,o){return(0,l.wg)(),(0,l.iD)("div",me,be)}var we={name:"AboutPage",components:{}};const ye=(0,k.Z)(we,[["render",ve]]);var ke=ye;const De=(0,l._)("h1",null,"404",-1),Le=(0,l._)("p",null,"Sorry but it looks like the page you are looking for does not exist.",-1);function Oe(e,n){return(0,l.wg)(),(0,l.iD)(l.HY,null,[De,Le],64)}const Te={},ze=(0,k.Z)(Te,[["render",Oe]]);var Ce=ze;const He=[{path:"/",name:"Home",component:B},{path:"/languages",name:"Languages",component:te},{path:"/test-cases",name:"Test Cases",component:pe},{path:"/about",name:"About",component:ke},{path:"/:catchAll(.*)",component:Ce}],je=(0,C.p7)({history:(0,C.r5)(),routes:He});var xe=je,Ie=(a(8937),a(6423));const Ee=(0,t.ri)(z);Ee.use(Ie.Z,ge()),Ee.use(xe),Ee.mount("#app")}},n={};function a(t){var l=n[t];if(void 0!==l)return l.exports;var r=n[t]={id:t,loaded:!1,exports:{}};return e[t](r,r.exports,a),r.loaded=!0,r.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(n,t,l,r){if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],l=e[c][1],r=e[c][2];for(var s=!0,i=0;i<t.length;i++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[i])}))?t.splice(i--,1):(s=!1,r<o&&(o=r));if(s){e.splice(c--,1);var u=l();void 0!==u&&(n=u)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,l,r]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var l,r,o=t[0],s=t[1],i=t[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var c=i(a)}for(n&&n(t);u<o.length;u++)r=o[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},t=self["webpackChunkapp"]=self["webpackChunkapp"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(7618)}));t=a.O(t)})();
//# sourceMappingURL=app.ddae395a.js.map