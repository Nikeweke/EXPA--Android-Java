(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{197:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p"),t._m(1),a("p"),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://startandroid.ru/ru/courses/architecture-components/27-course/architecture-components/529-urok-5-room-osnovy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial"),a("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[a("strong",[t._v("Room")]),t._v(" - являеться частью "),a("a",{attrs:{href:"https://github.com/googlesamples/android-architecture-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Architecture Components"),a("OutboundLink")],1),t._v(" - это коллекция библиотек, которая помогает вам разрабатывать надежные, тестируемые и поддерживаемые приложения.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("Room имеет три основных компонента:")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("br"),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),a("br"),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),a("br"),t._v(" "),t._m(21),t._v(" "),t._m(22),a("br")])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"room-orm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#room-orm","aria-hidden":"true"}},[this._v("#")]),this._v(" Room ORM")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#intro"}},[this._v("Intro")])]),s("li",[s("a",{attrs:{href:"#dependencies"}},[this._v("Dependencies")])]),s("li",[s("a",{attrs:{href:"#basics"}},[this._v("Basics")])]),s("li",[s("a",{attrs:{href:"#entity"}},[this._v("Entity")])]),s("li",[s("a",{attrs:{href:"#dao"}},[this._v("DAO")])]),s("li",[s("a",{attrs:{href:"#database"}},[this._v("Database")])]),s("li",[s("a",{attrs:{href:"#using"}},[this._v("Using")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[this._v("#")]),this._v(" Intro")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Room")]),this._v(" - это постоянная библиотека, которая обеспечивает уровень абстракции поверх SQLite, чтобы обеспечить свободный доступ к базе данных, в то же время используя все возможности SQLite. Это ORM для SQLite.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Почему "),s("strong",[this._v("Room")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Предлагает проверку во время компиляции.")]),t._v(" "),a("li",[t._v("Хорошо сочетается с LiveData, мониторинг в реальном времени с использованием LiveData.")]),t._v(" "),a("li",[t._v("Тестирование различных компонентов в комнате легко.")]),t._v(" "),a("li",[t._v("Простота в использовании и реализации.")]),t._v(" "),a("li",[t._v("Меньше кода по работе с БД")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencies")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("app/build.gradle")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("apply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.android.application'")]),t._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kotlin-android'")]),t._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kotlin-android-extensions'")]),t._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kotlin-kapt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \x3c!-- dont forget this line")]),t._v("\n\nandroid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" \n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Room ORM")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" room_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"1.1.1"')]),t._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"android.arch.persistence.room:runtime:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("room_version")]),t._v('"')]),t._v("\n    kapt "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"android.arch.persistence.room:compiler:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("room_version")]),t._v('"')]),t._v("\n    annotationProcessor "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"android.arch.persistence.room:compiler:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("room_version")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    implementation "android.arch.persistence.room:rxjava2:$room_version"  // optional - RxJava support for Room')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    implementation "android.arch.persistence.room:guava:$room_version"  // optional - Guava support for Room, including Optional and ListenableFuture')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    testImplementation "android.arch.persistence.room:testing:$room_version"   // Test helpers')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[this._v("#")]),this._v(" Basics")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Entity")]),t._v(" - это как тип данных")]),t._v(" "),a("li",[a("strong",[t._v("DAO")]),t._v(" - (Data Access Object) - это как модель, содержит методы")]),t._v(" "),a("li",[a("strong",[t._v("Database")]),t._v(" - класс по работе с БД")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"entity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entity","aria-hidden":"true"}},[this._v("#")]),this._v(" Entity")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Аннотацией "),s("strong",[this._v("Entity")]),this._v(" нам необходимо пометить объект, который мы хотим хранить в базе данных.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Entity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tableName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"employees"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EmployeeEntity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@PrimaryKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("autoGenerate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@ColumnInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@ColumnInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"surname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" surname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@ColumnInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Int\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// это позволяет создать пустой экземпляр")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Класс должен быть аннотирован с помощью "),a("code",[t._v("@Entity")]),t._v(", именно так Room определяет. Для каждого создаваемого объекта создается таблица с соответствующей базой данных. По умолчанию Room создает столбец для каждого поля, но вы можете избежать этого для нескольких полей с помощью игнорирования аннотации.")])]),t._v(" "),a("li",[a("p",[t._v("Каждый объект должен определить как минимум 1 первичный ключ. Вам нужно аннотировать поле аннотацией PrimaryKey.")])]),t._v(" "),a("li",[a("p",[t._v("По умолчанию Room использует имя класса в качестве имени таблицы. Вы можете дать собственное имя, используя свойство "),a("code",[t._v("tableName")]),t._v(".")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dao","aria-hidden":"true"}},[this._v("#")]),this._v(" DAO")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("В объекте "),s("strong",[this._v("DAO")]),this._v(" мы будем описывать методы для работы с базой данных.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Dao")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" EmployeeDao "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM employees"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EmployeeEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM employees WHERE id = :id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Long"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmployeeEntity\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Insert")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmployeeEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Update")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmployeeEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Delete")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employee"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmployeeEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[this._v("#")]),this._v(" Database")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Аннотацией "),s("code",[this._v("@Database")]),this._v(" помечаем основной класс по работе с базой данных. Этот класс должен быть абстрактным и наследовать RoomDatabase.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Не забывайте добавлять сущности в список entities = arrayOf(...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation builtin"}},[t._v("@Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entities "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arrayOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EmployeeEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CarEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" AppDatabase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RoomDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// обозначаем все DAO здесь")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("employeeDao")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmployeeDao\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("carDao")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CarDao\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("companion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AppDatabase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Room"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("databaseBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t\tcontext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\t\t\t\tAppDatabase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp.db"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"using"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using","aria-hidden":"true"}},[this._v("#")]),this._v(" Using")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-Kotlin extra-class"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MainActivity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AppCompatActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("companion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" TAG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mainer"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lateinit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" DB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AppDatabase\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInstanceState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_scrolling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Создаем БД")]),t._v("\n\t\tDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  AppDatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Работаем в потоке, иначе могут быть тормоза")]),t._v("\n\t\tthread "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// создаем DAO  ")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" employeeDao "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("employeeDao")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// создаем экземпляр и заполняем")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" employee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EmployeeEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\temployee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Smith"')]),t._v("\n\t\t\temployee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// вставляем запись")]),t._v("\n\t\t\temployeeDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// вывод всех записей")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" employees"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EmployeeEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" employeeDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// вывод одной записи")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" employee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" employeeDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// обновление записи, которая была создана")]),t._v("\n\t\t\temployee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Silvestr Stalone"')]),t._v("\n\t\t\temployee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n\t\t\temployeeDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// удаление записи")]),t._v("\n\t\t\temployeeDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("employee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="room-orm.md";s.default=e.exports}}]);