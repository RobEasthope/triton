import * as SectionComponents from 'components/utils/RenderSections/section-index';

import { upperFirst } from 'lodash';

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[upperFirst(section._type)];

  if (Section) {
    return Section;
  }

  console.error('Cant find section', section); // eslint-disable-line no-console
  return null;
}

export function RenderSections({
  sections,
  prefilledSections,
  features,
  settings,
  locale,
  preview,
  overlayNav,
}) {
  if (!sections) {
    console.error('Missing section');
    return <div>Missing sections</div>;
  }

  return (
    <>
      {sections?.map((section) => {
        const SectionComponent = resolveSections(section);

        if (!SectionComponent) {
          return (
            <div key={section?._key}>Missing section {section?._type}</div>
          );
        }

        return (
          <SectionComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...section}
            key={`render-sections-${section._key as string}`}
            prefilledSections={prefilledSections}
            features={features}
            settings={settings}
            locale={locale}
            preview={preview}
            overlayNav={overlayNav}
          />
        );
      })}
    </>
  );
}
