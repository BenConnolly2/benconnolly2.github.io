import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-ruby';

export default function CodeSnippet({ code, className }){
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre>
      <code className={className}>
        {code}
      </code>
    </pre>
  );
};


