webpackJsonp([0x67ef26645b2a,60335399758886],{107:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Morphic"}}},layoutContext:{}}},204:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),l=(o(a),n(208)),c=o(l),u=n(107),s=o(u);t.default=function(e){return r.createElement(c.default,i({},e,s.default))},e.exports=t.default}).call(t,n(12))},296:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),u(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var d=l(e),T=l(t)}catch(e){return!1}if(d.length!=T.length)return!1;for(d.sort(),T.sort(),i=d.length-1;i>=0;i--)if(d[i]!=T[i])return!1;for(i=d.length-1;i>=0;i--)if(s=d[i],!u(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,l=n(298),c=n(297),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},297:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},298:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},305:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},443:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),d=r(s),T=n(7),p=r(T),f=n(462),E=r(f),m=n(296),h=r(m),y=n(444),b=n(188),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case b.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case b.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,l=o(i,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,a),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),d.default.createElement(e,i)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},R=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),M=S(R);M.renderStatic=M.rewind,t.Helmet=M,t.default=M},188:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},444:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),l=r(a),c=n(5),u=r(c),s=n(188),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&M("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(l)===-1||l!==s.TAG_PROPERTIES.INNER_HTML&&l!==s.TAG_PROPERTIES.CSS_TEXT&&l!==s.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=(0,u.default)({},r[l],o[l]);r[l]=c}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:f(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:f(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),S=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,R="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,M=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},N=null,g=function(e){N&&R(N),e.defer?N=A(function(){v(e,function(){N=null})}):(v(e),N=null)},v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,T=e.title,p=e.titleAttributes;I(s.TAG_NAMES.BODY,r),I(s.TAG_NAMES.HTML,o),w(T,p);var f={baseTag:P(s.TAG_NAMES.BASE,n),linkTags:P(s.TAG_NAMES.LINK,i),metaTags:P(s.TAG_NAMES.META,a),noscriptTags:P(s.TAG_NAMES.NOSCRIPT,l),scriptTags:P(s.TAG_NAMES.SCRIPT,u),styleTags:P(s.TAG_NAMES.STYLE,d)},E={},m={};Object.keys(f).forEach(function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=f[e].oldTags)}),t&&t(),c(e,E,m)},U=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=U(e)),I(s.TAG_NAMES.TITLE,t)},I=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),o.indexOf(c)===-1&&o.push(c);var d=i.indexOf(c);d!==-1&&i.splice(d,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},O=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},_=function(e,t,n,r){var o=O(n),i=U(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+d(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+d(i,r)+"</"+e+">"},G=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},Z=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=V(n,o);return[l.default.createElement(s.TAG_NAMES.TITLE,i,t)]},L=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return Z(e,t.title,t.titleAttributes,n)},toString:function(){return _(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return V(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return L(e,t)},toString:function(){return G(e,t,n)}}}},x=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,T=void 0===d?"":d,p=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,i,r),meta:k(s.TAG_NAMES.META,a,r),noscript:k(s.TAG_NAMES.NOSCRIPT,l,r),script:k(s.TAG_NAMES.SCRIPT,c,r),style:k(s.TAG_NAMES.STYLE,u,r),title:k(s.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=C,t.handleClientStateChange=g,t.mapStateOnServer=x,t.reducePropsToState=y,t.requestAnimationFrame=A,t.warn=M}).call(t,function(){return this}())},462:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function T(){f=e(p.map(function(e){return e.props})),E.canUseDOM?t(f):n&&(f=n(f))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],f=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return f},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=f;return f=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!d(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),T()},t.prototype.componentDidUpdate=function(){T()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),T()},t.prototype.render=function(){return u.createElement(l,this.props)},t}(c.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=s.canUseDOM,E}}var c=n(2),u=r(c),s=r(n(305)),d=r(n(479));e.exports=l},479:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!l(u))return!1;var s=e[u],d=t[u];if(o=n?n.call(r,s,d,u):void 0,o===!1||void 0===o&&s!==d)return!1}return!0}},207:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(2),u=o(c),s=n(104),d=o(s),T=(n(48),n(482)),p=o(T),f={marginBottom:"2rem"},E={position:"relative",padding:"0.5rem 1rem",backgroundColor:"rgba(255, 255, 255, .9)",borderBottom:"1px solid #71C5EE",zIndex:1e4,display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center","@media(min-width: 768px)":{flexFlow:"row nowrap",justifyContent:"flex-start"}},m={display:"inline-block",paddingTop:"0.3125rem",paddingBottom:0,marginRight:"1rem",whiteSpace:"nowrap",flexShrink:0},h={marginBottom:0},y={backgroundColor:"transparent",fontSize:"2rem",lineHeight:"40px",borderRadius:"0.25rem",cursor:"pointer",color:"rgba(0, 0, 0, 0.5)",borderColor:"rgba(0, 0, 0, 0.1)",":hover":{color:"rgba(0, 0, 0, 0.7)",borderColor:"rgba(0, 0, 0, 0.3)"},"@media(min-width: 768px)":{display:"none"}},b={flexBasis:"100%",flexGrow:1,alignItems:"center","@media(max-width: 767px)":{":not(.show)":{display:"none"}},"@media(min-width: 768px)":{display:"flex",flexBasis:"auto"}},S={listStyle:"none",display:"flex",paddingLeft:0,marginLeft:0,marginBottom:0,flexDirection:"column",flexBasis:"100%","@media(min-width: 768px)":{flexBasis:"auto",flexDirection:"row",marginLeft:"auto !important"},">li":{display:"list-item",marginBottom:0,">a":{display:"block",textDecoration:"none",paddingRight:0,paddingLeft:0,paddingTop:"0.5rem",paddingBottom:"0.5rem",color:"#373968",":hover":{textDecoration:"underline"},"@media(min-width: 768px)":{paddingRight:"0.5rem",paddingLeft:"0.5rem"}}}},A=function(e){function t(n){i(this,t);var r=a(this,e.call(this,n));return r.state={expanded:!1},r.handleClick=r.handleClick.bind(r),r}return l(t,e),t.prototype.handleClick=function(e){e.preventDefault(),this.setState({expanded:!this.state.expanded})},t.prototype.render=function(){return r.createElement("header",{css:f},r.createElement("nav",{css:E},r.createElement("div",{css:m},r.createElement(d.default,{to:"/"},r.createElement("img",{src:p.default,alt:"Morphic logo",css:h}))),r.createElement("button",{type:"button","data-target":"#navbar","aria-controls":"navbar","aria-expanded":this.state.expanded,"aria-label":"Toggle navigation",css:y,onClick:this.handleClick},"☰"),r.createElement("div",{id:"navbar",css:b,className:this.state.expanded?"show":""},r.createElement("ul",{css:S},r.createElement("li",null,r.createElement(d.default,{to:"/about"},"About")),r.createElement("li",null,r.createElement(d.default,{to:"/help/qsshelp"},"Help and Learning"))))))},t}(u.default.Component);t.default=A,e.exports=t.default}).call(t,n(12))},482:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMzBweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMTMwIDM2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS40MTQyMTsiPjxjbGlwUGF0aCBpZD0iX2NsaXAxIj48cmVjdCBpZD0iRm9uZG8iIHg9IjEuMjUiIHk9IjAiIHdpZHRoPSIzNC4xMiIgaGVpZ2h0PSIzNiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwMSkiPjx1c2UgeGxpbms6aHJlZj0iI19JbWFnZTIiIHg9IjEuMjgyIiB5PSIwIiB3aWR0aD0iMzQuMTJweCIgaGVpZ2h0PSIzNnB4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3NDg1NywwLDAsMSwwLDApIi8+PC9nPjx0ZXh0IHg9IjQxLjgxNXB4IiB5PSIyNC45MzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjRweDsiPm1vcnBoaWM8L3RleHQ+PGRlZnM+PGltYWdlIGlkPSJfSW1hZ2UyIiB3aWR0aD0iMzVweCIgaGVpZ2h0PSIzNnB4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNNQUFBQWtDQVlBQUFBRDNJUGhBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRnEwbEVRVlJZaGNXWGUyd1VWUlRHdjNQbnRZOXUyOTJ0dGtLUmh5bTJSZ01DQWlvUkZVVlFpU0RVUUJBZlFYekdCNGxJRkFWRmJBaStvdmhDVU1BS01XQkZpWWlKR3V1elJZc1ZWQkF3VkJCQ3BiVGJMZTF1ZDJmbUh2K0FOaTNiNlU2Vnh1Ky91ZmU3My8zZG01bWNNNFEwS3RrZTlVVVM5aGdpVEpmTVY5aU1ISVZnQXJSVEVmaEFGL3poMHlQREI5UGx1QkdsTTh5cnFDK3pKRTBDb0hVeHpRU3V6MUF4YS9HbzhLZTlCck5vVytTTW1PUU5sc1RsTGtJYXZRSXpGSUZ2RTR4cGttbUtaQjdHekdFQ0pZbXdsNERQZFFXbHo0d0s3ZTR4ekNQZk55dzBHVStsUFU1N0VFZFVvZ01tWTZpVFJ3RE5BWTBtRXVpN1JTT3p1WXY1VkZVeEt6Wmp0bHNRQUdCUXNEc1FBSkJBUnRUa0wySVdGenZBcG1wTFZkTmxFamk3SnpBOWtHNkRsenkvNDdqaENpWm1XaU42Q1FRQVlETUs2bHZOKzF6QkFDTHRWL1pmbGJUNS9zMkh1ZE0rWGNMNGRQRmpiOFBZVEgzMy9kMlkwUzFNRlRPRnZMUkxBTkhlQmpKVVlYZDg3blJOUzZvajUwWGo4bFdMNldJQStxbnpwMU1LOFB0emw0YUtVbUJLOTdMK2EzMWtXVkxpbnBNUXJrVGdPQkh0QmlNQ0lNUkFJUU5lTjJzRmNGUVJXSkdsMGRzTFJnVC9CQUJhdWoyaU5pUjRqY21ZNlI0Q3h6WEM2K2ZuQkJmUEdrd3RiZU5McTZMQnFHbVZ0RXE2QllEUFZSakx1RmRWcmkwWkhTeW5SeXNieHJYYTJPeDJzVUw0UlJlNGZWQldzUHFPSXBKZGVSNnZqSXlOMmJ5T2diNXVNZ2s0bE9NVlk0UXRNY010Q0FITk92aXVrdEdoN1U0Z0FMQmtkUENyYkkyTENXaHg4blFVQS9tTkNmbXlrTUJZTndzQVFCZTBPdCtuYjNQalhUZ3lYS0VLZXMxdHRpVXhWakJ6MEkyWkFEUFhKMHJ1SFJwd3ZKSFVOYnlWZ0xnYkx3TWVOVU1URDBoUVRqcXpJQnlmT3lTcjFpMElBQVE4NHVlRWhibGdwTlNobEh5Z1ZkM3dWbmtWRTZjMXEwSWtld0lDQUIrdXI0aTFOTWUvWm9hYXptdGIwbFQzSEc3NkNRUi9Pck9taU9pRmN6OEtWcjk0UTBvZjRxUS8vb3FjZHp4bWxqTWpNNTJYQ0MwT2hUSlZwaTJ6anRURnUreERuR1RiY2poeitvTzJBK1hmVm5aUnJOVWNiTnV5ZjlLeXh5UXNPZEhKckFvNmxIK0diOGorVmRNYTBnVVBuTDNSWDl2UVdwR3c1QVVPRmpZMHNWVlg2QnRWVlE3NE5YMS9wOW96NUlHUFFyOGRpTlpLeVYwMTN3QWdmYnF5c3JuczVydTdBeW02ZTFQbXdicVdOZkdrUGFVYm14ME82TVBxMXMvWTJUYlEvbUpOV0ZSSlArNnR5UldFT2duMGNRZ1FzYVI5VjZENDNUeERVWis0Y0hodzEyZnpybW12dk9mYytiNVdIMDBXSGF4cmZqS2VsSk83QXdiQW1YNGRkUjBHMm04bU5IMzluS2E0VlNJbHAvM01BVEFSR2pWQiszUk4rVXdUb2pZcFpSL1RrbGVadGp6WHpRc0xBQXJSMFZDbU1hKzI5S1pTSWpyUmFlWE1XTDhzMG13K3pMM1lNblFqTytCVkg0cHVtUG1LQUlDQVg5LzZQNEdBQUZzaHNRYzQyZW5WckpyMnBVZFgxblEwQ1lMWkN4dExRWlRvT09iVjFVMkZaNGZMMjJFQUlNTlFYeEpFRVVGb3lQUnFiNHdvekIzb1VjVVdBSzVyVVJxeHoxQlhUQnFWbDV2aFZWWVRJYW9xZEhqcTlaZmMrdjJ6NDgxT01NTUtCdXowZTVTcDRZQXh2TEJ2NE43S1pSTU9uNThmbnFJcHRPOTBrS2lDbWdmbFpUeTJhY0g0NlBSeGhiUFB6UElNQzNpMDY5YmVQckQ5cHJwOVR3cm1sSTNZWDl1OGpSMS9hWHFta04rWWRPeTk2Ujg3elR0dVVyeTBTanRVSDF0M3VrQUFvQ1ZoenVwMzIwYkhQTWVKYjM2ckdXUkxQcld1MkZrKzlaRUJlZjZoZm8vNjdLbHJpQkR6R2NyQy9qbStvUUd2K2dLQVRrV1ZHUVZOTGNtZXcyVDUxTDArWGJrZ3c2dTkxVFptYU9LSEFUbWg1ZnRYVHR2Ukw5dTNJZ1VHZEV3UTF0YXNMdDV4VnJaM3ZsY1huNXlFdExKOTZ2TGNUT1BxNk1hWlZvOWg5cXlZd28wYlprYm0zblBXbkx4TXorVmVRM210SUQ5N2N2V3JFMXNCb0doQStFZ1hQOEZ4WFJHdEFQRDdtemRhUGtPYmI2aGlaU2hnak8zWEovUEJBKy9jVk8rMDM0bkQvQWNaazB1UG1yWU10ejByZ3FyN2hyMVgvdmwyY2RPL3lmc0hMSnNRcHNac0hlQUFBQUFBU1VWT1JLNUNZSUk9Ii8+PC9kZWZzPjwvc3ZnPg=="},208:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(2),i=(r(o),n(7)),a=r(i),l=n(443),c=r(l),u=n(207),s=r(u),d=(n(48),{maxWidth:960,paddingLeft:15,paddingRight:15,marginLeft:"auto",marginRight:"auto",paddingTop:0,"@media(min-width: 576px)":{maxWidth:540},"@media(min-width: 768px)":{maxWidth:720},"@media(min-width: 992px)":{maxWidth:960},"@media(min-width: 1200px)":{maxWidth:1140}}),T=function(t){var n=t.children,r=t.data;return e.createElement("div",null,e.createElement(c.default,{title:r.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),e.createElement(s.default,{siteTitle:r.site.siteMetadata.title}),e.createElement("div",{css:d},n()))};T.propTypes={children:a.default.func},t.default=T;t.query="** extracted graphql fragment **"}).call(t,n(12))}});
//# sourceMappingURL=component---src-layouts-index-js-56563cbd7670e2da7a14.js.map