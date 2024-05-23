import React, { useEffect, useState } from "react";

import "./CardsFilter.css";
import { useCards } from "../../../context/CardsContext";

const CardsFilter = () => {
  const {getCategoryCard, ranks} = useCards();
  
  const [rank, setRank] = useState("")
  console.log(rank);
  useEffect(() => {
    getCategoryCard()
  },[])
  console.log(ranks);
  return (
    <div>
      <div>
        <select
          value={ranks}
          onChange={(e) => setRank(e.target.value)}
          className="custom-select"
        >
          <option value="все">все</option>
          {ranks.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CardsFilter;
