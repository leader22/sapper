import{_ as t,a as n,b as e,c as s,i as a,s as o,d as r,S as c,g as i,f as u,j as f,k as m,l as p,h,m as d,y as l,o as $,n as v,t as x,r as g,u as j}from"./index.4f264514.js";import{_ as w,a as E}from"./asyncToGenerator.dd42c228.js";import{D as T}from"./index.5b00d94f.js";function b(t){var n,e,s,a,o,r=new T({props:{sections:t.sections,project:"sapper"}});return{c:function(){n=i("meta"),e=i("meta"),s=i("meta"),a=u(),r.$$.fragment.c(),this.h()},l:function(t){n=f(t,"META",{name:!0,content:!0},!1),m(n).forEach(p),e=f(t,"META",{name:!0,content:!0},!1),m(e).forEach(p),s=f(t,"META",{name:!0,content:!0},!1),m(s).forEach(p),a=h(t),r.$$.fragment.l(t),this.h()},h:function(){document.title="Docs • Sapper",d(n,"name","twitter:title"),d(n,"content","Sapper docs"),d(e,"name","twitter:description"),d(e,"content","The next small thing in web development"),d(s,"name","Description"),d(s,"content","The next small thing in web development")},m:function(t,c){l(document.head,n),l(document.head,e),l(document.head,s),$(t,a,c),v(r,t,c),o=!0},p:function(t,n){var e={};t.sections&&(e.sections=n.sections),r.$set(e)},i:function(t){o||(x(r.$$.fragment,t),o=!0)},o:function(t){g(r.$$.fragment,t),o=!1},d:function(t){p(n),p(e),p(s),t&&p(a),j(r,t)}}}function y(){return A.apply(this,arguments)}function A(){return(A=w(E.mark((function t(){var n;return E.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("docs.json").then((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",{sections:n});case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function D(t,n,e){var s=n.sections;return t.$set=function(t){"sections"in t&&e("sections",s=t.sections)},{sections:s}}var M=function(i){function u(t){var c;return n(this,u),c=e(this,s(u).call(this)),a(r(c),t,D,b,o,["sections"]),c}return t(u,c),u}();export default M;export{y as preload};