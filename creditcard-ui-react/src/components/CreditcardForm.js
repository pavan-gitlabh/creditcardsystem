import React, { useState } from "react";

function CreditcardForm() {
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [balance, setBalance] = useState("");
  const [limit, setLimit] = useState("");

  return (
    <form className="NewItem">
      <label>
        User Name:
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Card Number:
        <input
          type="text"
          name="cardnumber"
          value={cardnumber}
          onChange={(e) => setCardnumber(e.target.value)}
        />
      </label>
      <label>
        Balance:
        <input
          type="text"
          name="balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </label>
      <label>
        Limit:
        <input
          type="text"
          name="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default CreditcardForm;
