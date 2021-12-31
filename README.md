---
title: GMarkdown
sidemenu: false
---

> 此功能由[dumi](https://d.umijs.org/zh-CN/guide/advanced#umi-%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90%E6%A8%A1%E5%BC%8F)提供，dumi 是一个 📖 为组件开发场景而生的文档工具，用过的都说好。

## GMarkdown.Editor 组件

这个组件自带了一些 Pro 的配置，你一般都需要改掉它的信息。

```tsx
import React, { useState } from "react";
import GMarkdown from "@/components/GMarkdown";

export default () => {
  const valueInit = `
~~~jsx
  import { Button, Menu } from 'antd';
  import React from 'react';
  import HeaderDropdown from '@/components/HeaderDropdown';

  export default () => {
    const menuHeaderDropdown = (
      <Menu selectedKeys={[]}>
        <Menu.Item key="center">个人中心</Menu.Item>
        <Menu.Item key="settings">个人设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <Button>hover 展示菜单</Button>
      </HeaderDropdown>
    );
  };
  </GMarkdown> ~~~
  `;

  const [value, setValue] = useState(valueInit);
  const onEditor = (e) => {
    setValue(e);
  };

  return <GMarkdown.Editor value={value} onChange={onEditor} />;
};
```

### API

| 参数             | 说明                                                    | 类型                         | 默认值 |
| ---------------- | ------------------------------------------------------- | ---------------------------- | ------ |
| value            | 输入框的值                                              | `string`                     | -      |
| onChange         | 值修改后触发                                            | `(value) => void`            | -      |
| theme            | 皮肤                                                    | `string`                     | -      |
| hideMarkNav      | 是否开启目录                                            | `boolean`                    | false  |
| headingTopOffset | 相对于窗顶位移的锚定                                    | `number`                     | 0      |
| ordered          | 标题是否包含数字前缀                                    | `boolean`                    | true   |
| remarkPlugins    | 插件列表                                                | `(visible: boolean) => void` | -      |
| components       | 将标记名映射到组件的对象                                | `object`                     | {}     |
| config           | 工具栏设置                                              | `object`                     | {}     |
| onImageUpload    | 上传返回图片地址                                        | `() => Promise`              | -      |
| markdownProps    | 组件参数 [https://github.com/remarkjs/react-markdown]() | `-`                          | -      |

## GMarkdown 展示

一个带补全数据的输入框，支持收起和展开 Input

```jsx
/**
 * background: '#f0f2f5'
 */
import { Button, Menu } from "antd";
import React from "react";
import { GMarkdown } from "@/components";

export default () => {
  const value = `## 展示菜单
  | 参数          | 说明                                                    | 类型      | 默认值 |
| ------------- | ------------------------------------------------------- | --------- | ------ |
| value         | 输入框的值                                              | string  | -      |
| theme         | 皮肤                                                    | string  | -      |
| components    | 将标记名映射到组件的对象                                | object  | {}     |
| remarkPlugins | 输入框默认是否显示，只有第一次生效                      | boolean | -      |
| 其他          | 组件参数 [https://github.com/remarkjs/react-markdown]() | -       | -      |
  ~~~jsx
  import { Button, Menu } from 'antd';
  import React from 'react';
  import HeaderDropdown from '@/components/HeaderDropdown';

  export default () => {
    const menuHeaderDropdown = (
      <Menu selectedKeys={[]}>
        <Menu.Item key="center">个人中心</Menu.Item>
        <Menu.Item key="settings">个人设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <Button>hover 展示菜单</Button>
      </HeaderDropdown>
    );
  };
  </GMarkdown> ~~~

  ### 个人中心
  `;
  return <GMarkdown>{value}</GMarkdown>;
};
```

### API

| 参数          | 说明                                                    | 类型      | 默认值 |
| ------------- | ------------------------------------------------------- | --------- | ------ |
| value         | 输入框的值                                              | `string`  | -      |
| theme         | 皮肤                                                    | `string`  | -      |
| components    | 将标记名映射到组件的对象                                | `object`  | {}     |
| remarkPlugins | 输入框默认是否显示，只有第一次生效                      | `boolean` | -      |
| plugins        | 插件列表                                             |`array`   |  []
| 其他          | 组件参数 [https://github.com/remarkjs/react-markdown]() | `-`       | -      |


### plugins 插件列表
  [
    "header",
    "font-bold",
    "font-italic",
    "font-underline",
    "font-strikethrough",
    "list-unordered",
    "list-ordered",
    "block-quote",
    "block-wrap",
    "block-code-inline",
    "block-code-block",
    "table",
    "image",
    "link",
    "clear",
    "logger",
    "mode-toggle",
    "full-screen",
    "tab-insert",
  ]


### theme 皮肤

a11yDark,a11yLight,agate,anOldHope ,androidstudio ,arduinoLight, arta, ascetic, atelierCaveDark, atelierCaveLight, atelierDuneDark, atelierDuneLight, atelierEstuaryDark, atelierEstuaryLight, atelierForestDark, atelierForestLight, atelierHeathDark, atelierHeathLight, atelierLakesideDark, atelierLakesideLight, atelierPlateauDark, atelierPlateauLight, atelierSavannaDark, atelierSavannaLight, atelierSeasideDark, atelierSeasideLight, atelierSulphurpoolDark, atelierSulphurpoolLight, atomOneDarkReasonable, atomOneDark, atomOneLight, brownPaper, codepenEmbed, colorBrewer, darcula, dark, defaultStyle, docco, dracula, far, foundation, githubGist, github, gml, googlecode, gradientDark, grayscale, gruvboxDark, gruvboxLight, hopscotch, hybrid, idea, irBlack, isblEditorDark, isblEditorLight, kimbieDark, kimbieLight, lightfair, lioshi, magula, monoBlue, monokaiSublime, monokai, nightOwl, nnfxDark, nnfx, nord, obsidian, ocean, paraisoDark, paraisoLight, pojoaque, purebasic, qtcreatorDark, qtcreatorLight, railscasts, rainbow, routeros, schoolBook, shadesOfPurple, solarizedDark, solarizedLight, srcery ,sunburst ,tomorrowNightBlue ,tomorrowNightBright ,tomorrowNightEighties ,tomorrowNight ,tomorrow ,vs ,vs2015 ,xcode ,xt256 ,zenburn

### 注意

样式冲突请用重写样式解决

### 卸载内置插件

```js
import GMarkdown, { Plugins } from "@/components/GMarkdown";
GMarkdown.unuse(Plugins.Header); // header
GMarkdown.unuse(Plugins.FontBold); // font-bold
```

## 编写插件

### 函数组件

同样可以使用函数组件来编写插件

```js
import React from 'react';
import GMarkdown from from '@/components/GMarkdown';

const Counter = ({editor, editorConfig, config, pluginName}) => {
  console.log(editor,editorConfig,config,pluginName)

  const [num, setNum] = React.useState(config.start);

  const handleClick = () => {
    // 调用API，往编辑器中插入一个数字
    editor.insertText(num);
    // 更新一下自身的state
    setNum(num + 1);
  }
  return (
    <span
      className="button button-type-counter"
      title="Counter"
      onClick={handleClick}
    >
      123213213
    </span>
  );
}
// 如果需要的话，可以在这里定义默认选项
Counter.defaultConfig = {
  start: 0
}
// 定义按钮被防止在哪个位置，默认为左侧，还可以放置在右侧（right）
Counter.align = 'left';
// 这里定义插件名称，注意不能重复
Counter.pluginName = 'counter';


// 使用：
GMarkdown.Editor.use(Counter, {
  start: 10
});
```
