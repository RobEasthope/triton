type SanityPreviewTitlesProps = { title: string; component: string };

export const sanityPreviewTitles = ({ title, component }: SanityPreviewTitlesProps) => ({
  title: title || component,
  subtitle: title ? component : null,
});
