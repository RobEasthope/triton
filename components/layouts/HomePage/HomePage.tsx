/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { Footer } from 'components/navigation/Footer/Footer';
import { Header, HeaderProps } from 'components/navigation/Header/Header';
import { FixedFooterLayout } from 'components/structural/FixedFooterLayout';
import { MainContentLayout } from 'components/structural/MainContentLayout';
import { RenderSections } from 'components/utils/structural/RenderSections/RenderSections';
import { Metadata } from 'components/utils/structural/Metadata/Metadata';
import { HomePage as HomePageProps, GlobalMetadata } from 'types/sanity-schema';
import { MobileNav } from 'components/navigation/MobileNav/MobileNav';
import { Sandbox } from 'components/utils/Sandbox/Sandbox';

export const HomePage = ({
  page,
  globals,
  preview,
}: {
  page: HomePageProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
  preview: boolean;
}) => (
  <>
    <Metadata page={page} globalMetadata={globals?.metadata} />

    <FixedFooterLayout>
      {Object.keys(globals?.header).length > 0 && (
        <>
          <MobileNav navigation={globals?.header?.navigation} />
          <Header
            logo={globals?.header?.logo}
            navigation={globals?.header?.navigation}
            preview={preview}
          />
        </>
      )}

      <MainContentLayout as="main">
        <Sandbox />
        {page?.sections && (
          <RenderSections sections={page?.sections} preview={preview} />
        )}
      </MainContentLayout>
      <Footer />
    </FixedFooterLayout>
  </>
);
