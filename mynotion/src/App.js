import logo from './logo.svg';
import './App.css';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

import staticResponse from './data/7c30ef828b0447edb597a109f62512fa.json';
function App() {
  return (
    <div className="App">
      <NotionRenderer
        blockMap={staticResponse}
        fullPage={true}/>
    </div>
  );
}

export default App;
