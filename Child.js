import {
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { getSellers } from "./data.js";




export default function Child() {

  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    return getSellers().then((data) => {
      setSellers(data);
    });
  });

  console.log(sellers);

  return html`
    <div class="nav">
      <ul class="navigation">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Login</a></li>
        <li><a href="index.html">Otherthing</a></li>
      </ul>
    </div>
    <div class="search">
      <form action="http://www.example.com/subscribe.php" method="post">
        <p>Search
          <input type="text" name="SearchBar" size="20" maxlength="20"/>
        </p>
      </form>
    </div>
    <div class="child">

        ${sellers.map(
          (seller) =>
            html`<article key="${seller}" class="itemSale">
              ${seller.title} | ${seller.image} ${seller.price}
              </article>`
            )}
      <article> 1 </article>
      <article> 2 </article>
      <article> 3 </article>
      <article> 4 </article>
      <article> 5 </article>
      <article> 6 </article>
    </div>

    <div class="filter">
      <form action="http://www.example.com/subscribe.php">
        <p>Show items:
          <ul>
            <li><input type="checkbox" name="choice" value="seating" checked="checked"/>Seating</li>
            <li><input type="checkbox" name="choice" value="electronics" checked="checked"/>Electronics</li>
            <li><input type="checkbox" name="choice" value="books" checked="checked"/>Books</li>
            <li><input type="checkbox" name="choice" value="clothes" checked="checked"/>Clothes</li>
          </ul>
        </p>
      </form>
    </div>

  `;
}
