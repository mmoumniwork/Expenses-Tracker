// const CATEGORIES = ["Food", "Transportation", "Gym", "Entertainment"];

import { useState } from "react";

type Expanse = {
  description: string;
  amount: number;
  category: string;
};

interface ExpanseListProps {
  expanses: Expanse[];
  deleteMethod: (index: number) => void;
}

function Table({ expanses, deleteMethod }: ExpanseListProps) {
  const [category, setCategory] = useState<string>("All");

  const filterChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
  };

  return (
    <>
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          value={category}
          onChange={(event) => filterChange(event)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Gym">Gym</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {expanses.map((item, index) => {
            return (
              item.category == category && (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item["description"]}</td>
                  <td>{item["amount"]}</td>
                  <td>
                    {item["category"]}{" "}
                    <button key={index} onClick={() => deleteMethod(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
