(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c840cf4"],{"11e9":function(e,t,r){var n=r("52a7"),o=r("4630"),a=r("6821"),i=r("6a99"),s=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=a(e),t=i(t,!0),c)try{return l(e,t)}catch(r){}if(s(e,t))return o(!n.f.call(e,t),e[t])}},"5dbc":function(e,t,r){var n=r("d3f4"),o=r("8b97").set;e.exports=function(e,t,r){var a,i=t.constructor;return i!==r&&"function"==typeof i&&(a=i.prototype)!==r.prototype&&n(a)&&o&&o(e,a),e}},"8b97":function(e,t,r){var n=r("d3f4"),o=r("cb7c"),a=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,r){return a(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:a}},9093:function(e,t,r){var n=r("ce10"),o=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},aa77:function(e,t,r){var n=r("5ca1"),o=r("be13"),a=r("79e5"),i=r("fdef"),s="["+i+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(e,t,r){var o={},s=a(function(){return!!i[e]()||c[e]()!=c}),l=o[e]=s?t(v):i[e];r&&(o[r]=l),n(n.P+n.F*s,"String",o)},v=d.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},c5f6:function(e,t,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("2d95"),i=r("5dbc"),s=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,d=r("86cc").f,v=r("aa77").trim,f="Number",p=n[f],m=p,h=p.prototype,g=a(r("2aeb")(h))==f,_="trim"in String.prototype,b=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=_?t.trim():v(t,3);var r,n,o,a=t.charCodeAt(0);if(43===a||45===a){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,c=t.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>o)return NaN;return parseInt(c,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(g?c(function(){h.valueOf.call(r)}):a(r)!=f)?i(new m(b(t)),r,p):b(t)};for(var x,w=r("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)o(m,x=w[k])&&!o(p,x)&&d(p,x,u(m,x));p.prototype=h,h.constructor=p,r("2aba")(n,f,p)}},f1c3:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[e.showResult?r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("span",{staticClass:"title"},[e._v("Asignación de recolectores a lotes de café")])]),r("v-container",[r("show-assignment",{attrs:{recolectores:e.result}})],1)],1):e._e(),e.showError?r("v-flex",{attrs:{xs12:""}},[r("v-container",[r("v-alert",{attrs:{value:!0,color:"error",icon:"warning",outline:""}},[e._v(e._s(e.message))])],1)],1):e._e(),e.waiting?r("v-flex",[r("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}}),r("h1",[e._v("Esto puede tomar unos minutos")])],1):e._e(),e.showResult||e.waiting?e._e():r("v-flex",{attrs:{xs12:""}},[r("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("Información de lotes")]),r("v-divider"),r("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("Información de recolectores")])],1),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mb-5"},[r("v-form",[r("v-container",[r("h2",[e._v("Información de lotes")]),e._l(e.lotes,function(t){return r("div",{key:"lote"+t.id},[r("v-layout",{attrs:{column:e.$vuetify.breakpoint.mdAndDown,row:!e.$vuetify.breakpoint.mdAndDown}},[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.initi",value:"numeric|required",expression:"'numeric|required'",modifiers:{initi:!0}}],attrs:{label:"Kg de café","data-vv-as":"Kg de café",name:"lote"+t.id,"error-messages":e.errors.collect("lote"+t.id),required:""},model:{value:t.kg,callback:function(r){e.$set(t,"kg",r)},expression:"lote.kg"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-radio-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Pendiente de inclinación",name:"pendiente"+t.id,"data-vv-as":"Pendiente","error-messages":e.errors.collect("pendiente"+t.id)},model:{value:t.pendiente,callback:function(r){e.$set(t,"pendiente",r)},expression:"lote.pendiente"}},[r("v-radio",{attrs:{label:"mayor al 200%",value:2}}),r("v-radio",{attrs:{label:"101% - 200%",value:1}}),r("v-radio",{attrs:{label:"20% - 100%",value:0}})],1)],1),0!=t.id?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-btn",{attrs:{color:"error"},nativeOn:{click:function(r){return function(){return e.deleteLote(t.id)}()}}},[r("v-icon",[e._v("delete")])],1)],1):e._e()],1)],1)}),r("v-layout",[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-btn",{attrs:{color:"warning"},nativeOn:{click:function(t){return e.addLote(t)}}},[e._v("\n                        Añadir Lote\n                        "),r("v-icon",{attrs:{dark:"",right:""}},[e._v("add")])],1)],1)],1)],2)],1)],1),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v("Siguiente")])],1),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticClass:"mb-5"},[r("v-form",[r("v-container",[r("h2",[e._v("Información de recolectores")]),e._l(e.recolectores,function(t){return r("div",{key:"recolector"+t.id},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"numeric|required",expression:"'numeric|required'"}],attrs:{label:"Numero de recolectores",name:"recolectores"+t.id,"error-messages":e.errors.collect("recolectores"+t.id),disabled:!t.group,required:""},model:{value:t.num,callback:function(r){e.$set(t,"num",r)},expression:"recolector.num"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-radio-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"Rendimiento",name:"rendimiento"+t.id,"data-vv-as":"Rendimiento","error-messages":e.errors.collect("rendimiento"+t.id)},model:{value:t.rendimiento,callback:function(r){e.$set(t,"rendimiento",r)},expression:"recolector.rendimiento"}},[r("v-radio",{attrs:{label:"Alto rendimiento",value:2}}),r("v-radio",{attrs:{label:"Medio rendimiento",value:1}}),r("v-radio",{attrs:{label:"Bajo rendimiento",value:0}})],1)],1),r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-switch",{attrs:{label:"Grupo"},model:{value:t.group,callback:function(r){e.$set(t,"group",r)},expression:"recolector.group"}})],1),0!=t.id?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-btn",{attrs:{color:"error"},nativeOn:{click:function(r){return function(){return e.deleteRecolector(t.id)}()}}},[r("v-icon",[e._v("delete")])],1)],1):e._e()],1)],1)}),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-btn",{attrs:{color:"warning"},nativeOn:{click:function(t){return e.addRecolector(t)}}},[e._v("\n                        Añadir recolector\n                        "),r("v-icon",{attrs:{dark:"",right:""}},[e._v("add")])],1)],1)],1)],2)],1)],1),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=1}}},[e._v("Atras")]),r("v-btn",{attrs:{color:"success"},nativeOn:{click:function(t){return e.calcular(t)}}},[e._v("Calcular")])],1)],1)],1)],1)],1)],1)},o=[],a=(r("c5f6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.recolectores,"hide-actions":!0},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.name))]),e._l(t.item.lotes,function(t){return r("td",{key:t.name,staticClass:"text-xs-center"},[e._v("\n        "+e._s(t.hours)+" horas\n    ")])})]}}])})}),i=[],s={name:"ShowAssignment",props:{recolectores:Array},computed:{headers:function(){for(var e=[{text:"Recolector / Lotes",align:"center",sortable:!1,value:"name"}],t=0;t<this.$props.recolectores[0].lotes.length;t++)e.push({text:"Lote ".concat(t+1),sortable:!1,name:"lote_".concat(t+1),align:"center"});return e}}},c=s,l=r("2877"),u=Object(l["a"])(c,a,i,!1,null,null,null),d=u.exports,v={name:"StaffAssignment",components:{ShowAssignment:d},data:function(){return{recolectores:[{id:0,num:1,rendimiento:"",group:!1}],lotes:[{id:0,kg:"",pendiente:""}],result:[],message:"",showError:!1,showResult:!1,token:"",refreshId:"",waiting:!1,e1:1}},methods:{addRecolector:function(){this.recolectores.push({id:this.recolectores[this.recolectores.length-1].id+1,num:1,rendimiento:"",group:!1})},deleteRecolector:function(e){this.recolectores=this.recolectores.filter(function(t){return t.id!=e})},addLote:function(){this.lotes.push({id:this.lotes[this.lotes.length-1].id+1,kg:"",pendiente:""})},deleteLote:function(e){this.lotes=this.lotes.filter(function(t){return t.id!==e})},assignValue:function(e){this.lota=e,this.showResult=!0},calcular:function(){var e=this;this.showError=!1,this.$validator.validate().then(function(t){if(t){for(var r=[],n=[],o=[],a=0;a<e.recolectores.length;a++)for(var i=e.recolectores[a],s=0;s<i.num;s++)r.push(Number(i.rendimiento));for(var c=0;c<e.lotes.length;c++){var l=e.lotes[c];n.push(l.pendiente),o.push(l.kg)}e.waiting=!0,eel.scheduler(r,n,o)(function(t){e.waiting=!1,e.result=t,e.showResult=!0})}else e.e1=1})}}},f=v,p=Object(l["a"])(f,n,o,!1,null,null,null);t["default"]=p.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-4c840cf4.52f368fc.js.map