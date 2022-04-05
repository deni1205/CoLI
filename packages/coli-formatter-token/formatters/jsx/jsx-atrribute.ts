import { SyntaxKind } from "@coli.codes/core/_internal";
import { JSXAttribute } from "coli";
import f from "../../tokens";

export function astfmt_jsx_attribute(atrribute: JSXAttribute) {
  const { name, initializer } = atrribute;
  // e.g. <input readonly />
  if (!initializer) {
    return [name];
  }

  // key=val
  // e.g. <input key="value" />
  return [name, f(SyntaxKind.EqualsToken), initializer];
}
