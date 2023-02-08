import React, { useState } from "react";
import CreditcardForm from "./CreditcardForm";
import Creditcard from "./Creditcard";

function CreditcardList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="CreditcardList">
      <CreditcardForm />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Creditcard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default CreditcardList;
