import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import "./ExpenseFrom.css";
import Table from "../Table/Table";

const CATEGORIES = ["Food", "Transportation", "Gym", "Entertainment"] as const;

const schema = z.object({
  description: z.string().min(2),
  amount: z.number().nonnegative(),
  category: z.enum(CATEGORIES),
});

type FormData = z.infer<typeof schema>;

interface ExpanseType {
  filter: "All" | "Food" | "Transportation" | "Gym" | "Entertainment";
  expanses: FormData[];
}

function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [expanses, setExpanses] = useState<ExpanseType>({
    filter: "All",
    expanses: [],
  });

  const submitHandle = (data: FieldValues) => {
    const expanse: FormData = {
      description: data["description"],
      amount: data["amount"],
      category: data["category"],
    };
    setExpanses({ filter: expanses.filter, expanses: [...expanses.expanses, expanse] });
  };

  const removeExpanse = (index: number) => {
    const updatedExpanses = expanses.expanses.filter((item, itemIndex) => {
      if (index != itemIndex) return item;
    });
    setExpanses({ ...expanses, expanses: updatedExpanses });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandle)}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="float"
            className="form-control"
            id="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected></option>
            <option value="Food">{CATEGORIES[0]}</option>
            <option value="Transportation">{CATEGORIES[1]}</option>
            <option value="Gym">{CATEGORIES[2]}</option>
            <option value="Entertainment">{CATEGORIES[3]}</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      <Table
        expanses={expanses.expanses}
        deleteMethod={removeExpanse}
      />
    </>
  );
}

export default ExpenseForm;
