(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{175:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"coroutines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coroutines","aria-hidden":"true"}},[t._v("#")]),t._v(" Coroutines")]),t._v(" "),a("p",[t._v("Библиотека для работы с потоками в Kotlin")]),t._v(" "),a("h3",{attrs:{id:"dependencies-and-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-and-import","aria-hidden":"true"}},[t._v("#")]),t._v(" Dependencies and Import")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/build.gradle")]),t._v("\ndependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"org.jetbrains.kotlinx:kotlinx-coroutines-android:1.0.1"')]),t._v("\n")])])]),a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" kotlinx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coroutines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])])]),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Блокирующий поток")]),t._v(" "),a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("runBlocking "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// блокирует главный UI поток")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someHardWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[t._v("Запустить в UI thread")]),t._v(" "),a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Запустить в главном потоке UI")]),t._v("\nGlobalScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("launch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dispatchers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// не блокирует главный поток, а просто простаивает, и идет дальше")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("someHardWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Всего диспетчеров 4:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Dispatchers.Main")]),t._v(" - Диспетчер, ограниченный главным потоком, работающим с объектами пользовательского интерфейса. Этот диспетчер может быть использован либо напрямую, либо через фабрику MainScope. Обычно такой диспетчер является однопоточным.")]),t._v(" "),a("li",[a("strong",[t._v("Dispatchers.Unconfined")]),t._v(" - Диспетчер, который не ограничен каким-либо конкретным потоком. Он выполняет начальное продолжение сопрограммы непосредственно в текущем кадре вызова и позволяет сопрограмме возобновить работу в любом потоке, который используется соответствующей функцией приостановки, без указания какой-либо конкретной политики потоков. Примечание: используйте с особой осторожностью, не для общего кода.")]),t._v(" "),a("li",[a("strong",[t._v("Dispatchers.IO")]),t._v(" - "),a("code",[t._v("CoroutineDispatcher")]),t._v(", предназначенный для разгрузки блокирующих задач ввода-вывода в общий пул потоков.")]),t._v(" "),a("li",[a("strong",[t._v("Dispatchers.Default")]),t._v(" - "),a("code",[t._v("CoroutineDispatcher")]),t._v(" по умолчанию, который используется всеми стандартными сборщиками, такими как "),a("code",[t._v("launch")]),t._v(", "),a("code",[t._v("async")]),t._v(" и т.д. Если в их контексте не указан ни диспетчер, ни какой-либо другой "),a("code",[t._v("ContinuationInterceptor")]),t._v(".")])]),t._v(" "),a("p",[a("code",[t._v("Async")])]),t._v(" "),a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[t._v("GlobalScope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("launch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dispatchers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  async "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initAbonsSpinner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="coroutines.md";s.default=e.exports}}]);