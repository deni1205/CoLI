import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { Identifier, JSXAttributes, stringfy } from "coli";
import { get_jsx_attribute_join_with_by_attributes } from "./jsx-attribute-splitter";

export function strfy_jsx_with_attributes({
  name,
  open_token,
  close_token,
  attributes,
}: {
  name: Identifier;
  open_token: KeywordAndTokenStatic.LessThanToken;
  close_token:
    | KeywordAndTokenStatic.GreaterThanToken
    | KeywordAndTokenStatic.SlashGreaterThanToken;
  attributes: JSXAttributes;
}) {
  const join_attributes_with = get_jsx_attribute_join_with_by_attributes(
    attributes
  );
  let closing_after_new_line = "";
  if (join_attributes_with == "\n  ") {
    closing_after_new_line = KeywordAndTokenStatic.BreakLineToken;
  }
  return `${open_token}${stringfy(name, { language: "tsx" })} ${stringfy(
    attributes,
    {
      language: "tsx",
      joinWith: join_attributes_with,
    }
  )}${closing_after_new_line}${close_token}`;
}
