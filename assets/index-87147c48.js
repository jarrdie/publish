var Kg=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var DD=Kg((_n,dn)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var ap={},sp=ap.hasOwnProperty,ev=ap.toString,lp=sp.toString,tv=lp.call(Object),i_=function(t){var e,n;return!t||ev.call(t)!=="[object Object]"?!1:(e=Object.getPrototypeOf(t),e?(n=sp.call(e,"constructor")&&e.constructor,typeof n=="function"&&lp.call(n)===tv):!0)},nv=Object.create(null),cp=function(t,e,n,i){var o,r,a,s,c,u,h=arguments[2]||{},_=3,m=arguments.length,g=arguments[0]||!1,b=arguments[1]?void 0:nv;for(typeof h!="object"&&typeof h!="function"&&(h={});_<m;_++)if((c=arguments[_])!=null)for(s in c)o=h[s],a=c[s],!(s==="__proto__"||h===a)&&(g&&a&&(i_(a)||(r=Array.isArray(a)))?(r?(r=!1,u=o&&Array.isArray(o)?o:[]):u=o&&i_(o)?o:{},h[s]=cp(g,arguments[1],u,a)):a!==b&&(h[s]=a));return h};const eu=function(t,e){return cp(!0,!1,...arguments)},up=new Map,_p=(t,e)=>{up.set(t,e)},Ce=t=>up.get(t),xr={themes:{default:"sap_fiori_3",all:["sap_fiori_3","sap_fiori_3_dark","sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp"]},languages:{default:"en",all:["ar","bg","ca","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},Ia=xr.themes.default,iv=xr.themes.all,as=xr.languages.default,Xt=xr.locales.default,o_=xr.locales.all,ov=t=>{const e=document.querySelector(`META[name="${t}"]`);return e&&e.getAttribute("content")},rv=t=>{const e=ov("sap-allowedThemeOrigins");return e&&e.split(",").some(n=>n==="*"||t===n.trim())},av=(t,e)=>{const n=new URL(t).pathname;return new URL(n,e).toString()},sv=t=>{let e;try{if(t.startsWith(".")||t.startsWith("/"))e=new URL(t,window.location.href).toString();else{const n=new URL(t),i=n.origin;i&&rv(i)?e=n.toString():e=av(n.toString(),window.location.href)}return e.endsWith("/")||(e=`${e}/`),`${e}UI5/`}catch{}};var Il;(function(t){t.Full="full",t.Basic="basic",t.Minimal="minimal",t.None="none"})(Il||(Il={}));const lv=Il;let r_=!1,Ze={animationMode:lv.Full,theme:Ia,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const cv=()=>(bn(),Ze.theme),uv=()=>(bn(),Ze.themeRoot),_v=()=>(bn(),Ze.rtl),dv=()=>(bn(),Ze.language),hv=()=>(bn(),Ze.fetchDefaultLanguage),pv=()=>(bn(),Ze.noConflict),fv=()=>(bn(),Ze.calendarType),mv=()=>(bn(),Ze.timezone),dp=()=>(bn(),Ze.formatSettings),Ea=new Map;Ea.set("true",!0);Ea.set("false",!1);const gv=()=>{const t=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let e;if(t){try{e=JSON.parse(t.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}e&&(Ze=eu(Ze,e))}},vv=()=>{const t=new URLSearchParams(window.location.search);t.forEach((e,n)=>{const i=n.split("sap-").length;i===0||i===n.split("sap-ui-").length||a_(n,e,"sap")}),t.forEach((e,n)=>{n.startsWith("sap-ui")&&a_(n,e,"sap-ui")})},bv=t=>{const e=t.split("@")[1];return sv(e)},yv=(t,e)=>t==="theme"&&e.includes("@")?e.split("@")[0]:e,a_=(t,e,n)=>{const i=e.toLowerCase(),o=t.split(`${n}-`)[1];Ea.has(e)&&(e=Ea.get(i)),o==="theme"?(Ze.theme=yv(o,e),e&&e.includes("@")&&(Ze.themeRoot=bv(e))):Ze[o]=e},wv=()=>{const t=Ce("OpenUI5Support");if(!t||!t.isOpenUI5Detected())return;const e=t.getConfigurationSettingsObject();Ze=eu(Ze,e)},bn=()=>{typeof document>"u"||r_||(gv(),vv(),wv(),r_=!0)};class Yn{constructor(){this._eventRegistry=new Map}attachEvent(e,n){const i=this._eventRegistry,o=i.get(e);if(!Array.isArray(o)){i.set(e,[n]);return}o.includes(n)||o.push(n)}detachEvent(e,n){const i=this._eventRegistry,o=i.get(e);if(!o)return;const r=o.indexOf(n);r!==-1&&o.splice(r,1),o.length===0&&i.delete(e)}fireEvent(e,n){const o=this._eventRegistry.get(e);return o?o.map(r=>r.call(this,n)):[]}fireEventAsync(e,n){return Promise.all(this.fireEvent(e,n))}isHandlerAttached(e,n){const o=this._eventRegistry.get(e);return o?o.includes(n):!1}hasListeners(e){return!!this._eventRegistry.get(e)}}const s_=10;class kv{constructor(){this.list=[],this.lookup=new Set}add(e){this.lookup.has(e)||(this.list.push(e),this.lookup.add(e))}remove(e){this.lookup.has(e)&&(this.list=this.list.filter(n=>n!==e),this.lookup.delete(e))}shift(){const e=this.list.shift();if(e)return this.lookup.delete(e),e}isEmpty(){return this.list.length===0}isAdded(e){return this.lookup.has(e)}process(e){let n;const i=new Map;for(n=this.shift();n;){const o=i.get(n)||0;if(o>s_)throw new Error(`Web component processed too many times this task, max allowed is: ${s_}`);e(n),i.set(n,o+1),n=this.shift()}}}const Aa=(t,e=document.body,n)=>{let i=document.querySelector(t);return i||(i=n?n():document.createElement(t),e.insertBefore(i,e.firstChild))},xv=()=>{const t=document.createElement("meta");return t.setAttribute("name","ui5-shared-resources"),t.setAttribute("content",""),t},Tv=()=>typeof document>"u"?null:Aa('meta[name="ui5-shared-resources"]',document.head,xv),Pi=(t,e)=>{const n=t.split(".");let i=Tv();if(!i)return e;for(let o=0;o<n.length;o++){const r=n[o],a=o===n.length-1;Object.prototype.hasOwnProperty.call(i,r)||(i[r]=a?e:{}),i=i[r]}return i},Cv={version:"1.16.0",major:1,minor:16,patch:0,suffix:"",isNext:!1,buildTime:1691061047};let aa,Sv="";const As=new Map,tr=Pi("Runtimes",[]),$v=()=>{if(aa===void 0){aa=tr.length;const t=Cv;tr.push({...t,alias:Sv,description:`Runtime ${aa} - ver ${t.version}`})}},Li=()=>aa,Iv=(t,e)=>{const n=`${t},${e}`;if(As.has(n))return As.get(n);const i=tr[t],o=tr[e];if(!i||!o)throw new Error("Invalid runtime index supplied");if(i.isNext||o.isNext)return i.buildTime-o.buildTime;const r=i.major-o.major;if(r)return r;const a=i.minor-o.minor;if(a)return a;const s=i.patch-o.patch;if(s)return s;const u=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(i.suffix,o.suffix);return As.set(n,u),u},Ev=()=>tr,hp=Pi("Tags",new Map),tu=new Set;let mi=new Map,Ds;const pp=-1,Av=t=>{tu.add(t),hp.set(t,Li())},Dv=t=>tu.has(t),Bv=()=>[...tu.values()],Pv=t=>{let e=hp.get(t);e===void 0&&(e=pp),mi.has(e)||mi.set(e,new Set),mi.get(e).add(t),Ds||(Ds=setTimeout(()=>{Lv(),mi=new Map,Ds=void 0},1e3))},Lv=()=>{const t=Ev(),e=Li(),n=t[e];let i="Multiple UI5 Web Components instances detected.";t.length>1&&(i=`${i}
Loading order (versions before 1.1.0 not listed): ${t.map(o=>`
${o.description}`).join("")}`),[...mi.keys()].forEach(o=>{let r,a;o===pp?(r=1,a={description:"Older unknown runtime"}):(r=Iv(e,o),a=t[o]);let s;r>0?s="an older":r<0?s="a newer":s="the same",i=`${i}

"${n.description}" failed to define ${mi.get(o).size} tag(s) as they were defined by a runtime of ${s} version "${a.description}": ${[...mi.get(o)].sort().join(", ")}.`,r>0?i=`${i}
WARNING! If your code uses features of the above web components, unavailable in ${a.description}, it might not work as expected!`:i=`${i}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),i=`${i}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(i)},fp=new Set,Ov=t=>{fp.add(t)},Rv=t=>fp.has(t),nu=new Set,Mv=new Yn,oo=new kv;let Vi,sa,Bs,Vr;const mp=async t=>{oo.add(t),await Nv()},gp=t=>{Mv.fireEvent("beforeComponentRender",t),nu.add(t),t._render()},Fv=t=>{oo.remove(t),nu.delete(t)},Nv=async()=>{Vr||(Vr=new Promise(t=>{window.requestAnimationFrame(()=>{oo.process(gp),Vr=null,t(),Bs||(Bs=setTimeout(()=>{Bs=void 0,oo.isEmpty()&&Uv()},200))})})),await Vr},zv=()=>Vi||(Vi=new Promise(t=>{sa=t,window.requestAnimationFrame(()=>{oo.isEmpty()&&(Vi=void 0,t())})}),Vi),Hv=()=>{const t=Bv().map(e=>customElements.whenDefined(e));return Promise.all(t)},vo=async()=>{await Hv(),await zv()},Uv=()=>{oo.isEmpty()&&sa&&(sa(),sa=void 0,Vi=void 0)},iu=async t=>{nu.forEach(e=>{const n=e.constructor,i=n.getMetadata().getTag(),o=Rv(n),r=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!t||t.tag===i||t.rtlAware&&o||t.languageAware&&r||t.themeAware&&a)&&mp(e)}),await vo()},vp=new Yn,bp="themeRegistered",Vv=t=>{vp.attachEvent(bp,t)},Wv=t=>vp.fireEvent(bp,t),yp=new Map,wp=new Map,kp=new Set,Da=new Set,y=(t,e,n)=>{wp.set(`${t}/${e}`,n),kp.add(t),Da.add(e),Wv(e)},xp=async(t,e)=>{const n=yp.get(`${t}_${e}`);if(n!==void 0)return n;if(!Da.has(e)){const i=[...Da.values()].join(", ");return console.warn(`You have requested a non-registered theme ${e} - falling back to ${Ia}. Registered themes are: ${i}`),l_(t,Ia)}return l_(t,e)},l_=async(t,e)=>{const n=wp.get(`${t}/${e}`);if(!n){console.error(`Theme [${e}] not registered for package [${t}]`);return}let i;try{i=await n(e)}catch(r){console.error(t,r.message);return}const o=i._||i;return yp.set(`${t}_${e}`,o),o},Tp=()=>kp,jv=t=>Da.has(t),qv=(t,e)=>{const n=document.createElement("style");return n.type="text/css",e&&Object.entries(e).forEach(i=>n.setAttribute(...i)),n.textContent=t,document.head.appendChild(n),n},Yv=(t,e)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",e&&Object.entries(e).forEach(i=>n.setAttribute(...i)),n.href=t,document.head.appendChild(n),new Promise(i=>{n.addEventListener("load",i),n.addEventListener("error",i)})},ss=(t,e)=>e?`${t}|${e}`:t,Tr=(t,e,n="")=>{let i=typeof t=="string"?t:t.content;if(i.includes("[_ui5host]")&&(i=i.replaceAll("[_ui5host]",`[_ui5rt${Li()}]`)),document.adoptedStyleSheets){const o=new CSSStyleSheet;o.replaceSync(i),o._ui5StyleId=ss(e,n),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o]}else{const o={};o[e]=n,qv(i,o)}},Gv=(t,e,n="")=>{let i=typeof t=="string"?t:t.content;if(i.includes("[_ui5host]")&&(i=i.replaceAll("[_ui5host]",`[_ui5rt${Li()}]`)),document.adoptedStyleSheets){const o=document.adoptedStyleSheets.find(r=>r._ui5StyleId===ss(e,n));o&&o.replaceSync(i||"")}else{const o=document.querySelector(`head>style[${e}="${n}"]`);o&&(o.textContent=i||"")}},Cr=(t,e="")=>document.adoptedStyleSheets?!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===ss(t,e)):!!document.querySelector(`head>style[${t}="${e}"]`),Xv=(t,e="")=>{var n;if(document.adoptedStyleSheets)document.adoptedStyleSheets=document.adoptedStyleSheets.filter(i=>i._ui5StyleId!==ss(t,e));else{const i=document.querySelector(`head > style[${t}="${e}"]`);(n=i==null?void 0:i.parentElement)==null||n.removeChild(i)}},Cp=(t,e,n="")=>{Cr(e,n)?Gv(t,e,n):Tr(t,e,n)},Gi=new Set,Zv=()=>{let t=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(t)return getComputedStyle(t).backgroundImage;t=document.createElement("span"),t.style.display="none",t.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(t);let e=getComputedStyle(t).backgroundImage;return e==="none"&&(t.classList.add("sapThemeMetaData-UI5-sap-ui-core"),e=getComputedStyle(t).backgroundImage),document.body.removeChild(t),e},Qv=t=>{const e=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(t);if(e&&e.length>=2){let n=e[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{Gi.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),Gi.add("decode"));return}try{return JSON.parse(n)}catch{Gi.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),Gi.add("parse"))}}},Jv=t=>{let e,n;try{e=t.Path.match(/\.([^.]+)\.css_variables$/)[1],n=t.Extends[0]}catch{Gi.has("object")||(console.warn("Malformed theme metadata Object",t),Gi.add("object"));return}return{themeName:e,baseThemeName:n}},El=()=>{const t=Zv();if(!t||t==="none")return;const e=Qv(t);if(e)return Jv(e)},Kv=new Yn,eb="themeLoaded",tb=t=>Kv.fireEvent(eb,t);let Ps;const Sp=()=>(Ps===void 0&&(Ps=uv()),Ps),nb=t=>`${Sp()}Base/baseLib/${t}/css_variables.css`,ib=async t=>{const e=document.querySelector(`[sap-ui-webcomponents-theme="${t}"]`);e&&document.head.removeChild(e),await Yv(nb(t),{"sap-ui-webcomponents-theme":t})},Sr=()=>{let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t},Al=Pi("PopupUtilsData",{currentZIndex:100}),$p=()=>{const t=Sr();return t&&typeof t.focus=="function"?t:null},ob=t=>{const e=$p();return e?Ip(t,e):!1},Ip=(t,e)=>{let n=t;if(n.shadowRoot&&(n=Array.from(n.shadowRoot.children).find(r=>r.localName!=="style"),!n))return!1;if(n===e)return!0;const i=n.localName==="slot"?n.assignedNodes():n.children;return i?Array.from(i).some(o=>Ip(o,e)):!1},rb=(t,e,n)=>t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom,ab=(t,e)=>{let n,i;if(t instanceof MouseEvent)n=t.clientX,i=t.clientY;else{const o=t.touches[0];n=o.clientX,i=o.clientY}return rb(n,i,e)};function sb(t){return"isUI5Element"in t&&"_show"in t}const Ep=t=>{const e=t.parentElement||t.getRootNode&&t.getRootNode().host;return e&&(sb(e)||e===document.documentElement)?e:Ep(e)},Ap=()=>{const t=Ce("OpenUI5Support");return t&&t.isOpenUI5Detected()?t.getNextZIndex():(Al.currentZIndex+=2,Al.currentZIndex)},c_=()=>Al.currentZIndex;class qe{static isAtLeastVersion116(){const n=window.sap.ui.version.split(".");return!n||n.length<2?!1:parseInt(n[0])>1||parseInt(n[1])>=116}static isOpenUI5Detected(){var e,n;return typeof((n=(e=window.sap)==null?void 0:e.ui)==null?void 0:n.require)=="function"}static init(){return qe.isOpenUI5Detected()?new Promise(e=>{window.sap.ui.require(["sap/ui/core/Core"],async n=>{const i=()=>{let o=["sap/ui/core/Popup","sap/ui/core/LocaleData"];qe.isAtLeastVersion116()&&(o=[...o,"sap/base/i18n/Formatting","sap/base/i18n/Localization","sap/ui/core/ControlBehavior","sap/ui/core/Theming","sap/ui/core/date/CalendarUtils"]),window.sap.ui.require(o,r=>{r.setInitialZIndex(c_()),e()})};qe.isAtLeastVersion116()?(await n.ready(),i()):n.attachInit(i)})}):Promise.resolve()}static getConfigurationSettingsObject(){if(!qe.isOpenUI5Detected())return{};if(qe.isAtLeastVersion116()){const o=window.sap.ui.require("sap/ui/core/ControlBehavior"),r=window.sap.ui.require("sap/base/i18n/Localization"),a=window.sap.ui.require("sap/ui/core/Theming"),s=window.sap.ui.require("sap/base/i18n/Formatting"),c=window.sap.ui.require("sap/ui/core/date/CalendarUtils");return{animationMode:o.getAnimationMode(),language:r.getLanguage(),theme:a.getTheme(),themeRoot:a.getThemeRoot(),rtl:r.getRTL(),timezone:r.getTimezone(),calendarType:s.getCalendarType(),formatSettings:{firstDayOfWeek:c.getWeekConfigurationValues().firstDayOfWeek,legacyDateCalendarCustomizing:s.getLegacyDateCalendarCustomizing()}}}const n=window.sap.ui.require("sap/ui/core/Core").getConfiguration(),i=window.sap.ui.require("sap/ui/core/LocaleData");return{animationMode:n.getAnimationMode(),language:n.getLanguage(),theme:n.getTheme(),themeRoot:n.getThemeRoot(),rtl:n.getRTL(),timezone:n.getTimezone(),calendarType:n.getCalendarType(),formatSettings:{firstDayOfWeek:i?i.getInstance(n.getLocale()).getFirstDayOfWeek():void 0,legacyDateCalendarCustomizing:n.getFormatSettings().getLegacyDateCalendarCustomizing()}}}static getLocaleDataObject(){if(!qe.isOpenUI5Detected())return;const e=window.sap.ui.require("sap/ui/core/LocaleData");if(qe.isAtLeastVersion116()){const o=window.sap.ui.require("sap/base/i18n/Localization");return e.getInstance(o.getLanguageTag())._get()}const i=window.sap.ui.require("sap/ui/core/Core").getConfiguration();return e.getInstance(i.getLocale())._get()}static _listenForThemeChange(){if(qe.isAtLeastVersion116()){const e=window.sap.ui.require("sap/ui/core/Theming");e.attachApplied(()=>{Dl(e.getTheme())})}else{const e=window.sap.ui.require("sap/ui/core/Core"),n=e.getConfiguration();e.attachThemeChanged(()=>{Dl(n.getTheme())})}}static attachListeners(){qe.isOpenUI5Detected()&&qe._listenForThemeChange()}static cssVariablesLoaded(){if(!qe.isOpenUI5Detected())return;const e=[...document.head.children].find(n=>n.id==="sap-ui-theme-sap.ui.core");return e?!!e.href.match(/\/css(-|_)variables\.css/):!1}static getNextZIndex(){if(!qe.isOpenUI5Detected())return;const e=window.sap.ui.require("sap/ui/core/Popup");return e||console.warn(`The OpenUI5Support feature hasn't been initialized properly. Make sure you import the "@ui5/webcomponents-base/dist/features/OpenUI5Support.js" module before all components' modules.`),e.getNextZIndex()}static setInitialZIndex(){if(!qe.isOpenUI5Detected())return;window.sap.ui.require("sap/ui/core/Popup").setInitialZIndex(c_())}}_p("OpenUI5Support",qe);const nr="@ui5/webcomponents-theming",lb=()=>Tp().has(nr),cb=async t=>{if(!lb())return;const e=await xp(nr,t);e&&Cp(e,"data-ui5-theme-properties",nr)},ub=()=>{Xv("data-ui5-theme-properties",nr)},_b=async t=>{const n=[...Tp()].map(async i=>{if(i===nr)return;const o=await xp(i,t);o&&Cp(o,`data-ui5-component-properties-${Li()}`,i)});return Promise.all(n)},db=async t=>{var i;const e=El();if(e)return e;const n=Ce("OpenUI5Support");if(n&&qe.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(i=n.getConfigurationSettingsObject())==null?void 0:i.theme,baseThemeName:""}}else if(Sp())return await ib(t),El()},ou=async t=>{const e=await db(t);!e||t!==e.themeName?await cb(t):ub();const n=jv(t)?t:e&&e.baseThemeName;await _b(n||Ia),tb(t)};let Qi;const $r=()=>(Qi===void 0&&(Qi=cv()),Qi),Dl=async t=>{Qi!==t&&(Qi=t,await ou(Qi),await iu({themeAware:!0}))},Ue=()=>{var e,n;const t=$r();return hb(t)?!t.startsWith("sap_horizon"):!((n=(e=El())==null?void 0:e.baseThemeName)!=null&&n.startsWith("sap_horizon"))},hb=t=>iv.includes(t),pb="modulepreload",fb=function(t){return"/"+t},u_={},f=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=fb(r),r in u_)return;u_[r]=!0;const a=r.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!i)for(let h=o.length-1;h>=0;h--){const _=o[h];if(_.href===r&&(!a||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":pb,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((h,_)=>{u.addEventListener("load",h),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})},Dp=new Yn,Bp="languageChange",Pp=t=>{Dp.attachEvent(Bp,t)},mb=t=>Dp.fireEventAsync(Bp,t),Lp=()=>{const t=navigator.languages,e=()=>navigator.language;return t&&t[0]||e()||as};let Vo,Bl;const ru=()=>(Vo===void 0&&(Vo=dv()),Vo),gb=async t=>{Vo!==t&&(Vo=t,await mb(t),await iu({languageAware:!0}))},vb=t=>{Bl=t},bb=()=>(Bl===void 0&&vb(hv()),Bl),yb=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;let Op=class{constructor(e){const n=yb.exec(e.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${e} does not adhere to BCP-47.`);this.sLocaleId=e,this.sLanguage=n[1]||as,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,i=>i.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(e){return this.getPrivateUseSubtags().indexOf(e)>=0}toString(){const e=[this.sLanguage];return this.sScript&&e.push(this.sScript),this.sRegion&&e.push(this.sRegion),this.sVariant&&e.push(this.sVariant),this.sExtension&&e.push(this.sExtension),this.sPrivateUse&&e.push(this.sPrivateUse),e.join("-")}};const Ls=new Map,Rp=t=>(Ls.has(t)||Ls.set(t,new Op(t)),Ls.get(t)),__=t=>{try{if(t&&typeof t=="string")return Rp(t)}catch{}return new Op(Xt)},Xe=t=>{if(t)return __(t);const e=ru();return e?Rp(e):__(Lp())},Mp=new Map,ir=new Map,Os=new Map,d_=new Set;let h_=!1;const wb={iw:"he",ji:"yi",in:"id"},p_=t=>{h_||(console.warn(`[LocaleData] Supported locale "${t}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),h_=!0)},kb=(t,e,n)=>{t=t&&wb[t]||t,t==="no"&&(t="nb"),t==="zh"&&!e&&(n==="Hans"?e="CN":n==="Hant"&&(e="TW")),(t==="sh"||t==="sr"&&n==="Latn")&&(t="sr",e="Latn");let i=`${t}_${e}`;return o_.includes(i)||(i=t,o_.includes(i))?ir.has(i)?i:(p_(i),Xt):Xt},f_=(t,e)=>{Mp.set(t,e)},xb=t=>{ir.has(t)||(t=Xt);const e=Mp.get(t);if(!e)throw new Error(`CLDR data for locale ${t} is not loaded!`);return e},Tb=t=>{if(!Os.get(t)){const e=ir.get(t);if(!e)throw new Error(`CLDR data for locale ${t} is not loaded!`);Os.set(t,e(t))}return Os.get(t)},Fp=async(t,e,n)=>{const i=kb(t,e,n),o=Ce("OpenUI5Support");if(o){const r=o.getLocaleDataObject();if(r){f_(i,r);return}}try{const r=await Tb(i);f_(i,r)}catch(r){const a=r;d_.has(a.message)||(d_.add(a.message),console.error(a.message))}},Np=(t,e)=>{ir.set(t,e)};Np("en",async()=>(await fetch("https://sdk.openui5.org/1.103.0/resources/sap/ui/core/cldr/en.json")).json());Pp(()=>{const t=Xe();return Fp(t.getLanguage(),t.getRegion(),t.getScript())});const Cb=["ar","ar_EG","ar_SA","bg","ca","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"],Sb=async t=>{switch(t){case"ar":return(await f(()=>import("./ar-f391a637.js"),[])).default;case"ar_EG":return(await f(()=>import("./ar_EG-f391a637.js"),[])).default;case"ar_SA":return(await f(()=>import("./ar_SA-e67e7965.js"),[])).default;case"bg":return(await f(()=>import("./bg-21fb4570.js"),[])).default;case"ca":return(await f(()=>import("./ca-5216c93d.js"),[])).default;case"cs":return(await f(()=>import("./cs-2b679c4b.js"),[])).default;case"da":return(await f(()=>import("./da-6e408dba.js"),[])).default;case"de":return(await f(()=>import("./de-de98c4fd.js"),[])).default;case"de_AT":return(await f(()=>import("./de_AT-3ec616a7.js"),[])).default;case"de_CH":return(await f(()=>import("./de_CH-7a09c0da.js"),[])).default;case"el":return(await f(()=>import("./el-4e01da0b.js"),[])).default;case"el_CY":return(await f(()=>import("./el_CY-46ac97ab.js"),[])).default;case"en":return(await f(()=>import("./en-b2552130.js"),[])).default;case"en_AU":return(await f(()=>import("./en_AU-4e7defd8.js"),[])).default;case"en_GB":return(await f(()=>import("./en_GB-01e748d6.js"),[])).default;case"en_HK":return(await f(()=>import("./en_HK-c2d514a5.js"),[])).default;case"en_IE":return(await f(()=>import("./en_IE-099d58ab.js"),[])).default;case"en_IN":return(await f(()=>import("./en_IN-7b7e05a9.js"),[])).default;case"en_NZ":return(await f(()=>import("./en_NZ-aee4e9fc.js"),[])).default;case"en_PG":return(await f(()=>import("./en_PG-d1b649df.js"),[])).default;case"en_SG":return(await f(()=>import("./en_SG-b0c1cfe6.js"),[])).default;case"en_ZA":return(await f(()=>import("./en_ZA-a2da5c54.js"),[])).default;case"es":return(await f(()=>import("./es-dbd1ef07.js"),[])).default;case"es_AR":return(await f(()=>import("./es_AR-e32c9e25.js"),[])).default;case"es_BO":return(await f(()=>import("./es_BO-395d6215.js"),[])).default;case"es_CL":return(await f(()=>import("./es_CL-ef7ab9fb.js"),[])).default;case"es_CO":return(await f(()=>import("./es_CO-da4e3dfe.js"),[])).default;case"es_MX":return(await f(()=>import("./es_MX-fdd11249.js"),[])).default;case"es_PE":return(await f(()=>import("./es_PE-de798d28.js"),[])).default;case"es_UY":return(await f(()=>import("./es_UY-27072bac.js"),[])).default;case"es_VE":return(await f(()=>import("./es_VE-50afb346.js"),[])).default;case"et":return(await f(()=>import("./et-29692c23.js"),[])).default;case"fa":return(await f(()=>import("./fa-b0fc4bf3.js"),[])).default;case"fi":return(await f(()=>import("./fi-3a9ffb94.js"),[])).default;case"fr":return(await f(()=>import("./fr-4ffed905.js"),[])).default;case"fr_BE":return(await f(()=>import("./fr_BE-e65b48be.js"),[])).default;case"fr_CA":return(await f(()=>import("./fr_CA-f5090063.js"),[])).default;case"fr_CH":return(await f(()=>import("./fr_CH-4066a1c8.js"),[])).default;case"fr_LU":return(await f(()=>import("./fr_LU-14474997.js"),[])).default;case"he":return(await f(()=>import("./he-0e107fc6.js"),[])).default;case"hi":return(await f(()=>import("./hi-6bc0f028.js"),[])).default;case"hr":return(await f(()=>import("./hr-119c63ca.js"),[])).default;case"hu":return(await f(()=>import("./hu-c22bafeb.js"),[])).default;case"id":return(await f(()=>import("./id-30e295ef.js"),[])).default;case"it":return(await f(()=>import("./it-596f2bfd.js"),[])).default;case"it_CH":return(await f(()=>import("./it_CH-5fa7c26d.js"),[])).default;case"ja":return(await f(()=>import("./ja-6bb1563c.js"),[])).default;case"kk":return(await f(()=>import("./kk-cb6040d6.js"),[])).default;case"ko":return(await f(()=>import("./ko-a2d67669.js"),[])).default;case"lt":return(await f(()=>import("./lt-78eee7fc.js"),[])).default;case"lv":return(await f(()=>import("./lv-719f4db2.js"),[])).default;case"ms":return(await f(()=>import("./ms-3e52f673.js"),[])).default;case"nb":return(await f(()=>import("./nb-9638a305.js"),[])).default;case"nl":return(await f(()=>import("./nl-b8bbb7f2.js"),[])).default;case"nl_BE":return(await f(()=>import("./nl_BE-6d04ce85.js"),[])).default;case"pl":return(await f(()=>import("./pl-87b27ba8.js"),[])).default;case"pt":return(await f(()=>import("./pt-c5581ba3.js"),[])).default;case"pt_PT":return(await f(()=>import("./pt_PT-47b5f71d.js"),[])).default;case"ro":return(await f(()=>import("./ro-af3d1686.js"),[])).default;case"ru":return(await f(()=>import("./ru-5cc367d3.js"),[])).default;case"ru_UA":return(await f(()=>import("./ru_UA-219db2fe.js"),[])).default;case"sk":return(await f(()=>import("./sk-78f44edb.js"),[])).default;case"sl":return(await f(()=>import("./sl-25944595.js"),[])).default;case"sr":return(await f(()=>import("./sr-194e17ee.js"),[])).default;case"sr_Latn":return(await f(()=>import("./sr_Latn-fd6fd583.js"),[])).default;case"sv":return(await f(()=>import("./sv-26aca0d6.js"),[])).default;case"th":return(await f(()=>import("./th-d960463e.js"),[])).default;case"tr":return(await f(()=>import("./tr-99cfc87c.js"),[])).default;case"uk":return(await f(()=>import("./uk-96f28c95.js"),[])).default;case"vi":return(await f(()=>import("./vi-d85bbf4d.js"),[])).default;case"zh_CN":return(await f(()=>import("./zh_CN-17b0282c.js"),[])).default;case"zh_HK":return(await f(()=>import("./zh_HK-44a29b1a.js"),[])).default;case"zh_SG":return(await f(()=>import("./zh_SG-b54c584d.js"),[])).default;case"zh_TW":return(await f(()=>import("./zh_TW-60f7a330.js"),[])).default;default:throw"unknown locale"}},$b=async t=>{const e=await Sb(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[LocaleData] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e};Cb.forEach(t=>Np(t,$b));const Ib=async t=>{switch(t){case"sap_belize":return(await f(()=>import("./parameters-bundle.css-9fffc99f.js"),[])).default;case"sap_belize_hcb":return(await f(()=>import("./parameters-bundle.css-65ddb9a0.js"),[])).default;case"sap_belize_hcw":return(await f(()=>import("./parameters-bundle.css-e4b32bf0.js"),[])).default;case"sap_fiori_3":return(await f(()=>import("./parameters-bundle.css-7b93aab0.js"),[])).default;case"sap_fiori_3_dark":return(await f(()=>import("./parameters-bundle.css-ba9c6761.js"),[])).default;case"sap_fiori_3_hcb":return(await f(()=>import("./parameters-bundle.css-e1a266b8.js"),[])).default;case"sap_fiori_3_hcw":return(await f(()=>import("./parameters-bundle.css-6268b9ab.js"),[])).default;case"sap_horizon":return(await f(()=>import("./parameters-bundle.css-8e629eeb.js"),[])).default;case"sap_horizon_dark":return(await f(()=>import("./parameters-bundle.css-51ca8bcb.js"),[])).default;case"sap_horizon_exp":return(await f(()=>import("./parameters-bundle.css-8ec70210.js"),[])).default;case"sap_horizon_hcb":return(await f(()=>import("./parameters-bundle.css-0ef5dbdd.js"),[])).default;case"sap_horizon_hcw":return(await f(()=>import("./parameters-bundle.css-90653669.js"),[])).default;default:throw"unknown theme"}},Eb=async t=>{const e=await Ib(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e};["sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_exp","sap_horizon_hcb","sap_horizon_hcw"].forEach(t=>y("@ui5/webcomponents-theming",t,Eb));const Ab=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,m_=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,Db={he:"iw",yi:"ji",nb:"no",sr:"sh"},Bb=t=>{let e;if(!t)return Xt;if(typeof t=="string"&&(e=Ab.exec(t.replace(/_/g,"-")))){let n=e[1].toLowerCase(),i=e[3]?e[3].toUpperCase():void 0;const o=e[2]?e[2].toLowerCase():void 0,r=e[4]?e[4].slice(1):void 0,a=e[6];return n=Db[n]||n,a&&(e=m_.exec(a))||r&&(e=m_.exec(r))?`en_US_${e[1].toLowerCase()}`:(n==="zh"&&!i&&(o==="hans"?i="CN":o==="hant"&&(i="TW")),n+(i?"_"+i+(r?"_"+r.replace("-","_"):""):""))}return Xt},Pb=t=>{if(!t)return Xt;if(t==="zh_HK")return"zh_TW";const e=t.lastIndexOf("_");return e>=0?t.slice(0,e):t!==Xt?Xt:""},g_=new Set,v_=new Set,au=new Map,Rs=new Map,su=new Map,lu=(t,e,n)=>{const i=`${t}/${e}`;su.set(i,n)},b_=(t,e)=>{au.set(t,e)},Lb=t=>au.get(t),zp=(t,e)=>{const n=`${t}/${e}`;return su.has(n)},Ob=(t,e)=>{const n=`${t}/${e}`,i=su.get(n);return i&&!Rs.get(n)&&Rs.set(n,i(e)),Rs.get(n)},Rb=t=>{g_.has(t)||(console.warn(`[${t}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${t}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),g_.add(t))},y_=(t,e)=>e!==as&&!zp(t,e),Hp=async t=>{const e=Xe().getLanguage(),n=Xe().getRegion();let i=e+(n?`-${n}`:"");if(y_(t,i))for(i=Bb(i);y_(t,i);)i=Pb(i);const o=bb();if(i===as&&!o){b_(t,null);return}if(!zp(t,i)){Rb(t);return}try{const r=await Ob(t,i);b_(t,r)}catch(r){const a=r;v_.has(a.message)||(v_.add(a.message),console.error(a.message))}};Pp(t=>{const e=[...au.keys()];return Promise.all(e.map(Hp))});const Mb=async t=>{switch(t){case"ar":return(await f(()=>import("./messagebundle_ar-44188cf1.js"),[])).default;case"bg":return(await f(()=>import("./messagebundle_bg-a90aa5d5.js"),[])).default;case"ca":return(await f(()=>import("./messagebundle_ca-bf53c9ac.js"),[])).default;case"cs":return(await f(()=>import("./messagebundle_cs-bb92e5a1.js"),[])).default;case"cy":return(await f(()=>import("./messagebundle_cy-f3425b6a.js"),[])).default;case"da":return(await f(()=>import("./messagebundle_da-07b377a3.js"),[])).default;case"de":return(await f(()=>import("./messagebundle_de-3cf371b0.js"),[])).default;case"el":return(await f(()=>import("./messagebundle_el-b9f8553d.js"),[])).default;case"en":return(await f(()=>import("./messagebundle_en-7692c80a.js"),[])).default;case"en_GB":return(await f(()=>import("./messagebundle_en_GB-183238d7.js"),[])).default;case"en_US_sappsd":return(await f(()=>import("./messagebundle_en_US_sappsd-19b6364e.js"),[])).default;case"en_US_saprigi":return(await f(()=>import("./messagebundle_en_US_saprigi-f270a6e4.js"),[])).default;case"en_US_saptrc":return(await f(()=>import("./messagebundle_en_US_saptrc-2822dbad.js"),[])).default;case"es":return(await f(()=>import("./messagebundle_es-2ca9061f.js"),[])).default;case"es_MX":return(await f(()=>import("./messagebundle_es_MX-f103bb14.js"),[])).default;case"et":return(await f(()=>import("./messagebundle_et-9d772e73.js"),[])).default;case"fi":return(await f(()=>import("./messagebundle_fi-15e72d1f.js"),[])).default;case"fr":return(await f(()=>import("./messagebundle_fr-3745f3bb.js"),[])).default;case"fr_CA":return(await f(()=>import("./messagebundle_fr_CA-2944b6e2.js"),[])).default;case"hi":return(await f(()=>import("./messagebundle_hi-b4549e84.js"),[])).default;case"hr":return(await f(()=>import("./messagebundle_hr-dc5ab77f.js"),[])).default;case"hu":return(await f(()=>import("./messagebundle_hu-8dd75a8d.js"),[])).default;case"in":return(await f(()=>import("./messagebundle_in-165d36a7.js"),[])).default;case"it":return(await f(()=>import("./messagebundle_it-2d16ebf4.js"),[])).default;case"iw":return(await f(()=>import("./messagebundle_iw-f3fae638.js"),[])).default;case"ja":return(await f(()=>import("./messagebundle_ja-95ab2a9d.js"),[])).default;case"kk":return(await f(()=>import("./messagebundle_kk-87ca26a7.js"),[])).default;case"ko":return(await f(()=>import("./messagebundle_ko-73550dda.js"),[])).default;case"lt":return(await f(()=>import("./messagebundle_lt-d42040e5.js"),[])).default;case"lv":return(await f(()=>import("./messagebundle_lv-2d648d1f.js"),[])).default;case"ms":return(await f(()=>import("./messagebundle_ms-b29bc5de.js"),[])).default;case"nl":return(await f(()=>import("./messagebundle_nl-8903b79e.js"),[])).default;case"no":return(await f(()=>import("./messagebundle_no-d232e13d.js"),[])).default;case"pl":return(await f(()=>import("./messagebundle_pl-eae9b070.js"),[])).default;case"pt":return(await f(()=>import("./messagebundle_pt-e60705f6.js"),[])).default;case"pt_PT":return(await f(()=>import("./messagebundle_pt_PT-5f46105d.js"),[])).default;case"ro":return(await f(()=>import("./messagebundle_ro-e3b4dcb2.js"),[])).default;case"ru":return(await f(()=>import("./messagebundle_ru-76ac5f54.js"),[])).default;case"sh":return(await f(()=>import("./messagebundle_sh-ee461b2a.js"),[])).default;case"sk":return(await f(()=>import("./messagebundle_sk-305ca75f.js"),[])).default;case"sl":return(await f(()=>import("./messagebundle_sl-375754b0.js"),[])).default;case"sv":return(await f(()=>import("./messagebundle_sv-9ed56858.js"),[])).default;case"th":return(await f(()=>import("./messagebundle_th-60f02032.js"),[])).default;case"tr":return(await f(()=>import("./messagebundle_tr-9c820e7f.js"),[])).default;case"uk":return(await f(()=>import("./messagebundle_uk-5aea802c.js"),[])).default;case"vi":return(await f(()=>import("./messagebundle_vi-40949e1d.js"),[])).default;case"zh_CN":return(await f(()=>import("./messagebundle_zh_CN-2175ebf7.js"),[])).default;case"zh_TW":return(await f(()=>import("./messagebundle_zh_TW-94e0c73d.js"),[])).default;default:throw"unknown locale"}},Fb=async t=>{const e=await Mb(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e},Nb=["ar","bg","ca","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt","pt_PT","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh_CN","zh_TW"];Nb.forEach(t=>{lu("@ui5/webcomponents-icons",t,Fb)});const zb=async t=>{switch(t){case"sap_belize":return(await f(()=>import("./parameters-bundle.css-870eba78.js"),[])).default;case"sap_belize_hcb":return(await f(()=>import("./parameters-bundle.css-8c66915f.js"),[])).default;case"sap_belize_hcw":return(await f(()=>import("./parameters-bundle.css-508993ef.js"),[])).default;case"sap_fiori_3":return(await f(()=>import("./parameters-bundle.css-59e8af69.js"),[])).default;case"sap_fiori_3_dark":return(await f(()=>import("./parameters-bundle.css-0433713e.js"),[])).default;case"sap_fiori_3_hcb":return(await f(()=>import("./parameters-bundle.css-ffa12b4f.js"),[])).default;case"sap_fiori_3_hcw":return(await f(()=>import("./parameters-bundle.css-c8df8c53.js"),[])).default;case"sap_horizon":return(await f(()=>import("./parameters-bundle.css-a252cf7e.js"),[])).default;case"sap_horizon_dark":return(await f(()=>import("./parameters-bundle.css-b012612c.js"),[])).default;case"sap_horizon_exp":return(await f(()=>import("./parameters-bundle.css-4d41d100.js"),[])).default;case"sap_horizon_hcb":return(await f(()=>import("./parameters-bundle.css-38036871.js"),[])).default;case"sap_horizon_hcw":return(await f(()=>import("./parameters-bundle.css-4eec7ccd.js"),[])).default;default:throw"unknown theme"}},Hb=async t=>{const e=await zb(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e};["sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_exp","sap_horizon_hcb","sap_horizon_hcw"].forEach(t=>y("@ui5/webcomponents",t,Hb));const Ub=async t=>{switch(t){case"ar":return(await f(()=>import("./messagebundle_ar-35c63c5d.js"),[])).default;case"bg":return(await f(()=>import("./messagebundle_bg-bfe2321f.js"),[])).default;case"ca":return(await f(()=>import("./messagebundle_ca-8ab057fd.js"),[])).default;case"cs":return(await f(()=>import("./messagebundle_cs-5a5fd1a2.js"),[])).default;case"cy":return(await f(()=>import("./messagebundle_cy-7cbd268f.js"),[])).default;case"da":return(await f(()=>import("./messagebundle_da-599bbea3.js"),[])).default;case"de":return(await f(()=>import("./messagebundle_de-74c79d39.js"),[])).default;case"el":return(await f(()=>import("./messagebundle_el-22fb742f.js"),[])).default;case"en":return(await f(()=>import("./messagebundle_en-db74e54d.js"),[])).default;case"en_GB":return(await f(()=>import("./messagebundle_en_GB-35300b0f.js"),[])).default;case"en_US_sappsd":return(await f(()=>import("./messagebundle_en_US_sappsd-4ac43985.js"),[])).default;case"en_US_saprigi":return(await f(()=>import("./messagebundle_en_US_saprigi-6aa42070.js"),[])).default;case"en_US_saptrc":return(await f(()=>import("./messagebundle_en_US_saptrc-2e16481f.js"),[])).default;case"es":return(await f(()=>import("./messagebundle_es-2dc5abe5.js"),[])).default;case"es_MX":return(await f(()=>import("./messagebundle_es_MX-df18885e.js"),[])).default;case"et":return(await f(()=>import("./messagebundle_et-075fe783.js"),[])).default;case"fi":return(await f(()=>import("./messagebundle_fi-3a8577d8.js"),[])).default;case"fr":return(await f(()=>import("./messagebundle_fr-6c870035.js"),[])).default;case"fr_CA":return(await f(()=>import("./messagebundle_fr_CA-c876ffc7.js"),[])).default;case"hi":return(await f(()=>import("./messagebundle_hi-1e75c0f8.js"),[])).default;case"hr":return(await f(()=>import("./messagebundle_hr-04e86eb2.js"),[])).default;case"hu":return(await f(()=>import("./messagebundle_hu-4a0c6cf5.js"),[])).default;case"in":return(await f(()=>import("./messagebundle_in-a71f8537.js"),[])).default;case"it":return(await f(()=>import("./messagebundle_it-ded7c7b5.js"),[])).default;case"iw":return(await f(()=>import("./messagebundle_iw-9de4b2f8.js"),[])).default;case"ja":return(await f(()=>import("./messagebundle_ja-be86f08f.js"),[])).default;case"kk":return(await f(()=>import("./messagebundle_kk-84fcbac7.js"),[])).default;case"ko":return(await f(()=>import("./messagebundle_ko-0f20e855.js"),[])).default;case"lt":return(await f(()=>import("./messagebundle_lt-b1af4226.js"),[])).default;case"lv":return(await f(()=>import("./messagebundle_lv-6b5852e5.js"),[])).default;case"ms":return(await f(()=>import("./messagebundle_ms-870e2c6a.js"),[])).default;case"nl":return(await f(()=>import("./messagebundle_nl-b1168f8d.js"),[])).default;case"no":return(await f(()=>import("./messagebundle_no-8ee705a2.js"),[])).default;case"pl":return(await f(()=>import("./messagebundle_pl-86b7d220.js"),[])).default;case"pt":return(await f(()=>import("./messagebundle_pt-9d85828b.js"),[])).default;case"pt_PT":return(await f(()=>import("./messagebundle_pt_PT-a7d9a8ae.js"),[])).default;case"ro":return(await f(()=>import("./messagebundle_ro-3fafc6d5.js"),[])).default;case"ru":return(await f(()=>import("./messagebundle_ru-216adcf4.js"),[])).default;case"sh":return(await f(()=>import("./messagebundle_sh-b552bf9e.js"),[])).default;case"sk":return(await f(()=>import("./messagebundle_sk-ffc6e8be.js"),[])).default;case"sl":return(await f(()=>import("./messagebundle_sl-97ff4399.js"),[])).default;case"sv":return(await f(()=>import("./messagebundle_sv-3656e695.js"),[])).default;case"th":return(await f(()=>import("./messagebundle_th-7d3d9e6b.js"),[])).default;case"tr":return(await f(()=>import("./messagebundle_tr-2282533a.js"),[])).default;case"uk":return(await f(()=>import("./messagebundle_uk-cf44afc5.js"),[])).default;case"vi":return(await f(()=>import("./messagebundle_vi-52ea55a7.js"),[])).default;case"zh_CN":return(await f(()=>import("./messagebundle_zh_CN-a00796e5.js"),[])).default;case"zh_TW":return(await f(()=>import("./messagebundle_zh_TW-075a36de.js"),[])).default;default:throw"unknown locale"}},Vb=async t=>{const e=await Ub(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e},Wb=["ar","bg","ca","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt","pt_PT","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh_CN","zh_TW"];Wb.forEach(t=>{lu("@ui5/webcomponents",t,Vb)});const jb=async t=>{switch(t){case"sap_belize":return(await f(()=>import("./parameters-bundle.css-201f2c95.js"),[])).default;case"sap_belize_hcb":return(await f(()=>import("./parameters-bundle.css-dce5f5b9.js"),[])).default;case"sap_belize_hcw":return(await f(()=>import("./parameters-bundle.css-b0e88403.js"),[])).default;case"sap_fiori_3":return(await f(()=>import("./parameters-bundle.css-4e04f6a2.js"),[])).default;case"sap_fiori_3_dark":return(await f(()=>import("./parameters-bundle.css-7a459799.js"),[])).default;case"sap_fiori_3_hcb":return(await f(()=>import("./parameters-bundle.css-52cdf9b2.js"),[])).default;case"sap_fiori_3_hcw":return(await f(()=>import("./parameters-bundle.css-292d9408.js"),[])).default;case"sap_horizon":return(await f(()=>import("./parameters-bundle.css-5d072c14.js"),[])).default;case"sap_horizon_dark":return(await f(()=>import("./parameters-bundle.css-352c95e6.js"),[])).default;case"sap_horizon_exp":return(await f(()=>import("./parameters-bundle.css-3e27ccc2.js"),[])).default;case"sap_horizon_hcb":return(await f(()=>import("./parameters-bundle.css-9994a37a.js"),[])).default;case"sap_horizon_hcw":return(await f(()=>import("./parameters-bundle.css-91636eea.js"),[])).default;default:throw"unknown theme"}},qb=async t=>{const e=await jb(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e};["sap_belize","sap_belize_hcb","sap_belize_hcw","sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_exp","sap_horizon_hcb","sap_horizon_hcw"].forEach(t=>y("@ui5/webcomponents-fiori",t,qb));const Yb=async t=>{switch(t){case"ar":return(await f(()=>import("./messagebundle_ar-ab031e81.js"),[])).default;case"bg":return(await f(()=>import("./messagebundle_bg-cc68ebed.js"),[])).default;case"ca":return(await f(()=>import("./messagebundle_ca-6c288734.js"),[])).default;case"cs":return(await f(()=>import("./messagebundle_cs-8bb1284c.js"),[])).default;case"cy":return(await f(()=>import("./messagebundle_cy-7fad64ee.js"),[])).default;case"da":return(await f(()=>import("./messagebundle_da-5a353e02.js"),[])).default;case"de":return(await f(()=>import("./messagebundle_de-388a3b5b.js"),[])).default;case"el":return(await f(()=>import("./messagebundle_el-75edf5ad.js"),[])).default;case"en":return(await f(()=>import("./messagebundle_en-bc07bf2e.js"),[])).default;case"en_GB":return(await f(()=>import("./messagebundle_en_GB-c047aa3d.js"),[])).default;case"en_US_sappsd":return(await f(()=>import("./messagebundle_en_US_sappsd-1d3e1b79.js"),[])).default;case"en_US_saprigi":return(await f(()=>import("./messagebundle_en_US_saprigi-033716ac.js"),[])).default;case"en_US_saptrc":return(await f(()=>import("./messagebundle_en_US_saptrc-a145b46c.js"),[])).default;case"es":return(await f(()=>import("./messagebundle_es-043c79f2.js"),[])).default;case"es_MX":return(await f(()=>import("./messagebundle_es_MX-6cbdd1b4.js"),[])).default;case"et":return(await f(()=>import("./messagebundle_et-33f5ac06.js"),[])).default;case"fi":return(await f(()=>import("./messagebundle_fi-d78e96c4.js"),[])).default;case"fr":return(await f(()=>import("./messagebundle_fr-d3ed4c4b.js"),[])).default;case"fr_CA":return(await f(()=>import("./messagebundle_fr_CA-191291a2.js"),[])).default;case"hi":return(await f(()=>import("./messagebundle_hi-299ce48b.js"),[])).default;case"hr":return(await f(()=>import("./messagebundle_hr-c22822ea.js"),[])).default;case"hu":return(await f(()=>import("./messagebundle_hu-fa826861.js"),[])).default;case"in":return(await f(()=>import("./messagebundle_in-a7bd7d6f.js"),[])).default;case"it":return(await f(()=>import("./messagebundle_it-deffc3bd.js"),[])).default;case"iw":return(await f(()=>import("./messagebundle_iw-4f23f9c0.js"),[])).default;case"ja":return(await f(()=>import("./messagebundle_ja-76b95b84.js"),[])).default;case"kk":return(await f(()=>import("./messagebundle_kk-c4fba8da.js"),[])).default;case"ko":return(await f(()=>import("./messagebundle_ko-4623202d.js"),[])).default;case"lt":return(await f(()=>import("./messagebundle_lt-a0a901e1.js"),[])).default;case"lv":return(await f(()=>import("./messagebundle_lv-fa8134fd.js"),[])).default;case"ms":return(await f(()=>import("./messagebundle_ms-96fc1041.js"),[])).default;case"nl":return(await f(()=>import("./messagebundle_nl-87abc884.js"),[])).default;case"no":return(await f(()=>import("./messagebundle_no-b09f2125.js"),[])).default;case"pl":return(await f(()=>import("./messagebundle_pl-96a9465f.js"),[])).default;case"pt":return(await f(()=>import("./messagebundle_pt-ddd112ba.js"),[])).default;case"pt_PT":return(await f(()=>import("./messagebundle_pt_PT-d9e37bc8.js"),[])).default;case"ro":return(await f(()=>import("./messagebundle_ro-37cdec40.js"),[])).default;case"ru":return(await f(()=>import("./messagebundle_ru-219524e2.js"),[])).default;case"sh":return(await f(()=>import("./messagebundle_sh-5b8eb19f.js"),[])).default;case"sk":return(await f(()=>import("./messagebundle_sk-208ace90.js"),[])).default;case"sl":return(await f(()=>import("./messagebundle_sl-df186b19.js"),[])).default;case"sv":return(await f(()=>import("./messagebundle_sv-74c6fd04.js"),[])).default;case"th":return(await f(()=>import("./messagebundle_th-9dfde0bf.js"),[])).default;case"tr":return(await f(()=>import("./messagebundle_tr-b5513866.js"),[])).default;case"uk":return(await f(()=>import("./messagebundle_uk-d2392c41.js"),[])).default;case"vi":return(await f(()=>import("./messagebundle_vi-0d37844b.js"),[])).default;case"zh_CN":return(await f(()=>import("./messagebundle_zh_CN-850bd754.js"),[])).default;case"zh_TW":return(await f(()=>import("./messagebundle_zh_TW-8b117ed5.js"),[])).default;default:throw"unknown locale"}},Gb=async t=>{const e=await Yb(t);if(typeof e=="string"&&e.endsWith(".json"))throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);return e},Xb=["ar","bg","ca","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt","pt_PT","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh_CN","zh_TW"];Xb.forEach(t=>{lu("@ui5/webcomponents-fiori",t,Gb)});var Ba;(function(t){t["SAP-icons"]="SAP-icons-v4",t.horizon="SAP-icons-v5",t["SAP-icons-TNT"]="tnt",t.BusinessSuiteInAppSymbols="business-suite"})(Ba||(Ba={}));const Up=t=>Ba[t]?Ba[t]:t;var Rn;(function(t){t.SAPIconsV4="SAP-icons-v4",t.SAPIconsV5="SAP-icons-v5",t.SAPIconsTNTV2="tnt-v2",t.SAPIconsTNTV3="tnt-v3",t.SAPBSIconsV1="business-suite-v1",t.SAPBSIconsV2="business-suite-v2"})(Rn||(Rn={}));const un=new Map;un.set("SAP-icons",{legacy:Rn.SAPIconsV4,sap_horizon:Rn.SAPIconsV5});un.set("tnt",{legacy:Rn.SAPIconsTNTV2,sap_horizon:Rn.SAPIconsTNTV3});un.set("business-suite",{legacy:Rn.SAPBSIconsV1,sap_horizon:Rn.SAPBSIconsV2});const Zb=(t,e)=>{if(un.has(t)){un.set(t,{...e,...un.get(t)});return}un.set(t,e)},w_=t=>{const e=Ue()?"legacy":"sap_horizon";return un.has(t)?un.get(t)[e]:t},Qb=new Map,Jb=t=>Qb.get(t),Vp=t=>{const e=Jb($r());return!t&&e?Up(e):w_(t||"SAP-icons")},Kb=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g,e5=(t,e)=>(e=e||[],t.replace(Kb,(n,i,o,r,a)=>{if(i)return"'";if(o)return o.replace(/''/g,"'");if(r){const s=typeof r=="string"?parseInt(r):r;return String(e[s])}throw new Error(`[i18n]: pattern syntax error at pos ${a}`)})),Ms=new Map;class t5{constructor(e){this.packageName=e}getText(e,...n){if(typeof e=="string"&&(e={key:e,defaultText:e}),!e||!e.key)return"";const i=Lb(this.packageName);i&&!i[e.key]&&console.warn(`Key ${e.key} not found in the i18n bundle, the default text will be used`);const o=i&&i[e.key]?i[e.key]:e.defaultText||e.key;return e5(o,n)}}const n5=t=>{if(Ms.has(t))return Ms.get(t);const e=new t5(t);return Ms.set(t,e),e},ie=async t=>(await Hp(t),n5(t)),i5="legacy",Pl=new Map,Wp=Pi("SVGIcons.registry",new Map),Fs=Pi("SVGIcons.promises",new Map),Ll="ICON_NOT_FOUND",k_=(t,e)=>{Pl.set(t,e)},o5=async t=>{if(!Fs.has(t)){if(!Pl.has(t))throw new Error(`No loader registered for the ${t} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const e=Pl.get(t);Fs.set(t,e(t))}return Fs.get(t)},x_=t=>{Object.keys(t.data).forEach(e=>{const n=t.data[e];G(e,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:t.collection,packageName:t.packageName})})},G=(t,e)=>{const n=`${e.collection}/${t}`;Wp.set(n,{pathData:e.pathData,ltr:e.ltr,accData:e.accData,packageName:e.packageName,customTemplate:e.customTemplate,viewBox:e.viewBox,collection:e.collection})},jp=t=>{t.startsWith("sap-icon://")&&(t=t.replace("sap-icon://",""));let e;return[t,e]=t.split("/").reverse(),t=t.replace("icon-",""),e&&(e=Up(e)),{name:t,collection:e}},qp=t=>{const{name:e,collection:n}=jp(t);return Ol(n,e)},Yp=async t=>{const{name:e,collection:n}=jp(t);let i=Ll;try{i=await o5(Vp(n))}catch(r){console.error(r.message)}if(i===Ll)return i;const o=Ol(n,e);return o||(Array.isArray(i)?i.forEach(r=>{x_(r),Zb(n,{[r.themeFamily||i5]:r.collection})}):x_(i),Ol(n,e))},Ol=(t,e)=>{const n=`${Vp(t)}/${e}`;return Wp.get(n)},r5=async t=>{if(!t)return;let e=qp(t);if(e||(e=await Yp(t)),e&&e!==Ll&&e.accData)return(await ie(e.packageName)).getText(e.accData)},T_=async t=>{let e;if(t==="SAP-icons-v5"?e=(await f(()=>import("./SAP-icons-53fc8d71.js"),[])).default:e=(await f(()=>import("./SAP-icons-6de77ac4.js"),[])).default,typeof e=="string"&&e.endsWith(".json"))throw new Error('[icons] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use `import "@ui5/webcomponents-icons/dist/Assets-static.js". Check the "Assets" documentation for more information.');return e},a5=()=>{k_("SAP-icons-v4",T_),k_("SAP-icons-v5",T_)};a5();const s5=()=>new Promise(t=>{document.body?t():document.addEventListener("DOMContentLoaded",()=>{t()})}),l5={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72")}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold')}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold')}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light')}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono')}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold')}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex')}`},c5={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"},u5=()=>{const t=Ce("OpenUI5Support");(!t||!t.isOpenUI5Detected())&&_5(),d5()},_5=()=>{Cr("data-ui5-font-face")||Tr(l5,"data-ui5-font-face")},d5=()=>{Cr("data-ui5-font-face-override")||Tr(c5,"data-ui5-font-face-override")},h5={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}[dir=rtl]{--_ui5_dir:rtl}[dir=ltr]{--_ui5_dir:ltr}"},p5=()=>{Cr("data-ui5-system-css-vars")||Tr(h5,"data-ui5-system-css-vars")};let cu=!1,Wr;const Gp=new Yn,f5=t=>{if(!cu){Gp.attachEvent("boot",t);return}t()},m5=async()=>{if(Wr!==void 0)return Wr;const t=async e=>{if(typeof document>"u"){e();return}Vv(g5),$v();const n=Ce("OpenUI5Support"),i=n?n.isOpenUI5Detected():!1,o=Ce("F6Navigation");n&&await n.init(),o&&!i&&o.init(),await s5(),await ou($r()),n&&n.attachListeners(),u5(),p5(),e(),cu=!0,await Gp.fireEventAsync("boot")};return Wr=new Promise(t),Wr},g5=t=>{const e=$r();cu&&t===e&&ou(e)},Ns=new Map,zs=new Map,C_=t=>{if(!Ns.has(t)){const e=v5(t.split("-"));Ns.set(t,e)}return Ns.get(t)},Xp=t=>{if(!zs.has(t)){const e=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();zs.set(t,e)}return zs.get(t)},v5=t=>t.map((e,n)=>n===0?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(""),b5=t=>{if(!(t instanceof HTMLElement))return"default";const e=t.getAttribute("slot");if(e){const n=e.match(/^(.+?)-\d+$/);return n?n[1]:e}return"default"},Zp=t=>t instanceof HTMLSlotElement?t.assignedNodes({flatten:!0}).filter(e=>e instanceof HTMLElement):[t],y5=t=>t.reduce((e,n)=>e.concat(Zp(n)),[]);let w5,S_={include:[/^ui5-/],exclude:[]};const Hs=new Map,Qp=()=>w5,Rl=t=>{if(!Hs.has(t)){const e=S_.include.some(n=>t.match(n))&&!S_.exclude.some(n=>t.match(n));Hs.set(t,e)}return Hs.get(t)},Jp=t=>{if(Rl(t))return Qp()};class k5{constructor(e){this.metadata=e}getInitialState(){if(Object.prototype.hasOwnProperty.call(this,"_initialState"))return this._initialState;const e={},n=this.slotsAreManaged(),i=this.getProperties();for(const o in i){const r=i[o].type,a=i[o].defaultValue;r===Boolean?(e[o]=!1,a!==void 0&&console.warn("The 'defaultValue' metadata key is ignored for all booleans properties, they would be initialized with 'false' by default")):i[o].multiple?e[o]=[]:r===Object?e[o]="defaultValue"in i[o]?i[o].defaultValue:{}:r===String?e[o]="defaultValue"in i[o]?i[o].defaultValue:"":e[o]=a}if(n){const o=this.getSlots();for(const[r,a]of Object.entries(o)){const s=a.propertyName||r;e[s]=[]}}return this._initialState=e,e}static validatePropertyValue(e,n){return n.multiple&&e?e.map(o=>$_(o,n)):$_(e,n)}static validateSlotValue(e,n){return x5(e,n)}getPureTag(){return this.metadata.tag||""}getTag(){const e=this.metadata.tag;if(!e)return"";const n=Jp(e);return n?`${e}-${n}`:e}hasAttribute(e){const n=this.getProperties()[e];return n.type!==Object&&!n.noAttribute&&!n.multiple}getPropertiesList(){return Object.keys(this.getProperties())}getAttributesList(){return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(Xp)}canSlotText(){const e=this.getSlots().default;return e&&e.type===Node}hasSlots(){return!!Object.entries(this.getSlots()).length}hasIndividualSlots(){return this.slotsAreManaged()&&Object.values(this.getSlots()).some(e=>e.individualSlots)}slotsAreManaged(){return!!this.metadata.managedSlots}supportsF6FastNavigation(){return!!this.metadata.fastNavigation}getProperties(){return this.metadata.properties||(this.metadata.properties={}),this.metadata.properties}getEvents(){return this.metadata.events||(this.metadata.events={}),this.metadata.events}getSlots(){return this.metadata.slots||(this.metadata.slots={}),this.metadata.slots}isLanguageAware(){return!!this.metadata.languageAware}isThemeAware(){return!!this.metadata.themeAware}shouldInvalidateOnChildChange(e,n,i){const o=this.getSlots()[e].invalidateOnChildChange;if(o===void 0)return!1;if(typeof o=="boolean")return o;if(typeof o=="object"){if(n==="property"){if(o.properties===void 0)return!1;if(typeof o.properties=="boolean")return o.properties;if(Array.isArray(o.properties))return o.properties.includes(i);throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected")}if(n==="slot"){if(o.slots===void 0)return!1;if(typeof o.slots=="boolean")return o.slots;if(Array.isArray(o.slots))return o.slots.includes(i);throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected")}}throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected")}}const $_=(t,e)=>{const n=e.type;let i=e.validator;return n&&n.isDataTypeClass&&(i=n),i?i.isValid(t)?t:e.defaultValue:!n||n===String?typeof t=="string"||typeof t>"u"||t===null?t:t.toString():n===Boolean?typeof t=="boolean"?t:!1:n===Object?typeof t=="object"?t:e.defaultValue:t in n?t:e.defaultValue},x5=(t,e)=>(t&&Zp(t).forEach(n=>{if(!(n instanceof e.type))throw new Error(`The element is not of type ${e.type.toString()}`)}),t);class T5 extends HTMLElement{}customElements.get("ui5-static-area")||customElements.define("ui5-static-area",T5);const C5=()=>Pi("CustomStyle.eventProvider",new Yn),S5="CustomCSSChange",uu=t=>{C5().attachEvent(S5,t)},$5=()=>Pi("CustomStyle.customCSSFor",{});uu(t=>{iu({tag:t})});const I5=t=>{const e=$5();return e[t]?e[t].join(""):""},E5=10,Us=t=>Array.isArray(t)?t.filter(e=>!!e).flat(E5).map(e=>typeof e=="string"?e:e.content).join(" "):typeof t=="string"?t:t.content,la=new Map;uu(t=>{la.delete(`${t}_normal`)});const Kp=(t,e=!1)=>{const n=t.getMetadata().getTag(),i=`${n}_${e?"static":"normal"}`,o=Ce("OpenUI5Enablement");if(!la.has(i)){let r,a="";if(o&&(a=Us(o.getBusyIndicatorStyles())),e)r=Us(t.staticAreaStyles);else{const s=I5(n)||"";r=`${Us(t.styles)} ${s}`}r=`${r} ${a}`,la.set(i,r)}return la.get(i)},ca=new Map;uu(t=>{ca.delete(`${t}_normal`)});const A5=(t,e=!1)=>{const i=`${t.getMetadata().getTag()}_${e?"static":"normal"}`;if(!ca.has(i)){const o=Kp(t,e),r=new CSSStyleSheet;r.replaceSync(o),ca.set(i,[r])}return ca.get(i)},Ml=(t,e=!1)=>{let n;const i=t.constructor,o=e?t.staticAreaItem.shadowRoot:t.shadowRoot;let r;if(e?r=t.renderStatic():r=t.render(),!o){console.warn("There is no shadow root to update");return}if(document.adoptedStyleSheets?o.adoptedStyleSheets=A5(i,e):n=Kp(i,e),i.renderer){i.renderer(r,o,n,e,{host:t});return}i.render(r,o,n,e,{host:t})},D5="--_ui5_content_density",B5=t=>getComputedStyle(t).getPropertyValue(D5),ef=t=>{const e=/\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(t);return e&&e[2]?e[2].split(/,/):null},P5={iw:"he",ji:"yi",in:"id",sh:"sr"},L5=ef("$cldr-rtl-locales:ar,fa,he$")||[],O5=t=>(t=t&&P5[t]||t,L5.indexOf(t)>=0),R5=()=>{if(typeof document>"u")return!1;const t=_v();return t!==void 0?!!t:O5(ru()||Lp())},M5="--_ui5_dir",tf=t=>{const e=window.document,n=["ltr","rtl"],i=getComputedStyle(t).getPropertyValue(M5);return n.includes(i)?i:n.includes(t.dir)?t.dir:n.includes(e.documentElement.dir)?e.documentElement.dir:n.includes(e.body.dir)?e.body.dir:R5()?"rtl":void 0},jr="ui5-static-area-item",F5="data-sap-ui-integration-popup-content";class Wo extends HTMLElement{constructor(){super(),this._rendered=!1,this.attachShadow({mode:"open"})}setOwnerElement(e){this.ownerElement=e,this.classList.add(this.ownerElement._id),this.ownerElement.hasAttribute("data-ui5-static-stable")&&this.setAttribute("data-ui5-stable",this.ownerElement.getAttribute("data-ui5-static-stable"))}update(){this._rendered&&(this.updateAdditionalProperties(),Ml(this.ownerElement,!0))}updateAdditionalProperties(){this._updateAdditionalAttrs(),this._updateContentDensity(),this._updateDirection()}_updateContentDensity(){B5(this.ownerElement)==="compact"?(this.classList.add("sapUiSizeCompact"),this.classList.add("ui5-content-density-compact")):(this.classList.remove("sapUiSizeCompact"),this.classList.remove("ui5-content-density-compact"))}_updateDirection(){if(this.ownerElement){const e=tf(this.ownerElement);e?this.setAttribute("dir",e):this.removeAttribute("dir")}}_updateAdditionalAttrs(){this.setAttribute(`_ui5rt${Li()}`,""),this.setAttribute("_ui5host",""),this.setAttribute(jr,""),this.setAttribute(F5,"")}async getDomRef(){return this.updateAdditionalProperties(),this._rendered||(this._rendered=!0,Ml(this.ownerElement,!0)),await vo(),this.shadowRoot}static getTag(){const e=Jp(jr);return e?`${jr}-${e}`:jr}static createInstance(){return customElements.get(Wo.getTag())||customElements.define(Wo.getTag(),Wo),document.createElement(this.getTag())}}const N5=[],z5=t=>N5.some(e=>t.startsWith(e)),Fl=new WeakMap,H5=(t,e,n)=>{const i=new MutationObserver(e);Fl.set(t,i),i.observe(t,n)},U5=t=>{const e=Fl.get(t);e&&(e.disconnect(),Fl.delete(t))},V5=["value-changed","click"];let Vs;const W5=t=>V5.includes(t),j5=t=>{const e=nf();return!(typeof e!="boolean"&&e.events&&e.events.includes&&e.events.includes(t))},nf=()=>(Vs===void 0&&(Vs=pv()),Vs),q5=t=>{const e=nf();return W5(t)?!1:e===!0?!0:!j5(t)},Y5=["disabled","title","hidden","role","draggable"],I_=t=>Y5.includes(t)||t.startsWith("aria")?!0:![HTMLElement,Element,Node].some(n=>n.prototype.hasOwnProperty(t)),E_=(t,e)=>{if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},Nl=(t,e)=>{const n=G5(e),i=Qp();return t.call(e,e,n,i)},G5=t=>{const e=t.constructor,n=e.getMetadata().getPureTag(),i=e.getUniqueDependencies().map(o=>o.getMetadata().getPureTag()).filter(Rl);return Rl(n)&&i.push(n),i};let X5=0;const A_=new Map,Ws=new Map;function Co(t){this._suppressInvalidation||(this.onInvalidation(t),this._changedState.push(t),mp(this),this._eventProvider.fireEvent("invalidate",{...t,target:this}))}class Q extends HTMLElement{constructor(){super();const e=this.constructor;this._changedState=[],this._suppressInvalidation=!0,this._inDOM=!1,this._fullyConnected=!1,this._childChangeListeners=new Map,this._slotChangeListeners=new Map,this._eventProvider=new Yn;let n;this._domRefReadyPromise=new Promise(i=>{n=i}),this._domRefReadyPromise._deferredResolve=n,this._doNotSyncAttributes=new Set,this._state={...e.getMetadata().getInitialState()},this._upgradeAllProperties(),e._needsShadowDOM()&&this.attachShadow({mode:"open"})}get _id(){return this.__id||(this.__id=`ui5wc_${++X5}`),this.__id}render(){const e=this.constructor.template;return Nl(e,this)}renderStatic(){const e=this.constructor.staticAreaTemplate;return Nl(e,this)}async connectedCallback(){const e=this.constructor;this.setAttribute(`_ui5rt${Li()}`,""),this.setAttribute("_ui5host",""),this.setAttribute(e.getMetadata().getPureTag(),""),e.getMetadata().supportsF6FastNavigation()&&this.setAttribute("data-sap-ui-fastnavgroup","true");const n=e.getMetadata().slotsAreManaged();this._inDOM=!0,n&&(this._startObservingDOMChildren(),await this._processChildren()),this._inDOM&&(gp(this),this._domRefReadyPromise._deferredResolve(),this._fullyConnected=!0,this.onEnterDOM())}disconnectedCallback(){const n=this.constructor.getMetadata().slotsAreManaged();this._inDOM=!1,n&&this._stopObservingDOMChildren(),this._fullyConnected&&(this.onExitDOM(),this._fullyConnected=!1),this.staticAreaItem&&this.staticAreaItem.parentElement&&this.staticAreaItem.parentElement.removeChild(this.staticAreaItem),Fv(this)}onBeforeRendering(){}onAfterRendering(){}onEnterDOM(){}onExitDOM(){}_startObservingDOMChildren(){const e=this.constructor;if(!e.getMetadata().hasSlots())return;const i=e.getMetadata().canSlotText(),o={childList:!0,subtree:i,characterData:i};H5(this,this._processChildren.bind(this),o)}_stopObservingDOMChildren(){U5(this)}async _processChildren(){this.constructor.getMetadata().hasSlots()&&await this._updateSlots()}async _updateSlots(){const e=this.constructor,n=e.getMetadata().getSlots(),i=e.getMetadata().canSlotText(),o=Array.from(i?this.childNodes:this.children),r=new Map,a=new Map;for(const[_,m]of Object.entries(n)){const g=m.propertyName||_;a.set(g,_),r.set(g,[...this._state[g]]),this._clearSlot(_,m)}const s=new Map,c=new Map,u=o.map(async(_,m)=>{const g=b5(_),b=n[g];if(b===void 0){if(g!=="default"){const T=Object.keys(n).join(", ");console.warn(`Unknown slotName: ${g}, ignoring`,_,`Valid values are: ${T}`)}return}if(b.individualSlots){const T=(s.get(g)||0)+1;s.set(g,T),_._individualSlot=`${g}-${T}`}if(_ instanceof HTMLElement){const T=_.localName;if(T.includes("-")&&!z5(T)){if(!window.customElements.get(T)){const R=window.customElements.whenDefined(T);let K=A_.get(T);K||(K=new Promise(ee=>setTimeout(ee,1e3)),A_.set(T,K)),await Promise.race([R,K])}window.customElements.upgrade(_)}}if(_=e.getMetadata().constructor.validateSlotValue(_,b),ro(_)&&b.invalidateOnChildChange){const T=this._getChildChangeListener(g);T&&_.attachInvalidate.call(_,T)}_ instanceof HTMLSlotElement&&this._attachSlotChange(_,g);const w=b.propertyName||g;c.has(w)?c.get(w).push({child:_,idx:m}):c.set(w,[{child:_,idx:m}])});await Promise.all(u),c.forEach((_,m)=>{this._state[m]=_.sort((g,b)=>g.idx-b.idx).map(g=>g.child)});let h=!1;for(const[_,m]of Object.entries(n)){const g=m.propertyName||_;E_(r.get(g),this._state[g])||(Co.call(this,{type:"slot",name:a.get(g),reason:"children"}),h=!0)}h||Co.call(this,{type:"slot",name:"default",reason:"textcontent"})}_clearSlot(e,n){const i=n.propertyName||e;this._state[i].forEach(r=>{if(ro(r)){const a=this._getChildChangeListener(e);a&&r.detachInvalidate.call(r,a)}r instanceof HTMLSlotElement&&this._detachSlotChange(r,e)}),this._state[i]=[]}attachInvalidate(e){this._eventProvider.attachEvent("invalidate",e)}detachInvalidate(e){this._eventProvider.detachEvent("invalidate",e)}_onChildChange(e,n){this.constructor.getMetadata().shouldInvalidateOnChildChange(e,n.type,n.name)&&Co.call(this,{type:"slot",name:e,reason:"childchange",child:n.target})}attributeChangedCallback(e,n,i){let o;if(this._doNotSyncAttributes.has(e))return;const r=this.constructor.getMetadata().getProperties(),a=e.replace(/^ui5-/,""),s=C_(a);if(r.hasOwnProperty(s)){const c=r[s],u=c.type;let h=c.validator;u&&u.isDataTypeClass&&(h=u),h?o=h.attributeToProperty(i):u===Boolean?o=i!==null:o=i,this[s]=o}}_updateAttribute(e,n){const i=this.constructor;if(!i.getMetadata().hasAttribute(e))return;const r=i.getMetadata().getProperties()[e],a=r.type;let s=r.validator;const c=Xp(e),u=this.getAttribute(c);if(a&&a.isDataTypeClass&&(s=a),s){const h=s.propertyToAttribute(n);h===null?(this._doNotSyncAttributes.add(c),this.removeAttribute(c),this._doNotSyncAttributes.delete(c)):this.setAttribute(c,h)}else a===Boolean?n===!0&&u===null?this.setAttribute(c,""):n===!1&&u!==null&&this.removeAttribute(c):typeof n!="object"&&u!==n&&this.setAttribute(c,n)}_upgradeProperty(e){if(this.hasOwnProperty(e)){const n=this[e];delete this[e],this[e]=n}}_upgradeAllProperties(){this.constructor.getMetadata().getPropertiesList().forEach(this._upgradeProperty.bind(this))}_getChildChangeListener(e){return this._childChangeListeners.has(e)||this._childChangeListeners.set(e,this._onChildChange.bind(this,e)),this._childChangeListeners.get(e)}_getSlotChangeListener(e){return this._slotChangeListeners.has(e)||this._slotChangeListeners.set(e,this._onSlotChange.bind(this,e)),this._slotChangeListeners.get(e)}_attachSlotChange(e,n){const i=this._getSlotChangeListener(n);i&&e.addEventListener("slotchange",i)}_detachSlotChange(e,n){e.removeEventListener("slotchange",this._getSlotChangeListener(n))}_onSlotChange(e){Co.call(this,{type:"slot",name:e,reason:"slotchange"})}onInvalidation(e){}_render(){const e=this.constructor,n=e.getMetadata().hasIndividualSlots();this._suppressInvalidation=!0,this.onBeforeRendering(),this._onComponentStateFinalized&&this._onComponentStateFinalized(),this._suppressInvalidation=!1,this._changedState=[],e._needsShadowDOM()&&Ml(this),this.staticAreaItem&&this.staticAreaItem.update(),n&&this._assignIndividualSlotsToChildren(),this.onAfterRendering()}_assignIndividualSlotsToChildren(){Array.from(this.children).forEach(n=>{n._individualSlot&&n.setAttribute("slot",n._individualSlot)})}_waitForDomRef(){return this._domRefReadyPromise}getDomRef(){if(typeof this._getRealDomRef=="function")return this._getRealDomRef();if(!this.shadowRoot||this.shadowRoot.children.length===0)return;const e=[...this.shadowRoot.children].filter(n=>!["link","style"].includes(n.localName));return e.length!==1&&console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`),e[0]}getFocusDomRef(){const e=this.getDomRef();if(e)return e.querySelector("[data-sap-focus-ref]")||e}async getFocusDomRefAsync(){return await this._waitForDomRef(),this.getFocusDomRef()}async focus(e){await this._waitForDomRef();const n=this.getFocusDomRef();n&&typeof n.focus=="function"&&n.focus(e)}fireEvent(e,n,i=!1,o=!0){const r=this._fireEvent(e,n,i,o),a=C_(e);return a!==e?r&&this._fireEvent(a,n,i):r}_fireEvent(e,n,i=!1,o=!0){const r=new CustomEvent(`ui5-${e}`,{detail:n,composed:!1,bubbles:o,cancelable:i}),a=this.dispatchEvent(r);if(q5(e))return a;const s=new CustomEvent(e,{detail:n,composed:!1,bubbles:o,cancelable:i});return this.dispatchEvent(s)&&a}getSlottedNodes(e){return y5(this[e])}get effectiveDir(){return Ov(this.constructor),tf(this)}get isUI5Element(){return!0}get classes(){return{}}static get observedAttributes(){return this.getMetadata().getAttributesList()}static _needsShadowDOM(){return!!this.template||Object.prototype.hasOwnProperty.call(this.prototype,"render")}static _needsStaticArea(){return!!this.staticAreaTemplate||Object.prototype.hasOwnProperty.call(this.prototype,"renderStatic")}getStaticAreaItemDomRef(){if(!this.constructor._needsStaticArea())throw new Error("This component does not use the static area");return this.staticAreaItem||(this.staticAreaItem=Wo.createInstance(),this.staticAreaItem.setOwnerElement(this)),this.staticAreaItem.parentElement||Aa("ui5-static-area").appendChild(this.staticAreaItem),this.staticAreaItem.getDomRef()}static _generateAccessors(){const e=this.prototype,n=this.getMetadata().slotsAreManaged(),i=this.getMetadata().getProperties();for(const[o,r]of Object.entries(i)){if(I_(o)||console.warn(`"${o}" is not a valid property name. Use a name that does not collide with DOM APIs`),r.type===Boolean&&r.defaultValue)throw new Error(`Cannot set a default value for property "${o}". All booleans are false by default.`);if(r.type===Array)throw new Error(`Wrong type for property "${o}". Properties cannot be of type Array - use "multiple: true" and set "type" to the single value type, such as "String", "Object", etc...`);if(r.type===Object&&r.defaultValue)throw new Error(`Cannot set a default value for property "${o}". All properties of type "Object" are empty objects by default.`);if(r.multiple&&r.defaultValue)throw new Error(`Cannot set a default value for property "${o}". All multiple properties are empty arrays by default.`);Object.defineProperty(e,o,{get(){if(this._state[o]!==void 0)return this._state[o];const a=r.defaultValue;return r.type===Boolean?!1:r.type===String?a:r.multiple?[]:a},set(a){let s;a=this.constructor.getMetadata().constructor.validatePropertyValue(a,r);const h=r.type;let _=r.validator;const m=this._state[o];h&&h.isDataTypeClass&&(_=h),_?s=!_.valuesAreEqual(m,a):Array.isArray(m)&&Array.isArray(a)&&r.multiple&&r.compareValues?s=!E_(m,a):s=m!==a,s&&(this._state[o]=a,Co.call(this,{type:"property",name:o,newValue:a,oldValue:m}),this._updateAttribute(o,a))}})}if(n){const o=this.getMetadata().getSlots();for(const[r,a]of Object.entries(o)){I_(r)||console.warn(`"${r}" is not a valid property name. Use a name that does not collide with DOM APIs`);const s=a.propertyName||r;Object.defineProperty(e,s,{get(){return this._state[s]!==void 0?this._state[s]:[]},set(){throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)")}})}}}static get styles(){return""}static get staticAreaStyles(){return""}static get dependencies(){return[]}static getUniqueDependencies(){if(!Ws.has(this)){const e=this.dependencies.filter((n,i,o)=>o.indexOf(n)===i);Ws.set(this,e)}return Ws.get(this)||[]}static whenDependenciesDefined(){return Promise.all(this.getUniqueDependencies().map(e=>e.define()))}static async onDefine(){return Promise.resolve()}static async define(){await m5(),await Promise.all([this.whenDependenciesDefined(),this.onDefine()]);const e=this.getMetadata().getTag(),n=Dv(e),i=customElements.get(e);return i&&!n?Pv(e):i||(this._generateAccessors(),Av(e),window.customElements.define(e,this)),this}static getMetadata(){if(this.hasOwnProperty("_metadata"))return this._metadata;const e=[this.metadata];let n=this;for(;n!==Q;)n=Object.getPrototypeOf(n),e.unshift(n.metadata);const i=eu({},...e);return this._metadata=new k5(i),this._metadata}}Q.metadata={};const ro=t=>"isUI5Element"in t,U=t=>e=>{if(Object.prototype.hasOwnProperty.call(e,"metadata")||(e.metadata={}),typeof t=="string"){e.metadata.tag=t;return}const{tag:n,languageAware:i,themeAware:o,fastNavigation:r}=t;e.metadata.tag=n,i&&(e.metadata.languageAware=i),o&&(e.metadata.themeAware=o),r&&(e.metadata.fastNavigation=r),["render","renderer","template","staticAreaTemplate","styles","staticAreaStyles","dependencies"].forEach(a=>{const c=t[a==="render"?"renderer":a];c&&Object.defineProperty(e,a,{get:()=>c})})},d=t=>(e,n)=>{const i=e.constructor;Object.prototype.hasOwnProperty.call(i,"metadata")||(i.metadata={});const o=i.metadata;o.properties||(o.properties={});const r=o.properties;r[n]||(r[n]=t||{type:String})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var js;const Pa=window,ao=Pa.trustedTypes,D_=ao?ao.createPolicy("lit-html",{createHTML:t=>t}):void 0,La="$lit$",ln=`lit$${(Math.random()+"").slice(9)}$`,_u="?"+ln,Z5=`<${_u}>`,so=document,or=()=>so.createComment(""),rr=t=>t===null||typeof t!="object"&&typeof t!="function",of=Array.isArray,rf=t=>of(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",qs=`[ 	
\f\r]`,So=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B_=/-->/g,P_=/>/g,ni=RegExp(`>|${qs}(?:([^\\s"'>=/]+)(${qs}*=${qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L_=/'/g,O_=/"/g,af=/^(?:script|style|textarea|title)$/i,sf=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),It=sf(1),Q5=sf(2),Qt=Symbol.for("lit-noChange"),ve=Symbol.for("lit-nothing"),R_=new WeakMap,Ji=so.createTreeWalker(so,129,null,!1),lf=(t,e)=>{const n=t.length-1,i=[];let o,r=e===2?"<svg>":"",a=So;for(let c=0;c<n;c++){const u=t[c];let h,_,m=-1,g=0;for(;g<u.length&&(a.lastIndex=g,_=a.exec(u),_!==null);)g=a.lastIndex,a===So?_[1]==="!--"?a=B_:_[1]!==void 0?a=P_:_[2]!==void 0?(af.test(_[2])&&(o=RegExp("</"+_[2],"g")),a=ni):_[3]!==void 0&&(a=ni):a===ni?_[0]===">"?(a=o??So,m=-1):_[1]===void 0?m=-2:(m=a.lastIndex-_[2].length,h=_[1],a=_[3]===void 0?ni:_[3]==='"'?O_:L_):a===O_||a===L_?a=ni:a===B_||a===P_?a=So:(a=ni,o=void 0);const b=a===ni&&t[c+1].startsWith("/>")?" ":"";r+=a===So?u+Z5:m>=0?(i.push(h),u.slice(0,m)+La+u.slice(m)+ln+b):u+ln+(m===-2?(i.push(void 0),c):b)}const s=r+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[D_!==void 0?D_.createHTML(s):s,i]};let zl=class cf{constructor({strings:e,_$litType$:n},i){let o;this.parts=[];let r=0,a=0;const s=e.length-1,c=this.parts,[u,h]=lf(e,n);if(this.el=cf.createElement(u,i),Ji.currentNode=this.el.content,n===2){const _=this.el.content,m=_.firstChild;m.remove(),_.append(...m.childNodes)}for(;(o=Ji.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const m of o.getAttributeNames())if(m.endsWith(La)||m.startsWith(ln)){const g=h[a++];if(_.push(m),g!==void 0){const b=o.getAttribute(g.toLowerCase()+La).split(ln),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:w[2],strings:b,ctor:w[1]==="."?df:w[1]==="?"?hf:w[1]==="@"?pf:Ir})}else c.push({type:6,index:r})}for(const m of _)o.removeAttribute(m)}if(af.test(o.tagName)){const _=o.textContent.split(ln),m=_.length-1;if(m>0){o.textContent=ao?ao.emptyScript:"";for(let g=0;g<m;g++)o.append(_[g],or()),Ji.nextNode(),c.push({type:2,index:++r});o.append(_[m],or())}}}else if(o.nodeType===8)if(o.data===_u)c.push({type:2,index:r});else{let _=-1;for(;(_=o.data.indexOf(ln,_+1))!==-1;)c.push({type:7,index:r}),_+=ln.length-1}r++}}static createElement(e,n){const i=so.createElement("template");return i.innerHTML=e,i}};function wi(t,e,n=t,i){var o,r,a,s;if(e===Qt)return e;let c=i!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[i]:n._$Cl;const u=rr(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==u&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),u===void 0?c=void 0:(c=new u(t),c._$AT(t,n,i)),i!==void 0?((a=(s=n)._$Co)!==null&&a!==void 0?a:s._$Co=[])[i]=c:n._$Cl=c),c!==void 0&&(e=wi(t,c._$AS(t,e.values),c,i)),e}let uf=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:o}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:so).importNode(i,!0);Ji.currentNode=r;let a=Ji.nextNode(),s=0,c=0,u=o[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new ls(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new ff(a,this,e)),this._$AV.push(h),u=o[++c]}s!==(u==null?void 0:u.index)&&(a=Ji.nextNode(),s++)}return r}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}},ls=class _f{constructor(e,n,i,o){var r;this.type=2,this._$AH=ve,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=o,this._$Cp=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=wi(this,e,n),rr(e)?e===ve||e==null||e===""?(this._$AH!==ve&&this._$AR(),this._$AH=ve):e!==this._$AH&&e!==Qt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):rf(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ve&&rr(this._$AH)?this._$AA.nextSibling.data=e:this.$(so.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=zl.createElement(o.h,this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(i);else{const a=new uf(r,this),s=a.u(this.options);a.v(i),this.$(s),this._$AH=a}}_$AC(e){let n=R_.get(e.strings);return n===void 0&&R_.set(e.strings,n=new zl(e)),n}T(e){of(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of e)o===n.length?n.push(i=new _f(this.k(or()),this.k(or()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},Ir=class{constructor(e,n,i,o,r){this.type=1,this._$AH=ve,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ve}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,o){const r=this.strings;let a=!1;if(r===void 0)e=wi(this,e,n,0),a=!rr(e)||e!==this._$AH&&e!==Qt,a&&(this._$AH=e);else{const s=e;let c,u;for(e=r[0],c=0;c<r.length-1;c++)u=wi(this,s[i+c],n,c),u===Qt&&(u=this._$AH[c]),a||(a=!rr(u)||u!==this._$AH[c]),u===ve?e=ve:e!==ve&&(e+=(u??"")+r[c+1]),this._$AH[c]=u}a&&!o&&this.j(e)}j(e){e===ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},df=class extends Ir{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ve?void 0:e}};const J5=ao?ao.emptyScript:"";let hf=class extends Ir{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ve?this.element.setAttribute(this.name,J5):this.element.removeAttribute(this.name)}},pf=class extends Ir{constructor(e,n,i,o,r){super(e,n,i,o,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=wi(this,e,n,0))!==null&&i!==void 0?i:ve)===Qt)return;const o=this._$AH,r=e===ve&&o!==ve||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==ve&&(o===ve||r);r&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ff=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wi(this,e)}};const K5={O:La,P:ln,A:_u,C:1,M:lf,L:uf,D:rf,R:wi,I:ls,V:Ir,H:hf,N:pf,U:df,F:ff},M_=Pa.litHtmlPolyfillSupport;M_==null||M_(zl,ls),((js=Pa.litHtmlVersions)!==null&&js!==void 0?js:Pa.litHtmlVersions=[]).push("2.7.3");const mf=(t,e,n)=>{var i,o;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let a=r._$litPart$;if(a===void 0){const s=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=a=new ls(e.insertBefore(or(),s),s,void 0,n??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},du=t=>(...e)=>({_$litDirective$:t,values:e});let us=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ey}=K5,F_=()=>document.createComment(""),$o=(t,e,n)=>{var i;const o=t._$AA.parentNode,r=e===void 0?t._$AB:e._$AA;if(n===void 0){const a=o.insertBefore(F_(),r),s=o.insertBefore(F_(),r);n=new ey(a,s,t,t.options)}else{const a=n._$AB.nextSibling,s=n._$AM,c=s!==t;if(c){let u;(i=n._$AQ)===null||i===void 0||i.call(n,t),n._$AM=t,n._$AP!==void 0&&(u=t._$AU)!==s._$AU&&n._$AP(u)}if(a!==r||c){let u=n._$AA;for(;u!==a;){const h=u.nextSibling;o.insertBefore(u,r),u=h}}}return n},ii=(t,e,n=t)=>(t._$AI(e,n),t),ty={},ny=(t,e=ty)=>t._$AH=e,iy=t=>t._$AH,Ys=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let n=t._$AA;const i=t._$AB.nextSibling;for(;n!==i;){const o=n.nextSibling;n.remove(),n=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N_=(t,e,n)=>{const i=new Map;for(let o=e;o<=n;o++)i.set(t[o],o);return i},X=du(class extends us{constructor(t){if(super(t),t.type!==cs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const o=[],r=[];let a=0;for(const s of t)o[a]=i?i(s,a):a,r[a]=n(s,a),a++;return{values:r,keys:o}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){var o;const r=iy(t),{values:a,keys:s}=this.dt(e,n,i);if(!Array.isArray(r))return this.ht=s,a;const c=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],u=[];let h,_,m=0,g=r.length-1,b=0,w=a.length-1;for(;m<=g&&b<=w;)if(r[m]===null)m++;else if(r[g]===null)g--;else if(c[m]===s[b])u[b]=ii(r[m],a[b]),m++,b++;else if(c[g]===s[w])u[w]=ii(r[g],a[w]),g--,w--;else if(c[m]===s[w])u[w]=ii(r[m],a[w]),$o(t,u[w+1],r[m]),m++,w--;else if(c[g]===s[b])u[b]=ii(r[g],a[b]),$o(t,r[m],r[g]),g--,b++;else if(h===void 0&&(h=N_(s,b,w),_=N_(c,m,g)),h.has(c[m]))if(h.has(c[g])){const T=_.get(s[b]),D=T!==void 0?r[T]:null;if(D===null){const S=$o(t,r[m]);ii(S,a[b]),u[b]=S}else u[b]=ii(D,a[b]),$o(t,r[m],D),r[T]=null;b++}else Ys(r[g]),g--;else Ys(r[m]),m++;for(;b<=w;){const T=$o(t,u[w+1]);ii(T,a[b]),u[b++]=T}for(;m<=g;){const T=r[m++];T!==null&&Ys(T)}return this.ht=s,ny(t,u),Qt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=du(class extends us{constructor(t){var e;if(super(t),t.type!==cs.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}const o=t.element.classList;this.it.forEach(r=>{r in e||(o.remove(r),this.it.delete(r))});for(const r in e){const a=!!e[r];a===this.it.has(r)||!((i=this.nt)===null||i===void 0)&&i.has(r)||(a?(o.add(r),this.it.add(r)):(o.remove(r),this.it.delete(r)))}return Qt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class oy extends us{constructor(e){var n;if(super(e),e.type!==cs.ATTRIBUTE||e.name!=="style"||((n=e.strings)===null||n===void 0?void 0:n.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return""}update(e,[n]){const{style:i}=e.element;if(this._previousStyleProperties===void 0){this._previousStyleProperties=new Set;for(const o in n)this._previousStyleProperties.add(o)}this._previousStyleProperties.forEach(o=>{n[o]==null&&(this._previousStyleProperties.delete(o),o.includes("-")?i.removeProperty(o):i[o]="")});for(const o in n){const r=n[o];r!=null&&(this._previousStyleProperties.add(o),o.includes("-")?i.setProperty(o,r):i[o]=r)}return Qt}}const z=du(oy);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=t=>t??ve;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let z_=class extends us{constructor(e){if(super(e),this.et=ve,e.type!==cs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ve||e==null)return this.ft=void 0,this.et=e;if(e===Qt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};z_.directiveName="unsafeHTML",z_.resultType=1;const p=(t,...e)=>{const n=Ce("LitStatic");return(n?n.html:It)(t,...e)},Er=(t,...e)=>{const n=Ce("LitStatic");return(n?n.svg:Q5)(t,...e)},he=(t,e,n,i,o)=>{const r=Ce("OpenUI5Enablement");r&&!i&&(t=r.wrapTemplateResultInBusyMarkup(p,o.host,t)),typeof n=="string"?t=p`<style>${n}</style>${t}`:Array.isArray(n)&&n.length&&(t=p`${n.map(a=>p`<link type="text/css" rel="stylesheet" href="${a}">`)}${t}`),mf(t,e,o)},v=(t,e,n)=>{const i=Ce("LitStatic");if(i)return i.unsafeStatic((e||[]).includes(t)?`${t}-${n}`:t)};var P;(function(t){t[t.BACKSPACE=8]="BACKSPACE",t[t.TAB=9]="TAB",t[t.ENTER=13]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.BREAK=19]="BREAK",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.ARROW_LEFT=37]="ARROW_LEFT",t[t.ARROW_UP=38]="ARROW_UP",t[t.ARROW_RIGHT=39]="ARROW_RIGHT",t[t.ARROW_DOWN=40]="ARROW_DOWN",t[t.PRINT=44]="PRINT",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.WINDOWS=91]="WINDOWS",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.TURN_OFF=94]="TURN_OFF",t[t.SLEEP=95]="SLEEP",t[t.NUMPAD_0=96]="NUMPAD_0",t[t.NUMPAD_1=97]="NUMPAD_1",t[t.NUMPAD_2=98]="NUMPAD_2",t[t.NUMPAD_3=99]="NUMPAD_3",t[t.NUMPAD_4=100]="NUMPAD_4",t[t.NUMPAD_5=101]="NUMPAD_5",t[t.NUMPAD_6=102]="NUMPAD_6",t[t.NUMPAD_7=103]="NUMPAD_7",t[t.NUMPAD_8=104]="NUMPAD_8",t[t.NUMPAD_9=105]="NUMPAD_9",t[t.NUMPAD_ASTERISK=106]="NUMPAD_ASTERISK",t[t.NUMPAD_PLUS=107]="NUMPAD_PLUS",t[t.NUMPAD_MINUS=109]="NUMPAD_MINUS",t[t.NUMPAD_COMMA=110]="NUMPAD_COMMA",t[t.NUMPAD_SLASH=111]="NUMPAD_SLASH",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COLON=186]="COLON",t[t.PLUS=187]="PLUS",t[t.COMMA=188]="COMMA",t[t.SLASH=189]="SLASH",t[t.DOT=190]="DOT",t[t.PIPE=191]="PIPE",t[t.SEMICOLON=192]="SEMICOLON",t[t.MINUS=219]="MINUS",t[t.GREAT_ACCENT=220]="GREAT_ACCENT",t[t.EQUALS=221]="EQUALS",t[t.SINGLE_QUOTE=222]="SINGLE_QUOTE",t[t.BACKSLASH=226]="BACKSLASH"})(P||(P={}));const te=t=>(t.key?t.key==="Enter":t.keyCode===P.ENTER)&&!Ve(t),H_=t=>(t.key?t.key==="Enter":t.keyCode===P.ENTER)&&j(t,!1,!1,!0),H=t=>(t.key?t.key==="Spacebar"||t.key===" ":t.keyCode===P.SPACE)&&!Ve(t),Ki=t=>(t.key?t.key==="Spacebar"||t.key===" ":t.keyCode===P.SPACE)&&j(t,!1,!1,!0),hu=t=>(t.key?t.key==="Spacebar"||t.key===" ":t.keyCode===P.SPACE)&&j(t,!0,!1,!1),Jt=t=>(t.key?t.key==="ArrowLeft"||t.key==="Left":t.keyCode===P.ARROW_LEFT)&&!Ve(t),Et=t=>(t.key?t.key==="ArrowRight"||t.key==="Right":t.keyCode===P.ARROW_RIGHT)&&!Ve(t),Ct=t=>(t.key?t.key==="ArrowUp"||t.key==="Up":t.keyCode===P.ARROW_UP)&&!Ve(t),ct=t=>(t.key?t.key==="ArrowDown"||t.key==="Down":t.keyCode===P.ARROW_DOWN)&&!Ve(t),Hl=t=>(t.key?t.key==="ArrowLeft"||t.key==="Left":t.keyCode===P.ARROW_LEFT)&&j(t,!0,!1,!1),Ul=t=>(t.key?t.key==="ArrowRight"||t.key==="Right":t.keyCode===P.ARROW_RIGHT)&&j(t,!0,!1,!1),Ro=t=>(t.key?t.key==="ArrowUp"||t.key==="Up":t.keyCode===P.ARROW_UP)&&j(t,!0,!1,!1),jo=t=>(t.key?t.key==="ArrowDown"||t.key==="Down":t.keyCode===P.ARROW_DOWN)&&j(t,!0,!1,!1),hn=t=>(t.key?t.key==="ArrowUp"||t.key==="Up":t.keyCode===P.ARROW_UP)&&j(t,!1,!1,!0),Zt=t=>(t.key?t.key==="ArrowDown"||t.key==="Down":t.keyCode===P.ARROW_DOWN)&&j(t,!1,!1,!0),U_=t=>(t.key?t.key==="ArrowUp"||t.key==="Up":t.keyCode===P.ARROW_UP)&&j(t,!1,!0,!1),ry=t=>(t.key?t.key==="ArrowDown"||t.key==="Down":t.keyCode===P.ARROW_DOWN)&&j(t,!1,!0,!1),Vl=t=>(t.key?t.key==="ArrowLeft"||t.key==="Left":t.keyCode===P.ARROW_LEFT)&&j(t,!1,!1,!0),Oa=t=>(t.key?t.key==="ArrowRight"||t.key==="Right":t.keyCode===P.ARROW_RIGHT)&&j(t,!1,!1,!0),ay=t=>(t.key?t.key==="ArrowLeft"||t.key==="Left":t.keyCode===P.ARROW_LEFT)&&j(t,!0,!1,!0),V_=t=>(t.key?t.key==="ArrowRight"||t.key==="Right":t.keyCode===P.ARROW_RIGHT)&&j(t,!0,!1,!0),Ft=t=>(t.key?t.key==="Home":t.keyCode===P.HOME)&&!Ve(t),Mn=t=>(t.key?t.key==="End":t.keyCode===P.END)&&!Ve(t),bo=t=>(t.key?t.key==="Home":t.keyCode===P.HOME)&&j(t,!0,!1,!1),Wl=t=>(t.key?t.key==="Home":t.keyCode===P.HOME)&&j(t,!1,!1,!0),ki=t=>(t.key?t.key==="End":t.keyCode===P.END)&&j(t,!0,!1,!1),jl=t=>(t.key?t.key==="End":t.keyCode===P.END)&&j(t,!1,!1,!0),pu=t=>(t.key?t.key==="Escape"||t.key==="Esc":t.keyCode===P.ESCAPE)&&!Ve(t),Kt=t=>(t.key?t.key==="Tab":t.keyCode===P.TAB)&&!Ve(t),Fn=t=>(t.key?t.key==="Tab":t.keyCode===P.TAB)&&j(t,!1,!1,!0),gf=t=>(t.key?t.key==="Backspace":t.keyCode===P.BACKSPACE)&&!Ve(t),fu=t=>(t.key?t.key==="Delete":t.keyCode===P.DELETE)&&!Ve(t),W_=t=>(t.key?t.key==="Delete":t.keyCode===P.DELETE)&&j(t,!1,!1,!0),j_=t=>(t.key?t.key==="Insert":t.keyCode===P.DELETE)&&j(t,!1,!1,!0),sy=t=>(t.key?t.key==="Insert":t.keyCode===P.DELETE)&&j(t,!0,!1,!1),_s=t=>(t.key?t.key==="PageUp":t.keyCode===P.PAGE_UP)&&!Ve(t),ds=t=>(t.key?t.key==="PageDown":t.keyCode===P.PAGE_DOWN)&&!Ve(t),ly=t=>(t.key?t.key==="PageUp":t.keyCode===P.PAGE_UP)&&j(t,!1,!1,!0),cy=t=>(t.key?t.key==="PageUp":t.keyCode===P.PAGE_UP)&&j(t,!1,!0,!1),uy=t=>(t.key?t.key==="PageDown":t.keyCode===P.PAGE_DOWN)&&j(t,!1,!1,!0),_y=t=>(t.key?t.key==="PageDown":t.keyCode===P.PAGE_DOWN)&&j(t,!1,!0,!1),dy=t=>(t.key?t.key==="PageUp":t.keyCode===P.PAGE_UP)&&j(t,!0,!1,!0),hy=t=>(t.key?t.key==="PageDown":t.keyCode===P.PAGE_DOWN)&&j(t,!0,!1,!0),ua=t=>t.key?vf(t)||my(t):t.keyCode===P.F4&&!Ve(t)||t.keyCode===P.ARROW_DOWN&&j(t,!1,!0,!1),vf=t=>t.key==="F4"&&!Ve(t),py=t=>(t.key?t.key==="F4":t.keyCode===P.F4)&&j(t,!1,!1,!0),fy=t=>(t.key?t.key==="F7":t.keyCode===P.F7)&&!Ve(t),my=t=>(t.key==="ArrowDown"||t.key==="Down"||t.key==="ArrowUp"||t.key==="Up")&&j(t,!1,!0,!1),bf=t=>(t.key==="A"||t.key==="a"||t.which===P.A)&&j(t,!0,!1,!1),q_=t=>(t.key==="V"||t.key==="v"||t.which===P.V)&&j(t,!0,!1,!1),Ve=t=>t.shiftKey||t.altKey||yf(t),yf=t=>!!(t.metaKey||t.ctrlKey),j=(t,e,n,i)=>t.shiftKey===i&&t.altKey===n&&yf(t)===e;class wf{static isValid(e){return!1}static attributeToProperty(e){return e}static propertyToAttribute(e){return e===null?null:String(e)}static valuesAreEqual(e,n){return e===n}static generateTypeAccessors(e){Object.keys(e).forEach(n=>{Object.defineProperty(this,n,{get(){return e[n]}})})}static get isDataTypeClass(){return!0}}class Se extends wf{static isValid(e){return Number.isInteger(e)}static attributeToProperty(e){return parseInt(e)}}var ql;(function(t){t.Small="Small",t.Medium="Medium",t.Large="Large"})(ql||(ql={}));const Y_=ql;var Yl;(function(t){t.None="None",t.Normal="Normal"})(Yl||(Yl={}));const en=Yl,gy={key:"ARIA_LABEL_CARD_CONTENT",defaultText:"Card Content"},vy={key:"ARIA_ROLEDESCRIPTION_CARD",defaultText:"Card"},by={key:"AVATAR_TOOLTIP",defaultText:"Avatar"},yy={key:"BUSY_INDICATOR_TITLE",defaultText:"Please wait"},wy={key:"BUTTON_ARIA_TYPE_ACCEPT",defaultText:"Positive Action"},ky={key:"BUTTON_ARIA_TYPE_REJECT",defaultText:"Negative Action"},xy={key:"BUTTON_ARIA_TYPE_EMPHASIZED",defaultText:"Emphasized"},Ty={key:"DELETE",defaultText:"Delete"},Cy={key:"GROUP_HEADER_TEXT",defaultText:"Group Header"},Sy={key:"SELECT_ROLE_DESCRIPTION",defaultText:"Listbox"},$y={key:"SELECT_OPTIONS",defaultText:"Select Options"},kf={key:"INPUT_SUGGESTIONS_TITLE",defaultText:"Select"},Iy={key:"LIST_ITEM_POSITION",defaultText:"List item {0} of {1}"},xf={key:"LIST_ITEM_SELECTED",defaultText:"Selected"},Tf={key:"LIST_ITEM_NOT_SELECTED",defaultText:"Not Selected"},Ey={key:"ARIA_LABEL_LIST_ITEM_CHECKBOX",defaultText:"Multiple Selection mode."},Ay={key:"ARIA_LABEL_LIST_ITEM_RADIO_BUTTON",defaultText:"Item Selection."},Dy={key:"ARIA_LABEL_LIST_SELECTABLE",defaultText:"Contains Selectable Items"},By={key:"ARIA_LABEL_LIST_MULTISELECTABLE",defaultText:"Contains Multi-Selectable Items"},Py={key:"ARIA_LABEL_LIST_DELETABLE",defaultText:"Contains Deletable Items"},Ly={key:"MULTICOMBOBOX_DIALOG_OK_BUTTON",defaultText:"OK"},Oy={key:"VALUE_STATE_ERROR_ALREADY_SELECTED",defaultText:"This value is already selected."},Ry={key:"MULTIINPUT_SHOW_MORE_TOKENS",defaultText:"{0} More"},My={key:"RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON",defaultText:"Decline"},Cf={key:"LOAD_MORE_TEXT",defaultText:"More"},Fy={key:"TABLE_HEADER_ROW_INFORMATION",defaultText:"Header Row 1 of {0}"},Ny={key:"TABLE_ROW_POSITION",defaultText:"{0} of {1}"},zy={key:"ARIA_LABEL_ROW_SELECTION",defaultText:"Item selection"},Hy={key:"ARIA_LABEL_SELECT_ALL_CHECKBOX",defaultText:"Select All Rows"},Uy={key:"ARIA_LABEL_EMPTY_CELL",defaultText:"Empty"},Vy={key:"TOKEN_ARIA_DELETABLE",defaultText:"Deletable"},Wy={key:"TOKENIZER_ARIA_CONTAIN_TOKEN",defaultText:"No Tokens"},jy={key:"TOKENIZER_ARIA_CONTAIN_ONE_TOKEN",defaultText:"Contains 1 token"},qy={key:"TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS",defaultText:"Contains {0} tokens"},Yy={key:"TOKENIZER_ARIA_LABEL",defaultText:"Tokenizer"},Gy={key:"TOKENIZER_POPOVER_REMOVE",defaultText:"Remove"},Xy={key:"TOKENIZER_SHOW_ALL_ITEMS",defaultText:"{0} Items"},Sf={key:"VALUE_STATE_TYPE_ERROR",defaultText:"Value State Error"},$f={key:"VALUE_STATE_TYPE_WARNING",defaultText:"Value State Warning"},If={key:"VALUE_STATE_TYPE_SUCCESS",defaultText:"Value State Success"},Ef={key:"VALUE_STATE_TYPE_INFORMATION",defaultText:"Value State Information"},hs={key:"VALUE_STATE_ERROR",defaultText:"Invalid entry"},ps={key:"VALUE_STATE_WARNING",defaultText:"Warning issued"},mu={key:"VALUE_STATE_INFORMATION",defaultText:"Informative entry"},fs={key:"VALUE_STATE_SUCCESS",defaultText:"Entry successfully validated"},Zy={key:"CALENDAR_HEADER_NEXT_BUTTON",defaultText:"Next"},Qy={key:"CALENDAR_HEADER_PREVIOUS_BUTTON",defaultText:"Previous"},Jy={key:"DAY_PICKER_WEEK_NUMBER_TEXT",defaultText:"Week number"},Ky={key:"DAY_PICKER_NON_WORKING_DAY",defaultText:"Non-Working Day"},ew={key:"DAY_PICKER_TODAY",defaultText:"Today"},tw={key:"MONTH_PICKER_DESCRIPTION",defaultText:"Month Picker"},nw={key:"YEAR_PICKER_DESCRIPTION",defaultText:"Year Picker"},iw={key:"DIALOG_HEADER_ARIA_ROLE_DESCRIPTION",defaultText:"Interactive Header"},ow={key:"DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE",defaultText:"Use Shift+Arrow keys to resize"},rw={key:"DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE",defaultText:"Use Arrow keys to move"},aw={key:"DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE",defaultText:"Use Arrow keys to move, Shift+Arrow keys to resize"},sw={key:"LABEL_COLON",defaultText:":"};function lw(t,e,n){return p`<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><bdi id="${l(this._id)}-bdi"><slot></slot></bdi></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${l(this._colonSymbol)}"></span></label>`}const M={packageName:"@ui5/webcomponents-theming",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`/**
* Copyright (c) 2012-2020 SAP SE or an SAP affiliate company and Theming Base Content contributors. Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*
* Theming Engine 1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68
* data:{"Path": "Base.baseLib.sap_fiori_3.css_variables", "PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css", "Extends": ["sap_base_fiori","baseTheme"], "Tags": ["Fiori_3","LightColorScheme"], "FallbackThemeId": "sap_belize", "Engine": {"Name": "theming-engine", "Version": "1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68"}, "Version": { "Build": "11.5.0.20230619095805", "Source": "11.5.0"}}
*/

:root{--sapThemeMetaData-Base-baseLib:{"Path": "Base.baseLib.sap_fiori_3.css_variables", "PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css", "Extends": ["sap_base_fiori","baseTheme"], "Tags": ["Fiori_3","LightColorScheme"], "FallbackThemeId": "sap_belize", "Engine": {"Name": "theming-engine", "Version": "1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68"}, "Version": { "Build": "11.5.0.20230619095805", "Source": "11.5.0"}};}

/**
* Base.baseLib.baseTheme.base (Version 11.5.0)
*/

/**
* Base.baseLib.baseTheme.css_variables (Version 11.5.0)
*/

:root {
  --sapBrandColor: #0a6ed1;
  --sapHighlightColor: #0854a0;
  --sapBaseColor: #fff;
  --sapShellColor: #354a5f;
  --sapBackgroundColor: #f7f7f7;
  --sapFontFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSize: .875rem;
  --sapTextColor: #32363a;
  --sapLinkColor: #0a6ed1;
  --sapCompanyLogo: none;
  --sapBackgroundImage: none;
  --sapBackgroundImageOpacity: 1.0;
  --sapBackgroundImageRepeat: false;
  --sapSelectedColor: #0854a0;
  --sapHoverColor: #ededed;
  --sapActiveColor: #0854a0;
  --sapHighlightTextColor: #fff;
  --sapTitleColor: #32363a;
  --sapNegativeColor: #bb0000;
  --sapCriticalColor: #df6e0c;
  --sapPositiveColor: #107e3e;
  --sapInformativeColor: #0a6ed1;
  --sapNeutralColor: #6a6d70;
  --sapNegativeElementColor: #bb0000;
  --sapCriticalElementColor: #df6e0c;
  --sapPositiveElementColor: #107e3e;
  --sapInformativeElementColor: #0a6ed1;
  --sapNeutralElementColor: #6a6d70;
  --sapNegativeTextColor: #bb0000;
  --sapCriticalTextColor: #b3590a;
  --sapPositiveTextColor: #107e3e;
  --sapInformativeTextColor: #0a6ed1;
  --sapNeutralTextColor: #6a6d70;
  --sapErrorColor: #bb0000;
  --sapWarningColor: #df6e0c;
  --sapSuccessColor: #107e3e;
  --sapInformationColor: #0a6ed1;
  --sapErrorBackground: #ffebeb;
  --sapWarningBackground: #fef7f1;
  --sapSuccessBackground: #f1fdf6;
  --sapInformationBackground: #f5faff;
  --sapNeutralBackground: #f4f4f4;
  --sapErrorBorderColor: #bb0000;
  --sapWarningBorderColor: #df6e0c;
  --sapSuccessBorderColor: #107e3e;
  --sapInformationBorderColor: #0a6ed1;
  --sapNeutralBorderColor: #6a6d70;
  --sapElement_LineHeight: 2.75rem;
  --sapElement_Height: 2.25rem;
  --sapElement_BorderWidth: .0625rem;
  --sapElement_BorderCornerRadius: .25rem;
  --sapElement_Compact_LineHeight: 2rem;
  --sapElement_Compact_Height: 1.625rem;
  --sapElement_Condensed_LineHeight: 1.5rem;
  --sapElement_Condensed_Height: 1.375rem;
  --sapContent_LineHeight: 1.4;
  --sapContent_IconHeight: 1rem;
  --sapContent_IconColor: #0854a0;
  --sapContent_ContrastIconColor: #fff;
  --sapContent_NonInteractiveIconColor: #6a6d70;
  --sapContent_MarkerIconColor: #286eb4;
  --sapContent_MarkerTextColor: #0e7581;
  --sapContent_MeasureIndicatorColor: #89919a;
  --sapContent_Selected_MeasureIndicatorColor: #89919a;
  --sapContent_Placeholderloading_Background: #ccc;
  --sapContent_Placeholderloading_Gradient: linear-gradient(to right, #ccc 0%, #ccc 20%, #999 50%, #ccc 80%, #ccc 100%);
  --sapContent_ImagePlaceholderBackground: #ccc;
  --sapContent_ImagePlaceholderForegroundColor: #fff;
  --sapContent_RatedColor: #d08014;
  --sapContent_UnratedColor: #89919a;
  --sapContent_BusyColor: #0854a0;
  --sapContent_FocusColor: #000;
  --sapContent_FocusStyle: dotted;
  --sapContent_FocusWidth: .0625rem;
  --sapContent_ContrastFocusColor: #fff;
  --sapContent_ShadowColor: #000;
  --sapContent_ContrastShadowColor: #fff;
  --sapContent_Shadow0: 0 0 0 0.0625rem rgba(0,0,0,0.1), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.1);
  --sapContent_Shadow1: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.3);
  --sapContent_Shadow2: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 0.625rem 1.875rem 0 rgba(0,0,0,0.3);
  --sapContent_Shadow3: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 1.25rem 5rem 0 rgba(0,0,0,0.3);
  --sapContent_TextShadow: 0 0 0.125rem #fff;
  --sapContent_ContrastTextShadow: 0 0 0.0625rem rgba(0,0,0,0.7);
  --sapContent_HeaderShadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.05), inset 0 -0.0625rem 0 0 #d9d9d9;
  --sapContent_Interaction_Shadow: none;
  --sapContent_Selected_Shadow: none;
  --sapContent_Negative_Shadow: none;
  --sapContent_Critical_Shadow: none;
  --sapContent_Positive_Shadow: none;
  --sapContent_Informative_Shadow: none;
  --sapContent_Neutral_Shadow: none;
  --sapContent_SearchHighlightColor: #d4f7db;
  --sapContent_HelpColor: #3f8600;
  --sapContent_LabelColor: #6a6d70;
  --sapContent_MonospaceFontFamily: "72Mono", "72Monofull", lucida console, monospace;
  --sapContent_MonospaceBoldFontFamily: "72Mono-Bold", "72Mono-Boldfull", lucida console, monospace;
  --sapContent_IconFontFamily: "SAP-icons";
  --sapContent_DisabledTextColor: rgba(50,54,58,0.6);
  --sapContent_DisabledOpacity: 0.4;
  --sapContent_ContrastTextThreshold: 0.65;
  --sapContent_ContrastTextColor: #fff;
  --sapContent_ForegroundColor: #efefef;
  --sapContent_ForegroundBorderColor: #89919a;
  --sapContent_ForegroundTextColor: #32363a;
  --sapContent_BadgeBackground: #d04343;
  --sapContent_BadgeTextColor: #fff;
  --sapContent_DragAndDropActiveColor: #0854a0;
  --sapContent_Selected_TextColor: #fff;
  --sapContent_Selected_Background: #0854a0;
  --sapContent_Selected_Hover_Background: #095caf;
  --sapContent_Selected_ForegroundColor: #0854a0;
  --sapContent_ForcedColorAdjust: none;
  --sapContent_Illustrative_Color1: #0a6ed1;
  --sapContent_Illustrative_Color2: #72b5f8;
  --sapContent_Illustrative_Color3: #ffba10;
  --sapContent_Illustrative_Color4: #4a5055;
  --sapContent_Illustrative_Color5: #9da4aa;
  --sapContent_Illustrative_Color6: #c6cace;
  --sapContent_Illustrative_Color7: #e7e9ea;
  --sapContent_Illustrative_Color8: #fff;
  --sapContent_Illustrative_Color9: #64edd2;
  --sapContent_Illustrative_Color10: #e7e9ea;
  --sapContent_Illustrative_Color11: #f31ded;
  --sapContent_Illustrative_Color12: #5dc122;
  --sapContent_Illustrative_Color13: #4ba1f6;
  --sapContent_Illustrative_Color14: #298ff4;
  --sapContent_Illustrative_Color15: #e6a400;
  --sapContent_Illustrative_Color16: #085aaa;
  --sapContent_Illustrative_Color17: #00a5a8;
  --sapContent_Illustrative_Color18: #d9ddde;
  --sapContent_Illustrative_Color19: #ccd0d2;
  --sapContent_Illustrative_Color20: #bec4c6;
  --sapFontLightFamily: "72-Light", "72-Lightfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontBoldFamily: "72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSemiboldFamily: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSemiboldDuplexFamily: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontBlackFamily: "72Black", "72Blackfull","72", "72full", Arial, Helvetica, sans-serif;
  --sapFontHeaderFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSmallSize: .75rem;
  --sapFontLargeSize: 1rem;
  --sapFontHeader1Size: 2.25rem;
  --sapFontHeader2Size: 1.5rem;
  --sapFontHeader3Size: 1.25rem;
  --sapFontHeader4Size: 1.125rem;
  --sapFontHeader5Size: 1rem;
  --sapFontHeader6Size: .875rem;
  --sapLink_TextDecoration: none;
  --sapLink_Hover_Color: #0854a0;
  --sapLink_Hover_TextDecoration: underline;
  --sapLink_Active_Color: #0a6ed1;
  --sapLink_Active_TextDecoration: underline;
  --sapLink_Visited_Color: #0a6ed1;
  --sapLink_InvertedColor: #d3e8fd;
  --sapLink_SubtleColor: #074888;
  --sapShell_Background: #edeff0;
  --sapShell_BackgroundImage: linear-gradient(to bottom, #dfe3e4, #f3f4f5);
  --sapShell_BackgroundImageOpacity: 1.0;
  --sapShell_BackgroundImageRepeat: false;
  --sapShell_BorderColor: #354a5f;
  --sapShell_TextColor: #fff;
  --sapShell_InteractiveBackground: #354a5f;
  --sapShell_InteractiveTextColor: #d1e8ff;
  --sapShell_InteractiveBorderColor: #7996b4;
  --sapShell_GroupTitleTextColor: #32363a;
  --sapShell_GroupTitleTextShadow: 0 0 0.125rem #fff;
  --sapShell_Hover_Background: #283848;
  --sapShell_Active_Background: #23303e;
  --sapShell_Active_TextColor: #fff;
  --sapShell_Selected_Background: #23303e;
  --sapShell_Selected_TextColor: #fff;
  --sapShell_Selected_Hover_Background: #23303e;
  --sapShell_Favicon: none;
  --sapShell_Navigation_Background: #354a5f;
  --sapShell_Navigation_Hover_Background: #283848;
  --sapShell_Navigation_SelectedColor: #d1e8ff;
  --sapShell_Navigation_Selected_TextColor: #d1e8ff;
  --sapShell_Navigation_TextColor: #fff;
  --sapShell_Navigation_Active_TextColor: #fff;
  --sapShell_Navigation_Active_Background: #23303e;
  --sapShell_Shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.08), inset 0 -0.0625rem 0 0 rgba(0,0,0,0.18);
  --sapShell_NegativeColor: #f88;
  --sapShell_CriticalColor: #f8b67d;
  --sapShell_PositiveColor: #abe2c2;
  --sapShell_InformativeColor: #b1d6fb;
  --sapShell_NeutralColor: #d4d6d7;
  --sapShell_Category_1_Background: #286eb4;
  --sapShell_Category_1_BorderColor: #286eb4;
  --sapShell_Category_1_TextColor: #fff;
  --sapShell_Category_1_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_2_Background: #db1f77;
  --sapShell_Category_2_BorderColor: #db1f77;
  --sapShell_Category_2_TextColor: #fff;
  --sapShell_Category_2_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_3_Background: #d58215;
  --sapShell_Category_3_BorderColor: #d58215;
  --sapShell_Category_3_TextColor: #fff;
  --sapShell_Category_3_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_4_Background: #892971;
  --sapShell_Category_4_BorderColor: #892971;
  --sapShell_Category_4_TextColor: #fff;
  --sapShell_Category_4_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_5_Background: #bb2f2f;
  --sapShell_Category_5_BorderColor: #bb2f2f;
  --sapShell_Category_5_TextColor: #fff;
  --sapShell_Category_5_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_6_Background: #1193a2;
  --sapShell_Category_6_BorderColor: #1193a2;
  --sapShell_Category_6_TextColor: #fff;
  --sapShell_Category_6_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_7_Background: #cf5db3;
  --sapShell_Category_7_BorderColor: #cf5db3;
  --sapShell_Category_7_TextColor: #fff;
  --sapShell_Category_7_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_8_Background: #8b9668;
  --sapShell_Category_8_BorderColor: #8b9668;
  --sapShell_Category_8_TextColor: #fff;
  --sapShell_Category_8_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_9_Background: #597da1;
  --sapShell_Category_9_BorderColor: #597da1;
  --sapShell_Category_9_TextColor: #fff;
  --sapShell_Category_9_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_10_Background: #647987;
  --sapShell_Category_10_BorderColor: #647987;
  --sapShell_Category_10_TextColor: #fff;
  --sapShell_Category_10_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_11_Background: #dc5b5b;
  --sapShell_Category_11_BorderColor: #dc5b5b;
  --sapShell_Category_11_TextColor: #fff;
  --sapShell_Category_11_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_12_Background: #5154bd;
  --sapShell_Category_12_BorderColor: #5154bd;
  --sapShell_Category_12_TextColor: #fff;
  --sapShell_Category_12_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_13_Background: #bc1b66;
  --sapShell_Category_13_BorderColor: #bc1b66;
  --sapShell_Category_13_TextColor: #fff;
  --sapShell_Category_13_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_14_Background: #49797e;
  --sapShell_Category_14_BorderColor: #49797e;
  --sapShell_Category_14_TextColor: #fff;
  --sapShell_Category_14_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_15_Background: #476380;
  --sapShell_Category_15_BorderColor: #476380;
  --sapShell_Category_15_TextColor: #fff;
  --sapShell_Category_15_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_16_Background: #687a33;
  --sapShell_Category_16_BorderColor: #687a33;
  --sapShell_Category_16_TextColor: #fff;
  --sapShell_Category_16_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapAvatar_1_Background: #d08014;
  --sapAvatar_1_BorderColor: #d08014;
  --sapAvatar_1_TextColor: #fff;
  --sapAvatar_2_Background: #d04343;
  --sapAvatar_2_BorderColor: #d04343;
  --sapAvatar_2_TextColor: #fff;
  --sapAvatar_3_Background: #db1f77;
  --sapAvatar_3_BorderColor: #db1f77;
  --sapAvatar_3_TextColor: #fff;
  --sapAvatar_4_Background: #c0399f;
  --sapAvatar_4_BorderColor: #c0399f;
  --sapAvatar_4_TextColor: #fff;
  --sapAvatar_5_Background: #6367de;
  --sapAvatar_5_BorderColor: #6367de;
  --sapAvatar_5_TextColor: #fff;
  --sapAvatar_6_Background: #286eb4;
  --sapAvatar_6_BorderColor: #286eb4;
  --sapAvatar_6_TextColor: #fff;
  --sapAvatar_7_Background: #0f828f;
  --sapAvatar_7_BorderColor: #0f828f;
  --sapAvatar_7_TextColor: #fff;
  --sapAvatar_8_Background: #7ca10c;
  --sapAvatar_8_BorderColor: #7ca10c;
  --sapAvatar_8_TextColor: #fff;
  --sapAvatar_9_Background: #925ace;
  --sapAvatar_9_BorderColor: #925ace;
  --sapAvatar_9_TextColor: #fff;
  --sapAvatar_10_Background: #647987;
  --sapAvatar_10_BorderColor: #647987;
  --sapAvatar_10_TextColor: #fff;
  --sapButton_Background: #fff;
  --sapButton_BorderColor: #0854a0;
  --sapButton_BorderWidth: .0625rem;
  --sapButton_BorderCornerRadius: .25rem;
  --sapButton_TextColor: #0854a0;
  --sapButton_Hover_Background: #ebf5fe;
  --sapButton_Hover_BorderColor: #0854a0;
  --sapButton_Hover_TextColor: #0854a0;
  --sapButton_IconColor: #0854a0;
  --sapButton_Active_Background: #0854a0;
  --sapButton_Active_BorderColor: #0854a0;
  --sapButton_Active_TextColor: #fff;
  --sapButton_Emphasized_Background: #0a6ed1;
  --sapButton_Emphasized_BorderColor: #0a6ed1;
  --sapButton_Emphasized_TextColor: #fff;
  --sapButton_Emphasized_Hover_Background: #085caf;
  --sapButton_Emphasized_Hover_BorderColor: #085caf;
  --sapButton_Emphasized_Hover_TextColor: #fff;
  --sapButton_Emphasized_Active_Background: #0854a0;
  --sapButton_Emphasized_Active_BorderColor: #0854a0;
  --sapButton_Emphasized_Active_TextColor: #fff;
  --sapButton_Emphasized_TextShadow: transparent;
  --sapButton_Emphasized_FontWeight: bold;
  --sapButton_Reject_Background: #fff;
  --sapButton_Reject_BorderColor: #bb0000;
  --sapButton_Reject_TextColor: #b00;
  --sapButton_Reject_Hover_Background: #ffebeb;
  --sapButton_Reject_Hover_BorderColor: #bb0000;
  --sapButton_Reject_Hover_TextColor: #b00;
  --sapButton_Reject_Active_Background: #a20000;
  --sapButton_Reject_Active_BorderColor: #a20000;
  --sapButton_Reject_Active_TextColor: #fff;
  --sapButton_Reject_Selected_Background: #a20000;
  --sapButton_Reject_Selected_BorderColor: #a20000;
  --sapButton_Reject_Selected_TextColor: #fff;
  --sapButton_Reject_Selected_Hover_Background: #b00;
  --sapButton_Reject_Selected_Hover_BorderColor: #b00;
  --sapButton_Accept_Background: #fff;
  --sapButton_Accept_BorderColor: #107e3e;
  --sapButton_Accept_TextColor: #107e3e;
  --sapButton_Accept_Hover_Background: #f1fdf6;
  --sapButton_Accept_Hover_BorderColor: #107e3e;
  --sapButton_Accept_Hover_TextColor: #107e3e;
  --sapButton_Accept_Active_Background: #0d6733;
  --sapButton_Accept_Active_BorderColor: #0d6733;
  --sapButton_Accept_Active_TextColor: #fff;
  --sapButton_Accept_Selected_Background: #0d6733;
  --sapButton_Accept_Selected_BorderColor: #0d6733;
  --sapButton_Accept_Selected_TextColor: #fff;
  --sapButton_Accept_Selected_Hover_Background: #107e3e;
  --sapButton_Accept_Selected_Hover_BorderColor: #107e3e;
  --sapButton_Lite_Background: transparent;
  --sapButton_Lite_BorderColor: transparent;
  --sapButton_Lite_TextColor: #0854a0;
  --sapButton_Lite_Hover_Background: #ebf5fe;
  --sapButton_Lite_Hover_BorderColor: #0854a0;
  --sapButton_Lite_Hover_TextColor: #0854a0;
  --sapButton_Lite_Active_Background: #0854a0;
  --sapButton_Lite_Active_BorderColor: #0854a0;
  --sapButton_Selected_Background: #0854a0;
  --sapButton_Selected_BorderColor: #0854a0;
  --sapButton_Selected_TextColor: #fff;
  --sapButton_Selected_Hover_Background: #095caf;
  --sapButton_Selected_Hover_BorderColor: #095caf;
  --sapButton_Attention_Background: #fff;
  --sapButton_Attention_BorderColor: #df6e0c;
  --sapButton_Attention_TextColor: #32363a;
  --sapButton_Attention_Hover_Background: #fef7f1;
  --sapButton_Attention_Hover_BorderColor: #df6e0c;
  --sapButton_Attention_Hover_TextColor: #32363a;
  --sapButton_Attention_Active_Background: #f3801c;
  --sapButton_Attention_Active_BorderColor: #f3801c;
  --sapButton_Attention_Active_TextColor: #fff;
  --sapButton_Attention_Selected_Background: #f3801c;
  --sapButton_Attention_Selected_BorderColor: #f3801c;
  --sapButton_Attention_Selected_TextColor: #fff;
  --sapButton_Attention_Selected_Hover_Background: #f48e34;
  --sapButton_Attention_Selected_Hover_BorderColor: #f48e34;
  --sapButton_Negative_Background: #bb0000;
  --sapButton_Negative_BorderColor: #bb0000;
  --sapButton_Negative_TextColor: #fff;
  --sapButton_Negative_Hover_Background: #970000;
  --sapButton_Negative_Hover_BorderColor: #970000;
  --sapButton_Negative_Hover_TextColor: #fff;
  --sapButton_Negative_Active_Background: #800;
  --sapButton_Negative_Active_BorderColor: #800;
  --sapButton_Negative_Active_TextColor: #fff;
  --sapButton_Critical_Background: #df6e0c;
  --sapButton_Critical_BorderColor: #df6e0c;
  --sapButton_Critical_TextColor: #fff;
  --sapButton_Critical_Hover_Background: #f3801c;
  --sapButton_Critical_Hover_BorderColor: #f3801c;
  --sapButton_Critical_Hover_TextColor: #fff;
  --sapButton_Critical_Active_Background: #f5933e;
  --sapButton_Critical_Active_BorderColor: #f5933e;
  --sapButton_Critical_Active_TextColor: #fff;
  --sapButton_Success_Background: #107e3e;
  --sapButton_Success_BorderColor: #107e3e;
  --sapButton_Success_TextColor: #fff;
  --sapButton_Success_Hover_Background: #0c5e2e;
  --sapButton_Success_Hover_BorderColor: #0c5e2e;
  --sapButton_Success_Hover_TextColor: #fff;
  --sapButton_Success_Active_Background: #0a5128;
  --sapButton_Success_Active_BorderColor: #0a5128;
  --sapButton_Success_Active_TextColor: #fff;
  --sapButton_Information_Background: #0a6ed1;
  --sapButton_Information_BorderColor: #0a6ed1;
  --sapButton_Information_TextColor: #fff;
  --sapButton_Information_Hover_Background: #0961b9;
  --sapButton_Information_Hover_BorderColor: #0961b9;
  --sapButton_Information_Hover_TextColor: #fff;
  --sapButton_Information_Active_Background: #0854a0;
  --sapButton_Information_Active_BorderColor: #0854a0;
  --sapButton_Information_Active_TextColor: #fff;
  --sapButton_Neutral_Background: #6a6d70;
  --sapButton_Neutral_BorderColor: #6a6d70;
  --sapButton_Neutral_TextColor: #fff;
  --sapButton_Neutral_Hover_Background: #595b5e;
  --sapButton_Neutral_Hover_BorderColor: #595b5e;
  --sapButton_Neutral_Hover_TextColor: #fff;
  --sapButton_Neutral_Active_Background: #515456;
  --sapButton_Neutral_Active_BorderColor: #515456;
  --sapButton_Neutral_Active_TextColor: #fff;
  --sapButton_Track_Background: #ededed;
  --sapButton_Track_BorderColor: #89919a;
  --sapButton_Track_TextColor: #32363a;
  --sapButton_Track_Hover_Background: #ededed;
  --sapButton_Track_Hover_BorderColor: #0854a0;
  --sapButton_Track_Selected_Background: #ebf5fe;
  --sapButton_Track_Selected_BorderColor: #0854a0;
  --sapButton_Track_Selected_TextColor: #32363a;
  --sapButton_Track_Selected_Hover_Background: #ebf5fe;
  --sapButton_Track_Selected_Hover_BorderColor: #095caf;
  --sapButton_Handle_Background: #fff;
  --sapButton_Handle_BorderColor: #89919a;
  --sapButton_Handle_TextColor: #32363a;
  --sapButton_Handle_Hover_Background: #ebf5fe;
  --sapButton_Handle_Hover_BorderColor: #0854a0;
  --sapButton_Handle_Selected_Background: #0854a0;
  --sapButton_Handle_Selected_BorderColor: #0854a0;
  --sapButton_Handle_Selected_TextColor: #fff;
  --sapButton_Handle_Selected_Hover_Background: #095caf;
  --sapButton_Handle_Selected_Hover_BorderColor: #095caf;
  --sapButton_Track_Negative_Background: #ffebeb;
  --sapButton_Track_Negative_BorderColor: #bb0000;
  --sapButton_Track_Negative_TextColor: #b00;
  --sapButton_Track_Negative_Hover_Background: #ffebeb;
  --sapButton_Track_Negative_Hover_BorderColor: #bb0000;
  --sapButton_Handle_Negative_Background: #fff;
  --sapButton_Handle_Negative_BorderColor: #bb0000;
  --sapButton_Handle_Negative_TextColor: #b00;
  --sapButton_Handle_Negative_Hover_Background: #ffebeb;
  --sapButton_Handle_Negative_Hover_BorderColor: #bb0000;
  --sapButton_Track_Positive_Background: #f1fdf6;
  --sapButton_Track_Positive_BorderColor: #107e3e;
  --sapButton_Track_Positive_TextColor: #107e3e;
  --sapButton_Track_Positive_Hover_Background: #f1fdf6;
  --sapButton_Track_Positive_Hover_BorderColor: #107e3e;
  --sapButton_Handle_Positive_Background: #fff;
  --sapButton_Handle_Positive_BorderColor: #107e3e;
  --sapButton_Handle_Positive_TextColor: #107e3e;
  --sapButton_Handle_Positive_Hover_Background: #f1fdf6;
  --sapButton_Handle_Positive_Hover_BorderColor: #107e3e;
  --sapButton_TokenBackground: #fafafa;
  --sapButton_TokenBorderColor: #c2c2c2;
  --sapField_Background: #fff;
  --sapField_BackgroundStyle: none;
  --sapField_TextColor: #32363a;
  --sapField_PlaceholderTextColor: #74777a;
  --sapField_BorderColor: #89919a;
  --sapField_HelpBackground: #fff;
  --sapField_BorderWidth: .0625rem;
  --sapField_BorderStyle: solid;
  --sapField_BorderCornerRadius: .125rem;
  --sapField_Shadow: none;
  --sapField_Hover_Background: #fff;
  --sapField_Hover_BackgroundStyle: none;
  --sapField_Hover_BorderColor: #0854a0;
  --sapField_Hover_HelpBackground: #ebf5fe;
  --sapField_Hover_Shadow: none;
  --sapField_Hover_InvalidShadow: none;
  --sapField_Hover_WarningShadow: none;
  --sapField_Hover_SuccessShadow: none;
  --sapField_Hover_InformationShadow: none;
  --sapField_Active_BorderColor: #0854a0;
  --sapField_Focus_Background: #fff;
  --sapField_Focus_BorderColor: #89919a;
  --sapField_Focus_HelpBackground: #fff;
  --sapField_ReadOnly_Background: rgba(242,242,242,0.5);
  --sapField_ReadOnly_BackgroundStyle: none;
  --sapField_ReadOnly_BorderColor: #89919a;
  --sapField_ReadOnly_BorderStyle: solid;
  --sapField_ReadOnly_HelpBackground: rgba(242,242,242,0.5);
  --sapField_RequiredColor: #ce3b3b;
  --sapField_InvalidColor: #bb0000;
  --sapField_InvalidBackground: #fff;
  --sapField_InvalidBackgroundStyle: none;
  --sapField_InvalidBorderWidth: .125rem;
  --sapField_InvalidBorderStyle: solid;
  --sapField_InvalidShadow: none;
  --sapField_WarningColor: #df6e0c;
  --sapField_WarningBackground: #fff;
  --sapField_WarningBackgroundStyle: none;
  --sapField_WarningBorderWidth: .125rem;
  --sapField_WarningBorderStyle: solid;
  --sapField_WarningShadow: none;
  --sapField_SuccessColor: #107e3e;
  --sapField_SuccessBackground: #fff;
  --sapField_SuccessBackgroundStyle: none;
  --sapField_SuccessBorderWidth: .0625rem;
  --sapField_SuccessBorderStyle: solid;
  --sapField_SuccessShadow: none;
  --sapField_InformationColor: #0a6ed1;
  --sapField_InformationBackground: #fff;
  --sapField_InformationBackgroundStyle: none;
  --sapField_InformationBorderWidth: .125rem;
  --sapField_InformationBorderStyle: solid;
  --sapField_InformationShadow: none;
  --sapGroup_TitleBackground: transparent;
  --sapGroup_TitleBorderColor: #d9d9d9;
  --sapGroup_TitleTextColor: #32363a;
  --sapGroup_Title_FontSize: 1.125rem;
  --sapGroup_ContentBackground: #fff;
  --sapGroup_ContentBorderColor: #d9d9d9;
  --sapGroup_BorderWidth: .0625rem;
  --sapGroup_BorderCornerRadius: 0;
  --sapGroup_FooterBackground: transparent;
  --sapToolbar_Background: transparent;
  --sapToolbar_SeparatorColor: #d9d9d9;
  --sapList_HeaderBackground: #f2f2f2;
  --sapList_HeaderBorderColor: #e5e5e5;
  --sapList_HeaderTextColor: #32363a;
  --sapList_BorderColor: #e5e5e5;
  --sapList_BorderWidth: .0625rem;
  --sapList_TextColor: #32363a;
  --sapList_Active_TextColor: #fff;
  --sapList_Active_Background: #0854a0;
  --sapList_SelectionBackgroundColor: #e5f0fa;
  --sapList_SelectionBorderColor: #0854a0;
  --sapList_Hover_SelectionBackground: #d8e9f8;
  --sapList_Background: #fff;
  --sapList_Hover_Background: #f5f5f5;
  --sapList_AlternatingBackground: #f2f2f2;
  --sapList_GroupHeaderBackground: #fff;
  --sapList_GroupHeaderBorderColor: #d9d9d9;
  --sapList_GroupHeaderTextColor: #32363a;
  --sapList_TableGroupHeaderBackground: #efefef;
  --sapList_TableGroupHeaderBorderColor: #d9d9d9;
  --sapList_TableGroupHeaderTextColor: #32363a;
  --sapList_FooterBackground: #fafafa;
  --sapList_FooterTextColor: #32363a;
  --sapList_TableFooterBorder: #d9d9d9;
  --sapList_TableFixedBorderColor: #8c8c8c;
  --sapMessage_ErrorBorderColor: #bb0000;
  --sapMessage_WarningBorderColor: #df6e0c;
  --sapMessage_SuccessBorderColor: #107e3e;
  --sapMessage_InformationBorderColor: #0a6ed1;
  --sapPopover_BorderCornerRadius: .25rem;
  --sapProgress_Background: #fff;
  --sapProgress_BorderColor: #89919a;
  --sapProgress_TextColor: #32363a;
  --sapProgress_FontSize: .75rem;
  --sapProgress_NegativeBackground: #fff;
  --sapProgress_NegativeBorderColor: #89919a;
  --sapProgress_NegativeTextColor: #32363a;
  --sapProgress_CriticalBackground: #fff;
  --sapProgress_CriticalBorderColor: #89919a;
  --sapProgress_CriticalTextColor: #32363a;
  --sapProgress_PositiveBackground: #fff;
  --sapProgress_PositiveBorderColor: #89919a;
  --sapProgress_PositiveTextColor: #32363a;
  --sapProgress_InformationBackground: #fff;
  --sapProgress_InformationBorderColor: #89919a;
  --sapProgress_InformationTextColor: #32363a;
  --sapProgress_Value_Background: #6a6d70;
  --sapProgress_Value_BorderColor: #89919a;
  --sapProgress_Value_TextColor: #32363a;
  --sapProgress_Value_NegativeBackground: #bb0000;
  --sapProgress_Value_NegativeBorderColor: #fff;
  --sapProgress_Value_NegativeTextColor: #32363a;
  --sapProgress_Value_CriticalBackground: #df6e0c;
  --sapProgress_Value_CriticalBorderColor: #fff;
  --sapProgress_Value_CriticalTextColor: #32363a;
  --sapProgress_Value_PositiveBackground: #107e3e;
  --sapProgress_Value_PositiveBorderColor: #fff;
  --sapProgress_Value_PositiveTextColor: #32363a;
  --sapProgress_Value_InformationBackground: #0a6ed1;
  --sapProgress_Value_InformationBorderColor: #fff;
  --sapProgress_Value_InformationTextColor: #32363a;
  --sapScrollBar_FaceColor: #949494;
  --sapScrollBar_TrackColor: #fff;
  --sapScrollBar_BorderColor: #949494;
  --sapScrollBar_SymbolColor: #0854a0;
  --sapScrollBar_Dimension: .75rem;
  --sapScrollBar_Hover_FaceColor: #8c8c8c;
  --sapSlider_Background: #89919a;
  --sapSlider_BorderColor: #89919a;
  --sapSlider_Selected_Background: #0854a0;
  --sapSlider_Selected_BorderColor: #0854a0;
  --sapSlider_HandleBackground: #fff;
  --sapSlider_HandleBorderColor: #89919a;
  --sapSlider_RangeHandleBackground: transparent;
  --sapSlider_Hover_HandleBackground: #ebf5fe;
  --sapSlider_Hover_HandleBorderColor: #0854a0;
  --sapSlider_Hover_RangeHandleBackground: #ebf5fe;
  --sapSlider_Active_HandleBackground: #0854a0;
  --sapSlider_Active_HandleBorderColor: #0854a0;
  --sapSlider_Active_RangeHandleBackground: transparent;
  --sapPageHeader_Background: #fff;
  --sapPageHeader_BorderColor: #d9d9d9;
  --sapPageHeader_TextColor: #32363a;
  --sapPageFooter_Background: #fff;
  --sapPageFooter_BorderColor: #d9d9d9;
  --sapPageFooter_TextColor: #32363a;
  --sapInfobar_Background: #0f828f;
  --sapInfobar_Hover_Background: #0e7581;
  --sapInfobar_Active_Background: #0a545c;
  --sapInfobar_NonInteractive_Background: #e6e6e6;
  --sapInfobar_TextColor: #fff;
  --sapObjectHeader_Background: #fff;
  --sapObjectHeader_Hover_Background: #f5f5f5;
  --sapObjectHeader_BorderColor: #d9d9d9;
  --sapObjectHeader_Title_TextColor: #32363a;
  --sapObjectHeader_Title_FontSize: 1.25rem;
  --sapObjectHeader_Title_SnappedFontSize: 1.25rem;
  --sapObjectHeader_Title_FontFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapObjectHeader_Subtitle_TextColor: #6a6d70;
  --sapBlockLayer_Background: #000;
  --sapTile_Background: #fff;
  --sapTile_Hover_Background: #f5f5f5;
  --sapTile_Active_Background: #f5f5f5;
  --sapTile_BorderColor: transparent;
  --sapTile_BorderCornerRadius: .25rem;
  --sapTile_TitleTextColor: #32363a;
  --sapTile_TextColor: #6a6d70;
  --sapTile_IconColor: #5a7da0;
  --sapTile_SeparatorColor: #ccc;
  --sapTile_Interactive_BorderColor: #b3b3b3;
  --sapTile_OverlayBackground: rgba(0,0,0,0.8);
  --sapTile_OverlayForegroundColor: #fff;
  --sapAccentColor1: #d08014;
  --sapAccentColor2: #d04343;
  --sapAccentColor3: #db1f77;
  --sapAccentColor4: #c0399f;
  --sapAccentColor5: #6367de;
  --sapAccentColor6: #286eb4;
  --sapAccentColor7: #0f828f;
  --sapAccentColor8: #7ca10c;
  --sapAccentColor9: #925ace;
  --sapAccentColor10: #647987;
  --sapAccentBackgroundColor1: #fff3b8;
  --sapAccentBackgroundColor2: #ffd0e7;
  --sapAccentBackgroundColor3: #fff0fa;
  --sapAccentBackgroundColor4: #ffdcf3;
  --sapAccentBackgroundColor5: #ded3ff;
  --sapAccentBackgroundColor6: #d1efff;
  --sapAccentBackgroundColor7: #c2fcee;
  --sapAccentBackgroundColor8: #ebf5cb;
  --sapAccentBackgroundColor9: #dafdf5;
  --sapAccentBackgroundColor10: #eaecee;
  --sapIndicationColor_1: #880000;
  --sapIndicationColor_1_Background: #880000;
  --sapIndicationColor_1_BorderColor: #880000;
  --sapIndicationColor_1_TextColor: #fff;
  --sapIndicationColor_1_Hover_Background: #6f0000;
  --sapIndicationColor_1_Active_Background: #500;
  --sapIndicationColor_1_Active_BorderColor: #880000;
  --sapIndicationColor_1_Active_TextColor: #fff;
  --sapIndicationColor_1_Selected_Background: #500;
  --sapIndicationColor_1_Selected_BorderColor: #880000;
  --sapIndicationColor_1_Selected_TextColor: #fff;
  --sapIndicationColor_1b: #fb9d9d;
  --sapIndicationColor_1b_BorderColor: #fb9d9d;
  --sapIndicationColor_1b_Hover_Background: #fa8585;
  --sapIndicationColor_2: #bb0000;
  --sapIndicationColor_2_Background: #bb0000;
  --sapIndicationColor_2_BorderColor: #bb0000;
  --sapIndicationColor_2_TextColor: #fff;
  --sapIndicationColor_2_Hover_Background: #a20000;
  --sapIndicationColor_2_Active_Background: #800;
  --sapIndicationColor_2_Active_BorderColor: #bb0000;
  --sapIndicationColor_2_Active_TextColor: #fff;
  --sapIndicationColor_2_Selected_Background: #800;
  --sapIndicationColor_2_Selected_BorderColor: #bb0000;
  --sapIndicationColor_2_Selected_TextColor: #fff;
  --sapIndicationColor_2b: #fcc4c4;
  --sapIndicationColor_2b_BorderColor: #fcc4c4;
  --sapIndicationColor_2b_Hover_Background: #fbacac;
  --sapIndicationColor_3: #df6e0c;
  --sapIndicationColor_3_Background: #df6e0c;
  --sapIndicationColor_3_BorderColor: #df6e0c;
  --sapIndicationColor_3_TextColor: #fff;
  --sapIndicationColor_3_Hover_Background: #d0670b;
  --sapIndicationColor_3_Active_Background: #c2600a;
  --sapIndicationColor_3_Active_BorderColor: #df6e0c;
  --sapIndicationColor_3_Active_TextColor: #fff;
  --sapIndicationColor_3_Selected_Background: #c2600a;
  --sapIndicationColor_3_Selected_BorderColor: #df6e0c;
  --sapIndicationColor_3_Selected_TextColor: #fff;
  --sapIndicationColor_3b: #fff2c0;
  --sapIndicationColor_3b_BorderColor: #fff2c0;
  --sapIndicationColor_3b_Hover_Background: #ffeda6;
  --sapIndicationColor_4: #107e3e;
  --sapIndicationColor_4_Background: #107e3e;
  --sapIndicationColor_4_BorderColor: #107e3e;
  --sapIndicationColor_4_TextColor: #fff;
  --sapIndicationColor_4_Hover_Background: #0d6733;
  --sapIndicationColor_4_Active_Background: #0a5128;
  --sapIndicationColor_4_Active_BorderColor: #107e3e;
  --sapIndicationColor_4_Active_TextColor: #fff;
  --sapIndicationColor_4_Selected_Background: #0a5128;
  --sapIndicationColor_4_Selected_BorderColor: #107e3e;
  --sapIndicationColor_4_Selected_TextColor: #fff;
  --sapIndicationColor_4b: #bae8bc;
  --sapIndicationColor_4b_BorderColor: #bae8bc;
  --sapIndicationColor_4b_Hover_Background: #a7e2a9;
  --sapIndicationColor_5: #0a6ed1;
  --sapIndicationColor_5_Background: #0a6ed1;
  --sapIndicationColor_5_BorderColor: #0a6ed1;
  --sapIndicationColor_5_TextColor: #fff;
  --sapIndicationColor_5_Hover_Background: #0961b9;
  --sapIndicationColor_5_Active_Background: #0854a0;
  --sapIndicationColor_5_Active_BorderColor: #0a6ed1;
  --sapIndicationColor_5_Active_TextColor: #fff;
  --sapIndicationColor_5_Selected_Background: #0854a0;
  --sapIndicationColor_5_Selected_BorderColor: #0a6ed1;
  --sapIndicationColor_5_Selected_TextColor: #fff;
  --sapIndicationColor_5b: #d3effd;
  --sapIndicationColor_5b_BorderColor: #d3effd;
  --sapIndicationColor_5b_Hover_Background: #bbe6fc;
  --sapIndicationColor_6: #0f828f;
  --sapIndicationColor_6_Background: #0f828f;
  --sapIndicationColor_6_BorderColor: #0f828f;
  --sapIndicationColor_6_TextColor: #fff;
  --sapIndicationColor_6_Hover_Background: #0d6d78;
  --sapIndicationColor_6_Active_Background: #0a5861;
  --sapIndicationColor_6_Active_BorderColor: #0f828f;
  --sapIndicationColor_6_Active_TextColor: #fff;
  --sapIndicationColor_6_Selected_Background: #0a5861;
  --sapIndicationColor_6_Selected_BorderColor: #0f828f;
  --sapIndicationColor_6_Selected_TextColor: #fff;
  --sapIndicationColor_6b: #cdf5ec;
  --sapIndicationColor_6b_BorderColor: #cdf5ec;
  --sapIndicationColor_6b_Hover_Background: #b8f1e4;
  --sapIndicationColor_7: #925ace;
  --sapIndicationColor_7_Background: #925ace;
  --sapIndicationColor_7_BorderColor: #925ace;
  --sapIndicationColor_7_TextColor: #fff;
  --sapIndicationColor_7_Hover_Background: #8546c8;
  --sapIndicationColor_7_Active_Background: #7838bd;
  --sapIndicationColor_7_Active_BorderColor: #925ace;
  --sapIndicationColor_7_Active_TextColor: #fff;
  --sapIndicationColor_7_Selected_Background: #7838bd;
  --sapIndicationColor_7_Selected_BorderColor: #925ace;
  --sapIndicationColor_7_Selected_TextColor: #fff;
  --sapIndicationColor_7b: #e2dbff;
  --sapIndicationColor_7b_BorderColor: #e2dbff;
  --sapIndicationColor_7b_Hover_Background: #cdc2ff;
  --sapIndicationColor_8: #c0399f;
  --sapIndicationColor_8_Background: #c0399f;
  --sapIndicationColor_8_BorderColor: #c0399f;
  --sapIndicationColor_8_TextColor: #fff;
  --sapIndicationColor_8_Hover_Background: #ac338f;
  --sapIndicationColor_8_Active_Background: #992d7e;
  --sapIndicationColor_8_Active_BorderColor: #c0399f;
  --sapIndicationColor_8_Active_TextColor: #fff;
  --sapIndicationColor_8_Selected_Background: #992d7e;
  --sapIndicationColor_8_Selected_BorderColor: #c0399f;
  --sapIndicationColor_8_Selected_TextColor: #fff;
  --sapIndicationColor_8b: #f8d6ff;
  --sapIndicationColor_8b_BorderColor: #f8d6ff;
  --sapIndicationColor_8b_Hover_Background: #f4bdff;
  --sapIndicationColor_9: #1d2d3e;
  --sapIndicationColor_9_Background: #1d2d3e;
  --sapIndicationColor_9_BorderColor: #1d2d3e;
  --sapIndicationColor_9_TextColor: #fff;
  --sapIndicationColor_9_Hover_Background: #15202d;
  --sapIndicationColor_9_Active_Background: #0d141b;
  --sapIndicationColor_9_Active_BorderColor: #1d2d3e;
  --sapIndicationColor_9_Active_TextColor: #fff;
  --sapIndicationColor_9_Selected_Background: #0d141b;
  --sapIndicationColor_9_Selected_BorderColor: #1d2d3e;
  --sapIndicationColor_9_Selected_TextColor: #fff;
  --sapIndicationColor_9b: #fff;
  --sapIndicationColor_9b_BorderColor: #d9d9d9;
  --sapIndicationColor_9b_Hover_Background: #f2f2f2;
  --sapIndicationColor_10: #45484a;
  --sapIndicationColor_10_Background: #45484a;
  --sapIndicationColor_10_BorderColor: #45484a;
  --sapIndicationColor_10_TextColor: #fff;
  --sapIndicationColor_10_Hover_Background: #393b3d;
  --sapIndicationColor_10_Active_Background: #2c2e30;
  --sapIndicationColor_10_Active_BorderColor: #45484a;
  --sapIndicationColor_10_Active_TextColor: #fff;
  --sapIndicationColor_10_Selected_Background: #2c2e30;
  --sapIndicationColor_10_Selected_BorderColor: #45484a;
  --sapIndicationColor_10_Selected_TextColor: #fff;
  --sapIndicationColor_10b: #eaecee;
  --sapIndicationColor_10b_BorderColor: #eaecee;
  --sapIndicationColor_10b_Hover_Background: #dcdfe3;
  --sapLegend_WorkingBackground: #fafafa;
  --sapLegend_NonWorkingBackground: #dedede;
  --sapLegend_CurrentDateTime: #c0399f;
  --sapLegendColor1: #d58215;
  --sapLegendColor2: #dc5b5b;
  --sapLegendColor3: #db1f77;
  --sapLegendColor4: #9b3b3b;
  --sapLegendColor5: #cf5db3;
  --sapLegendColor6: #286eb4;
  --sapLegendColor7: #1193a2;
  --sapLegendColor8: #8b9668;
  --sapLegendColor9: #647987;
  --sapLegendColor10: #892971;
  --sapLegendColor11: #725a3a;
  --sapLegendColor12: #bb2f2f;
  --sapLegendColor13: #bc1b66;
  --sapLegendColor14: #8b714f;
  --sapLegendColor15: #606190;
  --sapLegendColor16: #597da1;
  --sapLegendColor17: #49797e;
  --sapLegendColor18: #687a33;
  --sapLegendColor19: #295989;
  --sapLegendColor20: #5154bd;
  --sapLegendBackgroundColor1: #fdf3e7;
  --sapLegendBackgroundColor2: #faeaea;
  --sapLegendBackgroundColor3: #fce9f2;
  --sapLegendBackgroundColor4: #f8ecec;
  --sapLegendBackgroundColor5: #f9ebf5;
  --sapLegendBackgroundColor6: #ebf3fa;
  --sapLegendBackgroundColor7: #e8fbfd;
  --sapLegendBackgroundColor8: #f3f4ef;
  --sapLegendBackgroundColor9: #f1f3f4;
  --sapLegendBackgroundColor10: #f9ebf6;
  --sapLegendBackgroundColor11: #f6f2ed;
  --sapLegendBackgroundColor12: #faeaea;
  --sapLegendBackgroundColor13: #fce9f2;
  --sapLegendBackgroundColor14: #f5f2ee;
  --sapLegendBackgroundColor15: #f0f0f5;
  --sapLegendBackgroundColor16: #eff2f6;
  --sapLegendBackgroundColor17: #eff5f6;
  --sapLegendBackgroundColor18: #f5f7ed;
  --sapLegendBackgroundColor19: #ebf2f9;
  --sapLegendBackgroundColor20: #ecedf8;
  --sapChart_OrderedColor_1: #438cd5;
  --sapChart_OrderedColor_2: #e66729;
  --sapChart_OrderedColor_3: #16976c;
  --sapChart_OrderedColor_4: #ed4a7b;
  --sapChart_OrderedColor_5: #945ecf;
  --sapChart_OrderedColor_6: #1193a2;
  --sapChart_OrderedColor_7: #525df4;
  --sapChart_OrderedColor_8: #bf399e;
  --sapChart_OrderedColor_9: #6c8893;
  --sapChart_OrderedColor_10: #ed5f5f;
  --sapChart_OrderedColor_11: #2f6497;
  --sapChart_Bad: #dc0d0e;
  --sapChart_Critical: #cb7d0c;
  --sapChart_Good: #3c9d57;
  --sapChart_Neutral: #848f94;
  --sapChart_Sequence_1: #438cd5;
  --sapChart_Sequence_2: #e66729;
  --sapChart_Sequence_3: #16976c;
  --sapChart_Sequence_4: #ed4a7b;
  --sapChart_Sequence_5: #945ecf;
  --sapChart_Sequence_6: #1193a2;
  --sapChart_Sequence_7: #525df4;
  --sapChart_Sequence_8: #bf399e;
  --sapChart_Sequence_9: #6c8893;
  --sapChart_Sequence_10: #ed5f5f;
  --sapChart_Sequence_11: #2f6497;
  --sapChart_Sequence_Neutral: #848f94;
  
  --sapFontUrl_SAP-icons_woff: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons.woff');
  --sapFontUrl_SAP-icons_woff2: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons.woff2');
  --sapFontUrl_SAP-icons-TNT_ttf: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.ttf');
  --sapFontUrl_SAP-icons-TNT_woff: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff');
  --sapFontUrl_SAP-icons-TNT_woff2: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff2');
  --sapFontUrl_SAP-icons-Business-Suite_ttf: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.ttf');
  --sapFontUrl_SAP-icons-Business-Suite_woff: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff');
  --sapFontUrl_SAP-icons-Business-Suite_woff2: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff2');
  --sapFontUrl_72_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff2');
  --sapFontUrl_72_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff');
  --sapFontUrl_72_Regular_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular-full.woff2');
  --sapFontUrl_72_Regular_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular-full.woff');
  --sapFontUrl_72_Bold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Bold.woff2');
  --sapFontUrl_72_Bold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Bold.woff');
  --sapFontUrl_72_Bold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Bold-full.woff2');
  --sapFontUrl_72_Bold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Bold-full.woff');
  --sapFontUrl_72_Semibold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold.woff2');
  --sapFontUrl_72_Semibold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold.woff');
  --sapFontUrl_72_Semibold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold-full.woff2');
  --sapFontUrl_72_Semibold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold-full.woff');
  --sapFontUrl_72_SemiboldDuplex_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex.woff2');
  --sapFontUrl_72_SemiboldDuplex_woff: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex.woff');
  --sapFontUrl_72_SemiboldDuplex_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex-full.woff2');
  --sapFontUrl_72_SemiboldDuplex_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex-full.woff');
  --sapFontUrl_72_Light_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Light.woff2');
  --sapFontUrl_72_Light_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Light.woff');
  --sapFontUrl_72_Light_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Light-full.woff2');
  --sapFontUrl_72_Light_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Light-full.woff');
  --sapFontUrl_72_Black_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Black.woff2');
  --sapFontUrl_72_Black_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Black.woff');
  --sapFontUrl_72_Black_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Black-full.woff2');
  --sapFontUrl_72_Black_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Black-full.woff');
  --sapFontUrl_72_BoldItalic_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic.woff2');
  --sapFontUrl_72_BoldItalic_woff: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic.woff');
  --sapFontUrl_72_BoldItalic_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic-full.woff2');
  --sapFontUrl_72_BoldItalic_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic-full.woff');
  --sapFontUrl_72_Condensed_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed.woff2');
  --sapFontUrl_72_Condensed_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed.woff');
  --sapFontUrl_72_Condensed_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed-full.woff2');
  --sapFontUrl_72_Condensed_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed-full.woff');
  --sapFontUrl_72_CondensedBold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold.woff2');
  --sapFontUrl_72_CondensedBold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold.woff');
  --sapFontUrl_72_CondensedBold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold-full.woff2');
  --sapFontUrl_72_CondensedBold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold-full.woff');
  --sapFontUrl_72_Italic_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Italic.woff2');
  --sapFontUrl_72_Italic_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Italic.woff');
  --sapFontUrl_72_Italic_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Italic-full.woff2');
  --sapFontUrl_72_Italic_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Italic-full.woff');
  --sapFontUrl_72Mono_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular.woff2');
  --sapFontUrl_72Mono_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular.woff');
  --sapFontUrl_72Mono_Regular_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular-full.woff2');
  --sapFontUrl_72Mono_Regular_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular-full.woff');
  --sapFontUrl_72Mono_Bold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold.woff2');
  --sapFontUrl_72Mono_Bold_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold.woff');
  --sapFontUrl_72Mono_Bold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold-full.woff2');
  --sapFontUrl_72Mono_Bold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold-full.woff');
}

.background-image--sapCompanyLogo {
  background-image: var(--sapCompanyLogo);
}

.background-image--sapBackgroundImage {
  background-image: var(--sapBackgroundImage);
}

.background-image--sapShell_BackgroundImage {
  background-image: var(--sapShell_BackgroundImage);
}

/**
* Base.baseLib.sap_base_fiori.base (Version 11.5.0)
*/

/**
* Base.baseLib.sap_base_fiori.css_variables (Version 11.5.0)
*/

/**
* Base.baseLib.sap_fiori_3.base (Version 11.5.0)
*/

/**
* Base.baseLib.sap_fiori_3.css_variables (Version 11.5.0)
*/
`},F={packageName:"@ui5/webcomponents",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`:root [_ui5host] {
	--ui5-avatar-hover-box-shadow-offset: 0px 0px 0px 0.0625rem;
	--ui5-avatar-initials-color: var(--sapContent_ImagePlaceholderForegroundColor);
	--ui5-avatar-border-radius: .25rem;
	--ui5-avatar-border-radius-img-deduction: 0.0625rem;
	--ui5-avatar-initials-border: none;
	--ui5-avatar-accent1: var(--sapAccentColor1);
	--ui5-avatar-accent2: var(--sapAccentColor2);
	--ui5-avatar-accent3: var(--sapAccentColor3);
	--ui5-avatar-accent4: var(--sapAccentColor4);
	--ui5-avatar-accent5: var(--sapAccentColor5);
	--ui5-avatar-accent6: var(--sapAccentColor6);
	--ui5-avatar-accent7: var(--sapAccentColor7);
	--ui5-avatar-accent8: var(--sapAccentColor8);
	--ui5-avatar-accent9: var(--sapAccentColor9);
	--ui5-avatar-accent10: var(--sapAccentColor10);
	--ui5-avatar-placeholder: var(--sapContent_ImagePlaceholderBackground);

	--ui5-avatar-accent1-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent2-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent3-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent4-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent5-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent6-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent7-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent8-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent9-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent10-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-placeholder-color: var(--ui5-avatar-initials-color);

	--ui5-avatar-accent1-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent2-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent3-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent4-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent5-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent6-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent7-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent8-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent9-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent10-border-color: var(--sapField_BorderColor);
	--ui5-avatar-placeholder-border-color: var(--sapField_BorderColor);

	--_ui5_avatar_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_avatar_focus_offset: 1px;
	--_ui5_avatar_focus_width: 1px;
	--_ui5_avatar_focus_color: var(--sapContent_FocusColor);

	--_ui5_avatar_fontsize_XS: 0.75rem;
	--_ui5_avatar_fontsize_S: 1.125rem;
	--_ui5_avatar_fontsize_M: 1.625rem;
	--_ui5_avatar_fontsize_L: 2rem;
	--_ui5_avatar_fontsize_XL: 2.75rem;

	--_ui5_avatar_icon_XS: 1rem;
	--_ui5_avatar_icon_S: 1.5rem;
	--_ui5_avatar_icon_M: 2rem;
	--_ui5_avatar_icon_L: 2.5rem;
	--_ui5_avatar_icon_XL: 3rem;
}

:root [_ui5host] {
	--_ui5_avatar_fontsize_XS: 1rem;
	--_ui5_avatar_fontsize_S: 1.125rem;
	--_ui5_avatar_fontsize_M: 1.5rem;
	--_ui5_avatar_fontsize_L: 2.25rem;
	--_ui5_avatar_fontsize_XL: 3rem;
}

:root [_ui5host] {
	--_ui5_avatar_group_button_focus_border: none;
}

:root [_ui5host] {
	--_ui5-badge-cursor: default;

	--ui5-badge-color-scheme-1-background: var(--sapLegendBackgroundColor1);
	--ui5-badge-color-scheme-1-border: var(--sapAccentColor1);
	--ui5-badge-color-scheme-1-color: var(--sapTextColor);

	--ui5-badge-color-scheme-2-background: var(--sapLegendBackgroundColor2);
	--ui5-badge-color-scheme-2-border: var(--sapAccentColor2);
	--ui5-badge-color-scheme-2-color: var(--sapTextColor);

	--ui5-badge-color-scheme-3-background: var(--sapLegendBackgroundColor3);
	--ui5-badge-color-scheme-3-border: var(--sapAccentColor3);
	--ui5-badge-color-scheme-3-color: var(--sapTextColor);

	--ui5-badge-color-scheme-4-background: var(--sapLegendBackgroundColor5);
	--ui5-badge-color-scheme-4-border: var(--sapAccentColor4);
	--ui5-badge-color-scheme-4-color: var(--sapTextColor);

	--ui5-badge-color-scheme-5-background: var(--sapLegendBackgroundColor20);
	--ui5-badge-color-scheme-5-border: var(--sapAccentColor5);
	--ui5-badge-color-scheme-5-color: var(--sapTextColor);

	--ui5-badge-color-scheme-6-background: var(--sapLegendBackgroundColor6);
	--ui5-badge-color-scheme-6-border: var(--sapAccentColor6);
	--ui5-badge-color-scheme-6-color: var(--sapTextColor);

	--ui5-badge-color-scheme-7-background: var(--sapLegendBackgroundColor7);
	--ui5-badge-color-scheme-7-border: var(--sapAccentColor7);
	--ui5-badge-color-scheme-7-color: var(--sapTextColor);

	--ui5-badge-color-scheme-8-background: var(--sapLegendBackgroundColor18);
	--ui5-badge-color-scheme-8-border: var(--sapLegendColor18);
	--ui5-badge-color-scheme-8-color: var(--sapTextColor);

	--ui5-badge-color-scheme-9-background: var(--sapLegendBackgroundColor10);
	--ui5-badge-color-scheme-9-border: var(--sapAccentColor10);
	--ui5-badge-color-scheme-9-color: var(--sapTextColor);

	--ui5-badge-color-scheme-10-background: var(--sapLegendBackgroundColor9);
	--ui5-badge-color-scheme-10-border: var(--sapAccentColor9);
	--ui5-badge-color-scheme-10-color: var(--sapTextColor);
}

:root [_ui5host] {
	--browser_scrollbar_border_radius: var(--sapElement_BorderCornerRadius);
	--browser_scrollbar_border: none;
}

:root [_ui5host] {
	--_ui5_busy_indicator_color: var(--sapContent_IconColor);
	--_ui5_busy_indicator_focus_outline:  var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_busy_indicator_focus_border_radius: 0px;
}

:root [_ui5host] {
	--_ui5_button_focused_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_button_focused_border_radius: 0.25rem;
	--_ui5_button_focused_inner_border_radius: 0;
	--_ui5_button_base_min_width: 2.5rem;
	--_ui5_button_base_min_compact_width: 2rem;
	--_ui5_button_base_height: 2.5rem;
	--_ui5_button_compact_height: 1.625rem;
	--_ui5_button_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_button_base_padding: 0.6875rem;
	--_ui5_button_compact_padding: 0.4375rem;
	--_ui5_button_base_icon_only_padding: 0.5625rem;
	--_ui5_button_base_icon_margin: 0.563rem;
	--_ui5_button_icon_font_size: 1.375rem;
	--_ui5_button_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_button_emphasized_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_button_outline_offset: calc(-1 * .1875rem);
	--_ui5_button_emphasized_font_weight: normal;
	--_ui5_button_text_shadow: var(--sapContent_TextShadow);
	--_ui5_button_focus_offset: 1px;
	--_ui5_button_focus_width: 1px;
	--_ui5_button_focus_color: var(--sapContent_FocusColor);
	--_ui5_button_focus_outline_focus_color: var(--sapContent_ContrastFocusColor);
	--_ui5_button_pressed_focused_border_color: var(--sapContent_ContrastFocusColor);

	--_ui5_button_positive_border_focus_hover_color: var(--sapContent_FocusColor);
	--_ui5_button_positive_focus_border_color: var(--sapButton_Accept_BorderColor);
	--_ui5_button_negative_focus_border_color: var(--sapButton_Reject_BorderColor);
	--_ui5_button_attention_focus_border_color: var(--sapButton_Negative_BorderColor);
	--_ui5_button_emphasized_focused_border_color: var(--sapButton_Emphasized_BorderColor);
	--_ui5_button_fontFamily:  "72override", var(--sapFontFamily);
	--_ui5_button_emphasized_focused_border_before: none;
	--_ui5_button_emphasized_focused_border_radius: 0;
	--_ui5_button_transparent_hover: transparent;
}

:root [_ui5host] {
	--_ui5_button_base_min_width: 2.25rem;
	--_ui5_button_base_height: 2.25rem;
	--_ui5_button_base_padding: 0.5625rem;
	--_ui5_button_base_icon_only_padding: 0.5625rem;
	--_ui5_button_base_icon_margin: 0.375rem;
	--_ui5_button_icon_font_size: 1rem;
	--_ui5_button_emphasized_font_weight: bold;
	--_ui5_button_text_shadow: none;
	--_ui5_button_emphasized_focused_border: 0.0625rem dotted var(--sapContent_ContrastFocusColor);
	--_ui5_button_emphasized_focused_border_before: 0.0625rem solid var(--sapContent_FocusColor);
	--_ui5_button_emphasized_outline: 1px solid var(--sapContent_FocusColor);
}

:root [_ui5host] {
	--_ui5_card_box_shadow: var(--sapContent_Shadow0);
	--_ui5_card_hover_box_shadow: var(--_ui5_card_box_shadow);
	--_ui5_card_border: 1px solid var(--sapTile_BorderColor);
	--_ui5_card_border-radius: var(--sapElement_BorderCornerRadius);
	--_ui5_card_header_padding: 1rem;
	--_ui5_card_header_hover_bg: var(--sapList_Hover_Background);
	--_ui5_card_header_active_bg: var(--_ui5_card_header_hover_bg);
	--_ui5_card_header_border: 1px solid var(--_ui5_card_header_border_color);
	--_ui5_card_header_border_color: var(--sapTile_SeparatorColor);
	--_ui5_card_header_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_card_header_focus_radius: 0px;
	--_ui5_card_header_focus_bottom_radius: 0px;
	--_ui5_card_header_focus_offset: 1px;
	--_ui5_card_header_title_font_family: "72override", var(--sapFontFamily);
	--_ui5_card_header_title_font_size: var(--sapFontHeader5Size);
	--_ui5_card_header_title_font_weight: normal;
	--_ui5_card_header_subtitle_margin_top: .25rem;
}

:root [_ui5host] {
    --ui5_carousel_background_color_solid: var(--sapGroup_ContentBackground);
    --ui5_carousel_background_color_translucent: var(--sapBackgroundColor);
    --ui5_carousel_button_size: 2.5rem;
    --ui5_carousel_inactive_dot_size: 0.25rem;
    --ui5_carousel_inactive_dot_margin: 0 0.375rem;
    --ui5_carousel_inactive_dot_border: 1px solid var(--sapContent_ForegroundBorderColor);
    --ui5_carousel_inactive_dot_background: var(--sapContent_ForegroundBorderColor);
    --ui5_carousel_active_dot_border: 1px solid var(--sapContent_Selected_ForegroundColor);
    --ui5_carousel_active_dot_background: var(--sapContent_Selected_ForegroundColor);
}

:root [_ui5host] {
--_ui5_checkbox_wrapper_padding: .8125rem;
--_ui5_checkbox_width_height: 3rem;
--_ui5_checkbox_box_shadow: none;
--_ui5_checkbox_transition: unset;
--_ui5_checkbox_focus_border: none;
--_ui5_checkbox_disabled_opacity: .5;
--_ui5_checkbox_border_radius: 0;
--_ui5_checkbox_hover_background: var(--sapField_Hover_Background);
--_ui5_checkbox_active_background: var(--sapField_Hover_Background);
--_ui5_checkbox_checkmark_warning_color: var(--sapField_TextColor);
--_ui5_checkbox_inner_warning_color: var(--sapField_WarningColor);
--_ui5_checkbox_inner_information_color: currentColor;
--_ui5_checkbox_checkmark_color: var(--sapSelectedColor);
--_ui5_checkbox_focus_position: .6875rem;
--_ui5_checkbox_focus_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
--_ui5_checkbox_focus_border_radius: 0;
--_ui5_checkbox_outer_hover_background: transparent;
--_ui5_checkbox_inner_width_height: 1.375rem;
--_ui5_checkbox_inner_border: solid .125rem var(--sapField_BorderColor);
--_ui5_checkbox_inner_hover_border_color: var(--sapField_HoverBorderColor);
--_ui5_checkbox_inner_hover_checked_border_color: var(--sapField_HoverBorderColor);
--_ui5_checkbox_inner_selected_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_disabled_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_active_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_border_radius: 0;
--_ui5_checkbox_inner_error_border: 0.125rem solid var(--sapField_InvalidColor);
--_ui5_checkbox_inner_warning_border: 0.125rem solid var(--sapField_WarningColor);
--_ui5_checkbox_inner_information_border: 0.125rem solid var(--sapField_InformationColor);
--_ui5_checkbox_inner_information_box_shadow: none;
--_ui5_checkbox_inner_warning_box_shadow: none;
--_ui5_checkbox_inner_error_box_shadow: none;
--_ui5_checkbox_inner_success_box_shadow: none;
--_ui5_checkbox_inner_default_box_shadow: none;
--_ui5_checkbox_inner_warning_background_hover: var(--sapField_WarningBackground);
--_ui5_checkbox_inner_error_background_hover: var(--sapField_InvalidBackground);
--_ui5_checkbox_inner_success_background_hover: var(--sapField_SuccessBackground);
--_ui5_checkbox_inner_information_background_hover: var(--sapField_InformationBackground);
--_ui5_checkbox_inner_success_border: var(--sapField_BorderWidth) solid var(--sapField_SuccessColor);
--_ui5_checkbox_inner_readonly_border: 0.125rem solid var(--sapField_ReadOnly_BorderColor);
--_ui5_checkbox_inner_background: var(--sapField_Background);
--_ui5_checkbox_wrapped_focus_padding: .375rem;
--_ui5_checkbox_wrapped_content_margin_top: .125rem;
--_ui5_checkbox_wrapped_focus_left_top_bottom_position: .5625rem;
--_ui5_checkbox_compact_wrapper_padding: .5rem;
--_ui5_checkbox_compact_width_height: 2rem;
--_ui5_checkbox_compact_inner_size: 1rem;
--_ui5_checkbox_compact_focus_position: .375rem;
--_ui5_checkbox_compact_wrapped_label_margin_top: -1px;
--_ui5_checkbox_label_color: var(--sapContent_LabelColor);
--_ui5_checkbox_label_offset: var(--_ui5_checkbox_wrapper_padding);
--_ui5_checkbox_disabled_label_color: var(--sapContent_LabelColor);
--_ui5_checkbox_default_focus_border: none;
--_ui5_checkbox_focus_outline_display: block;
--_ui5_checkbox_right_focus_distance: 0;
}

:root [_ui5host] {
	--_ui5_checkbox_wrapper_padding: .6875rem;
	--_ui5_checkbox_width_height: 2.75rem;
	--_ui5_checkbox_inner_border: .0625rem solid var(--sapField_BorderColor);
	--_ui5_checkbox_focus_position: 0.5625rem;
	--_ui5_checkbox_inner_border_radius: .125rem;
	--_ui5_checkbox_wrapped_content_margin_top: 0;
	--_ui5_checkbox_wrapped_focus_padding: .5rem;
	--_ui5_checkbox_inner_readonly_border: 1px solid var(--sapField_ReadOnly_BorderColor);
	--_ui5_checkbox_compact_wrapped_label_margin_top: -0.125rem;
}

:root [_ui5host] {
	--_ui5_color-palette-item-container-sides-padding: 0.3125rem;
	--_ui5_color-palette-item-container-rows-padding: 0.6875rem;
	--_ui5_color-palette-item-focus-height: 1.5rem;
	--_ui5_color-palette-item-container-padding: var(--_ui5_color-palette-item-container-sides-padding) var(--_ui5_color-palette-item-container-rows-padding);
	--_ui5_color-palette-item-hover-margin: 0;
	--_ui5_color-palette-row-height: 9.5rem;
	--_ui5_color-palette-button-height: 3rem;
	--_ui5_color-palette-item-before-focus-color: 0.0625rem solid white;
	--_ui5_color-palette-item-before-focus-offset: 0.0625rem;
	--_ui5_color-palette-item-before-focus-hover-offset: 0.0625rem;
	--_ui5_color-palette-item-after-focus-color: 0.0625rem dotted black;
	--_ui5_color-palette-item-after-focus-offset: 0.0625rem;
	--_ui5_color-palette-item-after-focus-hover-offset: 0.0625rem;
	--_ui5_color-palette-item-before-focus-border-radius: 0;
	--_ui5_color-palette-item-before-focus-border-radius: 0;
	--_ui5_color-palette-item-outer-border-radius: 0.25rem;
	--_ui5_color-palette-item-inner-border-radius: 0.1875rem;
	--_ui5_color-palette-item-hover-outer-border-radius: 0.25rem;
	--_ui5_color-palette-item-hover-inner-border-radius: 0.1875rem;
}

:root [_ui5host] {
    --_ui5_color_picker_slider_handle_box_shadow: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_slider_handle_border: 0.125rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_slider_handle_outline_hover: 0.125rem solid var(--sapButton_Hover_BorderColor);
    --_ui5_color_picker_slider_handle_outline_focus: 0.0625rem dotted var(--sapContent_FocusColor);
    --_ui5_color_picker_slider_handle_margin_top: 0.125rem;
    --_ui5_color_picker_slider_handle_focus_margin_top: 0.125rem;
    --_ui5_color_picker_circle_outer_border: 0.0625rem solid var(--sapContent_ContrastShadowColor);
    --_ui5_color_picker_circle_inner_border: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_circle_inner_circle_size: 0.5625rem;
    --_ui5_color_picker_slider_container_margin_top: -10px;
    --_ui5_color_picker_slider_handle_inline_focus: none;
}

:root [_ui5host] {
	--_ui5_datepicker_icon_border: none;
	--_ui5-datepicker_border_radius: 0;
	--_ui5-datepicker-hover-background: var(--sapField_Hover_Background);
	--_ui5-datepicker_icon_border_radius: 0;
    
}

:root [_ui5host] {
	--_ui5_daypicker_item_box_shadow: inset 0 0 0 0.0625rem var(--sapContent_Selected_ForegroundColor);
	--_ui5_daypicker_item_margin: 2px;
	--_ui5_daypicker_item_border: none;
	--_ui5_daypicker_item_selected_border_color: var(--sapList_Background);
	--_ui5_daypicker_daynames_container_height: 2rem;
	--_ui5_daypicker_weeknumbers_container_padding_top: 2rem;
	--_ui5_daypicker_item_othermonth_background_color: var(--sapList_Background);
	--_ui5_daypicker_item_othermonth_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_othermonth_hover_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_border_radius: 0;
	--_ui5_daypicker_item_now_inner_border_radius: 0;
	--_ui5_daypicker_dayname_color: var(--sapTextColor);
	--_ui5_daypicker_weekname_color: var(--sapTextColor);
	--_ui5_daypicker_item_outline_width: 1px;
	--_ui5_daypicker_item_outline_offset: 1px;
	--_ui5_daypicker_item_now_selected_outline_offset: 2px;
	--_ui5_daypicker_item_now_focus_after_width: calc(100% - .25rem);
	--_ui5_daypicker_item_now_focus_after_height: calc(100% - .25rem);
	--_ui5_daypicker_item_now_selected_focus_after_width: calc(100% - .375rem);
	--_ui5_daypicker_item_now_selected_focus_after_height: calc(100% - .375rem);
	--_ui5_daypicker_item_selected_background: transparent;
	--_ui5_daypicker_item_selected_box_shadow: var(--_ui5_daypicker_item_box_shadow), var(--_ui5_daypicker_item_box_shadow);
	--_ui5_daypicker_item_selected_daytext_hover_background: transparent;
	--_ui5_daypicker_item_outline_focus_after: none;
	--_ui5_daypicker_item_border_radius_focus_after: none;
	--_ui5_daypicker_item_border_focus_after: var(--_ui5_daypicker_item_outline_width) dotted var(--sapContent_FocusColor);
	--_ui5_daypicker_item_width_focus_after: calc(100% - 0.25rem);
	--_ui5_daypicker_item_height_focus_after: calc(100% - 0.25rem);
	--_ui5_daypicker_item_now_border: 0.125rem solid var(--sapLegend_CurrentDateTime);
	--_ui5_daypicker_item_now_outline: none;
	--_ui5_daypicker_item_now_outline_offset: none;
	--_ui5_daypicker_item_now_outline_offset_focus_after: var(--_ui5_daypicker_item_now_outline_offset);
	--_ui5_daypicker_item_selected_between_border: 5%;
	--_ui5_daypicker_item_selected_between_background: transparent;
	--_ui5_daypicker_item_selected_between_text_background: var(--sapList_SelectionBackgroundColor);
	--_ui5_daypicker_item_selected_between_text_font: inherit;
	--_ui5_daypicker_item_selected_between_hover_background: inherit;
	--_ui5_daypicker_item_now_box_shadow: inset 0 0 0 0.0625rem var(--_ui5_daypicker_item_selected_border_color);
	--_ui5_daypicker_item_selected_text_outline: none;
	--_ui5_daypicker_item_now_not_selected_inset: 0;
	--_ui5_daypicker_item_now_inset: 0.1875rem;
	--_ui5_daypicker_item_now_border_color: var(--sapLegend_CurrentDateTime);
	--_ui5_daypicker_item_weeekend_filter: brightness(100%);
	--_ui5_daypicker_item_selected_hover: var(--sapContent_Selected_Hover_Background);
	--_ui5_daypicker_item_border_radius_item: none;
	--_ui5_daypicker_item_now_selected_outline_offset: -0.3125rem;
	--_ui5_daypicker_two_calendar_item_now_inset: 0.1875rem;
	--_ui5_daypicker_item_selected__secondary_type_text_outline: none;
	--_ui5_daypicker_two_calendar_item_now_day_text_content: none;
	--_ui5_daypicker_two_calendar_item_now_selected_border_width: 0.0625rem;
	--_ui5_daypicker_two_calendar_item_border_radius: 0.3125rem;
	--_ui5_daypicker_two_calendar_item_border_focus_border_radius: 0rem;
	--_ui5_daypicker_two_calendar_item_no_selected_inset: 0.125rem;
	--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus: 0.0625rem;
	--_ui5_daypicker_two_calendar_item_no_selected_focus_inset: 0.125rem;
	--_ui5_daypicker_two_calendar_item_no_select_focus_border_radius: 0.0625rem;
	--_ui5_dp_two_calendar_item_secondary_text_border_radios: 0.25rem;
	--_ui5_daypicker_two_calendar_item_now_selected_border_inset: 0.125rem;
}

:root [_ui5host] {
	--_ui5_daypicker_item_selected_background: var(--sapContent_Selected_Background);
	--_ui5_daypicker_dayname_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_weekname_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_border_radius_focus_after: 0.0625rem;
	--_ui5_daypicker_item_border_radius_item: 0.0625rem;
	--_ui5_daypicker_item_selected_border: none;
	--_ui5_daypicker_item_not_selected_focus_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_daypicker_item_selected_focus_color: var(--sapContent_ContrastFocusColor);
	--_ui5_daypicker_item_selected_focus_width: 0.0625rem;
	--_ui5_daypicker_item_no_selected_inset: 0.125rem;
	--_ui5_daypicker_item_now_border_focus_after: 0.0625rem dotted var(--sapList_SelectionBorderColor);
	--_ui5_daypicker_item_now_border_radius_focus_after: 0.0625rem;
	--_ui5_day_picker_item_selected_now_border: 0.1875rem solid var(--sapList_Background);
	--_ui5_day_picker_item_selected_now_border_focus: 0.0625rem dotted var(--sapContent_ContrastFocusColor);
	--_ui5_day_picker_item_selected_now_border_radius_focus: 0.0625rem;
	--_ui5-dp-item_withsecondtype_border: 0.1875rem;
	--_ui5_daypicker_item_border_radius: 0.25rem;
	--_ui5_daypicker_item_selected_text_border: none;
	--_ui5_daypicker_item_selected_between_text_border_radios: 0.25rem;
	--_ui5_daypicker_item_select_between_border: 1px solid var(--sapContent_Selected_ForegroundColor);
	--_ui5_daypicker_item_now_selected_outline_offset: -0.3125rem;
}

:root [_ui5host] {
	--_ui5_file_uploader_hover_border: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_file_uploader_value_state_error_hover_background_color: var(--sapField_Hover_Background);
}

:root [_ui5host] {
	--_ui5_dialog_resize_handle_color: var(--sapButton_Lite_TextColor);
	--_ui5_dialog_resize_handle_right: -0.25rem;
	--_ui5_dialog_resize_handle_bottom: -0.0625rem;
	--_ui5_dialog_header_focus_bottom_offset: 3px;
	--_ui5_dialog_header_focus_top_offset: 2px;
	--_ui5_dialog_header_focus_left_offset: 2px;
	--_ui5_dialog_header_focus_right_offset: 2px;
	--_ui5_dialog_header_border_radius: 0px;
	--_ui5_dialog_header_error_state_box_shadow: inset 0 -0.0625rem var(--sapErrorBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_information_state_box_shadow: inset 0 -0.0625rem var(--sapInformationBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_success_state_box_shadow: inset 0 -0.0625rem var(--sapSuccessBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_warning_state_box_shadow: inset 0 -0.0625rem var(--sapWarningBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_error_state_icon_color: var(--sapNegativeElementColor);
	--_ui5_dialog_header_information_state_icon_color: var(--sapInformativeElementColor);
	--_ui5_dialog_header_success_state_icon_color: var(--sapPositiveElementColor);
	--_ui5_dialog_header_warning_state_icon_color: var(--sapCriticalElementColor);
}

:root [_ui5host] {
	--ui5-group-header-listitem-background-color: var(--sapList_GroupHeaderBackground);
}

:root [_ui5host] {
	--_ui5_input_width: 13.125rem;
	--_ui5_input_min_width: 2.75rem;
	--_ui5_input_height: var(--sapElement_Height);
	--_ui5_input_compact_height: 1.625rem;
	--_ui5_input_margin_top_bottom: 0.25rem;
	--_ui5_input_hover_border: var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_Hover_BorderColor);
	--_ui5_input_value_state_error_hover_background: var(--sapField_Hover_Background);
	--_ui5_input_background_color: var(--sapField_Background);
	--_ui5_input_border_radius: var(--sapField_BorderCornerRadius);
	--_ui5_input_focus_border_radius: 0;
	--_ui5-input-border: 2px solid transparent; /* The value of this variable defaults to sap_horizon theme, because if it defaults to fiori, then a flickering of the border is present*/
	--_ui5_input_placeholder_style: italic;
	--_ui5_input_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_input_bottom_border_height: 0;
	--_ui5_input_bottom_border_color: transparent;
	--_ui5_input_focused_border_color: var(--sapField_Hover_BorderColor);
	--_ui5_input_state_border_width: 0.125rem;
	--_ui5_input_information_border_width: 0.125rem;
	--_ui5_input_error_font_weight: normal;
	--_ui5_input_warning_font_weight: normal;
	--_ui5_input_focus_border_width: 1px;
	--_ui5_input_error_warning_border_style: solid;
	--_ui5_input_error_warning_font_style: inherit;
	--_ui5_input_error_warning_text_indent: 0;
	--_ui5_input_disabled_color: var(--sapContent_DisabledTextColor);
	--_ui5_input_disabled_font_weight: normal;
	--_ui5_input_disabled_border_color: var(--sapField_BorderColor);
	--_ui5-input_disabled_background: var(--sapField_Background);
	--_ui5_input_readonly_border_color: var(--sapField_ReadOnly_BorderColor);
	--_ui5_input_readonly_background: var(--sapField_ReadOnly_Background);
	--_ui5_input_custom_icon_padding: .5625rem .625rem;
	--_ui5_input_error_warning_custom_icon_padding: .5rem .625rem;
	--_ui5_input_information_custom_icon_padding: .5rem .625rem;
	--_ui5_input_error_warning_icon_padding: .5rem .5rem .5rem .5625rem;
	--_ui5_input_information_icon_padding: .5rem .5rem .5rem .5625rem;
	--_ui5_input_disabled_opacity: var(--sapContent_DisabledOpacity);
	--_ui5_input_icon_min_width: 2.25rem;
	--_ui5_input_compact_min_width: 2rem;
	--_ui5_input_transition: none;
	--_ui5-input-value-state-icon-display: none;
	--_ui5_input_focused_value_state_error_background: var(--sapField_InvalidBackground);
	--_ui5_input_focused_value_state_warning_background: var(--sapField_WarningBackground);
	--_ui5_input_focused_value_state_success_background: var(--sapField_SuccessBackground);
	--_ui5_input_focused_value_state_information_background: var(--sapField_InformationBackground);
	--_ui5_input_value_state_error_border_color: var(--sapField_InvalidColor);
	--_ui5_input_focused_value_state_error_border_color: var(--sapField_InvalidColor);
	--_ui5_input_focused_value_state_error_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_focused_value_state_warning_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_focused_value_state_success_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_value_state_warning_border_color: var(--sapField_WarningColor);
	--_ui5_input_focused_value_state_warning_border_color: var(--sapField_WarningColor);
	--_ui5_input_value_state_success_border_color: var(--sapField_SuccessColor);
	--_ui5_input_focused_value_state_success_border_color: var(--sapField_SuccessColor);
	--_ui5_input_value_state_success_border_width: 1px;
	--_ui5_input_value_state_information_border_color: var(--sapField_InformationColor);
	--_ui5_input_focused_value_state_information_border_color: var(--sapField_InformationColor);
	--_ui5-input-value-state-information-border-width: 1px;
	--_ui5-input-background-image: none;
	--_ui5_input_focus_offset: 1px;
	--ui5_input_focus_pseudo_element_content: '';
	--_ui5_input_value_state_error_warning_placeholder_font_weight: normal;
	--_ui5_input_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5-input_error_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_input_icon_width: 2.25rem;
	--_ui5_input_icon_wrapper_height: 100%;
	--_ui5_input_icon_wrapper_state_height: 100%;
	--_ui5_input_icon_wrapper_success_state_height: 100%;
	--_ui5-input-icons-count: 0;
	--_ui5_input_margin_top_bottom: 0.1875rem;
	--_ui5_input_tokenizer_min_width: 3.25rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_input_min_width: 2rem;
	--_ui5_input_icon_width: 2rem;
}

:root [_ui5host] {
	--_ui5-input-border: 1px solid var(--sapField_BorderColor);
}

:root [_ui5host] {
	--_ui5_input_icon_padding: .5625rem;
	--_ui5_input_icon_color: var(--sapContent_IconColor);
	--_ui5_input_icon_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_pressed_bg: var(--sapButton_Selected_Background);
	--_ui5_input_icon_hover_bg: var(--sapButton_Lite_Hover_Background);
	--_ui5_input_icon_border_radius: 0;
	--_ui5_input_icon_box_shadow: none;
	--_ui5_input_icon_border: 1px solid transparent;
	--_ui5_input_error_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_warning_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_information_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_success_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_icon_error_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_warning_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_information_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_success_pressed_color: var(--sapButton_Active_TextColor);

}

:root [_ui5host] {
	--_ui5_link_text_decoration: none;
	--_ui5_link_hover_text_decoration: underline;
	--_ui5_link_focused_hover_text_decoration: underline;
	--_ui5_link_focused_hover_text_color: var(--sapLinkColor);
	--_ui5_link_active_text_decoration: underline;
	--_ui5_link_border: 0.0625rem dotted transparent;
	--_ui5_link_border_focus: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_link_focus_border-radius: 0;
	--_ui5_link_focus_background_color: transparent;
	--_ui5_link_focus_color: var(--sapLinkColor);
	--_ui5_link_focus_text_decoration: underline;
	--_ui5_link_subtle_text_decoration: none;
	--_ui5_link_subtle_text_decoration_hover: underline;

}

:root [_ui5host] {
	--_ui5_link_text_decoration: none;
	--_ui5_link_hover_text_decoration: underline;
}

:root [_ui5host] {
	--ui5_list_footer_text_color: var(--sapPageFooter_TextColor);
}

:root [_ui5host] {
	--ui5_list_footer_text_color: var(--sapTextColor);
}

:root [_ui5host] {
	--ui5-listitem-background-color: var(--sapList_Background);
	--ui5-listitem-border-bottom: 1px solid var(--sapList_BorderColor);
	--ui5-listitem-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);
	--ui5-listitem-focused-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);
	--ui5-listitem-active-border-color: var(--sapContent_ContrastFocusColor);
	--ui5-listitem-padding: 0 1rem;
	--ui5-listitem-focus-border-radius: 0;
	--ui5-listitem-focus-offset: 0.125rem;
	--_ui5_listitembase_focus_width: 1px;
	--_ui5-listitembase_disabled_opacity: 0.5;
	--_ui5_product_switch_item_border: none;
}

:root [_ui5host] {
	--_ui5_menu_popover_border_radius: var(--sapElement_BorderCornerRadius);
	--_ui5_menu_item_padding: 0 1rem 0 0.75rem;
	--_ui5_menu_item_submenu_icon_right: 1rem;
	--_ui5_menu_item_additional_text_start_margin: 1rem;
}

:root [_ui5host] {
	--_ui5_monthpicker_item_border_radius: 0;
	--_ui5_monthpicker_item_border: none;
	--_ui5_monthpicker_item_margin: 1px;
	--_ui5_monthpicker_item_focus_after_width: calc(100% - 0.375rem);
	--_ui5_monthpicker_item_focus_after_height: calc(100% - 0.375rem);
	--_ui5_monthpicker_item_focus_after_border: 1px dotted var(--sapContent_FocusColor);
	--_ui5_monthpicker_item_focus_after_offset: 2px;
	--_ui5_monthpicker_item_focus_after_border_radius: 0;
	--_ui5_monthpicker_item_selected_text_color: var(--sapContent_ContrastTextColor);
	--_ui5_monthpicker_item_selected_background_color: var(--sapSelectedColor);
	--_ui5_monthpicker_item_selected_hover_color: var(--sapContent_Selected_Background);
	--_ui5_monthpicker_item_selected_box_shadow: none;
	--_ui5_monthpicker_item_focus_after_outline: none;
	--_ui5_monthpicker_item_selected_font_wieght: inherit;
}

:root [_ui5host] {
	--_ui5_monthpicker_item_border_radius: 0.25rem;
}

:root [_ui5host]{
	--_ui5_message_strip_icon_width: 2.5rem;
	--_ui5_message_strip_button_border_width: 0;
	--_ui5_message_strip_button_border_style: none;
	--_ui5_message_strip_button_border_color: transparent;
	--_ui5_message_strip_button_border_radius: 0;
	--_ui5_message_strip_padding: 0.4375rem 2.5rem 0.4375rem 2.5rem;
	--_ui5_message_strip_padding_block_no_icon: 0.4375rem 0.4375rem;
	--_ui5_message_strip_padding_inline_no_icon: 1rem 2.5rem;
	--_ui5_message_strip_button_height: 1.625rem;
	--_ui5_message_strip_border_width: 1px;
	--_ui5_message_strip_close_button_border: none;
	--_ui5_message_strip_icon_top: 0.4375rem;
	--_ui5_message_strip_focus_width: 1px;
	--_ui5_message_strip_focus_offset: -2px;
	--_ui5_message_strip_close_button_top: 0.125rem;
	--_ui5_message_strip_close_button_right: 0.125rem;
}

:root [_ui5host] {
	--_ui5_panel_focus_border:   var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_panel_button_root_width: 3rem;
	--_ui5_panel_border_radius: 0px;
	--_ui5_panel_border_radius_expanded: 0;
	--_ui5_panel_default_header_border: none;
	--_ui5_panel_border_bottom: 0.0625rem solid var(--sapGroup_TitleBorderColor);
	--_ui5_panel_outline_offset: -3px;
	--_ui5_panel_icon_color: var(--sapContent_IconColor);
	--_ui5_panel_header_padding_right: 0.5rem;
	--_ui5_panel_header_button_wrapper_padding: .25rem;
	--_ui5_panel_focus_offset: 1px;
	--_ui5_panel_content_padding: 0.625rem 1rem 1.375rem 1rem;
	--_ui5_panel_header_background_color: var(--sapBackgroundColor);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_panel_header_button_wrapper_padding: .5625rem .375rem;
}

:root [_ui5host] {
	--_ui5_panel_button_root_width: 2.75rem;
}

:root [_ui5host] {
	--_ui5_popover_background: var(--sapGroup_ContentBackground);
	--_ui5_popover_box_shadow: var(--sapContent_Shadow2);
	--_ui5_popover_no_arrow_box_shadow: var(--sapContent_Shadow1);
}

:root [_ui5host] {
	--_ui5_popup_content_padding_s: 1rem;
	--_ui5_popup_content_padding_m_l: 2rem;
	--_ui5_popup_content_padding_xl: 3rem;
	--_ui5_popup_header_footer_padding_s: 1rem;
	--_ui5_popup_header_footer_padding_m_l: 2rem;
	--_ui5_popup_header_footer_padding_xl: 3rem;
	--_ui5_popup_viewport_margin: 10px;
	--_ui5_popup_header_font_weight: 400;
	--_ui5_popup_header_font_family: var(--sapFontFamily);
	--_ui5_popup_header_prop_header_text_alignment: flex-start;
	--_ui5_popup_border_radius: var(--sapElement_BorderCornerRadius);
	--_ui5_popup_header_background: var(--sapPageHeader_Background);
	--_ui5_popup_header_shadow: var(--sapContent_HeaderShadow);
	--_ui5_popup_header_border: none;
}

:root [_ui5host] {
    --_ui5_progress_indicator_background_none: var(--sapField_Background);
    --_ui5_progress_indicator_background_error: var(--sapField_Background);
    --_ui5_progress_indicator_background_warning: var(--sapField_Background);
    --_ui5_progress_indicator_background_success: var(--sapField_Background);
    --_ui5_progress_indicator_background_information: var(--sapField_Background);
    --_ui5_progress_indicator_value_state_none: var(--sapNeutralElementColor);
    --_ui5_progress_indicator_value_state_error: var(--sapNegativeElementColor);
    --_ui5_progress_indicator_value_state_warning: var(--sapCriticalElementColor);
    --_ui5_progress_indicator_value_state_success: var(--sapPositiveElementColor);
    --_ui5_progress_indicator_value_state_information: var(--sapInformativeElementColor);
    --_ui5_progress_indicator_border_color_error: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_warning: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_success: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_information: var(--sapField_BorderColor);
    --_ui5_progress_indicator_color: var(--sapTextColor);
    --_ui5_progress_indicator_bar_color: var(--sapContent_ContrastTextColor);
    --_ui5_progress_indicator_border: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_progress_indicator_bar_border_max: none;
    --_ui5_progress_indicator_icon_visibility: none;

    --_ui5_progress_indicator_side_points_visibility: none;

    --_ui5_progress_indicator_host_height: 1rem;
    --_ui5_progress_indicator_host_min_height: 1rem;
    --_ui5_progress_indicator_root_border_radius: 0.5rem;
    --_ui5_progress_indicator_root_height: 100%;
    --_ui5_progress_indicator_root_overflow: hidden;
    
    --_ui5_progress_indicator_bar_height: 100%;
    --_ui5_progress_indicator_bar_border_radius: 0.5rem 0 0 0.5rem;

    --_ui5_progress_indicator_remaining_bar_overflow: hidden;

    --_ui5_progress_indicator_icon_size: var(--sapFontSmallSize);

    --_ui5_progress_indicator_value_margin: 0 0.375rem;
}

:root [_ui5host] {
	--_ui5_radio_button_min_width: 2.75rem;
	--_ui5_radio_button_min_width_compact: 2rem;
	--_ui5_radio_button_hover_fill: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_error: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_warning: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_success: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_information: var(--sapField_Hover_Background);
	--_ui5_radio_button_border_width: 1px;
	--_ui5_radio_button_checked_fill: var(--sapSelectedColor);
	--_ui5_radio_button_checked_error_fill: var(--sapField_InvalidColor);
	--_ui5_radio_button_checked_warning_fill: var(--sapField_TextColor);
	--_ui5_radio_button_checked_success_fill: var(--sapField_SuccessColor);
	--_ui5_radio_button_checked_information_fill: var(--sapField_InformationColor);
	--_ui5_radio_button_warning_error_border_dash: 0;
	--_ui5_radio_button_outer_ring_color: var(--sapField_BorderColor);
	--_ui5_radio_button_outer_ring_width: var(--sapField_BorderWidth);
	--_ui5_radio_button_outer_ring_bg: var(--sapField_Background);
	--_ui5_radio_button_outer_ring_hover_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_active_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_checked_hover_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_padding: 0 0.625rem;
	--_ui5_radio_button_border_radius: 0;
	--_ui5_radio_button_border: none;
	--_ui5_radio_button_focus_border: none;
	--_ui5_radio_button_focus_outline: block;
	--_ui5_radio_button_hover_shadow: none;
	--_ui5_radio_button_transition: none;
	--_ui5_radio_button_hover_background: inherit;
	--_ui5_radio_button_color: var(--sapField_BorderColor);
	--_ui5_radio_button_label_offset: 1px;
	--_ui5_radio_button_label_color: var(--sapContent_LabelColor);
	--_ui5_radio_button_items_align: unset;
	--_ui5_radio_button_inner_width: initial;
	--_ui5_radio_button_border_readonly_focus_style: var(--sapContent_FocusStyle);
	--_ui5_radio_button_inner_ring_radius: 22%;
	--_ui5_radio_button_outer_ring_hover_shadow: none;
	--_ui5_radio_button_outer_ring_hover_shadow_error: none;
	--_ui5_radio_button_outer_ring_hover_shadow_warning: none;
	--_ui5_radio_button_outer_ring_hover_shadow_success: none;
	--_ui5_radio_button_outer_ring_hover_shadow_information: none;
	--_ui5_radio_button_read_only_border_type: none;
	--_ui5_radio_button_inner_ring_color: var(--sapSelectedColor);
	--_ui5_radio_button_information_border_width: var(--sapField_InformationBorderWidth);
	--_ui5_radio_button_read_only_border_width: var(--sapField_BorderWidth);
	--_ui5_radio_button_read_only_inner_ring_color: var(--sapContent_NonInteractiveIconColor);
}

:root [_ui5host] {
	--_ui5_rating_indicator_border_radius: 0px;
	--_ui5_rating_indicator_outline_offset: 0px;
	--_ui5_rating_indicator_item_height: 1em;
	--_ui5_rating_indicator_item_width: 1em;
	--_ui5_rating_indicator_readonly_item_height: 1em;
	--_ui5_rating_indicator_readonly_item_width: 1em;
	--_ui5_rating_indicator_readonly_item_spacing: 0px;
	--_ui5_rating_indicator_component_spacing: 0.5rem 0px;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_rating_indicator_item_height: 0.67em;
	--_ui5_rating_indicator_item_width: 0.67em;
	--_ui5_rating_indicator_readonly_item_height: 0.67em;
	--_ui5_rating_indicator_readonly_item_width: 0.67em;
	--_ui5_rating_indicator_component_spacing: 0.8125rem 0px;
}

:root [_ui5host] {
	--_ui5_segmented_btn_inner_border: 0.0625rem solid var(--sapButton_BorderColor);
	--_ui5_segmented_btn_inner_border_odd_child: 0;
	--_ui5_segmented_btn_inner_pressed_border_odd_child: 0;
	--_ui5_segmented_btn_border_radius: 0.375rem;
	--_ui5_segmented_btn_inner_border_radius: 0;
	--_ui5_segmented_btn_outer_border_radius: 0.375rem;
	--_ui5_segmented_btn_background_color: transparent;
}

:root [_ui5host] {
	--_ui5_select_disabled_background: var(--sapField_Background);
	--_ui5_select_disabled_border_color: var(--sapField_BorderColor);
	--_ui5_select_state_error_warning_border_style: solid;
	--_ui5_select_state_error_warning_border_width: 0.125rem;
	--_ui5_select_hover_icon_left_border: 1px solid transparent;
	--_ui5_select_focus_width: 1px;
	--_ui5_select_label_color: var(--sapField_TextColor);
}

:root [_ui5host] {
	--_ui5_split_button_focused_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_split_button_focused_border_radius: 0.125rem;
	--_ui5_split_button_hover_border_radius: 0;
	--_ui5_split_button_hover_border_radius: 0;
	--_ui5_split_button_attention_separator_color: var(--sapButton_Attention_BorderColor);
	--_ui5_split_button_middle_separator_width: 0;
	--_ui5_split_button_middle_separator_left: 0;
	--_ui5_split_button_middle_separator_hover_display: block;
	--_ui5_split_button_text_button_width: 2.25rem;
	--_ui5_split_button_text_button_right_border_width: 0;
	--_ui5_split_button_transparent_hover_background: var(--sapButton_Lite_Background);
	--_ui5_split_button_transparent_hover_color: var(--sapButton_Lite_TextColor);
	--_ui5_split_button_transparent_disabled_background: transparent;
	--_ui5_split_button_inner_focused_border_radius_outer: 0.25rem;
	--_ui5_split_button_inner_focused_border_radius_inner: 0;
}

:root [_ui5host] {
	/* switch */
	--_ui5_switch_height: 2.75rem;
	--_ui5_switch_width: 3.25rem;

	--_ui5_switch_min_width: 3.875rem;

	--_ui5_switch_with_label_width: 100%;

	--_ui5_switch_focus_outline: var(--_ui5_switch_foucs_border_size) dotted var(--sapContent_FocusColor);

	--_ui5_switch_root_outline_top: 0.25rem;
	--_ui5_switch_root_outline_bottom: 0.25rem;
	--_ui5_switch_root_outline_left: 0;
	--_ui5_switch_root_outline_right: 0;

	--_ui5_switch_foucs_border_size: 1px;

	--_ui5-switch-root-border-radius: 0;
	--_ui5-switch-root-box-shadow: none;
	--_ui5_switch_root_after_outline: none;

	--_ui5-switch-focus: "";
	--_ui5_switch_disabled_opacity: .4;

	--_ui5_switch_transform: translateX(100%) translateX(-1.875rem);
	--_ui5_switch_transform_with_label: translateX(100%) translateX(-1.875rem);

	--_ui5_switch_rtl_transform: translateX(-100%) translateX(1.875rem);
	--_ui5_switch_rtl_transform_with_label: translateX(-100%) translateX(1.875rem);

	/* switch track */
	--_ui5_switch_track_with_label_width: 100%;
	--_ui5_switch_track_with_label_height: 1.375rem;

	--_ui5_switch_track_width: 100%;
	--_ui5_switch_track_height: 1.375rem;

	--_ui5_switch_track_border_radius: 0.75rem;
	--_ui5-switch-track-border: 1px solid;

	--_ui5_switch_track_active_background_color: var(--sapButton_Track_Selected_Background);
	--_ui5_switch_track_inactive_background_color: var(--sapButton_Track_Background);
	--_ui5_switch_track_hover_active_background_color: var(--sapButton_Track_Selected_Background);
	--_ui5_switch_track_hover_inactive_background_color: var(--sapButton_Track_Background);

	--_ui5_switch_track_active_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_track_inactive_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_track_hover_active_border_color: var(--sapButton_Hover_BorderColor);
	--_ui5_switch_track_hover_inactive_border_color: var(--sapButton_Hover_BorderColor);

	--_ui5_switch_track_semantic_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_track_semantic_reject_background_color: var(--sapErrorBackground);
	--_ui5_switch_track_semantic_hover_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_track_semantic_hover_reject_background_color: var(--sapErrorBackground);

	--_ui5_switch_track_semantic_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_track_semantic_reject_border_color: var(--sapErrorBorderColor);
	--_ui5_switch_track_semantic_hover_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_track_semantic_hover_reject_border_color: var(--sapErrorBorderColor);
	
	--_ui5_switch_track_transition: none;
	--_ui5_switch_track_icon_display: none;

	/* switch handle */
	--_ui5_switch_handle_width: 2rem;

	--_ui5_switch_handle_height: 2rem;

	--_ui5_switch_handle_with_label_width: 2rem;

	--_ui5_switch_handle_with_label_height: 2rem;

	--_ui5_switch_handle_border: var(--_ui5_switch_handle_border_width) solid var(--sapButton_Handle_BorderColor);
	--_ui5_switch_handle_border_width: 0.0625rem;
	--_ui5_switch_handle_border_radius: 1rem;

	--_ui5_switch_handle_active_background_color: var(--sapButton_Selected_Background);
	--_ui5_switch_handle_inactive_background_color: var(--sapButton_TokenBackground);
	--_ui5_switch_handle_hover_active_background_color: var(--sapButton_Selected_Hover_Background);
	--_ui5_switch_handle_hover_inactive_background_color: var(--sapButton_Handle_Hover_Background);

	--_ui5_switch_handle_active_border_color: var(--sapButton_Selected_BorderColor);
	--_ui5_switch_handle_inactive_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_handle_hover_active_border_color: var(--sapButton_Selected_BorderColor);
	--_ui5_switch_handle_hover_inactive_border_color: var(--sapButton_Hover_BorderColor);

	--_ui5_switch_handle_semantic_accept_background_color: var(--sapButton_Background);
	--_ui5_switch_handle_semantic_reject_background_color: var(--sapButton_Background);
	--_ui5_switch_handle_semantic_hover_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_handle_semantic_hover_reject_background_color: var(--sapErrorBackground);

	--_ui5_switch_handle_semantic_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_handle_semantic_reject_border_color: var(--sapErrorBorderColor);
	--_ui5_switch_handle_semantic_hover_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_handle_semantic_hover_reject_border_color: var(--sapErrorBorderColor);

	--_ui5_switch_handle_on_hover_box_shadow: none;
	--_ui5_switch_handle_off_hover_box_shadow: none;
	--_ui5_switch_handle_semantic_on_hover_box_shadow: var(--sapContent_Informative_Shadow);
	--_ui5_switch_handle_semantic_off_hover_box_shadow: var(--sapContent_Negative_Shadow);

	--_ui5-switch-handle-icon-display: none;
	--_ui5_switch_handle_left: -0.0625rem;
	--_ui5-switch-slider-texts-display: inline;

	/* switch text */
	--_ui5_switch_text_font_family: "72override", var(--sapFontFamily);
	--_ui5_switch_text_font_size: var(--sapFontSmallSize);

	--_ui5_switch_text_with_label_font_family: "72override", var(--sapFontFamily);
	--_ui5_switch_text_with_label_font_size: var(--sapFontSmallSize);

	--_ui5_switch_text_with_label_width: none;

	--_ui5_switch_text_width: none;

	--_ui5_switch_text_inactive_left: auto;
	--_ui5_switch_text_inactive_right: 0.125rem;
	--_ui5_switch_text_active_left: calc(-100% + 2rem);
	--_ui5_switch_text_active_right: auto;

	--_ui5_switch_text_active_color: var(--sapButton_Track_Selected_TextColor);
	--_ui5_switch_text_inactive_color: var(--sapTextColor);

	--_ui5_switch_text_semantic_accept_color: var(--sapPositiveElementColor);
	--_ui5_switch_text_semantic_reject_color: var(--sapNegativeElementColor);

	--_ui5_switch_text_overflow: none;
	--_ui5_switch_text_z_index: inherit;
	--_ui5_switch_text_hidden: hidden;
	--_ui5_switch_text_min_width: 1.625rem;

	--_ui5_switch_icon_width: 0.75rem;
	--_ui5_switch_icon_height: 0.75rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_switch_height: 2rem;
	--_ui5_switch_width: 2.5rem;
	--_ui5_switch_with_label_width: 100%;
	--_ui5_switch_root_outline_top: 0;
	--_ui5_switch_root_outline_bottom: 0;
	--_ui5_switch_transform: translateX(100%) translateX(-1.5rem);
	--_ui5_switch_transform_with_label: translateX(100%) translateX( -1.5rem);
	--_ui5_switch_rtl_transform: translateX(1.5rem) translateX(-100%);
	--_ui5_switch_rtl_transform_with_label: translateX(1.5rem) translateX(-100%);
	--_ui5_switch_track_with_label_width: 100%;
	--_ui5_switch_track_with_label_height: 1.375rem;
	--_ui5_switch_track_width: 100%;
	--_ui5_switch_track_height: 1.375rem;
	--_ui5_switch_handle_width: 1.625rem;
	--_ui5_switch_handle_height: 1.625rem;
	--_ui5_switch_handle_with_label_width: 1.625rem;
	--_ui5_switch_handle_with_label_height: 1.625rem;
	--_ui5_switch_text_font_size: var(--sapFontSmallSize);
	--_ui5_switch_text_width: none;
	--_ui5_switch_text_active_left: calc(-100% + 1.625rem);
}

:root [_ui5host] {
	/* Header */
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
	--_ui5_tc_header_height_text_only: var(--_ui5_tc_item_text_only_height);
	--_ui5_tc_header_height_text_with_additional_text: var(--_ui5_tc_item_text_only_with_additional_text_height);
	--_ui5_tc_header_box_shadow: var(--sapContent_HeaderShadow);
	--_ui5_tc_header_border_bottom: 0.125rem solid var(--sapObjectHeader_Background);
	--_ui5_tc_header_background: var(--sapObjectHeader_Background);
	--_ui5_tc_header_background_translucent: var(--sapObjectHeader_Background);
	--_ui5_tc_content_background: var(--sapBackgroundColor);
	--_ui5_tc_content_background_translucent: var(--sapGroup_ContentBackground);

	/* Header Item */
	--_ui5_tc_headeritem_padding: 1rem;
	--_ui5_tc_headerItem_color: var(--sapContent_LabelColor);
	--_ui5_tc_headerItem_additional_text_color: var(--sapContent_LabelColor);
	--_ui5_tc_headerItem_text_hover_color: var(--_ui5_tc_headerItem_color);
	--_ui5_tc_headerItem_text_selected_color: var(--sapSelectedColor);
	--_ui5_tc_headerItem_text_selected_hover_color: var(--sapSelectedColor);
	--_ui5_tc_headeritem_text_font_weight: normal;
	--_ui5_tc_headerItem_additional_text_font_weight: normal;
	--_ui5_tc_headerItem_neutral_color: var(--sapNeutralColor);
	--_ui5_tc_headerItem_positive_color: var(--sapPositiveColor);
	--_ui5_tc_headerItem_negative_color: var(--sapNegativeColor);
	--_ui5_tc_headerItem_critical_color: var(--sapCriticalColor);
	--_ui5_tc_headerItem_neutral_border_color: var(--_ui5_tc_headerItem_neutral_color);
	--_ui5_tc_headerItem_positive_border_color: var(--_ui5_tc_headerItem_positive_color);
	--_ui5_tc_headerItem_negative_border_color: var(--_ui5_tc_headerItem_negative_color);
	--_ui5_tc_headerItem_critical_border_color: var(--_ui5_tc_headerItem_critical_color);
	--_ui5_tc_headerItem_neutral_selected_border_color: var(--_ui5_tc_headerItem_neutral_color);
	--_ui5_tc_headerItem_positive_selected_border_color: var(--_ui5_tc_headerItem_positive_color);
	--_ui5_tc_headerItem_negative_selected_border_color: var(--_ui5_tc_headerItem_negative_color);
	--_ui5_tc_headerItem_critical_selected_border_color: var(--_ui5_tc_headerItem_critical_color);
	--_ui5_tc_headerItem_transition: none;
	--_ui5_tc_headerItem_hover_border_visibility: hidden;
	--_ui5_tc_headerItem_focus_offset: 0px;

	--_ui5_tc_headerItemContent_border_radius: 0.125rem 0.125rem 0 0;
	--_ui5_tc_headerItemContent_border_bottom: 0.125rem solid var(--sapSelectedColor);
	--_ui5_tc_headerItemContent_border_bg: transparent;
	--_ui5_tc_headerItem_neutral_border_bg: transparent;
	--_ui5_tc_headerItem_positive_border_bg: transparent;
	--_ui5_tc_headerItem_negative_border_bg: transparent;
	--_ui5_tc_headerItem_critical_border_bg: transparent;
	--_ui5_tc_headerItemContent_border_height: 0;
	--_ui5_tc_headerItemContent_focus_offset: 1rem;
	--_ui5_tc_headerItem_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_tc_headerItem_text_focus_border_offset_left: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_right: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_top: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_bottom: 0px;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_left: 0.75rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_right: 	0.625rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_top: 0.75rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_bottom: 0.75rem;
	--_ui5_tc_headerItemContent_focus_border: none;
	--_ui5_tc_headerItemContent_default_focus_border: none;
	--_ui5_tc_headerItemContent_focus_border_radius: 0;
	--_ui5_tc_headerItemSemanticIcon_display: none;
	--_ui5_tc_headerItemSemanticIcon_size: 0.75rem;
	--_ui5_tc_headerItem_focus_border_radius: 0px;
	--_ui5_tc_mixedMode_itemText_color: var(--sapContent_LabelColor);
	--_ui5_tc_mixedMode_itemText_font_family: var(--sapFontFamily);
	--_ui5_tc_mixedMode_itemText_font_size:  var(--sapFontSmallSize);
	--_ui5_tc_mixedMode_itemText_font_weight: normal;
	--_ui5_tc_headerItem_expand_button_margin_inline_start: 0.625rem;
	--_ui5_tc_headerItem_single_click_expand_button_margin_inline_start: 0.875rem;
	--_ui5_tc_headerItem_expand_button_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_tc_headerItem_expand_button_separator_display: none;

	/* Overflow Item */

	--_ui5_tc_overflowItem_positive_color: var(--sapPositiveColor);
	--_ui5_tc_overflowItem_negative_color: var(--sapNegativeColor);
	--_ui5_tc_overflowItem_critical_color: var(--sapCriticalColor);
	--_ui5_tc_overflowItem_focus_offset: 0.125rem;
	--_ui5_tc_overflowItem_extraIndent: 0rem;

	/* Header Item icons */
	--_ui5_tc_headerItemIcon_border: 1px solid var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_color: var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_selected_background: var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_selected_color: var(--sapGroup_ContentBackground);
	--_ui5_tc_headerItemIcon_positive_selected_background: var(--sapPositiveColor);
	--_ui5_tc_headerItemIcon_negative_selected_background: var(--sapNegativeColor);
	--_ui5_tc_headerItemIcon_critical_selected_background: var(--sapCriticalColor);
	--_ui5_tc_headerItemIcon_neutral_selected_background: var(--sapNeutralColor);
	--_ui5_tc_headerItemIcon_semantic_selected_color: var(--sapGroup_ContentBackground);
	--_ui5_tc_headerItemIcon_background_color: transparent;

	--_ui5_tc_overflowItem_default_color: var(--sapNeutralTextColor);
	--_ui5_tc_overflowItem_current_color: CurrentColor;
	--_ui5_tc_content_border_bottom: 0.125rem solid var(--sapObjectHeader_BorderColor);

	--_ui5_tc_headerItem_focus_border_offset: -2px;
	--_ui5_tc_headerItemIcon_focus_border_radius: 0;

	/* Overflow Buttons*/
	--_ui5_tc_overflow_text_color: var(--sapButton_TextColor);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
}

:root [_ui5host] {
	--_ui5_tc_header_border_bottom: 0.0625rem solid var(--sapObjectHeader_Background);

	/* Header Item */
	--_ui5_tc_headerItemContent_border_bottom: 0.1875rem solid var(--sapSelectedColor);

	--_ui5_tc_overflowItem_default_color: var(--sapNeutralTextColor);
	--_ui5_tc_overflowItem_current_color: CurrentColor;
	--_ui5_tc_content_border_bottom: 0.0625rem solid var(--sapObjectHeader_BorderColor);
	--_ui5_tc_headerItem_text_hover_color: #1a1c1f;
}

:root [_ui5host] {
	--_ui5_textarea_state_border_width: 0.125rem;
	--_ui5_textarea_information_border_width: 0.125rem;
	--_ui5_textarea_placeholder_font_style: italic;
	--_ui5_textarea_value_state_error_warning_placeholder_font_weight: normal;
	--_ui5_textarea_error_placeholder_font_style: italic;
	--_ui5_textarea_error_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_textarea_error_hover_background_color: var(--sapField_Hover_Background);
	--_ui5_textarea_hover_border: var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_Hover_BorderColor);
	--_ui5_textarea_error_warning_border_style: solid;
	--_ui5_textarea_disabled_opacity: 0.4;
	--_ui5_textarea_line_height: 1.4;
	--_ui5_textarea_focus_pseudo_element_content: '';
	--_ui5_textarea_focused_value_state_error_background: var(--sapField_InvalidBackground);
	--_ui5_textarea_focused_value_state_warning_background: var(--sapField_WarningBackground);
	--_ui5_textarea_focused_value_state_success_background: var(--sapField_SuccessBackground);
	--_ui5_textarea_focused_value_state_information_background: var(--sapField_InformationBackground);
	--_ui5_textarea_focused_value_state_error_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focused_value_state_warning_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focused_value_state_success_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focus_offset: 1px;
	--_ui5_textarea_readonly_focus_offset: 1px;
	--_ui5_textarea_value_state_focus_offset: 1px;
	--_ui5_textarea_focus_outline_color: var(--sapContent_FocusColor);
	--__ui5_textarea_min_height: 2.25rem;
	--_ui5_textarea_padding_right_and_left: 0.5625rem;
	--_ui5_textarea_padding_right_and_left_error_warning: 0.5rem;
	--_ui5_textarea_padding_right_and_left_information: 0.5rem;
	--_ui5_textarea_padding_right_and_left_readonly: 0.5625rem;
	--_ui5_textarea_padding_top: 0.4375rem;
	--_ui5_textarea_padding_bottom: 0.4375rem;
	--_ui5_textarea_padding_top_readonly: 0.4375rem;
	--_ui5_textarea_padding_bottom_readonly:0.4375rem;
	--_ui5_textarea_padding_top_error_warning: 0.375rem;
	--_ui5_textarea_padding_bottom_error_warning: 0.375rem;
	--_ui5_textarea_padding_top_information: 0.375rem;
	--_ui5_textarea_padding_bottom_information: 0.375rem;
	--_ui5_textarea_margin: 0.25rem 0;
	--_ui5_textarea_exceeded_text_height: 1rem;
	--_ui5_textarea_readonly_border_style: var(--sapField_BorderStyle);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_textarea_padding_right_and_left: 0.4375rem;
	--_ui5_textarea_padding_right_and_left_error_warning: 0.375rem;
	--_ui5_textarea_padding_right_and_left_information: 0.375rem;
	--_ui5_textarea_padding_right_and_left_readonly: 0.4375rem;
	--_ui5_textarea_padding_top: 0.125rem;
	--_ui5_textarea_padding_bottom: 0.125rem;
	--_ui5_textarea_padding_top_readonly: 0.125rem;
	--_ui5_textarea_padding_bottom_readonly: 0.125rem;
	--_ui5_textarea_padding_top_error_warning: 0.0625rem;
	--_ui5_textarea_padding_bottom_error_warning: 0.0625rem;
	--_ui5_textarea_padding_top_information: 0.0625rem;
	--_ui5_textarea_padding_bottom_information: 0.0625rem;
	--_ui5_textarea_exceeded_text_height: 0.375rem;
	--_ui5_textarea_margin: 0.1875rem 0;
	--__ui5_textarea_min_height: 1.625rem;
}

:root [_ui5host] {
	--_ui5_time_picker_border: 0.0625rem solid transparent;
	--_ui5-time_picker_border_radius: 0;
}

:root [_ui5host] {
	--_ui5_time_picker_border: 0.0625rem solid transparent;
}

:root [_ui5host] {
	--_ui5_toast_vertical_offset: 3rem;
	--_ui5_toast_horizontal_offset: 2rem;
	--_ui5_toast_background: var(--sapList_Background);
	--_ui5_toast_shadow: var(--sapContent_Shadow2);
}

:root [_ui5host]{
	--_ui5_wheelslider_item_text_size: var(--sapFontSize);
	--_ui5_wheelslider_selected_item_hover_background_color: var(--sapList_BorderColor);
	--_ui5_wheelslider_label_text_size: var(--sapFontSmallSize);
	--_ui5_wheelslider_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 2);
	--_ui5_wheelslider_mobile_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 4);
	--_ui5_wheelslider_label_text_color: var(--sapContent_LabelColor);
	--_ui5_wheelslider_height: 240px;
	--_ui5_wheelslider_mobile_height: 432px;
	--_ui5_wheelslider_item_width: 48px;
	--_ui5_wheelslider_item_height: 46px;
	--_ui5_wheelslider_arrows_visibility: hidden;
	--_ui_wheelslider_item_hover_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui_wheelslider_item_expanded_hover_color: var(--sapList_Hover_Background);
}

:root [_ui5host]{
	--_ui5_wheelslider_item_background_color: var(--sapLegend_WorkingBackground);
	--_ui5_wheelslider_item_text_color: var(--sapTextColor);
	--_ui_wheelslider_item_hover_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui5_wheelslider_item_border_color: var(--sapList_Background);
	--_ui5_wheelslider_item_hovered_border_color: var(--sapList_Background);
	--_ui5_wheelslider_collapsed_item_text_color: var(--_ui5_wheelslider_item_border_color);
	--_ui5_wheelslider_selected_item_background_color: var(--sapContent_Selected_Background);
	--_ui5_wheelslider_selected_item_hover_background_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui5_wheelslider_active_item_background_color:var(--sapContent_Selected_Background);
	--_ui5_wheelslider_active_item_text_color: var(--sapContent_Selected_TextColor);
	--_ui5_wheelslider_selection_frame_color: var(--sapList_SelectionBorderColor);
	--_ui_wheelslider_item_border_radius: var(--_ui5_button_border_radius);
}

:root [_ui5host] {
	--_ui5_toggle_button_pressed_focussed: var(--sapButton_Selected_BorderColor);
	--_ui5_toggle_button_pressed_focussed_hovered: var(--sapButton_Selected_BorderColor);
	--_ui5_toggle_button_selected_positive_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_selected_negative_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_selected_attention_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_emphasized_pressed_focussed_hovered: var(--sapContent_FocusColor);
	--_ui5_toggle_button_emphasized_text_shadow: none;
}

:root [_ui5host] {
	--_ui5_yearpicker_item_selected_focus: var(--sapContent_Selected_Background);
	--_ui5_yearpicker_item_selected_hover_color: var(--sapContent_Selected_Background);
	--_ui5_yearpicker_item_border: none;
	--_ui5_yearpicker_item_border_radius: 0;
	--_ui5_yearpicker_item_margin: 1px;
	--_ui5_yearpicker_item_focus_after_width: calc(100% - 0.375rem);
	--_ui5_yearpicker_item_focus_after_height: calc(100% - 0.375rem);
	--_ui5_yearpicker_item_focus_after_border: 1px dotted var(--sapContent_FocusColor);
	--_ui5_yearpicker_item_focus_after_offset: 2px;
	--_ui5_yearpicker_item_focus_after_border_radius: 0;
	--_ui5_yearpicker_item_selected_background_color: var(--sapSelectedColor);
	--_ui5_yearpicker_item_selected_text_color: var(--sapContent_ContrastTextColor);
	--_ui5_yearpicker_item_selected_box_shadow: none;
	--_ui5_yearpicker_item_focus_after_outline: none;
}

:root [_ui5host] {
	--_ui5_yearpicker_item_border_radius: 0.25rem;
}

:root [_ui5host] {
	--_ui5_calendar_header_arrow_button_border: none;
	--_ui5_calendar_header_arrow_button_border_radius: 0.25rem;
	--_ui5_calendar_header_middle_button_width: 6.25rem;
	--_ui5_calendar_header_middle_button_flex: 1 1 auto;
	--_ui5_calendar_header_middle_button_focus_border_radius: 0.25rem;
	--_ui5_calendar_header_middle_button_focus_border: none;
	--_ui5_calendar_header_middle_button_focus_after_display: block;
	--_ui5_calendar_header_middle_button_focus_after_width: calc(100% - 0.25rem);
	--_ui5_calendar_header_middle_button_focus_after_height: calc(100% - 0.25rem);
	--_ui5_calendar_header_middle_button_focus_after_top_offset: 1px;
	--_ui5_calendar_header_middle_button_focus_after_left_offset: 1px;
	--_ui5_calendar_header_button_background_color: none;
	--_ui5_calendar_header_arrow_button_box_shadow: none;
	--_ui5_calendar_header_middle_button_focus_background: transparent;
	--_ui5_calendar_header_middle_button_focus_outline: none;
	--_ui5_calendar_header_middle_button_focus_active_outline: none;
	--_ui5_calendar_header_middle_button_focus_active_background: var(--sapButton_Active_Background);
	--_ui5_calendar_header_middle_button_focus_after_border: 1px dotted var(--sapContent_FocusColor);
}

:root [_ui5host] {
	--_ui5_calendar_header_middle_button_focus_after_width: calc(100% - 0.375rem);
	--_ui5_calendar_header_middle_button_focus_after_height: calc(100% - 0.375rem);
	--_ui5_calendar_header_middle_button_focus_after_top_offset: 0.125rem;
	--_ui5_calendar_header_middle_button_focus_after_left_offset: 0.125rem;
}

:root [_ui5host] {
	--ui5_table_bottom_border: 1px solid var(--sapList_BorderColor);
	--ui5_table_header_row_outline_width: 1px;
	--ui5_table_multiselect_column_width: 2.75rem;
	--ui5_table_header_row_font_weight: normal;
	--ui5_table_header_row_border_bottom_color: var(--sapList_BorderColor);
	--ui5_table_header_row_border_width: 1px;
	--_ui5_table_load_more_border-bottom: none;
}

:root [_ui5host] {
	--ui5_table_header_row_font_weight: normal;
}

:root [_ui5host] {
	--ui5_table_row_outline_width: 1px;
}

:root [_ui5host] {
	--ui5_table_group_row_font-weight: normal;
	--ui5_table_border_width: 0 0 1px 0;
}

:root [_ui5host] {
	--_ui5_load_more_padding: 0;
	--_ui5_load_more_border: 1px top solid transparent;
	--_ui5_load_more_border_radius: none;
	--_ui5_load_more_outline_width: 1px;
}

:root [_ui5host] {
	--_ui5_token_background: var(--sapButton_TokenBackground);
	--_ui5_token_readonly_background: var(--sapButton_TokenBackground);
	--_ui5_token_readonly_color: var(--sapContent_LabelColor);
	--_ui5_token_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_token_focus_outline_width: 0.0625rem;
	--_ui5_token_outline_offset: -0.125rem;
	--_ui5_token_text_color: var(--sapButton_TextColor);
	--_ui5_token_hover_border_color: var(--sapButton_Hover_BorderColor);
	--_ui5_token_right_margin: 0.3125rem;
	--_ui5_token_padding: 0.25rem 0;
	--_ui5_token_left_padding: 0.3125rem;
	--_ui5_token_readonly_padding: 0.25rem 0.375rem;
	--_ui5_token_selected_focus_outline: var(--_ui5_token_focus_outline_width) dotted var(--sapContent_ContrastFocusColor);
	--_ui5_token_focus_outline: var(--_ui5_token_focus_outline_width) dotted var(--sapContent_FocusColor);
	--_ui5_token_selected_hover_border_color: var(--sapButton_Selected_Hover_BorderColor);
	--_ui5_token_focused_selected_border: 1px solid var(--sapButton_Selected_BorderColor);
	--ui5_token_focus_pseudo_element_content: none;
	--_ui5_token_focus_offset: -0.25rem;
	--_ui5_token_selected_text_font_family: "72override", var(--sapFontFamily);
	--_ui5_token_selected_internal_border_bottom: none;
	--_ui5_token_selected_internal_border_bottom_radius: 0;
	--_ui5_token_text_icon_top: 0;
	--_ui5_token_selected_focused_offset_bottom: var(--_ui5_token_focus_offset);
}

:root [_ui5host] {
	--_ui5_token_focus_outline_width: 0.0625rem;
	--_ui5_token_text_color: var(--sapTextColor);
}

:root [_ui5host] {
	--_ui5_tokenizer_padding: 0.3125rem;
	--_ui5_tokenizer_n_more_text_color: var(--sapField_TextColor);
	--_ui5_tokenizer-popover_offset: .3125rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_tokenizer-popover_offset: .1875rem;
}

:root [_ui5host] {
	--_ui5-tree-item-minimal-background: var(--sapList_SelectionBackgroundColor);
	--_ui5-tree-item-minimal-children-indicator-display: initial;
}

:root [_ui5host] {
	--_ui5_value_state_message_border: none;
	--_ui5_value_state_header_border: none;
	--_ui5_input_value_state_icon_display: none;
	--_ui5_value_state_message_padding: 0.5rem;
	--_ui5_value_state_header_padding: .5625rem 1rem;
	--_ui5_value_state_message_popover_box_shadow: none;
	--_ui5_value_state_message_icon_width: .875rem;
	--_ui5_value_state_message_icon_height: .875rem;
	--_ui5_input_value_state_icon_offset: .5rem;
	--_ui5_value_state_header_offset: -0.125rem;
	--_ui5_value_state_message_popover_border_radius: 0;
}

:root [_ui5host] {
	--_ui5-multi_combobox_token_margin_top: 3px;
}

:root [_ui5host] {
	--_ui5-multi_combobox_token_margin_top: 1px;
}

:root [_ui5host] {\r
	--_ui5_slider_progress_container_background: var(--sapField_BorderColor);\r
	--_ui5_slider_progress_container_dot_display: none;\r
	--_ui5_slider_progress_container_dot_background: var(--sapField_BorderColor);\r
	--_ui5_slider_progress_border: none;\r
	--_ui5_slider_padding: 1.406rem 1.0625rem;\r
	--_ui5_slider_inner_height: 0.25rem;\r
	--_ui5_slider_outer_height: 1.6875rem;\r
	--_ui5_slider_progress_border_radius: 0.25rem;\r
	--_ui5_slider_progress_background: var(--sapActiveColor);\r
	--_ui5_slider_handle_icon_display: none;\r
	--_ui5_range_slider_root_hover_handle_icon_display: none;\r
	--_ui5_slider_handle_height: 1.625rem;\r
	--_ui5_slider_handle_width: 1.625rem;\r
	--_ui5_slider_handle_border: solid 0.125rem var(--sapField_BorderColor);\r
	--_ui5_slider_handle_border_radius: 1rem;\r
	--_ui5_slider_handle_box_shadow: none;\r
	--_ui5_slider_handle_box_shadow_focus: none;\r
	--_ui5_slider_handle_background: var(--sapButton_Background);\r
	--_ui5_range_slider_handle_background: #FFF;\r
	--_ui5_slider_handle_top: -0.825rem;\r
	--_ui5_slider_tickmark_bg: var(--sapField_BorderColor);\r
	--_ui5_slider_tickmark_in_range_bg: var(--sapButton_Active_Background);\r
	--_ui5_slider_handle_margin_left: calc(-1 * (var(--_ui5_slider_handle_width) / 2));\r
	--_ui5_slider_handle_hover_background: var(--sapButton_Hover_Background);\r
	--_ui5_slider_handle_hover_border: 0.125rem solid var(--sapButton_Hover_BorderColor);\r
	--_ui5_slider_handle_outline: 0.0625rem dotted var(--sapContent_FocusColor);\r
	--_ui5_slider_handle_focus_border: var(--_ui5_slider_handle_hover_border);\r
	--_ui5_slider_handle_active_border: var(--_ui5_slider_handle_hover_border);\r
	--_ui5_slider_handle_focused_top: var(--_ui5_slider_handle_top);\r
	--_ui5_slider_handle_focused_margin_left: var(--_ui5_slider_handle_margin_left);\r
	--_ui5_slider_handle_outline_offset: 0.075rem;\r
	--_ui5_slider_icon_left: 0.5rem;\r
	--_ui5_slider_icon_top: 0.125rem;\r
	--_ui5_range_slider_handle_hover_background: rgba(var(--sapButton_Background), 0.25);\r
	--_ui5_range_slider_handle_hover_icon_display: none;\r
	--_ui5_slider_progress_outline: 0.0625rem dotted var(--sapContent_FocusColor);\r
	--_ui5_slider_progress_outline_offset: -0.8125rem;\r
	--_ui5_slider_tickmark_top: -0.375rem;\r
	--_ui5_slider_disabled_opacity: 0.4;\r
	--_ui5_slider_tooltip_fontsize: var(--sapFontSmallSize);\r
	--_ui5_slider_tooltip_color: var(--sapContent_LabelColor);\r
	--_ui5_slider_tooltip_background: var(--sapField_Background);\r
	--_ui5_slider_tooltip_border_radius: var(--sapElement_BorderCornerRadius);\r
	--_ui5_slider_tooltip_border_color: var(--sapField_BorderColor);\r
	--_ui5_slider_tooltip_border: 0.0625rem solid var(--_ui5_slider_tooltip_border_color);\r
	--_ui5_slider_tooltip_box_shadow: none;\r
	--_ui5_slider_tooltip_padding: 0.4125rem;\r
	--_ui5_slider_tooltip_height: 1rem;\r
	--_ui5_slider_tooltip_min_width: 2rem;\r
	--_ui5_slider_tooltip_bottom: 2rem;\r
	--_ui5_slider_label_fontsize: var(--sapFontSmallSize);\r
	--_ui5_slider_label_color: var(--sapContent_LabelColor);\r
	--_ui5_range_slider_progress_focus_display: none;\r
	--_ui5_range_slider_progress_focus_top: -1.063rem;\r
	--_ui5_range_slider_progress_focus_left: -1.438rem;\r
	--_ui5_range_slider_progress_focus_padding: 0 1.375rem 0 1.438rem;\r
	--_ui5_range_slider_progress_focus_height: 2rem;\r
	--_ui5_range_slider_legacy_progress_focus_display: block;\r
	--_ui5_slider_handle_focus_width: 0;\r
	--_ui5_slider_start_end_point_size: .375rem;\r
	--_ui5_slider_start_end_point_left: -0.875rem;\r
	--_ui5_slider_start_end_point_top: -.1875rem;\r
	--_ui5_slider_handle_hover_box_shadow: none;\r
	--_ui5_slider_handle_background_focus: var(--_ui5_slider_handle_background);\r
	--_ui5_slider_handle_active_box_shadow: none;\r
	--_ui5_slider_handle_focused_tooltip_distance: var(--_ui5_slider_tooltip_bottom);\r
	--_ui5_slider_handle_box_sizing: content-box;\r
	--_ui5_slider_tooltip_border_box: content-box;\r
	--_ui5_range_slider_handle_active_background: var(--_ui5_range_slider_handle_background);\r
	--_ui5_range_slider_active_handle_icon_display: none;\r
	--_ui5_range_slider_handle_background_focus: transparent;\r
	--_ui5_range_slider_progress_focus_width: 100%;\r
	--_ui5_range_slider_root_active_handle_icon_display: none;\r
	--_ui5_slider_tickmark_height: 1rem;\r
	--_ui5_slider_tickmark_top: -.3125rem;\r
	--_ui5_slider_progress_box_sizing: content-box;\r
	--_ui5_slider_tickmark_in_range_bg: var(--sapField_BorderColor);\r
	--_ui5_range_slider_focus_outline_width: 100%;\r
	--_ui5_slider_progress_outline_offset_left: 0;\r
	--_ui5_range_slider_focus_outline_radius: 0;\r
\r
	--_ui5_slider_progress_container_top: 0;\r
	--_ui5_slider_progress_height: 100%;\r
	--_ui5_slider_active_progress_border: none;\r
	--_ui5_slider_active_progress_left: 0;\r
	--_ui5_slider_active_progress_top: 0;\r
\r
	--_ui5_slider_no_tickmarks_progress_container_top: var(--_ui5_slider_progress_container_top);\r
	--_ui5_slider_no_tickmarks_progress_height: var(--_ui5_slider_progress_height);\r
	--_ui5_slider_no_tickmarks_active_progress_border: var(--_ui5_slider_active_progress_border);\r
	--_ui5_slider_no_tickmarks_active_progress_left: var(--_ui5_slider_active_progress_left);\r
	--_ui5_slider_no_tickmarks_active_progress_top: var(--_ui5_slider_active_progress_top);\r
	--_ui5_slider_handle_focus_visibility: none;\r
	--_ui5_slider_handle_icon_size: 1rem;\r
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],\r
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],\r
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {\r
	--_ui5_slider_handle_focused_top: -0.625rem;\r
	--_ui5_slider_handle_focused_margin_left: -0.75rem;\r
	--_ui5_slider_handle_icon_size: .875rem;\r
	--_ui5_slider_padding: 1rem 1.0625rem;\r
}

:root [_ui5host] {
	--_ui5_slider_inner_min_width: 4rem;
	--_ui5_slider_handle_background_focus: var(--sapButton_Background);
	--_ui5_range_slider_handle_background_focus: transparent;
	--_ui5_slider_handle_top: -.875rem;
	--_ui5_range_slider_handle_background: transparent;
	--_ui5_range_slider_handle_active_background: transparent;
	--_ui5_slider_handle_background: var(--sapButton_Background);
	--_ui5_slider_handle_hover_background: var(--sapButton_Hover_Background);
	--_ui5_range_slider_root_hover_handle_bg: transparent;
	--_ui5_range_slider_root_active_handle_icon_display: none;
	--_ui5_slider_handle_width: 1.875rem;
	--_ui5_slider_handle_height: 1.875rem;
	--_ui5_slider_handle_box_sizing: border-box;
	--_ui5_slider_tickmark_top: -.34375rem;
}

:root [_ui5host] {
	--_ui5_step_input_input_error_background_color: var(--sapField_InvalidBackground);
	--_ui5-step_input_button_state_hover_background_color: var(--sapField_Background);
	--_ui5_step_input_border_style: 1px solid var(--sapField_BorderColor);
	--_ui5_step_input_border_style_hover: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_step_input_button_background_color:var(--sapField_Background);
	--_ui5_step_input_input_border: 1px solid transparent;
	--_ui5_step_input_input_margin_top: -0.0625rem;
	--_ui5_step_input_button_display: inline-block;
	--_ui5_step_input_button_left: 0;
	--_ui5_step_input_button_right: 0;
	--_ui5_step_input_input_border_focused_after: var(--_ui5_input_focus_border_width) dotted var(--sapContent_FocusColor);
	--_ui5_step_input_input_border_top_bottom_focused_after: 0.0625rem;
	--_ui5_step_input_input_border_radius_focused_after: 0;
	--_ui5_step_input_input_information_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_warning_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_success_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_error_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_disabled_button_background: var(--sapField_ReadOnly_Background);
	--_ui5_step_input_border_color_hover: var(--sapField_Hover_Background);
	--_ui5_step_input_border_hover: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_input_input_background_color: var(--sapField_InvalidBackground);
	--_ui5_step_input_min_width: 7.25rem;
	--_ui5_step_input_padding: 2.5rem;
}

:root [_ui5host] {
	/* Calendar */
	--_ui5_calendar_height: 24.5rem;
	--_ui5_calendar_width: 20rem;
	--_ui5_calendar_padding: 1rem;
	--_ui5_calendar_left_right_padding:  0.5rem;
	--_ui5_calendar_top_bottom_padding: 1rem;
	--_ui5_calendar_header_height: 3rem;
	--_ui5_calendar_header_arrow_button_width: 2.5rem;
	--_ui5_calendar_header_padding: 0.25rem 0;

	--_ui5_checkbox_root_side_padding: .6875rem;
	--_ui5_checkbox_icon_size: 1rem;
	--_ui5_checkbox_partially_icon_size: .75rem;
	--_ui5_custom_list_item_rb_min_width: 2.75rem;
	--_ui5_day_picker_item_width: 2.25rem;
	--_ui5_day_picker_item_height: 2.875rem;
	--_ui5_day_picker_empty_height: 3rem;
	--_ui5_day_picker_item_justify_content: space-between;
	--_ui5_dp_two_calendar_item_now_text_padding_top: 0.387rem;
    --_ui5_dp_two_calendar_item_primary_text_height: 1.8125rem;
    --_ui5_dp_two_calendar_item_secondary_text_height: 1rem;
	--_ui5_dp_two_calendar_item_text_padding_top: 0.575rem;

	/* ColorPalette */
	 --_ui5_color-palette-item-height: 1.75rem;
	 --_ui5_color-palette-item-hover-height: 2.375rem;
	 --_ui5_color-palette-item-margin: calc((var(--_ui5_color-palette-item-hover-height) - var(--_ui5_color-palette-item-height)) / 2);
	 --_ui5_color-palette-row-width: 12rem;
	 --_ui5_color-palette-swatch-container-padding: 0.3125rem 0.6875rem;

	 /* DateTimePicker */
	--_ui5_datetime_picker_width: 40.0625rem;
	--_ui5_datetime_picker_height: 25rem;
	--_ui5_datetime_timeview_width: 17rem;
	--_ui5_datetime_timeview_phonemode_width: 19.5rem;
	--_ui5_datetime_timeview_padding: 1rem;

	/* Dialog */
	--_ui5_dialog_content_min_height: 2.75rem;
	--_ui5_dialog_footer_height: 2.75rem;

	--_ui5_input_inner_padding: 0 0.625rem;
	--_ui5_input_inner_padding_with_icon: 0 0.25rem 0 0.625rem;
	--_ui5_input_inner_space_to_tokenizer: 0.125rem;
	--_ui5_input_inner_space_to_n_more_text: 0.1875rem;
	--_ui5_input_value_state_icon_padding: var(--_ui5-input-icon-padding);
	--_ui5_list_no_data_height: 3rem;
	--_ui5_list_item_cb_margin_right: 0;
	--_ui5_list_item_title_size: var(--sapFontLargeSize);
	--_ui5_list_no_data_font_size: var(--sapFontLargeSize);
	--_ui5_list_item_img_size: 3rem;
	--_ui5_list_item_img_top_margin: 0.5rem;
	--_ui5_list_item_img_bottom_margin: 0.5rem;
	--_ui5_list_item_img_hn_margin: 0.75rem;
	--_ui5_list_item_dropdown_base_height: 2.5rem;
	--_ui5_list_item_base_height: 2.75rem;
	--_ui5_list_item_icon_size: 1.125rem;
	--_ui5_list_item_icon_padding-inline-end: 0.5rem;
	--_ui5_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5_checkbox_wrapper_padding));
	--_ui5_list_item_content_vertical_offset: calc((var(--_ui5_list_item_base_height) - var(--_ui5_list_item_title_size)) / 2);
	--_ui5_group_header_list_item_height: 2.75rem;
	--_ui5_list_busy_row_height: 3rem;
	--_ui5_month_picker_item_height: 3rem;
	--_ui5_list_buttons_left_space: 0.125rem;

	/* Popup subclasses */
	--_ui5_popup_default_header_height: 2.75rem;

	/* Notifications */
	--_ui5-notification-overflow-popover-padding: 0.25rem 0.5rem;

	--_ui5_year_picker_item_height: 3rem;
	--_ui5_tokenizer_padding: 0.25rem;
	--_ui5_token_height: 1.625rem;
	--_ui5_token_icon_size: .75rem;
	--_ui5_token_icon_padding: 0.25rem 0.5rem;
	--_ui5_token_wrapper_right_padding: 0.3125rem;
	--_ui5_token_wrapper_left_padding: 0;
	--_ui5_tl_bubble_padding: 1rem;
	--_ui5_tl_indicator_before_bottom: -1.625rem;
	--_ui5_tl_padding: 1rem 1rem 1rem .5rem;
	--_ui5_tl_li_margin_bottom: 1.625rem;

	/*switch*/
	--_ui5_switch_focus_width_size_horizon_exp: calc(100% + 4px);
	--_ui5_switch_focus_height_size_horizon_exp: calc(100% + 4px);

	--_ui5_tc_item_text: 3rem;
	--_ui5_tc_item_height: 4.75rem;
	--_ui5_tc_item_text_only_height: 2.75rem;
	--_ui5_tc_item_text_only_with_additional_text_height: 3.75rem;
	--_ui5_tc_item_text_line_height: 1.325rem;
	--_ui5_tc_item_icon_circle_size: 2.75rem;
	--_ui5_tc_item_icon_size: 1.25rem;
	--_ui5_tc_item_add_text_margin_top: 0.375rem;

	/* TextArea */
	--_ui5_textarea_margin: .25rem 0;

	/* Panel */
	--_ui5_panel_header_height: 2.75rem;

	/* Radio Button */
	--_ui5_radio_button_height: 2.75rem;
	--_ui5_radio_button_label_side_padding: .875rem;
	--_ui5_radio_button_focus_dist: .5rem;
	--_ui5_radio_button_inner_size: 2.75rem;
	--_ui5_radio_button_svg_size: 1.375rem;
	--_ui5_radio_button_label_width: calc(100% - 2.75rem);
	--_ui5_radio_button_outer_ring_padding_with_label: 0 0.6875rem;

	/* Responsive Popover */
	--_ui5-responsive_popover_header_height: 2.75rem;

	/* Side Navigation */
	--ui5_side_navigation_item_height: 2.75rem;

	/* Table */

	--_ui5_load_more_text_height: 2.75rem;
	--_ui5_load_more_text_font_size: var(--sapFontMediumSize);
	--_ui5_load_more_desc_padding:  0.375rem 2rem 0.875rem 2rem;
	--ui5_table_header_row_height: 2.75rem;
	--ui5_table_row_height: 2.75rem;
	--ui5_table_focus_outline_offset: -0.125rem;
	--ui5_table_group_row_height: 2rem;

	/* Tree */
	--_ui5-tree-indent-step: 1.5rem;
	--_ui5-tree-toggle-box-width: 2.75rem;
	--_ui5-tree-toggle-box-height: 2.25rem;
	--_ui5-tree-toggle-icon-size: 1.0625rem;

	/* Timeline */
	--_ui5_timeline_tli_indicator_before_bottom: -1.625rem;
	--_ui5_timeline_tli_indicator_before_right: -1.625rem;
	--_ui5_timeline_tli_indicator_before_without_icon_bottom: -1.875rem;
	--_ui5_timeline_tli_indicator_before_without_icon_right: -1.9375rem;

	/* SegmentedButton */
	--_ui5_segmented_btn_border_radius: 0.375rem;

	/* SplitButton */
	--_ui5_split_button_middle_separator_top: 0;
	--_ui5_split_button_middle_separator_height: 2.25rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_button_base_height: 1.625rem;
	--_ui5_button_base_padding: 0.4375rem;
	--_ui5_button_base_min_width: 2rem;
	--_ui5_button_icon_font_size: 1rem;

	/* Calendar */
	--_ui5_calendar_height: 18rem;
	--_ui5_calendar_width: 17.75rem;
	--_ui5_calendar_left_right_padding: 0.25rem;
	--_ui5_calendar_top_bottom_padding: 0.5rem;
	--_ui5_calendar_header_height: 2rem;
	--_ui5_calendar_header_arrow_button_width: 2rem;
	--_ui5_calendar_header_padding: 0;

	/* CheckBox */
	--_ui5_checkbox_root_side_padding: var(--_ui5_checkbox_wrapped_focus_padding);
	--_ui5_checkbox_wrapped_content_margin_top: var(--_ui5_checkbox_compact_wrapped_label_margin_top);
	--_ui5_checkbox_wrapped_focus_left_top_bottom_position: var(--_ui5_checkbox_compact_focus_position);
	--_ui5_checkbox_width_height: var(--_ui5_checkbox_compact_width_height);
	--_ui5_checkbox_wrapper_padding: var(--_ui5_checkbox_compact_wrapper_padding);
	--_ui5_checkbox_focus_position: var(--_ui5_checkbox_compact_focus_position);
	--_ui5_checkbox_inner_width_height: var(--_ui5_checkbox_compact_inner_size);
	--_ui5_checkbox_icon_size: .75rem;
	--_ui5_checkbox_partially_icon_size: .5rem;

	/* ColorPalette */
	--_ui5_color-palette-item-height: 1.25rem;
	--_ui5_color-palette-item-focus-height: 1rem;
	--_ui5_color-palette-item-container-sides-padding: 0.1875rem;
	--_ui5_color-palette-item-container-rows-padding: 0.8125rem;
	--_ui5_color-palette-item-hover-height: 1.625rem;
	--_ui5_color-palette-item-margin: calc((var(--_ui5_color-palette-item-hover-height) - var(--_ui5_color-palette-item-height)) / 2);
	--_ui5_color-palette-row-width: 8.125rem;
	--_ui5_color-palette-swatch-container-padding: 0.1875rem 0.8125rem;
	--_ui5_color-palette-item-hover-margin: 0;
	--_ui5_color-palette-row-height: 7.5rem;
	--_ui5_color-palette-button-height: 2rem;
	--_ui5_color_picker_slider_container_margin_top: -4px;

	/* Custom List Item */
	--_ui5_custom_list_item_rb_min_width: 2rem;

	/* DayPicker */
	--_ui5_daypicker_weeknumbers_container_padding_top: 2rem;
	--_ui5_day_picker_item_width: 2rem;
	--_ui5_day_picker_item_height: 2rem;
	--_ui5_day_picker_empty_height: 2.125rem;
	--_ui5_day_picker_item_justify_content: flex-end;
	--_ui5_dp_two_calendar_item_now_text_padding_top: 0rem;
    --_ui5_dp_two_calendar_item_primary_text_height: 1rem;
    --_ui5_dp_two_calendar_item_secondary_text_height: 0.75rem;
	--_ui5_dp_two_calendar_item_text_padding_top: 0;

	/* DateTimePicker */
	--_ui5_datetime_picker_height: 17rem;
	--_ui5_datetime_picker_width: 34.0625rem;
	--_ui5_datetime_timeview_width: 17rem;
	--_ui5_datetime_timeview_phonemode_width: 18.5rem;
	--_ui5_datetime_timeview_padding: 0.5rem;

	/* Dialog */
	--_ui5_dialog_content_min_height: 2.5rem;
	--_ui5_dialog_footer_height: 2.5rem;

	/* Input */
	--_ui5_input_height: var(--sapElement_Compact_Height);
	--_ui5_input_inner_padding: 0 0.5rem;
	--_ui5_input_inner_padding_with_icon: 0 0.2rem 0 0.5rem;
	--_ui5_input_inner_space_to_tokenizer: 0.125rem;
	--_ui5_input_inner_space_to_n_more_text: 0.125rem;
	--_ui5_input_icon_min_width: var(--_ui5_input_compact_min_width);
	--_ui5_input_icon_padding: .25rem .4375rem;
	--_ui5_input_error_warning_icon_padding: .1875rem .375rem .1875rem .4375rem;
	--_ui5_input_information_icon_padding: .1875rem .375rem .1875rem .4375rem;
	--_ui5_input_custom_icon_padding: .25rem .5rem;
	--_ui5_input_error_warning_custom_icon_padding: .1875rem .5rem;
	--_ui5_input_information_custom_icon_padding: .1875rem .5rem;
	--_ui5_input_value_state_icon_padding: .1875rem .5rem;

	/* Menu */
	--_ui5_menu_item_padding: 0 0.75rem 0 0.5rem;
	--_ui5_menu_item_submenu_icon_right: 0.75rem;

	/* Notifications */
	--_ui5-notification-overflow-popover-padding: 0.25rem 0.5rem;

	/* Popup subclasses */
	--_ui5_popup_default_header_height: 2.5rem;

	/* TextArea */
	--_ui5_textarea_margin: .1875rem 0;

	/* List */
	--_ui5_list_no_data_height: 2rem;
	--_ui5_list_item_cb_margin_right: .5rem;
	--_ui5_list_item_title_size: var(--sapFontSize);
	--_ui5_list_item_img_top_margin: 0.55rem;
	--_ui5_list_no_data_font_size: var(--sapFontSize);
	--_ui5_list_item_dropdown_base_height: 2rem;
	--_ui5_list_item_base_height: 2rem;
	--_ui5_list_item_icon_size: 1rem;
	--_ui5_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5_checkbox_wrapper_padding));
	--_ui5_list_item_content_vertical_offset: calc((var(--_ui5_list_item_base_height) - var(--_ui5_list_item_title_size)) / 2);
	--_ui5_list_busy_row_height: 2rem;
	--_ui5_list_buttons_left_space: 0.125rem;

	--_ui5_month_picker_item_height: 2rem;
	--_ui5_year_picker_item_height: 2rem;
	--_ui5_panel_header_height: 2.5rem;

	--_ui5_token_height: 1.25rem;
	--_ui5_token_right_margin: 0.25rem;
	--_ui5_token_left_padding: 0.25rem;
	--_ui5_token_readonly_padding: 0.125rem 0.25rem;
	--_ui5_token_focus_offset: -0.125rem;
	--_ui5_token_icon_size: .75rem;
	--_ui5_token_icon_padding: 0.125rem 0.25rem;
	--_ui5_token_wrapper_right_padding: 0.25rem;
	--_ui5_token_wrapper_left_padding: 0;
	--_ui5_token_outline_offset: -0.125rem;

	--_ui5_tl_bubble_padding: .5rem;
	--_ui5_tl_indicator_before_bottom: -.5rem;
	--_ui5_tl_padding: .5rem;
	--_ui5_tl_li_margin_bottom: .5rem;

	--_ui5_wheelslider_item_width: 64px;
	--_ui5_wheelslider_item_height: 32px;
	--_ui5_wheelslider_height: 224px;
	--_ui5_wheelslider_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 2);
	--_ui5_wheelslider_arrows_visibility: visible;
	--_ui5_wheelslider_mobile_selection_frame_margin_top: 128px;

	--_ui5_tc_item_text: 2rem;
	--_ui5_tc_item_text_line_height: 1.325rem;
	--_ui5_tc_item_icon_size: 1rem;
	--_ui5_tc_item_add_text_margin_top: 0.3125rem;
	--_ui5_tc_item_height: 4rem;
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
	--_ui5_tc_item_icon_circle_size: 2rem;
	--_ui5_tc_item_icon_size: 1rem;

	/* Radio Button */
	--_ui5_radio_button_min_width: var(--_ui5_radio_button_min_width_compact);
	--_ui5_radio_button_height: 2rem;
	--_ui5_radio_button_label_side_padding: .5rem;
	--_ui5_radio_button_focus_dist: .375rem;
	--_ui5_radio_button_inner_size: 2rem;
	--_ui5_radio_button_svg_size: 1rem;
	--_ui5_radio_button_label_width: calc(100% - 2rem + 1px);
	--_ui5_radio_button_outer_ring_padding_with_label: 0 0.5rem;

	/* Responsive Popover */
	--_ui5-responsive_popover_header_height: 2.5rem;

	/* Side Navigation */
	--ui5_side_navigation_item_height: 2rem;

	/* Slider */
	--_ui5_slider_handle_height: 1.25rem;
	--_ui5_slider_handle_width: 1.25rem;
	--_ui5_slider_handle_top: -.5rem;
	--_ui5_slider_tooltip_height: 1rem;
	--_ui5_slider_tooltip_padding: 0.25rem;
	/* --_ui5_slider_tooltip_bottom: 1.875rem; */
	--_ui5_slider_progress_outline_offset: -0.625rem;
	--_ui5_slider_outer_height: 1.3125rem;

	/* SplitButton */
	--_ui5_split_button_middle_separator_top: 0;
	--_ui5_split_button_middle_separator_height: 1.625rem;

	/* StepInput */
	--_ui5_step_input_min_width: 6rem;
	--_ui5_step_input_padding: 2rem;

	/* Table */
	--_ui5_load_more_text_height: 2.625rem;
	--_ui5_load_more_text_font_size: var(--sapFontSize);
	--_ui5_load_more_desc_padding: 0 2rem 0.875rem 2rem;
	--ui5_table_header_row_height: 2rem;
	--ui5_table_row_height: 2rem;

	/* Tree */
	--_ui5-tree-indent-step: 0.5rem;
	--_ui5-tree-toggle-box-width: 2rem;
	--_ui5-tree-toggle-box-height: 1.5rem;
	--_ui5-tree-toggle-icon-size: 0.8125rem;

	/* Timeline */
	--_ui5_timeline_tli_indicator_before_bottom: -0.5rem;
	--_ui5_timeline_tli_indicator_before_right: -0.5rem;
	--_ui5_timeline_tli_indicator_before_without_icon_bottom: -0.75rem;
	--_ui5_timeline_tli_indicator_before_without_icon_right: -0.8125rem;

	/* ViewSettingsDialog */
	--_ui5_vsd_header_container: 2.5rem;
	--_ui5_vsd_sub_header_container_height: 2rem;
	--_ui5_vsd_header_height: 4rem;
	--_ui5_vsd_expand_content_height: 25.4375rem;
}

:root [_ui5host], [dir="ltr"][_ui5host], [dir="ltr"] [_ui5host] {
	--_ui5_rotation_90deg: rotate(90deg);
	--_ui5_rotation_minus_90deg: rotate(-90deg);

	--_ui5_icon_transform_scale: none;
	--_ui5_panel_toggle_btn_rotation: var(--_ui5_rotation_90deg);
	--_ui5_li_notification_group_toggle_btn_rotation: var(--_ui5_rotation_90deg);
	--_ui5_timeline_scroll_container_offset: 0.5rem;

	--_ui5_popover_upward_arrow_margin: 0.1875rem 0 0 0.1875rem;
	--_ui5_popover_right_arrow_margin: 0.1875rem 0 0 -0.375rem;
	--_ui5_popover_downward_arrow_margin: -0.375rem 0 0 0.125rem;
	--_ui5_popover_left_arrow_margin: 0.125rem 0 0 0.25rem;
	--_ui5_dialog_resize_cursor: se-resize;

	--_ui5_progress_indicator_bar_border_radius: 0.5rem 0 0 0.5rem;
	--_ui5_progress_indicator_remaining_bar_border_radius: 0 0.5rem 0.5rem 0;
	--_ui5_menu_submenu_margin_offset: -0.25rem 0;
	--_ui5_menu_submenu_placement_type_left_margin_offset: 0.25rem 0;
	--_ui5-menu_item_icon_float: right;

	--_ui5-shellbar-notification-btn-count-offset: -0.125rem;
}

[dir="rtl"][_ui5host], [dir="rtl"] [_ui5host] {
	--_ui5_icon_transform_scale: scale(-1, 1);
	--_ui5_panel_toggle_btn_rotation: var(--_ui5_rotation_minus_90deg);
	--_ui5_li_notification_group_toggle_btn_rotation: var(--_ui5_rotation_minus_90deg);
	--_ui5_timeline_scroll_container_offset: -0.5rem;

	--_ui5_popover_upward_arrow_margin: .1875rem .125rem 0 0;
	--_ui5_popover_right_arrow_margin: .1875rem .25rem 0 0;
	--_ui5_popover_downward_arrow_margin: -0.4375rem .125rem 0 0;
	--_ui5_popover_left_arrow_margin: .1875rem -.375rem 0 0;
	--_ui5_dialog_resize_cursor:sw-resize;

	--_ui5_progress_indicator_bar_border_radius: 0 0.5rem 0.5rem 0;
	--_ui5_progress_indicator_remaining_bar_border_radius: 0.5rem 0 0 0.5rem;

	--_ui5_menu_submenu_margin_offset: 0 -0.25rem;
	--_ui5_menu_submenu_placement_type_left_margin_offset: 0 0.25rem;
	--_ui5-menu_item_icon_float: left;

	--_ui5-shellbar-notification-btn-count-offset: unset;
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const cw={packageName:"@ui5/webcomponents",fileName:"themes/Label.css",content:`:host(:not([hidden])) {
	display: inline-flex;
}

:host {
	max-width: 100%;
	color: var(--sapContent_LabelColor);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
	cursor: text;
}

.ui5-label-root {
	width: 100%;
	cursor: inherit;
}

:host([wrapping-type="Normal"]) .ui5-label-root {
	white-space: normal;
}

:host(:not([wrapping-type="Normal"])) .ui5-label-root {
	display: inline-flex;
	white-space: nowrap;
}

:host(:not([wrapping-type="Normal"])) .ui5-label-text-wrapper {
	text-overflow: ellipsis;
	overflow: hidden;
	display: inline-block;
	vertical-align: top;
	flex: 0 1 auto;
	min-width: 0;
}

:host([show-colon]) .ui5-label-required-colon:before {
	content: attr(data-colon);
}

:host([required]) .ui5-label-required-colon:after {
	content:"*";
	color: var(--sapField_RequiredColor);
	font-size: 1.25rem;
	font-weight: bold;
	position: relative;
	font-style: normal;
	vertical-align: middle;
	line-height: 0;
}

:host([required][show-colon]) .ui5-label-required-colon:after {
	margin-inline-start: .125rem;
}

bdi {
	padding-right: 0.075rem; /*1.2px - fix for last letter clipping issue when style is italic*/
}

:host([show-colon]) .ui5-label-required-colon {
	margin-inline-start: -0.05rem; /*0.8px - fix for last letter clipping issue when style is italic*/
	white-space: pre;
}`};var Ar=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},_a;let Nn=_a=class extends Q{static async onDefine(){_a.i18nBundle=await ie("@ui5/webcomponents-fiori")}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`#${this.for}`);e&&e.focus()}get _colonSymbol(){return _a.i18nBundle.getText(sw)}};Ar([d()],Nn.prototype,"for",void 0);Ar([d({type:Boolean})],Nn.prototype,"showColon",void 0);Ar([d({type:Boolean})],Nn.prototype,"required",void 0);Ar([d({type:en,defaultValue:en.None})],Nn.prototype,"wrappingType",void 0);Nn=_a=Ar([U({tag:"ui5-label",renderer:he,template:lw,styles:cw})],Nn);Nn.define();const ms=Nn;function uw(t,e,n){return p`<div class="${N(this.classes.root)}">${this._isBusy?_w.call(this,t,e,n):void 0}<slot></slot>${this._isBusy?hw.call(this,t,e,n):void 0}</div>`}function _w(t,e,n){return p`<div class="ui5-busy-indicator-busy-area" title="${l(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${l(this.labelId)}" data-sap-focus-ref><div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.text?dw.call(this,t,e,n):void 0}</div>`}function dw(t,e,n){return n?p`<${v("ui5-label",e,n)} id="${l(this._id)}-label" class="ui5-busy-indicator-text">${l(this.text)}</${v("ui5-label",e,n)}>`:p`<ui5-label id="${l(this._id)}-label" class="ui5-busy-indicator-text">${l(this.text)}</ui5-label>`}function hw(t,e,n){return p`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const pw={packageName:"@ui5/webcomponents",fileName:"themes/BusyIndicator.css",content:`:host(:not([hidden])) {
	display: inline-block;
}

:host([_is-busy]) {
	color: var(--_ui5_busy_indicator_color);
}

:host([size="Small"]) .ui5-busy-indicator-root {
	min-width: 1.5rem;
	min-height: .5rem;
}

:host([size="Small"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 1.75rem;
}

:host([size="Small"]) .ui5-busy-indicator-circle {
	width: .5rem;
	height: .5rem;
}

:host(:not([size])) .ui5-busy-indicator-root,
:host([size="Medium"]) .ui5-busy-indicator-root {
	min-width: 3rem;
	min-height: 1rem;
}

:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,
:host([size="Medium"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 2.25rem;
}

:host(:not([size])) .ui5-busy-indicator-circle,
:host([size="Medium"])  .ui5-busy-indicator-circle {
	width: 1rem;
	height: 1rem;
}

:host([size="Large"]) .ui5-busy-indicator-root {
	min-width: 6rem;
	min-height: 2rem;
}

:host([size="Large"][text]:not([text=""])) .ui5-busy-indicator-root {
	min-height: 3.25rem;
}

:host([size="Large"]) .ui5-busy-indicator-circle {
	width: 2rem;
	height: 2rem;
}

.ui5-busy-indicator-root {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: inherit;
	height: inherit;
}

.ui5-busy-indicator-busy-area {
	position: absolute;
	z-index: 99;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: inherit;
	flex-direction: column;
}

.ui5-busy-indicator-busy-area:focus {
	outline: var(--_ui5_busy_indicator_focus_outline);
	outline-offset: -2px;
    border-radius: var(--_ui5_busy_indicator_focus_border_radius);
}

.ui5-busy-indicator-circles-wrapper {
	line-height: 0;
}

.ui5-busy-indicator-circle {
	display: inline-block;
	background-color: currentColor;
	border-radius: 50%;
}

.ui5-busy-indicator-circle::before {
	content: "";
	width: 100%;
	height: 100%;
	border-radius: 100%;
}

.circle-animation-0 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
}

.circle-animation-1 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
	animation-delay: 200ms;
}

.circle-animation-2 {
	animation: grow 1.6s infinite cubic-bezier(0.32, 0.06, 0.85, 1.11);
	animation-delay: 400ms;
}

.ui5-busy-indicator-text {
	width: 100%;
	margin-top: .25rem;
	text-align: center;
}

@keyframes grow {
	0%, 50%, 100% {
		-webkit-transform: scale(0.5);
		-moz-transform: scale(0.5);
		transform: scale(0.5);
	}
	25% {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		transform: scale(1);
	}
}
`};var yo=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},da;let pn=da=class extends Q{constructor(){super(),this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0})}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}static async onDefine(){da.i18nBundle=await ie("@ui5/webcomponents")}get ariaTitle(){return da.i18nBundle.getText(yy)}get labelId(){return this.text?`${this._id}-label`:void 0}get classes(){return{root:{"ui5-busy-indicator-root":!0}}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(e){this._isBusy&&(e.stopImmediatePropagation(),Kt(e)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(e){this._isBusy&&e.stopImmediatePropagation()}_redirectFocus(e){this.focusForward||(e.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};yo([d()],pn.prototype,"text",void 0);yo([d({type:Y_,defaultValue:Y_.Medium})],pn.prototype,"size",void 0);yo([d({type:Boolean})],pn.prototype,"active",void 0);yo([d({validator:Se,defaultValue:1e3})],pn.prototype,"delay",void 0);yo([d({type:Boolean})],pn.prototype,"_isBusy",void 0);pn=da=yo([U({tag:"ui5-busy-indicator",languageAware:!0,styles:pw,renderer:he,template:uw,dependencies:[ms]})],pn);pn.define();const Af=pn,I=(t,e={})=>n=>{Object.prototype.hasOwnProperty.call(n,"metadata")||(n.metadata={});const i=n.metadata;i.events||(i.events={});const o=i.events;o[t]||(o[t]=e)},Z=t=>(e,n)=>{const i=e.constructor;Object.prototype.hasOwnProperty.call(i,"metadata")||(i.metadata={});const o=i.metadata;o.slots||(o.slots={});const r=o.slots;if(t&&t.default&&r.default)throw new Error("Only one slot can be the default slot.");const a=t&&t.default?"default":n;t=t||{type:HTMLElement},t.type||(t.type=HTMLElement),r[a]||(r[a]=t),t.default&&(delete r.default.default,r.default.propertyName=n),i.metadata.managedSlots=!0},tn=t=>{const e=t;return e.accessibleNameRef?fw(t):e.accessibleName?e.accessibleName:void 0},fw=t=>{var o;const e=((o=t.accessibleNameRef)==null?void 0:o.split(" "))??[],n=t.getRootNode();let i="";return e.forEach((r,a)=>{const s=n.querySelector(`[id='${r}']`),c=`${s&&s.textContent?s.textContent:""}`;c&&(i+=c,a<e.length-1&&(i+=" "))}),i},Df=new WeakMap,Hi=(t,e)=>{Df.set(t,e)},ha=t=>Df.get(t),Ye=typeof document>"u",V={get userAgent(){return Ye?"":navigator.userAgent},get touch(){return Ye?!1:"ontouchstart"in window||navigator.maxTouchPoints>0},get ie(){return Ye?!1:/(msie|trident)/i.test(V.userAgent)},get chrome(){return Ye?!1:!V.ie&&/(Chrome|CriOS)/.test(V.userAgent)},get firefox(){return Ye?!1:/Firefox/.test(V.userAgent)},get safari(){return Ye?!1:!V.ie&&!V.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(V.userAgent)},get webkit(){return Ye?!1:!V.ie&&/webkit/.test(V.userAgent)},get windows(){return Ye?!1:navigator.platform.indexOf("Win")!==-1},get iOS(){return Ye?!1:!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(V.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){return Ye?!1:!V.windows&&/Android/.test(V.userAgent)},get androidPhone(){return Ye?!1:V.android&&/(?=android)(?=.*mobile)/i.test(V.userAgent)},get ipad(){return Ye?!1:/ipad/i.test(V.userAgent)||/Macintosh/i.test(V.userAgent)&&"ontouchend"in document}};let Gs,Xs,An;const gu=()=>{if(Ye||!V.windows)return!1;if(Gs===void 0){const t=V.userAgent.match(/Windows NT (\d+).(\d)/);Gs=t?parseFloat(t[1]):0}return Gs>=8},mw=()=>{if(Ye||!V.webkit)return!1;if(Xs===void 0){const t=V.userAgent.match(/(webkit)[ /]([\w.]+)/);Xs=t?parseFloat(t[1]):0}return Xs>=537.1},Bf=()=>{if(Ye)return!1;if(An===void 0){if(V.ipad){An=!0;return}if(V.touch){if(gu()){An=!0;return}if(V.chrome&&V.android){An=!/Mobile Safari\/[.0-9]+/.test(V.userAgent);return}let t=window.devicePixelRatio?window.devicePixelRatio:1;V.android&&mw()&&(t=1),An=Math.min(window.screen.width/t,window.screen.height/t)>=600;return}An=V.ie&&V.userAgent.indexOf("Touch")!==-1||V.android&&!V.androidPhone}},Gl=()=>V.touch,Ra=()=>V.safari,gw=()=>V.chrome,vu=()=>(Bf(),(V.touch||gu())&&An),Y=()=>(Bf(),V.touch&&!An),xi=()=>Ye?!1:!vu()&&!Y()||gu(),vw=()=>vu()&&xi(),bw=()=>V.iOS,yw=()=>V.android||V.androidPhone,ww=t=>Array.from(t).filter(e=>e.nodeType!==Node.COMMENT_NODE&&(e.nodeType!==Node.TEXT_NODE||(e.nodeValue||"").trim().length!==0)).length>0;var Xl;(function(t){t.Default="Default",t.Positive="Positive",t.Negative="Negative",t.Transparent="Transparent",t.Emphasized="Emphasized",t.Attention="Attention"})(Xl||(Xl={}));const Ma=Xl;var Zl;(function(t){t.Button="Button",t.Submit="Submit",t.Reset="Reset"})(Zl||(Zl={}));const qo=Zl;function kw(t,e,n){return p`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${l(this.tabIndexValue)} aria-expanded="${l(this.accessibilityAttributes.expanded)}" aria-controls="${l(this.accessibilityAttributes.controls)}" aria-haspopup="${l(this.accessibilityAttributes.hasPopup)}" aria-label="${l(this.ariaLabelText)}" title="${l(this.buttonTitle)}" part="button">${this.icon?xw.call(this,t,e,n):void 0}<span id="${l(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?Tw.call(this,t,e,n):void 0}</button> `}function xw(t,e,n){return n?p`<${v("ui5-icon",e,n)} class="ui5-button-icon" name="${l(this.icon)}" accessible-role="${l(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${v("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-button-icon" name="${l(this.icon)}" accessible-role="${l(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function Tw(t,e,n){return p`<span class="ui5-hidden-text">${l(this.buttonTypeText)}</span>`}function Cw(t,e,n){return p`<svg class="ui5-icon-root" part="root" tabindex="${l(this._tabIndex)}" dir="${l(this._dir)}" viewBox="${l(this.viewBox)}" role="${l(this.effectiveAccessibleRole)}" focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="${l(this.effectiveAccessibleName)}" aria-hidden=${l(this.effectiveAriaHidden)} xmlns="http://www.w3.org/2000/svg" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${Ew.call(this,t,e,n)}</svg>`}function Sw(t,e,n){return Er`<title id="${l(this._id)}-tooltip">${l(this.effectiveAccessibleName)}</title>`}function $w(t,e,n){return Er`${l(this.customSvg)}`}function Iw(t,e,n,i,o){return Er`<path d="${l(i)}"></path>`}function Ew(t,e,n){return Er`${this.hasIconTooltip?Sw.call(this,t,e,n):void 0}<g role="presentation">${this.customSvg?$w.call(this,t,e,n):void 0}${X(this.pathData,(i,o)=>i._id||o,(i,o)=>Iw.call(this,t,e,n,i,o))}</g>`}var Ql;(function(t){t.Contrast="Contrast",t.Critical="Critical",t.Default="Default",t.Information="Information",t.Negative="Negative",t.Neutral="Neutral",t.NonInteractive="NonInteractive",t.Positive="Positive"})(Ql||(Ql={}));const G_=Ql;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Aw={packageName:"@ui5/webcomponents",fileName:"themes/Icon.css",content:`:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

:host([hidden]) {
	display: none;
}

:host([invalid]) {
	display:none;
}

/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/

:host(:not([hidden]).ui5_hovered) {
	opacity: .7;
}

:host {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	color: var(--sapContent_NonInteractiveIconColor);
	fill: currentColor;
	outline: none;
}

:host([design="Contrast"]) {
	color: var(--sapContent_ContrastIconColor);
}

:host([design="Critical"]) {
	color: var(--sapCriticalElementColor);
}

:host([design="Default"]) {
	color: var(--sapContent_IconColor);
}

:host([design="Information"]) {
	color: var(--sapInformativeElementColor);
}

:host([design="Negative"]) {
	color: var(--sapNegativeElementColor);
}

:host([design="Neutral"]) {
	color: var(--sapNeutralElementColor);
}

:host([design="NonInteractive"]) {
	color: var(--sapContent_NonInteractiveIconColor);
}

:host([design="Positive"]) {
	color: var(--sapPositiveElementColor);
}

:host([interactive][focused]) .ui5-icon-root {
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--ui5-icon-focus-border-radius);
}

.ui5-icon-root {
	display:flex;
	height: 100%;
	width: 100%;
	outline: none;
	vertical-align: top;
}

:host([interactive]) {
	cursor: pointer;
}

/*
 * The Icon is currently the only component that enforces "LTR" direction inside its ShadowDOM
 * as some icons should not be mirrored in RTL (f.e. checkmark, search, etc.).
 * That means, we can have "RTL" set globally and "LTR" set internally for the Icon ShadowDom
  * html dir=rtl
 * 		[ui5-icon]
 * 			#shadowroot
 * 				svg dir=ltr
 * In this case, we need to explicitly check for it as the global CSS definitions (rtl-parameters.css)
 * is placed in the "head" and won't consider it.
 */

.ui5-icon-root:not([dir="ltr"]) {
	transform: var(--_ui5_icon_transform_scale);
	transform-origin: center;
}`};var bt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Dw="ICON_NOT_FOUND",X_="presentation";let Qe=class extends Q{_onFocusInHandler(){this.interactive&&(this.focused=!0)}_onFocusOutHandler(){this.focused=!1}_onkeydown(e){this.interactive&&(te(e)&&this.fireEvent("click"),H(e)&&e.preventDefault())}_onkeyup(e){this.interactive&&H(e)&&this.fireEvent("click")}get _dir(){return this.ltr?"ltr":void 0}get effectiveAriaHidden(){return this.ariaHidden===""?this.isDecorative?!0:void 0:this.ariaHidden}get _tabIndex(){return this.interactive?"0":void 0}get isDecorative(){return this.effectiveAccessibleRole===X_}get effectiveAccessibleRole(){return this.accessibleRole?this.accessibleRole:this.interactive?"button":this.effectiveAccessibleName?"img":X_}async onBeforeRendering(){const e=this.name;if(!e)return console.warn("Icon name property is required",this);let n=qp(e);if(n||(n=await Yp(e)),!n)return this.invalid=!0,console.warn(`Required icon is not registered. Invalid icon name: ${this.name}`);if(n===Dw)return this.invalid=!0,console.warn(`Required icon is not registered. You can either import the icon as a module in order to use it e.g. "@ui5/webcomponents-icons/dist/${e.replace("sap-icon://","")}.js", or setup a JSON build step and import "@ui5/webcomponents-icons/dist/AllIcons.js".`);if(this.viewBox=n.viewBox||"0 0 512 512",n.customTemplate&&(n.pathData=[],this.customSvg=Nl(n.customTemplate,this)),this.invalid=!1,this.pathData=Array.isArray(n.pathData)?n.pathData:[n.pathData],this.accData=n.accData,this.ltr=n.ltr,this.packageName=n.packageName,this._onfocusout=this.interactive?this._onFocusOutHandler.bind(this):void 0,this._onfocusin=this.interactive?this._onFocusInHandler.bind(this):void 0,this.accessibleName)this.effectiveAccessibleName=this.accessibleName;else if(this.accData){const i=await ie(this.packageName);this.effectiveAccessibleName=i.getText(this.accData)||void 0}else this.effectiveAccessibleName=void 0}get hasIconTooltip(){return this.showTooltip&&this.effectiveAccessibleName}};bt([d({type:G_,defaultValue:G_.Default})],Qe.prototype,"design",void 0);bt([d({type:Boolean})],Qe.prototype,"interactive",void 0);bt([d()],Qe.prototype,"name",void 0);bt([d()],Qe.prototype,"accessibleName",void 0);bt([d({type:Boolean})],Qe.prototype,"showTooltip",void 0);bt([d()],Qe.prototype,"accessibleRole",void 0);bt([d()],Qe.prototype,"ariaHidden",void 0);bt([d({multiple:!0})],Qe.prototype,"pathData",void 0);bt([d({type:Object,defaultValue:void 0,noAttribute:!0})],Qe.prototype,"accData",void 0);bt([d({type:Boolean})],Qe.prototype,"focused",void 0);bt([d({type:Boolean})],Qe.prototype,"invalid",void 0);bt([d({noAttribute:!0,defaultValue:void 0})],Qe.prototype,"effectiveAccessibleName",void 0);Qe=bt([U({tag:"ui5-icon",languageAware:!0,themeAware:!0,renderer:he,template:Cw,styles:Aw}),I("click")],Qe);Qe.define();const Ut=Qe;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Bw={packageName:"@ui5/webcomponents",fileName:"themes/Button.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	min-width: var(--_ui5_button_base_min_width);
	height: var(--_ui5_button_base_height);
	line-height: normal;
	font-family: var(--_ui5_button_fontFamily);
	font-size: var(--sapFontSize);
	text-shadow: var(--_ui5_button_text_shadow);
	border-radius: var(--_ui5_button_border_radius);
	cursor: pointer;
	background-color: var(--sapButton_Background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);
	color: var(--sapButton_TextColor);
	box-sizing: border-box;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui5-button-root {
	min-width: inherit;
	cursor: inherit;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	padding: 0 var(--_ui5_button_base_padding);
	position: relative;
	background: transparent;
	border: none;
	color: inherit;
	text-shadow: inherit;
	font: inherit;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	line-height: inherit;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}
:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host(:not([hidden]):not([disabled]).ui5_hovered) {
	background: var(--sapButton_Hover_Background);
	box-shadow: var(--sapContent_Interaction_Shadow);
	border: 1px solid var(--sapButton_Hover_BorderColor);
	color: var(--sapButton_Hover_TextColor);
}
.ui5-button-icon {
	color: inherit;
	flex-shrink: 0;
}
:host([icon-end]) .ui5-button-root {
	flex-direction: row-reverse;
}
:host([icon-end]) .ui5-button-icon {
	margin-inline-start: var(--_ui5_button_base_icon_margin);
}
:host([icon-only]) .ui5-button-root {
	min-width: auto;
	padding: 0;
}
:host([icon-only]) .ui5-button-text {
	display: none;
}
.ui5-button-text {
	outline: none;
	position: relative;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
}
:host([has-icon]:not([icon-end])) .ui5-button-text {
	margin-inline-start: var(--_ui5_button_base_icon_margin);
}
:host([has-icon][icon-end]) .ui5-button-text {
	margin-inline-start: 0;
}
:host([disabled]) {
	opacity: var(--sapContent_DisabledOpacity);
	pointer-events: unset;
	cursor: default;
}
:host([has-icon]:not([icon-only])) .ui5-button-text{
	/* calculating the minimum width by removing the icon size  */
	min-width: calc(var(--_ui5_button_base_min_width) - var(--_ui5_button_base_icon_margin) - 1rem);
}
:host([disabled]:active) {
	pointer-events: none;
}
:host([focused]) .ui5-button-root:after {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.0625rem;
	top: 0.0625rem;
	right: 0.0625rem;
	bottom: 0.0625rem;
	border: var(--_ui5_button_focused_border);
	border-radius: var(--_ui5_button_focused_border_radius);
}
:host([design="Emphasized"][focused]) .ui5-button-root:after {
	border-color: var(--_ui5_button_emphasized_focused_border_color);
}
:host([design="Emphasized"][focused]) .ui5-button-root:before {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.0625rem;
	top: 0.0625rem;
	right: 0.0625rem;
	bottom: 0.0625rem;
	border: var(--_ui5_button_emphasized_focused_border_before);
	border-radius: var(--_ui5_button_focused_border_radius);
}
.ui5-button-root::-moz-focus-inner {
	border: 0;
}
bdi {
	display: block;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
}
:host([ui5-button][active]:not([disabled]):not([non-interactive])) {
	background-image: none;
	background-color: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}
:host([design="Positive"]) {
	background-color: var(--sapButton_Accept_Background);
	border-color: var(--sapButton_Accept_BorderColor);
	color: var(--sapButton_Accept_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Accept_Hover_Background);
	border-color: var(--sapButton_Accept_Hover_BorderColor);
	box-shadow: var(--sapContent_Positive_Shadow);
	color: var(--sapButton_Accept_Hover_TextColor);
}
:host([ui5-button][design="Positive"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Accept_Active_Background);
	border-color: var(--sapButton_Accept_Active_BorderColor);
	color: var(--sapButton_Accept_Active_TextColor);
}
:host([design="Negative"]) {
	background-color: var(--sapButton_Reject_Background);
	border-color: var(--sapButton_Reject_BorderColor);
	color: var(--sapButton_Reject_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Reject_Hover_Background);
	border-color: var(--sapButton_Reject_Hover_BorderColor);
	box-shadow: var(--sapContent_Negative_Shadow);
	color: var(--sapButton_Reject_Hover_TextColor);
}
:host([ui5-button][design="Negative"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Reject_Active_Background);
	border-color: var(--sapButton_Reject_Active_BorderColor);
	color: var(--sapButton_Reject_Active_TextColor);
}
:host([design="Attention"]) {
	background-color: var(--sapButton_Attention_Background);
	border-color: var(--sapButton_Attention_BorderColor);
	color: var(--sapButton_Attention_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Attention_Hover_Background);
	border-color: var(--sapButton_Attention_Hover_BorderColor);
	color: var(--sapButton_Attention_Hover_TextColor);
	box-shadow: var(--sapContent_Critical_Shadow)
}
:host([ui5-button][design="Attention"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Attention_Active_Background);
	border-color: var(--sapButton_Attention_Active_BorderColor);
	color: var(--sapButton_Attention_Active_TextColor);
}
:host([design="Emphasized"]) {
	background-color: var(--sapButton_Emphasized_Background);
	border-color: var(--sapButton_Emphasized_BorderColor);
	border-width: var(--_ui5_button_emphasized_border_width);
	color: var(--sapButton_Emphasized_TextColor);
	font-weight: var(--_ui5_button_emphasized_font_weight);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Emphasized_Hover_Background);
	border-color: var(--sapButton_Emphasized_Hover_BorderColor);
	border-width: var(--_ui5_button_emphasized_border_width);
	color: var(--sapButton_Emphasized_Hover_TextColor);
	box-shadow: none;
}
:host([ui5-button][design="Empasized"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Emphasized_Active_Background);
	border-color: var(--sapButton_Emphasized_Active_BorderColor);
	color: var(--sapButton_Emphasized_Active_TextColor);
}
:host([design="Emphasized"][focused]) .ui5-button-root:after {
	border-color: var(--sapContent_ContrastFocusColor);
	outline: none;
}
:host([design="Transparent"]) {
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
	border-color: var(--sapButton_Lite_BorderColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Lite_Hover_Background);
	border-color: var(--sapButton_Lite_Hover_BorderColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
	color: var(--sapButton_Lite_Hover_TextColor);
}
:host([ui5-button][design="Transparent"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Lite_Active_Background);
	border-color: var(--sapButton_Lite_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}
/* SegmentedButton and ToggleButton */
:host([ui5-segmented-button-item][active][focused]) .ui5-button-root:after,
:host([pressed][focused]) .ui5-button-root:after {
	border-color: var(--_ui5_button_pressed_focused_border_color);
	outline: none;
}
:host([ui5-segmented-button-item][focused]:not(:last-child)) .ui5-button-root:after {
	border-top-right-radius: var(--_ui5_button_focused_inner_border_radius);
	border-bottom-right-radius: var(--_ui5_button_focused_inner_border_radius);
}
:host([ui5-segmented-button-item][focused]:not(:first-child)) .ui5-button-root:after {
	border-top-left-radius: var(--_ui5_button_focused_inner_border_radius);
	border-bottom-left-radius: var(--_ui5_button_focused_inner_border_radius);
}
`};var ke=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},Mo;let Z_=!1,Io=null,ce=Mo=class extends Q{constructor(){super(),this._deactivate=()=>{Io&&(Io.active=!1)},Z_||(document.addEventListener("mouseup",this._deactivate),Z_=!0);const e=n=>{Hi(n,"button"),!this.nonInteractive&&(this.active=!0)};this._ontouchstart={handleEvent:e,passive:!0}}onEnterDOM(){this._isTouch=(Y()||vu())&&!vw()}async onBeforeRendering(){const e=Ce("FormSupport");this.type!==qo.Button&&!e&&console.warn('In order for the "type" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.submits&&!e&&console.warn('In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.iconOnly=this.isIconOnly,this.hasIcon=!!this.icon,this.buttonTitle=this.tooltip||await r5(this.icon)}_onclick(e){var i;if(this.nonInteractive)return;Hi(e,"button");const n=Ce("FormSupport");n&&this._isSubmit&&n.triggerFormSubmit(this),n&&this._isReset&&n.triggerFormReset(this),Ra()&&((i=this.getDomRef())==null||i.focus())}_onmousedown(e){this.nonInteractive||this._isTouch||(Hi(e,"button"),this.active=!0,Io=this)}_ontouchend(e){this.disabled&&(e.preventDefault(),e.stopPropagation()),this.active=!1,Io&&(Io.active=!1)}_onmouseup(e){Hi(e,"button")}_onkeydown(e){Hi(e,"button"),(H(e)||te(e))&&(this.active=!0)}_onkeyup(e){(H(e)||te(e))&&(this.active=!1)}_onfocusout(){this.nonInteractive||(this.active=!1,xi()&&(this.focused=!1))}_onfocusin(e){this.nonInteractive||(Hi(e,"button"),xi()&&(this.focused=!0))}get hasButtonType(){return this.design!==Ma.Default&&this.design!==Ma.Transparent}get iconRole(){return this.icon?"presentation":""}get isIconOnly(){return!ww(this.text)}static typeTextMappings(){return{Positive:wy,Negative:ky,Emphasized:xy}}get buttonTypeText(){return Mo.i18nBundle.getText(Mo.typeTextMappings()[this.design])}get tabIndexValue(){const e=this.getAttribute("tabindex");return e||(this.nonInteractive?"-1":this._tabIndex)}get showIconTooltip(){return this.iconOnly&&!this.tooltip}get ariaLabelText(){return tn(this)}get _isSubmit(){return this.type===qo.Submit||this.submits}get _isReset(){return this.type===qo.Reset}static async onDefine(){Mo.i18nBundle=await ie("@ui5/webcomponents")}};ke([d({type:Ma,defaultValue:Ma.Default})],ce.prototype,"design",void 0);ke([d({type:Boolean})],ce.prototype,"disabled",void 0);ke([d()],ce.prototype,"icon",void 0);ke([d({type:Boolean})],ce.prototype,"iconEnd",void 0);ke([d({type:Boolean})],ce.prototype,"submits",void 0);ke([d()],ce.prototype,"tooltip",void 0);ke([d({defaultValue:void 0})],ce.prototype,"accessibleName",void 0);ke([d({defaultValue:""})],ce.prototype,"accessibleNameRef",void 0);ke([d({type:Object})],ce.prototype,"accessibilityAttributes",void 0);ke([d({type:qo,defaultValue:qo.Button})],ce.prototype,"type",void 0);ke([d({type:Boolean})],ce.prototype,"active",void 0);ke([d({type:Boolean})],ce.prototype,"iconOnly",void 0);ke([d({type:Boolean})],ce.prototype,"focused",void 0);ke([d({type:Boolean})],ce.prototype,"hasIcon",void 0);ke([d({type:Boolean})],ce.prototype,"nonInteractive",void 0);ke([d({noAttribute:!0})],ce.prototype,"buttonTitle",void 0);ke([d({type:Object})],ce.prototype,"_iconSettings",void 0);ke([d({defaultValue:"0",noAttribute:!0})],ce.prototype,"_tabIndex",void 0);ke([d({type:Boolean})],ce.prototype,"_isTouch",void 0);ke([Z({type:Node,default:!0})],ce.prototype,"text",void 0);ce=Mo=ke([U({tag:"ui5-button",languageAware:!0,renderer:he,template:kw,styles:Bw,dependencies:[Ut]}),I("click")],ce);ce.define();const Oi=ce;var Jl;(function(t){t.Gregorian="Gregorian",t.Islamic="Islamic",t.Japanese="Japanese",t.Buddhist="Buddhist",t.Persian="Persian"})(Jl||(Jl={}));const Ti=Jl;let Eo;const Pf=()=>(Eo===void 0&&(Eo=fv()),Eo&&Eo in Ti?Eo:Ti.Gregorian);let Zs;const Pw=()=>(Zs===void 0&&(Zs=mv()),Zs);var _e={},qr="",Yr,Lf={_oCache:new Map,_iCacheLimit:10,get:function(t){var e=this._oCache.get(t);if(e)return e;var n={hourCycle:"h23",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,day:"2-digit",month:"2-digit",year:"numeric",timeZone:t,timeZoneName:"short",era:"narrow",weekday:"short"},i=new Intl.DateTimeFormat("en-US",n);return this._oCache.size===this._iCacheLimit&&(this._oCache=new Map),this._oCache.set(t,i),i}};_e.isValidTimezone=function(t){if(!t)return!1;if(Intl.supportedValuesOf)try{if(Yr=Yr||Intl.supportedValuesOf("timeZone"),Yr.includes(t))return!0}catch{Yr=[]}try{return Lf.get(t),!0}catch{return!1}};_e.convertToTimezone=function(t,e){var n=this._getParts(t,e);return _e._getDateFromParts(n)};_e._getParts=function(t,e){var n,i,o=Object.create(null),r=Lf.get(e),a=r.formatToParts(new Date(t.getTime()));for(n in a)i=a[n],i.type!=="literal"&&(o[i.type]=i.value);return o};_e._getDateFromParts=function(t){var e=new Date(0),n=parseInt(t.year);return t.era==="B"&&(n=n*-1+1),e.setUTCFullYear(n,parseInt(t.month)-1,parseInt(t.day)),e.setUTCHours(parseInt(t.hour),parseInt(t.minute),parseInt(t.second),parseInt(t.fractionalSecond||0)),e};_e.calculateOffset=function(t,e){var n=this.convertToTimezone(t,e),i=t.getTime()-n.getTime(),o=new Date(t.getTime()+i),r=this.convertToTimezone(o,e);return(o.getTime()-r.getTime())/1e3};_e.getLocalTimezone=function(){return qr||(qr=new Intl.DateTimeFormat().resolvedOptions().timeZone,qr)};let Qs;class Of{static getLegacyDateCalendarCustomizing(){return Qs===void 0&&(Qs=dp()),Qs.legacyDateCalendarCustomizing||[]}}_p("LegacyDateFormats",Of);let Js;const Q_=()=>(Js===void 0&&(Js=dp()),Js.firstDayOfWeek),Lw=Ce("LegacyDateFormats"),Ow=Lw?Of.getLegacyDateCalendarCustomizing:()=>[],J_=()=>{},Rf={getFormatLocale:Xe,getLegacyDateFormat:J_,getCustomLocaleData:J_,getLegacyDateCalendarCustomizing:Ow},Rw=()=>{},le={getLanguage:ru,getCalendarType:Pf,getSupportedLanguages:()=>ef("$core-i18n-locales:,ar,bg,ca,cs,da,de,el,en,es,et,fi,fr,hi,hr,hu,it,iw,ja,ko,lt,lv,nl,no,pl,pt,ro,ru,sh,sk,sl,sv,th,tr,uk,vi,zh_CN,zh_TW$"),getOriginInfo:Rw,getFormatSettings:()=>Rf,getTimezone:()=>Pw()||_e.getLocalTimezone()};var Mw=["year","month","day","hour","minute","second","fractionalSecond"],Fw=/Z|GMT|:.*[\+|\-]|^([\+|\-]\d{2})?\d{4}(-\d{2}){0,2}$/,Nw=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],zw=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Hw={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};function di(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}function L(t,e){var n=L._createDateInstance(t);Object.defineProperties(this,{sTimezoneID:{value:e},oDate:{value:n,writable:!0},oDateParts:{value:void 0,writable:!0}}),!isNaN(n)&&(t.length>1||t.length===1&&typeof t[0]=="string"&&!Fw.test(t[0]))&&this._setParts(Mw,[n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()])}L.prototype=Object.create(Date.prototype,{constructor:{value:Date}});L.prototype[Symbol.toStringTag]="Date";L.prototype._getPart=function(t){var e;return isNaN(this.oDate)?NaN:(this.oDateParts=this.oDateParts||_e._getParts(this.oDate,this.sTimezoneID),t==="weekday"?Hw[this.oDateParts.weekday]:(e=parseInt(this.oDateParts[t]),t==="month"?e-=1:t==="year"&&this.oDateParts.era==="B"&&(e=1-e),e))};L.prototype._setParts=function(t,e){var n,i,o,r,a,s,c={},u=Math.min(t.length,e.length);if(u===0)return this.setTime(NaN);for(n=0;n<u;n+=1){if(s=parseInt(+e[n]),a=t[n],isNaN(s))return this.setTime(NaN);a==="month"?s+=1:a==="year"&&(s<=0?(s=1-s,c.era="B"):c.era="A"),c[a]=s.toString()}return this.oDateParts?i=this.oDateParts:isNaN(this.oDate)?i={day:"1",fractionalSecond:"0",hour:"0",minute:"0",month:"1",second:"0"}:i=_e._getParts(this.oDate,this.sTimezoneID),c=Object.assign({},i,c),o=_e._getDateFromParts(c),isNaN(o)?this.setTime(NaN):(r=o.getTime()+_e.calculateOffset(o,this.sTimezoneID)*1e3,this.setTime(r))};L.prototype.clone=function(){return L.getInstance(this)};L.prototype.getDate=function(){return this._getPart("day")};L.prototype.getDay=function(){return this._getPart("weekday")};L.prototype.getFullYear=function(){return this._getPart("year")};L.prototype.getHours=function(){return this._getPart("hour")};L.prototype.getMilliseconds=function(){return this._getPart("fractionalSecond")};L.prototype.getMinutes=function(){return this._getPart("minute")};L.prototype.getMonth=function(){return this._getPart("month")};L.prototype.getSeconds=function(){return this._getPart("second")};L.prototype.getTimezoneOffset=function(){return _e.calculateOffset(this.oDate,this.sTimezoneID)/60};L.prototype.getYear=function(){return this._getPart("year")-1900};L.prototype.setDate=function(t){return this._setParts(["day"],arguments)};L.prototype.setFullYear=function(t,e,n){return this._setParts(["year","month","day"],arguments)};L.prototype.setHours=function(t,e,n,i){return this._setParts(["hour","minute","second","fractionalSecond"],arguments)};L.prototype.setMilliseconds=function(t){return this._setParts(["fractionalSecond"],arguments)};L.prototype.setMinutes=function(t,e,n){return this._setParts(["minute","second","fractionalSecond"],arguments)};L.prototype.setMonth=function(t,e){return this._setParts(["month","day"],arguments)};L.prototype.setSeconds=function(t,e){return this._setParts(["second","fractionalSecond"],arguments)};L.prototype.setTime=function(t){return this.oDateParts=void 0,this.oDate.setTime(t)};L.prototype.setYear=function(t){return this._setParts(["year"],[parseInt(t)+1900])};L.prototype.toDateString=function(){return isNaN(this.oDate)?this.oDate.toDateString():Nw[this.getDay()]+" "+zw[this.getMonth()]+" "+di(this.getDate(),2)+" "+di(this.getFullYear(),4)};L.prototype.toString=function(){return isNaN(this.oDate)?this.oDate.toString():this.toDateString()+" "+this.toTimeString()};L.prototype.toTimeString=function(){var t,e,n,i;return isNaN(this.oDate)?this.oDate.toTimeString():(i=this.getTimezoneOffset(),n=i>0?"-":"+",t=Math.floor(Math.abs(i)/60),e=Math.abs(i)%60,di(this.getHours(),2)+":"+di(this.getMinutes(),2)+":"+di(this.getSeconds(),2)+" GMT"+n+di(t,2)+di(e,2))};["getTime","getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","toGMTString","toISOString","toJSON","toUTCString","valueOf"].forEach(function(t){L.prototype[t]=function(){return this.oDate[t].apply(this.oDate,arguments)}});["toLocaleDateString","toLocaleString","toLocaleTimeString"].forEach(function(t){L.prototype[t]=function(e,n){return this.oDate[t](e||le.getLanguageTag(),Object.assign({timeZone:this.sTimezoneID},n))}});["setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds"].forEach(function(t){L.prototype[t]=function(){return this.oDateParts=void 0,this.oDate[t].apply(this.oDate,arguments)}});L._createDateInstance=function(t){return t[0]instanceof Date&&(t[0]=t[0].valueOf()),new(Function.prototype.bind.apply(Date,[].concat.apply([null],t)))};L.getInstance=function(){var t=le.getTimezone();return t!==_e.getLocalTimezone()?new L(arguments,t):L._createDateInstance(arguments)};L.checkDate=function(t){if(isNaN(t.getTime()))throw new Error("The given Date is not valid");if(!(t instanceof L)&&le.getTimezone()!==_e.getLocalTimezone())throw new Error("Configured time zone requires the parameter 'oDate' to be an instance of sap.ui.core.date.UI5Date")};const Uw=L;class sn extends Uw{}var Ci={},bu=window;function yu(t){return Array.isArray(t)?t.slice():t.split(".")}Ci.create=function(t,e){for(var n=e||bu,i=yu(t),o=0;o<i.length;o++){var r=i[o];if(n[r]===null||n[r]!==void 0&&typeof n[r]!="object"&&typeof n[r]!="function")throw new Error("Could not set object-path for '"+i.join(".")+"', path segment '"+r+"' already exists.");n[r]=n[r]||{},n=n[r]}return n};Ci.get=function(t,e){for(var n=e||bu,i=yu(t),o=i.pop(),r=0;r<i.length&&n;r++)n=n[i[r]];return n?n[o]:void 0};Ci.set=function(t,e,n){n=n||bu;var i=yu(t),o=i.pop(),r=Ci.create(i,n);r[o]=e};var q=function(t,e){if(!t){var n=typeof e=="function"?e():e;console.assert(t,n)}},Vw=typeof window<"u"&&window.performance&&performance.now&&performance.timing?function(){var t=performance.timing.navigationStart;return function(){return t+performance.now()}}():Date.now,E={};E.Level={NONE:-1,FATAL:0,ERROR:1,WARNING:2,INFO:3,DEBUG:4,TRACE:5,ALL:5+1};var cn=[],bi={"":E.Level.ERROR},lo=3e3,Fe=null,Mf=!1;function kn(t,e){return("000"+String(t)).slice(-e)}function wu(t){return!t||isNaN(bi[t])?bi[""]:bi[t]}function Ff(){var t=cn.length;if(t){var e=Math.min(t,Math.floor(lo*.7));Fe&&Fe.onDiscardLogEntries(cn.slice(0,t-e)),e?cn=cn.slice(-e,t):cn=[]}}function Nf(){return Fe||(Fe={listeners:[],onLogEntry:function(t){for(var e=0;e<Fe.listeners.length;e++)Fe.listeners[e].onLogEntry&&Fe.listeners[e].onLogEntry(t)},onDiscardLogEntries:function(t){for(var e=0;e<Fe.listeners.length;e++)Fe.listeners[e].onDiscardLogEntries&&Fe.listeners[e].onDiscardLogEntries(t)},attach:function(t,e){e&&(Fe.listeners.push(e),e.onAttachToLog&&e.onAttachToLog(t))},detach:function(t,e){for(var n=0;n<Fe.listeners.length;n++)if(Fe.listeners[n]===e){e.onDetachFromLog&&e.onDetachFromLog(t),Fe.listeners.splice(n,1);return}}}),Fe}E.fatal=function(t,e,n,i){Ri(E.Level.FATAL,t,e,n,i)};E.error=function(t,e,n,i){Ri(E.Level.ERROR,t,e,n,i)};E.warning=function(t,e,n,i){Ri(E.Level.WARNING,t,e,n,i)};E.info=function(t,e,n,i){Ri(E.Level.INFO,t,e,n,i)};E.debug=function(t,e,n,i){Ri(E.Level.DEBUG,t,e,n,i)};E.trace=function(t,e,n,i){Ri(E.Level.TRACE,t,e,n,i)};E.setLevel=function(t,e,n){if(e=e||"",!n||bi[e]==null){bi[e]=t;var i;Object.keys(E.Level).forEach(function(o){E.Level[o]===t&&(i=o)}),Ri(E.Level.INFO,"Changing log level "+(e?"for '"+e+"' ":"")+"to "+i,"","sap.base.log")}};E.getLevel=function(t){return wu(t)};E.isLoggable=function(t,e){return(t??E.Level.DEBUG)<=wu(e)};E.logSupportInfo=function(t){Mf=t};function Ri(t,e,n,i,o){if(!o&&!i&&typeof n=="function"&&(o=n,n=""),!o&&typeof i=="function"&&(o=i,i=""),t<=wu(i)){var r=Vw(),a=new Date(r),s=Math.floor((r-Math.floor(r))*1e3),c={time:kn(a.getHours(),2)+":"+kn(a.getMinutes(),2)+":"+kn(a.getSeconds(),2)+"."+kn(a.getMilliseconds(),3)+kn(s,3),date:kn(a.getFullYear(),4)+"-"+kn(a.getMonth()+1,2)+"-"+kn(a.getDate(),2),timestamp:r,level:t,message:String(e||""),details:String(n||""),component:String(i||"")};if(Mf&&typeof o=="function"&&(c.supportInfo=o()),lo&&(cn.length>=lo&&Ff(),cn.push(c)),Fe&&Fe.onLogEntry(c),console){var u=n instanceof Error,h=c.date+" "+c.time+" "+c.message+" - "+c.details+" "+c.component;switch(t){case E.Level.FATAL:case E.Level.ERROR:u?console.error(h,`
`,n):console.error(h);break;case E.Level.WARNING:u?console.warn(h,`
`,n):console.warn(h);break;case E.Level.INFO:console.info?u?console.info(h,`
`,n):console.info(h):u?console.log(h,`
`,n):console.log(h);break;case E.Level.DEBUG:u?console.debug(h,`
`,n):console.debug(h);break;case E.Level.TRACE:u?console.trace(h,`
`,n):console.trace(h);break}console.info&&c.supportInfo&&console.info(c.supportInfo)}return c}}E.getLogEntries=function(){return cn.slice()};E.getLogEntriesLimit=function(){return lo};E.setLogEntriesLimit=function(t){if(t<0)throw new Error("The log entries limit needs to be greater than or equal to 0!");lo=t,cn.length>=lo&&Ff()};E.addLogListener=function(t){Nf().attach(this,t)};E.removeLogListener=function(t){Nf().detach(this,t)};function Ww(t){this.fatal=function(e,n,i,o){return E.fatal(e,n,i||t,o),this},this.error=function(e,n,i,o){return E.error(e,n,i||t,o),this},this.warning=function(e,n,i,o){return E.warning(e,n,i||t,o),this},this.info=function(e,n,i,o){return E.info(e,n,i||t,o),this},this.debug=function(e,n,i,o){return E.debug(e,n,i||t,o),this},this.trace=function(e,n,i,o){return E.trace(e,n,i||t,o),this},this.setLevel=function(e,n){return E.setLevel(e,n||t),this},this.getLevel=function(e){return E.getLevel(e||t)},this.isLoggable=function(e,n){return E.isLoggable(e,n||t)}}E.getLogger=function(t,e){return!isNaN(e)&&bi[t]==null&&(bi[t]=e),new Ww(t)};var Ks=function(t){q(Array.isArray(t),"uniqueSort: input parameter must be an Array");var e=t.length;if(e>1){t.sort();for(var n=0,i=1;i<e;i++)t.indexOf(t[i])===i&&(t[++n]=t[i]);++n<e&&t.splice(n,e-n)}return t};function Pn(t){return typeof t=="function"}var ne=function(t,e){if(q(typeof t=="string"&&t,"Metadata: sClassName must be a non-empty string"),q(typeof e=="object","Metadata: oClassInfo must be empty or an object"),(!e||typeof e.metadata!="object")&&(e={metadata:e||{},constructor:Ci.get(t)},e.metadata.__version=1),e.metadata.__version=e.metadata.__version||2,!Pn(e.constructor))throw Error("constructor for class "+t+" must have been declared before creating metadata for it");this._sClassName=t,this._oClass=e.constructor,this.extend(e)};ne.prototype.extend=function(t){this.applySettings(t),this.afterApplySettings()};ne.prototype.applySettings=function(t){var e=this,n=t.metadata,i;if(n.baseType){var o;if(Pn(n.baseType)){if(o=n.baseType,!Pn(o.getMetadata))throw new TypeError("baseType must be a UI5 class with a static getMetadata function")}else o=Ci.get(n.baseType),Pn(o)||E.fatal("base class '"+n.baseType+"' does not exist");o.getMetadata?(this._oParent=o.getMetadata(),q(o===o.getMetadata().getClass(),"Metadata: oParentClass must match the class in the parent metadata")):this._oParent=new ne(n.baseType,{})}else this._oParent=void 0;this._bAbstract=!!n.abstract,this._bFinal=!!n.final,this._sStereotype=n.stereotype||(this._oParent?this._oParent._sStereotype:"object"),this._bDeprecated=!!n.deprecated,this._aInterfaces=n.interfaces||[],this._aPublicMethods=n.publicMethods||[],this._bInterfacesUnique=!1,i=this._oClass.prototype;for(var r in t)r!=="metadata"&&r!=="constructor"&&(i[r]=t[r],r.match(/^_|^on|^init$|^exit$/)||e._aPublicMethods.push(r))};ne.prototype.afterApplySettings=function(){this._oParent?(this._aAllPublicMethods=this._oParent._aAllPublicMethods.concat(this._aPublicMethods),this._bInterfacesUnique=!1):this._aAllPublicMethods=this._aPublicMethods};ne.prototype.getStereotype=function(){return this._sStereotype};ne.prototype.getName=function(){return this._sClassName};ne.prototype.getClass=function(){return this._oClass};ne.prototype.getParent=function(){return this._oParent};ne.prototype._dedupInterfaces=function(){this._bInterfacesUnique||(Ks(this._aInterfaces),Ks(this._aPublicMethods),Ks(this._aAllPublicMethods),this._bInterfacesUnique=!0)};ne.prototype.getPublicMethods=function(){return this._dedupInterfaces(),this._aPublicMethods};ne.prototype.getAllPublicMethods=function(){return this._dedupInterfaces(),this._aAllPublicMethods};ne.prototype.getInterfaces=function(){return this._dedupInterfaces(),this._aInterfaces};ne.prototype.isInstanceOf=function(t){if(this._oParent&&this._oParent.isInstanceOf(t))return!0;for(var e=this._aInterfaces,n=0,i=e.length;n<i;n++)if(e[n]===t)return!0;return!1};Object.defineProperty(ne.prototype,"_mImplementedTypes",{get:function(){if(this===ne.prototype)throw new Error("sap.ui.base.Metadata: The '_mImplementedTypes' property must not be accessed on the prototype");var t=Object.create(this._oParent?this._oParent._mImplementedTypes:null);t[this._sClassName]=!0;for(var e=this._aInterfaces,n=e.length;n-- >0;)t[e[n]]||(t[e[n]]=!0);return Object.defineProperty(this,"_mImplementedTypes",{value:Object.freeze(t),writable:!1,configurable:!1}),t},configurable:!0});ne.prototype.isA=function(t){var e=this._mImplementedTypes;if(Array.isArray(t)){for(var n=0;n<t.length;n++)if(t[n]in e)return!0;return!1}return t in e};ne.prototype.isAbstract=function(){return this._bAbstract};ne.prototype.isFinal=function(){return this._bFinal};ne.prototype.isDeprecated=function(){return this._bDeprecated};ne.prototype.addPublicMethods=function(t){var e=t instanceof Array?t:arguments;Array.prototype.push.apply(this._aPublicMethods,e),Array.prototype.push.apply(this._aAllPublicMethods,e),this._bInterfacesUnique=!1};ne.createClass=function(t,e,n,i){typeof t=="string"&&(i=n,n=e,e=t,t=null),q(!t||Pn(t)),q(typeof e=="string"&&!!e),q(!n||typeof n=="object"),q(!i||Pn(i)),i=i||ne,Pn(i.preprocessClassInfo)&&(n=i.preprocessClassInfo(n)),n=n||{},n.metadata=n.metadata||{},n.hasOwnProperty("constructor")||(n.constructor=void 0);var o=n.constructor;q(!o||Pn(o)),t?(o||(n.metadata.deprecated?o=function(){E.warning("Usage of deprecated class: "+e),t.apply(this,arguments)}:o=function(){t.apply(this,arguments)}),o.prototype=Object.create(t.prototype),o.prototype.constructor=o,n.metadata.baseType=t):(o=o||function(){},delete n.metadata.baseType),n.constructor=o,Ci.set(e,o);var r=new i(e,n);return o.getMetadata=o.prototype.getMetadata=function(){return r},o.getMetadata().isFinal()||(o.extend=function(a,s,c){return ne.createClass(o,a,s,c||i)}),o};var Je=ne.createClass("sap.ui.base.Object",{constructor:function(){if(!(this instanceof Je))throw Error('Cannot instantiate object: "new" is missing!')}});Je.prototype.destroy=function(){};Je.prototype.getInterface=function(){var t=new Je._Interface(this,this.getMetadata().getAllPublicMethods());return this.getInterface=function(){return t},t};Je.defineClass=function(t,e,n){var i=new(n||ne)(t,e),o=i.getClass();return o.getMetadata=o.prototype.getMetadata=function(){return i},i.isFinal()||(o.extend=function(r,a,s){return ne.createClass(o,r,a,s||n)}),E.debug("defined class '"+t+"'"+(i.getParent()?" as subclass of "+i.getParent().getName():"")),i};Je.prototype.isA=function(t){return this.getMetadata().isA(t)};Je.isA=function(t,e){return t instanceof Je&&t.isA(e)};Je._Interface=function(t,e,n){if(!t)return t;function i(s,c){return function(){var u=s[c].apply(s,arguments);return n?this:u instanceof Je?u.getInterface():u}}if(!e)return{};for(var o,r=0,a=e.length;r<a;r++)o=e[r],(!t[o]||typeof t[o]=="function")&&(this[o]=i(t,o))};const jw=()=>{},zf={getConfiguration:()=>le,getLibraryResourceBundle:jw(),getFormatSettings:()=>Rf};var Yt={Gregorian:"Gregorian",Islamic:"Islamic",Japanese:"Japanese",Persian:"Persian",Buddhist:"Buddhist"};const qw={iw:"he",ji:"yi"},Yw=t=>qw[t]||t,ku={getModernLanguage:Yw};var Gw=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,Fa=function(t){var e=Gw.exec(t.replace(/_/g,"-"));if(e===null)throw new TypeError("The given language tag'"+t+"' does not adhere to BCP-47.");this.language=e[1]||null,this.script=e[2]||null,this.region=e[3]||null,this.variant=e[4]&&e[4].slice(1)||null,this.variantSubtags=this.variant?this.variant.split("-"):[],this.extension=e[5]&&e[5].slice(1)||null,this.extensionSubtags=this.variant?this.variant.split("-"):[],this.privateUse=e[6]||null,this.privateUseSubtags=this.privateUse?this.privateUse.slice(2).split("-"):[],this.language&&(this.language=this.language.toLowerCase()),this.script&&(this.script=this.script.toLowerCase().replace(/^[a-z]/,function(n){return n.toUpperCase()})),this.region&&(this.region=this.region.toUpperCase()),Object.freeze(this)};Fa.prototype.toString=function(){return Xw(this.language,this.script,this.region,this.variant,this.extension,this.privateUse)};function Xw(){return Array.prototype.filter.call(arguments,Boolean).join("-")}var co=Je.extend("sap.ui.core.Locale",{constructor:function(t){Je.apply(this),t instanceof Fa?(this.oLanguageTag=t,this.sLocaleId=this.oLanguageTag.toString()):(this.oLanguageTag=new Fa(t),this.sLocaleId=t),Object.assign(this,this.oLanguageTag),this.sLanguage=this.language},getLanguage:function(){return this.language},getScript:function(){return this.script},getRegion:function(){return this.region},getVariant:function(){return this.variant},getVariantSubtags:function(){return this.variantSubtags},getExtension:function(){return this.extension},getExtensionSubtags:function(){return this.extensionSubtags},getPrivateUse:function(){return this.privateUse},getPrivateUseSubtags:function(){return this.privateUseSubtags},hasPrivateUseSubtag:function(t){return q(t&&t.match(/^[0-9A-Z]{1,8}$/i),"subtag must be a valid BCP47 private use tag"),this.privateUseSubtags.indexOf(t)>=0},toString:function(){return this.oLanguageTag.toString()},getSAPLogonLanguage:function(){return ku._getSAPLogonLanguage(this)}});co._getCoreLocale=function(t){return t instanceof Fa&&(t=new co(t)),t};var Hf={},Uf=Hf.hasOwnProperty,Zw=Hf.toString,Vf=Uf.toString,Qw=Vf.call(Object),K_=function(t){var e,n;return!t||Zw.call(t)!=="[object Object]"?!1:(e=Object.getPrototypeOf(t),e?(n=Uf.call(e,"constructor")&&e.constructor,typeof n=="function"&&Vf.call(n)===Qw):!0)},Jw=Object.create(null),Wf=function(){var t,e,n,i,o,r,a=arguments[2]||{},s=3,c=arguments.length,u=arguments[0]||!1,h=arguments[1]?void 0:Jw;for(typeof a!="object"&&typeof a!="function"&&(a={});s<c;s++)if((o=arguments[s])!=null)for(i in o)t=a[i],n=o[i],!(i==="__proto__"||a===n)&&(u&&n&&(K_(n)||(e=Array.isArray(n)))?(e?(e=!1,r=t&&Array.isArray(t)?t:[]):r=t&&K_(t)?t:{},a[i]=Wf(u,arguments[1],r,n)):n!==h&&(a[i]=n));return a},xu=function(){var t=[!1,!0];return t.push.apply(t,arguments),Wf.apply(null,t)};const Kw=t=>{const e=t.match(/sap\/ui\/core\/cldr\/(\w+)\.json/);if(!e)throw new Error(`Unknown module "${t}"`);const n=e[1];return xb(n)},e0={loadResource:Kw};var st={Default:"Default",ISO_8601:"ISO_8601",MiddleEastern:"MiddleEastern",WesternTraditional:"WesternTraditional"};Object.defineProperty(st,"getWeekConfigurationValues",{value:function(t){switch(t){case st.ISO_8601:return{firstDayOfWeek:1,minimalDaysInFirstWeek:4};case st.MiddleEastern:return{firstDayOfWeek:6,minimalDaysInFirstWeek:1};case st.WesternTraditional:return{firstDayOfWeek:0,minimalDaysInFirstWeek:1};default:return}}});var t0=/c/i,n0=/e/i,ed={"acceleration-meter-per-second-squared":"acceleration-meter-per-square-second","concentr-milligram-per-deciliter":"concentr-milligram-ofglucose-per-deciliter","concentr-part-per-million":"concentr-permillion","consumption-liter-per-100kilometers":"consumption-liter-per-100-kilometer","pressure-millimeter-of-mercury":"pressure-millimeter-ofhg","pressure-pound-per-square-inch":"pressure-pound-force-per-square-inch","pressure-inch-hg":"pressure-inch-ofhg","torque-pound-foot":"torque-pound-force-foot"},i0=/^([+-]?)((\d+)(?:\.(\d+))?)[eE]([+-]?\d+)$/,o0=/0+$/,lt=Je.extend("sap.ui.core.LocaleData",{constructor:function(t){this.oLocale=co._getCoreLocale(t),Je.apply(this);var e=a0(this.oLocale);this.mData=e.mData,this.sCLDRLocaleId=e.sCLDRLocaleId},_get:function(){return this._getDeep(this.mData,arguments)},_getMerged:function(){return this._get.apply(this,arguments)},_getDeep:function(t,e){for(var n=t,i=0;i<e.length&&(n=n[e[i]],n!==void 0);i++);return n},getOrientation:function(){return this._get("orientation")},getCurrentLanguageName:function(){var t=this.getLanguages(),e,n=ku.getModernLanguage(this.oLocale.language),i=this.oLocale.getScript();return n==="sr"&&i==="Latn"&&(n="sh",i=null),this.oLocale.getRegion()&&(e=t[n+"_"+this.oLocale.getRegion()]),!e&&i&&(e=t[n+"_"+i]),e||(e=t[n]),e},getLanguages:function(){return this._get("languages")},getScripts:function(){return this._get("scripts")},getTerritories:function(){return this._get("territories")},getMonths:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),this._get(ge(e),"months","format",t)},getMonthsStandAlone:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),this._get(ge(e),"months","stand-alone",t)},getDays:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide"||t=="short","sWidth must be narrow, abbreviate, wide or short"),this._get(ge(e),"days","format",t)},getDaysStandAlone:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide"||t=="short","sWidth must be narrow, abbreviated, wide or short"),this._get(ge(e),"days","stand-alone",t)},getQuarters:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),this._get(ge(e),"quarters","format",t)},getQuartersStandAlone:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),this._get(ge(e),"quarters","stand-alone",t)},getDayPeriods:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),this._get(ge(e),"dayPeriods","format",t)},getDayPeriodsStandAlone:function(t,e){return q(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),this._get(ge(e),"dayPeriods","stand-alone",t)},getDatePattern:function(t,e){return q(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),this._get(ge(e),"dateFormats",t)},getFlexibleDayPeriods:function(t,e){return this._get(ge(e),"flexibleDayPeriods","format",t)},getFlexibleDayPeriodsStandAlone:function(t,e){return this._get(ge(e),"flexibleDayPeriods","stand-alone",t)},getFlexibleDayPeriodOfTime:function(t,e){var n,i,o;n=(t*60+e)%1440,i=this._get("dayPeriodRules");function r(a){var s=a.split(":"),c=s[0],u=s[1];return parseInt(c)*60+parseInt(u)}return o=Object.keys(i).find(function(a){var s=i[a];return s._at&&r(s._at)===n}),o||Object.keys(i).find(function(a){var s,c,u,h=i[a];return h._at?!1:(u=r(h._from),s=r(h._before),u>s?c=[{start:u,end:1440},{start:0,end:s}]:c=[{start:u,end:s}],c.some(function(_){return _.start<=n&&_.end>n}))})},getTimePattern:function(t,e){return q(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),this._get(ge(e),"timeFormats",t)},getDateTimePattern:function(t,e){return q(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),this._get(ge(e),"dateTimeFormats",t)},getCombinedDateTimePattern:function(t,e,n){q(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),q(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");var i=this.getDateTimePattern(t,n),o=this.getDatePattern(t,n),r=this.getTimePattern(e,n);return i.replace("{0}",r).replace("{1}",o)},getCombinedDateTimeWithTimezonePattern:function(t,e,n){return this.applyTimezonePattern(this.getCombinedDateTimePattern(t,e,n))},applyTimezonePattern:function(t){var e=[t],n=[{group:"Timezone",length:2,field:"zone",symbol:"V"}];return this._appendItems(e,n),e[0]},getTimezoneTranslations:function(){return this.mTimezoneTranslations=this.mTimezoneTranslations||qf(this._get("timezoneNames")),Object.assign({},this.mTimezoneTranslations)},getCustomDateTimePattern:function(t,e){var n=this._get(ge(e),"dateTimeFormats","availableFormats");return this._getFormatPattern(t,n,e)},getIntervalPattern:function(t,e){var n=this._get(ge(e),"dateTimeFormats","intervalFormats"),i,o,r,a,s;return t&&(i=t.split("-"),o=i[0],r=i[1],a=n[o],a&&(s=a[r],s))?s:n.intervalFormatFallback},getCombinedIntervalPattern:function(t,e){var n=this._get(ge(e),"dateTimeFormats","intervalFormats"),i=n.intervalFormatFallback;return i.replace(/\{(0|1)\}/g,t)},getCustomIntervalPattern:function(t,e,n){var i=this._get(ge(n),"dateTimeFormats","intervalFormats");return this._getFormatPattern(t,i,n,e)},_getFormatPattern:function(t,e,n,i){var o,r,a;if(i?typeof i=="string"&&((i=="j"||i=="J")&&(i=this.getPreferredHourSymbol()),a=e[t],o=a&&a[i]):o=e[t],o)if(typeof o=="object")r=Object.keys(o).map(function(s){return o[s]});else return o;return r||(r=this._createFormatPattern(t,e,n,i)),r&&r.length===1?r[0]:r},_createFormatPattern:function(t,e,n,i){var o=this._parseSkeletonFormat(t),r,a=this._findBestMatch(o,t,e),s,c,u,h,_,m,g,b,w=/^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/,T,D;if(i){if(typeof i=="string")b=oi[i]?oi[i].group:"",b&&(T=el[b].index>o[o.length-1].index),g=i;else{for(T=!0,o[0].symbol==="y"&&a&&a.pattern.G&&(u=oi.G,h=el[u.group],o.splice(0,0,{symbol:"G",group:u.group,match:u.match,index:h.index,field:h.field,length:1})),D=o.length-1;D>=0;D--)if(s=o[D],i[s.group]){T=!1;break}for(D=0;D<o.length;D++)if(s=o[D],i[s.group]){g=s.symbol;break}(g=="h"||g=="K")&&i.DayPeriod&&(g="a")}if(T)return[this.getCustomDateTimePattern(t,n)];a&&a.missingTokens.length===0&&(_=a.pattern[g],_&&a.distance>0&&(_=this._expandFields(_,a.patternTokens,o))),_||(c=this._get(ge(n),"dateTimeFormats","availableFormats"),w.test(t)&&"ahHkKjJms".indexOf(g)>=0?_=this._getMixedFormatPattern(t,c,n,i):(m=this._getFormatPattern(t,c,n),_=this.getCombinedIntervalPattern(m,n))),r=[_]}else if(!a)_=t,r=[_];else{if(typeof a.pattern=="string")r=[a.pattern];else if(typeof a.pattern=="object"){r=[];for(var S in a.pattern)_=a.pattern[S],r.push(_)}a.distance>0&&(a.missingTokens.length>0?w.test(t)?r=[this._getMixedFormatPattern(t,e,n)]:(r=this._expandFields(r,a.patternTokens,o),r=this._appendItems(r,a.missingTokens,n)):r=this._expandFields(r,a.patternTokens,o))}return t.indexOf("J")>=0&&r.forEach(function(R,K){r[K]=R.replace(/ ?[abB](?=([^']*'[^']*')*[^']*)$/g,"")}),r},_parseSkeletonFormat:function(t){for(var e=[],n={index:-1},i,o,r,a=0;a<t.length;a++){if(i=t.charAt(a),(i=="j"||i=="J")&&(i=this.getPreferredHourSymbol()),i==n.symbol){n.length++;continue}if(o=oi[i],r=el[o.group],o.group=="Other"||r.diffOnly)throw new Error("Symbol '"+i+"' is not allowed in skeleton format '"+t+"'");if(r.index<=n.index)throw new Error("Symbol '"+i+"' at wrong position or duplicate in skeleton format '"+t+"'");n={symbol:i,group:o.group,match:o.match,index:r.index,field:r.field,length:1},e.push(n)}return e},_findBestMatch:function(t,e,n){var i,o,r,a,s,c,u,h,_,m,g={distance:1e4,firstDiffPos:-1};for(var b in n)if(!(b==="intervalFormatFallback"||b.indexOf("B")>-1)&&(i=this._parseSkeletonFormat(b),c=0,o=[],u=!0,!(t.length<i.length))){s=0,h=t.length;for(var w=0;w<t.length;w++){if(r=t[w],a=i[s],h===t.length&&(h=w),a){if(_=oi[r.symbol],m=oi[a.symbol],r.symbol===a.symbol){r.length===a.length?h===w&&(h=t.length):(r.length<_.numericCeiling?a.length<m.numericCeiling:a.length>=m.numericCeiling)?c+=Math.abs(r.length-a.length):c+=5,s++;continue}else if(r.match==a.match){c+=Math.abs(r.length-a.length)+10,s++;continue}}o.push(r),c+=50-w}s<i.length&&(u=!1),u&&(c<g.distance||c===g.distance&&h>g.firstDiffPos)&&(g.distance=c,g.firstDiffPos=h,g.missingTokens=o,g.pattern=n[b],g.patternTokens=i)}if(g.pattern)return g},_expandFields:function(t,e,n){var i=typeof t=="string",o;i?o=[t]:o=t;var r=o.map(function(a){var s={},c={},u="",h=!1,_=0,m,g,b,w,T,D,S,R;for(n.forEach(function(ee){s[ee.group]=ee}),e.forEach(function(ee){c[ee.group]=ee});_<a.length;){if(R=a.charAt(_),h)u+=R,R=="'"&&(h=!1);else if(S=oi[R],S&&s[S.group]&&c[S.group]){for(T=s[S.group],D=c[S.group],m=T.length,b=D.length,g=1;a.charAt(_+1)==R;)_++,g++;m===b||(m<S.numericCeiling?g>=S.numericCeiling:g<S.numericCeiling)?w=g:w=Math.max(g,m);for(var K=0;K<w;K++)u+=R}else u+=R,R=="'"&&(h=!0);_++}return u});return i?r[0]:r},_appendItems:function(t,e,n){var i=this._get(ge(n),"dateTimeFormats","appendItems");return t.forEach((function(o,r){var a,s,c;e.forEach((function(u){s=i[u.group],a="'"+this.getDisplayName(u.field)+"'",c="";for(var h=0;h<u.length;h++)c+=u.symbol;t[r]=s.replace(/\{0\}/,o).replace(/\{1\}/,c).replace(/\{2\}/,a)}).bind(this))}).bind(this)),t},_getMixedFormatPattern:function(t,e,n,i){var o=/^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/,r=/MMMM|LLLL/,a=/MMM|LLL/,s=/E|e|c/,c,u,h,_,m,g,b,w;return c=o.exec(t),u=c[1],h=c[2],m=this._getFormatPattern(u,e,n),i?g=this.getCustomIntervalPattern(h,i,n):g=this._getFormatPattern(h,e,n),r.test(u)?_=s.test(u)?"full":"long":a.test(u)?_="medium":_="short",b=this.getDateTimePattern(_,n),w=b.replace(/\{1\}/,m).replace(/\{0\}/,g),w},getNumberSymbol:function(t){return q(t=="decimal"||t=="group"||t=="plusSign"||t=="minusSign"||t=="percentSign","sType must be decimal, group, plusSign, minusSign or percentSign"),this._get("symbols-latn-"+t)},getLenientNumberSymbols:function(t){return q(t=="plusSign"||t=="minusSign","sType must be plusSign or minusSign"),this._get("lenient-scope-number")[t]},getDecimalPattern:function(){return this._get("decimalFormat").standard},getCurrencyPattern:function(t){return this._get("currencyFormat")[t]||this._get("currencyFormat").standard},getCurrencySpacing:function(t){return this._get("currencyFormat","currencySpacing",t==="after"?"afterCurrency":"beforeCurrency")},getPercentPattern:function(){return this._get("percentFormat").standard},getMiscPattern:function(t){return q(t=="approximately"||t=="atLeast"||t=="atMost"||t=="range","sName must be approximately, atLeast, atMost or range"),this._get("miscPattern")[t]},getMinimalDaysInFirstWeek:function(){return this._get("weekData-minDays")},getFirstDayOfWeek:function(){return this._get("weekData-firstDay")},getWeekendStart:function(){return this._get("weekData-weekendStart")},getWeekendEnd:function(){return this._get("weekData-weekendEnd")},getCustomCurrencyCodes:function(){var t=this._get("currency")||{},e={};return Object.keys(t).forEach(function(n){e[n]=n}),e},getCurrencyDigits:function(t){var e=this._get("currency");if(e){if(e[t]&&e[t].hasOwnProperty("digits"))return e[t].digits;if(e.DEFAULT&&e.DEFAULT.hasOwnProperty("digits"))return e.DEFAULT.digits}var n=this._get("currencyDigits",t);return n==null&&(n=this._get("currencyDigits","DEFAULT"),n==null&&(n=2)),n},getCurrencySymbol:function(t){var e=this.getCurrencySymbols();return e&&e[t]||t},getCurrencyCodeBySymbol:function(t){var e=this._get("currencySymbols"),n;for(n in e)if(e[n]===t)return n;return t},getCurrencySymbols:function(){var t=this._get("currency"),e={},n;for(var i in t)n=t[i].isoCode,t[i].symbol?e[i]=t[i].symbol:n&&(e[i]=this._get("currencySymbols")[n]);return Object.assign({},this._get("currencySymbols"),e)},getUnitDisplayName:function(t){var e=this.getUnitFormat(t);return e&&e.displayName||""},getRelativePatterns:function(t,e){e===void 0&&(e="wide"),q(e==="wide"||e==="short"||e==="narrow","sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");var n=[],i=this.getPluralCategories(),o,r,a,s;return t||(t=["year","month","week","day","hour","minute","second"]),t.forEach((function(c){o=this._get("dateFields",c+"-"+e);for(var u in o)u.indexOf("relative-type-")===0?(a=parseInt(u.substr(14)),n.push({scale:c,value:a,pattern:o[u]})):u.indexOf("relativeTime-type-")==0&&(r=o[u],s=u.substr(18)==="past"?-1:1,i.forEach(function(h){var _=r["relativeTimePattern-count-"+h];_&&n.push({scale:c,sign:s,pattern:_})}))}).bind(this)),n},getRelativePattern:function(t,e,n,i){var o,r,a,s;return typeof n=="string"&&(i=n,n=void 0),n===void 0&&(n=e>0),i===void 0&&(i="wide"),q(i==="wide"||i==="short"||i==="narrow","sStyle is only allowed to be set with 'wide', 'short' or 'narrow'"),a=t+"-"+i,(e===0||e===-2||e===2)&&(o=this._get("dateFields",a,"relative-type-"+e)),o||(r=this._get("dateFields",a,"relativeTime-type-"+(n?"future":"past")),s=this.getPluralCategory(Math.abs(e).toString()),o=r["relativeTimePattern-count-"+s]),o},getRelativeSecond:function(t,e){return this.getRelativePattern("second",t,e)},getRelativeMinute:function(t,e){return t==0?null:this.getRelativePattern("minute",t,e)},getRelativeHour:function(t,e){return t==0?null:this.getRelativePattern("hour",t,e)},getRelativeDay:function(t,e){return this.getRelativePattern("day",t,e)},getRelativeWeek:function(t,e){return this.getRelativePattern("week",t,e)},getRelativeMonth:function(t,e){return this.getRelativePattern("month",t,e)},getDisplayName:function(t,e){q(t=="second"||t=="minute"||t=="hour"||t=="zone"||t=="day"||t=="weekday"||t=="week"||t=="month"||t=="quarter"||t=="year"||t=="era","sType must be second, minute, hour, zone, day, weekday, week, month, quarter, year, era"),e===void 0&&(e="wide"),q(e==="wide"||e==="short"||e==="narrow","sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");var n=["era","weekday","zone"],i=n.indexOf(t)===-1?t+"-"+e:t;return this._get("dateFields",i,"displayName")},getRelativeYear:function(t,e){return this.getRelativePattern("year",t,e)},getDecimalFormat:function(t,e,n){var i,o;switch(t){case"long":o=this._get("decimalFormat-long");break;default:o=this._get("decimalFormat-short");break}if(o){var r=e+"-"+n;i=o[r],i||(r=e+"-other",i=o[r])}return i},getCurrencyFormat:function(t,e,n){var i,o=this._get("currencyFormat-"+t);if(!o){if(t==="sap-short")throw new Error('Failed to get CLDR data for property "currencyFormat-sap-short"');o=this._get("currencyFormat-short")}if(o){var r=e+"-"+n;i=o[r],i||(r=e+"-other",i=o[r])}return i},getListFormat:function(t,e){var n=this._get("listPattern-"+(t||"standard")+"-"+(e||"wide"));return n||{}},getResolvedUnitFormat:function(t){return t=this.getUnitFromMapping(t)||t,this.getUnitFormat(t)},getUnitFormat:function(t){var e=this._get("units","short",t);return!e&&ed[t]&&(e=this._get("units","short",ed[t])),e},getUnitFormats:function(){return this._getMerged("units","short")},getUnitFromMapping:function(t){return this._get("unitMappings",t)},getEras:function(t,e){q(t=="wide"||t=="abbreviated"||t=="narrow","sWidth must be wide, abbreviate or narrow");var n=this._get(ge(e),"era-"+t),i=[];for(var o in n)i[parseInt(o)]=n[o];return i},getEraDates:function(t){var e=this._get("eras-"+t.toLowerCase()),n=[];for(var i in e)n[parseInt(i)]=e[i];return n},getCalendarWeek:function(t,e){q(t=="wide"||t=="narrow","sStyle must be wide or narrow");var n=zf.getLibraryResourceBundle("sap.ui.core",this.oLocale.toString()),i="date.week.calendarweek."+t;return n.getText(i,e)},firstDayStartsFirstWeek:function(){return this.oLocale.getLanguage()==="en"&&this.oLocale.getRegion()==="US"},getPreferredCalendarType:function(){var t,e,n,i=this._get("calendarPreference")||[];for(n=0;n<i.length;n++){t=i[n].split("-")[0];for(e in Yt)if(t===e.toLowerCase())return e}return Yt.Gregorian},getPreferredHourSymbol:function(){return this._get("timeData","_preferred")},getPluralCategories:function(){var t=this._get("plurals"),e=Object.keys(t);return e.push("other"),e},getPluralCategory:function(t){var e=typeof t=="number"?t.toString():t,n=this._get("plurals");this._pluralTest||(this._pluralTest={});for(var i in n){var o=this._pluralTest[i];if(o||(o=this._parsePluralRule(n[i]),this._pluralTest[i]=o),o(e).bMatch)return i}return"other"},_parsePluralRule:function(t){var e="or",n="and",i="%",o="=",r="!=",a="n",s="i",c="f",u="t",h="v",_="w",m="c",g="e",b="..",w=",",T=0,D;D=t.split(" ");function S(A){return D[T]===A?(T++,!0):!1}function R(){var A=D[T];return T++,A}function K(){var A,xe;return A=ee(),S(e)?(xe=K(),function(De){return A(De)||xe(De)}):A}function ee(){var A,xe;return A=kt(),S(n)?(xe=ee(),function(De){return A(De)&&xe(De)}):A}function kt(){var A,xe,De;if(A=xt(),S(o))De=!0;else if(S(r))De=!1;else throw new Error("Expected '=' or '!='");return xe=ht(),De?function(We){return xe(We).indexOf(A(We))>=0}:function(We){return xe(We).indexOf(A(We))===-1}}function xt(){var A;if(A=Kn(),S(i)){var xe=parseInt(R());return function(De){return A(De)%xe}}return A}function Kn(){if(S(a))return function(A){return A.n};if(S(s))return function(A){return A.i};if(S(c))return function(A){return A.f};if(S(u))return function(A){return A.t};if(S(h))return function(A){return A.v};if(S(_))return function(A){return A.w};if(S(m))return function(A){return A.c};if(S(g))return function(A){return A.c};throw new Error("Unknown operand: "+R())}function ht(){var A=[],xe=R(),De=xe.split(w),We,Ie,wn;return De.forEach(function(ei){if(We=ei.split(b),We.length===1)A.push(parseInt(ei));else{Ie=parseInt(We[0]),wn=parseInt(We[1]);for(var ti=Ie;ti<=wn;ti++)A.push(ti)}}),function(ei){return A}}var zi=K();if(T!=D.length)throw new Error("Not completely parsed");return function(A){var xe,De,We,Ie,wn,ei,ti;return A=A.replace(t0,"e"),We=A.search(n0),De=We<0?0:parseInt(A.slice(We+1)),A=lt.convertToDecimal(A),xe=A.indexOf("."),xe===-1?(ei=A,Ie="",wn=""):(ei=A.slice(0,xe),Ie=A.slice(xe+1),wn=Ie.replace(o0,"")),ti={n:parseFloat(A),i:parseInt(ei),v:Ie.length,w:wn.length,f:Ie===""?0:parseInt(Ie),t:wn===""?0:parseInt(wn),c:De},{bMatch:zi(ti),oOperands:ti}}}});lt.convertToDecimal=function(t){var e,n,i,o,r,a,s=String(t);return!s.includes("e")&&!s.includes("E")||(a=s.match(i0),o=a[1]==="-",s=a[2].replace(".",""),e=a[3]?a[3].length:0,i=a[4]?a[4].length:0,n=parseInt(a[5]),r=e+n,n>0?s=n<i?s.slice(0,r)+"."+s.slice(r):s=s.padEnd(r,"0"):s=-n<e?s=s.slice(0,r)+"."+s.slice(r):s="0."+s.padStart(i-n,"0"),o&&(s="-"+s)),s};var el={Era:{field:"era",index:0},Year:{field:"year",index:1},Quarter:{field:"quarter",index:2},Month:{field:"month",index:3},Week:{field:"week",index:4},"Day-Of-Week":{field:"weekday",index:5},Day:{field:"day",index:6},DayPeriod:{field:"hour",index:7,diffOnly:!0},Hour:{field:"hour",index:8},Minute:{field:"minute",index:9},Second:{field:"second",index:10},Timezone:{field:"zone",index:11}},oi={G:{group:"Era",match:"Era",numericCeiling:1},y:{group:"Year",match:"Year",numericCeiling:100},Y:{group:"Year",match:"Year",numericCeiling:100},Q:{group:"Quarter",match:"Quarter",numericCeiling:3},q:{group:"Quarter",match:"Quarter",numericCeiling:3},M:{group:"Month",match:"Month",numericCeiling:3},L:{group:"Month",match:"Month",numericCeiling:3},w:{group:"Week",match:"Week",numericCeiling:100},W:{group:"Week",match:"Week",numericCeiling:100},d:{group:"Day",match:"Day",numericCeiling:100},D:{group:"Day",match:"Day",numericCeiling:100},E:{group:"Day-Of-Week",match:"Day-Of-Week",numericCeiling:1},e:{group:"Day-Of-Week",match:"Day-Of-Week",numericCeiling:3},c:{group:"Day-Of-Week",match:"Day-Of-Week",numericCeiling:2},h:{group:"Hour",match:"Hour12",numericCeiling:100},H:{group:"Hour",match:"Hour24",numericCeiling:100},k:{group:"Hour",match:"Hour24",numericCeiling:100},K:{group:"Hour",match:"Hour12",numericCeiling:100},m:{group:"Minute",match:"Minute",numericCeiling:100},s:{group:"Second",match:"Second",numericCeiling:100},z:{group:"Timezone",match:"Timezone",numericCeiling:1},Z:{group:"Timezone",match:"Timezone",numericCeiling:1},O:{group:"Timezone",match:"Timezone",numericCeiling:1},v:{group:"Timezone",match:"Timezone",numericCeiling:1},V:{group:"Timezone",match:"Timezone",numericCeiling:1},X:{group:"Timezone",match:"Timezone",numericCeiling:1},x:{group:"Timezone",match:"Timezone",numericCeiling:1},S:{group:"Other",numericCeiling:100},u:{group:"Other",numericCeiling:100},U:{group:"Other",numericCeiling:1},r:{group:"Other",numericCeiling:100},F:{group:"Other",numericCeiling:100},g:{group:"Other",numericCeiling:100},a:{group:"DayPeriod",numericCeiling:1},b:{group:"Other",numericCeiling:1},B:{group:"Other",numericCeiling:1},A:{group:"Other",numericCeiling:100}};function r0(t){var e=/\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(t);return e&&e[2]?e[2].split(/,/):null}var jf=r0("$cldr-locales:ar,ar_EG,ar_SA,bg,ca,cy,cs,da,de,de_AT,de_CH,el,el_CY,en,en_AU,en_GB,en_HK,en_IE,en_IN,en_NZ,en_PG,en_SG,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_MX,es_PE,es_UY,es_VE,et,fa,fi,fr,fr_BE,fr_CA,fr_CH,fr_LU,he,hi,hr,hu,id,it,it_CH,ja,kk,ko,lt,lv,ms,nb,nl,nl_BE,pl,pt,pt_PT,ro,ru,ru_UA,sk,sl,sr,sr_Latn,sv,th,tr,uk,vi,zh_CN,zh_HK,zh_SG,zh_TW$"),td=function(){var t=jf,e={},n;if(t)for(n=0;n<t.length;n++)e[t[n]]=!0;return e}(),Gr={};function qf(t,e,n,i){return i=i?i.slice():[],n=n||{},e=e||"",Object.keys(t).forEach(function(o){var r=t[o];if(typeof r=="object"){var a=i.slice(),s=r._parent;s&&a.push(s),qf(r,e+o+"/",n,a)}else if(typeof r=="string"&&o!=="_parent"){var c=i.length?i.join(", ")+", ":"";n[e+o]=c+r}}),n}function ge(t){return t||(t=le.getCalendarType()),"ca-"+t.toLowerCase()}function a0(t){var e=t.getLanguage()||"",n=t.getScript()||"",i=t.getRegion()||"",o;function r(u,h){var _,m,g;if(h)for(_ in h)h.hasOwnProperty(_)&&(m=u[_],g=h[_],m===void 0?u[_]=g:m===null?delete u[_]:typeof m=="object"&&typeof g=="object"&&!Array.isArray(m)&&r(m,g))}function a(u){if(!Gr[u]&&(!td||td[u]===!0)){var h=Gr[u]=e0.loadResource("sap/ui/core/cldr/"+u+".json",{dataType:"json",failOnError:!1});h&&h.__fallbackLocale&&(r(h,a(h.__fallbackLocale)),delete h.__fallbackLocale)}return Gr[u]}e=e&&ku.getModernLanguage(e)||e,e==="no"&&(e="nb"),e==="zh"&&!i&&(n==="Hans"?i="CN":n==="Hant"&&(i="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr_Latn");var s=e+"_"+i,c=s;return e&&i&&(o=a(s)),!o&&e&&(o=a(e),c=e),o||(o=a("en"),c="en"),Gr[s]=o,c=c.replace(/_/g,"-"),{mData:o,sCLDRLocaleId:c}}var s0=lt.extend("sap.ui.core.CustomLocaleData",{constructor:function(t){lt.apply(this,arguments),this.mCustomData=le.getFormatSettings().getCustomLocaleData()},_get:function(){var t=Array.prototype.slice.call(arguments),e,n;t[0].indexOf("ca-")==0&&(e=t[0],e==ge()&&(t=t.slice(1))),n=t.join("-");var i=this.mCustomData[n];return i==null&&(i=this._getDeep(this.mCustomData,arguments),i==null&&(i=this._getDeep(this.mData,arguments))),i},_getMerged:function(){var t=this._getDeep(this.mData,arguments),e=this._getDeep(this.mCustomData,arguments);return xu({},t,e)},getFirstDayOfWeek:function(){var t=le.getCalendarWeekNumbering();return t===st.Default?lt.prototype.getFirstDayOfWeek.call(this):st.getWeekConfigurationValues(t).firstDayOfWeek},getMinimalDaysInFirstWeek:function(){var t=le.getCalendarWeekNumbering();return t===st.Default?lt.prototype.getMinimalDaysInFirstWeek.call(this):st.getWeekConfigurationValues(t).minimalDaysInFirstWeek}});lt.getInstance=function(t){return t=co._getCoreLocale(t),t.hasPrivateUseSubtag("sapufmt")?new s0(t):new lt(t)};lt._cldrLocales=jf;var tl=new Map,Yf={get:function(t){if(!tl.has(t))throw new Error("Required calendar type: "+t+" not loaded.");return tl.get(t)},set:function(t,e){tl.set(t,e)}},Tu={getWeekConfigurationValues:function(t,e){var n,i;if(!t)return Tu.getWeekConfigurationValues(le.getCalendarWeekNumbering(),e);if(i=st.getWeekConfigurationValues(t),i)return i;if(t===st.Default)return e=e||le.getFormatSettings().getFormatLocale(),n=lt.getInstance(e),{firstDayOfWeek:n.getFirstDayOfWeek(),minimalDaysInFirstWeek:n.getMinimalDaysInFirstWeek()}}},O=Je.extend("sap.ui.core.date.UniversalDate",{constructor:function(){var t=O.getClass();return this.createDate(t,arguments)}});O.UTC=function(){var t=O.getClass();return t.UTC.apply(t,arguments)};O.now=function(){return Date.now()};O.prototype.createDate=function(t,e){if(t===Date)return L.getInstance.apply(null,e);switch(e.length){case 0:return new t;case 1:return new t(e[0]instanceof Date?e[0].getTime():e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}};O.getInstance=function(t,e){var n,i;if(t instanceof O&&(t=t.getJSDate()),t&&isNaN(t.getTime()))throw new Error("The given date object is invalid");return e||(e=le.getCalendarType()),n=O.getClass(e),i=Object.create(n.prototype),i.oDate=t?L.getInstance(t):L.getInstance(),i.sCalendarType=e,i};O.getClass=function(t){return t||(t=le.getCalendarType()),Yf.get(t)};["getDate","getMonth","getFullYear","getYear","getDay","getHours","getMinutes","getSeconds","getMilliseconds","getUTCDate","getUTCMonth","getUTCFullYear","getUTCDay","getUTCHours","getUTCMinutes","getUTCSeconds","getUTCMilliseconds","getTime","valueOf","getTimezoneOffset","toString","toDateString","setDate","setFullYear","setYear","setMonth","setHours","setMinutes","setSeconds","setMilliseconds","setUTCDate","setUTCFullYear","setUTCMonth","setUTCHours","setUTCMinutes","setUTCSeconds","setUTCMilliseconds"].forEach(function(t){O.prototype[t]=function(){return this.oDate[t].apply(this.oDate,arguments)}});O.prototype.getJSDate=function(){return this.oDate};O.prototype.getCalendarType=function(){return this.sCalendarType};O.prototype.getEra=function(){return O.getEraByDate(this.sCalendarType,this.oDate.getFullYear(),this.oDate.getMonth(),this.oDate.getDate())};O.prototype.setEra=function(t){};O.prototype.getUTCEra=function(){return O.getEraByDate(this.sCalendarType,this.oDate.getUTCFullYear(),this.oDate.getUTCMonth(),this.oDate.getUTCDate())};O.prototype.setUTCEra=function(t){};O.prototype.getWeek=function(t,e){return O.getWeekByDate(this.sCalendarType,this.getFullYear(),this.getMonth(),this.getDate(),t,e)};O.prototype.setWeek=function(t,e,n){var i=O.getFirstDateOfWeek(this.sCalendarType,t.year||this.getFullYear(),t.week,e,n);this.setFullYear(i.year,i.month,i.day)};O.prototype.getUTCWeek=function(t,e){return O.getWeekByDate(this.sCalendarType,this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),t,e)};O.prototype.setUTCWeek=function(t,e,n){var i=O.getFirstDateOfWeek(this.sCalendarType,t.year||this.getFullYear(),t.week,e,n);this.setUTCFullYear(i.year,i.month,i.day)};O.prototype.getQuarter=function(){return Math.floor(this.getMonth()/3)};O.prototype.getUTCQuarter=function(){return Math.floor(this.getUTCMonth()/3)};O.prototype.getDayPeriod=function(){return this.getHours()<12?0:1};O.prototype.getUTCDayPeriod=function(){return this.getUTCHours()<12?0:1};O.prototype.getTimezoneShort=function(){if(this.oDate.getTimezoneShort)return this.oDate.getTimezoneShort()};O.prototype.getTimezoneLong=function(){if(this.oDate.getTimezoneLong)return this.oDate.getTimezoneLong()};var Gf=7*24*60*60*1e3;O.getWeekByDate=function(t,e,n,i,o,r){r=r||le.getCalendarWeekNumbering(),Zf(r),o=o||le.getFormatSettings().getFormatLocale();var a=this.getClass(t),s=pa(a,e,o,r),c=new a(a.UTC(e,n,i)),u,h,_,m,g,b=Xf(r,o);return b?u=nl(s,c):(h=e-1,_=e+1,m=pa(a,h,o,r),g=pa(a,_,o,r),c>=g?(e=_,u=0):c<s?(e=h,u=nl(m,c)):u=nl(s,c)),{year:e,week:u}};O.getFirstDateOfWeek=function(t,e,n,i,o){o=o||le.getCalendarWeekNumbering(),Zf(o),i=i||le.getFormatSettings().getFormatLocale();var r=this.getClass(t),a=pa(r,e,i,o),s=new r(a.valueOf()+n*Gf),c=Xf(o,i);return c&&n===0&&a.getUTCFullYear()<e?{year:e,month:0,day:1}:{year:s.getUTCFullYear(),month:s.getUTCMonth(),day:s.getUTCDate()}};function Xf(t,e){var n=lt.getInstance(e);return(t===st.Default||t===st.WesternTraditional)&&n.firstDayStartsFirstWeek()}function Zf(t){if(typeof t=="object"){if(typeof t.firstDayOfWeek!="number"||typeof t.minimalDaysInFirstWeek!="number")throw new TypeError("Week config requires firstDayOfWeek and minimalDaysInFirstWeek to be set")}else if(!Object.values(st).includes(t))throw new TypeError("Illegal format option calendarWeekNumbering: '"+t+"'")}function l0(t,e){return typeof t=="object"&&typeof t.firstDayOfWeek=="number"&&typeof t.minimalDaysInFirstWeek=="number"?t:Tu.getWeekConfigurationValues(t,e)}function pa(t,e,n,i){n=n||le.getFormatSettings().getFormatLocale();var o=l0(i,n),r=o.minimalDaysInFirstWeek,a=o.firstDayOfWeek,s=new t(t.UTC(e,0,1)),c=7;if(isNaN(s.getTime()))throw new Error("Could not determine the first day of the week, because the date object is invalid");for(;s.getUTCDay()!==a;)s.setUTCDate(s.getUTCDate()-1),c--;return c<r&&s.setUTCDate(s.getUTCDate()+7),s}function nl(t,e){return Math.floor((e.valueOf()-t.valueOf())/Gf)}var nd={};O.getEraByDate=function(t,e,n,i){for(var o=Qf(t),r=new Date(0).setUTCFullYear(e,n,i),a,s=o.length-1;s>=0;s--)if(a=o[s],!!a&&(a._start&&r>=a._startInfo.timestamp||a._end&&r<a._endInfo.timestamp))return s};O.getCurrentEra=function(t){var e=L.getInstance();return this.getEraByDate(t,e.getFullYear(),e.getMonth(),e.getDate())};O.getEraStartDate=function(t,e){var n=Qf(t),i=n[e]||n[0];if(i._start)return i._startInfo};function Qf(t){var e=le.getFormatSettings().getFormatLocale(),n=lt.getInstance(e),i=nd[t];if(!i){var i=n.getEraDates(t);i[0]||(i[0]={_start:"1-1-1"});for(var o=0;o<i.length;o++){var r=i[o];r&&(r._start&&(r._startInfo=id(r._start)),r._end&&(r._endInfo=id(r._end)))}nd[t]=i}return i}function id(t){var e=t.split("-"),n,i,o;return e[0]==""?(n=-parseInt(e[1]),i=parseInt(e[2])-1,o=parseInt(e[3])):(n=parseInt(e[0]),i=parseInt(e[1])-1,o=parseInt(e[2])),{timestamp:new Date(0).setUTCFullYear(n,i,o),year:n,month:i,day:o}}const Dn=O;let W=class fa{constructor(e,n,i,o){let r=arguments,a,s,c;switch(r.length){case 0:return s=sn.getInstance(),this.constructor(s.getFullYear(),s.getMonth(),s.getDate());case 1:case 2:if(!(r[0]instanceof fa))throw new Error("Invalid arguments: the first argument must be of type CalendarDate.");c=r[1]?r[1]:r[0]._oUDate.sCalendarType,a=sn.getInstance(r[0].valueOf()),a.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),a.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),this._oUDate=od(a,c);break;case 3:case 4:ri(r[0],`Invalid year: ${r[0]}`),ri(r[1],`Invalid month: ${r[1]}`),ri(r[2],`Invalid date: ${r[2]}`),a=sn.getInstance(0,0,1),a.setFullYear(r[0],r[1],r[2]),r[3]&&(c=r[3]),this._oUDate=od(a,c);break;default:throw new Error(`Invalid arguments. Accepted arguments are: 1) oCalendarDate, (optional)calendarTypeor 2) year, month, date, (optional) calendarType${r}`)}}getYear(){return this._oUDate.getUTCFullYear()}setYear(e){return ri(e,`Invalid year: ${e}`),this._oUDate.setUTCFullYear(e),this}getMonth(){return this._oUDate.getUTCMonth()}setMonth(e,n){return ri(e,`Invalid month: ${e}`),n||n===0?(ri(n,`Invalid date: ${n}`),this._oUDate.setUTCMonth(e,n)):this._oUDate.setUTCMonth(e),this}getDate(){return this._oUDate.getUTCDate()}setDate(e){return ri(e,`Invalid date: ${e}`),this._oUDate.setUTCDate(e),this}getDay(){return this._oUDate.getUTCDay()}getCalendarType(){return this._oUDate.sCalendarType}isBefore(e){return Ao(e),this.valueOf()<e.valueOf()}isAfter(e){return Ao(e),this.valueOf()>e.valueOf()}isSameOrBefore(e){return Ao(e),this.valueOf()<=e.valueOf()}isSameOrAfter(e){return Ao(e),this.valueOf()>=e.valueOf()}isSame(e){return Ao(e),this.valueOf()===e.valueOf()}toLocalJSDate(){const e=sn.getInstance(this._oUDate.getTime());return e.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),e.setHours(0,0,0,0),e}toUTCJSDate(){const e=sn.getInstance(this._oUDate.getTime());return e.setUTCHours(0,0,0,0),e}toString(){return`${this._oUDate.sCalendarType}: ${this.getYear()}/${this.getMonth()+1}/${this.getDate()}`}valueOf(){return this._oUDate.getTime()}static fromLocalJSDate(e,n){function i(o){return o&&Object.prototype.toString.call(o)==="[object Date]"&&!isNaN(o)}if(!i(e))throw new Error(`Date parameter must be a JavaScript Date object: [${e}].`);return new fa(e.getFullYear(),e.getMonth(),e.getDate(),n)}static fromTimestamp(e,n){const i=new fa(0,0,1);let o;try{o=Dn.getInstance(sn.getInstance(e),n)}catch{o=new Date(NaN)}return i._oUDate=o,i}};function od(t,e){return e?Dn.getInstance(rd(t),e):new Dn(rd(t).getTime())}function rd(t){const e=new Date(Date.UTC(0,0,1));return e.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),e}function Ao(t){if(!(t instanceof W))throw new Error(`Invalid calendar date: [${t}]. Expected: CalendarDate`)}function ri(t,e){if(t===void 0||t===1/0||isNaN(t))throw e}const c0=t=>{const e=new W(t);return e.setDate(1),e.setMonth(e.getMonth()+1),e.setDate(0),e.getDate()},Yo=(t,e,n,i)=>{let o=W.fromLocalJSDate(sn.getInstance(n*1e3),t),r=W.fromLocalJSDate(sn.getInstance(n*1e3),t);return o.setDate(1),i&&(o.setMonth(0),r.setMonth(11)),r.setDate(c0(r)),o=new W(o,e),r=new W(r,e),{firstDate:o,lastDate:r}},u0=lt;class _0 extends u0{}const il=new Map,yi=t=>(il.has(t)||il.set(t,new _0(t)),il.get(t)),Jf=(t,e,n)=>{const i=yi(Xe()),o=i.getIntervalPattern(""),r=i.getMonthsStandAlone("abbreviated",n),a=i.getMonthsStandAlone("wide",n);return t===e?{text:i.getMonths("abbreviated",n)[t],textInfo:i.getMonths("wide",n)[t]}:{text:o.replace(/\{0\}/,r[t]).replace(/\{1\}/,r[e]),textInfo:o.replace(/\{0\}/,a[t]).replace(/\{1\}/,a[e])}};var d0=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g,h0=function(t,e){return q(typeof t=="string"||t instanceof String,"pattern must be string"),(arguments.length>2||e!=null&&!Array.isArray(e))&&(e=Array.prototype.slice.call(arguments,1)),e=e||[],t.replace(d0,function(n,i,o,r,a){if(i)return"'";if(o)return o.replace(/''/g,"'");if(r)return String(e[parseInt(r)]);throw new Error("formatMessage: pattern syntax error at pos. "+a)})},Kl=function(t,e,n,i,o){if(typeof n=="boolean"&&(i=n,n=void 0),o||(o=0),n||(n=10),o>n)return E.warning("deepEqual comparison exceeded maximum recursion depth of "+n+". Treating values as unequal"),!1;if(t===e||Number.isNaN(t)&&Number.isNaN(e))return!0;if(Array.isArray(t)&&Array.isArray(e)){if(!i&&t.length!==e.length||t.length>e.length)return!1;for(var r=0;r<t.length;r++)if(!Kl(t[r],e[r],n,i,o+1))return!1;return!0}if(typeof t=="object"&&typeof e=="object"){if(!t||!e||t.constructor!==e.constructor||!i&&Object.keys(t).length!==Object.keys(e).length)return!1;if(t instanceof Node)return t.isEqualNode(e);if(t instanceof Date)return t.valueOf()===e.valueOf();for(var r in t)if(!Kl(t[r],e[r],n,i,o+1))return!1;return!0}return!1},x=function(){throw new Error},pt={DATE:"date",TIME:"time",DATETIME:"datetime",DATETIME_WITH_TIMEZONE:"datetimeWithTimezone"},ol={},Kf=function(t){if(typeof t!="string"&&!(t instanceof String)&&t!=null)throw new TypeError("The given timezone must be a string.")};x.oDateInfo={type:pt.DATE,oDefaultFormatOptions:{style:"medium",relativeScale:"day",relativeStyle:"wide"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"yyyy-MM-dd"},{pattern:"yyyyMMdd",strictParsing:!0}],bShortFallbackFormatOptions:!0,bPatternFallbackWithoutDelimiter:!0,getPattern:function(t,e,n){return t.getDatePattern(e,n)},oRequiredParts:{text:!0,year:!0,weekYear:!0,month:!0,day:!0},aRelativeScales:["year","month","week","day"],aRelativeParseScales:["year","quarter","month","week","day","hour","minute","second"],aIntervalCompareFields:["Era","FullYear","Quarter","Month","Week","Date"]};x.oDateTimeInfo={type:pt.DATETIME,oDefaultFormatOptions:{style:"medium",relativeScale:"auto",relativeStyle:"wide"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"yyyy-MM-dd'T'HH:mm:ss"},{pattern:"yyyyMMdd HHmmss"}],getPattern:function(t,e,n){var i=e.indexOf("/");return i>0?t.getCombinedDateTimePattern(e.substr(0,i),e.substr(i+1),n):t.getCombinedDateTimePattern(e,e,n)},oRequiredParts:{text:!0,year:!0,weekYear:!0,month:!0,day:!0,hour0_23:!0,hour1_24:!0,hour0_11:!0,hour1_12:!0},aRelativeScales:["year","month","week","day","hour","minute","second"],aRelativeParseScales:["year","quarter","month","week","day","hour","minute","second"],aIntervalCompareFields:["Era","FullYear","Quarter","Month","Week","Date","DayPeriod","Hours","Minutes","Seconds"]};x._getDateTimeWithTimezoneInfo=function(t){var e=t.showDate===void 0||t.showDate,n=t.showTime===void 0||t.showTime,i=t.showTimezone===void 0||t.showTimezone,o=x.oDateTimeInfo;return e&&!n?o=x.oDateInfo:!e&&n&&(o=x.oTimeInfo),Object.assign({},o,{type:pt.DATETIME_WITH_TIMEZONE,getTimezonePattern:function(r){return!e&&!n&&i?"VV":i?r+" VV":r},getPattern:function(r,a,s){if(!e&&!n&&i)return"VV";if(!i)return o.getPattern(r,a,s);var c=o.getPattern(r,a,s);return r.applyTimezonePattern(c)}})};x.oTimeInfo={type:pt.TIME,oDefaultFormatOptions:{style:"medium",relativeScale:"auto",relativeStyle:"wide"},aFallbackFormatOptions:[{style:"short"},{style:"medium"},{pattern:"HH:mm:ss"},{pattern:"HHmmss"}],getPattern:function(t,e,n){return t.getTimePattern(e,n)},oRequiredParts:{text:!0,hour0_23:!0,hour1_24:!0,hour0_11:!0,hour1_12:!0},aRelativeScales:["hour","minute","second"],aRelativeParseScales:["year","quarter","month","week","day","hour","minute","second"],aIntervalCompareFields:["DayPeriod","Hours","Minutes","Seconds"]};x.getInstance=function(t,e){return this.getDateInstance(t,e)};x.getDateInstance=function(t,e){return this.createInstance(t,e,this.oDateInfo)};x.getDateTimeInstance=function(t,e){return this.createInstance(t,e,this.oDateTimeInfo)};x.getDateTimeWithTimezoneInstance=function(t,e){if(t&&!(t instanceof co)&&(function(){if(t=Object.assign({},t),typeof t.showTimezone=="string"){var n=t.showTimezone;t.showDate===void 0&&t.showTime===void 0&&(n==="Hide"?t.showTimezone=!1:n==="Only"&&(t.showDate=!1,t.showTime=!1)),t.showTimezone=n!=="Hide"}}(),t.showDate===!1&&t.showTime===!1&&t.showTimezone===!1))throw new TypeError("Invalid Configuration. One of the following format options must be true: showDate, showTime or showTimezone.");return this.createInstance(t,e,x._getDateTimeWithTimezoneInfo(t||{}))};x.getTimeInstance=function(t,e){return this.createInstance(t,e,this.oTimeInfo)};function p0(t){var e=t.oLocaleData.getIntervalPattern("",t.oFormatOptions.calendarType);return e=e.replace(/[^\{\}01 ]/,"-"),e.replace(/\{(0|1)\}/g,t.oFormatOptions.pattern)}x.createInstance=function(t,e,n,i){var o,r,a;if(r=Object.create(this.prototype),t instanceof co&&(e=t,t=void 0),e||(e=le.getFormatSettings().getFormatLocale()),r.oLocale=e,r.oLocaleData=lt.getInstance(e),r.oFormatOptions=xu({},n.oDefaultFormatOptions,t),n.type===pt.DATETIME_WITH_TIMEZONE?(r.oFormatOptions.interval=!1,r.oFormatOptions.singleIntervalValue=!1,r.oFormatOptions.UTC=!1):(r.oFormatOptions.showTimezone=void 0,r.oFormatOptions.showDate=void 0,r.oFormatOptions.showTime=void 0),r.type=n.type,r.oFormatOptions.calendarType||(r.oFormatOptions.calendarType=le.getCalendarType()),r.oFormatOptions.firstDayOfWeek===void 0&&r.oFormatOptions.minimalDaysInFirstWeek!==void 0||r.oFormatOptions.firstDayOfWeek!==void 0&&r.oFormatOptions.minimalDaysInFirstWeek===void 0)throw new TypeError("Format options firstDayOfWeek and minimalDaysInFirstWeek need both to be set, but only one was provided.");if(r.oFormatOptions.calendarWeekNumbering&&!Object.values(st).includes(r.oFormatOptions.calendarWeekNumbering))throw new TypeError("Illegal format option calendarWeekNumbering: '"+r.oFormatOptions.calendarWeekNumbering+"'");if(r.oFormatOptions.pattern||(r.oFormatOptions.format?r.oFormatOptions.pattern=r.oLocaleData.getCustomDateTimePattern(r.oFormatOptions.format,r.oFormatOptions.calendarType):r.oFormatOptions.pattern=n.getPattern(r.oLocaleData,r.oFormatOptions.style,r.oFormatOptions.calendarType)),r.oFormatOptions.interval){var s,c=r.oFormatOptions.intervalDelimiter;r.oFormatOptions.format?(r.intervalPatterns=r.oLocaleData.getCustomIntervalPattern(r.oFormatOptions.format,null,r.oFormatOptions.calendarType),typeof r.intervalPatterns=="string"&&(r.intervalPatterns=[r.intervalPatterns]),s=r.oLocaleData.getCustomDateTimePattern(r.oFormatOptions.format,r.oFormatOptions.calendarType),r.intervalPatterns.push(s)):(s=r.oFormatOptions.pattern,r.intervalPatterns=[r.oLocaleData.getCombinedIntervalPattern(r.oFormatOptions.pattern,r.oFormatOptions.calendarType),r.oFormatOptions.pattern]);var u=p0(r);r.intervalPatterns.push(u),c&&(c=c.replace(/'/g,"''"),c="'"+c+"'",r.intervalPatterns.unshift(s+c+s)),r.intervalPatterns=Array.from(new Set(r.intervalPatterns))}return i||(o=n.aFallbackFormatOptions,n.bShortFallbackFormatOptions&&(a=n.getPattern(r.oLocaleData,"short"),o=o.concat(x._createFallbackOptionsWithoutDelimiter(a))),r.oFormatOptions.pattern&&n.bPatternFallbackWithoutDelimiter&&(o=x._createFallbackOptionsWithoutDelimiter(r.oFormatOptions.pattern).concat(o)),o=o.reduce(function(h,_){var m=Object.keys(_),g=h.some(function(b){return Object.keys(b).length===m.length&&m.every(function(w){return b[w]===_[w]})});return g||h.push(_),h},[]),r.aFallbackFormats=x._createFallbackFormat(o,r.oFormatOptions.calendarType,e,n,r.oFormatOptions)),r.oRequiredParts=n.oRequiredParts,r.aRelativeScales=n.aRelativeScales,r.aRelativeParseScales=n.aRelativeParseScales,r.aIntervalCompareFields=n.aIntervalCompareFields,r.init(),r};x.prototype.init=function(){var t=this.oFormatOptions.calendarType;this.aMonthsAbbrev=this.oLocaleData.getMonths("abbreviated",t),this.aMonthsWide=this.oLocaleData.getMonths("wide",t),this.aMonthsNarrow=this.oLocaleData.getMonths("narrow",t),this.aMonthsAbbrevSt=this.oLocaleData.getMonthsStandAlone("abbreviated",t),this.aMonthsWideSt=this.oLocaleData.getMonthsStandAlone("wide",t),this.aMonthsNarrowSt=this.oLocaleData.getMonthsStandAlone("narrow",t),this.aDaysAbbrev=this.oLocaleData.getDays("abbreviated",t),this.aDaysWide=this.oLocaleData.getDays("wide",t),this.aDaysNarrow=this.oLocaleData.getDays("narrow",t),this.aDaysShort=this.oLocaleData.getDays("short",t),this.aDaysAbbrevSt=this.oLocaleData.getDaysStandAlone("abbreviated",t),this.aDaysWideSt=this.oLocaleData.getDaysStandAlone("wide",t),this.aDaysNarrowSt=this.oLocaleData.getDaysStandAlone("narrow",t),this.aDaysShortSt=this.oLocaleData.getDaysStandAlone("short",t),this.aQuartersAbbrev=this.oLocaleData.getQuarters("abbreviated",t),this.aQuartersWide=this.oLocaleData.getQuarters("wide",t),this.aQuartersNarrow=this.oLocaleData.getQuarters("narrow",t),this.aQuartersAbbrevSt=this.oLocaleData.getQuartersStandAlone("abbreviated",t),this.aQuartersWideSt=this.oLocaleData.getQuartersStandAlone("wide",t),this.aQuartersNarrowSt=this.oLocaleData.getQuartersStandAlone("narrow",t),this.aErasNarrow=this.oLocaleData.getEras("narrow",t),this.aErasAbbrev=this.oLocaleData.getEras("abbreviated",t),this.aErasWide=this.oLocaleData.getEras("wide",t),this.aDayPeriodsAbbrev=this.oLocaleData.getDayPeriods("abbreviated",t),this.aDayPeriodsNarrow=this.oLocaleData.getDayPeriods("narrow",t),this.aDayPeriodsWide=this.oLocaleData.getDayPeriods("wide",t),this.oFlexibleDayPeriodsAbbrev=this.oLocaleData.getFlexibleDayPeriods("abbreviated",t),this.oFlexibleDayPeriodsNarrow=this.oLocaleData.getFlexibleDayPeriods("narrow",t),this.oFlexibleDayPeriodsWide=this.oLocaleData.getFlexibleDayPeriods("wide",t),this.oFlexibleDayPeriodsAbbrevSt=this.oLocaleData.getFlexibleDayPeriodsStandAlone("abbreviated",t),this.oFlexibleDayPeriodsNarrowSt=this.oLocaleData.getFlexibleDayPeriodsStandAlone("narrow",t),this.oFlexibleDayPeriodsWideSt=this.oLocaleData.getFlexibleDayPeriodsStandAlone("wide",t),this.aFormatArray=this.parseCldrDatePattern(this.oFormatOptions.pattern),this.sAllowedCharacters=this.getAllowedCharacters(this.aFormatArray)};x._createFallbackFormat=function(t,e,n,i,o){return t.map(function(r){var a=Object.assign({},r);return a.showDate=o.showDate,a.showTime=o.showTime,a.showTimezone=o.showTimezone,typeof i.getTimezonePattern=="function"&&a.pattern&&(a.pattern=i.getTimezonePattern(a.pattern)),o.interval&&(a.interval=!0),a.calendarType=e,x.createInstance(a,n,i,!0)})};x._createFallbackOptionsWithoutDelimiter=function(t){var e=/[^dMyGU]/g,n={regex:/d+/g,replace:"dd"},i={regex:/M+/g,replace:"MM"},o={regex:/[yU]+/g,replace:["yyyy","yy"]};return t=t.replace(e,""),t=t.replace(n.regex,n.replace),t=t.replace(i.regex,i.replace),o.replace.map(function(r){return{pattern:t.replace(o.regex,r),strictParsing:!0}})};var B={isNumber:function(t){return t>=48&&t<=57},findNumbers:function(t,e){for(var n=0;n<e&&this.isNumber(t.charCodeAt(n));)n++;return t.substr(0,n)},startsWithIgnoreCase:function(t,e,n){if(t.startsWith(e))return!0;try{var i=e.toLocaleUpperCase(n),o=t.toLocaleUpperCase(n);return i.length!==e.length||o.length!==t.length?!1:o.startsWith(i)}catch{return!1}},findEntry:function(t,e,n){for(var i=-1,o=0,r=0;r<e.length;r++)e[r]&&e[r].length>o&&this.startsWithIgnoreCase(t,e[r],n)&&(i=r,o=e[r].length);return{index:i,length:o}},parseTZ:function(t,e){var n=0,i=t.charAt(0)==="+"?-1:1,o;n++,o=this.findNumbers(t.substr(n),2);var r=parseInt(o);n+=2,e&&n++,o=this.findNumbers(t.substr(n),2);var a=0;return o&&(n+=2,a=parseInt(o)),{length:n,tzDiff:(a+60*r)*60*i}},checkValid:function(t,e,n){return!(t in n.oRequiredParts&&e)}};x._createPatternSymbol=function(t){var e=typeof t.isNumeric=="function"&&t.isNumeric||function(){return t.isNumeric||!1};return{name:t.name,format:t.format||function(){return""},parse:t.parse||function(){return{}},isNumeric:e}};x.prototype.oSymbols={"":x._createPatternSymbol({name:"text",format:function(t,e){return t.value},parse:function(t,e,n,i){for(var o,r=!0,a=0,s=0,c="-~‐‑‒–—﹘﹣－～";s<e.value.length;s++){if(o=e.value.charAt(s),o===" ")for(;t.charAt(a)===" ";)a++;else c.includes(o)?(c.includes(t.charAt(a))||(r=!1),a++):(t.charAt(a)!==o&&(r=!1),a++);if(!r)break}if(r)return{length:a};var u=!1;return i.index<i.formatArray.length-1&&(u=i.formatArray[i.index+1].type in n.oRequiredParts),{valid:B.checkValid(e.type,u,n)}}}),G:x._createPatternSymbol({name:"era",format:function(t,e,n,i){var o=e.getUTCEra();return t.digits<=3?i.aErasAbbrev[o]:t.digits===4?i.aErasWide[o]:i.aErasNarrow[o]},parse:function(t,e,n,i){for(var o=[n.aErasWide,n.aErasAbbrev,n.aErasNarrow],r=0;r<o.length;r++){var a=o[r],s=B.findEntry(t,a,n.oLocaleData.sCLDRLocaleId);if(s.index!==-1)return{era:s.index,length:s.length}}return{era:n.aErasWide.length-1,valid:B.checkValid(e.type,!0,n)}}}),y:x._createPatternSymbol({name:"year",format:function(t,e,n,i){var o=e.getUTCFullYear(),r=String(o),a=i.oFormatOptions.calendarType;return t.digits===2&&r.length>2&&(r=r.substr(r.length-2)),a!==Yt.Japanese&&t.digits===1&&o<100&&(r=r.padStart(4,"0")),r.padStart(t.digits,"0")},parse:function(t,e,n,i){var o,r,a,s=n.oFormatOptions.calendarType;e.digits===1?o=4:e.digits===2?o=2:o=e.digits,r=B.findNumbers(t,o),a=r===""||i.exactLength&&r.length!==o;var c=parseInt(r);if(s!==Yt.Japanese&&r.length<=2){var u=O.getInstance(L.getInstance(),s),h=u.getUTCFullYear(),_=Math.floor(h/100),m=_*100+c-h;m<-70?c+=(_+1)*100:m<30?c+=_*100:c+=(_-1)*100}return{length:r.length,valid:B.checkValid(e.type,a,n),year:c}},isNumeric:!0}),Y:x._createPatternSymbol({name:"weekYear",format:function(t,e,n,i){var o=e.getUTCWeek(i.oLocale,Na(i.oFormatOptions)),r=o.year,a=String(r),s=i.oFormatOptions.calendarType;return t.digits===2&&a.length>2&&(a=a.substr(a.length-2)),s!==Yt.Japanese&&t.digits===1&&r<100&&(a=a.padStart(4,"0")),a.padStart(t.digits,"0")},parse:function(t,e,n,i){var o,r,a,s=n.oFormatOptions.calendarType;e.digits===1?o=4:e.digits===2?o=2:o=e.digits,r=B.findNumbers(t,o),a=r===""||i.exactLength&&r.length!==o;var c=parseInt(r),u=c;if(s!==Yt.Japanese&&r.length<=2){var h=O.getInstance(L.getInstance(),s),_=h.getUTCFullYear(),m=Math.floor(_/100),g=m*100+u-_;g<-70?u+=(m+1)*100:g<30?u+=m*100:u+=(m-1)*100}return{length:r.length,valid:B.checkValid(e.type,a,n),year:c,weekYear:u}},isNumeric:!0}),M:x._createPatternSymbol({name:"month",format:function(t,e,n,i){var o=e.getUTCMonth();return t.digits===3?i.aMonthsAbbrev[o]:t.digits===4?i.aMonthsWide[o]:t.digits>4?i.aMonthsNarrow[o]:String(o+1).padStart(t.digits,"0")},parse:function(t,e,n,i){var o,r,a,s,c=[n.aMonthsWide,n.aMonthsWideSt,n.aMonthsAbbrev,n.aMonthsAbbrevSt,n.aMonthsNarrow,n.aMonthsNarrowSt];if(e.digits<3)r=B.findNumbers(t,Math.max(e.digits,2)),a=r===""||i.exactLength&&r.length<2,s=B.checkValid(e.type,a,n),o=parseInt(r)-1,i.strict&&(o>11||o<0)&&(s=!1);else{for(var u=0;u<c.length;u++){var h=c[u],_=B.findEntry(t,h,n.oLocaleData.sCLDRLocaleId);if(_.index!==-1)return{month:_.index,length:_.length}}s=B.checkValid(e.type,!0,n)}return{month:o,length:r?r.length:0,valid:s}},isNumeric:function(t){return t<3}}),L:x._createPatternSymbol({name:"monthStandalone",format:function(t,e,n,i){var o=e.getUTCMonth();return t.digits===3?i.aMonthsAbbrevSt[o]:t.digits===4?i.aMonthsWideSt[o]:t.digits>4?i.aMonthsNarrowSt[o]:String(o+1).padStart(t.digits,"0")},parse:function(t,e,n,i){var o,r,a,s,c=[n.aMonthsWide,n.aMonthsWideSt,n.aMonthsAbbrev,n.aMonthsAbbrevSt,n.aMonthsNarrow,n.aMonthsNarrowSt];if(e.digits<3)r=B.findNumbers(t,Math.max(e.digits,2)),a=r===""||i.exactLength&&r.length<2,s=B.checkValid(e.type,a,n),o=parseInt(r)-1,i.strict&&(o>11||o<0)&&(s=!1);else{for(var u=0;u<c.length;u++){var h=c[u],_=B.findEntry(t,h,n.oLocaleData.sCLDRLocaleId);if(_.index!==-1)return{month:_.index,length:_.length}}s=B.checkValid(e.type,!0,n)}return{month:o,length:r?r.length:0,valid:s}},isNumeric:function(t){return t<3}}),w:x._createPatternSymbol({name:"weekInYear",format:function(t,e,n,i){var o=e.getUTCWeek(i.oLocale,Na(i.oFormatOptions)),r=o.week,a=String(r+1);return t.digits<3?a=a.padStart(t.digits,"0"):a=i.oLocaleData.getCalendarWeek(t.digits===3?"narrow":"wide",a.padStart(2,"0")),a},parse:function(t,e,n,i){var o,r,a,s,c=0;if(e.digits<3)o=B.findNumbers(t,2),c=o.length,s=parseInt(o)-1,r=!o||i.exactLength&&c<2,a=B.checkValid(e.type,r,n);else{o=n.oLocaleData.getCalendarWeek(e.digits===3?"narrow":"wide"),o=o.replace("{0}","([0-9]+)");var u=new RegExp(o),h=u.exec(t);h?(c=h[0].length,s=parseInt(h[h.length-1])-1):a=B.checkValid(e.type,!0,n)}return{length:c,valid:a,week:s}},isNumeric:function(t){return t<3}}),W:x._createPatternSymbol({name:"weekInMonth"}),D:x._createPatternSymbol({name:"dayInYear"}),d:x._createPatternSymbol({name:"day",format:function(t,e){var n=e.getUTCDate();return String(n).padStart(t.digits,"0")},parse:function(t,e,n,i){var o=B.findNumbers(t,Math.max(e.digits,2)),r=o===""||i.exactLength&&o.length<2,a=B.checkValid(e.type,r,n),s=parseInt(o);return i.strict&&(s>31||s<1)&&(a=!1),{day:s,length:o.length,valid:a}},isNumeric:!0}),Q:x._createPatternSymbol({name:"quarter",format:function(t,e,n,i){var o=e.getUTCQuarter();return t.digits===3?i.aQuartersAbbrev[o]:t.digits===4?i.aQuartersWide[o]:t.digits>4?i.aQuartersNarrow[o]:String(o+1).padStart(t.digits,"0")},parse:function(t,e,n,i){var o,r,a,s,c=[n.aQuartersWide,n.aQuartersWideSt,n.aQuartersAbbrev,n.aQuartersAbbrevSt,n.aQuartersNarrow,n.aQuartersNarrowSt];if(e.digits<3)o=B.findNumbers(t,Math.max(e.digits,2)),r=o===""||i.exactLength&&o.length<2,s=B.checkValid(e.type,r,n),a=parseInt(o)-1,i.strict&&a>3&&(s=!1);else{for(var u=0;u<c.length;u++){var h=c[u],_=B.findEntry(t,h,n.oLocaleData.sCLDRLocaleId);if(_.index!==-1)return{quarter:_.index,length:_.length}}s=B.checkValid(e.type,!0,n)}return{length:o?o.length:0,quarter:a,valid:s}},isNumeric:function(t){return t<3}}),q:x._createPatternSymbol({name:"quarterStandalone",format:function(t,e,n,i){var o=e.getUTCQuarter();return t.digits===3?i.aQuartersAbbrevSt[o]:t.digits===4?i.aQuartersWideSt[o]:t.digits>4?i.aQuartersNarrowSt[o]:String(o+1).padStart(t.digits,"0")},parse:function(t,e,n,i){var o,r,a,s,c=[n.aQuartersWide,n.aQuartersWideSt,n.aQuartersAbbrev,n.aQuartersAbbrevSt,n.aQuartersNarrow,n.aQuartersNarrowSt];if(e.digits<3)o=B.findNumbers(t,Math.max(e.digits,2)),r=o===""||i.exactLength&&o.length<2,s=B.checkValid(e.type,r,n),a=parseInt(o)-1,i.strict&&a>3&&(s=!1);else{for(var u=0;u<c.length;u++){var h=c[u],_=B.findEntry(t,h,n.oLocaleData.sCLDRLocaleId);if(_.index!==-1)return{quarter:_.index,length:_.length}}s=B.checkValid(e.type,!0,n)}return{length:o?o.length:0,quarter:a,valid:s}},isNumeric:function(t){return t<3}}),F:x._createPatternSymbol({name:"dayOfWeekInMonth"}),E:x._createPatternSymbol({name:"dayNameInWeek",format:function(t,e,n,i){var o=e.getUTCDay();return t.digits<4?i.aDaysAbbrev[o]:t.digits===4?i.aDaysWide[o]:t.digits===5?i.aDaysNarrow[o]:i.aDaysShort[o]},parse:function(t,e,n,i){for(var o=[n.aDaysWide,n.aDaysWideSt,n.aDaysAbbrev,n.aDaysAbbrevSt,n.aDaysShort,n.aDaysShortSt,n.aDaysNarrow,n.aDaysNarrowSt],r=0;r<o.length;r++){var a=o[r],s=B.findEntry(t,a,n.oLocaleData.sCLDRLocaleId);if(s.index!==-1)return{dayOfWeek:s.index,length:s.length}}}}),c:x._createPatternSymbol({name:"dayNameInWeekStandalone",format:function(t,e,n,i){var o=e.getUTCDay();return t.digits<4?i.aDaysAbbrevSt[o]:t.digits===4?i.aDaysWideSt[o]:t.digits===5?i.aDaysNarrowSt[o]:i.aDaysShortSt[o]},parse:function(t,e,n,i){for(var o=[n.aDaysWide,n.aDaysWideSt,n.aDaysAbbrev,n.aDaysAbbrevSt,n.aDaysShort,n.aDaysShortSt,n.aDaysNarrow,n.aDaysNarrowSt],r=0;r<o.length;r++){var a=o[r],s=B.findEntry(t,a,n.oLocaleData.sCLDRLocaleId);if(s.index!==-1)return{day:s.index,length:s.length}}}}),u:x._createPatternSymbol({name:"dayNumberOfWeek",format:function(t,e,n,i){var o=e.getUTCDay();return i._adaptDayOfWeek(o)},parse:function(t,e,n,i){var o=B.findNumbers(t,e.digits),r=i.exactLength&&o.length!==e.digits;return{dayNumberOfWeek:parseInt(o),length:o.length,valid:B.checkValid(e.type,r,n)}},isNumeric:!0}),a:x._createPatternSymbol({name:"amPmMarker",format:function(t,e,n,i){var o=e.getUTCDayPeriod();return t.digits<=3?i.aDayPeriodsAbbrev[o]:t.digits===4?i.aDayPeriodsWide[o]:i.aDayPeriodsNarrow[o]},parse:function(t,e,n,i,o){var r,a,s,c,u,m,h,_=[n.aDayPeriodsWide,n.aDayPeriodsAbbrev,n.aDayPeriodsNarrow];r=/[aApP](?:\.)?[\x20\xA0]?[mM](?:\.)?/,u=t.match(r),a=u&&u.index===0;function m(g){return g.replace(/[\x20\xA0]/g,"").replace(/\./g,"")}for(a&&(t=m(t)),c=0;c<_.length;c+=1)if(h=_[c],a&&(h=h.map(m)),s=B.findEntry(t,h,n.oLocaleData.sCLDRLocaleId),s.index!==-1)return{pm:s.index===1,length:a?u[0].length:s.length};return{valid:!1}}}),B:x._createPatternSymbol({name:"flexibleDayPeriod",format:function(t,e,n,i){var o=i.aFormatArray.some(function(a){return"hHKk".includes(a.symbol)}),r=i.oLocaleData.getFlexibleDayPeriodOfTime(e.getUTCHours(),e.getUTCMinutes());return o?t.digits<=3?i.oFlexibleDayPeriodsAbbrev[r]:t.digits===4?i.oFlexibleDayPeriodsWide[r]:i.oFlexibleDayPeriodsNarrow[r]:t.digits<=3?i.oFlexibleDayPeriodsAbbrevSt[r]:t.digits===4?i.oFlexibleDayPeriodsWideSt[r]:i.oFlexibleDayPeriodsNarrowSt[r]},parse:function(t,e,n,i){var o,r,a,s=n.aFormatArray.some(function(u){return"hHKk".includes(u.symbol)}),c=[n.oFlexibleDayPeriodsWide,n.oFlexibleDayPeriodsAbbrev,n.oFlexibleDayPeriodsNarrow];if(s){for(o=0;o<c.length;o++)if(a=c[o],r=B.findEntry(t,Object.values(a),n.oLocaleData.sCLDRLocaleId),r.index!==-1)return{flexDayPeriod:Object.keys(a)[r.index],length:r.length}}return{valid:!1}}}),H:x._createPatternSymbol({name:"hour0_23",format:function(t,e){var n=e.getUTCHours();return String(n).padStart(t.digits,"0")},parse:function(t,e,n,i){var o=B.findNumbers(t,Math.max(e.digits,2)),r=parseInt(o),a=o===""||i.exactLength&&o.length<2,s=B.checkValid(e.type,a,n);return i.strict&&r>23&&(s=!1),{hour:r,length:o.length,valid:s}},isNumeric:!0}),k:x._createPatternSymbol({name:"hour1_24",format:function(t,e){var n=e.getUTCHours(),i=n===0?"24":String(n);return i.padStart(t.digits,"0")},parse:function(t,e,n,i){var o=B.findNumbers(t,Math.max(e.digits,2)),r=parseInt(o),a=o===""||i.exactLength&&o.length<2,s=B.checkValid(e.type,a,n);return r===24&&(r=0),i.strict&&r>23&&(s=!1),{hour:r,length:o.length,valid:s}},isNumeric:!0}),K:x._createPatternSymbol({name:"hour0_11",format:function(t,e){var n=e.getUTCHours(),i=String(n>11?n-12:n);return i.padStart(t.digits,"0")},parse:function(t,e,n,i){var o=B.findNumbers(t,Math.max(e.digits,2)),r=parseInt(o),a=o===""||i.exactLength&&o.length<2,s=B.checkValid(e.type,a,n);return i.strict&&r>11&&(s=!1),{hour:r,length:o.length,valid:s}},isNumeric:!0}),h:x._createPatternSymbol({name:"hour1_12",format:function(t,e){var n=e.getUTCHours(),i;return n>12?i=String(n-12):n===0?i="12":i=String(n),i.padStart(t.digits,"0")},parse:function(t,e,n,i){var o=i.dateValue.pm,r=B.findNumbers(t,Math.max(e.digits,2)),a=parseInt(r),s=r===""||i.exactLength&&r.length<2,c=B.checkValid(e.type,s,n);return a===12&&(a=0,o=o===void 0?!0:o),i.strict&&a>11&&(c=!1),{hour:a,length:r.length,pm:o,valid:c}},isNumeric:!0}),m:x._createPatternSymbol({name:"minute",format:function(t,e){var n=e.getUTCMinutes();return String(n).padStart(t.digits,"0")},parse:function(t,e,n,i){var o=B.findNumbers(t,Math.max(e.digits,2)),r=parseInt(o),a=o===""||i.exactLength&&o.length<2,s=B.checkValid(e.type,a,n);return i.strict&&r>59&&(s=!1),{length:o.length,minute:r,valid:s}},isNumeric:!0}),s:x._createPatternSymbol({name:"second",format:function(t,e){var n=e.getUTCSeconds();return String(n).padStart(t.digits,"0")},parse:function(t,e,n,i){var o=Math.max(e.digits,2),r=B.findNumbers(t,o),a=r===""||i.exactLength&&r.length<o,s=parseInt(r),c=B.checkValid(e.type,a,n);return i.strict&&s>59&&(c=!1),{length:r.length,second:s,valid:c}},isNumeric:!0}),S:x._createPatternSymbol({name:"fractionalsecond",format:function(t,e){var n=e.getUTCMilliseconds(),i=String(n),o=i.padStart(3,"0");return o=o.substr(0,t.digits),o=o.padEnd(t.digits,"0"),o},parse:function(t,e,n,i){var o=B.findNumbers(t,e.digits),r=o.length,a=i.exactLength&&r<e.digits;o=o.substr(0,3),o=o.padEnd(3,"0");var s=parseInt(o);return{length:r,millisecond:s,valid:B.checkValid(e.type,a,n)}},isNumeric:!0}),z:x._createPatternSymbol({name:"timezoneGeneral",format:function(t,e,n,i,o){if(t.digits>3&&e.getTimezoneLong&&e.getTimezoneLong())return e.getTimezoneLong();if(e.getTimezoneShort&&e.getTimezoneShort())return e.getTimezoneShort();var r=_e.calculateOffset(e,o),a="GMT",s=Math.abs(r/60),c=r>0,u=Math.floor(s/60),h=Math.floor(s%60);return!n&&s!==0?(a+=c?"-":"+",a+=String(u).padStart(2,"0"),a+=":",a+=String(h).padStart(2,"0")):a+="Z",a},parse:function(t,e,n,i){var o=0,r,a=t.substring(0,3);if(a==="GMT"||a==="UTC")o=3;else if(t.substring(0,2)==="UT")o=2;else if(t.charAt(0)==="Z")o=1,r=0;else return{error:"cannot be parsed correctly by sap.ui.core.format.DateFormat: The given timezone is not supported!"};if(t.charAt(0)!=="Z"){var s=B.parseTZ(t.substr(o),!0);o+=s.length,r=s.tzDiff}return{length:o,tzDiff:r}}}),Z:x._createPatternSymbol({name:"timezoneRFC822",format:function(t,e,n,i,o){var r=_e.calculateOffset(e,o),a=Math.abs(r/60),s=r>0,c=Math.floor(a/60),u=Math.floor(a%60),h="";return n||(h+=s?"-":"+",h+=String(c).padStart(2,"0"),h+=String(u).padStart(2,"0")),h},parse:function(t,e,n,i){return B.parseTZ(t,!1)}}),X:x._createPatternSymbol({name:"timezoneISO8601",format:function(t,e,n,i,o){var r=_e.calculateOffset(e,o),a=Math.abs(r/60),s=r>0,c=Math.floor(a/60),u=Math.floor(a%60),h="";return!n&&a!==0?(h+=s?"-":"+",h+=String(c).padStart(2,"0"),(t.digits>1||u>0)&&((t.digits===3||t.digits===5)&&(h+=":"),h+=String(u).padStart(2,"0"))):h+="Z",h},parse:function(t,e,n,i){return t.charAt(0)==="Z"?{length:1,tzDiff:0}:B.parseTZ(t,e.digits===3||e.digits===5)}}),V:x._createPatternSymbol({name:"timezoneID",format:function(t,e,n,i,o){return!n&&t.digits===2?i.oLocaleData.getTimezoneTranslations()[o]||o:""},parse:function(t,e,n,i,o){var r={timezone:"",length:0};if(e.digits===2){var a=n.oLocaleData.getTimezoneTranslations();if(t===a[o])return{timezone:o,length:t.length};var s=Object.values(a),c=B.findEntry(t,s,n.oLocaleData.sCLDRLocaleId);if(c.index!==-1)return{timezone:Object.keys(a)[c.index],length:c.length};for(var u="",h=0;h<t.length;h++)u+=t[h],_e.isValidTimezone(u)&&(r.timezone=u,r.length=u.length)}return r}})};x.prototype._format=function(t,e,n){if(this.oFormatOptions.relative){var i=this.formatRelative(t,e,this.oFormatOptions.relativeRange,n);if(i)return i}for(var o=this.oFormatOptions.calendarType,r=O.getInstance(t,o),a=[],s,c,u,h=0;h<this.aFormatArray.length;h++)s=this.aFormatArray[h],u=s.symbol||"",a.push(this.oSymbols[u].format(s,r,e,this,n));return c=a.join(""),le.getOriginInfo()&&(c=new String(c),c.originInfo={source:"Common Locale Data Repository",locale:this.oLocale.toString(),style:this.oFormatOptions.style,pattern:this.oFormatOptions.pattern}),c};x.prototype.format=function(t,e){var n;if(this.type===pt.DATETIME_WITH_TIMEZONE&&(n=e,e=!1,Kf(n),n&&!_e.isValidTimezone(n)))return E.error("The given timezone isn't valid."),"";var i=this.oFormatOptions.calendarType,o;if(e===void 0&&(e=this.oFormatOptions.UTC),n=n||le.getTimezone(),Array.isArray(t)){if(!this.oFormatOptions.interval)return E.error("Non-interval DateFormat can't format more than one date instance."),"";if(t.length!==2)return E.error("Interval DateFormat can only format with 2 date instances but "+t.length+" is given."),"";if(t=t.map(function(r){return ec(r,n,e)}),this.oFormatOptions.singleIntervalValue){if(t[0]===null)return E.error("First date instance which is passed to the interval DateFormat shouldn't be null."),"";t[1]===null&&(o=this._format(t[0],e,n))}if(o===void 0){if(!t.every(tc))return E.error("At least one date instance which is passed to the interval DateFormat isn't valid."),"";o=this._formatInterval(t,e)}}else{if(!tc(t))return this.type===pt.DATETIME_WITH_TIMEZONE&&this.oFormatOptions.pattern.includes("VV")?this.oLocaleData.getTimezoneTranslations()[n]||n:(E.error("The given date instance isn't valid."),"");if(this.oFormatOptions.interval)return E.error("Interval DateFormat expects an array with two dates for the first argument but only one date is given."),"";t=ec(t,n,e),o=this._format(t,e,n)}return i===Yt.Japanese&&this.oLocale.getLanguage()==="ja"&&(o=o.replace(/(^|[^\d])1年/g,"$1元年")),o};x.prototype._useCustomIntervalDelimiter=function(t){var e;return this.oFormatOptions.intervalDelimiter?this.oFormatOptions.format?(e=this.oLocaleData._parseSkeletonFormat(this.oFormatOptions.format),e.some(function(n){return t[n.group]})):!0:!1};x.prototype._formatInterval=function(t,e){var n,i,o,r,a=[],s=this.oFormatOptions.calendarType,c=[],u=O.getInstance(t[0],s),h=O.getInstance(t[1],s),_=this._getDiffFields([u,h]);if(!_)return this._format(t[0],e);this._useCustomIntervalDelimiter(_)?o=this.intervalPatterns[0]:this.oFormatOptions.format?o=this.oLocaleData.getCustomIntervalPattern(this.oFormatOptions.format,_,s):o=this.oLocaleData.getCombinedIntervalPattern(this.oFormatOptions.pattern,s),c=this.parseCldrDatePattern(o),n=u;for(var m=0;m<c.length;m++)i=c[m],r=i.symbol||"",i.repeat&&(n=h),a.push(this.oSymbols[r].format(i,n,e,this));return a.join("")};var f0={Era:"Era",FullYear:"Year",Quarter:"Quarter",Month:"Month",Week:"Week",Date:"Day",DayPeriod:"DayPeriod",Hours:"Hour",Minutes:"Minute",Seconds:"Second"};x.prototype._getDiffFields=function(t){var e=!1,n={};return this.aIntervalCompareFields.forEach(function(i){var o="getUTC",r=o+i,a=f0[i],s=t[0][r].apply(t[0]),c=t[1][r].apply(t[1]);Kl(s,c)||(e=!0,n[a]=!0)}),e?n:null};x.prototype._parse=function(t,e,n,i,o){var r,a,s,c,u,h,_,m={valid:!0,lastTimezonePatternSymbol:""},g=0,b={formatArray:e,dateValue:m,strict:i},w=this;function T(R){return w.oSymbols[R.symbol||""]}function D(R){return!!R&&T(R).isNumeric(R.digits)}for(var S=0;S<e.length&&(_=t.substr(g),s=e[S],u=e[S-1],a=e[S+1],b.index=S,b.exactLength=D(s)&&(D(u)||D(a)),h=T(s).parse(_,s,this,b,o)||{},(h.tzDiff!==void 0||h.timezone)&&(h.lastTimezonePatternSymbol=s.symbol),m=xu(m,h),h.valid!==!1);S++)g+=h.length||0;return m.index=g,c=m.pm,m.flexDayPeriod&&m.hour*60+(m.minute||0)<720&&(r=this.oLocaleData.getFlexibleDayPeriodOfTime(m.hour+12,m.minute||0),c=m.flexDayPeriod===r),c&&(m.hour+=12),m.dayNumberOfWeek===void 0&&m.dayOfWeek!==void 0&&(m.dayNumberOfWeek=this._adaptDayOfWeek(m.dayOfWeek)),m.quarter!==void 0&&m.month===void 0&&m.day===void 0&&(m.month=3*m.quarter,m.day=1),m};x.prototype._parseInterval=function(t,e,n,i,o){var r,a,s;return this.intervalPatterns.some((function(c){var u=this.parseCldrDatePattern(c);a=void 0;for(var h=0;h<u.length;h++)if(u[h].repeat){a=h;break}if(a===void 0)return s=this._parse(t,u,n,i,o),(s.index===0||s.index<t.length)&&(s.valid=!1),s.valid===!1?void 0:(r=[s,s],!0);if(r=[],s=this._parse(t,u.slice(0,a),n,i,o),s.valid===!1)return;r.push(s);var _=s.index;return s=this._parse(t.substring(_),u.slice(a),n,i,o),(s.index===0||s.index+_<t.length)&&(s.valid=!1),s.valid===!1?void 0:(r.push(s),!0)}).bind(this)),r};function Na(t){if(t.calendarWeekNumbering)return t.calendarWeekNumbering;if(t.firstDayOfWeek!==void 0&&t.minimalDaysInFirstWeek!==void 0)return{firstDayOfWeek:t.firstDayOfWeek,minimalDaysInFirstWeek:t.minimalDaysInFirstWeek}}var ec=function(t,e,n){return!n&&tc(t)?_e.convertToTimezone(t,e):t},rl=function(t,e,n,i,o,r,a){if(!t.valid)return null;var s,c=typeof t.year=="number"?t.year:1970;return s=O.getInstance(new Date(0),e),s.setUTCEra(t.era||O.getCurrentEra(e)),s.setUTCFullYear(c),s.setUTCMonth(t.month||0),s.setUTCDate(t.day||1),s.setUTCHours(t.hour||0),s.setUTCMinutes(t.minute||0),s.setUTCSeconds(t.second||0),s.setUTCMilliseconds(t.millisecond||0),i&&(t.day||1)!==s.getUTCDate()?null:(t.week!==void 0&&(t.month===void 0||t.day===void 0)&&(s.setUTCWeek({year:t.weekYear||t.year,week:t.week},a,Na(r)),t.dayNumberOfWeek!==void 0&&s.setUTCDate(s.getUTCDate()+t.dayNumberOfWeek-1)),s=s.getJSDate(),!n&&(t.lastTimezonePatternSymbol==="V"&&t.timezone||t.tzDiff===void 0)&&(t.timezone&&(o=t.timezone),o&&(t.tzDiff=_e.calculateOffset(s,o))),t.tzDiff&&s.setUTCSeconds(s.getUTCSeconds()+t.tzDiff),s)};function ad(t,e){if(t===e)return t;var n={};return Object.keys(t).forEach(function(i){n[i]=t[i]}),Object.keys(e).forEach(function(i){n.hasOwnProperty(i)||(n[i]=e[i])}),n}function m0(t,e){return!(t.getTime()>e.getTime())}function tc(t){return t&&typeof t.getTime=="function"&&!isNaN(t.getTime())}x.prototype.parse=function(t,e,n){var i=this.oFormatOptions.showDate===void 0||this.oFormatOptions.showDate,o=this.oFormatOptions.showTime===void 0||this.oFormatOptions.showTime;if(this.type===pt.DATETIME_WITH_TIMEZONE&&(i&&!o||!i&&o))throw new TypeError("The input can only be parsed back to date if both date and time are supplied.");var r;e===void 0&&this.type!==pt.DATETIME_WITH_TIMEZONE&&(e=this.oFormatOptions.UTC);var a=e;if(this.type===pt.DATETIME_WITH_TIMEZONE&&(r=e,e=!1,Kf(r),r&&!_e.isValidTimezone(r)))return E.error("The given timezone isn't valid."),null;t=t==null?"":String(t).trim();var s,c=this.oFormatOptions.calendarType;if(r=r||le.getTimezone(),n===void 0&&(n=this.oFormatOptions.strictParsing),c===Yt.Japanese&&this.oLocale.getLanguage()==="ja"&&(t=t.replace(/元年/g,"1年")),this.oFormatOptions.interval){var _=this._parseInterval(t,c,e,n,r),m,g;if(_&&_.length===2){var b=ad(_[0],_[1]),w=ad(_[1],_[0]);if(m=rl(b,c,e,n,r,this.oFormatOptions,this.oLocale),g=rl(w,c,e,n,r,this.oFormatOptions,this.oLocale),m&&g){if(this.oFormatOptions.singleIntervalValue&&m.getTime()===g.getTime())return[m,null];var T=m0(m,g);return n&&!T?(E.error("StrictParsing: Invalid date range. The given end date is before the start date."),[null,null]):[m,g]}}}else{var u=this.parseRelative(t,e);if(u)return u;if(s=this._parse(t,this.aFormatArray,e,n,r),(s.index===0||s.index<t.length)&&(s.valid=!1),u=rl(s,c,e,n,r,this.oFormatOptions,this.oLocale),u){if(this.type===pt.DATETIME_WITH_TIMEZONE){var h=this.oFormatOptions.showTimezone===void 0||this.oFormatOptions.showTimezone;return!h&&i&&o?[u,void 0]:h&&!i&&!o?[void 0,s.timezone]:[u,s.timezone||void 0]}return u}}if(this.aFallbackFormats){var D;return this.aFallbackFormats.every(function(S){return D=S.parse(t,a,n),Array.isArray(D)?S.type===pt.DATETIME_WITH_TIMEZONE?!1:!(D[0]&&D[1]):!D}),D}return this.oFormatOptions.interval?[null,null]:null};x.prototype.parseCldrDatePattern=function(t){if(ol[t])return ol[t];var e=[],n,i=!1,o=null,r="",a="",s={},c=!1;for(n=0;n<t.length;n++){var u=t.charAt(n),h,_,m;if(i){if(u==="'")if(_=t.charAt(n-1),m=t.charAt(n-2),h=t.charAt(n+1),_==="'"&&m!=="'")i=!1;else if(h==="'")n+=1;else{i=!1;continue}r==="text"?o.value+=u:(o={type:"text",value:u},e.push(o),r="text")}else u==="'"?i=!0:this.oSymbols[u]?(a=this.oSymbols[u].name,r===a?o.digits++:(o={type:a,symbol:u,digits:1},e.push(o),r=a,c||(s[a]?(o.repeat=!0,c=!0):s[a]=!0))):r==="text"?o.value+=u:(o={type:"text",value:u},e.push(o),r="text")}return ol[t]=e,e};x.prototype.parseRelative=function(t,e){var n,i,o,r,a;if(!t)return null;n=this.oLocaleData.getRelativePatterns(this.aRelativeParseScales,this.oFormatOptions.relativeStyle);for(var s=0;s<n.length;s++)if(i=n[s],o=new RegExp("^\\s*"+i.pattern.replace(/\{0\}/,"(\\d+)")+"\\s*$","i"),r=o.exec(t),r)return i.value!==void 0?c(i.value,i.scale):(a=parseInt(r[1]),c(a*i.sign,i.scale));function c(u,h){var _=L.getInstance();if(e)switch(_.setUTCFullYear(_.getFullYear(),_.getMonth(),_.getDate()),_.setUTCHours(_.getHours(),_.getMinutes(),_.getSeconds(),_.getMilliseconds()),h){case"second":_.setUTCSeconds(_.getUTCSeconds()+u);break;case"minute":_.setUTCMinutes(_.getUTCMinutes()+u);break;case"hour":_.setUTCHours(_.getUTCHours()+u);break;case"day":_.setUTCDate(_.getUTCDate()+u);break;case"week":_.setUTCDate(_.getUTCDate()+u*7);break;case"month":_.setUTCMonth(_.getUTCMonth()+u);break;case"quarter":_.setUTCMonth(_.getUTCMonth()+u*3);break;case"year":_.setUTCFullYear(_.getUTCFullYear()+u);break}else switch(h){case"second":_.setSeconds(_.getSeconds()+u);break;case"minute":_.setMinutes(_.getMinutes()+u);break;case"hour":_.setHours(_.getHours()+u);break;case"day":_.setDate(_.getDate()+u);break;case"week":_.setDate(_.getDate()+u*7);break;case"month":_.setMonth(_.getMonth()+u);break;case"quarter":_.setMonth(_.getMonth()+u*3);break;case"year":_.setFullYear(_.getFullYear()+u);break}return _}};x.prototype.formatRelative=function(t,e,n,i){var o,r,a,s,c=ec(new Date,i),u=this.oFormatOptions.relativeScale||"day";return a=(t.getTime()-c.getTime())/1e3,this.oFormatOptions.relativeScale==="auto"&&(u=this._getScale(a,this.aRelativeScales),u=g0(t,c,u,a)),n||(n=this._mRanges[u]),(u==="year"||u==="month"||u==="day")&&(c=new Date(Date.UTC(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate())),o=new Date(0),o.setUTCFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),t=o),r=this._getDifference(u,[c,t]),this.oFormatOptions.relativeScale!=="auto"&&(r<n[0]||r>n[1])?null:(s=this.oLocaleData.getRelativePattern(u,r,a>0,this.oFormatOptions.relativeStyle),h0(s,[Math.abs(r)]))};x.prototype._mRanges={second:[-60,60],minute:[-60,60],hour:[-24,24],day:[-6,6],week:[-4,4],month:[-12,12],year:[-10,10]};x.prototype._mScales={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};x.prototype._getScale=function(t,e){var n,i;t=Math.abs(t);for(var o=0;o<e.length;o++)if(i=e[o],t>=this._mScales[i]){n=i;break}return n||(n=e[e.length-1]),n};function g0(t,e,n,i){var o=Math.abs(t.getUTCMonth()-e.getUTCMonth());if(n==="week"&&o===2)return"month";if(n==="week"&&o===1){if(t.getUTCDate()===e.getUTCDate()||i<0&&t.getUTCDate()<e.getUTCDate()||i>0&&t.getUTCDate()>e.getUTCDate())return"month"}else if(n==="month"&&o===1&&(i>0&&t.getUTCDate()<e.getUTCDate()||i<0&&t.getUTCDate()>e.getUTCDate()))return"week";return n}function jt(t,e){for(var n,i=["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],o=new Date(t.getTime()),r=e;r<i.length;r++)n="setUTC"+i[e],o[n].apply(o,[0]);return o}var v0={year:function(t,e){return e.getUTCFullYear()-t.getUTCFullYear()},month:function(t,e){return e.getUTCMonth()-t.getUTCMonth()+this.year(t,e)*12},week:function(t,e,n){var i=n._adaptDayOfWeek(t.getUTCDay()),o=n._adaptDayOfWeek(e.getUTCDay());return t=jt(t,3),e=jt(e,3),(e.getTime()-t.getTime()-(o-i)*n._mScales.day*1e3)/(n._mScales.week*1e3)},day:function(t,e,n){return t=jt(t,3),e=jt(e,3),(e.getTime()-t.getTime())/(n._mScales.day*1e3)},hour:function(t,e,n){return t=jt(t,4),e=jt(e,4),(e.getTime()-t.getTime())/(n._mScales.hour*1e3)},minute:function(t,e,n){return t=jt(t,5),e=jt(e,5),(e.getTime()-t.getTime())/(n._mScales.minute*1e3)},second:function(t,e,n){return t=jt(t,6),e=jt(e,6),(e.getTime()-t.getTime())/(n._mScales.second*1e3)}};x.prototype._adaptDayOfWeek=function(t){var e=Na(this.oFormatOptions),n;typeof e=="object"?n=e.firstDayOfWeek:n=Tu.getWeekConfigurationValues(e,this.oLocale).firstDayOfWeek;var i=t-(n-1);return i<=0&&(i+=7),i};x.prototype._getDifference=function(t,e){var n=e[0],i=e[1];return Math.round(v0[t](n,i,this))};x.prototype.getAllowedCharacters=function(t){if(this.oFormatOptions.relative)return"";for(var e="",n=!1,i=!1,o,r=0;r<t.length;r++)switch(o=t[r],o.type){case"text":e.indexOf(o.value)<0&&(e+=o.value);break;case"day":case"year":case"weekYear":case"dayNumberOfWeek":case"weekInYear":case"hour0_23":case"hour1_24":case"hour0_11":case"hour1_12":case"minute":case"second":case"fractionalsecond":n||(e+="0123456789",n=!0);break;case"month":case"monthStandalone":o.digits<3?n||(e+="0123456789",n=!0):i=!0;break;default:i=!0;break}return i&&(e=""),e};x.prototype.getPlaceholderText=function(){var t=zf.getLibraryResourceBundle();return t.getText("date.placeholder",[this.format.apply(this,this.getSampleValue())])};x.prototype.getSampleValue=function(){var t,e=L.getInstance().getFullYear(),n=this.oFormatOptions.UTC;function i(o,r,a,s,c,u,h){return n?L.getInstance(Date.UTC(o,r,a,s,c,u,h)):L.getInstance(o,r,a,s,c,u,h)}return t=i(e,11,31,23,59,58,123),this.type===pt.DATETIME_WITH_TIMEZONE?[t,le.getTimezone()]:this.oFormatOptions.interval?[[i(e,11,22,9,12,34,567),t]]:[t]};const b0=x;class Ln extends b0{}var em=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ar=class extends Q{};em([d()],ar.prototype,"value",void 0);ar=em([U("ui5-date")],ar);ar.define();const tm=ar,y0=(t,e,n,i=!0,o,r)=>{const a=new W(t);switch(n){case"day":a.setDate(t.getDate()+e);break;case"month":if(i){a.setMonth(t.getMonth()+e);const s=e===-1&&a.getMonth()===t.getMonth(),c=e===1&&a.getMonth()-t.getMonth()>1;(s||c)&&a.setDate(0)}else e===1&&a.setMonth(a.getMonth()+1,1),e===-1&&a.setDate(0);break;case"year":a.setYear(t.getYear()+e),a.getMonth()!==t.getMonth()&&a.setDate(0);break}return o&&a.isBefore(o)?new W(o):r&&a.isAfter(r)?new W(r):a},w0=t=>W.fromLocalJSDate(sn.getInstance(),t).valueOf()/1e3,eo=new Map,k0=t=>{const e=`min ${t}`;if(!eo.has(e)){const n=new W(1,0,1,t);n.setYear(1),n.setMonth(0),n.setDate(1),eo.set(e,n)}return eo.get(e)},nm=t=>{const e=`max ${t}`;if(!eo.has(e)){const n=new W(1,0,1,t);n.setYear(9999),n.setMonth(11);const i=new W(n,t);i.setDate(1),i.setMonth(i.getMonth()+1,0),n.setDate(i.getDate()),eo.set(e,n)}return eo.get(e)};var wo=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},nc;let zn=nc=class extends Q{constructor(){super()}get _primaryCalendarType(){const e=yi(Xe());return this.primaryCalendarType||Pf()||e.getPreferredCalendarType()}get _minDate(){let e;return this.minDate&&(e=this._getMinMaxCalendarDateFromString(this.minDate)),e||k0(this._primaryCalendarType)}get _maxDate(){let e;return this.maxDate&&(e=this._getMinMaxCalendarDateFromString(this.maxDate)),e||nm(this._primaryCalendarType)}get _formatPattern(){return this.formatPattern||"medium"}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}_getMinMaxCalendarDateFromString(e){if(this.getFormat().parse(e))return this._getCalendarDateFromString(e);const n=this.getISOFormat().parse(e);if(n)return W.fromLocalJSDate(n,this._primaryCalendarType)}_getCalendarDateFromString(e){const n=this.getFormat().parse(e);if(n)return W.fromLocalJSDate(n,this._primaryCalendarType)}_getTimeStampFromString(e){const n=this._getCalendarDateFromString(e);if(n)return n.toUTCJSDate().valueOf()}_getStringFromTimestamp(e){const n=new Date(e);return this.getFormat().format(n,!0)}getFormat(){return this._isPattern?Ln.getDateInstance({strictParsing:!0,pattern:this._formatPattern,calendarType:this._primaryCalendarType}):Ln.getDateInstance({strictParsing:!0,style:this._formatPattern,calendarType:this._primaryCalendarType})}getISOFormat(){return this._isoFormatInstance||(this._isoFormatInstance=Ln.getDateInstance({strictParsing:!0,pattern:"YYYY-MM-dd",calendarType:this._primaryCalendarType})),this._isoFormatInstance}static async onDefine(){[nc.i18nBundle]=await Promise.all([ie("@ui5/webcomponents"),Fp(Xe().getLanguage(),Xe().getRegion(),Xe().getScript())])}};wo([d({type:Ti})],zn.prototype,"primaryCalendarType",void 0);wo([d({type:Ti})],zn.prototype,"secondaryCalendarType",void 0);wo([d()],zn.prototype,"formatPattern",void 0);wo([d()],zn.prototype,"minDate",void 0);wo([d()],zn.prototype,"maxDate",void 0);zn=nc=wo([U({languageAware:!0,renderer:he})],zn);const x0=zn;var T0=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};class Dr extends x0{get _minTimestamp(){return this._minDate.valueOf()/1e3}get _maxTimestamp(){return this._maxDate.valueOf()/1e3}get _timestamp(){let e=this.timestamp!==void 0?this.timestamp:w0(this._primaryCalendarType);return this._maxTimestamp&&this._maxTimestamp<e?e=this._maxTimestamp:this._minTimestamp&&this._minTimestamp>e&&(e=this._minTimestamp),e}get _localDate(){return new Date(this._timestamp*1e3)}get _calendarDate(){return W.fromTimestamp(this._localDate.getTime(),this._primaryCalendarType)}_safelySetTimestamp(e){const n=this._minDate.valueOf()/1e3,i=this._maxDate.valueOf()/1e3;e<n&&(e=n),e>i&&(e=i),this.timestamp=e}_safelyModifyTimestampBy(e,n,i){const o=y0(this._calendarDate,e,n,i);this._safelySetTimestamp(o.valueOf()/1e3)}_getTimestampFromDom(e){const n=e.getAttribute("data-sap-timestamp");return parseInt(n)}}T0([d({validator:Se})],Dr.prototype,"timestamp",void 0);const C0="slim-arrow-left",im="M351.5 421q12 12 0 23-5 5-11 5t-11-5l-166-165q-9-10-9-23t9-23l165-164q5-5 11.5-5t11.5 5 5 11-5 11l-159 159q-6 6 0 12z",S0=!1,$0="SAP-icons-v4",I0="@ui5/webcomponents-icons";G(C0,{pathData:im,ltr:S0,collection:$0,packageName:I0});const E0="slim-arrow-left",om="M326 96q11 0 18.5 7.5T352 122q0 10-8 18L223 256l121 116q8 8 8 18 0 11-7.5 18.5T326 416q-10 0-17-7L168 274q-8-6-8-18 0-11 8-19l141-134q7-7 17-7z",A0=!1,D0="SAP-icons-v5",B0="@ui5/webcomponents-icons";G(E0,{pathData:om,ltr:A0,collection:D0,packageName:B0});Ue();const P0="slim-arrow-right",rm="M357.5 233q10 10 10 23t-10 23l-165 165q-12 11-23 0t0-23l160-159q6-6 0-12l-159-159q-5-5-5-11t5-11 11-5 11 5z",L0=!1,O0="SAP-icons-v4",R0="@ui5/webcomponents-icons";G(P0,{pathData:rm,ltr:L0,collection:O0,packageName:R0});const M0="slim-arrow-right",am="M186 416q-11 0-18.5-7.5T160 390q0-10 8-18l121-116-121-116q-8-8-8-18 0-11 7.5-18.5T186 96q10 0 17 7l141 134q8 8 8 19 0 12-8 18L203 409q-7 7-17 7z",F0=!1,N0="SAP-icons-v5",z0="@ui5/webcomponents-icons";G(M0,{pathData:am,ltr:F0,collection:N0,packageName:z0});Ue();function H0(t,e,n){return n?p`<div class="ui5-calheader-root"><div data-ui5-cal-header-btn-prev class="${N(this.classes.prevButton)}" role="button" @mousedown=${this.onPrevButtonClick} title="${l(this._prevButtonText)}"><${v("ui5-icon",e,n)} class="ui5-calheader-arrowicon" name="slim-arrow-left"></${v("ui5-icon",e,n)}></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isMonthButtonHidden}" tabindex="0" role="button" aria-label="${l(this.accInfo.ariaLabelMonthButton)}" @click=${this.onMonthButtonClick} @keydown=${this.onMonthButtonKeyDown} @keyup=${this.onMonthButtonKeyUp}><span>${l(this._monthButtonText)}</span>${this.hasSecondaryCalendarType?sd.call(this,t,e,n):void 0}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isYearButtonHidden}" tabindex="0" role="button" @click=${this.onYearButtonClick} @keydown=${this.onYearButtonKeyDown} @keyup=${this.onYearButtonKeyUp}><span>${l(this._yearButtonText)}</span>${this.hasSecondaryCalendarType?ld.call(this,t,e,n):void 0}</div></div><div data-ui5-cal-header-btn-next class="${N(this.classes.nextButton)}" role="button" @mousedown=${this.onNextButtonClick} title=${l(this._nextButtonText)}><${v("ui5-icon",e,n)} class="ui5-calheader-arrowicon" name="slim-arrow-right"></${v("ui5-icon",e,n)}></div></div>`:p`<div class="ui5-calheader-root"><div data-ui5-cal-header-btn-prev class="${N(this.classes.prevButton)}" role="button" @mousedown=${this.onPrevButtonClick} title="${l(this._prevButtonText)}"><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-left"></ui5-icon></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isMonthButtonHidden}" tabindex="0" role="button" aria-label="${l(this.accInfo.ariaLabelMonthButton)}" @click=${this.onMonthButtonClick} @keydown=${this.onMonthButtonKeyDown} @keyup=${this.onMonthButtonKeyUp}><span>${l(this._monthButtonText)}</span>${this.hasSecondaryCalendarType?sd.call(this,t,e,n):void 0}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isYearButtonHidden}" tabindex="0" role="button" @click=${this.onYearButtonClick} @keydown=${this.onYearButtonKeyDown} @keyup=${this.onYearButtonKeyUp}><span>${l(this._yearButtonText)}</span>${this.hasSecondaryCalendarType?ld.call(this,t,e,n):void 0}</div></div><div data-ui5-cal-header-btn-next class="${N(this.classes.nextButton)}" role="button" @mousedown=${this.onNextButtonClick} title=${l(this._nextButtonText)}><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-right"></ui5-icon></div></div>`}function sd(t,e,n){return p`<span class="ui5-calheader-btn-sectext">${l(this._secondMonthButtonText)}</span>`}function ld(t,e,n){return p`<span class="ui5-calheader-btn-sectext">${l(this._yearButtonTextSecType)}</span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const U0={packageName:"@ui5/webcomponents",fileName:"themes/CalendarHeader.css",content:`:host {
	display: block;
	width: 100%;
	height: 100%;
}

.ui5-calheader-root {
	display: flex;
	height: 100%;
	padding: var(--_ui5_calendar_header_padding);
	box-sizing: border-box;
}

.ui5-calheader-arrowbtn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--_ui5_calendar_header_arrow_button_width);
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
	cursor: pointer;
	overflow: hidden;
	white-space: nowrap;
	padding: 0;
	font-size: var(--sapFontSize);
	user-select: none;
}

.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:hover,
.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:active,
.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:focus,
.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled {
	opacity: 0.4;
	cursor: default;
	outline: none;
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
}

[hidden].ui5-calheader-arrowbtn.ui5-calheader-middlebtn {
	display: none;
}

.ui5-calheader-arrowbtn:focus {
	outline: none;
}

.ui5-calheader-arrowbtn:hover {
	background-color: var(--sapButton_Hover_Background);
	color: var(--sapButton_Lite_TextColor);
	box-shadow: var(--_ui5_calendar_header_arrow_button_box_shadow);
}

.ui5-calheader-arrowbtn:active {
	background-color: var(--sapButton_Active_Background);
	color: var(--sapButton_Active_TextColor);
}

.ui5-calheader-arrowbtn,
.ui5-calheader-middlebtn {
	border: var(--_ui5_calendar_header_arrow_button_border);
	border-radius: var(--_ui5_calendar_header_arrow_button_border_radius);
	display:flex;
	background-color: var(--sapButton_Lite_Background);
	border-color: var(--sapButton_Lite_BorderColor);
}

.ui5-calheader-middlebtn {
	flex-direction: column;
	align-items: center;
	justify-content:center;
}

.ui5-calheader-arrowbtn:not(:active) .ui5-calheader-btn-sectext {
	color: var(--sapNeutralElementColor);
	font-size: var(--sapFontSmallSize);
}

.ui5-calheader-arrowicon {
	color: currentColor;
	pointer-events: none;
}

.ui5-calheader-midcontainer {
	display: flex;
	justify-content: space-around;
	flex: 1 1 auto;
	padding: 0 0.5rem;
}

.ui5-calheader-midcontainer .ui5-calheader-middlebtn:first-child {
	margin-inline-end: 0.5rem;
}

.ui5-calheader-middlebtn {
	font-family: var(--_ui5_button_fontFamily);
	width: var(--_ui5_calendar_header_middle_button_width);
	flex: var(--_ui5_calendar_header_middle_button_flex);
	position: relative;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

.ui5-calheader-middlebtn:focus {
	border: var(--_ui5_calendar_header_middle_button_focus_border);
	border-radius: var(--_ui5_calendar_header_middle_button_focus_border_radius);
	outline: var(--_ui5_calendar_header_middle_button_focus_outline);
	outline-offset: -0.125rem;
	background: var(--_ui5_calendar_header_middle_button_focus_background);
}

.ui5-calheader-middlebtn:focus:active {
	outline: var(--_ui5_calendar_header_middle_button_focus_active_outline);
	outline-offset: -0.0625rem;
	background: var(--_ui5_calendar_header_middle_button_focus_active_background)
}

.ui5-calheader-middlebtn:focus::after {
	content: "";
	display: var(--_ui5_calendar_header_middle_button_focus_after_display);
	width: var(--_ui5_calendar_header_middle_button_focus_after_width);
	height: var(--_ui5_calendar_header_middle_button_focus_after_height);
	border: var(--_ui5_calendar_header_middle_button_focus_after_border);
	position: absolute;
	top: var(--_ui5_calendar_header_middle_button_focus_after_top_offset);
	left: var(--_ui5_calendar_header_middle_button_focus_after_left_offset);
}

.ui5-calheader-middlebtn:focus:active::after {
	border-color: var(--sapContent_ContrastFocusColor);
}
`};var Dt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},Fo;let Ke=Fo=class extends Q{static async onDefine(){Fo.i18nBundle=await ie("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._prevButtonText=Fo.i18nBundle.getText(Qy),this._nextButtonText=Fo.i18nBundle.getText(Zy),this.hasSecondaryCalendarType&&(this._secondMonthButtonText=this.buttonTextForSecondaryCalendarType.monthButtonText,this._secondYearButtonText=this.buttonTextForSecondaryCalendarType.yearButtonText)}onPrevButtonClick(e){if(this.isPrevButtonDisabled){e.preventDefault();return}this.fireEvent("previous-press",e),e.preventDefault()}onNextButtonClick(e){if(this.isNextButtonDisabled){e.preventDefault();return}this.fireEvent("next-press",e),e.preventDefault()}onMonthButtonClick(e){this.fireEvent("show-month-press",e)}onMonthButtonKeyDown(e){H(e)&&e.preventDefault(),te(e)&&this.fireEvent("show-month-press",e)}onMonthButtonKeyUp(e){H(e)&&(e.preventDefault(),this.fireEvent("show-month-press",e))}onYearButtonClick(e){this.fireEvent("show-year-press",e)}onYearButtonKeyDown(e){H(e)&&e.preventDefault(),te(e)&&this.fireEvent("show-year-press",e)}onYearButtonKeyUp(e){H(e)&&(e.preventDefault(),this.fireEvent("show-year-press",e))}get hasSecondaryCalendarType(){return!!this.secondaryCalendarType}get classes(){return{prevButton:{"ui5-calheader-arrowbtn":!0,"ui5-calheader-arrowbtn-disabled":this.isPrevButtonDisabled},nextButton:{"ui5-calheader-arrowbtn":!0,"ui5-calheader-arrowbtn-disabled":this.isNextButtonDisabled}}}get accInfo(){return{ariaLabelMonthButton:this.hasSecondaryCalendarType?`${this._monthButtonText}, ${this.buttonTextForSecondaryCalendarType.monthButtonInfo}`:`${this._monthButtonText}`}}};Dt([d({validator:Se})],Ke.prototype,"timestamp",void 0);Dt([d({type:Ti})],Ke.prototype,"primaryCalendarType",void 0);Dt([d({type:Ti})],Ke.prototype,"secondaryCalendarType",void 0);Dt([d({type:Object})],Ke.prototype,"buttonTextForSecondaryCalendarType",void 0);Dt([d({type:Boolean})],Ke.prototype,"isNextButtonDisabled",void 0);Dt([d({type:Boolean})],Ke.prototype,"isPrevButtonDisabled",void 0);Dt([d({type:Boolean})],Ke.prototype,"isMonthButtonHidden",void 0);Dt([d()],Ke.prototype,"_monthButtonText",void 0);Dt([d()],Ke.prototype,"_yearButtonText",void 0);Dt([d()],Ke.prototype,"_yearButtonTextSecType",void 0);Dt([d({type:Boolean})],Ke.prototype,"isYearButtonHidden",void 0);Ke=Fo=Dt([U({tag:"ui5-calendar-header",languageAware:!0,renderer:he,template:H0,styles:U0,dependencies:[Ut]}),I("next-press"),I("previous-press"),I("show-month-press"),I("show-year-press")],Ke);Ke.define();const V0=Ke,W0=(t,e,n,i,o)=>{let r=0,a=0;const s=Number.isInteger(t)?t:o.getFirstDayOfWeek();if(i&&i.getLanguage()==="en"&&i.getRegion()==="US"){const c=new Dn(e.getTime());c.setUTCFullYear(n,0,1),a=c.getUTCDay();const u=new Dn(e.getTime());u.setUTCDate(u.getUTCDate()-u.getUTCDay()+a),r=Math.round((u.getTime()-c.getTime())/864e5/7)+1}else{const c=new Dn(e.getTime());c.setUTCDate(c.getUTCDate()-s),a=c.getUTCDay(),c.setUTCDate(c.getUTCDate()-a+4);const u=new Dn(c.getTime());u.setUTCMonth(0,1),a=u.getUTCDay();let h=0;a>4&&(h=7);const _=new Dn(u.getTime());_.setUTCDate(1-a+4+h),r=Math.round((c.getTime()-_.getTime())/864e5/7)+1}return r};var ic;(function(t){t.Single="Single",t.Multiple="Multiple",t.Range="Range"})(ic||(ic={}));const Ot=ic;function j0(t,e,n){return p`<div class="ui5-dp-root" style="${z(this.styles.wrapper)}" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._onclick} @mouseover=${this._onmouseover} @focusin=${this._onfocusin} @focusout=${this._onfocusout}><div id="${l(this._id)}-content" class="ui5-dp-content" role="grid" aria-roledescription="${l(this.ariaRoledescription)}"><div role="row" class="ui5-dp-days-names-container">${X(this._dayNames,(i,o)=>i._id||o,(i,o)=>q0.call(this,t,e,n,i,o))}</div>${X(this._weeks,(i,o)=>i._id||o,(i,o)=>Y0.call(this,t,e,n,i,o))}</div></div>`}function q0(t,e,n,i,o){return p`<div role="columnheader" aria-label="${l(i.name)}" class="${l(i.classes)}">${l(i.ultraShortName)}</div>`}function Y0(t,e,n,i,o){return p`${i.length?G0.call(this,t,e,n,i,o):e1.call(this,t,e,n,i,o)}`}function G0(t,e,n,i,o){return p`<div class="ui5-dp-weeks-row" role="row">${X(i,(r,a)=>r._id||a,(r,a)=>X0.call(this,t,e,n,r,a))}</div>`}function X0(t,e,n,i,o){return p`${i.timestamp?Z0.call(this,t,e,n,i,o):J0.call(this,t,e,n,i,o)}`}function Z0(t,e,n,i,o){return p`<div tabindex="${l(i._tabIndex)}" ?data-sap-focus-ref="${i.focusRef}" data-sap-timestamp="${l(i.timestamp)}" role="gridcell" aria-selected="${l(i.ariaSelected)}" aria-label="${l(i.ariaLabel)}" aria-disabled="${l(i.ariaDisabled)}" class="${l(i.classes)}"><span class="ui5-dp-daytext" data-sap-timestamp="${l(i.timestamp)}">${l(i.day)}</span>${i._isSecondaryCalendarType?Q0.call(this,t,e,n,i,o):void 0}</div>`}function Q0(t,e,n,i,o){return p`<span class="ui5-dp-daytext ui5-dp-daysectext">${l(i.secondDay)}</span>`}function J0(t,e,n,i,o){return p`${i.isHidden?void 0:K0.call(this,t,e,n,i,o)}`}function K0(t,e,n,i,o){return p`<div class="ui5-dp-weekname-container" role="rowheader" aria-label="Calendar Week ${l(i.weekNum)}"><span class="ui5-dp-weekname">${l(i.weekNum)}</span></div>`}function e1(t,e,n,i,o){return p`<div class="sapWCEmptyWeek"></div>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const t1={packageName:"@ui5/webcomponents",fileName:"themes/DayPicker.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	height: 100%;
	width: 100%;
}

:host([hide-week-numbers]) .ui5-dp-content {
	flex-basis: 100%;
}

:host([secondary-calendar-type]) .ui5-dp-item {
	flex-direction: column;
	justify-content: var(--_ui5_day_picker_item_justify_content);
}

:host([secondary-calendar-type]) .ui5-dp-daytext {
	height: 1.575rem;
	padding-top: var(--_ui5_dp_two_calendar_item_text_padding_top)
}

:host([secondary-calendar-type]) .ui5-dp-daysectext {
	font-size: 0.625rem;
	height: var(--_ui5_dp_two_calendar_item_secondary_text_height);
	padding: 0 0.375rem 0.375rem 50%;
}

.ui5-dp-weekname,
.ui5-dp-dayname,
.ui5-dp-item {
	width: var(--_ui5_day_picker_item_width);
	height: var(--_ui5_day_picker_item_height);
	margin-top: var(--_ui5_daypicker_item_margin);
	margin-right: var(--_ui5_daypicker_item_margin);
	font-family: "72override", var(--sapFontFamily);
	border-radius: var(--_ui5_daypicker_item_border_radius);
}

.ui5-dp-weekname {
	color: var(--_ui5_daypicker_weekname_color);
}

.ui5-dp-weeks-row {
	display: flex;
}

.ui5-dp-content {
	display: flex;
	flex-basis: 87.5%;
	flex-direction: column;
	font-family: "72override", var(--sapFontFamily);
}

.ui5-dp-days-names-container {
	display: flex;
	height: var(--_ui5_daypicker_daynames_container_height);
}

.ui5-dp-weeknumber-container {
	padding-top: var(--_ui5_daypicker_weeknumbers_container_padding_top);
	flex-basis: 12.5%;
}

.ui5-dp-weekname,
.ui5-dp-dayname,
.ui5-dp-weekname-container,
.ui5-dp-item {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	font-size: var(--sapFontSmallSize);
	outline: none;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

.ui5-dp-item {
	position: relative;
	color: var(--sapTextColor);
	background: var(--sapLegend_WorkingBackground);
	font-size: var(--sapFontSize);
	border: var(--_ui5_daypicker_item_border);
	border-radius: var(--_ui5_daypicker_item_border_radius);
}

.ui5-dp-item:hover {
	background: var(--sapList_Hover_Background);
}

.ui5-dp-daytext {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}

.ui5-dp-dayname {
	color: var(--_ui5_daypicker_dayname_color);
	height: 100%;
}

.ui5-dp-item.ui5-dp-item--weeekend {
	background: var(--sapLegend_NonWorkingBackground);
}

.ui5-dp-item.ui5-dp-item--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.ui5-dp-item.ui5-dp-item--weeekend:hover {
	background: var(--sapList_Hover_Background);
	filter: var(--_ui5_daypicker_item_weeekend_filter);
}

.ui5-dp-item.ui5-dp-item--othermonth {
	color: var(--_ui5_daypicker_item_othermonth_color);
	background: var(--_ui5_daypicker_item_othermonth_background_color);
	border-color: transparent;
}

.ui5-dp-item.ui5-dp-item--othermonth:hover,
.ui5-dp-item.ui5-dp-item--weeekend.ui5-dp-item--othermonth:hover {
	color: var(--_ui5_daypicker_item_othermonth_hover_color);
	background: var(--sapList_Hover_Background);
}

.ui5-dp-item:focus::after {
	content: "";
	border: var(--_ui5_daypicker_item_not_selected_focus_border);
	position: absolute;
	inset: var(--_ui5_daypicker_item_no_selected_inset);
	outline: none;
	border-radius: var(--_ui5_daypicker_item_border_radius_focus_after);
}

.ui5-dp-item.ui5-dp-item--now::before {
	position: absolute;
	inset: var(--_ui5_daypicker_item_now_not_selected_inset);
	border: 0.125rem solid var(--_ui5_daypicker_item_now_border_color);
	content: "";
	border-radius: var(--_ui5_daypicker_item_border_radius);
}

.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected {
	box-shadow: var(--_ui5_daypicker_item_now_box_shadow);
}

.ui5-dp-item.ui5-dp-item--selected {
	background: var(--sapContent_Selected_Background)
}

.ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext::after{
	position: absolute;
	inset: 0;
	border: var(--_ui5_daypicker_item_selected_border);
	content: "";
	border-radius: var(--_ui5_daypicker_item_border_radius_item);
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext {
	border: var(--_ui5_day_picker_item_selected_now_border);
	outline: var(--_ui5_daypicker_item_selected_text_outline);
	outline-offset: var(--_ui5_daypicker_item_now_selected_outline_offset);
	border-radius: var(--_ui5_daypicker_item_border_radius_item);
	font-family: var(--_ui5_daypicker_item_selected_text_font);
}

.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext {
	background: var(--_ui5_daypicker_item_selected_background);
	color: var(--sapContent_Selected_TextColor);
	border-radius: var(--_ui5_daypicker_item_border_radius);
	border: var(--_ui5_daypicker_item_selected_text_border);
	font-family: var(--_ui5_daypicker_item_selected_text_font);
}

.ui5-dp-item.ui5-dp-item--selected:hover .ui5-dp-daytext {
	background: var(--_ui5_daypicker_item_selected_daytext_hover_background);
	color: var(--sapContent_Selected_TextColor);
}

.ui5-dp-item.ui5-dp-item--now:focus::after {
	inset: var(--_ui5_daypicker_item_now_inset);
	border-radius: var(--_ui5_daypicker_item_now_border_radius_focus_after);
	border: var(--_ui5_daypicker_item_now_border_focus_after);
	position: absolute;
	content: "";
	width: auto;
	height: auto;
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:focus::after {
	inset: var(--_ui5_daypicker_item_now_inset);
	border-radius: var(--_ui5_day_picker_item_selected_now_border_radius_focus);
	border: var(--_ui5_day_picker_item_selected_now_border_focus);
	position: absolute;
	content: "";
	width: auto;
	height: auto;
}

.ui5-dp-item.ui5-dp-item--selected:hover {
	background: var( --_ui5_daypicker_item_selected_hover);
	color: var(--sapContent_ContrastTextColor);
}

.ui5-dp-item.ui5-dp-item--selected:focus::after {
	border-color: var(--_ui5_daypicker_item_selected_focus_color);
	border-width: var(--_ui5_daypicker_item_selected_focus_width);
}

.ui5-dp-items-container {
	outline: none;
}

.ui5-dp-item.ui5-dp-item--selected-between .ui5-dp-daytext,
.ui5-dp-item[hovered] .ui5-dp-daytext {
	border: var(--_ui5_daypicker_item_select_between_border);
	border-radius: var(--_ui5_daypicker_item_border_radius);
	background-color: var(--_ui5_daypicker_item_selected_between_text_background);
	color: var(--sapTextColor);
	font-weight: var(--_ui5_daypicker_item_selected_between_text_font);
}

.ui5-dp-item.ui5-dp-item--selected-between.ui5-dp-item--now:not(.ui5-dp-item--selected) .ui5-dp-daytext::after {
	content: "";
	position: absolute;
	inset: var(--_ui5_daypicker_item_now_selected_between_inset);
	border: var(--_ui5_daypicker_item_now_selected_between_border);
	border-radius: var(--_ui5_daypicker_item_now_selected_between_border_radius);
}

.ui5-dp-item.ui5-dp-item--selected-between,
.ui5-dp-item[hovered] {
	border-radius: var(--_ui5_daypicker_item_selected_between_border);
	background: var(--_ui5_daypicker_item_selected_between_background);
}

.ui5-dp-item.ui5-dp-item--selected-between:hover {
	background: var(--_ui5_daypicker_item_selected_between_hover_background);
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--selected-between:focus::after {
	border-color: var(--sapContent_FocusColor);
}

.ui5-dp-items-container > :first-child {
	justify-content: flex-end;
}

.ui5-dp-emptyweek {
	height: var(--_ui5_day_picker_empty_height);
}

.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype:focus::after{
	outline-offset: -0.1875rem;
	border-radius: var(--_ui5-dp-item_withsecondtype_border);
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype .ui5-dp-daysectext,
.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext {
	border: none;
	outline: none;
}

/* styles for calendar with two types */

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext::after{
	border-width: 0.125rem;
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext {
	height: var(--_ui5_dp_two_calendar_item_primary_text_height);
	padding-top: var(--_ui5_dp_two_calendar_item_now_text_padding_top);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now .ui5-dp-daysectext {
	height: var(--_ui5_dp_two_calendar_item_secondary_text_height);
	padding-top: 0;
    border-radius: var(--_ui5_dp_two_calendar_item_secondary_text_border_radios);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext {
    border-radius: var(--_ui5_daypicker_two_calendar_item_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item:focus::after {
	inset: var(--_ui5_daypicker_two_calendar_item_no_selected_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_border_focus_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now::after {
	inset: var(--_ui5_daypicker_two_calendar_item_no_selected_focus_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_no_select_focus_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected:focus::after {
	border-width: var(--_ui5_daypicker_two_calendar_item_now_selected_border_width);
	inset: var(--_ui5_daypicker_two_calendar_item_now_selected_border_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_border_focus_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now::after {
	inset: var(--_ui5_daypicker_two_calendar_item_now_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext:not(.ui5-dp-daysectext)::before {
	content: var(--_ui5_daypicker_two_calendar_item_now_day_text_content);
	position: absolute;
	inset: 0.3125rem;
	border-radius: var(--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus);
	outline: var(--_ui5_daypicker_item_selected__secondary_type_text_outline)
}`};var Gn=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},No;const cd=(t,e,n)=>t>Math.min(e,n)&&t<Math.max(e,n),ai=7;let Nt=No=class extends Dr{onBeforeRendering(){const e=yi(Xe());this._buildWeeks(e),this._buildDayNames(e)}_buildWeeks(e){if(this._hidden)return;this._weeks=[];const n=this._getFirstDayOfWeek(),i=e.getMonths("wide",this._primaryCalendarType),o=this.hasSecondaryCalendarType?e.getMonths("wide",this.secondaryCalendarType):[],r=No.i18nBundle.getText(Ky),a=No.i18nBundle.getText(ew),s=this._getFirstDay(),c=W.fromLocalJSDate(new Date,this._primaryCalendarType),u=this._calendarDate,h=this._minDate,_=this._maxDate,m=this.hasSecondaryCalendarType?this._getSecondaryDay(s):void 0;let g=[];for(let b=0;b<ai*6;b++){const w=s.valueOf()/1e3;let T=s.getDay()-n;T<0&&(T+=ai);const D=s.getMonth()===u.getMonth()&&s.getDate()===u.getDate(),S=this._isDaySelected(w),R=this._isDayInsideSelectionRange(w),K=s.getMonth()!==u.getMonth(),ee=this._isWeekend(s),kt=s.valueOf()<h.valueOf()||s.valueOf()>_.valueOf(),xt=s.isSame(c),Kn=s.getDay()===n,ht=ee?`${r} `:"",zi=xt?`${a} `:"",A=m?m.getDate():"",xe=m?m.getYear():"",De=o.length>0?o[m.getMonth()]:"",We=this.hasSecondaryCalendarType?`${zi}${ht}${i[s.getMonth()]} ${s.getDate()}, ${s.getYear()}; ${De} ${A}, ${xe}`:`${zi}${ht}${i[s.getMonth()]} ${s.getDate()}, ${s.getYear()}`,Ie={timestamp:w.toString(),focusRef:D,_tabIndex:D?"0":"-1",selected:S,day:s.getDate(),secondDay:this.hasSecondaryCalendarType?m.getDate():void 0,_isSecondaryCalendarType:this.hasSecondaryCalendarType,classes:`ui5-dp-item ui5-dp-wday${T}`,ariaLabel:We,ariaSelected:S?"true":"false",ariaDisabled:K?"true":void 0,disabled:kt};Kn&&(Ie.classes+=" ui5-dp-firstday"),S&&(Ie.classes+=" ui5-dp-item--selected"),R&&(Ie.classes+=" ui5-dp-item--selected-between"),xt&&(Ie.classes+=" ui5-dp-item--now"),K&&(Ie.classes+=" ui5-dp-item--othermonth"),ee&&(Ie.classes+=" ui5-dp-item--weeekend"),kt&&(Ie.classes+=" ui5-dp-item--disabled"),this.hasSecondaryCalendarType&&(Ie.classes+=" ui5-dp-item--withsecondtype"),g.push(Ie),T===ai-1&&g.unshift({weekNum:W0(Q_(),s.toUTCJSDate(),s.getYear(),Xe(),e),isHidden:this.shouldHideWeekNumbers}),g.length===ai+1&&(this._weeks.push(g),g=[]),s.setDate(s.getDate()+1),this.hasSecondaryCalendarType&&m&&m.setDate(m.getDate()+1)}}_buildDayNames(e){if(this._hidden)return;let n;const i=e.getDays("wide",this._primaryCalendarType),o=e.getDays("abbreviated",this._primaryCalendarType);let r;this._dayNames=[],this._dayNames.push({classes:"ui5-dp-dayname",name:No.i18nBundle.getText(Jy)});for(let a=0;a<ai;a++)n=a+this._getFirstDayOfWeek(),n>ai-1&&(n-=ai),r={name:i[n],ultraShortName:o[n],classes:"ui5-dp-dayname"},this._dayNames.push(r);this._dayNames[1].classes+=" ui5-dp-firstday",this.shouldHideWeekNumbers&&this._dayNames.shift()}onAfterRendering(){this._autoFocus&&!this._hidden&&this.focus();const e=this.shadowRoot.querySelector("[data-sap-focus-ref]");e&&document.activeElement!==e&&e.focus()}_onfocusin(){this._autoFocus=!0}_onfocusout(){this._autoFocus=!1}_isDaySelected(e){return this.selectionMode===Ot.Single?e===this.selectedDates[0]:this.selectedDates.includes(e)}_isDayInsideSelectionRange(e){return this.selectionMode!==Ot.Range||!this.selectedDates.length?!1:this.selectedDates.length===1&&this._secondTimestamp?cd(e,this.selectedDates[0],this._secondTimestamp):cd(e,this.selectedDates[0],this.selectedDates[1])}_selectDate(e,n){const i=e.target;if(!this._isDayPressed(i))return;const o=this._getTimestampFromDom(i);this._safelySetTimestamp(o),this._updateSecondTimestamp(),this.selectionMode===Ot.Single?this.selectedDates=[o]:this.selectionMode===Ot.Multiple?this.selectedDates.length>0&&n?this._multipleSelection(o):this._toggleTimestampInSelection(o):this.selectedDates=this.selectedDates.length===1?[...this.selectedDates,o]:[o],this.fireEvent("change",{timestamp:this.timestamp,dates:this.selectedDates})}_selectWeek(){this._weeks.forEach(e=>{const n=e;n.findIndex(o=>{const r=W.fromTimestamp(parseInt(o.timestamp)*1e3);return r.getMonth()===this._calendarDate.getMonth()&&r.getDate()===this._calendarDate.getDate()})!==-1&&(n.some(r=>r.timestamp&&!this.selectedDates.includes(parseInt(r.timestamp)))?n.filter(r=>r.timestamp).forEach(r=>{this._addTimestampToSelection(parseInt(r.timestamp))}):n.filter(r=>r.timestamp).forEach(r=>{this._removeTimestampFromSelection(parseInt(r.timestamp))}))}),this.fireEvent("change",{timestamp:this.timestamp,dates:this.selectedDates})}_toggleTimestampInSelection(e){this.selectedDates.includes(e)?this._removeTimestampFromSelection(e):this._addTimestampToSelection(e)}_addTimestampToSelection(e){this.selectedDates.includes(e)||(this.selectedDates=[...this.selectedDates,e])}_removeTimestampFromSelection(e){this.selectedDates=this.selectedDates.filter(n=>n!==e)}_multipleSelection(e){const n=Math.min(...this.selectedDates),i=Math.max(...this.selectedDates);let o,r,a=!1;if(e<n)o=e,r=n;else if(e>=n&&e<=i){const u=Math.abs(e-n),h=Math.abs(e-i);u<h?(o=e,r=i):(o=n,r=e),a=!0}else o=i,r=e;const s=W.fromTimestamp(o*1e3),c=W.fromTimestamp(r*1e3);for(;s.valueOf()<=c.valueOf();)this[a?"_toggleTimestampInSelection":"_addTimestampToSelection"](s.valueOf()/1e3),s.setDate(s.getDate()+1)}_onmouseover(e){const i=e.target.closest(".ui5-dp-item");i&&this.selectionMode===Ot.Range&&this.selectedDates.length===1&&(this._secondTimestamp=this._getTimestampFromDom(i))}_onkeydown(e){let n=!0;if(te(e)||H_(e))this._selectDate(e,H_(e));else if(H(e)||Ki(e))e.preventDefault();else if(Jt(e))this._modifyTimestampBy(-1,"day",!1);else if(Et(e))this._modifyTimestampBy(1,"day",!1);else if(Ct(e))this._modifyTimestampBy(-7,"day",!1);else if(ct(e))this._modifyTimestampBy(7,"day",!1);else if(_s(e))this._modifyTimestampBy(-1,"month");else if(ds(e))this._modifyTimestampBy(1,"month");else if(ly(e)||cy(e))this._modifyTimestampBy(-1,"year");else if(uy(e)||_y(e))this._modifyTimestampBy(1,"year");else if(dy(e))this._modifyTimestampBy(-10,"year");else if(hy(e))this._modifyTimestampBy(10,"year");else if(Ft(e)||Mn(e))this._onHomeOrEnd(Ft(e));else if(bo(e)){const i=new W(this._calendarDate,this._primaryCalendarType);i.setDate(1),this._setTimestamp(i.valueOf()/1e3)}else if(ki(e)){const i=new W(this._calendarDate,this._primaryCalendarType);i.setMonth(i.getMonth()+1),i.setDate(0),this._setTimestamp(i.valueOf()/1e3)}else n=!1;n&&e.preventDefault()}_onkeyup(e){H(e)||Ki(e)&&this.selectionMode!==Ot.Multiple?this._selectDate(e,!1):Ki(e)&&this._selectWeek()}_onclick(e){this._selectDate(e,e.shiftKey)}_onHomeOrEnd(e){this._weeks.forEach(n=>{const i=n;if(i.findIndex(r=>{const a=W.fromTimestamp(parseInt(r.timestamp)*1e3);return a.getMonth()===this._calendarDate.getMonth()&&a.getDate()===this._calendarDate.getDate()})!==-1){const r=e?1:7;this._setTimestamp(parseInt(i[r].timestamp))}})}_hasPreviousPage(){return!(this._calendarDate.getMonth()===this._minDate.getMonth()&&this._calendarDate.getYear()===this._minDate.getYear())}_hasNextPage(){return!(this._calendarDate.getMonth()===this._maxDate.getMonth()&&this._calendarDate.getYear()===this._maxDate.getYear())}_showPreviousPage(){this._modifyTimestampBy(-1,"month",!1)}_showNextPage(){this._modifyTimestampBy(1,"month",!1)}_modifyTimestampBy(e,n,i){this._safelyModifyTimestampBy(e,n,i),this._updateSecondTimestamp(),this.fireEvent("navigate",{timestamp:this.timestamp})}_setTimestamp(e){this._safelySetTimestamp(e),this._updateSecondTimestamp(),this.fireEvent("navigate",{timestamp:this.timestamp})}_updateSecondTimestamp(){this.selectionMode===Ot.Range&&(this.selectedDates.length===1||this.selectedDates.length===2)&&(this._secondTimestamp=this.timestamp)}get shouldHideWeekNumbers(){return this._primaryCalendarType!==Ti.Gregorian?!0:this.hideWeekNumbers}get hasSecondaryCalendarType(){return!!this.secondaryCalendarType}_isWeekend(e){const n=yi(Xe()),i=e.getDay(),o=n.getWeekendStart(),r=n.getWeekendEnd();return i>=o&&i<=r||r<o&&(i>=o||i<=r)}_isDayPressed(e){const n=e.parentNode;return e.className.indexOf("ui5-dp-item")>-1||n&&n.classList&&n.classList.contains("ui5-dp-item")}_getSecondaryDay(e){return new W(e,this.secondaryCalendarType)}_getFirstDay(){let e;const n=this._getFirstDayOfWeek(),i=new W(this._calendarDate,this._primaryCalendarType);return i.setDate(1),e=i.getDay()-n,e<0&&(e=7+e),e>0&&i.setDate(1-e),i}_getFirstDayOfWeek(){const e=yi(Xe()),n=Q_();return Number.isInteger(n)?n:e.getFirstDayOfWeek()}get styles(){return{wrapper:{display:this._hidden?"none":"flex","justify-content":"center"},main:{width:"100%"}}}get ariaRoledescription(){return this.hasSecondaryCalendarType?`${this._primaryCalendarType} calendar with secondary ${this.secondaryCalendarType} calendar`:`${this._primaryCalendarType} calendar`}};Gn([d({validator:Se,multiple:!0,compareValues:!0})],Nt.prototype,"selectedDates",void 0);Gn([d({type:Ot,defaultValue:Ot.Single})],Nt.prototype,"selectionMode",void 0);Gn([d({type:Boolean})],Nt.prototype,"hideWeekNumbers",void 0);Gn([d({type:Object,multiple:!0})],Nt.prototype,"_weeks",void 0);Gn([d({type:Object,multiple:!0})],Nt.prototype,"_dayNames",void 0);Gn([d({type:Boolean,noAttribute:!0})],Nt.prototype,"_hidden",void 0);Gn([d()],Nt.prototype,"_secondTimestamp",void 0);Nt=No=Gn([U({tag:"ui5-daypicker",styles:t1,template:j0}),I("change"),I("navigate")],Nt);Nt.define();const n1=Nt;function i1(t,e,n){return p`<div class="ui5-mp-root" role="grid" aria-roledescription="${l(this.roleDescription)}" aria-readonly="false" aria-multiselectable="false" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._selectMonth}>${X(this._months,(i,o)=>i._id||o,(i,o)=>o1.call(this,t,e,n,i,o))}</div>`}function o1(t,e,n,i,o){return p`<div class="ui5-mp-quarter">${X(i,(r,a)=>r._id||a,(r,a)=>r1.call(this,t,e,n,r,a))}</div>`}function r1(t,e,n,i,o){return p`<div data-sap-timestamp=${l(i.timestamp)} tabindex=${l(i._tabIndex)} ?data-sap-focus-ref="${i.focusRef}" class="${l(i.classes)}" role="gridcell" aria-selected="${l(i.ariaSelected)}"><span class="ui5-dp-monthtext">${l(i.name)}</span>${i.nameInSecType?a1.call(this,t,e,n,i,o):void 0}</div>`}function a1(t,e,n,i,o){return p`<span class="ui5-dp-monthtext ui5-dp-monthsectext">${l(i.nameInSecType)}</span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const s1={packageName:"@ui5/webcomponents",fileName:"themes/MonthPicker.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	width: 100%;
	height: 100%;
}

.ui5-mp-root {
	padding: 2rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	justify-content: center;
	align-items: center;
}

.ui5-mp-item {
	display: flex;
	flex-direction: column;
	width: calc(33.333% - 0.125rem);
	height: var(--_ui5_month_picker_item_height);
	color: var(--sapButton_Lite_TextColor);
	background-color: var(--sapLegend_WorkingBackground);
	align-items: center;
	justify-content: center;
	margin: var(--_ui5_monthpicker_item_margin);
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	cursor: default;
	outline: none;
	position: relative;
	border: var(--_ui5_monthpicker_item_border);
	border-radius: var(--_ui5_monthpicker_item_border_radius);
}

.ui5-dp-monthsectext {
	font-size: 0.75rem;
	color: var(--sapNeutralElementColor);
}

.ui5-mp-item:hover {
	background-color: var(--sapList_Hover_Background);
}

.ui5-mp-item.ui5-mp-item--selected,
.ui5-mp-item.ui5-mp-item--selected .ui5-dp-monthsectext {
	box-shadow: var(--_ui5_monthpicker_item_selected_box_shadow);
	font-weight: var(--_ui5_monthpicker_item_selected_font_wieght);
	background-color: var(--_ui5_monthpicker_item_selected_background_color);
	color: var(--_ui5_monthpicker_item_selected_text_color);
}

.ui5-mp-item.ui5-mp-item--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.ui5-mp-item.ui5-mp-item--selected:focus {
	background-color: var(--sapContent_Selected_Background);
}

.ui5-mp-item.ui5-mp-item--selected:focus::after {
	border-color: var(--_ui5_monthpicker_item_focus_after_border);
}

.ui5-mp-item.ui5-mp-item--selected:hover {
	background-color: var(--_ui5_monthpicker_item_selected_hover_color);
}

.ui5-mp-item:focus::after {
	content: "";
	position: absolute;
	border: var(--_ui5_button_focused_border);
	inset: 0;
	border-radius: var(--_ui5_monthpicker_item_focus_after_border_radius);
}

.ui5-mp-quarter {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
`};var gs=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ma;const Do=12,Ui=3;let Si=ma=class extends Dr{static async onDefine(){ma.i18nBundle=await ie("@ui5/webcomponents")}get roleDescription(){return ma.i18nBundle.getText(tw)}onBeforeRendering(){this._buildMonths()}onAfterRendering(){this._hidden||this.focus()}_buildMonths(){if(this._hidden)return;const n=yi(Xe()).getMonthsStandAlone("wide",this._primaryCalendarType),i=[],o=this._calendarDate,r=this._minDate,a=this._maxDate,s=new W(o,this._primaryCalendarType);let c;for(let u=0;u<12;u++){s.setMonth(u),c=s.valueOf()/1e3;const h=this.selectedDates.some(w=>{const T=W.fromTimestamp(w*1e3,this._primaryCalendarType);return T.getYear()===s.getYear()&&T.getMonth()===s.getMonth()}),_=s.getMonth()===o.getMonth(),m=this._isOutOfSelectableRange(s,r,a),g={timestamp:c.toString(),focusRef:_,_tabIndex:_?"0":"-1",selected:h,ariaSelected:h?"true":"false",name:n[u],nameInSecType:this.secondaryCalendarType&&this._getDisplayedSecondaryMonthText(c).text,disabled:m,classes:"ui5-mp-item"};h&&(g.classes+=" ui5-mp-item--selected"),m&&(g.classes+=" ui5-mp-item--disabled");const b=Math.floor(u/Ui);i[b]?i[b].push(g):i[b]=[g]}this._months=i}_getDisplayedSecondaryMonthText(e){const n=Yo(this._primaryCalendarType,this.secondaryCalendarType,e);return Jf(n.firstDate.getMonth(),n.lastDate.getMonth(),this.secondaryCalendarType)}_onkeydown(e){let n=!0;te(e)?this._selectMonth(e):H(e)?e.preventDefault():Jt(e)?this._modifyTimestampBy(-1):Et(e)?this._modifyTimestampBy(1):Ct(e)?this._modifyTimestampBy(-Ui):ct(e)?this._modifyTimestampBy(Ui):_s(e)?this._modifyTimestampBy(-Do):ds(e)?this._modifyTimestampBy(Do):Ft(e)||Mn(e)?this._onHomeOrEnd(Ft(e)):bo(e)?this._setTimestamp(parseInt(this._months[0][0].timestamp)):ki(e)?this._setTimestamp(parseInt(this._months[Do/Ui-1][Ui-1].timestamp)):n=!1,n&&e.preventDefault()}_onHomeOrEnd(e){this._months.forEach(n=>{if(n.findIndex(o=>W.fromTimestamp(parseInt(o.timestamp)*1e3).getMonth()===this._calendarDate.getMonth())!==-1){const o=e?0:Ui-1;this._setTimestamp(parseInt(n[o].timestamp))}})}_setTimestamp(e){this._safelySetTimestamp(e),this.fireEvent("navigate",{timestamp:this.timestamp})}_modifyTimestampBy(e,n){this._safelyModifyTimestampBy(e,"month",n),this.fireEvent("navigate",{timestamp:this.timestamp})}_onkeyup(e){H(e)&&this._selectMonth(e)}_selectMonth(e){e.preventDefault();const n=e.target;if(n.className.indexOf("ui5-mp-item")>-1){const i=this._getTimestampFromDom(n);this._safelySetTimestamp(i),this.fireEvent("change",{timestamp:this.timestamp})}}_hasPreviousPage(){return this._calendarDate.getYear()!==this._minDate.getYear()}_hasNextPage(){return this._calendarDate.getYear()!==this._maxDate.getYear()}_showPreviousPage(){this._modifyTimestampBy(-Do,!0)}_showNextPage(){this._modifyTimestampBy(Do,!0)}_isOutOfSelectableRange(e,n,i){const o=e.getMonth(),r=e.getYear(),a=n.getYear(),s=n.getMonth(),c=i.getYear(),u=i.getMonth();return r<a||r===a&&o<s||r>c||r===c&&o>u}};gs([d({validator:Se,multiple:!0,compareValues:!0})],Si.prototype,"selectedDates",void 0);gs([d({type:Object,multiple:!0})],Si.prototype,"_months",void 0);gs([d({type:Boolean,noAttribute:!0})],Si.prototype,"_hidden",void 0);Si=ma=gs([U({tag:"ui5-monthpicker",template:i1,styles:s1}),I("change"),I("navigate")],Si);Si.define();const l1=Si;function c1(t,e,n){return p`<div class="ui5-yp-root" role="grid" aria-roledescription="${l(this.roleDescription)}" aria-readonly="false" aria-multiselectable="false" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._selectYear}>${X(this._years,(i,o)=>i._id||o,(i,o)=>u1.call(this,t,e,n,i,o))}</div>`}function u1(t,e,n,i,o){return p`<div class="ui5-yp-interval-container">${X(i,(r,a)=>r._id||a,(r,a)=>_1.call(this,t,e,n,r,a))}</div>`}function _1(t,e,n,i,o){return p`<div data-sap-timestamp="${l(i.timestamp)}" tabindex="${l(i._tabIndex)}" ?data-sap-focus-ref="${i.focusRef}" class="${l(i.classes)}" role="gridcell" aria-selected="${l(i.ariaSelected)}"><span>${l(i.year)}</span>${i.yearInSecType?d1.call(this,t,e,n,i,o):void 0}</div>`}function d1(t,e,n,i,o){return p`<span class="ui5-yp-item-sec-type">${l(i.yearInSecType)}</span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const h1={packageName:"@ui5/webcomponents",fileName:"themes/YearPicker.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	width: 100%;
	height: 100%;
}

.ui5-yp-root {
	padding: 2rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	justify-content: center;
	align-items: center;
}

.ui5-yp-interval-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.ui5-yp-item {
	display: flex;
	margin: var(--_ui5_yearpicker_item_margin);
	width: calc(25% - 0.125rem);
	height: var(--_ui5_year_picker_item_height);
	color: var(--sapButton_Lite_TextColor);
	background-color: var(--sapLegend_WorkingBackground);
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	cursor: default;
	outline: none;
	position: relative;
	border: var(--_ui5_yearpicker_item_border);
	border-radius: var(--_ui5_yearpicker_item_border_radius);
}

.ui5-yp-item-secondary-type {
	flex-direction: column;
	width: calc(50% - 0.125rem);
}

.ui5-yp-item-sec-type{
	font-size: 0.75rem;
	color: var(--sapNeutralElementColor);
}

.ui5-yp-item:hover {
	background-color: var(--sapList_Hover_Background);
}

.ui5-yp-item.ui5-yp-item--selected,
.ui5-yp-item.ui5-yp-item--selected .ui5-yp-item-sec-type {
	background-color: var(--_ui5_yearpicker_item_selected_background_color);
	color: var(--_ui5_yearpicker_item_selected_text_color);
	box-shadow: var(--_ui5_yearpicker_item_selected_box_shadow);
	font-weight: bold;
}

.ui5-yp-item.ui5-yp-item--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.ui5-yp-item.ui5-yp-item--selected:focus {
	background-color: var(--_ui5_yearpicker_item_selected_focus);
}

.ui5-yp-item.ui5-yp-item--selected:focus::after {
	border-color: var(--_ui5_yearpicker_item_focus_after_border);
}

.ui5-yp-item.ui5-yp-item--selected:hover {
	background-color: var(--_ui5_yearpicker_item_selected_hover_color);
}

.ui5-yp-item:focus::after {
	content: "";
	position: absolute;
	border: var(--_ui5_yearpicker_item_focus_after_border);
	inset: 0;
	border-radius: var(--_ui5_yearpicker_item_focus_after_border_radius);
	outline: var(--_ui5_yearpicker_item_focus_after_outline);
}
`};var vs=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ga;let $i=ga=class extends Dr{static async onDefine(){ga.i18nBundle=await ie("@ui5/webcomponents")}get roleDescription(){return ga.i18nBundle.getText(nw)}onBeforeRendering(){this._buildYears()}_getPageSize(){return this.secondaryCalendarType?8:20}_getRowSize(){return this.secondaryCalendarType?2:4}_buildYears(){if(this._hidden)return;const e=this._getPageSize(),n=Xe(),i=Ln.getDateInstance({format:"y",calendarType:this._primaryCalendarType},n),o=Ln.getDateInstance({format:"y",calendarType:this.secondaryCalendarType},n);this._calculateFirstYear(),this._lastYear=this._firstYear+e-1;const r=this._calendarDate,a=this._minDate,s=this._maxDate,c=new W(r,this._primaryCalendarType);let u,h;c.setYear(this._firstYear);const _=[];let m;for(let g=0;g<e;g++){m=c.valueOf()/1e3;const b=this.selectedDates.some(R=>W.fromTimestamp(R*1e3,this._primaryCalendarType).getYear()===c.getYear()),w=c.getYear()===r.getYear(),T=c.getYear()<a.getYear()||c.getYear()>s.getYear();this.secondaryCalendarType&&(u=Yo(this._primaryCalendarType,this.secondaryCalendarType,m,!0),h=u.firstDate.getYear()===u.lastDate.getYear()?`${o.format(u.firstDate.toLocalJSDate(),!0)}`:`${o.format(u.firstDate.toLocalJSDate(),!0)} - ${o.format(u.lastDate.toLocalJSDate(),!0)}`);const D={timestamp:m.toString(),_tabIndex:w?"0":"-1",focusRef:w,selected:b,ariaSelected:b?"true":"false",year:i.format(c.toLocalJSDate()),yearInSecType:this.secondaryCalendarType&&h,disabled:T,classes:"ui5-yp-item"};b&&(D.classes+=" ui5-yp-item--selected"),T&&(D.classes+=" ui5-yp-item--disabled"),this.secondaryCalendarType&&(D.classes+=" ui5-yp-item-secondary-type");const S=Math.floor(g/this._getRowSize());_[S]?_[S].push(D):_[S]=[D],c.setYear(c.getYear()+1)}this._years=_}_calculateFirstYear(){const e=this._getPageSize(),n=nm(this._primaryCalendarType).getYear(),i=this._calendarDate.getYear();this._firstYear||(this._firstYear=i-e/2),i<this._firstYear?this._firstYear-=e:i>=this._firstYear+e&&(this._firstYear+=e),Math.abs(this._firstYear-i)>=e&&(this._firstYear=i-e/2),this._firstYear=Math.max(this._firstYear,this._minDate.getYear()),this._firstYear=Math.min(this._firstYear,this._maxDate.getYear()),this._firstYear>n-e+1&&(this._firstYear=n-e+1)}onAfterRendering(){this._hidden||this.focus()}_onkeydown(e){let n=!0;const i=this._getPageSize(),o=this._getRowSize();te(e)?this._selectYear(e):H(e)?e.preventDefault():Jt(e)?this._modifyTimestampBy(-1):Et(e)?this._modifyTimestampBy(1):Ct(e)?this._modifyTimestampBy(-o):ct(e)?this._modifyTimestampBy(o):_s(e)?this._modifyTimestampBy(-i):ds(e)?this._modifyTimestampBy(i):Ft(e)||Mn(e)?this._onHomeOrEnd(Ft(e)):bo(e)?this._setTimestamp(parseInt(this._years[0][0].timestamp)):ki(e)?this._setTimestamp(parseInt(this._years[i/o-1][o-1].timestamp)):n=!1,n&&e.preventDefault()}_onHomeOrEnd(e){this._years.forEach(n=>{if(n.findIndex(o=>W.fromTimestamp(parseInt(o.timestamp)*1e3).getYear()===this._calendarDate.getYear())!==-1){const o=e?0:this._getRowSize()-1;this._setTimestamp(parseInt(n[o].timestamp))}})}_setTimestamp(e){this._safelySetTimestamp(e),this.fireEvent("navigate",{timestamp:this.timestamp})}_modifyTimestampBy(e){this._safelyModifyTimestampBy(e,"year"),this.fireEvent("navigate",{timestamp:this.timestamp})}_onkeyup(e){H(e)&&this._selectYear(e)}_selectYear(e){e.preventDefault();const n=e.target;if(n.className.indexOf("ui5-yp-item")>-1){const i=this._getTimestampFromDom(n);this._safelySetTimestamp(i),this.fireEvent("change",{timestamp:this.timestamp})}}_hasPreviousPage(){return this._firstYear>this._minDate.getYear()}_hasNextPage(){return this._firstYear+this._getPageSize()-1<this._maxDate.getYear()}_showPreviousPage(){const e=this._getPageSize();this._modifyTimestampBy(-e)}_showNextPage(){this._modifyTimestampBy(this._getPageSize())}};vs([d({validator:Se,multiple:!0,compareValues:!0})],$i.prototype,"selectedDates",void 0);vs([d({type:Object,multiple:!0})],$i.prototype,"_years",void 0);vs([d({type:Boolean,noAttribute:!0})],$i.prototype,"_hidden",void 0);$i=ga=vs([U({tag:"ui5-yearpicker",styles:h1,template:c1}),I("change"),I("navigate")],$i);$i.define();const p1=$i;var oc;(function(t){t.DAY_MONTH_YEAR="DAY_MONTH_YEAR",t.MONTH_YEAR="MONTH_YEAR",t.YEAR="YEAR"})(oc||(oc={}));const hi=oc;var Cu=O.extend("sap.ui.core.date.Gregorian",{constructor:function(){this.oDate=this.createDate(Date,arguments),this.sCalendarType=Yt.Gregorian}});Cu.UTC=function(){return Date.UTC.apply(Date,arguments)};Cu.now=function(){return Date.now()};Yf.set(Yt.Gregorian,Cu);function f1(t,e,n){return n?p`<div class="ui5-cal-root" @keydown=${this._onkeydown}><div id="${l(this._id)}-content" class="ui5-cal-content"><${v("ui5-daypicker",e,n)} id="${l(this._id)}-daypicker" ?hidden="${this._isDayPickerHidden}" format-pattern="${l(this._formatPattern)}" .selectedDates="${l(this._selectedDatesTimestamps)}" ._hidden="${l(this._isDayPickerHidden)}" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .selectionMode="${l(this.selectionMode)}" .minDate="${l(this.minDate)}" .maxDate="${l(this.maxDate)}" timestamp="${l(this._timestamp)}" ?hide-week-numbers="${this.hideWeekNumbers}" @ui5-change="${l(this.onSelectedDatesChange)}" @ui5-navigate="${l(this.onNavigate)}"></${v("ui5-daypicker",e,n)}><${v("ui5-monthpicker",e,n)} id="${l(this._id)}-MP" ?hidden="${this._isMonthPickerHidden}" format-pattern="${l(this._formatPattern)}" .selectedDates="${l(this._selectedDatesTimestamps)}" ._hidden="${l(this._isMonthPickerHidden)}" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .minDate="${l(this.minDate)}" .maxDate="${l(this.maxDate)}" timestamp="${l(this._timestamp)}" @ui5-change="${l(this.onSelectedMonthChange)}" @ui5-navigate="${l(this.onNavigate)}"></${v("ui5-monthpicker",e,n)}><${v("ui5-yearpicker",e,n)} id="${l(this._id)}-YP" ?hidden="${this._isYearPickerHidden}" format-pattern="${l(this._formatPattern)}" .selectedDates="${l(this._selectedDatesTimestamps)}" ._hidden="${l(this._isYearPickerHidden)}" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .minDate="${l(this.minDate)}" .maxDate="${l(this.maxDate)}" timestamp="${l(this._timestamp)}" @ui5-change="${l(this.onSelectedYearChange)}" @ui5-navigate="${l(this.onNavigate)}"></${v("ui5-yearpicker",e,n)}></div><${v("ui5-calendar-header",e,n)} id="${l(this._id)}-head" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .buttonTextForSecondaryCalendarType="${l(this.secondaryCalendarTypeButtonText)}" timestamp="${l(this._timestamp)}" .isPrevButtonDisabled="${l(this._previousButtonDisabled)}" .isNextButtonDisabled="${l(this._nextButtonDisabled)}" .isMonthButtonHidden="${l(this._isHeaderMonthButtonHidden)}" ._monthButtonText="${l(this._headerMonthButtonText)}" ._yearButtonText="${l(this._headerYearButtonText)}" ._yearButtonTextSecType="${l(this._headerYearButtonTextSecType)}" @ui5-previous-press="${l(this.onHeaderPreviousPress)}" @ui5-next-press="${l(this.onHeaderNextPress)}" @ui5-show-month-press="${l(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${l(this.onHeaderShowYearPress)}"></${v("ui5-calendar-header",e,n)}></div>`:p`<div class="ui5-cal-root" @keydown=${this._onkeydown}><div id="${l(this._id)}-content" class="ui5-cal-content"><ui5-daypicker id="${l(this._id)}-daypicker" ?hidden="${this._isDayPickerHidden}" format-pattern="${l(this._formatPattern)}" .selectedDates="${l(this._selectedDatesTimestamps)}" ._hidden="${l(this._isDayPickerHidden)}" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .selectionMode="${l(this.selectionMode)}" .minDate="${l(this.minDate)}" .maxDate="${l(this.maxDate)}" timestamp="${l(this._timestamp)}" ?hide-week-numbers="${this.hideWeekNumbers}" @ui5-change="${l(this.onSelectedDatesChange)}" @ui5-navigate="${l(this.onNavigate)}"></ui5-daypicker><ui5-monthpicker id="${l(this._id)}-MP" ?hidden="${this._isMonthPickerHidden}" format-pattern="${l(this._formatPattern)}" .selectedDates="${l(this._selectedDatesTimestamps)}" ._hidden="${l(this._isMonthPickerHidden)}" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .minDate="${l(this.minDate)}" .maxDate="${l(this.maxDate)}" timestamp="${l(this._timestamp)}" @ui5-change="${l(this.onSelectedMonthChange)}" @ui5-navigate="${l(this.onNavigate)}"></ui5-monthpicker><ui5-yearpicker id="${l(this._id)}-YP" ?hidden="${this._isYearPickerHidden}" format-pattern="${l(this._formatPattern)}" .selectedDates="${l(this._selectedDatesTimestamps)}" ._hidden="${l(this._isYearPickerHidden)}" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .minDate="${l(this.minDate)}" .maxDate="${l(this.maxDate)}" timestamp="${l(this._timestamp)}" @ui5-change="${l(this.onSelectedYearChange)}" @ui5-navigate="${l(this.onNavigate)}"></ui5-yearpicker></div><ui5-calendar-header id="${l(this._id)}-head" .primaryCalendarType="${l(this._primaryCalendarType)}" .secondaryCalendarType="${l(this.secondaryCalendarType)}" .buttonTextForSecondaryCalendarType="${l(this.secondaryCalendarTypeButtonText)}" timestamp="${l(this._timestamp)}" .isPrevButtonDisabled="${l(this._previousButtonDisabled)}" .isNextButtonDisabled="${l(this._nextButtonDisabled)}" .isMonthButtonHidden="${l(this._isHeaderMonthButtonHidden)}" ._monthButtonText="${l(this._headerMonthButtonText)}" ._yearButtonText="${l(this._headerYearButtonText)}" ._yearButtonTextSecType="${l(this._headerYearButtonTextSecType)}" @ui5-previous-press="${l(this.onHeaderPreviousPress)}" @ui5-next-press="${l(this.onHeaderNextPress)}" @ui5-show-month-press="${l(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${l(this.onHeaderShowYearPress)}"></ui5-calendar-header></div>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const m1={packageName:"@ui5/webcomponents",fileName:"themes/Calendar.css",content:`:host(:not([hidden])) {
    display: inline-block;
}

.ui5-cal-root {
    background: var(--sapList_Background);
    box-sizing: border-box;
    height: var(--_ui5_calendar_height);
    width: var(--_ui5_calendar_width);
    padding: var(--_ui5_calendar_top_bottom_padding) var(--_ui5_calendar_left_right_padding) 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
}

.ui5-cal-root [ui5-calendar-header] {
    height: var(--_ui5_calendar_header_height);
    font-family: var(--_ui5_button_fontFamily);
}

.ui5-cal-root .ui5-cal-content {
    padding: 0 var(--_ui5_calendar_left_right_padding) var(--_ui5_calendar_top_bottom_padding);
}`};var Vt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ft=class extends Dr{get _selectedDatesTimestamps(){return this.dates.map(e=>{const n=e.value;return n&&!!this.getFormat().parse(n)?this._getTimeStampFromString(n)/1e3:void 0}).filter(e=>!!e)}_setSelectedDates(e){const n=e.map(o=>this.getFormat().format(new Date(o*1e3),!0)),i=[...this.dates].map(o=>o.value);this.dates.filter(o=>!n.includes(o.value)).forEach(o=>{this.removeChild(o)}),n.filter(o=>!i.includes(o)).forEach(o=>{const r=document.createElement(tm.getMetadata().getTag());r.value=o,this.appendChild(r)})}_normalizeCurrentPicker(){this._currentPicker==="day"&&this._pickersMode!==hi.DAY_MONTH_YEAR&&(this._currentPicker="month"),this._currentPicker==="month"&&this._pickersMode===hi.YEAR&&(this._currentPicker="year")}onBeforeRendering(){this._normalizeCurrentPicker()}async onAfterRendering(){await vo(),this._previousButtonDisabled=!this._currentPickerDOM._hasPreviousPage(),this._nextButtonDisabled=!this._currentPickerDOM._hasNextPage();const e=Ln.getDateInstance({format:"y",calendarType:this.primaryCalendarType}),n=yi(Xe());if(this._headerMonthButtonText=n.getMonthsStandAlone("wide",this.primaryCalendarType)[this._calendarDate.getMonth()],this._currentPicker==="year"){const i=new W(this._calendarDate,this._primaryCalendarType),o=new W(this._calendarDate,this._primaryCalendarType);i.setYear(this._currentPickerDOM._firstYear),o.setYear(this._currentPickerDOM._lastYear),this._headerYearButtonText=`${e.format(i.toLocalJSDate(),!0)} - ${e.format(o.toLocalJSDate(),!0)}`}else this._headerYearButtonText=String(e.format(this._localDate,!0));this.secondaryCalendarType&&this._setSecondaryCalendarTypeButtonText()}onHeaderShowMonthPress(e){this._currentPickerDOM._autoFocus=!1,this._currentPicker="month",this.fireEvent("show-month-press",e)}onHeaderShowYearPress(e){this._currentPickerDOM._autoFocus=!1,this._currentPicker="year",this.fireEvent("show-year-press",e)}get _currentPickerDOM(){return this.shadowRoot.querySelector(`[ui5-${this._currentPicker}picker]`)}onHeaderPreviousPress(){this._currentPickerDOM._showPreviousPage()}onHeaderNextPress(){this._currentPickerDOM._showNextPage()}_setSecondaryCalendarTypeButtonText(){const e=Ln.getDateInstance({format:"y",calendarType:this.secondaryCalendarType});if(this._currentPicker==="year"){const n=new W(this._calendarDate,this._primaryCalendarType),i=new W(this._calendarDate,this._primaryCalendarType);n.setYear(this._currentPickerDOM._firstYear),i.setYear(this._currentPickerDOM._lastYear);const o=Yo(this.primaryCalendarType,this.secondaryCalendarType,n.valueOf()/1e3,!0).firstDate,r=Yo(this.primaryCalendarType,this.secondaryCalendarType,i.valueOf()/1e3,!0).lastDate;this._headerYearButtonTextSecType=`${e.format(o.toLocalJSDate(),!0)} - ${e.format(r.toLocalJSDate(),!0)}`}else this._headerYearButtonTextSecType=String(e.format(this._localDate,!0))}get secondaryCalendarTypeButtonText(){if(!this.secondaryCalendarType)return;const e=new Date(this._timestamp*1e3),n=Ln.getDateInstance({format:"y",calendarType:this.secondaryCalendarType}),i=Yo(this._primaryCalendarType,this.secondaryCalendarType,this._timestamp),o=Jf(i.firstDate.getMonth(),i.lastDate.getMonth(),this.secondaryCalendarType);return{yearButtonText:n.format(e,!0),monthButtonText:o.text,monthButtonInfo:o.textInfo}}get _isHeaderMonthButtonHidden(){return this._currentPicker==="month"||this._currentPicker==="year"}get _isDayPickerHidden(){return this._currentPicker!=="day"}get _isMonthPickerHidden(){return this._currentPicker!=="month"}get _isYearPickerHidden(){return this._currentPicker!=="year"}_fireEventAndUpdateSelectedDates(e){const n=e.map(o=>{const r=W.fromTimestamp(o*1e3,this._primaryCalendarType);return this.getFormat().format(r.toUTCJSDate(),!0)});!this.fireEvent("selected-dates-change",{timestamp:this.timestamp,dates:[...e],values:n},!0)||this._setSelectedDates(e)}onSelectedDatesChange(e){this.timestamp=e.detail.timestamp,this._fireEventAndUpdateSelectedDates(e.detail.dates)}onSelectedMonthChange(e){this.timestamp=e.detail.timestamp,this._pickersMode===hi.DAY_MONTH_YEAR?this._currentPicker="day":this._fireEventAndUpdateSelectedDates([this.timestamp]),this._currentPickerDOM._autoFocus=!0}onSelectedYearChange(e){this.timestamp=e.detail.timestamp,this._pickersMode===hi.DAY_MONTH_YEAR?this._currentPicker="day":this._pickersMode===hi.MONTH_YEAR?this._currentPicker="month":this._fireEventAndUpdateSelectedDates([this.timestamp]),this._currentPickerDOM._autoFocus=!0}onNavigate(e){this.timestamp=e.detail.timestamp}_onkeydown(e){vf(e)&&this._currentPicker!=="month"&&(this._currentPicker="month"),py(e)&&this._currentPicker!=="year"&&(this._currentPicker="year")}get selectedDates(){return this._selectedDatesTimestamps}set selectedDates(e){this._setSelectedDates(e)}};Vt([d({type:Ot,defaultValue:Ot.Single})],ft.prototype,"selectionMode",void 0);Vt([d({type:Boolean})],ft.prototype,"hideWeekNumbers",void 0);Vt([d({defaultValue:"day"})],ft.prototype,"_currentPicker",void 0);Vt([d({type:Boolean})],ft.prototype,"_previousButtonDisabled",void 0);Vt([d({type:Boolean})],ft.prototype,"_nextButtonDisabled",void 0);Vt([d()],ft.prototype,"_headerMonthButtonText",void 0);Vt([d()],ft.prototype,"_headerYearButtonText",void 0);Vt([d()],ft.prototype,"_headerYearButtonTextSecType",void 0);Vt([d({type:hi,defaultValue:hi.DAY_MONTH_YEAR,noAttribute:!0})],ft.prototype,"_pickersMode",void 0);Vt([Z({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],ft.prototype,"dates",void 0);ft=Vt([U({tag:"ui5-calendar",fastNavigation:!0,template:f1,styles:m1,dependencies:[tm,V0,n1,l1,p1]}),I("selected-dates-change",{detail:{dates:{type:Array},values:{type:Array}}}),I("show-month-press"),I("show-year-press")],ft);ft.define();function g1(t,e,n){return p`<div class="${N(this.classes.root)}" role="region" aria-label="${l(this._getAriaLabel)}">${this._hasHeader?v1.call(this,t,e,n):void 0}<div role="group" aria-label="${l(this._ariaCardContentLabel)}"><slot></slot></div></div>`}function v1(t,e,n){return p`<div class="ui5-card-header-root"><slot name="header"></slot></div>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const b1={packageName:"@ui5/webcomponents",fileName:"themes/Card.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
}

.ui5-card-root {
	width: 100%;
	height: 100%;
	color: var(--sapGroup_TitleTextColor);
	background: var(--sapTile_Background);
	box-shadow: var(--_ui5_card_box_shadow);
	border-radius: var(--_ui5_card_border-radius);
	border: var(--_ui5_card_border);
	overflow: hidden;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	box-sizing: border-box;
}

.ui5-card-root.ui5-card--interactive:hover {
	box-shadow: var(--_ui5_card_hover_box_shadow);
}

.ui5-card-root.ui5-card--interactive:active {
	box-shadow: var(--_ui5_card_box_shadow);
}

/* Card with no content */

.ui5-card-root.ui5-card--nocontent {
	height: auto;
}

.ui5-card-root.ui5-card--nocontent .ui5-card-header-root  {
    border-bottom: none;
}

.ui5-card--nocontent ::slotted([ui5-card-header]) {
	--_ui5_card_header_focus_bottom_radius: var(--_ui5_card_header_focus_radius);
}

.ui5-card-root .ui5-card-header-root {
	border-bottom: var(--_ui5_card_header_border);
}
`};var Br=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},zo;let Ii=zo=class extends Q{get classes(){return{root:{"ui5-card-root":!0,"ui5-card--interactive":this._hasHeader&&this.header[0].interactive,"ui5-card--nocontent":!this.content.length}}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const e=tn(this),n=e?` ${e}`:"";return zo.i18nBundle.getText(vy)+n}get _ariaCardContentLabel(){return zo.i18nBundle.getText(gy)}static async onDefine(){zo.i18nBundle=await ie("@ui5/webcomponents")}};Br([d()],Ii.prototype,"accessibleName",void 0);Br([d()],Ii.prototype,"accessibleNameRef",void 0);Br([Z({type:HTMLElement,default:!0})],Ii.prototype,"content",void 0);Br([Z({type:HTMLElement,invalidateOnChildChange:!0})],Ii.prototype,"header",void 0);Ii=zo=Br([U({tag:"ui5-card",languageAware:!0,renderer:he,template:g1,styles:b1,dependencies:[Ut]})],Ii);Ii.define();var rc;(function(t){t.None="None",t.Success="Success",t.Warning="Warning",t.Error="Error",t.Information="Information"})(rc||(rc={}));const k=rc,y1="accept",sm="M455.8 94q9 9 3 19l-222 326q-4 8-12 9t-14-5l-151-167q-5-5-4.5-11t5.5-11l25-25q12-12 23 0l96 96q5 5 13 4.5t12-8.5l175-249q4-7 11.5-8t13.5 4z",w1=!0,k1="SAP-icons-v4",x1="@ui5/webcomponents-icons";G(y1,{pathData:sm,ltr:w1,collection:k1,packageName:x1});const T1="accept",lm="M187 416q-12 0-20-9L71 299q-7-7-7-17 0-11 7.5-18.5T90 256q12 0 19 9l77 87 217-247q8-9 19-9t18.5 7.5T448 122q0 10-6 16L206 407q-7 9-19 9z",C1=!0,S1="SAP-icons-v5",$1="@ui5/webcomponents-icons";G(T1,{pathData:lm,ltr:C1,collection:S1,packageName:$1});Ue();y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const I1={packageName:"@ui5/webcomponents",fileName:"themes/CheckBox.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	overflow: hidden;
	max-width: 100%;
	outline: none;
	border-radius: var(--_ui5_checkbox_border_radius);
	transition: var(--_ui5_checkbox_transition);
	cursor: pointer;
	user-select: none;
  	-moz-user-select: none;
  	-webkit-user-select: none;
  	-ms-user-select: none;
}
/* disabled */
:host([disabled]) {
	cursor: default;
}
:host([disabled]) .ui5-checkbox-root {
	opacity: var(--_ui5_checkbox_disabled_opacity);
}
:host([disabled]) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_disabled_border_color);
}
:host([disabled]) .ui5-checkbox-label {
	color: var(--_ui5_checkbox_disabled_label_color);
}
/* readonly */
:host([readonly]:not([value-state="Warning"]):not([value-state="Error"])) .ui5-checkbox-inner {
	background: var(--sapField_ReadOnly_Background);
	border: var(--_ui5_checkbox_inner_readonly_border);
	color: var(--sapField_TextColor);
}
/* wrap */
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root {
	min-height: auto;
	box-sizing: border-box;
	align-items: flex-start;
	padding-top: var(--_ui5_checkbox_root_side_padding);
	padding-bottom: var(--_ui5_checkbox_root_side_padding);
}
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-inner,
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-label {
	margin-top: var(--_ui5_checkbox_wrapped_content_margin_top);
}
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-label {
	overflow-wrap: break-word;
	align-self: center;
}
:host([wrapping-type="Normal"]) .ui5-checkbox-root:focus::before {
	bottom: var(--_ui5_checkbox_wrapped_focus_left_top_bottom_position);
}
/* value states */
:host([value-state="Error"]) .ui5-checkbox-inner,
:host([value-state="Error"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_InvalidBackground);
	border: var(--_ui5_checkbox_inner_error_border);
	color: var(--sapField_InvalidColor);
}
:host([value-state="Error"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_error_background_hover);
}
:host([value-state="Warning"]) .ui5-checkbox-inner,
:host([value-state="Warning"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_WarningBackground);
	border: var(--_ui5_checkbox_inner_warning_border);
	color: var(--_ui5_checkbox_inner_warning_color);
}
:host([value-state="Warning"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_warning_background_hover);
}
:host([value-state="Information"]) .ui5-checkbox-inner,
:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_InformationBackground);
	border: var(--_ui5_checkbox_inner_information_border);
	color: var(--_ui5_checkbox_inner_information_color);
}
:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_information_background_hover);
}
:host([value-state="Success"]) .ui5-checkbox-inner,
:host([value-state="Success"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner  {
	background: var(--sapField_SuccessBackground);
	border: var(--_ui5_checkbox_inner_success_border);
	color: var(--sapField_SuccessColor);
}
:host([value-state="Success"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner  {
	background: var(--_ui5_checkbox_inner_success_background_hover);
}
:host([value-state="Warning"]) .ui5-checkbox-icon,
:host([value-state="Warning"][indeterminate]) .ui5-checkbox-inner::after {
	color: var(--_ui5_checkbox_checkmark_warning_color);
}
:host([text]) .ui5-checkbox-root {
	padding-inline-end: var(--_ui5_checkbox_right_focus_distance);
}
:host([text]) .ui5-checkbox-root:focus::before {
	inset-inline-end: 0;
}
.ui5-checkbox-root {
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;
	min-height: var(--_ui5_checkbox_width_height);
	min-width: var(--_ui5_checkbox_width_height);
	padding: 0 var(--_ui5_checkbox_wrapper_padding);
	box-sizing: border-box;
	outline: none;
	transition: var(--_ui5_checkbox_transition);
	border: var(--_ui5_checkbox_default_focus_border);
	border-radius: var(--_ui5_checkbox_border_radius);
	box-sizing: border-box;
}
/* focused */
.ui5-checkbox-root:focus::before {
	display: var(--_ui5_checkbox_focus_outline_display);
	content: "";
	position: absolute;
	inset-inline: var(--_ui5_checkbox_focus_position);
	inset-block: var(--_ui5_checkbox_focus_position);
	border: var(--_ui5_checkbox_focus_outline);
	border-radius: var(--_ui5_checkbox_focus_border_radius);
}
:host .ui5-checkbox-root:focus {
	border: var(--_ui5_checkbox_focus_border);
	border-radius: 0.5rem;
}
/* hover */
:host(:hover:not([disabled])) {
	background: var(--_ui5_checkbox_outer_hover_background);
}
.ui5-checkbox--hoverable .ui5-checkbox-label:hover {
	color: var(--_ui5_checkbox_label_color);
}
/* hover, not active, not checked */
:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,
:host(:not([active]):not([checked])[value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_hover_background);
	border-color: var(--_ui5_checkbox_inner_hover_border_color);
}
/* hover, not active, checked */
:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,
:host(:not([active])[checked][value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_hover_background);
	border-color: var(--_ui5_checkbox_inner_hover_checked_border_color);
}
/* checked */
:host([checked]:not([value-state])) .ui5-checkbox-inner,
:host([checked][value-state="None"]) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_selected_border_color);
}
/* active, not checked */
:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,
:host([active]:not([checked])[value-state="None"]:not([disabled])) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_active_border_color);
	background-color: var(--_ui5_checkbox_active_background);
}
/* active, checked */
:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,
:host([active][checked][value-state="None"]:not([disabled])) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_selected_border_color);
	background-color: var(--_ui5_checkbox_active_background);
}
.ui5-checkbox-inner {
	min-width: var(--_ui5_checkbox_inner_width_height);
	max-width: var(--_ui5_checkbox_inner_width_height);
	height: var(--_ui5_checkbox_inner_width_height);
	max-height: var(--_ui5_checkbox_inner_width_height);
	border: var(--_ui5_checkbox_inner_border);
	border-radius: var(--_ui5_checkbox_inner_border_radius);
	background: var(--_ui5_checkbox_inner_background);
	color: var(--_ui5_checkbox_checkmark_color);
	box-sizing: border-box;
	position: relative;
	cursor: inherit;
}
:host([indeterminate][checked]) .ui5-checkbox-inner::after {
	content: "";
	background-color: currentColor;
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%, -50%);
	width: var(--_ui5_checkbox_partially_icon_size);
	height: var(--_ui5_checkbox_partially_icon_size);
}
.ui5-checkbox-inner input {
	-webkit-appearance: none;
	visibility: hidden;
	width: 0;
	left: 0;
	position: absolute;
	font-size: inherit;
}
.ui5-checkbox-root .ui5-checkbox-label {
	margin-inline-start: var(--_ui5_checkbox_label_offset);
	cursor: inherit;
	text-overflow: ellipsis;
	overflow: hidden;
	pointer-events: none;
	color: var(--_ui5_checkbox_label_color);
}
.ui5-checkbox-icon {
	width: var(--_ui5_checkbox_icon_size);
	height: var(--_ui5_checkbox_icon_size);
	color: currentColor;
	cursor: inherit;
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%, -50%);
}


`};function E1(t,e,n){return p`<div class="ui5-checkbox-root ${N(this.classes.main)}" role="checkbox" part="root" aria-checked="${l(this.effectiveAriaChecked)}" aria-readonly="${l(this.ariaReadonly)}" aria-disabled="${l(this.effectiveAriaDisabled)}" aria-label="${l(this.ariaLabelText)}" aria-labelledby="${l(this.ariaLabelledBy)}" aria-describedby="${l(this.ariaDescribedBy)}" aria-required="${l(this.required)}" tabindex="${l(this.effectiveTabIndex)}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusout="${this._onfocusout}"><div id="${l(this._id)}-CbBg" class="ui5-checkbox-inner">${this.isCompletelyChecked?A1.call(this,t,e,n):void 0}<input id="${l(this._id)}-CB" type='checkbox' ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" tabindex="-1" aria-hidden="true" data-sap-no-tab-ref /></div>${this.text?D1.call(this,t,e,n):void 0}${this.hasValueState?B1.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`}function A1(t,e,n){return n?p`<${v("ui5-icon",e,n)} aria-hidden="true" name="accept" class="ui5-checkbox-icon"></${v("ui5-icon",e,n)}>`:p`<ui5-icon aria-hidden="true" name="accept" class="ui5-checkbox-icon"></ui5-icon>`}function D1(t,e,n){return n?p`<${v("ui5-label",e,n)} id="${l(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${l(this.wrappingType)}">${l(this.text)}</${v("ui5-label",e,n)}>`:p`<ui5-label id="${l(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${l(this.wrappingType)}">${l(this.text)}</ui5-label>`}function B1(t,e,n){return p`<span id="${l(this._id)}-descr" class="ui5-hidden-text">${l(this.valueStateText)}</span>`}var _t=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},Wi;let ud=!1,al,Ne=Wi=class extends Q{constructor(){super(),this._deactivate=()=>{al&&(al.active=!1)},ud||(document.addEventListener("mouseup",this._deactivate),ud=!0)}onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=Ce("FormSupport");e?e.syncNativeHiddenInput(this,(n,i)=>{i.disabled=!!n.disabled,i.checked=!!n.checked,i.value=n.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){this.toggle()}_onmousedown(){this.readonly||this.disabled||(this.active=!0,al=this)}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}_onkeydown(e){H(e)&&(e.preventDefault(),this.active=!0),te(e)&&(this.toggle(),this.active=!0)}_onkeyup(e){H(e)&&this.toggle(),this.active=!1}toggle(){if(this.canToggle()){const e={checked:this.checked,indeterminate:this.indeterminate};this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked;const n=!this.fireEvent("change",null,!0),i=!this.fireEvent("value-changed",null,!0);(n||i)&&(this.checked=e.checked,this.indeterminate=e.indeterminate)}return this}canToggle(){return!(this.disabled||this.readonly)}valueStateTextMappings(){return{Error:Wi.i18nBundle.getText(hs),Warning:Wi.i18nBundle.getText(ps),Success:Wi.i18nBundle.getText(fs)}}get ariaLabelText(){return tn(this)}get classes(){return{main:{"ui5-checkbox--hoverable":!this.disabled&&!this.readonly&&xi()}}}get ariaReadonly(){return this.readonly?"true":void 0}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get effectiveAriaChecked(){return this.indeterminate&&this.checked?"mixed":this.checked}get ariaLabelledBy(){if(!this.ariaLabelText)return this.text?`${this._id}-label`:void 0}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==k.None}get valueStateText(){if(this.valueState!==k.None&&this.valueState!==k.Information)return this.valueStateTextMappings()[this.valueState]}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?void 0:e||"0"}get isCompletelyChecked(){return this.checked&&!this.indeterminate}static async onDefine(){Wi.i18nBundle=await ie("@ui5/webcomponents")}};_t([d()],Ne.prototype,"accessibleNameRef",void 0);_t([d()],Ne.prototype,"accessibleName",void 0);_t([d({type:Boolean})],Ne.prototype,"disabled",void 0);_t([d({type:Boolean})],Ne.prototype,"readonly",void 0);_t([d({type:Boolean})],Ne.prototype,"required",void 0);_t([d({type:Boolean})],Ne.prototype,"indeterminate",void 0);_t([d({type:Boolean})],Ne.prototype,"checked",void 0);_t([d()],Ne.prototype,"text",void 0);_t([d({type:k,defaultValue:k.None})],Ne.prototype,"valueState",void 0);_t([d({type:en,defaultValue:en.None})],Ne.prototype,"wrappingType",void 0);_t([d()],Ne.prototype,"name",void 0);_t([d({type:Boolean})],Ne.prototype,"active",void 0);_t([Z()],Ne.prototype,"formSupport",void 0);Ne=Wi=_t([U({tag:"ui5-checkbox",languageAware:!0,renderer:he,template:E1,styles:I1,dependencies:[ms,Ut]}),I("change")],Ne);Ne.define();const Su=Ne;let sl;const to=new Map,cm=()=>(sl||(sl=new window.ResizeObserver(t=>{window.requestAnimationFrame(()=>{t.forEach(e=>{const n=to.get(e.target);n&&Promise.all(n.map(i=>i()))})})})),sl),P1=(t,e)=>{const n=to.get(t)||[];n.length||cm().observe(t),to.set(t,[...n,e])},L1=(t,e)=>{const n=to.get(t)||[];if(n.length===0)return;const i=n.filter(o=>o!==e);i.length===0?(cm().unobserve(t),to.delete(t)):to.set(t,i)};class At{static register(e,n){let i=e;ro(i)&&(i=i.getDomRef()),i instanceof HTMLElement?P1(i,n):console.warn("Cannot register ResizeHandler for element",e)}static deregister(e,n){let i=e;ro(i)&&(i=i.getDomRef()),i instanceof HTMLElement?L1(i,n):console.warn("Cannot deregister ResizeHandler for element",e)}}const O1="slim-arrow-down",um="M420.5 187q11-12 23 0 5 5 5 11t-5 11l-165 165q-10 9-23 9t-22-9l-166-165q-5-5-5-11.5t5-11.5 11.5-5 11.5 5l160 160q5 6 11 0z",R1=!1,M1="SAP-icons-v4",F1="@ui5/webcomponents-icons";G(O1,{pathData:um,ltr:R1,collection:M1,packageName:F1});const N1="slim-arrow-down",_m="M96 186q0-11 7.5-18.5T122 160q10 0 18 8l116 121 116-121q8-8 18-8 11 0 18.5 7.5T416 186q0 10-7 17L275 344q-8 8-19 8-12 0-18-8L103 203q-7-7-7-17z",z1=!1,H1="SAP-icons-v5",U1="@ui5/webcomponents-icons";G(N1,{pathData:_m,ltr:z1,collection:H1,packageName:U1});Ue();const dm={key:"ICON_DECLINE",defaultText:"Decline"},hm={key:"ICON_ERROR",defaultText:"Error"},V1="decline",pm="M86 109l22-23q5-5 12-5 6 0 11 5l124 125L380 86q5-5 11-5 7 0 12 5l22 23q12 11 0 23L301 256l124 125q11 11 0 22l-22 23q-8 5-12 5-3 0-11-5L255 301 131 426q-5 5-11 5-4 0-12-5l-22-23q-11-11 0-22l124-125L86 132q-12-12 0-23z",W1=!1,j1=dm,q1="SAP-icons-v4",Y1="@ui5/webcomponents-icons";G(V1,{pathData:pm,ltr:W1,accData:j1,collection:q1,packageName:Y1});const G1="decline",fm="M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-10 0-18-8L256 292 140 408q-8 8-18 8-11 0-18.5-7.5T96 390q0-10 8-18l116-116-116-116q-8-8-8-18 0-11 7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z",X1=!1,Z1=dm,Q1="SAP-icons-v5",J1="@ui5/webcomponents-icons";G(G1,{pathData:fm,ltr:X1,accData:Z1,collection:Q1,packageName:J1});Ue();const K1="multiselect-all",mm="M92 472l80-97 20 19L92 512l-60-59 20-20zm80-285l20 19L92 323l-60-59 20-19 40 38zm0-187l20 19L92 137 32 78l20-21 40 40zm292 65q16 0 16 16 0 6-4.5 11T464 97H273q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h191zm0 191q16 0 16 16 0 6-4.5 11t-11.5 5H273q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h191zm0 192q16 0 16 16 0 6-4.5 11t-11.5 5H273q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h191z",ek=!0,tk="SAP-icons-v4",nk="@ui5/webcomponents-icons";G(K1,{pathData:mm,ltr:ek,collection:tk,packageName:nk});const ik="multiselect-all",gm="M198 0q11 0 18.5 7.5T224 26q0 8-6 16l-94 109q-7 9-19 9-11 0-19-8l-47-52q-7-7-7-17 0-11 7.5-18.5T58 57q10 0 19 9l27 30 75-87q8-9 19-9zm84 96q-11 0-18.5-7.5T256 70t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T454 96H282zm-84 80q11 0 18.5 7.5T224 202q0 8-6 16l-94 109q-7 9-19 9-11 0-19-8l-47-52q-7-7-7-17 0-11 7.5-18.5T58 233q10 0 19 9l27 30 75-87q8-9 19-9zm256 48q11 0 18.5 7.5T480 250t-7.5 18-18.5 7H282q-11 0-18.5-7t-7.5-18 7.5-18.5T282 224h172zM198 352q11 0 18.5 7.5T224 378q0 8-6 16l-94 109q-7 9-19 9-11 0-19-8l-47-52q-7-7-7-17 0-11 7.5-18.5T58 409q10 0 19 9l27 30 75-87q8-9 19-9zm256 64q11 0 18.5 7.5T480 442t-7.5 18-18.5 7H282q-11 0-18.5-7t-7.5-18 7.5-18.5T282 416h172z",ok=!0,rk="SAP-icons-v5",ak="@ui5/webcomponents-icons";G(ik,{pathData:gm,ltr:ok,collection:rk,packageName:ak});Ue();const sk="not-editable",vm="M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z",lk=!1,ck="SAP-icons-v4",uk="@ui5/webcomponents-icons";G(sk,{pathData:vm,ltr:lk,collection:ck,packageName:uk});const _k="not-editable",bm="M504 94q7 7 7 18t-7 18L130 505q-9 7-18 7H26q-11 0-18.5-7.5T0 486v-86q0-10 8-18L381 7q9-7 18-7 11 0 18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50zm142 270q7 7 7 18t-7.5 18.5T486 512t-18-7l-37-38-38 38q-7 7-18 7t-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38z",dk=!1,hk="SAP-icons-v5",pk="@ui5/webcomponents-icons";G(_k,{pathData:bm,ltr:dk,collection:hk,packageName:pk});Ue();const fk="error",ym="M512 256q0 53-20.5 100t-55 81.5-81 54.5-99.5 20-100-20.5-81.5-55T20 355 0 256q0-54 20-100.5t55-81T156.5 20 256 0t99.5 20T437 75t55 81.5 20 99.5zM399 364q6-6 0-12l-86-86q-6-6 0-12l81-81q6-6 0-12l-37-37q-2-2-6-2t-6 2l-83 82q-1 3-6 3-3 0-6-3l-84-83q-1-2-6-2-4 0-6 2l-37 37q-6 6 0 12l83 82q6 6 0 12l-83 82q-2 2-2.5 6t2.5 6l36 37q4 2 6 2 4 0 6-2l85-84q2-2 6-2t6 2l88 88q4 2 6 2t6-2z",mk=!1,gk=hm,vk="SAP-icons-v4",bk="@ui5/webcomponents-icons";G(fk,{pathData:ym,ltr:mk,accData:gk,collection:vk,packageName:bk});const yk="error",wm="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z",wk=!1,kk=hm,xk="SAP-icons-v5",Tk="@ui5/webcomponents-icons";G(yk,{pathData:wm,ltr:wk,accData:kk,collection:xk,packageName:Tk});Ue();const Ck="alert",km="M501 374q5 10 7.5 19.5T512 412v5q0 31-23 47t-50 16H74q-13 0-26-4t-23.5-12-17-20T0 417q0-13 4-22.5t9-20.5L198 38q21-38 61-38 38 0 59 38zM257 127q-13 0-23.5 8T223 161q1 7 2 12 3 25 4.5 48t3.5 61q0 11 7.5 16t16.5 5q22 0 23-21l2-36 9-85q0-18-10.5-26t-23.5-8zm0 299q20 0 31.5-12t11.5-32q0-19-11.5-31T257 339t-31.5 12-11.5 31q0 20 11.5 32t31.5 12z",Sk=!1,$k="SAP-icons-v4",Ik="@ui5/webcomponents-icons";G(Ck,{pathData:km,ltr:Sk,collection:$k,packageName:Ik});const Ek="alert",xm="M505 399q7 13 7 27 0 21-15.5 37.5T456 480H56q-25 0-40.5-16.5T0 426q0-14 7-27L208 59q17-27 48-27 14 0 27 6.5T304 59zM288 176q0-14-9-23t-23-9-23 9-9 23v96q0 14 9 23t23 9 23-9 9-23v-96zm-32 240q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z",Ak=!1,Dk="SAP-icons-v5",Bk="@ui5/webcomponents-icons";G(Ek,{pathData:xm,ltr:Ak,collection:Dk,packageName:Bk});Ue();const Pk="sys-enter-2",Tm="M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-118-87q4-8-1-13l-36-36q-3-4-8-4t-8 5L237 294q-3 1-4 0l-70-52q-4-3-7-3t-4.5 2-2.5 3l-29 41q-6 8 2 14l113 95q2 2 7 2t8-4z",Lk=!0,Ok="SAP-icons-v4",Rk="@ui5/webcomponents-icons";G(Pk,{pathData:Tm,ltr:Lk,collection:Ok,packageName:Rk});const Mk="sys-enter-2",Cm="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm150 183q10-9 10-23 0-13-9.5-22.5T384 128t-22 9L186 308l-68-63q-9-9-22-9t-22.5 9.5T64 268q0 15 10 24l91 83q9 9 21 9 13 0 23-9z",Fk=!0,Nk="SAP-icons-v5",zk="@ui5/webcomponents-icons";G(Mk,{pathData:Cm,ltr:Fk,collection:Nk,packageName:zk});Ue();const Hk="information",Sm="M0 256q0-53 20.5-100t55-81.5T157 20t99-20q54 0 100.5 20t81 55 54.5 81.5 20 99.5q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256zm192 112v33h128v-33h-32V215q0-6-7-6h-88v31h32v128h-33zm34-201q14 11 30 11 17 0 29.5-11.5T298 138q0-19-13-31-12-12-29-12-19 0-30.5 12.5T214 138q0 17 12 29z",Uk=!1,Vk="SAP-icons-v4",Wk="@ui5/webcomponents-icons";G(Hk,{pathData:Sm,ltr:Uk,collection:Vk,packageName:Wk});const jk="information",$m="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 160q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9zm32 64q0-14-9-23t-23-9-23 9-9 23v160q0 14 9 23t23 9 23-9 9-23V224z",qk=!1,Yk="SAP-icons-v5",Gk="@ui5/webcomponents-icons";G(jk,{pathData:$m,ltr:qk,collection:Yk,packageName:Gk});Ue();var Pr=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Hn=class extends Q{get isGroupItem(){return!1}};Pr([d()],Hn.prototype,"text",void 0);Pr([d()],Hn.prototype,"additionalText",void 0);Pr([d({type:Boolean})],Hn.prototype,"focused",void 0);Pr([d({type:Boolean})],Hn.prototype,"selected",void 0);Hn=Pr([U("ui5-cb-item")],Hn);Hn.define();const Xk=Hn;var Im=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let sr=class extends Xk{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};Im([d({type:Boolean})],sr.prototype,"selected",void 0);sr=Im([U("ui5-mcb-item")],sr);sr.define();const Em=sr;var Am=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let lr=class extends Q{get isGroupItem(){return!0}get selected(){return!1}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};Am([d()],lr.prototype,"text",void 0);lr=Am([U("ui5-mcb-group-item")],lr);lr.define();const Zk=lr,bs=t=>t.nodeName==="SLOT"?!1:t.offsetWidth<=0&&t.offsetHeight<=0||t.style&&t.style.visibility==="hidden",Qk=t=>{if(!t)return!1;const e=t.nodeName.toLowerCase();if(t.hasAttribute("data-sap-no-tab-ref")||bs(t))return!1;const n=t.getAttribute("tabindex");return n!=null?parseInt(n)>=0:e==="a"||/input|select|textarea|button|object/.test(e)?!t.disabled:!1},ac=t=>za([...t.children]),Dm=t=>{const e=za([...t.children]);return e.length?e[e.length-1]:null},za=(t,e)=>{const n=e||[];return t&&t.forEach(i=>{if(i.nodeType===Node.TEXT_NODE||i.nodeType===Node.COMMENT_NODE)return;let o=i;if(!o.hasAttribute("data-sap-no-tab-ref")){if(o.shadowRoot){const r=o.shadowRoot.children;o=Array.from(r).find(a=>a.tagName!=="STYLE")}o&&(Qk(o)&&n.push(o),o.tagName==="SLOT"?za(o.assignedNodes(),n):za([...o.children],n))}}),n};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Jk={packageName:"@ui5/webcomponents",fileName:"themes/ListItemBase.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	height: var(--_ui5_list_item_base_height);
	background: var(--ui5-listitem-background-color);
	box-sizing: border-box;
	border-bottom: 1px solid transparent;
}

/* selected */

:host([selected]) {
	background: var(--sapList_SelectionBackgroundColor);
}

:host([has-border]) {
	border-bottom: var(--ui5-listitem-border-bottom);
}

:host([selected]) {
	border-bottom: var(--ui5-listitem-selected-border-bottom);
}

:host(:not([focused])[selected][has-border]) {
	border-bottom: var(--ui5-listitem-selected-border-bottom);
}

/* focused & selected */

:host([focused][selected]) {
	border-bottom: var(--ui5-listitem-focused-selected-border-bottom);
}

.ui5-li-root {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: var(--ui5-listitem-padding);
	box-sizing: border-box;
}

/* focused */

:host([focused]) .ui5-li-root.ui5-li--focusable {
	outline: none;
}

:host([focused]) .ui5-li-root.ui5-li--focusable:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	border-radius: var(--ui5-listitem-focus-border-radius);
	top: var(--ui5-listitem-focus-offset);
	right: var(--ui5-listitem-focus-offset);
	bottom: var(--ui5-listitem-focus-offset);
	left: var(--ui5-listitem-focus-offset);
	pointer-events: none;
}

:host([focused]) .ui5-li-content:focus:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
}

:host([active][focused]) .ui5-li-root.ui5-li--focusable:after {
	border-color: var(--ui5-listitem-active-border-color);
}

:host([disabled]) {
    opacity: var(--_ui5-listitembase_disabled_opacity);
    pointer-events: none;
}

.ui5-li-content {
	max-width: 100%;
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapList_TextColor);
}
`};var ko=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Un=class extends Q{_onfocusin(e){e.target===this.getFocusDomRef()&&(this.focused=!0,this.fireEvent("_focused",e))}_onfocusout(){this.focused=!1}_onkeydown(e){if(Kt(e))return this._handleTabNext(e);if(Fn(e))return this._handleTabPrevious(e)}_onkeyup(e){}_handleTabNext(e){this.shouldForwardTabAfter()&&(this.fireEvent("_forward-after",{},!0)||e.preventDefault())}_handleTabPrevious(e){const n=e.target;this.shouldForwardTabBefore(n)&&this.fireEvent("_forward-before")}shouldForwardTabAfter(){const e=ac(this.getFocusDomRef());return e.length===0||e[e.length-1]===Sr()}shouldForwardTabBefore(e){return this.getFocusDomRef()===e}get classes(){return{main:{"ui5-li-root":!0,"ui5-li--focusable":!this.disabled}}}get _ariaDisabled(){return this.disabled?!0:void 0}get hasConfigurableMode(){return!1}get _effectiveTabIndex(){return this.disabled?-1:this.selected?0:this._tabIndex}};ko([d({type:Boolean})],Un.prototype,"selected",void 0);ko([d({type:Boolean})],Un.prototype,"hasBorder",void 0);ko([d({defaultValue:"-1",noAttribute:!0})],Un.prototype,"_tabIndex",void 0);ko([d({type:Boolean})],Un.prototype,"disabled",void 0);ko([d({type:Boolean})],Un.prototype,"focused",void 0);Un=ko([U({renderer:he,styles:Jk}),I("_focused"),I("_forward-after"),I("_forward-before")],Un);const ys=Un;function Kk(t,e,n){return p`<ul part="native-li" tabindex="${l(this._tabIndex)}" class="ui5-ghli-root ${N(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${l(this.ariaLabelText)}" aria-roledescription="${l(this.groupHeaderText)}" role="group"><div id="${l(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const ex={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	height: var(--_ui5_group_header_list_item_height);
	background: var(--ui5-group-header-listitem-background-color);
	color: var(--sapList_TableGroupHeaderTextColor);
}

:host([has-border]) {
	border-bottom: 1px solid var(--sapList_GroupHeaderBorderColor);
}

.ui5-li-root.ui5-ghli-root {
	padding-top: 0.5rem;
	color: currentColor;
	font-size: var(--sapFontHeader6Size);
	font-weight: normal;
	line-height: 2rem;
	margin: 0;
}

.ui5-ghli-title {
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: bold;
}
`};var Bm=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},va;let cr=va=class extends ys{get groupItem(){return!0}get groupHeaderText(){return va.i18nBundle.getText(Cy)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){va.i18nBundle=await ie("@ui5/webcomponents")}};Bm([d()],cr.prototype,"accessibleName",void 0);cr=va=Bm([U({tag:"ui5-li-groupheader",languageAware:!0,template:Kk,styles:[ys.styles,ex]})],cr);cr.define();const tx=cr;var sc;(function(t){t.Auto="Auto",t.Vertical="Vertical",t.Horizontal="Horizontal",t.Paging="Paging"})(sc||(sc={}));const pi=sc;var lc;(function(t){t.Static="Static",t.Cyclic="Cyclic"})(lc||(lc={}));const Bo=lc;class $u{constructor(e,n){if(!e.isUI5Element)throw new Error("The root web component must be a UI5 Element instance");if(this.rootWebComponent=e,this.rootWebComponent.addEventListener("keydown",this._onkeydown.bind(this)),this.rootWebComponent._onComponentStateFinalized=()=>{this._init()},typeof n.getItemsCallback!="function")throw new Error("getItemsCallback is required");this._getItems=n.getItemsCallback,this._currentIndex=n.currentIndex||0,this._rowSize=n.rowSize||1,this._behavior=n.behavior||Bo.Static,this._navigationMode=n.navigationMode||pi.Auto,this._affectedPropertiesNames=n.affectedPropertiesNames||[],this._skipItemsSize=n.skipItemsSize||null}setCurrentItem(e){const n=this._getItems().indexOf(e);if(n===-1){console.warn("The provided item is not managed by ItemNavigation",e);return}this._currentIndex=n,this._applyTabIndex()}setRowSize(e){this._rowSize=e}_init(){this._getItems().forEach((e,n)=>{e._tabIndex=n===this._currentIndex?"0":"-1"})}_onkeydown(e){if(!this._canNavigate())return;const n=this._navigationMode===pi.Horizontal||this._navigationMode===pi.Auto,i=this._navigationMode===pi.Vertical||this._navigationMode===pi.Auto,o=this.rootWebComponent.effectiveDir==="rtl";if(o&&Jt(e)&&n)this._handleRight();else if(o&&Et(e)&&n)this._handleLeft();else if(Jt(e)&&n)this._handleLeft();else if(Et(e)&&n)this._handleRight();else if(Ct(e)&&i)this._handleUp();else if(ct(e)&&i)this._handleDown();else if(Ft(e))this._handleHome();else if(Mn(e))this._handleEnd();else if(_s(e))this._handlePageUp();else if(ds(e))this._handlePageDown();else return;e.preventDefault(),this._applyTabIndex(),this._focusCurrentItem()}_handleUp(){const e=this._getItems().length;if(this._currentIndex-this._rowSize>=0){this._currentIndex-=this._rowSize;return}if(this._behavior===Bo.Cyclic){const n=this._currentIndex%this._rowSize,i=n===0?this._rowSize-1:n-1,o=Math.ceil(e/this._rowSize);let r=i+(o-1)*this._rowSize;r>e-1&&(r-=this._rowSize),this._currentIndex=r}else this._currentIndex=0}_handleDown(){const e=this._getItems().length;if(this._currentIndex+this._rowSize<e){this._currentIndex+=this._rowSize;return}if(this._behavior===Bo.Cyclic){const i=(this._currentIndex%this._rowSize+1)%this._rowSize;this._currentIndex=i}else this._currentIndex=e-1}_handleLeft(){const e=this._getItems().length;if(this._currentIndex>0){this._currentIndex-=1;return}this._behavior===Bo.Cyclic&&(this._currentIndex=e-1)}_handleRight(){const e=this._getItems().length;if(this._currentIndex<e-1){this._currentIndex+=1;return}this._behavior===Bo.Cyclic&&(this._currentIndex=0)}_handleHome(){const e=this._rowSize>1?this._rowSize:this._getItems().length;this._currentIndex-=this._currentIndex%e}_handleEnd(){const e=this._rowSize>1?this._rowSize:this._getItems().length;this._currentIndex+=e-1-this._currentIndex%e}_handlePageUp(){this._rowSize>1||this._handlePageUpFlat()}_handlePageDown(){this._rowSize>1||this._handlePageDownFlat()}_handlePageUpFlat(){if(this._skipItemsSize===null){this._currentIndex-=this._currentIndex;return}this._currentIndex+1>this._skipItemsSize?this._currentIndex-=this._skipItemsSize:this._currentIndex-=this._currentIndex}_handlePageDownFlat(){if(this._skipItemsSize===null){this._currentIndex=this._getItems().length-1;return}this._getItems().length-this._currentIndex-1>this._skipItemsSize?this._currentIndex+=this._skipItemsSize:this._currentIndex=this._getItems().length-1}_applyTabIndex(){const e=this._getItems();for(let n=0;n<e.length;n++)e[n]._tabIndex=n===this._currentIndex?"0":"-1";this._affectedPropertiesNames.forEach(n=>{const i=this.rootWebComponent[n];this.rootWebComponent[n]=Array.isArray(i)?[...i]:{...i}})}_focusCurrentItem(){const e=this._getCurrentItem();e&&e.focus()}_canNavigate(){const e=this._getCurrentItem(),n=Sr();return e&&e===n}_getCurrentItem(){const e=this._getItems();if(!e.length)return;for(;this._currentIndex>=e.length;)this._currentIndex-=this._rowSize;this._currentIndex<0&&(this._currentIndex=0);const n=e[this._currentIndex];if(!n)return;if(ro(n))return n.getFocusDomRef();const i=this.rootWebComponent.getDomRef();if(i&&n.id)return i.querySelector(`#${n.id}`)}}const rn=new WeakMap;class Go{static get tasks(){return rn}static enqueue(e,n){rn.has(e)||rn.set(e,[]),rn.get(e).push(n)}static run(e,n){return rn.has(e)||rn.set(e,[]),n().then(()=>{const i=rn.get(e);if(i.length>0)return Go.run(e,i.shift());rn.delete(e)})}static push(e,n){rn.get(e)?Go.enqueue(e,n):Go.run(e,n)}}const nx=t=>{let e=null,n=!1,i,o,r;const a=new Promise((s,c)=>{r=u=>{e=e||u;const h=u-e,_=t.duration-h;if(h<=t.duration){const m=1-_/t.duration;t.advance(m),n||(i=requestAnimationFrame(r))}else t.advance(1),s()},o=()=>{n=!0,cancelAnimationFrame(i),c(new Error("animation stopped"))}}).catch(s=>s);return Go.push(t.element,()=>(typeof t.beforeStart=="function"&&t.beforeStart(),requestAnimationFrame(r),new Promise(s=>{a.then(()=>s())}))),{promise:()=>a,stop:()=>o}},ix=400,ox=(t,e,n)=>{let i,o;return nx({beforeStart:()=>{i=t.scrollLeft,o=t.scrollTop},duration:ix,element:t,advance:r=>{t.scrollLeft=i+r*e,t.scrollTop=o+r*n}})},rx="scroll",ax=Gl()?"touchend":"mouseup";class sx extends Yn{constructor(e){super(),this.supportsTouch=Gl(),this.containerComponent=e,this.mouseMove=this.ontouchmove.bind(this),this.mouseUp=this.ontouchend.bind(this),this.touchStart=this.ontouchstart.bind(this),this.supportsTouch=Gl(),this.cachedValue={dragX:0,dragY:0},this.startX=0,this.startY=0,this.supportsTouch?(e.addEventListener("touchstart",this.touchStart,{passive:!0}),e.addEventListener("touchmove",this.mouseMove,{passive:!0}),e.addEventListener("touchend",this.mouseUp,{passive:!0})):e.addEventListener("mousedown",this.touchStart,{passive:!0})}set scrollContainer(e){this._container=e}get scrollContainer(){return this._container}async scrollTo(e,n,i=0,o=0){let r=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0;for(;!r&&i>0;)await new Promise(a=>{setTimeout(()=>{r=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0,i--,a()},o)});this._container.scrollLeft=e,this._container.scrollTop=n}move(e,n,i){if(i){this._container.scrollLeft+=e,this._container.scrollTop+=n;return}if(this._container)return ox(this._container,e,n)}getScrollLeft(){return this._container.scrollLeft}getScrollTop(){return this._container.scrollTop}_isTouchInside(e){let n=null;this.supportsTouch&&e instanceof TouchEvent&&(n=e.touches[0]);const i=this._container.getBoundingClientRect(),o=this.supportsTouch?n.clientX:e.x,r=this.supportsTouch?n.clientY:e.y;return o>=i.left&&o<=i.right&&r>=i.top&&r<=i.bottom}ontouchstart(e){let n=null;this.supportsTouch&&e instanceof TouchEvent&&(n=e.touches[0]),this.supportsTouch?(this.startX=n.pageX,this.startY=n.pageY):(document.addEventListener("mouseup",this.mouseUp,{passive:!0}),document.addEventListener("mousemove",this.mouseMove,{passive:!0})),this.supportsTouch&&e instanceof TouchEvent&&(this._prevDragX=n.pageX,this._prevDragY=n.pageY),e instanceof MouseEvent&&(this._prevDragX=e.x,this._prevDragY=e.y),this._canScroll=this._isTouchInside(e)}ontouchmove(e){if(!this._canScroll)return;const n=this._container,i=this.supportsTouch?e.touches[0]:null,o=this.supportsTouch?i.pageX:e.x,r=this.supportsTouch?i.pageY:e.y;n.scrollLeft+=this._prevDragX-o,n.scrollTop+=this._prevDragY-r,this.fireEvent(rx,{isLeft:o>this._prevDragX,isRight:o<this._prevDragX}),this.cachedValue.dragX=this._prevDragX,this.cachedValue.dragY=this._prevDragY,this._prevDragX=o,this._prevDragY=r}ontouchend(e){if(this.supportsTouch){const s=Math.abs(e.changedTouches[0].pageX-this.startX),c=Math.abs(e.changedTouches[0].pageY-this.startY);if(s<10&&c<10)return}if(!this._canScroll)return;const n=this._container,i=this.supportsTouch?e.changedTouches[0].pageX:e.x,o=this.supportsTouch?e.changedTouches[0].pageY:e.y;n.scrollLeft+=this._prevDragX-i,n.scrollTop+=this._prevDragY-o;const a=i===this._prevDragX?this.cachedValue.dragX:i;this.fireEvent(ax,{isLeft:a<this._prevDragX,isRight:a>this._prevDragX}),this._prevDragX=i,this._prevDragY=o,this.supportsTouch||(document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp))}}function lx(t,e,n){return p`${this._isPhone?cx.call(this,t,e,n):px.call(this,t,e,n)}`}function cx(t,e,n){return n?p`<${v("ui5-dialog",e,n)} accessible-name=${l(this.accessibleName)} accessible-name-ref=${l(this.accessibleNameRef)} accessible-role=${l(this.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${l(this._beforeDialogOpen)}" @ui5-after-open="${l(this._propagateDialogEvent)}" @ui5-before-close="${l(this._propagateDialogEvent)}" @ui5-after-close="${l(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:_d.call(this,t,e,n)}<slot></slot><slot slot="footer" name="footer"></slot></${v("ui5-dialog",e,n)}>`:p`<ui5-dialog accessible-name=${l(this.accessibleName)} accessible-name-ref=${l(this.accessibleNameRef)} accessible-role=${l(this.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${l(this._beforeDialogOpen)}" @ui5-after-open="${l(this._propagateDialogEvent)}" @ui5-before-close="${l(this._propagateDialogEvent)}" @ui5-after-close="${l(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:_d.call(this,t,e,n)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`}function _d(t,e,n){return p`${this.header.length?ux.call(this,t,e,n):_x.call(this,t,e,n)}`}function ux(t,e,n){return p`<slot slot="header" name="header"></slot>`}function _x(t,e,n){return p`<div class="${N(this.classes.header)}" slot="header">${this.headerText?dx.call(this,t,e,n):void 0}${this._hideCloseButton?void 0:hx.call(this,t,e,n)}</div>`}function dx(t,e,n){return n?p`<${v("ui5-title",e,n)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${l(this.headerText)}</${v("ui5-title",e,n)}>`:p`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${l(this.headerText)}</ui5-title>`}function hx(t,e,n){return n?p`<${v("ui5-button",e,n)} icon="decline" design="Transparent" aria-label="${l(this._closeDialogAriaLabel)}" @click="${this.close}"></${v("ui5-button",e,n)}>`:p`<ui5-button icon="decline" design="Transparent" aria-label="${l(this._closeDialogAriaLabel)}" @click="${this.close}"></ui5-button>`}function px(t,e,n){return p`<section style="${z(this.styles.root)}" class="${N(this.classes.root)}" role="${l(this._role)}" aria-modal="${l(this._ariaModal)}" aria-label="${l(this._ariaLabel)}" aria-labelledby="${l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${z(this.styles.arrow)}"></span>${this._displayHeader?fx.call(this,t,e,n):void 0}<div style="${z(this.styles.content)}" class="${N(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?vx.call(this,t,e,n):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`}function fx(t,e,n){return p`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?mx.call(this,t,e,n):gx.call(this,t,e,n)}</header>`}function mx(t,e,n){return p`<slot name="header"></slot>`}function gx(t,e,n){return p`<h1 class="ui5-popup-header-text">${l(this.headerText)}</h1>`}function vx(t,e,n){return p`${this.footer.length?bx.call(this,t,e,n):void 0}`}function bx(t,e,n){return p`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}class yx extends wf{static isValid(e){return typeof e=="string"||e instanceof HTMLElement}static propertyToAttribute(e){return e instanceof HTMLElement?null:e}}const Rt=(t,e,n)=>Math.min(Math.max(t,e),n),wx=/^(?:a|area)$/i,kx=/^(?:input|select|textarea|button)$/i,xx=t=>{if(t.disabled)return!1;const e=t.getAttribute("tabindex");return e!=null?parseInt(e)>=0:kx.test(t.nodeName)||wx.test(t.nodeName)&&!!t.href},Tx=t=>t.hasAttribute("data-ui5-focus-trap"),dd=async(t,e)=>!t||bs(t)?null:Iu(t,!0,e),Cx=async(t,e)=>!t||bs(t)?null:Iu(t,!1,e),Sx=t=>t.hasAttribute("data-ui5-focus-redirect")||!bs(t),Iu=async(t,e,n)=>{let i,o,r=-1;t.shadowRoot?i=e?t.shadowRoot.firstChild:t.shadowRoot.lastChild:t instanceof HTMLSlotElement&&t.assignedNodes()?(o=t.assignedNodes(),r=e?0:o.length-1,i=o[r]):n?i=t:i=e?t.firstElementChild:t.lastElementChild;let a;for(;i;){const s=i;if(ro(i)&&(i=await i.getFocusDomRefAsync()),!i)return null;if(i.nodeType===1&&Sx(i)&&!Tx(i)){if(xx(i))return i&&typeof i.focus=="function"?i:null;if(a=await Iu(i,e),a)return a&&typeof a.focus=="function"?a:null}i=e?s.nextSibling:s.previousSibling,o&&!o[r].contains(i)&&(r=e?r+1:r-1,i=o[r])}return null},$x="ui5-content-native-scrollbars",Pm=()=>document.body.classList.contains($x),cc=new Map,Lr=new Map;Lr.set("S",[0,599]);Lr.set("M",[600,1023]);Lr.set("L",[1024,1439]);Lr.set("XL",[1440,1/0]);var Ha;(function(t){t.RANGE_4STEPS="4Step"})(Ha||(Ha={}));const Ix=(t,e)=>{cc.set(t,e)},Ex=(t,e=window.innerWidth)=>{let n=cc.get(t);n||(n=cc.get(Ha.RANGE_4STEPS));let i;const o=Math.floor(e);return n.forEach((r,a)=>{o>=r[0]&&o<=r[1]&&(i=a)}),i||[...n.keys()][0]},Ua={RANGESETS:Ha,initRangeSet:Ix,getCurrentRange:Ex};Ua.initRangeSet(Ua.RANGESETS.RANGE_4STEPS,Lr);function Ax(t,e,n){return p`<section style="${z(this.styles.root)}" class="${N(this.classes.root)}" role="${l(this._role)}" aria-modal="${l(this._ariaModal)}" aria-label="${l(this._ariaLabel)}" aria-labelledby="${l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${z(this.styles.content)}" class="${N(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function Dx(t,e,n){return p`<div class="ui5-block-layer" ?hidden=${this._blockLayerHidden} tabindex="0" style="${z(this.styles.blockLayer)}" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div>`}var uc;(function(t){t.None="None",t.Dialog="Dialog",t.AlertDialog="AlertDialog"})(uc||(uc={}));const uo=uc;let St=[];const Lm=(t,e=[])=>{St.some(n=>n.instance===t)||St.push({instance:t,parentPopovers:e}),Mm(),St.length===1&&Px()},Om=t=>{St=St.filter(e=>e.instance!==t),Mm(),St.length||Lx()},Bx=()=>[...St],Rm=t=>{St.length&&pu(t)&&St[St.length-1].instance.close(!0)},Px=()=>{document.addEventListener("keydown",Rm)},Lx=()=>{document.removeEventListener("keydown",Rm)},Mm=()=>{let t,e=!1;for(let n=St.length-1;n>=0;n--)t=St[n].instance,!e&&t.isModal?(t.isTopModalPopup=!0,e=!0):t.isTopModalPopup=!1};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Ox={packageName:"@ui5/webcomponents",fileName:"themes/Popup.css",content:`:host {
    min-width: 1px; /** So that it can always get focus **/
    display: none;
    position: fixed;
}
`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Rx={packageName:"@ui5/webcomponents",fileName:"themes/PopupStaticAreaStyles.css",content:`.ui5-block-layer {
	display: none;
	position: fixed;
	background-color: var(--sapBlockLayer_Background);
	opacity: 0.6;
	top: -500px;
	left: -500px;
	right: -500px;
	bottom: -500px;
	outline: none;
	pointer-events: all;
	z-index: -1;
}

.ui5-block-layer:not([hidden]) {
	display: inline-block;
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Mx={packageName:"@ui5/webcomponents",fileName:"themes/PopupGlobal.css",content:`.ui5-popup-scroll-blocker {
	overflow: hidden;
}
`};var yt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},Ho;const Fx=()=>{Cr("data-ui5-popup-scroll-blocker")||Tr(Mx,"data-ui5-popup-scroll-blocker")};Fx();const Xr=new Set;let et=Ho=class extends Q{constructor(){super(),this._resizeHandler=this._resize.bind(this)}onBeforeRendering(){this._blockLayerHidden=!this.isOpen()||!this.isTopModalPopup}onEnterDOM(){At.register(this,this._resizeHandler)}onExitDOM(){this.isOpen()&&(Ho.unblockPageScrolling(this),this._removeOpenedPopup()),At.deregister(this,this._resizeHandler)}get _displayProp(){return"block"}_resize(){this.mediaRange=Ua.getCurrentRange(Ua.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}_preventBlockLayerFocus(e){e.preventDefault()}static blockPageScrolling(e){Xr.add(e),Xr.size===1&&document.documentElement.classList.add("ui5-popup-scroll-blocker")}static unblockPageScrolling(e){Xr.delete(e),Xr.size===0&&document.documentElement.classList.remove("ui5-popup-scroll-blocker")}_scroll(e){this.fireEvent("scroll",{scrollTop:e.target.scrollTop,targetRef:e.target})}_onkeydown(e){const n=e.target===this._root&&Fn(e),i=te(e)&&!this.isOpen();(n||i)&&e.preventDefault()}_onfocusout(e){e.relatedTarget||(this._shouldFocusRoot=!0)}_onmousedown(e){Ra()||this._root.removeAttribute("tabindex"),this.shadowRoot.contains(e.target)?this._shouldFocusRoot=!0:this._shouldFocusRoot=!1}_onmouseup(){Ra()||(this._root.tabIndex=-1),this._shouldFocusRoot&&(gw()&&this._root.focus(),this._shouldFocusRoot=!1)}async forwardToFirst(){const e=await dd(this);e?e.focus():this._root.focus()}async forwardToLast(){const e=await Cx(this);e?e.focus():this._root.focus()}async applyInitialFocus(){await this.applyFocus()}async applyFocus(){if(await this._waitForDomRef(),this.getRootNode()===this)return;const e=this.getRootNode().getElementById(this.initialFocus)||document.getElementById(this.initialFocus)||await dd(this)||this._root;e&&(e===this._root&&(e.tabIndex=-1),e.focus())}isOpen(){return this.opened}isFocusWithin(){return ob(this._root)}async _open(e){var i;this.fireEvent("before-open",{},!0,!1)&&(this.isModal&&!this.shouldHideBackdrop&&(this.getStaticAreaItemDomRef(),this._blockLayerHidden=!1,Ho.blockPageScrolling(this)),this._zIndex=Ap(),this.style.zIndex=((i=this._zIndex)==null?void 0:i.toString())||"",this._focusedElementBeforeOpen=$p(),this._show(),this._addOpenedPopup(),this.opened=!0,this.open=!0,await vo(),!this._disableInitialFocus&&!e&&await this.applyInitialFocus(),this.fireEvent("after-open",{},!1,!1))}_addOpenedPopup(){Lm(this)}close(e=!1,n=!1,i=!1){!this.opened||!this.fireEvent("before-close",{escPressed:e},!0,!1)||(this.isModal&&(this._blockLayerHidden=!0,Ho.unblockPageScrolling(this)),this.hide(),this.opened=!1,this.open=!1,n||this._removeOpenedPopup(),!this.preventFocusRestore&&!i&&this.resetFocus(),this.fireEvent("after-close",{},!1,!1))}_removeOpenedPopup(){Om(this)}resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}_show(){this.style.display=this._displayProp}hide(){this.style.display="none"}get _ariaLabel(){return tn(this)}get _root(){return this.shadowRoot.querySelector(".ui5-popup-root")}get _role(){return this.accessibleRole===uo.None?void 0:this.accessibleRole.toLowerCase()}get _ariaModal(){return this.accessibleRole===uo.None?void 0:"true"}get contentDOM(){return this.shadowRoot.querySelector(".ui5-popup-content")}get styles(){return{root:{},content:{},blockLayer:{zIndex:this._zIndex?this._zIndex-1:""}}}get classes(){return{root:{"ui5-popup-root":!0,"ui5-content-native-scrollbars":Pm()},content:{"ui5-popup-content":!0}}}};yt([d()],et.prototype,"initialFocus",void 0);yt([d({type:Boolean})],et.prototype,"preventFocusRestore",void 0);yt([d({type:Boolean})],et.prototype,"open",void 0);yt([d({type:Boolean,noAttribute:!0})],et.prototype,"opened",void 0);yt([d({defaultValue:void 0})],et.prototype,"accessibleName",void 0);yt([d({defaultValue:""})],et.prototype,"accessibleNameRef",void 0);yt([d({type:uo,defaultValue:uo.Dialog})],et.prototype,"accessibleRole",void 0);yt([d()],et.prototype,"mediaRange",void 0);yt([d({type:Boolean})],et.prototype,"_disableInitialFocus",void 0);yt([d({type:Boolean})],et.prototype,"_blockLayerHidden",void 0);yt([d({type:Boolean,noAttribute:!0})],et.prototype,"isTopModalPopup",void 0);yt([Z({type:HTMLElement,default:!0})],et.prototype,"content",void 0);et=Ho=yt([U({renderer:he,styles:Ox,template:Ax,staticAreaTemplate:Dx,staticAreaStyles:Rx}),I("before-open"),I("after-open"),I("before-close",{escPressed:{type:Boolean}}),I("after-close"),I("scroll")],et);const Fm=et;var _c;(function(t){t.Left="Left",t.Right="Right",t.Top="Top",t.Bottom="Bottom"})(_c||(_c={}));const pe=_c;var dc;(function(t){t.Center="Center",t.Top="Top",t.Bottom="Bottom",t.Stretch="Stretch"})(dc||(dc={}));const fi=dc;var hc;(function(t){t.Center="Center",t.Left="Left",t.Right="Right",t.Stretch="Stretch"})(hc||(hc={}));const je=hc;let Nm;const Nx=300,Ge=[],Or=()=>{Ge.forEach(t=>{t.instance.reposition()})},zx=()=>{document.activeElement.tagName==="IFRAME"&&Qx().reverse().forEach(t=>t.instance.close(!1,!1,!0))},Hx=()=>{Nm=setInterval(()=>{Or(),zx()},Nx)},Ux=()=>{clearInterval(Nm)},Vx=()=>{document.body.addEventListener("scroll",Or,{capture:!0})},Wx=()=>{document.body.removeEventListener("scroll",Or,{capture:!0})},jx=t=>{t&&t.shadowRoot.addEventListener("scroll",Or,{capture:!0})},qx=t=>{t&&t.shadowRoot.removeEventListener("scroll",Or,{capture:!0})},Yx=()=>{document.addEventListener("mousedown",zm)},Gx=()=>{document.removeEventListener("mousedown",zm)},zm=t=>{const e=Bx();if(!(e.length===0||!aT(e[e.length-1].instance)))for(let i=e.length-1;i!==-1;i--){const o=e[i].instance;if(o.isModal||o.isOpenerClicked(t))return;if(ab(t,o.getBoundingClientRect()))break;o.close()}},Xx=t=>{const e=Jx(t);Lm(t,e),Ge.push({instance:t,parentPopovers:e}),jx(t),Ge.length===1&&(Vx(),Yx(),Hx())},Zx=t=>{const e=[t];for(let n=0;n<Ge.length;n++){const i=Ge[n].parentPopovers.indexOf(t);Ge[n].parentPopovers.length>0&&i>-1&&e.push(Ge[n].instance)}for(let n=e.length-1;n>=0;n--)for(let i=0;i<Ge.length;i++){let o=-1;e[n]===Ge[i].instance&&(o=i),o>=0&&(Om(Ge[o].instance),qx(Ge[o].instance),Ge.splice(o,1)[0].instance.close(!1,!0))}Ge.length||(Wx(),Gx(),Ux())},Qx=()=>Ge,Jx=t=>{let e=t.parentNode;const n=[];for(;e&&e.parentNode;){for(let i=0;i<Ge.length;i++)e===Ge[i].instance&&n.push(e);e=e.parentNode}return n};function Kx(t,e,n){return p`<section style="${z(this.styles.root)}" class="${N(this.classes.root)}" role="${l(this._role)}" aria-modal="${l(this._ariaModal)}" aria-label="${l(this._ariaLabel)}" aria-labelledby="${l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${z(this.styles.arrow)}"></span>${this._displayHeader?eT.call(this,t,e,n):void 0}<div style="${z(this.styles.content)}" class="${N(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?iT.call(this,t,e,n):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function eT(t,e,n){return p`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?tT.call(this,t,e,n):nT.call(this,t,e,n)}</header>`}function tT(t,e,n){return p`<slot name="header"></slot>`}function nT(t,e,n){return p`<h1 class="ui5-popup-header-text">${l(this.headerText)}</h1>`}function iT(t,e,n){return p`${this.footer.length?oT.call(this,t,e,n):void 0}`}function oT(t,e,n){return p`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Eu={packageName:"@ui5/webcomponents",fileName:"themes/BrowserScrollbar.css",content:`:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar:horizontal {
	height: var(--sapScrollBar_Dimension);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar:vertical {
	width: var(--sapScrollBar_Dimension);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar {
	background-color: var(--sapScrollBar_TrackColor);
	border-left: var(--browser_scrollbar_border);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-thumb {
	border-radius: var(--browser_scrollbar_border_radius);
	background-color: var(--sapScrollBar_FaceColor);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-thumb:hover {
	background-color: var(--sapScrollBar_Hover_FaceColor);
}

:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-corner {
	background-color: var(--sapScrollBar_TrackColor);
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Hm={packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css",content:`:host {
    display: none;
    position: fixed;
    background: var(--sapGroup_ContentBackground);
    border-radius: var(--_ui5_popup_border_radius);
    min-height: 2rem;
    box-sizing: border-box;
}

.ui5-popup-root {
    background: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    outline: none;
}

.ui5-popup-root .ui5-popup-header-root {
    color: var(--sapPageHeader_TextColor);
    box-shadow: var(--_ui5_popup_header_shadow);
    border-bottom: var(--_ui5_popup_header_border);
    margin-bottom: 0.125rem;
}

.ui5-popup-content {
    color: var(--sapTextColor);
}

.ui5-popup-footer-root {
    background: var(--sapPageFooter_Background);
    border-top: 1px solid var(--sapPageFooter_BorderColor);
    color: var(--sapPageFooter_TextColor);
}

.ui5-popup-header-root,
.ui5-popup-footer-root,
:host([header-text]) .ui5-popup-header-text {
    margin: 0;
    font-size: 1rem;
    font-family: "72override", var(--_ui5_popup_header_font_family);
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui5-popup-header-root .ui5-popup-header-text {
	font-weight: var(--_ui5_popup_header_font_weight);
}

.ui5-popup-content {
    overflow: auto;

    /* Consider how to make this top level */
    box-sizing: border-box;
}

:host([header-text]) .ui5-popup-header-text {
    text-align: center;
    min-height: var(--_ui5_popup_default_header_height);
    max-height: var(--_ui5_popup_default_header_height);
    line-height: var(--_ui5_popup_default_header_height);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    display: inline-block;
}

:host([header-text]) .ui5-popup-header-root {
	justify-content: var(--_ui5_popup_header_prop_header_text_alignment);
}

:host(:not([header-text])) .ui5-popup-header-text {
    display: none;
}

:host([disable-scrolling]) .ui5-popup-content {
    overflow: hidden;
}

/*** Responsive paddings for the content***/

:host([media-range="S"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_s);
}

:host([media-range="M"]) .ui5-popup-content,
:host([media-range="L"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_m_l);
}

:host([media-range="XL"]) .ui5-popup-content {
	padding: 1rem var(--_ui5_popup_content_padding_xl);
}

.ui5-popup-header-root {
	background: var(--_ui5_popup_header_background);
}

/*** Responsive paddings for the Header and Footer ***/

:host([media-range="S"]) .ui5-popup-header-root,
:host([media-range="S"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_s);
	padding-right: var(--_ui5_popup_header_footer_padding_s);
}

:host([media-range="M"]) .ui5-popup-header-root,
:host([media-range="L"]) .ui5-popup-header-root,
:host([media-range="M"]) .ui5-popup-footer-root,
:host([media-range="L"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_m_l);
	padding-right: var(--_ui5_popup_header_footer_padding_m_l);
}

:host([media-range="XL"]) .ui5-popup-header-root,
:host([media-range="XL"]) .ui5-popup-footer-root {
	padding-left: var(--_ui5_popup_header_footer_padding_xl);
	padding-right: var(--_ui5_popup_header_footer_padding_xl);
}
`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const rT={packageName:"@ui5/webcomponents",fileName:"themes/Popover.css",content:`:host {
	box-shadow: var(--_ui5_popover_box_shadow);
	background-color: var(--_ui5_popover_background);
	max-width: calc(100vw - (100vw - 100%) - 2 * var(--_ui5_popup_viewport_margin));
}

:host([hide-arrow]) {
	box-shadow: var(--_ui5_popover_no_arrow_box_shadow);
}

:host([opened][actual-placement-type="Top"]) {
	margin-top: var(--_ui5-popover-margin-bottom);
}

:host([opened][actual-placement-type="Bottom"]) {
	margin-top: var(--_ui5-popover-margin-top);
}

/* pointing upward arrow */

:host([actual-placement-type="Bottom"]) .ui5-popover-arrow {
	left: calc(50% - 0.5625rem);
	top: -0.5rem;
	height: 0.5625rem;
}

:host([actual-placement-type="Bottom"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_upward_arrow_margin);
}

/* pointing right arrow */

:host([actual-placement-type="Left"]) .ui5-popover-arrow {
	top: calc(50% - 0.5625rem);
	right: -0.5625rem;
	width: 0.5625rem;
}

:host([actual-placement-type="Left"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_right_arrow_margin);
}

/* pointing downward arrow */

:host([actual-placement-type="Top"]) .ui5-popover-arrow {
	left: calc(50% - 0.5625rem);
	height: 0.5625rem;
	top: 100%;
}

:host([actual-placement-type="Top"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_downward_arrow_margin);
}

/* pointing left arrow */

:host(:not([actual-placement-type])) .ui5-popover-arrow,
:host([actual-placement-type="Right"]) .ui5-popover-arrow {
	left: -0.5625rem;
	top: calc(50% - 0.5625rem);
	width: 0.5625rem;
	height: 1rem;
}

:host(:not([actual-placement-type])) .ui5-popover-arrow:after,
:host([actual-placement-type="Right"]) .ui5-popover-arrow:after {
	margin: var(--_ui5_popover_left_arrow_margin);
}

:host([hide-arrow]) .ui5-popover-arrow {
	display: none;
}

.ui5-popover-root {
	min-width: 6.25rem;
}

.ui5-popover-arrow {
	pointer-events: none;
	display: block;
	width: 1rem;
	height: 1rem;
	position: absolute;
	overflow: hidden;
}

.ui5-popover-arrow:after {
	content: "";
	display: block;
	width: 0.7rem;
	height: 0.7rem;
	background-color: var(--_ui5_popover_background);
	box-shadow: var(--_ui5_popover_box_shadow);
	transform: rotate(-45deg);
}
`};var Oe=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},Sn;const ll=8;let be=Sn=class extends Fm{static get VIEWPORT_MARGIN(){return 10}constructor(){super()}onAfterRendering(){if(!this.isOpen()&&this.open){let e;if(this.opener instanceof HTMLElement?e=this.opener:typeof this.opener=="string"&&(e=this.getRootNode().getElementById(this.opener)),!e){console.warn("Valid opener id is required.");return}this.showAt(e)}else this.isOpen()&&!this.open&&this.close()}isOpenerClicked(e){const n=e.target;if(n===this._opener)return!0;const i=n;return i.getFocusDomRef&&i.getFocusDomRef()===this._opener?!0:e.composedPath().indexOf(this._opener)>-1}async showAt(e,n=!1){!e||this.opened||(this._opener=e,this._openerRect=e.getBoundingClientRect(),await super._open(n))}_addOpenedPopup(){Xx(this)}_removeOpenedPopup(){Zx(this)}shouldCloseDueToOverflow(e,n){const o={Right:n.right,Left:n.left,Top:n.top,Bottom:n.bottom},r=Ep(this._opener);let a=!1,s=!1;if(r.showAt){const c=r.contentDOM.getBoundingClientRect();a=n.top>c.top+c.height,s=n.top+n.height<c.top}return o[e]<0||o[e]+32>r.innerHeight||a||s}shouldCloseDueToNoOpener(e){return e.top===0&&e.bottom===0&&e.left===0&&e.right===0}isOpenerOutsideViewport(e){return e.bottom<0||e.top>window.innerHeight||e.right<0||e.left>window.innerWidth}_resize(){super._resize(),this.opened&&this.reposition()}reposition(){this._show()}_show(){let e;const n=this.getPopoverSize();if(n.width===0||n.height===0)return;if(this.isOpen()&&(this._openerRect=this._opener.getBoundingClientRect()),this.shouldCloseDueToNoOpener(this._openerRect)&&this.isFocusWithin()?e=this._oldPlacement:e=this.calcPlacement(this._openerRect,n),this._preventRepositionAndClose||this.isOpenerOutsideViewport(this._openerRect))return this.close();this._oldPlacement=e,this.actualPlacementType=e.placementType;let i=Rt(this._left,Sn.VIEWPORT_MARGIN,document.documentElement.clientWidth-n.width-Sn.VIEWPORT_MARGIN);this.actualPlacementType===pe.Right&&(i=Math.max(i,this._left));let o=Rt(this._top,Sn.VIEWPORT_MARGIN,document.documentElement.clientHeight-n.height-Sn.VIEWPORT_MARGIN);this.actualPlacementType===pe.Bottom&&(o=Math.max(o,this._top)),this.arrowTranslateX=e.arrow.x,this.arrowTranslateY=e.arrow.y,o=this._adjustForIOSKeyboard(o),Object.assign(this.style,{top:`${o}px`,left:`${i}px`}),super._show(),this.horizontalAlign===je.Stretch&&this._width&&(this.style.width=this._width)}_adjustForIOSKeyboard(e){if(!bw())return e;const n=Math.ceil(this.getBoundingClientRect().top);return e+(Number.parseInt(this.style.top||"0")-n)}getPopoverSize(){this.opened||Object.assign(this.style,{display:"block",top:"-10000px",left:"-10000px"});const e=this.getBoundingClientRect(),n=e.width,i=e.height;return{width:n,height:i}}get arrowDOM(){return this.shadowRoot.querySelector(".ui5-popover-arrow")}calcPlacement(e,n){let i=0,o=0;const r=this.allowTargetOverlap,a=document.documentElement.clientWidth,s=document.documentElement.clientHeight;let c=s,u=a;const h=this.getActualPlacementType(e,n);this._preventRepositionAndClose=this.shouldCloseDueToNoOpener(e)||this.shouldCloseDueToOverflow(h,e);const _=h===pe.Top||h===pe.Bottom;this.horizontalAlign===je.Stretch&&_?(n.width=e.width,this._width=`${e.width}px`):this.verticalAlign===fi.Stretch&&!_&&(n.height=e.height);const m=this.hideArrow?0:ll;switch(h){case pe.Top:i=this.getVerticalLeft(e,n),o=Math.max(e.top-n.height-m,0),r||(c=e.top-m);break;case pe.Bottom:i=this.getVerticalLeft(e,n),o=e.bottom+m,r?o=Math.max(Math.min(o,s-n.height),0):c=s-e.bottom-m;break;case pe.Left:i=Math.max(e.left-n.width-m,0),o=this.getHorizontalTop(e,n),r||(u=e.left-m);break;case pe.Right:i=e.left+e.width+m,o=this.getHorizontalTop(e,n),r?i=Math.max(Math.min(i,a-n.width),0):u=a-e.right-m;break}_?n.width>a||i<0?i=0:i+n.width>a&&(i-=i+n.width-a):n.height>s||o<0?o=0:o+n.height>s&&(o-=o+n.height-s),this._maxHeight=Math.round(c-Sn.VIEWPORT_MARGIN),this._maxWidth=Math.round(u-Sn.VIEWPORT_MARGIN),(this._left===void 0||Math.abs(this._left-i)>1.5)&&(this._left=Math.round(i)),(this._top===void 0||Math.abs(this._top-o)>1.5)&&(this._top=Math.round(o));const g=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this.getArrowPosition(e,n,i,o,_,g),top:this._top,left:this._left,placementType:h}}getArrowPosition(e,n,i,o,r,a){const s=this._actualHorizontalAlign;let c=s===je.Center||s===je.Stretch;s===je.Right&&i<=e.left&&(c=!0),s===je.Left&&i+n.width>=e.left+e.width&&(c=!0);let u=0;r&&c&&(u=e.left+e.width/2-i-n.width/2);let h=0;r||(h=e.top+e.height/2-o-n.height/2);const _=n.height/2-a-ll/2;h=Rt(h,-_,_);const m=n.width/2-a-ll/2;return u=Rt(u,-m,m),{x:Math.round(u),y:Math.round(h)}}fallbackPlacement(e,n,i,o){if(i.left>o.width)return pe.Left;if(e-i.right>i.left)return pe.Right;if(n-i.bottom>o.height)return pe.Bottom;if(n-i.bottom<i.top)return pe.Top}getActualPlacementType(e,n){const i=this.placementType;let o=i;const r=document.documentElement.clientWidth,a=document.documentElement.clientHeight;switch(i){case pe.Top:e.top<n.height&&e.top<a-e.bottom&&(o=pe.Bottom);break;case pe.Bottom:a-e.bottom<n.height&&a-e.bottom<e.top&&(o=pe.Top);break;case pe.Left:e.left<n.width&&(o=this.fallbackPlacement(r,a,e,n)||i);break;case pe.Right:r-e.right<n.width&&(o=this.fallbackPlacement(r,a,e,n)||i);break}return o}getVerticalLeft(e,n){const i=this._actualHorizontalAlign;let o=0;switch(i){case je.Center:case je.Stretch:o=e.left-(n.width-e.width)/2;break;case je.Left:o=e.left;break;case je.Right:o=e.right-n.width;break}return o}getHorizontalTop(e,n){let i=0;switch(this.verticalAlign){case fi.Center:case fi.Stretch:i=e.top-(n.height-e.height)/2;break;case fi.Top:i=e.top;break;case fi.Bottom:i=e.bottom-n.height;break}return i}get isModal(){return this.modal}get shouldHideBackdrop(){return this.hideBackdrop}get _ariaLabelledBy(){if(!this._ariaLabel&&this._displayHeader)return"ui5-popup-header"}get styles(){return{...super.styles,root:{"max-height":this._maxHeight?`${this._maxHeight}px`:"","max-width":this._maxWidth?`${this._maxWidth}px`:""},arrow:{transform:`translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`}}}get classes(){const e=super.classes;return e.root["ui5-popover-root"]=!0,e}get _displayHeader(){return!!(this.header.length||this.headerText)}get _displayFooter(){return!0}get _actualHorizontalAlign(){if(this.effectiveDir==="rtl"){if(this.horizontalAlign===je.Left)return je.Right;if(this.horizontalAlign===je.Right)return je.Left}return this.horizontalAlign}};Oe([d()],be.prototype,"headerText",void 0);Oe([d({type:pe,defaultValue:pe.Right})],be.prototype,"placementType",void 0);Oe([d({type:je,defaultValue:je.Center})],be.prototype,"horizontalAlign",void 0);Oe([d({type:fi,defaultValue:fi.Center})],be.prototype,"verticalAlign",void 0);Oe([d({type:Boolean})],be.prototype,"modal",void 0);Oe([d({type:Boolean})],be.prototype,"hideBackdrop",void 0);Oe([d({type:Boolean})],be.prototype,"hideArrow",void 0);Oe([d({type:Boolean})],be.prototype,"allowTargetOverlap",void 0);Oe([d({validator:yx})],be.prototype,"opener",void 0);Oe([d({type:Boolean})],be.prototype,"disableScrolling",void 0);Oe([d({validator:Se,defaultValue:0,noAttribute:!0})],be.prototype,"arrowTranslateX",void 0);Oe([d({validator:Se,defaultValue:0,noAttribute:!0})],be.prototype,"arrowTranslateY",void 0);Oe([d({type:pe,defaultValue:pe.Right})],be.prototype,"actualPlacementType",void 0);Oe([d({validator:Se,noAttribute:!0})],be.prototype,"_maxHeight",void 0);Oe([d({validator:Se,noAttribute:!0})],be.prototype,"_maxWidth",void 0);Oe([Z({type:HTMLElement})],be.prototype,"header",void 0);Oe([Z({type:HTMLElement})],be.prototype,"footer",void 0);be=Sn=Oe([U({tag:"ui5-popover",styles:[Eu,Hm,rT],template:Kx})],be);const aT=t=>"showAt"in t;be.define();const ur=be,sT="resize-corner",Um="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",lT=!1,cT="SAP-icons-v4",uT="@ui5/webcomponents-icons";G(sT,{pathData:Um,ltr:lT,collection:cT,packageName:uT});const _T="resize-corner",Vm="M202 512q-11 0-18.5-7.5T176 486q0-10 8-18l204-205q7-7 18-7t18.5 7.5T432 282t-7 18L220 505q-7 7-18 7zm128 0q-11 0-18.5-7.5T304 486q0-10 8-18l76-77q7-7 18-7t18.5 7.5T432 410t-7 18l-77 77q-7 7-18 7z",dT=!1,hT="SAP-icons-v5",pT="@ui5/webcomponents-icons";G(_T,{pathData:Vm,ltr:dT,collection:hT,packageName:pT});Ue();function fT(t,e,n){return p`<section style="${z(this.styles.root)}" class="${N(this.classes.root)}" role="${l(this._role)}" aria-modal="${l(this._ariaModal)}" aria-label="${l(this._ariaLabel)}" aria-labelledby="${l(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader?mT.call(this,t,e,n):void 0}<div style="${z(this.styles.content)}" class="${N(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length?CT.call(this,t,e,n):void 0}${this._showResizeHandle?ST.call(this,t,e,n):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `}function mT(t,e,n){return p`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${l(this.effectiveAriaDescribedBy)} aria-roledescription=${l(this.ariaRoleDescriptionHeaderText)} tabindex="${l(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${l(this.state)}">${this.hasValueState?gT.call(this,t,e,n):void 0}${this.header.length?vT.call(this,t,e,n):bT.call(this,t,e,n)}${this.resizable?yT.call(this,t,e,n):xT.call(this,t,e,n)}</div></header>`}function gT(t,e,n){return n?p`<${v("ui5-icon",e,n)} class="ui5-dialog-value-state-icon" name="${l(this._dialogStateIcon)}"></${v("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-dialog-value-state-icon" name="${l(this._dialogStateIcon)}"></ui5-icon>`}function vT(t,e,n){return p`<slot name="header"></slot>`}function bT(t,e,n){return p`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${l(this.headerText)}</h1>`}function yT(t,e,n){return p`${this.draggable?wT.call(this,t,e,n):kT.call(this,t,e,n)}`}function wT(t,e,n){return p`<span id="${l(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${l(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`}function kT(t,e,n){return p`<span id="${l(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${l(this.ariaDescribedByHeaderTextResizable)}</span>`}function xT(t,e,n){return p`${this.draggable?TT.call(this,t,e,n):void 0}`}function TT(t,e,n){return p`<span id="${l(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${l(this.ariaDescribedByHeaderTextDraggable)}</span>`}function CT(t,e,n){return p`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}function ST(t,e,n){return n?p`<${v("ui5-icon",e,n)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${v("ui5-icon",e,n)}>`:p`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const $T={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	min-width: 20rem;
	min-height: 6rem;
	max-height: 94%;
	max-width: 90%;
	flex-direction: column;
	box-shadow: var(--sapContent_Shadow3);
	border-radius: var(--sapElement_BorderCornerRadius);
}

:host([stretch]) {
	width: 90%;
	height: 94%;
}

:host([stretch][on-phone]) {
	width: 100%;
	height: 100%;
	max-height: 100%;
	max-width: 100%;
	border-radius: 0;
}

:host([draggable]) .ui5-popup-header-root,
:host([draggable]) ::slotted([slot="header"]) {
	cursor: move;
}

:host([draggable]) .ui5-popup-header-root * {
	cursor: auto;
}

:host([draggable]) .ui5-popup-root {
	user-select: text;
}

.ui5-popup-root {
	display: flex;
	flex-direction: column;
	max-width: 100vw;
}

.ui5-popup-header-root {
	position: relative;
}

:host([state="Error"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_error_state_box_shadow);
}

:host([state="Information"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_information_state_box_shadow);
}

:host([state="Success"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_success_state_box_shadow);
}

:host([state="Warning"]) .ui5-popup-header-root {
	box-shadow: var(--_ui5_dialog_header_warning_state_box_shadow);
}

.ui5-dialog-value-state-icon {
	margin-inline-end: 0.5rem;
}

:host([state="Error"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_error_state_icon_color);
}

:host([state="Information"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_information_state_icon_color);
}

:host([state="Success"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_success_state_icon_color);
}

:host([state="Warning"]) .ui5-dialog-value-state-icon {
	color: var(--_ui5_dialog_header_warning_state_icon_color);
}

.ui5-popup-header-root {
	outline: none;
}

.ui5-popup-header-root:focus:after {
	content: '';
	position: absolute;
	left: var(--_ui5_dialog_header_focus_left_offset);
	bottom: var(--_ui5_dialog_header_focus_bottom_offset);
	right: var(--_ui5_dialog_header_focus_right_offset);
	top: var(--_ui5_dialog_header_focus_top_offset);
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_dialog_header_border_radius) var(--_ui5_dialog_header_border_radius) 0 0;
	pointer-events: none;
}

:host([stretch]) .ui5-popup-content {
	width: 100%;
	height: 100%;
}

.ui5-popup-content {
	min-height: var(--_ui5_dialog_content_min_height);
	flex: 1 1 auto;
}

.ui5-popup-resize-handle {
	position: absolute;
	bottom: var(--_ui5_dialog_resize_handle_bottom);
	inset-inline-end: var(--_ui5_dialog_resize_handle_right);
	cursor: var(--_ui5_dialog_resize_cursor);
	color: var(--_ui5_dialog_resize_handle_color);
}

:host ::slotted([slot="footer"]) {
	height: var(--_ui5_dialog_footer_height);
}

:host ::slotted([slot="footer"][ui5-bar][design="Footer"]) {
	border-top: none;
}`};var nn=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},an;const xn=16,IT={[k.Error]:"error",[k.Warning]:"alert",[k.Success]:"sys-enter-2",[k.Information]:"information"};let mt=an=class extends Fm{constructor(){super(),this._draggedOrResized=!1,this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._screenResize.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static async onDefine(){an.i18nBundle=await ie("@ui5/webcomponents")}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}async show(e=!1){await super._open(e)}get isModal(){return!0}get shouldHideBackdrop(){return!1}get _ariaLabelledBy(){let e;return this.headerText!==""&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get ariaRoleDescriptionHeaderText(){return this.resizable||this.draggable?an.i18nBundle.getText(iw):void 0}get effectiveAriaDescribedBy(){return this.resizable||this.draggable?`${this._id}-descr`:void 0}get ariaDescribedByHeaderTextResizable(){return an.i18nBundle.getText(ow)}get ariaDescribedByHeaderTextDraggable(){return an.i18nBundle.getText(rw)}get ariaDescribedByHeaderTextDraggableAndResizable(){return an.i18nBundle.getText(aw)}get _displayProp(){return"flex"}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const n=this._root.querySelector(".ui5-popup-header-root");n&&(e+=n.offsetHeight);const i=this._root.querySelector(".ui5-popup-footer-root");return i&&(e+=i.offsetHeight),e}get hasValueState(){return this.state!==k.None}get _dialogStateIcon(){return IT[this.state]}get _role(){if(this.accessibleRole!==uo.None)return this.state===k.Error||this.state===k.Warning?uo.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl",this.onPhone=Y(),this.onDesktop=xi()}onAfterRendering(){!this.isOpen()&&this.open?this.show():this.isOpen()&&!this.open&&this.close()}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._draggedOrResized||this._center()}_screenResize(){this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,n=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(n/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!an._isHeader(e.target))return;e.preventDefault();const{top:n,left:i}=this.getBoundingClientRect(),{width:o,height:r}=window.getComputedStyle(this);Object.assign(this.style,{top:`${n}px`,left:`${i}px`,width:`${Math.round(Number.parseFloat(o)*100)/100}px`,height:`${Math.round(Number.parseFloat(r)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._draggedOrResized=!0,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:n,clientY:i}=e,o=this._x-n,r=this._y-i,{left:a,top:s}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(a-o)}px`,top:`${Math.floor(s-r)}px`}),this._x=n,this._y=i}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!an._isHeader(e.target))){if(this.draggable&&[Ct,ct,Jt,Et].some(n=>n(e))){this._dragWithEvent(e);return}this.resizable&&[hn,Zt,Vl,Oa].some(n=>n(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:n,left:i,width:o,height:r}=this.getBoundingClientRect();let a=0,s="top";switch(!0){case Ct(e):a=n-xn,s="top";break;case ct(e):a=n+xn,s="top";break;case Jt(e):a=i-xn,s="left";break;case Et(e):a=i+xn,s="left";break}a=Rt(a,0,s==="left"?window.innerWidth-o:window.innerHeight-r),this.style[s]=`${a}px`}_resizeWithEvent(e){this._draggedOrResized=!0,this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:n,left:i}=this.getBoundingClientRect(),o=window.getComputedStyle(this),r=Number.parseFloat(o.minWidth),a=window.innerWidth-i,s=window.innerHeight-n;let c=Number.parseFloat(o.width),u=Number.parseFloat(o.height);switch(!0){case hn(e):u-=xn;break;case Zt(e):u+=xn;break;case Vl(e):c-=xn;break;case Oa(e):c+=xn;break}c=Rt(c,r,a),u=Rt(u,this._minHeight,s),Object.assign(this.style,{width:`${c}px`,height:`${u}px`})}_attachMouseDragHandlers(){window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:n,left:i}=this.getBoundingClientRect(),{width:o,height:r,minWidth:a}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(o),this._initialHeight=Number.parseFloat(r),this._initialTop=n,this._initialLeft=i,this._minWidth=Number.parseFloat(a),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${n}px`,left:`${i}px`}),this._draggedOrResized=!0,this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:n,clientY:i}=e;let o,r;this._isRTL?(o=Rt(this._initialWidth-(n-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),r=Rt(this._initialLeft+(n-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):o=Rt(this._initialWidth+(n-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const a=Rt(this._initialHeight+(i-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${a}px`,width:`${o}px`,left:r?`${r}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};nn([d()],mt.prototype,"headerText",void 0);nn([d({type:Boolean})],mt.prototype,"stretch",void 0);nn([d({type:Boolean})],mt.prototype,"draggable",void 0);nn([d({type:Boolean})],mt.prototype,"resizable",void 0);nn([d({type:k,defaultValue:k.None})],mt.prototype,"state",void 0);nn([d({type:Boolean})],mt.prototype,"onPhone",void 0);nn([d({type:Boolean})],mt.prototype,"onDesktop",void 0);nn([Z()],mt.prototype,"header",void 0);nn([Z()],mt.prototype,"footer",void 0);mt=an=nn([U({tag:"ui5-dialog",template:fT,styles:[Eu,Hm,$T],dependencies:[Ut]})],mt);mt.define();const ET=mt;var pc;(function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6"})(pc||(pc={}));const hd=pc;function AT(t,e,n){return p`${this.h1?DT.call(this,t,e,n):void 0}${this.h2?BT.call(this,t,e,n):void 0}${this.h3?PT.call(this,t,e,n):void 0}${this.h4?LT.call(this,t,e,n):void 0}${this.h5?OT.call(this,t,e,n):void 0}${this.h6?RT.call(this,t,e,n):void 0}`}function DT(t,e,n){return p`<h1 class="ui5-title-root"><span id="${l(this._id)}-inner"><slot></slot></span></h1>`}function BT(t,e,n){return p`<h2 class="ui5-title-root"><span id="${l(this._id)}-inner"><slot></slot></span></h2>`}function PT(t,e,n){return p`<h3 class="ui5-title-root"><span id="${l(this._id)}-inner"><slot></slot></span></h3>`}function LT(t,e,n){return p`<h4 class="ui5-title-root"><span id="${l(this._id)}-inner"><slot></slot></span></h4>`}function OT(t,e,n){return p`<h5 class="ui5-title-root"><span id="${l(this._id)}-inner"><slot></slot></span></h5>`}function RT(t,e,n){return p`<h6 class="ui5-title-root"><span id="${l(this._id)}-inner"><slot></slot></span></h6>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const MT={packageName:"@ui5/webcomponents",fileName:"themes/Title.css",content:`:host(:not([hidden])) {
	display: block;
	cursor: text;
}

:host {
	max-width: 100%;
	color: var(--sapGroup_TitleTextColor);
	font-size: var(--sapFontHeader2Size);
	font-family: "72override", var(--sapFontHeaderFamily);
	text-shadow: var(--sapContent_TextShadow);
}

.ui5-title-root {
	display: inline-block;
	position: relative;
	font-weight: normal;
	font-size: inherit;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	vertical-align: bottom;
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-margin-start: 0;
	-webkit-margin-end: 0;
	margin: 0;
	cursor: inherit;
}

:host([wrapping-type="Normal"]) .ui5-title-root,
:host([wrapping-type="Normal"]) ::slotted(*) {
	white-space: pre-line;
}

::slotted(*) {
	font-size: inherit;
	font-family: inherit;
	text-shadow: inherit;
}

/* Level H1 */

:host([level="H1"]) {
	font-size: var(--sapFontHeader1Size);
}

/* Level H2 */

:host([level="H2"]) {
	font-size: var(--sapFontHeader2Size);
}

/* Level H3 */

:host([level="H3"]) {
	font-size: var(--sapFontHeader3Size);
}

/* Level H4 */

:host([level="H4"]) {
	font-size: var(--sapFontHeader4Size);
}

/* Level H5 */

:host([level="H5"]) {
	font-size: var(--sapFontHeader5Size);
}

/* Level H6 */

:host([level="H6"]) {
	font-size: var(--sapFontHeader6Size);
}
`};var Au=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let _o=class extends Q{get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}};Au([d({type:en,defaultValue:en.None})],_o.prototype,"wrappingType",void 0);Au([d({type:hd,defaultValue:hd.H2})],_o.prototype,"level",void 0);_o=Au([U({tag:"ui5-title",renderer:he,template:AT,styles:MT})],_o);_o.define();const Wm=_o;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const FT={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css",content:`:host {
	--_ui5_input_width: 100%;
	min-width: 6.25rem;
	min-height: 2rem;
}

:host([opened]) {
	display: inline-block;
}

.ui5-responsive-popover-header {
	height: var(--_ui5-responsive_popover_header_height);
	display: flex;
	justify-content: space-between;
	align-items: center;
	width:100%;
}

.ui5-responsive-popover-header-text {
	width: calc(100% - var(--_ui5_button_base_min_width));
}

.ui5-responsive-popover-header-no-title {
	justify-content: flex-end;
}
`};var ws=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ba;let Ei=ba=class extends ur{constructor(){super()}async showAt(e,n=!1){if(!Y())await super.showAt(e,n);else{this.style.display="contents";const i=Ap();if(!i)return;this.style.zIndex=i.toString(),await this._dialog.show(n)}}close(e=!1,n=!1,i=!1){Y()?this._dialog.close(e,n,i):super.close(e,n,i)}toggle(e){if(this.isOpen())return this.close();this.showAt(e)}isOpen(){return Y()&&this._dialog?this._dialog.isOpen():super.isOpen()}get classes(){const e=super.classes;return e.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},e}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return Y()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return Y()}get _displayHeader(){return(Y()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return Y()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return ba.i18nBundle.getText(My)}_beforeDialogOpen(e){this.open=!0,this.opened=!0,this._propagateDialogEvent(e)}_afterDialogClose(e){this.open=!1,this.opened=!1,this._propagateDialogEvent(e)}_propagateDialogEvent(e){const n=e.type.replace("ui5-","");this.fireEvent(n,e.detail)}get isModal(){return Y()?this._dialog.isModal:super.isModal}static async onDefine(){ba.i18nBundle=await ie("@ui5/webcomponents")}};ws([d({type:Boolean})],Ei.prototype,"contentOnlyOnDesktop",void 0);ws([d({type:Boolean})],Ei.prototype,"_hideHeader",void 0);ws([d({type:Boolean})],Ei.prototype,"_hideCloseButton",void 0);Ei=ba=ws([U({tag:"ui5-responsive-popover",styles:[ur.styles,FT],template:lx,dependencies:[...ur.dependencies,Oi,ET,Wm]})],Ei);Ei.define();const Du=Ei,Xo=t=>{let e=t;return t.shadowRoot&&t.shadowRoot.activeElement&&(e=t.shadowRoot.activeElement),e};let Zr=null;const jm=(t,e)=>{Zr&&clearTimeout(Zr),Zr=setTimeout(()=>{Zr=null,t()},e)},qm=t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)};var fc;(function(t){t.None="None",t.SingleSelect="SingleSelect",t.SingleSelectBegin="SingleSelectBegin",t.SingleSelectEnd="SingleSelectEnd",t.SingleSelectAuto="SingleSelectAuto",t.MultiSelect="MultiSelect",t.Delete="Delete"})(fc||(fc={}));const ue=fc;var mc;(function(t){t.Button="Button",t.Scroll="Scroll",t.None="None"})(mc||(mc={}));const Zo=mc;var gc;(function(t){t.All="All",t.Inner="Inner",t.None="None"})(gc||(gc={}));const Va=gc;function NT(t,e,n){return p`<div class="${N(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @ui5-_press=${l(this.onItemPress)} @ui5-close=${l(this.onItemClose)} @ui5-toggle=${l(this.onItemToggle)} @ui5-_focused=${l(this.onItemFocused)} @ui5-_forward-after=${l(this.onForwardAfter)} @ui5-_forward-before=${l(this.onForwardBefore)} @ui5-_selection-requested=${l(this.onSelectionRequested)} @ui5-_focus-requested=${l(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length?zT.call(this,t,e,n):void 0}${this.shouldRenderH1?HT.call(this,t,e,n):void 0}${this.hasData?UT.call(this,t,e,n):void 0}<span id="${l(this._id)}-modeLabel" class="ui5-hidden-text">${l(this.ariaLabelModeText)}</span><ul id="${l(this._id)}-listUl" class="ui5-list-ul" role="${l(this.accessibleRole)}" aria-label="${l(this.ariaLabelTxt)}" aria-labelledby="${l(this.ariaLabelledBy)}" aria-roledescription="${l(this.accessibleRoleDescription)}"><slot></slot>${this.showNoDataText?VT.call(this,t,e,n):void 0}</ul>${this.growsWithButton?WT.call(this,t,e,n):void 0}${this.footerText?jT.call(this,t,e,n):void 0}${this.hasData?qT.call(this,t,e,n):void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.busy?YT.call(this,t,e,n):void 0}</div> `}function zT(t,e,n){return p`<slot name="header" />`}function HT(t,e,n){return p`<header id="${l(this.headerID)}" class="ui5-list-header">${l(this.headerText)}</header>`}function UT(t,e,n){return p`<div id="${l(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function VT(t,e,n){return p`<li id="${l(this._id)}-nodata" class="ui5-list-nodata"><div id="${l(this._id)}-nodata-text" class="ui5-list-nodata-text">${l(this.noDataText)}</div></li>`}function WT(t,e,n){return p`<div growing-button><div tabindex="0" role="button" id="${l(this._id)}-growing-btn" aria-labelledby="${l(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${l(this._id)}-growingButton-text" growing-button-text>${l(this._growingButtonText)}</span></div></div>`}function jT(t,e,n){return p`<footer id="${l(this._id)}-footer" class="ui5-list-footer">${l(this.footerText)}</footer>`}function qT(t,e,n){return p`<div id="${l(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`}function YT(t,e,n){return n?p`<div class="ui5-list-busy-row"><${v("ui5-busy-indicator",e,n)} delay="${l(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${z(this.styles.busyInd)}" data-sap-focus-ref></${v("ui5-busy-indicator",e,n)}></div>`:p`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${l(this.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${z(this.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const GT={packageName:"@ui5/webcomponents",fileName:"themes/List.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
[growing-button] {
	display: flex;
	align-items: center;
	padding: var(--_ui5_load_more_padding);
	border-top: 1px solid var(--sapList_BorderColor);
	border-bottom: var(--_ui5_load_more_border-bottom);
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
}
[growing-button-inner] {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: var(--_ui5_load_more_text_height);
	width: 100%;
	color: var(--sapButton_TextColor);
	background-color: var(--sapList_Background);
	border: var(--_ui5_load_more_border);
	border-radius: var(--_ui5_load_more_border_radius);
	box-sizing: border-box;
}
[growing-button-inner]:focus {
	outline: var(--_ui5_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: -0.125rem;
	border-color: transparent;
}
[growing-button-inner]:hover {
	background-color: var(--sapList_Hover_Background);
}
[growing-button-inner]:active,
[growing-button-inner][active] {
	background-color: var(--sapList_Active_Background);
	border-color: var(--sapList_Active_Background);
}
[growing-button-inner]:active > *,
[growing-button-inner][active] > * {
	color: var(--sapList_Active_TextColor);
}
[growing-button-text],
[growing-button-subtext] {
	width: 100%;
	text-align: center;
	font-family: "72override", var(--sapFontFamily);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
}
[growing-button-text] {
	height: var(--_ui5_load_more_text_height);
	padding: 0.875rem 1rem 0 1rem;
	font-size: var(--_ui5_load_more_text_font_size);
	font-weight: bold;
}
[growing-button-subtext] {
	font-size: var(--sapFontSize);
	padding: var(--_ui5_load_more_desc_padding);
}
:host(:not([hidden])) {
	display: block;
	max-width: 100%;
	width: 100%;
	-webkit-tap-highlight-color: transparent;
}
:host([indent]) .ui5-list-root {
	padding: 2rem;
}
:host([separators="None"]) .ui5-list-nodata {
	border-bottom: 0;
}
:host([busy]) {
	opacity: 0.72;
}
:host([busy]) .ui5-list-busy-row {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	outline: none;
}
:host([busy]) .ui5-list-busy-ind {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}
.ui5-list-root {
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: border-box;
}
.ui5-list-scroll-container {
	overflow: auto;
	height: 100%;
}
.ui5-list-ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
.ui5-list-ul:focus {
	outline: none;
}
.ui5-list-focusarea {
	position: fixed; /* keep it in the visible viewport, so that IE does not scroll on focus */
}
.ui5-list-header {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	box-sizing: border-box;
	font-size: var(--sapFontHeader4Size); 
	font-family: "72override", var(--sapFontFamily);
	color: var(--sapGroup_TitleTextColor);
	height: 3rem;
	line-height: 3rem;
	padding: 0 1rem;
	background-color: var(--sapGroup_TitleBackground);
	border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
}
.ui5-list-footer {
	height: 2rem;
	box-sizing: border-box;
	-webkit-text-size-adjust: none;	/* To improve readability Mobile Safari automatically increases the size of small text so let's disable this */
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	line-height: 2rem;
	background-color: var(--sapList_FooterBackground);
	color: var(--ui5_list_footer_text_color);
	padding: 0 1rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui5-list-nodata {
	list-style-type: none;
	display: -webkit-box;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	color: var(--sapTextColor);
	background-color: var(--sapList_Background);
	border-bottom: 1px solid var(--sapList_BorderColor);
	padding: 0 1rem !important;
	height: var(--_ui5_list_no_data_height);
	font-size: var(--_ui5_list_no_data_font_size);
	font-family: "72override", var(--sapFontFamily);
}
.ui5-list-nodata-text {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}`};var Re=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},li;const XT=250,ZT=10;let ye=li=class extends Q{static async onDefine(){li.i18nBundle=await ie("@ui5/webcomponents")}constructor(){super(),this._previouslyFocusedItem=null,this._forwardingFocus=!1,this.resizeListenerAttached=!1,this.listEndObserved=!1,this._itemNavigation=new $u(this,{skipItemsSize:ZT,navigationMode:pi.Vertical,getItemsCallback:()=>this.getEnabledItems()}),this._handleResize=this.checkListInViewport.bind(this),this._handleResize=this.checkListInViewport.bind(this),this.initialIntersection=!0}onExitDOM(){this.unobserveListEnd(),this.resizeListenerAttached=!1,At.deregister(this.getDomRef(),this._handleResize)}onBeforeRendering(){this.prepareListItems()}onAfterRendering(){this.growsOnScroll?this.observeListEnd():this.listEndObserved&&this.unobserveListEnd(),this.grows&&(this.checkListInViewport(),this.attachForResize())}attachForResize(){this.resizeListenerAttached||(this.resizeListenerAttached=!0,At.register(this.getDomRef(),this._handleResize))}get shouldRenderH1(){return!this.header.length&&this.headerText}get headerID(){return`${this._id}-header`}get modeLabelID(){return`${this._id}-modeLabel`}get listEndDOM(){return this.shadowRoot.querySelector(".ui5-list-end-marker")}get hasData(){return this.getItems().length!==0}get showNoDataText(){return!this.hasData&&this.noDataText}get isDelete(){return this.mode===ue.Delete}get isSingleSelect(){return[ue.SingleSelect,ue.SingleSelectBegin,ue.SingleSelectEnd,ue.SingleSelectAuto].includes(this.mode)}get isMultiSelect(){return this.mode===ue.MultiSelect}get ariaLabelledBy(){if(this.accessibleNameRef||this.accessibleName)return;const e=[];return(this.isMultiSelect||this.isSingleSelect||this.isDelete)&&e.push(this.modeLabelID),this.shouldRenderH1&&e.push(this.headerID),e.length?e.join(" "):void 0}get ariaLabelTxt(){return tn(this)}get ariaLabelModeText(){return this.isMultiSelect?li.i18nBundle.getText(By):this.isSingleSelect?li.i18nBundle.getText(Dy):this.isDelete?li.i18nBundle.getText(Py):""}get grows(){return this.growing!==Zo.None}get growsOnScroll(){return this.growing===Zo.Scroll}get growsWithButton(){return this.growing===Zo.Button}get _growingButtonText(){return li.i18nBundle.getText(Cf)}get busyIndPosition(){return this.grows?this._inViewport?"absolute":"sticky":"absolute"}get styles(){return{busyInd:{position:this.busyIndPosition}}}get classes(){return{root:{"ui5-list-root":!0,"ui5-content-native-scrollbars":Pm()}}}prepareListItems(){const e=this.getItemsForProcessing();e.forEach((n,i)=>{const o=i===e.length-1,r=this.separators===Va.All||this.separators===Va.Inner&&!o;n.hasConfigurableMode&&(n._mode=this.mode),n.hasBorder=r})}async observeListEnd(){this.listEndObserved||(await vo(),this.getIntersectionObserver().observe(this.listEndDOM),this.listEndObserved=!0)}unobserveListEnd(){this.growingIntersectionObserver&&(this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.listEndObserved=!1)}onInteresection(e){if(this.initialIntersection){this.initialIntersection=!1;return}e.forEach(n=>{n.isIntersecting&&jm(this.loadMore.bind(this),XT)})}onSelectionRequested(e){const n=this.getSelectedItems();let i=!1;this._selectionRequested=!0,this.mode!==ue.None&&this[`handle${this.mode}`]&&(i=this[`handle${this.mode}`](e.detail.item,!!e.detail.selected)),i&&!this.fireEvent("selection-change",{selectedItems:this.getSelectedItems(),previouslySelectedItems:n,selectionComponentPressed:e.detail.selectionComponentPressed,targetItem:e.detail.item,key:e.detail.key},!0)&&this._revertSelection(n)}handleSingleSelect(e){return e.selected?!1:(this.deselectSelectedItems(),e.selected=!0,!0)}handleSingleSelectBegin(e){return this.handleSingleSelect(e)}handleSingleSelectEnd(e){return this.handleSingleSelect(e)}handleSingleSelectAuto(e){return this.handleSingleSelect(e)}handleMultiSelect(e,n){return e.selected=n,!0}handleDelete(e){return this.fireEvent("item-delete",{item:e}),!0}deselectSelectedItems(){this.getSelectedItems().forEach(e=>{e.selected=!1})}getSelectedItems(){return this.getItems().filter(e=>e.selected)}getEnabledItems(){return this.getItems().filter(e=>!e.disabled)}getItems(){return this.getSlottedNodes("items")}getItemsForProcessing(){return this.getItems()}_revertSelection(e){this.getItems().forEach(n=>{const i=e.indexOf(n)!==-1,o=n.shadowRoot.querySelector(".ui5-li-multisel-cb"),r=n.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");n.selected=i,o?o.checked=i:r&&(r.checked=i)})}_onkeydown(e){Kt(e)&&this._handleTabNext(e)}_onLoadMoreKeydown(e){H(e)&&(e.preventDefault(),this._loadMoreActive=!0),te(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0),Kt(e)&&this.focusAfterElement(),Fn(e)&&(this.getPreviouslyFocusedItem()?this.focusPreviouslyFocusedItem():this.focusFirstItem(),e.preventDefault())}_onLoadMoreKeyup(e){H(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreMousedown(){this._loadMoreActive=!0}_onLoadMoreMouseup(){this._loadMoreActive=!1}_onLoadMoreClick(){this.loadMore()}checkListInViewport(){this._inViewport=qm(this.getDomRef())}loadMore(){this.fireEvent("load-more")}_handleTabNext(e){Xo(e.target)}_onfocusin(e){const n=Xo(e.target);if(!this.isForwardElement(n)){e.stopImmediatePropagation();return}if(!this.getPreviouslyFocusedItem()){this.growsWithButton&&this.isForwardAfterElement(n)?this.focusGrowingButton():this.focusFirstItem(),e.stopImmediatePropagation();return}if(!this.getForwardingFocus()){if(this.growsWithButton&&this.isForwardAfterElement(n)){this.focusGrowingButton(),e.stopImmediatePropagation();return}this.focusPreviouslyFocusedItem(),e.stopImmediatePropagation()}this.setForwardingFocus(!1)}isForwardElement(e){const n=e.id,i=this.getBeforeElement();return this._id===n||i&&i.id===n?!0:this.isForwardAfterElement(e)}isForwardAfterElement(e){const n=e.id,i=this.getAfterElement();return i&&i.id===n}onItemFocused(e){const n=e.target;if(e.stopPropagation(),this._itemNavigation.setCurrentItem(n),this.fireEvent("item-focused",{item:n}),this.mode===ue.SingleSelectAuto){const i={item:n,selectionComponentPressed:!1,selected:!0,key:e.detail.key};this.onSelectionRequested({detail:i})}}onItemPress(e){const n=e.detail.item;if(this.fireEvent("item-click",{item:n},!0)){if(!this._selectionRequested&&this.mode!==ue.Delete){this._selectionRequested=!0;const i={item:n,selectionComponentPressed:!1,selected:!n.selected,key:e.detail.key};this.onSelectionRequested({detail:i})}this._selectionRequested=!1}}onItemClose(e){var o;const n=e.target;((n==null?void 0:n.hasAttribute("ui5-li-notification"))||(n==null?void 0:n.hasAttribute("ui5-li-notification-group")))&&this.fireEvent("item-close",{item:(o=e.detail)==null?void 0:o.item})}onItemToggle(e){this.fireEvent("item-toggle",{item:e.detail.item})}onForwardBefore(e){this.setPreviouslyFocusedItem(e.target),this.focusBeforeElement(),e.stopPropagation()}onForwardAfter(e){this.setPreviouslyFocusedItem(e.target),this.growsWithButton?(this.focusGrowingButton(),e.preventDefault()):this.focusAfterElement(),e.stopPropagation()}focusBeforeElement(){this.setForwardingFocus(!0),this.getBeforeElement().focus()}focusAfterElement(){this.setForwardingFocus(!0),this.getAfterElement().focus()}focusGrowingButton(){const e=this.getGrowingButton();e&&e.focus()}getGrowingButton(){return this.shadowRoot.querySelector(`#${this._id}-growing-btn`)}focusFirstItem(){const e=this.getFirstItem(n=>!n.disabled);e&&e.focus()}focusPreviouslyFocusedItem(){const e=this.getPreviouslyFocusedItem();e&&e.focus()}focusFirstSelectedItem(){const e=this.getFirstItem(n=>n.selected&&!n.disabled);e&&e.focus()}focusItem(e){this._itemNavigation.setCurrentItem(e),e.focus()}onFocusRequested(e){setTimeout(()=>{this.setPreviouslyFocusedItem(e.target),this.focusPreviouslyFocusedItem()},0)}setForwardingFocus(e){this._forwardingFocus=e}getForwardingFocus(){return this._forwardingFocus}setPreviouslyFocusedItem(e){this._previouslyFocusedItem=e}getPreviouslyFocusedItem(){return this._previouslyFocusedItem}getFirstItem(e){const n=this.getItems();let i=null;if(!e)return n.length?n[0]:null;for(let o=0;o<n.length;o++)if(e(n[o])){i=n[o];break}return i}getAfterElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`#${this._id}-after`)),this._afterElement}getBeforeElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`#${this._id}-before`)),this._beforeElement}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:null,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}};Re([d()],ye.prototype,"headerText",void 0);Re([d()],ye.prototype,"footerText",void 0);Re([d({type:Boolean})],ye.prototype,"indent",void 0);Re([d({type:ue,defaultValue:ue.None})],ye.prototype,"mode",void 0);Re([d()],ye.prototype,"noDataText",void 0);Re([d({type:Va,defaultValue:Va.All})],ye.prototype,"separators",void 0);Re([d({type:Zo,defaultValue:Zo.None})],ye.prototype,"growing",void 0);Re([d({type:Boolean})],ye.prototype,"busy",void 0);Re([d({validator:Se,defaultValue:1e3})],ye.prototype,"busyDelay",void 0);Re([d()],ye.prototype,"accessibleName",void 0);Re([d({defaultValue:""})],ye.prototype,"accessibleNameRef",void 0);Re([d({defaultValue:"list"})],ye.prototype,"accessibleRole",void 0);Re([d({defaultValue:void 0,noAttribute:!0})],ye.prototype,"accessibleRoleDescription",void 0);Re([d({type:Boolean})],ye.prototype,"_inViewport",void 0);Re([d({type:Boolean})],ye.prototype,"_loadMoreActive",void 0);Re([Z({type:HTMLElement,default:!0})],ye.prototype,"items",void 0);Re([Z()],ye.prototype,"header",void 0);ye=li=Re([U({tag:"ui5-list",fastNavigation:!0,renderer:he,template:NT,styles:[Eu,GT],dependencies:[Af]}),I("item-click",{detail:{item:{type:HTMLElement}}}),I("item-close",{detail:{item:{type:HTMLElement}}}),I("item-toggle",{detail:{item:{type:HTMLElement}}}),I("item-delete",{detail:{item:{type:HTMLElement}}}),I("selection-change",{detail:{selectedItems:{type:Array},previouslySelectedItems:{type:Array},targetItem:{type:HTMLElement},selectionComponentPressed:{type:Boolean}}}),I("load-more"),I("item-focused",{detail:{item:{type:HTMLElement}}})],ye);ye.define();const Bu=ye,QT="edit",Ym="M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z",JT=!1,KT="SAP-icons-v4",eC="@ui5/webcomponents-icons";G(QT,{pathData:Ym,ltr:JT,collection:KT,packageName:eC});const tC="edit",Gm="M505 94q7 7 7 18t-6 17L130 505q-7 7-18 7H26q-11 0-18.5-7.5T0 486v-86q1-10 6-16L382 7q7-7 18-7t18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50z",nC=!1,iC="SAP-icons-v5",oC="@ui5/webcomponents-icons";G(tC,{pathData:Gm,ltr:nC,collection:iC,packageName:oC});Ue();var vc;(function(t){t.Inactive="Inactive",t.Active="Active",t.Detail="Detail",t.Navigation="Navigation"})(vc||(vc={}));const Tt=vc;class Tn{static hasGroup(e){return this.groups.has(e)}static getGroup(e){return this.groups.get(e)}static getCheckedRadioFromGroup(e){return this.checkedRadios.get(e)}static removeGroup(e){return this.checkedRadios.delete(e),this.groups.delete(e)}static addToGroup(e,n){this.hasGroup(n)?(this.enforceSingleSelection(e,n),this.getGroup(n)&&this.getGroup(n).push(e)):this.createGroup(e,n),this.updateTabOrder(n)}static removeFromGroup(e,n){const i=this.getGroup(n);if(!i)return;const o=this.getCheckedRadioFromGroup(n);i.forEach((r,a,s)=>{if(e._id===r._id)return s.splice(a,1)}),o===e&&this.checkedRadios.set(n,null),i.length||this.removeGroup(n),this.updateTabOrder(n)}static createGroup(e,n){e.checked&&this.checkedRadios.set(n,e),this.groups.set(n,[e])}static selectNextItem(e,n){const i=this.getGroup(n);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const a=this._nextSelectable(r,i);a&&this.updateSelectionInGroup(a,n)}static updateTabOrder(e){const n=this.getGroup(e);if(!n)return;const i=n.some(o=>o.checked);n.filter(o=>!o.disabled).forEach((o,r)=>{i?o._tabIndex=o.checked?"0":"-1":o._tabIndex=r===0?"0":"-1"})}static selectPreviousItem(e,n){const i=this.getGroup(n);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const a=this._previousSelectable(r,i);a&&this.updateSelectionInGroup(a,n)}static selectItem(e,n){this.updateSelectionInGroup(e,n),this.updateTabOrder(n)}static updateSelectionInGroup(e,n){const i=this.getCheckedRadioFromGroup(n);i&&this._deselectRadio(i),this._selectRadio(e),this.checkedRadios.set(n,e)}static _deselectRadio(e){e&&(e.checked=!1)}static _selectRadio(e){e&&(e.focus(),e.checked=!0,e._checked=!0,e.fireEvent("change"))}static _nextSelectable(e,n){if(!n)return null;const i=n.length;let o=null;if(e===i-1){if(n[0].disabled||n[0].readonly)return this._nextSelectable(1,n);o=n[0]}else{if(n[e+1].disabled||n[e+1].readonly)return this._nextSelectable(e+1,n);o=n[e+1]}return o}static _previousSelectable(e,n){const i=n.length;let o=null;if(e===0){if(n[i-1].disabled||n[i-1].readonly)return this._previousSelectable(i-1,n);o=n[i-1]}else{if(n[e-1].disabled||n[e-1].readonly)return this._previousSelectable(e-1,n);o=n[e-1]}return o}static enforceSingleSelection(e,n){const i=this.getCheckedRadioFromGroup(n);e.checked?i?e!==i&&(this._deselectRadio(i),this.checkedRadios.set(n,e)):this.checkedRadios.set(n,e):e===i&&this.checkedRadios.set(n,null),this.updateTabOrder(n)}static get groups(){return this._groups||(this._groups=new Map),this._groups}static get checkedRadios(){return this._checkedRadios||(this._checkedRadios=new Map),this._checkedRadios}}function rC(t,e,n){return p`<div class="ui5-radio-root" role="radio" aria-checked="${l(this.checked)}" aria-disabled="${l(this.effectiveAriaDisabled)}" aria-describedby="${l(this.effectiveAriaDescribedBy)}" aria-label="${l(this.ariaLabelText)}" tabindex="${l(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${N(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${lC.call(this,t,e,n)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.effectiveAriaDisabled}" name="${l(this.name)}"  data-sap-no-tab-ref/></div>${this.text?aC.call(this,t,e,n):void 0}${this.hasValueState?sC.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`}function aC(t,e,n){return n?p`<${v("ui5-label",e,n)} id="${l(this._id)}-label" class="ui5-radio-label" for="${l(this._id)}" wrapping-type="${l(this.wrappingType)}">${l(this.text)}</${v("ui5-label",e,n)}>`:p`<ui5-label id="${l(this._id)}-label" class="ui5-radio-label" for="${l(this._id)}" wrapping-type="${l(this.wrappingType)}">${l(this.text)}</ui5-label>`}function sC(t,e,n){return p`<span id="${l(this._id)}-descr" class="ui5-hidden-text">${l(this.valueStateText)}</span>`}function lC(t,e,n){return Er`<circle class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle class="ui5-radio-svg-inner" cx="50%" cy="50%" />`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const cC={packageName:"@ui5/webcomponents",fileName:"themes/RadioButton.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-block;
}

:host {
	min-width: var(--_ui5_radio_button_min_width);
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	color: var(--_ui5_radio_button_color);
	border-radius: var(--_ui5_radio_button_border_radius);
	transition: var(--_ui5_radio_button_transition);
}

:host(:not([disabled])) .ui5-radio-root {
	cursor: pointer;
}

/* checked */

:host([checked]) {
	color: var(--_ui5_radio_button_checked_fill);
}

:host([checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_inner_ring_color);
}

:host([checked]) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_color);
}

/* disabled */

:host([disabled]) .ui5-radio-root {
	color: var(--_ui5_radio_button_color);
	opacity: var(--sapContent_DisabledOpacity);
}

:host([disabled][checked]) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_color);
}

/* focused */

:host(:not([disabled])) .ui5-radio-root:focus:before {
	content: "";
	display: var(--_ui5_radio_button_focus_outline);
	position: absolute;
	top: var(--_ui5_radio_button_focus_dist);
	bottom: var(--_ui5_radio_button_focus_dist);
	left: var(--_ui5_radio_button_focus_dist);
	right: var(--_ui5_radio_button_focus_dist);
	pointer-events: none;
	border: var(--_ui5_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_radio_button_border_radius);
}

/* horizon readonly focus */

:host(:not([disabled])[readonly]) .ui5-radio-root:focus:before {
	border: var(--_ui5_radio_button_border_width) var(--_ui5_radio_button_border_readonly_focus_style) var(--sapContent_FocusColor);
}

:host(:not([disabled])) .ui5-radio-root:focus {
	border-radius: var(--_ui5_radio_button_border_radius);
	border: var(--_ui5_radio_button_focus_border);
}

/* hovered */

:host(:not([disabled]):hover) {
	background: var(--_ui5_radio_button_hover_background);
	box-shadow: var(--_ui5_radio_button_hover_shadow);
}

/* hovered and value-state */

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_hover_color);
}

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow));
}

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);
}

.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,
:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill);
}

/* active, checked */

:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);
}

/* active, not checked */

:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_active_color);
}

/* with label */

:host([text]) .ui5-radio-root:focus:before {
	inset-inline: var(--_ui5_radio_button_focus_dist) 0;
}

:host([text]) .ui5-radio-inner {
	padding: var(--_ui5_radio_button_outer_ring_padding_with_label);
}

/* readonly */

:host([checked][readonly]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_read_only_inner_ring_color);
}

:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer {
	fill: var(--sapField_ReadOnly_Background);
	stroke: var(--sapField_ReadOnly_BorderColor);
	stroke-dasharray: var(--_ui5_radio_button_read_only_border_type);
	stroke-width: var(--_ui5_radio_button_read_only_border_width);
}

/* value states */

:host([value-state="Error"]) .ui5-radio-svg-outer,
:host([value-state="Warning"]) .ui5-radio-svg-outer {
	stroke-width: var(--sapField_InvalidBorderWidth);
}

:host([value-state="Information"]) .ui5-radio-svg-outer {
	stroke-width: var(--_ui5_radio_button_information_border_width);
}

/* Error state */

:host([value-state="Error"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_error_fill);
}

:host([value-state="Error"]) .ui5-radio-svg-outer,
:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_InvalidColor);
	fill: var(--sapField_InvalidBackground);
}

:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_error);
}

:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_error));
}

/* Warning state */

:host([value-state="Warning"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_warning_fill);
}

:host([value-state="Warning"]) .ui5-radio-svg-outer,
:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_WarningColor);
	fill: var(--sapField_WarningBackground);
}

:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_warning);
}

:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_warning));
}

/* Success state */

:host([value-state="Success"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_success_fill);
}

:host([value-state="Success"]) .ui5-radio-svg-outer,
:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_SuccessColor);
	fill: var(--sapField_SuccessBackground);
}

:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_success);
}

:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_success));
}

/* Information state */

:host([value-state="Information"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_information_fill);
}

:host([value-state="Information"]) .ui5-radio-svg-outer,
:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_InformationColor);
	fill: var(--sapField_InformationBackground);
}

:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_information);
}

:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_information));
}

:host([value-state="Error"]) .ui5-radio-root,
:host([value-state="Warning"]) .ui5-radio-root,
:host([value-state="Information"]) .ui5-radio-root {
	stroke-dasharray: var(--_ui5_radio_button_warning_error_border_dash);
}

.ui5-radio-root {
	height: var(--_ui5_radio_button_height);
	position: relative;
	display: inline-flex;
	flex-wrap: nowrap;
	outline: none;
	max-width: 100%;
	width: var(--_ui5_radio_button_inner_width);
	box-sizing: border-box;
	border: var(--_ui5_radio_button_border);
	border-radius: var(--_ui5_radio_button_border_radius);
	transition: var(--_ui5_radio_button_transition);
}

/* Inner */

.ui5-radio-inner {
	display: flex;
	align-items: center;
	padding: var(--_ui5_radio_button_outer_ring_padding);
	flex-shrink: 0;
	height: var(--_ui5_radio_button_inner_size);
	font-size: 1rem; /* override font size of the message dialog */
	pointer-events: none;
	vertical-align: top;
}

.ui5-radio-inner {
	outline: none;
}

.ui5-radio-inner input {
	-webkit-appearance: none;
	visibility: hidden;
	width: 0;
	left: 0;
	position: absolute;
	font-size: inherit;
	margin: 0; /* FF puts margin */
}

/* Label */

[ui5-label].ui5-radio-label {
	display: flex;
	align-items: center;
	padding-inline-end: var(--_ui5_radio_button_label_offset);
	vertical-align: top;
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	pointer-events: none;
	color: var(--_ui5_radio_button_label_color);
}

:host([wrapping-type="Normal"][text]) .ui5-radio-root {
	height: auto;
}

:host([wrapping-type="Normal"][text]) [ui5-label].ui5-radio-label {
	padding: var(--_ui5_radio_button_label_side_padding) 0;
	overflow-wrap: break-word;
}

/* SVG */

.ui5-radio-svg {
	height: var(--_ui5_radio_button_svg_size);
	width: var(--_ui5_radio_button_svg_size);
	overflow: visible;
	pointer-events: none;
}

.ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_outer_ring_bg);
	stroke: currentColor;
	stroke-width: var(--_ui5_radio_button_outer_ring_width);
}

.ui5-radio-svg-inner {
	fill: none;
	r: var(--_ui5_radio_button_inner_ring_radius);
}

.ui5-radio-svg-outer,
.ui5-radio-svg-inner {
	flex-shrink: 0;
}

/* ListItem Context */

:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer {
	fill: var(--sapList_Background);
}
`};var it=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ci;let pd=!1,cl,Le=ci=class extends Q{constructor(){super(),this._deactivate=()=>{cl&&(cl.active=!1)},pd||(document.addEventListener("mouseup",this._deactivate),pd=!0)}static async onDefine(){ci.i18nBundle=await ie("@ui5/webcomponents")}onBeforeRendering(){this.syncGroup(),this._enableFormSupport()}onExitDOM(){this.syncGroup(!0)}syncGroup(e){const n=this._name,i=this.name,o=this._checked,r=this.checked;e&&Tn.removeFromGroup(this,n),i!==n?(n&&Tn.removeFromGroup(this,n),i&&Tn.addToGroup(this,i)):i&&Tn.enforceSingleSelection(this,i),this.name&&r!==o&&Tn.updateTabOrder(this.name),this._name=this.name,this._checked=this.checked}_enableFormSupport(){const e=Ce("FormSupport");e?e.syncNativeHiddenInput(this,(n,i)=>{i.value=n.value,i.type="radio",i.checked=n.checked}):this.value&&console.warn('In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){return this.toggle()}_handleDown(e){const n=this.name;n&&(e.preventDefault(),Tn.selectNextItem(this,n))}_handleUp(e){const n=this.name;n&&(e.preventDefault(),Tn.selectPreviousItem(this,n))}_onkeydown(e){if(H(e))return this.active=!0,e.preventDefault();if(te(e))return this.active=!0,this.toggle();const n=this.effectiveDir==="rtl";(ct(e)||!n&&Et(e)||n&&Jt(e))&&this._handleDown(e),(Ct(e)||!n&&Jt(e)||n&&Et(e))&&this._handleUp(e)}_onkeyup(e){H(e)&&this.toggle(),this.active=!1}_onmousedown(){this.active=!0,cl=this}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}toggle(){return this.canToggle()?this.name?(Tn.selectItem(this,this.name),this):(this.checked=!this.checked,this.fireEvent("change"),this):this}canToggle(){return!(this.disabled||this.readonly||this.checked)}get classes(){return{inner:{"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&xi()}}}get effectiveAriaDisabled(){return this.disabled?"true":null}get ariaLabelText(){return[tn(this),this.text].filter(Boolean).join(" ")}get effectiveAriaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==k.None}get valueStateText(){switch(this.valueState){case k.Error:return ci.i18nBundle.getText(hs);case k.Warning:return ci.i18nBundle.getText(ps);case k.Success:return ci.i18nBundle.getText(fs);case k.Information:return ci.i18nBundle.getText(mu);default:return""}}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":this.name?this._tabIndex:e||"0"}get strokeWidth(){return this.valueState==="None"?"1":"2"}};it([d({type:Boolean})],Le.prototype,"disabled",void 0);it([d({type:Boolean})],Le.prototype,"readonly",void 0);it([d({type:Boolean})],Le.prototype,"required",void 0);it([d({type:Boolean})],Le.prototype,"checked",void 0);it([d()],Le.prototype,"text",void 0);it([d({type:k,defaultValue:k.None})],Le.prototype,"valueState",void 0);it([d()],Le.prototype,"name",void 0);it([d()],Le.prototype,"value",void 0);it([d({type:en,defaultValue:en.None})],Le.prototype,"wrappingType",void 0);it([d()],Le.prototype,"accessibleName",void 0);it([d()],Le.prototype,"accessibleNameRef",void 0);it([d({defaultValue:"-1",noAttribute:!0})],Le.prototype,"_tabIndex",void 0);it([d({type:Boolean})],Le.prototype,"active",void 0);it([Z()],Le.prototype,"formSupport",void 0);Le=ci=it([U({tag:"ui5-radio-button",languageAware:!0,renderer:he,template:rC,styles:cC,dependencies:[ms]}),I("change")],Le);Le.define();const uC=Le;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const _C={packageName:"@ui5/webcomponents",fileName:"themes/ListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

/* actionable (type="Active" + desktop) */

:host([actionable]:not([disabled])) {
	cursor: pointer;
}

/* selected and hovered */

:host([selected][actionable]:not([active]):hover) {
	background : var(--sapList_Hover_SelectionBackground);
}

/* selected and active */

:host([active][actionable]),
:host([selected][active][actionable]) {
	background: var(--sapList_Active_Background);
}

/* hovered */

:host([actionable]:not([active]):not([selected]):hover) {
	background : var(--sapList_Hover_Background);
}

/* focused */

:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus,
:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus {
	outline-color: var(--sapContent_ContrastFocusColor);
}

/* navigated */

:host([navigated]) .ui5-li-root .ui5-li-navigated {
	width: 0.1875rem;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: var(--sapList_SelectionBorderColor);
}

/* active */

:host([active][actionable]) .ui5-li-root .ui5-li-icon {
	color: var(--sapList_Active_TextColor);
}

/* [ui5-li]: title, description, additionalTextState */

:host([active][actionable]) .ui5-li-title,
:host([active][actionable]) .ui5-li-desc,
:host([active][actionable]) .ui5-li-additional-text {
	color: var(--sapList_Active_TextColor);
}

/* [ui5-li]: additionalTextState */

:host([additional-text-state="Warning"]) .ui5-li-additional-text {
	color: var(--sapCriticalTextColor);
}

:host([additional-text-state="Success"]) .ui5-li-additional-text {
	color: var(--sapPositiveTextColor);
}

:host([additional-text-state="Error"]) .ui5-li-additional-text {
	color: var(--sapNegativeTextColor);
}

:host([additional-text-state="Information"]) .ui5-li-additional-text {
	color: var(--sapInformativeTextColor);
}

/* [ui5-li]: item with title and description */

:host([has-title][description]) {
	height: 5rem;
}

:host([has-title][image]) {
	height: 5rem;
}

:host([_has-image-content]) {
	height: 5rem;
}

:host([image]) .ui5-li-content {
	height: 3rem;
}

:host([description]) .ui5-li-root {
	padding: 1rem;
}

:host([description]) .ui5-li-content {
	height: 3rem;
}

:host([has-title][description]) .ui5-li-title {
	padding-bottom: 0.375rem;
}

.ui5-li-text-wrapper {
	display: flex;
	flex-direction: column;
	flex: auto;
	min-width: 1px;
	line-height: normal;
}

:host([description]) .ui5-li-text-wrapper {
	height: 100%;
	justify-content: space-between;
	padding: 0.125rem 0;
}

.ui5-li-description-info-wrapper {
	display: flex;
	justify-content: space-between;
}

.ui5-li-title {
	color: var(--sapTextColor);
	font-size: var(--_ui5_list_item_title_size);
}

.ui5-li-additional-text,
:host(:not([wrapping-type="Normal"])) .ui5-li-title,
.ui5-li-desc {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

:host([wrapping-type="Normal"]) {
	height: auto;
}

:host([wrapping-type="Normal"]) .ui5-li-content {
	margin: var(--_ui5_list_item_content_vertical_offset) 0;
}

.ui5-li-desc {
	color: var(--sapContent_LabelColor);
	font-size: var(--sapFontSize);
}

.ui5-li-additional-text {
	margin: 0 0.25rem;
	color: var(--sapNeutralTextColor);
	font-size: 0.875rem;
	min-width: 3.75rem;
	text-align: end;
}

:host([description]) .ui5-li-additional-text {
	align-self: flex-end;
}

.ui5-li-img {
	width: var(--_ui5_list_item_img_size);
	height: var(--_ui5_list_item_img_size);
	border-radius: var(--ui5-avatar-border-radius);
}

.ui5-li-img,
.ui5-li-imgContent {
	min-width: var(--_ui5_list_item_img_size);
	min-height: var(--_ui5_list_item_img_size);
	margin-top: var(--_ui5_list_item_img_top_margin);
	margin-bottom: var(--_ui5_list_item_img_bottom_margin);
	margin-inline-end: var(--_ui5_list_item_img_hn_margin);
}

.ui5-li-img-inner {
	object-fit: contain;
}

.ui5-li-icon {
	min-width: var(--_ui5_list_item_icon_size);
	min-height: var(--_ui5_list_item_icon_size);
	color: var(--sapContent_NonInteractiveIconColor);
	padding-inline-end: var(--_ui5_list_item_icon_padding-inline-end);
}

.ui5-li-content {
	display: flex;
	align-items: center;
	flex: auto;
	overflow: hidden;
}

.ui5-li-detailbtn,
.ui5-li-deletebtn {
	display: flex;
	align-items: center;
	margin-left: var(--_ui5_list_buttons_left_space);
}

.ui5-li-multisel-cb,
.ui5-li-singlesel-radiobtn {
	flex-shrink: 0;
}

:host([description]) .ui5-li-singlesel-radiobtn {
	align-self: flex-start;
	margin-top: var(--_ui5_list_item_selection_btn_margin_top);
}

:host([description]) .ui5-li-multisel-cb {
	align-self: flex-start;
	margin-top: var(--_ui5_list_item_selection_btn_margin_top);
}

:host([_mode="SingleSelectBegin"]) .ui5-li-root {
	padding-inline: 0 1rem;
}

:host([_mode="MultiSelect"]) .ui5-li-root {
	padding-inline: 0 1rem;
}

:host([_mode="SingleSelectEnd"]) .ui5-li-root {
	padding-inline: 1rem 0;
}

:host [ui5-checkbox].ui5-li-singlesel-radiobtn {
	margin-right: var(--_ui5_list_item_cb_margin_right);
}
`};var bc;(function(t){t.Dialog="Dialog",t.Grid="Grid",t.ListBox="ListBox",t.Menu="Menu",t.Tree="Tree"})(bc||(bc={}));const dC=bc;var ot=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},$n;let ze=$n=class extends ys{constructor(){super(),this.deactivateByKey=n=>{te(n)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)};const e=n=>{this._onmousedown(n)};this._ontouchstart={handleEvent:e,passive:!0}}onBeforeRendering(){this.actionable=(this.type===Tt.Active||this.type===Tt.Navigation)&&this._mode!==ue.Delete}onEnterDOM(){document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}_onkeydown(e){super._onkeydown(e);const n=this.type===Tt.Active,i=this.typeNavigation;H(e)&&e.preventDefault(),(H(e)||te(e))&&(n||i)&&this.activate(),te(e)&&this.fireItemPress(e)}_onkeyup(e){(H(e)||te(e))&&this.deactivate(),H(e)&&this.fireItemPress(e),this.modeDelete&&fu(e)&&this.onDelete()}_onmousedown(e){ha(e)!=="button"&&this.activate()}_onmouseup(e){ha(e)!=="button"&&this.deactivate()}_ontouchend(e){this._onmouseup(e)}_onfocusout(){super._onfocusout(),this.deactivate()}_onclick(e){ha(e)!=="button"&&this.fireItemPress(e)}onMultiSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:e.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:!e.target.checked,selectionComponentPressed:!0})}activate(){(this.type===Tt.Active||this.type===Tt.Navigation)&&(this.active=!0)}onDelete(){this.fireEvent("_selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(e){this.isInactive||(te(e)&&e.preventDefault(),this.fireEvent("_press",{item:this,selected:this.selected,key:e.key}))}get isInactive(){return this.type===Tt.Inactive||this.type===Tt.Detail}get placeSelectionElementBefore(){return this._mode===ue.MultiSelect||this._mode===ue.SingleSelectBegin}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._mode===ue.SingleSelectEnd||this._mode===ue.Delete)}get modeSingleSelect(){return[ue.SingleSelectBegin,ue.SingleSelectEnd,ue.SingleSelect].includes(this._mode)}get modeMultiSelect(){return this._mode===ue.MultiSelect}get modeDelete(){return this._mode===ue.Delete}get renderDeleteButton(){return this.modeDelete}get typeDetail(){return this.type===Tt.Detail}get typeNavigation(){return this.type===Tt.Navigation}get typeActive(){return this.type===Tt.Active}get _ariaSelected(){if(this.modeMultiSelect||this.modeSingleSelect)return this.selected}get ariaSelectedText(){let e;return this._ariaSelected!==void 0&&(e=this._ariaSelected?$n.i18nBundle.getText(xf):$n.i18nBundle.getText(Tf)),e}get deleteText(){return $n.i18nBundle.getText(Ty)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.accessibleRole||this.role,ariaExpanded:void 0,ariaLevel:this._level||void 0,ariaLabel:$n.i18nBundle.getText(Ey),ariaLabelRadioButton:$n.i18nBundle.getText(Ay),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.ariaHaspopup||void 0,setsize:this.accessibilityAttributes.ariaSetsize,posinset:this.accessibilityAttributes.ariaPosinset}}get hasConfigurableMode(){return!0}static async onDefine(){$n.i18nBundle=await ie("@ui5/webcomponents")}};ot([d({type:Tt,defaultValue:Tt.Active})],ze.prototype,"type",void 0);ot([d({type:Object})],ze.prototype,"accessibilityAttributes",void 0);ot([d({type:Boolean})],ze.prototype,"navigated",void 0);ot([d({type:Boolean})],ze.prototype,"active",void 0);ot([d()],ze.prototype,"title",void 0);ot([d({type:Boolean})],ze.prototype,"actionable",void 0);ot([d({defaultValue:"listitem"})],ze.prototype,"role",void 0);ot([d({defaultValue:void 0,noAttribute:!0})],ze.prototype,"accessibleRoleDescription",void 0);ot([d()],ze.prototype,"accessibleRole",void 0);ot([d({type:ue,defaultValue:ue.None})],ze.prototype,"_mode",void 0);ot([d({type:dC,noAttribute:!0})],ze.prototype,"ariaHaspopup",void 0);ot([d({type:Se})],ze.prototype,"_level",void 0);ot([d({type:Boolean,noAttribute:!0})],ze.prototype,"disableDeleteButton",void 0);ot([Z()],ze.prototype,"deleteButton",void 0);ze=$n=ot([U({languageAware:!0,styles:[ys.styles,_C],dependencies:[Oi,uC,Su]}),I("detail-click"),I("_press"),I("_focused"),I("_selection-requested")],ze);const Xm=ze;function hC(t,e,n){return p`<div class="ui5-avatar-root" tabindex="${l(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} role="${l(this._role)}" aria-haspopup="${l(this._ariaHasPopup)}" aria-label="${l(this.accessibleNameText)}">${this.hasImage?pC.call(this,t,e,n):fC.call(this,t,e,n)}<slot name="badge"></slot></div>`}function pC(t,e,n){return p`<slot></slot>`}function fC(t,e,n){return p`${this.icon?mC.call(this,t,e,n):void 0}${this.initials?gC.call(this,t,e,n):void 0}`}function mC(t,e,n){return n?p`<${v("ui5-icon",e,n)} class="ui5-avatar-icon" name="${l(this.icon)}"></${v("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-avatar-icon" name="${l(this.icon)}"></ui5-icon>`}function gC(t,e,n){return n?p`<span class="ui5-avatar-initials">${l(this.validInitials)}</span><${v("ui5-icon",e,n)} class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee"></${v("ui5-icon",e,n)}>`:p`<span class="ui5-avatar-initials">${l(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee"></ui5-icon>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const vC={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css",content:`:host(:not([hidden])) {
	display: inline-block;
	box-sizing: border-box;
	position: relative;
}

/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/

:host(:not([hidden]).ui5_hovered) {
	opacity: .7;
}

:host(:not([hidden]):not([pressed]):hover) {
	box-shadow: var(--ui5-avatar-hover-box-shadow-offset);
}

:host(:not([hidden])[focused]:not([pressed])) {
	outline: var(--_ui5_avatar_outline);
	outline-offset: var(--_ui5_avatar_focus_offset);
}

:host(:not([disabled])[interactive]) {
	cursor: pointer;
}

:host([disabled]) {
	opacity: var(--sapContent_DisabledOpacity);
}

:host(:not([hidden])[pressed]) {
	background: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}

:host(:not([hidden])[pressed]:hover) {
	background: var(--sapButton_Selected_Hover_Background);
	border-color: var(--sapButton_Selected_Hover_BorderColor);
	color: var(--sapButton_Selected_TextColor);
}

:host {
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
	border: var(--ui5-avatar-initials-border);
	outline: none;
	color: var(--ui5-avatar-initials-color);
}

.ui5-avatar-root {
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	height: 100%;
	width: 100%;
}

/* Sizes */

:host([_size="XS"]),
:host([size="XS"]) {
	height: 2rem;
	width: 2rem;
	min-height: 2rem;
	min-width: 2rem;
	font-size: var(--_ui5_avatar_fontsize_XS);
}

:host([_size="S"]),
:host([size="S"]) {
	min-height: 3rem;
	min-width: 3rem;
	font-size: var(--_ui5_avatar_fontsize_S);
}

:host([_size="M"]),
:host([size="M"]) {
	min-height: 4rem;
	min-width: 4rem;
	font-size: var(--_ui5_avatar_fontsize_M);
}

:host([_size="L"]),
:host([size="L"]) {
	min-height: 5rem;
	min-width: 5rem;
	font-size: var(--_ui5_avatar_fontsize_L);
}

:host([_size="XL"]),
:host([size="XL"]) {
	min-height: 7rem;
	min-width: 7rem;
	font-size: var(--_ui5_avatar_fontsize_XL);
}

/* Icon */

:host .ui5-avatar-icon {
	height: var(--_ui5_avatar_fontsize_S);
	width: var(--_ui5_avatar_fontsize_S);
	color: inherit;
}

:host([_size="XS"]) .ui5-avatar-icon,
:host([size="XS"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_XS);
	width: var(--_ui5_avatar_icon_XS);
}

:host([_size="S"]) .ui5-avatar-icon,
:host([size="S"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_S);
	width: var(--_ui5_avatar_icon_S);
}

:host([_size="M"]) .ui5-avatar-icon,
:host([size="M"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_M);
	width: var(--_ui5_avatar_icon_M);
}

:host([_size="L"]) .ui5-avatar-icon,
:host([size="L"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_L);
	width: var(--_ui5_avatar_icon_L);
}

:host([_size="XL"]) .ui5-avatar-icon,
:host([size="XL"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_XL);
	width: var(--_ui5_avatar_icon_XL);
}

::slotted(*) {
	border-radius: 50%;
    width: 100%;
    height: 100%;
	pointer-events: none;
}

/* Shapes */

:host([shape="Square"]) {
	border-radius: var(--ui5-avatar-border-radius);
}

:host([shape="Square"]) ::slotted(*) {
	border-radius: calc(var(--ui5-avatar-border-radius) - var(--ui5-avatar-border-radius-img-deduction));
}

:host(:not([color-scheme])),
:host(:not([_has-image])),
:host([_color-scheme="Accent6"]),
:host([ui5-avatar][color-scheme="Accent6"]) {
	background-color: var(--ui5-avatar-accent6);
	color: var(--ui5-avatar-accent6-color);
	border-color: var(--ui5-avatar-accent6-border-color);
}

:host([_color-scheme="Accent1"]),
:host([ui5-avatar][color-scheme="Accent1"]) {
	background-color: var(--ui5-avatar-accent1);
	color: var(--ui5-avatar-accent1-color);
	border-color: var(--ui5-avatar-accent1-border-color);
}

:host([_color-scheme="Accent2"]),
:host([ui5-avatar][color-scheme="Accent2"]) {
	background-color: var(--ui5-avatar-accent2);
	color: var(--ui5-avatar-accent2-color);
	border-color: var(--ui5-avatar-accent2-border-color);
}

:host([_color-scheme="Accent3"]),
:host([ui5-avatar][color-scheme="Accent3"]) {
	background-color: var(--ui5-avatar-accent3);
	color: var(--ui5-avatar-accent3-color);
	border-color: var(--ui5-avatar-accent3-border-color);
}

:host([_color-scheme="Accent4"]),
:host([ui5-avatar][color-scheme="Accent4"]) {
	background-color: var(--ui5-avatar-accent4);
	color: var(--ui5-avatar-accent4-color);
	border-color: var(--ui5-avatar-accent4-border-color);
}

:host([_color-scheme="Accent5"]),
:host([ui5-avatar][color-scheme="Accent5"]) {
	background-color: var(--ui5-avatar-accent5);
	color: var(--ui5-avatar-accent5-color);
	border-color: var(--ui5-avatar-accent5-border-color);
}

:host([_color-scheme="Accent7"]),
:host([ui5-avatar][color-scheme="Accent7"]) {
	background-color: var(--ui5-avatar-accent7);
	color: var(--ui5-avatar-accent7-color);
	border-color: var(--ui5-avatar-accent7-border-color);
}

:host([_color-scheme="Accent8"]),
:host([ui5-avatar][color-scheme="Accent8"]) {
	background-color: var(--ui5-avatar-accent8);
	color: var(--ui5-avatar-accent8-color);
	border-color: var(--ui5-avatar-accent8-border-color);
}

:host([_color-scheme="Accent9"]),
:host([ui5-avatar][color-scheme="Accent9"]) {
	background-color: var(--ui5-avatar-accent9);
	color: var(--ui5-avatar-accent9-color);
	border-color: var(--ui5-avatar-accent9-border-color);
}

:host([_color-scheme="Accent10"]),
:host([ui5-avatar][color-scheme="Accent10"]) {
	background-color: var(--ui5-avatar-accent10);
	color: var(--ui5-avatar-accent10-color);
	border-color: var(--ui5-avatar-accent10-border-color);
}

:host([_color-scheme="Placeholder"]),
:host([ui5-avatar][color-scheme="Placeholder"]) {
	background-color: var(--ui5-avatar-placeholder);
	color: var(--ui5-avatar-placeholder-color);
	border-color: var(--ui5-avatar-placeholder-border-color);
}

:host([_has-image]) {
	color: var(--ui5-avatar-accent10-color);
	background-color: transparent;
	vertical-align: middle;
}

.ui5-avatar-initials {
	color: inherit;
}

.ui5-avatar-icon ~ .ui5-avatar-initials,
.ui5-avatar-icon ~ .ui5-avatar-icon-fallback {
	display: none;
}

.ui5-avatar-initials:not(.ui5-avatar-initials-hidden) + .ui5-avatar-icon-fallback {
	display: none;
}

.ui5-avatar-initials-hidden {
	position: absolute;
	visibility: hidden;
	z-index: 0;
	pointer-events: none;
}

/* Slotted Badge */

::slotted([slot="badge"]) {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 1.125rem;
	height: 1.125rem;
	background: var(--sapButton_Emphasized_Background);
	border: var(--sapButton_Emphasized_Background);
	border-radius: 1rem;
	color: var(--sapContent_BadgeTextColor);
	justify-content: center;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSmallSize);
}

::slotted([ui5-badge][slot="badge"]) {
	padding: 0.1875rem;
}

:host([_size="L"]) ::slotted([slot="badge"]),
:host([size="L"]) ::slotted([slot="badge"]) {
	width: 1.25rem;
	height: 1.25rem;
}

:host([_size="XL"]) ::slotted([slot="badge"]),
:host([size="XL"]) ::slotted([slot="badge"]) {
	padding: 0.375rem;
	width: 1.75rem;
	height: 1.75rem;
}

:host([shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.125rem;
	right: -0.125rem;
}

:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),
:host([size="L"][shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.1875rem;
	right: -0.1875rem;
}

:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),
:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.25rem;
	right: -0.25rem;
}`};var yc;(function(t){t.XS="XS",t.S="S",t.M="M",t.L="L",t.XL="XL"})(yc||(yc={}));const Wa=yc;var wc;(function(t){t.Circle="Circle",t.Square="Square"})(wc||(wc={}));const fd=wc;var kc;(function(t){t.Accent1="Accent1",t.Accent2="Accent2",t.Accent3="Accent3",t.Accent4="Accent4",t.Accent5="Accent5",t.Accent6="Accent6",t.Accent7="Accent7",t.Accent8="Accent8",t.Accent9="Accent9",t.Accent10="Accent10",t.Placeholder="Placeholder"})(kc||(kc={}));const ja=kc,bC="employee",Zm="M448 512H64V384q0-26 10-49.5t27.5-41T142 266t50-10h64q-27 0-50-10t-40.5-27.5T138 178t-10-50q0-26 10-49.5t27.5-41T206 10t50-10q26 0 49.5 10t41 27.5 27.5 41 10 49.5q0 27-10 50t-27.5 40.5-41 27.5-49.5 10h64q26 0 49.5 10t41 27.5 27.5 41 10 49.5v128zM96 384v96h320v-96q0-40-28-68t-68-28H192q-40 0-68 28t-28 68zm160-160q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm32 192v-32h96v32h-96z",yC=!1,wC="SAP-icons-v4",kC="@ui5/webcomponents-icons";G(bC,{pathData:Zm,ltr:yC,collection:wC,packageName:kC});const xC="employee",Qm="M342 255q48 23 77 67.5t29 99.5v32q0 11-7.5 18.5T422 480H90q-11 0-18.5-7.5T64 454v-32q0-55 29-99.5t77-67.5l-4-5q-19-17-28.5-40.5T128 160q0-27 10-50t27.5-40.5 41-27.5T256 32t49.5 10.5 41 28T374 111t10 49q0 27-11 52t-31 43zm-163-95q0 32 22.5 54.5T256 237t54.5-22.5T333 160t-22.5-54.5T256 83t-54.5 22.5T179 160zm51 181l-25-15q-13-7-13-19v-6q-34 17-55.5 49T115 422v7h115v-88zm167 81q0-40-21-72t-56-49v6q0 12-13 19l-26 15v88h116v-7zm-71-70q11 0 18.5 7.5T352 378t-7.5 18-18.5 7h-12q-11 0-18.5-7t-7.5-18 7.5-18.5T314 352h12z",TC=!1,CC="SAP-icons-v5",SC="@ui5/webcomponents-icons";G(xC,{pathData:Qm,ltr:TC,collection:CC,packageName:SC});Ue();var Me=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ya;let we=ya=class extends Q{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){ya.i18nBundle=await ie("@ui5/webcomponents")}get tabindex(){return this._tabIndex||(this._interactive?"0":"-1")}get _effectiveSize(){return this.getAttribute("size")||this._size}get _effectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this._interactive?"button":void 0}get _ariaHasPopup(){return this._getAriaHasPopup()}get _interactive(){return this.interactive&&!this.disabled}get validInitials(){const e=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&e.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:ya.i18nBundle.getText(by)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}get initialsContainer(){return this.getDomRef().querySelector(".ui5-avatar-initials")}onBeforeRendering(){this._onclick=this._interactive?this._onClickHandler.bind(this):void 0}async onAfterRendering(){await vo(),this.initials&&!this.icon&&this._checkInitials()}onEnterDOM(){this.initialsContainer&&At.register(this.initialsContainer,this._handleResizeBound)}onExitDOM(){this.initialsContainer&&At.deregister(this.initialsContainer,this._handleResizeBound)}handleResize(){this.initials&&!this.icon&&this._checkInitials()}_checkInitials(){const e=this.getDomRef(),n=e.querySelector(".ui5-avatar-initials");if(!this.validInitials){n.classList.add("ui5-avatar-initials-hidden");return}n&&n.classList.remove("ui5-avatar-initials-hidden"),this.initials&&this.initials.length===3&&n&&n.scrollWidth>e.scrollWidth&&n.classList.add("ui5-avatar-initials-hidden")}_onClickHandler(e){e.stopPropagation(),this._fireClick()}_onkeydown(e){this._interactive&&(te(e)&&this._fireClick(),H(e)&&e.preventDefault())}_onkeyup(e){this._interactive&&!e.shiftKey&&H(e)&&this._fireClick()}_fireClick(){this.fireEvent("click"),this.pressed=!this.pressed}_onfocusout(){this.focused=!1}_onfocusin(){this._interactive&&(this.focused=!0)}_getAriaHasPopup(){if(!(!this._interactive||this.ariaHaspopup===""))return this.ariaHaspopup}};Me([d({type:Boolean})],we.prototype,"disabled",void 0);Me([d({type:Boolean})],we.prototype,"interactive",void 0);Me([d({type:Boolean})],we.prototype,"focused",void 0);Me([d({type:Boolean})],we.prototype,"pressed",void 0);Me([d()],we.prototype,"icon",void 0);Me([d()],we.prototype,"initials",void 0);Me([d({type:fd,defaultValue:fd.Circle})],we.prototype,"shape",void 0);Me([d({type:Wa,defaultValue:Wa.S})],we.prototype,"size",void 0);Me([d({type:Wa,defaultValue:Wa.S})],we.prototype,"_size",void 0);Me([d({type:ja,defaultValue:ja.Accent6})],we.prototype,"colorScheme",void 0);Me([d({type:ja,defaultValue:ja.Accent6})],we.prototype,"_colorScheme",void 0);Me([d()],we.prototype,"accessibleName",void 0);Me([d()],we.prototype,"ariaHaspopup",void 0);Me([d({noAttribute:!0})],we.prototype,"_tabIndex",void 0);Me([d({type:Boolean})],we.prototype,"_hasImage",void 0);Me([Z({type:HTMLElement,default:!0})],we.prototype,"image",void 0);Me([Z()],we.prototype,"badge",void 0);we=ya=Me([U({tag:"ui5-avatar",languageAware:!0,renderer:he,styles:vC,template:hC,dependencies:[Ut]}),I("click")],we);we.define();const $C=we;function IC(t,e,n){return p`<li part="native-li" data-sap-focus-ref tabindex="${l(this._effectiveTabIndex)}" class="${N(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" role="${l(this._accInfo.role)}" aria-expanded="${l(this._accInfo.ariaExpanded)}" title="${l(this.title)}" aria-level="${l(this._accInfo.ariaLevel)}" aria-haspopup="${l(this._accInfo.ariaHaspopup)}" aria-posinset="${l(this._accInfo.posinset)}" aria-roledescription="${l(this.accessibleRoleDescription)}" aria-setsize="${l(this._accInfo.setsize)}" aria-describedby="${l(this._id)}-invisibleText-describedby" aria-labelledby="${l(this._accessibleNameRef)}" aria-disabled="${l(this._ariaDisabled)}" aria-selected="${l(this._accInfo.ariaSelected)}" aria-checked="${l(this._accInfo.ariaChecked)}" aria-owns="${l(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?EC.call(this,t,e,n):void 0}<div id="${l(this._id)}-content" class="ui5-li-content">${this.hasImageContent?OC.call(this,t,e,n):RC.call(this,t,e,n)}${this.displayIconBegin?FC.call(this,t,e,n):void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${this.description?NC.call(this,t,e,n):void 0}${this.typeActive?void 0:HC.call(this,t,e,n)}</div>${this.description?void 0:UC.call(this,t,e,n)}</div>${this.displayIconEnd?WC.call(this,t,e,n):void 0}${this.typeDetail?jC.call(this,t,e,n):void 0}${this.typeNavigation?qC.call(this,t,e,n):void 0}${this.navigated?YC.call(this,t,e,n):void 0}${this.placeSelectionElementAfter?GC.call(this,t,e,n):void 0}<span id="${l(this._id)}-invisibleText" class="ui5-hidden-text">${l(this._accInfo.listItemAriaLabel)}${l(this.accessibleName)}</span><span id="${l(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${l(this._accInfo.ariaSelectedText)}</span></li> `}function EC(t,e,n){return p`${this.modeSingleSelect?AC.call(this,t,e,n):void 0}${this.modeMultiSelect?DC.call(this,t,e,n):void 0}${this.renderDeleteButton?BC.call(this,t,e,n):void 0}`}function AC(t,e,n){return n?p`<${v("ui5-radio-button",e,n)} ?disabled="${this.isInactive}" accessible-name="${l(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${v("ui5-radio-button",e,n)}>`:p`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${l(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function DC(t,e,n){return n?p`<${v("ui5-checkbox",e,n)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${l(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${l(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${v("ui5-checkbox",e,n)}>`:p`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${l(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${l(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function BC(t,e,n){return p`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?PC.call(this,t,e,n):LC.call(this,t,e,n)}</div>`}function PC(t,e,n){return p`<slot name="deleteButton"></slot>`}function LC(t,e,n){return n?p`<${v("ui5-button",e,n)} tabindex="-1" data-sap-no-tab-ref id="${l(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${l(this.deleteText)}"></${v("ui5-button",e,n)}>`:p`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${l(this.deleteText)}"></ui5-button>`}function OC(t,e,n){return p`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function RC(t,e,n){return p`${this.displayImage?MC.call(this,t,e,n):void 0}`}function MC(t,e,n){return n?p`<${v("ui5-avatar",e,n)} shape="Square" class="ui5-li-img"><img src="${l(this.image)}" class="ui5-li-img-inner" /></${v("ui5-avatar",e,n)}>`:p`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${l(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function FC(t,e,n){return n?p`<${v("ui5-icon",e,n)} part="icon" name="${l(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${v("ui5-icon",e,n)}>`:p`<ui5-icon part="icon" name="${l(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function NC(t,e,n){return p`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${l(this.description)}</span>${this.additionalText?zC.call(this,t,e,n):void 0}</div>`}function zC(t,e,n){return p`<span part="additional-text" class="ui5-li-additional-text">${l(this.additionalText)}</span>`}function HC(t,e,n){return p`<span class="ui5-hidden-text">${l(this.type)}</span>`}function UC(t,e,n){return p`${this.additionalText?VC.call(this,t,e,n):void 0}`}function VC(t,e,n){return p`<span part="additional-text" class="ui5-li-additional-text">${l(this.additionalText)}</span>`}function WC(t,e,n){return n?p`<${v("ui5-icon",e,n)} part="icon" name="${l(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${v("ui5-icon",e,n)}>`:p`<ui5-icon part="icon" name="${l(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function jC(t,e,n){return n?p`<div class="ui5-li-detailbtn"><${v("ui5-button",e,n)} design="Transparent" icon="edit" @click="${this.onDetailClick}"></${v("ui5-button",e,n)}></div>`:p`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function qC(t,e,n){return n?p`<${v("ui5-icon",e,n)} name ="slim-arrow-right"></${v("ui5-icon",e,n)}>`:p`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function YC(t,e,n){return p`<div class="ui5-li-navigated"></div>`}function GC(t,e,n){return p`${this.modeSingleSelect?XC.call(this,t,e,n):void 0}${this.modeMultiSelect?ZC.call(this,t,e,n):void 0}${this.renderDeleteButton?QC.call(this,t,e,n):void 0}`}function XC(t,e,n){return n?p`<${v("ui5-radio-button",e,n)} ?disabled="${this.isInactive}" accessible-name="${l(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${v("ui5-radio-button",e,n)}>`:p`<ui5-radio-button ?disabled="${this.isInactive}" accessible-name="${l(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function ZC(t,e,n){return n?p`<${v("ui5-checkbox",e,n)} ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${l(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${l(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${v("ui5-checkbox",e,n)}>`:p`<ui5-checkbox ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${l(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${l(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function QC(t,e,n){return p`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?JC.call(this,t,e,n):KC.call(this,t,e,n)}</div>`}function JC(t,e,n){return p`<slot name="deleteButton"></slot>`}function KC(t,e,n){return n?p`<${v("ui5-button",e,n)} tabindex="-1" data-sap-no-tab-ref id="${l(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${l(this.deleteText)}"></${v("ui5-button",e,n)}>`:p`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${l(this.deleteText)}"></ui5-button>`}var Bt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let tt=class extends Xm{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.textContent,this._hasImageContent=this.hasImageContent}get displayImage(){return!!this.image}get displayIconBegin(){return!!(this.icon&&!this.iconEnd)}get displayIconEnd(){return!!(this.icon&&this.iconEnd)}get hasImageContent(){return!!this.imageContent.length}};Bt([d()],tt.prototype,"description",void 0);Bt([d()],tt.prototype,"icon",void 0);Bt([d({type:Boolean})],tt.prototype,"iconEnd",void 0);Bt([d()],tt.prototype,"image",void 0);Bt([d()],tt.prototype,"additionalText",void 0);Bt([d({type:k,defaultValue:k.None})],tt.prototype,"additionalTextState",void 0);Bt([d()],tt.prototype,"accessibleName",void 0);Bt([d({type:en,defaultValue:en.None})],tt.prototype,"wrappingType",void 0);Bt([d({type:Boolean})],tt.prototype,"hasTitle",void 0);Bt([d({type:Boolean})],tt.prototype,"_hasImageContent",void 0);Bt([Z()],tt.prototype,"imageContent",void 0);tt=Bt([U({tag:"ui5-li",template:IC,dependencies:[...Xm.dependencies,Ut,$C]})],tt);tt.define();const Pu=tt;function eS(t,e,n){return p`<div class="${N(this.classes.wrapper)}"><span id="${l(this._id)}-hiddenText" class="ui5-hidden-text">${l(this.tokenizerLabel)}</span><div class="${N(this.classes.content)}" @ui5-delete="${l(this._delete)}" @click="${this._click}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @ui5-select="${l(this.onTokenSelect)}" role="listbox" aria-labelledby="${l(this._id)}-hiddenText">${X(this.tokens,(i,o)=>i._id||o,(i,o)=>tS.call(this,t,e,n,i,o))}</div>${this.showNMore?nS.call(this,t,e,n):void 0}</div>`}function tS(t,e,n,i,o){return p`<slot name="${l(i._individualSlot)}"></slot>`}function nS(t,e,n){return p`<span @click="${this._openMorePopoverAndFireEvent}" class="ui5-tokenizer-more-text" part="n-more-text">${l(this._nMoreText)}</span>`}function iS(t,e,n){return n?p`<${v("ui5-responsive-popover",e,n)} tokenizer-popover="true" style=${z(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}"><div slot="header" class="ui5-responsive-popover-header" style="${z(this.styles.popoverHeader)}">${this._isPhone?md.call(this,t,e,n):void 0}${this.hasValueState?void 0:gd.call(this,t,e,n)}</div><${v("ui5-list",e,n)} class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${l(this.itemDelete)}>${X(this._tokens,(i,o)=>i._id||o,(i,o)=>bd.call(this,t,e,n,i,o))}</${v("ui5-list",e,n)}>${this._isPhone?yd.call(this,t,e,n):void 0}</${v("ui5-responsive-popover",e,n)}>`:p`<ui5-responsive-popover tokenizer-popover="true" style=${z(this.styles.popover)} ?content-only-on-desktop="${this.hasValueState}" hide-arrow placement-type="Bottom" horizontal-align="Left" @before-close=${this.handleBeforeClose} @before-open="${this.handleBeforeOpen}"><div slot="header" class="ui5-responsive-popover-header" style="${z(this.styles.popoverHeader)}">${this._isPhone?md.call(this,t,e,n):void 0}${this.hasValueState?void 0:gd.call(this,t,e,n)}</div><ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${l(this.itemDelete)}>${X(this._tokens,(i,o)=>i._id||o,(i,o)=>bd.call(this,t,e,n,i,o))}</ui5-list>${this._isPhone?yd.call(this,t,e,n):void 0}</ui5-responsive-popover>`}function md(t,e,n){return n?p`<div class="row" style="${z(this.styles.popoverHeaderTitle)}"><${v("ui5-title",e,n)} level="H5" class="ui5-responsive-popover-header-text">${l(this.morePopoverTitle)}</${v("ui5-title",e,n)}><${v("ui5-button",e,n)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></${v("ui5-button",e,n)}></div>`:p`<div class="row" style="${z(this.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">${l(this.morePopoverTitle)}</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closeMorePopover}"></ui5-button></div>`}function gd(t,e,n){return n?p`<div class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverValueStateMessage)}"><${v("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></${v("ui5-icon",e,n)}>${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>vd.call(this,t,e,n,i,o))}</div>`:p`<div class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></ui5-icon>${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>vd.call(this,t,e,n,i,o))}</div>`}function vd(t,e,n,i,o){return p`${l(i)}`}function bd(t,e,n,i,o){return n?p`<${v("ui5-li",e,n)} .tokenRef=${l(i)}>${l(i.text)}</${v("ui5-li",e,n)}>`:p`<ui5-li .tokenRef=${l(i)}>${l(i.text)}</ui5-li>`}function yd(t,e,n){return n?p`<div slot="footer" class="ui5-responsive-popover-footer"><${v("ui5-button",e,n)} id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</${v("ui5-button",e,n)}></div>`:p`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button id="ui5-tokenizer-dialog-confirm-btn" design="Emphasized" @click="${this.closeMorePopover}">OK</ui5-button></div>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const oS={packageName:"@ui5/webcomponents",fileName:"themes/Tokenizer.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host {
	display: inline-block;
	box-sizing: border-box;
	border: 1px solid black;
	height: 2.25rem;
}

.ui5-tokenizer-root {
	height: 100%;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	box-sizing: border-box;
	font-family: "72override", var(--sapFontFamily);
}

.ui5-tokenizer-no-padding {
	padding: 0;
}

.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper {
	overflow: hidden;
}

.ui5-tokenizer--token--wrapper {
	display: inline-flex;
	align-items: center;
	box-sizing: border-box;
	height: 100%;
}

:host([expanded]) .ui5-tokenizer--content {
	display: inline-flex;
	white-space: nowrap;
	overflow: hidden;
}

.ui5-tokenizer--content {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	overflow: hidden;
	padding-inline-start: var(--_ui5_tokenizer_padding);
	height: 100%;
	box-sizing: border-box;
}

:host([_tokens-count="1"]) .ui5-tokenizer--content {
	padding-inline-end: 4px;
	box-sizing: border-box;
	max-width: 100%;
	flex: 1;
}

.ui5-tokenizer-more-text {
	display: inline-block;
	margin-inline-start: .25rem;
	cursor: pointer;
	white-space: nowrap;
	font-size: var(--sapFontSize);
	font-weight: normal;
	color: var(--_ui5_tokenizer_n_more_text_color);
}
`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const rS={packageName:"@ui5/webcomponents",fileName:"themes/TokenizerPopover.css",content:`[ui5-responsive-popover]::part(header),
[ui5-responsive-popover]::part(content) {
	padding: 0;
}

#ui5-tokenizer-dialog-confirm-btn {
	height: 100%;
	min-width: 4rem;
}

[ui5-responsive-popover] {
	margin-top: var(--_ui5_tokenizer-popover_offset);
	margin-inline-start: calc(-1 * var(--_ui5_tokenizer_padding));
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Lu={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopoverCommon.css",content:`/* styles for input in dialog */
.input-root-phone {
	flex: 1;
	position: relative;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
}
.input-root-phone [inner-input] {
	padding: 0 0.5rem;
	width: 100%;
	height: 100%;
}
.input-root-phone [inner-input]:focus {
	background-color: var(--sapField_Focus_Background);
}
.input-root-phone:focus-within:before {
	content: '';
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);

}
.input-root-phone [value-state="Error"] [input-icon][data-ui5-compact-size],
.input-root-phone [value-state="Success"] [input-icon][data-ui5-compact-size],
.input-root-phone [value-state="Warning"] [input-icon][data-ui5-compact-size] {
	padding: .1875rem .5rem
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: normal;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	line-height: normal;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: 3rem;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
[inner-input]::selection,
[inner-input]::-moz-selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
[inner-input]::-webkit-input-placeholder {
	font-style: italic;
	color: var(--sapField_PlaceholderTextColor);
}
[inner-input]::-moz-placeholder {
	font-style: italic;
	color: var(--sapField_PlaceholderTextColor);
}
.input-root-phone[value-state]:not([value-state="None"]) {
	border-width: var(--_ui5_input_state_border_width);
}
.input-root-phone[value-state="Error"] [inner-input],
.input-root-phone[value-state="Warning"] [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
}
.input-root-phone[value-state="Error"] [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
.input-root-phone[value-state="Error"]:not([readonly]) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
}
.input-root-phone[value-state="Error"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
.input-root-phone[value-state="Error"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
.input-root-phone[value-state="Error"]:not([readonly]):not([disabled]),
.input-root-phone[value-state="Warning"]:not([readonly]):not([disabled]),
.input-root-phone[value-state="Information"]:not([readonly]):not([disabled]) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
.input-root-phone[value-state="Warning"]:not([readonly]) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
}
.input-root-phone[value-state="Warning"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
.input-root-phone[value-state="Warning"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
.input-root-phone[value-state="Success"]:not([readonly]) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
}
.input-root-phone[value-state="Success"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
.input-root-phone[value-state="Success"]:not([readonly]):focus-within:before {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
.input-root-phone[value-state="Information"]:not([readonly]) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
}
.input-root-phone[value-state="Information"]:not([readonly]) [inner-input]:focus {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
/* MultiComboBox & MultiInput specific */
.ui5-multi-combobox-toggle-button {
	margin-left: 0.5rem;
}
.ui5-responsive-popover-header {
	width: 100%;
	min-height: 2.5rem;
	display: flex;
	flex-direction: column;
}
.ui5-responsive-popover-header-text {
	width: calc(100% - var(--_ui5_button_base_min_width));
}
/* Header and footer layout */
.ui5-responsive-popover-header .row {
	box-sizing: border-box;
	padding: 0.25rem 1rem;
	min-height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: var(--sapFontHeader5Size);
}
.ui5-responsive-popover-footer {
	display: flex;
	justify-content: flex-end;
	padding: 0.25rem 0;
	width: 100%;
}
.ui5-responsive-popover-close-btn {
	position: absolute;
	right: 1rem;
}

`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Ou={packageName:"@ui5/webcomponents",fileName:"themes/ValueStateMessage.css",content:`.ui5-valuestatemessage-popover {
	border-radius: var(--_ui5_value_state_message_popover_border_radius);
	box-shadow: var(--_ui5_value_state_message_popover_box_shadow);
}

.ui5-input-value-state-message-icon {
	width: var(--_ui5_value_state_message_icon_width);
	height: var(--_ui5_value_state_message_icon_height);
	display: var(--_ui5_input_value_state_icon_display);
	position: absolute;
	padding-right: 0.375rem;
}

.ui5-valuestatemessage-root .ui5-input-value-state-message-icon {
	left: var(--_ui5_input_value_state_icon_offset);
}

.ui5-input-value-state-message-icon[name="error"] {
	color: var(--sapNegativeElementColor);
}

.ui5-input-value-state-message-icon[name="alert"] {
	color: var(--sapCriticalElementColor);
}

.ui5-input-value-state-message-icon[name="success"] {
	color: var(--sapPositiveElementColor);
}

.ui5-input-value-state-message-icon[name="information"] {
	color: var(--sapInformativeElementColor);
}

.ui5-valuestatemessage-root {
	box-sizing: border-box;
	display: inline-block;
	color: var(--sapTextColor);
	font-size: var(--sapFontSmallSize);
	font-family: "72override", var(--sapFontFamily);
	height: auto;
	padding: var(--_ui5_value_state_message_padding);
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 6.25rem;
	border: var(--_ui5_value_state_message_border);
}

[ui5-responsive-popover] .ui5-valuestatemessage-header, [ui5-popover] .ui5-valuestatemessage-header  {
	min-height: 2rem;
}

[ui5-responsive-popover] .ui5-valuestatemessage-header {
	padding: var(--_ui5_value_state_header_padding);
	border: var(--_ui5_value_state_header_border);
	border-bottom: var(--_ui5_value_state_header_border_bottom);
}

.ui5-valuestatemessage--success {
	background: var(--sapSuccessBackground);
}

.ui5-valuestatemessage--warning {
	background: var(--sapWarningBackground);
}

.ui5-valuestatemessage--error {
	background: var(--sapErrorBackground);
}

.ui5-valuestatemessage--information {
	background: var(--sapInformationBackground);
}

.ui5-responsive-popover-header[focused], .ui5-responsive-popover-header:focus {
	outline-offset: var(--_ui5_value_state_header_offset);
	outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
}

.ui5-valuestatemessage-popover::part(header),
.ui5-valuestatemessage-popover::part(content) {
	padding: 0;
}

.ui5-valuestatemessage-popover::part(header),
.ui5-valuestatemessage-popover::part(footer) {
	min-height: 0;
}

.ui5-valuestatemessage-popover::part(header),
.ui5-suggestions-popover-with-value-state-header::part(header) {
	margin-bottom: 0;
}
`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const Jm={packageName:"@ui5/webcomponents",fileName:"themes/Suggestions.css",content:`.ui5-suggestions-popover {
	box-shadow: var(--sapContent_Shadow1);
}

.ui5-suggestions-popover::part(header),
.ui5-suggestions-popover::part(content) {
	padding: 0;
}

.ui5-suggestions-popover::part(footer) {
	padding: 0 1rem;
}

.ui5-suggestions-popover [ui5-li],
.ui5-suggestions-popover [ui5-li-suggestion-item] {
	height: var(--_ui5_list_item_dropdown_base_height);
}

.ui5-suggestions-popover [ui5-li]::part(icon),
.ui5-suggestions-popover [ui5-li-suggestion-item]::part(icon) {
	color: var(--sapList_TextColor);
}

.input-root-phone.native-input-wrapper {
	display: contents;
}

.input-root-phone.native-input-wrapper::before {
	display: none;
}

.native-input-wrapper .ui5-input-inner-phone {
	margin: 0;
}`};var Pt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},qt,qa;(function(t){t.cut="cut",t.copy="copy"})(qa||(qa={}));let nt=qt=class extends Q{_handleResize(){this._nMoreCount=this.overflownTokens.length}constructor(){super(),this._resizeHandler=this._handleResize.bind(this),this._itemNav=new $u(this,{currentIndex:-1,getItemsCallback:this._getVisibleTokens.bind(this)}),this._scrollEnablement=new sx(this)}onBeforeRendering(){this._nMoreCount=this.overflownTokens.length,this._tokensCount=this._getTokens().length,this._tokens.forEach(e=>{e.singleToken=this._tokens.length===1}),this._tokens.length||this.closeMorePopover()}onEnterDOM(){At.register(this.contentDom,this._resizeHandler)}onExitDOM(){At.deregister(this.contentDom,this._resizeHandler)}async _openMorePopoverAndFireEvent(){this.preventPopoverOpen||await this.openMorePopover(),this.fireEvent("show-more-items-press")}async openMorePopover(){(await this.getPopover()).showAt(this.morePopoverOpener||this)}_getTokens(){return this.getSlottedNodes("tokens")}get _tokens(){return this.getSlottedNodes("tokens")}_onmousedown(e){if(e.target.hasAttribute("ui5-token")){const n=e.target;n.toBeDeleted||this._itemNav.setCurrentItem(n)}}onTokenSelect(){const e=this._getTokens();e.length===1&&e[0].isTruncatable&&(e[0].selected?this.openMorePopover():this.closeMorePopover())}_getVisibleTokens(){return this.disabled?[]:this._tokens.filter((e,n)=>n<this._tokens.length-this._nMoreCount)}async onAfterRendering(){this._getTokens().length||(await this.getPopover()).close(),this._scrollEnablement.scrollContainer=this.expanded||!this.narrowContentDom?this.expandedContentDom:this.narrowContentDom,this.expanded&&(this._expandedScrollWidth=this.expandedContentDom.scrollWidth,this.scrollToEnd()),this.expanded||this.scrollToStart()}_delete(e){const n=e.target;if(!e.detail){this._tokenClickDelete(e,n),this._getTokens().length&&this.closeMorePopover();return}this._selectedTokens.length?this._selectedTokens.forEach(i=>this.deleteToken(i,e.detail.backSpace)):this.deleteToken(n,e.detail.backSpace)}_tokenClickDelete(e,n){const i=this._getVisibleTokens(),o=e.target,r=n?i.indexOf(n):i.indexOf(o),a=r===i.length-1?r-1:r+1,s=i[a];this._handleCurrentItemAfterDeletion(s),this.fireEvent("token-delete",{ref:n||o})}_handleCurrentItemAfterDeletion(e){e&&!Y()&&(this._itemNav.setCurrentItem(e),setTimeout(()=>{e.focus()},0))}deleteToken(e,n){const i=this._getVisibleTokens(),o=i.indexOf(e);let r=o===i.length-1?o-1:o+1;const a=i.filter(c=>!c.selected);n?r=o===0?o+1:o-1:r=o===i.length-1?o-1:o+1;let s=i[r];if(a.length>1)for(;s&&s.selected;)s=n?i[--r]:i[++r];else s=a[0];this._handleCurrentItemAfterDeletion(s),this.fireEvent("token-delete",{ref:e})}async itemDelete(e){const n=e.detail.item.tokenRef;if(this._getTokens().length===1&&this._getTokens()[0].isTruncatable){const i=await this.getPopover();i.addEventListener("ui5-after-close",()=>{this.fireEvent("token-delete",{ref:n})},{once:!0}),i.close()}else this.fireEvent("token-delete",{ref:n})}handleBeforeClose(){Y()&&this._getTokens().forEach(e=>{e.selected=!1})}handleBeforeOpen(){this.fireEvent("before-more-popover-open")}_onkeydown(e){if(Ki(e)&&e.preventDefault(),H(e)||hu(e))return e.preventDefault(),this._handleTokenSelection(e,!1);Wl(e)&&this._handleHomeShift(e),jl(e)&&this._handleEndShift(e),this._handleItemNavigation(e,this._tokens)}_handleItemNavigation(e,n){const i=!!(e.metaKey||e.ctrlKey),o=e.target;if(Hl(e)||Ul(e)||jo(e)||Ro(e))return this._handleArrowCtrl(e,o,n,Ul(e)||jo(e));if(Vl(e)||Oa(e)||hn(e)||Zt(e)||ay(e)||V_(e))return e.preventDefault(),this._handleArrowShift(o,n,Oa(e)||V_(e)||Zt(e));if(Ft(e)||Mn(e)||bo(e)||ki(e))return e.preventDefault(),this._handleHome(n,Mn(e)||ki(e));if(i&&e.key.toLowerCase()==="a")return e.preventDefault(),this._toggleTokenSelection(n);if(Jt(e)||Et(e)||Ct(e)||ct(e)){const r=this._calcNextTokenIndex(this._tokens.find(a=>a.focused),n,Et(e)||ct(e));this._scrollToToken(n[r])}}_handleHome(e,n){if(!e||!e.length)return-1;const i=n?e.length-1:0;e[i].focus(),this._itemNav.setCurrentItem(e[i])}_handleHomeShift(e){const n=this.tokens,i=e.target,o=n.indexOf(i);n.filter((r,a)=>a<=o).forEach(r=>{r.selected=!0}),n[0].focus(),this._itemNav.setCurrentItem(n[0])}_handleEndShift(e){const n=this.tokens,i=e.target,o=n.indexOf(i);n.filter((r,a)=>a>=o).forEach(r=>{r.selected=!0}),n[n.length-1].focus(),this._itemNav.setCurrentItem(n[n.length-1])}_calcNextTokenIndex(e,n,i){if(!n.length)return-1;const o=n.indexOf(e);let r=i?o+1:o-1;return r>=n.length&&(r=n.length-1),r<0&&(r=0),r}_handleArrowCtrl(e,n,i,o){const r=this._calcNextTokenIndex(n,i,o);e.preventDefault(),r!==-1&&(setTimeout(()=>{i[r].focus()},0),this._scrollToToken(i[r]),this._itemNav.setCurrentItem(i[r]))}_handleArrowShift(e,n,i){const o=n.indexOf(e),r=i?o+1:o-1;r===-1||r===n.length||(e.selected=!0,n[r].selected=!0,setTimeout(()=>{n[r].focus()},0),this._scrollToToken(n[r]),this._itemNav.setCurrentItem(n[r]))}_click(e){this._handleTokenSelection(e)}_toggleTokenSelection(e){if(!e||!e.length)return;const n=e.every(i=>i.selected);e.forEach(i=>{i.selected=!n})}_handleTokenSelection(e,n=!0){const i=e.target;i.hasAttribute("ui5-token")&&(n?this._tokens:[]).forEach(r=>{r!==i&&(r.selected=!1)})}_fillClipboard(e,n){const i=n.filter(r=>r.selected).map(r=>r.text).join(`\r
`),o=r=>{r.clipboardData&&r.clipboardData.setData("text/plain",i),r.preventDefault()};document.addEventListener(e,o),document.execCommand(e),document.removeEventListener(e,o)}scrollToStart(){this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(0,0)}scrollToEnd(){const e=this.expandedContentDom&&(this.effectiveDir!=="rtl"?this.expandedContentDom.scrollWidth:-this.expandedContentDom.scrollWidth);this._scrollEnablement.scrollContainer&&this._scrollEnablement.scrollTo(e,0,5,10)}_scrollToToken(e){if(!this.expandedContentDom)return;const n=e.getBoundingClientRect(),i=this.expandedContentDom.getBoundingClientRect();n.left<i.left?this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft-(i.left-n.left+5),0):n.right>i.right&&this._scrollEnablement.scrollTo(this.expandedContentDom.scrollLeft+(n.right-i.right+5),0)}async closeMorePopover(){(await this.getPopover()).close(!1,!1,!0)}get _nMoreText(){return this._getVisibleTokens().length?qt.i18nBundle.getText(Ry,this._nMoreCount):qt.i18nBundle.getText(Xy,this._nMoreCount)}get showNMore(){return!this.expanded&&this.showMore&&!!this.overflownTokens.length}get contentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer--content")}get expandedContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-expanded--content")}get narrowContentDom(){return this.shadowRoot.querySelector(".ui5-tokenizer-nmore--content")}get tokenizerLabel(){return qt.i18nBundle.getText(Yy)}get morePopoverTitle(){return qt.i18nBundle.getText(Gy)}get overflownTokens(){return this.contentDom?(this._getTokens().forEach(e=>{e.overflows=!1}),this._getTokens().filter(e=>{const n=this.contentDom.getBoundingClientRect(),i=e.getBoundingClientRect(),o=Number(i.right.toFixed(2)),r=Number(n.right.toFixed(2)),a=Number(i.left.toFixed(2)),s=Number(n.left.toFixed(2));return e.overflows=!this.expanded&&(a<s||o>r),e.overflows})):[]}get hasValueState(){return this.valueState===k.None||this.valueState===k.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get _valueStateMessageIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==k.None?e[this.valueState]:""}get _isPhone(){return Y()}get _selectedTokens(){return this._getTokens().filter(e=>e.selected)}get classes(){return{wrapper:{"ui5-tokenizer-root":!0,"ui5-tokenizer-nmore--wrapper":this.showMore,"ui5-tokenizer-no-padding":!this._getTokens().length},content:{"ui5-tokenizer--content":!0,"ui5-tokenizer-expanded--content":!this.showNMore,"ui5-tokenizer-nmore--content":this.showNMore},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-responsive-popover-header":!0,"ui5-valuestatemessage--success":this.valueState===k.Success,"ui5-valuestatemessage--error":this.valueState===k.Error,"ui5-valuestatemessage--warning":this.valueState===k.Warning,"ui5-valuestatemessage--information":this.valueState===k.Information}}}get styles(){return{popover:{"min-width":this.popoverMinWidth?`${this.popoverMinWidth}px`:""},popoverValueStateMessage:{width:this.popoverMinWidth&&!Y()?`${this.popoverMinWidth}px`:"100%","min-height":"2rem"},popoverHeader:{"min-height":"2rem"},popoverHeaderTitle:{"justify-content":"left"}}}_tokensCountText(){const e=this._getTokens().length;return e===0?qt.i18nBundle.getText(Wy):e===1?qt.i18nBundle.getText(jy):qt.i18nBundle.getText(qy,e)}_focusLastToken(){if(this.tokens.length===0)return;const e=this.tokens[this.tokens.length-1];e.focus(),this._itemNav.setCurrentItem(e)}static async onDefine(){qt.i18nBundle=await ie("@ui5/webcomponents")}async getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}};Pt([d({type:Boolean})],nt.prototype,"showMore",void 0);Pt([d({type:Boolean})],nt.prototype,"disabled",void 0);Pt([d({type:Boolean})],nt.prototype,"preventPopoverOpen",void 0);Pt([d({type:Boolean})],nt.prototype,"expanded",void 0);Pt([d({type:Object})],nt.prototype,"morePopoverOpener",void 0);Pt([d({validator:Se})],nt.prototype,"popoverMinWidth",void 0);Pt([d({type:k,defaultValue:k.None})],nt.prototype,"valueState",void 0);Pt([d({validator:Se})],nt.prototype,"_nMoreCount",void 0);Pt([d({validator:Se})],nt.prototype,"_tokensCount",void 0);Pt([Z({type:HTMLElement,default:!0,individualSlots:!0})],nt.prototype,"tokens",void 0);Pt([Z()],nt.prototype,"valueStateMessage",void 0);nt=qt=Pt([U({tag:"ui5-tokenizer",languageAware:!0,renderer:he,template:eS,styles:oS,staticAreaStyles:[Lu,Ou,Jm,rS],staticAreaTemplate:iS,dependencies:[Du,Bu,Pu,Wm,Oi]}),I("token-delete",{detail:{ref:{type:HTMLElement}}}),I("show-more-items-press",{detail:{ref:{type:HTMLElement}}}),I("before-more-popover-open",{detail:{}})],nt);nt.define();const aS=nt,sS="sys-cancel",Km="M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-32 0q0-47-17.5-87.5t-48-71-71.5-48T256 32t-87 18-71.5 48.5-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5q47 0 88-17.5t71-47.5 47.5-71 17.5-88zm-186-7q-5 3-1 9l89 89q9 8 0 17l-16 17q-8 4-9 4t-9-4l-89-89q-1-2-4-2-4 0-5 2l-88 89q-6 4-9 4-1 0-9-4l-16-17q-8-9 0-17l88-89q5-5 0-9l-88-89q-8-9 0-17l16-17q4-4 9-4t9 4l88 89q2 2 5 2 2 0 4-2l89-89q4-4 9-4t9 4l16 17q9 8 0 17z",lS=!1,cS="SAP-icons-v4",uS="@ui5/webcomponents-icons";G(sS,{pathData:Km,ltr:lS,collection:cS,packageName:uS});const _S="sys-cancel",eg="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 461q42 0 79.5-16t65.5-44 44-65.5 16-79.5-16-79.5-44-65.5-65.5-44T256 51t-79.5 16-65.5 44-44 65.5T51 256t16 79.5 44 65.5 65.5 44 79.5 16zm70-301q11 0 18.5 7.5T352 186t-7 18l-53 52 53 52q7 7 7 18t-7.5 18.5T326 352q-10 0-18-8l-52-52-52 52q-8 8-18 8-11 0-18.5-7.5T160 326q0-10 8-18l52-52-52-52q-8-8-8-18 0-11 7.5-18.5T186 160t18 7l52 53 52-53q7-7 18-7z",dS=!1,hS="SAP-icons-v5",pS="@ui5/webcomponents-icons";G(_S,{pathData:eg,ltr:dS,collection:hS,packageName:pS});Ue();function fS(t,e,n){return p`<div tabindex="${l(this._tabIndex)}" @click="${this._handleSelect}" @focusin="${this._focusin}" @focusout="${this._focusout}" @keydown="${this._keydown}" class="ui5-token--wrapper" role="option" aria-selected="${l(this.selected)}"><span class="ui5-token--text">${l(this.text)}</span>${this.readonly?void 0:mS.call(this,t,e,n)}</div>`}function mS(t,e,n){return p`<div class="ui5-token--icon">${this.closeIcon.length?gS.call(this,t,e,n):vS.call(this,t,e,n)}</div>`}function gS(t,e,n){return p`<slot name="closeIcon" @click="${this._delete}"></slot>`}function vS(t,e,n){return n?p`<${v("ui5-icon",e,n)} name="${l(this.iconURI)}" accessible-name="${l(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></${v("ui5-icon",e,n)}>`:p`<ui5-icon name="${l(this.iconURI)}" accessible-name="${l(this.tokenDeletableText)}" show-tooltip @click="${this._delete}"></ui5-icon>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const bS={packageName:"@ui5/webcomponents",fileName:"themes/Token.css",content:`:host {
	display: inline-block;
	background: var(--_ui5_token_background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);
	border-radius: var(--_ui5_token_border_radius);
	color: var(--_ui5_token_text_color);
	height: var(--_ui5_token_height);
	box-sizing: border-box;
}

:host(:not([single-token])) {
	margin-inline-end: var(--_ui5_token_right_margin);
}

:host([overflows]) {
	display: none;
}

:host(:not([readonly]):hover) {
	background: var(--sapButton_Hover_Background);
	border-color: var(--_ui5_token_hover_border_color);
}

:host([selected]:not([readonly])) {
	color: var(--sapButton_Selected_TextColor);
}

:host([selected]:not([readonly])) {
	background: var(--sapButton_Selected_Background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor);
}

:host([selected]:not([readonly])) .ui5-token--wrapper {
	border-bottom: var(--_ui5_token_selected_internal_border_bottom);
	border-bottom-left-radius: var(--_ui5_token_selected_internal_border_bottom_radius);
	border-bottom-right-radius: var(--_ui5_token_selected_internal_border_bottom_radius);
}

:host([selected]:not([readonly]):hover) {
	background: var(--sapButton_Selected_Hover_Background);
	border-color: var(--_ui5_token_selected_hover_border_color);
}

:host([readonly]) {
	background: var(--_ui5_token_readonly_background);
	border-color: var(--sapField_ReadOnly_BorderColor);
	color: var(--_ui5_token_readonly_color);
}

:host([readonly]) .ui5-token--wrapper {
	padding: var(--_ui5_token_readonly_padding);
}

:host([selected]) .ui5-token--wrapper:focus {
	outline: var(--_ui5_token_selected_focus_outline);
}

:host([selected]:not([readonly])) .ui5-token--text,
:host([selected]:not([readonly])) .ui5-token--icon {
	top: var(--_ui5_token_text_icon_top);
	position: relative;
}

:host([focused][selected]:not([readonly]):not(:hover)) {
	background: var(--sapButton_Selected_Background);
	color: var(--sapButton_Selected_TextColor);
	border: var(--_ui5_token_focused_selected_border);
}

.ui5-token--wrapper {
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	cursor: default;
	padding-inline-start: var(--_ui5_token_left_padding);
	box-sizing: border-box;
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	user-select: none;
}

.ui5-token--wrapper {
	position: relative;
}

:host([selected]) .ui5-token--wrapper {
	font-family: var(--_ui5_token_selected_text_font_family);
}

.ui5-token--wrapper:focus {
	outline-offset: var(--_ui5_token_outline_offset);
	outline: var(--_ui5_token_focus_outline);
}

.ui5-token--wrapper:focus::after {
	content: var(--ui5_token_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_token_focus_outline_border_radius);
	top: var(--_ui5_token_focus_offset);
	bottom: var(--_ui5_token_focus_offset);
	left: var(--_ui5_token_focus_offset);
	right: var(--_ui5_token_focus_offset);
}

:host([focused][selected]:not([readonly])) .ui5-token--wrapper:focus::after {
	bottom: var(--_ui5_token_selected_focused_offset_bottom)
}

.ui5-token--text {
	white-space: nowrap;
}

.ui5-token--icon {
	display: flex;
}

:host([selected]) .ui5-token--icon > [ui5-icon],
:host([selected]) ::slotted([ui5-icon]) {
	color: var(--sapButton_Selected_TextColor);
}

.ui5-token--icon > [ui5-icon],
::slotted([ui5-icon]) {
	color: inherit;
	cursor: pointer;
	width: var(--_ui5_token_icon_size);
	height: var(--_ui5_token_icon_size);
	padding: var(--_ui5_token_icon_padding);
	color: var(--sapContent_IconColor);
}

:host([single-token]) {
	max-width: 100%;
}

:host([single-token]) .ui5-token--wrapper {
	max-width: 100%;
}

:host([single-token]) .ui5-token--text {
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
}
`};var on=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},wa;let gt=wa=class extends Q{_handleSelect(){this.toBeDeleted||(this.selected=!this.selected,this.fireEvent("select"))}_focusin(){this.focused=!0}_focusout(){this.focused=!this.focused}_delete(){this.toBeDeleted=!0,this.fireEvent("delete")}_keydown(e){const n=gf(e),i=fu(e);!this.readonly&&(n||i)&&(e.preventDefault(),this.fireEvent("delete",{backSpace:n,delete:i})),(H(e)||hu(e))&&(e.preventDefault(),this._handleSelect())}onBeforeRendering(){this.toBeDeleted=!1}get tokenDeletableText(){return wa.i18nBundle.getText(Vy)}get iconURI(){return $r().includes("sap_belize")?"sys-cancel":"decline"}get textDom(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-token--text")}get isTruncatable(){return this.textDom?Math.ceil(this.textDom.getBoundingClientRect().width)<Math.ceil(this.textDom.scrollWidth):!1}static async onDefine(){wa.i18nBundle=await ie("@ui5/webcomponents")}};on([d()],gt.prototype,"text",void 0);on([d({type:Boolean})],gt.prototype,"readonly",void 0);on([d({type:Boolean})],gt.prototype,"selected",void 0);on([d({type:Boolean})],gt.prototype,"overflows",void 0);on([d({type:Boolean})],gt.prototype,"singleToken",void 0);on([d({type:Boolean})],gt.prototype,"focused",void 0);on([d({type:Boolean})],gt.prototype,"toBeDeleted",void 0);on([d({defaultValue:"-1",noAttribute:!0})],gt.prototype,"_tabIndex",void 0);on([Z()],gt.prototype,"closeIcon",void 0);gt=wa=on([U({tag:"ui5-token",languageAware:!0,renderer:he,template:fS,styles:bS,dependencies:[Ut]}),I("select"),I("delete",{detail:{backSpace:{type:Boolean},delete:{type:Boolean}}})],gt);gt.define();const yS=gt;function wS(t,e,n){return p`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  aria-pressed="${l(this.pressed)}"  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${l(this.tabIndexValue)} aria-expanded="${l(this.accessibilityAttributes.expanded)}" aria-controls="${l(this.accessibilityAttributes.controls)}" aria-haspopup="${l(this.accessibilityAttributes.hasPopup)}" aria-label="${l(this.ariaLabelText)}" title="${l(this.buttonTitle)}" part="button">${this.icon?kS.call(this,t,e,n):void 0}<span id="${l(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?xS.call(this,t,e,n):void 0}</button> `}function kS(t,e,n){return n?p`<${v("ui5-icon",e,n)} class="ui5-button-icon" name="${l(this.icon)}" accessible-role="${l(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${v("ui5-icon",e,n)}>`:p`<ui5-icon class="ui5-button-icon" name="${l(this.icon)}" accessible-role="${l(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function xS(t,e,n){return p`<span class="ui5-hidden-text">${l(this.buttonTypeText)}</span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const TS={packageName:"@ui5/webcomponents",fileName:"themes/ToggleButton.css",content:`:host(:not([hidden])) {
	display: inline-block;
}

:host([design="Emphasized"]:not([pressed])) {
	text-shadow: var(--_ui5_toggle_button_emphasized_text_shadow);
}

:host([pressed]),
:host([design="Default"][pressed]),
:host([design="Transparent"][pressed]),
:host([design="Emphasized"][pressed]) {
	background: var(--sapButton_Selected_Background);
	border-color: var(--sapButton_Selected_BorderColor);
	color: var(--sapButton_Selected_TextColor);
	text-shadow: none;
}

:host([pressed]:hover),
:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),
:host([design="Default"][pressed]:hover),
:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),
:host([design="Transparent"][pressed]:hover),
:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),
:host([design="Emphasized"][pressed]:hover),
:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Selected_Hover_Background);
	border-color: var(--sapButton_Selected_Hover_BorderColor);
	color: var(--sapButton_Selected_TextColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
}

:host([active][focused]),
:host([design="Default"][active][focused]),
:host([design="Transparent"][active][focused]),
:host([design="Emphasized"][active][focused]) {
	background: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Selected_TextColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
}

:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])),
:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),
:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),
:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Selected_Background);
	border-color: var(--sapButton_Selected_BorderColor);
	color: var(--sapButton_Selected_TextColor);
}

:host([design="Negative"][pressed]) {
	background: var(--sapButton_Reject_Selected_Background);
	border-color: var(--sapButton_Reject_Selected_BorderColor);
	color: var(--sapButton_Reject_Selected_TextColor);
}

:host([design="Negative"][active][focused]) {
	background: var(--sapButton_Reject_Active_Background);
	border-color: var(--sapButton_Reject_Active_BorderColor);
	color: var(--sapButton_Reject_Active_TextColor);
}

:host([design="Negative"][pressed][active]:hover),
:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Reject_Selected_Hover_Background);
	border-color: var(--sapButton_Reject_Selected_Hover_BorderColor);
	color: var(--sapButton_Reject_Selected_TextColor);
	box-shadow: var(--sapContent_Negative_Shadow);
}

:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Reject_Selected_Background);
	border-color: var(--sapButton_Reject_Selected_BorderColor);
	color: var(--sapButton_Reject_Selected_TextColor);
}

:host([design="Positive"][pressed]) {
	background: var(--sapButton_Accept_Selected_Background);
	border-color: var(--sapButton_Accept_Selected_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
}

:host([design="Positive"][active][focused]) {
	background: var(--sapButton_Accept_Active_Background);
	border-color: var(--sapButton_Accept_Active_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
}

:host([design="Positive"][pressed][active]:hover),
:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Accept_Selected_Hover_Background);
	border-color: var(--sapButton_Accept_Selected_Hover_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
	box-shadow: var(--sapContent_Positive_Shadow);
}

:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Accept_Selected_Background);
	border-color: var(--sapButton_Accept_Selected_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
}

:host([design="Attention"][pressed]) {
	background: var(--sapButton_Attention_Selected_Background);
	border-color: var(--sapButton_Attention_Selected_BorderColor);
	color: var(--sapButton_Attention_Selected_TextColor);
}

:host([design="Attention"][active][focused]) {
	background: var(--sapButton_Attention_Active_Background);
	border-color: var(--sapButton_Attention_Active_BorderColor);
	color: var(--sapButton_Attention_Active_TextColor);
}

:host([design="Attention"][pressed][active]:hover),
:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Attention_Selected_Hover_Background);
	border-color: var(--sapButton_Attention_Selected_Hover_BorderColor);
	color: var(--sapButton_Attention_Selected_TextColor);
	box-shadow: var(--sapContent_Critical_Shadow);
}

:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Attention_Selected_Background);
	border-color: var(--sapButton_Attention_Selected_BorderColor);
	color: var(--sapButton_Attention_Selected_TextColor);
}
`};var tg=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let _r=class extends Oi{_onclick(){this.pressed=!this.pressed,Ra()&&this.getDomRef().focus()}_onkeyup(e){if(Ki(e)){e.preventDefault();return}super._onkeyup(e)}};tg([d({type:Boolean})],_r.prototype,"pressed",void 0);_r=tg([U({tag:"ui5-toggle-button",template:wS,styles:[Oi.styles,TS]})],_r);_r.define();const CS=_r,SS=/[[\]{}()*+?.\\^$|]/g,$S=t=>t.replace(SS,"\\$&"),ng=(t,e,n)=>{const i=new RegExp(`(^|\\s)${$S(t.toLowerCase())}.*`,"g");return e.filter(o=>{const r=o[n];return i.lastIndex=0,i.test(r.toLowerCase())})},ig=(t,e,n)=>e.filter(i=>i[n].toLowerCase().startsWith(t.toLowerCase())),IS=(t,e,n)=>e.filter(i=>i[n].toLowerCase().includes(t.toLowerCase())),ES=(t,e)=>e,AS=Object.freeze(Object.defineProperty({__proto__:null,Contains:IS,None:ES,StartsWith:ig,StartsWithPerTerm:ng},Symbol.toStringTag,{value:"Module"}));function DS(t,e,n){return n?p`<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="ui5-multi-combobox-hiddenText-nMore" class="ui5-hidden-text">${l(this._tokensCountText)}</span>${this.hasValueState?wd.call(this,t,e,n):void 0}<${v("ui5-tokenizer",e,n)} slot="_beginContent" show-more prevent-popover-open class="ui5-multi-combobox-tokenizer" ?disabled="${this.disabled}" @ui5-show-more-items-press="${l(this._showFilteredItems)}" .morePopoverOpener=${l(this.morePopoverOpener)} .popoverMinWidth=${l(this._inputWidth)} @ui5-token-delete="${l(this._tokenDelete)}" @ui5-before-more-popover-open="${l(this.handleBeforeTokenizerPopoverOpen)}" @focusout="${this._tokenizerFocusOut}" @focusin="${this._tokenizerFocusIn}" @click=${this._click} @keydown="${this._onTokenizerKeydown}" ?expanded="${this._tokenizerExpanded}">${X(this.items,(i,o)=>i._id||o,(i,o)=>kd.call(this,t,e,n,i,o))}</${v("ui5-tokenizer",e,n)}><input id="ui5-multi-combobox-input" .value="${l(this.value)}" inner-input placeholder=${l(this._getPlaceholder)} ?disabled=${this.disabled} ?readonly=${this.readonly} value-state="${l(this.valueState)}" @input="${this._inputLiveChange}" @change=${this._inputChange} @keydown="${this._onkeydown}" // check paste handler @click=${this._click} @focusin=${this.inputFocusIn} @focusout=${this.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${l(this.open)}" aria-autocomplete="both" aria-describedby="${l(this.ariaDescribedByText)}" aria-required="${l(this.required)}" aria-label="${l(this.ariaLabelText)}" data-sap-focus-ref />${this.icon?xd.call(this,t,e,n):void 0}${this.readonly?void 0:Td.call(this,t,e,n)}</div>`:p`<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="ui5-multi-combobox-hiddenText-nMore" class="ui5-hidden-text">${l(this._tokensCountText)}</span>${this.hasValueState?wd.call(this,t,e,n):void 0}<ui5-tokenizer slot="_beginContent" show-more prevent-popover-open class="ui5-multi-combobox-tokenizer" ?disabled="${this.disabled}" @ui5-show-more-items-press="${l(this._showFilteredItems)}" .morePopoverOpener=${l(this.morePopoverOpener)} .popoverMinWidth=${l(this._inputWidth)} @ui5-token-delete="${l(this._tokenDelete)}" @ui5-before-more-popover-open="${l(this.handleBeforeTokenizerPopoverOpen)}" @focusout="${this._tokenizerFocusOut}" @focusin="${this._tokenizerFocusIn}" @click=${this._click} @keydown="${this._onTokenizerKeydown}" ?expanded="${this._tokenizerExpanded}">${X(this.items,(i,o)=>i._id||o,(i,o)=>kd.call(this,t,e,n,i,o))}</ui5-tokenizer><input id="ui5-multi-combobox-input" .value="${l(this.value)}" inner-input placeholder=${l(this._getPlaceholder)} ?disabled=${this.disabled} ?readonly=${this.readonly} value-state="${l(this.valueState)}" @input="${this._inputLiveChange}" @change=${this._inputChange} @keydown="${this._onkeydown}" // check paste handler @click=${this._click} @focusin=${this.inputFocusIn} @focusout=${this.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${l(this.open)}" aria-autocomplete="both" aria-describedby="${l(this.ariaDescribedByText)}" aria-required="${l(this.required)}" aria-label="${l(this.ariaLabelText)}" data-sap-focus-ref />${this.icon?xd.call(this,t,e,n):void 0}${this.readonly?void 0:Td.call(this,t,e,n)}</div>`}function wd(t,e,n){return p`<span id="ui5-multi-combobox-valueStateDesc" class="ui5-hidden-text">${l(this.ariaValueStateHiddenText)}</span>`}function kd(t,e,n,i,o){return p`${i.selected?BS.call(this,t,e,n,i,o):void 0}`}function BS(t,e,n,i,o){return n?p`<${v("ui5-token",e,n)} ?readonly="${this.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${l(i._id)}" part="token-${o}" text="${l(i.text)}"></${v("ui5-token",e,n)}>`:p`<ui5-token ?readonly="${this.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${l(i._id)}" part="token-${o}" text="${l(i.text)}"></ui5-token>`}function xd(t,e,n){return p`<slot name="icon"></slot>`}function Td(t,e,n){return n?p`<${v("ui5-icon",e,n)} name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${this.togglePopoverByDropdownIcon}" @mousedown="${this._onIconMousedown}" @focusin="${this._forwardFocusToInner}" ?pressed="${this.open}" accessible-name="${l(this._iconAccessibleNameText)}"></${v("ui5-icon",e,n)}>`:p`<ui5-icon name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${this.togglePopoverByDropdownIcon}" @mousedown="${this._onIconMousedown}" @focusin="${this._forwardFocusToInner}" ?pressed="${this.open}" accessible-name="${l(this._iconAccessibleNameText)}"></ui5-icon>`}function PS(t,e,n){return n?p`<${v("ui5-responsive-popover",e,n)} placement-type="Bottom" horizontal-align="Left" class="${N(this.classes.popover)}" hide-arrow _disable-initial-focus style="${z(this.styles.suggestionsPopover)}" @ui5-selection-change=${l(this._listSelectionChange)} @ui5-after-close=${l(this._afterClosePicker)} @ui5-before-open=${l(this._beforeOpen)} @ui5-after-open=${l(this._afterOpenPicker)}>${this._isPhone?Cd.call(this,t,e,n):void 0}${this._isPhone?void 0:Ed.call(this,t,e,n)}${this.filterSelected?Bd.call(this,t,e,n):Ld.call(this,t,e,n)}${this._isPhone?Rd.call(this,t,e,n):void 0}</${v("ui5-responsive-popover",e,n)}>${this.hasValueStateMessage?Md.call(this,t,e,n):void 0} `:p`<ui5-responsive-popover placement-type="Bottom" horizontal-align="Left" class="${N(this.classes.popover)}" hide-arrow _disable-initial-focus style="${z(this.styles.suggestionsPopover)}" @ui5-selection-change=${l(this._listSelectionChange)} @ui5-after-close=${l(this._afterClosePicker)} @ui5-before-open=${l(this._beforeOpen)} @ui5-after-open=${l(this._afterOpenPicker)}>${this._isPhone?Cd.call(this,t,e,n):void 0}${this._isPhone?void 0:Ed.call(this,t,e,n)}${this.filterSelected?Bd.call(this,t,e,n):Ld.call(this,t,e,n)}${this._isPhone?Rd.call(this,t,e,n):void 0}</ui5-responsive-popover>${this.hasValueStateMessage?Md.call(this,t,e,n):void 0} `}function Cd(t,e,n){return n?p`<div slot="header" class="ui5-responsive-popover-header" style="${z(this.styles.popoverHeader)}"><div class="row"><span>${l(this._headerTitleText)}</span><${v("ui5-button",e,n)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.handleCancel}"></${v("ui5-button",e,n)}></div><div class="row"><div slot="header" class="input-root-phone" value-state="${l(this.valueState)}"><input .value="${l(this.value)}" inner-input placeholder="${l(this.placeholder)}" value-state="${l(this.valueState)}" @input="${this._inputLiveChange}" @change=${this._inputChange} @keydown=${this._onkeydown} aria-autocomplete="both" /></div><${v("ui5-toggle-button",e,n)} slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${this._showAllItemsButtonPressed} @click="${this.filterSelectedItems}"></${v("ui5-toggle-button",e,n)}></div>${this.hasValueStateMessage?Sd.call(this,t,e,n):void 0}</div></div>`:p`<div slot="header" class="ui5-responsive-popover-header" style="${z(this.styles.popoverHeader)}"><div class="row"><span>${l(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.handleCancel}"></ui5-button></div><div class="row"><div slot="header" class="input-root-phone" value-state="${l(this.valueState)}"><input .value="${l(this.value)}" inner-input placeholder="${l(this.placeholder)}" value-state="${l(this.valueState)}" @input="${this._inputLiveChange}" @change=${this._inputChange} @keydown=${this._onkeydown} aria-autocomplete="both" /></div><ui5-toggle-button slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${this._showAllItemsButtonPressed} @click="${this.filterSelectedItems}"></ui5-toggle-button></div>${this.hasValueStateMessage?Sd.call(this,t,e,n):void 0}</div></div>`}function Sd(t,e,n){return n?p`<div class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverValueStateMessage)}"><${v("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></${v("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?$d.call(this,t,e,n):Id.call(this,t,e,n)}</div>`:p`<div class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?$d.call(this,t,e,n):Id.call(this,t,e,n)}</div>`}function $d(t,e,n){return p`${l(this.valueStateDefaultText)}`}function Id(t,e,n){return p`${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>LS.call(this,t,e,n,i,o))}`}function LS(t,e,n,i,o){return p`${l(i)}`}function Ed(t,e,n){return p`${this.hasValueStateMessage?OS.call(this,t,e,n):void 0}`}function OS(t,e,n){return n?p`<div slot="header" @keydown="${this._onValueStateKeydown}" tabindex="0" class="ui5-responsive-popover-header ${N(this.classes.popoverValueState)}" style=${z(this.styles.popoverValueStateMessage)}><${v("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></${v("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?Ad.call(this,t,e,n):Dd.call(this,t,e,n)}</div>`:p`<div slot="header" @keydown="${this._onValueStateKeydown}" tabindex="0" class="ui5-responsive-popover-header ${N(this.classes.popoverValueState)}" style=${z(this.styles.popoverValueStateMessage)}><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?Ad.call(this,t,e,n):Dd.call(this,t,e,n)}</div>`}function Ad(t,e,n){return p`${l(this.valueStateDefaultText)}`}function Dd(t,e,n){return p`${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>RS.call(this,t,e,n,i,o))}`}function RS(t,e,n,i,o){return p`${l(i)}`}function Bd(t,e,n){return n?p`<${v("ui5-list",e,n)} separators="None" mode="MultiSelect" class="ui5-multi-combobox-all-items-list">${X(this.selectedItems,(i,o)=>i._id||o,(i,o)=>Pd.call(this,t,e,n,i,o))}</${v("ui5-list",e,n)}>`:p`<ui5-list separators="None" mode="MultiSelect" class="ui5-multi-combobox-all-items-list">${X(this.selectedItems,(i,o)=>i._id||o,(i,o)=>Pd.call(this,t,e,n,i,o))}</ui5-list>`}function Pd(t,e,n,i,o){return p`${i.isGroupItem?MS.call(this,t,e,n,i,o):FS.call(this,t,e,n,i,o)}`}function MS(t,e,n,i,o){return n?p`<${v("ui5-li-groupheader",e,n)} data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</${v("ui5-li-groupheader",e,n)}>`:p`<ui5-li-groupheader data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</ui5-li-groupheader>`}function FS(t,e,n,i,o){return n?p`<${v("ui5-li",e,n)} type="${l(this._listItemsType)}" additional-text=${l(i.additionalText)} ?selected=${i.selected} data-ui5-token-id="${l(i._id)}" data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</${v("ui5-li",e,n)}>`:p`<ui5-li type="${l(this._listItemsType)}" additional-text=${l(i.additionalText)} ?selected=${i.selected} data-ui5-token-id="${l(i._id)}" data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</ui5-li>`}function Ld(t,e,n){return n?p`<${v("ui5-list",e,n)} separators="None" mode="MultiSelect" class="ui5-multi-combobox-all-items-list">${X(this._filteredItems,(i,o)=>i._id||o,(i,o)=>Od.call(this,t,e,n,i,o))}</${v("ui5-list",e,n)}>`:p`<ui5-list separators="None" mode="MultiSelect" class="ui5-multi-combobox-all-items-list">${X(this._filteredItems,(i,o)=>i._id||o,(i,o)=>Od.call(this,t,e,n,i,o))}</ui5-list>`}function Od(t,e,n,i,o){return p`${i.isGroupItem?NS.call(this,t,e,n,i,o):zS.call(this,t,e,n,i,o)}`}function NS(t,e,n,i,o){return n?p`<${v("ui5-li-groupheader",e,n)} data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</${v("ui5-li-groupheader",e,n)}>`:p`<ui5-li-groupheader data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</ui5-li-groupheader>`}function zS(t,e,n,i,o){return n?p`<${v("ui5-li",e,n)} type="${l(this._listItemsType)}" additional-text=${l(i.additionalText)} ?selected=${i.selected} data-ui5-token-id="${l(i._id)}" data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</${v("ui5-li",e,n)}>`:p`<ui5-li type="${l(this._listItemsType)}" additional-text=${l(i.additionalText)} ?selected=${i.selected} data-ui5-token-id="${l(i._id)}" data-ui5-stable="${l(i.stableDomRef)}" @keydown="${this._onItemKeydown}">${l(i.text)}</ui5-li>`}function Rd(t,e,n){return n?p`<div slot="footer" class="ui5-responsive-popover-footer"><${v("ui5-button",e,n)} design="Transparent" @click="${this.handleOK}">${l(this._dialogOkButton)}</${v("ui5-button",e,n)}></div>`:p`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this.handleOK}">${l(this._dialogOkButton)}</ui5-button></div>`}function Md(t,e,n){return n?p`<${v("ui5-popover",e,n)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${l(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverHeader)}"><${v("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></${v("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?Fd.call(this,t,e,n):Nd.call(this,t,e,n)}</div></${v("ui5-popover",e,n)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${l(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?Fd.call(this,t,e,n):Nd.call(this,t,e,n)}</div></ui5-popover>`}function Fd(t,e,n){return p`${l(this.valueStateDefaultText)}`}function Nd(t,e,n){return p`${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>HS.call(this,t,e,n,i,o))}`}function HS(t,e,n,i,o){return p`${l(i)}`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const US={packageName:"@ui5/webcomponents",fileName:"themes/MultiComboBox.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	width: var(--_ui5_input_width);
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	margin: var(--_ui5_input_margin_top_bottom) 0;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	font-style: normal;
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
	text-align: start;
	transition: var(--_ui5_input_transition);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
}
:host(:not([readonly])) {
	box-shadow: var(--sapField_Shadow);
}
:host([focused]:not([opened])) {
	border-color: var(--_ui5_input_focused_border_color);
	background-color: var(--sapField_Focus_Background);
}
.ui5-input-focusable-element {
	position: relative;
}
:host([focused]:not([opened])) .ui5-input-focusable-element::after {
	content: var(--ui5_input_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);
}
.ui5-input-root::before {
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	left: 1px;
	bottom: -2px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: var(--_ui5_input_bottom_border_height);
	transition: var(--_ui5_input_transition);
	background-color: var(--_ui5_input_bottom_border_color);
}
.ui5-input-root {
	width: 100%;
	height: 100%;
	position: relative;
	background: transparent;
	display: inline-block;
	outline: none;
	box-sizing: border-box;
	color: inherit;
	transition: border-color .2s ease-in-out;
	border-radius: var(--_ui5_input_border_radius);
	overflow: hidden;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background-color: var(--_ui5-input_disabled_background);
	border-color: var(--_ui5_input_disabled_border_color);
}
:host([disabled]) .ui5-input-root::before,
:host([readonly]) .ui5-input-root::before {
	content: none;
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: inherit;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: var(--_ui5_input_min_width);
	width: 100%;
	text-align: inherit;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	text-align: inherit;
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
.ui5-input-value-state-icon {
	height: 100%;
	display: var(--_ui5-input-value-state-icon-display);
	align-items: center;
}
.ui5-input-value-state-icon > svg {
	margin-right: 8px;
}
[inner-input]::selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
:host([disabled]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([disabled]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
[inner-input]::-webkit-input-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
[inner-input]::-moz-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Error"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-moz-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Success"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
.ui5-input-content {
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	overflow: hidden;
	outline: none;
	background: transparent;
	color: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
:host([value-state="None"]:not([readonly]):hover),
:host(:not([value-state]):not([readonly]):hover) {
	border: var(--_ui5_input_hover_border);
	border-color: var(--_ui5_input_focused_border_color);
	box-shadow: var(--sapField_Hover_Shadow);
	background: var(--sapField_Hover_BackgroundStyle);
	background-color: var(--sapField_Hover_Background);
}
:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),
:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover) {
	box-shadow: none;
}
:host([focused]):not([opened]) .ui5-input-root::before {
	content: none;
}
:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])) {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]) [inner-input],
:host([value-state="Warning"]) [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
	text-indent: var(--_ui5_input_error_warning_text_indent);
}
:host([value-state="Error"]) [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
:host([value-state="Warning"]) [inner-input] {
	font-weight: var(--_ui5_input_warning_font_weight);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
	box-shadow: var(--sapField_InvalidShadow);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
:host([value-state="Error"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5-input-value-state-error-border-botom-color);
}
:host([value-state="Error"]:not([readonly]):not([focused]):hover),
:host([value-state="Error"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--_ui5_input_value_state_error_hover_background);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled])),
:host([value-state="Warning"]:not([readonly]):not([disabled])),
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
	box-shadow: var(--sapField_WarningShadow);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
:host([value-state="Warning"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_warning_border_botom_color);
}
:host([value-state="Warning"]:not([readonly]):not([focused]):hover),
:host([value-state="Warning"]:not([readonly])[focused][opened]:hover)  {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
	box-shadow: var(--sapField_SuccessShadow);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
:host([value-state="Success"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_success_border_botom_color);
}
:host([value-state="Success"]:not([readonly]):not([focused]):hover),
:host([value-state="Success"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
	box-shadow: var(--sapField_InformationShadow);
}
:host([value-state="Information"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
:host([value-state="Information"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_success_information_border_botom_color);
}
:host([value-state="Information"]:not([readonly]):not([focused]):hover),
:host([value-state="Information"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}
/* Input Icon */
.ui5-input-icon-root {
	min-width: var(--_ui5_input_icon_min_width);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* TODO: Remove this after parser is fixed
	-	this statement is transformed to [ui5-multi-combobox] [ui5-icon] which
	affects all icons in the combobox incuding these in the list items
*/
::slotted([ui5-icon][slot="icon"]) {
	align-self: start;
	padding: var(--_ui5_input_custom_icon_padding);
	/* Normalize like libraries overrule the selector, thefore we need !important */
	box-sizing: content-box !important;
}
:host([value-state="Error"]) [input-icon],
:host([value-state="Warning"]) [input-icon]{
	padding: var(--_ui5_input_error_warning_icon_padding);
}
:host([value-state="Information"]) [input-icon] {
	padding: var(--_ui5_input_information_icon_padding);
}
:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),
:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),
:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_error_warning_custom_icon_padding);
}
:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_information_custom_icon_padding);
}
:host([value-state="Error"]) [input-icon]:active,
:host([value-state="Error"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
	color: var(--_ui5_input_icon_error_pressed_color);
}
:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
}
:host([value-state="Warning"]) [input-icon]:active,
:host([value-state="Warning"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
	color: var(--_ui5_input_icon_warning_pressed_color);
}
:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
}
:host([value-state="Information"]) [input-icon]:active,
:host([value-state="Information"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
	color: var(--_ui5_input_icon_information_pressed_color);
}
:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
}
:host([value-state="Success"]) [input-icon]:active,
:host([value-state="Success"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
	color: var(--_ui5_input_icon_success_pressed_color);
}
:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
}
.ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_height);
	padding: 0;
	width: var(--_ui5_input_icon_width);
	min-width: var(--_ui5_input_icon_width);
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}
:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_state_height);
	vertical-align: top;
}
:host([value-state="Success"]) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_success_state_height);
}
[ui5-icon].ui5-input-clear-icon {
	padding: 0;
	color: inherit;
}
/* Chrome, Safari, Edge, Opera */
[inner-input]::-webkit-outer-spin-button,
[inner-input]::-webkit-inner-spin-button {
	-webkit-appearance: inherit;
	margin: inherit;
}
:host {
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
}
:host([tokenizer-available]) {
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)) + var(--_ui5_input_tokenizer_min_width));
}
:host(:not([hidden])) {
	display: inline-block;
}
.ui5-multi-combobox-root {
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: var(--_ui5_input_border_radius);
}
.ui5-multi-combobox-tokenizer {
	min-width: var(--_ui5_input_tokenizer_min_width);
	max-width: calc(100% - 3rem - var(--_ui5-input-icons-count) * var(--_ui5_input_icon_min_width));
	border: none;
	width: auto;
	height: 100%;
}
:host([readonly]) .ui5-multi-combobox-tokenizer::part(n-more-text) {
	color: var(--sapLinkColor);
}
.ui5-multi-combobox-tokenizer::part(n-more-text) {
	padding-inline-end: var(--_ui5_input_inner_space_to_n_more_text);
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
:host([tokenizer-available]) [inner-input] {
	padding-inline-start: var(--_ui5_input_inner_space_to_tokenizer);
}
:host(:not([tokenizer-available])) .ui5-multi-combobox-tokenizer {
	--_ui5_input_tokenizer_min_width: 0px;
	width: var(--_ui5_input_tokenizer_min_width);
}`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const VS={packageName:"@ui5/webcomponents",fileName:"themes/MultiComboBoxPopover.css",content:`.ui5-suggestions-popover .ui5-multi-combobox-all-items-list {
	--_ui5_checkbox_width_height: var(--_ui5_list_item_dropdown_base_height);
}`};var xc;(function(t){t.StartsWithPerTerm="StartsWithPerTerm",t.StartsWith="StartsWith",t.Contains="Contains",t.None="None"})(xc||(xc={}));const zd=xc;var oe=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},Be;let J=Be=class extends Q{constructor(){super(),this._filteredItems=[],this._previouslySelectedItems=[],this.selectedValues=[],this._itemsBeforeOpen=[],this._inputLastValue="",this._valueBeforeOpen="",this._deleting=!1,this._validationTimeout=null,this._handleResizeBound=this._handleResize.bind(this),this.valueBeforeAutoComplete="",this._lastValue="",this.currentItemIdx=-1,this.FormSupport=void 0}onEnterDOM(){At.register(this,this._handleResizeBound)}onExitDOM(){At.deregister(this,this._handleResizeBound)}_handleResize(){this._inputWidth=this.offsetWidth}_inputChange(){this.fireEvent("change")}togglePopover(){var e;this._tokenizer.closeMorePopover(),(e=this.allItemsPopover)==null||e.toggle(this)}togglePopoverByDropdownIcon(){var e;this._shouldFilterItems=!1,(e=this.allItemsPopover)==null||e.toggle(this),this._tokenizer.closeMorePopover()}_showFilteredItems(){this.filterSelected=!0,this._showMorePressed=!0,this.togglePopover()}filterSelectedItems(e){this.filterSelected=e.target.pressed;const n=this._filteredItems.filter(i=>i.selected);this.selectedItems=this.items.filter((i,o,r)=>Be._groupItemFilter(i,++o,r,n)||n.indexOf(i)!==-1)}get _showAllItemsButtonPressed(){return this.filterSelected}get _inputDom(){return this.shadowRoot.querySelector("#ui5-multi-combobox-input")}_inputLiveChange(e){var a,s;const n=e.target,i=n.value,o=this._filterItems(i),r=this.valueState;if(this._shouldFilterItems=!0,this.filterSelected&&(this.filterSelected=!1),this._validationTimeout){n.value=this._inputLastValue;return}if(!o.length&&i&&!this.allowCustomValues){n.value=this.valueBeforeAutoComplete||this._inputLastValue,this.valueState=k.Error,this._shouldAutocomplete=!1,this._resetValueState(r);return}this._inputLastValue=n.value,this.value=n.value,this._filteredItems=o,Y()||(o.length===0?(a=this.allItemsPopover)==null||a.close():(s=this.allItemsPopover)==null||s.showAt(this)),this.fireEvent("input")}_tokenDelete(e){this._previouslySelectedItems=this._getSelectedItems();const n=e.detail.ref,i=this.items.find(r=>r._id===n.getAttribute("data-ui5-id"));i.selected=!1,this._deleting=!0,this._preventTokenizerToggle=!0,this.focus(),this.fireSelectionChange()&&this._revertSelection()}get _getPlaceholder(){return this._getSelectedItems().length?"":this.placeholder}_handleArrowLeft(){const e=this._inputDom,n=e.selectionStart||0,i=(e.selectionEnd||0)-n>0;n===0&&!i&&this._tokenizer._focusLastToken()}_tokenizerFocusOut(e){this._tokenizerFocused=!1;const n=this._tokenizer.tokens.length,i=this._selectedTokensCount,o=n-1===0&&this._deleting,r=i===n&&this._deleting,a=e.relatedTarget,s=this.staticAreaItem===a,c=this._inputDom===a,u=e.relatedTarget===this._tokenizer.staticAreaItem;!(a!=null&&a.hasAttribute("ui5-token"))&&!s&&!c&&!u&&(this._tokenizer.tokens.forEach(h=>{h.selected=!1}),this._tokenizer.expanded=this._preventTokenizerToggle?this._tokenizer.expanded:!1),(r||o)&&setTimeout(()=>{Y()||this._inputDom.focus(),this._deleting=!1},0)}_tokenizerFocusIn(){this._tokenizerFocused=!0,this.focused=!1}_onkeydown(e){var i;const n=jo(e);if(ua(e)&&!this.disabled){this._handleShow(e);return}if(Zt(e)||hn(e)){e.preventDefault();return}if(Ct(e)||ct(e)||Ro(e)||n){this._handleArrowNavigation(e,n);return}if(n&&!((i=this.allItemsPopover)!=null&&i.opened)&&setTimeout(()=>this._inputDom.setSelectionRange(0,this._inputDom.value.length),0),Hl(e)||Ul(e)){this._handleArrowCtrl(e);return}if(q_(e)||j_(e)){this._handlePaste();return}Ki(e)&&e.preventDefault(),(e.key==="ArrowLeft"||e.key==="Show"||e.key==="PageUp"||e.key==="PageDown"||e.key==="Backspace"||e.key==="Escape"||e.key==="Home"||e.key==="End"||e.key==="Tab"||e.key==="ArrowDown"||e.key==="Enter")&&this[`_handle${e.key}`](e),this._shouldAutocomplete=!this.noTypeahead&&!(gf(e)||fu(e)||pu(e)||te(e))}async _handlePaste(){if(this.readonly)return;const e=await navigator.clipboard.readText();if(!e)return;const n=e.split(/\r\n|\r|\n|\t/g),i=this.items.filter(o=>n.indexOf(o.text)>-1&&!o.selected);n.length>1?(this._previouslySelectedItems=this._getSelectedItems(),i.forEach(o=>{o.selected=!0,this.value="",this.fireSelectionChange()&&this._revertSelection()})):(this.value=e,this.fireEvent("input"))}_handleShow(e){const n=this.items,i=this._getSelectedItems()[0],o=this._tokenizer.tokens.find(s=>s.focused),r=this.value,a=this.items.find(s=>s.text.localeCompare(r,void 0,{sensitivity:"base"})===0);if(e.preventDefault(),!this.readonly){if(this._isOpenedByKeyboard=!0,this._shouldFilterItems=!1,this._filteredItems=this.items,this.togglePopover(),!o&&a){this._itemToFocus=a;return}i&&!o?this._itemToFocus=i:o&&e.target===o?this._itemToFocus=n.find(s=>s.text===o.text):this._itemToFocus=n[0]}}_handlePageUp(e){e.preventDefault()}_handlePageDown(e){e.preventDefault()}_handleBackspace(e){e.target.value===""&&(e.preventDefault(),this._tokenizer._focusLastToken())}_handleEscape(){const e=this._innerInput;(e.selectionEnd||0)-(e.selectionStart||0)>0&&(this.value=this.valueBeforeAutoComplete),(!this.allowCustomValues||!this.open&&this.allowCustomValues)&&(this.value=this._lastValue)}_handleHome(e){this._isFocusInside&&e.target.selectionStart===0&&this._tokenizer.tokens.length>0&&(e.preventDefault(),this._tokenizer.tokens[0].focus())}_handleEnd(e){const n=this._tokenizer.tokens,i=n.length-1;e.target===n[i]&&n[i]===this.shadowRoot.activeElement&&(e.preventDefault(),this._inputDom.focus())}_handleTab(){var e;(e=this.allItemsPopover)==null||e.close()}_handleSelectAll(){const e=this._filteredItems,n=e.every(o=>o.selected);this._previouslySelectedItems=e.filter(o=>o.selected).map(o=>o),e.forEach(o=>{o.selected=!n}),this.fireSelectionChange()&&this._revertSelection()}_onValueStateKeydown(e){const n=ct(e),i=Ct(e);if(Kt(e)||Fn(e)){this._onItemTab();return}e.preventDefault(),(n||jo(e))&&this._handleArrowDown(),(i||Ro(e))&&(this._shouldAutocomplete=!0,this._inputDom.focus())}async _onItemKeydown(e){var o,r,a,s,c,u,h,_,m,g,b,w,T;const n=((o=this.list)==null?void 0:o.items[0])===e.target,i=Ct(e)||Ro(e);if(this.hasValueStateMessage&&!this.valueStateHeader&&await this._setValueStateHeader(),Kt(e)||Fn(e)){this._onItemTab();return}if(bo(e)&&((r=this.list)==null||r._itemNavigation._handleHome(),(s=this.list)==null||s.items[(a=this.list)==null?void 0:a._itemNavigation._currentIndex].focus()),ki(e)&&((c=this.list)==null||c._itemNavigation._handleEnd(),(h=this.list)==null||h.items[(u=this.list)==null?void 0:u._itemNavigation._currentIndex].focus()),e.preventDefault(),Zt(e)||hn(e)){this._handleItemRangeSelection(e);return}if(Ro(e)&&!n&&((_=this.list)==null||_._itemNavigation._handleUp(),(g=this.list)==null||g.items[(m=this.list)==null?void 0:m._itemNavigation._currentIndex].focus()),jo(e)&&((b=this.list)==null||b._itemNavigation._handleDown(),(T=this.list)==null||T.items[(w=this.list)==null?void 0:w._itemNavigation._currentIndex].focus()),ua(e)&&this.togglePopover(),bf(e)){this._handleSelectAll();return}(i&&n||Ft(e))&&this.valueStateHeader&&this.valueStateHeader.focus(),!this.valueStateHeader&&n&&i&&(this._inputDom.focus(),this._shouldAutocomplete=!0)}_handleArrowCtrl(e){const n=this._inputDom,i=Hl(e);i&&n.selectionStart===0&&n.selectionEnd===0&&e.preventDefault(),i&&(n.selectionEnd||0)-(n.selectionStart||0)>0&&n.setSelectionRange(0,0)}_onItemTab(){var e;this._inputDom.focus(),(e=this.allItemsPopover)==null||e.close()}async _handleArrowNavigation(e,n){var a;const i=n||ct(e),o=this.items.length,r=(a=this.allItemsPopover)==null?void 0:a.opened;if(e.preventDefault(),this.hasValueStateMessage&&!this.valueStateHeader&&await this._setValueStateHeader(),i&&r&&this.valueStateHeader){this.value=this.valueBeforeAutoComplete||this.value,this.valueStateHeader.focus();return}i&&o&&this._handleArrowDown(),!i&&!r&&!this.readonly&&this._navigateToPrevItem()}_handleArrowDown(){var i,o,r;const e=(i=this.allItemsPopover)==null?void 0:i.opened,n=(o=this.list)==null?void 0:o.items[0];e?(n&&((r=this.list)==null||r._itemNavigation.setCurrentItem(n)),this.value=this.valueBeforeAutoComplete||this.value,n==null||n.focus()):this.readonly||this._navigateToNextItem()}_handleItemRangeSelection(e){var c;const n=this.items,i=(c=this.list)==null?void 0:c.items,o=Number(i==null?void 0:i.indexOf(e.target)),r=o+1,a=o-1;this._previouslySelectedItems=this._getSelectedItems(),Zt(e)&&n[r]&&(n[r].selected=n[o].selected,n[r].focus()),hn(e)&&n[a]&&(n[a].selected=n[o].selected,n[a].focus()),this.fireSelectionChange()&&this._revertSelection()}_navigateToNextItem(){const e=this.items,n=e.length,i=this.currentItemIdx;if(i>-1&&e[i].text!==this.value&&(this.currentItemIdx=-1),i>=n-1)return;let o=this.items[++this.currentItemIdx];for(;this.currentItemIdx<n-1&&o.selected||o.isGroupItem;)o=this.items[++this.currentItemIdx];if(o.selected===!0||o.isGroupItem){this.currentItemIdx=i;return}this.value=o.text,this._innerInput.value=o.text,this._innerInput.setSelectionRange(0,o.text.length)}_navigateToPrevItem(){const e=this.items;let n=this.currentItemIdx;if((!this.value&&n!==-1||n!==-1&&this.value&&this.value!==e[n].text)&&(n=-1),n===-1&&(this.currentItemIdx=e.length),n===0){this.currentItemIdx=0;return}let i=this.items[--this.currentItemIdx];for(;i&&this.currentItemIdx>0&&(i.selected||i.isGroupItem);)i=this.items[--this.currentItemIdx];if(i){if(i.selected||i.isGroupItem){this.currentItemIdx=n;return}this.value=i.text,this._innerInput.value=i.text,this._innerInput.setSelectionRange(0,i.text.length)}}_handleEnter(){var r;const e=this.value.toLowerCase(),n=this.items.find(a=>a.text.toLowerCase()===e&&!a.isGroupItem),i=this.valueState,o=this._innerInput;if(this.FormSupport&&this.FormSupport.triggerFormSubmit(this),n){if(n.selected){if(this._validationTimeout)return;this.valueState=k.Error,this._performingSelectionTwice=!0,this._resetValueState(i,()=>{this._performingSelectionTwice=!1})}else this._previouslySelectedItems=this._getSelectedItems(),n.selected=!0,this.value="",this.fireSelectionChange()&&this._revertSelection();o.setSelectionRange(n.text.length,n.text.length),(r=this.allItemsPopover)==null||r.close()}}_resetValueState(e,n){this._validationTimeout=setTimeout(()=>{this.valueState=e,this._validationTimeout=null,n&&n()},2e3)}_onTokenizerKeydown(e){const n=!!(e.metaKey||e.ctrlKey);if(Et(e)){const i=this._tokenizer.tokens.length-this._tokenizer.overflownTokens.length-1;e.target===this._tokenizer.tokens[i]&&setTimeout(()=>{this._inputDom.focus()},0)}if(n&&["c","x"].includes(e.key.toLowerCase())||W_(e)||sy(e)){e.preventDefault();const i=e.key.toLowerCase()==="x"||W_(e),o=this._tokenizer.tokens.filter(r=>r.selected);if(i){const r=this._tokenizer._fillClipboard(qa.cut,o);return o.forEach(a=>{this._tokenizer.deleteToken(a)}),this.focus(),r}return this._tokenizer._fillClipboard(qa.copy,o)}(q_(e)||j_(e))&&this._handlePaste(),Ft(e)&&this._handleHome(e),Mn(e)&&this._handleEnd(e),ua(e)&&!this.readonly&&!this.disabled&&(this._preventTokenizerToggle=!0,this._handleShow(e))}_filterItems(e){const n=this.items.filter(o=>!o.isGroupItem),i=(AS[this.filter]||ng)(e,n,"text");return this.items.filter((o,r,a)=>Be._groupItemFilter(o,++r,a,i)||i.indexOf(o)!==-1)}static _groupItemFilter(e,n,i,o){if(e.isGroupItem){let r;for(;i[n]&&!i[n].isGroupItem&&!r;)r=o.indexOf(i[n])!==-1,n++;return r}}_afterOpenPicker(){var e,n;this._toggle(),!Y()&&!this._isOpenedByKeyboard?this._innerInput.focus():this._isOpenedByKeyboard?(e=this._itemToFocus)==null||e.focus():(n=this.allItemsPopover)==null||n.focus(),this._previouslySelectedItems=this._getSelectedItems(),this._isOpenedByKeyboard=!1}_toggle(){this.open=!this.open,this.fireEvent("open-change")}_getSelectedItems(){return this.selectedValues=this.items.filter(e=>e.selected),this.selectedValues}_listSelectionChange(e){var o;let n;Y()||(this._previouslySelectedItems=this._getSelectedItems()),this.syncItems(e.target.items),Y()||(n=this.fireSelectionChange(),n&&(e.preventDefault(),this._revertSelection()));const i={key:e.detail.key};!e.detail.selectionComponentPressed&&!H(i)&&!hu(i)&&((o=this.allItemsPopover)==null||o.close(),this.value="",Y()&&(n=this.fireSelectionChange(),n&&(e.preventDefault(),this._revertSelection())),this.fireEvent("input")),this.value=this.valueBeforeAutoComplete||""}syncItems(e){e.forEach(n=>{this.items.forEach(i=>{i._id===n.getAttribute("data-ui5-token-id")&&(i.selected=n.selected)})})}fireSelectionChange(){const e=!this.fireEvent("selection-change",{items:this._getSelectedItems()},!0);return this.fireEvent("value-changed"),e}async _getRespPopover(){const e=await this.getStaticAreaItemDomRef();this.allItemsPopover=e.querySelector(".ui5-multi-combobox-all-items-responsive-popover")}async _getList(){const e=await this.getStaticAreaItemDomRef();return this.list=e.querySelector(".ui5-multi-combobox-all-items-list"),this.list}_click(){var e;Y()&&!this.readonly&&!this._showMorePressed&&!this._deleting&&((e=this.allItemsPopover)==null||e.showAt(this)),this._showMorePressed=!1}async handleBeforeTokenizerPopoverOpen(){const e=this._tokenizer.tokens,n=e.length===1&&e[0].isTruncatable,i=await this._getResponsivePopover();n&&(i==null||i.close(!1,!1,!0))}_afterClosePicker(){Y()&&this.blur(),this._toggle(),this._iconPressed=!1,this._preventTokenizerToggle=!1,this.filterSelected=!1}_beforeOpen(){if(this._itemsBeforeOpen=this.items.map(e=>({ref:e,selected:e.selected})),this._valueBeforeOpen=this.value,this.filterSelected){const e=this._filteredItems.filter(n=>n.selected);this.selectedItems=this.items.filter((n,i,o)=>Be._groupItemFilter(n,++i,o,e)||e.indexOf(n)!==-1)}}_handleTypeAhead(e,n){if(!e)return;const i=e.text,o=this._innerInput;n=n||"",this.value=i,o.value=i,o.setSelectionRange(n.length,i.length),this._shouldAutocomplete=!1}_getFirstMatchingItem(e){if(!this.items.length)return;const n=this._startsWithMatchingItems(e).filter(i=>!i.isGroupItem&&!i.selected);if(n.length)return n[0]}_startsWithMatchingItems(e){return ig(e,this.items,"text")}_revertSelection(){this._filteredItems.forEach(e=>{e.selected=this._previouslySelectedItems.includes(e)})}onBeforeRendering(){const e=this._innerInput,n=e&&(e.selectionEnd||0)-(e.selectionStart||0),i=e&&e.value;if(this.FormSupport=Ce("FormSupport"),this._inputLastValue=i,e&&!e.value&&(this.valueBeforeAutoComplete="",this._filteredItems=this.items),this.items.forEach(o=>{o._getRealDomRef=()=>this.allItemsPopover.querySelector(`*[data-ui5-stable=${o.stableDomRef}]`)}),this.tokenizerAvailable=this._getSelectedItems().length>0,this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`),!(!e||!i)){if(this._shouldAutocomplete&&!yw()&&!n){const o=this._getFirstMatchingItem(i);this.valueBeforeAutoComplete=i,o&&this._handleTypeAhead(o,i)}this._shouldFilterItems?this._filteredItems=this._filterItems(this._shouldAutocomplete||n?this.valueBeforeAutoComplete:i):this._filteredItems=this.items}}async onAfterRendering(){await this._getRespPopover(),await this._getList(),this.toggle(this.shouldDisplayOnlyValueStateMessage),this.storeResponsivePopoverWidth(),this._deleting=!1,this._tokenizer._handleResize()}get _isPhone(){return Y()}_onIconMousedown(){this._iconPressed=!0}storeResponsivePopoverWidth(){this.open&&!this._listWidth&&(this._listWidth=this.list.offsetWidth)}toggle(e){e&&!this.open?this.openPopover():this.closePopover()}handleCancel(){this._itemsBeforeOpen.forEach(e=>{e.ref instanceof Em&&(e.ref.selected=e.selected)}),this.togglePopover(),this.value=this._valueBeforeOpen}handleOK(){Y()&&this.fireSelectionChange()&&this._revertSelection(),this.allowCustomValues||(this.value=""),this.togglePopover()}async openPopover(){var e;(e=await this._getPopover())==null||e.showAt(this)}_forwardFocusToInner(){this._innerInput.focus()}get morePopoverOpener(){var n;const e=(n=this._tokenizer)==null?void 0:n.tokens;return(e==null?void 0:e.length)===1&&e[0].isTruncatable?e[0]:this}async closePopover(){var e;(e=await this._getPopover())==null||e.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}async _getResponsivePopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}async _setValueStateHeader(){const e=await this._getResponsivePopover();this.valueStateHeader=e.querySelector("div.ui5-responsive-popover-header.ui5-valuestatemessage-root")}get _tokenizer(){return this.shadowRoot.querySelector("[ui5-tokenizer]")}inputFocusIn(e){var n;!Y()||this.readonly?(this.focused=!0,this._tokenizer.expanded=!0):this._innerInput.blur(),!Y()&&(((n=e.relatedTarget)==null?void 0:n.tagName)!=="UI5-STATIC-AREA-ITEM"||!e.relatedTarget)&&this._innerInput.setSelectionRange(0,this.value.length),this._tokenizer.tokens.forEach(i=>{i.selected=!1}),this._lastValue=this.value,this.valueBeforeAutoComplete=""}inputFocusOut(e){!this.shadowRoot.contains(e.relatedTarget)&&!this._deleting&&(this.focused=!1,this._tokenizer.expanded=this.open,!Y()&&!this.allowCustomValues&&this.staticAreaItem!==e.relatedTarget&&(this.value=""))}get editable(){return!this.readonly}get _isFocusInside(){return!Y()&&(this.focused||this._tokenizerFocused)}get selectedItemsListMode(){return this.readonly?"None":"MultiSelect"}get _listItemsType(){return this.readonly?"Inactive":"Active"}get hasValueState(){return this.valueState!==k.None}get hasValueStateMessage(){return this.hasValueState&&this.valueState!==k.Success}get ariaValueStateHiddenText(){if(!this.hasValueState)return;let e="";return this.valueState!==k.None&&(e=this.valueStateTypeMappings[this.valueState]),this.shouldDisplayDefaultValueStateMessage?`${e} ${this.valueStateDefaultText||""}`:`${e}`.concat(" ",this.valueStateMessageText.map(n=>n.textContent).join(" "))}get valueStateDefaultText(){return this.valueState===k.None?"":this._performingSelectionTwice?Be.i18nBundle.getText(Oy):this.valueStateTextMappings[this.valueState]}get valueStateTextId(){return this.hasValueState?"ui5-multi-combobox-valueStateDesc":void 0}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get ariaLabelText(){return tn(this)}get _valueStateMessageIcon(){return this.valueState===k.None?"":{[k.Error]:"error",[k.Warning]:"alert",[k.Success]:"sys-enter-2",[k.Information]:"information"}[this.valueState]}get _tokensCountText(){if(this._tokenizer)return this._tokenizer._tokensCountText()}get _tokensCountTextId(){return"ui5-multi-combobox-hiddenText-nMore"}get _selectedTokensCount(){return this._tokenizer.tokens.filter(e=>e.selected).length}get ariaDescribedByText(){return this.valueStateTextId?`${this._tokensCountTextId} ${this.valueStateTextId}`:`${this._tokensCountTextId}`}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateMessage}get shouldDisplayOnlyValueStateMessage(){return this.focused&&!this.readonly&&this.hasValueStateMessage&&!this._iconPressed}get valueStateTypeMappings(){return{[k.Success]:Be.i18nBundle.getText(If),[k.Information]:Be.i18nBundle.getText(Ef),[k.Error]:Be.i18nBundle.getText(Sf),[k.Warning]:Be.i18nBundle.getText($f)}}get valueStateTextMappings(){return{[k.Success]:Be.i18nBundle.getText(fs),[k.Error]:Be.i18nBundle.getText(hs),[k.Warning]:Be.i18nBundle.getText(ps),[k.Information]:Be.i18nBundle.getText(mu)}}get _innerInput(){var e;return Y()&&(e=this.allItemsPopover)!=null&&e.opened?this.allItemsPopover.querySelector("input"):this._inputDom}get _headerTitleText(){return Be.i18nBundle.getText(kf)}get _iconAccessibleNameText(){return Be.i18nBundle.getText($y)}get _dialogOkButton(){return Be.i18nBundle.getText(Ly)}get _tokenizerExpanded(){var i;if(Y()||this.readonly)return!1;if(this._preventTokenizerToggle)return this._tokenizer.expanded;const e=(i=this._tokenizer)==null?void 0:i.expanded;return this.focused||this.open||e}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?"Left":"Right"}get iconsCount(){var i;const e=((i=this.icon)==null?void 0:i.length)||0,n=this.readonly?0:1;return e+n}get classes(){return{popover:{"ui5-multi-combobox-all-items-responsive-popover":!0,"ui5-suggestions-popover":!0,"ui5-suggestions-popover-with-value-state-header":this.hasValueStateMessage},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage--success":this.valueState===k.Success,"ui5-valuestatemessage--error":this.valueState===k.Error,"ui5-valuestatemessage--warning":this.valueState===k.Warning,"ui5-valuestatemessage--information":this.valueState===k.Information}}}get styles(){const e=parseInt(getComputedStyle(document.documentElement).fontSize);return{popoverValueStateMessage:{width:`${this._listWidth||0}px`,display:this._listWidth===0?"none":"inline-block"},popoverHeader:{"max-width":Y()?"100%":`${this._inputWidth}px`},suggestionsPopover:{"min-width":`${this._inputWidth}px`,"max-width":this._inputWidth/e>40?`${this._inputWidth}px`:"40rem"}}}static async onDefine(){Be.i18nBundle=await ie("@ui5/webcomponents")}};oe([d()],J.prototype,"value",void 0);oe([d({type:Boolean})],J.prototype,"noTypeahead",void 0);oe([d()],J.prototype,"placeholder",void 0);oe([d({type:Boolean})],J.prototype,"allowCustomValues",void 0);oe([d({type:Boolean})],J.prototype,"disabled",void 0);oe([d({type:k,defaultValue:k.None})],J.prototype,"valueState",void 0);oe([d({type:Boolean})],J.prototype,"readonly",void 0);oe([d({type:Boolean})],J.prototype,"required",void 0);oe([d({type:zd,defaultValue:zd.StartsWithPerTerm})],J.prototype,"filter",void 0);oe([d({type:Boolean})],J.prototype,"open",void 0);oe([d()],J.prototype,"accessibleName",void 0);oe([d()],J.prototype,"accessibleNameRef",void 0);oe([d({type:Object,noAttribute:!0,multiple:!0})],J.prototype,"_filteredItems",void 0);oe([d({type:Object,noAttribute:!0,multiple:!0})],J.prototype,"_previouslySelectedItems",void 0);oe([d({type:Boolean})],J.prototype,"filterSelected",void 0);oe([d({type:Boolean})],J.prototype,"focused",void 0);oe([d({type:Boolean,noAttribute:!0})],J.prototype,"_tokenizerFocused",void 0);oe([d({type:Boolean,noAttribute:!0})],J.prototype,"_iconPressed",void 0);oe([d({validator:Se,noAttribute:!0})],J.prototype,"_inputWidth",void 0);oe([d({validator:Se,noAttribute:!0,defaultValue:0})],J.prototype,"_listWidth",void 0);oe([d({type:Boolean,noAttribute:!0})],J.prototype,"_performingSelectionTwice",void 0);oe([d({type:Boolean})],J.prototype,"tokenizerAvailable",void 0);oe([Z({type:HTMLElement,default:!0,invalidateOnChildChange:!0})],J.prototype,"items",void 0);oe([Z()],J.prototype,"icon",void 0);oe([Z()],J.prototype,"valueStateMessage",void 0);J=Be=oe([U({tag:"ui5-multi-combobox",languageAware:!0,renderer:he,template:DS,staticAreaTemplate:PS,styles:US,staticAreaStyles:[Lu,Ou,Jm,VS],dependencies:[Em,Zk,aS,yS,Ut,Du,ur,Bu,Pu,tx,CS,Oi]}),I("change"),I("input"),I("open-change"),I("selection-change",{detail:{items:{type:Array}}})],J);J.define();var Tc;(function(t){t.Polite="Polite",t.Assertive="Assertive"})(Tc||(Tc={}));const ka=Tc;let In,En;const Hd=t=>{t.style.position="absolute",t.style.clip="rect(1px,1px,1px,1px)",t.style.userSelect="none",t.style.left="-1000px",t.style.top="-1000px",t.style.pointerEvents="none"};f5(()=>{In&&En||(In=document.createElement("span"),En=document.createElement("span"),In.classList.add("ui5-invisiblemessage-polite"),En.classList.add("ui5-invisiblemessage-assertive"),In.setAttribute("aria-live","polite"),En.setAttribute("aria-live","assertive"),In.setAttribute("role","alert"),En.setAttribute("role","alert"),Hd(In),Hd(En),Aa("ui5-static-area").appendChild(In),Aa("ui5-static-area").appendChild(En))});const WS=(t,e)=>{const n=e===ka.Assertive?En:In;n.textContent="",n.textContent=t,e!==ka.Assertive&&e!==ka.Polite&&console.warn('You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".'),setTimeout(()=>{n.textContent===t&&(n.textContent="")},3e3)};var Xn=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let zt=class extends Q{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};Xn([d({type:Boolean})],zt.prototype,"selected",void 0);Xn([d({type:Boolean})],zt.prototype,"disabled",void 0);Xn([d()],zt.prototype,"title",void 0);Xn([d({defaultValue:null})],zt.prototype,"icon",void 0);Xn([d()],zt.prototype,"value",void 0);Xn([d()],zt.prototype,"additionalText",void 0);Xn([d({type:Boolean})],zt.prototype,"_focused",void 0);zt=Xn([U("ui5-option")],zt);zt.define();const jS=zt;function qS(t,e,n){return n?p`<div class="ui5-select-root ui5-input-focusable-element" id="${l(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?Ud.call(this,t,e,n):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${l(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${l(this.ariaLabelText)}" aria-describedby="${l(this.valueStateTextId)}" aria-disabled="${l(this.isDisabled)}" aria-required="${l(this.required)}" aria-expanded="${l(this._isPickerOpen)}" aria-roledescription="${l(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${l(this._text)}</div><${v("ui5-icon",e,n)} name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></${v("ui5-icon",e,n)}>${this.hasValueState?Vd.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`:p`<div class="ui5-select-root ui5-input-focusable-element" id="${l(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?Ud.call(this,t,e,n):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${l(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${l(this.ariaLabelText)}" aria-describedby="${l(this.valueStateTextId)}" aria-disabled="${l(this.isDisabled)}" aria-required="${l(this.required)}" aria-expanded="${l(this._isPickerOpen)}" aria-roledescription="${l(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${l(this._text)}</div><ui5-icon name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></ui5-icon>${this.hasValueState?Vd.call(this,t,e,n):void 0}<slot name="formSupport"></slot></div>`}function Ud(t,e,n){return n?p`<${v("ui5-icon",e,n)} aria-hidden="true" class="ui5-select-option-icon" name="${l(this.selectedOptionIcon)}"></${v("ui5-icon",e,n)}>`:p`<ui5-icon aria-hidden="true" class="ui5-select-option-icon" name="${l(this.selectedOptionIcon)}"></ui5-icon>`}function Vd(t,e,n){return p`<span id="${l(this._id)}-valueStateDesc" class="ui5-hidden-text">${l(this.valueStateText)}</span>`}function YS(t,e,n){return p`${this.options?GS.call(this,t,e,n):void 0}${this.shouldOpenValueStateMessagePopover?e$.call(this,t,e,n):void 0}`}function GS(t,e,n){return n?p`<${v("ui5-responsive-popover",e,n)} hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${N(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${l(this._afterOpen)}" @ui5-before-open="${l(this._beforeOpen)}" @ui5-after-close="${l(this._afterClose)}" @keydown="${this._onkeydown}" style=${z(this.styles.responsivePopover)}>${this._isPhone?Wd.call(this,t,e,n):void 0}${this._isPhone?void 0:qd.call(this,t,e,n)}<${v("ui5-list",e,n)} mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${l(this._handleItemPress)}">${X(this._syncedOptions,(i,o)=>i._id||o,(i,o)=>Xd.call(this,t,e,n,i,o))}</${v("ui5-list",e,n)}></${v("ui5-responsive-popover",e,n)}>`:p`<ui5-responsive-popover hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${N(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${l(this._afterOpen)}" @ui5-before-open="${l(this._beforeOpen)}" @ui5-after-close="${l(this._afterClose)}" @keydown="${this._onkeydown}" style=${z(this.styles.responsivePopover)}>${this._isPhone?Wd.call(this,t,e,n):void 0}${this._isPhone?void 0:qd.call(this,t,e,n)}<ui5-list mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${l(this._handleItemPress)}">${X(this._syncedOptions,(i,o)=>i._id||o,(i,o)=>Xd.call(this,t,e,n,i,o))}</ui5-list></ui5-responsive-popover>`}function Wd(t,e,n){return n?p`<div class="ui5-responsive-popover-header"><div class="row"><span>${l(this._headerTitleText)}</span><${v("ui5-button",e,n)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${v("ui5-button",e,n)}></div>${this.hasValueStateText?jd.call(this,t,e,n):void 0}</div>`:p`<div class="ui5-responsive-popover-header"><div class="row"><span>${l(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText?jd.call(this,t,e,n):void 0}</div>`}function jd(t,e,n){return p`<div class="${N(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage?XS.call(this,t,e,n):ZS.call(this,t,e,n)}</div>`}function XS(t,e,n){return p`${l(this.valueStateText)}`}function ZS(t,e,n){return p`${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>QS.call(this,t,e,n,i,o))}`}function QS(t,e,n,i,o){return p`${l(i)}`}function qd(t,e,n){return p`${this.hasValueStateText?JS.call(this,t,e,n):void 0}`}function JS(t,e,n){return n?p`<div class="${N(this.classes.popoverValueState)}" style=${z(this.styles.responsivePopoverHeader)}><${v("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageInputIcon)}"></${v("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?Yd.call(this,t,e,n):Gd.call(this,t,e,n)}</div>`:p`<div class="${N(this.classes.popoverValueState)}" style=${z(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?Yd.call(this,t,e,n):Gd.call(this,t,e,n)}</div>`}function Yd(t,e,n){return p`${l(this.valueStateText)}`}function Gd(t,e,n){return p`${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>KS.call(this,t,e,n,i,o))}`}function KS(t,e,n,i,o){return p`${l(i)}`}function Xd(t,e,n,i,o){return n?p`<${v("ui5-li",e,n)} id="${l(i.id)}-li" icon="${l(i.icon)}" ?selected="${i.selected}" ?focused="${i._focused}" title="${l(i.title)}" additional-text="${l(i.additionalText)}" ?aria-selected="${i.selected}" data-ui5-stable="${l(i.stableDomRef)}">${l(i.textContent)}</${v("ui5-li",e,n)}>`:p`<ui5-li id="${l(i.id)}-li" icon="${l(i.icon)}" ?selected="${i.selected}" ?focused="${i._focused}" title="${l(i.title)}" additional-text="${l(i.additionalText)}" ?aria-selected="${i.selected}" data-ui5-stable="${l(i.stableDomRef)}">${l(i.textContent)}</ui5-li>`}function e$(t,e,n){return n?p`<${v("ui5-popover",e,n)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverHeader)}"><${v("ui5-icon",e,n)} class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageInputIcon)}"></${v("ui5-icon",e,n)}>${this.shouldDisplayDefaultValueStateMessage?Zd.call(this,t,e,n):Qd.call(this,t,e,n)}</div></${v("ui5-popover",e,n)}>`:p`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${N(this.classes.popoverValueState)}" style="${z(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${l(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?Zd.call(this,t,e,n):Qd.call(this,t,e,n)}</div></ui5-popover>`}function Zd(t,e,n){return p`${l(this.valueStateText)}`}function Qd(t,e,n){return p`${X(this.valueStateMessageText,(i,o)=>i._id||o,(i,o)=>t$.call(this,t,e,n,i,o))}`}function t$(t,e,n,i,o){return p`${l(i)}`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const n$={packageName:"@ui5/webcomponents",fileName:"themes/Select.css",content:`:host {
	vertical-align: middle;
}
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	width: var(--_ui5_input_width);
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	margin: var(--_ui5_input_margin_top_bottom) 0;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	font-style: normal;
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
	text-align: start;
	transition: var(--_ui5_input_transition);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
}
:host(:not([readonly])) {
	box-shadow: var(--sapField_Shadow);
}
:host([focused]:not([opened])) {
	border-color: var(--_ui5_input_focused_border_color);
	background-color: var(--sapField_Focus_Background);
}
.ui5-input-focusable-element {
	position: relative;
}
:host([focused]:not([opened])) .ui5-input-focusable-element::after {
	content: var(--ui5_input_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);
}
.ui5-input-root::before {
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	left: 1px;
	bottom: -2px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: var(--_ui5_input_bottom_border_height);
	transition: var(--_ui5_input_transition);
	background-color: var(--_ui5_input_bottom_border_color);
}
.ui5-input-root {
	width: 100%;
	height: 100%;
	position: relative;
	background: transparent;
	display: inline-block;
	outline: none;
	box-sizing: border-box;
	color: inherit;
	transition: border-color .2s ease-in-out;
	border-radius: var(--_ui5_input_border_radius);
	overflow: hidden;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background-color: var(--_ui5-input_disabled_background);
	border-color: var(--_ui5_input_disabled_border_color);
}
:host([disabled]) .ui5-input-root::before,
:host([readonly]) .ui5-input-root::before {
	content: none;
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: inherit;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: var(--_ui5_input_min_width);
	width: 100%;
	text-align: inherit;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	text-align: inherit;
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
.ui5-input-value-state-icon {
	height: 100%;
	display: var(--_ui5-input-value-state-icon-display);
	align-items: center;
}
.ui5-input-value-state-icon > svg {
	margin-right: 8px;
}
[inner-input]::selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
:host([disabled]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([disabled]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
[inner-input]::-webkit-input-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
[inner-input]::-moz-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Error"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-moz-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Success"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
.ui5-input-content {
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	overflow: hidden;
	outline: none;
	background: transparent;
	color: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
:host([value-state="None"]:not([readonly]):hover),
:host(:not([value-state]):not([readonly]):hover) {
	border: var(--_ui5_input_hover_border);
	border-color: var(--_ui5_input_focused_border_color);
	box-shadow: var(--sapField_Hover_Shadow);
	background: var(--sapField_Hover_BackgroundStyle);
	background-color: var(--sapField_Hover_Background);
}
:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),
:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover) {
	box-shadow: none;
}
:host([focused]):not([opened]) .ui5-input-root::before {
	content: none;
}
:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])) {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]) [inner-input],
:host([value-state="Warning"]) [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
	text-indent: var(--_ui5_input_error_warning_text_indent);
}
:host([value-state="Error"]) [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
:host([value-state="Warning"]) [inner-input] {
	font-weight: var(--_ui5_input_warning_font_weight);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
	box-shadow: var(--sapField_InvalidShadow);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
:host([value-state="Error"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5-input-value-state-error-border-botom-color);
}
:host([value-state="Error"]:not([readonly]):not([focused]):hover),
:host([value-state="Error"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--_ui5_input_value_state_error_hover_background);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled])),
:host([value-state="Warning"]:not([readonly]):not([disabled])),
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
	box-shadow: var(--sapField_WarningShadow);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
:host([value-state="Warning"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_warning_border_botom_color);
}
:host([value-state="Warning"]:not([readonly]):not([focused]):hover),
:host([value-state="Warning"]:not([readonly])[focused][opened]:hover)  {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
	box-shadow: var(--sapField_SuccessShadow);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
:host([value-state="Success"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_success_border_botom_color);
}
:host([value-state="Success"]:not([readonly]):not([focused]):hover),
:host([value-state="Success"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
	box-shadow: var(--sapField_InformationShadow);
}
:host([value-state="Information"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
:host([value-state="Information"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_success_information_border_botom_color);
}
:host([value-state="Information"]:not([readonly]):not([focused]):hover),
:host([value-state="Information"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}
/* Input Icon */
.ui5-input-icon-root {
	min-width: var(--_ui5_input_icon_min_width);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* TODO: Remove this after parser is fixed
	-	this statement is transformed to [ui5-multi-combobox] [ui5-icon] which
	affects all icons in the combobox incuding these in the list items
*/
::slotted([ui5-icon][slot="icon"]) {
	align-self: start;
	padding: var(--_ui5_input_custom_icon_padding);
	/* Normalize like libraries overrule the selector, thefore we need !important */
	box-sizing: content-box !important;
}
:host([value-state="Error"]) [input-icon],
:host([value-state="Warning"]) [input-icon]{
	padding: var(--_ui5_input_error_warning_icon_padding);
}
:host([value-state="Information"]) [input-icon] {
	padding: var(--_ui5_input_information_icon_padding);
}
:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),
:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),
:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_error_warning_custom_icon_padding);
}
:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_information_custom_icon_padding);
}
:host([value-state="Error"]) [input-icon]:active,
:host([value-state="Error"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
	color: var(--_ui5_input_icon_error_pressed_color);
}
:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
}
:host([value-state="Warning"]) [input-icon]:active,
:host([value-state="Warning"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
	color: var(--_ui5_input_icon_warning_pressed_color);
}
:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
}
:host([value-state="Information"]) [input-icon]:active,
:host([value-state="Information"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
	color: var(--_ui5_input_icon_information_pressed_color);
}
:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
}
:host([value-state="Success"]) [input-icon]:active,
:host([value-state="Success"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
	color: var(--_ui5_input_icon_success_pressed_color);
}
:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
}
.ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_height);
	padding: 0;
	width: var(--_ui5_input_icon_width);
	min-width: var(--_ui5_input_icon_width);
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}
:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_state_height);
	vertical-align: top;
}
:host([value-state="Success"]) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_success_state_height);
}
[ui5-icon].ui5-input-clear-icon {
	padding: 0;
	color: inherit;
}
/* Chrome, Safari, Edge, Opera */
[inner-input]::-webkit-outer-spin-button,
[inner-input]::-webkit-inner-spin-button {
	-webkit-appearance: inherit;
	margin: inherit;
}
.ui5-select-root {
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	width: 100%;
	height: 100%;
	display: flex;
	outline: none;
	cursor: pointer;
	overflow: hidden;
	border-radius: var(--_ui5_input_border_radius);
}
.ui5-select-label-root {
	flex-shrink: 1;
	flex-grow: 1;
	align-self: center;
	min-width: 1rem;
	padding-inline-start: 0.5rem;
	cursor: pointer;
	outline: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: var(--_ui5_select_label_color);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
}
.ui5-select-option-icon {
	padding-inline-start: 0.5rem;
	color: var(--sapField_TextColor);
	align-self: center;
}
:host(:not([disabled])) {
	cursor: pointer;
}
`};y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const i$={packageName:"@ui5/webcomponents",fileName:"themes/SelectPopover.css",content:`.ui5-select-popover::part(content),
.ui5-select-popover::part(header) {
	padding: 0;
}

.ui5-select-popover [ui5-li] {
	height: var(--_ui5_list_item_dropdown_base_height);
}

.ui5-select-popover [ui5-li]::part(icon) {
	color: var(--sapList_TextColor);
}
`};var rt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},at;let He=at=class extends Q{constructor(){super(),this._syncedOptions=[],this._selectedIndex=-1,this._selectedIndexBeforeOpen=-1,this._escapePressed=!1,this._lastSelectedOption=null,this._typedChars=""}onBeforeRendering(){this._syncSelection(),this._enableFormSupport(),this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`)}onAfterRendering(){this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover),this._isPickerOpen&&(this._listWidth||(this._listWidth=this.responsivePopover.offsetWidth)),this._attachRealDomRefs()}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}get selectedOption(){return this._filteredItems.find(e=>e.selected)}async _toggleRespPopover(){this._iconPressed=!0,this.responsivePopover=await this._respPopover(),!this.disabled&&(this._isPickerOpen?this.responsivePopover.close():this.responsivePopover.showAt(this))}async _attachRealDomRefs(){this.responsivePopover=await this._respPopover(),this.options.forEach(e=>{e._getRealDomRef=()=>this.responsivePopover.querySelector(`*[data-ui5-stable=${e.stableDomRef}]`)})}_syncSelection(){let e=-1,n=-1;const i=this._filteredItems,o=i.map((r,a)=>((r.selected||r.textContent===this.value)&&(e=a),n===-1&&(n=a),r.selected=!1,r._focused=!1,{selected:!1,_focused:!1,icon:r.icon,value:r.value,textContent:r.textContent,title:r.title,additionalText:r.additionalText,id:r._id,stableDomRef:r.stableDomRef}));e>-1?(o[e].selected=!0,o[e]._focused=!0,i[e].selected=!0,i[e]._focused=!0,this._text=o[e].textContent,this._selectedIndex=e):(this._text="",this._selectedIndex=-1,o[n]&&(o[n].selected=!0,o[n]._focused=!0,i[n].selected=!0,i[n]._focused=!0,this._selectedIndex=n,this._text=i[n].textContent)),this._syncedOptions=o}_enableFormSupport(){const e=Ce("FormSupport");e?e.syncNativeHiddenInput(this,(n,i)=>{const o=n;i.disabled=!!n.disabled,i.value=o._currentlySelectedOption?o._currentlySelectedOption.value:""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onkeydown(e){(Kt(e)||Fn(e))&&this.responsivePopover&&this.responsivePopover.opened&&this.responsivePopover.close(),ua(e)?(e.preventDefault(),this._toggleRespPopover()):H(e)?e.preventDefault():pu(e)&&this._isPickerOpen?this._escapePressed=!0:Ft(e)?this._handleHomeKey(e):Mn(e)?this._handleEndKey(e):te(e)?this._handleSelectionChange():(Ct(e)||ct(e))&&this._handleArrowNavigation(e)}_handleKeyboardNavigation(e){if(te(e))return;const n=e.key.toLowerCase();this._typedChars+=n;const i=/^(.)\1+$/i.test(this._typedChars)?n:this._typedChars;clearTimeout(this._typingTimeoutID),this._typingTimeoutID=setTimeout(()=>{this._typedChars="",this._typingTimeoutID=-1},1e3),this._selectTypedItem(i)}_selectTypedItem(e){const n=this._selectedIndex,i=this._searchNextItemByText(e);if(i){const o=this._filteredItems.indexOf(i);this._changeSelectedItem(this._selectedIndex,o),n!==this._selectedIndex&&this.itemSelectionAnnounce()}}_searchNextItemByText(e){let n=this._filteredItems.slice(0);const i=n.splice(this._selectedIndex+1,n.length-this._selectedIndex),o=n.splice(0,n.length-1);return n=i.concat(o),n.find(r=>(r.textContent||"").toLowerCase().startsWith(e))}_handleHomeKey(e){e.preventDefault(),this._changeSelectedItem(this._selectedIndex,0)}_handleEndKey(e){const n=this._filteredItems.length-1;e.preventDefault(),this._changeSelectedItem(this._selectedIndex,n)}_onkeyup(e){H(e)&&(this._isPickerOpen?this._handleSelectionChange():this._toggleRespPopover())}_getSelectedItemIndex(e){return this._filteredItems.findIndex(n=>`${n._id}-li`===e.id)}_select(e){this._filteredItems[this._selectedIndex].selected=!1,this._selectedIndex=e,this._filteredItems[e].selected=!0}_handleItemPress(e){const n=e.detail.item,i=this._getSelectedItemIndex(n);this._handleSelectionChange(i)}_itemMousedown(e){e.preventDefault()}_onclick(){this.getFocusDomRef().focus(),this._toggleRespPopover()}_handleSelectionChange(e=this._selectedIndex){this._select(e),this._toggleRespPopover()}_handleArrowNavigation(e){let n=-1;const i=this._selectedIndex,o=ct(e);e.preventDefault(),o?n=this._getNextOptionIndex():n=this._getPreviousOptionIndex(),this._changeSelectedItem(this._selectedIndex,n),i!==this._selectedIndex&&this.itemSelectionAnnounce()}_changeSelectedItem(e,n){const i=this._filteredItems;i[e].selected=!1,i[e]._focused=!1,i[n].selected=!0,i[n]._focused=!0,this._selectedIndex=n,this._isPickerOpen||this._fireChangeEvent(i[n])}_getNextOptionIndex(){return this._selectedIndex===this.options.length-1?this._selectedIndex:this._selectedIndex+1}_getPreviousOptionIndex(){return this._selectedIndex===0?this._selectedIndex:this._selectedIndex-1}_beforeOpen(){this._selectedIndexBeforeOpen=this._selectedIndex,this._lastSelectedOption=this._filteredItems[this._selectedIndex]}_afterOpen(){this.opened=!0,this.fireEvent("open"),this.itemSelectionAnnounce()}_afterClose(){this.opened=!1,this._iconPressed=!1,this._listWidth=0,this._escapePressed?(this._select(this._selectedIndexBeforeOpen),this._escapePressed=!1):this._lastSelectedOption!==this._filteredItems[this._selectedIndex]&&(this._fireChangeEvent(this._filteredItems[this._selectedIndex]),this._lastSelectedOption=this._filteredItems[this._selectedIndex]),this.fireEvent("close")}_fireChangeEvent(e){const n=!this.fireEvent("change",{selectedOption:e},!0);this.selectedItem=e.textContent,this.fireEvent("selected-item-changed"),n&&(this.selectedItem=this._lastSelectedOption.textContent,this._select(this._selectedIndexBeforeOpen))}get valueStateTextMappings(){return{[k.Success]:at.i18nBundle.getText(fs),[k.Information]:at.i18nBundle.getText(mu),[k.Error]:at.i18nBundle.getText(hs),[k.Warning]:at.i18nBundle.getText(ps)}}get valueStateTypeMappings(){return{[k.Success]:at.i18nBundle.getText(If),[k.Information]:at.i18nBundle.getText(Ef),[k.Error]:at.i18nBundle.getText(Sf),[k.Warning]:at.i18nBundle.getText($f)}}get valueStateText(){let e;return this.shouldDisplayDefaultValueStateMessage?e=this.valueStateDefaultText:e=this.valueStateMessageText.map(n=>n.textContent).join(" "),`${this.valueStateTypeText} ${e}`}get valueStateDefaultText(){return this.valueState!==k.None?this.valueStateTextMappings[this.valueState]:""}get valueStateTypeText(){return this.valueState!==k.None?this.valueStateTypeMappings[this.valueState]:""}get hasValueState(){return this.valueState!==k.None}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:void 0}get isDisabled(){return this.disabled||void 0}get _headerTitleText(){return at.i18nBundle.getText(kf)}get _currentlySelectedOption(){return this._filteredItems[this._selectedIndex]}get _effectiveTabIndex(){return this.disabled||this.responsivePopover&&this.responsivePopover.opened?"-1":"0"}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==k.None?e[this.valueState]:""}get iconsCount(){return this.selectedOptionIcon?2:1}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===k.Success,"ui5-valuestatemessage--error":this.valueState===k.Error,"ui5-valuestatemessage--warning":this.valueState===k.Warning,"ui5-valuestatemessage--information":this.valueState===k.Information},popover:{"ui5-select-popover-valuestate":this.hasValueState}}}get styles(){return{popoverHeader:{"max-width":`${this.offsetWidth}px`},responsivePopoverHeader:{display:this._filteredItems.length&&this._listWidth===0?"none":"inline-block",width:`${this._filteredItems.length?this._listWidth:this.offsetWidth}px`},responsivePopover:{"min-width":`${this.offsetWidth}px`}}}get ariaLabelText(){return tn(this)}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessageText.length&&this.hasValueStateText}get hasValueStateText(){return this.hasValueState&&this.valueState!==k.Success}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this._iconPressed&&!this._isPickerOpen&&!this._isPhone}get _ariaRoleDescription(){return at.i18nBundle.getText(Sy)}get _isPhone(){return Y()}get _filteredItems(){return this.options.filter(e=>!e.disabled)}itemSelectionAnnounce(){let e;const n=this._filteredItems.length,i=at.i18nBundle.getText(Iy,this._selectedIndex+1,n);this.focused&&this._currentlySelectedOption&&(e=`${this._currentlySelectedOption.textContent} ${this._isPickerOpen?i:""}`,WS(e,ka.Polite))}async openValueStatePopover(){this.valueStatePopover=await this._getPopover(),this.valueStatePopover&&this.valueStatePopover.showAt(this)}closeValueStatePopover(){this.valueStatePopover&&this.valueStatePopover.close()}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}get selectedOptionIcon(){return this.selectedOption&&this.selectedOption.icon}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}static async onDefine(){at.i18nBundle=await ie("@ui5/webcomponents")}};rt([d({type:Boolean})],He.prototype,"disabled",void 0);rt([d()],He.prototype,"name",void 0);rt([d({type:k,defaultValue:k.None})],He.prototype,"valueState",void 0);rt([d({type:Boolean})],He.prototype,"required",void 0);rt([d()],He.prototype,"accessibleName",void 0);rt([d()],He.prototype,"accessibleNameRef",void 0);rt([d({type:String,noAttribute:!0})],He.prototype,"_text",void 0);rt([d({type:Boolean,noAttribute:!0})],He.prototype,"_iconPressed",void 0);rt([d({type:Boolean})],He.prototype,"opened",void 0);rt([d({validator:Se,defaultValue:0,noAttribute:!0})],He.prototype,"_listWidth",void 0);rt([d({type:Boolean})],He.prototype,"focused",void 0);rt([Z({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],He.prototype,"options",void 0);rt([Z()],He.prototype,"formSupport",void 0);rt([Z()],He.prototype,"valueStateMessage",void 0);He=at=rt([U({tag:"ui5-select",languageAware:!0,renderer:he,template:qS,staticAreaTemplate:YS,styles:n$,staticAreaStyles:[Lu,Ou,i$],dependencies:[jS,ms,Du,ur,Bu,Pu,Ut,Oi]}),I("change",{detail:{selectedOption:{type:HTMLElement}}}),I("open"),I("close")],He);He.define();const o$="less",og="M464 224q16 0 16 16v32q0 16-16 16H48q-6 0-11-4.5T32 272v-32q0-7 5-11.5t11-4.5h416z",r$=!1,a$="SAP-icons-v4",s$="@ui5/webcomponents-icons";G(o$,{pathData:og,ltr:r$,collection:a$,packageName:s$});const l$="less",rg="M454 275H58q-11 0-18.5-7T32 250t7.5-18.5T58 224h396q11 0 18.5 7.5T480 250t-7.5 18-18.5 7z",c$=!1,u$="SAP-icons-v5",_$="@ui5/webcomponents-icons";G(l$,{pathData:rg,ltr:c$,collection:u$,packageName:_$});Ue();var Cc;(function(t){t.Textual="Textual",t.Graphical="Graphical"})(Cc||(Cc={}));const Sc=Cc;function d$(t,e,n){return n?p`<div class="ui5-switch-root ${N(this.classes.main)}" role="switch" aria-label="${l(this.ariaLabelText)}" aria-checked="${l(this.checked)}" aria-disabled="${l(this.effectiveAriaDisabled)}" aria-required="${l(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${l(this.effectiveTabIndex)}" dir="${l(this.effectiveDir)}" title="${l(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?Jd.call(this,t,e,n):Kd.call(this,t,e,n)}<span class="ui5-switch-handle" part="handle"><${v("ui5-icon",e,n)} name="${l(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${v("ui5-icon",e,n)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`:p`<div class="ui5-switch-root ${N(this.classes.main)}" role="switch" aria-label="${l(this.ariaLabelText)}" aria-checked="${l(this.checked)}" aria-disabled="${l(this.effectiveAriaDisabled)}" aria-required="${l(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${l(this.effectiveTabIndex)}" dir="${l(this.effectiveDir)}" title="${l(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?Jd.call(this,t,e,n):Kd.call(this,t,e,n)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${l(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`}function Jd(t,e,n){return n?p`<span class="ui5-switch-text ui5-switch-text--on"><${v("ui5-icon",e,n)} name="accept" class="ui5-switch-icon-on"></${v("ui5-icon",e,n)}></span><span class="ui5-switch-text ui5-switch-text--off"><${v("ui5-icon",e,n)} name="decline" class="ui5-switch-icon-off"></${v("ui5-icon",e,n)}></span>`:p`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`}function Kd(t,e,n){return p`${this.hasNoLabel?h$.call(this,t,e,n):p$.call(this,t,e,n)}`}function h$(t,e,n){return n?p`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${v("ui5-icon",e,n)} name="${l(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${v("ui5-icon",e,n)}></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><${v("ui5-icon",e,n)} name="${l(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${v("ui5-icon",e,n)}></span>`:p`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${l(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><ui5-icon name="${l(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`}function p$(t,e,n){return p`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${l(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${l(this._textOff)}</span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const f$={packageName:"@ui5/webcomponents",fileName:"themes/Switch.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
:host(:not([hidden])) {
	display: inline-block;
}
.ui5-switch-root {
	position: relative;
	display: flex;
	align-items: center;
	width: var(--_ui5_switch_width);
	height: var(--_ui5_switch_height);
	min-width: var(--_ui5_switch_min_width);
	cursor: pointer;
	outline: none;
	border-radius: var(--_ui5-switch-root-border-radius);
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) {
	width: var(--_ui5_switch_with_label_width);
	height: var(--_ui5_switch_height);
}
.ui5-switch-root.ui5-switch--no-label {
	min-width: var(--_ui5_switch_width);
}
.ui5-switch-inner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	min-width: inherit;
	overflow: hidden;
	pointer-events: none;
	will-change: transform;
}
:host([checked]) .ui5-switch-inner {
	border-radius: 6.25rem;
	box-shadow: var(--_ui5-switch-root-box-shadow);
}
.ui5-switch-track {
	display: flex;
	align-items: center;
	height: var(--_ui5_switch_track_height);
	width: var(--_ui5_switch_track_width);
	border: var(--_ui5-switch-track-border);
	border-radius: var(--_ui5_switch_track_border_radius);
	box-sizing: border-box;
	transition: var(--_ui5_switch_track_transition);
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track {
	height: var(--_ui5_switch_track_with_label_height);
	width: var(--_ui5_switch_track_with_label_width);
}
.ui5-switch-slider {
	position: relative;
	height: var(--_ui5_switch_height);
	width: 100%;
	transition: transform 0.1s ease-in;
	transform-origin: top left;
}
.ui5-switch-slider > *:not(.ui5-switch-handle) {
	display: var(--_ui5-switch-slider-texts-display);
}
.ui5-switch-handle {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--_ui5_switch_handle_width);
	height: var(--_ui5_switch_handle_height);
	border: var(--_ui5_switch_handle_border);
	border-radius: var(--_ui5_switch_handle_border_radius);
	box-sizing: border-box;
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle {
	height: var(--_ui5_switch_handle_with_label_height);
	width: var(--_ui5_switch_handle_with_label_width);
}
.ui5-switch-handle-icon {
	display: var(--_ui5-switch-handle-icon-display);
	transition: var(--_ui5_switch_track_transition);
}
:host([checked]) .ui5-switch-handle-icon {
	color: var(--_ui5-switch_track-on-background)
}
.ui5-switch-text {
	display: flex;
	justify-content: center;
	position: absolute;
	z-index: var(--_ui5_switch_text_z_index);
	min-width: var(--_ui5_switch_text_min_width);
	font-size: var(--_ui5_switch_text_font_size);
	font-family: var(--_ui5-switch-text_font_family);
	text-transform: uppercase;
	text-align: center;
	white-space: nowrap;
	user-select: none;
	-webkit-user-select: none;
}
.ui5-switch-handle,
.ui5-switch-text {
	left: var(--_ui5_switch_handle_left);
	top: 50%;
	transform: translateY(-50%);
}
/* switch focused */
.ui5-switch-desktop.ui5-switch-root:focus::after {
	content: "";
	position: absolute;
	left: var(--_ui5_switch_root_outline_left);
	right: var(--_ui5_switch_root_outline_right);
	top: var(--_ui5_switch_root_outline_top);
	bottom: var(--_ui5_switch_root_outline_bottom);
	border: var(--_ui5_switch_focus_outline);
	border-radius: var(--_ui5_switch_root_after_boreder_radius);
	pointer-events: none;
	transition: var(--_ui5_switch_track_transition);
	outline: var(--_ui5_switch_root_after_outline);
}
/* switch hidden input */
.ui5-switch-root .ui5-switch-input {
	position: absolute;
	left: 0;
	width: 0;
	height: 0;
	margin: 0;
	visibility: hidden;
	-webkit-appearance: none;
}
/* switch disabled */
.ui5-switch-root.ui5-switch--disabled {
	opacity: var(--_ui5_switch_disabled_opacity);
	cursor: default;
}
.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off {
	visibility: var(--_ui5_switch_text_hidden);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on {
	visibility: var(--_ui5_switch_text_hidden);
}
.ui5-switch-root.ui5-switch--checked.ui5-switch--semantic .ui5-switch-text--on, 
.ui5-switch-root.ui5-switch--checked.ui5-switch-desktop.ui5-switch--no-label .ui5-switch-text--on {
	left: var(--_ui5_switch_text_active_left);
}
.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--semantic .ui5-switch-text--off,
.ui5-switch-root:not(.ui5-switch--checked).ui5-switch-desktop.ui5-switch--no-label .ui5-switch-text--off {
	left: var(--_ui5_switch_text_inactive_left);
	right: var(--_ui5_switch_text_inactive_right);
}
/* handle */
.ui5-switch-root.ui5-switch--checked .ui5-switch-handle {
	background: var(--_ui5_switch_handle_active_background_color);
	border-color: var(--_ui5_switch_handle_active_border_color);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle {
	background: var(--_ui5_switch_handle_inactive_background_color);
	border-color: var(--_ui5_switch_handle_inactive_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_hover_active_background_color);
	border-color: var(--_ui5_switch_handle_hover_active_border_color);
}
.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_hover_inactive_background_color);
	border-color: var(--_ui5_switch_handle_hover_inactive_border_color);
}
/* handle semantic */
.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_accept_background_color);
	border-color: var(--_ui5_switch_handle_semantic_accept_border_color);
}
.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_reject_background_color);
	border-color: var(--_ui5_switch_handle_semantic_reject_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_hover_accept_background_color);
	border-color: var(--_ui5_switch_handle_semantic_hover_accept_border_color);
}
.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_hover_reject_background_color);
	border-color: var(--_ui5_switch_handle_semantic_hover_reject_border_color);
}
/* track */
.ui5-switch-root.ui5-switch--checked .ui5-switch-track {
	background: var(--_ui5_switch_track_active_background_color);
	border-color: var(--_ui5_switch_track_active_border_color);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track {
	background: var(--_ui5_switch_track_inactive_background_color);
	border-color: var(--_ui5_switch_track_inactive_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_hover_active_background_color);
	border-color: var(--_ui5_switch_track_hover_active_border_color);
}
.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_hover_inactive_background_color);
	border-color: var(--_ui5_switch_track_hover_inactive_border_color);
}
/* track semantic*/
.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_accept_background_color);
	border-color: var(--_ui5_switch_track_semantic_accept_border_color);
}
.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_reject_background_color);
	border-color: var(--_ui5_switch_track_semantic_reject_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_hover_accept_background_color);
	border-color: var(--_ui5_switch_track_semantic_hover_accept_border_color);
}
.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_hover_reject_background_color);
	border-color: var(--_ui5_switch_track_semantic_hover_reject_border_color);
}
.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider {
	/* Move slider to oposite end, taking into account the handle as an offset. */
	/* Note: translate(calc()) does not work in IE11 */
	transform: var(--_ui5_switch_transform_with_label);
}
.ui5-switch-root.ui5-switch--checked .ui5-switch-slider {
	/* Move slider to oposite end, taking into account the handle as an offset. */
	/* Note: translate(calc()) does not work in IE11 */
	transform: var(--_ui5_switch_transform);
}
/* switch semantic icon and type noLabel icon in horizon theme */
.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,
.ui5-switch-root.ui5-switch--no-label .ui5-switch-text {
	display: flex;
	justify-content: center;

}
.ui5-switch--no-label .ui5-switch-no-label-icon-on,
.ui5-switch--no-label .ui5-switch-no-label-icon-off {
	width: var(--_ui5_switch_icon_width);
	height: var(--_ui5_switch_icon_height);
	display: var(--_ui5_switch_track_icon_display);
}
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off {
	width: var(--_ui5_switch_icon_width);
	height: var(--_ui5_switch_icon_height)
}
.ui5-switch-root .ui5-switch-text {
	font-family: var(--_ui5_switch_text_font_family);
	font-size: var(--_ui5_switch_text_font_size);
	width: var(--_ui5_switch_text_width);
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text {
	font-family: var(--_ui5_switch_text_with_label_font_family);
	font-size: var(--_ui5_switch_text_with_label_font_size);
	width: var(--_ui5_switch_text_with_label_width);
}
/* switch active effects */
/* active & off */
:host([active]) .ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track {
	background: var( --_ui5-switch_track-off-active-background);
}
/* active & on */
:host([active]) .ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5-switch_track-on-active-background);
}
.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_off_hover_box_shadow);
}
/* switch on hover, when switched on */
.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_on_hover_box_shadow);
}
/* semantic switch on hover, when switched off */
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_semantic_off_hover_box_shadow);
}
/* semantic switch on hover, when switched on */
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_semantic_on_hover_box_shadow);
}
/* Text */
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on {
	color: var(--_ui5_switch_text_semantic_accept_color);
}
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off {
	color: var(--_ui5_switch_text_semantic_reject_color);
}
.ui5-switch-root .ui5-switch-text--on {
	color: var(--_ui5_switch_text_active_color);
	overflow: var(--_ui5_switch_text_overflow);
	text-overflow: ellipsis;
}
.ui5-switch-root .ui5-switch-text--off {
	color: var(--_ui5_switch_text_inactive_color);
	overflow: var(--_ui5_switch_text_overflow);
	text-overflow: ellipsis;
}
.ui5-switch-root .ui5-switch-no-label-icon-on,
.ui5-switch-root .ui5-switch-icon-on {
	color: var(--_ui5_switch_text_active_color);
}
.ui5-switch-root .ui5-switch-no-label-icon-off,
.ui5-switch-root .ui5-switch-icon-off {
	color: var(--_ui5_switch_text_inactive_color);
}
/* RTL */
[dir="rtl"].ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider {
	transform: var(--_ui5_switch_rtl_transform_with_label);
}
[dir="rtl"].ui5-switch-root.ui5-switch--checked .ui5-switch-slider {
	transform: var(--_ui5_switch_rtl_transform);
}
[dir="rtl"].ui5-switch-root .ui5-switch-handle {
	left: auto;
	right: var(--_ui5_switch_handle_left);
}
[dir="rtl"].ui5-switch-root .ui5-switch-text--on {
	right: var(--_ui5_switch_text_active_left);
	left: var(--_ui5_switch_text_active_right);
}
[dir="rtl"].ui5-switch-root .ui5-switch-text--off {
	right: var(--_ui5_switch_text_inactive_left);
	left: var(--_ui5_switch_text_inactive_right);
}
`};var Lt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},$c;let ut=$c=class extends Q{onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=Ce("FormSupport");e?e.syncNativeHiddenInput(this,(n,i)=>{const o=n;i.checked=!!o.checked,i.disabled=!!o.disabled,i.value=o.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}get sapNextIcon(){return this.checked?"accept":"less"}_onclick(){this.toggle()}_onkeydown(e){H(e)&&e.preventDefault(),te(e)&&this._onclick()}_onkeyup(e){H(e)&&this._onclick()}toggle(){if(!this.disabled){this.checked=!this.checked;const e=!this.fireEvent("change",null,!0),n=!this.fireEvent("value-changed",null,!0);(e||n)&&(this.checked=!this.checked)}}get graphical(){return this.design===Sc.Graphical}get hasNoLabel(){return!(this.graphical||this.textOn||this.textOff)}get _textOn(){return this.graphical?"":this.textOn}get _textOff(){return this.graphical?"":this.textOff}get effectiveTabIndex(){return this.disabled?void 0:"0"}get classes(){const e=this.graphical||this.textOn||this.textOff;return{main:{"ui5-switch-desktop":xi(),"ui5-switch--disabled":this.disabled,"ui5-switch--checked":this.checked,"ui5-switch--semantic":this.graphical,"ui5-switch--no-label":!e}}}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get accessibilityOnText(){return this._textOn}get accessibilityOffText(){return this._textOff}get hiddenText(){return this.checked?this.accessibilityOnText:this.accessibilityOffText}get ariaLabelText(){return[tn(this),this.hiddenText].join(" ").trim()}static async onDefine(){$c.i18nBundle=await ie("@ui5/webcomponents")}};Lt([d({type:Sc,defaultValue:Sc.Textual})],ut.prototype,"design",void 0);Lt([d({type:Boolean})],ut.prototype,"checked",void 0);Lt([d({type:Boolean})],ut.prototype,"disabled",void 0);Lt([d()],ut.prototype,"textOn",void 0);Lt([d()],ut.prototype,"textOff",void 0);Lt([d()],ut.prototype,"accessibleName",void 0);Lt([d({defaultValue:""})],ut.prototype,"accessibleNameRef",void 0);Lt([d()],ut.prototype,"tooltip",void 0);Lt([d({type:Boolean})],ut.prototype,"required",void 0);Lt([d()],ut.prototype,"name",void 0);Lt([Z()],ut.prototype,"formSupport",void 0);ut=$c=Lt([U({tag:"ui5-switch",languageAware:!0,styles:f$,renderer:he,template:d$,dependencies:[Ut]}),I("change")],ut);ut.define();var Ic;(function(t){t.Button="Button",t.Scroll="Scroll",t.None="None"})(Ic||(Ic={}));const Ya=Ic;var Ec;(function(t){t.None="None",t.SingleSelect="SingleSelect",t.MultiSelect="MultiSelect"})(Ec||(Ec={}));const Vn=Ec;function m$(t,e,n){return p`<div class="ui5-table-root" @ui5-selection-requested="${l(this._handleSelect)}" @ui5-_forward-after="${l(this._onForwardAfter)}" @ui5-_forward-before="${l(this._onForwardBefore)}" @focusin="${this._onfocusin}"><div id="${l(this._id)}-before" tabindex="0" class="ui5-table-focusarea"></div>${this.busy?g$.call(this,t,e,n):void 0}<table border="0" cellspacing="0" cellpadding="0" @keydown="${this._onkeydown}" role="table" aria-label="${l(this.tableAriaLabelText)}"><thead><tr id="${l(this._columnHeader.id)}" class="ui5-table-header-row" aria-label="${l(this.ariaLabelText)}" tabindex="${l(this._columnHeader._tabIndex)}" @click="${this._onColumnHeaderClick}" @focusin="${this._onColumnHeaderFocused}" @keydown="${this._onColumnHeaderKeydown}">${this.isMultiSelect?v$.call(this,t,e,n):void 0}${X(this.visibleColumns,(i,o)=>i._id||o,(i,o)=>y$.call(this,t,e,n,i,o))}<th class="ui5-table-header-row-navigated" aria-hidden="true"></th></tr></thead><tbody>${X(this.rows,(i,o)=>i._id||o,(i,o)=>w$.call(this,t,e,n,i,o))}${this.rows.length?void 0:k$.call(this,t,e,n)}${this.growsWithButton?T$.call(this,t,e,n):void 0}${this.growsOnScroll?S$.call(this,t,e,n):void 0}</tbody></table><div id="${l(this._id)}-after" tabindex="0" class="ui5-table-focusarea"></div></div> `}function g$(t,e,n){return n?p`<div tabindex="-1" class="ui5-table-busy-row"><${v("ui5-busy-indicator",e,n)} delay="${l(this.busyDelay)}" class="ui5-table-busy-ind" style="${z(this.styles.busy)}" active size="Medium" data-sap-focus-ref></${v("ui5-busy-indicator",e,n)}></div>`:p`<div tabindex="-1" class="ui5-table-busy-row"><ui5-busy-indicator delay="${l(this.busyDelay)}" class="ui5-table-busy-ind" style="${z(this.styles.busy)}" active size="Medium" data-sap-focus-ref></ui5-busy-indicator></div>`}function v$(t,e,n){return p`<th class="ui5-table-select-all-column" role="presentation" aria-hidden="true">${this.rows.length?b$.call(this,t,e,n):void 0}</th>`}function b$(t,e,n){return n?p`<${v("ui5-checkbox",e,n)} class="ui5-table-select-all-checkbox" ?checked="${this._allRowsSelected}" @ui5-change="${l(this._selectAll)}" aria-label="${l(this.ariaLabelSelectAllText)}" tabindex="-1"></${v("ui5-checkbox",e,n)}>`:p`<ui5-checkbox class="ui5-table-select-all-checkbox" ?checked="${this._allRowsSelected}" @ui5-change="${l(this._selectAll)}" aria-label="${l(this.ariaLabelSelectAllText)}" tabindex="-1"></ui5-checkbox>`}function y$(t,e,n,i,o){return p`<slot name="${l(i._individualSlot)}"></slot>`}function w$(t,e,n,i,o){return p`<slot name="${l(i._individualSlot)}"></slot>`}function k$(t,e,n){return p`${this.hideNoData?void 0:x$.call(this,t,e,n)}`}function x$(t,e,n){return p`<tr class="ui5-table-no-data-row-root"><td colspan="${l(this.visibleColumnsCount)}" role="cell" style="width: 100%"><div class="ui5-table-no-data-row"><span>${l(this.noDataText)}</span></div></td></tr>`}function T$(t,e,n){return p`<tr><td colspan="${l(this.visibleColumnsCount)}"><div growing-button><div id="${l(this._id)}-growingButton" tabindex="0" role="button" aria-labelledby="${l(this.loadMoreAriaLabelledBy)}" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" growing-button-inner><span id="${l(this._id)}-growingButton-text" growing-button-text>${l(this._growingButtonText)}</span>${this.growingButtonSubtext?C$.call(this,t,e,n):void 0}</div></div></td></tr>`}function C$(t,e,n){return p`<span id="${l(this._id)}-growingButton-subtext" growing-button-subtext>${l(this.growingButtonSubtext)}</span>`}function S$(t,e,n){return p`<tr tabindex="-1" class="ui5-table-end-row"><td tabindex="-1"><span tabindex="-1" aria-hidden="true" class="ui5-table-end-marker"></span></td></tr>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const $$={packageName:"@ui5/webcomponents",fileName:"themes/Table.css",content:`[growing-button] {
	display: flex;
	align-items: center;
	padding: var(--_ui5_load_more_padding);
	border-top: 1px solid var(--sapList_BorderColor);
	border-bottom: var(--_ui5_load_more_border-bottom);
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
}

[growing-button-inner] {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: var(--_ui5_load_more_text_height);
	width: 100%;
	color: var(--sapButton_TextColor);
	background-color: var(--sapList_Background);
	border: var(--_ui5_load_more_border);
	border-radius: var(--_ui5_load_more_border_radius);
	box-sizing: border-box;
}

[growing-button-inner]:focus {
	outline: var(--_ui5_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: -0.125rem;
	border-color: transparent;
}

[growing-button-inner]:hover {
	background-color: var(--sapList_Hover_Background);
}

[growing-button-inner]:active,
[growing-button-inner][active] {
	background-color: var(--sapList_Active_Background);
	border-color: var(--sapList_Active_Background);
}

[growing-button-inner]:active > *,
[growing-button-inner][active] > * {
	color: var(--sapList_Active_TextColor);
}

[growing-button-text],
[growing-button-subtext] {
	width: 100%;
	text-align: center;
	font-family: "72override", var(--sapFontFamily);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
}

[growing-button-text] {
	height: var(--_ui5_load_more_text_height);
	padding: 0.875rem 1rem 0 1rem;
	font-size: var(--_ui5_load_more_text_font_size);
	font-weight: bold;
}

[growing-button-subtext] {
	font-size: var(--sapFontSize);
	padding: var(--_ui5_load_more_desc_padding);
}

:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
}

.ui5-table-root {
	position: relative;
	border-bottom: var(--ui5_table_bottom_border);
}

table {
	width: 100%;
	border-spacing: 0;
	border-collapse: collapse;
}

.ui5-table-header-row-navigated {
    width: 0.1875rem;
    background: var(--sapList_HeaderBackground);
    vertical-align: middle;
}

.ui5-table-header-row {
	color: var(--sapList_HeaderTextColor);
	height: var(--ui5_table_header_row_height);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: var(--ui5_table_header_row_font_weight);
	border-bottom: var(--ui5_table_header_row_border_width) solid var(--ui5_table_header_row_border_bottom_color);
}

.ui5-table-header-row:focus {
	outline: var(--ui5_table_header_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: var(--ui5_table_focus_outline_offset);
}

tr {
	height: 3rem;
}

.ui5-table-no-data-row {
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	justify-content: center;
	text-align: center;
	padding: 0.5rem 1rem;
	font-family: "72override", var(--sapFontFamily);
	font-size: 0.875rem;
	box-sizing: border-box;
	color: var(--sapTextColor);
	min-height: 3rem;
	background-color: var(--sapList_Background);
}

.ui5-table-end-row {
	height: 0px;
}

:host([busy]) .ui5-table-busy-row {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	outline: none;
}

:host([busy]) .ui5-table-busy-ind {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}

:host([busy]) [growing-button] {
	opacity: 0.72;
}

:host [growing-button] {
	border-bottom: var(--_ui5_table_load_more_border-bottom);
}

.ui5-table-select-all-column {
	width: var(--ui5_table_multiselect_column_width);
	text-align: center;
}

:host([sticky-column-header]) .ui5-table-header-row {
	position: sticky;
	top: 0;
	z-index: 99;
}

th {
	background: var(--sapList_HeaderBackground);
}

.ui5-table-focusarea {
	position: fixed;
}
`};var $e=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ui;const I$=250,E$=20;var Ee;(function(t){t.Row="tableRow",t.GroupRow="tableGroupRow",t.ColumnHeader="columnHeader",t.MoreButton="moreButton"})(Ee||(Ee={}));let me=ui=class extends Q{static async onDefine(){ui.i18nBundle=await ie("@ui5/webcomponents")}constructor(){super(),this.visibleColumns=[],this._columnHeader={id:`${this._id}-columnHeader`,_tabIndex:"0"},this._itemNavigation=new $u(this,{navigationMode:pi.Vertical,affectedPropertiesNames:["_columnHeader"],getItemsCallback:()=>[this._columnHeader,...this.rows],skipItemsSize:E$}),this._handleResize=this.popinContent.bind(this),this.fnOnRowFocused=this.onRowFocused.bind(this),this.fnHandleF7=this._handleF7.bind(this),this.tableEndObserved=!1,this.lastFocusedElement=null,this._forwardingFocus=!1,this._prevNestedElementIndex=0}onBeforeRendering(){const e=this.getColumnPropagationSettings(),n=JSON.stringify(e),i=this.rows.length+1,o=this.selectedRows;this.rows.forEach((r,a)=>{r._columnsInfoString!==n&&(r._columnsInfo=e,r._columnsInfoString=JSON.stringify(r._columnsInfo)),r._ariaPosition=ui.i18nBundle.getText(Ny,a+2,i),r._busy=this.busy,r.removeEventListener("ui5-_focused",this.fnOnRowFocused),r.addEventListener("ui5-_focused",this.fnOnRowFocused),r.removeEventListener("ui5-f7-pressed",this.fnHandleF7),r.addEventListener("ui5-f7-pressed",this.fnHandleF7),r.mode=this.mode}),this.visibleColumns=this.columns.filter((r,a)=>!this._hiddenColumns[a]),this._noDataDisplayed=!this.rows.length&&!this.hideNoData,this.visibleColumnsCount=this.visibleColumns.length,this.isMultiSelect&&(this.visibleColumnsCount+=1),this._allRowsSelected=o.length===this.rows.length,this._prevFocusedRow=this._prevFocusedRow||this.rows[0]}onAfterRendering(){this.growsOnScroll&&this.observeTableEnd(),this.checkTableInViewport()}onEnterDOM(){this.growingIntersectionObserver=this.getIntersectionObserver(),At.register(this.getDomRef(),this._handleResize),this._itemNavigation.setCurrentItem(this.rows.length?this.rows[0]:this._columnHeader)}onExitDOM(){At.deregister(this.getDomRef(),this._handleResize),this.growingIntersectionObserver.disconnect(),this.growingIntersectionObserver=null,this.tableEndObserved=!1}_onkeydown(e){(Kt(e)||Fn(e))&&this._handleTab(e),bf(e)&&(e.preventDefault(),this.isMultiSelect&&this._selectAll()),(U_(e)||ry(e))&&this._handleArrowAlt(e),(hn(e)||Zt(e))&&this.isMultiSelect&&this._handleArrowNav(e),bo(e)&&(e.preventDefault(),this._itemNavigation._handleHome(),this._itemNavigation._applyTabIndex(),this._itemNavigation._focusCurrentItem()),ki(e)&&(e.preventDefault(),this._itemNavigation._handleEnd(),this._itemNavigation._applyTabIndex(),this._itemNavigation._focusCurrentItem()),(Wl(e)||jl(e))&&this.isMultiSelect&&this._handleHomeEndSelection(e)}_handleTab(e){var r;const n=Kt(e),i=Xo(e.target),o=this.getFocusedElementType(e.target);if(this.columnHeaderTabbables.includes(i))return n&&this.columnHeaderLastElement===i?this._focusNextElement():void 0;if(n&&o===Ee.ColumnHeader&&!this.columnHeaderTabbables.length)return this._focusNextElement();if(!(o===Ee.Row||!o))switch(o){case Ee.GroupRow:return n?this._focusNextElement():this._focusForwardElement(!1);case Ee.ColumnHeader:return!n&&this._focusForwardElement(!1);case Ee.MoreButton:n?this._focusForwardElement(!0):(e.preventDefault(),(r=this.currentElement)==null||r.focus())}}_focusNextElement(){this.growsWithButton?this.morеBtn.focus():this._focusForwardElement(!0)}_handleArrowNav(e){if(!(this.currentElement.localName==="tr"))return;const i=this.selectedRows,o=this.currentItem,r=this.currentItemIdx,a=r-1,s=r+1,c=this.rows[a],u=this.rows[s],h=!!o.selected;if(hn(e)&&!c||Zt(e)&&!u)return;hn(e)&&(o.selected=o.selected&&!c.selected,c.selected=o.selected||h&&!o.selected,c.focus()),Zt(e)&&(o.selected=o.selected&&!u.selected,u.selected=o.selected||h&&!o.selected,u.focus());const _=this.selectedRows;this.fireEvent("selection-change",{selectedRows:_,previouslySelectedRows:i})}_handleHomeEndSelection(e){if(!(this.currentElement.localName==="tr"))return;const i=this.rows,o=this.selectedRows,r=this.currentItemIdx;Wl(e)&&(i.slice(0,r+1).forEach(s=>{s.selected=!0}),i[0].focus()),jl(e)&&(i.slice(r).forEach(s=>{s.selected=!0}),i[i.length-1].focus());const a=this.selectedRows;this.fireEvent("selection-change",{selectedRows:a,previouslySelectedRows:o})}_handleArrowAlt(e){var r;const n=U_(e),i=e.target,o=this.getFocusedElementType(i);if(n)switch(o){case Ee.Row:case Ee.GroupRow:return this._prevFocusedRow=i,this._onColumnHeaderClick(e);case Ee.ColumnHeader:return this.morеBtn?this.morеBtn.focus():(r=this._prevFocusedRow)==null?void 0:r.focus();case Ee.MoreButton:return this._prevFocusedRow?this._prevFocusedRow.focus():this._onColumnHeaderClick(e)}else switch(o){case Ee.Row:case Ee.GroupRow:return this._prevFocusedRow=i,this.morеBtn?this.morеBtn.focus():this._onColumnHeaderClick(e);case Ee.ColumnHeader:this._prevFocusedRow?this._prevFocusedRow.focus():this.morеBtn&&this.morеBtn.focus();return;case Ee.MoreButton:return this._onColumnHeaderClick(e)}}getFocusedElementType(e){if(e===this.columnHeader)return Ee.ColumnHeader;if(e===this.morеBtn)return Ee.MoreButton;if(this.rows.includes(e))return e.hasAttribute("ui5-table-group-row")?Ee.GroupRow:Ee.Row}_handleF7(e){const n=e.detail.row;n._tabbables=ac(n);const i=Sr(),o=n._tabbables[this._prevNestedElementIndex]||n._tabbables[0],r=n._tabbables.indexOf(i);n._tabbables.length&&(i===n.root?o.focus():r>-1&&(this._prevNestedElementIndex=r,n.root.focus()))}_onfocusin(e){const n=Xo(e.target);if(!this._isForwardElement(n)){this.lastFocusedElement=n;return}this._forwardingFocus||(this.lastFocusedElement?this.lastFocusedElement.focus():this.currentElement.focus(),e.stopImmediatePropagation()),this._forwardingFocus=!1}_onForwardBefore(e){this.lastFocusedElement=e.detail.target,this._focusForwardElement(!1),e.stopImmediatePropagation()}_onForwardAfter(e){this.lastFocusedElement=e.detail.target,this.growsWithButton?this.morеBtn.focus():this._focusForwardElement(!0)}_focusForwardElement(e){this._forwardingFocus=!0,this.shadowRoot.querySelector(`#${this._id}-${e?"after":"before"}`).focus()}_isForwardElement(e){const n=e.id,i=this._getForwardElement(!0),o=this._getForwardElement(!1);return this._id===n||o&&o.id===n?!0:!!(i&&i.id===n)}_getForwardElement(e){return e?this._getAfterForwardElement():this._getBeforeForwardElement()}_getAfterForwardElement(){return this._afterElement||(this._afterElement=this.shadowRoot.querySelector(`#${this._id}-after`)),this._afterElement}_getBeforeForwardElement(){return this._beforeElement||(this._beforeElement=this.shadowRoot.querySelector(`#${this._id}-before`)),this._beforeElement}onRowFocused(e){this._itemNavigation.setCurrentItem(e.target)}_onColumnHeaderFocused(){this._itemNavigation.setCurrentItem(this._columnHeader)}_onColumnHeaderClick(e){e.target||this.columnHeader.focus();const n=Xo(e.target);this.columnHeaderTabbables.includes(n)||this.columnHeader.focus()}_onColumnHeaderKeydown(e){H(e)&&(e.preventDefault(),this.isMultiSelect&&this._selectAll())}_onLoadMoreKeydown(e){H(e)&&(e.preventDefault(),this._loadMoreActive=!0),te(e)&&(this._onLoadMoreClick(),this._loadMoreActive=!0)}_onLoadMoreKeyup(e){H(e)&&this._onLoadMoreClick(),this._loadMoreActive=!1}_onLoadMoreClick(){this.fireEvent("load-more")}observeTableEnd(){this.tableEndObserved||(this.getIntersectionObserver().observe(this.tableEndDOM),this.tableEndObserved=!0)}onInteresection(e){e.some(n=>n.isIntersecting)&&jm(this.loadMore.bind(this),I$)}loadMore(){this.fireEvent("load-more")}_handleSingleSelect(e){const n=this.getRowParent(e.target);if(n&&!n.selected){const i=this.selectedRows;this.rows.forEach(o=>{o.selected&&(o.selected=!1)}),n.selected=!0,this.fireEvent("selection-change",{selectedRows:[n],previouslySelectedRows:i})}}_handleMultiSelect(e){const n=this.getRowParent(e.target),i=this.selectedRows;if(!n)return;n.selected=!n.selected;const o=this.selectedRows;o.length===this.rows.length?this._allRowsSelected=!0:this._allRowsSelected=!1,this.fireEvent("selection-change",{selectedRows:o,previouslySelectedRows:i})}_handleSelect(e){if(this.isSingleSelect){this._handleSingleSelect(e);return}this.isMultiSelect&&this._handleMultiSelect(e)}_selectAll(){const e=!this._allRowsSelected,n=this.rows.filter(o=>o.selected);this._allRowsSelected=e,this.rows.forEach(o=>{o.selected=e});const i=e?this.rows:[];this.fireEvent("selection-change",{selectedRows:i,previouslySelectedRows:n})}getRowParent(e){if(e.hasAttribute("ui5-table-row"))return e;const n=e.parentElement;if(n)return n.hasAttribute("ui5-table-row")?n:this.getRowParent(n)}get columnHeader(){const e=this.getDomRef();return e?e.querySelector(`#${this._id}-columnHeader`):null}get morеBtn(){const e=this.getDomRef();return this.growsWithButton&&e?e.querySelector(`#${this._id}-growingButton`):null}handleResize(){this.checkTableInViewport(),this.popinContent()}checkTableInViewport(){this._inViewport=qm(this.getDomRef())}popinContent(){const n=this.getDomRef().getBoundingClientRect().width,i=[],o=[];this.columns.forEach((a,s)=>{n<a.minWidth&&a.minWidth!==1/0?i[s]={index:s,popinText:a.popinText,demandPopin:a.demandPopin}:o.push(s)}),o.length&&(this.isMultiSelect||(this.columns[o[0]].first=!0),this.columns[o[o.length-1]].last=!0),(this._hiddenColumns.length!==i.length||this._hiddenColumns.some((a,s)=>a!==i[s]))&&(this._hiddenColumns=i,i.length&&this.fireEvent("popin-change",{poppedColumns:this._hiddenColumns}))}getColumnPropagationSettings(){return this.columns.map((e,n)=>({index:n,minWidth:e.minWidth,demandPopin:e.demandPopin,text:e.textContent,popinText:e.popinText,popinDisplay:e.popinDisplay,visible:!this._hiddenColumns[n]}),this)}getIntersectionObserver(){return this.growingIntersectionObserver||(this.growingIntersectionObserver=new IntersectionObserver(this.onInteresection.bind(this),{root:document,rootMargin:"0px",threshold:1})),this.growingIntersectionObserver}get styles(){return{busy:{position:this.busyIndPosition}}}get growsWithButton(){return this.growing===Ya.Button}get growsOnScroll(){return this.growing===Ya.Scroll}get _growingButtonText(){return this.growingButtonText||ui.i18nBundle.getText(Cf)}get ariaLabelText(){const e=this.rows.length+1,n=ui.i18nBundle.getText(Fy,e),i=this.columns.map(o=>o.textContent.trim()).join(" ");return`${n} ${i}`}get tableAriaLabelText(){return tn(this)}get ariaLabelSelectAllText(){return ui.i18nBundle.getText(Hy)}get loadMoreAriaLabelledBy(){return this.moreDataText?`${this._id}-growingButton-text ${this._id}-growingButton-subtext`:`${this._id}-growingButton-text`}get tableEndDOM(){return this.shadowRoot.querySelector(".ui5-table-end-marker")}get busyIndPosition(){return this._inViewport?"absolute":"sticky"}get isMultiSelect(){return this.mode===Vn.MultiSelect}get isSingleSelect(){return this.mode===Vn.SingleSelect}get selectedRows(){return this.rows.filter(e=>e.selected)}get currentItemIdx(){return this.rows.indexOf(this.currentItem)}get currentItem(){return this.getRootNode().activeElement}get currentElement(){return this._itemNavigation._getCurrentItem()}get columnHeaderTabbables(){return this.columnHeader?ac(this.columnHeader):[]}get columnHeaderLastElement(){return this.columnHeader&&Dm(this.columnHeader)}};$e([d()],me.prototype,"noDataText",void 0);$e([d()],me.prototype,"growingButtonText",void 0);$e([d()],me.prototype,"growingButtonSubtext",void 0);$e([d({type:Boolean})],me.prototype,"hideNoData",void 0);$e([d({type:Ya,defaultValue:Ya.None})],me.prototype,"growing",void 0);$e([d({type:Boolean})],me.prototype,"busy",void 0);$e([d({validator:Se,defaultValue:1e3})],me.prototype,"busyDelay",void 0);$e([d({type:Boolean})],me.prototype,"stickyColumnHeader",void 0);$e([d({type:Vn,defaultValue:Vn.None})],me.prototype,"mode",void 0);$e([d({defaultValue:void 0})],me.prototype,"accessibleName",void 0);$e([d({defaultValue:""})],me.prototype,"accessibleNameRef",void 0);$e([d({type:Object,multiple:!0})],me.prototype,"_hiddenColumns",void 0);$e([d({type:Boolean})],me.prototype,"_noDataDisplayed",void 0);$e([d({type:Boolean})],me.prototype,"_loadMoreActive",void 0);$e([d({type:Object})],me.prototype,"_columnHeader",void 0);$e([d({type:Boolean})],me.prototype,"_inViewport",void 0);$e([d({type:Boolean})],me.prototype,"_allRowsSelected",void 0);$e([Z({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],me.prototype,"rows",void 0);$e([Z({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],me.prototype,"columns",void 0);me=ui=$e([U({tag:"ui5-table",fastNavigation:!0,styles:$$,renderer:he,template:m$,dependencies:[Af,Su]}),I("row-click",{detail:{row:{type:HTMLElement}}}),I("popin-change",{detail:{poppedColumns:{type:Array}}}),I("load-more"),I("selection-change",{detail:{selectedRows:{type:Array},previouslySelectedRows:{type:Array}}})],me);me.define();function A$(t,e,n){return p`<td tabindex="-1" part="cell" role="cell"><slot></slot></td>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const D$={packageName:"@ui5/webcomponents",fileName:"themes/TableCell.css",content:`:host {
	display: table-cell;
	font-family: "72override", var(--sapFontFamily);
	font-size: 0.875rem;
	height: var(--ui5_table_row_height);
	box-sizing: border-box;
	color: var(--sapContent_LabelColor);
	word-break: break-word;
	vertical-align: middle;
}

td {
	display: contents;
}

:host([popined]) {
	padding-left: 0;
	padding-top: .25rem;
}

:host([_popined-inline]) {
	padding-top: 0;
}

::slotted([ui5-label]) {
	color: inherit;
}`};var Rr=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},xa;let Ai=xa=class extends Q{static async onDefine(){xa.i18nBundle=await ie("@ui5/webcomponents")}get cellContent(){return this.getSlottedNodes("content")}get ariaLabelEmptyCellText(){return xa.i18nBundle.getText(Uy)}};Rr([d({type:Boolean})],Ai.prototype,"lastInRow",void 0);Rr([d({type:Boolean})],Ai.prototype,"popined",void 0);Rr([d({type:Boolean})],Ai.prototype,"_popinedInline",void 0);Rr([Z({type:HTMLElement,default:!0})],Ai.prototype,"content",void 0);Ai=xa=Rr([U({tag:"ui5-table-cell",renderer:he,template:A$,styles:D$})],Ai);Ai.define();function B$(t,e,n){return p`<th scope="col" part="column" role="columnheader"><slot></slot></th>`}var Ac;(function(t){t.Block="Block",t.Inline="Inline"})(Ac||(Ac={}));const Ga=Ac;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const P$={packageName:"@ui5/webcomponents",fileName:"themes/TableColumn.css",content:`:host {
	display: contents;
}

th {
	background: var(--sapList_HeaderBackground);
	width: inherit;
	font-weight: var(--ui5_table_header_row_font_weight);
	font-size: var(--sapFontMediumSize);
	padding: 0.5rem;
	box-sizing: border-box;
	text-align: start;
	vertical-align: middle;
}

:host([first]) th {
	padding-inline-start: 1rem;
}

th ::slotted([ui5-label]) {
	font-weight: var(--ui5_table_header_row_font_weight);
	font-size: var(--sapFontMediumSize);
}`};var Mi=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let fn=class extends Q{};Mi([d({validator:Se,defaultValue:1/0})],fn.prototype,"minWidth",void 0);Mi([d()],fn.prototype,"popinText",void 0);Mi([d({type:Boolean})],fn.prototype,"demandPopin",void 0);Mi([d({type:Ga,defaultValue:Ga.Block})],fn.prototype,"popinDisplay",void 0);Mi([d({type:Boolean})],fn.prototype,"first",void 0);Mi([d({type:Boolean})],fn.prototype,"last",void 0);fn=Mi([U({tag:"ui5-table-column",styles:P$,renderer:he,template:B$})],fn);fn.define();var Dc;(function(t){t.Inactive="Inactive",t.Active="Active"})(Dc||(Dc={}));const Qo=Dc;function L$(t,e,n){return p`<tr class="ui5-table-row-root" tabindex="${l(this._tabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onrowclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mouseup="${this._onmouseup}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" aria-label="${l(this.ariaLabelText)}" aria-selected="${l(this.selected)}" aria-current="${l(this._ariaCurrent)}" data-sap-focus-ref part="row">${this.isMultiSelect?O$.call(this,t,e,n):void 0}${this.shouldPopin?R$.call(this,t,e,n):F$.call(this,t,e,n)}<td class="ui5-table-row-navigated" aria-hidden="true"><div class="ui5-table-div-navigated"></div></td></tr>${this.shouldPopin?z$.call(this,t,e,n):void 0} `}function O$(t,e,n){return n?p`<td class="ui5-table-multi-select-cell" aria-hidden="true" role="presentation"><${v("ui5-checkbox",e,n)} class="ui5-multi-select-checkbox" ?checked="${this.selected}" aria-label="${l(this.ariaLabelRowSelection)}" @ui5-change="${l(this._handleSelection)}" tabindex="-1"></${v("ui5-checkbox",e,n)}></td>`:p`<td class="ui5-table-multi-select-cell" aria-hidden="true" role="presentation"><ui5-checkbox class="ui5-multi-select-checkbox" ?checked="${this.selected}" aria-label="${l(this.ariaLabelRowSelection)}" @ui5-change="${l(this._handleSelection)}" tabindex="-1"></ui5-checkbox></td>`}function R$(t,e,n){return p`${X(this.visibleCells,(i,o)=>i._id||o,(i,o)=>M$.call(this,t,e,n,i,o))}`}function M$(t,e,n,i,o){return p`<slot name="${l(i._individualSlot)}"></slot>`}function F$(t,e,n){return p`${X(this.cells,(i,o)=>i._id||o,(i,o)=>N$.call(this,t,e,n,i,o))}`}function N$(t,e,n,i,o){return p`<slot name="${l(i._individualSlot)}"></slot>`}function z$(t,e,n){return p`${X(this.popinCells,(i,o)=>i._id||o,(i,o)=>H$.call(this,t,e,n,i,o))}`}function H$(t,e,n,i,o){return p`<tr part="popin-row" class="${l(i.classes)}" @click="${this._onrowclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><td colspan="${l(this.visibleCellsCount)}" role="cell">${i.popinDisplayInline?U$.call(this,t,e,n,i,o):W$.call(this,t,e,n,i,o)}</td><td class="ui5-table-row-navigated" aria-hidden="true"><div class="ui5-table-div-navigated"></div></td></tr>`}function U$(t,e,n,i,o){return p`<div class="ui5-table-display-inline-container">${i.popinText?V$.call(this,t,e,n,i,o):void 0}<span class="ui5-table-cell-display-inline"><slot name="${l(i.cell._individualSlot)}"></slot></span></div>`}function V$(t,e,n,i,o){return p`<span class="ui5-table-row-popin-title">${l(i.popinText)}:</span>`}function W$(t,e,n,i,o){return p`${i.popinText?j$.call(this,t,e,n,i,o):void 0}<div><slot name="${l(i.cell._individualSlot)}"></slot></div>`}function j$(t,e,n,i,o){return p`<span class="ui5-table-row-popin-title">${l(i.popinText)}:</span>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const q$={packageName:"@ui5/webcomponents",fileName:"themes/TableRow.css",content:`:host {
	display: contents;
}

:host([_busy]) .ui5-table-row-root {
	opacity: 0.72;
	pointer-events: none;
}

.ui5-table-row-root {
	background-color: var(--sapList_Background);
	color: var(--sapList_TextColor);
	border-top: 1px solid var(--sapList_BorderColor);
}

.ui5-table-row-root:focus {
	outline: var(--ui5_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	outline-offset: var(--ui5_table_focus_outline_offset);
}

.ui5-table-popin-row {
	background-color: var(--sapList_Background);
}

.ui5-table-popin-row.all-columns-popped-in.popin-header {
	border-top: 1px solid var(--sapList_BorderColor);
}

.ui5-table-popin-row td:not(.ui5-table-row-navigated) {
	padding-top: .5rem;
	padding-inline-start: 1rem;
}

.ui5-table-popin-row:last-child td {
	padding-bottom: .5rem;
}

.ui5-table-row-popin-title {
	color: var(--sapContent_LabelColor);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
}

.ui5-table-cell-display-inline {
	margin-inline-start: 0.5rem;
}

.ui5-table-display-inline-container {
	display: flex;
	align-items: center;
}

.ui5-table-multi-select-cell {
	padding: .25rem 0;
	box-sizing: border-box;
	text-align: center;
	vertical-align: middle;
}

:host([mode="SingleSelect"]) .ui5-table-row-root {
	cursor: pointer;
}

:host([mode="MultiSelect"]) .ui5-table-row-root .ui5-table-multi-select-cell {
	cursor: pointer;
}

:host ::slotted([ui5-table-cell]:not([popined])) {
	padding: .25rem .5rem;
}

:host(:not([mode="MultiSelect"])) ::slotted([ui5-table-cell]:not([popined]):first-child) {
	padding-inline-start: 1rem;
}

/** Hover **/

:host([type="Active"]) .ui5-table-row-root:hover,
:host([mode="SingleSelect"]) .ui5-table-row-root:hover:not(:active) {
	background-color: var(--sapList_Hover_Background);
}

/** Down/Active **/

:host([type="Active"]) .ui5-table-row-root:active,
:host([selected][type="Active"]) .ui5-table-row-root:active {
	background-color: var(--sapList_Active_Background);
}

:host([type="Active"]) .ui5-table-row-root:active ::slotted([ui5-table-cell]) {
	color: var(--sapList_Active_TextColor);
}

/** Selected **/

:host([selected]) .ui5-table-row-root:not(:active) {
	background-color: var(--sapList_SelectionBackgroundColor);
	border-bottom: 1px solid var(--sapList_SelectionBorderColor);
}

/** Hover on Selected **/

:host([selected][type="Active"]) .ui5-table-row-root:hover:not(:active),
:host([selected][mode="SingleSelect"]) .ui5-table-row-root:hover:not(:active) {
	background-color: var(--sapList_Hover_SelectionBackground);
}

/** Navigated **/

:host([navigated]) .ui5-table-row-root:focus .ui5-table-div-navigated {
    width: 0.09375rem;
	top: 2px;
	inset-inline-end: 2px;
	bottom: 1px;
}

:host([navigated]) .ui5-table-row-navigated {
    vertical-align: middle;
    padding: 0;
    position: relative;
}

:host([navigated]) .ui5-table-div-navigated {
	width: 0.1875rem;
    position: absolute;
	inset: 0;
    background-color: var(--sapList_SelectionBorderColor);
}
`};var Wt=globalThis&&globalThis.__decorate||function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,n,r):a(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},ji;let vt=ji=class extends Q{constructor(){super(),this.visibleCells=[],this.popinCells=[],this._tabbables=[],this._columnsInfoString="";const e=()=>{this.activate()};this._ontouchstart={handleEvent:e,passive:!0}}_onmouseup(){this.deactivate()}_onkeydown(e){const n=Sr(),i=this.type===Qo.Active,o=this.isSingleSelect,r=o||this.isMultiSelect,a=this._activeElementHasAttribute("ui5-table-row"),s=e.target,c=s.classList.contains("ui5-multi-select-checkbox"),_=Array.from(this.shadowRoot.querySelectorAll("tr")||[]).map(Dm).pop();Kt(e)&&n===(_||this.root)&&this.fireEvent("_forward-after",{target:n}),Fn(e)&&n===this.root&&this.fireEvent("_forward-before",{target:n}),H(e)&&s.tagName.toLowerCase()==="tr"&&e.preventDefault(),a&&!c&&((H(e)&&r||te(e)&&o)&&this.fireEvent("selection-requested",{row:this}),te(e)&&i&&(this.fireEvent("row-click",{row:this}),o||this.activate())),fy(e)&&(e.preventDefault(),this.fireEvent("f7-pressed",{row:this}))}_onkeyup(e){(H(e)||te(e))&&this.deactivate()}_ontouchend(){this.deactivate()}_onfocusout(){this.deactivate()}_onfocusin(e,n=!1){(n||this._activeElementHasAttribute("ui5-table-cell"))&&(this.root.focus(),this.activate()),this.fireEvent("_focused")}_onrowclick(e){const n=e.target.classList.contains("ui5-multi-select-checkbox");if(ha(e)==="button")return;const i=this.getRootNode().activeElement;this.contains(i)||(this._onfocusin(e,!0),this.deactivate()),this._activeElementHasAttribute("ui5-table-row")&&(this.isSingleSelect&&this._handleSelection(),this.type===Qo.Active&&!n&&this.fireEvent("row-click",{row:this}))}_handleSelection(){this.fireEvent("selection-requested",{row:this})}_activeElementHasAttribute(e){return this.getRootNode().activeElement.hasAttribute(e)}get _ariaCurrent(){return this.navigated?!0:void 0}activate(){this.type===Qo.Active&&(this.active=!0)}deactivate(){this.active&&(this.active=!1)}get shouldPopin(){return this._columnsInfo.filter(e=>e.demandPopin||!e.visible).length}get allColumnsPoppedIn(){return this._columnsInfo.every(e=>e.demandPopin&&!e.visible)}onBeforeRendering(){if(!this.shouldPopin||(this.visibleCells=[],this.popinCells=[],this.cells.length===0))return;const e=this.allColumnsPoppedIn?"all-columns-popped-in":"";this._columnsInfo.forEach((i,o)=>{const r=this.cells[o],a=i.popinDisplay===Ga.Inline;if(r)if(i.visible)this.visibleCells.push(r),r.popined=!1,r._popinedInline=!1;else if(i.demandPopin){const s=this.popinCells.length===0?"popin-header":"";this.popinCells.push({cell:r,popinText:i.popinText,classes:`ui5-table-popin-row ${e} ${s}`,popinDisplayInline:a}),r.popined=!0,i.popinDisplay===Ga.Inline&&(r._popinedInline=!0)}else r.popined=!1,r._popinedInline=!1});const n=this.visibleCells[this.visibleCells.length-1];n&&(n.lastInRow=!0)}get visibleCellsCount(){let e=this.visibleCells.length;return this.isMultiSelect&&(e+=1),e}get ariaLabelText(){const e=this.selected?ji.i18nBundle.getText(xf):ji.i18nBundle.getText(Tf),n=this.isSingleSelect||this.isMultiSelect,i=this.cells.map((o,r)=>{const a=this.getColumnTextByIdx(r),s=o.cellContent.length?this.getCellText(o):o.ariaLabelEmptyCellText;return`${a} ${s}`}).join(" ");return n?`${i}. ${this._ariaPosition}. ${e}`:`${i}. ${this._ariaPosition}`}get ariaLabelRowSelection(){return ji.i18nBundle.getText(zy)}get isSingleSelect(){return this.mode===Vn.SingleSelect}get isMultiSelect(){return this.mode===Vn.MultiSelect}get root(){return this.shadowRoot.querySelector(".ui5-table-row-root")}getCellText(e){const n=e.textContent;return n?this.getNormilzedTextContent(n):""}getColumnTextByIdx(e){const n=this._columnsInfo[e];return n&&n.text?this.getNormilzedTextContent(n.text):""}getNormilzedTextContent(e){return e.replace(/[\n\r\t]/g,"").trim()}static async onDefine(){ji.i18nBundle=await ie("@ui5/webcomponents")}};Wt([d({type:Qo,defaultValue:Qo.Inactive})],vt.prototype,"type",void 0);Wt([d({type:Boolean})],vt.prototype,"selected",void 0);Wt([d({type:Boolean})],vt.prototype,"navigated",void 0);Wt([d({type:Vn,defaultValue:Vn.None})],vt.prototype,"mode",void 0);Wt([d({type:Boolean})],vt.prototype,"active",void 0);Wt([d({type:Object,multiple:!0})],vt.prototype,"_columnsInfo",void 0);Wt([d({defaultValue:"-1"})],vt.prototype,"_tabIndex",void 0);Wt([d({type:Boolean})],vt.prototype,"_busy",void 0);Wt([d({defaultValue:"",noAttribute:!0})],vt.prototype,"_ariaPosition",void 0);Wt([Z({type:HTMLElement,default:!0,individualSlots:!0})],vt.prototype,"cells",void 0);vt=ji=Wt([U({tag:"ui5-table-row",styles:q$,renderer:he,template:L$,dependencies:[Su]}),I("row-click"),I("_focused"),I("selection-requested"),I("f7-pressed")],vt);vt.define();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ta=window,Ru=Ta.ShadowRoot&&(Ta.ShadyCSS===void 0||Ta.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mu=Symbol(),eh=new WeakMap;let ag=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==Mu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Ru&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=eh.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&eh.set(n,e))}return e}toString(){return this.cssText}};const Y$=t=>new ag(typeof t=="string"?t:t+"",void 0,Mu),Te=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new ag(n,t,Mu)},G$=(t,e)=>{Ru?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),o=Ta.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,t.appendChild(i)})},th=Ru?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return Y$(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ul;const Xa=window,nh=Xa.trustedTypes,X$=nh?nh.emptyScript:"",ih=Xa.reactiveElementPolyfillSupport,Bc={toAttribute(t,e){switch(e){case Boolean:t=t?X$:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},sg=(t,e)=>e!==t&&(e==e||t==t),_l={attribute:!0,type:String,converter:Bc,reflect:!1,hasChanged:sg};let qi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const o=this._$Ep(i,n);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,n=_l){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(o){const r=this[e];this[n]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of i)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)n.unshift(th(o))}else e!==void 0&&n.push(th(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return G$(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=_l){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const a=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Bc).toAttribute(n,i.type);this._$El=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,n){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const a=o.getPropertyOptions(r),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Bc;this._$El=r,this[r]=s.fromAttribute(n,a.type),this._$El=null}}requestUpdate(e,n,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||sg)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};qi.finalized=!0,qi.elementProperties=new Map,qi.elementStyles=[],qi.shadowRootOptions={mode:"open"},ih==null||ih({ReactiveElement:qi}),((ul=Xa.reactiveElementVersions)!==null&&ul!==void 0?ul:Xa.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dl,hl;let $t=class extends qi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mf(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Qt}};$t.finalized=!0,$t._$litElement$=!0,(dl=globalThis.litElementHydrateSupport)===null||dl===void 0||dl.call(globalThis,{LitElement:$t});const oh=globalThis.litElementPolyfillSupport;oh==null||oh({LitElement:$t});((hl=globalThis.litElementVersions)!==null&&hl!==void 0?hl:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(a){customElements.define(n,a)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z$=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function dt(t){return(e,n)=>n!==void 0?((i,o,r)=>{o.constructor.createProperty(r,i)})(t,e,n):Z$(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pl;((pl=window.HTMLSlotElement)===null||pl===void 0?void 0:pl.prototype.assignedElements)!=null;const Q$="/images/lit.svg",J$="/images/vite.svg",Po={xs:Te`320px`,sm:Te`480px`,md:Te`768px`,lg:Te`1024px`,xl:Te`1280px`},de={xs:Te`@media (min-width: ${Po.xs})`,sm:Te`@media (min-width: ${Po.sm})`,md:Te`@media (min-width: ${Po.md})`,lg:Te`@media (min-width: ${Po.lg})`,xl:Te`@media (min-width: ${Po.xl})`,demo:Te`@media all and (min-width: 300px) and (max-width: 400px)`};var K$=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,Fu=(t,e,n,i)=>{for(var o=i>1?void 0:i?e2(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&K$(e,n,o),o};let dr=class extends $t{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return Dl("sap_horizon"),gb("es"),It`
      <ui5-button design="Default">Default</ui5-button>
      <ui5-calendar></ui5-calendar>


      <ui5-switch text-on="On" text-off="Off"></ui5-switch>
<ui5-switch text-on="On" text-off="Off" checked></ui5-switch>
<ui5-switch></ui5-switch>
<ui5-switch checked></ui5-switch>
<ui5-switch text-on="Yes" text-off="No" disabled></ui5-switch>
<ui5-switch text-on="Yes" text-off="No" checked disabled ></ui5-switch>

<ui5-busy-indicator active size="Small"></ui5-busy-indicator>

<style>
.card-content {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
  background-color: red;
}
ui5-li::part(description) {
 font-size: 20px;
}
</style>

<ui5-card class="medium">
	<ui5-card-header slot="header" title-text="Team Space" subtitle-text="Direct Reports" status="3 of 10">
				<ui5-icon name="group" slot="avatar"></ui5-icon>
				<ui5-button design="Transparent" slot="action">View All</ui5-button>
	</ui5-card-header>
	<div class="card-content">
		<ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">
			<ui5-li description="User Researcher">Alain Chevalier</ui5-li>
		</ui5-list>

	</div>
</ui5-card>


<ui5-checkbox text="Chocolate" checked></ui5-checkbox>
<ui5-checkbox text="Strawberry" checked></ui5-checkbox>
<ui5-checkbox text="Waffles" checked value-state="Error"></ui5-checkbox>
<ui5-checkbox text="Cake" checked value-state="Warning"></ui5-checkbox>

<ui5-multi-combobox placeholder="Type your value">
	<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
</ui5-multi-combobox>


<div>

<ui5-table class="demo-table" id="table">
	<!-- Columns -->
	<ui5-table-column slot="columns">
		<span style="line-height: 1.4rem">Product</span>
	</ui5-table-column>

	<ui5-table-column slot="columns" min-width="800">
		<span style="line-height: 1.4rem">Supplier</span>
	</ui5-table-column>

	<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin class="table-header-text-alignment">
		<span style="line-height: 1.4rem">Dimensions</span>
	</ui5-table-column>

	<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin class="table-header-text-alignment">
		<span style="line-height: 1.4rem">Weight</span>
	</ui5-table-column>

	<ui5-table-column slot="columns" class="table-header-text-alignment">
		<span style="line-height: 1.4rem">Price</span>
	</ui5-table-column>

	<ui5-table-row>
		<ui5-table-cell>
			<div class="double-line-content">
				<span><b>Notebook Basic 15</b></span>
				<span style="margin-top: 0.5rem">HT-1000</span>
			</div>
		</ui5-table-cell>
		<ui5-table-cell>
			<span>Very Best Screens</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span>30 x 18 x 3cm</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span style="color: #2b7c2b"><b>4.2</b>KG</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span><b>956</b>EUR</span>
		</ui5-table-cell>
	</ui5-table-row>

	<ui5-table-row>
		<ui5-table-cell>
			<div class="double-line-content">
				<span><b>Notebook Basic 175</b></span>
				<span style="margin-top: 0.5rem">HT-1001</span>
			</div>
		</ui5-table-cell>
		<ui5-table-cell>
			<span>Very Best Screens</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span>29 x 17 x 3.1cm</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span style="color: #2b7c2b"><b>4.5</b>KG</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span><b>1249</b>EUR</span>
		</ui5-table-cell>
	</ui5-table-row>

	<ui5-table-row>
		<ui5-table-cell>
			<div class="double-line-content">
				<span><b>Notebook Basic 18</b></span>
				<span style="margin-top: 0.5rem">HT-1002</span>
			</div>
		</ui5-table-cell>
		<ui5-table-cell>
			<span>Very Best Screens</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span>28 x 19 x 2.5cm</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span style="color: #2b7c2b"><b>4.2</b>KG</span>
		</ui5-table-cell>
		<ui5-table-cell style="text-align: right">
			<span><b>1570</b>EUR</span>
      <ui5-select value-state="Success" class="select">
	<ui5-option icon="meal" selected>Apple</ui5-option>
	<ui5-option icon="meal">Avocado</ui5-option>
	<ui5-option icon="meal">Mango</ui5-option>
</ui5-select>
		</ui5-table-cell>
	</ui5-table-row>

</ui5-table>

</div>



<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${J$} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${Q$} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};dr.styles=Te`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }

    ${de.demo} {
      :host {
        background-color: blue;
      }
    }

  `;Fu([dt()],dr.prototype,"docsHint",2);Fu([dt({type:Number})],dr.prototype,"count",2);dr=Fu([Zn("my-element")],dr);const Fi=Te`

    .full-screen {
        display: flex;
        width: 100vw;
        height: 100vh;
    }

`;var t2=Object.defineProperty,n2=Object.getOwnPropertyDescriptor,Nu=(t,e,n,i)=>{for(var o=i>1?void 0:i?n2(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&t2(e,n,o),o};let hr=class extends $t{constructor(){super(...arguments),this.descriptions=[],this.name=""}render(){const t=[];for(const e of this.descriptions)t.push(It`<p>${e}</p>`);return It`
            <div class="card">
                <p class="card-header">${this.name}</p>
                ${t}
            </div>
        `}};hr.styles=[Fi,Te`
            
            .card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                width: 200px;
                height: 200px;
                padding: 35px;

                border: 1px solid rgba(255, 255, 255, .25);
                border-radius: 20px;
                background-color: rgba(255, 255, 255, 0.45);
                box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

                backdrop-filter: blur(5px);

                font-size: 15px;
                text-shadow: 0 6px 8px rgba(0,0,0,0.6);
                text-align: center;
                line-height: 1.1;     
                color: black;
                font-weight: 400;
                font-family: 'Dosis', sans-serif;     
            }

            .card-header {
                font-size: 25px;
                text-shadow: 0 6px 8px rgba(0,0,0,0.6);
                text-align: center;
                line-height: 1.1;     
                color: #446;
                font-weight: 400;
                font-family: 'Dosis', sans-serif;   
                text-transform: uppercase;  
            }

            p {
                margin: 0;
            }

            ${de.sm} {
                .card {
                    font-size: 20px;
                    margin: 0 50px;
                    width: 400px;
                    height: 250px;
                }
            }

            ${de.md} {
                .card {
                    font-size: 23px;
                    margin: 0 80px;
                    width: 600px;
                    height: 250px;
                }
            }
            
            ${de.lg} {
                .card {
                    font-size: 26px;
                    margin: 0 100px;
                    width: 800px;
                    height: 250px;
                }
            }            
        `];Nu([dt()],hr.prototype,"descriptions",2);Nu([dt()],hr.prototype,"name",2);hr=Nu([Zn("uc-glass-card")],hr);var i2=Object.defineProperty,o2=Object.getOwnPropertyDescriptor,lg=(t,e,n,i)=>{for(var o=i>1?void 0:i?o2(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&i2(e,n,o),o};let Za=class extends $t{constructor(){super(...arguments),this.image=""}render(){return It`
            <img id="logo" src=${this.image}>
        `}};Za.styles=[Fi,Te`
            #logo {
                position: fixed;
                bottom: 10px;
                left: 10px;
                width: 100px;
            }

        `];lg([dt()],Za.prototype,"image",2);Za=lg([Zn("uc-logo")],Za);function rh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rh(Object(n),!0).forEach(function(i){Ae(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rh(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Qa(t){"@babel/helpers - typeof";return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qa(t)}function r2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ah(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a2(t,e,n){return e&&ah(t.prototype,e),n&&ah(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ae(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zu(t,e){return l2(t)||u2(t,e)||cg(t,e)||d2()}function Mr(t){return s2(t)||c2(t)||cg(t)||_2()}function s2(t){if(Array.isArray(t))return Pc(t)}function l2(t){if(Array.isArray(t))return t}function c2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function u2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],o=!0,r=!1,a,s;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(i.push(a.value),!(e&&i.length===e));o=!0);}catch(c){r=!0,s=c}finally{try{!o&&n.return!=null&&n.return()}finally{if(r)throw s}}return i}}function cg(t,e){if(t){if(typeof t=="string")return Pc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pc(t,e)}}function Pc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sh=function(){},Hu={},ug={},_g=null,dg={mark:sh,measure:sh};try{typeof window<"u"&&(Hu=window),typeof document<"u"&&(ug=document),typeof MutationObserver<"u"&&(_g=MutationObserver),typeof performance<"u"&&(dg=performance)}catch{}var h2=Hu.navigator||{},lh=h2.userAgent,ch=lh===void 0?"":lh,Wn=Hu,se=ug,uh=_g,Qr=dg;Wn.document;var yn=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",hg=~ch.indexOf("MSIE")||~ch.indexOf("Trident/"),Jr,Kr,ea,ta,na,mn="___FONT_AWESOME___",Lc=16,pg="fa",fg="svg-inline--fa",Di="data-fa-i2svg",Oc="data-fa-pseudo-element",p2="data-fa-pseudo-element-pending",Uu="data-prefix",Vu="data-icon",_h="fontawesome-i2svg",f2="async",m2=["HTML","HEAD","STYLE","SCRIPT"],mg=function(){try{return!0}catch{return!1}}(),ae="classic",fe="sharp",Wu=[ae,fe];function Fr(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ae]}})}var pr=Fr((Jr={},Ae(Jr,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ae(Jr,fe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Jr)),fr=Fr((Kr={},Ae(Kr,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ae(Kr,fe,{solid:"fass",regular:"fasr",light:"fasl"}),Kr)),mr=Fr((ea={},Ae(ea,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ae(ea,fe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ea)),g2=Fr((ta={},Ae(ta,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ae(ta,fe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ta)),v2=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gg="fa-layers-text",b2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,y2=Fr((na={},Ae(na,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ae(na,fe,{900:"fass",400:"fasr",300:"fasl"}),na)),vg=[1,2,3,4,5,6,7,8,9,10],w2=vg.concat([11,12,13,14,15,16,17,18,19,20]),k2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gr=new Set;Object.keys(fr[ae]).map(gr.add.bind(gr));Object.keys(fr[fe]).map(gr.add.bind(gr));var x2=[].concat(Wu,Mr(gr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gi.GROUP,gi.SWAP_OPACITY,gi.PRIMARY,gi.SECONDARY]).concat(vg.map(function(t){return"".concat(t,"x")})).concat(w2.map(function(t){return"w-".concat(t)})),Jo=Wn.FontAwesomeConfig||{};function T2(t){var e=se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function C2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(se&&typeof se.querySelector=="function"){var S2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];S2.forEach(function(t){var e=zu(t,2),n=e[0],i=e[1],o=C2(T2(n));o!=null&&(Jo[i]=o)})}var bg={styleDefault:"solid",familyDefault:"classic",cssPrefix:pg,replacementClass:fg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jo.familyPrefix&&(Jo.cssPrefix=Jo.familyPrefix);var ho=C(C({},bg),Jo);ho.autoReplaceSvg||(ho.observeMutations=!1);var $={};Object.keys(bg).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){ho[t]=n,Ko.forEach(function(i){return i($)})},get:function(){return ho[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){ho.cssPrefix=e,Ko.forEach(function(n){return n($)})},get:function(){return ho.cssPrefix}});Wn.FontAwesomeConfig=$;var Ko=[];function $2(t){return Ko.push(t),function(){Ko.splice(Ko.indexOf(t),1)}}var Cn=Lc,Gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function I2(t){if(!(!t||!yn)){var e=se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=se.head.childNodes,i=null,o=n.length-1;o>-1;o--){var r=n[o],a=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=r)}return se.head.insertBefore(e,i),t}}var E2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vr(){for(var t=12,e="";t-- >0;)e+=E2[Math.random()*62|0];return e}function xo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ju(t){return t.classList?xo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(yg(t[n]),'" ')},"").trim()}function ks(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function qu(t){return t.size!==Gt.size||t.x!==Gt.x||t.y!==Gt.y||t.rotate!==Gt.rotate||t.flipX||t.flipY}function D2(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,o={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(a," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:c,path:u}}function B2(t){var e=t.transform,n=t.width,i=n===void 0?Lc:n,o=t.height,r=o===void 0?Lc:o,a=t.startCentered,s=a===void 0?!1:a,c="";return s&&hg?c+="translate(".concat(e.x/Cn-i/2,"em, ").concat(e.y/Cn-r/2,"em) "):s?c+="translate(calc(-50% + ".concat(e.x/Cn,"em), calc(-50% + ").concat(e.y/Cn,"em)) "):c+="translate(".concat(e.x/Cn,"em, ").concat(e.y/Cn,"em) "),c+="scale(".concat(e.size/Cn*(e.flipX?-1:1),", ").concat(e.size/Cn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var P2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wg(){var t=pg,e=fg,n=$.cssPrefix,i=$.replacementClass,o=P2;if(n!==t||i!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");o=o.replace(r,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(i))}return o}var dh=!1;function fl(){$.autoAddCss&&!dh&&(I2(wg()),dh=!0)}var L2={mixout:function(){return{dom:{css:wg,insertCss:fl}}},hooks:function(){return{beforeDOMElementCreation:function(){fl()},beforeI2svg:function(){fl()}}}},gn=Wn||{};gn[mn]||(gn[mn]={});gn[mn].styles||(gn[mn].styles={});gn[mn].hooks||(gn[mn].hooks={});gn[mn].shims||(gn[mn].shims=[]);var Mt=gn[mn],kg=[],O2=function t(){se.removeEventListener("DOMContentLoaded",t),Ja=1,kg.map(function(e){return e()})},Ja=!1;yn&&(Ja=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Ja||se.addEventListener("DOMContentLoaded",O2));function R2(t){yn&&(Ja?setTimeout(t,0):kg.push(t))}function Nr(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,o=t.children,r=o===void 0?[]:o;return typeof t=="string"?yg(t):"<".concat(e," ").concat(A2(i),">").concat(r.map(Nr).join(""),"</").concat(e,">")}function hh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var M2=function(e,n){return function(i,o,r,a){return e.call(n,i,o,r,a)}},ml=function(e,n,i,o){var r=Object.keys(e),a=r.length,s=o!==void 0?M2(n,o):n,c,u,h;for(i===void 0?(c=1,h=e[r[0]]):(c=0,h=i);c<a;c++)u=r[c],h=s(h,e[u],u,e);return h};function F2(t){for(var e=[],n=0,i=t.length;n<i;){var o=t.charCodeAt(n++);if(o>=55296&&o<=56319&&n<i){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((o&1023)<<10)+(r&1023)+65536):(e.push(o),n--)}else e.push(o)}return e}function Rc(t){var e=F2(t);return e.length===1?e[0].toString(16):null}function N2(t,e){var n=t.length,i=t.charCodeAt(e),o;return i>=55296&&i<=56319&&n>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(i-55296)*1024+o-56320+65536:i}function ph(t){return Object.keys(t).reduce(function(e,n){var i=t[n],o=!!i.icon;return o?e[i.iconName]=i.icon:e[n]=i,e},{})}function Mc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,o=i===void 0?!1:i,r=ph(e);typeof Mt.hooks.addPack=="function"&&!o?Mt.hooks.addPack(t,ph(e)):Mt.styles[t]=C(C({},Mt.styles[t]||{}),r),t==="fas"&&Mc("fa",e)}var ia,oa,ra,Xi=Mt.styles,z2=Mt.shims,H2=(ia={},Ae(ia,ae,Object.values(mr[ae])),Ae(ia,fe,Object.values(mr[fe])),ia),Yu=null,xg={},Tg={},Cg={},Sg={},$g={},U2=(oa={},Ae(oa,ae,Object.keys(pr[ae])),Ae(oa,fe,Object.keys(pr[fe])),oa);function V2(t){return~x2.indexOf(t)}function W2(t,e){var n=e.split("-"),i=n[0],o=n.slice(1).join("-");return i===t&&o!==""&&!V2(o)?o:null}var Ig=function(){var e=function(r){return ml(Xi,function(a,s,c){return a[c]=ml(s,r,{}),a},{})};xg=e(function(o,r,a){if(r[3]&&(o[r[3]]=a),r[2]){var s=r[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){o[c.toString(16)]=a})}return o}),Tg=e(function(o,r,a){if(o[a]=a,r[2]){var s=r[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){o[c]=a})}return o}),$g=e(function(o,r,a){var s=r[2];return o[a]=a,s.forEach(function(c){o[c]=a}),o});var n="far"in Xi||$.autoFetchSvg,i=ml(z2,function(o,r){var a=r[0],s=r[1],c=r[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:c}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:c}),o},{names:{},unicodes:{}});Cg=i.names,Sg=i.unicodes,Yu=xs($.styleDefault,{family:$.familyDefault})};$2(function(t){Yu=xs(t.styleDefault,{family:$.familyDefault})});Ig();function Gu(t,e){return(xg[t]||{})[e]}function j2(t,e){return(Tg[t]||{})[e]}function vi(t,e){return($g[t]||{})[e]}function Eg(t){return Cg[t]||{prefix:null,iconName:null}}function q2(t){var e=Sg[t],n=Gu("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function jn(){return Yu}var Xu=function(){return{prefix:null,iconName:null,rest:[]}};function xs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ae:n,o=pr[i][t],r=fr[i][t]||fr[i][o],a=t in Mt.styles?t:null;return r||a||null}var fh=(ra={},Ae(ra,ae,Object.keys(mr[ae])),Ae(ra,fe,Object.keys(mr[fe])),ra);function Ts(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,o=i===void 0?!1:i,r=(e={},Ae(e,ae,"".concat($.cssPrefix,"-").concat(ae)),Ae(e,fe,"".concat($.cssPrefix,"-").concat(fe)),e),a=null,s=ae;(t.includes(r[ae])||t.some(function(u){return fh[ae].includes(u)}))&&(s=ae),(t.includes(r[fe])||t.some(function(u){return fh[fe].includes(u)}))&&(s=fe);var c=t.reduce(function(u,h){var _=W2($.cssPrefix,h);if(Xi[h]?(h=H2[s].includes(h)?g2[s][h]:h,a=h,u.prefix=h):U2[s].indexOf(h)>-1?(a=h,u.prefix=xs(h,{family:s})):_?u.iconName=_:h!==$.replacementClass&&h!==r[ae]&&h!==r[fe]&&u.rest.push(h),!o&&u.prefix&&u.iconName){var m=a==="fa"?Eg(u.iconName):{},g=vi(u.prefix,u.iconName);m.prefix&&(a=null),u.iconName=m.iconName||g||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!Xi.far&&Xi.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},Xu());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===fe&&(Xi.fass||$.autoFetchSvg)&&(c.prefix="fass",c.iconName=vi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=jn()||"fas"),c}var Y2=function(){function t(){r2(this,t),this.definitions={}}return a2(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),a[s]),Mc(s,a[s]);var c=mr[ae][s];c&&Mc(c,a[s]),Ig()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var o=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(o).map(function(r){var a=o[r],s=a.prefix,c=a.iconName,u=a.icon,h=u[2];n[s]||(n[s]={}),h.length>0&&h.forEach(function(_){typeof _=="string"&&(n[s][_]=u)}),n[s][c]=u}),n}}]),t}(),mh=[],Zi={},no={},G2=Object.keys(no);function X2(t,e){var n=e.mixoutsTo;return mh=t,Zi={},Object.keys(no).forEach(function(i){G2.indexOf(i)===-1&&delete no[i]}),mh.forEach(function(i){var o=i.mixout?i.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(n[a]=o[a]),Qa(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=o[a][s]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(a){Zi[a]||(Zi[a]=[]),Zi[a].push(r[a])})}i.provides&&i.provides(no)}),n}function Fc(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var r=Zi[t]||[];return r.forEach(function(a){e=a.apply(null,[e].concat(i))}),e}function Bi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var o=Zi[t]||[];o.forEach(function(r){r.apply(null,n)})}function vn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return no[t]?no[t].apply(null,e):void 0}function Nc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||jn();if(e)return e=vi(n,e)||e,hh(Ag.definitions,n,e)||hh(Mt.styles,n,e)}var Ag=new Y2,Z2=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Bi("noAuto")},Q2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return yn?(Bi("beforeI2svg",e),vn("pseudoElements2svg",e),vn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,R2(function(){K2({autoReplaceSvgRoot:n}),Bi("watch",e)})}},J2={icon:function(e){if(e===null)return null;if(Qa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:vi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=xs(e[0]);return{prefix:i,iconName:vi(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(v2))){var o=Ts(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||jn(),iconName:vi(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var r=jn();return{prefix:r,iconName:vi(r,e)||e}}}},wt={noAuto:Z2,config:$,dom:Q2,parse:J2,library:Ag,findIconDefinition:Nc,toHtml:Nr},K2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?se:n;(Object.keys(Mt.styles).length>0||$.autoFetchSvg)&&yn&&$.autoReplaceSvg&&wt.dom.i2svg({node:i})};function Cs(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return Nr(i)})}}),Object.defineProperty(t,"node",{get:function(){if(yn){var i=se.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function eI(t){var e=t.children,n=t.main,i=t.mask,o=t.attributes,r=t.styles,a=t.transform;if(qu(a)&&n.found&&!i.found){var s=n.width,c=n.height,u={x:s/c/2,y:.5};o.style=ks(C(C({},r),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function tI(t){var e=t.prefix,n=t.iconName,i=t.children,o=t.attributes,r=t.symbol,a=r===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},o),{},{id:a}),children:i}]}]}function Zu(t){var e=t.icons,n=e.main,i=e.mask,o=t.prefix,r=t.iconName,a=t.transform,s=t.symbol,c=t.title,u=t.maskId,h=t.titleId,_=t.extra,m=t.watchable,g=m===void 0?!1:m,b=i.found?i:n,w=b.width,T=b.height,D=o==="fak",S=[$.replacementClass,r?"".concat($.cssPrefix,"-").concat(r):""].filter(function(ht){return _.classes.indexOf(ht)===-1}).filter(function(ht){return ht!==""||!!ht}).concat(_.classes).join(" "),R={children:[],attributes:C(C({},_.attributes),{},{"data-prefix":o,"data-icon":r,class:S,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})},K=D&&!~_.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};g&&(R.attributes[Di]=""),c&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(h||vr())},children:[c]}),delete R.attributes.title);var ee=C(C({},R),{},{prefix:o,iconName:r,main:n,mask:i,maskId:u,transform:a,symbol:s,styles:C(C({},K),_.styles)}),kt=i.found&&n.found?vn("generateAbstractMask",ee)||{children:[],attributes:{}}:vn("generateAbstractIcon",ee)||{children:[],attributes:{}},xt=kt.children,Kn=kt.attributes;return ee.children=xt,ee.attributes=Kn,s?tI(ee):eI(ee)}function gh(t){var e=t.content,n=t.width,i=t.height,o=t.transform,r=t.title,a=t.extra,s=t.watchable,c=s===void 0?!1:s,u=C(C(C({},a.attributes),r?{title:r}:{}),{},{class:a.classes.join(" ")});c&&(u[Di]="");var h=C({},a.styles);qu(o)&&(h.transform=B2({transform:o,startCentered:!0,width:n,height:i}),h["-webkit-transform"]=h.transform);var _=ks(h);_.length>0&&(u.style=_);var m=[];return m.push({tag:"span",attributes:u,children:[e]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function nI(t){var e=t.content,n=t.title,i=t.extra,o=C(C(C({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),r=ks(i.styles);r.length>0&&(o.style=r);var a=[];return a.push({tag:"span",attributes:o,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var gl=Mt.styles;function zc(t){var e=t[0],n=t[1],i=t.slice(4),o=zu(i,1),r=o[0],a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(gi.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(gi.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}var iI={found:!1,width:512,height:512};function oI(t,e){!mg&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Hc(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=jn()),new Promise(function(i,o){if(vn("missingIconAbstract"),n==="fa"){var r=Eg(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&gl[e]&&gl[e][t]){var a=gl[e][t];return i(zc(a))}oI(t,e),i(C(C({},iI),{},{icon:$.showMissingIcons&&t?vn("missingIconAbstract")||{}:{}}))})}var vh=function(){},Uc=$.measurePerformance&&Qr&&Qr.mark&&Qr.measure?Qr:{mark:vh,measure:vh},Uo='FA "6.4.2"',rI=function(e){return Uc.mark("".concat(Uo," ").concat(e," begins")),function(){return Dg(e)}},Dg=function(e){Uc.mark("".concat(Uo," ").concat(e," ends")),Uc.measure("".concat(Uo," ").concat(e),"".concat(Uo," ").concat(e," begins"),"".concat(Uo," ").concat(e," ends"))},Qu={begin:rI,end:Dg},Ca=function(){};function bh(t){var e=t.getAttribute?t.getAttribute(Di):null;return typeof e=="string"}function aI(t){var e=t.getAttribute?t.getAttribute(Uu):null,n=t.getAttribute?t.getAttribute(Vu):null;return e&&n}function sI(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function lI(){if($.autoReplaceSvg===!0)return Sa.replace;var t=Sa[$.autoReplaceSvg];return t||Sa.replace}function cI(t){return se.createElementNS("http://www.w3.org/2000/svg",t)}function uI(t){return se.createElement(t)}function Bg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?cI:uI:n;if(typeof t=="string")return se.createTextNode(t);var o=i(t.tag);Object.keys(t.attributes||[]).forEach(function(a){o.setAttribute(a,t.attributes[a])});var r=t.children||[];return r.forEach(function(a){o.appendChild(Bg(a,{ceFn:i}))}),o}function _I(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Sa={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(o){n.parentNode.insertBefore(Bg(o),n)}),n.getAttribute(Di)===null&&$.keepOriginalSource){var i=se.createComment(_I(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~ju(n).indexOf($.replacementClass))return Sa.replace(e);var o=new RegExp("".concat($.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(s,c){return c===$.replacementClass||c.match(o)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var a=i.map(function(s){return Nr(s)}).join(`
`);n.setAttribute(Di,""),n.innerHTML=a}};function yh(t){t()}function Pg(t,e){var n=typeof e=="function"?e:Ca;if(t.length===0)n();else{var i=yh;$.mutateApproach===f2&&(i=Wn.requestAnimationFrame||yh),i(function(){var o=lI(),r=Qu.begin("mutate");t.map(o),r(),n()})}}var Ju=!1;function Lg(){Ju=!0}function Vc(){Ju=!1}var Ka=null;function wh(t){if(uh&&$.observeMutations){var e=t.treeCallback,n=e===void 0?Ca:e,i=t.nodeCallback,o=i===void 0?Ca:i,r=t.pseudoElementsCallback,a=r===void 0?Ca:r,s=t.observeMutationsRoot,c=s===void 0?se:s;Ka=new uh(function(u){if(!Ju){var h=jn();xo(u).forEach(function(_){if(_.type==="childList"&&_.addedNodes.length>0&&!bh(_.addedNodes[0])&&($.searchPseudoElements&&a(_.target),n(_.target)),_.type==="attributes"&&_.target.parentNode&&$.searchPseudoElements&&a(_.target.parentNode),_.type==="attributes"&&bh(_.target)&&~k2.indexOf(_.attributeName))if(_.attributeName==="class"&&aI(_.target)){var m=Ts(ju(_.target)),g=m.prefix,b=m.iconName;_.target.setAttribute(Uu,g||h),b&&_.target.setAttribute(Vu,b)}else sI(_.target)&&o(_.target)})}}),yn&&Ka.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dI(){Ka&&Ka.disconnect()}function hI(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,o){var r=o.split(":"),a=r[0],s=r.slice(1);return a&&s.length>0&&(i[a]=s.join(":").trim()),i},{})),n}function pI(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",o=Ts(ju(t));return o.prefix||(o.prefix=jn()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&i.length>0&&(o.iconName=j2(o.prefix,t.innerText)||Gu(o.prefix,Rc(t.innerText))),!o.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o}function fI(t){var e=xo(t.attributes).reduce(function(o,r){return o.name!=="class"&&o.name!=="style"&&(o[r.name]=r.value),o},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(i||vr()):(e["aria-hidden"]="true",e.focusable="false")),e}function mI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Gt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pI(t),i=n.iconName,o=n.prefix,r=n.rest,a=fI(t),s=Fc("parseNodeAttributes",{},t),c=e.styleParser?hI(t):[];return C({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:Gt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:a}},s)}var gI=Mt.styles;function Og(t){var e=$.autoReplaceSvg==="nest"?kh(t,{styleParser:!1}):kh(t);return~e.extra.classes.indexOf(gg)?vn("generateLayersText",t,e):vn("generateSvgReplacementMutation",t,e)}var qn=new Set;Wu.map(function(t){qn.add("fa-".concat(t))});Object.keys(pr[ae]).map(qn.add.bind(qn));Object.keys(pr[fe]).map(qn.add.bind(qn));qn=Mr(qn);function xh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!yn)return Promise.resolve();var n=se.documentElement.classList,i=function(_){return n.add("".concat(_h,"-").concat(_))},o=function(_){return n.remove("".concat(_h,"-").concat(_))},r=$.autoFetchSvg?qn:Wu.map(function(h){return"fa-".concat(h)}).concat(Object.keys(gI));r.includes("fa")||r.push("fa");var a=[".".concat(gg,":not([").concat(Di,"])")].concat(r.map(function(h){return".".concat(h,":not([").concat(Di,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=xo(t.querySelectorAll(a))}catch{}if(s.length>0)i("pending"),o("complete");else return Promise.resolve();var c=Qu.begin("onTree"),u=s.reduce(function(h,_){try{var m=Og(_);m&&h.push(m)}catch(g){mg||g.name==="MissingIcon"&&console.error(g)}return h},[]);return new Promise(function(h,_){Promise.all(u).then(function(m){Pg(m,function(){i("active"),i("complete"),o("pending"),typeof e=="function"&&e(),c(),h()})}).catch(function(m){c(),_(m)})})}function vI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Og(t).then(function(n){n&&Pg([n],e)})}function bI(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Nc(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Nc(o||{})),t(i,C(C({},n),{},{mask:o}))}}var yI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,o=i===void 0?Gt:i,r=n.symbol,a=r===void 0?!1:r,s=n.mask,c=s===void 0?null:s,u=n.maskId,h=u===void 0?null:u,_=n.title,m=_===void 0?null:_,g=n.titleId,b=g===void 0?null:g,w=n.classes,T=w===void 0?[]:w,D=n.attributes,S=D===void 0?{}:D,R=n.styles,K=R===void 0?{}:R;if(e){var ee=e.prefix,kt=e.iconName,xt=e.icon;return Cs(C({type:"icon"},e),function(){return Bi("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(m?S["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(b||vr()):(S["aria-hidden"]="true",S.focusable="false")),Zu({icons:{main:zc(xt),mask:c?zc(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:ee,iconName:kt,transform:C(C({},Gt),o),symbol:a,title:m,maskId:h,titleId:b,extra:{attributes:S,styles:K,classes:T}})})}},wI={mixout:function(){return{icon:bI(yI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xh,n.nodeCallback=vI,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,o=i===void 0?se:i,r=n.callback,a=r===void 0?function(){}:r;return xh(o,a)},e.generateSvgReplacementMutation=function(n,i){var o=i.iconName,r=i.title,a=i.titleId,s=i.prefix,c=i.transform,u=i.symbol,h=i.mask,_=i.maskId,m=i.extra;return new Promise(function(g,b){Promise.all([Hc(o,s),h.iconName?Hc(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var T=zu(w,2),D=T[0],S=T[1];g([n,Zu({icons:{main:D,mask:S},prefix:s,iconName:o,transform:c,symbol:u,maskId:_,title:r,titleId:a,extra:m,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(n){var i=n.children,o=n.attributes,r=n.main,a=n.transform,s=n.styles,c=ks(s);c.length>0&&(o.style=c);var u;return qu(a)&&(u=vn("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),i.push(u||r.icon),{children:i,attributes:o}}}},kI={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.classes,r=o===void 0?[]:o;return Cs({type:"layer"},function(){Bi("beforeDOMElementCreation",{assembler:n,params:i});var a=[];return n(function(s){Array.isArray(s)?s.map(function(c){a=a.concat(c.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Mr(r)).join(" ")},children:a}]})}}}},xI={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.title,r=o===void 0?null:o,a=i.classes,s=a===void 0?[]:a,c=i.attributes,u=c===void 0?{}:c,h=i.styles,_=h===void 0?{}:h;return Cs({type:"counter",content:n},function(){return Bi("beforeDOMElementCreation",{content:n,params:i}),nI({content:n.toString(),title:r,extra:{attributes:u,styles:_,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Mr(s))}})})}}}},TI={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=i.transform,r=o===void 0?Gt:o,a=i.title,s=a===void 0?null:a,c=i.classes,u=c===void 0?[]:c,h=i.attributes,_=h===void 0?{}:h,m=i.styles,g=m===void 0?{}:m;return Cs({type:"text",content:n},function(){return Bi("beforeDOMElementCreation",{content:n,params:i}),gh({content:n,transform:C(C({},Gt),r),title:s,extra:{attributes:_,styles:g,classes:["".concat($.cssPrefix,"-layers-text")].concat(Mr(u))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var o=i.title,r=i.transform,a=i.extra,s=null,c=null;if(hg){var u=parseInt(getComputedStyle(n).fontSize,10),h=n.getBoundingClientRect();s=h.width/u,c=h.height/u}return $.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,gh({content:n.innerHTML,width:s,height:c,transform:r,title:o,extra:a,watchable:!0})])}}},CI=new RegExp('"',"ug"),Th=[1105920,1112319];function SI(t){var e=t.replace(CI,""),n=N2(e,0),i=n>=Th[0]&&n<=Th[1],o=e.length===2?e[0]===e[1]:!1;return{value:Rc(o?e[0]:e),isSecondary:i||o}}function Ch(t,e){var n="".concat(p2).concat(e.replace(":","-"));return new Promise(function(i,o){if(t.getAttribute(n)!==null)return i();var r=xo(t.children),a=r.filter(function(xt){return xt.getAttribute(Oc)===e})[0],s=Wn.getComputedStyle(t,e),c=s.getPropertyValue("font-family").match(b2),u=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&h!=="none"&&h!==""){var _=s.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?fe:ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?fr[m][c[2].toLowerCase()]:y2[m][u],b=SI(_),w=b.value,T=b.isSecondary,D=c[0].startsWith("FontAwesome"),S=Gu(g,w),R=S;if(D){var K=q2(w);K.iconName&&K.prefix&&(S=K.iconName,g=K.prefix)}if(S&&!T&&(!a||a.getAttribute(Uu)!==g||a.getAttribute(Vu)!==R)){t.setAttribute(n,R),a&&t.removeChild(a);var ee=mI(),kt=ee.extra;kt.attributes[Oc]=e,Hc(S,g).then(function(xt){var Kn=Zu(C(C({},ee),{},{icons:{main:xt,mask:Xu()},prefix:g,iconName:R,extra:kt,watchable:!0})),ht=se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ht,t.firstChild):t.appendChild(ht),ht.outerHTML=Kn.map(function(zi){return Nr(zi)}).join(`
`),t.removeAttribute(n),i()}).catch(o)}else i()}else i()})}function $I(t){return Promise.all([Ch(t,"::before"),Ch(t,"::after")])}function II(t){return t.parentNode!==document.head&&!~m2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Oc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Sh(t){if(yn)return new Promise(function(e,n){var i=xo(t.querySelectorAll("*")).filter(II).map($I),o=Qu.begin("searchPseudoElements");Lg(),Promise.all(i).then(function(){o(),Vc(),e()}).catch(function(){o(),Vc(),n()})})}var EI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Sh,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,o=i===void 0?se:i;$.searchPseudoElements&&Sh(o)}}},$h=!1,AI={mixout:function(){return{dom:{unwatch:function(){Lg(),$h=!0}}}},hooks:function(){return{bootstrap:function(){wh(Fc("mutationObserverCallbacks",{}))},noAuto:function(){dI()},watch:function(n){var i=n.observeMutationsRoot;$h?Vc():wh(Fc("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Ih=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,o){var r=o.toLowerCase().split("-"),a=r[0],s=r.slice(1).join("-");if(a&&s==="h")return i.flipX=!0,i;if(a&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(a){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},DI={mixout:function(){return{parse:{transform:function(n){return Ih(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var o=i.getAttribute("data-fa-transform");return o&&(n.transform=Ih(o)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,o=n.transform,r=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(o.x*32,", ").concat(o.y*32,") "),u="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),h="rotate(".concat(o.rotate," 0 0)"),_={transform:"".concat(c," ").concat(u," ").concat(h)},m={transform:"translate(".concat(a/2*-1," -256)")},g={outer:s,inner:_,path:m};return{tag:"g",attributes:C({},g.outer),children:[{tag:"g",attributes:C({},g.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:C(C({},i.icon.attributes),g.path)}]}]}}}},vl={x:0,y:0,width:"100%",height:"100%"};function Eh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function BI(t){return t.tag==="g"?t.children:[t]}var PI={hooks:function(){return{parseNodeAttributes:function(n,i){var o=i.getAttribute("data-fa-mask"),r=o?Ts(o.split(" ").map(function(a){return a.trim()})):Xu();return r.prefix||(r.prefix=jn()),n.mask=r,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,o=n.attributes,r=n.main,a=n.mask,s=n.maskId,c=n.transform,u=r.width,h=r.icon,_=a.width,m=a.icon,g=D2({transform:c,containerWidth:_,iconWidth:u}),b={tag:"rect",attributes:C(C({},vl),{},{fill:"white"})},w=h.children?{children:h.children.map(Eh)}:{},T={tag:"g",attributes:C({},g.inner),children:[Eh(C({tag:h.tag,attributes:C(C({},h.attributes),g.path)},w))]},D={tag:"g",attributes:C({},g.outer),children:[T]},S="mask-".concat(s||vr()),R="clip-".concat(s||vr()),K={tag:"mask",attributes:C(C({},vl),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,D]},ee={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:BI(m)},K]};return i.push(ee,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(S,")")},vl)}),{children:i,attributes:o}}}},LI={provides:function(e){var n=!1;Wn.matchMedia&&(n=Wn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],o={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:C(C({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=C(C({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:C(C({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:C(C({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},OI={hooks:function(){return{parseNodeAttributes:function(n,i){var o=i.getAttribute("data-fa-symbol"),r=o===null?!1:o===""?!0:o;return n.symbol=r,n}}}},RI=[L2,wI,kI,xI,TI,EI,AI,DI,PI,LI,OI];X2(RI,{mixoutsTo:wt});wt.noAuto;wt.config;wt.library;wt.dom;wt.parse;wt.findIconDefinition;wt.toHtml;var MI=wt.icon;wt.layer;wt.text;wt.counter;var FI=typeof global=="object"&&global&&global.Object===Object&&global;const Rg=FI;var NI=typeof self=="object"&&self&&self.Object===Object&&self,zI=Rg||NI||Function("return this")();const Qn=zI;var HI=Qn.Symbol;const es=HI;var Mg=Object.prototype,UI=Mg.hasOwnProperty,VI=Mg.toString,Lo=es?es.toStringTag:void 0;function WI(t){var e=UI.call(t,Lo),n=t[Lo];try{t[Lo]=void 0;var i=!0}catch{}var o=VI.call(t);return i&&(e?t[Lo]=n:delete t[Lo]),o}var jI=Object.prototype,qI=jI.toString;function YI(t){return qI.call(t)}var GI="[object Null]",XI="[object Undefined]",Ah=es?es.toStringTag:void 0;function To(t){return t==null?t===void 0?XI:GI:Ah&&Ah in Object(t)?WI(t):YI(t)}function Ss(t){return t!=null&&typeof t=="object"}var ZI=Array.isArray;const Ku=ZI;function Fg(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var QI="[object AsyncFunction]",JI="[object Function]",KI="[object GeneratorFunction]",eE="[object Proxy]";function Ng(t){if(!Fg(t))return!1;var e=To(t);return e==JI||e==KI||e==QI||e==eE}var tE=Qn["__core-js_shared__"];const bl=tE;var Dh=function(){var t=/[^.]+$/.exec(bl&&bl.keys&&bl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function nE(t){return!!Dh&&Dh in t}var iE=Function.prototype,oE=iE.toString;function Ni(t){if(t!=null){try{return oE.call(t)}catch{}try{return t+""}catch{}}return""}var rE=/[\\^$.*+?()[\]{}|]/g,aE=/^\[object .+?Constructor\]$/,sE=Function.prototype,lE=Object.prototype,cE=sE.toString,uE=lE.hasOwnProperty,_E=RegExp("^"+cE.call(uE).replace(rE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dE(t){if(!Fg(t)||nE(t))return!1;var e=Ng(t)?_E:aE;return e.test(Ni(t))}function hE(t,e){return t==null?void 0:t[e]}function zr(t,e){var n=hE(t,e);return dE(n)?n:void 0}var pE=zr(Qn,"WeakMap");const Wc=pE;var fE=9007199254740991;function zg(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=fE}function mE(t){return t!=null&&zg(t.length)&&!Ng(t)}var gE=Object.prototype;function Hg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||gE;return t===n}var vE="[object Arguments]";function Bh(t){return Ss(t)&&To(t)==vE}var Ug=Object.prototype,bE=Ug.hasOwnProperty,yE=Ug.propertyIsEnumerable,wE=Bh(function(){return arguments}())?Bh:function(t){return Ss(t)&&bE.call(t,"callee")&&!yE.call(t,"callee")};const kE=wE;function xE(){return!1}var Vg=typeof _n=="object"&&_n&&!_n.nodeType&&_n,Ph=Vg&&typeof dn=="object"&&dn&&!dn.nodeType&&dn,TE=Ph&&Ph.exports===Vg,Lh=TE?Qn.Buffer:void 0,CE=Lh?Lh.isBuffer:void 0,SE=CE||xE;const $E=SE;var IE="[object Arguments]",EE="[object Array]",AE="[object Boolean]",DE="[object Date]",BE="[object Error]",PE="[object Function]",LE="[object Map]",OE="[object Number]",RE="[object Object]",ME="[object RegExp]",FE="[object Set]",NE="[object String]",zE="[object WeakMap]",HE="[object ArrayBuffer]",UE="[object DataView]",VE="[object Float32Array]",WE="[object Float64Array]",jE="[object Int8Array]",qE="[object Int16Array]",YE="[object Int32Array]",GE="[object Uint8Array]",XE="[object Uint8ClampedArray]",ZE="[object Uint16Array]",QE="[object Uint32Array]",re={};re[VE]=re[WE]=re[jE]=re[qE]=re[YE]=re[GE]=re[XE]=re[ZE]=re[QE]=!0;re[IE]=re[EE]=re[HE]=re[AE]=re[UE]=re[DE]=re[BE]=re[PE]=re[LE]=re[OE]=re[RE]=re[ME]=re[FE]=re[NE]=re[zE]=!1;function JE(t){return Ss(t)&&zg(t.length)&&!!re[To(t)]}function KE(t){return function(e){return t(e)}}var Wg=typeof _n=="object"&&_n&&!_n.nodeType&&_n,er=Wg&&typeof dn=="object"&&dn&&!dn.nodeType&&dn,eA=er&&er.exports===Wg,yl=eA&&Rg.process,tA=function(){try{var t=er&&er.require&&er.require("util").types;return t||yl&&yl.binding&&yl.binding("util")}catch{}}();const Oh=tA;var Rh=Oh&&Oh.isTypedArray,nA=Rh?KE(Rh):JE;const iA=nA;function oA(t,e){return function(n){return t(e(n))}}var rA=oA(Object.keys,Object);const aA=rA;var sA=Object.prototype,lA=sA.hasOwnProperty;function cA(t){if(!Hg(t))return aA(t);var e=[];for(var n in Object(t))lA.call(t,n)&&n!="constructor"&&e.push(n);return e}var uA=zr(Qn,"Map");const jc=uA;var _A=zr(Qn,"DataView");const qc=_A;var dA=zr(Qn,"Promise");const Yc=dA;var hA=zr(Qn,"Set");const Gc=hA;var Mh="[object Map]",pA="[object Object]",Fh="[object Promise]",Nh="[object Set]",zh="[object WeakMap]",Hh="[object DataView]",fA=Ni(qc),mA=Ni(jc),gA=Ni(Yc),vA=Ni(Gc),bA=Ni(Wc),_i=To;(qc&&_i(new qc(new ArrayBuffer(1)))!=Hh||jc&&_i(new jc)!=Mh||Yc&&_i(Yc.resolve())!=Fh||Gc&&_i(new Gc)!=Nh||Wc&&_i(new Wc)!=zh)&&(_i=function(t){var e=To(t),n=e==pA?t.constructor:void 0,i=n?Ni(n):"";if(i)switch(i){case fA:return Hh;case mA:return Mh;case gA:return Fh;case vA:return Nh;case bA:return zh}return e});const yA=_i;var wA="[object String]";function kA(t){return typeof t=="string"||!Ku(t)&&Ss(t)&&To(t)==wA}var xA="[object Map]",TA="[object Set]",CA=Object.prototype,SA=CA.hasOwnProperty;function Uh(t){if(t==null)return!0;if(mE(t)&&(Ku(t)||typeof t=="string"||typeof t.splice=="function"||$E(t)||iA(t)||kE(t)))return!t.length;var e=yA(t);if(e==xA||e==TA)return!t.size;if(Hg(t))return!cA(t).length;for(var n in t)if(SA.call(t,n))return!1;return!0}function $A(t){return Ku(t)?t:kA(t)?t.split(","):t}function IA(t,e,n){const o=MI(t).node[0];return o.classList.add(e),o.id=n,o}var EA=Object.defineProperty,AA=Object.getOwnPropertyDescriptor,e_=(t,e,n,i)=>{for(var o=i>1?void 0:i?AA(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&EA(e,n,o),o};let br=class extends $t{constructor(){super(...arguments),this.items=["View 1","View 2"],this.icons=["alert","alert"]}emitClick(t){const e=t.target.tagName.toLocaleLowerCase();let n=t.target;(e==="path"||e==="ui5-label")&&(n=t.target.parentElement),this.dispatchEvent(new CustomEvent("switcher-click",{detail:{id:n.id}}))}render(){const t=[],e=$A(this.items);for(const n in e){const i=this.items[n],o=this.icons[n];t.push(It`
                <div id="${n}" class="item" @click="${this.emitClick}">
                    ${IA(o,"icon",n)}
                    <ui5-label>${i}</ui5-label>
                </div>
            `)}return It`
            <div class="wrapper gray-bar">
                ${t}
            </div>
        `}};br.styles=[Fi,Te`
            .wrapper {
                display: flex;
                flex-direction: row;
                margin: 10px;
                user-select: none;
            }

            .gray-bar
            {
                    position: relative;
            }
            .gray-bar:after
            {
                content: "";
                background-color: white;
                box-shadow: 0 0 10px black;
                position: absolute;
                height: 2px;
                top: 25px;
                left: 0;
                right: 10px; 
                margin: 0 5px 5px 15px;
                z-index: 1;
            }               

            .item {
                display: flex;
                flex-direction: column;
                margin: 0px 5px;
                align-items: center;
                z-index: 2; 
            }

            .icon {
                border-radius: 5px;
                height: 30px;
                width: 30px;
                padding: 5px;
                background-color: white;
                color: rgba(6, 15, 48, 0.86);
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            ui5-label {
                color: white;
                text-shadow: 0 0 4px #000000;
                display: none;
            }

            ${de.sm} {
                ui5-label {
                    display: block;
                }
                
                .icon {
                    padding: 10px;
                }
            }

            ${de.md} {
                ui5-label {
                    display: block
                }
            }

            ${de.md} {
                ui5-label {
                    display: block
                }
            }

        `];e_([dt()],br.prototype,"items",2);e_([dt()],br.prototype,"icons",2);br=e_([Zn("uc-line-switcher")],br);var DA=Object.defineProperty,BA=Object.getOwnPropertyDescriptor,jg=(t,e,n,i)=>{for(var o=i>1?void 0:i?BA(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&DA(e,n,o),o};let ts=class extends $t{constructor(){super(...arguments),this.text=""}render(){return It`
            <h2 id="quote">${this.text}</h2>
        `}};ts.styles=[Fi,Te`
            #quote {
                font-size: 17px;
                text-shadow: 0 6px 8px rgba(0,0,0,0.6);
                text-align: center;
                line-height: 1.1;     
                color: white;
                font-weight: 400;
                font-family: 'Dosis', sans-serif;     
                font-style: italic;
                margin: 0 30px;
            }

            ${de.sm} {
                #quote {
                    font-size: 20px;
                    margin: 0 50px;
                }
            }

            ${de.md} {
                #quote {
                    font-size: 23px;
                    margin: 0 80px;
                }
            }
            
            ${de.lg} {
                #quote {
                    font-size: 26px;
                    margin: 0 100px;
                }
            }
        `];jg([dt()],ts.prototype,"text",2);ts=jg([Zn("uc-quote")],ts);var PA=Object.defineProperty,LA=Object.getOwnPropertyDescriptor,qg=(t,e,n,i)=>{for(var o=i>1?void 0:i?LA(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&PA(e,n,o),o};let ns=class extends $t{constructor(){super(...arguments),this.text=""}render(){return It`
            <h2 id="subtitle">${this.text}</h2>
        `}};ns.styles=[Fi,Te`        
            #subtitle {
                font-size: 20px;
                text-transform: uppercase;
                text-shadow: 0 6px 8px rgba(0,0,0,0.6);
                text-align: center;
                line-height: 1.1;     
                color: white;
                font-weight: 400;
                font-family: 'Dosis', sans-serif;                   
            }

            ${de.sm} {
                #subtitle {
                    font-size: 25px;
                }
            }

            ${de.md} {
                #subtitle {
                    font-size: 30px;
                }
            }

            ${de.lg} {
                #subtitle {
                    font-size: 40px;
                }
            }
        `];qg([dt()],ns.prototype,"text",2);ns=qg([Zn("uc-subtitle")],ns);var OA=Object.defineProperty,RA=Object.getOwnPropertyDescriptor,Yg=(t,e,n,i)=>{for(var o=i>1?void 0:i?RA(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&OA(e,n,o),o};let is=class extends $t{constructor(){super(...arguments),this.text=""}render(){return It`
            <h1 id="title">${this.text}</h1>
        `}};is.styles=[Fi,Te`
            #title {
                font-size: 40px;
                text-transform: uppercase;
                text-shadow: 0 6px 8px rgba(0,0,0,0.6);
                text-align: center;
                line-height: 1.1;     
                color: white;
                font-weight: 400;
                font-family: 'Dosis', sans-serif;                   
            }

            ${de.sm} {
                #title {
                    font-size: 60px;
                }
            }

            ${de.md} {
                #title {
                    font-size: 100px;
                }
            }

            ${de.lg} {
                #title {
                    font-size: 120px;
                }
            }
        `];Yg([dt()],is.prototype,"text",2);is=Yg([Zn("uc-title")],is);var MA=Object.defineProperty,FA=Object.getOwnPropertyDescriptor,Hr=(t,e,n,i)=>{for(var o=i>1?void 0:i?FA(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&MA(e,n,o),o};let Ht=class extends $t{constructor(){super(...arguments),this.color="white",this.image="",this.video="",this.opacity="1"}getBackgroundCover(){return Uh(this.image)?"":`
            url(public/images/${this.image}.jpg) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            opacity: ${this.opacity}
        `}render(){return Uh(this.image)?It`
            <video id="video" class="full-screen" autoplay loop muted poster="public/images/pot.jpg">
                <source src="public/videos/${this.video}.mp4" type="video/mp4">
            </video>
            <div id="header">
                    <slot name="header"></slot>
                </div>
                <div id="content">
                    <slot name="content"></slot>
                </div>
        `:It`
            <div class="full-screen" style="background: ${this.getBackgroundCover()}">
                <div id="header">
                    <slot name="header"></slot>
                </div>
                <div id="content">
                    <slot name="content"></slot>
                </div>
            </div>
        `}};Ht.styles=[Fi,Te`
        
           #header {
                display: flex;
                flex-grow: 1;
                justify-content: center;
                align-content: center;
           }

           #header > slot {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
           }

           #video {
                object-fit: cover;
                display: block;
                position: fixed;
           }

           #content {
                display: flex;
                flex-grow: 1;
                justify-content: center;
                align-content: center;
                user-select: none;
           }

           #content > slot {
                display: block;
                position: fixed;
                top: 20vh;  
                left: 0;
                width: 100%;
                height: 100%;
           }

           ${de.sm} {
                #content > slot {
                    top: 15vh;
                }
            }

            ${de.md} {
                #content > slot {
                    top: 17vh;
                }
            }

            ${de.lg} {
                #content > slot {
                    top: 20vh;
                }
            }

        `];Hr([dt()],Ht.prototype,"color",2);Hr([dt()],Ht.prototype,"image",2);Hr([dt()],Ht.prototype,"video",2);Hr([dt()],Ht.prototype,"opacity",2);Ht=Hr([Zn("uc-view")],Ht);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=window,t_=$a.ShadowRoot&&($a.ShadyCSS===void 0||$a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n_=Symbol(),Vh=new WeakMap;let Gg=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==n_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(t_&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Vh.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Vh.set(n,e))}return e}toString(){return this.cssText}};const NA=t=>new Gg(typeof t=="string"?t:t+"",void 0,n_),$s=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,o,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new Gg(n,t,n_)},zA=(t,e)=>{t_?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),o=$a.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,t.appendChild(i)})},Wh=t_?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return NA(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wl;const os=window,jh=os.trustedTypes,HA=jh?jh.emptyScript:"",qh=os.reactiveElementPolyfillSupport,Xc={toAttribute(t,e){switch(e){case Boolean:t=t?HA:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Xg=(t,e)=>e!==t&&(e==e||t==t),kl={attribute:!0,type:String,converter:Xc,reflect:!1,hasChanged:Xg};let Yi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const o=this._$Ep(i,n);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,n=kl){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(o){const r=this[e];this[n]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||kl}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of i)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)n.unshift(Wh(o))}else e!==void 0&&n.push(Wh(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return zA(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=kl){var o;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const a=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Xc).toAttribute(n,i.type);this._$El=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,n){var i;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const a=o.getPropertyOptions(r),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Xc;this._$El=r,this[r]=s.fromAttribute(n,a.type),this._$El=null}}requestUpdate(e,n,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Xg)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Yi.finalized=!0,Yi.elementProperties=new Map,Yi.elementStyles=[],Yi.shadowRootOptions={mode:"open"},qh==null||qh({ReactiveElement:Yi}),((wl=os.reactiveElementVersions)!==null&&wl!==void 0?wl:os.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xl;const rs=window,po=rs.trustedTypes,Yh=po?po.createPolicy("lit-html",{createHTML:t=>t}):void 0,Zc="$lit$",Bn=`lit$${(Math.random()+"").slice(9)}$`,Zg="?"+Bn,UA=`<${Zg}>`,fo=document,yr=()=>fo.createComment(""),wr=t=>t===null||typeof t!="object"&&typeof t!="function",Qg=Array.isArray,VA=t=>Qg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Tl=`[ 	
\f\r]`,Oo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gh=/-->/g,Xh=/>/g,si=RegExp(`>|${Tl}(?:([^\\s"'>=/]+)(${Tl}*=${Tl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zh=/'/g,Qh=/"/g,Jg=/^(?:script|style|textarea|title)$/i,WA=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Is=WA(1),mo=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),Jh=new WeakMap,io=fo.createTreeWalker(fo,129,null,!1),jA=(t,e)=>{const n=t.length-1,i=[];let o,r=e===2?"<svg>":"",a=Oo;for(let c=0;c<n;c++){const u=t[c];let h,_,m=-1,g=0;for(;g<u.length&&(a.lastIndex=g,_=a.exec(u),_!==null);)g=a.lastIndex,a===Oo?_[1]==="!--"?a=Gh:_[1]!==void 0?a=Xh:_[2]!==void 0?(Jg.test(_[2])&&(o=RegExp("</"+_[2],"g")),a=si):_[3]!==void 0&&(a=si):a===si?_[0]===">"?(a=o??Oo,m=-1):_[1]===void 0?m=-2:(m=a.lastIndex-_[2].length,h=_[1],a=_[3]===void 0?si:_[3]==='"'?Qh:Zh):a===Qh||a===Zh?a=si:a===Gh||a===Xh?a=Oo:(a=si,o=void 0);const b=a===si&&t[c+1].startsWith("/>")?" ":"";r+=a===Oo?u+UA:m>=0?(i.push(h),u.slice(0,m)+Zc+u.slice(m)+Bn+b):u+Bn+(m===-2?(i.push(void 0),c):b)}const s=r+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Yh!==void 0?Yh.createHTML(s):s,i]};class kr{constructor({strings:e,_$litType$:n},i){let o;this.parts=[];let r=0,a=0;const s=e.length-1,c=this.parts,[u,h]=jA(e,n);if(this.el=kr.createElement(u,i),io.currentNode=this.el.content,n===2){const _=this.el.content,m=_.firstChild;m.remove(),_.append(...m.childNodes)}for(;(o=io.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const m of o.getAttributeNames())if(m.endsWith(Zc)||m.startsWith(Bn)){const g=h[a++];if(_.push(m),g!==void 0){const b=o.getAttribute(g.toLowerCase()+Zc).split(Bn),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:w[2],strings:b,ctor:w[1]==="."?YA:w[1]==="?"?XA:w[1]==="@"?ZA:Es})}else c.push({type:6,index:r})}for(const m of _)o.removeAttribute(m)}if(Jg.test(o.tagName)){const _=o.textContent.split(Bn),m=_.length-1;if(m>0){o.textContent=po?po.emptyScript:"";for(let g=0;g<m;g++)o.append(_[g],yr()),io.nextNode(),c.push({type:2,index:++r});o.append(_[m],yr())}}}else if(o.nodeType===8)if(o.data===Zg)c.push({type:2,index:r});else{let _=-1;for(;(_=o.data.indexOf(Bn,_+1))!==-1;)c.push({type:7,index:r}),_+=Bn.length-1}r++}}static createElement(e,n){const i=fo.createElement("template");return i.innerHTML=e,i}}function go(t,e,n=t,i){var o,r,a,s;if(e===mo)return e;let c=i!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[i]:n._$Cl;const u=wr(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==u&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),u===void 0?c=void 0:(c=new u(t),c._$AT(t,n,i)),i!==void 0?((a=(s=n)._$Co)!==null&&a!==void 0?a:s._$Co=[])[i]=c:n._$Cl=c),c!==void 0&&(e=go(t,c._$AS(t,e.values),c,i)),e}class qA{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:o}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:fo).importNode(i,!0);io.currentNode=r;let a=io.nextNode(),s=0,c=0,u=o[0];for(;u!==void 0;){if(s===u.index){let h;u.type===2?h=new Ur(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new QA(a,this,e)),this._$AV.push(h),u=o[++c]}s!==(u==null?void 0:u.index)&&(a=io.nextNode(),s++)}return r}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class Ur{constructor(e,n,i,o){var r;this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=o,this._$Cp=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=go(this,e,n),wr(e)?e===Pe||e==null||e===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==mo&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):VA(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Pe&&wr(this._$AH)?this._$AA.nextSibling.data=e:this.$(fo.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=kr.createElement(o.h,this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(i);else{const a=new qA(r,this),s=a.u(this.options);a.v(i),this.$(s),this._$AH=a}}_$AC(e){let n=Jh.get(e.strings);return n===void 0&&Jh.set(e.strings,n=new kr(e)),n}T(e){Qg(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of e)o===n.length?n.push(i=new Ur(this.k(yr()),this.k(yr()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Es{constructor(e,n,i,o,r){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Pe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,o){const r=this.strings;let a=!1;if(r===void 0)e=go(this,e,n,0),a=!wr(e)||e!==this._$AH&&e!==mo,a&&(this._$AH=e);else{const s=e;let c,u;for(e=r[0],c=0;c<r.length-1;c++)u=go(this,s[i+c],n,c),u===mo&&(u=this._$AH[c]),a||(a=!wr(u)||u!==this._$AH[c]),u===Pe?e=Pe:e!==Pe&&(e+=(u??"")+r[c+1]),this._$AH[c]=u}a&&!o&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class YA extends Es{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}}const GA=po?po.emptyScript:"";class XA extends Es{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Pe?this.element.setAttribute(this.name,GA):this.element.removeAttribute(this.name)}}class ZA extends Es{constructor(e,n,i,o,r){super(e,n,i,o,r),this.type=5}_$AI(e,n=this){var i;if((e=(i=go(this,e,n,0))!==null&&i!==void 0?i:Pe)===mo)return;const o=this._$AH,r=e===Pe&&o!==Pe||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==Pe&&(o===Pe||r);r&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class QA{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){go(this,e)}}const Kh=rs.litHtmlPolyfillSupport;Kh==null||Kh(kr,Ur),((xl=rs.litHtmlVersions)!==null&&xl!==void 0?xl:rs.litHtmlVersions=[]).push("2.7.3");const JA=(t,e,n)=>{var i,o;const r=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let a=r._$litPart$;if(a===void 0){const s=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=a=new Ur(e.insertBefore(yr(),s),s,void 0,n??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cl,Sl;class On extends Yi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=JA(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return mo}}On.finalized=!0,On._$litElement$=!0,(Cl=globalThis.litElementHydrateSupport)===null||Cl===void 0||Cl.call(globalThis,{LitElement:On});const ep=globalThis.litElementPolyfillSupport;ep==null||ep({LitElement:On});((Sl=globalThis.litElementVersions)!==null&&Sl!==void 0?Sl:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jn=t=>e=>typeof e=="function"?((n,i)=>(customElements.define(n,i),i))(t,e):((n,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(a){customElements.define(n,a)}}})(t,e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $l;(($l=window.HTMLSlotElement)===null||$l===void 0?void 0:$l.prototype.assignedElements)!=null;const KA=$s`

    .fade-in-up {
        animation: fade-in-up 800ms ease-in forwards;
    }

    .fade-out-up {
        animation: fade-out-up 800ms ease-out forwards;
    }

    .fade-in-down {
        animation: fade-in-down 800ms ease-in forwards;
    }

    .fade-out-down {
        animation: fade-out-down 800ms ease-out forwards;
    }

    @keyframes fade-in-up {
        from {
            display: none;
            transform: translateY(-1000px);
            z-index: 1;
        }

        to {
            display: block;
            z-index: 2;
        }
    }

    @keyframes fade-in-down {
        from {
            display: none;
            transform: translateY(1000px);
            z-index: 1;
        }

        to {
            display: block;
            z-index: 2;
        }
    }

    @keyframes fade-out-up {
        from {
            display: block;
            z-index: 2;
        }

        to {
            display: none;
            transform: translateY(1000px);
            z-index: 1;
        }
    }

    @keyframes fade-out-down {
        from {
            display: block;
            z-index: 2;
        }

        to {
            display: none;
            transform: translateY(-1000px);
            z-index: 1;
        }
    }

`;var eD=Object.defineProperty,tD=Object.getOwnPropertyDescriptor,nD=(t,e,n,i)=>{for(var o=i>1?void 0:i?tD(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&eD(e,n,o),o};let Qc=class extends On{constructor(){super(),this.elements={},this.status={},this.status.currentView=0}firstUpdated(){this.elements.switcher=this.renderRoot.querySelector("asc-switcher"),this.elements.home=this.renderRoot.querySelector("asc-home"),this.elements.us=this.renderRoot.querySelector("asc-us"),this.elements.views=this.renderRoot.querySelectorAll(".view"),this.listenSwitcherEvents(),this.listenScrollEvents()}listenSwitcherEvents(){this.elements.switcher.addEventListener("switcher-click",t=>{const e=t.detail.id;this.status.nextView=parseInt(e),this.showView(e),this.status.currentView=this.status.nextView})}listenScrollEvents(){this.status.nextView=0,this.status.touch={start:0,end:0,delta:0},window.addEventListener("wheel",t=>{this.scrollViews(t.wheelDeltaY)}),window.addEventListener("touchstart",t=>{this.status.touch.start=t.touches[0].pageY}),window.addEventListener("touchmove",t=>{this.status.touch.end=t.touches[0].pageY,this.status.touch.delta=this.status.touch.end-this.status.touch.start,this.scrollViews(this.status.touch.delta)}),window.addEventListener("keydown",t=>{let e=0;t.key==="ArrowDown"&&(e=-1),t.key==="ArrowUp"&&(e=1),e!==0&&this.scrollViews(e)})}scrollViews(t){this.status.scrolling||(this.status.scrolling=!0,setTimeout(()=>{this.status.scrolling=!1},1e3),t>0?this.status.nextView--:this.status.nextView++,this.showView(this.status.nextView.toString()),this.status.currentView=this.status.nextView)}showView(t){const e=this.getFadeCssClasses();this.elements.views.forEach(n=>{if(n.id===t){n.classList=`view ${e.fadeIn}`;return}if(n.id===this.status.currentView.toString()){n.classList=`view ${e.fadeOut}`;return}n.classList="hide"})}showHome(){const t=this.getFadeCssClasses();this.elements.home.classList=`view ${t.fadeIn}`,this.elements.us.classList=`view ${t.fadeOut}`}showUs(){const t=this.getFadeCssClasses();this.elements.us.classList=`view ${t.fadeIn}`,this.elements.home.classList=`view ${t.fadeOut}`}getFadeCssClasses(){const t={};return this.status.nextView-this.status.currentView<0?(t.fadeIn="fade-in-up",t.fadeOut="fade-out-up"):(t.fadeIn="fade-in-down",t.fadeOut="fade-out-down"),t}render(){return Is`
            <asc-switcher></asc-switcher>

            <asc-home id="0" class="view"></asc-home>
            <asc-us id="1" class="view hide"></asc-us>
            <asc-philosophy id="2" class="view hide"></asc-philosophy>
            <asc-menu id="3" class="view hide"></asc-menu>
            <asc-order id="4" class="view hide"></asc-order>
            <asc-contact id="5" class="view hide"></asc-contact>
        `}};Qc.styles=[KA,$s`
            :host {
                display: flex;
                flex-grow: 1;
                background-color: black;
                width: 100vw;
                height: 100vh;                
            }

            .hide {
                display: none;
            }

            asc-switcher {
                z-index: 10;
            }

            .view {
                position: fixed;
                width: 100%;
                height: 100%;
            }
        `];Qc=nD([Jn("asc-app")],Qc);var iD={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},oD={prefix:"fas",iconName:"hand-holding-heart",icon:[576,512,[],"f4be","M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"]},rD={prefix:"fas",iconName:"basket-shopping",icon:[576,512,["shopping-basket"],"f291","M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},aD={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},sD=aD,lD={prefix:"fas",iconName:"utensils",icon:[448,512,[127860,61685,"cutlery"],"f2e7","M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"]},cD={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},uD=Object.defineProperty,_D=Object.getOwnPropertyDescriptor,dD=(t,e,n,i)=>{for(var o=i>1?void 0:i?_D(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&uD(e,n,o),o};let Jc=class extends On{firstUpdated(){const t=this.renderRoot.querySelector("uc-line-switcher");t.items=["Inicio","Nosotros","Filosofía","Carta","Pedido","Contacto"],t.icons=[sD,iD,oD,lD,rD,cD],t.addEventListener("switcher-click",e=>{this.dispatchEvent(new CustomEvent("switcher-click",{detail:e.detail}))})}render(){return Is`
            <uc-line-switcher></uc-line-switcher>
        `}};Jc.styles=[$s`
            :host {
                display: block;
                position: fixed;
                left: calc(50% - 160px);
            }

            ${de.sm} {
                :host {
                    left: calc(50% - 200px);
                }
            }


        `];Jc=dD([Jn("asc-switcher")],Jc);var hD=Object.defineProperty,pD=Object.getOwnPropertyDescriptor,fD=(t,e,n,i)=>{for(var o=i>1?void 0:i?pD(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&hD(e,n,o),o};let tp=class extends Ht{constructor(){super(...arguments),this.video="net"}};tp=fD([Jn("asc-contact")],tp);var mD=Object.defineProperty,gD=Object.getOwnPropertyDescriptor,vD=(t,e,n,i)=>{for(var o=i>1?void 0:i?gD(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&mD(e,n,o),o};let np=class extends On{firstUpdated(){const t=this.renderRoot.querySelector("uc-title");t.text="Algo Se Cuece";const e=this.renderRoot.querySelector("uc-subtitle");e.text="COMER SANO NUNCA FUE TAN FÁCIL";const n=this.renderRoot.querySelector("uc-quote");n.text=`Elaboramos a diario todos nuestros platos, con mucha paciencia 
        y a fuego lento, utilizando los mejores productos del mercado, 100% naturales`}render(){return Is`
            <uc-view video="salt">
                <uc-title slot="content"></uc-title>
                <uc-subtitle slot="content"></uc-subtitle>
                <uc-quote slot="content"></uc-quote>
                <uc-logo image="public/images/asc.png" slot="content"></uc-logo>
            </uc-view>
        `}};np=vD([Jn("asc-home")],np);var bD=Object.defineProperty,yD=Object.getOwnPropertyDescriptor,wD=(t,e,n,i)=>{for(var o=i>1?void 0:i?yD(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&bD(e,n,o),o};let ip=class extends Ht{constructor(){super(...arguments),this.image="menu"}};ip=wD([Jn("asc-menu")],ip);var kD=Object.defineProperty,xD=Object.getOwnPropertyDescriptor,TD=(t,e,n,i)=>{for(var o=i>1?void 0:i?xD(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&kD(e,n,o),o};let op=class extends Ht{constructor(){super(...arguments),this.image="kitchen"}};op=TD([Jn("asc-order")],op);var CD=Object.defineProperty,SD=Object.getOwnPropertyDescriptor,$D=(t,e,n,i)=>{for(var o=i>1?void 0:i?SD(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&CD(e,n,o),o};let rp=class extends Ht{constructor(){super(...arguments),this.image="light-bulbs"}};rp=$D([Jn("asc-philosophy")],rp);var ID=Object.defineProperty,ED=Object.getOwnPropertyDescriptor,AD=(t,e,n,i)=>{for(var o=i>1?void 0:i?ED(e,n):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&ID(e,n,o),o};let Kc=class extends On{constructor(){super(...arguments),this.elements={}}firstUpdated(){this.elements.cards=this.renderRoot.querySelectorAll("uc-glass-card"),this.elements.cards[0].name="Toño",this.elements.cards[0].descriptions.push(`
            Ha sido jefe de cocina durante años, trabajando en los mejores restaurantes y con una idea muy 
            clara: La comida hay que disfrutarla, pero sobre todo, hay que respetarla.
            Y con esa premisa elabora todos sus platos.
        `),this.elements.cards[0].descriptions.push(`
            Nada de alimentos procesados, todo fresco, natural y cocinado a fuego lento, como siempre.
            La profesionalidad es su mejor seña de identidad.
        `),this.elements.cards[1].name="Noelia",this.elements.cards[1].descriptions.push(`
        Es la cara visible, la que prepara tus pedidos con todo el cuidado y amor del mundo, la que te 
        aconseja los mejores platos según tus gustos o necesidades y te ayudará en todo lo que necesites. 
        `),this.elements.cards[1].descriptions.push(`
        Todo siempre con una sonrisa. Simpatía y eficiencia en una misma persona.
        `)}render(){return Is`
            <uc-view image="hands" >
                <div id="cards" slot="content">
                    <uc-glass-card></uc-glass-card>
                    <uc-glass-card></uc-glass-card>
                </div>
            </uc-view>
        `}};Kc.styles=[$s`
            
            #cards {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 15px;
                margin-top: -50px;
            }
            
            ${de.sm} {
                #content > slot {
                    top: 15vh;
                }
            }

            ${de.md} {
                #content > slot {
                    top: 17vh;
                }
            }

            ${de.lg} {
                #content > slot {
                    top: 15vh;
                }
            }
            
        `];Kc=AD([Jn("asc-us")],Kc)});export default DD();
