(this.webpackJsonpreact_course=this.webpackJsonpreact_course||[]).push([[5],{291:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(50),a=r(51),o=r(53),u=r(52),s=r(0),i=r.n(s),l=r(10),c=r(20),f=function(e){var t=function(t){Object(o.a)(s,t);var r=Object(u.a)(s);function s(){return Object(n.a)(this,s),r.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(l.a,{to:"/login"})}}]),s}(i.a.Component);return Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},292:function(e,t,r){e.exports={main:"users_main__2f0XO",title:"users_title__KNHS2",user_container:"users_user_container__3c58b",image:"users_image__24DsA",btn:"users_btn__puvTJ",user_wrapper:"users_user_wrapper__2wjFC",user_info:"users_user_info__2yJxi",user_about:"users_user_about__2wtfk",user_address:"users_user_address__2FmC7",user_country:"users_user_country__12Rgm",user_name:"users_user_name__1d8Kq",logo_wrapper:"users_logo_wrapper__2bC_g",active:"users_active__1QTRp"}},293:function(e,t,r){"use strict";var n=r(93);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},302:function(e,t,r){e.exports=r.p+"static/media/cat.9d183674.jpg"},304:function(e,t,r){"use strict";r.r(t);var n=r(50),a=r(51),o=r(53),u=r(52),s=r(0),i=r.n(s),l=r(20),c=r(128),f=r(292),p=r.n(f),g=r(293),m=function(e){var t=e.totalItemsCount,r=e.pageSize,n=e.currentPage,a=e.onPageChange,o=e.portionSize,u=void 0===o?8:o,l=Math.ceil(t/r),c=[],f=Object(s.useState)(0),m=Object(g.a)(f,2),_=m[0],d=m[1];for(var h=1;h<=l;h++)c.push(h);return i.a.createElement("div",null,i.a.createElement("button",{disabled:0===_,onClick:function(){d(_-1)}},"Prev"),c.filter((function(e,t){return t+1<=(_+1)*u&&t+1>_*u})).map((function(e){return i.a.createElement("span",{className:n===e&&p.a.active||"",onClick:function(){return a(e)},key:e},e," ")})),i.a.createElement("button",{disabled:_*u>=l-u,onClick:function(){d(_+1)}},"Next"))},_=r(302),d=r.n(_),h=r(13),v=function(e){var t=e.user,r=e.followingInProgress,n=e.unfollow,a=e.follow;return i.a.createElement("div",{className:p.a.user_container},i.a.createElement("div",{className:p.a.logo_wrapper},i.a.createElement(h.b,{to:"/profile/"+t.id}," ",i.a.createElement("img",{className:p.a.image,src:null!=t.photos.small?t.photos.small:d.a,alt:"logo"})),t.followed?i.a.createElement("button",{className:p.a.btn,disabled:r.some((function(e){return e===t.id})),onClick:function(){return n(t.id)}},"Unfollow"):i.a.createElement("button",{className:p.a.btn,disabled:r.some((function(e){return e===t.id})),onClick:function(){return a(t.id)}},"Follow")),i.a.createElement("div",{className:p.a.user_wrapper},i.a.createElement("div",{className:p.a.user_info},i.a.createElement("div",{className:p.a.user_name},t.name),i.a.createElement("div",{className:p.a.user_address},i.a.createElement("div",{className:"style.user_country"},"user.location.country",","),i.a.createElement("div",null,"user.location.city"))),i.a.createElement("div",{className:p.a.user_about},t.status)))},b=function(e){return i.a.createElement("div",null,i.a.createElement(m,{currentPage:e.currentPage,onPageChange:e.onPageChange,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),i.a.createElement("h2",{className:p.a.title},"Users"),e.users.map((function(t){return i.a.createElement(v,{key:t.id,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow,user:t})})))},y=r(84),w=r(291),P=r(8);function E(e,t){return e===t}function C(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,a=0;a<n;a++)if(!e(t[a],r[a]))return!1;return!0}function j(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}var S=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=0,u=n.pop(),s=j(n),i=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(r)),l=e((function(){for(var e=[],t=s.length,r=0;r<t;r++)e.push(s[r].apply(null,arguments));return i.apply(null,e)}));return l.resultFunc=u,l.dependencies=s,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,r=null,n=null;return function(){return C(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}));var O=S((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),N=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalCount},A=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},z=function(e){return e.usersPage.followingInProgress},U=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(e=t.call.apply(t,[this].concat(o))).onPageChange=function(t){e.props.setCurrentPage(t),e.props.requestUsers(e.props.pageSize,t)},e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null," ",this.props.isFetching?i.a.createElement(y.a,null):null,i.a.createElement(b,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChange:this.onPageChange,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),r}(s.Component);t.default=Object(P.d)(Object(l.b)((function(e){return{users:O(e),pageSize:N(e),totalUsersCount:k(e),currentPage:A(e),isFetching:I(e),followingInProgress:z(e)}}),{follow:c.b,unfollow:c.e,setCurrentPage:c.d,requestUsers:c.c}),w.a)(U)}}]);
//# sourceMappingURL=5.57ac7e84.chunk.js.map