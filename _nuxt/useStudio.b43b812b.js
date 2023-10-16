import{r as te,u as D,d as ne,a as G,b as L,o as oe,_ as ie,c as se,e as q,f as $,n as ae,F as re,g as h,h as K,i as B,w as z,T as H,t as de,j as V,p as ce,k as ue,l as le,m as pe,q as W,s as E,v as U,x as fe,y as F}from"./entry.f00f0a2d.js";import{q as ve,u as we}from"./query.38b0fcd2.js";import"./preview.01990867.js";function O(e){return e!==null&&typeof e=="object"}function J(e,o,r=".",c){if(!O(o))return J(e,{},r,c);const l=Object.assign({},o);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const f=e[i];f!=null&&(c&&c(l,i,f,r)||(Array.isArray(f)&&Array.isArray(l[i])?l[i]=[...f,...l[i]]:O(f)&&O(l[i])?l[i]=J(f,l[i],(r?`${r}.`:"")+i.toString(),c):l[i]=f))}return l}function Q(e){return(...o)=>o.reduce((r,c)=>J(r,c,"",e),{})}const Z=Q(),_e=Q((e,o,r)=>{if(typeof e[o]<"u"&&typeof r=="function")return e[o]=r(e[o]),!0}),he={nuxt:{}},ye=_e(he);function X(){const e=D();return e._appConfig||(e._appConfig=te(ye)),e._appConfig}const b=e=>(ce("data-v-2b9f80bf"),e=e(),ue(),e),me=b(()=>h("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),ge=b(()=>h("span",null,"Preview mode enabled",-1)),ke={key:0},Ce=b(()=>h("div",{id:"__preview_background"},null,-1)),Ie=b(()=>h("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Pe=b(()=>h("p",null,"Initializing the preview...",-1)),Se={key:0},xe=b(()=>h("div",{id:"__preview_background"},null,-1)),Te={id:"__preview_loader"},Ae=ne({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(e){const o=e,r=["__nuxt_preview","__preview_enabled"],c=D(),l=G(),i=L(!0),f=L(!1),a=L(!1),p=L("");let d;const m=async()=>{V("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await l.replace({query:{preview:void 0}}),window.location.reload()},R=async x=>{const y=await o.syncPreview(x);if(a.value!==!0){if(!y){setTimeout(()=>R(x),1e3);return}V("previewToken").value&&(a.value=!0,await l.replace({query:{}}),c.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&d.disconnect())}};return oe(async()=>{d=(await ie(()=>import("./index.17e44084.js"),[],import.meta.url)).connect(`${o.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:o.previewToken}});let y;d.on("connect",()=>{y=setTimeout(()=>{a.value||(y=setTimeout(()=>{p.value="Preview sync timed out",a.value=!1},3e4),d.emit("draft:requestSync"))},3e4)});const I=()=>{y&&(clearTimeout(y),y=null)};d.on("draft:sync",async P=>{if(I(),!P){try{d.once("draft:ready",()=>{d.emit("draft:requestSync")}),await o.requestPreviewSyncAPI()}catch(T){switch(I(),T.response.status){case 404:p.value="Preview draft not found",a.value=!1;break;default:p.value="An error occurred while syncing preview",a.value=!1}}return}R(P)}),d.on("draft:unauthorized",()=>{I(),p.value="Unauthorized preview token",a.value=!1}),d.on("disconnect",()=>{I()}),document.body.classList.add(...r),d.on("draft:update",P=>{f.value=!0,o.syncPreview(P),f.value=!1})}),se(()=>{document.body.classList.remove(...r)}),(x,y)=>(q(),$("div",null,[i.value?(q(),$("div",{key:0,id:"__nuxt_preview",class:ae({__preview_ready:a.value,__preview_refreshing:f.value})},[a.value?(q(),$(re,{key:0},[me,ge,h("button",{onClick:m}," Close ")],64)):K("",!0)],2)):K("",!0),B(H,{name:"preview-loading"},{default:z(()=>[i.value&&!a.value&&!p.value?(q(),$("div",ke,[Ce,h("div",{id:"__preview_loader"},[Ie,Pe,h("button",{onClick:m}," Cancel ")])])):K("",!0)]),_:1}),B(H,{name:"preview-loading"},{default:z(()=>[p.value?(q(),$("div",Se,[xe,h("div",Te,[h("p",null,de(p.value),1),h("button",{onClick:m}," Exit preview ")])])):K("",!0)]),_:1})]))}});const be=le(Ae,[["__scopeId","data-v-2b9f80bf"]]),Re=(e=[],o,r)=>{const c=[...o||[]],l=[...r||[]],i=JSON.parse(JSON.stringify(e));for(const a of c)if(a.oldPath)if(l.splice(l.findIndex(d=>d.path===a.oldPath),1),c.find(d=>d.path===a.oldPath))i.push({path:a.path,parsed:a.parsed});else{const d=i.find(m=>m.path===a.oldPath);d&&(d.path=a.path,a.parsed?d.parsed=a.parsed:a.pathMeta&&["_file","_path","_id","_locale"].forEach(m=>{d.parsed[m]=a.pathMeta[m]}))}else if(a.new)i.push({path:a.path,parsed:a.parsed});else{const p=i.find(d=>d.path===a.path);p&&Object.assign(p,{path:a.path,parsed:a.parsed})}for(const a of l)i.splice(i.findIndex(p=>p.path===a.path),1);const f=new Intl.Collator(void 0,{numeric:!0});return i.sort((a,p)=>f.compare(a.path,p.path)),i},C={appConfig:"app.config.ts",tokensConfig:"tokens.config.ts"},qe=e=>{let o;return(...r)=>(o||(o=e()),o)};function Y(e,o){for(const r in e){const c=o[r];r in o||delete e[r],c!==null&&typeof c=="object"&&Y(e[r],o[r])}}function j(e,o){for(const r in o){const c=o[r];c!==null&&typeof c=="object"?(e[r]=e[r]||{},j(e[r],c)):e[r]=c}}const $e=qe(()=>JSON.parse(JSON.stringify(X()))),Ue=()=>{const e=D(),{studio:o,content:r}=pe().public,c=$e();let l;const i=W("studio-client-db",()=>null),f=W("studio-preview-db-files",()=>[]);i.value||(e.hook("content:storage",t=>{i.value=t}),ve("/non-existing-path").findOne());const a=async(t,s,u=!0)=>{const w=window.sessionStorage.getItem("previewToken"),_=await t.getKeys(`${w}:`);await Promise.all(_.map(v=>t.removeItem(v)));const n=new Set(s.map(v=>v.parsed._id.split(":").shift()));await t.setItem(`${w}$`,JSON.stringify({ignoreSources:Array.from(n)})),await Promise.all(s.map(v=>t.setItem(`${w}:${v.parsed._id}`,JSON.stringify(v.parsed))))},p=t=>{const s=U(e,X);j(s,Z(t,c)),t||Y(s,c)},d=t=>{var u,w,_,n;const s=(n=(_=(w=(u=e==null?void 0:e.vueApp)==null?void 0:u._context)==null?void 0:w.config)==null?void 0:_.globalProperties)==null?void 0:n.$pinceauTheme;!s||!(s!=null&&s.updateTheme)||(l||(l=JSON.parse(JSON.stringify((s==null?void 0:s.theme.value)||{}))),U(e,s.updateTheme,[Z(t,l)]))},m=async t=>{if(f.value=t.files=t.files||f.value||[],!i.value)return!1;const s=Re(t.files,t.additions,t.deletions),u=s.filter(n=>![C.appConfig,C.tokensConfig].includes(n.path));await a(i.value,u,(t.files||[]).length!==0);const w=s.find(n=>n.path===C.appConfig);p(w==null?void 0:w.parsed);const _=s.find(n=>n.path===C.tokensConfig);return d(_==null?void 0:_.parsed),T(),!0},R=async()=>{const t=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:o==null?void 0:o.apiURL,method:"POST",params:{token:t}})},x=()=>{const t=window.sessionStorage.getItem("previewToken"),s=document.createElement("div");s.id="__nuxt_preview_wrapper",document.body.appendChild(s),fe(be,{previewToken:t,apiURL:o==null?void 0:o.apiURL,syncPreview:m,requestPreviewSyncAPI:R}).mount(s)},y=async t=>{var w,_,n;const s=window.sessionStorage.getItem("previewToken");if(!t)return null;t=t.replace(/\/$/,"");let u=await((w=i.value)==null?void 0:w.getItem(`${s}:${t}`));return u||(u=await((_=i.value)==null?void 0:_.getItem(`cached:${t}`))),u||(u=u=await((n=i.value)==null?void 0:n.getItem(t))),u},I=t=>{var u;const s=window.sessionStorage.getItem("previewToken");i.value&&i.value.setItem(`${s}:${(u=t.parsed)==null?void 0:u._id}`,JSON.stringify(t.parsed))},P=async t=>{var u;const s=window.sessionStorage.getItem("previewToken");await((u=i.value)==null?void 0:u.removeItem(`${s}:${t}`))},T=async()=>{if(r!=null&&r.documentDriven){const{pages:t}=U(e,we);for(const s in t.value)t.value[s]&&(t.value[s]=await y(t.value[s]._id))}await e.hooks.callHookParallel("app:data:refresh")};return{apiURL:o==null?void 0:o.apiURL,contentStorage:i,syncPreviewFiles:a,syncPreviewAppConfig:p,syncPreviewTokensConfig:d,requestPreviewSynchronization:R,findContentWithId:y,updateContent:I,removeContentWithId:P,requestRerender:T,mountPreviewUI:x,initiateIframeCommunication:ee};function ee(){if(!window.parent||window.self===window.parent)return;const t=G(),s=E(),u=L(""),w=n=>({path:n.path,query:F(n.query),params:F(n.params),fullPath:n.fullPath,meta:F(n.meta)});window.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey||n.altKey||n.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:n.key,metaKey:n.metaKey,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,altKey:n.altKey}},"*")}),window.addEventListener("message",async n=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(n.origin))return;const{type:v,payload:A={}}=n.data||{};switch(v){case"nuxt-studio:editor:file-selected":{const g=await y(A.path);g&&(g._partial||g._path!==E().path&&(u.value=g._path,t.push(g._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:g=[],deletions:M=[]}=A;for(const k of g)await I(k);for(const k of M)await P(k.path);T();break}case"nuxt-studio:preview:sync":{m(A);break}case"nuxt-studio:config:file-changed":{const{additions:g=[],deletions:M=[]}=A,k=g.find(S=>S.path===C.appConfig);k&&p(k==null?void 0:k.parsed),M.find(S=>S.path===C.appConfig)&&p(void 0);const N=g.find(S=>S.path===C.tokensConfig);N&&d(N==null?void 0:N.parsed),M.find(S=>S.path===C.tokensConfig)&&d(void 0);break}}}),e.hook("page:finish",()=>{_(),e.payload.prerenderedAt&&T()}),e.hook("content:document-driven:finish",({route:n,page:v})=>{n.meta.studio_page_contentId=v==null?void 0:v._id}),e.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:w(E())},"*"),setTimeout(()=>{_()},100)});function _(){const n=Array.from(window.document.querySelectorAll("[data-content-id]")).map(A=>A.getAttribute("data-content-id")),v=Array.from(new Set([s.meta.studio_page_contentId,...n])).filter(Boolean);if(u.value===v[0]){u.value="";return}window.openContentInStudioEditor(v,{navigate:!0,pageContentId:s.meta.studio_page_contentId})}window.openContentInStudioEditor=(n,v={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...w(s),contentIds:n,...v}},"*")}}};export{Ue as useStudio};
