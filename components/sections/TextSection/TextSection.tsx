import { TextSection as TextSectionProps } from 'types/sanity-schema';

export const TextSection = ({ heading, text }: TextSectionProps) => {
  if (!heading && !text) {
    return null;
  }

  return (
  );
};
