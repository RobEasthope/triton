import * as Accordion from "@radix-ui/react-accordion";
import { Box } from "ui-pkg/base/Box/Box";
import { Questions as rawQuestionsProps } from "ui-pkg/types/sanity-schema";
import { Text } from "ui-pkg/base/Text/Text";
import { QuestionCard } from "./components/QuestionCard/QuestionCard";

// TYPES
export type QuestionsProps = rawQuestionsProps;

// MARKUP
export const Questions = ({ heading, questions }: QuestionsProps) => {
  if (!questions) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <Text as="h2">{heading}</Text>}

        <Accordion.Root type="single" collapsible>
          {Questions.length > 0 &&
            questions.map((block) => (
              <QuestionCard
                key={block?._key}
                question={block.question}
                answer={block.answer}
              />
            ))}
        </Accordion.Root>
      </Box>
    </Box>
  );
};

export default Questions;
