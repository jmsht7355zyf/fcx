---
title: bootstrap5基础入门
sidebar: auto
---

# <center>bootstrap5基础入门</center>

### <center>[详细内容请访问中文文档](https://www.bootstrap.cn/doc/read/94)</center>

## 浏览器和设备支持

### 移动设备

一般来说，Bootstrap 支持每个主要平台上的默认浏览器的最新版本。请主要，基于代理（proxy）模式的浏览器（例如 Opera Mini、Opera Mobile’s Turbo mode、UC Browser Mini、Amazon Silk，这些浏览器自身并不具备完整的页面渲染能力）是不被支持的。

|         | Chrome | Firefox | Safari | Android Browser & WebView |
| ------- | ------ | ------- | ------ | ------------------------- |
| Android | 支持   | 支持    | —      | v6.0+                     |
| iOS     | 支持   | 支持    | 支持   | —                         |

### 桌面浏览器

同样，大多数桌面浏览器的最新版本是被支持的。

|         | Chrome | Firefox | Microsoft Edge | Opera | Safari |
| ------- | ------ | ------- | -------------- | ----- | ------ |
| Mac     | 支持   | 支持    | 支持           | 支持  | 支持   |
| Windows | 支持   | 支持    | 支持           | 支持  | —      |

## 安装（包管理）

```sh
npm install bootstrap@next
```

## 栅格网络系统

### 断点（Breakpoints）

断点是可自定义的宽度，用于确定Bootstrap中如何跨设备或视口大小执行响应布局。

#### 核心概念

- 断点是响应式设计的基石。使用它们可以控制何时可以在特定视口或设备大小下调整布局。
- 使用媒体查询通过断点构建CSS。媒体查询是CSS的一项功能，它允许您根据一组浏览器和操作系统参数有条件地应用样式。我们在媒体查询中最常用的是最小宽度。
- 移动第一，响应性设计是我们的目标。Bootstrap的CSS旨在应用最少的样式，使布局在最小的断点处工作，然后对样式进行分层，以便为更大的设备调整设计。这优化了您的CSS，提高了渲染时间，并为您的访问者提供了极好的体验。

#### 可用断点

Bootstrap包括六个默认断点，有时称为网格层，用于响应地构建。如果您使用的是我们的源Sass文件，则可以自定义这些断点。

| 断点              | 类中缀 | 分辨率  |
| ----------------- | ------ | ------- |
| X-Small           | *None* | <576px  |
| Small             | `sm`   | ≥576px  |
| Medium            | `md`   | ≥768px  |
| Large             | `lg`   | ≥992px  |
| Extra large       | `xl`   | ≥1200px |
| Extra extra large | `xxl`  | ≥1400px |

每个断点都被选择用来容纳宽度为12倍的容器。断点也代表了常见设备尺寸和视口尺寸的子集，它们并不是专门针对每个用例或设备的。相反，这些范围为几乎任何设备提供了坚固和一致的基础。

这些断点可以通过Sass进行自定义，您可以在我们网站的Sass地图中找到它们_variables.scss 样式表。

```scss
$grid-breakpoints: (
xs: 0,
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px
);
```

### 媒体查询

由于Bootstrap的开发首先是移动的，所以我们使用少量的媒体查询为我们的布局和接口创建合理的断点。这些断点主要基于最小视口宽度，允许我们在视口更改时放大元素。

## 容器（Containers）

容器是Bootstrap的基本构建块，用于在给定的设备或窗口中包含、填充和对齐内容。

容器是Bootstrap中最基本的布局元素，在使用默认网格系统时是必需的。容器用于容纳、填充和（有时）集中其中的内容。虽然容器可以嵌套，但大多数布局不需要嵌套的容器。

Bootstrap附带三种不同的容器：

- `.container`, 在每个响应断点处设置最大宽度
- `.container-fluid`, 所有断点处100%
- `.container-{breakpoint}`, 宽度：100%，直到指定的断点

