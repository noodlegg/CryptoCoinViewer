(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){"use strict";(function(e){var n=a(3),r=a(4),i=a(7),c=a(5),o=a(6),s=a(1),l=a.n(s),u=(a(34),a(17));e.fetch=a(42),a(43).setApiKey("b81b6853cc9d66cc6f37ca2071225d4af39b1959bb7da992c54bbb4aa2a5be94");var h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={price:0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"getData",value:function(){var e=this,t=this.props.name,a="https://min-api.cryptocompare.com/data/price?fsym="+t+"&tsyms=EUR,USD,JPY,GBP,CHF,CNY,CAD,KRW,HKD,AUD";console.log(t),fetch(a).then(function(e){return e.json()}).then(function(t){e.setState({price:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return this.getData(),l.a.createElement("div",{id:"container"},Object.keys(this.state.price).map(function(t){return l.a.createElement(u.a,{currency:t,value:e.state.price[t]})}))}}]),t}(l.a.Component);t.a=h}).call(this,a(11))},function(e,t,a){"use strict";var n=a(3),r=a(4),i=a(7),c=a(5),o=a(6),s=a(1),l=a.n(s),u=(a(36),a(38)),h={float:"right"},m=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.currency,t=this.props.value;return console.log(this.props),l.a.createElement("div",{id:"priceRow"},l.a.createElement("h3",null,e," ",l.a.createElement(u,{value:t,displayType:"text",decimalprecision:2,thousandSeparator:!0,style:h})))}}]),t}(l.a.Component);t.a=m},,function(e,t,a){e.exports=a.p+"static/media/btc_banner.d5084f7c.png"},function(e,t,a){e.exports=a.p+"static/media/eth_banner.e6a2ba14.png"},function(e,t,a){e.exports=a.p+"static/media/iota_banner.616d6ce3.png"},function(e,t,a){e.exports=a.p+"static/media/xrp_banner.c82f1e4b.png"},function(e,t,a){e.exports=a.p+"static/media/xlm_banner.6ad73501.png"},,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,,,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(9),c=a.n(i),o=(a(30),a(3)),s=a(4),l=a(7),u=a(5),h=a(6),m=a(8),p=(a(32),a(16)),g=a(10),v={background:"#344955"},d={margin:"0 0 0 10px",fontFamily:"Arial Black",color:"white"},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.state={isOpen:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.e,{light:!0,expand:"md",fixedTop:!0,style:v},r.a.createElement(g.f,{href:"/"},r.a.createElement("h1",{style:d},"CryptoCoin Viewer")),r.a.createElement(g.d,{className:"ml-auto",navbar:!0},r.a.createElement("select",{id:"coin",onChange:this.handleChange},r.a.createElement("option",{value:"BTC"},"Bitcoin"),r.a.createElement("option",{value:"ETH"},"Ethereum"),r.a.createElement("option",{value:"IOTA"},"IOTA"),r.a.createElement("option",{value:"XRP"},"Ripple"),r.a.createElement("option",{value:"XLM"},"Stellar")))))}}]),t}(r.a.Component),f={background:"#F9AA33"},y={color:"white",background:"#4A6572"},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(m.a)(Object(m.a)(a))),a.state={collapse:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){var e;return e=this.state.collapse?"OK!":"Psst...",r.a.createElement("div",null,r.a.createElement(g.a,{color:"primary",onClick:this.toggle,style:f},e),r.a.createElement(g.c,{isOpen:this.state.collapse},r.a.createElement(g.b,{style:y},"Don't worry about browser miners  :^]")))}}]),t}(n.Component),O={background:"#4A6572",borderTop:"1px solid black",textAlign:"right",position:"static",height:"40px",width:"100%",bottom:"0",color:"white",marginTop:"28px"},j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:O},r.a.createElement(E,null))}}]),t}(r.a.Component),x=a(19),k=a.n(x),S=a(20),C=a.n(S),w=a(21),A=a.n(w),X=a(22),Y=a.n(X),D=a(23),L=a.n(D),N={maxWidth:"100%",height:"auto"},T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.name;return"BTC"===t?e=k.a:"ETH"===t?e=C.a:"IOTA"===t?e=A.a:"XRP"===t?e=Y.a:"XLM"===t&&(e=L.a),r.a.createElement("div",null,r.a.createElement("img",{src:e,style:N,alt:"coin banner"}))}}]),t}(r.a.Component),B=a(24),H=a.n(B),P=(a(45),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getX",value:function(){var e=this.props.data;return{min:e[0].x,max:e[e.length-1].x}}},{key:"getY",value:function(){var e=this.props.data;return{min:e.reduce(function(e,t){return t.y<e?t.y:e},e[0].y),max:e.reduce(function(e,t){return t.y>e?t.y:e},e[0].y)}}},{key:"getSvgX",value:function(e){var t=this.props,a=t.svgWidth,n=t.yLabelSize;return n+e/this.getX().max*(a-n)}},{key:"getSvgY",value:function(e){var t=this.props,a=t.svgHeight,n=t.xLabelSize,r=this.getY();return((a-n)*r.max-(a-n)*e)/(r.max-r.min)}},{key:"makePath",value:function(){var e=this,t=this.props.data,a="M "+this.getSvgX(t[0].x)+" "+this.getSvgY(t[0].y)+" ";return a+=t.map(function(t,a){return"L "+e.getSvgX(t.x)+" "+e.getSvgY(t.y)+" "}).join(""),r.a.createElement("path",{className:"linechart_path",d:a})}},{key:"makeArea",value:function(){var e=this,t=this.props.data,a="M "+this.getSvgX(t[0].x)+" "+this.getSvgY(t[0].y)+" ";a+=t.map(function(t,a){return"L "+e.getSvgX(t.x)+" "+e.getSvgY(t.y)+" "}).join("");var n=this.getX(),i=this.getY();return a+="L "+this.getSvgX(n.max)+" "+this.getSvgY(i.min)+" L "+this.getSvgX(n.min)+" "+this.getSvgY(i.min)+" ",r.a.createElement("path",{className:"linechart_area",d:a})}},{key:"makeAxis",value:function(){var e=this.props.yLabelSize,t=this.getX(),a=this.getY();return r.a.createElement("g",{className:"linechart_axis"},r.a.createElement("line",{x1:this.getSvgX(t.min)-e,y1:this.getSvgY(a.min),x2:this.getSvgX(t.max),y2:this.getSvgY(a.min),strokeDasharray:"5"}),r.a.createElement("line",{x1:this.getSvgX(t.min)-e,y1:this.getSvgY(a.max),x2:this.getSvgX(t.max),y2:this.getSvgY(a.max),strokeDasharray:"5"}))}},{key:"makeLabels",value:function(){var e=this.props,t=e.svgHeight,a=e.svgWidth,n=e.xLabelSize,i=e.yLabelSize;return r.a.createElement("g",{className:"linechart_label"},r.a.createElement("text",{transform:"translate(".concat(i/2,", 20)"),textAnchor:"middle"},this.getY().max.toLocaleString("us-EN",{style:"currency",currency:"EUR"})),r.a.createElement("text",{transform:"translate(".concat(i/2,", ").concat(t-n-5,")"),textAnchor:"middle"},this.getY().min.toLocaleString("us-EN",{style:"currency",currency:"EUR"})),r.a.createElement("text",{transform:"translate(".concat(i,", ").concat(t,")"),textAnchor:"start"},this.props.data[0].d),r.a.createElement("text",{transform:"translate(".concat(a,", ").concat(t,")"),textAnchor:"end"},this.props.data[this.props.data.length-1].d))}},{key:"render",value:function(){var e=this.props,t=e.svgHeight,a=e.svgWidth;return r.a.createElement("svg",{width:a,height:t,viewBox:"0 0 ".concat(a," ").concat(t),className:"linechart"},r.a.createElement("g",null,this.makeAxis(),this.makePath(),this.makeArea(),this.makeLabels()))}}]),t}(r.a.Component));P.defaultProps={data:[],color:"#2196F3",pointRadius:5,svgHeight:400,svgWidth:900,xLabelSize:20,yLabelSize:80};var R=P,_=(a(47),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={fetchingData:!0,data:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR").then(function(e){return e.json()}).then(function(t){var a=[],n=0;for(var r in t.bpi)a.push({d:H()(r).format("MMM DD"),p:t.bpi[r].toLocaleString("us-EN",{style:"currency",currency:"USD"}),x:n,y:t.bpi[r]}),n++;e.setState({data:a,fetchingData:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"30 Day Bitcoin Price Chart")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"chart"},this.state.fetchingData?null:r.a.createElement(R,{data:this.state.data,onChartHover:function(t,a){return e.handleChartHover(t,a)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"coindesk"}," Powered by ",r.a.createElement("a",{href:"http://www.coindesk.com/price/",rel:"noopener noreferrer",target:"_blank"},"CoinDesk"))))}}]),t}(r.a.Component)),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={coin:"BTC"},a.setCrypto=a.setCrypto.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"setCrypto",value:function(e){this.setState({coin:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{name:this.state.coin,onChange:this.setCrypto}),r.a.createElement(T,{name:this.state.coin}),r.a.createElement(p.a,{name:this.state.coin}),r.a.createElement(_,null),r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,2,1]]]);
//# sourceMappingURL=main.d8ab4df3.chunk.js.map