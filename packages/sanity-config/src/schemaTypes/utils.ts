import { defineField } from "sanity";

enum OptionEnum {
  required = "required",
}

type Option = `${OptionEnum}`;

export function quickDefineField(
  name: string,
  title: string,
  type: string,
  ...options: Option[]
) {
  const required = options.includes(OptionEnum.required);

  return defineField({
    name,
    title,
    type,
    validation: required ? (rule) => rule.required() : undefined,
  });
}
