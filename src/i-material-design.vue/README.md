# MaterialDesign 图标

[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/i-material-design.vue.svg?style=flat-square
[npm-url]: http://npmjs.org/package/i-material-design.vue
[download-img]: https://img.shields.io/npm/dm/i-material-design.vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/i-material-design.vue

## 使用方法

### 在 CSS 中使用（推荐）

只引用具体的图标，可以减少最后的打包大小。

``` css
.bar::before {
    icon-font: url('i-material-design.vue/assets/add-a-photo.svg');
}
```

### 在 Vue 组件中使用

需要先引入包

``` js
import IMaterialDesign from 'i-material-design.vue';

Vue.component(IMaterialDesign);
```

然后按照如下方式使用

``` html
<i-material-design name="add-a-photo"></i-material-design>
```

## 图标集合

<u-icon-example title="add-a-photo"><i-material-design name="add-a-photo"></i-material-design></u-icon-example>
<u-icon-example title="add-to-photos"><i-material-design name="add-to-photos"></i-material-design></u-icon-example>
<u-icon-example title="adjust"><i-material-design name="adjust"></i-material-design></u-icon-example>
<u-icon-example title="assistant-photo"><i-material-design name="assistant-photo"></i-material-design></u-icon-example>
<u-icon-example title="assistant"><i-material-design name="assistant"></i-material-design></u-icon-example>
<u-icon-example title="audiotrack"><i-material-design name="audiotrack"></i-material-design></u-icon-example>
<u-icon-example title="blur-circular"><i-material-design name="blur-circular"></i-material-design></u-icon-example>
<u-icon-example title="blur-linear"><i-material-design name="blur-linear"></i-material-design></u-icon-example>
<u-icon-example title="blur-off"><i-material-design name="blur-off"></i-material-design></u-icon-example>
<u-icon-example title="blur-on"><i-material-design name="blur-on"></i-material-design></u-icon-example>
<u-icon-example title="brightness-1"><i-material-design name="brightness-1"></i-material-design></u-icon-example>
<u-icon-example title="brightness-2"><i-material-design name="brightness-2"></i-material-design></u-icon-example>
<u-icon-example title="brightness-3"><i-material-design name="brightness-3"></i-material-design></u-icon-example>
<u-icon-example title="brightness-4"><i-material-design name="brightness-4"></i-material-design></u-icon-example>
<u-icon-example title="brightness-5"><i-material-design name="brightness-5"></i-material-design></u-icon-example>
<u-icon-example title="brightness-6"><i-material-design name="brightness-6"></i-material-design></u-icon-example>
<u-icon-example title="brightness-7"><i-material-design name="brightness-7"></i-material-design></u-icon-example>
<u-icon-example title="broken-image"><i-material-design name="broken-image"></i-material-design></u-icon-example>
<u-icon-example title="brush"><i-material-design name="brush"></i-material-design></u-icon-example>
<u-icon-example title="burst-mode"><i-material-design name="burst-mode"></i-material-design></u-icon-example>
<u-icon-example title="camera-alt"><i-material-design name="camera-alt"></i-material-design></u-icon-example>
<u-icon-example title="camera-front"><i-material-design name="camera-front"></i-material-design></u-icon-example>
<u-icon-example title="camera-rear"><i-material-design name="camera-rear"></i-material-design></u-icon-example>
<u-icon-example title="camera-roll"><i-material-design name="camera-roll"></i-material-design></u-icon-example>
<u-icon-example title="camera"><i-material-design name="camera"></i-material-design></u-icon-example>
<u-icon-example title="center-focus-strong"><i-material-design name="center-focus-strong"></i-material-design></u-icon-example>
<u-icon-example title="center-focus-weak"><i-material-design name="center-focus-weak"></i-material-design></u-icon-example>
<u-icon-example title="collections"><i-material-design name="collections"></i-material-design></u-icon-example>
<u-icon-example title="color-lens"><i-material-design name="color-lens"></i-material-design></u-icon-example>
<u-icon-example title="colorize"><i-material-design name="colorize"></i-material-design></u-icon-example>
<u-icon-example title="compare"><i-material-design name="compare"></i-material-design></u-icon-example>
<u-icon-example title="control-point-duplicate"><i-material-design name="control-point-duplicate"></i-material-design></u-icon-example>
<u-icon-example title="control-point"><i-material-design name="control-point"></i-material-design></u-icon-example>
<u-icon-example title="crop-16-9"><i-material-design name="crop-16-9"></i-material-design></u-icon-example>
<u-icon-example title="crop-3-2"><i-material-design name="crop-3-2"></i-material-design></u-icon-example>
<u-icon-example title="crop-5-4"><i-material-design name="crop-5-4"></i-material-design></u-icon-example>
<u-icon-example title="crop-7-5"><i-material-design name="crop-7-5"></i-material-design></u-icon-example>
<u-icon-example title="crop-din"><i-material-design name="crop-din"></i-material-design></u-icon-example>
<u-icon-example title="crop-free"><i-material-design name="crop-free"></i-material-design></u-icon-example>
<u-icon-example title="crop-landscape"><i-material-design name="crop-landscape"></i-material-design></u-icon-example>
<u-icon-example title="crop-original"><i-material-design name="crop-original"></i-material-design></u-icon-example>
<u-icon-example title="crop-portrait"><i-material-design name="crop-portrait"></i-material-design></u-icon-example>
<u-icon-example title="crop-rotate"><i-material-design name="crop-rotate"></i-material-design></u-icon-example>
<u-icon-example title="crop-square"><i-material-design name="crop-square"></i-material-design></u-icon-example>
<u-icon-example title="crop"><i-material-design name="crop"></i-material-design></u-icon-example>
<u-icon-example title="dehaze"><i-material-design name="dehaze"></i-material-design></u-icon-example>
<u-icon-example title="details"><i-material-design name="details"></i-material-design></u-icon-example>
<u-icon-example title="edit"><i-material-design name="edit"></i-material-design></u-icon-example>
<u-icon-example title="exposure-neg-1"><i-material-design name="exposure-neg-1"></i-material-design></u-icon-example>
<u-icon-example title="exposure-neg-2"><i-material-design name="exposure-neg-2"></i-material-design></u-icon-example>
<u-icon-example title="exposure-plus-1"><i-material-design name="exposure-plus-1"></i-material-design></u-icon-example>
<u-icon-example title="exposure-plus-2"><i-material-design name="exposure-plus-2"></i-material-design></u-icon-example>
<u-icon-example title="exposure-zero"><i-material-design name="exposure-zero"></i-material-design></u-icon-example>
<u-icon-example title="exposure"><i-material-design name="exposure"></i-material-design></u-icon-example>
<u-icon-example title="filter-1"><i-material-design name="filter-1"></i-material-design></u-icon-example>
<u-icon-example title="filter-2"><i-material-design name="filter-2"></i-material-design></u-icon-example>
<u-icon-example title="filter-3"><i-material-design name="filter-3"></i-material-design></u-icon-example>
<u-icon-example title="filter-4"><i-material-design name="filter-4"></i-material-design></u-icon-example>
<u-icon-example title="filter-5"><i-material-design name="filter-5"></i-material-design></u-icon-example>
<u-icon-example title="filter-6"><i-material-design name="filter-6"></i-material-design></u-icon-example>
<u-icon-example title="filter-7"><i-material-design name="filter-7"></i-material-design></u-icon-example>
<u-icon-example title="filter-8"><i-material-design name="filter-8"></i-material-design></u-icon-example>
<u-icon-example title="filter-9-plus"><i-material-design name="filter-9-plus"></i-material-design></u-icon-example>
<u-icon-example title="filter-9"><i-material-design name="filter-9"></i-material-design></u-icon-example>
<u-icon-example title="filter-b-and-w"><i-material-design name="filter-b-and-w"></i-material-design></u-icon-example>
<u-icon-example title="filter-center-focus"><i-material-design name="filter-center-focus"></i-material-design></u-icon-example>
<u-icon-example title="filter-drama"><i-material-design name="filter-drama"></i-material-design></u-icon-example>
<u-icon-example title="filter-frames"><i-material-design name="filter-frames"></i-material-design></u-icon-example>
<u-icon-example title="filter-hdr"><i-material-design name="filter-hdr"></i-material-design></u-icon-example>
<u-icon-example title="filter-none"><i-material-design name="filter-none"></i-material-design></u-icon-example>
<u-icon-example title="filter-tilt-shift"><i-material-design name="filter-tilt-shift"></i-material-design></u-icon-example>
<u-icon-example title="filter-vintage"><i-material-design name="filter-vintage"></i-material-design></u-icon-example>
<u-icon-example title="filter"><i-material-design name="filter"></i-material-design></u-icon-example>
<u-icon-example title="flare"><i-material-design name="flare"></i-material-design></u-icon-example>
<u-icon-example title="flash-auto"><i-material-design name="flash-auto"></i-material-design></u-icon-example>
<u-icon-example title="flash-off"><i-material-design name="flash-off"></i-material-design></u-icon-example>
<u-icon-example title="flash-on"><i-material-design name="flash-on"></i-material-design></u-icon-example>
<u-icon-example title="flip"><i-material-design name="flip"></i-material-design></u-icon-example>
<u-icon-example title="gradient"><i-material-design name="gradient"></i-material-design></u-icon-example>
<u-icon-example title="grain"><i-material-design name="grain"></i-material-design></u-icon-example>
<u-icon-example title="grid-off"><i-material-design name="grid-off"></i-material-design></u-icon-example>
<u-icon-example title="grid-on"><i-material-design name="grid-on"></i-material-design></u-icon-example>
<u-icon-example title="hdr-off"><i-material-design name="hdr-off"></i-material-design></u-icon-example>
<u-icon-example title="hdr-on"><i-material-design name="hdr-on"></i-material-design></u-icon-example>
<u-icon-example title="hdr-strong"><i-material-design name="hdr-strong"></i-material-design></u-icon-example>
<u-icon-example title="hdr-weak"><i-material-design name="hdr-weak"></i-material-design></u-icon-example>
<u-icon-example title="healing"><i-material-design name="healing"></i-material-design></u-icon-example>
<u-icon-example title="image-aspect-ratio"><i-material-design name="image-aspect-ratio"></i-material-design></u-icon-example>
<u-icon-example title="image"><i-material-design name="image"></i-material-design></u-icon-example>
<u-icon-example title="iso"><i-material-design name="iso"></i-material-design></u-icon-example>
<u-icon-example title="landscape"><i-material-design name="landscape"></i-material-design></u-icon-example>
<u-icon-example title="leak-add"><i-material-design name="leak-add"></i-material-design></u-icon-example>
<u-icon-example title="leak-remove"><i-material-design name="leak-remove"></i-material-design></u-icon-example>
<u-icon-example title="lens"><i-material-design name="lens"></i-material-design></u-icon-example>
<u-icon-example title="linked-camera"><i-material-design name="linked-camera"></i-material-design></u-icon-example>
<u-icon-example title="looks-3"><i-material-design name="looks-3"></i-material-design></u-icon-example>
<u-icon-example title="looks-4"><i-material-design name="looks-4"></i-material-design></u-icon-example>
<u-icon-example title="looks-5"><i-material-design name="looks-5"></i-material-design></u-icon-example>
<u-icon-example title="looks-6"><i-material-design name="looks-6"></i-material-design></u-icon-example>
<u-icon-example title="looks-one"><i-material-design name="looks-one"></i-material-design></u-icon-example>
<u-icon-example title="looks-two"><i-material-design name="looks-two"></i-material-design></u-icon-example>
<u-icon-example title="looks"><i-material-design name="looks"></i-material-design></u-icon-example>
<u-icon-example title="loupe"><i-material-design name="loupe"></i-material-design></u-icon-example>
<u-icon-example title="monochrome-photos"><i-material-design name="monochrome-photos"></i-material-design></u-icon-example>
<u-icon-example title="movie-creation"><i-material-design name="movie-creation"></i-material-design></u-icon-example>
<u-icon-example title="movie-filter"><i-material-design name="movie-filter"></i-material-design></u-icon-example>
<u-icon-example title="music-note"><i-material-design name="music-note"></i-material-design></u-icon-example>
<u-icon-example title="nature-people"><i-material-design name="nature-people"></i-material-design></u-icon-example>
<u-icon-example title="nature"><i-material-design name="nature"></i-material-design></u-icon-example>
<u-icon-example title="navigate-before"><i-material-design name="navigate-before"></i-material-design></u-icon-example>
<u-icon-example title="navigate-next"><i-material-design name="navigate-next"></i-material-design></u-icon-example>
<u-icon-example title="palette"><i-material-design name="palette"></i-material-design></u-icon-example>
<u-icon-example title="panorama-fish-eye"><i-material-design name="panorama-fish-eye"></i-material-design></u-icon-example>
<u-icon-example title="panorama-horizontal"><i-material-design name="panorama-horizontal"></i-material-design></u-icon-example>
<u-icon-example title="panorama-vertical"><i-material-design name="panorama-vertical"></i-material-design></u-icon-example>
<u-icon-example title="panorama-wide-angle"><i-material-design name="panorama-wide-angle"></i-material-design></u-icon-example>
<u-icon-example title="panorama"><i-material-design name="panorama"></i-material-design></u-icon-example>
<u-icon-example title="photo-album"><i-material-design name="photo-album"></i-material-design></u-icon-example>
<u-icon-example title="photo-camera"><i-material-design name="photo-camera"></i-material-design></u-icon-example>
<u-icon-example title="photo-filter"><i-material-design name="photo-filter"></i-material-design></u-icon-example>
<u-icon-example title="photo-library"><i-material-design name="photo-library"></i-material-design></u-icon-example>
<u-icon-example title="photo"><i-material-design name="photo"></i-material-design></u-icon-example>
<u-icon-example title="picture-as-pdf"><i-material-design name="picture-as-pdf"></i-material-design></u-icon-example>
<u-icon-example title="portrait"><i-material-design name="portrait"></i-material-design></u-icon-example>
<u-icon-example title="remove-red-eye"><i-material-design name="remove-red-eye"></i-material-design></u-icon-example>
<u-icon-example title="rotate-90-degrees-ccw"><i-material-design name="rotate-90-degrees-ccw"></i-material-design></u-icon-example>
<u-icon-example title="rotate-left"><i-material-design name="rotate-left"></i-material-design></u-icon-example>
<u-icon-example title="rotate-right"><i-material-design name="rotate-right"></i-material-design></u-icon-example>
<u-icon-example title="slideshow"><i-material-design name="slideshow"></i-material-design></u-icon-example>
<u-icon-example title="straighten"><i-material-design name="straighten"></i-material-design></u-icon-example>
<u-icon-example title="style"><i-material-design name="style"></i-material-design></u-icon-example>
<u-icon-example title="switch-camera"><i-material-design name="switch-camera"></i-material-design></u-icon-example>
<u-icon-example title="switch-video"><i-material-design name="switch-video"></i-material-design></u-icon-example>
<u-icon-example title="tag-faces"><i-material-design name="tag-faces"></i-material-design></u-icon-example>
<u-icon-example title="texture"><i-material-design name="texture"></i-material-design></u-icon-example>
<u-icon-example title="timelapse"><i-material-design name="timelapse"></i-material-design></u-icon-example>
<u-icon-example title="timer-10"><i-material-design name="timer-10"></i-material-design></u-icon-example>
<u-icon-example title="timer-3"><i-material-design name="timer-3"></i-material-design></u-icon-example>
<u-icon-example title="timer-off"><i-material-design name="timer-off"></i-material-design></u-icon-example>
<u-icon-example title="timer"><i-material-design name="timer"></i-material-design></u-icon-example>
<u-icon-example title="tonality"><i-material-design name="tonality"></i-material-design></u-icon-example>
<u-icon-example title="transform"><i-material-design name="transform"></i-material-design></u-icon-example>
<u-icon-example title="tune"><i-material-design name="tune"></i-material-design></u-icon-example>
<u-icon-example title="view-comfy"><i-material-design name="view-comfy"></i-material-design></u-icon-example>
<u-icon-example title="view-compact"><i-material-design name="view-compact"></i-material-design></u-icon-example>
<u-icon-example title="wb-auto"><i-material-design name="wb-auto"></i-material-design></u-icon-example>
<u-icon-example title="wb-cloudy"><i-material-design name="wb-cloudy"></i-material-design></u-icon-example>
<u-icon-example title="wb-incandescent"><i-material-design name="wb-incandescent"></i-material-design></u-icon-example>
<u-icon-example title="wb-iridescent"><i-material-design name="wb-iridescent"></i-material-design></u-icon-example>
<u-icon-example title="wb-sunny"><i-material-design name="wb-sunny"></i-material-design></u-icon-example>
