import React, { useRef } from "react";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import ReactMarkdown from "./Markdown";
import "react-markdown-editor-lite/lib/index.css";

const defaultPlugins = [
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
];

const Editor = ({ value, onChange, theme, plugins, config, fileUpload }) => {
  const editorRef = useRef(null);

  /**
   * 上传图片
   * @param {*} file
   * @param {*} callback
   */
  const onImageUpload = async (file, callback) => {
    const url = await fileUpload({ file });
    callback(url);
  };

  /**
   * 获取文档内容
   * @returns 
   */
  const getMdValue = ()=>{
    return editorRef.current.getMdValue()
  }

  /**
   * 
   * @returns 
   */
  const getHtmlValue = ()=>{
    return editorRef.current.getHtmlValue()
  }

  
  const editorProps = {
    value,
    plugins: [...defaultPlugins, ...plugins],
    onChange: ({ html, text }) => {
      onChange?.(text);
    },
    config: {
      view: {
        menu: true,
        md: true,
        html: true,
        fullScreen: true,
        hideMenu: true,
      },
      table: {
        maxRow: 5,
        maxCol: 6,
      },
      canView: {
        menu: true,
        md: true,
        html: true,
        fullScreen: true,
        hideMenu: true,
      },
      ...config,
    },
    onImageUpload,
    renderHTML: (text) => {
      const markdownProps = {
        children: text,
        theme,
      };
      return <ReactMarkdown {...markdownProps} />;
    },
  };

  return (
    <MdEditor ref={editorRef} {...editorProps} style={{ height: "500px" }} />
  );
};

Editor.defaultProps = {
  plugins: [],
  config: {},
};

export { Plugins };

Editor.unuse = MdEditor.unuse;
Editor.use = MdEditor.use;

export default Editor;
