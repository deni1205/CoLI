# CoLI

![](./branding/coli-cover.png)

Computer Language Interface (node, dart, css, html, python) An AST Builder / Parser
*design file available [here](https://www.figma.com/file/JYhmzaX7E5HNHQEK2Dp7Cp/CoLI?node-id=0%3A1)*

## Installation

```sh
yarn add coli
```

## Supported platforms

- NodeJS

## Builders

Read [BUILDERS.md](./docs/BUILDERS.md)

## Supported gen target languages

- JSX / TSX
- JS / TS
- Dart (+ Flutter)
- CSS
- SCSS
- XML
- HTML

## CoLI Node implementation.

**jsx building**

```
div(div("content"))

>>> <div>
>>>   <div>
>>>     content
>>>   </div>
>>> </div>
```

**dart variable declaration**

```
const file = new File("main.dart")
file.add(Variable.const("someVariable", "hi there!", CoLITypes.String))

// main.dart
>>> final String someVariable = "hi there!";
```

> to check work around for generating flutter code - checkout [flutter-builder](https://github.com/bridgedxyz/flutter-builder)

## Function

> build function with coli syntax

```typescript
// 1.

function thisIsNativeFunction() {}

const coliFunc = coli.function(thisIsNativeFunction);

coliFunc.toDart();
// > void thisIsNativeFunction(){}
coliFunc.toPython({ followConvention: true });
// > def this_is_native_function(): ...
coliFunc.toJavascript();
// > function thisIsNativeFunction(){}

// 2.
const coliFunc = new coli.Function({
  returns: coli.Types.void,
  name: "thisIsGeneratedFunction",
  params: {
    first: {
      required: false,
      type: coli.Types.any,
    },
  },
  executable: coli.Executable.fromStatic("console.log('hi there.');"),
});
coliFunc.toJavascript();
// > function thisIsGeneratedFunction(first){ console.log('hi there.'); }
```

## Development

```sh
# packs the workspace
yarn
# runs the editor webapp
yarn editor
```

## References

- https://astexplorer.net/
- https://github.com/acornjs/acorn
- ts-ast-viewer.com
- https://github.com/benjamn/ast-types
- https://en.wikipedia.org/wiki/Abstract-Type_and_Scheme-Definition_Language
- https://docs.python.org/3/library/ast.html
- https://github.com/estree/estree
- https://github.com/benjamn/ast-types
- https://github.com/tc39/proposals
- https://doc.esdoc.org/github.com/mason-lang/esast/class/src/ast.js~ImportSpecifier.html
