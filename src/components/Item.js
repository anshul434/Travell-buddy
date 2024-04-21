export default function Item({ item, del, pack }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => pack(item.id)}
      />

      <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => del(item.id)}>❌</button>
    </li>
  );
}
