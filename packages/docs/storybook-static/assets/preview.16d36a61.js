import{s as E}from"./index.5ca63ce8.js";var w="links",h=Object.create,b=Object.defineProperty,j=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,P=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,k=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports),x=(r,n,i,u)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of d(n))!S.call(r,a)&&a!==i&&b(r,a,{get:()=>n[a],enumerable:!(u=j(n,a))||u.enumerable});return r},L=(r,n,i)=>(i=r!=null?h(P(r)):{},x(n||!r||!r.__esModule?b(i,"default",{value:r,enumerable:!0}):i,r)),U=k(r=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isEqual=function(){var n=Object.prototype.toString,i=Object.getPrototypeOf,u=Object.getOwnPropertySymbols?function(a){return Object.keys(a).concat(Object.getOwnPropertySymbols(a))}:Object.keys;return function(a,A){return function s(e,t,l){var o,f,c,O=n.call(e),_=n.call(t);if(e===t)return!0;if(e==null||t==null)return!1;if(l.indexOf(e)>-1&&l.indexOf(t)>-1)return!0;if(l.push(e,t),O!=_||(o=u(e),f=u(t),o.length!=f.length||o.some(function(p){return!s(e[p],t[p],l)})))return!1;switch(O.slice(8,-1)){case"Symbol":return e.valueOf()==t.valueOf();case"Date":case"Number":return+e==+t||+e!=+e&&+t!=+t;case"RegExp":case"Function":case"String":case"Boolean":return""+e==""+t;case"Set":case"Map":o=e.entries(),f=t.entries();do if(!s((c=o.next()).value,f.next().value,l))return!1;while(!c.done);return!0;case"ArrayBuffer":e=new Uint8Array(e),t=new Uint8Array(t);case"DataView":e=new Uint8Array(e.buffer),t=new Uint8Array(t.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(e.length!=t.length)return!1;for(c=0;c<e.length;c++)if((c in e||c in t)&&(c in e!=c in t||!s(e[c],t[c],l)))return!1;return!0;case"Object":return s(i(e),i(t),l);default:return!1}}(a,A,[])}}()});L(U());const{makeDecorator:R,addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:D,SELECT_STORY:C}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:m,HTMLElement:M}=E,I=r=>v.getChannel().emit(C,r),g=r=>{let{target:n}=r;if(!(n instanceof M))return;let i=n,{sbKind:u,sbStory:a}=i.dataset;(u||a)&&(r.preventDefault(),I({kind:u,story:a}))},y=!1,T=()=>{y||(y=!0,m.addEventListener("click",g))},B=()=>{y&&(y=!1,m.removeEventListener("click",g))},N=R({name:"withLinks",parameterName:w,wrapper:(r,n)=>(T(),v.getChannel().once(D,B),r(n))}),F=[N];export{F as decorators};
//# sourceMappingURL=preview.16d36a61.js.map
