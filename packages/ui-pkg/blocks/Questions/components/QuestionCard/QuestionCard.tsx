import * as Accordion from "@radix-ui/react-accordion";
import { Box } from "ui-pkg/base/Box/Box";
import { QuestionCard as rawQuestionCardProps } from "ui-pkg/types/sanity-schema";
import { RiArrowDownSLine } from "react-icons/ri";
import { Prose } from "ui-pkg/base/Prose/Prose";
import { BasicTextComponents } from "ui-pkg/base/Prose/components/BasicText/BasicText";

// TYPES
export type QuestionCardProps = rawQuestionCardProps;

// MARKUP
export const QuestionCard = ({
  question,
  answer,
}: Pick<QuestionCardProps, "question" | "answer">) => {
  if (!question && !answer) {
    return null;
  }

  return (
    <Box as="div">
      <Accordion.Item value={question}>
        {question && (
          <Accordion.Header>
            <Accordion.Trigger>
              {question}

              <RiArrowDownSLine />
            </Accordion.Trigger>
          </Accordion.Header>
        )}

        {answer && (
          <Accordion.Content>
            <Prose as="div" content={answer} components={BasicTextComponents} />
          </Accordion.Content>
        )}
      </Accordion.Item>
    </Box>
  );
};
