import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { PropertyAccessExpression } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_property_access_expression(
  c: PropertyAccessExpression,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_property_access_expression(c);
  return stringfy_tokenformatted(ast, l);

  // const { expression, name } = c;
  // let code = `${stringfy(expression, { language: l })}`;

  // code += `${KeywordAndTokenStatic.DotToken}${name}`;

  // return code;
}
