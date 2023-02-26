import { Helmet } from "react-helmet"
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 
import {useState} from "react";
function Practice() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  console.log('languages', languages)
  return (
    <>
     <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />

    </>
  )
}

export default Practice


