import { upperFirst } from 'lodash';

import * as SectionComponents from 'components/utils/rendering/RenderSections/section-index';

function resolveSections(section) {
  const Section = SectionComponents[upperFirst(section._type)];

  if (Section) {
    return Section;
  }

  console.error('Cant find section', section);
  return null;
}

export function RenderSections({ sections, preview }) {
  if (!sections) {
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
            {...section}
            key={`render-sections-${section._key as string}`}
            preview={preview}
          />
        );
      })}
    </>
  );
}
