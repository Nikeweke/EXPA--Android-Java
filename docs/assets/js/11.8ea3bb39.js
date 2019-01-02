(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cbeust/klaxon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Klaxon - parse data to types"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/kittinunf/Fuel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fuel - http library"),a("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"http-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" Http requests")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#add-permission-to-make-http-androidmanifest-xml"}},[this._v("Add permission to make HTTP AndroidManifest.xml")])]),s("li",[s("a",{attrs:{href:"#simple-http-request"}},[this._v("Simple Http request")])]),s("li",[s("a",{attrs:{href:"#fuel-http-request"}},[this._v("Fuel http request")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"add-permission-to-make-http-androidmanifest-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-permission-to-make-http-androidmanifest-xml","aria-hidden":"true"}},[this._v("#")]),this._v(" Add permission to make HTTP "),s("code",[this._v("AndroidManifest.xml")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Permission for making Http requests --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.INTERNET"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("application")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"simple-http-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-http-request","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple Http request")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[this._v("implementation "),s("span",{attrs:{class:"token string"}},[this._v("'com.beust:klaxon:5.0.1'")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('// без выполнения в потоке будет ошибка "android.os.NetworkOnMainThreadException",')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// потому что операция выполняеться не мгновенно, а блокирует основной поток")]),t._v("\nthread "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/todos/1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Log"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainActivity"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logTag"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// определяем класс по которому распарсим ответку")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Task")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userId"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" id"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" title"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" completed"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" parsedResult "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Klaxon")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Task"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("!!")]),t._v("\n  Log"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainActivity"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logTag"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("parsedResult"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userId"),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"fuel-http-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fuel-http-request","aria-hidden":"true"}},[this._v("#")]),this._v(" Fuel http request")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[this._v("implementation "),s("span",{attrs:{class:"token string"}},[this._v("'com.github.kittinunf.fuel:fuel-android:1.16.0'")]),this._v("\n\n"),s("span",{attrs:{class:"token comment"}},[this._v("// для переобрзавание ответов в обьекты классов")]),this._v("\n"),s("span",{attrs:{class:"token comment"}},[this._v("// implementation 'com.github.kittinunf.fuel:fuel-gson:1.16.0'  ")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kittinunf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fuel"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("httpGet\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kittinunf"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Result\n\n"),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/todos/1"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("httpGet")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("responseString")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// request  - info about Request")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// response - info about Response")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// result - is object of class Result")]),t._v("\n    \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("is")]),t._v(" Result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Failure "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" ex "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getException")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Log"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainActivity"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logTag"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("ex"),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("is")]),t._v(" Result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Success "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Log"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainActivity"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logTag"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"'),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),a("span",{attrs:{class:"token keyword"}},[t._v("data")]),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])}],!1,null,null,null);e.options.__file="http-requests.md";s.default=e.exports}}]);