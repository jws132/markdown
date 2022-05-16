import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from "prop-types";
import remarkGfm from 'remark-gfm';
import CodeBlock from './components/CodeBlock';

const Markdown = ({ children, theme, components, remarkPlugins, markdownProps, ...restProps }) => {
  const newProps = {
    children,
    ...markdownProps,
    ...restProps,
  };

  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }], ...remarkPlugins]}
      components={{
        code: (el) => {
          return <CodeBlock {...el} theme={theme} />;
        },
        ...components,
      }}
      {...newProps}
    />
  );
};


Markdown.propTypes = {
  theme:PropTypes.string,
  components:PropTypes.object,
  remarkPlugins:PropTypes.array,
}


Markdown.defaultProps = {
  theme: '',
  components: {},
  remarkPlugins: [],
};

export default Markdown;
