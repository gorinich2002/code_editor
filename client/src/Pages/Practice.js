import Editor from "@monaco-editor/react";
import axios from "axios";
import '../assets/Editor.css';

import {useState} from "react";
function Practice() {

  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState('');

  const sendCode = (code)=>{
    axios.post('http://localhost:5000/compiler/compile',{program: code, input:input})
    .then(res => {
      setOutput(res.data.output);
      setError('');
    })
    .catch(err=>{
      setError(err.response.data.error);
      setOutput('');
    })
  }

  const handleEditorChange = (value) => {
    setValue(value);
  };
  const [code, setCode] = useState(
    `//write code`
  );
  const [value, setValue] = useState(code || "");

  return (
    <>
    <div className="horizontal-flex">
    <Editor
        height="80vh"
        width={`65%`}
        language={'cpp'}
        value={value}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        theme={"vs-dark"}
      />
      <div className="output-wrapper">
        <div className="ouput-panel">
          <h3>Вывод</h3>
          <div>{output}</div>
        </div>
        <div className="ouput-panel">
          <h3>Ошибки</h3>
          <div>{error}</div>
        </div>
      </div>
    </div>
      
    <button onClick={()=>{sendCode(value)}}  className='btn btn-dark'>
      Send code
    </button>
    <input
    type="text"
    className="form-control"
    placeholder="Введите входные значения через пробел"
    aria-label="Введите входные значения через пробел"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    </>
  )
}



export default Practice


