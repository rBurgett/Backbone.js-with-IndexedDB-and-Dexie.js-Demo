/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,s){t.Backbone=e(t,s,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore");e(t,exports,i)}else{t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){var s=t.Backbone;var n=[];var a=n.push;var o=n.slice;var h=n.splice;e.VERSION="1.1.2";e.$=r;e.noConflict=function(){t.Backbone=s;return this};e.emulateHTTP=false;e.emulateJSON=false;var u=e.Events={on:function(t,e,i){if(!c(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var s=this;var n=i.once(function(){s.off(t,n);e.apply(this,arguments)});n._callback=e;return this.on(t,n,r)},off:function(t,e,r){var s,n,a,o,h,u,l,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r){this._events=void 0;return this}o=t?[t]:i.keys(this._events);for(h=0,u=o.length;h<u;h++){t=o[h];if(a=this._events[t]){this._events[t]=s=[];if(e||r){for(l=0,f=a.length;l<f;l++){n=a[l];if(e&&e!==n.callback&&e!==n.callback._callback||r&&r!==n.context){s.push(n)}}}if(!s.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!c(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)f(i,e);if(r)f(r,arguments);return this},stopListening:function(t,e,r){var s=this._listeningTo;if(!s)return this;var n=!e&&!r;if(!r&&typeof e==="object")r=this;if(t)(s={})[t._listenId]=t;for(var a in s){t=s[a];t.off(e,r,this);if(n||i.isEmpty(t._events))delete this._listeningTo[a]}return this}};var l=/\s+/;var c=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(l.test(i)){var n=i.split(l);for(var a=0,o=n.length;a<o;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var f=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,o);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e);return}};var d={listenTo:"on",listenToOnce:"once"};i.each(d,function(t,e){u[e]=function(e,r,s){var n=this._listeningTo||(this._listeningTo={});var a=e._listenId||(e._listenId=i.uniqueId("l"));n[a]=e;if(!s&&typeof r==="object")s=this;e[t](r,s,this);return this}});u.bind=u.on;u.unbind=u.off;i.extend(e,u);var p=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(p.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var s,n,a,o,h,u,l,c;if(t==null)return this;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;a=r.unset;h=r.silent;o=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=i.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in n)this.id=n[this.idAttribute];for(s in n){e=n[s];if(!i.isEqual(c[s],e))o.push(s);if(!i.isEqual(l[s],e)){this.changed[s]=e}else{delete this.changed[s]}a?delete c[s]:c[s]=e}if(!h){if(o.length)this._pending=r;for(var f=0,d=o.length;f<d;f++){this.trigger("change:"+o[f],this,c[o[f]],r)}}if(u)return this;if(!h){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e,r=false;var s=this._changing?this._previousAttributes:this.attributes;for(var n in t){if(i.isEqual(s[n],e=t[n]))continue;(r||(r={}))[n]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};q(this,t);return this.sync("read",this,t)},save:function(t,e,r){var s,n,a,o=this.attributes;if(t==null||typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r=i.extend({validate:true},r);if(s&&!r.wait){if(!this.set(s,r))return false}else{if(!this._validate(s,r))return false}if(s&&r.wait){this.attributes=i.extend({},o,s)}if(r.parse===void 0)r.parse=true;var h=this;var u=r.success;r.success=function(t){h.attributes=o;var e=h.parse(t,r);if(r.wait)e=i.extend(s||{},e);if(i.isObject(e)&&!h.set(e,r)){return false}if(u)u(h,t,r);h.trigger("sync",h,t,r)};q(this,r);n=this.isNew()?"create":r.patch?"patch":"update";if(n==="patch")r.attrs=s;a=this.sync(n,this,r);if(s&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var s=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())s();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}q(this,t);var n=this.sync("delete",this,t);if(!t.wait)s();return n},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;return t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var v=["keys","values","pairs","invert","pick","omit"];i.each(v,function(t){p.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}});var g=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,remove:false};i.extend(g.prototype,u,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,y))},remove:function(t,e){var r=!i.isArray(t);t=r?[t]:i.clone(t);e||(e={});var s,n,a,o;for(s=0,n=t.length;s<n;s++){o=t[s]=this.get(t[s]);if(!o)continue;delete this._byId[o.id];delete this._byId[o.cid];a=this.indexOf(o);this.models.splice(a,1);this.length--;if(!e.silent){e.index=a;o.trigger("remove",o,this,e)}this._removeReference(o,e)}return r?t[0]:t},set:function(t,e){e=i.defaults({},e,m);if(e.parse)t=this.parse(t,e);var r=!i.isArray(t);t=r?t?[t]:[]:i.clone(t);var s,n,a,o,h,u,l;var c=e.at;var f=this.model;var d=this.comparator&&c==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g=[],y=[],_={};var b=e.add,w=e.merge,x=e.remove;var E=!d&&b&&x?[]:false;for(s=0,n=t.length;s<n;s++){h=t[s]||{};if(h instanceof p){a=o=h}else{a=h[f.prototype.idAttribute||"id"]}if(u=this.get(a)){if(x)_[u.cid]=true;if(w){h=h===o?o.attributes:h;if(e.parse)h=u.parse(h,e);u.set(h,e);if(d&&!l&&u.hasChanged(v))l=true}t[s]=u}else if(b){o=t[s]=this._prepareModel(h,e);if(!o)continue;g.push(o);this._addReference(o,e)}o=u||o;if(E&&(o.isNew()||!_[o.id]))E.push(o);_[o.id]=true}if(x){for(s=0,n=this.length;s<n;++s){if(!_[(o=this.models[s]).cid])y.push(o)}if(y.length)this.remove(y,e)}if(g.length||E&&E.length){if(d)l=true;this.length+=g.length;if(c!=null){for(s=0,n=g.length;s<n;s++){this.models.splice(c+s,0,g[s])}}else{if(E)this.models.length=0;var k=E||g;for(s=0,n=k.length;s<n;s++){this.models.push(k[s])}}}if(l)this.sort({silent:true});if(!e.silent){for(s=0,n=g.length;s<n;s++){(o=g[s]).trigger("add",o,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,s=this.models.length;r<s;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){if(i.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(i.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(i.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=t?i.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var s=t.reset?"reset":"set";r[s](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};q(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var s=e.success;e.success=function(t,i){if(e.wait)r.add(t,e);if(s)s(t,i,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t;e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_addReference:function(t,e){this._byId[t.cid]=t;if(t.id!=null)this._byId[t.id]=t;if(!t.collection)t.collection=this;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];i.each(_,function(t){g.prototype[t]=function(){var e=o.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var b=["groupBy","countBy","sortBy","indexBy"];i.each(b,function(t){g.prototype[t]=function(e,r){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,r)}});var w=e.View=function(t){this.cid=i.uniqueId("view");t||(t={});i.extend(this,i.pick(t,E));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];i.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,i){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0];if(i!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=i.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[t[e]];if(!r)continue;var s=e.match(x);var n=s[1],a=s[2];r=i.bind(r,this);n+=".delegateEvents"+this.cid;if(a===""){this.$el.on(n,r)}else{this.$el.on(n,a,r)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");var r=e.$("<"+i.result(this,"tagName")+">").attr(t);this.setElement(r,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,s){var n=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:n,dataType:"json"};if(!s.url){a.url=i.result(r,"url")||M()}if(s.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(s.attrs||r.toJSON(s))}if(s.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(s.emulateHTTP&&(n==="PUT"||n==="DELETE"||n==="PATCH")){a.type="POST";if(s.emulateJSON)a.data._method=n;var o=s.beforeSend;s.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",n);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!s.emulateJSON){a.processData=false}if(a.type==="PATCH"&&k){a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var h=s.xhr=e.ajax(i.extend(a,s));r.trigger("request",r,h,s);return h};var k=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var H=/(\(\?)?:\w+/g;var A=/\*\w+/g;var I=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,s){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){s=r;r=""}if(!s)s=this[r];var n=this;e.history.route(t,function(i){var a=n._extractParameters(t,i);n.execute(s,a);n.trigger.apply(n,["route:"+r].concat(a));n.trigger("route",r,a);e.history.trigger("route",n,r,a)});return this},execute:function(t,e){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(I,"\\$&").replace(S,"(?:$1)?").replace(H,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];i.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var R=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment();var s=document.documentMode;var n=P.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(O,"/");if(n&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=a.hide().appendTo("body")[0].contentWindow;this.navigate(r)}if(this._hasPushState){e.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!n){e.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else if(this._hasPushState&&this.atRoot()&&o.hash){this.fragment=this.getHash().replace(R,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return i.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var U=function(t,e){var r=this;var s;if(t&&i.has(t,"constructor")){s=t.constructor}else{s=function(){return r.apply(this,arguments)}}i.extend(s,r,e);var n=function(){this.constructor=s};n.prototype=r.prototype;s.prototype=new n;if(t)i.extend(s.prototype,t);s.__super__=r.prototype;return s};p.extend=g.extend=$.extend=w.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')};var q=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
/* Minimalistic IndexedDB Wrapper with Bullet Proof Transactions
   =============================================================

   By David Fahlander, david.fahlander@gmail.com

   Version 1.0.2 - December 9, 2014.

   Tested successfully on Chrome, IE, Firefox and Opera.

   Official Website: https://github.com/dfahlander/Dexie.js/wiki/Dexie.js

   Licensed under the Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
*/
(function (window, publish, isBrowser, undefined) {

    "use strict";

    function extend(obj, extension) {
        if (typeof extension !== 'object') extension = extension(); // Allow to supply a function returning the extension. Useful for simplifying private scopes.
        Object.keys(extension).forEach(function (key) {
            obj[key] = extension[key];
        });
        return obj;
    }

    function derive(Child) {
        return {
            from: function (Parent) {
                Child.prototype = Object.create(Parent.prototype);
                Child.prototype.constructor = Child;
                return {
                    extend: function (extension) {
                        extend(Child.prototype, typeof extension !== 'object' ? extension(Parent.prototype) : extension);
                    }
                };
            }
        };
    }

    function override(origFunc, overridedFactory) {
        return overridedFactory(origFunc);
    }

    function Dexie(dbName) {

        // Resolve all external dependencies:
        var deps = Dexie.dependencies;
        var indexedDB = deps.indexedDB,
            IDBKeyRange = deps.IDBKeyRange,
            IDBTransaction = deps.IDBTransaction;

        var DOMError = deps.DOMError,
            TypeError = deps.TypeError,
            Error = deps.Error;

        var globalSchema = this._dbSchema = {};
        var versions = [];
        var dbStoreNames = [];
        var allTables = {};
        var notInTransFallbackTables = {};
        ///<var type="IDBDatabase" />
        var idbdb = null; // Instance of IDBDatabase
        var db_is_blocked = true;
        var dbOpenError = null;
        var isBeingOpened = false;
        var READONLY = "readonly", READWRITE = "readwrite";
        var db = this;
        var pausedResumeables = [];
        var autoSchema = false;

        function init() {
            // If browser (not node.js or other), subscribe to versionchange event and reload page
            if (isBrowser) db.on("versionchange", function (ev) {
                // Let's not block the other window from making it's delete() or open() call.
                db.close();
                if (ev.newVersion) { // Only reload page if versionchange event isnt a deletion of db.
                    // Default behavior for versionchange event is to reload the page.
                    // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
                    window.location.reload(true);
                    /* The logic behind this default handler is:
                        1. Since this event means that the db is upgraded in another IDBDatabase instance (in tab or window that has a newer version of the code),
                           it makes sense to reload our page and force reload from cache. When reloaded, we get the newest version of the code - making app in synch with db.
                        2. There wont be an infinite loop here even if our page still get the old version, becuase the next time onerror will be triggered and not versionchange.
                        3. If not solving this by default, the API user would be obligated to handle versionchange, and would have to be on place in every example of Dexie code.
                    */
                };
            });
        }

        //
        //
        //
        // ------------------------- Versioning Framework---------------------------
        //
        //
        //

        this.version = function (versionNumber) {
            /// <param name="versionNumber" type="Number"></param>
            /// <returns type="Version"></returns>
            if (idbdb) throw new Error("Cannot add version when database is open");
            this.verno = Math.max(this.verno, versionNumber);
            var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
            if (versionInstance) return versionInstance;
            versionInstance = new Version(versionNumber);
            versions.push(versionInstance);
            versions.sort(lowerVersionFirst);
            return versionInstance;
        }; 

        function Version(versionNumber) {
            this._cfg = {
                version: versionNumber,
                storesSource: null,
                dbschema: {},
                tables: {},
                contentUpgrade: null
            }; 
            this.stores({}); // Derive earlier schemas by default.
        }

        extend(Version.prototype, {
            stores: function (stores) {
                /// <summary>
                ///   Defines the schema for a particular version
                /// </summary>
                /// <param name="stores" type="Object">
                /// Example: <br/>
                ///   {users: "id++,first,last,&amp;username,*email", <br/>
                ///   passwords: "id++,&amp;username"}<br/>
                /// <br/>
                /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
                /// Special characters:<br/>
                ///  "&amp;"  means unique key, <br/>
                ///  "*"  means value is multiEntry, <br/>
                ///  "++" means auto-increment and only applicable for primary key <br/>
                /// </param>
                this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;

                // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.
                var storesSpec = {};
                versions.forEach(function (version) { // 'versions' is always sorted by lowest version first.
                    extend(storesSpec, version._cfg.storesSource);
                });

                var dbschema = (this._cfg.dbschema = {});
                this._parseStoresSpec(storesSpec, dbschema);
                // Update the latest schema to this version
                // Update API
                globalSchema = db._dbSchema = dbschema;
                removeTablesApi([allTables, db, notInTransFallbackTables]);
                setApiOnPlace([notInTransFallbackTables], tableNotInTransaction, Object.keys(dbschema), READWRITE, dbschema);
                setApiOnPlace([allTables, db, this._cfg.tables], db._transPromiseFactory, Object.keys(dbschema), READWRITE, dbschema, true);
                dbStoreNames = Object.keys(dbschema);
                return this;
            },
            upgrade: function (upgradeFunction) {
                /// <param name="upgradeFunction" optional="true">Function that performs upgrading actions.</param>
                var self = this;
                fakeAutoComplete(function () {
                    upgradeFunction(db._createTransaction(READWRITE, Object.keys(self._cfg.dbschema), self._cfg.dbschema));// BUGBUG: No code completion for prev version's tables wont appear.
                });
                this._cfg.contentUpgrade = upgradeFunction;
                return this;
            },
            _parseStoresSpec: function (stores, outSchema) {
                Object.keys(stores).forEach(function (tableName) {
                    if (stores[tableName] !== null) {
                        var instanceTemplate = {};
                        var indexes = parseIndexSyntax(stores[tableName]);
                        var primKey = indexes.shift();
                        if (primKey.multi) throw new Error("Primary key cannot be multi-valued");
                        if (primKey.keyPath && primKey.auto) setByKeyPath(instanceTemplate, primKey.keyPath, 0);
                        indexes.forEach(function (idx) {
                            if (idx.auto) throw new Error("Only primary key can be marked as autoIncrement (++)");
                            if (!idx.keyPath) throw new Error("Index must have a name and cannot be an empty string");
                            setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () { return ""; }) : "");
                        });
                        outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
                    }
                });
            }
        });

        function runUpgraders(oldVersion, idbtrans, reject, openReq) {
            if (oldVersion === 0) {
                //globalSchema = versions[versions.length - 1]._cfg.dbschema;
                // Create tables:
                Object.keys(globalSchema).forEach(function (tableName) {
                    createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                // Populate data
                var t = db._createTransaction(READWRITE, dbStoreNames, globalSchema);
                t.idbtrans = idbtrans;
                t.idbtrans.onerror = eventRejectHandler(reject, ["populating database"]);
                t.on('error').subscribe(reject);
                Promise.newPSD(function () {
                    Promise.PSD.trans = t;
                    try {
                        db.on("populate").fire(t);
                    } catch (err) {
                        openReq.onerror = idbtrans.onerror = function (ev) { ev.preventDefault(); };  // Prohibit AbortError fire on db.on("error") in Firefox.
                        try { idbtrans.abort(); } catch (e) { }
                        idbtrans.db.close();
                        reject(err);
                    }
                });
            } else {
                // Upgrade version to version, step-by-step from oldest to newest version.
                // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
                var queue = [];
                var oldVersionStruct = versions.filter(function (version) { return version._cfg.version === oldVersion; })[0];
                if (!oldVersionStruct) throw new Error("Dexie specification of currently installed DB version is missing");
                globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
                var anyContentUpgraderHasRun = false;

                var versToRun = versions.filter(function (v) { return v._cfg.version > oldVersion; });
                versToRun.forEach(function (version) {
                    /// <param name="version" type="Version"></param>
                    var oldSchema = globalSchema;
                    var newSchema = version._cfg.dbschema;
                    adjustToExistingIndexNames(oldSchema, idbtrans);
                    adjustToExistingIndexNames(newSchema, idbtrans);
                    globalSchema = db._dbSchema = newSchema;
                    {
                        var diff = getSchemaDiff(oldSchema, newSchema);
                        diff.add.forEach(function (tuple) {
                            queue.push(function (idbtrans, cb) {
                                createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                                cb();
                            });
                        });
                        diff.change.forEach(function (change) {
                            if (change.recreate) {
                                throw new Error("Not yet support for changing primary key");
                            } else {
                                queue.push(function (idbtrans, cb) {
                                    var store = idbtrans.objectStore(change.name);
                                    change.add.forEach(function (idx) {
                                        addIndex(store, idx);
                                    });
                                    change.change.forEach(function (idx) {
                                        store.deleteIndex(idx.name);
                                        addIndex(store, idx);
                                    });
                                    change.del.forEach(function (idxName) {
                                        store.deleteIndex(idxName);
                                    });
                                    cb();
                                });
                            }
                        });
                        if (version._cfg.contentUpgrade) {
                            queue.push(function (idbtrans, cb) {
                                anyContentUpgraderHasRun = true;
                                var t = db._createTransaction(READWRITE, [].slice.call(idbtrans.db.objectStoreNames, 0), newSchema);
                                t.idbtrans = idbtrans;
                                var uncompletedRequests = 0;
                                t._promise = override(t._promise, function (orig_promise) {
                                    return function (mode, fn, writeLock) {
                                        ++uncompletedRequests;
                                        function proxy(fn) {
                                            return function () {
                                                fn.apply(this, arguments);
                                                if (--uncompletedRequests === 0) cb(); // A called db operation has completed without starting a new operation. The flow is finished, now run next upgrader.
                                            };
                                        }
                                        return orig_promise.call(this, mode, function (resolve, reject, trans) {
                                            arguments[0] = proxy(resolve);
                                            arguments[1] = proxy(reject);
                                            fn.apply(this, arguments);
                                        }, writeLock);
                                    };
                                });
                                idbtrans.onerror = eventRejectHandler(reject, ["running upgrader function for version", version._cfg.version]);
                                t.on('error').subscribe(reject);
                                version._cfg.contentUpgrade(t);
                                if (uncompletedRequests === 0) cb(); // contentUpgrade() didnt call any db operations at all.
                            });
                        }
                        if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug()) { // Dont delete old tables if ieBug is present and a content upgrader has run. Let tables be left in DB so far. This needs to be taken care of.
                            queue.push(function (idbtrans, cb) {
                                // Delete old tables
                                deleteRemovedTables(newSchema, idbtrans);
                                cb();
                            });
                        }
                    }
                });

                // Now, create a queue execution engine
                var runNextQueuedFunction = function () {
                    try {
                        if (queue.length)
                            queue.shift()(idbtrans, runNextQueuedFunction);
                        else
                            createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
                    } catch (err) {
                        openReq.onerror = idbtrans.onerror = function (ev) { ev.preventDefault(); };  // Prohibit AbortError fire on db.on("error") in Firefox.
                        idbtrans.abort();
                        idbtrans.db.close();
                        reject(err);
                    }
                };
                runNextQueuedFunction();
            }
        }

        function getSchemaDiff(oldSchema, newSchema) {
            var diff = {
                del: [], // Array of table names
                add: [], // Array of [tableName, newDefinition]
                change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}
            };
            for (var table in oldSchema) {
                if (!newSchema[table]) diff.del.push(table);
            }
            for (var table in newSchema) {
                var oldDef = oldSchema[table],
                    newDef = newSchema[table];
                if (!oldDef) diff.add.push([table, newDef]);
                else {
                    var change = {
                        name: table,
                        def: newSchema[table],
                        recreate: false,
                        del: [],
                        add: [],
                        change: []
                    };
                    if (oldDef.primKey.src !== newDef.primKey.src) {
                        // Primary key has changed. Remove and re-add table.
                        change.recreate = true;
                        diff.change.push(change);
                    } else {
                        var oldIndexes = oldDef.indexes.reduce(function (prev, current) { prev[current.name] = current; return prev; }, {});
                        var newIndexes = newDef.indexes.reduce(function (prev, current) { prev[current.name] = current; return prev; }, {});
                        for (var idxName in oldIndexes) {
                            if (!newIndexes[idxName]) change.del.push(idxName);
                        }
                        for (var idxName in newIndexes) {
                            var oldIdx = oldIndexes[idxName],
                                newIdx = newIndexes[idxName];
                            if (!oldIdx) change.add.push(newIdx);
                            else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
                        }
                        if (change.recreate || change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                            diff.change.push(change);
                        }
                    }
                }
            }
            return diff;
        }

        function createTable(idbtrans, tableName, primKey, indexes) {
            /// <param name="idbtrans" type="IDBTransaction"></param>
            var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
            indexes.forEach(function (idx) { addIndex(store, idx); });
            return store;
        }

        function createMissingTables(newSchema, idbtrans) {
            Object.keys(newSchema).forEach(function (tableName) {
                if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                    createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
                }
            });
        }

        function deleteRemovedTables(newSchema, idbtrans) {
            for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
                var storeName = idbtrans.db.objectStoreNames[i];
                if (newSchema[storeName] === null || newSchema[storeName] === undefined) {
                    idbtrans.db.deleteObjectStore(storeName);
                }
            }
        }

        function addIndex(store, idx) {
            store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
        }

        //
        //
        //      Dexie Protected API
        //
        //

        this._allTables = allTables;

        this._tableFactory = function createTable(mode, tableSchema, transactionPromiseFactory) {
            /// <param name="tableSchema" type="TableSchema"></param>
            if (mode === READONLY)
                return new Table(tableSchema.name, transactionPromiseFactory, tableSchema, Collection);
            else
                return new WriteableTable(tableSchema.name, transactionPromiseFactory, tableSchema);
        }; 

        this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
            return new Transaction(mode, storeNames, dbschema, parentTransaction);
        }; 

        function tableNotInTransaction(mode, storeNames) {
            throw new Error("Table " + storeNames[0] + " not part of transaction. Original Scope Function Source: " + Dexie.Promise.PSD.trans.scopeFunc.toString());
        }

        this._transPromiseFactory = function transactionPromiseFactory(mode, storeNames, fn) { // Last argument is "writeLocked". But this doesnt apply to oneshot direct db operations, so we ignore it.
            if (db_is_blocked && (!Promise.PSD || !Promise.PSD.letThrough)) {
                // Database is paused. Wait til resumed.
                var blockedPromise = new Promise(function (resolve, reject) {
                    pausedResumeables.push({
                        resume: function () {
                            var p = db._transPromiseFactory(mode, storeNames, fn);
                            blockedPromise.onuncatched = p.onuncatched;
                            p.then(resolve, reject);
                        }
                    });
                });
                return blockedPromise;
            } else {
                var trans = db._createTransaction(mode, storeNames, globalSchema);
                return trans._promise(mode, function (resolve, reject) {
                    // An uncatched operation will bubble to this anonymous transaction. Make sure
                    // to continue bubbling it up to db.on('error'):
                    trans.error(function (err) {
                        db.on('error').fire(err);
                    });
                    fn(function (value) {
                        // Instead of resolving value directly, wait with resolving it until transaction has completed.
                        // Otherwise the data would not be in the DB if requesting it in the then() operation.
                        // Specifically, to ensure that the following expression will work:
                        //
                        //   db.friends.put({name: "Arne"}).then(function () {
                        //       db.friends.where("name").equals("Arne").count(function(count) {
                        //           assert (count === 1);
                        //       });
                        //   });
                        //
                        trans.complete(function () {
                            resolve(value);
                        });
                    }, reject, trans);
                });
            }
        }; 

        this._whenReady = function (fn) {
            if (db_is_blocked && (!Promise.PSD || !Promise.PSD.letThrough)) {
                return new Promise(function (resolve, reject) {
                    fakeAutoComplete(function () { new Promise(function () { fn(resolve, reject); }); });
                    pausedResumeables.push({
                        resume: function () {
                            fn(resolve, reject);
                        }
                    });
                });
            }
            return new Promise(fn);
        }; 

        //
        //
        //
        //
        //      Dexie API
        //
        //
        //

        this.verno = 0;

        this.open = function () {
            return new Promise(function (resolve, reject) {
                if (idbdb || isBeingOpened) throw new Error("Database already opened or being opened");
                function openError(err) {
                    isBeingOpened = false;
                    dbOpenError = err;
                    db_is_blocked = false;
                    reject(dbOpenError);
                    pausedResumeables.forEach(function (resumable) {
                        // Resume all stalled operations. They will fail once they wake up.
                        resumable.resume();
                    });
                    pausedResumeables = [];
                }
                try {
                    dbOpenError = null;
                    isBeingOpened = true;

                    // Make sure caller has specified at least one version
                    if (versions.length === 0) {
                        autoSchema = true;
                    }

                    // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE: 
                    // IE fails when deleting objectStore after reading from it.
                    // A future version of Dexie.js will stopover an intermediate version to workaround this.
                    // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.
                    if (!indexedDB) throw new Error("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using Safari, make sure to include indexedDB polyfill.");
                    var dbWasCreated = false; // TODO: Remove this line. Never used.
                    var req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
                    req.onerror = eventRejectHandler(openError, ["opening database", dbName]);
                    req.onblocked = function (ev) {
                        db.on("blocked").fire(ev);
                    }; 
                    req.onupgradeneeded = trycatch (function (e) {
                        if (autoSchema && !db._allowEmptyDB) { // Unless an addon has specified db._allowEmptyDB, lets make the call fail.
                            // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
                            // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we 
                            // do not create a new database by accident here.
                            req.onerror = function (event) { event.preventDefault(); }; // Prohibit onabort error from firing before we're done!
                            req.transaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
                            // Close database and delete it.
                            req.result.close();
                            var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!
                            delreq.onsuccess = delreq.onerror = function () {
                                openError(new Error("Database '" + dbName + "' doesnt exist"));
                            }; 
                        } else {
                            if (e.oldVersion === 0) dbWasCreated = true; // TODO: Remove this line. Never used.
                            req.transaction.onerror = eventRejectHandler(openError);
                            var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.
                            runUpgraders(oldVer / 10, req.transaction, openError, req);
                        }
                    }, openError);
                    req.onsuccess = trycatch(function (e) {
                        isBeingOpened = false;
                        idbdb = req.result;
                        if (autoSchema) readGlobalSchema();
                        else if (idbdb.objectStoreNames.length > 0)
                            adjustToExistingIndexNames(globalSchema, idbdb.transaction(idbdb.objectStoreNames, READONLY));
                        idbdb.onversionchange = db.on("versionchange").fire; // Not firing it here, just setting the function callback to any registered subscriber.
                        globalDatabaseList(function (databaseNames) {
                            if (databaseNames.indexOf(dbName) === -1) return databaseNames.push(dbName);
                        });
                        // Now, let any subscribers to the on("ready") fire BEFORE any other db operations resume!
                        // If an the on("ready") subscriber returns a Promise, we will wait til promise completes or rejects before 
                        Promise.newPSD(function () {
                            Promise.PSD.letThrough = true; // Set a Promise-Specific Data property informing that onready is firing. This will make db._whenReady() let the subscribers use the DB but block all others (!). Quite cool ha?
                            try {
                                var res = db.on.ready.fire();
                                if (res && typeof res.then === 'function') {
                                    // If on('ready') returns a promise, wait for it to complete and then resume any pending operations.
                                    res.then(resume, function (err) {
                                        idbdb.close();
                                        idbdb = null;
                                        openError(err);
                                    });
                                } else {
                                    asap(resume); // Cannot call resume directly because then the pauseResumables would inherit from our PSD scope.
                                }
                            } catch (e) {
                                openError(e);
                            }

                            function resume() {
                                db_is_blocked = false;
                                pausedResumeables.forEach(function (resumable) {
                                    // If anyone has made operations on a table instance before the db was opened, the operations will start executing now.
                                    resumable.resume();
                                });
                                pausedResumeables = [];
                                resolve();
                            }
                        });
                    }, openError);
                } catch (err) {
                    openError(err);
                }
            });
        }; 

        this.close = function () {
            if (idbdb) {
                idbdb.close();
                idbdb = null;
                db_is_blocked = true;
                dbOpenError = null;
            }
        }; 

        this.delete = function () {
            var args = arguments;
            return new Promise(function (resolve, reject) {
                if (args.length > 0) throw new Error("Arguments not allowed in db.delete()");
                function doDelete() {
                    db.close();
                    var req = indexedDB.deleteDatabase(dbName);
                    req.onsuccess = function () {
                        globalDatabaseList(function (databaseNames) {
                            var pos = databaseNames.indexOf(dbName);
                            if (pos >= 0) return databaseNames.splice(pos, 1);
                        });
                        resolve();
                    };
                    req.onerror = eventRejectHandler(reject, ["deleting", dbName]);
                    req.onblocked = function () {
                        db.on("blocked").fire();
                    };
                }
                if (isBeingOpened) {
                    pausedResumeables.push({ resume: doDelete });
                } else {
                    doDelete();
                }
            });
        }; 

        this.backendDB = function () {
            return idbdb;
        }; 

        this.isOpen = function () {
            return idbdb !== null;
        }; 
        this.hasFailed = function () {
            return dbOpenError !== null;
        }; 

        /*this.dbg = function (collection, counter) {
            if (!this._dbgResult || !this._dbgResult[counter]) {
                if (typeof collection === 'string') collection = this.table(collection).toCollection().limit(100);
                if (!this._dbgResult) this._dbgResult = [];
                var db = this;
                new Promise(function () {
                    Promise.PSD.letThrough = true;
                    db._dbgResult[counter] = collection.toArray();
                });
            }
            return this._dbgResult[counter]._value;
        }*/

        //
        // Properties
        //
        this.name = dbName;

        // db.tables - an array of all Table instances.
        // TODO: Change so that tables is a simple member and make sure to update it whenever allTables changes.
        Object.defineProperty(this, "tables", {
            get: function () {
                /// <returns type="Array" elementType="WriteableTable" />
                return Object.keys(allTables).map(function (name) { return allTables[name]; });
            }
        });

        //
        // Events
        //
        this.on = events(this, "error", "populate", "blocked", { "ready": [promisableChain, nop], "versionchange": [reverseStoppableEventChain, nop] });

        // Handle on('ready') specifically: If DB is already open, trigger the event immediately. Also, default to unsubscribe immediately after being triggered.
        this.on.ready.subscribe = override(this.on.ready.subscribe, function (origSubscribe) {
            return function (subscriber, bSticky) {
                function proxy () {
                    if (!bSticky) db.on.ready.unsubscribe(proxy);
                    return subscriber.apply(this, arguments);
                }
                origSubscribe.call(this, proxy);
                if (db.isOpen()) {
                    if (db_is_blocked) {
                        pausedResumeables.push({ resume: proxy });
                    } else {
                        proxy();
                    }
                }
            };
        });

        fakeAutoComplete(function () {
            db.on("populate").fire(db._createTransaction(READWRITE, dbStoreNames, globalSchema));
            db.on("error").fire(new Error());
        });

        this.transaction = function (mode, tableInstances, scopeFunc) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
            /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
            /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>

            // Let table arguments be all arguments between mode and last argument.
            tableInstances = [].slice.call(arguments, 1, arguments.length - 1);
            // Let scopeFunc be the last argument
            scopeFunc = arguments[arguments.length - 1];
            var parentTransaction = Promise.PSD && Promise.PSD.trans;
            if (mode.indexOf('!') !== -1) parentTransaction = null; // Caller dont want to reuse existing transaction
            var onlyIfCompatible = mode.indexOf('?') !== -1;
            mode = mode.replace('!', '').replace('?', '');
            //
            // Get storeNames from arguments. Either through given table instances, or through given table names.
            //
            var tables = Array.isArray(tableInstances[0]) ? tableInstances.reduce(function (a, b) { return a.concat(b); }) : tableInstances;
            var error = null;
            var storeNames = tables.map(function (tableInstance) {
                if (typeof tableInstance === "string") {
                    return tableInstance;
                } else {
                    if (!(tableInstance instanceof Table)) error = error || new TypeError("Invalid type. Arguments following mode must be instances of Table or String");
                    return tableInstance.name;
                }
            });

            //
            // Resolve mode. Allow shortcuts "r" and "rw".
            //
            if (mode === "r" || mode === READONLY)
                mode = READONLY;
            else if (mode === "rw" || mode === READWRITE)
                mode = READWRITE;
            else
                error = new Error("Invalid transaction mode: " + mode);

            if (parentTransaction) {
                // Basic checks
                if (!error) {
                    if (parentTransaction.db !== db) {
                        if (onlyIfCompatible) parentTransaction = null; // Spawn new transaction instead.
                        else error = new Error("Current transaction bound to different database instance");
                    }
                    if (parentTransaction && parentTransaction.mode === READONLY && mode === READWRITE) {
                        if (onlyIfCompatible) parentTransaction = null; // Spawn new transaction instead.
                        else error = error || new Error("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    }
                    if (parentTransaction) {
                        storeNames.forEach(function (storeName) {
                            if (!parentTransaction.tables.hasOwnProperty(storeName)) {
                                if (onlyIfCompatible) parentTransaction = null; // Spawn new transaction instead.
                                else error = error || new Error("Table " + storeName + " not included in parent transaction. Parent Transaction function: " + parentTransaction.scopeFunc.toString());
                            }
                        });
                    }
                }
            }
            if (parentTransaction) {
                // If this is a sub-transaction, lock the parent and then launch the sub-transaction.
                return parentTransaction._promise(mode, enterTransactionScope, "lock");
            } else {
                // If this is a root-level transaction, wait til database is ready and then launch the transaction.
                return db._whenReady(enterTransactionScope);
            }

            function enterTransactionScope(resolve, reject) {
                // Our transaction. To be set later.
                var trans = null;

                try {
                    // Throw any error if any of the above checks failed.
                    // Real error defined some lines up. We throw it here from within a Promise to reject Promise
                    // rather than make caller need to both use try..catch and promise catching. The reason we still
                    // throw here rather than do Promise.reject(error) is that we like to have the stack attached to the
                    // error. Also because there is a catch() clause bound to this try() that will bubble the error
                    // to the parent transaction.
                    if (error) throw error;

                    //
                    // Create Transaction instance
                    //
                    trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction);

                    // Provide arguments to the scope function (for backward compatibility)
                    var tableArgs = storeNames.map(function (name) { return trans.tables[name]; });
                    tableArgs.push(trans);

                    // If transaction completes, resolve the Promise with the return value of scopeFunc.
                    var returnValue;
                    var uncompletedRequests = 0;

                    // Create a new PSD frame to hold Promise.PSD.trans. Must not be bound to the current PSD frame since we want
                    // it to pop before then() callback is called of our returned Promise.
                    Promise.newPSD(function () {
                        // Let the transaction instance be part of a Promise-specific data (PSD) value.
                        Promise.PSD.trans = trans;
                        trans.scopeFunc = scopeFunc; // For Error ("Table " + storeNames[0] + " not part of transaction") when it happens. This may help localizing the code that started a transaction used on another place.

                        if (parentTransaction) {
                            // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
                            trans.idbtrans = parentTransaction.idbtrans;
                            trans._promise = override(trans._promise, function (orig) {
                                return function (mode, fn, writeLock) {
                                    ++uncompletedRequests;
                                    function proxy(fn2) {
                                        return function (val) {
                                            var retval = fn2(val);
                                            if (--uncompletedRequests === 0 && trans.active) {
                                                trans.active = false;
                                                trans.on.complete.fire(); // A called db operation has completed without starting a new operation. The flow is finished
                                            }
                                            return retval;
                                        };
                                    }
                                    return orig.call(this, mode, function (resolve2, reject2, trans) {
                                        return fn(proxy(resolve2), proxy(reject2), trans);
                                    }, writeLock);
                                };
                            });
                        }
                        trans.complete(function () {
                            resolve(returnValue);
                        });
                        // If transaction fails, reject the Promise and bubble to db if noone catched this rejection.
                        trans.error(function (e) {
                            trans.idbtrans.onerror = preventDefault; // Prohibit AbortError from firing.
                            trans.abort();
                            if (parentTransaction) {
                                parentTransaction.active = false;
                                parentTransaction.on.error.fire(e); // Bubble to parent transaction
                            }
                            var catched = reject(e);
                            if (!parentTransaction && !catched) {
                                db.on.error.fire(e);// If not catched, bubble error to db.on("error").
                            }
                        });

                        // Finally, call the scope function with our table and transaction arguments.
                        returnValue = scopeFunc.apply(trans, tableArgs); // NOTE: returnValue is used in trans.on.complete() not as a returnValue to this func.
                    });
                    if (!trans.idbtrans || parentTransaction && uncompletedRequests === 0) {
                        trans._nop(); // Make sure transaction is being used so that it will resolve.
                    }
                } catch (e) {
                    // If exception occur, abort the transaction and reject Promise.
                    if (trans && trans.idbtrans) trans.idbtrans.onerror = preventDefault; // Prohibit AbortError from firing.
                    if (trans) trans.abort();
                    if (parentTransaction) parentTransaction.on.error.fire(e);
                    asap(function () {
                        // Need to use asap(=setImmediate/setTimeout) before calling reject because we are in the Promise constructor and reject() will always return false if so.
                        if (!reject(e)) db.on("error").fire(e); // If not catched, bubble exception to db.on("error");
                    });
                }
            }
        }; 

        this.table = function (tableName) {
            /// <returns type="WriteableTable"></returns>
            if (!autoSchema && !allTables.hasOwnProperty(tableName)) { throw new Error("Table does not exist"); return { AN_UNKNOWN_TABLE_NAME_WAS_SPECIFIED: 1 }; }
            return allTables[tableName];
        }; 

        //
        //
        //
        // Table Class
        //
        //
        //
        function Table(name, transactionPromiseFactory, tableSchema, collClass) {
            /// <param name="name" type="String"></param>
            this.name = name;
            this.schema = tableSchema;
            this.hook = allTables[name] ? allTables[name].hook : events(null, {
                "creating": [hookCreatingChain, nop],
                "reading": [pureFunctionChain, mirror],
                "updating": [hookUpdatingChain, nop],
                "deleting": [nonStoppableEventChain, nop]
            });
            this._tpf = transactionPromiseFactory;
            this._collClass = collClass || Collection;
        }

        extend(Table.prototype, function () {
            function failReadonly() {
                throw new Error("Current Transaction is READONLY");
            }
            return {
                //
                // Table Protected Methods
                //

                _trans: function getTransaction(mode, fn, writeLocked) {
                    return this._tpf(mode, [this.name], fn, writeLocked);
                },
                _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
                    var self = this;
                    return this._tpf(mode, [this.name], function (resolve, reject, trans) {
                        fn(resolve, reject, trans.idbtrans.objectStore(self.name), trans);
                    }, writeLocked);
                },

                //
                // Table Public Methods
                //
                get: function (key, cb) {
                    var self = this;
                    fakeAutoComplete(function () { cb(self.schema.instanceTemplate); });
                    return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                        var req = idbstore.get(key);
                        req.onerror = eventRejectHandler(reject, ["getting", key, "from", self.name]);
                        req.onsuccess = function () {
                            resolve(self.hook.reading.fire(req.result));
                        };
                    }).then(cb);
                },
                where: function (indexName) {
                    return new WhereClause(this, indexName);
                },
                count: function (cb) {
                    return this.toCollection().count(cb);
                },
                offset: function (offset) {
                    return this.toCollection().offset(offset);
                },
                limit: function (numRows) {
                    return this.toCollection().limit(numRows);
                },
                reverse: function () {
                    return this.toCollection().reverse();
                },
                filter: function (filterFunction) {
                    return this.toCollection().and(filterFunction);
                },
                each: function (fn) {
                    var self = this;
                    fakeAutoComplete(function () { fn(self.schema.instanceTemplate); });
                    return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                        var req = idbstore.openCursor();
                        req.onerror = eventRejectHandler(reject, ["calling", "Table.each()", "on", self.name]);
                        iterate(req, null, fn, resolve, reject, self.hook.reading.fire);
                    });
                },
                toArray: function (cb) {
                    var self = this;
                    fakeAutoComplete(function () { cb([self.schema.instanceTemplate]); });
                    return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                        var a = [];
                        var req = idbstore.openCursor();
                        req.onerror = eventRejectHandler(reject, ["calling", "Table.toArray()", "on", self.name]);
                        iterate(req, null, function (item) { a.push(item); }, function () { resolve(a); }, reject, self.hook.reading.fire);
                    }).then(cb);
                },
                orderBy: function (index) {
                    return new this._collClass(new WhereClause(this, index));
                },

                toCollection: function () {
                    return new this._collClass(new WhereClause(this));
                },

                mapToClass: function (constructor, structure) {
                    /// <summary>
                    ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
                    ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
                    /// </summary>
                    /// <param name="constructor">Constructor function representing the class.</param>
                    /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
                    /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
                    this.schema.mappedClass = constructor;
                    var instanceTemplate = Object.create(constructor.prototype);
                    if (this.schema.primKey.keyPath) {
                        // Make sure primary key is not part of prototype because add() and put() fails on Chrome if primKey template lies on prototype due to a bug in its implementation
                        // of getByKeyPath(), that it accepts getting from prototype chain.
                        setByKeyPath(instanceTemplate, this.schema.primKey.keyPath, this.schema.primKey.auto ? 0 : "");
                        delByKeyPath(constructor.prototype, this.schema.primKey.keyPath);
                    }
                    if (structure) {
                        // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
                        applyStructure(instanceTemplate, structure);
                    }
                    this.schema.instanceTemplate = instanceTemplate;

                    // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
                    // no matter which method to use for reading (Table.get() or Table.where(...)... )
                    var readHook = Object.setPrototypeOf ?
                        function makeInherited(obj) {
                            if (!obj) return obj; // No valid object. (Value is null). Return as is.
                            // Object.setPrototypeOf() supported. Just change that pointer on the existing object. A little more efficient way.
                            Object.setPrototypeOf(obj, constructor.prototype);
                            return obj;
                        } : function makeInherited(obj) {
                            if (!obj) return obj; // No valid object. (Value is null). Return as is.
                            // Object.setPrototypeOf not supported (IE10)- return a new object and clone the members from the old one.
                            var res = Object.create(constructor.prototype);
                            for (var m in obj) if (obj.hasOwnProperty(m)) res[m] = obj[m];
                            return res;
                        };

                    if (this.schema.readHook) {
                        this.hook.reading.unsubscribe(this.schema.readHook);
                    }
                    this.schema.readHook = readHook;
                    this.hook("reading", readHook);
                    return constructor;
                },
                defineClass: function (structure) {
                    /// <summary>
                    ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
                    ///     as well as making it possible to extend the prototype of the returned constructor function.
                    /// </summary>
                    /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
                    /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
                    return this.mapToClass(Dexie.defineClass(structure), structure);
                },
                add: failReadonly,
                put: failReadonly,
                'delete': failReadonly,
                clear: failReadonly,
                update: failReadonly
            };
        });

        //
        //
        //
        // WriteableTable Class (extends Table)
        //
        //
        //
        function WriteableTable(name, transactionPromiseFactory, tableSchema, collClass) {
            Table.call(this, name, transactionPromiseFactory, tableSchema, collClass || WriteableCollection);
        }

        derive(WriteableTable).from(Table).extend(function () {
            return {
                add: function (obj, key) {
                    /// <summary>
                    ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
                    /// </summary>
                    /// <param name="obj" type="Object">A javascript object to insert</param>
                    /// <param name="key" optional="true">Primary key</param>
                    var self = this,
                        creatingHook = this.hook.creating.fire;
                    return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                        var thisCtx = {};
                        if (creatingHook !== nop) {
                            var effectiveKey = key || (idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined);
                            var keyToUse = creatingHook.call(thisCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.
                            if (effectiveKey === undefined && keyToUse !== undefined) {
                                if (idbstore.keyPath)
                                    setByKeyPath(obj, idbstore.keyPath, keyToUse);
                                else
                                    key = keyToUse;
                            }
                        }
                        //try {
                            var req = key ? idbstore.add(obj, key) : idbstore.add(obj);
                            req.onerror = eventRejectHandler(function (e) {
                                if (thisCtx.onerror) thisCtx.onerror(e);
                                return reject(e);
                            }, ["adding", obj, "into", self.name]);
                            req.onsuccess = function (ev) {
                                var keyPath = idbstore.keyPath;
                                if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
                                if (thisCtx.onsuccess) thisCtx.onsuccess(ev.target.result);
                                resolve(req.result);
                            };
                        /*} catch (e) {
                            trans.on("error").fire(e);
                            trans.abort();
                            reject(e);
                        }*/
                    });
                },

                put: function (obj, key) {
                    /// <summary>
                    ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
                    /// </summary>
                    /// <param name="obj" type="Object">A javascript object to insert or update</param>
                    /// <param name="key" optional="true">Primary key</param>
                    var self = this,
                        creatingHook = this.hook.creating.fire,
                        updatingHook = this.hook.updating.fire;
                    if (creatingHook !== nop || updatingHook !== nop) {
                        //
                        // People listens to when("creating") or when("updating") events!
                        // We must know whether the put operation results in an CREATE or UPDATE.
                        //
                        return this._trans(READWRITE, function (resolve, reject, trans) {
                            // Since key is optional, make sure we get it from obj if not provided
                            var effectiveKey = key || (self.schema.primKey.keyPath && getByKeyPath(obj, self.schema.primKey.keyPath));
                            if (effectiveKey === undefined) {
                                // No primary key. Must use add().
                                trans.tables[self.name].add(obj).then(resolve, reject);
                            } else {
                                // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
                                trans._lock(); // Needed because operation is splitted into modify() and add().
                                // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.
                                obj = deepClone(obj);
                                trans.tables[self.name].where(":id").equals(effectiveKey).modify(function (value) {
                                    // Replace extisting value with our object
                                    // CRUD event firing handled in WriteableCollection.modify()
                                    this.value = obj;
                                }).then(function (count) {
                                    if (count === 0) {
                                        // Object's key was not found. Add the object instead.
                                        // CRUD event firing will be done in add()
                                        return trans.tables[self.name].add(obj, key); // Resolving with another Promise. Returned Promise will then resolve with the new key.
                                    } else {
                                        return effectiveKey; // Resolve with the provided key.
                                    }
                                }).finally(function () {
                                    trans._unlock();
                                }).then(resolve, reject);
                            }
                        });
                    } else {
                        // Use the standard IDB put() method.
                        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                            var req = key ? idbstore.put(obj, key) : idbstore.put(obj);
                            req.onerror = eventRejectHandler(reject, ["putting", obj, "into", self.name]);
                            req.onsuccess = function (ev) {
                                var keyPath = idbstore.keyPath;
                                if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
                                resolve(req.result);
                            };
                        });
                    }
                },

                'delete': function (key) {
                    /// <param name="key">Primary key of the object to delete</param>
                    if (this.hook.deleting.subscribers.length) {
                        // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                        // call the CRUD event. Only WriteableCollection.delete() will know whether an object was actually deleted.
                        return this.where(":id").equals(key).delete();
                    } else {
                        // No one listens. Use standard IDB delete() method.
                        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                            var req = idbstore.delete(key);
                            req.onerror = eventRejectHandler(reject, ["deleting", key, "from", idbstore.name]);
                            req.onsuccess = function (ev) {
                                resolve(req.result);
                            };
                        });
                    }
                },

                clear: function () {
                    if (this.hook.deleting.subscribers.length) {
                        // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                        // call the CRUD event. Only WriteableCollection.delete() will knows which objects that are actually deleted.
                        return this.toCollection().delete();
                    } else {
                        return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                            var req = idbstore.clear();
                            req.onerror = eventRejectHandler(reject, ["clearing", idbstore.name]);
                            req.onsuccess = function (ev) {
                                resolve(req.result);
                            };
                        });
                    }
                },

                update: function (keyOrObject, modifications) {
                    if (typeof modifications !== 'object' || Array.isArray(modifications)) throw new Error("db.update(keyOrObject, modifications). modifications must be an object.");
                    if (typeof keyOrObject === 'object' && !Array.isArray(keyOrObject)) {
                        // object to modify. Also modify given object with the modifications:
                        Object.keys(modifications).forEach(function (keyPath) {
                            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                        });
                        var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                        if (key === undefined) Promise.reject(new Error("Object does not contain its primary key"));
                        return this.where(":id").equals(key).modify(modifications);
                    } else {
                        // key to modify
                        return this.where(":id").equals(keyOrObject).modify(modifications);
                    }
                }
            };
        });

        //
        //
        //
        // Transaction Class
        //
        //
        //
        function Transaction(mode, storeNames, dbschema, parent) {
            /// <summary>
            ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
            /// </summary>
            /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
            /// <param name="storeNames" type="Array">Array of table names to operate on</param>
            var self = this;
            this.db = db;
            this.mode = mode;
            this.storeNames = storeNames;
            this.idbtrans = null;
            this.on = events(this, ["complete", "error"], "abort");
            this._reculock = 0;
            this._blockedFuncs = [];
            this._psd = null;
            this.active = true;
            this._dbschema = dbschema;
            if (parent) this.parent = parent;
            this._tpf = transactionPromiseFactory;
            this.tables = Object.create(notInTransFallbackTables); // ...so that all non-included tables exists as instances (possible to call table.name for example) but will fail as soon as trying to execute a query on it.

            function transactionPromiseFactory(mode, storeNames, fn, writeLocked) {
                // Creates a Promise instance and calls fn (resolve, reject, trans) where trans is the instance of this transaction object.
                // Support for write-locking the transaction during the promise life time from creation to success/failure.
                // This is actually not needed when just using single operations on IDB, since IDB implements this internally.
                // However, when implementing a write operation as a series of operations on top of IDB(collection.delete() and collection.modify() for example),
                // lock is indeed needed if Dexie APIshould behave in a consistent manner for the API user.
                // Another example of this is if we want to support create/update/delete events,
                // we need to implement put() using a series of other IDB operations but still need to lock the transaction all the way.
                return self._promise(mode, fn, writeLocked);
            }

            for (var i = storeNames.length - 1; i !== -1; --i) {
                var name = storeNames[i];
                var table = db._tableFactory(mode, dbschema[name], transactionPromiseFactory);
                this.tables[name] = table;
                if (!this[name]) this[name] = table;
            }
        }

        extend(Transaction.prototype, {
            //
            // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
            //

            _lock: function () {
                // Temporary set all requests into a pending queue if they are called before database is ready.
                ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)
                if (this._reculock === 1 && Promise.PSD) Promise.PSD.lockOwnerFor = this;
                return this;
            },
            _unlock: function () {
                if (--this._reculock === 0) {
                    if (Promise.PSD) Promise.PSD.lockOwnerFor = null;
                    while (this._blockedFuncs.length > 0 && !this._locked()) {
                        var fn = this._blockedFuncs.shift();
                        try { fn(); } catch (e) { }
                    }
                }
                return this;
            },
            _locked: function () {
                // Checks if any write-lock is applied on this transaction.
                // To simplify the Dexie API for extension implementations, we support recursive locks.
                // This is accomplished by using "Promise Specific Data" (PSD).
                // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
                // Promise.PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
                //         * callback given to the Promise() constructor  (function (resolve, reject){...})
                //         * callbacks given to then()/catch()/finally() methods (function (value){...})
                // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
                // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
                // Promise.PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
                return this._reculock && (!Promise.PSD || Promise.PSD.lockOwnerFor !== this);
            },
            _nop: function (cb) {
                // An asyncronic no-operation that may call given callback when done doing nothing. An alternative to asap() if we must not lose the transaction.
                this.tables[this.storeNames[0]].get(0).then(cb);
            },
            _promise: function (mode, fn, bWriteLock) {
                var self = this;
                return Promise.newPSD(function() {
                    var p;
                    // Read lock always
                    if (!self._locked()) {
                        p = self.active ? new Promise(function (resolve, reject) {
                            if (!self.idbtrans && mode) {
                                if (!idbdb) throw dbOpenError ? new Error("Database not open. Following error in populate, ready or upgrade function made Dexie.open() fail: " + dbOpenError) : new Error("Database not open");
                                var idbtrans = self.idbtrans = idbdb.transaction(self.storeNames, self.mode);
                                idbtrans.onerror = function (e) {
                                    self.on("error").fire(e && e.target.error);
                                    e.preventDefault(); // Prohibit default bubbling to window.error
                                    self.abort(); // Make sure transaction is aborted since we preventDefault.
                                }; 
                                idbtrans.onabort = function (e) {
                                    self.active = false;
                                    self.on("abort").fire(e);
                                }; 
                                idbtrans.oncomplete = function (e) {
                                    self.active = false;
                                    self.on("complete").fire(e);
                                }; 
                            }
                            if (bWriteLock) self._lock(); // Write lock if write operation is requested
                            try {
                                fn(resolve, reject, self);
                            } catch (e) {
                                // Direct exception happened when doin operation.
                                // We must immediately fire the error and abort the transaction.
                                // When this happens we are still constructing the Promise so we don't yet know
                                // whether the caller is about to catch() the error or not. Have to make
                                // transaction fail. Catching such an error wont stop transaction from failing.
                                // This is a limitation we have to live with.
                                Dexie.spawn(function () { self.on('error').fire(e); });
                                self.abort();
                                reject(e);
                            }
                        }) : Promise.reject(stack(new Error("Transaction is inactive. Original Scope Function Source: " + self.scopeFunc.toString())));
                        if (self.active && bWriteLock) p.finally(function () {
                            self._unlock();
                        });
                    } else {
                        // Transaction is write-locked. Wait for mutex.
                        p = new Promise(function (resolve, reject) {
                            self._blockedFuncs.push(function () {
                                self._promise(mode, fn, bWriteLock).then(resolve, reject);
                            });
                        });
                    }
                    p.onuncatched = function (e) {
                        // Bubble to transaction. Even though IDB does this internally, it would just do it for error events and not for caught exceptions.
                        Dexie.spawn(function () { self.on("error").fire(e); });
                        self.abort();
                    };
                    return p;
                });
            },

            //
            // Transaction Public Methods
            //

            complete: function (cb) {
                return this.on("complete", cb);
            },
            error: function (cb) {
                return this.on("error", cb);
            },
            abort: function () {
                if (this.idbtrans && this.active) try { // TODO: if !this.idbtrans, enqueue an abort() operation.
                    this.active = false;
                    this.idbtrans.abort();
                    this.on.error.fire(new Error("Transaction Aborted"));
                } catch (e) { }
            },
            table: function (name) {
                if (!this.tables.hasOwnProperty(name)) { throw new Error("Table " + name + " not in transaction"); return { AN_UNKNOWN_TABLE_NAME_WAS_SPECIFIED: 1 }; }
                return this.tables[name];
            }
        });

        //
        //
        //
        // WhereClause
        //
        //
        //
        function WhereClause(table, index, orCollection) {
            /// <param name="table" type="Table"></param>
            /// <param name="index" type="String" optional="true"></param>
            /// <param name="orCollection" type="Collection" optional="true"></param>
            this._ctx = {
                table: table,
                index: index === ":id" ? null : index,
                collClass: table._collClass,
                or: orCollection
            }; 
        }

        extend(WhereClause.prototype, function () {

            // WhereClause private methods

            function fail(collection, err) {
                try { throw err; } catch (e) {
                    collection._ctx.error = e;
                }
                return collection;
            }

            function getSetArgs(args) {
                return Array.prototype.slice.call(args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
            }

            function upperFactory(dir) {
                return dir === "next" ? function (s) { return s.toUpperCase(); } : function (s) { return s.toLowerCase(); };
            }
            function lowerFactory(dir) {
                return dir === "next" ? function (s) { return s.toLowerCase(); } : function (s) { return s.toUpperCase(); };
            }
            function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
                var length = Math.min(key.length, lowerNeedle.length);
                var llp = -1;
                for (var i = 0; i < length; ++i) {
                    var lwrKeyChar = lowerKey[i];
                    if (lwrKeyChar !== lowerNeedle[i]) {
                        if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                        if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                        if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                        return null;
                    }
                    if (cmp(key[i], lwrKeyChar) < 0) llp = i;
                }
                if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
                if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
                return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
            }

            function addIgnoreCaseAlgorithm(c, match, needle) {
                /// <param name="needle" type="String"></param>
                var upper, lower, compare, upperNeedle, lowerNeedle, direction;
                function initDirection(dir) {
                    upper = upperFactory(dir);
                    lower = lowerFactory(dir);
                    compare = (dir === "next" ? ascending : descending);
                    upperNeedle = upper(needle);
                    lowerNeedle = lower(needle);
                    direction = dir;
                }
                initDirection("next");
                c._ondirectionchange = function (direction) {
                    // This event onlys occur before filter is called the first time.
                    initDirection(direction);
                };
                c._addAlgorithm(function (cursor, advance, resolve) {
                    /// <param name="cursor" type="IDBCursor"></param>
                    /// <param name="advance" type="Function"></param>
                    /// <param name="resolve" type="Function"></param>
                    var key = cursor.key;
                    if (typeof key !== 'string') return false;
                    var lowerKey = lower(key);
                    if (match(lowerKey, lowerNeedle)) {
                        advance(function () { cursor.continue(); });
                        return true;
                    } else {
                        var nextNeedle = nextCasing(key, lowerKey, upperNeedle, lowerNeedle, compare, direction);
                        if (nextNeedle) {
                            advance(function () { cursor.continue(nextNeedle); });
                        } else {
                            advance(resolve);
                        }
                        return false;
                    }
                });
            }

            //
            // WhereClause public methods
            //
            return {
                between: function (lower, upper, includeLower, includeUpper) {
                    /// <summary>
                    ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
                    /// </summary>
                    /// <param name="lower"></param>
                    /// <param name="upper"></param>
                    /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
                    /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
                    /// <returns type="Collection"></returns>
                    includeLower = includeLower !== false;   // Default to true
                    includeUpper = includeUpper === true;    // Default to false
                    if ((lower > upper) ||
                        (lower === upper && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                        return new this._ctx.collClass(this, IDBKeyRange.only(lower)).limit(0); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.
                    return new this._ctx.collClass(this, IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper));
                },
                equals: function (value) {
                    return new this._ctx.collClass(this, IDBKeyRange.only(value));
                },
                above: function (value) {
                    return new this._ctx.collClass(this, IDBKeyRange.lowerBound(value, true));
                },
                aboveOrEqual: function (value) {
                    return new this._ctx.collClass(this, IDBKeyRange.lowerBound(value));
                },
                below: function (value) {
                    return new this._ctx.collClass(this, IDBKeyRange.upperBound(value, true));
                },
                belowOrEqual: function (value) {
                    return new this._ctx.collClass(this, IDBKeyRange.upperBound(value));
                },
                startsWith: function (str) {
                    /// <param name="str" type="String"></param>
                    if (typeof str !== 'string') return fail(new this._ctx.collClass(this), new TypeError("String expected"));
                    return this.between(str, str + String.fromCharCode(65535), true, true);
                },
                startsWithIgnoreCase: function (str) {
                    /// <param name="str" type="String"></param>
                    if (typeof str !== 'string') return fail(new this._ctx.collClass(this), new TypeError("String expected"));
                    if (str === "") return this.startsWith(str);
                    var c = new this._ctx.collClass(this, IDBKeyRange.bound(str.toUpperCase(), str.toLowerCase() + String.fromCharCode(65535)));
                    addIgnoreCaseAlgorithm(c, function (a, b) { return a.indexOf(b) === 0; }, str);
                    c._ondirectionchange = function () { fail(c, new Error("reverse() not supported with WhereClause.startsWithIgnoreCase()")); };
                    return c;
                },
                equalsIgnoreCase: function (str) {
                    /// <param name="str" type="String"></param>
                    if (typeof str !== 'string') return fail(new this._ctx.collClass(this), new TypeError("String expected"));
                    var c = new this._ctx.collClass(this, IDBKeyRange.bound(str.toUpperCase(), str.toLowerCase()));
                    addIgnoreCaseAlgorithm(c, function (a, b) { return a === b; }, str);
                    return c;
                },
                anyOf: function (valueArray) {
                    var ctx = this._ctx,
                        schema = ctx.table.schema;
                    var idxSpec = ctx.index ? schema.idxByName[ctx.index] : schema.primKey;
                    var isCompound = idxSpec && idxSpec.compound;
                    var set = getSetArgs(arguments);
                    var compare = isCompound ? compoundCompare(ascending) : ascending;
                    set.sort(compare);
                    if (set.length === 0) return new this._ctx.collClass(this, IDBKeyRange.only("")).limit(0); // Return an empty collection.
                    var c = new this._ctx.collClass(this, IDBKeyRange.bound(set[0], set[set.length - 1]));
                    
                    c._ondirectionchange = function (direction) {
                        compare = (direction === "next" ? ascending : descending);
                        if (isCompound) compare = compoundCompare(compare);
                        set.sort(compare);
                    };
                    var i = 0;
                    c._addAlgorithm(function (cursor, advance, resolve) {
                        var key = cursor.key;
                        while (compare(key, set[i]) > 0) {
                            // The cursor has passed beyond this key. Check next.
                            ++i;
                            if (i === set.length) {
                                // There is no next. Stop searching.
                                advance(resolve);
                                return false;
                            }
                        }
                        if (compare(key, set[i]) === 0) {
                            // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                            advance(function () { cursor.continue(); });
                            return true;
                        } else {
                            // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                            advance(function () { cursor.continue(set[i]); });
                            return false;
                        }
                    });
                    return c;
                }
            };
        });




        //
        //
        //
        // Collection Class
        //
        //
        //
        function Collection(whereClause, keyRange) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="whereClause" type="WhereClause">Where clause instance</param>
            /// <param name="keyRange" type="IDBKeyRange" optional="true"></param>
            var whereCtx = whereClause._ctx;
            this._ctx = {
                table: whereCtx.table,
                index: whereCtx.index,
                isPrimKey: (!whereCtx.index || (whereCtx.table.schema.primKey.keyPath && whereCtx.index === whereCtx.table.schema.primKey.name)),
                range: keyRange,
                op: "openCursor",
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                isMatch: null,
                offset: 0,
                limit: Infinity,
                error: null, // If set, any promise must be rejected with this error
                or: whereCtx.or
            }; 
        }

        extend(Collection.prototype, function () {

            //
            // Collection Private Functions
            //

            function addFilter(ctx, fn) {
                ctx.filter = combine(ctx.filter, fn);
            }

            function addMatchFilter(ctx, fn) {
                ctx.isMatch = combine(ctx.isMatch, fn);
            }

            function getIndexOrStore(ctx, store) {
                if (ctx.isPrimKey) return store;
                var indexSpec = ctx.table.schema.idxByName[ctx.index];
                if (!indexSpec) throw new Error("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
                return ctx.isPrimKey ? store : store.index(indexSpec.name);
            }

            function openCursor(ctx, store) {
                return getIndexOrStore(ctx, store)[ctx.op](ctx.range || null, ctx.dir + ctx.unique);
            }

            function iter(ctx, fn, resolve, reject, idbstore) {
                if (!ctx.or) {
                    iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, ctx.filter), fn, resolve, reject, ctx.table.hook.reading.fire);
                } else {
                    (function () {
                        var filter = ctx.filter;
                        var set = {};
                        var primKey = ctx.table.schema.primKey.keyPath;
                        var resolved = 0;

                        function resolveboth() {
                            if (++resolved === 2) resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
                        }

                        function union(item, cursor, advance) {
                            if (!filter || filter(cursor, advance, resolveboth, reject)) {
                                var key = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                                if (!set.hasOwnProperty(key)) {
                                    set[key] = true;
                                    fn(item, cursor, advance);
                                }
                            }
                        }

                        ctx.or._iterate(union, resolveboth, reject, idbstore);
                        iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, ctx.table.hook.reading.fire);
                    })();
                }
            }
            function getInstanceTemplate(ctx) {
                return ctx.table.schema.instanceTemplate;
            }


            return {

                //
                // Collection Protected Functions
                //

                _read: function (fn, cb) {
                    var ctx = this._ctx;
                    if (ctx.error)
                        return ctx.table._trans(null, function rejector(resolve, reject) { reject(ctx.error); });
                    else
                        return ctx.table._idbstore(READONLY, fn).then(cb);
                },
                _write: function (fn) {
                    var ctx = this._ctx;
                    if (ctx.error)
                        return ctx.table._trans(null, function rejector(resolve, reject) { reject(ctx.error); });
                    else
                        return ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
                },
                _addAlgorithm: function (fn) {
                    var ctx = this._ctx;
                    ctx.algorithm = combine(ctx.algorithm, fn);
                },

                _iterate: function (fn, resolve, reject, idbstore) {
                    return iter(this._ctx, fn, resolve, reject, idbstore);
                },

                //
                // Collection Public methods
                //

                each: function (fn) {
                    var ctx = this._ctx;

                    fakeAutoComplete(function () { fn(getInstanceTemplate(ctx)); });

                    return this._read(function (resolve, reject, idbstore) {
                        iter(ctx, fn, resolve, reject, idbstore);
                    });
                },

                count: function (cb) {
                    fakeAutoComplete(function () { cb(0); });
                    var self = this,
                        ctx = this._ctx;

                    if (ctx.filter || ctx.algorithm || ctx.or) {
                        // When filters are applied or 'ored' collections are used, we must count manually
                        var count = 0;
                        return this._read(function (resolve, reject, idbstore) {
                            iter(ctx, function () { ++count; return false; }, function () { resolve(count); }, reject, idbstore);
                        }, cb);
                    } else {
                        // Otherwise, we can use the count() method if the index.
                        return this._read(function (resolve, reject, idbstore) {
                            var idx = getIndexOrStore(ctx, idbstore);
                            var req = (ctx.range ? idx.count(ctx.range) : idx.count());
                            req.onerror = eventRejectHandler(reject, ["calling", "count()", "on", self.name]);
                            req.onsuccess = function (e) {
                                resolve(Math.min(e.target.result, Math.max(0, ctx.limit - ctx.offset)));
                            };
                        }, cb);
                    }
                },

                sortBy: function (keyPath, cb) {
                    /// <param name="keyPath" type="String"></param>
                    var ctx = this._ctx;
                    fakeAutoComplete(function () { cb([getInstanceTemplate(ctx)]); });
                    var parts = keyPath.split('.').reverse(),
                        lastPart = parts[0],
                        lastIndex = parts.length - 1;
                    function getval(obj, i) {
                        if (i) return getval(obj[parts[i]], i - 1);
                        return obj[lastPart];
                    }
                    var order = this._ctx.dir === "next" ? 1 : -1;

                    function sorter(a, b) {
                        var aVal = getval(a, lastIndex),
                            bVal = getval(b, lastIndex);
                        return aVal < bVal ? -order : aVal > bVal ? order : 0;
                    }
                    return this.toArray(function (a) {
                        return a.sort(sorter);
                    }).then(cb);
                },

                toArray: function (cb) {
                    var ctx = this._ctx;

                    fakeAutoComplete(function () { cb([getInstanceTemplate(ctx)]); });

                    return this._read(function (resolve, reject, idbstore) {
                        var a = [];
                        iter(ctx, function (item) { a.push(item); }, function arrayComplete() {
                            resolve(a);
                        }, reject, idbstore);
                    }, cb);
                },

                offset: function (offset) {
                    var ctx = this._ctx;
                    if (offset <= 0) return this;
                    ctx.offset += offset; // For count()
                    if (!ctx.or && !ctx.algorithm && !ctx.filter) {
                        addFilter(ctx, function offsetFilter(cursor, advance, resolve) {
                            if (offset === 0) return true;
                            if (offset === 1) { --offset; return false; }
                            advance(function () { cursor.advance(offset); offset = 0; });
                            return false;
                        });
                    } else {
                        addFilter(ctx, function offsetFilter(cursor, advance, resolve) {
                            return (--offset < 0);
                        });
                    }
                    return this;
                },

                limit: function (numRows) {
                    this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()
                    addFilter(this._ctx, function (cursor, advance, resolve) {
                        if (--numRows <= 0) advance(resolve); // Stop after this item has been included
                        return numRows >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
                    });
                    return this;
                },

                until: function (filterFunction, bIncludeStopEntry) {
                    var ctx = this._ctx;
                    fakeAutoComplete(function () { filterFunction(getInstanceTemplate(ctx)); });
                    addFilter(this._ctx, function (cursor, advance, resolve) {
                        if (filterFunction(cursor.value)) {
                            advance(resolve);
                            return bIncludeStopEntry;
                        } else {
                            return true;
                        }
                    });
                    return this;
                },

                first: function (cb) {
                    var self = this;
                    fakeAutoComplete(function () { cb(getInstanceTemplate(self._ctx)); });
                    return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
                },

                last: function (cb) {
                    return this.reverse().first(cb);
                },

                and: function (filterFunction) {
                    /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
                    var self = this;
                    fakeAutoComplete(function () { filterFunction(getInstanceTemplate(self._ctx)); });
                    addFilter(this._ctx, function (cursor) {
                        return filterFunction(cursor.value);
                    });
                    addMatchFilter(this._ctx, filterFunction); // match filters not used in Dexie.js but can be used by 3rd part libraries to test a collection for a match without querying DB. Used by Dexie.Observable.
                    return this;
                },

                or: function (indexName) {
                    return new WhereClause(this._ctx.table, indexName, this);
                },

                reverse: function () {
                    this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
                    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
                    return this;
                },

                desc: function () {
                    return this.reverse();
                },

                eachKey: function (cb) {
                    var self = this, ctx = this._ctx;
                    fakeAutoComplete(function () { cb(getInstanceTemplate(self._ctx)[self._ctx.index]); });
                    if (!ctx.isPrimKey) ctx.op = "openKeyCursor"; // Need the check because IDBObjectStore does not have "openKeyCursor()" while IDBIndex has.
                    return this.each(function (val, cursor) { cb(cursor.key, cursor); });
                },

                eachUniqueKey: function (cb) {
                    this._ctx.unique = "unique";
                    return this.eachKey(cb);
                },

                keys: function (cb) {
                    fakeAutoComplete(function () { cb([getInstanceTemplate(ctx)[self._ctx.index]]); });
                    var self = this,
                        ctx = this._ctx;
                    if (!ctx.isPrimKey) ctx.op = "openKeyCursor"; // Need the check because IDBObjectStore does not have "openKeyCursor()" while IDBIndex has.
                    var a = [];
                    return this.each(function (item, cursor) {
                        a.push(cursor.key);
                    }).then(function () {
                        return a;
                    }).then(cb);
                },

                uniqueKeys: function (cb) {
                    this._ctx.unique = "unique";
                    return this.keys(cb);
                },

                firstKey: function (cb) {
                    var self = this;
                    //fakeAutoComplete(function () { cb(getInstanceTemplate(self._ctx)[self._ctx.index]); });
                    //debugger;
                    return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
                },

                lastKey: function (cb) {
                    return this.reverse().firstKey(cb);
                },


                distinct: function () {
                    var set = {};
                    addFilter(this._ctx, function (cursor) {
                        var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                        var found = set.hasOwnProperty(strKey);
                        set[strKey] = true;
                        return !found;
                    });
                    return this;
                }
            };
        });

        //
        //
        // WriteableCollection Class
        //
        //
        function WriteableCollection() {
            Collection.apply(this, arguments);
        }

        derive(WriteableCollection).from(Collection).extend({

            //
            // WriteableCollection Public Methods
            //

            modify: function (changes) {
                var self = this,
                    ctx = this._ctx,
                    hook = ctx.table.hook,
                    updatingHook = hook.updating.fire,
                    deletingHook = hook.deleting.fire;

                fakeAutoComplete(function () {
                    if (typeof changes === 'function') {
                        changes.call({ value: ctx.table.schema.instanceTemplate }, ctx.table.schema.instanceTemplate);
                    }
                });

                return this._write(function (resolve, reject, idbstore, trans) {
                    var modifyer;
                    if (typeof changes === 'function') {
                        // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
                        if (updatingHook === nop && deletingHook === nop) {
                            // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
                            modifyer = changes;
                        } else {
                            // People want to know exactly what is being modified or deleted.
                            // Let modifyer be a proxy function that finds out what changes the caller is actually doing
                            // and call the hooks accordingly!
                            modifyer = function (item) {
                                var origItem = deepClone(item); // Clone the item first so we can compare laters.
                                if (changes.call(this, item) === false) return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)
                                if (!this.hasOwnProperty("value")) {
                                    // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                                    deletingHook.call(this, this.primKey, item, trans);
                                } else {
                                    // No deletion. Check what was changed
                                    var objectDiff = getObjectDiff(origItem, this.value);
                                    var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);
                                    if (additionalChanges) {
                                        // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                                        item = this.value;
                                        Object.keys(additionalChanges).forEach(function (keyPath) {
                                            setByKeyPath(item, keyPath, additionalChanges[keyPath]);  // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                        });
                                    }
                                }
                            }; 
                        }
                    } else if (updatingHook === nop) {
                        // changes is a set of {keyPath: value} and no one is listening to the updating hook.
                        var keyPaths = Object.keys(changes);
                        var numKeys = keyPaths.length;
                        modifyer = function (item) {
                            var anythingModified = false;
                            for (var i = 0; i < numKeys; ++i) {
                                var keyPath = keyPaths[i], val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                    anythingModified = true;
                                }
                            }
                            return anythingModified;
                        }; 
                    } else {
                        // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
                        // allow it to add additional modifications to make.
                        var origChanges = changes;
                        changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.
                        modifyer = function (item) {
                            var anythingModified = false;
                            var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
                            if (additionalChanges) extend(changes, additionalChanges);
                            Object.keys(changes).forEach(function (keyPath) {
                                var val = changes[keyPath];
                                if (getByKeyPath(item, keyPath) !== val) {
                                    setByKeyPath(item, keyPath, changes[keyPath]);
                                    anythingModified = true;
                                }
                            });
                            if (additionalChanges) changes = shallowClone(origChanges); // Restore original changes.
                            return anythingModified;
                        }; 
                    }

                    var count = 0;
                    var successCount = 0;
                    var iterationComplete = false;
                    var failures = [];
                    var failKeys = [];
                    var currentKey = null;

                    function modifyItem(item, cursor, advance) {
                        currentKey = cursor.primaryKey;
                        var thisContext = { primKey: cursor.primaryKey, value: item };
                        if (modifyer.call(thisContext, item) !== false) { // If a callback explicitely returns false, do not perform the update!
                            var bDelete = !thisContext.hasOwnProperty("value");
                            var req = (bDelete ? cursor.delete() : cursor.update(thisContext.value));
                            ++count;
                            req.onerror = eventRejectHandler(function (e) {
                                failures.push(e);
                                failKeys.push(thisContext.primKey);
                                if (thisContext.onerror) thisContext.onerror(e);
                                return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
                            }, bDelete ? ["deleting", item, "from", ctx.table.name] : ["modifying", item, "on", ctx.table.name]);
                            req.onsuccess = function (ev) {
                                if (thisContext.onsuccess) thisContext.onsuccess(thisContext.value);
                                ++successCount;
                                checkFinished();
                            }; 
                        }
                    }

                    function doReject(e) {
                        if (e) {
                            failures.push(e);
                            failKeys.push(currentKey);
                        }
                        return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
                    }

                    function checkFinished() {
                        if (iterationComplete && successCount + failures.length === count) {
                            if (failures.length > 0)
                                doReject();
                            else
                                resolve(successCount);
                        }
                    }
                    self._iterate(modifyItem, function () {
                        iterationComplete = true;
                        checkFinished();
                    }, doReject, idbstore);
                });
            },

            'delete': function () {
                return this.modify(function () { delete this.value; });
            }
        });


        //
        //
        //
        // ------------------------- Help functions ---------------------------
        //
        //
        //

        function lowerVersionFirst(a, b) {
            return a._cfg.version - b._cfg.version;
        }

        function setApiOnPlace(objs, transactionPromiseFactory, tableNames, mode, dbschema, enableProhibitedDB) {
            tableNames.forEach(function (tableName) {
                var tableInstance = db._tableFactory(mode, dbschema[tableName], transactionPromiseFactory);
                objs.forEach(function (obj) {
                    if (!obj[tableName]) {
                        if (enableProhibitedDB) {
                            Object.defineProperty(obj, tableName, {
                                configurable: true,
                                enumerable: true,
                                get: function () {
                                    if (Promise.PSD && Promise.PSD.trans) {
                                        return Promise.PSD.trans.tables[tableName];
                                    }
                                    return tableInstance;
                                }
                            });
                        } else {
                            obj[tableName] = tableInstance;
                        }
                    }
                });
            });
        }

        function removeTablesApi(objs) {
            objs.forEach(function (obj) {
                for (var key in obj) {
                    if (obj[key] instanceof Table) delete obj[key];
                }
            });
        }

        function iterate(req, filter, fn, resolve, reject, readingHook) {
            var psd = Promise.PSD;
            readingHook = readingHook || mirror;
            if (!req.onerror) req.onerror = eventRejectHandler(reject);
            if (filter) {
                req.onsuccess = trycatch(function filter_record(e) {
                    var cursor = req.result;
                    if (cursor) {
                        var c = function () { cursor.continue(); };
                        if (filter(cursor, function (advancer) { c = advancer; }, resolve, reject))
                            fn(readingHook(cursor.value), cursor, function (advancer) { c = advancer; });
                        c();
                    } else {
                        resolve();
                    }
                }, reject, psd);
            } else {
                req.onsuccess = trycatch(function filter_record(e) {
                    var cursor = req.result;
                    if (cursor) {
                        var c = function () { cursor.continue(); };
                        fn(readingHook(cursor.value), cursor, function (advancer) { c = advancer; });
                        c();
                    } else {
                        resolve();
                    }
                }, reject, psd);
            }
        }

        function parseIndexSyntax(indexes) {
            /// <param name="indexes" type="String"></param>
            /// <returns type="Array" elementType="IndexSpec"></returns>
            var rv = [];
            indexes.split(',').forEach(function (index) {
                index = index.trim();
                var name = index.replace("&", "").replace("++", "").replace("*", "");
                var keyPath = (name.indexOf('[') !== 0 ? name : index.substring(index.indexOf('[') + 1, index.indexOf(']')).split('+'));

                rv.push(new IndexSpec(
                    name,
                    keyPath || null,
                    index.indexOf('&') !== -1,
                    index.indexOf('*') !== -1,
                    index.indexOf("++") !== -1,
                    Array.isArray(keyPath),
                    keyPath.indexOf('.') !== -1
                ));
            });
            return rv;
        }

        function ascending(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }

        function descending(a, b) {
            return a < b ? 1 : a > b ? -1 : 0;
        }

        function compoundCompare(itemCompare) {
            return function (a, b) {
                var i = 0;
                while (true) {
                    var result = itemCompare(a[i], b[i]);
                    if (result !== 0) return result;
                    ++i;
                    if (i === a.length || i === b.length)
                        return itemCompare(a.length, b.length);
                }
            };
        }


        function combine(filter1, filter2) {
            return filter1 ? filter2 ? function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } : filter1 : filter2;
        }

        function hasIEDeleteObjectStoreBug() {
            // Assume bug is present in IE10 and IE11 but dont expect it in next version of IE (IE12)
            return navigator.userAgent.indexOf("Trident") >= 0 || navigator.userAgent.indexOf("MSIE") >= 0;
        }

        function readGlobalSchema() {
            db.verno = idbdb.version / 10;
            db._dbSchema = globalSchema = {};
            dbStoreNames = [].slice.call(idbdb.objectStoreNames, 0);
            if (dbStoreNames.length === 0) return; // Database contains no stores.
            var trans = idbdb.transaction(dbStoreNames, 'readonly');
            dbStoreNames.forEach(function (storeName) {
                var store = trans.objectStore(storeName),
                    keyPath = store.keyPath,
                    dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
                var indexes = [];
                for (var j = 0; j < store.indexNames.length; ++j) {
                    var idbindex = store.index(store.indexNames[j]);
                    keyPath = idbindex.keyPath;
                    dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                    var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
                    indexes.push(index);
                }
                globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
            });
            setApiOnPlace([allTables], db._transPromiseFactory, Object.keys(globalSchema), READWRITE, globalSchema);
        }

        function adjustToExistingIndexNames(schema, idbtrans) {
            /// <summary>
            /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
            /// </summary>
            /// <param name="schema" type="Object">Map between name and TableSchema</param>
            /// <param name="idbtrans" type="IDBTransaction"></param>
            var storeNames = idbtrans.db.objectStoreNames;
            for (var i = 0; i < storeNames.length; ++i) {
                var storeName = storeNames[i];
                var store = idbtrans.objectStore(storeName);
                for (var j = 0; j < store.indexNames.length; ++j) {
                    var indexName = store.indexNames[j];
                    var keyPath = store.index(indexName).keyPath;
                    var dexieName = typeof keyPath === 'string' ? keyPath : "[" + [].slice.call(keyPath).join('+') + "]";
                    if (schema[storeName]) {
                        var indexSpec = schema[storeName].idxByName[dexieName];
                        if (indexSpec) indexSpec.name = indexName;
                    }
                }
            }
        }

        extend(this, {
            Collection: Collection,
            Table: Table,
            Transaction: Transaction,
            Version: Version,
            WhereClause: WhereClause,
            WriteableCollection: WriteableCollection,
            WriteableTable: WriteableTable
        });

        init();

        Dexie.addons.forEach(function (fn) {
            fn(db);
        });
    }

    //
    // Promise Class
    //
    // A variant of promise-light (https://github.com/taylorhakes/promise-light) by https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
    //
    // Modified by David Fahlander to be indexedDB compliant (See discussion: https://github.com/promises-aplus/promises-spec/issues/45) .
    // This implementation will not use setTimeout or setImmediate when it's not needed. The behavior is 100% Promise/A+ compliant since
    // the caller of new Promise() can be certain that the promise wont be triggered the lines after constructing the promise. We fix this by using the member variable constructing to check
    // whether the object is being constructed when reject or resolve is called. If so, the use setTimeout/setImmediate to fulfill the promise, otherwise, we know that it's not needed.
    //
    // This topic was also discussed in the following thread: https://github.com/promises-aplus/promises-spec/issues/45 and this implementation solves that issue.
    //
    // Another feature with this Promise implementation is that reject will return false in case no one catched the reject call. This is used
    // to stopPropagation() on the IDBRequest error event in case it was catched but not otherwise.
    //
    // Also, the event new Promise().onuncatched is called in case no one catches a reject call. This is used for us to manually bubble any request
    // errors to the transaction. We must not rely on IndexedDB implementation to do this, because it only does so when the source of the rejection
    // is an error event on a request, not in case an ordinary exception is thrown.
    var Promise = (function () {

        // The use of asap in handle() is remarked because we must NOT use setTimeout(fn,0) because it causes premature commit of indexedDB transactions - which is according to indexedDB specification.
        var _slice = [].slice;
        var _asap = typeof (setImmediate) === 'undefined' ? function(fn, arg1, arg2, argN) {
            var args = arguments;
            setTimeout(function() { fn.apply(window, _slice.call(args, 1)); }, 0); // If not FF13 and earlier failed, we could use this call here instead: setTimeout.call(this, [fn, 0].concat(arguments));
        } : setImmediate; // IE10+ and node.

        var asap = _asap,
            isRootExecution = true;

        var operationsQueue = [];
        function enqueueImmediate(fn, args) {
            operationsQueue.push([fn, _slice.call(arguments, 1)]);
        }

        function executeOperationsQueue() {
            var queue = operationsQueue;
            operationsQueue = [];
            for (var i = 0, l = queue.length; i < l; ++i) {
                var item = queue[i];
                item[0].apply(window, item[1]);
            }
        }

        //var PromiseID = 0;
        function Promise(fn) {
            if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
            if (typeof fn !== 'function') throw new TypeError('not a function');
            this._state = null; // null (=pending), false (=rejected) or true (=resolved)
            this._value = null; // error or result
            this._deferreds = [];
            this._catched = false; // for onuncatched
            //this._id = ++PromiseID;
            var self = this;
            var constructing = true;
            this._PSD = Promise.PSD;

            try {
                doResolve(this, fn, function (data) {
                    if (constructing)
                        asap(resolve, self, data);
                    else
                        resolve(self, data);
                }, function (reason) {
                    if (constructing) {
                        asap(reject, self, reason);
                        return false;
                    } else {
                        return reject(self, reason);
                    }
                });
            } finally {
                constructing = false;
            }
        }

        function handle(self, deferred) {
            if (self._state === null) {
                self._deferreds.push(deferred);
                return;
            }

            var cb = self._state ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                // This Deferred doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
                return (self._state ? deferred.resolve : deferred.reject)(self._value);
            }
            var ret, isRootExec = isRootExecution;
            isRootExecution = false;
            asap = enqueueImmediate;
            try {
                ret = cb(self._value);
                if (!self._state && (!ret || typeof ret.then !== 'function' || ret._state !== false)) setCatched(self); // Caller did 'return Promise.reject(err);' - don't regard it as catched!
            } catch (e) {
                var catched = deferred.reject(e);
                if (!catched && self.onuncatched) {
                    try { self.onuncatched(e); } catch (e) { }
                }
                return;
            }
            deferred.resolve(ret);
            if (isRootExec) {
                while(operationsQueue.length > 0) executeOperationsQueue();
                asap = _asap;
                isRootExecution = true;
            }
        }

        function setCatched(promise) {
            promise._catched = true;
            if (promise._parent) setCatched(promise._parent);
        }

        function resolve(promise, newValue) {
            var outerPSD = Promise.PSD;
            Promise.PSD = promise._PSD;
            try { //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
                if (newValue === promise) throw new TypeError('A promise cannot be resolved with itself.');
                if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                    if (typeof newValue.then === 'function') {
                        doResolve(promise, function (resolve, reject) {
                            newValue.then(resolve, reject);
                        }, function (data) {
                            resolve(promise, data);
                        }, function (reason) {
                            reject(promise, reason);
                        });
                        return;
                    }
                }
                promise._state = true;
                promise._value = newValue;
                finale.call(promise);
            } catch (e) { reject(e); } finally {
                Promise.PSD = outerPSD;
            }
        }

        function reject(promise, newValue) {
            var outerPSD = Promise.PSD;
            Promise.PSD = promise._PSD;
            promise._state = false;
            promise._value = newValue;

            finale.call(promise);
            if (!promise._catched && promise.onuncatched) {
                try { promise.onuncatched(promise._value); } catch (e) { }
            }
            Promise.PSD = outerPSD;
            return promise._catched;
        }

        function finale() {
            for (var i = 0, len = this._deferreds.length; i < len; i++) {
                handle(this, this._deferreds[i]);
            }
            this._deferreds = [];
        }

        function Deferred(onFulfilled, onRejected, resolve, reject) {
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.resolve = resolve;
            this.reject = reject;
        }

        /**
         * Take a potentially misbehaving resolver function and make sure
         * onFulfilled and onRejected are only called once.
         *
         * Makes no guarantees about asynchrony.
         */
        function doResolve(promise, fn, onFulfilled, onRejected) {
            var done = false;
            try {
                fn(function Promise_resolve(value) {
                    if (done) return;
                    done = true;
                    onFulfilled(value);
                }, function Promise_reject(reason) {
                    if (done) return promise._catched;
                    done = true;
                    return onRejected(reason);
                });
            } catch (ex) {
                if (done) return;
                return onRejected(ex);
            }
        }

        Promise.all = function () {
            var args = Array.prototype.slice.call(arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : arguments);

            return new Promise(function (resolve, reject) {
                if (args.length === 0) return resolve([]);
                var remaining = args.length;
                function res(i, val) {
                    try {
                        if (val && (typeof val === 'object' || typeof val === 'function')) {
                            var then = val.then;
                            if (typeof then === 'function') {
                                then.call(val, function (val) { res(i, val); }, reject);
                                return;
                            }
                        }
                        args[i] = val;
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    } catch (ex) {
                        reject(ex);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };

        /* Prototype Methods */
        Promise.prototype.then = function (onFulfilled, onRejected) {
            var self = this;
            var p = new Promise(function (resolve, reject) {
                if (self._state === null)
                    handle(self, new Deferred(onFulfilled, onRejected, resolve, reject));
                else
                    asap(handle, self, new Deferred(onFulfilled, onRejected, resolve, reject));
            });
            p._PSD = this._PSD;
            p.onuncatched = this.onuncatched; // Needed when exception occurs in a then() clause of a successful parent promise. Want onuncatched to be called even in callbacks of callbacks of the original promise.
            p._parent = this; // Used for recursively calling onuncatched event on self and all parents.
            return p;
        };

        Promise.prototype['catch'] = function (onRejected) {
            if (arguments.length === 1) return this.then(null, onRejected);
            // First argument is the Error type to catch
            var type = arguments[0], callback = arguments[1];
            if (typeof type === 'function') return this.then(null, function (e) {
                // Catching errors by its constructor type (similar to java / c++ / c#)
                // Sample: promise.catch(TypeError, function (e) { ... });
                if (e instanceof type) return callback(e); else return Promise.reject(e);
            });
            else return this.then(null, function (e) {
                // Catching errors by the error.name property. Makes sense for indexedDB where error type
                // is always DOMError but where e.name tells the actual error type.
                // Sample: promise.catch('ConstraintError', function (e) { ... });
                if (e && e.name === type) return callback(e); else return Promise.reject(e);
            });
        };

        Promise.prototype['finally'] = function (onFinally) {
            return this.then(function (value) {
                onFinally();
                return value;
            }, function (err) {
                onFinally();
                return Promise.reject(err);
            });
        };

        Promise.prototype.onuncatched = null; // Optional event triggered if promise is rejected but no one listened.

        Promise.resolve = function (value) {
            var p = new Promise(function () { });
            p._state = true;
            p._value = value;
            return p;
        };

        Promise.reject = function (value) {
            var p = new Promise(function () { });
            p._state = false;
            p._value = value;
            return p;
        };

        Promise.race = function (values) {
            return new Promise(function (resolve, reject) {
                values.map(function (value) {
                    value.then(resolve, reject);
                });
            });
        };

        Promise.PSD = null; // Promise Specific Data - a TLS Pattern (Thread Local Storage) for Promises. TODO: Rename Promise.PSD to Promise.data

        Promise.newPSD = function (fn) {
            // Create new PSD scope (Promise Specific Data)
            var outerScope = Promise.PSD;
            Promise.PSD = outerScope ? Object.create(outerScope) : {};
            try {
                return fn();
            } finally {
                Promise.PSD = outerScope;
            }
        }; 

        return Promise;
    })();


    //
    //
    // ------ Exportable Help Functions -------
    //
    //

    function nop() { }
    function mirror(val) { return val; }

    function pureFunctionChain(f1, f2) {
        // Enables chained events that takes ONE argument and returns it to the next function in chain.
        // This pattern is used in the hook("reading") event.
        if (f1 === mirror) return f2;
        return function (val) {
            return f2(f1(val));
        }; 
    }

    function callBoth(on1, on2) {
        return function () {
            on1.apply(this, arguments);
            on2.apply(this, arguments);
        }; 
    }

    function hookCreatingChain(f1, f2) {
        // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
        // This pattern is used in the hook("creating") event.
        if (f1 === nop) return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res !== undefined) arguments[0] = res;
            var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
                onerror = this.onerror;     // In case event listener has set this.onerror
            delete this.onsuccess;
            delete this.onerror;
            var res2 = f2.apply(this, arguments);
            if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res2 !== undefined ? res2 : res;
        }; 
    }

    function hookUpdatingChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res !== undefined) extend(arguments[0], res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.
            var onsuccess = this.onsuccess, // In case event listener has set this.onsuccess
                onerror = this.onerror;     // In case event listener has set this.onerror
            delete this.onsuccess;
            delete this.onerror;
            var res2 = f2.apply(this, arguments);
            if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
            if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
            return res === undefined ?
                (res2 === undefined ? undefined : res2) :
                (res2 === undefined ? res : extend(res, res2));
        }; 
    }

    function stoppableEventChain(f1, f2) {
        // Enables chained events that may return false to stop the event chain.
        if (f1 === nop) return f2;
        return function () {
            if (f1.apply(this, arguments) === false) return false;
            return f2.apply(this, arguments);
        }; 
    }

    function reverseStoppableEventChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            if (f2.apply(this, arguments) === false) return false;
            return f1.apply(this, arguments);
        }; 
    }

    function nonStoppableEventChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            f1.apply(this, arguments);
            f2.apply(this, arguments);
        }; 
    }

    function promisableChain(f1, f2) {
        if (f1 === nop) return f2;
        return function () {
            var res = f1.apply(this, arguments);
            if (res && typeof res.then === 'function') {
                var thiz = this, args = arguments;
                return res.then(function () {
                    return f2.apply(thiz, args);
                });
            }
            return f2.apply(this, arguments);
        }; 
    }

    function events(ctx, eventNames) {
        var args = arguments;
        var evs = {};
        var rv = function (eventName, subscriber) {
            if (subscriber) {
                // Subscribe
                var args = [].slice.call(arguments, 1);
                var ev = evs[eventName];
                ev.subscribe.apply(ev, args);
                return ctx;
            } else if (typeof (eventName) === 'string') {
                // Return interface allowing to fire or unsubscribe from event
                return evs[eventName];
            }
        }; 
        rv.addEventType = add;

        function add(eventName, chainFunction, defaultFunction) {
            if (Array.isArray(eventName)) return addEventGroup(eventName);
            if (typeof eventName === 'object') return addConfiguredEvents(eventName);
            if (!chainFunction) chainFunction = stoppableEventChain;
            if (!defaultFunction) defaultFunction = nop;

            var context = {
                subscribers: [],
                fire: defaultFunction,
                subscribe: function (cb) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                },
                unsubscribe: function (cb) {
                    context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                    context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
                }
            };
            evs[eventName] = rv[eventName] = context;
            return context;
        }

        function addConfiguredEvents(cfg) {
            // events(this, {reading: [functionChain, nop]});
            Object.keys(cfg).forEach(function (eventName) {
                var args = cfg[eventName];
                if (Array.isArray(args)) {
                    add(eventName, cfg[eventName][0], cfg[eventName][1]);
                } else if (args === 'asap') {
                    // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
                    // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
                    var context = add(eventName, null, function fire() {
                        var args = arguments;
                        context.subscribers.forEach(function (fn) {
                            asap(function fireEvent() {
                                fn.apply(window, args);
                            });
                        });
                    });
                    context.subscribe = function (fn) {
                        // Change how subscribe works to not replace the fire function but to just add the subscriber to subscribers
                        if (context.subscribers.indexOf(fn) === -1)
                            context.subscribers.push(fn);
                    }; 
                    context.unsubscribe = function (fn) {
                        // Change how unsubscribe works for the same reason as above.
                        var idxOfFn = context.subscribers.indexOf(fn);
                        if (idxOfFn !== -1) context.subscribers.splice(idxOfFn, 1);
                    }; 
                } else throw new Error("Invalid event config");
            });
        }

        function addEventGroup(eventGroup) {
            // promise-based event group (i.e. we promise to call one and only one of the events in the pair, and to only call it once.
            var done = false;
            eventGroup.forEach(function (name) {
                add(name).subscribe(checkDone);
            });
            function checkDone() {
                if (done) return false;
                done = true;
            }
        }

        for (var i = 1, l = args.length; i < l; ++i) {
            add(args[i]);
        }

        return rv;
    }

    function assert(b) {
        if (!b) throw new Error("Assertion failed");
    }

    function asap(fn) {
        if (window.setImmediate) setImmediate(fn); else setTimeout(fn, 0);
    }

    function fakeAutoComplete(fn) {
        var to = setTimeout(fn, 1000);
        clearTimeout(to);
    }

    function trycatch(fn, reject, psd) {
        return function () {
            var outerPSD = Promise.PSD; // Support Promise-specific data (PSD) in callback calls
            Promise.PSD = psd;
            try {
                fn.apply(this, arguments);
            } catch (e) {
                reject(e);
            } finally {
                Promise.PSD = outerPSD;
            }
        };
    }

    function getByKeyPath(obj, keyPath) {
        // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
        if (obj.hasOwnProperty(keyPath)) return obj[keyPath]; // This line is moved from last to first for optimization purpose.
        if (!keyPath) return obj;
        if (typeof keyPath !== 'string') {
            var rv = [];
            for (var i = 0, l = keyPath.length; i < l; ++i) {
                var val = getByKeyPath(obj, keyPath[i]);
                rv.push(val);
            }
            return rv;
        }
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var innerObj = obj[keyPath.substr(0, period)];
            return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
        }
        return undefined;
    }

    function setByKeyPath(obj, keyPath, value) {
        if (!obj || keyPath === undefined) return;
        if (typeof keyPath !== 'string' && 'length' in keyPath) {
            assert(typeof value !== 'string' && 'length' in value);
            for (var i = 0, l = keyPath.length; i < l; ++i) {
                setByKeyPath(obj, keyPath[i], value[i]);
            }
        } else {
            var period = keyPath.indexOf('.');
            if (period !== -1) {
                var currentKeyPath = keyPath.substr(0, period);
                var remainingKeyPath = keyPath.substr(period + 1);
                if (remainingKeyPath === "")
                    if (value === undefined) delete obj[currentKeyPath]; else obj[currentKeyPath] = value;
                else {
                    var innerObj = obj[currentKeyPath];
                    if (!innerObj) innerObj = (obj[currentKeyPath] = {});
                    setByKeyPath(innerObj, remainingKeyPath, value);
                }
            } else {
                if (value === undefined) delete obj[keyPath]; else obj[keyPath] = value;
            }
        }
    }

    function delByKeyPath(obj, keyPath) {
        setByKeyPath(obj, keyPath, undefined);
    }

    function shallowClone(obj) {
        var rv = {};
        for (var m in obj) {
            if (obj.hasOwnProperty(m)) rv[m] = obj[m];
        }
        return rv;
    }

    function deepClone(any) {
        if (!any || typeof any !== 'object') return any;
        var rv;
        if (Array.isArray(any)) {
            rv = [];
            for (var i = 0, l = any.length; i < l; ++i) {
                rv.push(deepClone(any[i]));
            }
        } else if (any instanceof Date) {
            rv = new Date();
            rv.setTime(any.getTime());
        } else {
            rv = any.constructor ? Object.create(any.constructor.prototype) : {};
            for (var prop in any) {
                if (any.hasOwnProperty(prop)) {
                    rv[prop] = deepClone(any[prop]);
                }
            }
        }
        return rv;
    }

    function getObjectDiff(a, b) {
        // This is a simplified version that will always return keypaths on the root level.
        // If for example a and b differs by: (a.somePropsObject.x != b.somePropsObject.x), we will return that "somePropsObject" is changed
        // and not "somePropsObject.x". This is acceptable and true but could be optimized to support nestled changes if that would give a
        // big optimization benefit.
        var rv = {};
        for (var prop in a) if (a.hasOwnProperty(prop)) {
            if (!b.hasOwnProperty(prop))
                rv[prop] = undefined; // Property removed
            else if (a[prop] !== b[prop] && JSON.stringify(a[prop]) !== JSON.stringify(b[prop]))
                rv[prop] = b[prop]; // Property changed
        }
        for (var prop in b) if (b.hasOwnProperty(prop) && !a.hasOwnProperty(prop)) {
            rv[prop] = b[prop]; // Property added
        }
        return rv;
    }

    function parseType(type) {
        if (typeof type === 'function') {
            return new type();
        } else if (Array.isArray(type)) {
            return [parseType(type[0])];
        } else if (type && typeof type === 'object') {
            var rv = {};
            applyStructure(rv, type);
            return rv;
        } else {
            return type;
        }
    }

    function applyStructure(obj, structure) {
        Object.keys(structure).forEach(function (member) {
            var value = parseType(structure[member]);
            obj[member] = value;
        });
    }

    function eventRejectHandler(reject, sentance) {
        return function (event) {
            var errObj = (event && event.target.error) || new Error();
            if (sentance) {
                var occurredWhen = " occured when " + sentance.map(function (word) {
                    switch (typeof (word)) {
                        case 'function': return word();
                        case 'string': return word;
                        default: return JSON.stringify(word);
                    }
                }).join(" ");
                if (errObj.name) {
                    errObj.toString = function toString() {
                        return errObj.name + occurredWhen + (errObj.message ? ". " + errObj.message : "");
                        // Code below works for stacked exceptions, BUT! stack is never present in event errors (not in any of the browsers). So it's no use to include it!
                        /*delete this.toString; // Prohibiting endless recursiveness in IE.
                        if (errObj.stack) rv += (errObj.stack ? ". Stack: " + errObj.stack : "");
                        this.toString = toString;
                        return rv;*/
                    };
                } else {
                    errObj = errObj + occurredWhen;
                }
            };
            reject(errObj);
            // Stop error from propagating to IDBTransaction. Let us handle that manually instead.
            event.stopPropagation();
            event.preventDefault();
            return false;
        };
    }

    function stack(error) {
        try {
            throw error;
        } catch (e) {
            return e;
        }
    }
    function preventDefault(e) {
        e.preventDefault();
    }

    function globalDatabaseList(cb) {
        var val;
        try {
            val = JSON.parse(localStorage.getItem('Dexie.DatabaseNames') || "[]");
        } catch (e) {
            val = [];
        }
        if (cb(val)) {
            localStorage.setItem('Dexie.DatabaseNames', JSON.stringify(val));
        }
    }

    //
    // IndexSpec struct
    //
    function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
        /// <param name="name" type="String"></param>
        /// <param name="keyPath" type="String"></param>
        /// <param name="unique" type="Boolean"></param>
        /// <param name="multi" type="Boolean"></param>
        /// <param name="auto" type="Boolean"></param>
        /// <param name="compound" type="Boolean"></param>
        /// <param name="dotted" type="Boolean"></param>
        this.name = name;
        this.keyPath = keyPath;
        this.unique = unique;
        this.multi = multi;
        this.auto = auto;
        this.compound = compound;
        this.dotted = dotted;
        var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && ('[' + [].join.call(keyPath, '+') + ']');
        this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
    }

    //
    // TableSchema struct
    //
    function TableSchema(name, primKey, indexes, instanceTemplate) {
        /// <param name="name" type="String"></param>
        /// <param name="primKey" type="IndexSpec"></param>
        /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
        /// <param name="instanceTemplate" type="Object"></param>
        this.name = name;
        this.primKey = primKey || new IndexSpec();
        this.indexes = indexes || [new IndexSpec()];
        this.instanceTemplate = instanceTemplate;
        this.mappedClass = null;
        this.idxByName = indexes.reduce(function (hashSet, index) {
            hashSet[index.name] = index;
            return hashSet;
        }, {});
    }

    //
    // ModifyError Class (extends Error)
    //
    function ModifyError(msg, failures, successCount, failedKeys) {
        this.name = "ModifyError";
        this.failures = failures;
        this.failedKeys = failedKeys;
        this.successCount = successCount;
        this.message = failures.join('\n');
    }
    derive(ModifyError).from(Error);

    //
    // Static delete() method.
    //
    Dexie.delete = function (databaseName) {
        var db = new Dexie(databaseName),
            promise = db.delete();
        promise.onblocked = function (fn) {
            db.on("blocked", fn);
            return this;
        };
        return promise;
    }; 

    //
    // Static method for retrieving a list of all existing databases at current host.
    //
    Dexie.getDatabaseNames = function (cb) {
        return new Promise(function (resolve, reject) {
            if ('webkitGetDatabaseNames' in indexedDB || 'getDatabaseNames' in indexedDB) { // In case getDatabaseNames() becomes standard, let's prepare to support it:
                var req = ('getDatabaseNames' in indexedDB ? indexedDB.getDatabaseNames() : indexedDB.webkitGetDatabaseNames());
                req.onsuccess = function (event) {
                    resolve([].slice.call(event.target.result, 0)); // Converst DOMStringList to Array<String>
                }; 
                req.onerror = eventRejectHandler(reject);
            } else {
                globalDatabaseList(function (val) {
                    resolve(val);
                    return false;
                });
            }
        }).then(cb);
    }; 

    Dexie.defineClass = function (structure) {
        /// <summary>
        ///     Create a javascript constructor based on given template for which properties to expect in the class.
        ///     Any property that is a constructor function will act as a type. So {name: String} will be equal to {name: new String()}.
        /// </summary>
        /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
        /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>

        // Default constructor able to copy given properties into this object.
        function Class(properties) {
            /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
            /// </param>
            if (properties) extend(this, properties);
        }
        applyStructure(Class.prototype, structure);
        return Class;
    }; 

    Dexie.spawn = function (scopeFunc) {
        // In case caller is within a transaction but needs to create a separate transaction.
        // Example of usage:
        // 
        // Let's say we have a logger function in our app. Other application-logic should be unaware of the
        // logger function and not need to include the 'logentries' table in all transaction it performs.
        // The logging should always be done in a separate transaction and not be dependant on the current
        // running transaction context. Then you could use Dexie.spawn() to run code that starts a new transaction.
        //
        //     Dexie.spawn(function() {
        //         db.logentries.add(newLogEntry);
        //     });
        //
        // Unless using Dexie.spawn(), the above example would try to reuse the current transaction
        // in current Promise-scope.
        //
        // An alternative to Dexie.spawn() would be setImmediate() or setTimeout(). The reason we still provide an
        // API for this because
        //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
        //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
        //  3) setImmediate() is not supported in the ES standard.
        return Promise.newPSD(function () {
            Promise.PSD.trans = null;
            return scopeFunc();
        });
    }; 

    Dexie.vip = function (fn) {
        // To be used by subscribers to the on('ready') event.
        // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
        // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
        // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
        // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
        // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
        // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
        // the caller will not resolve until database is opened.
        return Promise.newPSD(function () {
            Promise.PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.
            return fn();
        });
    }; 

    // Dexie.currentTransaction property. Only applicable for transactions entered using the new "transact()" method.
    Object.defineProperty(Dexie, "currentTransaction", {
        get: function () {
            /// <returns type="Transaction"></returns>
            return Promise.PSD && Promise.PSD.trans || null;
        }
    }); 


    // Export our Promise implementation since it can be handy as a standalone Promise implementation
    Dexie.Promise = Promise;
    // Export our derive/extend/override methodology
    Dexie.derive = derive;
    Dexie.extend = extend;
    Dexie.override = override;
    // Export our events() function - can be handy as a toolkit
    Dexie.events = events;
    Dexie.getByKeyPath = getByKeyPath;
    Dexie.setByKeyPath = setByKeyPath;
    Dexie.delByKeyPath = delByKeyPath;
    Dexie.shallowClone = shallowClone;
    Dexie.deepClone = deepClone;
    Dexie.addons = [];
    Dexie.fakeAutoComplete = fakeAutoComplete;
    Dexie.asap = asap;
    // Export our static classes
    Dexie.ModifyError = ModifyError;
    Dexie.MultiModifyError = ModifyError; // Backward compatibility pre 0.9.8
    Dexie.IndexSpec = IndexSpec;
    Dexie.TableSchema = TableSchema;
    //
    // Dependencies
    //
    // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
    //
    // In node.js, however, these properties must be set "manually" before instansiating a new Dexie(). For node.js, you need to require indexeddb-js or similar and then set these deps.
    //
    Dexie.dependencies = {
        // Required:
        indexedDB: window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
        IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange,
        IDBTransaction: window.IDBTransaction || window.webkitIDBTransaction,
        // Optional:
        Error: window.Error || String,
        SyntaxError: window.SyntaxError || String,
        TypeError: window.TypeError || String,
        DOMError: window.DOMError || String
    }; 

    // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
    Dexie.version = 1.02;





    // Publish the Dexie to browser or NodeJS environment.
    publish("Dexie", Dexie);

}).apply(this, typeof module === 'undefined' || (typeof window !== 'undefined' && this === window)
    ? [window, function (name, value) { window[name] = value; }, true]    // Adapt to browser environment
    : [global, function (name, value) { module.exports = value; }, false]); // Adapt to Node.js environment
