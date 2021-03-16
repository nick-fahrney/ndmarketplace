import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import Child from "./Child.js";



export default function Parent() {
  function clickAlert() {
    alert("I am working");
  }
  return html`
    <div class="App">
      <${Child}>
    </div>
  `;
}
