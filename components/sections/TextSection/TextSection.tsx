import { TextSection as TextSectionProps } from 'types/sanity-schema';

export const TextSection = ({ heading, text }: TextSectionProps) => {
  if (!heading && !text) {
    return null;
  }

  return (
    <section>
      TEXT SECTION
      {heading && <h1>{heading}</h1>}
      {text && <p>{text}</p>}
    </section>
  );
};
