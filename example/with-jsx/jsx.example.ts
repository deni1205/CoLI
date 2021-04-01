import { stringfy } from "@coli/export-string";
import { JSXElement, JSXIdentifier } from "coli/lib/jsx";
import { JSXClosingElement } from "coli/lib/jsx/jsx-closing-element";
import { JSXOpeningElement } from "coli/lib/jsx/jsx-opening-element";
import { JSX } from "coli/lib/builders/jsx";
import { VariableDeclaration } from "coli/lib/declarations/variable";

const wrapperJsxIdentifier = new JSXIdentifier("Wrapper");
const titleAndAvatarWrapperJsxIdentifier = new JSXIdentifier(
  "TitleAndAvatarWrapper"
);
const titleJsxIdentifier = new JSXIdentifier("Title");

/**
 * <Wrapper>
 *      <TitleAndAvatarWrapper>
 *          <Title>{props.title}</Title>
 *          <Avatar src={props.avatar}/>
 *      </TitleAndAvatarWrapper>
 *      <Message>{props.message}</Message>
 *  </Wrapper>
 */

const jsx = new JSXElement({
  openingElement: new JSXOpeningElement(wrapperJsxIdentifier),
  closingElement: new JSXClosingElement(wrapperJsxIdentifier),
  children: [
    new JSXElement({
      openingElement: new JSXOpeningElement(titleAndAvatarWrapperJsxIdentifier),
      closingElement: new JSXClosingElement(titleAndAvatarWrapperJsxIdentifier),
      children: [
        new JSXElement({
          openingElement: new JSXOpeningElement(titleJsxIdentifier),
          closingElement: new JSXClosingElement(titleJsxIdentifier),
        }),
      ],
    }),
  ],
});

console.log(
  stringfy(jsx, {
    language: "tsx",
  })
);

// BUILDER

// <div></div>
const div1 = JSX.tag("div");

// <div/>
const div2 = JSX.tag("div", {
  selfClosing: true,
});

/**
 * ```
 * <div>
 *  <div>
 *   plain text
 *   { let name }
 *   <h1>heading</h1>
 *  </div>
 *  <h2>heading</h2>
 *  <h3>heading</h3>
 * </div>
 * ```
 */
JSX.div()(
  JSX.div()(
    JSX.text("plain text"),
    JSX.exp(new VariableDeclaration("name")),
    JSX.h1()(JSX.text("heading")),
    JSX.p()(`
    `)
  ),
  JSX.h2(),
  JSX.h3()
);
