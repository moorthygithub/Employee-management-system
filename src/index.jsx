import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom"; 


import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Router>
    <App />
  </Router>);