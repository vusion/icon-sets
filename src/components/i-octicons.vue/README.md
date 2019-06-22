# IOcticons 图标

[![NPM Version][npm-img]][npm-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/i-octicons.vue.svg?style=flat-square
[npm-url]: http://npmjs.org/package/i-octicons.vue
[download-img]: https://img.shields.io/npm/dm/i-octicons.vue.svg?style=flat-square
[download-url]: https://npmjs.org/package/i-octicons.vue

## 使用方法

### 在 CSS 中使用（推荐）

只引用具体的图标，可以减少最后的打包大小。

``` css
.bar::before {
    icon-font: url('i-octicons.vue/assets/alert.svg');
}
```

### 在 Vue 组件中使用

需要先引入包

``` js
import IOcticons from 'i-octicons.vue';

Vue.component('i-octicons', IOcticons);
```

然后按照如下方式使用

``` html
<i-octicons name="alert"></i-octicons>
```

## 图标集合

<u-icon-example icon="i-octicons" name="alert"></u-icon-example>
<u-icon-example icon="i-octicons" name="archive"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-down"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-left"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-right"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-small-down"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-small-left"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-small-right"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-small-up"></u-icon-example>
<u-icon-example icon="i-octicons" name="arrow-up"></u-icon-example>
<u-icon-example icon="i-octicons" name="beaker"></u-icon-example>
<u-icon-example icon="i-octicons" name="bell"></u-icon-example>
<u-icon-example icon="i-octicons" name="bold"></u-icon-example>
<u-icon-example icon="i-octicons" name="book"></u-icon-example>
<u-icon-example icon="i-octicons" name="bookmark"></u-icon-example>
<u-icon-example icon="i-octicons" name="briefcase"></u-icon-example>
<u-icon-example icon="i-octicons" name="broadcast"></u-icon-example>
<u-icon-example icon="i-octicons" name="browser"></u-icon-example>
<u-icon-example icon="i-octicons" name="bug"></u-icon-example>
<u-icon-example icon="i-octicons" name="calendar"></u-icon-example>
<u-icon-example icon="i-octicons" name="check"></u-icon-example>
<u-icon-example icon="i-octicons" name="checklist"></u-icon-example>
<u-icon-example icon="i-octicons" name="chevron-down"></u-icon-example>
<u-icon-example icon="i-octicons" name="chevron-left"></u-icon-example>
<u-icon-example icon="i-octicons" name="chevron-right"></u-icon-example>
<u-icon-example icon="i-octicons" name="chevron-up"></u-icon-example>
<u-icon-example icon="i-octicons" name="circle-slash"></u-icon-example>
<u-icon-example icon="i-octicons" name="circuit-board"></u-icon-example>
<u-icon-example icon="i-octicons" name="clippy"></u-icon-example>
<u-icon-example icon="i-octicons" name="clock"></u-icon-example>
<u-icon-example icon="i-octicons" name="cloud-download"></u-icon-example>
<u-icon-example icon="i-octicons" name="cloud-upload"></u-icon-example>
<u-icon-example icon="i-octicons" name="code"></u-icon-example>
<u-icon-example icon="i-octicons" name="comment-discussion"></u-icon-example>
<u-icon-example icon="i-octicons" name="comment"></u-icon-example>
<u-icon-example icon="i-octicons" name="credit-card"></u-icon-example>
<u-icon-example icon="i-octicons" name="dash"></u-icon-example>
<u-icon-example icon="i-octicons" name="dashboard"></u-icon-example>
<u-icon-example icon="i-octicons" name="database"></u-icon-example>
<u-icon-example icon="i-octicons" name="desktop-download"></u-icon-example>
<u-icon-example icon="i-octicons" name="device-camera-video"></u-icon-example>
<u-icon-example icon="i-octicons" name="device-camera"></u-icon-example>
<u-icon-example icon="i-octicons" name="device-desktop"></u-icon-example>
<u-icon-example icon="i-octicons" name="device-mobile"></u-icon-example>
<u-icon-example icon="i-octicons" name="diff-added"></u-icon-example>
<u-icon-example icon="i-octicons" name="diff-ignored"></u-icon-example>
<u-icon-example icon="i-octicons" name="diff-modified"></u-icon-example>
<u-icon-example icon="i-octicons" name="diff-removed"></u-icon-example>
<u-icon-example icon="i-octicons" name="diff-renamed"></u-icon-example>
<u-icon-example icon="i-octicons" name="diff"></u-icon-example>
<u-icon-example icon="i-octicons" name="ellipsis"></u-icon-example>
<u-icon-example icon="i-octicons" name="eye"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-binary"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-code"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-directory"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-media"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-pdf"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-submodule"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-symlink-directory"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-symlink-file"></u-icon-example>
<u-icon-example icon="i-octicons" name="file-zip"></u-icon-example>
<u-icon-example icon="i-octicons" name="file"></u-icon-example>
<u-icon-example icon="i-octicons" name="flame"></u-icon-example>
<u-icon-example icon="i-octicons" name="fold"></u-icon-example>
<u-icon-example icon="i-octicons" name="gear"></u-icon-example>
<u-icon-example icon="i-octicons" name="gift"></u-icon-example>
<u-icon-example icon="i-octicons" name="gist-secret"></u-icon-example>
<u-icon-example icon="i-octicons" name="gist"></u-icon-example>
<u-icon-example icon="i-octicons" name="git-branch"></u-icon-example>
<u-icon-example icon="i-octicons" name="git-commit"></u-icon-example>
<u-icon-example icon="i-octicons" name="git-compare"></u-icon-example>
<u-icon-example icon="i-octicons" name="git-merge"></u-icon-example>
<u-icon-example icon="i-octicons" name="git-pull-request"></u-icon-example>
<u-icon-example icon="i-octicons" name="globe"></u-icon-example>
<u-icon-example icon="i-octicons" name="grabber"></u-icon-example>
<u-icon-example icon="i-octicons" name="graph"></u-icon-example>
<u-icon-example icon="i-octicons" name="heart"></u-icon-example>
<u-icon-example icon="i-octicons" name="history"></u-icon-example>
<u-icon-example icon="i-octicons" name="home"></u-icon-example>
<u-icon-example icon="i-octicons" name="horizontal-rule"></u-icon-example>
<u-icon-example icon="i-octicons" name="hubot"></u-icon-example>
<u-icon-example icon="i-octicons" name="inbox"></u-icon-example>
<u-icon-example icon="i-octicons" name="info"></u-icon-example>
<u-icon-example icon="i-octicons" name="issue-closed"></u-icon-example>
<u-icon-example icon="i-octicons" name="issue-opened"></u-icon-example>
<u-icon-example icon="i-octicons" name="issue-reopened"></u-icon-example>
<u-icon-example icon="i-octicons" name="italic"></u-icon-example>
<u-icon-example icon="i-octicons" name="jersey"></u-icon-example>
<u-icon-example icon="i-octicons" name="kebab-horizontal"></u-icon-example>
<u-icon-example icon="i-octicons" name="kebab-vertical"></u-icon-example>
<u-icon-example icon="i-octicons" name="key"></u-icon-example>
<u-icon-example icon="i-octicons" name="keyboard"></u-icon-example>
<u-icon-example icon="i-octicons" name="law"></u-icon-example>
<u-icon-example icon="i-octicons" name="light-bulb"></u-icon-example>
<u-icon-example icon="i-octicons" name="link-external"></u-icon-example>
<u-icon-example icon="i-octicons" name="link"></u-icon-example>
<u-icon-example icon="i-octicons" name="list-ordered"></u-icon-example>
<u-icon-example icon="i-octicons" name="list-unordered"></u-icon-example>
<u-icon-example icon="i-octicons" name="location"></u-icon-example>
<u-icon-example icon="i-octicons" name="lock"></u-icon-example>
<u-icon-example icon="i-octicons" name="logo-gist"></u-icon-example>
<u-icon-example icon="i-octicons" name="logo-github"></u-icon-example>
<u-icon-example icon="i-octicons" name="mail-read"></u-icon-example>
<u-icon-example icon="i-octicons" name="mail"></u-icon-example>
<u-icon-example icon="i-octicons" name="mark-github"></u-icon-example>
<u-icon-example icon="i-octicons" name="markdown"></u-icon-example>
<u-icon-example icon="i-octicons" name="megaphone"></u-icon-example>
<u-icon-example icon="i-octicons" name="mention"></u-icon-example>
<u-icon-example icon="i-octicons" name="milestone"></u-icon-example>
<u-icon-example icon="i-octicons" name="mirror"></u-icon-example>
<u-icon-example icon="i-octicons" name="mortar-board"></u-icon-example>
<u-icon-example icon="i-octicons" name="mute"></u-icon-example>
<u-icon-example icon="i-octicons" name="no-newline"></u-icon-example>
<u-icon-example icon="i-octicons" name="note"></u-icon-example>
<u-icon-example icon="i-octicons" name="octoface"></u-icon-example>
<u-icon-example icon="i-octicons" name="organization"></u-icon-example>
<u-icon-example icon="i-octicons" name="package"></u-icon-example>
<u-icon-example icon="i-octicons" name="paintcan"></u-icon-example>
<u-icon-example icon="i-octicons" name="pencil"></u-icon-example>
<u-icon-example icon="i-octicons" name="person"></u-icon-example>
<u-icon-example icon="i-octicons" name="pin"></u-icon-example>
<u-icon-example icon="i-octicons" name="plug"></u-icon-example>
<u-icon-example icon="i-octicons" name="plus-small"></u-icon-example>
<u-icon-example icon="i-octicons" name="plus"></u-icon-example>
<u-icon-example icon="i-octicons" name="primitive-dot"></u-icon-example>
<u-icon-example icon="i-octicons" name="primitive-square"></u-icon-example>
<u-icon-example icon="i-octicons" name="project"></u-icon-example>
<u-icon-example icon="i-octicons" name="pulse"></u-icon-example>
<u-icon-example icon="i-octicons" name="question"></u-icon-example>
<u-icon-example icon="i-octicons" name="quote"></u-icon-example>
<u-icon-example icon="i-octicons" name="radio-tower"></u-icon-example>
<u-icon-example icon="i-octicons" name="reply"></u-icon-example>
<u-icon-example icon="i-octicons" name="repo-clone"></u-icon-example>
<u-icon-example icon="i-octicons" name="repo-force-push"></u-icon-example>
<u-icon-example icon="i-octicons" name="repo-forked"></u-icon-example>
<u-icon-example icon="i-octicons" name="repo-pull"></u-icon-example>
<u-icon-example icon="i-octicons" name="repo-push"></u-icon-example>
<u-icon-example icon="i-octicons" name="repo"></u-icon-example>
<u-icon-example icon="i-octicons" name="report"></u-icon-example>
<u-icon-example icon="i-octicons" name="rocket"></u-icon-example>
<u-icon-example icon="i-octicons" name="rss"></u-icon-example>
<u-icon-example icon="i-octicons" name="ruby"></u-icon-example>
<u-icon-example icon="i-octicons" name="screen-full"></u-icon-example>
<u-icon-example icon="i-octicons" name="screen-normal"></u-icon-example>
<u-icon-example icon="i-octicons" name="search"></u-icon-example>
<u-icon-example icon="i-octicons" name="server"></u-icon-example>
<u-icon-example icon="i-octicons" name="settings"></u-icon-example>
<u-icon-example icon="i-octicons" name="shield"></u-icon-example>
<u-icon-example icon="i-octicons" name="sign-in"></u-icon-example>
<u-icon-example icon="i-octicons" name="sign-out"></u-icon-example>
<u-icon-example icon="i-octicons" name="smiley"></u-icon-example>
<u-icon-example icon="i-octicons" name="squirrel"></u-icon-example>
<u-icon-example icon="i-octicons" name="star"></u-icon-example>
<u-icon-example icon="i-octicons" name="stop"></u-icon-example>
<u-icon-example icon="i-octicons" name="sync"></u-icon-example>
<u-icon-example icon="i-octicons" name="tag"></u-icon-example>
<u-icon-example icon="i-octicons" name="tasklist"></u-icon-example>
<u-icon-example icon="i-octicons" name="telescope"></u-icon-example>
<u-icon-example icon="i-octicons" name="terminal"></u-icon-example>
<u-icon-example icon="i-octicons" name="text-size"></u-icon-example>
<u-icon-example icon="i-octicons" name="three-bars"></u-icon-example>
<u-icon-example icon="i-octicons" name="thumbsdown"></u-icon-example>
<u-icon-example icon="i-octicons" name="thumbsup"></u-icon-example>
<u-icon-example icon="i-octicons" name="tools"></u-icon-example>
<u-icon-example icon="i-octicons" name="trashcan"></u-icon-example>
<u-icon-example icon="i-octicons" name="triangle-down"></u-icon-example>
<u-icon-example icon="i-octicons" name="triangle-left"></u-icon-example>
<u-icon-example icon="i-octicons" name="triangle-right"></u-icon-example>
<u-icon-example icon="i-octicons" name="triangle-up"></u-icon-example>
<u-icon-example icon="i-octicons" name="unfold"></u-icon-example>
<u-icon-example icon="i-octicons" name="unmute"></u-icon-example>
<u-icon-example icon="i-octicons" name="unverified"></u-icon-example>
<u-icon-example icon="i-octicons" name="verified"></u-icon-example>
<u-icon-example icon="i-octicons" name="versions"></u-icon-example>
<u-icon-example icon="i-octicons" name="watch"></u-icon-example>
<u-icon-example icon="i-octicons" name="x"></u-icon-example>
<u-icon-example icon="i-octicons" name="zap"></u-icon-example>
