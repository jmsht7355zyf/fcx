---
title: JavaScriptWebAPI
sidebar: auto
---

# <center>JavaScriptWebAPI</center>

## Console 对象

Console 对象提供对浏览器调试控制台的访问。

### Console 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [assert()](https://www.w3school.com.cn/jsref/met_console_assert.asp) | 如果 assertion 为 false，则将错误消息写入控制台。            |
| [clear()](https://www.w3school.com.cn/jsref/met_console_clear.asp) | 清空控制台。                                                 |
| [count()](https://www.w3school.com.cn/jsref/met_console_count.asp) | 记录这个对 count() 的特定调用已被调用的次数。                |
| [error()](https://www.w3school.com.cn/jsref/met_console_error.asp) | 将错误消息输出到控制台。                                     |
| [group()](https://www.w3school.com.cn/jsref/met_console_group.asp) | 在控制台中创建新的分组。                                     |
| [groupCollapsed()](https://www.w3school.com.cn/jsref/met_console_groupcollapsed.asp) | 在控制台中创建新的行内组。但是新组是折叠创建的。用户需要使用按钮将其展开。 |
| [groupEnd()](https://www.w3school.com.cn/jsref/met_console_groupend.asp) | 退出控制台中的当前分组。                                     |
| [info()](https://www.w3school.com.cn/jsref/met_console_info.asp) | 将信息性消息输出到控制台。                                   |
| [log()](https://www.w3school.com.cn/jsref/met_console_log.asp) | 将消息输出到控制台。                                         |
| [table()](https://www.w3school.com.cn/jsref/met_console_table.asp) | 将表格式的数据显示为表。                                     |
| [time()](https://www.w3school.com.cn/jsref/met_console_time.asp) | 启动计时器（可跟踪操作需要多长时间）。                       |
| [timeEnd()](https://www.w3school.com.cn/jsref/met_console_timeend.asp) | 停止以前由 console.time() 启动的计时器。                     |
| [trace()](https://www.w3school.com.cn/jsref/met_console_trace.asp) | 将堆栈跟踪输出到控制台。                                     |
| [warn()](https://www.w3school.com.cn/jsref/met_console_warn.asp) | 将警告消息输出到控制台。                                     |

## Geolocation 对象

Geolocation 对象允许用户向 Web 应用程序提供其位置。出于隐私原因，会要求用户允许报告位置信息。

**注意：**此特性仅在安全上下文（HTTPS）中可用。

**注意：**对于 iPhone 等装有 GPS 的设备，地理位置最为准确。

Geolocation API 是通过 navigator.geolocation 对象发布的。

### Geolocation 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [coordinates](https://www.w3school.com.cn/jsref/prop_geo_coordinates.asp) | 返回设备在地球上的位置和海拔。                               |
| [position](https://www.w3school.com.cn/jsref/prop_geo_position.asp) | 返回在给定时间相关设备的位置。                               |
| positionError                                                | 返回使用地理定位设备时发生错误的原因。                       |
| positionOptions                                              | 描述包含选项属性的对象，该对象作为 Geolocation.getCurrentPosition() 和 Geolocation.watchPosition() 的参数传递。 |

### Geolocation 对象方法

| 方法                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| clearWatch()         | 注销先前使用 Geolocation.watchPosition() 安装的位置/错误监视处理程序。 |
| getCurrentPosition() | 返回设备的当前位置。                                         |
| watchPosition()      | 返回监听 ID 值，然后将其传递给 Geolocation.clearWatch() 方法即可用于注销处理程序。 |

## History 对象

History 对象包含用户（在浏览器窗口中）访问过的 URL。

History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。

**注释：**没有应用于 History 对象的公开标准，不过所有浏览器都支持该对象。

### History 对象属性

| 属性                                                         | 描述                              |
| :----------------------------------------------------------- | :-------------------------------- |
| [length](https://www.w3school.com.cn/jsref/prop_his_length.asp) | 返回浏览器历史列表中的 URL 数量。 |

### History 对象方法

| 方法                                                         | 描述                                |
| :----------------------------------------------------------- | :---------------------------------- |
| [back()](https://www.w3school.com.cn/jsref/met_his_back.asp) | 加载 history 列表中的前一个 URL。   |
| [forward()](https://www.w3school.com.cn/jsref/met_his_forward.asp) | 加载 history 列表中的下一个 URL。   |
| [go()](https://www.w3school.com.cn/jsref/met_his_go.asp)     | 加载 history 列表中的某个具体页面。 |

### History 对象描述

History 对象最初设计来表示窗口的浏览历史。但出于隐私方面的原因，History 对象不再允许脚本访问已经访问过的实际 URL。唯一保持使用的功能只有 [back()](https://www.w3school.com.cn/jsref/met_his_back.asp)、[forward()](https://www.w3school.com.cn/jsref/met_his_forward.asp) 和 [go()](https://www.w3school.com.cn/jsref/met_his_go.asp) 方法。

## Storage 对象

Web Storage API 的 Storage 对象提供对特定域的会话存储或本地存储的访问。这使您可以读取、添加、修改和删除存储的数据项。

### Storage 对象属性和方法

| 属性/方法                                                    | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [key(*n*)](https://www.w3school.com.cn/jsref/met_storage_key.asp) | 返回存储中第 n 个键的名称。                  |
| [length](https://www.w3school.com.cn/jsref/prop_storage_length.asp) | 返回存储在 Storage 对象中的数据项的数量。    |
| [getItem(*keyname*)](https://www.w3school.com.cn/jsref/met_storage_getitem.asp) | 返回指定键名的值。                           |
| [setItem(*keyname*, *value*)](https://www.w3school.com.cn/jsref/met_storage_setitem.asp) | 将键添加到存储中，或更新键的值（若已存在）。 |
| [removeItem(*keyname*)](https://www.w3school.com.cn/jsref/met_storage_removeitem.asp) | 从存储中删除键。                             |
| [clear()](https://www.w3school.com.cn/jsref/met_storage_clear.asp) | 清空存储中的所有键。                         |

### Web Storage API 相关页面

| 属性                                                         | 描述                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------- |
| [window.localStorage](https://www.w3school.com.cn/jsref/prop_win_localstorage.asp) | 允许将键/值对保存在Web浏览器中。存储没有到期日期的数据。 |
| [window.sessionStorage](https://www.w3school.com.cn/jsref/prop_win_sessionstorage.asp) | 允许将键/值对保存在 Web 浏览器中。为会话存储数据。       |

