import { z } from "zod";

export const optionSchema = z.object({
  name: z.string(),
  abbreviation: z.string(),
});

// Single option
export type StateType = z.infer<typeof optionSchema>;
// Array of options
export type StatesType = StateType[];
