!function(){"use strict";var e,t={199:function(){var e=window.wp.blocks,t=window.wp.components,n=window.wp.blockEditor;(0,e.registerBlockType)("wp-block-development-examples/counter-jquery-99def1",{edit:({attributes:e,setAttributes:l})=>React.createElement(React.Fragment,null,React.createElement("div",(0,n.useBlockProps)(),React.createElement("p",null,"jQuery Counter"),React.createElement("span",null,"Initial value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the initial value",value:e.initial,onChange:e=>l({initial:e})}),React.createElement("span",null,"Incremental value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the incremental value",value:e.increment,onChange:e=>l({increment:e})}))),save:({attributes:e})=>React.createElement("div",n.useBlockProps.save(),React.createElement("p",null,"jQuery Counter"),React.createElement("details",null,React.createElement("summary",null,"Attributes"),React.createElement("pre",null,React.createElement("small",null,JSON.stringify(e,null,2)))),React.createElement("br",null),React.createElement("button",{className:"wp-block-wp-block-development-examples-counter-jquery-99def1__decrement"},"-"),React.createElement("input",{width:"5",step:e.increment,type:"number",className:"wp-block-wp-block-development-examples-counter-jquery-99def1__value",value:e.initial}),React.createElement("button",{className:"wp-block-wp-block-development-examples-counter-jquery-99def1__increment"},"+"))})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=function(t,n,r,a){if(!n){var c=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],a=e[m][2];for(var o=!0,u=0;u<n.length;u++)(!1&a||c>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[u])}))?n.splice(u--,1):(o=!1,a<c&&(c=a));if(o){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={476:0,837:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,c=n[0],o=n[1],u=n[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(u)var m=u(l)}for(t&&t(n);i<c.length;i++)a=c[i],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},n=self.webpackChunk_wp_block_development_examples_interactive_blocks_demos_99def1=self.webpackChunk_wp_block_development_examples_interactive_blocks_demos_99def1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=l.O(void 0,[837],(function(){return l(199)}));r=l.O(r)}();