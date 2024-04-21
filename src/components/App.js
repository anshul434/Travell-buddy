import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleadditems(itemm) {
    setItems((items) => [...items, itemm]);
  }

  function handledel(id) {
    setItems((items) => items.filter((itemm) => itemm.id !== id));
  }

  function handletoggleitem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }

  function clearlist() {
    const confirmed = window.confirm("are you sure to clear the list?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onadditems={handleadditems} />
      <PackingList
        items={items}
        ondel={handledel}
        onpacked={handletoggleitem}
        reset={clearlist}
      />
      <Stats items={items} />
    </div>
  );
}
