## 使用方法

### 在 CSS 中按需引入（推荐）

在业务组件或项目公共组件`<i-icon>`的 CSS 中添加以下代码，按需引入单个图标：

``` css
.icon[name="delete"]::before {
    icon-font: url('i-material-design.vue/assets/filled/delete.svg');
}
```

> 点击下文中的示例可以复制路径代码。

### 直接使用 Vue 组件（不推荐）

这种方式会引入全部图标，不推荐使用。

1. 注册全局包

``` js
import IMaterialDesign from 'i-material-design.vue';

Vue.component('i-material-design', IMaterialDesign);
```

2. 然后按照如下方式使用

``` html
<div><i-material-design name="delete"></i-material-design> 删除</div>
<div><i-material-design name="delete" theme="outlined"></i-material-design> 轮廓主题</div>
<div><i-material-design name="delete" theme="rounded"></i-material-design> 圆角主题</div>
<div><i-material-design name="delete" theme="sharp"></i-material-design> 尖锐主题</div>
```

> 一个项目中推荐只使用一种图标主题。
>
> 双击下文中的示例可以复制组件代码。
