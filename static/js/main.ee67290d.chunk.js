(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(332)},323:function(e,t,a){},327:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),c=a.n(i),s=(a(35),a(5)),l=a(6),o=a(8),u=a(7),m=a(9),h=a(335),p=a(336),d=a(334),f=a(25),v=a(26),b=function(){var e=Object(v.a)(!1);return r.a.createElement("div",{className:"footer fixed w-screen flex items-center justify-between flex-wrap p-6"},r.a.createElement("button",{onClick:e.toggle},r.a.createElement(f.Moon,{className:"whiteInDarkMode"})),r.a.createElement("div",null))},y=a(13),E=a.n(y),g=a(14),j=a(337),O=a(333),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"header flex items-center justify-between flex-wrap p-6"},r.a.createElement("div",null),r.a.createElement(O.a,{to:"/",className:"no-underline"},r.a.createElement("span",{className:"font-light"},"minimal"),r.a.createElement("span",{className:"font-normal"},"pedia")),r.a.createElement("div",null))}}]),t}(n.Component),w=a(15),k=a.n(w),N=(a(323),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={image:"",title:""},a.sidebar=r.a.createRef(),a.text=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.article;this.getData(e)}},{key:"componentDidUpdate",value:function(e){if(this.props.location!==e.location){this.sidebar.current.innerHTML="",this.text.current.innerHTML="Getting your article from Wikipedia...",this.setState({image:""});var t=this.props.match.params.article;this.getData(t)}}},{key:"getData",value:function(){var e=Object(g.a)(E.a.mark(function e(t){var a=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({title:t}),document.title=t.replace(/_/g," ")+" - minimalpedia",k()().page(t).then(function(e){e.mainImage().then(function(e){a.setState({image:e})}),e.html().then(function(e){a.processHtml(e)})});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"processHtml",value:function(e){var t=this,a=(new DOMParser).parseFromString("<div>"+e+"</div>","text/html");a.querySelectorAll("a").forEach(function(e){var a=e.getAttribute("href");e.addEventListener("click",function(e){/^\/wiki\/.*/.test(a)?(e.preventDefault(),t.props.history.push(a)):"#"===a.charAt(0)&&(e.preventDefault(),document.querySelector(a).scrollIntoView({behavior:"smooth"}))})});var n=a.querySelectorAll("table.infobox")[0];n.querySelectorAll(".image").forEach(function(e){e.remove()}),n.removeAttribute("style"),n.querySelectorAll('[style]:not([style=""]').forEach(function(e){e.removeAttribute("style")});var r=0;n.querySelectorAll("tr").forEach(function(e){if(!(r<2))return!1;e.remove(),r++}),this.sidebar.current.innerHTML="",this.sidebar.current.appendChild(n);var i=a.querySelectorAll("div")[0];i.querySelectorAll(".mw-editsection").forEach(function(e){e.remove()}),this.text.current.innerHTML="",this.text.current.appendChild(i)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("div",{className:"md:flex md:min-h-screen article"},r.a.createElement("div",{className:"w-screen md:w-1/3 pl-16 p-6 sidebar"},r.a.createElement("img",{className:"w-100",src:this.state.image,alt:""}),r.a.createElement("div",{className:"sidebar-table",ref:this.sidebar})),r.a.createElement("div",{className:"w-screen md:w-2/3 pl-16 md:pl-6 p-6 info"},r.a.createElement("h2",null,this.state.title.replace(/_/g," ")),r.a.createElement("div",{ref:this.text},"Getting your article from Wikipedia..."))))}}]),t}(n.Component)),S=Object(j.a)(N),q=a(12),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={query:""},a.updateQuery=a.updateQuery.bind(Object(q.a)(Object(q.a)(a))),a.searchbox=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateQuery",value:function(e){this.setState({query:e.target.value}),this.props.onChange(e.target.value)}},{key:"componentDidMount",value:function(){this.searchbox.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"head px-16 "+(this.props.expanded?"pt-32":"pt-10")},r.a.createElement("div",{className:"heading text-center text-2xl"},r.a.createElement("span",{className:"font-light"},"minimal"),r.a.createElement("span",{className:"font-normal"},"pedia")),r.a.createElement("div",{className:"search "+(this.props.expanded?"pt-32":"")},r.a.createElement("input",{type:"text",className:"search-box h-48 w-100 text-5xl font-bold bg-transparent",placeholder:"Search...",value:this.state.query,onChange:this.updateQuery,ref:this.searchbox,autoFocus:!0}))))}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.result;return r.a.createElement("div",{key:e.title},r.a.createElement(O.a,{to:"/wiki/"+e.title,className:"result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit"},r.a.createElement("div",{className:"result-img-container"},r.a.createElement("img",{className:"result-img h-32 pr-12",src:e.image,alt:""})),r.a.createElement("div",{className:"result-text-container"},r.a.createElement("h2",null,e.title),r.a.createElement("p",{className:"text-grey text-xs leading-loose"},e.text))))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.results,t="Let me ask Wikipedia for that...";return 0===this.props.totalResults&&(t="I could not find any results"),r.a.createElement("div",{className:"results px-16 mt-3 display-none",id:"results"},Object.keys(e).length>0?Object.keys(e).map(function(t){return r.a.createElement(A,{result:e[t]})}):r.a.createElement("div",{className:"result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"font-light"},t))))}}]),t}(n.Component),M=(a(327),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={query:"",results:{},totalResults:10},a.handleSearchUpdate=a.handleSearchUpdate.bind(Object(q.a)(Object(q.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="minimalpedia"}},{key:"handleSearchUpdate",value:function(e){this.setState({query:e}),this.doQuery(e)}},{key:"doQuery",value:function(){var e=Object(g.a)(E.a.mark(function e(t){var a,n,r,i,c,s=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({totalResults:10}),e.next=3,k()().search(t);case 3:if(a=e.sent.results,t!==this.state.query){e.next=9;break}for(this.setState({results:{},totalResults:a.length}),n=0;n<10&&n<a.length;n++)(r=this.state.results)[n]={title:a[n],image:"",text:"Loading details..."},this.setState({results:r});e.next=10;break;case 9:return e.abrupt("return");case 10:for(i=function(e){k()().page(a[e]).then(function(){var n=Object(g.a)(E.a.mark(function n(r){var i,c,l,o;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.mainImage();case 2:return i=n.sent,n.next=5,r.summary();case 5:c=n.sent,l={title:a[e],image:i,text:c},t===s.state.query&&((o=s.state.results)[e]=l,s.setState({results:o}));case 8:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}())},c=0;c<10&&c<a.length;c++)i(c);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{expanded:""===this.state.query,onChange:this.handleSearchUpdate}),""!==this.state.query&&r.a.createElement(D,{results:this.state.results,totalResults:this.state.totalResults}))}}]),t}(n.Component)),R=function(e){return r.a.createElement(h.a,e,r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/wiki/:article",component:S}),r.a.createElement(d.a,{path:"/",component:M})),r.a.createElement(b,null)))},L=(a(328),a(329),a(330),a(331),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(R,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){}},[[30,1,2]]]);
//# sourceMappingURL=main.ee67290d.chunk.js.map