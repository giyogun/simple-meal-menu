import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const categoryHandler = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const currentCategory = items.filter((item) => item.category === category);
    setMenuItems(currentCategory);
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
