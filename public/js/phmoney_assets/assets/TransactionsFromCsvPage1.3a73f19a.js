var d=Object.defineProperty,h=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(a,e,t)=>e in a?d(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,i=(a,e)=>{for(var t in e||(e={}))v.call(e,t)&&r(a,t,e[t]);if(n)for(var t of n(e))g.call(e,t)&&r(a,t,e[t]);return a},c=(a,e)=>h(a,f(e));import{_ as l,r as m,o as p,g as b,a as o,b as u,w as _,f as w,d as x,c as k}from"./main.ff91f6f2.js";const y={},C={class:"p-6"},F=o("p",null," This assistant will help you import a delimited file containing a list of transactions. It supports both token separated files (such as comma separated or semi-colon separated) and fixed width data. ",-1),T=o("p",null,[w(" For a successful import four columns have to be available in the import data: "),o("ul",null,[o("li",null," a Date column "),o("li",null," an Amount column "),o("li",null," Source account column "),o("li",null," Destination account column ")])],-1),S=o("p",null," If there is no Account data available, a base account can be selected to which all data will be imported. ",-1),$=o("p",null," Apart from a choise of delimiter, there are several options to tweak the importer. For example a number of lines can be skipped. Several date date and number formats are supported. ",-1),P=o("p",null," Lastly, for repeated imports the preview page has buttons to Load and Save the settings. To save the settings, tweak the settings to your preferences (optionally starting from an existing preset), then (optionally) change the settings name and press the Save Settings button. ",-1),B={class:"flex items-center justify-end mt-4 gap-2"},L=o("span",{class:"material-icons-outlined"},"navigate_next",-1);function N(a,e){const t=m("form-button");return p(),b("div",C,[F,T,S,$,P,o("div",B,[u(t,{onClick:e[0]||(e[0]=s=>a.$router.push({name:"import.transactions_from_csv.page2"})),title:"Next"},{default:_(()=>[L]),_:1})])])}var V=l(y,[["render",N],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/import/transactions_from_csv/TransactionsFromCsvPage1.vue"]]);const A={class:"bg-white shadow mt-4 prose max-w-none"},I={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page1")}},D=x(c(i({},I),{name:"TransactionsFromCsvPage1",setup(a){return(e,t)=>{const s=m("FormLayout");return p(),k(s,{title:"Import Transactions from CSV"},{default:_(()=>[o("div",A,[u(V)])]),_:1})}}}));var q=l(D,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/import/transactions_from_csv/TransactionsFromCsvPage1.vue"]]);export{q as default};