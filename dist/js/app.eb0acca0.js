(function(e){function t(t){for(var n,s,i=t[0],r=t[1],l=t[2],b=0,d=[];b<i.length;b++)s=i[b],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,i=1;i<c.length;i++){var r=c[i];0!==a[r]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=r;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function a(e,t,c,a,o,s){var i=Object(n["x"])("Navbar"),r=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(i),Object(n["h"])(r)],64)}var o={class:"navbar"},s={class:"logo"},i=Object(n["f"])("img",{src:"https://logos-download.com/wp-content/uploads/2016/03/Subway_logo_white.png",alt:"Subway",style:{width:"6rem"}},null,-1),r={class:"buttons-bar"},l=Object(n["f"])("div",{class:"button"},"SOBRE",-1),u=Object(n["f"])("div",{class:"button"},"HISTORICO",-1);function b(e,t){var c=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("div",o,[Object(n["f"])("div",s,[Object(n["h"])(c,{to:"/"},{default:Object(n["E"])((function(){return[i]})),_:1})]),Object(n["f"])("div",r,[Object(n["h"])(c,{to:"/sobre"},{default:Object(n["E"])((function(){return[l]})),_:1}),Object(n["h"])(c,{to:"/historico"},{default:Object(n["E"])((function(){return[u]})),_:1})])])}c("8497");var d=c("6b0d"),f=c.n(d);const p={},j=f()(p,[["render",b]]);var O=j,h={components:{Navbar:O}};c("a1ab");const m=f()(h,[["render",a]]);var v=m,w=c("6c02"),g=Object(n["f"])("div",{class:"header text-center mt-10 mb-10"},[Object(n["f"])("h1",{class:"text-4xl"},"Apenas um pré-visualizador de pedidos feito em Vue.js"),Object(n["f"])("p",{class:""},"Oque acha de deixar seu lanche pré-pensado antes de entrar na fila pra evitar problemas?")],-1),x={key:0,class:"sandwich-form mb-5"},y={class:"input-container"},q=Object(n["f"])("label",{for:"pao",class:"mr-2"},"Escolha o tipo de pão: ",-1),k=["value"],_={class:"input-container"},S=Object(n["f"])("label",{for:"tamanho",class:"mr-2"},"Escolha o tamanho: ",-1),z=Object(n["f"])("option",{value:"15cm"},"15 cm",-1),V=Object(n["f"])("option",{value:"30cm"},"30 cm",-1),C=[z,V],E={class:"input-container"},R=Object(n["f"])("label",{for:"recheio",class:"mr-2"},"Escolha o recheio: ",-1),A=["value"],P={class:"input-container"},F=Object(n["f"])("label",{for:"queijo",class:"mr-2"},"Escolha o queijo: ",-1),T=["value"],B={id:"vegetais-container",class:"input-container"},L=Object(n["f"])("label",{id:"vegetais-title",for:"vegetais"},"Selecione os vegetais:",-1),M=["value"],U={id:"molhos-container",class:"input-container"},I=Object(n["f"])("label",{id:"molhos-title",for:"molhos"},"Selecione os molhos:",-1),H=["value"],J={id:"adicionais-container",class:"input-container"},N=Object(n["f"])("label",{id:"adicionais-title",for:"adicionais"},"Selecione os adicionais:",-1),D=["value"],Q=Object(n["f"])("div",{class:"input-container text-center mt-5"},[Object(n["f"])("input",{type:"submit",class:"submit-btn",value:"Salvar"})],-1);function G(e,t,c,a,o,s){var i=Object(n["x"])("alert");return Object(n["q"])(),Object(n["e"])(n["a"],null,[g,this.alert?(Object(n["q"])(),Object(n["e"])("div",x,[Object(n["h"])(i,{danger:!1,message:this.mensagem},null,8,["message"])])):Object(n["d"])("",!0),Object(n["f"])("form",{class:"sandwich-form",id:"sandwich-form",onSubmit:t[7]||(t[7]=function(){return s.postSandwich&&s.postSandwich.apply(s,arguments)})},[Object(n["f"])("div",y,[q,Object(n["F"])(Object(n["f"])("select",{name:"pao",id:"pao","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.pao=e})},[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.paes,(function(e){return Object(n["q"])(),Object(n["e"])("option",{key:e.id,value:e.tipo},Object(n["z"])(e.tipo),9,k)})),128))],512),[[n["C"],o.pao]])]),Object(n["f"])("div",_,[S,Object(n["F"])(Object(n["f"])("select",{name:"tamanho",id:"tamanho","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tamanho=e})},C,512),[[n["C"],o.tamanho]])]),Object(n["f"])("div",E,[R,Object(n["F"])(Object(n["f"])("select",{name:"recheio",id:"recheio","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.recheio=e})},[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.recheios,(function(e){return Object(n["q"])(),Object(n["e"])("option",{key:e.id,value:e.tipo},Object(n["z"])(e.tipo),9,A)})),128))],512),[[n["C"],o.recheio]])]),Object(n["f"])("div",P,[F,Object(n["F"])(Object(n["f"])("select",{name:"queijo",id:"queijo","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.queijo=e})},[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.queijos,(function(e){return Object(n["q"])(),Object(n["e"])("option",{key:e.id,value:e.tipo},Object(n["z"])(e.tipo),9,T)})),128))],512),[[n["C"],o.queijo]])]),Object(n["f"])("div",B,[L,(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.vegetais_data,(function(e){return Object(n["q"])(),Object(n["e"])("div",{class:"checkbox-container",key:e.id},[Object(n["F"])(Object(n["f"])("input",{type:"checkbox",name:"vegetais","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.vegetais=e}),value:e.tipo},null,8,M),[[n["B"],o.vegetais]]),Object(n["f"])("span",null,Object(n["z"])(e.tipo),1)])})),128))]),Object(n["f"])("div",U,[I,(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.molhos_data,(function(e){return Object(n["q"])(),Object(n["e"])("div",{class:"checkbox-container",key:e.id},[Object(n["F"])(Object(n["f"])("input",{type:"checkbox",name:"molhos","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.molhos=e}),value:e.tipo},null,8,H),[[n["B"],o.molhos]]),Object(n["f"])("span",null,Object(n["z"])(e.tipo),1)])})),128))]),Object(n["f"])("div",J,[N,(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.adicionais_data,(function(e){return Object(n["q"])(),Object(n["e"])("div",{class:"checkbox-container",key:e.id},[Object(n["F"])(Object(n["f"])("input",{type:"checkbox",name:"adicionais","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.adicionais=e}),value:e.tipo},null,8,D),[[n["B"],o.adicionais]]),Object(n["f"])("span",null,Object(n["z"])(e.tipo),1)])})),128))]),Q],32)],64)}var K=c("1da1"),W=(c("96cf"),c("d3b7"),c("a630"),c("3ca3"),c("e9c4"),{key:0,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"}),X=Object(n["f"])("strong",{class:"font-bold"},"Oops! ",-1),Y={class:"block sm:inline"},Z={class:"absolute top-0 bottom-0 right-0 px-4 py-3"},$=Object(n["f"])("title",null,"Close",-1),ee=Object(n["f"])("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"},null,-1),te=[$,ee],ce={key:1,class:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",role:"alert"},ne=Object(n["f"])("strong",{class:"font-bold"},"Sucesso! ",-1),ae={class:"block sm:inline"},oe={class:"absolute top-0 bottom-0 right-0 px-4 py-3"},se=Object(n["f"])("title",null,"Close",-1),ie=Object(n["f"])("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"},null,-1),re=[se,ie];function le(e,t,c,a,o,s){return Object(n["q"])(),Object(n["e"])(n["a"],null,[c.danger?(Object(n["q"])(),Object(n["e"])("div",W,[X,Object(n["f"])("span",Y,Object(n["z"])(c.message),1),Object(n["f"])("span",Z,[(Object(n["q"])(),Object(n["e"])("svg",{class:"fill-current h-6 w-6 text-red-500",role:"button",onClick:t[0]||(t[0]=function(){return s.close&&s.close.apply(s,arguments)}),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},te))])])):Object(n["d"])("",!0),c.danger?Object(n["d"])("",!0):(Object(n["q"])(),Object(n["e"])("div",ce,[ne,Object(n["f"])("span",ae,Object(n["z"])(c.message),1),Object(n["f"])("span",oe,[(Object(n["q"])(),Object(n["e"])("svg",{class:"fill-current h-6 w-6 text-red-500",role:"button",onClick:t[1]||(t[1]=function(){return s.close&&s.close.apply(s,arguments)}),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},re))])]))],64)}var ue={name:"Alert",props:{message:String,danger:Boolean},data:function(){return{closed:!1}},methods:{close:function(){window.location.reload(!0)}}};const be=f()(ue,[["render",le]]);var de=be,fe={components:{Alert:de},data:function(){return{paes:null,recheios:null,queijos:null,vegetais_data:null,vegetais:[],molhos_data:null,molhos:[],adicionais_data:null,adicionais:[],pao:null,tamanho:null,recheio:null,queijo:null,mensagem:null,alert:!1}},methods:{getIngredientes:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/ingredientes");case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,e.paes=n.paes,e.recheios=n.recheios,e.queijos=n.queijos,e.vegetais_data=n.vegetais,e.molhos_data=n.molhos,e.adicionais_data=n.adicionais;case 12:case"end":return t.stop()}}),t)})))()},postSandwich:function(e){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function c(){var n,a,o;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return e.preventDefault(),n={pao:t.pao,recheio:t.recheio,queijo:t.queijo,tamanho:t.tamanho,vegetais:Array.from(t.vegetais),molhos:Array.from(t.molhos),adicionais:Array.from(t.adicionais)},a=JSON.stringify(n),c.next=5,fetch("http://localhost:3000/historico",{method:"POST",headers:{"Content-Type":"application/json"},body:a});case 5:return o=c.sent,c.next=8,o.json();case 8:c.sent,t.pao="",t.recheio="",t.queijo="",t.tamanho="",t.vegetais="",t.molhos="",t.adicionais="",t.alert=!0,t.mensagem="Adicionado ao histórico!";case 17:case"end":return c.stop()}}),c)})))()}},mounted:function(){this.getIngredientes()}};c("6ae9");const pe=f()(fe,[["render",G]]);var je=pe,Oe=function(e){return Object(n["t"])("data-v-757a964f"),e=e(),Object(n["r"])(),e},he={class:"antialiased bg-gray-100 text-gray-600 h-screen px-4"},me={class:"flex flex-col justify-center mt-4"},ve={class:"w-full mx-auto bg-white shadow-lg rounded-sm border border-grey-200"},we=Oe((function(){return Object(n["f"])("header",{class:"px-5 py-4 border-b border-gray-100"},[Object(n["f"])("h2",{class:"font-semibold text-gray-800"},"Sanduiches:")],-1)})),ge={class:"p-3"},xe={class:"overflow-x-auto"},ye={class:"table-auto w-full"},qe=Oe((function(){return Object(n["f"])("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[Object(n["f"])("tr",null,[Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"#")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Pão")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Tamanho")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Recheio")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Queijo")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Vegetal")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Molhos")]),Object(n["f"])("th",{class:"p-2 whitespace-nowrap"},[Object(n["f"])("div",{class:"font-semibold text-left"},"Adicionais")])])],-1)})),ke={class:"p-2 whitespace-nowrap"},_e={class:"text-left"},Se={class:"p-2 whitespace-nowrap"},ze={class:"text-left"},Ve={class:"p-2 whitespace-nowrap"},Ce={class:"text-left"},Ee={class:"p-2 whitespace-nowrap"},Re={class:"text-left"},Ae={class:"p-2 whitespace-nowrap"},Pe={class:"text-left"},Fe={class:"p-2 whitespace-nowrap"},Te={class:"text-left"},Be={class:"p-2 whitespace-nowrap"},Le={class:"text-left"},Me={class:"p-2 whitespace-nowrap"},Ue={class:"text-left"},Ie=Oe((function(){return Object(n["f"])("p",{class:"button mt-3 text-center w-50"},"Limpar histórico",-1)})),He=[Ie];function Je(e,t,c,a,o,s){return Object(n["q"])(),Object(n["e"])("section",he,[Object(n["f"])("div",me,[Object(n["f"])("div",ve,[we,Object(n["f"])("div",ge,[Object(n["f"])("div",xe,[Object(n["f"])("table",ye,[qe,(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(o.sandwich_list,(function(e){return Object(n["q"])(),Object(n["e"])("tbody",{class:"text-sm divide-y divide-gray-100",key:e.id},[Object(n["f"])("tr",null,[Object(n["f"])("td",ke,[Object(n["f"])("div",_e,Object(n["z"])(e.id),1)]),Object(n["f"])("td",Se,[Object(n["f"])("div",ze,Object(n["z"])(e.pao),1)]),Object(n["f"])("td",Ve,[Object(n["f"])("div",Ce,Object(n["z"])(e.tamanho),1)]),Object(n["f"])("td",Ee,[Object(n["f"])("div",Re,Object(n["z"])(e.recheio),1)]),Object(n["f"])("td",Ae,[Object(n["f"])("div",Pe,Object(n["z"])(e.queijo),1)]),Object(n["f"])("td",Fe,[Object(n["f"])("div",Te,Object(n["z"])(e.vegetais),1)]),Object(n["f"])("td",Be,[Object(n["f"])("div",Le,Object(n["z"])(e.molhos),1)]),Object(n["f"])("td",Me,[Object(n["f"])("div",Ue,Object(n["z"])(e.adicionais),1)])])])})),128))])])])])]),Object(n["f"])("div",{class:"justify-center w-full flex mt-5",onClick:t[0]||(t[0]=function(){return s.deleteSandwiches&&s.deleteSandwiches.apply(s,arguments)})},He)])}var Ne={data:function(){return{sandwich_list:null,sandwich_amount:null}},methods:{getSandwiches:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/historico");case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,e.sandwich_list=n,e.sandwich_amount=e.sandwich_list.length;case 8:case"end":return t.stop()}}),t)})))()},deleteSandwiches:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var c,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c=e.sandwich_list,n=0;case 2:if(!(n<c.length)){t.next=12;break}return t.next=5,fetch("http://localhost:3000/historico/".concat(n+1),{method:"DELETE"});case 5:return a=t.sent,t.next=8,a.json();case 8:t.sent;case 9:n++,t.next=2;break;case 12:window.location.reload(!0);case 13:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getSandwiches()}};c("72f0");const De=f()(Ne,[["render",Je],["__scopeId","data-v-757a964f"]]);var Qe=De,Ge=Object(n["g"])('<div class="logo text-center"><a href="https://github.com/lucianowayand/subway_generator"><img src="https://download.logo.wine/logo/Vue.js/Vue.js-Logo.wine.png" style="width:40rem;display:initial;"></a></div><div class="header text-center mt-10 mb-10"><h1 class="text-4xl">Apenas um pré-visualizador de pedidos feito em Vue.js</h1></div><div class="text-center"><p class=""> Feito em Vue.js com objetivo de aplicação de conhecimentos da tecnologia. Trás uma solução a indecisão e esquecimento na hora de pedir seu sanduiche. </p></div>',3);function Ke(e,t){return Ge}const We={},Xe=f()(We,[["render",Ke]]);var Ye=Xe,Ze=[{path:"/",name:"Home",component:je},{path:"/historico",name:"Historico",component:Qe},{path:"/sobre",name:"Sobre",component:Ye}],$e=Object(w["a"])({history:Object(w["b"])("/"),routes:Ze}),et=$e;c("ba8c");Object(n["c"])(v).use(et).mount("#app")},"5ab1":function(e,t,c){},"6ae9":function(e,t,c){"use strict";c("8ccf")},"6c40":function(e,t,c){},"72f0":function(e,t,c){"use strict";c("bb00")},8497:function(e,t,c){"use strict";c("6c40")},"8ccf":function(e,t,c){},a1ab:function(e,t,c){"use strict";c("5ab1")},ba8c:function(e,t,c){},bb00:function(e,t,c){}});
//# sourceMappingURL=app.eb0acca0.js.map