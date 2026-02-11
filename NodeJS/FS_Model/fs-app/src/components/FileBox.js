import { useState } from "react";

function FileBox() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const writeFile = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    alert("Saved to file");
  };

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();
    setOutput(data.data);
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <button onClick={writeFile}>FS Write</button>
      <button onClick={readFile} style={{ marginLeft: 10 }}>
        FS Read
      </button>

      <h3>Output:</h3>
      <p>{output}</p>
    </div>
  );
}

export default FileBox;
