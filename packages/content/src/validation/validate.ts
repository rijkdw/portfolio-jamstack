import { ZodError } from "zod";

export default function validate<T>(schema: Zod.Schema<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      const dataString = JSON.stringify(data, null, 2);
      const errorString = JSON.stringify(error, null, 2);
      throw new Error(
        `Could not validate\nDATA:\n${dataString}\nERROR:\n${errorString}`
      );
    }
    throw error;
  }
}