|                    | Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | X-Large ≥1200px | XX-Large ≥1400px |
| ------------------ | ------------------ | ------------ | ------------- | ------------ | --------------- | ---------------- |
| `.container`       | 100%               | 540px        | 720px         | 960px        | 1140px          | 1320px           |
| `.container-sm`    | 100%               | 540px        | 720px         | 960px        | 1140px          | 1320px           |
| `.container-md`    | 100%               | 100%         | 720px         | 960px        | 1140px          | 1320px           |
| `.container-lg`    | 100%               | 100%         | 100%          | 960px        | 1140px          | 1320px           |
| `.container-xl`    | 100%               | 100%         | 100%          | 100%         | 1140px          | 1320px           |
| `.container-xxl`   | 100%               | 100%         | 100%          | 100%         | 100%            | 1320px           |
| `.container-fluid` | 100%               | 100%         | 100%          | 100%         | 100%            | 100%             |

### 默认容器

我们的默认任容器类是一个响应的、固定宽度的容器，这意味着它的最大宽度在每个断点处都会改变。

```html
<div class="container">
<!-- Content here -->
</div>
```

### 响应式容器

响应容器允许您指定一个100%宽的类，直到达到指定的断点，然后我们为每个较高的断点应用最大宽度。例如，.container sm在到达sm断点之前是100%宽的，在这里它将以md、lg、xl和xxl进行扩展。

```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

### 流式容器

使用流式容器 `.container-fluid`作为全宽容器，横跨视口的整个宽度。

```html
<div class="container-fluid">
...
</div>
```

### Sass

如上所示，Bootstrap生成一系列预定义的容器类来帮助您构建所需的布局。您可以通过修改Sass映射（在`_variables.scss`中找到）来定制这些预定义的容器：

```scss
$container-max-widths: (
sm: 540px,
md: 720px,
lg: 960px,
xl: 1140px,
xxl: 1320px
);
```

除了定制Sass之外，您还可以使用我们的Sass mixin创建自己的容器。

```scss
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
width: 100%;
padding-right: $padding-x;
padding-left: $padding-x;
margin-right: auto;
margin-left: auto;
}

