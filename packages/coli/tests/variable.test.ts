import { VariableDeclaration } from "../lib/declarations/variable";
import { stringfy } from "../../export-string";
import { Types } from "../lib";

/**
 * @test VariableDeclaration
 */

const notInitValue = new VariableDeclaration("notInitValue", {
  kind: "const",
});

// const notInitValue : any;
console.log(stringfy(notInitValue, { language: "typescript" }));

const initValue = new VariableDeclaration("initValue", {
  kind: "const",
  value: 1,
});

// const initValue : any = 1;
console.log(stringfy(initValue, { language: "typescript" }));

const initType = new VariableDeclaration("initType", {
  kind: "const",
  type: Types.number,
});

// const initType : number;
console.log(stringfy(initType, { language: "typescript" }));
