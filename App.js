import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getSellers } from "./data.js";

import Parent from "./Parent.js";

function App() {

  //const [sellData, setSellData] = useState([]);

  //useEffect(() => {
  //  return getData().then((data) => {
  //    setSellData(data);
  //  });
  //});


  return html` <${Parent} /> `;
}

render(html` <${App} /> `, document.getElementById("app"));

//function getJSON() {
//    console.log(axios);
//}
