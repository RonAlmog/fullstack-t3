"use client";

import { api } from "~/trpc/react";
import Todo from "./todo";

const Todos = () => {
  const { data: todos, isLoading, isError } = api.todo.all.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error !</div>;

  return (
    <>
      {todos?.length
        ? todos.map((t) => <Todo key={t.id} todo={t} />)
        : "Create your first todo"}
    </>
  );
};

export default Todos;
