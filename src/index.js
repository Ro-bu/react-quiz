import React from 'react';
import App from "./App";
import {createRoot} from "react-dom/client";
import "./styles.css"

const root = createRoot(document.querySelector("#root"));
root.render(<App />);