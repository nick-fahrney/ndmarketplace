import {
    html,
    render,
    useState,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getData } from "./data.js";

import Parent from "./Parent.js";

function App() {

  const [users, setUsers] = useState([]);


  return html` <${Parent} /> `;
}

render(html` <${App} /> `, document.getElementById("app"));

//function getJSON() {
//    console.log(axios);
//}
