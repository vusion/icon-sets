# IZondicons 图标

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
    icon-font: url('i-zondicons.vue/assets/add-outline.svg');
}
```

### 在 Vue 组件中使用

需要先引入包

``` js
import IZondicons from 'i-zondicons.vue';

Vue.component('i-zondicons', IZondicons);
```

然后按照如下方式使用

``` html
<i-zondicons name="add-outline"></i-zondicons>
```

## 图标集合

<u-icon-example icon="i-zondicons" name="add-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="add-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="adjust"></u-icon-example>
<u-icon-example icon="i-zondicons" name="airplane"></u-icon-example>
<u-icon-example icon="i-zondicons" name="album"></u-icon-example>
<u-icon-example icon="i-zondicons" name="align-center"></u-icon-example>
<u-icon-example icon="i-zondicons" name="align-justified"></u-icon-example>
<u-icon-example icon="i-zondicons" name="align-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="align-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="anchor"></u-icon-example>
<u-icon-example icon="i-zondicons" name="announcement"></u-icon-example>
<u-icon-example icon="i-zondicons" name="apparel"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-outline-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-outline-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-outline-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-outline-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thick-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thick-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thick-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thick-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thin-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thin-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thin-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-thin-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="arrow-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="artist"></u-icon-example>
<u-icon-example icon="i-zondicons" name="at-symbol"></u-icon-example>
<u-icon-example icon="i-zondicons" name="attachment"></u-icon-example>
<u-icon-example icon="i-zondicons" name="backspace"></u-icon-example>
<u-icon-example icon="i-zondicons" name="backward-step"></u-icon-example>
<u-icon-example icon="i-zondicons" name="backward"></u-icon-example>
<u-icon-example icon="i-zondicons" name="badge"></u-icon-example>
<u-icon-example icon="i-zondicons" name="battery-full"></u-icon-example>
<u-icon-example icon="i-zondicons" name="battery-half"></u-icon-example>
<u-icon-example icon="i-zondicons" name="battery-low"></u-icon-example>
<u-icon-example icon="i-zondicons" name="beverage"></u-icon-example>
<u-icon-example icon="i-zondicons" name="block"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bluetooth"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bolt"></u-icon-example>
<u-icon-example icon="i-zondicons" name="book-reference"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bookmark-copy-2"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bookmark-copy-3"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bookmark-outline-add"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bookmark-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bookmark"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-all"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-bottom"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-horizontal"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-inner"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-none"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-outer"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-top"></u-icon-example>
<u-icon-example icon="i-zondicons" name="border-vertical"></u-icon-example>
<u-icon-example icon="i-zondicons" name="box"></u-icon-example>
<u-icon-example icon="i-zondicons" name="brightness-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="brightness-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="browser-window-new"></u-icon-example>
<u-icon-example icon="i-zondicons" name="browser-window-open"></u-icon-example>
<u-icon-example icon="i-zondicons" name="browser-window"></u-icon-example>
<u-icon-example icon="i-zondicons" name="bug"></u-icon-example>
<u-icon-example icon="i-zondicons" name="buoy"></u-icon-example>
<u-icon-example icon="i-zondicons" name="calculator"></u-icon-example>
<u-icon-example icon="i-zondicons" name="calendar"></u-icon-example>
<u-icon-example icon="i-zondicons" name="camera"></u-icon-example>
<u-icon-example icon="i-zondicons" name="chart-bar"></u-icon-example>
<u-icon-example icon="i-zondicons" name="chart-pie"></u-icon-example>
<u-icon-example icon="i-zondicons" name="chart"></u-icon-example>
<u-icon-example icon="i-zondicons" name="chat-bubble-dots"></u-icon-example>
<u-icon-example icon="i-zondicons" name="checkmark-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="checkmark"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-outline-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-outline-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-outline-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-outline-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cheveron-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="clipboard"></u-icon-example>
<u-icon-example icon="i-zondicons" name="close-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="close-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="close"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cloud-upload"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cloud"></u-icon-example>
<u-icon-example icon="i-zondicons" name="code"></u-icon-example>
<u-icon-example icon="i-zondicons" name="coffee"></u-icon-example>
<u-icon-example icon="i-zondicons" name="cog"></u-icon-example>
<u-icon-example icon="i-zondicons" name="color-palette"></u-icon-example>
<u-icon-example icon="i-zondicons" name="compose"></u-icon-example>
<u-icon-example icon="i-zondicons" name="computer-desktop"></u-icon-example>
<u-icon-example icon="i-zondicons" name="computer-laptop"></u-icon-example>
<u-icon-example icon="i-zondicons" name="conversation"></u-icon-example>
<u-icon-example icon="i-zondicons" name="copy"></u-icon-example>
<u-icon-example icon="i-zondicons" name="credit-card"></u-icon-example>
<u-icon-example icon="i-zondicons" name="currency-dollar"></u-icon-example>
<u-icon-example icon="i-zondicons" name="dashboard"></u-icon-example>
<u-icon-example icon="i-zondicons" name="date-add"></u-icon-example>
<u-icon-example icon="i-zondicons" name="dial-pad"></u-icon-example>
<u-icon-example icon="i-zondicons" name="directions"></u-icon-example>
<u-icon-example icon="i-zondicons" name="document-add"></u-icon-example>
<u-icon-example icon="i-zondicons" name="document"></u-icon-example>
<u-icon-example icon="i-zondicons" name="dots-horizontal-double"></u-icon-example>
<u-icon-example icon="i-zondicons" name="dots-horizontal-triple"></u-icon-example>
<u-icon-example icon="i-zondicons" name="download"></u-icon-example>
<u-icon-example icon="i-zondicons" name="duplicate"></u-icon-example>
<u-icon-example icon="i-zondicons" name="edit-copy"></u-icon-example>
<u-icon-example icon="i-zondicons" name="edit-crop"></u-icon-example>
<u-icon-example icon="i-zondicons" name="edit-cut"></u-icon-example>
<u-icon-example icon="i-zondicons" name="edit-pencil"></u-icon-example>
<u-icon-example icon="i-zondicons" name="education"></u-icon-example>
<u-icon-example icon="i-zondicons" name="envelope"></u-icon-example>
<u-icon-example icon="i-zondicons" name="exclamation-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="exclamation-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="explore"></u-icon-example>
<u-icon-example icon="i-zondicons" name="factory"></u-icon-example>
<u-icon-example icon="i-zondicons" name="fast-forward"></u-icon-example>
<u-icon-example icon="i-zondicons" name="fast-rewind"></u-icon-example>
<u-icon-example icon="i-zondicons" name="film"></u-icon-example>
<u-icon-example icon="i-zondicons" name="filter"></u-icon-example>
<u-icon-example icon="i-zondicons" name="flag"></u-icon-example>
<u-icon-example icon="i-zondicons" name="flashlight"></u-icon-example>
<u-icon-example icon="i-zondicons" name="folder-outline-add"></u-icon-example>
<u-icon-example icon="i-zondicons" name="folder-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="folder"></u-icon-example>
<u-icon-example icon="i-zondicons" name="format-bold"></u-icon-example>
<u-icon-example icon="i-zondicons" name="format-font-size"></u-icon-example>
<u-icon-example icon="i-zondicons" name="format-italic"></u-icon-example>
<u-icon-example icon="i-zondicons" name="format-text-size"></u-icon-example>
<u-icon-example icon="i-zondicons" name="format-underline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="forward-step"></u-icon-example>
<u-icon-example icon="i-zondicons" name="forward"></u-icon-example>
<u-icon-example icon="i-zondicons" name="gift"></u-icon-example>
<u-icon-example icon="i-zondicons" name="globe"></u-icon-example>
<u-icon-example icon="i-zondicons" name="hand-stop"></u-icon-example>
<u-icon-example icon="i-zondicons" name="hard-drive"></u-icon-example>
<u-icon-example icon="i-zondicons" name="headphones"></u-icon-example>
<u-icon-example icon="i-zondicons" name="heart"></u-icon-example>
<u-icon-example icon="i-zondicons" name="home"></u-icon-example>
<u-icon-example icon="i-zondicons" name="hot"></u-icon-example>
<u-icon-example icon="i-zondicons" name="hour-glass"></u-icon-example>
<u-icon-example icon="i-zondicons" name="inbox-check"></u-icon-example>
<u-icon-example icon="i-zondicons" name="inbox-download"></u-icon-example>
<u-icon-example icon="i-zondicons" name="inbox-full"></u-icon-example>
<u-icon-example icon="i-zondicons" name="inbox"></u-icon-example>
<u-icon-example icon="i-zondicons" name="indent-decrease"></u-icon-example>
<u-icon-example icon="i-zondicons" name="indent-increase"></u-icon-example>
<u-icon-example icon="i-zondicons" name="information-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="information-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="key"></u-icon-example>
<u-icon-example icon="i-zondicons" name="keyboard"></u-icon-example>
<u-icon-example icon="i-zondicons" name="layers"></u-icon-example>
<u-icon-example icon="i-zondicons" name="library"></u-icon-example>
<u-icon-example icon="i-zondicons" name="light-bulb"></u-icon-example>
<u-icon-example icon="i-zondicons" name="link"></u-icon-example>
<u-icon-example icon="i-zondicons" name="list-add"></u-icon-example>
<u-icon-example icon="i-zondicons" name="list-bullet"></u-icon-example>
<u-icon-example icon="i-zondicons" name="list"></u-icon-example>
<u-icon-example icon="i-zondicons" name="load-balancer"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-current"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-food"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-gas-station"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-hotel"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-marina"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-park"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-restroom"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location-shopping"></u-icon-example>
<u-icon-example icon="i-zondicons" name="location"></u-icon-example>
<u-icon-example icon="i-zondicons" name="lock-closed"></u-icon-example>
<u-icon-example icon="i-zondicons" name="lock-open"></u-icon-example>
<u-icon-example icon="i-zondicons" name="map"></u-icon-example>
<u-icon-example icon="i-zondicons" name="menu"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mic"></u-icon-example>
<u-icon-example icon="i-zondicons" name="minus-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="minus-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mobile-devices"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mood-happy-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mood-happy-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mood-neutral-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mood-neutral-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mood-sad-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mood-sad-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="mouse"></u-icon-example>
<u-icon-example icon="i-zondicons" name="music-album"></u-icon-example>
<u-icon-example icon="i-zondicons" name="music-artist"></u-icon-example>
<u-icon-example icon="i-zondicons" name="music-notes"></u-icon-example>
<u-icon-example icon="i-zondicons" name="music-playlist"></u-icon-example>
<u-icon-example icon="i-zondicons" name="navigation-more"></u-icon-example>
<u-icon-example icon="i-zondicons" name="network"></u-icon-example>
<u-icon-example icon="i-zondicons" name="news-paper"></u-icon-example>
<u-icon-example icon="i-zondicons" name="notification"></u-icon-example>
<u-icon-example icon="i-zondicons" name="notifications-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="notifications"></u-icon-example>
<u-icon-example icon="i-zondicons" name="paste"></u-icon-example>
<u-icon-example icon="i-zondicons" name="pause-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="pause-solid"></u-icon-example>
<u-icon-example icon="i-zondicons" name="pause"></u-icon-example>
<u-icon-example icon="i-zondicons" name="pen-tool"></u-icon-example>
<u-icon-example icon="i-zondicons" name="phone"></u-icon-example>
<u-icon-example icon="i-zondicons" name="photo"></u-icon-example>
<u-icon-example icon="i-zondicons" name="php-elephant"></u-icon-example>
<u-icon-example icon="i-zondicons" name="pin"></u-icon-example>
<u-icon-example icon="i-zondicons" name="play-outline"></u-icon-example>
<u-icon-example icon="i-zondicons" name="play"></u-icon-example>
<u-icon-example icon="i-zondicons" name="playlist"></u-icon-example>
<u-icon-example icon="i-zondicons" name="plugin"></u-icon-example>
<u-icon-example icon="i-zondicons" name="portfolio"></u-icon-example>
<u-icon-example icon="i-zondicons" name="printer"></u-icon-example>
<u-icon-example icon="i-zondicons" name="pylon"></u-icon-example>
<u-icon-example icon="i-zondicons" name="question"></u-icon-example>
<u-icon-example icon="i-zondicons" name="queue"></u-icon-example>
<u-icon-example icon="i-zondicons" name="radar-copy-2"></u-icon-example>
<u-icon-example icon="i-zondicons" name="radar"></u-icon-example>
<u-icon-example icon="i-zondicons" name="radio"></u-icon-example>
<u-icon-example icon="i-zondicons" name="refresh"></u-icon-example>
<u-icon-example icon="i-zondicons" name="reload"></u-icon-example>
<u-icon-example icon="i-zondicons" name="reply-all"></u-icon-example>
<u-icon-example icon="i-zondicons" name="reply"></u-icon-example>
<u-icon-example icon="i-zondicons" name="repost"></u-icon-example>
<u-icon-example icon="i-zondicons" name="save-disk"></u-icon-example>
<u-icon-example icon="i-zondicons" name="screen-full"></u-icon-example>
<u-icon-example icon="i-zondicons" name="search"></u-icon-example>
<u-icon-example icon="i-zondicons" name="send"></u-icon-example>
<u-icon-example icon="i-zondicons" name="servers"></u-icon-example>
<u-icon-example icon="i-zondicons" name="share-01"></u-icon-example>
<u-icon-example icon="i-zondicons" name="share-alt"></u-icon-example>
<u-icon-example icon="i-zondicons" name="share"></u-icon-example>
<u-icon-example icon="i-zondicons" name="shield"></u-icon-example>
<u-icon-example icon="i-zondicons" name="shopping-cart"></u-icon-example>
<u-icon-example icon="i-zondicons" name="show-sidebar"></u-icon-example>
<u-icon-example icon="i-zondicons" name="shuffle"></u-icon-example>
<u-icon-example icon="i-zondicons" name="stand-by"></u-icon-example>
<u-icon-example icon="i-zondicons" name="star-full"></u-icon-example>
<u-icon-example icon="i-zondicons" name="station"></u-icon-example>
<u-icon-example icon="i-zondicons" name="step-backward"></u-icon-example>
<u-icon-example icon="i-zondicons" name="step-forward"></u-icon-example>
<u-icon-example icon="i-zondicons" name="stethoscope"></u-icon-example>
<u-icon-example icon="i-zondicons" name="store-front"></u-icon-example>
<u-icon-example icon="i-zondicons" name="stroke-width"></u-icon-example>
<u-icon-example icon="i-zondicons" name="subdirectory-left"></u-icon-example>
<u-icon-example icon="i-zondicons" name="subdirectory-right"></u-icon-example>
<u-icon-example icon="i-zondicons" name="swap"></u-icon-example>
<u-icon-example icon="i-zondicons" name="tablet"></u-icon-example>
<u-icon-example icon="i-zondicons" name="tag"></u-icon-example>
<u-icon-example icon="i-zondicons" name="target"></u-icon-example>
<u-icon-example icon="i-zondicons" name="text-box"></u-icon-example>
<u-icon-example icon="i-zondicons" name="text-decoration"></u-icon-example>
<u-icon-example icon="i-zondicons" name="thermometer"></u-icon-example>
<u-icon-example icon="i-zondicons" name="thumbs-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="thumbs-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="ticket"></u-icon-example>
<u-icon-example icon="i-zondicons" name="time"></u-icon-example>
<u-icon-example icon="i-zondicons" name="timer"></u-icon-example>
<u-icon-example icon="i-zondicons" name="tools-copy"></u-icon-example>
<u-icon-example icon="i-zondicons" name="translate"></u-icon-example>
<u-icon-example icon="i-zondicons" name="trash"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel-bus"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel-car"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel-case"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel-taxi-cab"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel-train"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel-walk"></u-icon-example>
<u-icon-example icon="i-zondicons" name="travel"></u-icon-example>
<u-icon-example icon="i-zondicons" name="trophy"></u-icon-example>
<u-icon-example icon="i-zondicons" name="tuning"></u-icon-example>
<u-icon-example icon="i-zondicons" name="upload"></u-icon-example>
<u-icon-example icon="i-zondicons" name="usb"></u-icon-example>
<u-icon-example icon="i-zondicons" name="user-add"></u-icon-example>
<u-icon-example icon="i-zondicons" name="user-group"></u-icon-example>
<u-icon-example icon="i-zondicons" name="user-solid-circle"></u-icon-example>
<u-icon-example icon="i-zondicons" name="user-solid-square"></u-icon-example>
<u-icon-example icon="i-zondicons" name="user"></u-icon-example>
<u-icon-example icon="i-zondicons" name="vector"></u-icon-example>
<u-icon-example icon="i-zondicons" name="video-camera"></u-icon-example>
<u-icon-example icon="i-zondicons" name="view-carousel"></u-icon-example>
<u-icon-example icon="i-zondicons" name="view-column"></u-icon-example>
<u-icon-example icon="i-zondicons" name="view-hide"></u-icon-example>
<u-icon-example icon="i-zondicons" name="view-list"></u-icon-example>
<u-icon-example icon="i-zondicons" name="view-show"></u-icon-example>
<u-icon-example icon="i-zondicons" name="view-tile"></u-icon-example>
<u-icon-example icon="i-zondicons" name="volume-down"></u-icon-example>
<u-icon-example icon="i-zondicons" name="volume-mute"></u-icon-example>
<u-icon-example icon="i-zondicons" name="volume-off"></u-icon-example>
<u-icon-example icon="i-zondicons" name="volume-up"></u-icon-example>
<u-icon-example icon="i-zondicons" name="wallet"></u-icon-example>
<u-icon-example icon="i-zondicons" name="watch"></u-icon-example>
<u-icon-example icon="i-zondicons" name="window-new"></u-icon-example>
<u-icon-example icon="i-zondicons" name="window-open"></u-icon-example>
<u-icon-example icon="i-zondicons" name="window"></u-icon-example>
<u-icon-example icon="i-zondicons" name="wrench"></u-icon-example>
<u-icon-example icon="i-zondicons" name="yin-yang"></u-icon-example>
<u-icon-example icon="i-zondicons" name="zoom-in"></u-icon-example>
<u-icon-example icon="i-zondicons" name="zoom-out"></u-icon-example>
