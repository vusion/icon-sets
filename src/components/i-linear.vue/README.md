# ILinear 图标

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
    icon-font: url('i-linear.vue/assets/alarm.svg');
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
<i-linear name="alarm"></i-linear>
```

## 图标集合

<u-icon-example icon="i-linear" name="alarm"></u-icon-example>
<u-icon-example icon="i-linear" name="apartment"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-down-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-down"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-left-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-left"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-right-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-right"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-up-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="arrow-up"></u-icon-example>
<u-icon-example icon="i-linear" name="bicycle"></u-icon-example>
<u-icon-example icon="i-linear" name="bold"></u-icon-example>
<u-icon-example icon="i-linear" name="book"></u-icon-example>
<u-icon-example icon="i-linear" name="bookmark"></u-icon-example>
<u-icon-example icon="i-linear" name="briefcase"></u-icon-example>
<u-icon-example icon="i-linear" name="bubble"></u-icon-example>
<u-icon-example icon="i-linear" name="bug"></u-icon-example>
<u-icon-example icon="i-linear" name="bullhorn"></u-icon-example>
<u-icon-example icon="i-linear" name="bus"></u-icon-example>
<u-icon-example icon="i-linear" name="calendar-full"></u-icon-example>
<u-icon-example icon="i-linear" name="camera-video"></u-icon-example>
<u-icon-example icon="i-linear" name="camera"></u-icon-example>
<u-icon-example icon="i-linear" name="car"></u-icon-example>
<u-icon-example icon="i-linear" name="cart"></u-icon-example>
<u-icon-example icon="i-linear" name="chart-bars"></u-icon-example>
<u-icon-example icon="i-linear" name="checkmark-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-down-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-down"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-left-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-left"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-right-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-right"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-up-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="chevron-up"></u-icon-example>
<u-icon-example icon="i-linear" name="circle-minus"></u-icon-example>
<u-icon-example icon="i-linear" name="clock"></u-icon-example>
<u-icon-example icon="i-linear" name="cloud-check"></u-icon-example>
<u-icon-example icon="i-linear" name="cloud-download"></u-icon-example>
<u-icon-example icon="i-linear" name="cloud-sync"></u-icon-example>
<u-icon-example icon="i-linear" name="cloud-upload"></u-icon-example>
<u-icon-example icon="i-linear" name="cloud"></u-icon-example>
<u-icon-example icon="i-linear" name="code"></u-icon-example>
<u-icon-example icon="i-linear" name="coffee-cup"></u-icon-example>
<u-icon-example icon="i-linear" name="cog"></u-icon-example>
<u-icon-example icon="i-linear" name="construction"></u-icon-example>
<u-icon-example icon="i-linear" name="crop"></u-icon-example>
<u-icon-example icon="i-linear" name="cross-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="cross"></u-icon-example>
<u-icon-example icon="i-linear" name="database"></u-icon-example>
<u-icon-example icon="i-linear" name="diamond"></u-icon-example>
<u-icon-example icon="i-linear" name="dice"></u-icon-example>
<u-icon-example icon="i-linear" name="dinner"></u-icon-example>
<u-icon-example icon="i-linear" name="direction-ltr"></u-icon-example>
<u-icon-example icon="i-linear" name="direction-rtl"></u-icon-example>
<u-icon-example icon="i-linear" name="download"></u-icon-example>
<u-icon-example icon="i-linear" name="drop"></u-icon-example>
<u-icon-example icon="i-linear" name="earth"></u-icon-example>
<u-icon-example icon="i-linear" name="enter-down"></u-icon-example>
<u-icon-example icon="i-linear" name="enter"></u-icon-example>
<u-icon-example icon="i-linear" name="envelope"></u-icon-example>
<u-icon-example icon="i-linear" name="exit-up"></u-icon-example>
<u-icon-example icon="i-linear" name="exit"></u-icon-example>
<u-icon-example icon="i-linear" name="eye"></u-icon-example>
<u-icon-example icon="i-linear" name="file-add"></u-icon-example>
<u-icon-example icon="i-linear" name="file-empty"></u-icon-example>
<u-icon-example icon="i-linear" name="film-play"></u-icon-example>
<u-icon-example icon="i-linear" name="flag"></u-icon-example>
<u-icon-example icon="i-linear" name="frame-contract"></u-icon-example>
<u-icon-example icon="i-linear" name="frame-expand"></u-icon-example>
<u-icon-example icon="i-linear" name="funnel"></u-icon-example>
<u-icon-example icon="i-linear" name="gift"></u-icon-example>
<u-icon-example icon="i-linear" name="graduation-hat"></u-icon-example>
<u-icon-example icon="i-linear" name="hand"></u-icon-example>
<u-icon-example icon="i-linear" name="heart-pulse"></u-icon-example>
<u-icon-example icon="i-linear" name="heart"></u-icon-example>
<u-icon-example icon="i-linear" name="highlight"></u-icon-example>
<u-icon-example icon="i-linear" name="history"></u-icon-example>
<u-icon-example icon="i-linear" name="home"></u-icon-example>
<u-icon-example icon="i-linear" name="hourglass"></u-icon-example>
<u-icon-example icon="i-linear" name="inbox"></u-icon-example>
<u-icon-example icon="i-linear" name="indent-decrease"></u-icon-example>
<u-icon-example icon="i-linear" name="indent-increase"></u-icon-example>
<u-icon-example icon="i-linear" name="italic"></u-icon-example>
<u-icon-example icon="i-linear" name="keyboard"></u-icon-example>
<u-icon-example icon="i-linear" name="laptop-phone"></u-icon-example>
<u-icon-example icon="i-linear" name="laptop"></u-icon-example>
<u-icon-example icon="i-linear" name="layers"></u-icon-example>
<u-icon-example icon="i-linear" name="leaf"></u-icon-example>
<u-icon-example icon="i-linear" name="license"></u-icon-example>
<u-icon-example icon="i-linear" name="lighter"></u-icon-example>
<u-icon-example icon="i-linear" name="line-spacing"></u-icon-example>
<u-icon-example icon="i-linear" name="linearicons"></u-icon-example>
<u-icon-example icon="i-linear" name="link"></u-icon-example>
<u-icon-example icon="i-linear" name="list"></u-icon-example>
<u-icon-example icon="i-linear" name="location"></u-icon-example>
<u-icon-example icon="i-linear" name="lock"></u-icon-example>
<u-icon-example icon="i-linear" name="magic-wand"></u-icon-example>
<u-icon-example icon="i-linear" name="magnifier"></u-icon-example>
<u-icon-example icon="i-linear" name="map-marker"></u-icon-example>
<u-icon-example icon="i-linear" name="map"></u-icon-example>
<u-icon-example icon="i-linear" name="menu-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="menu"></u-icon-example>
<u-icon-example icon="i-linear" name="mic"></u-icon-example>
<u-icon-example icon="i-linear" name="moon"></u-icon-example>
<u-icon-example icon="i-linear" name="move"></u-icon-example>
<u-icon-example icon="i-linear" name="music-note"></u-icon-example>
<u-icon-example icon="i-linear" name="mustache"></u-icon-example>
<u-icon-example icon="i-linear" name="neutral"></u-icon-example>
<u-icon-example icon="i-linear" name="page-break"></u-icon-example>
<u-icon-example icon="i-linear" name="paperclip"></u-icon-example>
<u-icon-example icon="i-linear" name="paw"></u-icon-example>
<u-icon-example icon="i-linear" name="pencil"></u-icon-example>
<u-icon-example icon="i-linear" name="phone-handset"></u-icon-example>
<u-icon-example icon="i-linear" name="phone"></u-icon-example>
<u-icon-example icon="i-linear" name="picture"></u-icon-example>
<u-icon-example icon="i-linear" name="pie-chart"></u-icon-example>
<u-icon-example icon="i-linear" name="pilcrow"></u-icon-example>
<u-icon-example icon="i-linear" name="plus-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="pointer-down"></u-icon-example>
<u-icon-example icon="i-linear" name="pointer-left"></u-icon-example>
<u-icon-example icon="i-linear" name="pointer-right"></u-icon-example>
<u-icon-example icon="i-linear" name="pointer-up"></u-icon-example>
<u-icon-example icon="i-linear" name="poop"></u-icon-example>
<u-icon-example icon="i-linear" name="power-switch"></u-icon-example>
<u-icon-example icon="i-linear" name="printer"></u-icon-example>
<u-icon-example icon="i-linear" name="pushpin"></u-icon-example>
<u-icon-example icon="i-linear" name="question-circle"></u-icon-example>
<u-icon-example icon="i-linear" name="redo"></u-icon-example>
<u-icon-example icon="i-linear" name="rocket"></u-icon-example>
<u-icon-example icon="i-linear" name="sad"></u-icon-example>
<u-icon-example icon="i-linear" name="screen"></u-icon-example>
<u-icon-example icon="i-linear" name="select"></u-icon-example>
<u-icon-example icon="i-linear" name="shirt"></u-icon-example>
<u-icon-example icon="i-linear" name="smartphone"></u-icon-example>
<u-icon-example icon="i-linear" name="smile"></u-icon-example>
<u-icon-example icon="i-linear" name="sort-alpha-asc"></u-icon-example>
<u-icon-example icon="i-linear" name="sort-amount-asc"></u-icon-example>
<u-icon-example icon="i-linear" name="spell-check"></u-icon-example>
<u-icon-example icon="i-linear" name="star-empty"></u-icon-example>
<u-icon-example icon="i-linear" name="star-half"></u-icon-example>
<u-icon-example icon="i-linear" name="star"></u-icon-example>
<u-icon-example icon="i-linear" name="store"></u-icon-example>
<u-icon-example icon="i-linear" name="strikethrough"></u-icon-example>
<u-icon-example icon="i-linear" name="sun"></u-icon-example>
<u-icon-example icon="i-linear" name="sync"></u-icon-example>
<u-icon-example icon="i-linear" name="tablet"></u-icon-example>
<u-icon-example icon="i-linear" name="tag"></u-icon-example>
<u-icon-example icon="i-linear" name="text-align-center"></u-icon-example>
<u-icon-example icon="i-linear" name="text-align-justify"></u-icon-example>
<u-icon-example icon="i-linear" name="text-align-left"></u-icon-example>
<u-icon-example icon="i-linear" name="text-align-right"></u-icon-example>
<u-icon-example icon="i-linear" name="text-format-remove"></u-icon-example>
<u-icon-example icon="i-linear" name="text-format"></u-icon-example>
<u-icon-example icon="i-linear" name="text-size"></u-icon-example>
<u-icon-example icon="i-linear" name="thumbs-down"></u-icon-example>
<u-icon-example icon="i-linear" name="thumbs-up"></u-icon-example>
<u-icon-example icon="i-linear" name="train"></u-icon-example>
<u-icon-example icon="i-linear" name="trash"></u-icon-example>
<u-icon-example icon="i-linear" name="underline"></u-icon-example>
<u-icon-example icon="i-linear" name="undo"></u-icon-example>
<u-icon-example icon="i-linear" name="unlink"></u-icon-example>
<u-icon-example icon="i-linear" name="upload"></u-icon-example>
<u-icon-example icon="i-linear" name="user"></u-icon-example>
<u-icon-example icon="i-linear" name="users"></u-icon-example>
<u-icon-example icon="i-linear" name="volume-high"></u-icon-example>
<u-icon-example icon="i-linear" name="volume-low"></u-icon-example>
<u-icon-example icon="i-linear" name="volume-medium"></u-icon-example>
<u-icon-example icon="i-linear" name="volume"></u-icon-example>
<u-icon-example icon="i-linear" name="warning"></u-icon-example>
<u-icon-example icon="i-linear" name="wheelchair"></u-icon-example>
