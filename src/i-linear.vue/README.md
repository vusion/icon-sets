# Linear 图标

[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/i-linear.vue.svg?style=flat-square
[npm-url]: http://npmjs.org/package/i-linear.vue
[download-img]: https://img.shields.io/npm/dm/i-linear.vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/i-linear.vue

## 使用方法

### 在 CSS 中使用（推荐）

只引用具体的图标，可以减少最后的打包大小。

``` css
.bar::before {
    icon-font: url('i-linear.vue/assets/500px.svg');
}
```

### 在 Vue 组件中使用

需要先引入包

``` js
import ILinear from 'i-linear.vue';

Vue.component('i-linear', ILinear);
```

然后按照如下方式使用

``` html
<i-linear name="500px"></i-linear>
```

## 图标集合

<u-icon-example title="alarm"><i-linear name="alarm"></i-linear></u-icon-example>
<u-icon-example title="apartment"><i-linear name="apartment"></i-linear></u-icon-example>
<u-icon-example title="arrow-down-circle"><i-linear name="arrow-down-circle"></i-linear></u-icon-example>
<u-icon-example title="arrow-down"><i-linear name="arrow-down"></i-linear></u-icon-example>
<u-icon-example title="arrow-left-circle"><i-linear name="arrow-left-circle"></i-linear></u-icon-example>
<u-icon-example title="arrow-left"><i-linear name="arrow-left"></i-linear></u-icon-example>
<u-icon-example title="arrow-right-circle"><i-linear name="arrow-right-circle"></i-linear></u-icon-example>
<u-icon-example title="arrow-right"><i-linear name="arrow-right"></i-linear></u-icon-example>
<u-icon-example title="arrow-up-circle"><i-linear name="arrow-up-circle"></i-linear></u-icon-example>
<u-icon-example title="arrow-up"><i-linear name="arrow-up"></i-linear></u-icon-example>
<u-icon-example title="bicycle"><i-linear name="bicycle"></i-linear></u-icon-example>
<u-icon-example title="bold"><i-linear name="bold"></i-linear></u-icon-example>
<u-icon-example title="book"><i-linear name="book"></i-linear></u-icon-example>
<u-icon-example title="bookmark"><i-linear name="bookmark"></i-linear></u-icon-example>
<u-icon-example title="briefcase"><i-linear name="briefcase"></i-linear></u-icon-example>
<u-icon-example title="bubble"><i-linear name="bubble"></i-linear></u-icon-example>
<u-icon-example title="bug"><i-linear name="bug"></i-linear></u-icon-example>
<u-icon-example title="bullhorn"><i-linear name="bullhorn"></i-linear></u-icon-example>
<u-icon-example title="bus"><i-linear name="bus"></i-linear></u-icon-example>
<u-icon-example title="calendar-full"><i-linear name="calendar-full"></i-linear></u-icon-example>
<u-icon-example title="camera-video"><i-linear name="camera-video"></i-linear></u-icon-example>
<u-icon-example title="camera"><i-linear name="camera"></i-linear></u-icon-example>
<u-icon-example title="car"><i-linear name="car"></i-linear></u-icon-example>
<u-icon-example title="cart"><i-linear name="cart"></i-linear></u-icon-example>
<u-icon-example title="chart-bars"><i-linear name="chart-bars"></i-linear></u-icon-example>
<u-icon-example title="checkmark-circle"><i-linear name="checkmark-circle"></i-linear></u-icon-example>
<u-icon-example title="chevron-down-circle"><i-linear name="chevron-down-circle"></i-linear></u-icon-example>
<u-icon-example title="chevron-down"><i-linear name="chevron-down"></i-linear></u-icon-example>
<u-icon-example title="chevron-left-circle"><i-linear name="chevron-left-circle"></i-linear></u-icon-example>
<u-icon-example title="chevron-left"><i-linear name="chevron-left"></i-linear></u-icon-example>
<u-icon-example title="chevron-right-circle"><i-linear name="chevron-right-circle"></i-linear></u-icon-example>
<u-icon-example title="chevron-right"><i-linear name="chevron-right"></i-linear></u-icon-example>
<u-icon-example title="chevron-up-circle"><i-linear name="chevron-up-circle"></i-linear></u-icon-example>
<u-icon-example title="chevron-up"><i-linear name="chevron-up"></i-linear></u-icon-example>
<u-icon-example title="circle-minus"><i-linear name="circle-minus"></i-linear></u-icon-example>
<u-icon-example title="clock"><i-linear name="clock"></i-linear></u-icon-example>
<u-icon-example title="cloud-check"><i-linear name="cloud-check"></i-linear></u-icon-example>
<u-icon-example title="cloud-download"><i-linear name="cloud-download"></i-linear></u-icon-example>
<u-icon-example title="cloud-sync"><i-linear name="cloud-sync"></i-linear></u-icon-example>
<u-icon-example title="cloud-upload"><i-linear name="cloud-upload"></i-linear></u-icon-example>
<u-icon-example title="cloud"><i-linear name="cloud"></i-linear></u-icon-example>
<u-icon-example title="code"><i-linear name="code"></i-linear></u-icon-example>
<u-icon-example title="coffee-cup"><i-linear name="coffee-cup"></i-linear></u-icon-example>
<u-icon-example title="cog"><i-linear name="cog"></i-linear></u-icon-example>
<u-icon-example title="construction"><i-linear name="construction"></i-linear></u-icon-example>
<u-icon-example title="crop"><i-linear name="crop"></i-linear></u-icon-example>
<u-icon-example title="cross-circle"><i-linear name="cross-circle"></i-linear></u-icon-example>
<u-icon-example title="cross"><i-linear name="cross"></i-linear></u-icon-example>
<u-icon-example title="database"><i-linear name="database"></i-linear></u-icon-example>
<u-icon-example title="diamond"><i-linear name="diamond"></i-linear></u-icon-example>
<u-icon-example title="dice"><i-linear name="dice"></i-linear></u-icon-example>
<u-icon-example title="dinner"><i-linear name="dinner"></i-linear></u-icon-example>
<u-icon-example title="direction-ltr"><i-linear name="direction-ltr"></i-linear></u-icon-example>
<u-icon-example title="direction-rtl"><i-linear name="direction-rtl"></i-linear></u-icon-example>
<u-icon-example title="download"><i-linear name="download"></i-linear></u-icon-example>
<u-icon-example title="drop"><i-linear name="drop"></i-linear></u-icon-example>
<u-icon-example title="earth"><i-linear name="earth"></i-linear></u-icon-example>
<u-icon-example title="enter-down"><i-linear name="enter-down"></i-linear></u-icon-example>
<u-icon-example title="enter"><i-linear name="enter"></i-linear></u-icon-example>
<u-icon-example title="envelope"><i-linear name="envelope"></i-linear></u-icon-example>
<u-icon-example title="exit-up"><i-linear name="exit-up"></i-linear></u-icon-example>
<u-icon-example title="exit"><i-linear name="exit"></i-linear></u-icon-example>
<u-icon-example title="eye"><i-linear name="eye"></i-linear></u-icon-example>
<u-icon-example title="file-add"><i-linear name="file-add"></i-linear></u-icon-example>
<u-icon-example title="file-empty"><i-linear name="file-empty"></i-linear></u-icon-example>
<u-icon-example title="film-play"><i-linear name="film-play"></i-linear></u-icon-example>
<u-icon-example title="flag"><i-linear name="flag"></i-linear></u-icon-example>
<u-icon-example title="frame-contract"><i-linear name="frame-contract"></i-linear></u-icon-example>
<u-icon-example title="frame-expand"><i-linear name="frame-expand"></i-linear></u-icon-example>
<u-icon-example title="funnel"><i-linear name="funnel"></i-linear></u-icon-example>
<u-icon-example title="gift"><i-linear name="gift"></i-linear></u-icon-example>
<u-icon-example title="graduation-hat"><i-linear name="graduation-hat"></i-linear></u-icon-example>
<u-icon-example title="hand"><i-linear name="hand"></i-linear></u-icon-example>
<u-icon-example title="heart-pulse"><i-linear name="heart-pulse"></i-linear></u-icon-example>
<u-icon-example title="heart"><i-linear name="heart"></i-linear></u-icon-example>
<u-icon-example title="highlight"><i-linear name="highlight"></i-linear></u-icon-example>
<u-icon-example title="history"><i-linear name="history"></i-linear></u-icon-example>
<u-icon-example title="home"><i-linear name="home"></i-linear></u-icon-example>
<u-icon-example title="hourglass"><i-linear name="hourglass"></i-linear></u-icon-example>
<u-icon-example title="inbox"><i-linear name="inbox"></i-linear></u-icon-example>
<u-icon-example title="indent-decrease"><i-linear name="indent-decrease"></i-linear></u-icon-example>
<u-icon-example title="indent-increase"><i-linear name="indent-increase"></i-linear></u-icon-example>
<u-icon-example title="italic"><i-linear name="italic"></i-linear></u-icon-example>
<u-icon-example title="keyboard"><i-linear name="keyboard"></i-linear></u-icon-example>
<u-icon-example title="laptop-phone"><i-linear name="laptop-phone"></i-linear></u-icon-example>
<u-icon-example title="laptop"><i-linear name="laptop"></i-linear></u-icon-example>
<u-icon-example title="layers"><i-linear name="layers"></i-linear></u-icon-example>
<u-icon-example title="leaf"><i-linear name="leaf"></i-linear></u-icon-example>
<u-icon-example title="license"><i-linear name="license"></i-linear></u-icon-example>
<u-icon-example title="lighter"><i-linear name="lighter"></i-linear></u-icon-example>
<u-icon-example title="line-spacing"><i-linear name="line-spacing"></i-linear></u-icon-example>
<u-icon-example title="linearicons"><i-linear name="linearicons"></i-linear></u-icon-example>
<u-icon-example title="link"><i-linear name="link"></i-linear></u-icon-example>
<u-icon-example title="list"><i-linear name="list"></i-linear></u-icon-example>
<u-icon-example title="location"><i-linear name="location"></i-linear></u-icon-example>
<u-icon-example title="lock"><i-linear name="lock"></i-linear></u-icon-example>
<u-icon-example title="magic-wand"><i-linear name="magic-wand"></i-linear></u-icon-example>
<u-icon-example title="magnifier"><i-linear name="magnifier"></i-linear></u-icon-example>
<u-icon-example title="map-marker"><i-linear name="map-marker"></i-linear></u-icon-example>
<u-icon-example title="map"><i-linear name="map"></i-linear></u-icon-example>
<u-icon-example title="menu-circle"><i-linear name="menu-circle"></i-linear></u-icon-example>
<u-icon-example title="menu"><i-linear name="menu"></i-linear></u-icon-example>
<u-icon-example title="mic"><i-linear name="mic"></i-linear></u-icon-example>
<u-icon-example title="moon"><i-linear name="moon"></i-linear></u-icon-example>
<u-icon-example title="move"><i-linear name="move"></i-linear></u-icon-example>
<u-icon-example title="music-note"><i-linear name="music-note"></i-linear></u-icon-example>
<u-icon-example title="mustache"><i-linear name="mustache"></i-linear></u-icon-example>
<u-icon-example title="neutral"><i-linear name="neutral"></i-linear></u-icon-example>
<u-icon-example title="page-break"><i-linear name="page-break"></i-linear></u-icon-example>
<u-icon-example title="paperclip"><i-linear name="paperclip"></i-linear></u-icon-example>
<u-icon-example title="paw"><i-linear name="paw"></i-linear></u-icon-example>
<u-icon-example title="pencil"><i-linear name="pencil"></i-linear></u-icon-example>
<u-icon-example title="phone-handset"><i-linear name="phone-handset"></i-linear></u-icon-example>
<u-icon-example title="phone"><i-linear name="phone"></i-linear></u-icon-example>
<u-icon-example title="picture"><i-linear name="picture"></i-linear></u-icon-example>
<u-icon-example title="pie-chart"><i-linear name="pie-chart"></i-linear></u-icon-example>
<u-icon-example title="pilcrow"><i-linear name="pilcrow"></i-linear></u-icon-example>
<u-icon-example title="plus-circle"><i-linear name="plus-circle"></i-linear></u-icon-example>
<u-icon-example title="pointer-down"><i-linear name="pointer-down"></i-linear></u-icon-example>
<u-icon-example title="pointer-left"><i-linear name="pointer-left"></i-linear></u-icon-example>
<u-icon-example title="pointer-right"><i-linear name="pointer-right"></i-linear></u-icon-example>
<u-icon-example title="pointer-up"><i-linear name="pointer-up"></i-linear></u-icon-example>
<u-icon-example title="poop"><i-linear name="poop"></i-linear></u-icon-example>
<u-icon-example title="power-switch"><i-linear name="power-switch"></i-linear></u-icon-example>
<u-icon-example title="printer"><i-linear name="printer"></i-linear></u-icon-example>
<u-icon-example title="pushpin"><i-linear name="pushpin"></i-linear></u-icon-example>
<u-icon-example title="question-circle"><i-linear name="question-circle"></i-linear></u-icon-example>
<u-icon-example title="redo"><i-linear name="redo"></i-linear></u-icon-example>
<u-icon-example title="rocket"><i-linear name="rocket"></i-linear></u-icon-example>
<u-icon-example title="sad"><i-linear name="sad"></i-linear></u-icon-example>
<u-icon-example title="screen"><i-linear name="screen"></i-linear></u-icon-example>
<u-icon-example title="select"><i-linear name="select"></i-linear></u-icon-example>
<u-icon-example title="shirt"><i-linear name="shirt"></i-linear></u-icon-example>
<u-icon-example title="smartphone"><i-linear name="smartphone"></i-linear></u-icon-example>
<u-icon-example title="smile"><i-linear name="smile"></i-linear></u-icon-example>
<u-icon-example title="sort-alpha-asc"><i-linear name="sort-alpha-asc"></i-linear></u-icon-example>
<u-icon-example title="sort-amount-asc"><i-linear name="sort-amount-asc"></i-linear></u-icon-example>
<u-icon-example title="spell-check"><i-linear name="spell-check"></i-linear></u-icon-example>
<u-icon-example title="star-empty"><i-linear name="star-empty"></i-linear></u-icon-example>
<u-icon-example title="star-half"><i-linear name="star-half"></i-linear></u-icon-example>
<u-icon-example title="star"><i-linear name="star"></i-linear></u-icon-example>
<u-icon-example title="store"><i-linear name="store"></i-linear></u-icon-example>
<u-icon-example title="strikethrough"><i-linear name="strikethrough"></i-linear></u-icon-example>
<u-icon-example title="sun"><i-linear name="sun"></i-linear></u-icon-example>
<u-icon-example title="sync"><i-linear name="sync"></i-linear></u-icon-example>
<u-icon-example title="tablet"><i-linear name="tablet"></i-linear></u-icon-example>
<u-icon-example title="tag"><i-linear name="tag"></i-linear></u-icon-example>
<u-icon-example title="text-align-center"><i-linear name="text-align-center"></i-linear></u-icon-example>
<u-icon-example title="text-align-justify"><i-linear name="text-align-justify"></i-linear></u-icon-example>
<u-icon-example title="text-align-left"><i-linear name="text-align-left"></i-linear></u-icon-example>
<u-icon-example title="text-align-right"><i-linear name="text-align-right"></i-linear></u-icon-example>
<u-icon-example title="text-format-remove"><i-linear name="text-format-remove"></i-linear></u-icon-example>
<u-icon-example title="text-format"><i-linear name="text-format"></i-linear></u-icon-example>
<u-icon-example title="text-size"><i-linear name="text-size"></i-linear></u-icon-example>
<u-icon-example title="thumbs-down"><i-linear name="thumbs-down"></i-linear></u-icon-example>
<u-icon-example title="thumbs-up"><i-linear name="thumbs-up"></i-linear></u-icon-example>
<u-icon-example title="train"><i-linear name="train"></i-linear></u-icon-example>
<u-icon-example title="trash"><i-linear name="trash"></i-linear></u-icon-example>
<u-icon-example title="underline"><i-linear name="underline"></i-linear></u-icon-example>
<u-icon-example title="undo"><i-linear name="undo"></i-linear></u-icon-example>
<u-icon-example title="unlink"><i-linear name="unlink"></i-linear></u-icon-example>
<u-icon-example title="upload"><i-linear name="upload"></i-linear></u-icon-example>
<u-icon-example title="user"><i-linear name="user"></i-linear></u-icon-example>
<u-icon-example title="users"><i-linear name="users"></i-linear></u-icon-example>
<u-icon-example title="volume-high"><i-linear name="volume-high"></i-linear></u-icon-example>
<u-icon-example title="volume-low"><i-linear name="volume-low"></i-linear></u-icon-example>
<u-icon-example title="volume-medium"><i-linear name="volume-medium"></i-linear></u-icon-example>
<u-icon-example title="volume"><i-linear name="volume"></i-linear></u-icon-example>
<u-icon-example title="warning"><i-linear name="warning"></i-linear></u-icon-example>
<u-icon-example title="wheelchair"><i-linear name="wheelchair"></i-linear></u-icon-example>
