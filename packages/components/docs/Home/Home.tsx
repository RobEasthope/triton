/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { Footer } from 'navigation/Footer/Footer';
import { Header, HeaderProps } from 'navigation/Header/Header';
import { FixedFooterLayout } from 'structural/FixedFooterLayout';
import { MainContentLayout } from 'structural/MainContentLayout';
import { RenderSections } from 'base/app/RenderSections/RenderSections';
import { Metadata } from 'base/app/Metadata/Metadata';
import { Home as HomeProps, GlobalMetadata } from 'types/sanity-schema';

export const Home = ({
  page,
  globals,
  preview,
}: {
  page: HomeProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
  preview: boolean;
}) => (
  <>
    <Metadata page={page} globalMetadata={globals?.metadata} />

    <FixedFooterLayout>
      {Object.keys(globals?.header).length > 0 && (
        <>
          <Header
            logo={globals?.header?.logo}
            navigation={globals?.header?.navigation}
            preview={preview}
          />
        </>
      )}

      <MainContentLayout as="main">
        {page?.sections && (
          <RenderSections sections={page?.sections} preview={preview} />
        )}
      </MainContentLayout>

      <Footer />
    </FixedFooterLayout>
  </>
);
