import React, { useState, useRef } from "react";
import GMarkdown, { Plugins } from "../components/index";
import Counter from "./Counter";

GMarkdown.Editor.unuse(Plugins.Image);
GMarkdown.Editor.use(Counter, {
  start: 2,
});
export default () => {
  const editorRef = useRef(null);
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


  const handleClick = () => {
    debugger
    if (editorRef.current) {
      alert(editorRef.current.getMdValue());
    }
  };


  return (
    <div>
      <button onClick={handleClick}>Get value</button>
      <GMarkdown.Editor
        ref={editorRef}
        value={value}
        onChange={onEditor}
        plugins={["counter"]}
      />
      <GMarkdown>{valueInit}</GMarkdown>
    </div>
  );
};
