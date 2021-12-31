import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ node, inline, theme, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      // eslint-disable-next-line react/no-children-prop
      children={String(children).replace(/\n$/, '')}
      style={hljs[theme]}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;
