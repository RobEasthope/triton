import dynamic from 'next/dynamic';
import { ExampleSectionProps } from '@/UI/content/ExampleSection/ExampleSection';

const ExampleSection = dynamic(
  () => import('../../../content/ExampleSection/ExampleSection')
);

export type RenderSectionsProps = {
  sections: Record<'_type' | '_key' | string, any>[];
};

export const RenderSections = ({ sections }: RenderSectionsProps) => {
  if (!sections) {
    return <div>Missing sections</div>;
  }

  return (
    <>
      {sections?.map((section) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _type } = section;

        switch (_type) {
          case 'ExampleSection':
            return (
              <ExampleSection
                {...(section as ExampleSectionProps)}
                key={`render-sections-${section._key as string}`}
              />
            );

          default:
            return (
              <div key={section?._key as string}>
                Missing section {section?._type}
              </div>
            );
        }
      })}
    </>
  );
};
