(this.webpackJsonpnewsproject=this.webpackJsonpnewsproject||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=(a(14),a(2)),c=a(3),s=a(5),u=a(4),d=a(1),h=a(6),m=(a(15),a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).hideModal=a.hideModal.bind(Object(d.a)(a)),a.showModal=a.showModal.bind(Object(d.a)(a)),a.state={modalShowing:!1,viewed:e.checkCallback(e.data.url)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"generateModal",value:function(){return r.a.createElement("div",{className:"modalShadow"},r.a.createElement("div",{className:"modalBody"},r.a.createElement("div",{className:"modalClose",onClick:this.hideModal},"X"),r.a.createElement("div",{className:"modalContent"},r.a.createElement("a",{target:"_blank",href:this.props.data.url,rel:"noopener noreferrer"},r.a.createElement("img",{alt:this.props.data.title,className:"modalImage",src:this.props.data.urlToImage}),this.props.data.content||this.props.data.description))))}},{key:"hideModal",value:function(){this.setState({modalShowing:!1})}},{key:"showModal",value:function(){this.setState({viewed:!0,modalShowing:!0}),this.props.markCallback(this.props.data.url)}},{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.urlToImage,n={backgroundImage:"url(".concat(a,")")};return r.a.createElement("div",{className:"article",style:n},r.a.createElement("div",{className:"articleText",onClick:this.showModal},t),this.state.modalShowing?this.generateModal():null,this.state.viewed?r.a.createElement("i",{className:"viewedIcon far fa-eye"}):null)}}]),t}(r.a.Component)),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).markArticle=a.markArticle.bind(Object(d.a)(a)),a.getArticleStatus=a.getArticleStatus.bind(Object(d.a)(a)),a.state={data:[]},a.prepStorage(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"prepStorage",value:function(){void 0===localStorage.articles&&(localStorage.articles=JSON.stringify({}))}},{key:"markArticle",value:function(e){var t=JSON.parse(localStorage.articles);t.hasOwnProperty(e)||(t[e]={read:Date.now()}),localStorage.articles=JSON.stringify(t)}},{key:"getArticleStatus",value:function(e){return JSON.parse(localStorage.articles).hasOwnProperty(e)}},{key:"componentDidMount",value:function(){var e=this;console.log("firing");var t=new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=5c8e21ff646c40f8af7f340cf4281975");fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.articles})}))}},{key:"makeArticleColumn",value:function(e,t){var a=this;return r.a.createElement("div",{className:"articleColumn",key:t},e.map((function(e){return r.a.createElement(m,{key:e.url,data:e,markCallback:a.markArticle,checkCallback:a.getArticleStatus})})))}},{key:"render",value:function(){var e=this,t=this.state.data,a=Math.floor(t.length/3),n=[this.state.data.slice(0,a+1),this.state.data.slice(a+1,2*a+1),this.state.data.slice(2*a+1)];return r.a.createElement("div",{className:"articleContainer"},n.map((function(t,a){return e.makeArticleColumn(t,a)})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4fc4b0bd.chunk.js.map