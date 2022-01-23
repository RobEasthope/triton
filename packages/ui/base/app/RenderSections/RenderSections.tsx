/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dynamic from 'next/dynamic';

const ExampleSection = dynamic(
  () => import('../../../content/ExampleSection/ExampleSection')
);

export function RenderSections({ sections }) {
  if (!sections) {
    return <div>Missing sections</div>;
  }

  return sections?.map((section) => {
    const sectionType = section?._type;

    switch (sectionType) {
      case 'ExampleSection':
        return (
          <ExampleSection
            {...section}
            key={`render-sections-${section._key as string}`}
          />
        );

      default:
        return <div key={section?._key}>Missing section {section?._type}</div>;
    }
  });
}
