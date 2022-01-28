import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { NextMetadata } from '@/UI/base/app/Metadata/NextMetadata';
import { Home as rawHomeProps } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from '@/UI/content/ExampleSection/ExampleSection';
import { AppGlobalsProps } from '@/UI/base/settings/Globals';

export interface HomeProps extends rawHomeProps {
  sections: [ExampleSectionProps];
}

export const Home = ({
  page,
  globals,
}: {
  page: HomeProps;
  globals: AppGlobalsProps;
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
