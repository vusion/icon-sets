# IFeather 图标

[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/i-feather.vue.svg?style=flat-square
[npm-url]: http://npmjs.org/package/i-feather.vue
[download-img]: https://img.shields.io/npm/dm/i-feather.vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/i-feather.vue

## 使用方法

### 在 CSS 中使用（推荐）

只引用具体的图标，可以减少最后的打包大小。

``` css
.bar::before {
    icon-font: url('i-feather.vue/assets/activity.svg');
}
```

### 在 Vue 组件中使用

需要先引入包

``` js
import IFeather from 'i-feather.vue';

Vue.component('i-feather', IFeather);
```

然后按照如下方式使用

``` html
<i-feather name="activity"></i-feather>
```

## 图标集合

<u-icon-example icon="i-feather" name="activity"></u-icon-example>
<u-icon-example icon="i-feather" name="airplay"></u-icon-example>
<u-icon-example icon="i-feather" name="alert-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="alert-octagon"></u-icon-example>
<u-icon-example icon="i-feather" name="alert-triangle"></u-icon-example>
<u-icon-example icon="i-feather" name="align-center"></u-icon-example>
<u-icon-example icon="i-feather" name="align-justify"></u-icon-example>
<u-icon-example icon="i-feather" name="align-left"></u-icon-example>
<u-icon-example icon="i-feather" name="align-right"></u-icon-example>
<u-icon-example icon="i-feather" name="anchor"></u-icon-example>
<u-icon-example icon="i-feather" name="aperture"></u-icon-example>
<u-icon-example icon="i-feather" name="archive"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-down-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-down-left"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-down-right"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-down"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-left-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-left"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-right-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-right"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-up-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-up-left"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-up-right"></u-icon-example>
<u-icon-example icon="i-feather" name="arrow-up"></u-icon-example>
<u-icon-example icon="i-feather" name="at-sign"></u-icon-example>
<u-icon-example icon="i-feather" name="award"></u-icon-example>
<u-icon-example icon="i-feather" name="bar-chart-2"></u-icon-example>
<u-icon-example icon="i-feather" name="bar-chart"></u-icon-example>
<u-icon-example icon="i-feather" name="battery-charging"></u-icon-example>
<u-icon-example icon="i-feather" name="battery"></u-icon-example>
<u-icon-example icon="i-feather" name="bell-off"></u-icon-example>
<u-icon-example icon="i-feather" name="bell"></u-icon-example>
<u-icon-example icon="i-feather" name="bluetooth"></u-icon-example>
<u-icon-example icon="i-feather" name="bold"></u-icon-example>
<u-icon-example icon="i-feather" name="book-open"></u-icon-example>
<u-icon-example icon="i-feather" name="book"></u-icon-example>
<u-icon-example icon="i-feather" name="bookmark"></u-icon-example>
<u-icon-example icon="i-feather" name="box"></u-icon-example>
<u-icon-example icon="i-feather" name="briefcase"></u-icon-example>
<u-icon-example icon="i-feather" name="calendar"></u-icon-example>
<u-icon-example icon="i-feather" name="camera-off"></u-icon-example>
<u-icon-example icon="i-feather" name="camera"></u-icon-example>
<u-icon-example icon="i-feather" name="cast"></u-icon-example>
<u-icon-example icon="i-feather" name="check-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="check-square"></u-icon-example>
<u-icon-example icon="i-feather" name="check"></u-icon-example>
<u-icon-example icon="i-feather" name="chevron-down"></u-icon-example>
<u-icon-example icon="i-feather" name="chevron-left"></u-icon-example>
<u-icon-example icon="i-feather" name="chevron-right"></u-icon-example>
<u-icon-example icon="i-feather" name="chevron-up"></u-icon-example>
<u-icon-example icon="i-feather" name="chevrons-down"></u-icon-example>
<u-icon-example icon="i-feather" name="chevrons-left"></u-icon-example>
<u-icon-example icon="i-feather" name="chevrons-right"></u-icon-example>
<u-icon-example icon="i-feather" name="chevrons-up"></u-icon-example>
<u-icon-example icon="i-feather" name="chrome"></u-icon-example>
<u-icon-example icon="i-feather" name="circle"></u-icon-example>
<u-icon-example icon="i-feather" name="clipboard"></u-icon-example>
<u-icon-example icon="i-feather" name="clock"></u-icon-example>
<u-icon-example icon="i-feather" name="cloud-drizzle"></u-icon-example>
<u-icon-example icon="i-feather" name="cloud-lightning"></u-icon-example>
<u-icon-example icon="i-feather" name="cloud-off"></u-icon-example>
<u-icon-example icon="i-feather" name="cloud-rain"></u-icon-example>
<u-icon-example icon="i-feather" name="cloud-snow"></u-icon-example>
<u-icon-example icon="i-feather" name="cloud"></u-icon-example>
<u-icon-example icon="i-feather" name="code"></u-icon-example>
<u-icon-example icon="i-feather" name="codepen"></u-icon-example>
<u-icon-example icon="i-feather" name="command"></u-icon-example>
<u-icon-example icon="i-feather" name="compass"></u-icon-example>
<u-icon-example icon="i-feather" name="copy"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-down-left"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-down-right"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-left-down"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-left-up"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-right-down"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-right-up"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-up-left"></u-icon-example>
<u-icon-example icon="i-feather" name="corner-up-right"></u-icon-example>
<u-icon-example icon="i-feather" name="cpu"></u-icon-example>
<u-icon-example icon="i-feather" name="credit-card"></u-icon-example>
<u-icon-example icon="i-feather" name="crop"></u-icon-example>
<u-icon-example icon="i-feather" name="crosshair"></u-icon-example>
<u-icon-example icon="i-feather" name="database"></u-icon-example>
<u-icon-example icon="i-feather" name="delete"></u-icon-example>
<u-icon-example icon="i-feather" name="disc"></u-icon-example>
<u-icon-example icon="i-feather" name="dollar-sign"></u-icon-example>
<u-icon-example icon="i-feather" name="download-cloud"></u-icon-example>
<u-icon-example icon="i-feather" name="download"></u-icon-example>
<u-icon-example icon="i-feather" name="droplet"></u-icon-example>
<u-icon-example icon="i-feather" name="edit-2"></u-icon-example>
<u-icon-example icon="i-feather" name="edit-3"></u-icon-example>
<u-icon-example icon="i-feather" name="edit"></u-icon-example>
<u-icon-example icon="i-feather" name="external-link"></u-icon-example>
<u-icon-example icon="i-feather" name="eye-off"></u-icon-example>
<u-icon-example icon="i-feather" name="eye"></u-icon-example>
<u-icon-example icon="i-feather" name="facebook"></u-icon-example>
<u-icon-example icon="i-feather" name="fast-forward"></u-icon-example>
<u-icon-example icon="i-feather" name="feather"></u-icon-example>
<u-icon-example icon="i-feather" name="file-minus"></u-icon-example>
<u-icon-example icon="i-feather" name="file-plus"></u-icon-example>
<u-icon-example icon="i-feather" name="file-text"></u-icon-example>
<u-icon-example icon="i-feather" name="file"></u-icon-example>
<u-icon-example icon="i-feather" name="film"></u-icon-example>
<u-icon-example icon="i-feather" name="filter"></u-icon-example>
<u-icon-example icon="i-feather" name="flag"></u-icon-example>
<u-icon-example icon="i-feather" name="folder-minus"></u-icon-example>
<u-icon-example icon="i-feather" name="folder-plus"></u-icon-example>
<u-icon-example icon="i-feather" name="folder"></u-icon-example>
<u-icon-example icon="i-feather" name="gift"></u-icon-example>
<u-icon-example icon="i-feather" name="git-branch"></u-icon-example>
<u-icon-example icon="i-feather" name="git-commit"></u-icon-example>
<u-icon-example icon="i-feather" name="git-merge"></u-icon-example>
<u-icon-example icon="i-feather" name="git-pull-request"></u-icon-example>
<u-icon-example icon="i-feather" name="github"></u-icon-example>
<u-icon-example icon="i-feather" name="gitlab"></u-icon-example>
<u-icon-example icon="i-feather" name="globe"></u-icon-example>
<u-icon-example icon="i-feather" name="grid"></u-icon-example>
<u-icon-example icon="i-feather" name="hard-drive"></u-icon-example>
<u-icon-example icon="i-feather" name="hash"></u-icon-example>
<u-icon-example icon="i-feather" name="headphones"></u-icon-example>
<u-icon-example icon="i-feather" name="heart"></u-icon-example>
<u-icon-example icon="i-feather" name="help-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="home"></u-icon-example>
<u-icon-example icon="i-feather" name="image"></u-icon-example>
<u-icon-example icon="i-feather" name="inbox"></u-icon-example>
<u-icon-example icon="i-feather" name="info"></u-icon-example>
<u-icon-example icon="i-feather" name="instagram"></u-icon-example>
<u-icon-example icon="i-feather" name="italic"></u-icon-example>
<u-icon-example icon="i-feather" name="layers"></u-icon-example>
<u-icon-example icon="i-feather" name="layout"></u-icon-example>
<u-icon-example icon="i-feather" name="life-buoy"></u-icon-example>
<u-icon-example icon="i-feather" name="link-2"></u-icon-example>
<u-icon-example icon="i-feather" name="link"></u-icon-example>
<u-icon-example icon="i-feather" name="linkedin"></u-icon-example>
<u-icon-example icon="i-feather" name="list"></u-icon-example>
<u-icon-example icon="i-feather" name="loader"></u-icon-example>
<u-icon-example icon="i-feather" name="lock"></u-icon-example>
<u-icon-example icon="i-feather" name="log-in"></u-icon-example>
<u-icon-example icon="i-feather" name="log-out"></u-icon-example>
<u-icon-example icon="i-feather" name="mail"></u-icon-example>
<u-icon-example icon="i-feather" name="map-pin"></u-icon-example>
<u-icon-example icon="i-feather" name="map"></u-icon-example>
<u-icon-example icon="i-feather" name="maximize-2"></u-icon-example>
<u-icon-example icon="i-feather" name="maximize"></u-icon-example>
<u-icon-example icon="i-feather" name="menu"></u-icon-example>
<u-icon-example icon="i-feather" name="message-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="message-square"></u-icon-example>
<u-icon-example icon="i-feather" name="mic-off"></u-icon-example>
<u-icon-example icon="i-feather" name="mic"></u-icon-example>
<u-icon-example icon="i-feather" name="minimize-2"></u-icon-example>
<u-icon-example icon="i-feather" name="minimize"></u-icon-example>
<u-icon-example icon="i-feather" name="minus-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="minus-square"></u-icon-example>
<u-icon-example icon="i-feather" name="minus"></u-icon-example>
<u-icon-example icon="i-feather" name="monitor"></u-icon-example>
<u-icon-example icon="i-feather" name="moon"></u-icon-example>
<u-icon-example icon="i-feather" name="more-horizontal"></u-icon-example>
<u-icon-example icon="i-feather" name="more-vertical"></u-icon-example>
<u-icon-example icon="i-feather" name="move"></u-icon-example>
<u-icon-example icon="i-feather" name="music"></u-icon-example>
<u-icon-example icon="i-feather" name="navigation-2"></u-icon-example>
<u-icon-example icon="i-feather" name="navigation"></u-icon-example>
<u-icon-example icon="i-feather" name="octagon"></u-icon-example>
<u-icon-example icon="i-feather" name="package"></u-icon-example>
<u-icon-example icon="i-feather" name="paperclip"></u-icon-example>
<u-icon-example icon="i-feather" name="pause-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="pause"></u-icon-example>
<u-icon-example icon="i-feather" name="percent"></u-icon-example>
<u-icon-example icon="i-feather" name="phone-call"></u-icon-example>
<u-icon-example icon="i-feather" name="phone-forwarded"></u-icon-example>
<u-icon-example icon="i-feather" name="phone-incoming"></u-icon-example>
<u-icon-example icon="i-feather" name="phone-missed"></u-icon-example>
<u-icon-example icon="i-feather" name="phone-off"></u-icon-example>
<u-icon-example icon="i-feather" name="phone-outgoing"></u-icon-example>
<u-icon-example icon="i-feather" name="phone"></u-icon-example>
<u-icon-example icon="i-feather" name="pie-chart"></u-icon-example>
<u-icon-example icon="i-feather" name="play-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="play"></u-icon-example>
<u-icon-example icon="i-feather" name="plus-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="plus-square"></u-icon-example>
<u-icon-example icon="i-feather" name="plus"></u-icon-example>
<u-icon-example icon="i-feather" name="pocket"></u-icon-example>
<u-icon-example icon="i-feather" name="power"></u-icon-example>
<u-icon-example icon="i-feather" name="printer"></u-icon-example>
<u-icon-example icon="i-feather" name="radio"></u-icon-example>
<u-icon-example icon="i-feather" name="refresh-ccw"></u-icon-example>
<u-icon-example icon="i-feather" name="refresh-cw"></u-icon-example>
<u-icon-example icon="i-feather" name="repeat"></u-icon-example>
<u-icon-example icon="i-feather" name="rewind"></u-icon-example>
<u-icon-example icon="i-feather" name="rotate-ccw"></u-icon-example>
<u-icon-example icon="i-feather" name="rotate-cw"></u-icon-example>
<u-icon-example icon="i-feather" name="rss"></u-icon-example>
<u-icon-example icon="i-feather" name="save"></u-icon-example>
<u-icon-example icon="i-feather" name="scissors"></u-icon-example>
<u-icon-example icon="i-feather" name="search"></u-icon-example>
<u-icon-example icon="i-feather" name="send"></u-icon-example>
<u-icon-example icon="i-feather" name="server"></u-icon-example>
<u-icon-example icon="i-feather" name="settings"></u-icon-example>
<u-icon-example icon="i-feather" name="share-2"></u-icon-example>
<u-icon-example icon="i-feather" name="share"></u-icon-example>
<u-icon-example icon="i-feather" name="shield-off"></u-icon-example>
<u-icon-example icon="i-feather" name="shield"></u-icon-example>
<u-icon-example icon="i-feather" name="shopping-bag"></u-icon-example>
<u-icon-example icon="i-feather" name="shopping-cart"></u-icon-example>
<u-icon-example icon="i-feather" name="shuffle"></u-icon-example>
<u-icon-example icon="i-feather" name="sidebar"></u-icon-example>
<u-icon-example icon="i-feather" name="skip-back"></u-icon-example>
<u-icon-example icon="i-feather" name="skip-forward"></u-icon-example>
<u-icon-example icon="i-feather" name="slack"></u-icon-example>
<u-icon-example icon="i-feather" name="slash"></u-icon-example>
<u-icon-example icon="i-feather" name="sliders"></u-icon-example>
<u-icon-example icon="i-feather" name="smartphone"></u-icon-example>
<u-icon-example icon="i-feather" name="speaker"></u-icon-example>
<u-icon-example icon="i-feather" name="square"></u-icon-example>
<u-icon-example icon="i-feather" name="star"></u-icon-example>
<u-icon-example icon="i-feather" name="stop-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="sun"></u-icon-example>
<u-icon-example icon="i-feather" name="sunrise"></u-icon-example>
<u-icon-example icon="i-feather" name="sunset"></u-icon-example>
<u-icon-example icon="i-feather" name="tablet"></u-icon-example>
<u-icon-example icon="i-feather" name="tag"></u-icon-example>
<u-icon-example icon="i-feather" name="target"></u-icon-example>
<u-icon-example icon="i-feather" name="terminal"></u-icon-example>
<u-icon-example icon="i-feather" name="thermometer"></u-icon-example>
<u-icon-example icon="i-feather" name="thumbs-down"></u-icon-example>
<u-icon-example icon="i-feather" name="thumbs-up"></u-icon-example>
<u-icon-example icon="i-feather" name="toggle-left"></u-icon-example>
<u-icon-example icon="i-feather" name="toggle-right"></u-icon-example>
<u-icon-example icon="i-feather" name="trash-2"></u-icon-example>
<u-icon-example icon="i-feather" name="trash"></u-icon-example>
<u-icon-example icon="i-feather" name="trending-down"></u-icon-example>
<u-icon-example icon="i-feather" name="trending-up"></u-icon-example>
<u-icon-example icon="i-feather" name="triangle"></u-icon-example>
<u-icon-example icon="i-feather" name="truck"></u-icon-example>
<u-icon-example icon="i-feather" name="tv"></u-icon-example>
<u-icon-example icon="i-feather" name="twitter"></u-icon-example>
<u-icon-example icon="i-feather" name="type"></u-icon-example>
<u-icon-example icon="i-feather" name="umbrella"></u-icon-example>
<u-icon-example icon="i-feather" name="underline"></u-icon-example>
<u-icon-example icon="i-feather" name="unlock"></u-icon-example>
<u-icon-example icon="i-feather" name="upload-cloud"></u-icon-example>
<u-icon-example icon="i-feather" name="upload"></u-icon-example>
<u-icon-example icon="i-feather" name="user-check"></u-icon-example>
<u-icon-example icon="i-feather" name="user-minus"></u-icon-example>
<u-icon-example icon="i-feather" name="user-plus"></u-icon-example>
<u-icon-example icon="i-feather" name="user-x"></u-icon-example>
<u-icon-example icon="i-feather" name="user"></u-icon-example>
<u-icon-example icon="i-feather" name="users"></u-icon-example>
<u-icon-example icon="i-feather" name="video-off"></u-icon-example>
<u-icon-example icon="i-feather" name="video"></u-icon-example>
<u-icon-example icon="i-feather" name="voicemail"></u-icon-example>
<u-icon-example icon="i-feather" name="volume-1"></u-icon-example>
<u-icon-example icon="i-feather" name="volume-2"></u-icon-example>
<u-icon-example icon="i-feather" name="volume-x"></u-icon-example>
<u-icon-example icon="i-feather" name="volume"></u-icon-example>
<u-icon-example icon="i-feather" name="watch"></u-icon-example>
<u-icon-example icon="i-feather" name="wifi-off"></u-icon-example>
<u-icon-example icon="i-feather" name="wifi"></u-icon-example>
<u-icon-example icon="i-feather" name="wind"></u-icon-example>
<u-icon-example icon="i-feather" name="x-circle"></u-icon-example>
<u-icon-example icon="i-feather" name="x-square"></u-icon-example>
<u-icon-example icon="i-feather" name="x"></u-icon-example>
<u-icon-example icon="i-feather" name="youtube"></u-icon-example>
<u-icon-example icon="i-feather" name="zap-off"></u-icon-example>
<u-icon-example icon="i-feather" name="zap"></u-icon-example>
<u-icon-example icon="i-feather" name="zoom-in"></u-icon-example>
<u-icon-example icon="i-feather" name="zoom-out"></u-icon-example>
