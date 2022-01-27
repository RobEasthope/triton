import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { NextMetadata } from '@/UI/base/app/Metadata/NextMetadata';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Page as rawPageProps, GlobalMetadata } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from 'blocks/ExampleSection/ExampleSection';

export interface PageProps extends rawPageProps {
  sections: [ExampleSectionProps];
}

export const Page = ({
  page,
  globals,
}: {
  page: PageProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
}) => {
  // Globals props
  const { header, metadata } = globals;

  // Page props
  const { sections } = page;

  return (
    <>
      <NextMetadata page={page} globalMetadata={metadata} />

      <FixedFooterLayout>
        {header && (
          <Header logo={header?.logo} navigation={header?.navigation} />
        )}

        <MainContentLayout as="main">
          {sections && <RenderSections sections={sections} />}
        </MainContentLayout>

        <Footer />
      </FixedFooterLayout>
    </>
  );
};
