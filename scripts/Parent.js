import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import Child from "./Child.js";



export default function Parent() {
  
  return html`
    <div class="App">
      <${Child}>
    </div>
  `;
}
