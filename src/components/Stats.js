export default function Stats({ items }) {
  const numitems = items.length;
  const numpacked = items.filter((iyu) => iyu.packed).length;
  const percentage = (numpacked / numitems) * 100;
  console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have packed everything you are ready to go✈️"
          : ` you have ${numitems} items and you have packed ${numpacked} (${percentage}
        %)`}
      </em>
    </footer>
  );
}
