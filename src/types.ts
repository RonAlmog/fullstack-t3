import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;

type allTodosOutput = RouterOutputs["todo"]["all"];
export type Todo = allTodosOutput[number]; // number= on of the list

export const todoInput = z
  .string({ required_error: "describe your todo" })
  .min(1)
  .max(50);
