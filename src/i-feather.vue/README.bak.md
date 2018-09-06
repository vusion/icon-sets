# Feather 图标

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
    icon-font: url('i-feather.vue/assets/500px.svg');
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
<i-feather name="500px"></i-feather>
```

## 图标集合

<u-icon-example title="activity"><i-feather name="activity"></i-feather></u-icon-example>
<u-icon-example title="airplay"><i-feather name="airplay"></i-feather></u-icon-example>
<u-icon-example title="alert-circle"><i-feather name="alert-circle"></i-feather></u-icon-example>
<u-icon-example title="alert-octagon"><i-feather name="alert-octagon"></i-feather></u-icon-example>
<u-icon-example title="alert-triangle"><i-feather name="alert-triangle"></i-feather></u-icon-example>
<u-icon-example title="align-center"><i-feather name="align-center"></i-feather></u-icon-example>
<u-icon-example title="align-justify"><i-feather name="align-justify"></i-feather></u-icon-example>
<u-icon-example title="align-left"><i-feather name="align-left"></i-feather></u-icon-example>
<u-icon-example title="align-right"><i-feather name="align-right"></i-feather></u-icon-example>
<u-icon-example title="anchor"><i-feather name="anchor"></i-feather></u-icon-example>
<u-icon-example title="aperture"><i-feather name="aperture"></i-feather></u-icon-example>
<u-icon-example title="archive"><i-feather name="archive"></i-feather></u-icon-example>
<u-icon-example title="arrow-down-circle"><i-feather name="arrow-down-circle"></i-feather></u-icon-example>
<u-icon-example title="arrow-down-left"><i-feather name="arrow-down-left"></i-feather></u-icon-example>
<u-icon-example title="arrow-down-right"><i-feather name="arrow-down-right"></i-feather></u-icon-example>
<u-icon-example title="arrow-down"><i-feather name="arrow-down"></i-feather></u-icon-example>
<u-icon-example title="arrow-left-circle"><i-feather name="arrow-left-circle"></i-feather></u-icon-example>
<u-icon-example title="arrow-left"><i-feather name="arrow-left"></i-feather></u-icon-example>
<u-icon-example title="arrow-right-circle"><i-feather name="arrow-right-circle"></i-feather></u-icon-example>
<u-icon-example title="arrow-right"><i-feather name="arrow-right"></i-feather></u-icon-example>
<u-icon-example title="arrow-up-circle"><i-feather name="arrow-up-circle"></i-feather></u-icon-example>
<u-icon-example title="arrow-up-left"><i-feather name="arrow-up-left"></i-feather></u-icon-example>
<u-icon-example title="arrow-up-right"><i-feather name="arrow-up-right"></i-feather></u-icon-example>
<u-icon-example title="arrow-up"><i-feather name="arrow-up"></i-feather></u-icon-example>
<u-icon-example title="at-sign"><i-feather name="at-sign"></i-feather></u-icon-example>
<u-icon-example title="award"><i-feather name="award"></i-feather></u-icon-example>
<u-icon-example title="bar-chart-2"><i-feather name="bar-chart-2"></i-feather></u-icon-example>
<u-icon-example title="bar-chart"><i-feather name="bar-chart"></i-feather></u-icon-example>
<u-icon-example title="battery-charging"><i-feather name="battery-charging"></i-feather></u-icon-example>
<u-icon-example title="battery"><i-feather name="battery"></i-feather></u-icon-example>
<u-icon-example title="bell-off"><i-feather name="bell-off"></i-feather></u-icon-example>
<u-icon-example title="bell"><i-feather name="bell"></i-feather></u-icon-example>
<u-icon-example title="bluetooth"><i-feather name="bluetooth"></i-feather></u-icon-example>
<u-icon-example title="bold"><i-feather name="bold"></i-feather></u-icon-example>
<u-icon-example title="book-open"><i-feather name="book-open"></i-feather></u-icon-example>
<u-icon-example title="book"><i-feather name="book"></i-feather></u-icon-example>
<u-icon-example title="bookmark"><i-feather name="bookmark"></i-feather></u-icon-example>
<u-icon-example title="box"><i-feather name="box"></i-feather></u-icon-example>
<u-icon-example title="briefcase"><i-feather name="briefcase"></i-feather></u-icon-example>
<u-icon-example title="calendar"><i-feather name="calendar"></i-feather></u-icon-example>
<u-icon-example title="camera-off"><i-feather name="camera-off"></i-feather></u-icon-example>
<u-icon-example title="camera"><i-feather name="camera"></i-feather></u-icon-example>
<u-icon-example title="cast"><i-feather name="cast"></i-feather></u-icon-example>
<u-icon-example title="check-circle"><i-feather name="check-circle"></i-feather></u-icon-example>
<u-icon-example title="check-square"><i-feather name="check-square"></i-feather></u-icon-example>
<u-icon-example title="check"><i-feather name="check"></i-feather></u-icon-example>
<u-icon-example title="chevron-down"><i-feather name="chevron-down"></i-feather></u-icon-example>
<u-icon-example title="chevron-left"><i-feather name="chevron-left"></i-feather></u-icon-example>
<u-icon-example title="chevron-right"><i-feather name="chevron-right"></i-feather></u-icon-example>
<u-icon-example title="chevron-up"><i-feather name="chevron-up"></i-feather></u-icon-example>
<u-icon-example title="chevrons-down"><i-feather name="chevrons-down"></i-feather></u-icon-example>
<u-icon-example title="chevrons-left"><i-feather name="chevrons-left"></i-feather></u-icon-example>
<u-icon-example title="chevrons-right"><i-feather name="chevrons-right"></i-feather></u-icon-example>
<u-icon-example title="chevrons-up"><i-feather name="chevrons-up"></i-feather></u-icon-example>
<u-icon-example title="chrome"><i-feather name="chrome"></i-feather></u-icon-example>
<u-icon-example title="circle"><i-feather name="circle"></i-feather></u-icon-example>
<u-icon-example title="clipboard"><i-feather name="clipboard"></i-feather></u-icon-example>
<u-icon-example title="clock"><i-feather name="clock"></i-feather></u-icon-example>
<u-icon-example title="cloud-drizzle"><i-feather name="cloud-drizzle"></i-feather></u-icon-example>
<u-icon-example title="cloud-lightning"><i-feather name="cloud-lightning"></i-feather></u-icon-example>
<u-icon-example title="cloud-off"><i-feather name="cloud-off"></i-feather></u-icon-example>
<u-icon-example title="cloud-rain"><i-feather name="cloud-rain"></i-feather></u-icon-example>
<u-icon-example title="cloud-snow"><i-feather name="cloud-snow"></i-feather></u-icon-example>
<u-icon-example title="cloud"><i-feather name="cloud"></i-feather></u-icon-example>
<u-icon-example title="code"><i-feather name="code"></i-feather></u-icon-example>
<u-icon-example title="codepen"><i-feather name="codepen"></i-feather></u-icon-example>
<u-icon-example title="command"><i-feather name="command"></i-feather></u-icon-example>
<u-icon-example title="compass"><i-feather name="compass"></i-feather></u-icon-example>
<u-icon-example title="copy"><i-feather name="copy"></i-feather></u-icon-example>
<u-icon-example title="corner-down-left"><i-feather name="corner-down-left"></i-feather></u-icon-example>
<u-icon-example title="corner-down-right"><i-feather name="corner-down-right"></i-feather></u-icon-example>
<u-icon-example title="corner-left-down"><i-feather name="corner-left-down"></i-feather></u-icon-example>
<u-icon-example title="corner-left-up"><i-feather name="corner-left-up"></i-feather></u-icon-example>
<u-icon-example title="corner-right-down"><i-feather name="corner-right-down"></i-feather></u-icon-example>
<u-icon-example title="corner-right-up"><i-feather name="corner-right-up"></i-feather></u-icon-example>
<u-icon-example title="corner-up-left"><i-feather name="corner-up-left"></i-feather></u-icon-example>
<u-icon-example title="corner-up-right"><i-feather name="corner-up-right"></i-feather></u-icon-example>
<u-icon-example title="cpu"><i-feather name="cpu"></i-feather></u-icon-example>
<u-icon-example title="credit-card"><i-feather name="credit-card"></i-feather></u-icon-example>
<u-icon-example title="crop"><i-feather name="crop"></i-feather></u-icon-example>
<u-icon-example title="crosshair"><i-feather name="crosshair"></i-feather></u-icon-example>
<u-icon-example title="database"><i-feather name="database"></i-feather></u-icon-example>
<u-icon-example title="delete"><i-feather name="delete"></i-feather></u-icon-example>
<u-icon-example title="disc"><i-feather name="disc"></i-feather></u-icon-example>
<u-icon-example title="dollar-sign"><i-feather name="dollar-sign"></i-feather></u-icon-example>
<u-icon-example title="download-cloud"><i-feather name="download-cloud"></i-feather></u-icon-example>
<u-icon-example title="download"><i-feather name="download"></i-feather></u-icon-example>
<u-icon-example title="droplet"><i-feather name="droplet"></i-feather></u-icon-example>
<u-icon-example title="edit-2"><i-feather name="edit-2"></i-feather></u-icon-example>
<u-icon-example title="edit-3"><i-feather name="edit-3"></i-feather></u-icon-example>
<u-icon-example title="edit"><i-feather name="edit"></i-feather></u-icon-example>
<u-icon-example title="external-link"><i-feather name="external-link"></i-feather></u-icon-example>
<u-icon-example title="eye-off"><i-feather name="eye-off"></i-feather></u-icon-example>
<u-icon-example title="eye"><i-feather name="eye"></i-feather></u-icon-example>
<u-icon-example title="facebook"><i-feather name="facebook"></i-feather></u-icon-example>
<u-icon-example title="fast-forward"><i-feather name="fast-forward"></i-feather></u-icon-example>
<u-icon-example title="feather"><i-feather name="feather"></i-feather></u-icon-example>
<u-icon-example title="file-minus"><i-feather name="file-minus"></i-feather></u-icon-example>
<u-icon-example title="file-plus"><i-feather name="file-plus"></i-feather></u-icon-example>
<u-icon-example title="file-text"><i-feather name="file-text"></i-feather></u-icon-example>
<u-icon-example title="file"><i-feather name="file"></i-feather></u-icon-example>
<u-icon-example title="film"><i-feather name="film"></i-feather></u-icon-example>
<u-icon-example title="filter"><i-feather name="filter"></i-feather></u-icon-example>
<u-icon-example title="flag"><i-feather name="flag"></i-feather></u-icon-example>
<u-icon-example title="folder-minus"><i-feather name="folder-minus"></i-feather></u-icon-example>
<u-icon-example title="folder-plus"><i-feather name="folder-plus"></i-feather></u-icon-example>
<u-icon-example title="folder"><i-feather name="folder"></i-feather></u-icon-example>
<u-icon-example title="gift"><i-feather name="gift"></i-feather></u-icon-example>
<u-icon-example title="git-branch"><i-feather name="git-branch"></i-feather></u-icon-example>
<u-icon-example title="git-commit"><i-feather name="git-commit"></i-feather></u-icon-example>
<u-icon-example title="git-merge"><i-feather name="git-merge"></i-feather></u-icon-example>
<u-icon-example title="git-pull-request"><i-feather name="git-pull-request"></i-feather></u-icon-example>
<u-icon-example title="github"><i-feather name="github"></i-feather></u-icon-example>
<u-icon-example title="gitlab"><i-feather name="gitlab"></i-feather></u-icon-example>
<u-icon-example title="globe"><i-feather name="globe"></i-feather></u-icon-example>
<u-icon-example title="grid"><i-feather name="grid"></i-feather></u-icon-example>
<u-icon-example title="hard-drive"><i-feather name="hard-drive"></i-feather></u-icon-example>
<u-icon-example title="hash"><i-feather name="hash"></i-feather></u-icon-example>
<u-icon-example title="headphones"><i-feather name="headphones"></i-feather></u-icon-example>
<u-icon-example title="heart"><i-feather name="heart"></i-feather></u-icon-example>
<u-icon-example title="help-circle"><i-feather name="help-circle"></i-feather></u-icon-example>
<u-icon-example title="home"><i-feather name="home"></i-feather></u-icon-example>
<u-icon-example title="image"><i-feather name="image"></i-feather></u-icon-example>
<u-icon-example title="inbox"><i-feather name="inbox"></i-feather></u-icon-example>
<u-icon-example title="info"><i-feather name="info"></i-feather></u-icon-example>
<u-icon-example title="instagram"><i-feather name="instagram"></i-feather></u-icon-example>
<u-icon-example title="italic"><i-feather name="italic"></i-feather></u-icon-example>
<u-icon-example title="layers"><i-feather name="layers"></i-feather></u-icon-example>
<u-icon-example title="layout"><i-feather name="layout"></i-feather></u-icon-example>
<u-icon-example title="life-buoy"><i-feather name="life-buoy"></i-feather></u-icon-example>
<u-icon-example title="link-2"><i-feather name="link-2"></i-feather></u-icon-example>
<u-icon-example title="link"><i-feather name="link"></i-feather></u-icon-example>
<u-icon-example title="linkedin"><i-feather name="linkedin"></i-feather></u-icon-example>
<u-icon-example title="list"><i-feather name="list"></i-feather></u-icon-example>
<u-icon-example title="loader"><i-feather name="loader"></i-feather></u-icon-example>
<u-icon-example title="lock"><i-feather name="lock"></i-feather></u-icon-example>
<u-icon-example title="log-in"><i-feather name="log-in"></i-feather></u-icon-example>
<u-icon-example title="log-out"><i-feather name="log-out"></i-feather></u-icon-example>
<u-icon-example title="mail"><i-feather name="mail"></i-feather></u-icon-example>
<u-icon-example title="map-pin"><i-feather name="map-pin"></i-feather></u-icon-example>
<u-icon-example title="map"><i-feather name="map"></i-feather></u-icon-example>
<u-icon-example title="maximize-2"><i-feather name="maximize-2"></i-feather></u-icon-example>
<u-icon-example title="maximize"><i-feather name="maximize"></i-feather></u-icon-example>
<u-icon-example title="menu"><i-feather name="menu"></i-feather></u-icon-example>
<u-icon-example title="message-circle"><i-feather name="message-circle"></i-feather></u-icon-example>
<u-icon-example title="message-square"><i-feather name="message-square"></i-feather></u-icon-example>
<u-icon-example title="mic-off"><i-feather name="mic-off"></i-feather></u-icon-example>
<u-icon-example title="mic"><i-feather name="mic"></i-feather></u-icon-example>
<u-icon-example title="minimize-2"><i-feather name="minimize-2"></i-feather></u-icon-example>
<u-icon-example title="minimize"><i-feather name="minimize"></i-feather></u-icon-example>
<u-icon-example title="minus-circle"><i-feather name="minus-circle"></i-feather></u-icon-example>
<u-icon-example title="minus-square"><i-feather name="minus-square"></i-feather></u-icon-example>
<u-icon-example title="minus"><i-feather name="minus"></i-feather></u-icon-example>
<u-icon-example title="monitor"><i-feather name="monitor"></i-feather></u-icon-example>
<u-icon-example title="moon"><i-feather name="moon"></i-feather></u-icon-example>
<u-icon-example title="more-horizontal"><i-feather name="more-horizontal"></i-feather></u-icon-example>
<u-icon-example title="more-vertical"><i-feather name="more-vertical"></i-feather></u-icon-example>
<u-icon-example title="move"><i-feather name="move"></i-feather></u-icon-example>
<u-icon-example title="music"><i-feather name="music"></i-feather></u-icon-example>
<u-icon-example title="navigation-2"><i-feather name="navigation-2"></i-feather></u-icon-example>
<u-icon-example title="navigation"><i-feather name="navigation"></i-feather></u-icon-example>
<u-icon-example title="octagon"><i-feather name="octagon"></i-feather></u-icon-example>
<u-icon-example title="package"><i-feather name="package"></i-feather></u-icon-example>
<u-icon-example title="paperclip"><i-feather name="paperclip"></i-feather></u-icon-example>
<u-icon-example title="pause-circle"><i-feather name="pause-circle"></i-feather></u-icon-example>
<u-icon-example title="pause"><i-feather name="pause"></i-feather></u-icon-example>
<u-icon-example title="percent"><i-feather name="percent"></i-feather></u-icon-example>
<u-icon-example title="phone-call"><i-feather name="phone-call"></i-feather></u-icon-example>
<u-icon-example title="phone-forwarded"><i-feather name="phone-forwarded"></i-feather></u-icon-example>
<u-icon-example title="phone-incoming"><i-feather name="phone-incoming"></i-feather></u-icon-example>
<u-icon-example title="phone-missed"><i-feather name="phone-missed"></i-feather></u-icon-example>
<u-icon-example title="phone-off"><i-feather name="phone-off"></i-feather></u-icon-example>
<u-icon-example title="phone-outgoing"><i-feather name="phone-outgoing"></i-feather></u-icon-example>
<u-icon-example title="phone"><i-feather name="phone"></i-feather></u-icon-example>
<u-icon-example title="pie-chart"><i-feather name="pie-chart"></i-feather></u-icon-example>
<u-icon-example title="play-circle"><i-feather name="play-circle"></i-feather></u-icon-example>
<u-icon-example title="play"><i-feather name="play"></i-feather></u-icon-example>
<u-icon-example title="plus-circle"><i-feather name="plus-circle"></i-feather></u-icon-example>
<u-icon-example title="plus-square"><i-feather name="plus-square"></i-feather></u-icon-example>
<u-icon-example title="plus"><i-feather name="plus"></i-feather></u-icon-example>
<u-icon-example title="pocket"><i-feather name="pocket"></i-feather></u-icon-example>
<u-icon-example title="power"><i-feather name="power"></i-feather></u-icon-example>
<u-icon-example title="printer"><i-feather name="printer"></i-feather></u-icon-example>
<u-icon-example title="radio"><i-feather name="radio"></i-feather></u-icon-example>
<u-icon-example title="refresh-ccw"><i-feather name="refresh-ccw"></i-feather></u-icon-example>
<u-icon-example title="refresh-cw"><i-feather name="refresh-cw"></i-feather></u-icon-example>
<u-icon-example title="repeat"><i-feather name="repeat"></i-feather></u-icon-example>
<u-icon-example title="rewind"><i-feather name="rewind"></i-feather></u-icon-example>
<u-icon-example title="rotate-ccw"><i-feather name="rotate-ccw"></i-feather></u-icon-example>
<u-icon-example title="rotate-cw"><i-feather name="rotate-cw"></i-feather></u-icon-example>
<u-icon-example title="rss"><i-feather name="rss"></i-feather></u-icon-example>
<u-icon-example title="save"><i-feather name="save"></i-feather></u-icon-example>
<u-icon-example title="scissors"><i-feather name="scissors"></i-feather></u-icon-example>
<u-icon-example title="search"><i-feather name="search"></i-feather></u-icon-example>
<u-icon-example title="send"><i-feather name="send"></i-feather></u-icon-example>
<u-icon-example title="server"><i-feather name="server"></i-feather></u-icon-example>
<u-icon-example title="settings"><i-feather name="settings"></i-feather></u-icon-example>
<u-icon-example title="share-2"><i-feather name="share-2"></i-feather></u-icon-example>
<u-icon-example title="share"><i-feather name="share"></i-feather></u-icon-example>
<u-icon-example title="shield-off"><i-feather name="shield-off"></i-feather></u-icon-example>
<u-icon-example title="shield"><i-feather name="shield"></i-feather></u-icon-example>
<u-icon-example title="shopping-bag"><i-feather name="shopping-bag"></i-feather></u-icon-example>
<u-icon-example title="shopping-cart"><i-feather name="shopping-cart"></i-feather></u-icon-example>
<u-icon-example title="shuffle"><i-feather name="shuffle"></i-feather></u-icon-example>
<u-icon-example title="sidebar"><i-feather name="sidebar"></i-feather></u-icon-example>
<u-icon-example title="skip-back"><i-feather name="skip-back"></i-feather></u-icon-example>
<u-icon-example title="skip-forward"><i-feather name="skip-forward"></i-feather></u-icon-example>
<u-icon-example title="slack"><i-feather name="slack"></i-feather></u-icon-example>
<u-icon-example title="slash"><i-feather name="slash"></i-feather></u-icon-example>
<u-icon-example title="sliders"><i-feather name="sliders"></i-feather></u-icon-example>
<u-icon-example title="smartphone"><i-feather name="smartphone"></i-feather></u-icon-example>
<u-icon-example title="speaker"><i-feather name="speaker"></i-feather></u-icon-example>
<u-icon-example title="square"><i-feather name="square"></i-feather></u-icon-example>
<u-icon-example title="star"><i-feather name="star"></i-feather></u-icon-example>
<u-icon-example title="stop-circle"><i-feather name="stop-circle"></i-feather></u-icon-example>
<u-icon-example title="sun"><i-feather name="sun"></i-feather></u-icon-example>
<u-icon-example title="sunrise"><i-feather name="sunrise"></i-feather></u-icon-example>
<u-icon-example title="sunset"><i-feather name="sunset"></i-feather></u-icon-example>
<u-icon-example title="tablet"><i-feather name="tablet"></i-feather></u-icon-example>
<u-icon-example title="tag"><i-feather name="tag"></i-feather></u-icon-example>
<u-icon-example title="target"><i-feather name="target"></i-feather></u-icon-example>
<u-icon-example title="terminal"><i-feather name="terminal"></i-feather></u-icon-example>
<u-icon-example title="thermometer"><i-feather name="thermometer"></i-feather></u-icon-example>
<u-icon-example title="thumbs-down"><i-feather name="thumbs-down"></i-feather></u-icon-example>
<u-icon-example title="thumbs-up"><i-feather name="thumbs-up"></i-feather></u-icon-example>
<u-icon-example title="toggle-left"><i-feather name="toggle-left"></i-feather></u-icon-example>
<u-icon-example title="toggle-right"><i-feather name="toggle-right"></i-feather></u-icon-example>
<u-icon-example title="trash-2"><i-feather name="trash-2"></i-feather></u-icon-example>
<u-icon-example title="trash"><i-feather name="trash"></i-feather></u-icon-example>
<u-icon-example title="trending-down"><i-feather name="trending-down"></i-feather></u-icon-example>
<u-icon-example title="trending-up"><i-feather name="trending-up"></i-feather></u-icon-example>
<u-icon-example title="triangle"><i-feather name="triangle"></i-feather></u-icon-example>
<u-icon-example title="truck"><i-feather name="truck"></i-feather></u-icon-example>
<u-icon-example title="tv"><i-feather name="tv"></i-feather></u-icon-example>
<u-icon-example title="twitter"><i-feather name="twitter"></i-feather></u-icon-example>
<u-icon-example title="type"><i-feather name="type"></i-feather></u-icon-example>
<u-icon-example title="umbrella"><i-feather name="umbrella"></i-feather></u-icon-example>
<u-icon-example title="underline"><i-feather name="underline"></i-feather></u-icon-example>
<u-icon-example title="unlock"><i-feather name="unlock"></i-feather></u-icon-example>
<u-icon-example title="upload-cloud"><i-feather name="upload-cloud"></i-feather></u-icon-example>
<u-icon-example title="upload"><i-feather name="upload"></i-feather></u-icon-example>
<u-icon-example title="user-check"><i-feather name="user-check"></i-feather></u-icon-example>
<u-icon-example title="user-minus"><i-feather name="user-minus"></i-feather></u-icon-example>
<u-icon-example title="user-plus"><i-feather name="user-plus"></i-feather></u-icon-example>
<u-icon-example title="user-x"><i-feather name="user-x"></i-feather></u-icon-example>
<u-icon-example title="user"><i-feather name="user"></i-feather></u-icon-example>
<u-icon-example title="users"><i-feather name="users"></i-feather></u-icon-example>
<u-icon-example title="video-off"><i-feather name="video-off"></i-feather></u-icon-example>
<u-icon-example title="video"><i-feather name="video"></i-feather></u-icon-example>
<u-icon-example title="voicemail"><i-feather name="voicemail"></i-feather></u-icon-example>
<u-icon-example title="volume-1"><i-feather name="volume-1"></i-feather></u-icon-example>
<u-icon-example title="volume-2"><i-feather name="volume-2"></i-feather></u-icon-example>
<u-icon-example title="volume-x"><i-feather name="volume-x"></i-feather></u-icon-example>
<u-icon-example title="volume"><i-feather name="volume"></i-feather></u-icon-example>
<u-icon-example title="watch"><i-feather name="watch"></i-feather></u-icon-example>
<u-icon-example title="wifi-off"><i-feather name="wifi-off"></i-feather></u-icon-example>
<u-icon-example title="wifi"><i-feather name="wifi"></i-feather></u-icon-example>
<u-icon-example title="wind"><i-feather name="wind"></i-feather></u-icon-example>
<u-icon-example title="x-circle"><i-feather name="x-circle"></i-feather></u-icon-example>
<u-icon-example title="x-square"><i-feather name="x-square"></i-feather></u-icon-example>
<u-icon-example title="x"><i-feather name="x"></i-feather></u-icon-example>
<u-icon-example title="youtube"><i-feather name="youtube"></i-feather></u-icon-example>
<u-icon-example title="zap-off"><i-feather name="zap-off"></i-feather></u-icon-example>
<u-icon-example title="zap"><i-feather name="zap"></i-feather></u-icon-example>
<u-icon-example title="zoom-in"><i-feather name="zoom-in"></i-feather></u-icon-example>
<u-icon-example title="zoom-out"><i-feather name="zoom-out"></i-feather></u-icon-example>
