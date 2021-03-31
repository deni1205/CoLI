import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CodeBlock from "../code-block";
import DeclartionTitle from "../declarations/common/title";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentColiEditorOption } from "../../states/option.state";
import { stringfy, StringfyLanguage } from "../../../packages/export-string";
import { CommentExpression as CommentClass, CommentStyleEnum } from "coli/lib/expressions/comment";
import { currentDeclarationAtom } from "../../states/declaration.state";
import AutoGrowTextArea from "../auto-grow-textarea";
import Selector from "../selector";
import { CodePreview } from "../code-preview";
import { commentExpressionAtom } from "../../states/expression.state";
export interface CommentExpression {
  style: CommentStyleEnum;
  content: string;
}

const fields = ["line", "content"];
const lineValue = [
  {
    label: "single",
    value: "single-line",
  },
  {
    label: "multi",
    value: "multi-line",
  },
];

const returnExampleCommentCode = (args: {
  class: CommentClass | any;
  value: CommentExpression;
  language: StringfyLanguage;
}) => {
  const { class: commentClass, value, language } = args;
  let code = "";
  code += `new ${commentClass.name}(\n${JSON.stringify(value)}\n)`;
  const comment = new CommentClass({ style: "multi-line", content: code });
  return stringfy(comment, { language });
};

export default function CommentExpression(props: { data: CommentExpression }) {
  const { data } = props;
  const setGlobalCommentExpressionValue = useSetRecoilState(commentExpressionAtom)
  const { language } = useRecoilValue(currentColiEditorOption);
  const [expressionValue, setExpressionValue] = useState<CommentExpression>({
    style: "single-line",
    content: "",
  });

  useEffect(() => {
    setExpressionValue(data);
  }, [data]);

  useEffect(() => {
    // TODO CHANGE PUSH CURRENT DATA ( Declaration Value )
    // setGlobalCommentExpressionValue(expressionValue)
  }, [expressionValue])

  const onChangeExpressionValue = (v: string, n: string, k?: number) => {
    setExpressionValue((d) => ({
      ...d,
      [n]: v == "" ? data[n] : v.replaceAll("\\n", '\n'),
    }));
  };

  const onChangeLineValue = (v: any) => {
    setExpressionValue((d) => ({ ...d, style: v }));
  };

  return (
    <Positioner>
      <Wrapper>
        <DeclartionTitle lable="COMMENT EXPRESSION" />
        <CodeBlock>
          {stringfy(new CommentClass(expressionValue), {
            language,
          })}
        </CodeBlock>
        <Body>
          {Object.keys(data).map((i, idx) => (
            <div
              style={
                idx === 1
                  ? {
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }
                  : null
              }
              className="coli-values"
              key={idx}
            >
              <label>{fields[idx]}</label>
              {idx == 0 ? (
                <Selector
                  onChange={onChangeLineValue}
                  value={expressionValue.style}
                  options={lineValue}
                />
              ) : (
                <AutoGrowTextArea
                  name={i}
                  onChange={onChangeExpressionValue}
                  placeholder={data[i]}
                  value={expressionValue.style}
                />
              )}
            </div>
          ))}
        </Body>
      </Wrapper>
      <CodePreview
        value={expressionValue}
        interface={CommentClass}
        codeHandler={returnExampleCommentCode}
      />
    </Positioner>
  );
}

const Positioner = styled.div`
  display: flex;
  margin-top: 32px;
  padding: 17px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  pre {
    width: 70%;
    font-size: 0.8em !important;
  }
`;

const Body = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;

  .coli-values {
    margin: 10px 0px;
    display: flex;
    align-items: center;

    label {
      flex: 1;
      font-size: 14px;
      color: #959595;
    }
  }
`;
