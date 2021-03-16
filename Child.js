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

// here we are having problems with using the values of the checkboxes to filter which products get shown. If you uncomment the indicated sections you can see that we did get a css grid working with data and images pulled from

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



    <div class="filter">
      <form action="http://www.example.com/subscribe.php">
        <p>Show items:
          <ul>
            <li><input type="checkbox" name="choice" id="seating" checked="checked"/>Seating</li>
            <li><input type="checkbox" name="choice" id="electronics" checked="checked"/>Electronics</li>
            <li><input type="checkbox" name="choice" id="books" checked="checked"/>Books</li>
            <li><input type="checkbox" name="choice" id="clothes" checked="checked"/>Clothes</li>
          </ul>
        </p>
      </form>
    </div>



    <div class="child">
        ${sellers.map(
          (seller) =>
             // console.log(seller.itemType);
            // console.log(document.getElementById(seller.itemType).checked);
            // if (document.getElementById(seller.itemType).checked == true){
              // console.log("in if");
            html`<article key="${seller}" class="itemSale">
              <img src="${seller.image}" width="150" height="150"/>  ${seller.title} ${seller.price}
              </article>`
            //}
            )
            }
    </div>

  `;
}
