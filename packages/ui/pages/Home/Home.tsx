import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Metadata } from '@/UI/base/app/Metadata/Metadata';
import { Home as rawHomeProps, GlobalMetadata } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from '@/UI/content/ExampleSection/ExampleSection';

export interface HomeProps extends rawHomeProps {
  sections: [ExampleSectionProps];
}

export const Home = ({
  page,
  globals,
}: {
  page: HomeProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
}) => (
  <>
    <Metadata page={page} globalMetadata={globals?.metadata} />

    <FixedFooterLayout>
      {Object.keys(globals?.header)?.length > 0 ? (
        <Header
          logo={globals?.header?.logo}
          navigation={globals?.header?.navigation}
        />
      ) : null}

      <MainContentLayout as="main">
        {page?.sections && <RenderSections sections={page?.sections} />}
      </MainContentLayout>

      <Footer />
    </FixedFooterLayout>
  </>
);
