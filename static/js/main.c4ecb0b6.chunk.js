(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(328)},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),s=a.n(i),l=(a(34),a(2)),o=a(3),c=a(5),u=a(4),h=a(6),p=a(331),m=a(332),d=a(330),g=a(333),f=a(21),v=a(25),b=Object(g.a)(function(e){var t=Object(v.a)(!1);return r.a.createElement("div",{className:"footer fixed w-screen flex items-center justify-between flex-wrap p-6"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var t=document.querySelector(".head");/\/wiki\/.*/.test(e.location.pathname)&&(t=document.querySelector("nav")),t.scrollIntoView({behavior:"smooth"})},className:"outline-none pb-5"},r.a.createElement(f.ArrowUp,{className:"whiteInDarkMode"})),r.a.createElement("br",null),r.a.createElement("button",{onClick:t.toggle,className:"outline-none"},r.a.createElement(f.Moon,{className:"whiteInDarkMode"}))),r.a.createElement("div",null))}),y=a(20),w=a(11),E=a.n(w),k=a(14),j=a(9),x=a(329),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).openLink=a.openLink.bind(Object(j.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"openLink",value:function(){this.props.history.push("/wiki/"+encodeURIComponent(this.props.result.title)+"/"+this.props.language),this.props.setQuery("")}},{key:"render",value:function(){var e=this.props.result;return r.a.createElement("div",{key:e.title},r.a.createElement("div",{className:"result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit cursor-pointer",onClick:this.openLink},r.a.createElement("div",{className:"result-img-container"},r.a.createElement("img",{className:"result-img h-32 pr-12",src:e.image,alt:""})),r.a.createElement("div",{className:"result-text-container"},r.a.createElement("h4",null,e.title),r.a.createElement("p",{className:"text-grey text-xs leading-loose"},e.text))))}}]),t}(n.Component),N=Object(g.a)(O),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.results,a="Let me ask Wikipedia for that...";return 0===this.props.totalResults&&(a="I could not find any results"),r.a.createElement("div",{className:"absolute results mt-10 bg-main w-1/2 md:w-1/3"},Object.keys(t).length>0?Object.keys(t).map(function(a){return r.a.createElement(N,{key:t[a].title,result:t[a],setQuery:e.props.setQuery,language:e.props.language})}):r.a.createElement("div",{className:"result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit"},r.a.createElement("div",{className:"w-100"},r.a.createElement("p",{className:"font-light"},a))))}}]),t}(n.Component),C=a(12),L=a.n(C);function U(e,t,a){return q.apply(this,arguments)}function q(){return(q=Object(k.a)(E.a.mark(function e(t,a,n){var r,i,s,l,o,c,u=arguments;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>3&&void 0!==u[3]?u[3]:"en",a({totalResults:10}),e.next=4,L()({apiUrl:"https://".concat(r,".wikipedia.org/w/api.php")}).search(t);case 4:if(i=e.sent.results,t!==n().query){e.next=10;break}for(a({results:{},totalResults:i.length}),s=0;s<10&&s<i.length;s++)(l=n().results)[s]={title:i[s],image:"",text:"Loading details..."},a({results:l});e.next=11;break;case 10:return e.abrupt("return");case 11:for(o=function(e){L()({apiUrl:"https://".concat(r,".wikipedia.org/w/api.php")}).page(i[e]).then(function(){var r=Object(k.a)(E.a.mark(function r(s){var l,o,c,u;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.mainImage();case 2:return l=r.sent,r.next=5,s.summary();case 5:o=r.sent,c={title:i[e],image:l,text:o},t===n().query&&((u=n().results)[e]=c,a({results:u}));case 8:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}())},c=0;c<10&&c<i.length;c++)o(c);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}var I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={query:"",results:{},totalResults:10},a.handleSearchUpdate=a.handleSearchUpdate.bind(Object(j.a)(a)),a.setQuery=a.setQuery.bind(Object(j.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleSearchUpdate",value:function(e){var t=e.target.value;this.setQuery(t)}},{key:"setQuery",value:function(e){var t=this;this.setState({query:e}),U(e,function(e){t.setState(e)},function(){return t.state},this.props.language)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"header flex items-center justify-between flex-wrap p-6 w-full"},r.a.createElement("div",{className:"md:w-1/3"}),r.a.createElement(x.a,{to:"/",className:"w-1/4 md:w-1/3 no-underline flex justify-left md:justify-center"},r.a.createElement("span",{className:"font-light"},"minimal"),r.a.createElement("span",{className:"font-normal"},"pedia")),r.a.createElement("div",{className:"w-1/2 md:w-1/3"},r.a.createElement("input",{type:"text",className:"w-full md:w-3/4 outline-none bg-transparent float-right",placeholder:"Search...",onChange:this.handleSearchUpdate,value:this.state.query}),""!==this.state.query&&r.a.createElement(S,{results:this.state.results,totalResults:this.state.totalResults,setQuery:this.setQuery,language:this.props.language})))}}]),t}(n.Component),R=(a(321),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={image:"",title:"",text:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getArticleInfo()}},{key:"componentDidUpdate",value:function(e){this.props.article!==this.state.title&&(this.setState({image:"",text:"Loading article info..."}),this.getArticleInfo())}},{key:"getArticleInfo",value:function(){var e=this;this.setState({title:this.props.article}),L()({apiUrl:"https://".concat(this.props.language,".wikipedia.org/w/api.php")}).page(decodeURIComponent(this.props.article)).then(function(t){t.mainImage().then(function(t){e.setState({image:t})}),t.summary().then(function(t){e.setState({text:t})})})}},{key:"render",value:function(){var e=this.props,t=this.state;return r.a.createElement(x.a,{to:"/wiki/"+encodeURIComponent(e.article)+"/"+e.language,className:"hover-preview max-w-xs absolute overflow-hidden shadow-lg bg-secondary z-10",style:{top:e.position[0]+15+"px",left:window.innerWidth>500?e.position[1]+"px":"1rem",display:e.show?"":"none"}},r.a.createElement("img",{className:"preview-image w-full h-32",src:t.image,alt:""}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2"},decodeURIComponent(e.article).replace(/_/g," ")),r.a.createElement("p",{className:"text-grey-darker text-2xs"},t.text.substr(0,200),"...")))}}]),t}(n.Component)),A=(a(322),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={image:"",title:"",hover:{show:!1,position:[0,0],article:""}},a.sidebar=r.a.createRef(),a.text=r.a.createRef(),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.article,t=this.props.match.params.language?this.props.match.params.language:"en";this.getData(e,t)}},{key:"componentDidUpdate",value:function(e){if(this.props.location!==e.location){this.sidebar.current.innerHTML="",this.text.current.innerHTML="Getting your article from Wikipedia...",this.setState({image:"",hover:{show:!1,position:[0,0],article:""}}),window.scrollTo(0,0);var t=this.props.match.params.article,a=this.props.match.params.language?this.props.match.params.language:"en";this.getData(t,a)}}},{key:"getData",value:function(){var e=Object(k.a)(E.a.mark(function e(t,a){var n,r=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=decodeURIComponent(t),this.setState({title:t}),document.title=t.replace(/_/g," ")+" - minimalpedia",this.setState({hover:{show:!1,position:[0,0],article:""}}),n=setTimeout(function(){r.text.current.innerHTML="Still loading the article from Wikipedia..."},1e4),L()({apiUrl:"https://".concat(a,".wikipedia.org/w/api.php")}).page(t).then(function(e){e.mainImage().then(function(e){r.setState({image:e})}),e.html().then(function(e){clearTimeout(n),r.processHtml(e)})}).catch(function(e){clearTimeout(n),"Error: No article found"===String(e)&&(e="Sorry, but we couldn't find this article on Wikipedia"),r.text.current.innerHTML=e});case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"processHtml",value:function(e){var t=this,a=(new DOMParser).parseFromString("<div>"+e+"</div>","text/html");a.querySelectorAll("a").forEach(function(e){var a=e.getAttribute("href");e.addEventListener("click",function(e){if(e.preventDefault(),/^\/wiki\/((?!File:).)*$/.test(a)){var n=encodeURIComponent(a.substr(6)),r=t.props.match.params.language?t.props.match.params.language:"en";t.props.history.push("/wiki/"+n+"/"+r)}else if(/^\/wiki\/File:.*$/.test(a)){window.open("https://".concat(t.props.match.params.language,".wikipedia.org").concat(a),"_blank").focus()}else if("#"===a.charAt(0))document.querySelector(a).scrollIntoView({behavior:"smooth"});else{window.open(a,"_blank").focus()}});var n=!1,r="";e.addEventListener("mouseover",function(e){if(/^\/wiki\/((?!File:).)*$/.test(a)){n=!0,r=t.state.title.substr();var i=a.substr(6);t.setState(function(t){return{hover:Object(y.a)({},t.hover,{article:i,position:[e.pageY,e.pageX]})}}),setTimeout(function(){n&&r===t.state.title&&t.setState(function(e){return{hover:Object(y.a)({},e.hover,{show:!0})}})},500)}}),e.addEventListener("mouseleave",function(e){n=!1,t.setState(function(e){return{hover:Object(y.a)({},e.hover,{show:!1})}})})});var n=a.querySelectorAll('[style]:not([style=""]');if(n){var r=/(background(-color)?|border(-[^:]*)?|color):.*?(;|$)/gi;n.forEach(function(e){var t=e.getAttribute("style");t=t.replace(r,""),e.setAttribute("style",t)})}var i=a.querySelectorAll("table.infobox")[0];if(i){var s=i.querySelectorAll(".image");s&&s.forEach(function(e){e.remove()}),i.removeAttribute("style");var l=i.querySelectorAll('[style]:not([style=""]');l&&l.forEach(function(e){e.removeAttribute("style")});var o=0;i.querySelectorAll("tr").forEach(function(e){if(!(o<2))return!1;e.remove(),o++}),this.sidebar.current.innerHTML="",this.sidebar.current.appendChild(i)}var c=a.querySelectorAll("div")[0];c.querySelectorAll(".mw-editsection").forEach(function(e){e.remove()}),this.text.current.innerHTML="",this.text.current.appendChild(c)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{language:this.props.match.params.language?this.props.match.params.language:"en"}),r.a.createElement("div",{className:"md:flex md:min-h-screen article"},r.a.createElement(R,{language:this.props.match.params.language?this.props.match.params.language:"en",position:this.state.hover.position,show:this.state.hover.show,article:this.state.hover.article}),r.a.createElement("div",{className:"w-screen md:min-h-screen md:w-1/3 pl-16 p-6 sidebar"},r.a.createElement("img",{className:"w-100",src:this.state.image,alt:""}),r.a.createElement("div",{className:"sidebar-table",ref:this.sidebar})),r.a.createElement("div",{className:"w-screen md:w-2/3 pl-16 md:pl-6 p-6 info"},r.a.createElement("h2",null,this.state.title.replace(/_/g," ")),r.a.createElement("div",{ref:this.text},"Getting your article from Wikipedia..."))))}}]),t}(n.Component)),M=Object(g.a)(A),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={query:""},a.updateQuery=a.updateQuery.bind(Object(j.a)(a)),a.handleLanguageChange=a.handleLanguageChange.bind(Object(j.a)(a)),a.searchbox=r.a.createRef(),a.language=r.a.createRef(),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"updateQuery",value:function(e){this.setState({query:e.target.value}),this.props.onChange(e.target.value)}},{key:"handleLanguageChange",value:function(e){this.props.onLanguageChange(e.target.value),this.language.current.blur()}},{key:"componentDidMount",value:function(){this.searchbox.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"head px-16 "+(this.props.expanded?"pt-32":"pt-10")},r.a.createElement("div",{className:"heading text-center text-2xl"},r.a.createElement("span",{className:"font-light"},"minimal"),r.a.createElement("span",{className:"font-normal"},"pedia")),r.a.createElement("div",{className:"search "+(this.props.expanded?"pt-32":"pt-4")},r.a.createElement("select",{className:"w-full outline-none bg-transparent whiteInDarkMode language-select "+(this.props.expanded?"":"hidden"),onChange:this.handleLanguageChange,ref:this.language,value:this.props.language},this.props.availibleLanguages.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)})),r.a.createElement("input",{type:"text",className:"search-box h-24 w-full outline-none text-5xl font-bold bg-transparent",placeholder:"Search...",value:this.state.query,onChange:this.updateQuery,ref:this.searchbox,autoFocus:!0}))))}}]),t}(n.Component),Q=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.result;return r.a.createElement("div",{key:e.title},r.a.createElement(x.a,{to:"/wiki/"+encodeURIComponent(e.title)+"/"+this.props.language,className:"result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit"},r.a.createElement("div",{className:"result-img-container"},r.a.createElement("img",{className:"result-img h-32 pr-12",src:e.image,alt:""})),r.a.createElement("div",{className:"result-text-container"},r.a.createElement("h2",null,e.title),r.a.createElement("p",{className:"text-grey text-xs leading-loose"},e.text))))}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.results,a="Let me ask Wikipedia for that...";return 0===this.props.totalResults&&(a="I could not find any results"),r.a.createElement("div",{className:"results px-16 mt-3 display-none",id:"results"},Object.keys(t).length>0?Object.keys(t).map(function(a){return r.a.createElement(Q,{key:t[a].title,result:t[a],language:e.props.language})}):r.a.createElement("div",{className:"result overflow-hidden h-48 p-4 flex mb-12 no-underline color-inherit"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"font-light"},a))))}}]),t}(n.Component),W=[{name:"english",value:"en"},{name:"deutsch",value:"de"},{name:"espa\xf1ol",value:"es"},{name:"italiano",value:"it"},{name:"\u65e5\u672c\u8a9e",value:"ja"},{name:"polski",value:"pl"},{name:"p\u0443\u0441\u0441\u043a\u0438\u0439",value:"ru"},{name:"fran\xe7ais",value:"fr"},{name:"nederlands",value:"nl"},{name:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",value:"ar"},{name:"dansk",value:"da"},{name:"portugu\xeas",value:"pt"},{name:"t\xfcrk\xe7e",value:"tr"},{name:"\u4e2d\u6587",value:"zh"}],H=(a(323),function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={query:"",languages:[],language:"en",results:{},totalResults:10},a.state.languages=W;var n=navigator.language.substr(0,2);return a.state.languages.find(function(e){return e.value===n})&&(a.state.language=n),a.handleSearchUpdate=a.handleSearchUpdate.bind(Object(j.a)(a)),a.handleLanguageUpdate=a.handleLanguageUpdate.bind(Object(j.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="minimalpedia"}},{key:"handleSearchUpdate",value:function(e){var t=this;this.setState({query:e}),U(e,function(e){t.setState(e)},function(){return t.state},this.state.language)}},{key:"handleLanguageUpdate",value:function(e){this.setState({language:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,{expanded:""===this.state.query,onChange:this.handleSearchUpdate,onLanguageChange:this.handleLanguageUpdate,language:this.state.language,availibleLanguages:this.state.languages}),""!==this.state.query&&r.a.createElement(T,{results:this.state.results,totalResults:this.state.totalResults,language:this.state.language}))}}]),t}(n.Component)),F=function(e){return r.a.createElement(p.a,e,r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(d.a,{path:"/wiki/:article?/:language?",component:M}),r.a.createElement(d.a,{path:"/",component:H})),r.a.createElement(b,null)))},$=(a(324),a(325),a(326),a(327),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.c4ecb0b6.chunk.js.map