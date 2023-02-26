// import { Helmet } from "react-helmet"
// import Editor from 'react-simple-code-editor';
// import Prism,{ highlight, languages } from 'prismjs';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-cpp';
// import 'prismjs/themes/prism.css'; 
import Editor from "@monaco-editor/react";
import axios from "axios";


import {useState} from "react";
function Practice() {

  const [output, setOutput] = useState('');

  const sendCode = (code)=>{
    axios.post('http://localhost:5000/compiler/compile',{program: code, input:'1 2'}).then(res => setOutput(res.data.output))
  }

  const handleEditorChange = (value) => {
    setValue(value);
  };
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [value, setValue] = useState(code || "");

  return (
    <>
      <Editor
        height="85vh"
        width={`100%`}
        language={'cpp' || "javascript"}
        value={value}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        theme={"vs-dark"}
      />
    <button onClick={()=>{sendCode(value)}}>
      Send code
    </button>
      <div>{output}</div>
    </>
  )
}



export default Practice


