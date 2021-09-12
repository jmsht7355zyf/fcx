---
title: JavaScriptDom对象
sidebar: auto
---

# <center>JavaScriptDom对象</center>

## Document 对象

每个载入浏览器的 HTML 文档都会成为 Document 对象。

Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。

提示：Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

### Document 对象集合

| 集合                                                         | 描述                                     |
| :----------------------------------------------------------- | :--------------------------------------- |
| [all[\]](https://www.w3school.com.cn/jsref/coll_doc_all.asp) | 提供对文档中所有 HTML 元素的访问。       |
| [anchors[\]](https://www.w3school.com.cn/jsref/coll_doc_anchors.asp) | 返回对文档中所有 Anchor 对象的引用。     |
| applets                                                      | 返回对文档中所有 Applet 对象的引用。     |
| [forms[\]](https://www.w3school.com.cn/jsref/coll_doc_forms.asp) | 返回对文档中所有 Form 对象引用。         |
| [images[\]](https://www.w3school.com.cn/jsref/coll_doc_images.asp) | 返回对文档中所有 Image 对象引用。        |
| [links[\]](https://www.w3school.com.cn/jsref/coll_doc_links.asp) | 返回对文档中所有 Area 和 Link 对象引用。 |

### Document 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| body                                                         | 提供对 <body> 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 <frameset>。 |
| [cookie](https://www.w3school.com.cn/jsref/prop_doc_cookie.asp) | 设置或返回与当前文档有关的所有 cookie。                      |
| [domain](https://www.w3school.com.cn/jsref/prop_doc_domain.asp) | 返回当前文档的域名。                                         |
| [lastModified](https://www.w3school.com.cn/jsref/prop_doc_lastmodified.asp) | 返回文档被最后修改的日期和时间。                             |
| [referrer](https://www.w3school.com.cn/jsref/prop_doc_referrer.asp) | 返回载入当前文档的文档的 URL。                               |
| [title](https://www.w3school.com.cn/jsref/prop_doc_title.asp) | 返回当前文档的标题。                                         |
| [URL](https://www.w3school.com.cn/jsref/prop_doc_url.asp)    | 返回当前文档的 URL。                                         |

### Document 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [close()](https://www.w3school.com.cn/jsref/met_doc_close.asp) | 关闭用 document.open() 方法打开的输出流，并显示选定的数据。  |
| [getElementById()](https://www.w3school.com.cn/jsref/met_doc_getelementbyid.asp) | 返回对拥有指定 id 的第一个对象的引用。                       |
| [getElementsByName()](https://www.w3school.com.cn/jsref/met_doc_getelementsbyname.asp) | 返回带有指定名称的对象集合。                                 |
| [getElementsByTagName()](https://www.w3school.com.cn/jsref/met_doc_getelementsbytagname.asp) | 返回带有指定标签名的对象集合。                               |
| [open()](https://www.w3school.com.cn/jsref/met_doc_open.asp) | 打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。 |
| [write()](https://www.w3school.com.cn/jsref/met_doc_write.asp) | 向文档写 HTML 表达式 或 JavaScript 代码。                    |
| [writeln()](https://www.w3school.com.cn/jsref/met_doc_writeln.asp) | 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。  |

### Document 对象描述

HTMLDocument 接口对 DOM Document 接口进行了扩展，定义 HTML 专用的属性和方法。

很多属性和方法都是 HTMLCollection 对象（实际上是可以用数组或名称索引的只读数组），其中保存了对锚、表单、链接以及其他可脚本元素的引用。

这些集合属性都源自于 0 级 DOM。它们已经被 [Document.getElementsByTagName()](https://www.w3school.com.cn/jsref/met_doc_getelementsbytagname.asp) 所取代，但是仍然常常使用，因为他们很方便。

[write() 方法](https://www.w3school.com.cn/jsref/met_doc_write.asp)值得注意，在文档载入和解析的时候，它允许一个脚本向文档中插入动态生成的内容。

注意，在 1 级 DOM 中，HTMLDocument 定义了一个名为 [getElementById()](https://www.w3school.com.cn/jsref/met_doc_getelementbyid.asp) 的非常有用的方法。在 2 级 DOM 中，该方法已经被转移到了 Document 接口，它现在由 HTMLDocument 继承而不是由它定义了。

## HTML DOM 节点

在 HTML DOM （文档对象模型）中，每个部分都是节点：

- 文档本身是文档节点
- 所有 HTML 元素是元素节点
- 所有 HTML 属性是属性节点
- HTML 元素内的文本是文本节点
- 注释是注释节点

## Attr 对象

在 HTML DOM 中，*Attr* 对象表示 HTML 属性。

HTML 属性始终属于 HTML 元素。

### NamedNodeMap 对象

在 HTML DOM 中，*NamedNodeMap* 对象表示元素属性节点的无序集合。

NamedNodeMap 中的节点可通过名称或索引（数字）来访问。

### HTML DOM 节点

在 HTML DOM （文档对象模型）中，每个部分都是节点：

- 文档本身是文档节点
- 所有 HTML 元素是元素节点
- 所有 HTML 属性是属性节点
- HTML 元素内的文本是文本节点
- 注释是注释节点

## Element 对象

在 HTML DOM 中，Element 对象表示 HTML 元素。

Element 对象可以拥有类型为元素节点、文本节点、注释节点的子节点。

NodeList 对象表示节点列表，比如 HTML 元素的子节点集合。

元素也可以拥有属性。属性是属性节点

### 属性和方法

下面的属性和方法可用于所有 HTML 元素上：

| 属性 / 方法                                                  | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [element.accessKey](https://www.w3school.com.cn/jsref/prop_html_accesskey.asp) | 设置或返回元素的快捷键。                                     |
| [element.appendChild()](https://www.w3school.com.cn/jsref/met_node_appendchild.asp) | 向元素添加新的子节点，作为最后一个子节点。                   |
| [element.attributes](https://www.w3school.com.cn/jsref/prop_node_attributes.asp) | 返回元素属性的 NamedNodeMap。                                |
| [element.childNodes](https://www.w3school.com.cn/jsref/prop_node_childnodes.asp) | 返回元素子节点的 NodeList。                                  |
| [element.className](https://www.w3school.com.cn/jsref/prop_html_classname.asp) | 设置或返回元素的 class 属性。                                |
| element.clientHeight                                         | 返回元素的可见高度。                                         |
| element.clientWidth                                          | 返回元素的可见宽度。                                         |
| [element.cloneNode()](https://www.w3school.com.cn/jsref/met_node_clonenode.asp) | 克隆元素。                                                   |
| [element.compareDocumentPosition()](https://www.w3school.com.cn/jsref/met_node_comparedocumentposition.asp) | 比较两个元素的文档位置。                                     |
| [element.contentEditable](https://www.w3school.com.cn/jsref/prop_html_contenteditable.asp) | 设置或返回元素的文本方向。                                   |
| [element.dir](https://www.w3school.com.cn/jsref/prop_html_dir.asp) | 设置或返回元素的内容是否可编辑。                             |
| [element.firstChild](https://www.w3school.com.cn/jsref/prop_node_firstchild.asp) | 返回元素的首个子。                                           |
| [element.getAttribute()](https://www.w3school.com.cn/jsref/met_element_getattribute.asp) | 返回元素节点的指定属性值。                                   |
| [element.getAttributeNode()](https://www.w3school.com.cn/jsref/met_element_getattributenode.asp) | 返回指定的属性节点。                                         |
| [element.getElementsByTagName()](https://www.w3school.com.cn/jsref/met_element_getelementsbytagname.asp) | 返回拥有指定标签名的所有子元素的集合。                       |
| element.getFeature()                                         | 返回实现了指定特性的 API 的某个对象。                        |
| element.getUserData()                                        | 返回关联元素上键的对象。                                     |
| [element.hasAttribute()](https://www.w3school.com.cn/jsref/met_element_hasattribute.asp) | 如果元素拥有指定属性，则返回true，否则返回 false。           |
| [element.hasAttributes()](https://www.w3school.com.cn/jsref/met_node_hasattributes.asp) | 如果元素拥有属性，则返回 true，否则返回 false。              |
| [element.hasChildNodes()](https://www.w3school.com.cn/jsref/met_node_haschildnodes.asp) | 如果元素拥有子节点，则返回 true，否则 false。                |
| [element.id](https://www.w3school.com.cn/jsref/prop_html_id.asp) | 设置或返回元素的 id。                                        |
| [element.innerHTML](https://www.w3school.com.cn/jsref/prop_html_innerhtml.asp) | 设置或返回元素的内容。                                       |
| [element.insertBefore()](https://www.w3school.com.cn/jsref/met_node_insertbefore.asp) | 在指定的已有的子节点之前插入新节点。                         |
| [element.isContentEditable](https://www.w3school.com.cn/jsref/prop_html_iscontenteditable.asp) | 设置或返回元素的内容。                                       |
| [element.isDefaultNamespace()](https://www.w3school.com.cn/jsref/met_node_isdefaultnamespace.asp) | 如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。 |
| [element.isEqualNode()](https://www.w3school.com.cn/jsref/met_node_isequalnode.asp) | 检查两个元素是否相等。                                       |
| [element.isSameNode()](https://www.w3school.com.cn/jsref/met_node_issamenode.asp) | 检查两个元素是否是相同的节点。                               |
| [element.isSupported()](https://www.w3school.com.cn/jsref/met_node_issupported.asp) | 如果元素支持指定特性，则返回 true。                          |
| [element.lang](https://www.w3school.com.cn/jsref/prop_html_lang.asp) | 设置或返回元素的语言代码。                                   |
| [element.lastChild](https://www.w3school.com.cn/jsref/prop_node_lastchild.asp) | 返回元素的最后一个子元素。                                   |
| [element.namespaceURI](https://www.w3school.com.cn/jsref/prop_node_namespaceuri.asp) | 返回元素的 namespace URI。                                   |
| [element.nextSibling](https://www.w3school.com.cn/jsref/prop_node_nextsibling.asp) | 返回位于相同节点树层级的下一个节点。                         |
| [element.nodeName](https://www.w3school.com.cn/jsref/prop_node_nodename.asp) | 返回元素的名称。                                             |
| [element.nodeType](https://www.w3school.com.cn/jsref/prop_node_nodetype.asp) | 返回元素的节点类型。                                         |
| [element.nodeValue](https://www.w3school.com.cn/jsref/prop_node_nodevalue.asp) | 设置或返回元素值。                                           |
| [element.normalize()](https://www.w3school.com.cn/jsref/met_node_normalize.asp) | 合并元素中相邻的文本节点，并移除空的文本节点。               |
| element.offsetHeight                                         | 返回元素的高度。                                             |
| element.offsetWidth                                          | 返回元素的宽度。                                             |
| element.offsetLeft                                           | 返回元素的水平偏移位置。                                     |
| element.offsetParent                                         | 返回元素的偏移容器。                                         |
| element.offsetTop                                            | 返回元素的垂直偏移位置。                                     |
| [element.ownerDocument](https://www.w3school.com.cn/jsref/prop_node_ownerdocument.asp) | 返回元素的根元素（文档对象）。                               |
| [element.parentNode](https://www.w3school.com.cn/jsref/prop_node_parentnode.asp) | 返回元素的父节点。                                           |
| [element.previousSibling](https://www.w3school.com.cn/jsref/prop_node_previoussibling.asp) | 返回位于相同节点树层级的前一个元素。                         |
| [element.removeAttribute()](https://www.w3school.com.cn/jsref/met_element_removeattribute.asp) | 从元素中移除指定属性。                                       |
| [element.removeAttributeNode()](https://www.w3school.com.cn/jsref/met_element_removeattributenode.asp) | 移除指定的属性节点，并返回被移除的节点。                     |
| [element.removeChild()](https://www.w3school.com.cn/jsref/met_node_removechild.asp) | 从元素中移除子节点。                                         |
| [element.replaceChild()](https://www.w3school.com.cn/jsref/met_node_replacechild.asp) | 替换元素中的子节点。                                         |
| element.scrollHeight                                         | 返回元素的整体高度。                                         |
| element.scrollLeft                                           | 返回元素左边缘与视图之间的距离。                             |
| element.scrollTop                                            | 返回元素上边缘与视图之间的距离。                             |
| element.scrollWidth                                          | 返回元素的整体宽度。                                         |
| [element.setAttribute()](https://www.w3school.com.cn/jsref/met_element_setattribute.asp) | 把指定属性设置或更改为指定值。                               |
| [element.setAttributeNode()](https://www.w3school.com.cn/jsref/met_element_setattributenode.asp) | 设置或更改指定属性节点。                                     |
| element.setIdAttribute()                                     |                                                              |
| element.setIdAttributeNode()                                 |                                                              |
| element.setUserData()                                        | 把对象关联到元素上的键。                                     |
| element.style                                                | 设置或返回元素的 style 属性。                                |
| [element.tabIndex](https://www.w3school.com.cn/jsref/prop_html_tabindex.asp) | 设置或返回元素的 tab 键控制次序。                            |
| [element.tagName](https://www.w3school.com.cn/jsref/prop_element_tagname.asp) | 返回元素的标签名。                                           |
| [element.textContent](https://www.w3school.com.cn/jsref/prop_node_textcontent.asp) | 设置或返回节点及其后代的文本内容。                           |
| [element.title](https://www.w3school.com.cn/jsref/prop_html_title.asp) | 设置或返回元素的 title 属性。                                |
| element.toString()                                           | 把元素转换为字符串。                                         |
| [nodelist.item()](https://www.w3school.com.cn/jsref/met_nodelist_item.asp) | 返回 NodeList 中位于指定下标的节点。                         |
| [nodelist.length](https://www.w3school.com.cn/jsref/prop_nodelist_length.asp) | 返回 NodeList 中的节点数。                                   |

## HTML DOM 事件

### HTML DOM 事件

HTML DOM 事件允许 JavaScript 在 HTML 文档中的元素上注册不同的事件处理程序。

事件通常与函数结合使用，在事件发生之前函数不会被执行（例如当用户单击按钮时）。

| 事件                                                         | 描述                                                         | 属于                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [abort](https://www.w3school.com.cn/jsref/event_onabort_media.asp) | 媒体加载中止时发生该事件。                                   | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [afterprint](https://www.w3school.com.cn/jsref/event_onafterprint.asp) | 当页面开始打印时，或者关闭打印对话框时，发生此事件。         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [animationend](https://www.w3school.com.cn/jsref/event_animationend.asp) | CSS 动画完成时发生此事件。                                   | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [animationiteration](https://www.w3school.com.cn/jsref/event_animationiteration.asp) | 重复 CSS 动画时发生此事件。                                  | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [animationstart](https://www.w3school.com.cn/jsref/event_animationstart.asp) | CSS 动画开始时发生此事件。                                   | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [beforeprint](https://www.w3school.com.cn/jsref/event_onbeforeprint.asp) | 即将打印页面时发生此事件。                                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [beforeunload](https://www.w3school.com.cn/jsref/event_onbeforeunload.asp) | 在文档即将被卸载之前发生此事件。                             | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [blur](https://www.w3school.com.cn/jsref/event_onblur.asp)   | 当元素失去焦点时发生此事件。                                 | [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) |
| [canplay](https://www.w3school.com.cn/jsref/event_oncanplay.asp) | 当浏览器可以开始播放媒体时，发生此事件。                     | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [canplaythrough](https://www.w3school.com.cn/jsref/event_oncanplaythrough.asp) | 当浏览器可以在不停止缓冲的情况下播放媒体时发生此事件。       | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [change](https://www.w3school.com.cn/jsref/event_onchange.asp) | 当form元素的内容、选择的内容或选中的状态发生改变时，发生此事件 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [click](https://www.w3school.com.cn/jsref/event_onclick.asp) | 当用户单击元素时发生此事件。                                 | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [contextmenu](https://www.w3school.com.cn/jsref/event_oncontextmenu.asp) | 当用户右键单击某个元素以打开上下文菜单时，发生此事件。       | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [copy](https://www.w3school.com.cn/jsref/event_oncopy.asp)   | 当用户复制元素的内容时发生此事件。                           | [ClipboardEvent](https://www.w3school.com.cn/jsref/obj_clipboardevent.asp) |
| [cut](https://www.w3school.com.cn/jsref/event_oncut.asp)     | 当用户剪切元素的内容时发生此事件。                           | [ClipboardEvent](https://www.w3school.com.cn/jsref/obj_clipboardevent.asp) |
| [dblclick](https://www.w3school.com.cn/jsref/event_ondblclick.asp) | 当用户双击元素时发生此事件。                                 | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [drag](https://www.w3school.com.cn/jsref/event_ondrag.asp)   | 拖动元素时发生此事件。                                       | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [dragend](https://www.w3school.com.cn/jsref/event_ondragend.asp) | 当用户完成拖动元素后，发生此事件。                           | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [dragenter](https://www.w3school.com.cn/jsref/event_ondragenter.asp) | 当拖动的元素进入放置目标时，发生此事件。                     | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [dragleave](https://www.w3school.com.cn/jsref/event_ondragleave.asp) | 当拖动的元素离开放置目标时，发生此事件。                     | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [dragover](https://www.w3school.com.cn/jsref/event_ondragover.asp) | 当拖动的元素位于放置目标之上时，发生此事件。                 | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [dragstart](https://www.w3school.com.cn/jsref/event_ondragstart.asp) | 当用户开始拖动元素时发生此事件。                             | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [drop](https://www.w3school.com.cn/jsref/event_ondrop.asp)   | 当将拖动的元素放置在放置目标上时，发生此事件。               | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) |
| [durationchange](https://www.w3school.com.cn/jsref/event_ondurationchange.asp) | 媒体时长改变时发生此事件。                                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [ended](https://www.w3school.com.cn/jsref/event_onended.asp) | 在媒体播放到尽头时发生此事件。                               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [error](https://www.w3school.com.cn/jsref/event_onerror.asp) | 当加载外部文件时发生错误后，发生此事件。                     | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp)[UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [focus](https://www.w3school.com.cn/jsref/event_onfocus.asp) | 在元素获得焦点时发生此事件。                                 | [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) |
| [focusin](https://www.w3school.com.cn/jsref/event_onfocusin.asp) | 在元素即将获得焦点时发生此事件。                             | [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) |
| [focusout](https://www.w3school.com.cn/jsref/event_onfocusout.asp) | 在元素即将失去焦点时发生此事件。                             | [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) |
| [fullscreenchange](https://www.w3school.com.cn/jsref/event_fullscreenchange.asp) | 当元素以全屏模式显示时，发生此事件。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [fullscreenerror](https://www.w3school.com.cn/jsref/event_fullscreenerror.asp) | 当元素无法在全屏模式下显示时，发生此事件。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [hashchange](https://www.w3school.com.cn/jsref/event_onhashchange.asp) | 当 URL 的锚部分发生改变时，发生此事件。                      | [HashChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) |
| [input](https://www.w3school.com.cn/jsref/event_oninput.asp) | 当元素获得用户输入时，发生此事件。                           | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [invalid](https://www.w3school.com.cn/jsref/event_oninvalid.asp) | 当元素无效时，发生此事件。                                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [keydown](https://www.w3school.com.cn/jsref/event_onkeydown.asp) | 当用户正在按下键时，发生此事件。                             | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [keypress](https://www.w3school.com.cn/jsref/event_onkeypress.asp) | 当用户按下键时，发生此事件。                                 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [keyup](https://www.w3school.com.cn/jsref/event_onkeyup.asp) | 当用户松开键时，发生此事件。                                 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [load](https://www.w3school.com.cn/jsref/event_onload.asp)   | 在对象已加载时，发生此事件。                                 | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [loadeddata](https://www.w3school.com.cn/jsref/event_onloadeddata.asp) | 媒体数据加载后，发生此事件。                                 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [loadedmetadata](https://www.w3school.com.cn/jsref/event_onloadedmetadata.asp) | 加载元数据（比如尺寸和持续时间）时，发生此事件。             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [loadstart](https://www.w3school.com.cn/jsref/event_onloadstart.asp) | 当浏览器开始查找指定的媒体时，发生此事件。                   | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| [message](https://www.w3school.com.cn/jsref/event_onmessage_sse.asp) | 在通过此事件源接收消息时，发生此事件。                       | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [mousedown](https://www.w3school.com.cn/jsref/event_onmousedown.asp) | 当用户在元素上按下鼠标按钮时，发生此事件。                   | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [mouseenter](https://www.w3school.com.cn/jsref/event_onmouseenter.asp) | 当指针移动到元素上时，发生此事件。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [mouseleave](https://www.w3school.com.cn/jsref/event_onmouseleave.asp) | 当指针从元素上移出时，发生此事件。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [mousemove](https://www.w3school.com.cn/jsref/event_onmousemove.asp) | 当指针在元素上方移动时，发生此事件。                         | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [mouseout](https://www.w3school.com.cn/jsref/event_onmouseout.asp) | 当用户将鼠标指针移出元素或其中的子元素时，发生此事件。       | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [mouseover](https://www.w3school.com.cn/jsref/event_onmouseover.asp) | 当指针移动到元素或其中的子元素上时，发生此事件。             | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [mouseup](https://www.w3school.com.cn/jsref/event_onmouseup.asp) | 当用户在元素上释放鼠标按钮时，发生此事件。                   | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| mousewheel                                                   | 不推荐使用。请改用 [wheel](https://www.w3school.com.cn/jsref/event_onwheel.asp) 事件。 | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [offline](https://www.w3school.com.cn/jsref/event_onoffline.asp) | 当浏览器开始脱机工作时，发生此事件。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [online](https://www.w3school.com.cn/jsref/event_ononline.asp) | 当浏览器开始在线工作时，发生此事件。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [open](https://www.w3school.com.cn/jsref/event_onopen_sse.asp) | 当打开与事件源的连接时，发生此事件。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [pagehide](https://www.w3school.com.cn/jsref/event_onpagehide.asp) | 当用户离开某张网页进行导航时，发生此事件。                   | [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) |
| [pageshow](https://www.w3school.com.cn/jsref/event_onpageshow.asp) | 在用户导航到某张网页时，发生此事件。                         | [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) |
| [paste](https://www.w3school.com.cn/jsref/event_onpaste.asp) | 当用户将一些内容粘贴到元素中时，发生此事件。                 | [ClipboardEvent](https://www.w3school.com.cn/jsref/obj_clipboardevent.asp) |
| [pause](https://www.w3school.com.cn/jsref/event_onpause.asp) | 当媒体被用户暂停或以编程方式暂停时，发生此事件。             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [play](https://www.w3school.com.cn/jsref/event_onplay.asp)   | 当媒体已启动或不再暂停时，发生此事件。                       | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [playing](https://www.w3school.com.cn/jsref/event_onplaying.asp) | 在媒体被暂停或停止以缓冲后播放时，发生此事件。               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| popstate                                                     | 窗口的历史记录改变时，发生此事件。                           | [PopStateEvent](https://www.w3school.com.cn/jsref/obj_popstateevent.asp) |
| [progress](https://www.w3school.com.cn/jsref/event_onprogress.asp) | 当浏览器正处于获得媒体数据的过程中时，发生此事件。           | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [ratechange](https://www.w3school.com.cn/jsref/event_onratechange.asp) | 媒体播放速度改变时发生此事件。                               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [reset](https://www.w3school.com.cn/jsref/event_onreset.asp) | 重置表单时发生此事件。                                       | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [resize](https://www.w3school.com.cn/jsref/event_onresize.asp) | 调整文档视图的大小时发生此事件。                             | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [scroll](https://www.w3school.com.cn/jsref/event_onscroll.asp) | 滚动元素的滚动条时发生此事件。                               | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [search](https://www.w3school.com.cn/jsref/event_onsearch.asp) | 当用户在搜索字段中输入内容时，发生此事件。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [seeked](https://www.w3school.com.cn/jsref/event_onseeked.asp) | 当用户完成移动/跳到媒体中的新位置时，发生该事件。            | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [seeking](https://www.w3school.com.cn/jsref/event_onseeking.asp) | 当用户开始移动/跳到媒体中的新位置时，发生该事件。            | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [select](https://www.w3school.com.cn/jsref/event_onselect.asp) | 用户选择文本后（对于<input>和<textarea>）发生此事件          | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [show](https://www.w3school.com.cn/jsref/event_onshow.asp)   | 当 <menu> 元素显示为上下文菜单时，发生此事件。               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [stalled](https://www.w3school.com.cn/jsref/event_onstalled.asp) | 当浏览器尝试获取媒体数据但数据不可用时，发生此事件。         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| storage                                                      | Web 存储区域更新时发生此事件。                               | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [submit](https://www.w3school.com.cn/jsref/event_onsubmit.asp) | 在提交表单时发生此事件。                                     | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [suspend](https://www.w3school.com.cn/jsref/event_onsuspend.asp) | 当浏览器有意不获取媒体数据时，发生此事件。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [timeupdate](https://www.w3school.com.cn/jsref/event_ontimeupdate.asp) | 当播放位置更改时发生此事件。                                 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [toggle](https://www.w3school.com.cn/jsref/event_ontoggle.asp) | 当用户打开或关闭 <details> 元素时，发生此事件。              | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [touchcancel](https://www.w3school.com.cn/jsref/event_touchcancel.asp) | 在触摸被中断时，发生此事件。                                 | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [touchend](https://www.w3school.com.cn/jsref/event_touchend.asp) | 当手指从触摸屏上移开时，发生此事件。                         | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [touchmove](https://www.w3school.com.cn/jsref/event_touchmove.asp) | 当手指在屏幕上拖动时，发生此事件。                           | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [touchstart](https://www.w3school.com.cn/jsref/event_touchstart.asp) | 当手指放在触摸屏上时，发生此事件。                           | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [transitionend](https://www.w3school.com.cn/jsref/event_transitionend.asp) | CSS 转换完成时，发生此事件。                                 | [TransitionEvent](https://www.w3school.com.cn/jsref/obj_transitionevent.asp) |
| [unload](https://www.w3school.com.cn/jsref/event_onunload.asp) | 页面卸载后（对于 <body>），发生此事件。                      | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp)[Event](https://www.w3school.com.cn/jsref/obj_event.asp) |
| [volumechange](https://www.w3school.com.cn/jsref/event_onvolumechange.asp) | 当媒体的音量已更改时，发生此事件。                           | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [waiting](https://www.w3school.com.cn/jsref/event_onwaiting.asp) | 当媒体已暂停但预期会恢复时，发生此事件。                     | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [wheel](https://www.w3school.com.cn/jsref/event_onwheel.asp) | 当鼠标滚轮在元素向上或向下滚动时，发生此事件。               | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |

### HTML DOM 事件属性和方法

| 属性/方法                                                    | 描述                                                         | 属于                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [altKey](https://www.w3school.com.cn/jsref/event_altkey.asp) | 返回触发鼠标事件时是否按下了 "ALT" 键。                      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [altKey](https://www.w3school.com.cn/jsref/event_key_altkey.asp) | 返回触发按键事件时是否按下了 "ALT" 键。                      | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [animationName](https://www.w3school.com.cn/jsref/event_animation_animationName.asp) | 返回动画的名称。                                             | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [bubbles](https://www.w3school.com.cn/jsref/event_bubbles.asp) | 返回特定事件是否为冒泡事件。                                 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [button](https://www.w3school.com.cn/jsref/event_button.asp) | 返回触发鼠标事件时按下的鼠标按钮。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [buttons](https://www.w3school.com.cn/jsref/event_buttons.asp) | 返回触发鼠标事件时按下的鼠标按钮。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [cancelBubble](https://www.w3school.com.cn/jsref/event_cancelbubble.asp) | 设置或返回事件是否应该向上层级进行传播。                     |                                                              |
| [cancelable](https://www.w3school.com.cn/jsref/event_cancelable.asp) | 返回事件是否可以阻止其默认操作。                             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| changeTouches                                                | 返回在上一触摸与该触摸之间其状态已更改的所有触摸对象的列表   | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [charCode](https://www.w3school.com.cn/jsref/event_key_charcode.asp) | 返回触发 onkeypress 事件的键的 Unicode 字符代码。            | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [clientX](https://www.w3school.com.cn/jsref/event_clientx.asp) | 返回触发鼠标事件时，鼠标指针相对于当前窗口的水平坐标。       | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [clientY](https://www.w3school.com.cn/jsref/event_clienty.asp) | 返回触发鼠标事件时，鼠标指针相对于当前窗口的垂直坐标。       | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| clipboardData                                                | 返回对象，其中包含受剪贴板操作影响的数据。                   | [ClipboardData](https://www.w3school.com.cn/jsref/obj_clipboardevent.asp) |
| [code](https://www.w3school.com.cn/jsref/event_key_code.asp) | 返回触发事件的键的代码。                                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| composed                                                     | 指示该事件是否可以从 Shadow DOM 传递到一般的 DOM。           | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [composedPath()](https://www.w3school.com.cn/jsref/event_composedpath.asp) | 返回事件的路径。                                             |                                                              |
| [createEvent()](https://www.w3school.com.cn/jsref/event_createevent.asp) | 创建新事件。                                                 | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [ctrlKey](https://www.w3school.com.cn/jsref/event_ctrlkey.asp) | 返回触发鼠标事件时是否按下了 "CTRL" 键。                     | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [ctrlKey](https://www.w3school.com.cn/jsref/event_key_ctrlkey.asp) | 返回按键鼠标事件时是否按下了 "CTRL" 键。                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [currentTarget](https://www.w3school.com.cn/jsref/event_currenttarget.asp) | 返回其事件侦听器触发事件的元素。                             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [data](https://www.w3school.com.cn/jsref/event_inputevent_data.asp) | 返回插入的字符。                                             | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| dataTransfer                                                 | 返回一个对象，其中包含被拖放或插入/删除的数据。              | [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp)[InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| [defaultPrevented](https://www.w3school.com.cn/jsref/event_defaultprevented.asp) | 返回是否为事件调用 preventDefault() 方法。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [deltaX](https://www.w3school.com.cn/jsref/event_wheel_deltax.asp) | 返回鼠标滚轮的水平滚动量（x 轴）。                           | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [deltaY](https://www.w3school.com.cn/jsref/event_wheel_deltay.asp) | 返回鼠标滚轮的垂直滚动量（y 轴）。                           | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [deltaZ](https://www.w3school.com.cn/jsref/event_wheel_deltaz.asp) | 返回鼠标滚轮的 Z 轴滚动量。                                  | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [deltaMode](https://www.w3school.com.cn/jsref/event_wheel_deltamode.asp) | 返回数字，代表增量值（像素、线或页面）的度量单位。           | [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) |
| [detail](https://www.w3school.com.cn/jsref/event_detail.asp) | 返回数字，指示鼠标被单击了多少次。                           | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp) |
| [elapsedTime](https://www.w3school.com.cn/jsref/event_animation_elapsedtime.asp) | 返回动画已运行的秒数。                                       | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) |
| [elapsedTime](https://www.w3school.com.cn/jsref/event_transition_elapsedtime.asp) | 返回过渡已运行的秒数。                                       |                                                              |
| [eventPhase](https://www.w3school.com.cn/jsref/event_eventphase.asp) | 返回当前正在评估事件流处于哪个阶段。                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [getModifierState()](https://www.w3school.com.cn/jsref/event_mouse_getmodifierstate.asp) | 返回包含目标范围的数组，此范围将受到插入/删除的影响。        | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| getTargetRanges()                                            | 返回包含目标范围的数组，此范围将受到插入/删除的影响。        | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| [inputType](https://www.w3school.com.cn/jsref/event_inputevent_inputtype.asp) | 返回更改的类型（即 "inserting" 或 "deleting"）。             | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) |
| isComposing                                                  | 返回事件的状态是否正在构成。                                 | [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp)[KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [isTrusted](https://www.w3school.com.cn/jsref/event_istrusted.asp) | 返回事件是否受信任。                                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [key](https://www.w3school.com.cn/jsref/event_key_key.asp)   | 返回事件表示的键的键值。                                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| key                                                          | 返回更改后的存储项的键。                                     | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [keyCode](https://www.w3school.com.cn/jsref/event_key_keycode.asp) | 返回触发 onkeypress、onkeydown 或 onkeyup 事件的键的 Unicode 字符代码。 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [location](https://www.w3school.com.cn/jsref/event_key_location.asp) | 返回键盘或设备上按键的位置。                                 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| lengthComputable                                             | 返回进度的长度是否可计算。                                   | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| loaded                                                       | 返回已加载的工作量。                                         | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| [metaKey](https://www.w3school.com.cn/jsref/event_metakey.asp) | 返回事件触发时是否按下了 "META" 键。                         | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [metaKey](https://www.w3school.com.cn/jsref/event_key_metakey.asp) | 返回按键事件触发时是否按下了 "META" 键。                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| MovementX                                                    | 返回相对于上一 mousemove 事件的位置的鼠标指针的水平坐标      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| MovementY                                                    | 返回相对于上一 mousemove 事件的位置的鼠标指针的垂直坐标      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [newURL](https://www.w3school.com.cn/jsref/event_hashchange_newurl.asp) | 返回更改 hash 后的文档 URL。                                 | [HasChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) |
| newValue                                                     | 返回更改后的存储项目的新值。                                 | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [offsetX](https://www.w3school.com.cn/jsref/event_offsetx.asp) | 返回鼠标指针相对于目标元素边缘位置的水平坐标。               | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [offsetY](https://www.w3school.com.cn/jsref/event_offsety.asp) | 返回鼠标指针相对于目标元素边缘位置的垂直坐标。               | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [oldURL](https://www.w3school.com.cn/jsref/event_hashchange_oldurl.asp) | 返回更改 hash 前的文档 URL。                                 | [HasChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) |
| oldValue                                                     | 返回更改后的存储项目的旧值。                                 | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| onemptied                                                    | 当发生不良情况且媒体文件突然不可用时，发生此事件。           |                                                              |
| [pageX](https://www.w3school.com.cn/jsref/event_pagex.asp)   | 返回触发鼠标事件时鼠标指针相对于文档的水平坐标。             | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [pageY](https://www.w3school.com.cn/jsref/event_pagey.asp)   | 返回触发鼠标事件时鼠标指针相对于文档的垂直坐标。             | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [persisted](https://www.w3school.com.cn/jsref/event_pagetransition_persisted.asp) | 返回网页是否被浏览器缓存。                                   | [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) |
| [preventDefault()](https://www.w3school.com.cn/jsref/event_preventdefault.asp) | 如果可以取消事件，则将其取消，不执行属于该事件的默认操作。   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [propertyName](https://www.w3school.com.cn/jsref/event_transition_propertyName.asp) | 返回与动画或过渡相关联的 CSS 属性的名称。                    | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp)[TransitionEvent](https://www.w3school.com.cn/jsref/obj_transitionevent.asp) |
| pseudoElement                                                | 返回动画或过渡的伪元素的名称。                               | [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp)[TransitionEvent](https://www.w3school.com.cn/jsref/obj_transitionevent.asp) |
| region                                                       |                                                              | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [relatedTarget](https://www.w3school.com.cn/jsref/event_relatedtarget.asp) | 返回与触发鼠标事件的元素相关的元素。                         | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [relatedTarget](https://www.w3school.com.cn/jsref/event_focus_relatedtarget.asp) | 返回与触发事件的元素相关的元素。                             | [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) |
| repeat                                                       | 返回是否重复按住某个键。                                     | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [screenX](https://www.w3school.com.cn/jsref/event_screenx.asp) | 返回窗口/鼠标指针相对于屏幕的水平坐标。                      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [screenY](https://www.w3school.com.cn/jsref/event_screeny.asp) | 返回窗口/鼠标指针相对于屏幕的垂直坐标。                      | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [shiftKey](https://www.w3school.com.cn/jsref/event_shiftkey.asp) | 返回事件触发时是否按下了 "SHIFT" 键。                        | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [shiftKey](https://www.w3school.com.cn/jsref/event_key_shiftkey.asp) | 返回按键事件触发时是否按下了 "SHIFT" 键。                    | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp)[TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| state                                                        | 返回包含历史记录条目副本的对象。                             | [PopStateEvent](https://www.w3school.com.cn/jsref/obj_popstateevent.asp) |
| [stopImme...()](https://www.w3school.com.cn/jsref/event_stopimmediatepropagation.asp) | 防止同一事件的其他侦听器被调用。                             | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [stopPropagation()](https://www.w3school.com.cn/jsref/event_stoppropagation.asp) | 防止事件在事件流中进一步传播。                               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| storageArea                                                  | 返回代表受影响的存储对象的对象。                             | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [target](https://www.w3school.com.cn/jsref/event_target.asp) | 返回触发事件的元素。                                         | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| [targetTouches](https://www.w3school.com.cn/jsref/event_touch_targettouches.asp) | 返回包含仍与触摸面接触的所有触摸点的Touch对象的TouchList列表 | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [timeStamp](https://www.w3school.com.cn/jsref/event_timestamp.asp) | 返回创建事件的时间（相对于纪元的毫秒数）。                   | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| total                                                        | 返回将要加载的工作总量。                                     | [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) |
| [touches](https://www.w3school.com.cn/jsref/event_touch_touches.asp) | 返回当前与表面接触的所有 touch 对象的列表。                  | [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) |
| [type](https://www.w3school.com.cn/jsref/event_type.asp)     | 返回事件名称。                                               | [Event](https://www.w3school.com.cn/jsref/obj_event.asp)     |
| url                                                          | 返回已更改项目的所在文档的 URL。                             | [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) |
| [which](https://www.w3school.com.cn/jsref/event_which.asp)   | 返回触发鼠标事件时按下的鼠标按钮。                           | [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) |
| [which](https://www.w3school.com.cn/jsref/event_key_which.asp) | 返回触发 onkeypress 事件的键的 Unicode 字符码，或触发 onkeydown 或 onkeyup 事件的键的 Unicode 键码 | [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) |
| [view](https://www.w3school.com.cn/jsref/event_view.asp)     | 返回对发生事件的 Window 对象的引用。                         | [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp) |

## 事件对象

### Event 对象

所有事件对象均基于 Event 对象，并继承其所有属性和方法。

| Event 对象                                               | 描述                   |
| :------------------------------------------------------- | :--------------------- |
| [Event](https://www.w3school.com.cn/jsref/obj_event.asp) | 所有事件对象的父对象。 |

### 其他事件对象

这些是最常见的事件对象：

| Event 对象                                                   | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| [AnimationEvent](https://www.w3school.com.cn/jsref/obj_animationevent.asp) | 针对 CSS 动画              |
| [ClipboardEvent](https://www.w3school.com.cn/jsref/obj_clipboardevent.asp) | 针对剪贴板的修改           |
| [DragEvent](https://www.w3school.com.cn/jsref/obj_dragevent.asp) | 针对拖放交互               |
| [FocusEvent](https://www.w3school.com.cn/jsref/obj_focusevent.asp) | 针对与焦点有关的事件       |
| [HashChangeEvent](https://www.w3school.com.cn/jsref/obj_hashchangeevent.asp) | 针对 URL 锚点部分的更改    |
| [InputEvent](https://www.w3school.com.cn/jsref/obj_inputevent.asp) | 针对用户输入               |
| [KeyboardEvent](https://www.w3school.com.cn/jsref/obj_keyboardevent.asp) | 针对键盘交互               |
| [MouseEvent](https://www.w3school.com.cn/jsref/obj_mouseevent.asp) | 针对鼠标交互               |
| [PageTransitionEvent](https://www.w3school.com.cn/jsref/obj_pagetransitionevent.asp) | 针对导航到网页或离开网页   |
| [PopStateEvent](https://www.w3school.com.cn/jsref/obj_popstateevent.asp) | 针对历史记录条目中的更改   |
| [ProgressEvent](https://www.w3school.com.cn/jsref/obj_progressevent.asp) | 针对加载外部资源的进度     |
| [StorageEvent](https://www.w3school.com.cn/jsref/obj_storageevent.asp) | 针对窗口的存储区域中的更改 |
| [TouchEvent](https://www.w3school.com.cn/jsref/obj_touchevent.asp) | 针对触摸交互               |
| [TransitionEvent](https://www.w3school.com.cn/jsref/obj_transitionevent.asp) | 针对 CSS 过渡              |
| [UiEvent](https://www.w3school.com.cn/jsref/obj_uievent.asp) | 针对用户界面交互           |
| [WheelEvent](https://www.w3school.com.cn/jsref/obj_wheelevent.asp) | 针对鼠标滚轮交互           |

## DOM HTMLCollection

**HTMLCollection 对象**
HTMLCollection 对象是 HTML 元素的类似数组的列表。

诸如 getElementsByTagName() 之类的方法会返回 HTMLCollection。

### 属性和方法

可以在 HTMLCollection 对象上使用以下属性和方法：

| 属性 / 方法                                                  | 描述                                           |
| :----------------------------------------------------------- | :--------------------------------------------- |
| [item()](https://www.w3school.com.cn/jsref/met_htmlcollection_item.asp) | 返回 HTMLCollection 中指定索引处的元素。       |
| [length](https://www.w3school.com.cn/jsref/prop_htmlcollection_length.asp) | 返回 HTMLCollection 中的元素数。               |
| [namedItem()](https://www.w3school.com.cn/jsref/met_htmlcollection_nameditem.asp) | 返回 HTMLCollection 中有指定 ID 或名称的元素。 |

## Location 对象

Location 对象包含有关当前 URL 的信息。

Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。

### Location 对象属性

| 属性                                                         | 描述                                          |
| :----------------------------------------------------------- | :-------------------------------------------- |
| [hash](https://www.w3school.com.cn/jsref/prop_loc_hash.asp)  | 设置或返回从井号 (#) 开始的 URL（锚）。       |
| [host](https://www.w3school.com.cn/jsref/prop_loc_host.asp)  | 设置或返回主机名和当前 URL 的端口号。         |
| [hostname](https://www.w3school.com.cn/jsref/prop_loc_hostname.asp) | 设置或返回当前 URL 的主机名。                 |
| [href](https://www.w3school.com.cn/jsref/prop_loc_href.asp)  | 设置或返回完整的 URL。                        |
| [pathname](https://www.w3school.com.cn/jsref/prop_loc_pathname.asp) | 设置或返回当前 URL 的路径部分。               |
| [port](https://www.w3school.com.cn/jsref/prop_loc_port.asp)  | 设置或返回当前 URL 的端口号。                 |
| [protocol](https://www.w3school.com.cn/jsref/prop_loc_protocol.asp) | 设置或返回当前 URL 的协议。                   |
| [search](https://www.w3school.com.cn/jsref/prop_loc_search.asp) | 设置或返回从问号 (?) 开始的 URL（查询部分）。 |

### Location 对象方法

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [assign()](https://www.w3school.com.cn/jsref/met_loc_assign.asp) | 加载新的文档。           |
| [reload()](https://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。       |
| [replace()](https://www.w3school.com.cn/jsref/met_loc_replace.asp) | 用新的文档替换当前文档。 |

### Location 对象描述

Location 对象存储在 Window 对象的 Location 属性中，表示那个窗口中当前显示的文档的 Web 地址。它的 [href 属性](https://www.w3school.com.cn/jsref/prop_loc_href.asp)存放的是文档的完整 URL，其他属性则分别描述了 URL 的各个部分。这些属性与 Anchor 对象（或 Area 对象）的 URL 属性非常相似。当一个 Location 对象被转换成字符串，href 属性的值被返回。这意味着你可以使用表达式 location 来替代 location.href。

不过 Anchor 对象表示的是文档中的超链接，Location 对象表示的却是浏览器当前显示的文档的 URL（或位置）。但是 Location 对象所能做的远远不止这些，它还能控制浏览器显示的文档的位置。如果把一个含有 URL 的字符串赋予 Location 对象或它的 href 属性，浏览器就会把新的 URL 所指的文档装载进来，并显示出来。

除了设置 location 或 location.href 用完整的 URL 替换当前的 URL 之外，还可以修改部分 URL，只需要给 Location 对象的其他属性赋值即可。这样做就会创建新的 URL，其中的一部分与原来的 URL 不同，浏览器会将它装载并显示出来。例如，假设设置了Location对象的 [hash 属性](https://www.w3school.com.cn/jsref/prop_loc_hash.asp)，那么浏览器就会转移到当前文档中的一个指定的位置。同样，如果设置了 [search 属性](https://www.w3school.com.cn/jsref/prop_loc_search.asp)，那么浏览器就会重新装载附加了新的查询字符串的 URL。

除了 URL 属性外，Location 对象的 [reload() 方法](https://www.w3school.com.cn/jsref/met_loc_reload.asp)可以重新装载当前文档，[replace()](https://www.w3school.com.cn/jsref/met_loc_replace.asp) 可以装载一个新文档而无须为它创建一个新的历史记录，也就是说，在浏览器的历史列表中，新文档将替换当前文档。

## Navigator 对象

**Navigator 对象**
Navigator 对象包含有关浏览器的信息。

注释：没有应用于 navigator 对象的公开标准，不过所有浏览器都支持该对象。

### Navigator 对象集合

| 集合      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| plugins[] | 返回对文档中所有嵌入式对象的引用。该集合是一个 Plugin 对象的数组，其中的元素代表浏览器已经安装的插件。Plug-in 对象提供的是有关插件的信息，其中包括它所支持的 MIME 类型的列表。虽然 plugins[] 数组是由 IE 4 定义的，但是在 IE 4 中它却总是空的，因为 IE 4 不支持插件和 Plugin 对象。 |

### Navigator 对象属性

| 属性                                                         | 描述                                           |
| :----------------------------------------------------------- | :--------------------------------------------- |
| [appCodeName](https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp) | 返回浏览器的代码名。                           |
| [appMinorVersion](https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp) | 返回浏览器的次级版本。                         |
| [appName](https://www.w3school.com.cn/jsref/prop_nav_appname.asp) | 返回浏览器的名称。                             |
| [appVersion](https://www.w3school.com.cn/jsref/prop_nav_appversion.asp) | 返回浏览器的平台和版本信息。                   |
| [browserLanguage](https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp) | 返回当前浏览器的语言。                         |
| [cookieEnabled](https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp) | 返回指明浏览器中是否启用 cookie 的布尔值。     |
| [cpuClass](https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp) | 返回浏览器系统的 CPU 等级。                    |
| [onLine](https://www.w3school.com.cn/jsref/prop_nav_online.asp) | 返回指明系统是否处于脱机模式的布尔值。         |
| [platform](https://www.w3school.com.cn/jsref/prop_nav_platform.asp) | 返回运行浏览器的操作系统平台。                 |
| [systemLanguage](https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp) | 返回 OS 使用的默认语言。                       |
| [userAgent](https://www.w3school.com.cn/jsref/prop_nav_useragent.asp) | 返回由客户机发送服务器的 user-agent 头部的值。 |
| [userLanguage](https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp) | 返回 OS 的自然语言设置。                       |

### Navigator 对象方法

| 方法                                                         | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [javaEnabled()](https://www.w3school.com.cn/jsref/met_nav_javaenabled.asp) | 规定浏览器是否启用 Java。                    |
| [taintEnabled()](https://www.w3school.com.cn/jsref/met_nav_taintenabled.asp) | 规定浏览器是否启用数据污点 (data tainting)。 |

### Navigator 对象描述

Navigator 对象包含的属性描述了正在使用的浏览器。可以使用这些属性进行平台专用的配置。

虽然这个对象的名称显而易见的是 Netscape 的 Navigator 浏览器，但其他实现了 JavaScript 的浏览器也支持这个对象。

Navigator 对象的实例是唯一的，可以用 Window 对象的 navigator 属性来引用它。

## Screen 对象

Screen 对象包含有关客户端显示屏幕的信息。

**注释：**没有应用于 screen 对象的公开标准，不过所有浏览器都支持该对象。

### Screen 对象属性

| 属性                                                         | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [availHeight](https://www.w3school.com.cn/jsref/prop_screen_availheight.asp) | 返回显示屏幕的高度 (除 Windows 任务栏之外)。 |
| [availWidth](https://www.w3school.com.cn/jsref/prop_screen_availwidth.asp) | 返回显示屏幕的宽度 (除 Windows 任务栏之外)。 |
| [bufferDepth](https://www.w3school.com.cn/jsref/prop_screen_bufferdepth.asp) | 设置或返回调色板的比特深度。                 |
| [colorDepth](https://www.w3school.com.cn/jsref/prop_screen_colordepth.asp) | 返回目标设备或缓冲器上的调色板的比特深度。   |
| [deviceXDPI](https://www.w3school.com.cn/jsref/prop_screen_devicexdpi.asp) | 返回显示屏幕的每英寸水平点数。               |
| [deviceYDPI](https://www.w3school.com.cn/jsref/prop_screen_deviceydpi.asp) | 返回显示屏幕的每英寸垂直点数。               |
| [fontSmoothingEnabled](https://www.w3school.com.cn/jsref/prop_screen_fontsmoothingenabled.asp) | 返回用户是否在显示控制面板中启用了字体平滑。 |
| [height](https://www.w3school.com.cn/jsref/prop_screen_height.asp) | 返回显示屏幕的高度。                         |
| [logicalXDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalxdpi.asp) | 返回显示屏幕每英寸的水平方向的常规点数。     |
| [logicalYDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalydpi.asp) | 返回显示屏幕每英寸的垂直方向的常规点数。     |
| [pixelDepth](https://www.w3school.com.cn/jsref/prop_screen_pixeldepth.asp) | 返回显示屏幕的颜色分辨率（比特每像素）。     |
| [updateInterval](https://www.w3school.com.cn/jsref/prop_screen_updateinterval.asp) | 设置或返回屏幕的刷新率。                     |
| [width](https://www.w3school.com.cn/jsref/prop_screen_width.asp) | 返回显示器屏幕的宽度。                       |

### Screen 对象描述

每个 Window 对象的 screen 属性都引用一个 Screen 对象。Screen 对象中存放着有关显示浏览器屏幕的信息。JavaScript 程序将利用这些信息来优化它们的输出，以达到用户的显示要求。例如，一个程序可以根据显示器的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色还是使用 8 位色的图形。另外，JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间。

## HTML DOM Style 对象

Style 对象代表一个单独的样式声明。可从应用样式的文档或元素访问 Style 对象。

```
document.getElementById("id").style.property="值"
```

### Style 对象的属性：

- [背景](https://www.w3school.com.cn/jsref/dom_obj_style.asp#background)
- [边框和边距](https://www.w3school.com.cn/jsref/dom_obj_style.asp#border)
- [布局](https://www.w3school.com.cn/jsref/dom_obj_style.asp#layout)
- [列表](https://www.w3school.com.cn/jsref/dom_obj_style.asp#list)
- [杂项](https://www.w3school.com.cn/jsref/dom_obj_style.asp#misc)
- [定位](https://www.w3school.com.cn/jsref/dom_obj_style.asp#positioning)
- [打印](https://www.w3school.com.cn/jsref/dom_obj_style.asp#printing)
- [滚动条](https://www.w3school.com.cn/jsref/dom_obj_style.asp#scrollbar)
- [表格](https://www.w3school.com.cn/jsref/dom_obj_style.asp#table)
- [文本](https://www.w3school.com.cn/jsref/dom_obj_style.asp#text)
- [规范](https://www.w3school.com.cn/jsref/dom_obj_style.asp#std)

### Background 属性

| 属性                                                         | 描述                              |
| :----------------------------------------------------------- | :-------------------------------- |
| [background](https://www.w3school.com.cn/jsref/prop_style_background.asp) | 在一行中设置所有的背景属性        |
| [backgroundAttachment](https://www.w3school.com.cn/jsref/prop_style_backgroundattachment.asp) | 设置背景图像是否固定或随页面滚动  |
| [backgroundColor](https://www.w3school.com.cn/jsref/prop_style_backgroundcolor.asp) | 设置元素的背景颜色                |
| [backgroundImage](https://www.w3school.com.cn/jsref/prop_style_backgroundimage.asp) | 设置元素的背景图像                |
| [backgroundPosition](https://www.w3school.com.cn/jsref/prop_style_backgroundposition.asp) | 设置背景图像的起始位置            |
| [backgroundPositionX](https://www.w3school.com.cn/jsref/prop_style_backgroundpositionx.asp) | 设置backgroundPosition属性的X坐标 |
| [backgroundPositionY](https://www.w3school.com.cn/jsref/prop_style_backgroundpositiony.asp) | 设置backgroundPosition属性的Y坐标 |
| [backgroundRepeat](https://www.w3school.com.cn/jsref/prop_style_backgroundrepeat.asp) | 设置是否及如何重复背景图像        |

### Border 和 Margin 属性

| 属性                                                         | 描述                                    |
| :----------------------------------------------------------- | :-------------------------------------- |
| [border](https://www.w3school.com.cn/jsref/prop_style_border.asp) | 在一行设置四个边框的所有属性            |
| [borderBottom](https://www.w3school.com.cn/jsref/prop_style_borderbottom.asp) | 在一行设置底边框的所有属性              |
| [borderBottomColor](https://www.w3school.com.cn/jsref/prop_style_borderbottomcolor.asp) | 设置底边框的颜色                        |
| [borderBottomStyle](https://www.w3school.com.cn/jsref/prop_style_borderbottomstyle.asp) | 设置底边框的样式                        |
| [borderBottomWidth](https://www.w3school.com.cn/jsref/prop_style_borderbottomwidth.asp) | 设置底边框的宽度                        |
| [borderColor](https://www.w3school.com.cn/jsref/prop_style_bordercolor.asp) | 设置所有四个边框的颜色 (可设置四种颜色) |
| [borderLeft](https://www.w3school.com.cn/jsref/prop_style_borderleft.asp) | 在一行设置左边框的所有属性              |
| [borderLeftColor](https://www.w3school.com.cn/jsref/prop_style_borderleftcolor.asp) | 设置左边框的颜色                        |
| [borderLeftStyle](https://www.w3school.com.cn/jsref/prop_style_borderleftstyle.asp) | 设置左边框的样式                        |
| [borderLeftWidth](https://www.w3school.com.cn/jsref/prop_style_borderleftwidth.asp) | 设置左边框的宽度                        |
| [borderRight](https://www.w3school.com.cn/jsref/prop_style_borderright.asp) | 在一行设置右边框的所有属性              |
| [borderRightColor](https://www.w3school.com.cn/jsref/prop_style_borderrightcolor.asp) | 设置右边框的颜色                        |
| [borderRightStyle](https://www.w3school.com.cn/jsref/prop_style_borderrightstyle.asp) | 设置右边框的样式                        |
| [borderRightWidth](https://www.w3school.com.cn/jsref/prop_style_borderrightwidth.asp) | 设置右边框的宽度                        |
| [borderStyle](https://www.w3school.com.cn/jsref/prop_style_borderstyle.asp) | 设置所有四个边框的样式 (可设置四种样式) |
| [borderTop](https://www.w3school.com.cn/jsref/prop_style_bordertop.asp) | 在一行设置顶边框的所有属性              |
| [borderTopColor](https://www.w3school.com.cn/jsref/prop_style_bordertopcolor.asp) | 设置顶边框的颜色                        |
| [borderTopStyle](https://www.w3school.com.cn/jsref/prop_style_bordertopstyle.asp) | 设置顶边框的样式                        |
| [borderTopWidth](https://www.w3school.com.cn/jsref/prop_style_bordertopwidth.asp) | 设置顶边框的宽度                        |
| [borderWidth](https://www.w3school.com.cn/jsref/prop_style_borderwidth.asp) | 设置所有四条边框的宽度 (可设置四种宽度) |
| [margin](https://www.w3school.com.cn/jsref/prop_style_margin.asp) | 设置元素的边距 (可设置四个值)           |
| [marginBottom](https://www.w3school.com.cn/jsref/prop_style_marginbottom.asp) | 设置元素的底边距                        |
| [marginLeft](https://www.w3school.com.cn/jsref/prop_style_marginleft.asp) | 设置元素的左边距                        |
| [marginRight](https://www.w3school.com.cn/jsref/prop_style_marginright.asp) | 设置元素的右边据                        |
| [marginTop](https://www.w3school.com.cn/jsref/prop_style_margintop.asp) | 设置元素的顶边距                        |
| [outline](https://www.w3school.com.cn/jsref/prop_style_outline.asp) | 在一行设置所有的outline属性             |
| [outlineColor](https://www.w3school.com.cn/jsref/prop_style_outlinecolor.asp) | 设置围绕元素的轮廓颜色                  |
| [outlineStyle](https://www.w3school.com.cn/jsref/prop_style_outlinestyle.asp) | 设置围绕元素的轮廓样式                  |
| [outlineWidth](https://www.w3school.com.cn/jsref/prop_style_outlinewidth.asp) | 设置围绕元素的轮廓宽度                  |
| [padding](https://www.w3school.com.cn/jsref/prop_style_padding.asp) | 设置元素的填充 (可设置四个值)           |
| [paddingBottom](https://www.w3school.com.cn/jsref/prop_style_paddingbottom.asp) | 设置元素的下填充                        |
| [paddingLeft](https://www.w3school.com.cn/jsref/prop_style_paddingleft.asp) | 设置元素的左填充                        |
| [paddingRight](https://www.w3school.com.cn/jsref/prop_style_paddingright.asp) | 设置元素的右填充                        |
| [paddingTop](https://www.w3school.com.cn/jsref/prop_style_paddingtop.asp) | 设置元素的顶填充                        |

### Layout 属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [clear](https://www.w3school.com.cn/jsref/prop_style_clear.asp) | 设置在元素的哪边不允许其他的浮动元素                         |
| [clip](https://www.w3school.com.cn/jsref/prop_style_clip.asp) | 设置元素的形状                                               |
| [content](https://www.w3school.com.cn/jsref/prop_style_content.asp) | 设置元信息                                                   |
| counterIncrement                                             | 设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器的增量。默认是1。 |
| counterReset                                                 | 设置其后是正数的计数器名称的列表。其中整数指示每当元素出现时计数器被设置的值。默认是0。 |
| [cssFloat](https://www.w3school.com.cn/jsref/prop_style_cssfloat.asp) | 设置图像或文本将出现（浮动）在另一元素中的何处。             |
| [cursor](https://www.w3school.com.cn/jsref/prop_style_cursor.asp) | 设置显示的指针类型                                           |
| [direction](https://www.w3school.com.cn/jsref/prop_style_direction.asp) | 设置元素的文本方向                                           |
| [display](https://www.w3school.com.cn/jsref/prop_style_display.asp) | 设置元素如何被显示                                           |
| [height](https://www.w3school.com.cn/jsref/prop_style_height.asp) | 设置元素的高度                                               |
| markerOffset                                                 | 设置marker box的principal box距离其最近的边框边缘的距离      |
| marks                                                        | 设置是否cross marks或crop marks应仅仅被呈现于page box边缘之外 |
| [maxHeight](https://www.w3school.com.cn/jsref/prop_style_maxheight.asp) | 设置元素的最大高度                                           |
| [maxWidth](https://www.w3school.com.cn/jsref/prop_style_maxwidth.asp) | 设置元素的最大宽度                                           |
| [minHeight](https://www.w3school.com.cn/jsref/prop_style_minheight.asp) | 设置元素的最小高度                                           |
| [minWidth](https://www.w3school.com.cn/jsref/prop_style_minwidth.asp) | 设置元素的最小宽度                                           |
| [overflow](https://www.w3school.com.cn/jsref/prop_style_overflow.asp) | 规定如何处理不适合元素盒的内容                               |
| [verticalAlign](https://www.w3school.com.cn/jsref/prop_style_verticalalign.asp) | 设置对元素中的内容进行垂直排列                               |
| [visibility](https://www.w3school.com.cn/jsref/prop_style_visibility.asp) | 设置元素是否可见                                             |
| [width](https://www.w3school.com.cn/jsref/prop_style_width.asp) | 设置元素的宽度                                               |

### List 属性

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [listStyle](https://www.w3school.com.cn/jsref/prop_style_liststyle.asp) | 在一行设置列表的所有属性 |
| [listStyleImage](https://www.w3school.com.cn/jsref/prop_style_liststyleimage.asp) | 把图像设置为列表项标记   |
| [listStylePosition](https://www.w3school.com.cn/jsref/prop_style_liststyleposition.asp) | 改变列表项标记的位置     |
| [listStyleType](https://www.w3school.com.cn/jsref/prop_style_liststyletype.asp) | 设置列表项标记的类型     |

### Positioning 属性

| 属性                                                         | 描述                                                   |
| :----------------------------------------------------------- | :----------------------------------------------------- |
| [bottom](https://www.w3school.com.cn/jsref/prop_style_bottom.asp) | 设置元素的底边缘距离父元素底边缘的之上或之下的距离     |
| [left](https://www.w3school.com.cn/jsref/prop_style_left.asp) | 置元素的左边缘距离父元素左边缘的左边或右边的距离       |
| [position](https://www.w3school.com.cn/jsref/prop_style_position.asp) | 把元素放置在static, relative, absolute 或 fixed 的位置 |
| [right](https://www.w3school.com.cn/jsref/prop_style_right.asp) | 置元素的右边缘距离父元素右边缘的左边或右边的距离       |
| [top](https://www.w3school.com.cn/jsref/prop_style_top.asp)  | 设置元素的顶边缘距离父元素顶边缘的之上或之下的距离     |
| [zIndex](https://www.w3school.com.cn/jsref/prop_style_zindex.asp) | 设置元素的堆叠次序                                     |

### Printing 属性

| 属性                                                         | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| orphans                                                      | 设置段落留到页面底部的最小行数     |
| page                                                         | 设置显示某元素时使用的页面类型     |
| [pageBreakAfter](https://www.w3school.com.cn/jsref/prop_style_pagebreakafter.asp) | 设置某元素之后的分页行为           |
| [pageBreakBefore](https://www.w3school.com.cn/jsref/prop_style_pagebreakbefore.asp) | 设置某元素之前的分页行为           |
| [pageBreakInside](https://www.w3school.com.cn/jsref/prop_style_pagebreakinside.asp) | 设置某元素内部的分页行为           |
| size                                                         | 设置页面的方向和尺寸               |
| widows                                                       | 设置段落必须留到页面顶部的最小行数 |

### Scrollbar 属性 (IE-only)

| 属性                                                         | 描述                                               |
| :----------------------------------------------------------- | :------------------------------------------------- |
| [scrollbar3dLightColor](https://www.w3school.com.cn/jsref/prop_style_scrollbar3dlightcolor.asp) | 设置箭头和滚动条左侧和顶边的颜色                   |
| [scrollbarArrowColor](https://www.w3school.com.cn/jsref/prop_style_scrollbararrowcolor.asp) | 设置滚动条上的箭头颜色                             |
| [scrollbarBaseColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarbasecolor.asp) | 设置滚动条的底色                                   |
| [scrollbarDarkShadowColor](https://www.w3school.com.cn/jsref/prop_style_scrollbardarkshadowcolor.asp) | 设置箭头和滚动条右侧和底边的颜色                   |
| [scrollbarFaceColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarfacecolor.asp) | 设置滚动条的表色                                   |
| [scrollbarHighlightColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarhighlightcolor.asp) | 设置箭头和滚动条左侧和顶边的颜色，以及滚动条的背景 |
| [scrollbarShadowColor](https://www.w3school.com.cn/jsref/prop_style_scrollbarshadowcolor.asp) | 设置箭头和滚动条右侧和底边的颜色                   |
| [scrollbarTrackColor](https://www.w3school.com.cn/jsref/prop_style_scrollbartrackcolor.asp) | 设置滚动条的背景色                                 |

### Table 属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [borderCollapse](https://www.w3school.com.cn/jsref/prop_style_bordercollapse.asp) | 设置表格边框是否合并为单边框，或者像在标准的HTML中那样分离。 |
| [borderSpacing](https://www.w3school.com.cn/jsref/prop_style_borderspacing.asp) | 设置分隔单元格边框的距离                                     |
| [captionSide](https://www.w3school.com.cn/jsref/prop_style_captionside.asp) | 设置表格标题的位置                                           |
| [emptyCells](https://www.w3school.com.cn/jsref/prop_style_emptycells.asp) | 设置是否显示表格中的空单元格                                 |
| [tableLayout](https://www.w3school.com.cn/jsref/prop_style_tablelayout.asp) | 设置用来显示表格单元格、行以及列的算法                       |

### Text 属性

| 属性                                                         | 描述                             |
| :----------------------------------------------------------- | :------------------------------- |
| [color](https://www.w3school.com.cn/jsref/prop_style_color.asp) | 设置文本的颜色                   |
| [font](https://www.w3school.com.cn/jsref/prop_style_font.asp) | 在一行设置所有的字体属性         |
| [fontFamily](https://www.w3school.com.cn/jsref/prop_style_fontfamily.asp) | 设置元素的字体系列。             |
| [fontSize](https://www.w3school.com.cn/jsref/prop_style_fontsize.asp) | 设置元素的字体大小。             |
| [fontSizeAdjust](https://www.w3school.com.cn/jsref/prop_style_fontsizeadjust.asp) | 设置/调整文本的尺寸              |
| [fontStretch](https://www.w3school.com.cn/jsref/prop_style_fontstretch.asp) | 设置如何紧缩或伸展字体           |
| [fontStyle](https://www.w3school.com.cn/jsref/prop_style_fontstyle.asp) | 设置元素的字体样式               |
| [fontVariant](https://www.w3school.com.cn/jsref/prop_style_fontvariant.asp) | 用小型大写字母字体来显示文本     |
| [fontWeight](https://www.w3school.com.cn/jsref/prop_style_fontweight.asp) | 设置字体的粗细                   |
| [letterSpacing](https://www.w3school.com.cn/jsref/prop_style_letterspacing.asp) | 设置字符间距                     |
| [lineHeight](https://www.w3school.com.cn/jsref/prop_style_lineheight.asp) | 设置行间距                       |
| [quotes](https://www.w3school.com.cn/jsref/prop_style_quotes.asp) | 设置在文本中使用哪种引号         |
| [textAlign](https://www.w3school.com.cn/jsref/prop_style_textalign.asp) | 排列文本                         |
| [textDecoration](https://www.w3school.com.cn/jsref/prop_style_textdecoration.asp) | 设置文本的修饰                   |
| [textIndent](https://www.w3school.com.cn/jsref/prop_style_textindent.asp) | 缩紧首行的文本                   |
| textShadow                                                   | 设置文本的阴影效果               |
| [textTransform](https://www.w3school.com.cn/jsref/prop_style_texttransform.asp) | 对文本设置大写效果               |
| unicodeBidi                                                  |                                  |
| [whiteSpace](https://www.w3school.com.cn/jsref/prop_style_whitespace.asp) | 设置如何设置文本中的折行和空白符 |
| [wordSpacing](https://www.w3school.com.cn/jsref/prop_style_wordspacing.asp) | 设置文本中的词间距               |

### 标准属性

| 属性                                                      | 描述                         |
| :-------------------------------------------------------- | :--------------------------- |
| [dir](https://www.w3school.com.cn/jsref/prop_dir.asp)     | 设置或返回文本的方向         |
| [lang](https://www.w3school.com.cn/jsref/prop_lang.asp)   | 设置或返回元素的语言代码     |
| [title](https://www.w3school.com.cn/jsref/prop_title.asp) | 设置或返回元素的咨询性的标题 |

### cssText 属性

它是一组样式属性及其值的文本表示。这个文本格式化为一个 CSS 样式表，去掉了包围属性和值的元素选择器的花括号。

将这一属性设置为非法的值将会抛出一个代码为 SYNTAX_ERR 的 [DOMException 异常](https://www.w3school.com.cn/xmldom/dom_domexception.asp)。当 CSS2Properties 对象是只读的时候，试图设置这一属性将会抛出一个代码为 NO_MODIFICATION_ALLOWED_ERR 的 [DOMException 异常](https://www.w3school.com.cn/xmldom/dom_domexception.asp)。

### 关于 CSS2Properties 对象

CSS2Properties 对象表示一组 CSS 样式属性及其值。它为 CSS 规范定义的每一个 CSS 属性都定义一个 JavaScript 属性。

一个 HTMLElement 的 style 属性是一个可读可写的 CSS2Properties 对象，就好像 CSSRule 对象的 style 属性一样。不过，Window.getComputedStyle() 的返回值是一个 CSS2Properties 对象，其属性是只读的。

## Window 对象

Window 对象表示浏览器中打开的窗口。

如果文档包含框架（frame 或 iframe 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。

**注释：**没有应用于 window 对象的公开标准，不过所有浏览器都支持该对象。

### Window 对象集合

| 集合     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| frames[] | 返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架或 <iframe>。属性 frames.length 存放数组 frames[] 中含有的元素个数。注意，frames[] 数组中引用的框架可能还包括框架，它们自己也具有 frames[] 数组。 |

### Window 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [closed](https://www.w3school.com.cn/jsref/prop_win_closed.asp) | 返回窗口是否已被关闭。                                       |
| [defaultStatus](https://www.w3school.com.cn/jsref/prop_win_defaultstatus.asp) | 设置或返回窗口状态栏中的默认文本。                           |
| [document](https://www.w3school.com.cn/jsref/dom_obj_document.asp) | 对 Document 对象的只读引用。请参阅 [Document 对象](https://www.w3school.com.cn/jsref/dom_obj_document.asp)。 |
| [history](https://www.w3school.com.cn/jsref/dom_obj_history.asp) | 对 History 对象的只读引用。请参数 [History 对象](https://www.w3school.com.cn/jsref/dom_obj_history.asp)。 |
| [innerheight](https://www.w3school.com.cn/jsref/prop_win_innerheight_innerwidth.asp) | 返回窗口的文档显示区的高度。                                 |
| [innerwidth](https://www.w3school.com.cn/jsref/prop_win_innerheight_innerwidth.asp) | 返回窗口的文档显示区的宽度。                                 |
| length                                                       | 设置或返回窗口中的框架数量。                                 |
| [location](https://www.w3school.com.cn/jsref/dom_obj_location.asp) | 用于窗口或框架的 Location 对象。请参阅 [Location 对象](https://www.w3school.com.cn/jsref/dom_obj_location.asp)。 |
| [name](https://www.w3school.com.cn/jsref/prop_win_name.asp)  | 设置或返回窗口的名称。                                       |
| [Navigator](https://www.w3school.com.cn/jsref/dom_obj_navigator.asp) | 对 Navigator 对象的只读引用。请参数 [Navigator 对象](https://www.w3school.com.cn/jsref/dom_obj_navigator.asp)。 |
| [opener](https://www.w3school.com.cn/jsref/prop_win_opener.asp) | 返回对创建此窗口的窗口的引用。                               |
| [outerheight](https://www.w3school.com.cn/jsref/prop_win_outerheight.asp) | 返回窗口的外部高度。                                         |
| [outerwidth](https://www.w3school.com.cn/jsref/prop_win_outerwidth.asp) | 返回窗口的外部宽度。                                         |
| pageXOffset                                                  | 设置或返回当前页面相对于窗口显示区左上角的 X 位置。          |
| pageYOffset                                                  | 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。          |
| parent                                                       | 返回父窗口。                                                 |
| [Screen](https://www.w3school.com.cn/jsref/dom_obj_screen.asp) | 对 Screen 对象的只读引用。请参数 [Screen 对象](https://www.w3school.com.cn/jsref/dom_obj_screen.asp)。 |
| [self](https://www.w3school.com.cn/jsref/prop_win_self.asp)  | 返回对当前窗口的引用。等价于 Window 属性。                   |
| [status](https://www.w3school.com.cn/jsref/prop_win_status.asp) | 设置窗口状态栏的文本。                                       |
| [top](https://www.w3school.com.cn/jsref/prop_win_top.asp)    | 返回最顶层的先辈窗口。                                       |
| window                                                       | window 属性等价于 self 属性，它包含了对窗口自身的引用。      |
| screenLeftscreenTopscreenXscreenY                            | 只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。 |

### Window 对象方法

| 方法                                                         | 描述                                               |
| :----------------------------------------------------------- | :------------------------------------------------- |
| [alert()](https://www.w3school.com.cn/jsref/met_win_alert.asp) | 显示带有一段消息和一个确认按钮的警告框。           |
| [blur()](https://www.w3school.com.cn/jsref/met_win_blur.asp) | 把键盘焦点从顶层窗口移开。                         |
| [clearInterval()](https://www.w3school.com.cn/jsref/met_win_clearinterval.asp) | 取消由 setInterval() 设置的 timeout。              |
| [clearTimeout()](https://www.w3school.com.cn/jsref/met_win_cleartimeout.asp) | 取消由 setTimeout() 方法设置的 timeout。           |
| [close()](https://www.w3school.com.cn/jsref/met_win_close.asp) | 关闭浏览器窗口。                                   |
| [confirm()](https://www.w3school.com.cn/jsref/met_win_confirm.asp) | 显示带有一段消息以及确认按钮和取消按钮的对话框。   |
| [createPopup()](https://www.w3school.com.cn/jsref/met_win_createpopup.asp) | 创建一个 pop-up 窗口。                             |
| [focus()](https://www.w3school.com.cn/jsref/met_win_focus.asp) | 把键盘焦点给予一个窗口。                           |
| [moveBy()](https://www.w3school.com.cn/jsref/met_win_moveby.asp) | 可相对窗口的当前坐标把它移动指定的像素。           |
| [moveTo()](https://www.w3school.com.cn/jsref/met_win_moveto.asp) | 把窗口的左上角移动到一个指定的坐标。               |
| [open()](https://www.w3school.com.cn/jsref/met_win_open.asp) | 打开一个新的浏览器窗口或查找一个已命名的窗口。     |
| [print()](https://www.w3school.com.cn/jsref/met_win_print.asp) | 打印当前窗口的内容。                               |
| [prompt()](https://www.w3school.com.cn/jsref/met_win_prompt.asp) | 显示可提示用户输入的对话框。                       |
| [resizeBy()](https://www.w3school.com.cn/jsref/met_win_resizeby.asp) | 按照指定的像素调整窗口的大小。                     |
| [resizeTo()](https://www.w3school.com.cn/jsref/met_win_resizeto.asp) | 把窗口的大小调整到指定的宽度和高度。               |
| [scrollBy()](https://www.w3school.com.cn/jsref/met_win_scrollby.asp) | 按照指定的像素值来滚动内容。                       |
| [scrollTo()](https://www.w3school.com.cn/jsref/met_win_scrollto.asp) | 把内容滚动到指定的坐标。                           |
| [setInterval()](https://www.w3school.com.cn/jsref/met_win_setinterval.asp) | 按照指定的周期（以毫秒计）来调用函数或计算表达式。 |
| [setTimeout()](https://www.w3school.com.cn/jsref/met_win_settimeout.asp) | 在指定的毫秒数后调用函数或计算表达式。             |

### Window 对象描述

Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。例如，可以只写 [document](https://www.w3school.com.cn/jsref/dom_obj_document.asp)，而不必写 window.document。

同样，可以把当前窗口对象的方法当作函数来使用，如只写 alert()，而不必写 Window.alert()。

除了上面列出的属性和方法，Window 对象还实现了核心 JavaScript 所定义的所有全局属性和方法。

Window 对象的 window 属性和 [self 属性](https://www.w3school.com.cn/jsref/prop_win_self.asp)引用的都是它自己。当你想明确地引用当前窗口，而不仅仅是隐式地引用它时，可以使用这两个属性。除了这两个属性之外，parent 属性、top 属性以及 frame[] 数组都引用了与当前 Window 对象相关的其他 Window 对象。

要引用窗口中的一个框架，可以使用如下语法：

```
frame[i]		//当前窗口的框架
self.frame[i]	//当前窗口的框架
w.frame[i]	//窗口 w 的框架
```

要引用一个框架的父窗口（或父框架），可以使用下面的语法：

```
parent		//当前窗口的父窗口
self.parent	//当前窗口的父窗口
w.parent 		//窗口 w 的父窗口
```

要从顶层窗口含有的任何一个框架中引用它，可以使用如下语法：

```
top		//当前框架的顶层窗口
self.top		//当前框架的顶层窗口
f.top		//框架 f 的顶层窗口
```

新的顶层浏览器窗口由方法 Window.open() 创建。当调用该方法时，应把 open() 调用的返回值存储在一个变量中，然后使用那个变量来引用新窗口。新窗口的 [opener 属性](https://www.w3school.com.cn/jsref/prop_win_opener.asp)反过来引用了打开它的那个窗口。

一般来说，Window 对象的方法都是对浏览器窗口或框架进行某种操作。而 [alert() 方法](https://www.w3school.com.cn/jsref/met_win_alert.asp)、[confirm() 方法](https://www.w3school.com.cn/jsref/met_win_confirm.asp)和 [prompt 方法](https://www.w3school.com.cn/jsref/met_win_prompt.asp)则不同，它们通过简单的对话框与用户进行交互。

