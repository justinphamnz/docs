(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(163)),i={title:"ApiPromise Examples",slug:"/api/examples/promise"},c={unversionedId:"api/examples/promise/intro",id:"api/examples/promise/intro",isDocsHomePage:!1,title:"ApiPromise Examples",description:"Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [[ApiPromise]] interface.",source:"@site/docs/api/examples/promise/intro.md",slug:"/api/examples/promise",permalink:"/docs/api/examples/promise",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/intro.md",version:"current",sidebar:"reference",previous:{title:"Transactions",permalink:"/docs/api/cookbook/tx"},next:{title:"Simple Connect",permalink:"/docs/api/examples/promise/simple-connect"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Running the examples",id:"running-the-examples",children:[]},{value:"Development accounts",id:"development-accounts",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Here you will find a list of examples that takes you through the basics of connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain. It uses the [","[ApiPromise]","] interface."),Object(o.a)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.a)("p",null,"For the following examples, you need a local node. It is usually convenient testing with:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{}),"substrate --dev\n")),Object(o.a)("h2",{id:"running-the-examples"},"Running the examples"),Object(o.a)("p",null,"From each folder, run ",Object(o.a)("inlineCode",{parentName:"p"},"yarn")," to install the required dependencies and then run ",Object(o.a)("inlineCode",{parentName:"p"},"yarn start")," to execute the example against the running node."),Object(o.a)("h2",{id:"development-accounts"},"Development accounts"),Object(o.a)("p",null,"Some of the examples use the following accounts:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Alice: ",Object(o.a)("inlineCode",{parentName:"li"},"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")),Object(o.a)("li",{parentName:"ul"},"Bob: ",Object(o.a)("inlineCode",{parentName:"li"},"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"))),Object(o.a)("p",null,"Those accounts are easy to add if you don't have/see them. The seed of Alice's account is ",Object(o.a)("inlineCode",{parentName:"p"},"//Alice")," (via ",Object(o.a)("inlineCode",{parentName:"p"},"keyring.addUri(...)"),", dev seed implied) and the seed of Bob is... well you guess..."))}p.isMDXComponent=!0}}]);