import { ImportSpecifier } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function coliSpecifierImportStringfy(c: ImportSpecifier) {
  const localName = c?.local?.name;
  const importedName = c?.imported?.name;

  if (localName !== importedName) {
    return [
      //
      localName,
      f(" "),
      f(SyntaxKind.AsKeyword),
      f(" "),
      importedName,
    ];
  } else {
    return localName;
  }
}
