import Navbar from "./components/Navbar";
import FileBox from "./components/FileBox";

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: 40 }}>
        <h1>FS Model for Node</h1>
        <FileBox />
      </div>
    </div>
  );
}

export default App;
