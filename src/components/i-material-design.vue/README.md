# IMaterialDesign 图标

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

Vue.component('i-material-design', IMaterialDesign);
```

然后按照如下方式使用

``` html
<i-material-design name="add-a-photo"></i-material-design>
```

## 图标集合

<u-icon-example icon="i-material-design" name="add-a-photo"></u-icon-example>
<u-icon-example icon="i-material-design" name="add-to-photos"></u-icon-example>
<u-icon-example icon="i-material-design" name="adjust"></u-icon-example>
<u-icon-example icon="i-material-design" name="assistant-photo"></u-icon-example>
<u-icon-example icon="i-material-design" name="assistant"></u-icon-example>
<u-icon-example icon="i-material-design" name="audiotrack"></u-icon-example>
<u-icon-example icon="i-material-design" name="blur-circular"></u-icon-example>
<u-icon-example icon="i-material-design" name="blur-linear"></u-icon-example>
<u-icon-example icon="i-material-design" name="blur-off"></u-icon-example>
<u-icon-example icon="i-material-design" name="blur-on"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-1"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-2"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-3"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-4"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-5"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-6"></u-icon-example>
<u-icon-example icon="i-material-design" name="brightness-7"></u-icon-example>
<u-icon-example icon="i-material-design" name="broken-image"></u-icon-example>
<u-icon-example icon="i-material-design" name="brush"></u-icon-example>
<u-icon-example icon="i-material-design" name="burst-mode"></u-icon-example>
<u-icon-example icon="i-material-design" name="camera-alt"></u-icon-example>
<u-icon-example icon="i-material-design" name="camera-front"></u-icon-example>
<u-icon-example icon="i-material-design" name="camera-rear"></u-icon-example>
<u-icon-example icon="i-material-design" name="camera-roll"></u-icon-example>
<u-icon-example icon="i-material-design" name="camera"></u-icon-example>
<u-icon-example icon="i-material-design" name="center-focus-strong"></u-icon-example>
<u-icon-example icon="i-material-design" name="center-focus-weak"></u-icon-example>
<u-icon-example icon="i-material-design" name="collections"></u-icon-example>
<u-icon-example icon="i-material-design" name="color-lens"></u-icon-example>
<u-icon-example icon="i-material-design" name="colorize"></u-icon-example>
<u-icon-example icon="i-material-design" name="compare"></u-icon-example>
<u-icon-example icon="i-material-design" name="control-point-duplicate"></u-icon-example>
<u-icon-example icon="i-material-design" name="control-point"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-16-9"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-3-2"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-5-4"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-7-5"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-din"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-free"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-landscape"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-original"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-portrait"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-rotate"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop-square"></u-icon-example>
<u-icon-example icon="i-material-design" name="crop"></u-icon-example>
<u-icon-example icon="i-material-design" name="dehaze"></u-icon-example>
<u-icon-example icon="i-material-design" name="details"></u-icon-example>
<u-icon-example icon="i-material-design" name="edit"></u-icon-example>
<u-icon-example icon="i-material-design" name="exposure-neg-1"></u-icon-example>
<u-icon-example icon="i-material-design" name="exposure-neg-2"></u-icon-example>
<u-icon-example icon="i-material-design" name="exposure-plus-1"></u-icon-example>
<u-icon-example icon="i-material-design" name="exposure-plus-2"></u-icon-example>
<u-icon-example icon="i-material-design" name="exposure-zero"></u-icon-example>
<u-icon-example icon="i-material-design" name="exposure"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-1"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-2"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-3"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-4"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-5"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-6"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-7"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-8"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-9-plus"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-9"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-b-and-w"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-center-focus"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-drama"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-frames"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-hdr"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-none"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-tilt-shift"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter-vintage"></u-icon-example>
<u-icon-example icon="i-material-design" name="filter"></u-icon-example>
<u-icon-example icon="i-material-design" name="flare"></u-icon-example>
<u-icon-example icon="i-material-design" name="flash-auto"></u-icon-example>
<u-icon-example icon="i-material-design" name="flash-off"></u-icon-example>
<u-icon-example icon="i-material-design" name="flash-on"></u-icon-example>
<u-icon-example icon="i-material-design" name="flip"></u-icon-example>
<u-icon-example icon="i-material-design" name="gradient"></u-icon-example>
<u-icon-example icon="i-material-design" name="grain"></u-icon-example>
<u-icon-example icon="i-material-design" name="grid-off"></u-icon-example>
<u-icon-example icon="i-material-design" name="grid-on"></u-icon-example>
<u-icon-example icon="i-material-design" name="hdr-off"></u-icon-example>
<u-icon-example icon="i-material-design" name="hdr-on"></u-icon-example>
<u-icon-example icon="i-material-design" name="hdr-strong"></u-icon-example>
<u-icon-example icon="i-material-design" name="hdr-weak"></u-icon-example>
<u-icon-example icon="i-material-design" name="healing"></u-icon-example>
<u-icon-example icon="i-material-design" name="image-aspect-ratio"></u-icon-example>
<u-icon-example icon="i-material-design" name="image"></u-icon-example>
<u-icon-example icon="i-material-design" name="iso"></u-icon-example>
<u-icon-example icon="i-material-design" name="landscape"></u-icon-example>
<u-icon-example icon="i-material-design" name="leak-add"></u-icon-example>
<u-icon-example icon="i-material-design" name="leak-remove"></u-icon-example>
<u-icon-example icon="i-material-design" name="lens"></u-icon-example>
<u-icon-example icon="i-material-design" name="linked-camera"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks-3"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks-4"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks-5"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks-6"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks-one"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks-two"></u-icon-example>
<u-icon-example icon="i-material-design" name="looks"></u-icon-example>
<u-icon-example icon="i-material-design" name="loupe"></u-icon-example>
<u-icon-example icon="i-material-design" name="monochrome-photos"></u-icon-example>
<u-icon-example icon="i-material-design" name="movie-creation"></u-icon-example>
<u-icon-example icon="i-material-design" name="movie-filter"></u-icon-example>
<u-icon-example icon="i-material-design" name="music-note"></u-icon-example>
<u-icon-example icon="i-material-design" name="nature-people"></u-icon-example>
<u-icon-example icon="i-material-design" name="nature"></u-icon-example>
<u-icon-example icon="i-material-design" name="navigate-before"></u-icon-example>
<u-icon-example icon="i-material-design" name="navigate-next"></u-icon-example>
<u-icon-example icon="i-material-design" name="palette"></u-icon-example>
<u-icon-example icon="i-material-design" name="panorama-fish-eye"></u-icon-example>
<u-icon-example icon="i-material-design" name="panorama-horizontal"></u-icon-example>
<u-icon-example icon="i-material-design" name="panorama-vertical"></u-icon-example>
<u-icon-example icon="i-material-design" name="panorama-wide-angle"></u-icon-example>
<u-icon-example icon="i-material-design" name="panorama"></u-icon-example>
<u-icon-example icon="i-material-design" name="photo-album"></u-icon-example>
<u-icon-example icon="i-material-design" name="photo-camera"></u-icon-example>
<u-icon-example icon="i-material-design" name="photo-filter"></u-icon-example>
<u-icon-example icon="i-material-design" name="photo-library"></u-icon-example>
<u-icon-example icon="i-material-design" name="photo"></u-icon-example>
<u-icon-example icon="i-material-design" name="picture-as-pdf"></u-icon-example>
<u-icon-example icon="i-material-design" name="portrait"></u-icon-example>
<u-icon-example icon="i-material-design" name="remove-red-eye"></u-icon-example>
<u-icon-example icon="i-material-design" name="rotate-90-degrees-ccw"></u-icon-example>
<u-icon-example icon="i-material-design" name="rotate-left"></u-icon-example>
<u-icon-example icon="i-material-design" name="rotate-right"></u-icon-example>
<u-icon-example icon="i-material-design" name="slideshow"></u-icon-example>
<u-icon-example icon="i-material-design" name="straighten"></u-icon-example>
<u-icon-example icon="i-material-design" name="style"></u-icon-example>
<u-icon-example icon="i-material-design" name="switch-camera"></u-icon-example>
<u-icon-example icon="i-material-design" name="switch-video"></u-icon-example>
<u-icon-example icon="i-material-design" name="tag-faces"></u-icon-example>
<u-icon-example icon="i-material-design" name="texture"></u-icon-example>
<u-icon-example icon="i-material-design" name="timelapse"></u-icon-example>
<u-icon-example icon="i-material-design" name="timer-10"></u-icon-example>
<u-icon-example icon="i-material-design" name="timer-3"></u-icon-example>
<u-icon-example icon="i-material-design" name="timer-off"></u-icon-example>
<u-icon-example icon="i-material-design" name="timer"></u-icon-example>
<u-icon-example icon="i-material-design" name="tonality"></u-icon-example>
<u-icon-example icon="i-material-design" name="transform"></u-icon-example>
<u-icon-example icon="i-material-design" name="tune"></u-icon-example>
<u-icon-example icon="i-material-design" name="view-comfy"></u-icon-example>
<u-icon-example icon="i-material-design" name="view-compact"></u-icon-example>
<u-icon-example icon="i-material-design" name="wb-auto"></u-icon-example>
<u-icon-example icon="i-material-design" name="wb-cloudy"></u-icon-example>
<u-icon-example icon="i-material-design" name="wb-incandescent"></u-icon-example>
<u-icon-example icon="i-material-design" name="wb-iridescent"></u-icon-example>
<u-icon-example icon="i-material-design" name="wb-sunny"></u-icon-example>
