var S=Object.defineProperty;var n=(o,e)=>S(o,"name",{value:e,configurable:!0});import{a as u,D as p,j as a,T as x,S as m,b as v,c as y,F as C,d as T,A as I,P as f,e as g}from"./iframe.b2b0e27a.js";import{R as N,k as E,V as H,A as Y,O as k,q as j,U as w,f as W,C as G,o as K,d as L,s as U,u as $,D as q,b as z,W as J,X as Q,H as V,I as X,g as Z,M as ee,P as te,v as re,w as ae,y as se,B as oe,z as ne,p as ie,e as ce,L as le,n as de,N as ue,h as pe,i as Se,Q as xe,l as me,m as ve,t as ye,x as Ce,J as Te,K as Ie,G as fe,E as ge}from"./iframe.b2b0e27a.js";var h=/\s*\/\s*/,P=n(function(e){var t=e.title,r=t.trim().split(h);return r&&r[r.length-1]||t},"extractTitle"),b=n(function(e){var t=e.children,r=u.exports.useContext(p),s=t;return s||(s=P(r)),s?a(x,{className:"sbdocs-title",children:s}):null},"Title"),D=n(function(e){var t=e.children,r=u.exports.useContext(p),s=r.id,i=r.storyById,c=i(s),l=c.parameters,d=t;return d||(d=l==null?void 0:l.componentSubtitle),d?a(m,{className:"sbdocs-subtitle",children:d}):null},"Subtitle"),A=n(function(e){var t=e.name,r=u.exports.useContext(p),s=r.componentStories,i=s(),c;return i&&(c=t?i.find(function(l){return l.name===t}):i[0]),c?a(v,{...c,expanded:!1,withToolbar:!0}):null},"Primary"),M=n(function(){return y(C,{children:[a(b,{}),a(D,{}),a(T,{}),a(A,{}),a(I,{story:f}),a(g,{})]})},"DocsPage"),O=n(function(e){var t=e.children;return a("div",{style:{fontFamily:"sans-serif"},children:t})},"Wrapper");export{N as AddContext,E as Anchor,H as AnchorMdx,Y as ArgsTable,k as CURRENT_SELECTION,j as Canvas,w as CodeOrSourceMdx,W as ColorItem,G as ColorPalette,K as ComponentsTable,L as Description,U as DescriptionType,$ as DocsContainer,q as DocsContext,M as DocsPage,z as DocsStory,J as HeaderMdx,Q as HeadersMdx,V as Heading,X as IconGallery,Z as IconItem,ee as Meta,te as PRIMARY_STORY,re as Preview,A as Primary,ae as Props,se as Source,oe as SourceContainer,ne as SourceContext,ie as SourceState,ce as Stories,le as Story,de as StoryTable,ue as Subheading,D as Subtitle,b as Title,pe as Typeset,O as Wrapper,Se as anchorBlockIdFromId,xe as assertIsFn,me as extractComponentArgTypes,P as extractTitle,ve as getComponent,ye as getDescriptionProps,Ce as getSourceProps,Te as getStoryId,Ie as getStoryProps,fe as lookupStoryId,ge as storyBlockIdFromId};
