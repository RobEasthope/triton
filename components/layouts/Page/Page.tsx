/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { Footer } from 'components/navigation/Footer/Footer';
import { HeaderProps } from 'components/navigation/Header/Header';
import { FixedFooterLayout } from 'components/structural/FixedFooterLayout';
import { MainContentLayout } from 'components/structural/MainContentLayout';
import { Metadata } from 'components/utils/structural/Metadata/Metadata';
import { RenderSections } from 'components/utils/structural/RenderSections/RenderSections';
import { Page as PageProps, GlobalMetadata } from 'types/sanity-schema';

export const Page = ({
  page,
  globals,
  preview,
}: {
  page: PageProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
  preview: boolean;
}) => (
  <>
    <Metadata page={page} globalMetadata={globals?.metadata} />
    <FixedFooterLayout>
      <MainContentLayout as="main">
        {page?.sections && (
          <RenderSections sections={page?.sections} preview={preview} />
        )}
      </MainContentLayout>
      <Footer />
    </FixedFooterLayout>
  </>
);
