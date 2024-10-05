// const CATEGORIES = ["Food", "Transportation", "Gym", "Entertainment"];

type Expanse = {
    "description": string;
    "amount": number;
    "category": string;
}

interface ExpanseListProps {
    expanses: Expanse[];
    deleteMethod: (index:number) => void;
}

function Table({expanses, deleteMethod}:ExpanseListProps) {

  return (
    <>
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
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
