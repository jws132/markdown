import React from "react";
import PropTypes from "prop-types";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import Editor, { Plugins } from "./Editor";
import Markdown from "./Markdown";
import "./styles.less";

const JMarkdown = ({
  value,
  theme,
  hideMarkNav,
  markNavRender,
  headingTopOffset,
  ordered,
  components,
  remarkPlugins,
  children,
  markdownProps,
}) => {
  const newMarkdown = {
    theme,
    components,
    remarkPlugins,
    markdownProps,
  };
  return (
    <div className="g-markdown">
      <div className="g-markdown-article">
        <Markdown {...newMarkdown}>{value || children}</Markdown>
      </div>
      {!hideMarkNav ? (
        <div className="g-markdown-menu">
          {markNavRender?.()}
          <MarkNav
            source={value || children}
            headingTopOffset={headingTopOffset}
            ordered={ordered}
          />
        </div>
      ) : null}
    </div>
  );
};

JMarkdown.propTypes = {
  theme:PropTypes.string,
  hideMarkNav:PropTypes.bool,
  headingTopOffset:PropTypes.number,
  ordered:PropTypes.bool,
  remarkPlugins:PropTypes.array,
  markNavRender:PropTypes.func,
  components:PropTypes.object,
}


JMarkdown.defaultProps = {
  theme: "",
  hideMarkNav: false, //是否开启目录
  headingTopOffset: 80, // 相对于窗顶位移的锚定
  ordered: true, //标题是否包含数字前缀
  remarkPlugins: [], //插件列表
  markNavRender: () => {},
  components: {},
};

JMarkdown.Editor = Editor;

export { Plugins };

export default JMarkdown;
