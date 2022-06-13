var Y=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var F=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&F(e,r,t[r]);if(P)for(var r of P(t))Z.call(t,r)&&F(e,r,t[r]);return e},b=(e,t)=>K(e,X(t));import{_ as B,d as H,r as g,o as d,c as E,g as m,a as u,b as l,l as V,m as S,k as $,p as k,t as C,n as O,i as N,v as J,w as G,e as ee}from"./main.ff91f6f2.js";var U={"^":{infix:"_POW"},"*":{infix:"_MUL"},"/":{infix:"_DIV"},"%":{infix:"_MOD"},"+":{infix:"_ADD",prefix:"_POS"},"-":{infix:"_SUB",prefix:"_NEG"}},R=function(e){return e>=0?e<2?1:e*R(e-1):NaN},_={_POW:{name:"Power",precedence:4,associativity:"right",method:function(e,t){return Math.pow(e,t)}},_POS:{name:"Positive",precedence:3,associativity:"right",method:function(e){return e}},_NEG:{name:"Negative",precedence:3,associativity:"right",method:function(e){return-e}},_MUL:{name:"Multiply",precedence:2,associativity:"left",method:function(e,t){return e*t}},_DIV:{name:"Divide",precedence:2,associativity:"left",method:function(e,t){return e/t}},_MOD:{name:"Modulo",precedence:2,associativity:"left",method:function(e,t){return e%t}},_ADD:{name:"Add",precedence:1,associativity:"left",method:function(e,t){return e+t}},_SUB:{name:"Subtract",precedence:1,associativity:"left",method:function(e,t){return e-t}}},j={E:Math.E,LN2:Math.LN2,LN10:Math.LN10,LOG2E:Math.LOG2E,LOG10E:Math.LOG10E,PHI:(1+Math.sqrt(5))/2,PI:Math.PI,SQRT1_2:Math.SQRT1_2,SQRT2:Math.SQRT2,TAU:2*Math.PI},A={ABS:function(e){return Math.abs(e)},ACOS:function(e){return Math.acos(e)},ACOSH:function(e){return Math.acosh(e)},ADD:function(e,t){return e+t},ASIN:function(e){return Math.asin(e)},ASINH:function(e){return Math.asinh(e)},ATAN:function(e){return Math.atan(e)},ATANH:function(e){return Math.atanh(e)},ATAN2:function(e,t){return Math.atan2(e,t)},CBRT:function(e){return Math.cbrt(e)},CEIL:function(e){return Math.ceil(e)},COS:function(e){return Math.cos(e)},COSH:function(e){return Math.cosh(e)},DIVIDE:function(e,t){return e/t},EXP:function(e){return Math.exp(e)},EXPM1:function(e){return Math.expm1(e)},FACTORIAL:R,FLOOR:function(e){return Math.floor(e)},HYPOT:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Math.hypot.apply(Math,e)},LOG:function(e){return Math.log(e)},LOG1P:function(e){return Math.log1p(e)},LOG10:function(e){return Math.log10(e)},LOG2:function(e){return Math.log2(e)},MAX:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Math.max.apply(Math,e)},MEAN:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return[].concat(e).reduce(function(r,o){return r+o},0)/[].concat(e).length},MIN:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Math.min.apply(Math,e)},MOD:function(e,t){return e%t},MULTIPLY:function(e,t){return e*t},POW:function(e,t){return Math.pow(e,t)},SIN:function(e){return Math.sin(e)},SINH:function(e){return Math.sinh(e)},SQRT:function(e){return Math.sqrt(e)},SUBTRACT:function(e,t){return e-t},SUM:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return[].concat(e).reduce(function(r,o){return r+=o,r},0)},TAN:function(e){return Math.tan(e)},TANH:function(e){return Math.tanh(e)}},Q=function(e){return Object.keys(U).includes(e)},te=function(e){return Object.keys(_).includes(e)},I=function(e){return Object.keys(A).includes(e)},T=function(e){return Object.keys(j).includes(e)},L=function(e){return/(\d+\.\d*)|(\d*\.\d+)|(\d+)/.test(e)},f=function(e){return/\(/.test(e)},D=function(e){return/\)/.test(e)},z=function(e){return/,/.test(e)},re=function(e){return/\s/.test(e)},ne=function(e,t){var r=Math.pow(10,t);return r?Math.round(e*r)/r:Math.round(e)};function ae(e,t){if(!e.length)return!1;var r=e[e.length-1];if(!te(r))return!1;var o=_[r],s=_[t];return s.method.length===1&&o.method.length>1?!1:o.precedence>s.precedence?!0:o.precedence===s.precedence&&o.associativity==="left"}function oe(e,t){if(t===void 0||f(t)||Q(t)||z(t))return U[e].prefix;if(D(t)||L(t)||T(t))return U[e].infix}function se(e){if(!e.length)throw Error("No input");var t=/(\d+\.\d*)|(\d*\.\d+)|(\d+)|([a-zA-Z0-9_]+)|(.)/g,r=(e.match(t)||[]).filter(function(o){return!re(o)}).map(function(o){return o.toUpperCase()});return r}function ie(e){if(!e.length)throw Error("No valid tokens");var t=[],r=[],o=[],s=!1;for(e.forEach(function(i,n){if(s&&!f(i))throw Error("Misused method: "+t[t.length-1]);if(s=!1,I(i)){s=!0,t.push(i),r.push(1);return}if(T(i)){o.push(i);return}if(L(i)){o.push(parseFloat(i));return}if(Q(i)){var c=oe(i,e[n-1]),a=_[c];if(a===void 0)throw Error("Misused operator: "+i);for(;ae(t,c);)o.push(t.pop());t.push(c);return}if(f(i)){t.push(i);return}if(z(i)){for(r[r.length-1]+=1;!f(t[t.length-1]);){if(!t.length)throw Error("Invalid token: ,");o.push(t.pop())}return}if(D(i)){for(;!f(t[t.length-1]);){if(!t.length)throw Error("Mismatched parentheses");o.push(t.pop())}if(t.pop(),I(t[t.length-1])){var v=t[t.length-1],y=r.pop();if(y<A[v].length)throw Error("Insufficient arguments for method: "+v);o.push(t.pop()+":"+y)}return}throw Error("Invalid token: "+i)});t.length;){var h=t[t.length-1];if(f(h)||D(h))throw Error("Mismatched parentheses");o.push(t.pop())}return o}function ue(e){if(!e.length)throw Error("No operations");var t=[];if(e.forEach(function(s){if(I(String(s).split(":")[0])){var h=s.split(":"),i=h[0],n=h[1],c=A[i],a=c.length===0,v=a?1:c.length;if(t.length<v)throw Error("Insufficient arguments for method: "+s);var y=c.apply(void 0,t.splice(a?-n:-c.length));t.push(y);return}if(T(s)){t.push(j[s]);return}if(L(s)){t.push(s);return}var p=_[s];if(t.length<p.method.length)throw Error("Insufficient operands for operator: "+p.name);if(s==="_DIV"&&t[t.length-1]===0)throw Error("Division by zero");var W=p.method.apply(p,t.splice(-p.method.length));t.push(W)}),t.length>1)throw Error("Insufficient operators");var r=t[0],o=ne(r,8);return o}function q(e){try{var t=se(e),r=ie(t),o=ue(r);return o}catch(s){throw s}}const le={props:{modelValue:{required:!1},precision:{type:Number,required:!0}},emits:["update:modelValue","show_error_message"],computed:{calculated:{get(){if(this.modelValue==null)return null;try{return q(this.modelValue.toString()).toFixed(this.precision)}catch{return this.$emit("show_error_message","Somethign is wrong..."),this.modelValue}},set(e){this.$emit("show_error_message",null);var t;try{t=q(e)}catch{this.$emit("show_error_message","Insert a numeric value, or a mathematical expression")}this.$emit("update:modelValue",t)}}}},ce=H(b(w({},le),{name:"TransactionsInput",setup(e){return(t,r)=>{const o=g("form-input");return d(),E(o,{value:t.calculated,onChange:r[0]||(r[0]=s=>t.calculated=s.target.value),type:"text"},null,8,["value"])}}}));var M=B(ce,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/transactions/TransactionsInput.vue"]]);const de={key:0,class:"overflow-x-auto"},he={class:"flex flex-wrap gap-2 pb-2"},me=["onUpdate:modelValue","onChange"],fe=["value"],pe=["onUpdate:modelValue"],ge=["value"],_e={class:"flex"},ve=["onClick"],ye=u("span",{class:"material-icons-outlined"},"delete",-1),Me=[ye],we={class:"text-sm text-red-600"},be={class:"flex gap-2 items-center justify-end mt-4"},Ve=u("span",{class:"material-icons-outlined"},"add",-1),Se=u("span",{class:"material-icons-outlined"}," save ",-1),$e={data(){return{form:{guid:null,currency_guid:null,post_date:null,enter_date:null,num:null,description:null,splits:null},error_message:null}},async created(){this.$route.name==="transactions.create"?await this.store.get(`/phmoney/transactions/${this.$route.params.account_pk}/create`):await this.store.get(`/phmoney/transactions/${this.$route.params.account_pk}/edit/${this.$route.params.transaction_pk}`),this.form={guid:this.store.props.transaction.guid,currency_guid:this.store.props.transaction.currency_guid,post_date:this.store.props.transaction.post_date,enter_date:this.store.props.transaction.enter_date,num:this.store.props.transaction.num,description:this.store.props.transaction.description,splits:this.store.props.splits},this.validate()},methods:{async submit(){this.$router.back(),this.store.props.submit_route==="transactions.store"?await this.store.post(`/phmoney/transactions/${this.$route.params.account_pk}/store`,this.form):await this.store.post(`/phmoney/transactions/${this.$route.params.account_pk}/update/${this.$route.params.transaction_pk}`,this.form)},calculate(e){e.account=this.store.props.accounts.find(r=>r.guid===e.account_guid),e.value_denom=e.account.commodity.fraction,e.quantity_denom=e.account.commodity.fraction;let t=e.debit*e.value_denom-e.credit*e.value_denom;t>0?e.debit=Math.abs(t/e.value_denom).toFixed(e.value_denom.toString().length-1):e.debit=null,t<0?e.credit=Math.abs(t/e.value_denom).toFixed(e.value_denom.toString().length-1):e.credit=null,e.value_num=t,e.account.account_type=="STOCK"||e.account.account_type=="FUND"?(e.quantity_num=e.shares*e.quantity_denom,e.price=Math.abs(t/e.value_denom/e.shares).toFixed(e.value_denom.toString().length-1)):(e.quantity_num=e.value_num,e.price=null),this.validate()},validate(){this.error_message=null;let e=0;for(let t=0;t<this.form.splits.length;t++)this.form.splits[t].account_guid===null&&(this.error_message="Choose account for all the splits."),e=e+parseFloat(this.form.splits[t].value_num/this.form.splits[t].value_denom);isNaN(e)||e!=0&&(this.error_message="The sum of all splits must be zero")},destroy(e){this.error_message=null,this.form.splits.splice(e,1),this.form.splits.length<2?this.error_message="You must have at least two splits":this.validate()},async create(){this.error_message=null,this.$route.name==="transactions.create"?await this.store.get(`/phmoney/transactions/${this.$route.params.account_pk}/create`):await this.store.get(`/phmoney/transactions/${this.$route.params.account_pk}/edit/${this.$route.params.transaction_pk}`),this.form.splits.push(this.store.props.new_split),this.form.splits.length<2?this.error_message="You must have at least two splits":this.validate()},show_error_message(e){this.error_message=e}}},Ce=H(b(w({},$e),{name:"TransactionsEdit",setup(e){return(t,r)=>{const o=g("form-label"),s=g("form-input"),h=g("form-secondary-button"),i=g("form-button");return t.form.guid?(d(),m("div",de,[u("form",{onSubmit:r[3]||(r[3]=ee((...n)=>t.submit&&t.submit(...n),["prevent"])),class:"p-6"},[u("div",he,[u("div",null,[l(o,{for:"post_date",value:"Date"}),l(s,{id:"post_date",type:"date",modelValue:t.form.post_date,"onUpdate:modelValue":r[0]||(r[0]=n=>t.form.post_date=n),required:""},null,8,["modelValue"])]),u("div",null,[l(o,{for:"num",value:"Num"}),l(s,{id:"num",type:"text",modelValue:t.form.num,"onUpdate:modelValue":r[1]||(r[1]=n=>t.form.num=n)},null,8,["modelValue"])]),u("div",null,[l(o,{for:"description",value:"Description"}),l(s,{id:"description",type:"text",modelValue:t.form.description,"onUpdate:modelValue":r[2]||(r[2]=n=>t.form.description=n)},null,8,["modelValue"])])]),(d(!0),m(V,null,S(t.form.splits,(n,c)=>(d(),m("div",{class:"grid grid-cols-1 md:grid-cols-7 gap-2 pb-2",key:c},[l(s,{modelValue:n.action,"onUpdate:modelValue":a=>n.action=a,type:"text",id:"action",name:"action",placeholder:"Action..."},null,8,["modelValue","onUpdate:modelValue"]),l(s,{modelValue:n.memo,"onUpdate:modelValue":a=>n.memo=a,type:"text",id:"memo",name:"memo",placeholder:"Memo..."},null,8,["modelValue","onUpdate:modelValue"]),$(u("select",{id:"parent_guid","onUpdate:modelValue":a=>n.account_guid=a,onChange:a=>t.calculate(n),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(d(!0),m(V,null,S(t.store.props.accounts,a=>(d(),m("option",{key:a.pk,value:a.guid},C(a.name),9,fe))),128))],40,me),[[k,n.account_guid]]),$(u("select",{id:"reconcile_state","onUpdate:modelValue":a=>n.reconcile_state=a,class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(d(!0),m(V,null,S(t.store.props.reconcile_states,a=>(d(),m("option",{key:a,value:a},C(a),9,ge))),128))],8,pe),[[k,n.reconcile_state]]),l(M,{modelValue:n.debit,"onUpdate:modelValue":a=>n.debit=a,precision:n.precision,onShow_error_message:t.show_error_message,id:"debit",name:"debit",onChange:a=>t.calculate(n),class:O({"bg-gray-100":n.account===null}),disabled:n.account===null,placeholder:"Debit..."},null,8,["modelValue","onUpdate:modelValue","precision","onShow_error_message","onChange","class","disabled"]),l(M,{modelValue:n.credit,"onUpdate:modelValue":a=>n.credit=a,precision:n.precision,onShow_error_message:t.show_error_message,id:"credit",name:"credit",onChange:a=>t.calculate(n),class:O({"bg-gray-100":n.account===null}),disabled:n.account===null,placeholder:"Credit..."},null,8,["modelValue","onUpdate:modelValue","precision","onShow_error_message","onChange","class","disabled"]),n.account!==null&&(n.account.account_type=="STOCK"||n.account.account_type=="FUND")?(d(),E(M,{key:0,modelValue:n.shares,"onUpdate:modelValue":a=>n.shares=a,precision:n.precision_shares,onShow_error_message:t.show_error_message,id:"shares",name:"shares",onChange:a=>t.calculate(n),placeholder:"Shares..."},null,8,["modelValue","onUpdate:modelValue","precision","onShow_error_message","onChange"])):N("v-if",!0),n.account!==null&&(n.account.account_type=="STOCK"||n.account.account_type=="FUND")?(d(),E(M,{key:1,modelValue:n.price,"onUpdate:modelValue":a=>n.price=a,precision:n.precision_shares,onShow_error_message:t.show_error_message,id:"price",name:"price",onChange:t.calculate,placeholder:"Price...",class:"bg-gray-100",disabled:""},null,8,["modelValue","onUpdate:modelValue","precision","onShow_error_message","onChange"])):N("v-if",!0),u("div",_e,[u("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:a=>t.destroy(c),title:"Delete"},Me,8,ve)])]))),128)),$(u("div",null,[u("p",we,C(t.error_message),1)],512),[[J,t.error_message]]),u("div",be,[l(h,{onClick:t.create,title:"Create"},{default:G(()=>[Ve]),_:1},8,["onClick"]),l(i,{class:O({"opacity-25":t.store.processing||t.error_message!==null}),disabled:t.store.processing||t.error_message!==null,title:"Save"},{default:G(()=>[Se]),_:1},8,["class","disabled"])])],32)])):N("v-if",!0)}}}));var Ee=B(Ce,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/transactions/TransactionsEdit.vue"]]);export{Ee as T};