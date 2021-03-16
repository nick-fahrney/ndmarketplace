import {
    html,
    render,
    useEffect,
    useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getSellers } from "./data.js";

import Parent from "./Parent.js";

function App() {

  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    return getSellers().then((data) => {
      setSellers(data);
    });
  });

  //const [sellData, setSellData] = useState([]);

  //useEffect(() => {
  //  return getData().then((data) => {
  //    setSellData(data);
  //  });
  //});


  return html` <${Parent} objs=sellers/> `;
}

render(html` <${App} /> `, document.getElementById("app"));

//function getJSON() {
//    console.log(axios);
//}
