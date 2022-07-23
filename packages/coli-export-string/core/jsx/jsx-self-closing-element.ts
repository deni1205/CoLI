import { formatters } from "@coli.codes/ast-formatter";
import { JSXSelfClosingElement } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_self_closing_element(
  c: JSXSelfClosingElement,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_self_closing_element(c);
  return stringfy_tokenformatted(ast, l);
}