// Usage
.custom-container {
@include make-container();
}
```

## 网格（Grid）

### 网格选项

Bootstrap的网格系统可以适应所有六个默认断点，以及您自定义的任何断点。六个默认网格层如下所示：

- 超小型 (xs)
- 小型 (sm)
- 中等 (md)
- 大 (lg)
- 特大 (xl)
- 超特大 (xxl)

如上所述，每个断点都有自己的容器、唯一的类前缀和修饰符。以下是网格如何跨越这些断点进行更改：

|                       | xs <576px                                                   | sm ≥576px  | md ≥768px  | lg ≥992px  | xl ≥1200px | xxl ≥1400px |
| --------------------- | ----------------------------------------------------------- | ---------- | ---------- | ---------- | ---------- | ----------- |
| Container `max-width` | None (auto)                                                 | 540px      | 720px      | 960px      | 1140px     | 1320px      |
| Class prefix          | `.col-`                                                     | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` | `.col-xxl-` |
| # of columns          | 12                                                          |            |            |            |            |             |
| Gutter width          | 1.5rem (.75rem on left and right)                           |            |            |            |            |             |
| Custom gutters        | [Yes](https://www.bootstrap.cn/doc/read/23.html)            |            |            |            |            |             |
| Nestable              | [Yes](https://www.bootstrap.cn/doc/read/113.html#nesting)   |            |            |            |            |             |
| Column ordering       | [Yes](https://www.bootstrap.cn/doc/read/22.html#reordering) |            |            |            |            |             |

### 自动布局列

利用特定于断点的列类来轻松调整列大小，而不需要显式的编号类，如`.col-sm-6`。

### 等宽

为每个断点添加任意数量的无单元类，每个列的宽度都相同。

### 设置一个列宽

弹性盒子网格列的自动布局还意味着您可以设置一列的宽度，并使其周围的同级列自动调整大小。您可以使用预定义的网格类、网格混合或内联宽度。

### 可变宽度内容

使用`col-{breakpoint}-auto`类根据列内容的自然宽度调整列的大小。

### 响应类

Bootstrap的网格包括六层预定义的类，用于构建复杂的响应性布局。在您认为合适的超小型、小型、中型、大型或超大型设备上自定义列的大小。

### 所有断点

对于从最小设备到最大设备都相同的网格，请使用.col和.col-*类。当需要特别大的列时，指定一个大小编号的类。

### 水平堆放

使用一组.col sm-*类，可以创建一个基本的网格系统，该系统从堆叠开始，在小断点（sm）处变为水平。

### 混合和匹配

不希望列简单地堆叠在一些网格层中吗？根据需要为每一层使用不同类的组合。请参阅下面的示例，以更好地了解其工作原理

### 行和列

使用`.row-cols-*`类快速设置最能呈现内容和布局的列数。普通的`.col-*`类应用于各个列（例如.col-md-4），而`.row-cols-auto`类是作为快捷方式在父.row上设置的。使用`.row-cols-auto`可以为列指定其自然宽度。

### 嵌套

要使用默认网格嵌套内容，请在现有的.col sm-*列中添加一个新的.row和一组.col sm-*列。嵌套行应包含一组最多12个或更少的列（不要求使用所有12个可用列）。

## 列布局（Columns）

[详情请访问具体内容](https://www.bootstrap.cn/doc/read/114.html)

## 间隙（Gutters）

[详情请访问具体内容](https://www.bootstrap.cn/doc/read/115.html)

## 布局通用类（Utilities）

### 更改 `display`

Use our [display utilities](https://www.bootstrap.cn/doc/read/75.html) for responsively toggling common values of the `display` property. Mix it with our grid system, content, or components to show or hide them across specific viewports. 使用我们的显示实用程序来响应地切换display属性的公共值。将它与我们的网格系统、内容或组件混合，以便在特定的视口中显示或隐藏它们。

### 弹性盒子选项

Bootstrap是用flexbox构建的，但并不是每个元素的显示都被更改为display:flex，因为这将添加许多不必要的覆盖，并意外地更改关键浏览器行为。我们的大多数组件都是使用flexbox构建的。

如果需要将display:flex添加到元素中，请使用.d-flex或响应变体之一（例如`.d-sm-flex`）进行添加。您将需要这个类或显示值来允许使用我们额外的flexbox实用程序来调整大小、对齐、间距等。 `display: flex` to an element, do so with `.d-flex` or one of the

### Margin and padding

使用“边距”和“填充间距”（`margin` and `padding`）工具可以控制元素和组件的间距和大小。Bootstrap包含一个基于$spacer变量的1rem 默认值用于间隔实用程序的六级刻度。为所有视口选择值（例如，`.me-3`表示右边距：1rem in LTR），或选择响应变体以针对特定视口（例如，`.me-md-3`表示右边距：1rem-in LTR-从md断点开始）。

### 切换 `visibility`

当不需要切换显示`display`时，可以使用可见性实用程序切换元素的可见性`visibility`。不可见的元素仍然会影响页面的布局，但在视觉上对访问者是隐藏的。

## 层级（Z-index）

虽然z索引不是Bootstrap网格系统的一部分，但它在组件如何相互覆盖和交互方面起着重要的作用。

一些Bootstrap组件利用 `z-index`，CSS属性通过提供第三个轴来排列内容，从而帮助控制布局。我们在Bootstrap中使用了一个默认的z索引规模，它被设计用来正确地分层导航、工具提示和弹出窗口、模态等等。

这些较高的值从任意数字开始，足够高和特定，以理想地避免冲突。我们需要在我们的分层组件工具提示、弹出窗口、导航栏、下拉列表、模态中使用一组标准的工具，这样我们的行为就可以合理地保持一致。我们没有理由不使用100+或500+。

我们不鼓励定制这些数值；如果你更改一个，你可能需要把它们全部更改。

```scss
$zindex-dropdown:                   1000;
$zindex-sticky:                     1020;
$zindex-fixed:                      1030;
$zindex-offcanvas:                  1040;
$zindex-modal-backdrop:             1050;
$zindex-modal:                      1060;
$zindex-popover:                    1070;
$zindex-tooltip:                    1080;
```

为了处理组件内的重叠边界（例如，输入组中的按钮和输入），我们使用1、2和3的低位单位数z索引值作为默认、悬停和活动状态。在hover/focus/active上，我们使用更高的z索引值将特定元素置于最前面，以显示它们在兄弟元素上的边界。

