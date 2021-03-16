import {
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { getSellers } from "./data.js";


// this file carries most of the weight of what each div does and how it gets its data

export default function Child() {

  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    return getSellers().then((data) => {
      setSellers(data);
    });
  });

// here we are having problems with using the values of the checkboxes to filter which products get shown. If you uncomment the indicated sections you can see that we did get a css grid working with data and images pulled from


// users can interact with these buttons on the nav bar, but they currently don't go anywhere because we only have a home page at the moment, so the links all go back to index.html
// similarly, the users will soon be able to click on an item for sale and travel to a page devoted to the item
  return html`
    <div class="nav">
      <ul class="navigation">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Login</a></li>
        <li><a href="index.html">Otherthing</a></li>
      </ul>
    </div>

    <!-- this will ultimately be used to search for a specific keyword in item titles -->

    <div class="search">
      <form action="http://www.example.com/subscribe.php" method="post">
        <p>Search
          <input type="text" name="SearchBar" size="20" maxlength="20"/>
        </p>
      </form>
    </div>

    <!-- the filter is used to only show items that correspond to the checked boxes-->

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

    <!-- this is the div that holds all of the items for sale. The data comes from a json file (ExampleData.json)-->
    <!-- in the future we plan to allow for sorting of these items by price or the ability ot only show items from a certain seller -->
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
