import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";
const axios = window.axios;

import Parent from "./Parent.js";

function App() {
  return html` <${Parent} /> `;
}

render(html` <${App} /> `, document.getElementById("app"));

//function getJSON() {
//    console.log(axios);
//}
