var C=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var f=(p,o,m)=>o in p?C(p,o,{enumerable:!0,configurable:!0,writable:!0,value:m}):p[o]=m,y=(p,o)=>{for(var m in o||(o={}))S.call(o,m)&&f(p,m,o[m]);if(b)for(var m of b(o))j.call(o,m)&&f(p,m,o[m]);return p};import{_ as D,r,o as u,g as d,a as l,b as n,n as a,k as v,p as V,F as U,m as x,t as T,w as g,e as B,i as N,d as E,c as F}from"./main.e98d045c.js";const I={async created(){await this.store.get(`/phmoney/teams/${this.store.user.current_team_id}/options/show`),this.props=y({},this.store.props),this.form.options=this.props.options},data(){return{props:null,form:{options:{accounting_period:{date_start:null,date_end:null},business:{company_name:null,company_address:null,company_contact_person:null,company_phone_number:null,company_fax_number:null,company_email_address:null,company_website_url:null,company_id:null,default_customer_taxtable:null,default_vendor_taxtable:null},tax:{tax_number:null},counters:{bill:null,vendor:null,invoice:null,job:null,employee:null},counter_formats:{bill:null,vendor:null,invoice:null,job:null,employee:null}}}}},methods:{async submit(){let p=this.store.props.team.id;await this.store.put(`/phmoney/teams/${p}/options/store`,this.form),this.store.errors===null&&(this.store.errors="Settings Saved Successfully!"),this.$router.back()}}},A={key:0,class:"p-6"},L={class:"grid grid-cols-6 gap-6"},P=l("div",{class:"col-span-6 sm:col-span-6"},[l("h4",{class:"text-md font-bold text-gray-900"},"Accounting Period")],-1),J={class:"col-span-6 sm:col-span-3"},M={class:"col-span-6 sm:col-span-3"},z=l("div",{class:"col-span-6 sm:col-span-6"},[l("h4",{class:"text-md font-bold text-gray-900"},"Business")],-1),W={class:"col-span-6 sm:col-span-2"},q={class:"col-span-6 sm:col-span-2"},G={class:"col-span-6 sm:col-span-2"},H={class:"col-span-6 sm:col-span-2"},K={class:"col-span-6 sm:col-span-2"},O={class:"col-span-6 sm:col-span-2"},Q={class:"col-span-6 sm:col-span-4"},R={class:"col-span-6 sm:col-span-2"},X={class:"col-span-6 sm:col-span-2"},Y=l("option",{value:null,class:"text-gray-500"},"Select Tax Table",-1),Z=["value"],$={class:"col-span-6 sm:col-span-4"},ss=l("option",{value:null,class:"text-gray-500"},"Select Tax Table",-1),os=["value"],es=l("div",{class:"col-span-6 sm:col-span-6 border-t pt-2"},[l("h4",{class:"text-md font-bold text-gray-900"},"Tax")],-1),ns={class:"col-span-6 sm:col-span-2"},ls=l("div",{class:"col-span-6 sm:col-span-6 border-t pt-2"},[l("h4",{class:"text-md font-bold text-gray-900"},"Counters")],-1),ts={class:"col-span-6 sm:col-span-2"},as={class:"col-span-6 sm:col-span-4"},is={class:"col-span-6 sm:col-span-2"},ps={class:"col-span-6 sm:col-span-4"},ms={class:"col-span-6 sm:col-span-2"},rs={class:"col-span-6 sm:col-span-4"},us={class:"col-span-6 sm:col-span-2"},ds={class:"col-span-6 sm:col-span-4"},cs={class:"col-span-6 sm:col-span-2"},_s={class:"col-span-6 sm:col-span-4"},bs=l("span",{class:"material-icons-outlined"}," save ",-1);function fs(p,o,m,c,s,_){const t=r("form-label"),w=r("FormDateStart"),k=r("FormDateEnd"),i=r("form-input"),h=r("form-button");return s.props?(u(),d("div",A,[l("form",{onSubmit:o[23]||(o[23]=B((...e)=>_.submit&&_.submit(...e),["prevent"]))},[l("div",L,[P,l("div",J,[n(t,{for:"accounting_period_date_start",value:"Start Date"}),n(w,{id:"accounting_period_date_start",name:"accounting_period_date_start",modelValue:s.form.options.accounting_period.date_start,"onUpdate:modelValue":o[0]||(o[0]=e=>s.form.options.accounting_period.date_start=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled"])]),l("div",M,[n(t,{for:"accounting_period_date_end",value:"End Date"}),n(k,{id:"accounting_period_date_end",name:"accounting_period_date_end",modelValue:s.form.options.accounting_period.date_end,"onUpdate:modelValue":o[1]||(o[1]=e=>s.form.options.accounting_period.date_end=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled"])]),z,l("div",W,[n(t,{for:"business_company_name",value:"Company Name"}),n(i,{id:"business_company_name",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_name,"onUpdate:modelValue":o[2]||(o[2]=e=>s.form.options.business.company_name=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",q,[n(t,{for:"business_company_address",value:"Company Address"}),n(i,{id:"business_company_address",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_address,"onUpdate:modelValue":o[3]||(o[3]=e=>s.form.options.business.company_address=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",G,[n(t,{for:"business_company_contact_person",value:"Company Contact Person"}),n(i,{id:"business_company_contact_person",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_contact_person,"onUpdate:modelValue":o[4]||(o[4]=e=>s.form.options.business.company_contact_person=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",H,[n(t,{for:"business_company_phone_number",value:"Company Phone Number"}),n(i,{id:"business_company_phone_number",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_phone_number,"onUpdate:modelValue":o[5]||(o[5]=e=>s.form.options.business.company_phone_number=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",K,[n(t,{for:"business_company_fax_number",value:"Company Fax Number"}),n(i,{id:"business_company_fax_number",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_fax_number,"onUpdate:modelValue":o[6]||(o[6]=e=>s.form.options.business.company_fax_number=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",O,[n(t,{for:"business_company_email_address",value:"Company Email Number"}),n(i,{id:"business_company_email_address",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_email_address,"onUpdate:modelValue":o[7]||(o[7]=e=>s.form.options.business.company_email_address=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",Q,[n(t,{for:"business_company_website_url",value:"Company Website Url"}),n(i,{id:"business_company_website_url",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_website_url,"onUpdate:modelValue":o[8]||(o[8]=e=>s.form.options.business.company_website_url=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",R,[n(t,{for:"business_company_id",value:"Company ID"}),n(i,{id:"business_company_id",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.business.company_id,"onUpdate:modelValue":o[9]||(o[9]=e=>s.form.options.business.company_id=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",X,[n(t,{for:"business_default_customer_taxtable",value:"Default Customer Tax Table"}),v(l("select",{id:"business_default_customer_taxtable","onUpdate:modelValue":o[10]||(o[10]=e=>s.form.options.business.default_customer_taxtable=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[Y,(u(!0),d(U,null,x(s.props.taxtables,e=>(u(),d("option",{key:e.guid,value:e},T(e.name),9,Z))),128))],512),[[V,s.form.options.business.default_customer_taxtable]])]),l("div",$,[n(t,{for:"business_default_vendor_taxtable",value:"Default Vendor Tax Table"}),v(l("select",{id:"business_default_vendor_taxtable","onUpdate:modelValue":o[11]||(o[11]=e=>s.form.options.business.default_vendor_taxtable=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[ss,(u(!0),d(U,null,x(s.props.taxtables,e=>(u(),d("option",{key:e.guid,value:e},T(e.name),9,os))),128))],512),[[V,s.form.options.business.default_vendor_taxtable]])]),es,l("div",ns,[n(t,{for:"tax_number",value:"Tax Number"}),n(i,{id:"tax_number",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.tax.tax_number,"onUpdate:modelValue":o[12]||(o[12]=e=>s.form.options.tax.tax_number=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),ls,l("div",ts,[n(t,{for:"bill_number",value:"Bill number"}),n(i,{id:"bill_number",type:"number",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.bill,"onUpdate:modelValue":o[13]||(o[13]=e=>s.form.options.counters.bill=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",as,[n(t,{for:"bill_number_format",value:"Bill number format"}),n(i,{id:"bill_number_format",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.bill,"onUpdate:modelValue":o[14]||(o[14]=e=>s.form.options.counter_formats.bill=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",is,[n(t,{for:"vendor_number",value:"Vendor number"}),n(i,{id:"vendor_number",type:"number",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.vendor,"onUpdate:modelValue":o[15]||(o[15]=e=>s.form.options.counters.vendor=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",ps,[n(t,{for:"vendor_number_format",value:"Vendor number format"}),n(i,{id:"vendor_number_format",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.vendor,"onUpdate:modelValue":o[16]||(o[16]=e=>s.form.options.counter_formats.vendor=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",ms,[n(t,{for:"invoice_number",value:"Invoice number"}),n(i,{id:"invoice_number",type:"number",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.invoice,"onUpdate:modelValue":o[17]||(o[17]=e=>s.form.options.counters.invoice=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",rs,[n(t,{for:"vendor_number_format",value:"Invoice number format"}),n(i,{id:"invoice_number_format",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.invoice,"onUpdate:modelValue":o[18]||(o[18]=e=>s.form.options.counter_formats.invoice=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",us,[n(t,{for:"job_number",value:"Job number"}),n(i,{id:"job_number",type:"number",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.job,"onUpdate:modelValue":o[19]||(o[19]=e=>s.form.options.counters.job=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",ds,[n(t,{for:"job_number_format",value:"Job number format"}),n(i,{id:"job_number_format",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.job,"onUpdate:modelValue":o[20]||(o[20]=e=>s.form.options.counter_formats.job=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",cs,[n(t,{for:"employee_number",value:"Employee number"}),n(i,{id:"employee_number",type:"number",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counters.employee,"onUpdate:modelValue":o[21]||(o[21]=e=>s.form.options.counters.employee=e),min:"0",disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])]),l("div",_s,[n(t,{for:"job_number_format",value:"Employee number format"}),n(i,{id:"employee_number_format",type:"text",class:a(["mt-1 block w-full",{"opacity-50":!s.props.permissions.canUpdateTeam}]),modelValue:s.form.options.counter_formats.employee,"onUpdate:modelValue":o[22]||(o[22]=e=>s.form.options.counter_formats.employee=e),disabled:!s.props.permissions.canUpdateTeam},null,8,["modelValue","disabled","class"])])]),n(h,{class:a(["mt-4",{"opacity-25":p.store.processing}]),disabled:p.store.processing||!s.props.permissions.canUpdateTeam,title:"Save"},{default:g(()=>[bs]),_:1},8,["class","disabled"])],32)])):N("",!0)}var ys=D(I,[["render",fs]]);const vs={class:"bg-white shadow mt-4 prose max-w-none"},xs=E({name:"BookSettingsIndex",setup(p){return(o,m)=>{const c=r("AppLayout");return u(),F(c,{title:"Book Settings"},{default:g(()=>[l("div",vs,[n(ys)])]),_:1})}}});export{xs as default};
