var p=Object.defineProperty,d=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(e,o,s)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,r=(e,o)=>{for(var s in o||(o={}))v.call(o,s)&&n(e,s,o[s]);if(a)for(var s of a(o))h.call(o,s)&&n(e,s,o[s]);return e},c=(e,o)=>d(e,l(o));import{_,o as m,g as u,a as t,d as f,r as g,c as w,w as C,b as x}from"./main.ff91f6f2.js";const F={},k={class:"p-6"},P=t("div",{class:"prose max-w-none"},[t("p",null,"Import Completed!!!")],-1),T=[P];function b(e,o){return m(),u("div",k,T)}var y=_(F,[["render",b],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/import/transactions_from_csv/TransactionsFromCsvPage4.vue"]]);const B={class:"bg-white shadow mt-4 prose max-w-none"},$={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page4")}},I=f(c(r({},$),{name:"TransactionsFromCsvPage4",setup(e){return(o,s)=>{const i=g("FormLayout");return m(),w(i,{title:"Import Completed"},{default:C(()=>[t("div",B,[x(y)])]),_:1})}}}));var V=_(I,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/import/transactions_from_csv/TransactionsFromCsvPage4.vue"]]);export{V as default};