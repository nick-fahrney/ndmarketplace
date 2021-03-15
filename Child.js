import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function Child({ info }) {
  return html`
    <div class="secondchild">
      <article> on top </article>
    </div>
    <div class="child">
      <article> 1 </article>
      <article> 2 </article>
      <article> 3 </article>
      <article> 4 </article>
      <article> 5 </article>
      <article> 6 </article>
    </div>

    <div class="filter">
      <article> Form </article>
    </div>

  `;
}
