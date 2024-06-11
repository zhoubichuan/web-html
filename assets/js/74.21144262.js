(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{481:function(a,s,e){"use strict";e.r(s);var t=e(2),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"四-逐帧动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-逐帧动画"}},[a._v("#")]),a._v(" 四.逐帧动画")]),a._v(" "),s("p",[a._v("前一小节我们花了很大的篇幅去讲解「补间动画」的开发，除了因为它最常见，还因为其中间的许多实现思路（如「动效的审查与分解」、「基于 AE 动效稿还原动画」）同样适用于本小节将要介绍的另一种常见的基础动画形式 —— 「逐帧动画」。")]),a._v(" "),s("h2",{attrs:{id:"什么是逐帧动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是逐帧动画"}},[a._v("#")]),a._v(" 什么是逐帧动画")]),a._v(" "),s("p",[a._v("逐帧动画的英文名字是 Frame-By-Frame Animation，其在维基百科中有如下定义：")]),a._v(" "),s("blockquote",[s("p",[a._v("定格动画，又名逐帧动画，是一种动画技术，其原理即将每帧不同的图像连续播放，从而产生动画效果。")])]),a._v(" "),s("p",[a._v("简而言之，逐帧动画有两个要素：")]),a._v(" "),s("p",[a._v("（1）相关联的不同图像，即动画帧"),s("br"),a._v("\n（2）连续播放")]),a._v(" "),s("p",[a._v("逐帧动画最经典的例子，莫过于手翻书了。动画帧绘制在书本的不同页上，通过手动翻页来实现连续播放：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bde4366d4d605?w=480&h=270&f=gif&s=7498666",alt:"逐帧动画"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bde4c9494ca83?w=500&h=281&f=gif&s=943006",alt:"逐帧动画"}})]),a._v(" "),s("p",[s("em",[a._v("（图片来源："),s("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_67157b2a0102vcx3.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《一起翻一翻，手翻书的前世今生》"),s("OutboundLink")],1),a._v("）")])]),a._v(" "),s("h2",{attrs:{id:"逐帧动画的前端实现方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逐帧动画的前端实现方案"}},[a._v("#")]),a._v(" 逐帧动画的前端实现方案")]),a._v(" "),s("p",[a._v("在细聊 CSS3 逐帧动画之前，我们先了解下前端实现逐帧动画的几种方案。")]),a._v(" "),s("h3",{attrs:{id:"_1-直接使用-gif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接使用-gif"}},[a._v("#")]),a._v(" 1. 直接使用 GIF")]),a._v(" "),s("p",[a._v("GIF 可以有多个动画帧，连续播放是其自身属性，是否循环也是由其本身决定的。")]),a._v(" "),s("p",[a._v("GIF 往往用来实现小细节动画，成本较低、使用方便、兼容性好，但同时也存在画质低、交互不灵活等问题。")]),a._v(" "),s("h3",{attrs:{id:"_2-使用-javascript-控制动画播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-javascript-控制动画播放"}},[a._v("#")]),a._v(" 2. 使用 JavaScript 控制动画播放")]),a._v(" "),s("p",[a._v("将动画帧合并成雪碧图，放到 "),s("code",[a._v("background-image")]),a._v(" 中，通过 JavaScript 改变 "),s("code",[a._v("background-position")]),a._v(" 的值来实现动画的播放。")]),a._v(" "),s("p",[a._v("使用 JavaScript 实现逐帧动画，兼容性佳，且交互灵活。")]),a._v(" "),s("h3",{attrs:{id:"_3-使用-canvas-及相关库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-canvas-及相关库"}},[a._v("#")]),a._v(" 3. 使用 Canvas 及相关库")]),a._v(" "),s("p",[a._v("将动画帧绘制到 Canvas 上，通过不断地重绘即可实现逐帧动画。"),s("a",{attrs:{href:"https://www.createjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CreateJS"),s("OutboundLink")],1),a._v("、"),s("a",{attrs:{href:"http://pixijs.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pixi.js"),s("OutboundLink")],1),a._v(" 等库都提供了成熟的方案。")]),a._v(" "),s("p",[a._v("使用 Canvas 可以利用硬件加速，功能强大，操作灵活，有丰富的类库，但学习成本较高，且老式浏览器不兼容 Canvas。")]),a._v(" "),s("h3",{attrs:{id:"_4-使用-css3-阶梯函数-steps-number-of-steps-direction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用-css3-阶梯函数-steps-number-of-steps-direction"}},[a._v("#")]),a._v(" 4. 使用 CSS3 阶梯函数 "),s("code",[a._v("steps(number_of_steps, direction)")])]),a._v(" "),s("p",[a._v("CSS3 使用 "),s("code",[a._v("animation-timing-function")]),a._v(" 的阶梯函数 "),s("code",[a._v("steps(number_of_steps, direction)")]),a._v(" 来实现逐帧动画。")]),a._v(" "),s("blockquote",[s("p",[a._v("在实际工作过程中，开发「逐帧动画」最为常见的两种方式是第 3 和 4 种，CSS3 Animation 兼容性良好，相对于 JavaScript，CSS3 逐帧动画使用简单，且开发效率更高；而 Canvas 因为其性能优势，帧与帧之间切换的衔接度更高，适合实现帧数或尺寸（宽高）较大的逐帧动画。")])]),a._v(" "),s("h2",{attrs:{id:"案例实战-1-利用-css3-实现逐帧动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例实战-1-利用-css3-实现逐帧动画"}},[a._v("#")]),a._v(" 案例实战 1 - 利用 CSS3 实现逐帧动画")]),a._v(" "),s("p",[a._v("与使用 JavaScript 实现相同，通过 CSS3 实现逐帧动画时，也是将动画帧放到 "),s("code",[a._v("background-image")]),a._v(" 中。")]),a._v(" "),s("p",[a._v("逐帧动画往往有多个不同的动画帧，可以直接通过更改 "),s("code",[a._v("background-image")]),a._v(" 的值实现帧的切换，但多个图片文件会带来多个 HTTP 请求，且不利于文件的管理。")]),a._v(" "),s("p",[a._v("比较妥当的做法是，将所有的动画帧合并成一张雪碧图（sprite），通过改变 "),s("code",[a._v("background-position")]),a._v(" 的值来实现动画帧切换。因此，逐帧动画也被称为“精灵动画（sprite animation）”。")]),a._v(" "),s("p",[a._v("下面以京东到家的触屏页面"),s("a",{attrs:{href:"http://jdc.jd.com/fd/promote/201601/djnianhuo/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《年货送到家》"),s("OutboundLink")],1),a._v("中的一个场景为例，为大家讲解如何利用 CSS3 来实现逐帧动画。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bdf0064d07c2b?w=260&h=254&f=gif&s=16600",alt:"最终效果"}})]),a._v(" "),s("h3",{attrs:{id:"步骤-1-将动画帧合并为雪碧图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-将动画帧合并为雪碧图"}},[a._v("#")]),a._v(" 步骤 1 - 将动画帧合并为雪碧图")]),a._v(" "),s("p",[a._v("动画帧的合并方法有很多，可以使用图片处理软件、在线雪碧图工具、自动化脚本等。这里将介绍 Photoshop 中的操作。")]),a._v(" "),s("ol",[s("li",[a._v("准备好需要合并的动画帧，这里使用的动画帧尺寸为 200 x 206")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bde8f28c95485?w=575&h=360&f=png&s=83213",alt:"动画帧"}})]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("打开 Photoshop - 文件 - 自动 - 联系表 II，选取所有动画帧，设置文档尺寸，注意红框部分取消勾选")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bdea096ca7b71?w=696&h=787&f=png&s=128002",alt:"动画帧"}})]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("背景图层不可见，导出雪碧图并命名为 p8.png")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bdeab78d69a82?w=292&h=378&f=png&s=26077",alt:"动画帧"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bdeb499e492c3?w=1096&h=852&f=png&s=209765",alt:"动画帧"}})]),a._v(" "),s("p",[a._v("此时，我们可以得到如下的雪碧图 p8.png：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bdebc05d489f4?w=465&h=525&f=png&s=75943",alt:"雪碧图"}})]),a._v(" "),s("h3",{attrs:{id:"步骤-2-元素定位并设置背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-元素定位并设置背景"}},[a._v("#")]),a._v(" 步骤 2 - 元素定位并设置背景")]),a._v(" "),s("p",[a._v("元素的尺寸需与动画帧的尺寸相同/等比例，将雪碧图放到元素的 "),s("code",[a._v("background-image")]),a._v(" 中：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('.page_key {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  width: 200px;\n  height: 206px;\n  background-image: url("../img/p8.png");\n}\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"步骤-3-使用-steps-实现动画播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-使用-steps-实现动画播放"}},[a._v("#")]),a._v(" 步骤 3 - 使用 "),s("code",[a._v("steps")]),a._v(" 实现动画播放")]),a._v(" "),s("p",[a._v("通过查看 W3C 文档，可知 "),s("code",[a._v("steps(number_of_steps, direction)")]),a._v(" 指定了一个阶梯函数，包含两个参数：")]),a._v(" "),s("ul",[s("li",[a._v("第一个参数指定了函数中的间隔数量（必须是正整数）")]),a._v(" "),s("li",[a._v("第二个参数可选，指定在每个间隔的起点或是终点发生阶跃变化，接受 "),s("code",[a._v("start")]),a._v(" 和 "),s("code",[a._v("end")]),a._v(" 两个值，默认为 "),s("code",[a._v("end")])])]),a._v(" "),s("p",[a._v("可以通过下图更深入地理解 "),s("code",[a._v("steps")]),a._v(" 函数：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bded1cb1b7ee3?w=507&h=517&f=png&s=11321",alt:"steps函数"}})]),a._v(" "),s("p",[s("em",[a._v("（图片来源："),s("a",{attrs:{href:"https://www.w3.org/TR/css3-transitions/",target:"_blank",rel:"noopener noreferrer"}},[a._v("W3C"),s("OutboundLink")],1),a._v("）")])]),a._v(" "),s("p",[a._v("我们可以通过两种写法来实现例子中的逐帧动画，下面是第一种写法。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/* 写法一 */\n.page_key {\n  animation: p8 steps(1,end) 1.5s infinite;\n}\n@keyframes p8 {\n  0% {background-position: 0 0;}\n  33.33333% {background-position: 0 -206px;}\n  66.66667% {background-position: 0 -412px;}\n  100% {background-position: 0 -618px;}\n}\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("这里可能有读者疑惑，"),s("code",[a._v("steps")]),a._v(" 的第一个参数为什么是 1？")]),a._v(" "),s("p",[a._v("前文中提到，"),s("code",[a._v("steps")]),a._v(" 是 "),s("code",[a._v("animation-timing-function")]),a._v(" 的一个属性值，在 "),s("a",{attrs:{href:"https://www.w3.org/TR/css3-animations/#animation-timing-function-property",target:"_blank",rel:"noopener noreferrer"}},[a._v("W3C"),s("OutboundLink")],1),a._v(" 中有如下说明：")]),a._v(" "),s("blockquote",[s("p",[a._v("For a keyframed animation, the ‘animation-timing-function’ applies between keyframes, not over the entire animation.")])]),a._v(" "),s("p",[a._v("也就是说，"),s("code",[a._v("animation-timing-function")]),a._v(" 应用于两个关键帧（状态）之间，而非整个动画。在上面的 "),s("code",[a._v("keyframes")]),a._v(" 中，我们已经把每个关键帧都写出来了，所以两个关键帧之间的间隔是 1。")]),a._v(" "),s("p",[a._v("既然 "),s("code",[a._v("steps")]),a._v(" 第一个参数是指函数的间隔数量，那么我们就可以把 "),s("code",[a._v("keyframes")]),a._v(" 的计算直接交给 "),s("code",[a._v("steps")]),a._v(" 来完成。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/* 写法二 */\n.page_key{\n  animation: p8 steps(3,end) 1.5s infinite;\n}\n@keyframes p8 {\n  100% {background-position: 0 -618px;}\n}\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("上述两种写法最终的动画效果是相同的：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161bdf0064d07c2b?w=260&h=254&f=gif&s=16600",alt:"最终效果"}})]),a._v(" "),s("p",[a._v("至此，我们便实现了一个简单的 CSS3 逐帧动画，点击"),s("a",{attrs:{href:"http://jdc.jd.com/h5/daojia-demo/",target:"_blank",rel:"noopener noreferrer"}},[a._v("查看 DEMO"),s("OutboundLink")],1),a._v(" 或扫描二维码：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/14/16224d442f9f2799?w=280&h=280&f=png&s=1534",alt:"《年货送到家》"}})]),a._v(" "),s("p",[s("em",[s("a",{attrs:{href:"http://jdc.jd.com/h5/daojia-demo/",target:"_blank",rel:"noopener noreferrer"}},[a._v("（京东年货到家逐帧动画 DEMO）"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"css3-逐帧动画的一些技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3-逐帧动画的一些技巧"}},[a._v("#")]),a._v(" CSS3 逐帧动画的一些技巧")]),a._v(" "),s("p",[a._v("CSS3 实现逐帧动画虽然简单，但也不乏技巧。")]),a._v(" "),s("h4",{attrs:{id:"_1-step-start-与-step-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-step-start-与-step-end"}},[a._v("#")]),a._v(" 1. "),s("code",[a._v("step-start")]),a._v(" 与 "),s("code",[a._v("step-end")])]),a._v(" "),s("p",[a._v("除了 "),s("code",[a._v("steps")]),a._v(" 函数，"),s("code",[a._v("animation-timing-function")]),a._v(" 还有两个与逐帧动画相关的属性值 "),s("code",[a._v("step-start")]),a._v(" 与 "),s("code",[a._v("step-end")]),a._v("。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("step-start")]),a._v(" 等同于 "),s("code",[a._v("steps(1, start)")]),a._v("：动画执行时以开始端点为开始。")]),a._v(" "),s("li",[s("code",[a._v("step-end")]),a._v(" 等同于 "),s("code",[a._v("steps(1, end)")]),a._v("：动画执行时以结尾端点为开始。")])]),a._v(" "),s("h4",{attrs:{id:"_2-使用-sass-完成动画帧的计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-sass-完成动画帧的计算"}},[a._v("#")]),a._v(" 2. 使用 Sass 完成动画帧的计算")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/* 写法一 */\n@mixin frame($frameNum, $frameHeight) {\n  @for $i from 0 through $frameNum {\n    #{100/$frameNum*$i}% {background-position: 0 #{-$i*$frameHeight}px;}\n  }\n}\n/* 写法二 */\n@mixin frame($frameNum, $frameHeight) {\n  100% {background-position: 0 #{-$frameNum*$frameHeight}px;}\n}\n\n@keyframes p8 {\n  @include frame($frameNum: 3, $frameHeight: 206)\n}\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h4",{attrs:{id:"_3-移动端使用-rem-配合-scale-适配-防止动画抖动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-移动端使用-rem-配合-scale-适配-防止动画抖动"}},[a._v("#")]),a._v(" 3. 移动端使用 rem 配合 scale 适配，防止动画抖动")]),a._v(" "),s("p",[a._v("我们知道，"),s("code",[a._v("rem")]),a._v(" 的计算会存在误差，因此使用雪碧图时我们并不推荐用 "),s("code",[a._v("rem")]),a._v("。")]),a._v(" "),s("p",[a._v("如果是逐帧动画的话，由于计算的误差，可能会出现动画抖动的情况。")]),a._v(" "),s("p",[a._v("为了解决这个问题，可以参考以下的适配思路：")]),a._v(" "),s("ul",[s("li",[a._v("非逐帧动画部分，使用 "),s("code",[a._v("rem")]),a._v(" 做单位")]),a._v(" "),s("li",[a._v("逐帧动画部分，使用 "),s("code",[a._v("px")]),a._v(" 做单位，再结合 JavaScript 对动画部分使用 "),s("code",[a._v("scale")]),a._v(" 进行缩放")])]),a._v(" "),s("p",[a._v("另外也可以通过 SVG 来解决抖动的问题，有兴趣可移步"),s("a",{attrs:{href:"https://aotu.io/notes/2017/08/14/fix-sprite-anim/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《CSS 技巧：逐帧动画抖动解决方案》"),s("OutboundLink")],1),a._v(" 做进一步的了解。")]),a._v(" "),s("h2",{attrs:{id:"案例实战-2-利用-canvas-做一个会动的京东-joy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例实战-2-利用-canvas-做一个会动的京东-joy"}},[a._v("#")]),a._v(" 案例实战 2 - 利用 Canvas 做一个会动的京东 JOY")]),a._v(" "),s("p",[a._v("CSS3 实现的逐帧动画，如果它的帧数较多或尺寸较大时，移动端可能会存在渲染性能问题，此时建议改用 Canvas 实现。 相对于 CSS3 来说，Canvas 具有更高的学习成本，所以实际项目中推荐使用业务成熟的 Canvas 动画库，如 "),s("a",{attrs:{href:"https://www.createjs.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CreateJS"),s("OutboundLink")],1),a._v("、"),s("a",{attrs:{href:"http://pixijs.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pixi.js"),s("OutboundLink")],1),a._v(" 等。")]),a._v(" "),s("p",[a._v("下面我们以 "),s("a",{attrs:{href:"https://h5.m.jd.com/dev/oj4d4FHfrtsP4tqT7ukC9spRX85/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("「京东 JOY 福星会场 一一 八仙乐游记」"),s("OutboundLink")],1),a._v(" 中的其中一个动画为例，为大家讲解如何利用 Canvas 实现逐帧动画。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/14/162239dec61fe32a?w=320&h=320&f=gif&s=869595",alt:"上图"}})]),a._v(" "),s("h3",{attrs:{id:"步骤-1-准备动画帧所需的雪碧图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-准备动画帧所需的雪碧图"}},[a._v("#")]),a._v(" 步骤 1 - 准备动画帧所需的雪碧图")]),a._v(" "),s("p",[a._v("在前面的案例中我们介绍了通过 Photoshop 手动合成雪碧图的方式，这里我们使用 "),s("a",{attrs:{href:"https://www.codeandweb.com/texturepacker",target:"_blank",rel:"noopener noreferrer"}},[a._v("TexturePacker"),s("OutboundLink")],1),a._v(" 工具（付费软件，帧动画开发利器，值得购买）来更快地完成同样的事情。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/14/16223774fc46a5c7?w=2000&h=1362&f=png&s=455019",alt:"TexturePacker 用户界面"}})]),a._v(" "),s("p",[s("em",[a._v("（TexturePacker 用户界面）")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.codeandweb.com/texturepacker",target:"_blank",rel:"noopener noreferrer"}},[a._v("TexturePacker"),s("OutboundLink")],1),a._v(" 导出雪碧图的步骤如下：")]),a._v(" "),s("ol",[s("li",[a._v("将逐帧动画所有帧拖到 TexturePacker")]),a._v(" "),s("li",[a._v("选择逐帧动画的渲染载体（标记1）")]),a._v(" "),s("li",[a._v("根据需要设置其余配置，如：当雪碧图超过 1 张时，请选择 "),s("code",[a._v("Multipack")]),a._v(" 选项（标记2）")]),a._v(" "),s("li",[a._v("点击 Publish sprite sheet（标记4）即可导出雪碧图和相应渲染载体的数据（若有）")])]),a._v(" "),s("p",[a._v("预览逐帧动画的步骤：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("选择所有帧")]),a._v(" "),s("p",[a._v("选择左侧 Sprites 面板其中一帧，然后按 Cmd/Ctrl + A 全选所有帧；或者拖拽选择所有帧。")])]),a._v(" "),s("li",[s("p",[a._v("点击 Anim preview（标记3）")]),a._v(" "),s("p",[a._v("如果我们选了渲染载体为 "),s("strong",[a._v("EaselJS / CreateJS")]),a._v("， 其导出的 JSON 文件如下：")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n  "images": [\n    "hxr-0.png",\n    "hxr-1.png",\n    "hxr-2.png",\n    "hxr-3.png",\n    "hxr-4.png",\n    "hxr-5.png"\n  ],\n\n  "framerate": 20,\n  "frames": [\n    [1, 1, 519, 535, 0, -109, -499],\n    [522, 1, 514, 538, 0, -108, -499],\n    [1, 538, 514, 538, 0, -109, -499],\n    ...\n  ],\n\n  "animations": {\n    "花想容": { "frames": [45, 34, 36, 39, 41, 42, 43, 27, 44, 15, 30, 16, 17, 18, 21, 23, 24, 9, 12, 14, 19, 1, 2, 4, 5, 7, 10, 11, 13, 20, 31, 22, 25, 35, 28, 29, 32, 37, 38, 40, 33, 26, 8, 6, 0, 3] }\n  },\n\n  "texturepacker": [\n    "SmartUpdateHash: $TexturePacker:SmartUpdate:d81882f9ddc9b1a6b4cc21c262ac0125:4ebba912052ed522502e73edaa8a5333:c8130f68479de7028295f1ccf1a4ea15$",\n    "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"\n  ]\n}\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://www.codeandweb.com/texturepacker",target:"_blank",rel:"noopener noreferrer"}},[a._v("TexturePacker"),s("OutboundLink")],1),a._v(" 除了生成雪碧图，其导出的 JSON 文件其实还包含了逐帧动画所需的运行数据，只需结合渲染载体的相应 API 即可快速实现逐帧动画。")]),a._v(" "),s("h3",{attrs:{id:"步骤-2-实现动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-实现动画"}},[a._v("#")]),a._v(" 步骤 2 - 实现动画")]),a._v(" "),s("p",[a._v("以 CreateJS 为例。")]),a._v(" "),s("p",[a._v("准备 HTML:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<canvas id="hxr-canvas" width="526" height="536"></canvas>\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("准备 CreateJS 代码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('var hxrCanvas = document.getElementById("hxr-canvas")\nvar hxrStage = new createjs.Stage(hxrCanvas)\n\n// 将上 JSON 数据进行修改：如 "images" 和 "animations" 字段\nvar spriteSheet = new createjs.SpriteSheet({\n  "images": [\n    preload.getResult(\'hxr0\'),\n    preload.getResult(\'hxr1\'),\n    preload.getResult(\'hxr2\'),\n    preload.getResult(\'hxr3\'),\n    preload.getResult(\'hxr4\'),\n    preload.getResult(\'hxr5\'),\n  ],\n\n  "framerate": 20,\n  "frames": [\n    [1, 1, 519, 535, 0, -109, -499],\n    [522, 1, 514, 538, 0, -108, -499],\n    [1, 538, 514, 538, 0, -109, -499],\n    ...\n  ],\n\n  "animations": {\n    "play": { "frames": [45, 34, 36, 39, 41, 42, 43, 27, 44, 15, 30, 16, 17, 18, 21, 23, 24, 9, 12, 14, 19, 1, 2, 4, 5, 7, 10, 11, 13, 20, 31, 22, 25, 35, 28, 29, 32, 37, 38, 40, 33, 26, 8, 6, 0, 3] }\n  },\n})\n\nhxrSprite = new createjs.Sprite(spriteSheet)\nhxrSprite.x = 0\nhxrSprite.y = 0\nhxrStage.addChild(hxrSprite)\nhxrSprite.gotoAndPlay("play") // 播放指定的动作 "play"\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br")])]),s("p",[a._v("这样即可完成一个逐帧动画，"),s("a",{attrs:{href:"https://h5.m.jd.com/dev/22Vp3Q5pX2rvuPwDYeDWjPoF3Ahf/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击体验 DEMO"),s("OutboundLink")],1),a._v(" ，或扫描二维码：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/14/16223a3039225360?w=280&h=280&f=png&s=2021",alt:"Canvas 逐帧动画 DEMO"}})]),a._v(" "),s("p",[s("em",[s("a",{attrs:{href:"https://h5.m.jd.com/dev/22Vp3Q5pX2rvuPwDYeDWjPoF3Ahf/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("（ Canvas 逐帧动画 DEMO ）"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"相关资源下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关资源下载"}},[a._v("#")]),a._v(" 相关资源下载")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://omwfrl50f.bkt.clouddn.com/xiaocezi/frame.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("逐帧动画源文件"),s("OutboundLink")],1),a._v("（用于 TexturePacker 合成）")]),a._v(" "),s("li",[s("a",{attrs:{href:"http://omwfrl50f.bkt.clouddn.com/xiaocezi/hxr.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("TexturePacker 导出后的文件"),s("OutboundLink")],1),a._v("（适用于未购买 TexturePacker 的读者）")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://coding.net/u/Jcc/p/canvas-sprite/git?public=true",target:"_blank",rel:"noopener noreferrer"}},[a._v("案例 2 完整项目源码"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),s("p",[a._v("本小节结合案例为大家讲解了两种最为常见的逐帧动画实现方案：「基于 CSS3 Animation 实现逐帧动画」和「基于 Canvas 实现逐帧动画」。考虑到 Canvas 的方案需要引入第三方的脚本库（以 CreateJS 为例，引入的脚本库体积大小在 190 多 KB，GZIP 后仍然有 50 多 KB），在实际工作过程中，应尽量使用 CSS3 来实现逐帧动画，当 CSS3 实现的逐帧动画出现性能体验问题（或预估到会有此类问题）时，再考虑使用 Canvas 的实现方案。")])])}),[],!1,null,null,null);s.default=n.exports}}]);