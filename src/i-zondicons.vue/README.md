# Zondicons 图标

[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/i-zondicons.vue.svg?style=flat-square
[npm-url]: http://npmjs.org/package/i-zondicons.vue
[download-img]: https://img.shields.io/npm/dm/i-zondicons.vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/i-zondicons.vue

## 使用方法

### 在 CSS 中使用（推荐）

只引用具体的图标，可以减少最后的打包大小。

``` css
.bar::before {
    icon-font: url('i-zondicons.vue/assets/500px.svg');
}
```

### 在 Vue 组件中使用

需要先引入包

``` js
import IZondicons from 'i-zondicons.vue';

Vue.component(IZondicons);
```

然后按照如下方式使用

``` html
<i-zondicons name="500px"></i-zondicons>
```

## 图标集合

<u-icon-example title="add-outline"><i-zondicons name="add-outline"></i-zondicons></u-icon-example>
<u-icon-example title="add-solid"><i-zondicons name="add-solid"></i-zondicons></u-icon-example>
<u-icon-example title="adjust"><i-zondicons name="adjust"></i-zondicons></u-icon-example>
<u-icon-example title="airplane"><i-zondicons name="airplane"></i-zondicons></u-icon-example>
<u-icon-example title="album"><i-zondicons name="album"></i-zondicons></u-icon-example>
<u-icon-example title="align-center"><i-zondicons name="align-center"></i-zondicons></u-icon-example>
<u-icon-example title="align-justified"><i-zondicons name="align-justified"></i-zondicons></u-icon-example>
<u-icon-example title="align-left"><i-zondicons name="align-left"></i-zondicons></u-icon-example>
<u-icon-example title="align-right"><i-zondicons name="align-right"></i-zondicons></u-icon-example>
<u-icon-example title="anchor"><i-zondicons name="anchor"></i-zondicons></u-icon-example>
<u-icon-example title="announcement"><i-zondicons name="announcement"></i-zondicons></u-icon-example>
<u-icon-example title="apparel"><i-zondicons name="apparel"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-down"><i-zondicons name="arrow-down"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-left"><i-zondicons name="arrow-left"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-outline-down"><i-zondicons name="arrow-outline-down"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-outline-left"><i-zondicons name="arrow-outline-left"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-outline-right"><i-zondicons name="arrow-outline-right"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-outline-up"><i-zondicons name="arrow-outline-up"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-right"><i-zondicons name="arrow-right"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thick-down"><i-zondicons name="arrow-thick-down"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thick-left"><i-zondicons name="arrow-thick-left"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thick-right"><i-zondicons name="arrow-thick-right"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thick-up"><i-zondicons name="arrow-thick-up"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thin-down"><i-zondicons name="arrow-thin-down"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thin-left"><i-zondicons name="arrow-thin-left"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thin-right"><i-zondicons name="arrow-thin-right"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-thin-up"><i-zondicons name="arrow-thin-up"></i-zondicons></u-icon-example>
<u-icon-example title="arrow-up"><i-zondicons name="arrow-up"></i-zondicons></u-icon-example>
<u-icon-example title="artist"><i-zondicons name="artist"></i-zondicons></u-icon-example>
<u-icon-example title="at-symbol"><i-zondicons name="at-symbol"></i-zondicons></u-icon-example>
<u-icon-example title="attachment"><i-zondicons name="attachment"></i-zondicons></u-icon-example>
<u-icon-example title="backspace"><i-zondicons name="backspace"></i-zondicons></u-icon-example>
<u-icon-example title="backward-step"><i-zondicons name="backward-step"></i-zondicons></u-icon-example>
<u-icon-example title="backward"><i-zondicons name="backward"></i-zondicons></u-icon-example>
<u-icon-example title="badge"><i-zondicons name="badge"></i-zondicons></u-icon-example>
<u-icon-example title="battery-full"><i-zondicons name="battery-full"></i-zondicons></u-icon-example>
<u-icon-example title="battery-half"><i-zondicons name="battery-half"></i-zondicons></u-icon-example>
<u-icon-example title="battery-low"><i-zondicons name="battery-low"></i-zondicons></u-icon-example>
<u-icon-example title="beverage"><i-zondicons name="beverage"></i-zondicons></u-icon-example>
<u-icon-example title="block"><i-zondicons name="block"></i-zondicons></u-icon-example>
<u-icon-example title="bluetooth"><i-zondicons name="bluetooth"></i-zondicons></u-icon-example>
<u-icon-example title="bolt"><i-zondicons name="bolt"></i-zondicons></u-icon-example>
<u-icon-example title="book-reference"><i-zondicons name="book-reference"></i-zondicons></u-icon-example>
<u-icon-example title="bookmark-copy-2"><i-zondicons name="bookmark-copy-2"></i-zondicons></u-icon-example>
<u-icon-example title="bookmark-copy-3"><i-zondicons name="bookmark-copy-3"></i-zondicons></u-icon-example>
<u-icon-example title="bookmark-outline-add"><i-zondicons name="bookmark-outline-add"></i-zondicons></u-icon-example>
<u-icon-example title="bookmark-outline"><i-zondicons name="bookmark-outline"></i-zondicons></u-icon-example>
<u-icon-example title="bookmark"><i-zondicons name="bookmark"></i-zondicons></u-icon-example>
<u-icon-example title="border-all"><i-zondicons name="border-all"></i-zondicons></u-icon-example>
<u-icon-example title="border-bottom"><i-zondicons name="border-bottom"></i-zondicons></u-icon-example>
<u-icon-example title="border-horizontal"><i-zondicons name="border-horizontal"></i-zondicons></u-icon-example>
<u-icon-example title="border-inner"><i-zondicons name="border-inner"></i-zondicons></u-icon-example>
<u-icon-example title="border-left"><i-zondicons name="border-left"></i-zondicons></u-icon-example>
<u-icon-example title="border-none"><i-zondicons name="border-none"></i-zondicons></u-icon-example>
<u-icon-example title="border-outer"><i-zondicons name="border-outer"></i-zondicons></u-icon-example>
<u-icon-example title="border-right"><i-zondicons name="border-right"></i-zondicons></u-icon-example>
<u-icon-example title="border-top"><i-zondicons name="border-top"></i-zondicons></u-icon-example>
<u-icon-example title="border-vertical"><i-zondicons name="border-vertical"></i-zondicons></u-icon-example>
<u-icon-example title="box"><i-zondicons name="box"></i-zondicons></u-icon-example>
<u-icon-example title="brightness-down"><i-zondicons name="brightness-down"></i-zondicons></u-icon-example>
<u-icon-example title="brightness-up"><i-zondicons name="brightness-up"></i-zondicons></u-icon-example>
<u-icon-example title="browser-window-new"><i-zondicons name="browser-window-new"></i-zondicons></u-icon-example>
<u-icon-example title="browser-window-open"><i-zondicons name="browser-window-open"></i-zondicons></u-icon-example>
<u-icon-example title="browser-window"><i-zondicons name="browser-window"></i-zondicons></u-icon-example>
<u-icon-example title="bug"><i-zondicons name="bug"></i-zondicons></u-icon-example>
<u-icon-example title="buoy"><i-zondicons name="buoy"></i-zondicons></u-icon-example>
<u-icon-example title="calculator"><i-zondicons name="calculator"></i-zondicons></u-icon-example>
<u-icon-example title="calendar"><i-zondicons name="calendar"></i-zondicons></u-icon-example>
<u-icon-example title="camera"><i-zondicons name="camera"></i-zondicons></u-icon-example>
<u-icon-example title="chart-bar"><i-zondicons name="chart-bar"></i-zondicons></u-icon-example>
<u-icon-example title="chart-pie"><i-zondicons name="chart-pie"></i-zondicons></u-icon-example>
<u-icon-example title="chart"><i-zondicons name="chart"></i-zondicons></u-icon-example>
<u-icon-example title="chat-bubble-dots"><i-zondicons name="chat-bubble-dots"></i-zondicons></u-icon-example>
<u-icon-example title="checkmark-outline"><i-zondicons name="checkmark-outline"></i-zondicons></u-icon-example>
<u-icon-example title="checkmark"><i-zondicons name="checkmark"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-down"><i-zondicons name="cheveron-down"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-left"><i-zondicons name="cheveron-left"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-outline-down"><i-zondicons name="cheveron-outline-down"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-outline-left"><i-zondicons name="cheveron-outline-left"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-outline-right"><i-zondicons name="cheveron-outline-right"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-outline-up"><i-zondicons name="cheveron-outline-up"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-right"><i-zondicons name="cheveron-right"></i-zondicons></u-icon-example>
<u-icon-example title="cheveron-up"><i-zondicons name="cheveron-up"></i-zondicons></u-icon-example>
<u-icon-example title="clipboard"><i-zondicons name="clipboard"></i-zondicons></u-icon-example>
<u-icon-example title="close-outline"><i-zondicons name="close-outline"></i-zondicons></u-icon-example>
<u-icon-example title="close-solid"><i-zondicons name="close-solid"></i-zondicons></u-icon-example>
<u-icon-example title="close"><i-zondicons name="close"></i-zondicons></u-icon-example>
<u-icon-example title="cloud-upload"><i-zondicons name="cloud-upload"></i-zondicons></u-icon-example>
<u-icon-example title="cloud"><i-zondicons name="cloud"></i-zondicons></u-icon-example>
<u-icon-example title="code"><i-zondicons name="code"></i-zondicons></u-icon-example>
<u-icon-example title="coffee"><i-zondicons name="coffee"></i-zondicons></u-icon-example>
<u-icon-example title="cog"><i-zondicons name="cog"></i-zondicons></u-icon-example>
<u-icon-example title="color-palette"><i-zondicons name="color-palette"></i-zondicons></u-icon-example>
<u-icon-example title="compose"><i-zondicons name="compose"></i-zondicons></u-icon-example>
<u-icon-example title="computer-desktop"><i-zondicons name="computer-desktop"></i-zondicons></u-icon-example>
<u-icon-example title="computer-laptop"><i-zondicons name="computer-laptop"></i-zondicons></u-icon-example>
<u-icon-example title="conversation"><i-zondicons name="conversation"></i-zondicons></u-icon-example>
<u-icon-example title="copy"><i-zondicons name="copy"></i-zondicons></u-icon-example>
<u-icon-example title="credit-card"><i-zondicons name="credit-card"></i-zondicons></u-icon-example>
<u-icon-example title="currency-dollar"><i-zondicons name="currency-dollar"></i-zondicons></u-icon-example>
<u-icon-example title="dashboard"><i-zondicons name="dashboard"></i-zondicons></u-icon-example>
<u-icon-example title="date-add"><i-zondicons name="date-add"></i-zondicons></u-icon-example>
<u-icon-example title="dial-pad"><i-zondicons name="dial-pad"></i-zondicons></u-icon-example>
<u-icon-example title="directions"><i-zondicons name="directions"></i-zondicons></u-icon-example>
<u-icon-example title="document-add"><i-zondicons name="document-add"></i-zondicons></u-icon-example>
<u-icon-example title="document"><i-zondicons name="document"></i-zondicons></u-icon-example>
<u-icon-example title="dots-horizontal-double"><i-zondicons name="dots-horizontal-double"></i-zondicons></u-icon-example>
<u-icon-example title="dots-horizontal-triple"><i-zondicons name="dots-horizontal-triple"></i-zondicons></u-icon-example>
<u-icon-example title="download"><i-zondicons name="download"></i-zondicons></u-icon-example>
<u-icon-example title="duplicate"><i-zondicons name="duplicate"></i-zondicons></u-icon-example>
<u-icon-example title="edit-copy"><i-zondicons name="edit-copy"></i-zondicons></u-icon-example>
<u-icon-example title="edit-crop"><i-zondicons name="edit-crop"></i-zondicons></u-icon-example>
<u-icon-example title="edit-cut"><i-zondicons name="edit-cut"></i-zondicons></u-icon-example>
<u-icon-example title="edit-pencil"><i-zondicons name="edit-pencil"></i-zondicons></u-icon-example>
<u-icon-example title="education"><i-zondicons name="education"></i-zondicons></u-icon-example>
<u-icon-example title="envelope"><i-zondicons name="envelope"></i-zondicons></u-icon-example>
<u-icon-example title="exclamation-outline"><i-zondicons name="exclamation-outline"></i-zondicons></u-icon-example>
<u-icon-example title="exclamation-solid"><i-zondicons name="exclamation-solid"></i-zondicons></u-icon-example>
<u-icon-example title="explore"><i-zondicons name="explore"></i-zondicons></u-icon-example>
<u-icon-example title="factory"><i-zondicons name="factory"></i-zondicons></u-icon-example>
<u-icon-example title="fast-forward"><i-zondicons name="fast-forward"></i-zondicons></u-icon-example>
<u-icon-example title="fast-rewind"><i-zondicons name="fast-rewind"></i-zondicons></u-icon-example>
<u-icon-example title="film"><i-zondicons name="film"></i-zondicons></u-icon-example>
<u-icon-example title="filter"><i-zondicons name="filter"></i-zondicons></u-icon-example>
<u-icon-example title="flag"><i-zondicons name="flag"></i-zondicons></u-icon-example>
<u-icon-example title="flashlight"><i-zondicons name="flashlight"></i-zondicons></u-icon-example>
<u-icon-example title="folder-outline-add"><i-zondicons name="folder-outline-add"></i-zondicons></u-icon-example>
<u-icon-example title="folder-outline"><i-zondicons name="folder-outline"></i-zondicons></u-icon-example>
<u-icon-example title="folder"><i-zondicons name="folder"></i-zondicons></u-icon-example>
<u-icon-example title="format-bold"><i-zondicons name="format-bold"></i-zondicons></u-icon-example>
<u-icon-example title="format-font-size"><i-zondicons name="format-font-size"></i-zondicons></u-icon-example>
<u-icon-example title="format-italic"><i-zondicons name="format-italic"></i-zondicons></u-icon-example>
<u-icon-example title="format-text-size"><i-zondicons name="format-text-size"></i-zondicons></u-icon-example>
<u-icon-example title="format-underline"><i-zondicons name="format-underline"></i-zondicons></u-icon-example>
<u-icon-example title="forward-step"><i-zondicons name="forward-step"></i-zondicons></u-icon-example>
<u-icon-example title="forward"><i-zondicons name="forward"></i-zondicons></u-icon-example>
<u-icon-example title="gift"><i-zondicons name="gift"></i-zondicons></u-icon-example>
<u-icon-example title="globe"><i-zondicons name="globe"></i-zondicons></u-icon-example>
<u-icon-example title="hand-stop"><i-zondicons name="hand-stop"></i-zondicons></u-icon-example>
<u-icon-example title="hard-drive"><i-zondicons name="hard-drive"></i-zondicons></u-icon-example>
<u-icon-example title="headphones"><i-zondicons name="headphones"></i-zondicons></u-icon-example>
<u-icon-example title="heart"><i-zondicons name="heart"></i-zondicons></u-icon-example>
<u-icon-example title="home"><i-zondicons name="home"></i-zondicons></u-icon-example>
<u-icon-example title="hot"><i-zondicons name="hot"></i-zondicons></u-icon-example>
<u-icon-example title="hour-glass"><i-zondicons name="hour-glass"></i-zondicons></u-icon-example>
<u-icon-example title="inbox-check"><i-zondicons name="inbox-check"></i-zondicons></u-icon-example>
<u-icon-example title="inbox-download"><i-zondicons name="inbox-download"></i-zondicons></u-icon-example>
<u-icon-example title="inbox-full"><i-zondicons name="inbox-full"></i-zondicons></u-icon-example>
<u-icon-example title="inbox"><i-zondicons name="inbox"></i-zondicons></u-icon-example>
<u-icon-example title="indent-decrease"><i-zondicons name="indent-decrease"></i-zondicons></u-icon-example>
<u-icon-example title="indent-increase"><i-zondicons name="indent-increase"></i-zondicons></u-icon-example>
<u-icon-example title="information-outline"><i-zondicons name="information-outline"></i-zondicons></u-icon-example>
<u-icon-example title="information-solid"><i-zondicons name="information-solid"></i-zondicons></u-icon-example>
<u-icon-example title="key"><i-zondicons name="key"></i-zondicons></u-icon-example>
<u-icon-example title="keyboard"><i-zondicons name="keyboard"></i-zondicons></u-icon-example>
<u-icon-example title="layers"><i-zondicons name="layers"></i-zondicons></u-icon-example>
<u-icon-example title="library"><i-zondicons name="library"></i-zondicons></u-icon-example>
<u-icon-example title="light-bulb"><i-zondicons name="light-bulb"></i-zondicons></u-icon-example>
<u-icon-example title="link"><i-zondicons name="link"></i-zondicons></u-icon-example>
<u-icon-example title="list-add"><i-zondicons name="list-add"></i-zondicons></u-icon-example>
<u-icon-example title="list-bullet"><i-zondicons name="list-bullet"></i-zondicons></u-icon-example>
<u-icon-example title="list"><i-zondicons name="list"></i-zondicons></u-icon-example>
<u-icon-example title="load-balancer"><i-zondicons name="load-balancer"></i-zondicons></u-icon-example>
<u-icon-example title="location-current"><i-zondicons name="location-current"></i-zondicons></u-icon-example>
<u-icon-example title="location-food"><i-zondicons name="location-food"></i-zondicons></u-icon-example>
<u-icon-example title="location-gas-station"><i-zondicons name="location-gas-station"></i-zondicons></u-icon-example>
<u-icon-example title="location-hotel"><i-zondicons name="location-hotel"></i-zondicons></u-icon-example>
<u-icon-example title="location-marina"><i-zondicons name="location-marina"></i-zondicons></u-icon-example>
<u-icon-example title="location-park"><i-zondicons name="location-park"></i-zondicons></u-icon-example>
<u-icon-example title="location-restroom"><i-zondicons name="location-restroom"></i-zondicons></u-icon-example>
<u-icon-example title="location-shopping"><i-zondicons name="location-shopping"></i-zondicons></u-icon-example>
<u-icon-example title="location"><i-zondicons name="location"></i-zondicons></u-icon-example>
<u-icon-example title="lock-closed"><i-zondicons name="lock-closed"></i-zondicons></u-icon-example>
<u-icon-example title="lock-open"><i-zondicons name="lock-open"></i-zondicons></u-icon-example>
<u-icon-example title="map"><i-zondicons name="map"></i-zondicons></u-icon-example>
<u-icon-example title="menu"><i-zondicons name="menu"></i-zondicons></u-icon-example>
<u-icon-example title="mic"><i-zondicons name="mic"></i-zondicons></u-icon-example>
<u-icon-example title="minus-outline"><i-zondicons name="minus-outline"></i-zondicons></u-icon-example>
<u-icon-example title="minus-solid"><i-zondicons name="minus-solid"></i-zondicons></u-icon-example>
<u-icon-example title="mobile-devices"><i-zondicons name="mobile-devices"></i-zondicons></u-icon-example>
<u-icon-example title="mood-happy-outline"><i-zondicons name="mood-happy-outline"></i-zondicons></u-icon-example>
<u-icon-example title="mood-happy-solid"><i-zondicons name="mood-happy-solid"></i-zondicons></u-icon-example>
<u-icon-example title="mood-neutral-outline"><i-zondicons name="mood-neutral-outline"></i-zondicons></u-icon-example>
<u-icon-example title="mood-neutral-solid"><i-zondicons name="mood-neutral-solid"></i-zondicons></u-icon-example>
<u-icon-example title="mood-sad-outline"><i-zondicons name="mood-sad-outline"></i-zondicons></u-icon-example>
<u-icon-example title="mood-sad-solid"><i-zondicons name="mood-sad-solid"></i-zondicons></u-icon-example>
<u-icon-example title="mouse"><i-zondicons name="mouse"></i-zondicons></u-icon-example>
<u-icon-example title="music-album"><i-zondicons name="music-album"></i-zondicons></u-icon-example>
<u-icon-example title="music-artist"><i-zondicons name="music-artist"></i-zondicons></u-icon-example>
<u-icon-example title="music-notes"><i-zondicons name="music-notes"></i-zondicons></u-icon-example>
<u-icon-example title="music-playlist"><i-zondicons name="music-playlist"></i-zondicons></u-icon-example>
<u-icon-example title="navigation-more"><i-zondicons name="navigation-more"></i-zondicons></u-icon-example>
<u-icon-example title="network"><i-zondicons name="network"></i-zondicons></u-icon-example>
<u-icon-example title="news-paper"><i-zondicons name="news-paper"></i-zondicons></u-icon-example>
<u-icon-example title="notification"><i-zondicons name="notification"></i-zondicons></u-icon-example>
<u-icon-example title="notifications-outline"><i-zondicons name="notifications-outline"></i-zondicons></u-icon-example>
<u-icon-example title="notifications"><i-zondicons name="notifications"></i-zondicons></u-icon-example>
<u-icon-example title="paste"><i-zondicons name="paste"></i-zondicons></u-icon-example>
<u-icon-example title="pause-outline"><i-zondicons name="pause-outline"></i-zondicons></u-icon-example>
<u-icon-example title="pause-solid"><i-zondicons name="pause-solid"></i-zondicons></u-icon-example>
<u-icon-example title="pause"><i-zondicons name="pause"></i-zondicons></u-icon-example>
<u-icon-example title="pen-tool"><i-zondicons name="pen-tool"></i-zondicons></u-icon-example>
<u-icon-example title="phone"><i-zondicons name="phone"></i-zondicons></u-icon-example>
<u-icon-example title="photo"><i-zondicons name="photo"></i-zondicons></u-icon-example>
<u-icon-example title="php-elephant"><i-zondicons name="php-elephant"></i-zondicons></u-icon-example>
<u-icon-example title="pin"><i-zondicons name="pin"></i-zondicons></u-icon-example>
<u-icon-example title="play-outline"><i-zondicons name="play-outline"></i-zondicons></u-icon-example>
<u-icon-example title="play"><i-zondicons name="play"></i-zondicons></u-icon-example>
<u-icon-example title="playlist"><i-zondicons name="playlist"></i-zondicons></u-icon-example>
<u-icon-example title="plugin"><i-zondicons name="plugin"></i-zondicons></u-icon-example>
<u-icon-example title="portfolio"><i-zondicons name="portfolio"></i-zondicons></u-icon-example>
<u-icon-example title="printer"><i-zondicons name="printer"></i-zondicons></u-icon-example>
<u-icon-example title="pylon"><i-zondicons name="pylon"></i-zondicons></u-icon-example>
<u-icon-example title="question"><i-zondicons name="question"></i-zondicons></u-icon-example>
<u-icon-example title="queue"><i-zondicons name="queue"></i-zondicons></u-icon-example>
<u-icon-example title="radar-copy-2"><i-zondicons name="radar-copy-2"></i-zondicons></u-icon-example>
<u-icon-example title="radar"><i-zondicons name="radar"></i-zondicons></u-icon-example>
<u-icon-example title="radio"><i-zondicons name="radio"></i-zondicons></u-icon-example>
<u-icon-example title="refresh"><i-zondicons name="refresh"></i-zondicons></u-icon-example>
<u-icon-example title="reload"><i-zondicons name="reload"></i-zondicons></u-icon-example>
<u-icon-example title="reply-all"><i-zondicons name="reply-all"></i-zondicons></u-icon-example>
<u-icon-example title="reply"><i-zondicons name="reply"></i-zondicons></u-icon-example>
<u-icon-example title="repost"><i-zondicons name="repost"></i-zondicons></u-icon-example>
<u-icon-example title="save-disk"><i-zondicons name="save-disk"></i-zondicons></u-icon-example>
<u-icon-example title="screen-full"><i-zondicons name="screen-full"></i-zondicons></u-icon-example>
<u-icon-example title="search"><i-zondicons name="search"></i-zondicons></u-icon-example>
<u-icon-example title="send"><i-zondicons name="send"></i-zondicons></u-icon-example>
<u-icon-example title="servers"><i-zondicons name="servers"></i-zondicons></u-icon-example>
<u-icon-example title="share-01"><i-zondicons name="share-01"></i-zondicons></u-icon-example>
<u-icon-example title="share-alt"><i-zondicons name="share-alt"></i-zondicons></u-icon-example>
<u-icon-example title="share"><i-zondicons name="share"></i-zondicons></u-icon-example>
<u-icon-example title="shield"><i-zondicons name="shield"></i-zondicons></u-icon-example>
<u-icon-example title="shopping-cart"><i-zondicons name="shopping-cart"></i-zondicons></u-icon-example>
<u-icon-example title="show-sidebar"><i-zondicons name="show-sidebar"></i-zondicons></u-icon-example>
<u-icon-example title="shuffle"><i-zondicons name="shuffle"></i-zondicons></u-icon-example>
<u-icon-example title="stand-by"><i-zondicons name="stand-by"></i-zondicons></u-icon-example>
<u-icon-example title="star-full"><i-zondicons name="star-full"></i-zondicons></u-icon-example>
<u-icon-example title="station"><i-zondicons name="station"></i-zondicons></u-icon-example>
<u-icon-example title="step-backward"><i-zondicons name="step-backward"></i-zondicons></u-icon-example>
<u-icon-example title="step-forward"><i-zondicons name="step-forward"></i-zondicons></u-icon-example>
<u-icon-example title="stethoscope"><i-zondicons name="stethoscope"></i-zondicons></u-icon-example>
<u-icon-example title="store-front"><i-zondicons name="store-front"></i-zondicons></u-icon-example>
<u-icon-example title="stroke-width"><i-zondicons name="stroke-width"></i-zondicons></u-icon-example>
<u-icon-example title="subdirectory-left"><i-zondicons name="subdirectory-left"></i-zondicons></u-icon-example>
<u-icon-example title="subdirectory-right"><i-zondicons name="subdirectory-right"></i-zondicons></u-icon-example>
<u-icon-example title="swap"><i-zondicons name="swap"></i-zondicons></u-icon-example>
<u-icon-example title="tablet"><i-zondicons name="tablet"></i-zondicons></u-icon-example>
<u-icon-example title="tag"><i-zondicons name="tag"></i-zondicons></u-icon-example>
<u-icon-example title="target"><i-zondicons name="target"></i-zondicons></u-icon-example>
<u-icon-example title="text-box"><i-zondicons name="text-box"></i-zondicons></u-icon-example>
<u-icon-example title="text-decoration"><i-zondicons name="text-decoration"></i-zondicons></u-icon-example>
<u-icon-example title="thermometer"><i-zondicons name="thermometer"></i-zondicons></u-icon-example>
<u-icon-example title="thumbs-down"><i-zondicons name="thumbs-down"></i-zondicons></u-icon-example>
<u-icon-example title="thumbs-up"><i-zondicons name="thumbs-up"></i-zondicons></u-icon-example>
<u-icon-example title="ticket"><i-zondicons name="ticket"></i-zondicons></u-icon-example>
<u-icon-example title="time"><i-zondicons name="time"></i-zondicons></u-icon-example>
<u-icon-example title="timer"><i-zondicons name="timer"></i-zondicons></u-icon-example>
<u-icon-example title="tools-copy"><i-zondicons name="tools-copy"></i-zondicons></u-icon-example>
<u-icon-example title="translate"><i-zondicons name="translate"></i-zondicons></u-icon-example>
<u-icon-example title="trash"><i-zondicons name="trash"></i-zondicons></u-icon-example>
<u-icon-example title="travel-bus"><i-zondicons name="travel-bus"></i-zondicons></u-icon-example>
<u-icon-example title="travel-car"><i-zondicons name="travel-car"></i-zondicons></u-icon-example>
<u-icon-example title="travel-case"><i-zondicons name="travel-case"></i-zondicons></u-icon-example>
<u-icon-example title="travel-taxi-cab"><i-zondicons name="travel-taxi-cab"></i-zondicons></u-icon-example>
<u-icon-example title="travel-train"><i-zondicons name="travel-train"></i-zondicons></u-icon-example>
<u-icon-example title="travel-walk"><i-zondicons name="travel-walk"></i-zondicons></u-icon-example>
<u-icon-example title="travel"><i-zondicons name="travel"></i-zondicons></u-icon-example>
<u-icon-example title="trophy"><i-zondicons name="trophy"></i-zondicons></u-icon-example>
<u-icon-example title="tuning"><i-zondicons name="tuning"></i-zondicons></u-icon-example>
<u-icon-example title="upload"><i-zondicons name="upload"></i-zondicons></u-icon-example>
<u-icon-example title="usb"><i-zondicons name="usb"></i-zondicons></u-icon-example>
<u-icon-example title="user-add"><i-zondicons name="user-add"></i-zondicons></u-icon-example>
<u-icon-example title="user-group"><i-zondicons name="user-group"></i-zondicons></u-icon-example>
<u-icon-example title="user-solid-circle"><i-zondicons name="user-solid-circle"></i-zondicons></u-icon-example>
<u-icon-example title="user-solid-square"><i-zondicons name="user-solid-square"></i-zondicons></u-icon-example>
<u-icon-example title="user"><i-zondicons name="user"></i-zondicons></u-icon-example>
<u-icon-example title="vector"><i-zondicons name="vector"></i-zondicons></u-icon-example>
<u-icon-example title="video-camera"><i-zondicons name="video-camera"></i-zondicons></u-icon-example>
<u-icon-example title="view-carousel"><i-zondicons name="view-carousel"></i-zondicons></u-icon-example>
<u-icon-example title="view-column"><i-zondicons name="view-column"></i-zondicons></u-icon-example>
<u-icon-example title="view-hide"><i-zondicons name="view-hide"></i-zondicons></u-icon-example>
<u-icon-example title="view-list"><i-zondicons name="view-list"></i-zondicons></u-icon-example>
<u-icon-example title="view-show"><i-zondicons name="view-show"></i-zondicons></u-icon-example>
<u-icon-example title="view-tile"><i-zondicons name="view-tile"></i-zondicons></u-icon-example>
<u-icon-example title="volume-down"><i-zondicons name="volume-down"></i-zondicons></u-icon-example>
<u-icon-example title="volume-mute"><i-zondicons name="volume-mute"></i-zondicons></u-icon-example>
<u-icon-example title="volume-off"><i-zondicons name="volume-off"></i-zondicons></u-icon-example>
<u-icon-example title="volume-up"><i-zondicons name="volume-up"></i-zondicons></u-icon-example>
<u-icon-example title="wallet"><i-zondicons name="wallet"></i-zondicons></u-icon-example>
<u-icon-example title="watch"><i-zondicons name="watch"></i-zondicons></u-icon-example>
<u-icon-example title="window-new"><i-zondicons name="window-new"></i-zondicons></u-icon-example>
<u-icon-example title="window-open"><i-zondicons name="window-open"></i-zondicons></u-icon-example>
<u-icon-example title="window"><i-zondicons name="window"></i-zondicons></u-icon-example>
<u-icon-example title="wrench"><i-zondicons name="wrench"></i-zondicons></u-icon-example>
<u-icon-example title="yin-yang"><i-zondicons name="yin-yang"></i-zondicons></u-icon-example>
<u-icon-example title="zoom-in"><i-zondicons name="zoom-in"></i-zondicons></u-icon-example>
<u-icon-example title="zoom-out"><i-zondicons name="zoom-out"></i-zondicons></u-icon-example>
