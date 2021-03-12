(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1154:function(e,t,n){"use strict";var a=n(2),r=n(388),o=n.n(r),i=n(31),l=n(367),s=n(363),c=n(6),u=n(321),p=n(471),m=n(312),d=n(330),h=n.n(d);class f extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=e=>{e.preventDefault();const{name:t}=this.state;null!=t&&(this.setState({loading:!0}),Object(l.i)(this.props.profile.key,t).then(e=>this.props.onCopy(e.name),()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translateWithParameters)("quality_profiles.copy_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"copy-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"copy-profile-name"},Object(i.translate)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"copy-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{disabled:n,id:"copy-profile-submit"},Object(i.translate)("copy")),a.createElement(m.ResetButtonLink,{id:"copy-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}var y=n(322);class b extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.handleFormSubmit=e=>{e.preventDefault(),this.setState({loading:!0}),Object(l.l)(this.props.profile).then(this.props.onDelete,()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translate)("quality_profiles.delete_confirm_title");return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("form",{id:"delete-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"js-modal-messages"}),e.childrenCount>0?a.createElement("div",null,a.createElement(y.Alert,{variant:"warning"},Object(i.translate)("quality_profiles.this_profile_has_descendants")),a.createElement("p",null,Object(i.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",e.name,e.languageName))):a.createElement("p",null,Object(i.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x",e.name,e.languageName))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{className:"button-red",disabled:this.state.loading,id:"delete-profile-submit"},Object(i.translate)("delete")),a.createElement(m.ResetButtonLink,{id:"delete-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}var g=n(318),O=n.n(g);class C extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.canSubmit=e=>Boolean(e.name&&e.name.length),this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=async e=>{if(e.preventDefault(),this.canSubmit(this.state)){const{profile:e}=this.props,{name:t}=this.state,n=new FormData;n.append("language",e.language),n.append("name",t),this.setState({loading:!0});try{const{profile:t}=await Object(l.j)(n);await Object(l.g)(t,e),this.props.onExtend(t.name)}finally{this.mounted&&this.setState({loading:!1})}}}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translateWithParameters)("quality_profiles.extend_x_title",e.name,e.languageName);return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"extend-profile-name"},Object(i.translate)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"extend-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name?this.state.name:""}))),a.createElement("div",{className:"modal-foot"},a.createElement(O.a,{className:"spacer-right",loading:this.state.loading}),a.createElement(m.SubmitButton,{disabled:this.state.loading||!this.canSubmit(this.state),id:"extend-profile-submit"},Object(i.translate)("extend")),a.createElement(m.ResetButtonLink,{id:"extend-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}class E extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=e=>{e.preventDefault();const{name:t}=this.state;null!=t&&(this.setState({loading:!0}),Object(l.x)(this.props.profile.key,t).then(()=>this.props.onRename(t),()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translateWithParameters)("quality_profiles.rename_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"rename-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"rename-profile-name"},Object(i.translate)("quality_profiles.new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"rename-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{disabled:n,id:"rename-profile-submit"},Object(i.translate)("rename")),a.createElement(m.ResetButtonLink,{id:"rename-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}class j extends a.PureComponent{constructor(){super(...arguments),this.state={copyFormOpen:!1,extendFormOpen:!1,deleteFormOpen:!1,renameFormOpen:!1},this.closeCopyForm=()=>{this.setState({copyFormOpen:!1})},this.closeDeleteForm=()=>{this.setState({deleteFormOpen:!1})},this.closeExtendForm=()=>{this.setState({extendFormOpen:!1})},this.closeRenameForm=()=>{this.setState({renameFormOpen:!1})},this.handleCopyClick=()=>{this.setState({copyFormOpen:!0})},this.handleDeleteClick=()=>{this.setState({deleteFormOpen:!0})},this.handleExtendClick=()=>{this.setState({extendFormOpen:!0})},this.handleRenameClick=()=>{this.setState({renameFormOpen:!0})},this.handleProfileCopy=e=>{this.closeCopyForm(),this.navigateToNewProfile(e)},this.handleProfileDelete=()=>{this.props.router.replace(p.a),this.props.updateProfiles()},this.handleProfileExtend=e=>{this.closeExtendForm(),this.navigateToNewProfile(e)},this.handleProfileRename=e=>{this.closeRenameForm(),this.props.updateProfiles().then(()=>{this.props.fromList||this.props.router.replace(Object(p.d)(e,this.props.profile.language))},()=>{})},this.handleSetDefaultClick=()=>{Object(l.C)(this.props.profile).then(this.props.updateProfiles,()=>{})},this.navigateToNewProfile=e=>{this.props.updateProfiles().then(()=>{this.props.router.push(Object(p.d)(e,this.props.profile.language))},()=>{})}}render(){const{profile:e}=this.props,{actions:t={}}=e,n="".concat(Object(c.getBaseUrl)()).concat(Object(l.t)(e)),s=Object(u.B)({qprofile:e.key,activation:"false"});return a.createElement(a.Fragment,null,a.createElement(o.a,{className:this.props.className},t.edit&&a.createElement(r.ActionsDropdownItem,{to:s},a.createElement("span",{"data-test":"quality-profiles__activate-more-rules"},Object(i.translate)("quality_profiles.activate_more_rules"))),!e.isBuiltIn&&a.createElement(r.ActionsDropdownItem,{download:"".concat(e.key,".xml"),to:n},a.createElement("span",{"data-test":"quality-profiles__backup"},Object(i.translate)("backup_verb"))),a.createElement(r.ActionsDropdownItem,{to:Object(p.c)(e.name,e.language)},a.createElement("span",{"data-test":"quality-profiles__compare"},Object(i.translate)("compare"))),t.copy&&a.createElement(a.Fragment,null,a.createElement(r.ActionsDropdownItem,{onClick:this.handleCopyClick},a.createElement("span",{"data-test":"quality-profiles__copy"},Object(i.translate)("copy"))),a.createElement(r.ActionsDropdownItem,{onClick:this.handleExtendClick},a.createElement("span",{"data-test":"quality-profiles__extend"},Object(i.translate)("extend")))),t.edit&&a.createElement(r.ActionsDropdownItem,{onClick:this.handleRenameClick},a.createElement("span",{"data-test":"quality-profiles__rename"},Object(i.translate)("rename"))),t.setAsDefault&&a.createElement(r.ActionsDropdownItem,{onClick:this.handleSetDefaultClick},a.createElement("span",{"data-test":"quality-profiles__set-as-default"},Object(i.translate)("set_as_default"))),t.delete&&a.createElement(r.ActionsDropdownDivider,null),t.delete&&a.createElement(r.ActionsDropdownItem,{destructive:!0,onClick:this.handleDeleteClick},a.createElement("span",{"data-test":"quality-profiles__delete"},Object(i.translate)("delete")))),this.state.copyFormOpen&&a.createElement(f,{onClose:this.closeCopyForm,onCopy:this.handleProfileCopy,profile:e}),this.state.extendFormOpen&&a.createElement(C,{onClose:this.closeExtendForm,onExtend:this.handleProfileExtend,profile:e}),this.state.deleteFormOpen&&a.createElement(b,{onClose:this.closeDeleteForm,onDelete:this.handleProfileDelete,profile:e}),this.state.renameFormOpen&&a.createElement(E,{onClose:this.closeRenameForm,onRename:this.handleProfileRename,profile:e}))}}t.a=Object(s.a)(j)},360:function(e,t,n){var a=n(345),r=n(333),o=n(444),i=n(368);e.exports=function(e,t){return(i(e)?a:o)(e,r(t,3))}},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(458),r=n(2),o=n(319),i=n(26),l=n(31),s=n(364);t.default=function(e){var t=e.children,n=void 0===t?function(e){return e}:t,c=e.date,u=e.hourPrecision,p=n;if(!c)return r.createElement(r.Fragment,null,n(l.translate("never")));c&&u&&a.differenceInHours(Date.now(),c)<1&&(p=function(){return n(l.translate("less_than_1_hour_ago"))});var m=i.parseDate(c);return r.createElement(s.default,{date:m},(function(e){return r.createElement("span",{title:e},r.createElement(o.FormattedRelative,{value:m},p))}))}},367:function(e,t,n){"use strict";n.d(t,"A",(function(){return u})),n.d(t,"s",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"y",(function(){return d})),n.d(t,"r",(function(){return h})),n.d(t,"q",(function(){return f})),n.d(t,"C",(function(){return y})),n.d(t,"x",(function(){return b})),n.d(t,"i",(function(){return g})),n.d(t,"l",(function(){return O})),n.d(t,"g",(function(){return C})),n.d(t,"t",(function(){return E})),n.d(t,"u",(function(){return j})),n.d(t,"o",(function(){return _})),n.d(t,"n",(function(){return v})),n.d(t,"p",(function(){return N})),n.d(t,"h",(function(){return q})),n.d(t,"d",(function(){return S})),n.d(t,"m",(function(){return P})),n.d(t,"B",(function(){return x})),n.d(t,"z",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"w",(function(){return F})),n.d(t,"b",(function(){return D})),n.d(t,"v",(function(){return L})),n.d(t,"e",(function(){return R})),n.d(t,"f",(function(){return B})),n.d(t,"a",(function(){return J})),n.d(t,"k",(function(){return A}));var a=n(360),r=n.n(a),o=n(477),i=n(9),l=n(324);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function p({compareToSonarWay:e,profile:{key:t}}){return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:e,key:t})}function m(e){return Object(i.postJSON)("/api/qualityprofiles/create",e).catch(l.a)}function d(e){return Object(i.postJSON)("/api/qualityprofiles/restore",e).catch(l.a)}function h(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function f({language:e,name:t}){return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:e,qualityProfile:t}).catch(l.a)}function y({language:e,name:t}){return Object(i.post)("/api/qualityprofiles/set_default",{language:e,qualityProfile:t})}function b(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function g(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function O({language:e,name:t}){return Object(i.post)("/api/qualityprofiles/delete",{language:e,qualityProfile:t}).catch(l.a)}function C({language:e,name:t},n){return Object(i.post)("/api/qualityprofiles/change_parent",{language:e,qualityProfile:t,parentQualityProfile:n?n.name:void 0}).catch(l.a)}function E({language:e,name:t}){const n=Object.entries({language:e,qualityProfile:t}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/backup?".concat(n)}function j({key:e},{language:t,name:n}){const a=Object.entries({exporterKey:e,language:t,qualityProfile:n}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/export?".concat(a)}function _(){return Object(i.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,l.a)}function v(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function N(e,t,{language:n,name:a},r){return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:e,to:t,language:n,qualityProfile:a,p:r})}function q(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function S({language:e,name:t},n){return Object(i.post)("/api/qualityprofiles/add_project",{language:e,qualityProfile:t,project:n}).catch(l.a)}function P({language:e,name:t},n){return Object(i.post)("/api/qualityprofiles/remove_project",{language:e,qualityProfile:t,project:n}).catch(l.a)}function x(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function w(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function k(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function F(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function D(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function L(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function R(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function B(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function J(e){const t=e.params&&r()(e.params,(e,t)=>"".concat(t,"=").concat(Object(o.csvEscape)(e))).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{params:t})).catch(l.a)}function A(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},388:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(311),i=n(2),l=n(33),s=n(31),c=n(336),u=n(391),p=n(312),m=n(366),d=n(327),h=n(317);t.default=function(e){var t=e.children,n=e.className,a=e.overlayPlacement,r=e.small,l=e.toggleClassName;return i.createElement(d.default,{className:n,onOpen:e.onOpen,overlay:i.createElement("ul",{className:"menu"},t),overlayPlacement:a},i.createElement(p.Button,{className:o("dropdown-toggle",l,{"button-small":r})},i.createElement(u.default,{size:r?12:14}),i.createElement(c.default,{className:"little-spacer-left"})))};var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return r(t,e),t.prototype.render=function(){var e=this,t=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?i.createElement("li",null,i.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?i.createElement("li",null,i.createElement(l.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?i.createElement(m.ClipboardBase,null,(function(n){var a=n.setCopyButton,r=n.copySuccess;return i.createElement(h.default,{overlay:s.translate("copied_action"),visible:r},i.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:a},i.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))})):i.createElement("li",null,i.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(i.PureComponent);t.ActionsDropdownItem=f,t.ActionsDropdownDivider=function(){return i.createElement("li",{className:"divider"})}},391:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(315);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,l=e.size,s=void 0===l?14:l,c=r(e,["fill","size"]);return o.createElement(i.default,a({size:s,viewBox:"0 0 14 14"},c),o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:n}})))}},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvEscape=function(e){return'"'+e.replace(/"/g,'\\"')+'"'}},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(311),r=n(2),o=n(317),i=n.n(o),l=n(31);function s({className:e,tooltip:t=!0}){const n=r.createElement("div",{className:a("badge badge-info",e)},Object(l.translate)("quality_profiles.built_in"));return t?r.createElement(i.a,{overlay:Object(l.translate)("quality_profiles.built_in.description")},n):n}},672:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(316),o=n(471);function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e){let{name:t,language:n,children:l}=e,s=i(e,["name","language","children"]);return a.createElement(r.c,Object.assign({activeClassName:"link-no-underline",to:Object(o.d)(t,n)},s),l)}}}]);
//# sourceMappingURL=14.m.da60ec31.chunk.js.map