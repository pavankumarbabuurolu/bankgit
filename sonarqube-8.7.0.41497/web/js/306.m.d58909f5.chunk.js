(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1677:function(e,t,r){var a=r(313),n=r(1678);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=(a(n,o),n.locals?n.locals:{});e.exports=i},1678:function(e,t,r){(t=r(314)(!1)).push([e.i,".measures-link{border:none}.measures-link>span{border-bottom:1px solid #cae3f2}",""]),e.exports=t},1679:function(e,t,r){var a=r(313),n=r(1680);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=(a(n,o),n.locals?n.locals:{});e.exports=i},1680:function(e,t,r){(t=r(314)(!1)).push([e.i,".portfolio-overview>h1{font-weight:400}.portfolio-overview>.page-actions{margin-bottom:0}.portfolio-measure-secondary-value{line-height:24px;font-size:18px;font-weight:300}.portfolio-grid{position:relative;z-index:10;display:flex;justify-content:space-around;align-items:center}.portfolio-grid>li{vertical-align:top;width:50%;text-align:center}.portfolio-grid>li.text-middle{vertical-align:middle}.portfolio-freshness{line-height:24px;white-space:nowrap}.portfolio-boxes{display:flex;justify-content:space-between;align-items:stretch;margin-bottom:20px;padding:15px 0;width:100%}.portfolio-box{flex:1 0 10%;position:relative;padding:0 16px 66px;margin:0 8px;border:1px solid #e6e6e6;background-color:#fff;box-sizing:border-box}.portfolio-box:first-child{margin-left:0}.portfolio-box:last-child{margin-right:0}.portfolio-box-title{padding:8px 0 16px;margin:8px 0 16px;font-size:16px;line-height:16px;border-bottom:1px solid #e6e6e6;white-space:nowrap}.portfolio-box-title>.button-small>svg{margin-top:0}.portfolio-box>h3{color:#777;font-size:12px;font-weight:400;margin-top:8px}.portfolio-box-rating,.portfolio-box-rating .rating{display:block;width:80px;height:80px;line-height:80px}.portfolio-box-rating{margin:16px auto;border:none}.portfolio-box-rating .rating{border-radius:80px;font-size:48px;text-align:center}.portfolio-box-rating .rating.no-rating{color:#777;font-size:16px}.portfolio-box-links{border-top:1px solid #e6e6e6;text-align:center;position:absolute;bottom:0;left:0;right:0}.portfolio-box-links>div{display:inline-block;padding:12px 0;width:50%;box-sizing:border-box}.portfolio-box-links>div:first-child{border-right:1px solid #e6e6e6}.portfolio-box-links svg,.portfolio-breakdown-box-link svg{vertical-align:middle}.portfolio-breakdown{display:flex}.portfolio-breakdown-box{flex:0 0 auto;display:flex;flex-direction:column;background-color:#fff;border:1px solid #e6e6e6;margin:8px 0 16px}.portfolio-breakdown-box+.portfolio-breakdown-box{margin-left:16px}.portfolio-breakdown-box .portfolio-breakdown-metric,.portfolio-breakdown-box h2{margin:8px 16px 0}.portfolio-breakdown-box-link{margin-top:16px;border-top:1px solid #e6e6e6;padding:16px}.portfolio-sub-components table.data th{font-size:13px;text-transform:none;vertical-align:middle}.portfolio-sub-components-cell{width:110px}.portfolio-meta-header{margin-bottom:4px;color:#444}.portfolio-meta-card{min-width:200px;box-sizing:border-box}.portfolio-meta-card+.portfolio-meta-card{margin-top:16px;padding-top:15px;border-top:1px solid #e6e6e6}",""]),e.exports=t},1847:function(e,t,r){"use strict";r.r(t),r.d(t,"App",(function(){return le}));var a=r(2),n=r(325),o=r(31),i=r(369),l=r(538),s=r(311),c=r(316),m=r(1676),u=r.n(m),p=r(321);r(1677);function b(e){const{branchLike:t,className:r,component:n,label:i,metric:l}=e;return a.createElement(c.c,{className:s("measures-link",r),to:Object(p.h)({branchLike:t,componentKey:n,metric:l})},a.createElement(u.a,{className:"little-spacer-right",size:14}),a.createElement("span",null,i||Object(o.translate)("portfolio.measures_link")))}var d=r(418),f=r(500),g=r(326);r(1679);const h=["projects","ncloc","ncloc_language_distribution","releasability_rating","releasability_effort","sqale_rating","maintainability_rating_effort","reliability_rating","reliability_rating_effort","security_rating","security_rating_effort","security_review_rating","security_review_rating_effort","last_change_on_releasability_rating","last_change_on_maintainability_rating","last_change_on_security_rating","last_change_on_security_review_rating","last_change_on_reliability_rating"],_={releasability:{measuresMetric:"Releasability",label:"metric_domain.Releasability",rating:"releasability_rating",effort:"releasability_effort",last_change:"last_change_on_releasability_rating"},reliability:{measuresMetric:"Reliability",label:"metric_domain.Reliability",rating:"reliability_rating",effort:"reliability_rating_effort",last_change:"last_change_on_reliability_rating",activity:"reliability_rating,bugs"},vulnerabilities:{measuresMetric:"Security",label:"portfolio.metric_domain.vulnerabilities",rating:"security_rating",effort:"security_rating_effort",last_change:"last_change_on_security_rating",activity:"security_rating,vulnerabilities"},security_hotspots:{measuresMetric:"security_review_rating",label:"portfolio.metric_domain.security_hotspots",rating:"security_review_rating",effort:"security_review_rating_effort",last_change:"last_change_on_security_review_rating",activity:"security_review_rating,security_hotspots"},maintainability:{measuresMetric:"Maintainability",label:"metric_domain.Maintainability",rating:"sqale_rating",effort:"maintainability_rating_effort",last_change:"last_change_on_maintainability_rating",activity:"sqale_rating,code_smells"}},y=["ncloc","releasability_rating","security_rating","security_review_rating","reliability_rating","sqale_rating","alert_status"];function v(e){const t={};return e.forEach(e=>{t[e.metric]=e.value}),t}var x=r(323),E=r.n(x),j=r(378),O=r.n(j),N=r(942),w=r(499),k=r(319),T=r(401),S=r.n(T);function M({component:e,effort:t,metricKey:r}){return a.createElement("div",{className:"portfolio-effort"},a.createElement(k.FormattedMessage,{defaultMessage:Object(o.translate)("portfolio.x_in_y"),id:"portfolio.x_in_y",values:{projects:a.createElement(c.c,{to:Object(p.h)({componentKey:e,metric:r,listView:!0})},a.createElement("span",null,a.createElement(d.a,{className:"little-spacer-right",metricKey:"projects",metricType:"SHORT_INT",value:String(t.projects)}),1===t.projects?Object(o.translate)("project_singular"):Object(o.translate)("project_plural"))),rating:a.createElement(S.a,{small:!0,value:t.rating})}}))}function P({component:e,metric:t,value:r}){return a.createElement(c.c,{className:"portfolio-box-rating",to:Object(p.s)(e,t)},a.createElement(S.a,{value:r}))}var R=r(365),K=r.n(R);function q({lastChange:e,rating:t}){if(!e)return a.createElement("div",{className:"portfolio-freshness"},t&&a.createElement(k.FormattedMessage,{defaultMessage:Object(o.translate)("portfolio.has_always_been_x"),id:"portfolio.has_always_been_x",values:{rating:a.createElement(S.a,{small:!0,value:t})}}));const r=JSON.parse(e);return a.createElement("div",{className:"portfolio-freshness"},a.createElement(k.FormattedMessage,{defaultMessage:Object(o.translate)("portfolio.was_x_y"),id:"portfolio.was_x_y",values:{rating:a.createElement(S.a,{small:!0,value:r.value}),date:a.createElement(K.a,{date:r.date})}}))}function C({component:e,measures:t,metricKey:r}){const n=_[r],i=t[n.rating],l=t[n.last_change],s=t[n.effort],m=s?JSON.parse(s):void 0;return a.createElement("div",{className:"portfolio-box"},a.createElement("h2",{className:"portfolio-box-title"},Object(o.translate)(n.label),a.createElement(E.a,{className:"little-spacer-left",overlay:Object(o.translate)("portfolio.metric_domain",r,"help")})),i?a.createElement(P,{component:e,metric:n.rating,value:i}):a.createElement("div",{className:"portfolio-box-rating"},a.createElement("span",{className:"rating no-rating"},"—")),i&&a.createElement(a.Fragment,null,a.createElement("h3",null,Object(o.translate)("portfolio.metric_trend")),a.createElement(q,{lastChange:l,rating:i})),"releasability"===r?Number(m)>0&&a.createElement(a.Fragment,null,a.createElement("h3",null,Object(o.translate)("portfolio.lowest_rated_projects")),a.createElement("div",{className:"portfolio-effort"},a.createElement(c.c,{to:Object(p.h)({componentKey:e,metric:"alert_status"})},a.createElement("span",null,a.createElement(d.a,{className:"little-spacer-right",metricKey:"projects",metricType:"SHORT_INT",value:m}),1===Number(m)?Object(o.translate)("project_singular"):Object(o.translate)("project_plural"))),a.createElement(O.a,{"aria-label":1===Number(m)?Object(o.translate)("portfolio.has_qg_status"):Object(o.translate)("portfolio.have_qg_status"),className:"little-spacer-left",level:"ERROR",small:!0}))):m&&a.createElement(a.Fragment,null,a.createElement("h3",null,Object(o.translate)("portfolio.lowest_rated_projects")),a.createElement(M,{component:e,effort:m,metricKey:n.rating})),a.createElement("div",{className:"portfolio-box-links"},a.createElement("div",null,a.createElement(b,{component:e,metric:n.measuresMetric})),a.createElement("div",null,a.createElement(N.a,{component:e,metric:n.activity||n.rating,graph:w.a.custom}))))}var I=r(312),D=r(327),z=r.n(D),F=r(336),U=r.n(F),L=r(9),A=r(324),W=r(6);function G(e){return"".concat(Object(W.getBaseUrl)(),"/api/governance_reports/download?componentKey=").concat(encodeURIComponent(e))}var H=r(427),J=r(350);class V extends a.PureComponent{constructor(){super(...arguments),this.handleSubscription=e=>{Object(H.a)(e?Object(o.translateWithParameters)("report.subscribe_x_success",this.getFrequencyText()):Object(o.translateWithParameters)("report.unsubscribe_x_success",this.getFrequencyText())),this.props.onSubscribe()},this.handleSubscribe=()=>{var e;(e=this.props.component,Object(L.post)("/api/governance_reports/subscribe",{componentKey:e}).catch(A.a)).then(()=>this.handleSubscription(!0)).catch(A.a)},this.handleUnsubscribe=()=>{var e;(e=this.props.component,Object(L.post)("/api/governance_reports/unsubscribe",{componentKey:e}).catch(A.a)).then(()=>this.handleSubscription(!1)).catch(A.a)},this.getFrequencyText=()=>{const e=this.props.status.componentFrequency||this.props.status.globalFrequency;return Object(o.translate)("report.frequency",e)}}render(){const e=Object(J.b)(this.props.currentUser)&&!!this.props.currentUser.email,{status:t}=this.props;return e?t.subscribed?a.createElement("a",{href:"#",onClick:this.handleUnsubscribe},Object(o.translateWithParameters)("report.unsubscribe_x",this.getFrequencyText())):a.createElement("a",{href:"#",onClick:this.handleSubscribe},Object(o.translateWithParameters)("report.subscribe_x",this.getFrequencyText())):a.createElement("span",{className:"text-muted-2"},Object(o.translate)("report.no_email_to_subscribe"))}}var B=Object(n.b)(e=>({currentUser:Object(g.getCurrentUser)(e)}))(V);class Z extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.loadStatus=()=>{var e;(e=this.props.component.key,Object(L.getJSON)("/api/governance_reports/status",{componentKey:e}).catch(A.a)).then(e=>{this.mounted&&this.setState({status:e,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0,this.loadStatus()}componentWillUnmount(){this.mounted=!1}render(){const{component:e}=this.props,{status:t,loading:r}=this.state;return r||!t?null:t.canSubscribe?a.createElement(z.a,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement("a",{download:e.name+" - Executive Report.pdf",href:G(e.key),target:"_blank",rel:"noopener noreferrer"},Object(o.translate)("report.print"))),a.createElement("li",null,a.createElement(B,{component:e.key,onSubscribe:this.loadStatus,status:t}))),tagName:"li"},a.createElement(I.Button,{className:"dropdown-toggle"},Object(o.translate)("portfolio.pdf_report"),a.createElement(U.a,{className:"spacer-left icon-half-transparent"}))):a.createElement("a",{className:"button",download:e.name+" - Executive Report.pdf",href:G(e.key),target:"_blank",rel:"noopener noreferrer"},Object(o.translate)("report.print"))}}var Q=r(932),X=r.n(Q),Y=r(343),$=r.n(Y),ee=r(320),te=r(346),re=r(335);function ae({component:e,subComponents:t,total:r}){const n=t.length;if(!n)return null;const i=X()(t.map(e=>Number(e.measures.ncloc||0))),l={pathname:"/code",query:{id:e}};return a.createElement("div",{className:"panel panel-white portfolio-sub-components",id:"portfolio-sub-components"},a.createElement("table",{className:"data zebra"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null," "),a.createElement("th",{className:"text-center portfolio-sub-components-cell"},Object(o.translate)("metric_domain.Releasability")),a.createElement("th",{className:"text-center portfolio-sub-components-cell"},Object(o.translate)("metric_domain.Reliability")),a.createElement("th",{className:"text-center portfolio-sub-components-cell"},Object(o.translate)("portfolio.metric_domain.vulnerabilities")),a.createElement("th",{className:"text-center portfolio-sub-components-cell"},Object(o.translate)("portfolio.metric_domain.security_hotspots")),a.createElement("th",{className:"text-center portfolio-sub-components-cell"},Object(o.translate)("metric_domain.Maintainability")),a.createElement("th",{className:"text-center portfolio-sub-components-cell"},Object(o.translate)("metric.ncloc.name")))),a.createElement("tbody",null,t.map(e=>a.createElement("tr",{key:e.key},a.createElement("td",null,a.createElement(c.c,{className:"link-with-icon",to:Object(p.k)(e.refKey||e.key,e.qualifier)},a.createElement($.a,{qualifier:e.qualifier})," ",e.name)),e.qualifier===re.a.Project?ne(e.measures,"alert_status","LEVEL"):ne(e.measures,"releasability_rating","RATING"),ne(e.measures,"reliability_rating","RATING"),ne(e.measures,"security_rating","RATING"),ne(e.measures,"security_review_rating","RATING"),ne(e.measures,"sqale_rating","RATING"),function(e,t){const r=Number(e.ncloc||0),n=t>0?Math.max(1,Math.round(r/t*50)):0;return a.createElement("td",{className:"text-right"},a.createElement("span",{className:"note"},a.createElement(d.a,{metricKey:"ncloc",metricType:"SHORT_INT",value:e.ncloc})),t>0&&a.createElement("svg",{className:"spacer-left",height:"16",width:"50"},a.createElement("rect",{className:"bar-chart-bar",fill:te.colors.blue,height:"10",width:n,x:"0",y:"3"})))}(e.measures,i))))),r>n&&a.createElement("footer",{className:"spacer-top note text-center"},Object(o.translateWithParameters)("x_of_y_shown",Object(ee.formatMeasure)(n,"INT"),Object(ee.formatMeasure)(r,"INT")),a.createElement(c.c,{className:"spacer-left",to:l},Object(o.translate)("show_more"))))}function ne(e,t,r){return a.createElement("td",{className:"text-center"},a.createElement(d.a,{metricKey:t,metricType:r,value:e[t]}))}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class le extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.isEmpty=()=>void 0===this.state.measures||void 0===this.state.measures.ncloc,this.isNotComputed=()=>this.state.measures&&void 0===this.state.measures.reliability_rating}componentDidMount(){this.mounted=!0,this.props.fetchMetrics(),this.fetchData()}componentDidUpdate(e){e.component!==this.props.component&&this.fetchData()}componentWillUnmount(){this.mounted=!1}fetchData(){this.setState({loading:!0}),Promise.all([Object(l.d)({component:this.props.component.key,metricKeys:h.join()}),Object(i.h)(this.props.component.key,y,{ps:20,s:"qualifier"})]).then(([e,t])=>{this.mounted&&this.setState({loading:!1,measures:v(e),subComponents:t.components.map(e=>function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{measures:v(e.measures)})),totalSubComponents:t.paging.total})},()=>{this.mounted&&this.setState({loading:!1})})}renderSpinner(){return a.createElement("div",{className:"page page-limited"},a.createElement("div",{className:"text-center"},a.createElement("i",{className:"spinner spacer"})))}renderEmpty(){return a.createElement("div",{className:"page page-limited"},a.createElement("div",{className:"empty-search"},a.createElement("h3",null,this.state.measures&&this.state.measures.projects?Object(o.translate)("portfolio.no_lines_of_code"):Object(o.translate)("portfolio.empty"))))}renderWhenNotComputed(){return a.createElement("div",{className:"page page-limited"},a.createElement("div",{className:"empty-search"},a.createElement("h3",null,Object(o.translate)("portfolio.not_computed"))))}render(){const{component:e}=this.props,{loading:t,measures:r,subComponents:n,totalSubComponents:i}=this.state;return t?this.renderSpinner():this.isEmpty()?this.renderEmpty():this.isNotComputed()?this.renderWhenNotComputed():a.createElement("div",{className:"page page-limited portfolio-overview"},a.createElement("div",{className:"page-actions"},a.createElement(Z,{component:e})),a.createElement("h1",null,Object(o.translate)("portfolio.health_factors")),a.createElement("div",{className:"portfolio-boxes"},a.createElement(C,{component:e.key,measures:r,metricKey:"releasability"}),a.createElement(C,{component:e.key,measures:r,metricKey:"reliability"}),a.createElement(C,{component:e.key,measures:r,metricKey:"vulnerabilities"}),a.createElement(C,{component:e.key,measures:r,metricKey:"security_hotspots"}),a.createElement(C,{component:e.key,measures:r,metricKey:"maintainability"})),a.createElement("h1",null,Object(o.translate)("portfolio.breakdown")),a.createElement("div",{className:"portfolio-breakdown"},a.createElement("div",{className:"portfolio-breakdown-box"},a.createElement("h2",{className:"text-muted small"},Object(o.translate)("portfolio.number_of_projects")),a.createElement("div",{className:"portfolio-breakdown-metric huge"},a.createElement(d.a,{metricKey:"projects",metricType:"SHORT_INT",value:r&&r.projects||"0"})),a.createElement("div",{className:"portfolio-breakdown-box-link"},a.createElement("div",null,a.createElement(b,{component:e.key,metric:"projects"})))),a.createElement("div",{className:"portfolio-breakdown-box"},a.createElement("h2",{className:"text-muted small"},Object(o.translate)("portfolio.number_of_lines")),a.createElement("div",{className:"portfolio-breakdown-metric huge"},a.createElement(d.a,{metricKey:"ncloc",metricType:"SHORT_INT",value:r&&r.ncloc||"0"})),a.createElement("div",{className:"portfolio-breakdown-box-link"},a.createElement("div",null,a.createElement(b,{component:e.key,label:Object(o.translate)("portfolio.language_breakdown_link"),metric:"ncloc"}))))),void 0!==n&&void 0!==i&&a.createElement(ae,{component:e.key,subComponents:n,total:i}))}}const se={fetchMetrics:f.e};t.default=Object(n.b)(e=>({metrics:Object(g.getMetrics)(e)}),se)(le)},406:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var a=r(352);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=["sqale_rating","maintainability_rating","reliability_rating","security_rating","security_review_rating"];function l(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{metric:t[e.metric],leak:s(e)})}function s(e){var t;return null===(t=null==e?void 0:e.period)||void 0===t?void 0:t.value}function c(e,t){const r=Object(a.isDiffMetric)(e)?e.substr(4):e;if(i.includes(r))return Object(a.getRatingTooltip)(r,t)}},418:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r(2),n=r(317),o=r.n(n),i=r(378),l=r.n(i),s=r(401),c=r.n(s),m=r(320),u=r(406);function p({className:e,decimals:t,metricKey:r,metricType:n,small:i,value:s}){if(void 0===s)return a.createElement("span",{className:e},"–");if("LEVEL"===n)return a.createElement(l.a,{className:e,level:s,small:i});if("RATING"!==n){const r=Object(m.formatMeasure)(s,n,{decimals:t,omitExtraDecimalZeros:"PERCENT"===n});return a.createElement("span",{className:e},null!=r?r:"–")}const p=Object(u.c)(r,Number(s)),b=a.createElement(c.a,{small:i,value:s});return p?a.createElement(o.a,{overlay:p},a.createElement("span",{className:e},b)):b}},421:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"j",(function(){return y})),r.d(t,"e",(function(){return v})),r.d(t,"h",(function(){return x})),r.d(t,"i",(function(){return E})),r.d(t,"g",(function(){return j})),r.d(t,"d",(function(){return O})),r.d(t,"f",(function(){return N})),r.d(t,"l",(function(){return w})),r.d(t,"b",(function(){return k})),r.d(t,"k",(function(){return T})),r.d(t,"c",(function(){return S}));var a=r(329),n=r.n(a),o=r(385),i=r.n(o),l=r(523),s=r.n(l),c=r(640),m=r.n(c),u=r(31),p=r(16),b=r(352),d=r(393),f=r(499);const g=f.a.issues,h={[f.a.issues]:[d.a.bugs,d.a.code_smells,d.a.vulnerabilities],[f.a.coverage]:[d.a.lines_to_cover,d.a.uncovered_lines],[f.a.duplications]:[d.a.ncloc,d.a.duplicated_lines]},_={[f.a.issues]:h[f.a.issues].concat([d.a.reliability_rating,d.a.security_rating,d.a.sqale_rating]),[f.a.coverage]:[...h[f.a.coverage],d.a.coverage],[f.a.duplications]:[...h[f.a.duplications],d.a.duplicated_lines_density]};function y(e){return e===f.a.custom}function v(e=!1){const t=[f.a.issues,f.a.coverage,f.a.duplications];return e?t:[...t,f.a.custom]}function x(e){return e.data.some(e=>Boolean(e.y||0===e.y))}function E(e){return e.some(e=>e.data&&e.data.length>1)}function j(e){return e.length>0?e[0].type:"INT"}function O(e,t){return y(e)?t:h[e]}function N(e,t){return y(e)?t:_[e]}function w(e,t,r){return s()(i()(e,e=>e.type),e=>m()(e,r)).slice(0,t)}function k(e,t,r,a){return a.length<=0||void 0===e?[]:n()(e.filter(e=>a.indexOf(e.metric)>=0).map(a=>{if(a.metric===d.a.uncovered_lines&&!y(t))return function(e,t){const r=t.find(e=>e.metric===d.a.lines_to_cover);return{data:r?e.history.map((e,t)=>({x:e.date,y:Number(r.history[t].value)-Number(e.value)})):[],name:"covered_lines",translatedName:Object(u.translate)("project_activity.custom_metric.covered_lines"),type:"INT"}}(a,e);const n=function(e,t){if(Array.isArray(t))return t.find(t=>t.key===e);return t[e]}(a.metric,r);return{data:a.history.map(e=>({x:e.date,y:n&&"LEVEL"===n.type?e.value:Number(e.value)})),name:a.metric,translatedName:n?Object(u.getLocalizedMetricName)(n):Object(b.localizeMetric)(a.metric),type:n?n.type:"INT"}}),e=>a.indexOf("covered_lines"===e.name?"uncovered_lines":e.name))}function T(e,t,r,a=[]){Object(p.save)(e,r,t),y(r)&&Object(p.save)("".concat(e,".custom"),a.join(","),t)}function S(e,t){const r=Object(p.get)("".concat(e,".custom"),t);return{graph:Object(p.get)(e,t)||g,customGraphs:r?r.split(","):[]}}},427:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(405),n=r(404);function o(e){Object(n.default)().dispatch(a.b(e))}},499:function(e,t,r){"use strict";var a;r.d(t,"a",(function(){return a})),function(e){e.issues="issues",e.coverage="coverage",e.duplications="duplications",e.custom="custom"}(a||(a={}))},942:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(2),n=r(316),o=r(732),i=r.n(o),l=r(31),s=r(321),c=r(421);r(943);function m(e){const{branchLike:t,component:r,graph:o,label:m,metric:u}=e;return a.createElement(n.c,{className:"activity-link",to:void 0!==u&&void 0!==o&&Object(c.j)(o)?Object(s.r)(r,u,t):Object(s.a)(r,t,o)},a.createElement(i.a,{className:"little-spacer-right",size:14}),a.createElement("span",null,m||Object(l.translate)("portfolio.activity_link")))}},943:function(e,t,r){var a=r(313),n=r(944);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=(a(n,o),n.locals?n.locals:{});e.exports=i},944:function(e,t,r){(t=r(314)(!1)).push([e.i,"a.activity-link{border:none}.activity-link>span{border-bottom:1px solid #cae3f2}",""]),e.exports=t}}]);
//# sourceMappingURL=306.m.d58909f5.chunk.js.map