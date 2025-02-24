import { defineField } from "sanity";

enum DefineFieldOptionEnum {
  required = "required",
}

type DefineFieldOption = `${DefineFieldOptionEnum}`;

export default function quickDefineField(
  name: string,
  title: string,
  type: string,
  ...options: DefineFieldOption[]
) {
  const required = options.includes(DefineFieldOptionEnum.required);

  return defineField({
    name,
    title,
    type,
    validation: required ? (rule) => rule.required() : undefined,
  });
}
