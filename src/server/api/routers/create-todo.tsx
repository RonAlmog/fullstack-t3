"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { todoInput } from "~/types";
import { api } from "~/trpc/react";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const trpc = api.useContext();

  const { mutate } = api.todo.create.useMutation({
    onSettled: async () => {
      await trpc.todo.all.invalidate();
    },
  });
  return (
    <div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          // validate
          const result = todoInput.safeParse(newTodo);
          if (!result.success) {
            console.log("not valid!");
            toast.error(result.error.format()._errors.join("\n"));
            return;
          }
          // save
          mutate(newTodo);
        }}
      >
        <input
          type="text"
          name="new-todo"
          id="new-todo"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-900"
        />
        <button className="bover:bg-blue-800 rounded-lg bg-blue-700 px-4 text-white focus:outline-none focus:ring-4">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
