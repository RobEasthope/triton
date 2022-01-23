import dynamic from 'next/dynamic';
import { ExampleSectionProps } from '@/UI/content/ExampleSection/ExampleSection';

const ExampleSection = dynamic(
  () => import('../../../content/ExampleSection/ExampleSection')
);

type RenderSectionsProps = {
  sections: [ExampleSectionProps];
};

export function RenderSections({ sections }: RenderSectionsProps): any {
  if (!sections) {
    return <div>Missing sections</div>;
  }

  return sections?.map((section) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { _type } = section;

    switch (_type) {
      case 'exampleSection':
        return (
          <ExampleSection
            {...section}
            key={`render-sections-${section._key}`}
          />
        );

      default:
        return <div key={section?._key}>Missing section {section?._type}</div>;
    }
  });
}
