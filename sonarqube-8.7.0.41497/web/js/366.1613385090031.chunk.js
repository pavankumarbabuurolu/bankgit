(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{2168:function(e,t,r){"use strict";r.r(t);var n,a=r(13),s=r(668),i=r(671),o=r(1032),c=r(183),l=r(176),d=r(691),m=r(794),p=r(695),u=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={identityProviders:[]},t.fetchIdentityProviders=function(){Object(m.d)().then((function(e){var r=e.identityProviders;t.mounted&&t.setState({identityProviders:r})}),(function(){}))},t.getAuthError=function(){var e=Object(c.getCookie)("AUTHENTICATION-ERROR");return e?JSON.parse(decodeURIComponent(e)):{}},t.renderIdentityProvier=function(e,r){var n=t.state.identityProviders.find((function(t){return t.key===e}));return n?a.createElement("div",{className:"identity-provider",style:{backgroundColor:n.backgroundColor,color:Object(o.getTextColor)(n.backgroundColor,p.colors.secondFontColor)}},a.createElement("img",{alt:n.name,className:"little-spacer-right",height:"14",src:Object(d.getBaseUrl)()+n.iconPath,width:"14"}),r):a.createElement("div",null,"sonarqube"!==e&&e," ",r)},t}return u(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIdentityProviders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.getAuthError();return a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("div",{className:"big-spacer-bottom js-existing-account"},a.createElement("p",{className:"little-spacer-bottom"},a.createElement(s.FormattedMessage,{defaultMessage:Object(l.translate)("sessions.email_already_exists.1"),id:"sessions.email_already_exists.1",values:{email:a.createElement("strong",null,e.email)}})),this.renderIdentityProvier(e.existingProvider,e.existingLogin)),a.createElement("div",{className:"big-spacer-bottom js-new-account"},a.createElement("p",{className:"little-spacer-bottom"},Object(l.translate)("sessions.email_already_exists.2")),this.renderIdentityProvier(e.provider,e.login)),a.createElement(i.Alert,{variant:"warning"},Object(l.translate)("sessions.email_already_exists.3"),a.createElement("ul",{className:"list-styled"},a.createElement("li",{className:"spacer-top"},Object(l.translate)("sessions.email_already_exists.4")),a.createElement("li",{className:"spacer-top"},Object(l.translate)("sessions.email_already_exists.5")),a.createElement("li",{className:"spacer-top"},Object(l.translate)("sessions.email_already_exists.6")))),a.createElement("div",{className:"big-spacer-top text-right"},a.createElement("a",{className:"button js-continue",href:Object(d.getBaseUrl)()+"/sessions/init/"+e.provider+"?allowEmailShift=true"},Object(l.translate)("continue")),a.createElement("a",{className:"big-spacer-left js-cancel",href:Object(d.getBaseUrl)()+"/"},Object(l.translate)("cancel")))))},t}(a.PureComponent);t.default=b}}]);
//# sourceMappingURL=366.1613385090031.chunk.js.map