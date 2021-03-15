import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function Child({ data, onChildClick }) {
  return html`
    <div class="child">
      <button onClick=${onChildClick}>${data}</button>
    </div>
  `;
}
