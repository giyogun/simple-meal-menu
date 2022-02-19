import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  // const [categories, setMenuItems] = useState(items);
  // const [items, setMenuItems] = useState(items);
  const [menuItems, setMenuItems] = useState(items);

  const categoryHandler = (id) => {
    console.log(id);
    if (id === 1) {
      setMenuItems(items);
    }

    if (id === 2) {
      const breakfast = items.filter(
        (item) => item.category === "breakfast"
      );
      setMenuItems(breakfast);
    }

    if (id === 3) {
      const lunch = items.filter((item) => item.category === "lunch");
      setMenuItems(lunch);
    }

    if (id === 4) {
      const shakes = items.filter((item) => item.category === "shakes");
      setMenuItems(shakes);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories onCategory={categoryHandler} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
