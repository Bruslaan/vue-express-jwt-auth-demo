(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(t,o,n){},107:function(t,o,n){"use strict";var r=n(106);n.n(r).a},108:function(t,o,n){"use strict";n.r(o);var r={data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/login")})}}},u=(n(107),n(4)),i=Object(u.a)(r,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("mu-appbar",{staticStyle:{width:"100%"}},[n("router-link",{attrs:{to:"/"}},[t._v("X-Blog")]),t._v(" "),t.$store.getters.isLoggedIn?n("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.logout},slot:"right"},[t._v("Logout")]):n("mu-button",{attrs:{slot:"right",flat:""},on:{click:function(o){return t.$router.push("/login")}},slot:"right"},[t._v("Login")])],1)},[],!1,null,null,null);o.default=i.exports}}]);