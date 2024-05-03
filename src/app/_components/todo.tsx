import type { Todo } from "~/types";

type Props = {
  todo: Todo;
};

const TodoComponent = ({ todo }: Props) => {
  const { id, text, done } = todo;
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer rounded border border-gray-300 bg-gray-50"
          name="done"
          id="done"
          defaultChecked={done}
        />
        <label htmlFor="done" className={`cursor-pointer`}>
          {text}
        </label>
        <button className="rounded-md bg-blue-700 px-4 py-1 text-white hover:bg-blue-800 focus:outline-none focus:ring-4">
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoComponent;
