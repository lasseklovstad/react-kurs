import { useState } from "react";

/*
    Fiks feilmeldingen i console.loggen
 */

type ListItem = {
  id: string;
  value: string;
};

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

export const Array = () => {
  const [items, setItems] = useState<ListItem[]>(allItems);

  const addItem = () => {
    const itemIds = items.map((i) => i.id);
    const addItem = allItems.find((i) => !itemIds.includes(i.id));
    if (addItem) {
      setItems([...items, addItem]);
    }
  };

  const removeItem = (item: ListItem) => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          <li>
            <button onClick={() => removeItem(item)}>remove</button>{" "}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{" "}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
};
