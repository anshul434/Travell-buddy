import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, ondel, onpacked, reset }) {
  const [sortby, setsortby] = useState("packed");

  let sorteditems;

  if (sortby === "input") sorteditems = items;

  if (sortby === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item item={item} toggle pack={onpacked} del={ondel} key={item.id} />
        ))}
      </ul>
      <div className="action">
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed status</option>
        </select>
        <button onClick={reset}>clear list</button>
      </div>
    </div>
  );
}
